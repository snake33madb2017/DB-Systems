import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react';
import type { SiteContent } from '../data/content';
import { AnimatedCounter } from './AnimatedCounter';
import { Reveal } from './Reveal';

interface HeroSectionProps {
  content: SiteContent;
  onOpenModal: () => void;
}

export function HeroSection({ content, onOpenModal }: HeroSectionProps) {
  const { hero, capabilities } = content;
  const platforms = capabilities.agnosticBanner.platforms;
  const [tickerIndex, setTickerIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % platforms.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [paused, platforms.length]);

  return (
    <section
      id="top"
      className="relative border-b border-line pt-16 bg-architectural-grid"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-x border-line bg-surface/94 px-6 py-14 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-line pb-5">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.14em] text-accent-ink">
              <Terminal className="h-3.5 w-3.5" strokeWidth={1.5} />
              {hero.eyebrow}
            </span>
            <span className="hidden font-mono text-[10px] tracking-[0.12em] text-ink-muted sm:inline">
              {hero.architectureNote}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
                {hero.subtitle}
              </p>

              {/* Live Multi-Platform Focus Strip */}
              <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="mt-7 inline-flex items-center gap-3 border border-line bg-page px-3.5 py-2 font-mono text-[11px]"
              >
                <span className="h-1.5 w-1.5 bg-accent animate-status-dot" aria-hidden="true" />
                <span className="text-ink-muted">STACK TARGET //</span>
                <span
                  key={platforms[tickerIndex]}
                  className="animate-ticker-fade font-medium text-accent-ink"
                >
                  {platforms[tickerIndex]}
                </span>
              </div>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="group inline-flex h-11 items-center gap-2.5 border border-accent bg-accent px-6 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover cursor-pointer"
                >
                  <span>{hero.primaryCta}</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </button>

                <a
                  href="#capabilities"
                  className="group inline-flex h-11 items-center gap-2 border border-line bg-page px-6 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-subtle"
                >
                  <span>{hero.secondaryCta}</span>
                  <ArrowDownRight
                    className="h-4 w-4 text-ink-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </div>

            {/* Editorial Studio Photograph */}
            <figure className="group border border-line bg-subtle lg:col-span-5">
              <div className="aspect-[16/10] w-full overflow-hidden lg:aspect-[4/3]">
                <img
                  src="/images/hero-studio.jpg"
                  alt={hero.imageAlt}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-line bg-page px-3.5 py-2.5 font-mono text-[10px] tracking-[0.12em] text-ink-muted">
                <span>FIG. 00 // STUDIO</span>
                <span>{hero.imageCaption}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Institutional CV-backed Telemetry Strip with Animated Counters */}
        <Reveal>
          <div className="grid grid-cols-1 gap-px border-x border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="group bg-surface p-6 transition-colors duration-200 hover:bg-active/60 sm:p-7"
              >
                <div className="font-mono text-2xl font-semibold tracking-tight text-accent-ink sm:text-3xl">
                  <AnimatedCounter value={metric.value} />
                </div>
                <div className="mt-2 text-xs font-semibold tracking-wide text-ink">
                  {metric.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
