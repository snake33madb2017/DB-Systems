import { useState } from 'react';
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
import { Reveal } from './Reveal';

interface CapabilitiesSectionProps {
  content: SiteContent;
}

const DOMAIN_ICONS = [MonitorSmartphone, Code2, Workflow, Server];
const TRACK_ICONS = [Cloud, ShieldCheck, Layers, Cpu];

// Maps each of the 6 target environments to its primary Capability Matrix domain index (0..3)
const PLATFORM_TO_DOMAIN_INDEX = [0, 0, 0, 1, 2, 3];

export function CapabilitiesSection({ content }: CapabilitiesSectionProps) {
  const { capabilities } = content;
  const [highlightedDomain, setHighlightedDomain] = useState<number | null>(null);
  const [selectedPlatformIdx, setSelectedPlatformIdx] = useState<number | null>(null);

  const handlePlatformSelect = (idx: number) => {
    if (selectedPlatformIdx === idx) {
      setSelectedPlatformIdx(null);
      setHighlightedDomain(null);
    } else {
      setSelectedPlatformIdx(idx);
      setHighlightedDomain(PLATFORM_TO_DOMAIN_INDEX[idx] ?? null);
    }
  };

  return (
    <section id="capabilities" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <Reveal>
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
        </Reveal>

        {/* Editorial Architecture Visual */}
        <Reveal delayMs={60}>
          <figure className="group mt-12 border border-line bg-subtle">
            <div className="aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
              <img
                src="/images/capabilities-architecture.jpg"
                alt={capabilities.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-surface px-4 py-2.5 font-mono text-[10px] tracking-[0.12em] text-ink-muted">
              <span>FIG. 01 // ENGINEERING ENVIRONMENT</span>
              <span>{capabilities.imageCaption}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Multi-Platform & Stack-Agnostic Engineering Doctrine */}
        <Reveal delayMs={90}>
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
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.14em] text-ink-muted">
                  <span>TARGET ENVIRONMENTS</span>
                  <span className="text-[10px] text-accent-ink">INTERACTIVE</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-px border border-line bg-line">
                  {capabilities.agnosticBanner.platforms.map((platform, idx) => {
                    const isSelected = selectedPlatformIdx === idx;
                    return (
                      <button
                        key={platform}
                        type="button"
                        onClick={() => handlePlatformSelect(idx)}
                        onMouseEnter={() => {
                          if (selectedPlatformIdx === null) {
                            setHighlightedDomain(PLATFORM_TO_DOMAIN_INDEX[idx] ?? null);
                          }
                        }}
                        onMouseLeave={() => {
                          if (selectedPlatformIdx === null) {
                            setHighlightedDomain(null);
                          }
                        }}
                        className={`px-3.5 py-3 text-left font-mono text-xs transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-accent font-medium text-accent-fg'
                            : 'bg-surface text-ink hover:bg-active hover:text-accent-ink'
                        }`}
                      >
                        {platform}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CV-Backed Institutional Track Record */}
        <Reveal delayMs={80}>
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
                    className="group relative flex flex-col justify-between bg-surface p-6 transition-colors duration-200 hover:bg-active/45 sm:p-8"
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="flex items-center justify-between border-b border-line pb-4">
                        <span className="font-mono text-[11px] tracking-[0.12em] text-ink-muted">
                          <span className="font-medium text-accent-ink">{item.code}</span> // {item.sector}
                        </span>
                        <Icon
                          className="h-4 w-4 text-accent-ink transition-transform duration-300 group-hover:scale-110"
                          strokeWidth={1.5}
                        />
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
        </Reveal>

        {/* 4-Domain Technical Capability Matrix */}
        <Reveal delayMs={80}>
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
                const isHighlighted = highlightedDomain === idx;
                const isDimmed = highlightedDomain !== null && !isHighlighted;
                return (
                  <div
                    key={domain.code}
                    className={`relative flex flex-col justify-between p-6 transition-all duration-300 sm:p-8 ${
                      isHighlighted
                        ? 'bg-active'
                        : isDimmed
                          ? 'bg-surface opacity-70'
                          : 'bg-surface hover:bg-subtle/60'
                    }`}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-[2px] bg-accent transition-opacity duration-300 ${
                        isHighlighted ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden="true"
                    />
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-medium text-accent-ink">
                          {domain.code}
                        </span>
                        <Icon
                          className={`h-4 w-4 transition-colors ${
                            isHighlighted ? 'text-accent-ink' : 'text-ink-muted'
                          }`}
                          strokeWidth={1.5}
                        />
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
        </Reveal>
      </div>
    </section>
  );
}
