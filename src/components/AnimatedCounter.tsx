import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
}

/**
 * Animates numeric KPI prefixes (e.g. "15+", "200+", "150+") smoothly once visible.
 * Non-numeric values (e.g. "Multi-OS") render cleanly as-is.
 */
export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';

  const [display, setDisplay] = useState<string>(target !== null ? `0${suffix}` : value);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (target === null) {
      setDisplay(value);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    const node = spanRef.current;
    if (!node) return;

    const runAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const duration = 900;
      const start = performance.now();

      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.max(1, Math.round(eased * target));
        setDisplay(`${current}${suffix}`);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplay(`${target}${suffix}`);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, suffix, value]);

  return <span ref={spanRef}>{display}</span>;
}
