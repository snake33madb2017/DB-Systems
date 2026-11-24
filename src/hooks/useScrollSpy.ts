import { useEffect, useState } from 'react';

const SECTION_IDS = ['capabilities', 'industries', 'plans', 'process'] as const;
export type SectionId = (typeof SECTION_IDS)[number] | null;

export function useScrollSpy() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionId>(null);

  useEffect(() => {
    let rafId = 0;

    const updateScroll = () => {
      rafId = 0;
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100)) : 0;
      setProgress(pct);

      if (window.scrollY < 160) {
        setActiveSection(null);
        return;
      }

      const probeY = window.scrollY + 140;
      let current: SectionId = null;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probeY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { progress, activeSection };
}
