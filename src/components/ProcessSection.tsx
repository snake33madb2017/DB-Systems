import { ArrowUpRight } from 'lucide-react';
import type { SiteContent } from '../data/content';

interface ProcessSectionProps {
  content: SiteContent;
  onOpenModal: () => void;
}

export function ProcessSection({ content, onOpenModal }: ProcessSectionProps) {
  const { process, ctaBand } = content;

  return (
    <section id="process" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-8 border-b border-line pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] text-ink-muted">
              <span className="font-semibold text-accent-ink">{process.sectionCode}</span>
              <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
              <span>{process.sectionLabel}</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
              {process.title}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-secondary sm:text-base">
              {process.intro}
            </p>
          </div>
        </div>

        {/* 4-Phase Precision Grid */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step) => (
            <div key={step.code} className="flex flex-col justify-between bg-surface p-6 sm:p-7">
              <div>
                <div className="flex items-baseline justify-between border-b border-line pb-4">
                  <span className="font-mono text-2xl font-semibold text-accent-ink">
                    {step.code}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-ink-muted">
                    {step.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                  {step.description}
                </p>
              </div>

              <div className="mt-7 border-t border-line pt-4">
                <div className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">
                  {process.deliverablesLabel}
                </div>
                <ul className="mt-2.5 space-y-1.5">
                  {step.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-mono text-[11px] text-ink-secondary"
                    >
                      <span className="text-accent-ink">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Executive CTA Band with Editorial Architecture Still-Life */}
        <div className="mt-16 grid grid-cols-1 border border-line bg-active lg:grid-cols-12">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-7 lg:p-12">
            <div>
              <div className="font-mono text-[11px] font-medium tracking-[0.14em] text-accent-ink">
                {ctaBand.code}
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {ctaBand.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-secondary">
                {ctaBand.description}
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2.5 border border-accent bg-accent px-6 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover cursor-pointer"
              >
                <span>{ctaBand.button}</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <figure className="border-t border-line bg-subtle lg:col-span-5 lg:border-l lg:border-t-0">
            <div className="h-full min-h-[220px] w-full overflow-hidden">
              <img
                src="/images/process-workshop.jpg"
                alt={ctaBand.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
