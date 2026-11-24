import { ArrowDownRight, ArrowUpRight, Terminal } from 'lucide-react';
import type { SiteContent } from '../data/content';

interface HeroSectionProps {
  content: SiteContent;
  onOpenModal: () => void;
}

export function HeroSection({ content, onOpenModal }: HeroSectionProps) {
  const { hero } = content;

  return (
    <section
      id="top"
      className="relative border-b border-line pt-16 bg-architectural-grid"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-x border-line bg-surface/94 px-6 py-16 sm:px-12 sm:py-24 lg:py-28">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line pb-6">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.14em] text-accent-ink">
              <Terminal className="h-3.5 w-3.5" strokeWidth={1.5} />
              {hero.eyebrow}
            </span>
          </div>

          <div className="mt-10 max-w-4xl">
            <h1 className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {hero.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg">
              {hero.subtitle}
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onOpenModal}
              className="inline-flex h-11 items-center gap-2.5 border border-accent bg-accent px-6 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover cursor-pointer"
            >
              <span>{hero.primaryCta}</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <a
              href="#capabilities"
              className="inline-flex h-11 items-center gap-2 border border-line bg-page px-6 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-subtle"
            >
              <span>{hero.secondaryCta}</span>
              <ArrowDownRight className="h-4 w-4 text-ink-muted" strokeWidth={1.5} />
            </a>
          </div>

          <p className="mt-10 font-mono text-[11px] tracking-[0.12em] text-ink-muted">
            {hero.architectureNote}
          </p>
        </div>

        {/* Institutional CV-backed Telemetry Strip */}
        <div className="grid grid-cols-1 gap-px border-x border-t border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {hero.metrics.map((metric) => (
            <div key={metric.label} className="bg-surface p-6 sm:p-7">
              <div className="font-mono text-2xl font-semibold tracking-tight text-accent-ink sm:text-3xl">
                {metric.value}
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
      </div>
    </section>
  );
}
