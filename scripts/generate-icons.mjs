import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

// Minimal zero-dependency PNG generator for crisp geometric DB Systems PWA icons
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) {
      c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
    }
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;
  let t = 0;
  if (lenSq > 0) {
    t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lenSq));
  }
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function distToRightArc(px, py, cx, cy, r) {
  const dx = px - cx;
  const dy = py - cy;
  if (dx >= 0) {
    return Math.abs(Math.hypot(dx, dy) - r);
  }
  // Closest endpoint of right semicircle is top (cx, cy-r) or bottom (cx, cy+r)
  return Math.min(Math.hypot(px - cx, py - (cy - r)), Math.hypot(px - cx, py - (cy + r)));
}

function renderIconPng(size, maskable = false) {
  const pixels = Buffer.alloc(size * size * 4);
  const setPixel = (x, y, r, g, b, a = 255) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    const idx = (y * size + x) * 4;
    pixels[idx] = r;
    pixels[idx + 1] = g;
    pixels[idx + 2] = b;
    pixels[idx + 3] = a;
  };

  // Fill background Deep Petroleum Blue #0F3D5E
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      setPixel(x, y, 15, 61, 94, 255);
    }
  }

  const scale = maskable ? 0.76 : 1.0;
  const offset = (1 - scale) * 0.5 * size;
  const toDesign = (px, py) => [
    ((px - offset) / (size * scale)) * 512,
    ((py - offset) / (size * scale)) * 512,
  ];

  const strokeHalf = 13;

  const isOnD = (x, y) => {
    // Vertical bar x=96, y=152..360
    if (distToSegment(x, y, 96, 152, 96, 360) <= strokeHalf) return true;
    // Top bar y=152, x=96..164
    if (distToSegment(x, y, 96, 152, 164, 152) <= strokeHalf) return true;
    // Bottom bar y=360, x=96..164
    if (distToSegment(x, y, 96, 360, 164, 360) <= strokeHalf) return true;
    // Right rounded vertical segment for D (top arc + mid straight + bottom arc)
    if (x >= 164 && y <= 238 && Math.abs(Math.hypot(x - 164, y - 238) - 86) <= strokeHalf) return true;
    if (x >= 164 && y >= 274 && Math.abs(Math.hypot(x - 164, y - 274) - 86) <= strokeHalf) return true;
    if (distToSegment(x, y, 250, 238, 250, 274) <= strokeHalf) return true;
    return false;
  };

  const isOnB = (x, y) => {
    // Vertical spine x=288, y=152..360
    if (distToSegment(x, y, 288, 152, 288, 360) <= strokeHalf) return true;
    // Top bar y=152, x=288..358
    if (distToSegment(x, y, 288, 152, 358, 152) <= strokeHalf) return true;
    // Middle bar y=252, x=288..366
    if (distToSegment(x, y, 288, 252, 366, 252) <= strokeHalf) return true;
    // Bottom bar y=360, x=288..366
    if (distToSegment(x, y, 288, 360, 366, 360) <= strokeHalf) return true;
    // Upper bowl right arc: center (358, 202), r=50
    if (distToRightArc(x, y, 358, 202, 50) <= strokeHalf) return true;
    // Lower bowl right arc: center (366, 306), r=54
    if (distToRightArc(x, y, 366, 306, 54) <= strokeHalf) return true;
    return false;
  };

  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const [x, y] = toDesign(px + 0.5, py + 0.5);

      if (!maskable) {
        const frameOuter = x >= 34 && x <= 478 && y >= 34 && y <= 478;
        const frameInner = x >= 40 && x <= 472 && y >= 40 && y <= 472;
        if (frameOuter && !frameInner) {
          setPixel(px, py, 45, 94, 130, 255); // #2D5E82
        }
      }

      if (x >= 392 && x <= 424 && y >= 84 && y <= 116) {
        setPixel(px, py, 147, 189, 217, 255); // #93BDD9
      }

      if (isOnD(x, y) || isOnB(x, y)) {
        setPixel(px, py, 250, 250, 250, 255); // #FAFAFA
      }
    }
  }

  const stride = size * 4;
  const raw = Buffer.alloc((stride + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0;
    pixels.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const compressed = zlib.deflateSync(raw, { level: 9 });

  return Buffer.concat([
    signature,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0)),
  ]);
}

const outDir = path.resolve(process.cwd(), 'public', 'icons');
fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(path.join(outDir, 'icon-192.png'), renderIconPng(192, false));
fs.writeFileSync(path.join(outDir, 'icon-512.png'), renderIconPng(512, false));
fs.writeFileSync(path.join(outDir, 'icon-maskable-512.png'), renderIconPng(512, true));
fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), renderIconPng(180, false));
console.log('Generated DB Systems PNG PWA icons in public/icons/');
