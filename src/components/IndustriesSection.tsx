import { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Package,
  Scale,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import type { IndustryId, SiteContent } from '../data/content';

interface IndustriesSectionProps {
  content: SiteContent;
  onSelectIndustryForBrief: (industryId: IndustryId) => void;
}

const INDUSTRY_ICONS: Record<IndustryId, LucideIcon> = {
  hospitality: UtensilsCrossed,
  healthcare: Stethoscope,
  legal: Scale,
  realestate: Building2,
  ecommerce: Package,
  fieldservices: Wrench,
};

export function IndustriesSection({
  content,
  onSelectIndustryForBrief,
}: IndustriesSectionProps) {
  const { industries } = content;
  const [activeId, setActiveId] = useState<IndustryId>('hospitality');

  const activeIndustry =
    industries.items.find((item) => item.id === activeId) ?? industries.items[0];
  const ActiveIcon = INDUSTRY_ICONS[activeIndustry.id];

  return (
    <section id="industries" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-8 border-b border-line pb-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] text-ink-muted">
              <span className="font-semibold text-accent-ink">{industries.sectionCode}</span>
              <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
              <span>{industries.sectionLabel}</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
              {industries.title}
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-secondary sm:text-base">
              {industries.intro}
            </p>
          </div>
        </div>

        {/* Architectural Sector Selector + Detail Workspace */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-12">
          {/* Left Index Rail */}
          <div
            className="flex flex-row overflow-x-auto bg-subtle lg:col-span-4 lg:flex-col lg:overflow-visible lg:divide-y lg:divide-line"
            role="tablist"
            aria-label={industries.sectionLabel}
          >
            {industries.items.map((item) => {
              const Icon = INDUSTRY_ICONS[item.id];
              const isSelected = item.id === activeIndustry.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(item.id)}
                  className={`group flex shrink-0 items-center justify-between gap-4 border-r border-line px-5 py-4 text-left transition-colors lg:w-full lg:border-r-0 lg:px-6 lg:py-5 cursor-pointer ${
                    isSelected
                      ? 'bg-active text-ink'
                      : 'bg-surface text-ink-secondary hover:bg-subtle hover:text-ink'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        isSelected ? 'text-accent-ink' : 'text-ink-muted group-hover:text-ink'
                      }`}
                      strokeWidth={1.5}
                    />
                    <div>
                      <div
                        className={`font-mono text-[10px] tracking-[0.14em] ${
                          isSelected ? 'font-medium text-accent-ink' : 'text-ink-muted'
                        }`}
                      >
                        {item.code}
                      </div>
                      <div className="mt-0.5 text-sm font-medium whitespace-nowrap lg:whitespace-normal">
                        {item.shortName}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`hidden h-2 w-0.5 shrink-0 lg:inline-block ${
                      isSelected ? 'bg-accent' : 'bg-transparent'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel */}
          <div
            role="tabpanel"
            className="flex flex-col justify-between bg-surface p-6 sm:p-9 lg:col-span-8"
          >
            <div>
              {/* Active Sector Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
                <div>
                  <div className="font-mono text-[11px] font-medium tracking-[0.14em] text-accent-ink">
                    {activeIndustry.code} // {activeIndustry.markets}
                  </div>
                  <h3 className="mt-2 flex items-center gap-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    <ActiveIcon className="h-5 w-5 text-accent-ink" strokeWidth={1.5} />
                    <span>{activeIndustry.title}</span>
                  </h3>
                </div>
              </div>

              {/* Sector Editorial Photograph */}
              <figure className="mt-6 border border-line bg-subtle">
                <div className="aspect-[16/8] w-full overflow-hidden sm:aspect-[21/9]">
                  <img
                    key={activeIndustry.id}
                    src={activeIndustry.image}
                    alt={activeIndustry.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between border-t border-line bg-page px-3.5 py-2 font-mono text-[10px] tracking-[0.12em] text-ink-muted">
                  <span>{activeIndustry.code} // {activeIndustry.shortName.toUpperCase()}</span>
                  <span className="hidden sm:inline">{activeIndustry.markets}</span>
                </figcaption>
              </figure>

              {/* Problem & Solution Two-Column Spec */}
              <div className="mt-7 grid grid-cols-1 gap-6 border-b border-line pb-7 md:grid-cols-2">
                <div>
                  <div className="font-mono text-[11px] tracking-[0.12em] text-ink-muted">
                    {activeIndustry.problemLabel}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                    {activeIndustry.problem}
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[11px] font-medium tracking-[0.12em] text-accent-ink">
                    {activeIndustry.solutionLabel}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink">
                    {activeIndustry.solution}
                  </p>
                </div>
              </div>

              {/* Dedicated 4-Pillar Operational Architecture for Hospitality */}
              {activeIndustry.hospitalityPillars ? (
                <div className="mt-7">
                  <div className="mb-4 font-mono text-[11px] tracking-[0.14em] text-ink-muted">
                    {industries.pillarsHeading}
                  </div>
                  <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
                    {activeIndustry.hospitalityPillars.map((pillar) => (
                      <div key={pillar.code} className="bg-page p-5">
                        <div className="font-mono text-[11px] font-medium text-accent-ink">
                          {pillar.code}
                        </div>
                        <h4 className="mt-1.5 text-sm font-semibold text-ink">
                          {pillar.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                          {pillar.description}
                        </p>
                        <ul className="mt-4 space-y-2 border-t border-line pt-3.5">
                          {pillar.deliverables.map((del) => (
                            <li
                              key={del}
                              className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-secondary"
                            >
                              <span
                                className="mt-1.5 h-1 w-1 shrink-0 bg-accent"
                                aria-hidden="true"
                              />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Key Automations List for the other 5 high-demand niches */
                <div className="mt-7">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-ink-muted">
                    {industries.architectureHeading}
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {activeIndustry.automations.map((auto) => (
                      <li
                        key={auto}
                        className="flex items-start gap-3 border border-line bg-page p-4 text-sm leading-relaxed text-ink-secondary"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 bg-accent"
                          aria-hidden="true"
                        />
                        <span>{auto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Platforms & Operational Impact */}
              <div className="mt-7 grid grid-cols-1 gap-6 border-t border-line pt-6 md:grid-cols-2">
                <div>
                  <div className="font-mono text-[11px] tracking-[0.12em] text-ink-muted">
                    {industries.targetsHeading}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeIndustry.stackTargets.map((target) => (
                      <span
                        key={target}
                        className="border border-line bg-page px-2.5 py-1 font-mono text-[11px] text-ink"
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[11px] tracking-[0.12em] text-ink-muted">
                    {industries.impactHeading}
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-ink-secondary">
                    {activeIndustry.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Sector Action */}
            <div className="mt-8 flex justify-end border-t border-line pt-6">
              <button
                type="button"
                onClick={() => onSelectIndustryForBrief(activeIndustry.id)}
                className="inline-flex items-center gap-2 border border-accent bg-transparent px-5 py-2.5 text-xs font-medium text-accent-ink transition-colors hover:bg-accent hover:text-accent-fg cursor-pointer"
              >
                <span>{industries.ctaText}</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
