import {
  Cloud,
  Code2,
  Cpu,
  Layers,
  MonitorSmartphone,
  ShieldCheck,
  Workflow,
  Server,
} from 'lucide-react';
import type { SiteContent } from '../data/content';

interface CapabilitiesSectionProps {
  content: SiteContent;
}

const DOMAIN_ICONS = [MonitorSmartphone, Code2, Workflow, Server];
const TRACK_ICONS = [Cloud, ShieldCheck, Layers, Cpu];

export function CapabilitiesSection({ content }: CapabilitiesSectionProps) {
  const { capabilities } = content;

  return (
    <section id="capabilities" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-8 border-b border-line pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] text-ink-muted">
              <span className="font-semibold text-accent-ink">{capabilities.sectionCode}</span>
              <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
              <span>{capabilities.sectionLabel}</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
              {capabilities.title}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-secondary sm:text-base">
              {capabilities.intro}
            </p>
          </div>
        </div>

        {/* Editorial Architecture Visual */}
        <figure className="mt-12 border border-line bg-subtle">
          <div className="aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
            <img
              src="/images/capabilities-architecture.jpg"
              alt={capabilities.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-surface px-4 py-2.5 font-mono text-[10px] tracking-[0.12em] text-ink-muted">
            <span>FIG. 01 // ENGINEERING ENVIRONMENT</span>
            <span>{capabilities.imageCaption}</span>
          </figcaption>
        </figure>

        {/* Multi-Platform & Stack-Agnostic Engineering Doctrine */}
        <div className="mt-8 border border-line bg-surface">
          <div className="grid grid-cols-1 divide-y divide-line lg:grid-cols-12 lg:divide-x lg:divide-y-0">
            <div className="p-6 sm:p-8 lg:col-span-7">
              <div className="font-mono text-[11px] font-medium tracking-[0.14em] text-accent-ink">
                {capabilities.agnosticBanner.code}
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {capabilities.agnosticBanner.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                {capabilities.agnosticBanner.description}
              </p>
            </div>

            <div className="flex flex-col justify-between bg-subtle/60 p-6 sm:p-8 lg:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.14em] text-ink-muted">
                TARGET ENVIRONMENTS
              </div>
              <div className="mt-5 grid grid-cols-2 gap-px border border-line bg-line">
                {capabilities.agnosticBanner.platforms.map((platform) => (
                  <div
                    key={platform}
                    className="bg-surface px-3.5 py-3 font-mono text-xs text-ink"
                  >
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CV-Backed Institutional Track Record */}
        <div className="mt-14">
          <div className="mb-5 font-mono text-xs tracking-[0.16em] text-ink-muted">
            {capabilities.trackRecordTitle}
          </div>
          <div className="grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
            {capabilities.trackRecord.map((item, idx) => {
              const Icon = TRACK_ICONS[idx % TRACK_ICONS.length];
              return (
                <article
                  key={item.code}
                  className="flex flex-col justify-between bg-surface p-6 transition-colors hover:bg-subtle/60 sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-line pb-4">
                      <span className="font-mono text-[11px] tracking-[0.12em] text-ink-muted">
                        <span className="font-medium text-accent-ink">{item.code}</span> // {item.sector}
                      </span>
                      <Icon className="h-4 w-4 text-accent-ink" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-line pt-4 font-mono text-[11px] text-ink-muted">
                    {item.proof}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* 4-Domain Technical Capability Matrix */}
        <div className="mt-16">
          <div className="flex flex-col justify-between gap-3 border-b border-line pb-5 sm:flex-row sm:items-end">
            <h3 className="font-mono text-xs font-semibold tracking-[0.16em] text-ink">
              {capabilities.matrixTitle}
            </h3>
            <p className="max-w-xl text-xs text-ink-muted sm:text-right">
              {capabilities.matrixSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border-x border-b border-line bg-line lg:grid-cols-2">
            {capabilities.domains.map((domain, idx) => {
              const Icon = DOMAIN_ICONS[idx % DOMAIN_ICONS.length];
              return (
                <div key={domain.code} className="flex flex-col justify-between bg-surface p-6 sm:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-medium text-accent-ink">
                        {domain.code}
                      </span>
                      <Icon className="h-4 w-4 text-ink-muted" strokeWidth={1.5} />
                    </div>
                    <h4 className="mt-4 text-lg font-semibold tracking-tight text-ink">
                      {domain.title}
                    </h4>
                    <p className="mt-2 text-sm text-ink-secondary">{domain.summary}</p>

                    <ul className="mt-6 space-y-3 border-t border-line pt-5">
                      {domain.items.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ink-secondary"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 bg-accent"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-line pt-4 font-mono text-[11px] leading-relaxed text-ink-muted">
                    {domain.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
