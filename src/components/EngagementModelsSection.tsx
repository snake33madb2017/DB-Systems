import { ArrowUpRight, Check } from 'lucide-react';
import type { PlanId, SiteContent } from '../data/content';
import { Reveal } from './Reveal';

interface EngagementModelsSectionProps {
  content: SiteContent;
  onSelectPlan: (planId: PlanId) => void;
}

export function EngagementModelsSection({
  content,
  onSelectPlan,
}: EngagementModelsSectionProps) {
  const { plans } = content;

  return (
    <section id="plans" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="grid grid-cols-1 gap-8 border-b border-line pb-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 font-mono text-xs tracking-[0.16em] text-ink-muted">
                <span className="font-semibold text-accent-ink">{plans.sectionCode}</span>
                <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
                <span>{plans.sectionLabel}</span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
                {plans.title}
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-secondary sm:text-base">
                {plans.intro}
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3-Column Comparative Executive Grid */}
        <Reveal delayMs={70}>
          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-3">
            {plans.items.map((plan) => {
              const isTurnkey = plan.id === 'turnkey';
              return (
                <article
                  key={plan.id}
                  className={`group relative flex flex-col justify-between p-6 transition-colors duration-200 sm:p-8 ${
                    isTurnkey ? 'bg-active' : 'bg-surface hover:bg-subtle/60'
                  }`}
                >
                  {/* Precision top accent bar */}
                  <span
                    className={`absolute inset-x-0 top-0 h-[2px] origin-left bg-accent transition-transform duration-300 ${
                      isTurnkey ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />

                  <div>
                    <div className="flex items-center justify-between border-b border-line pb-4">
                      <span className="font-mono text-xs font-semibold text-accent-ink">
                        {plan.code}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.12em] text-ink-muted">
                        {plan.billingTag}
                      </span>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold tracking-tight text-ink">
                        {plan.name}
                      </h3>
                      <div className="mt-1 font-mono text-xs text-ink-muted">
                        {plan.subtitle}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                        {plan.summary}
                      </p>
                    </div>

                    <div className="mt-7 border-t border-line pt-5">
                      <div className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">
                        {plans.scopeLabel}
                      </div>
                      <ul className="mt-4 space-y-3">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-secondary"
                          >
                            <Check
                              className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-ink"
                              strokeWidth={1.5}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 space-y-4 border-t border-line pt-5">
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">
                          {plans.ownershipLabel}
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink">
                          {plan.ownership}
                        </p>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">
                          {plans.idealForLabel}
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">
                          {plan.idealFor}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-line pt-6">
                    <button
                      type="button"
                      onClick={() => onSelectPlan(plan.id)}
                      className={`group/btn flex w-full items-center justify-between px-4 py-3 text-xs font-medium transition-colors cursor-pointer ${
                        isTurnkey
                          ? 'border border-accent bg-accent text-accent-fg hover:bg-accent-hover'
                          : 'border border-line-strong bg-surface text-ink hover:border-accent hover:text-accent-ink'
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        <p className="mt-6 font-mono text-[11px] leading-relaxed text-ink-muted">
          {plans.footnote}
        </p>
      </div>
    </section>
  );
}
