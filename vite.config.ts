import fs from 'node:fs';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Injects the exact list of emitted static assets into dist/sw.js during
 * production builds so the PWA precaches all hashed JS/CSS/icon bundles
 * for instant load and full offline availability.
 */
function pwaPrecacheInjector(): Plugin {
  return {
    name: 'pwa-precache-injector',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const swPath = path.join(distDir, 'sw.js');
      if (!fs.existsSync(swPath)) return;

      const assets: string[] = ['/', '/index.html', '/manifest.json'];
      const walk = (dir: string) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(full);
          } else {
            const rel = '/' + path.relative(distDir, full).replace(/\\/g, '/');
            if (rel !== '/sw.js' && !rel.endsWith('.map')) {
              if (!assets.includes(rel)) assets.push(rel);
            }
          }
        }
      };

      walk(distDir);

      const buildVersion = `db-systems-${Date.now().toString(36)}`;
      let swCode = fs.readFileSync(swPath, 'utf-8');
      swCode = swCode.replace(
        "/*__PWA_CACHE_VERSION__*/ 'db-systems-dev-v1'",
        JSON.stringify(buildVersion)
      );
      swCode = swCode.replace(
        "/*__PWA_PRECACHE_ASSETS__*/ ['/', '/index.html', '/manifest.json', '/icons/icon.svg']",
        JSON.stringify(assets)
      );
      fs.writeFileSync(swPath, swCode, 'utf-8');
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), pwaPrecacheInjector()],
});
