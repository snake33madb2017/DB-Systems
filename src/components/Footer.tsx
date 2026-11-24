import { useState } from 'react';
import { Check, Download, Linkedin, Mail, Phone } from 'lucide-react';
import type { Locale, SiteContent } from '../data/content';
import type { PwaInstallState } from '../pwa/usePwaInstall';
import { BrandMark } from './BrandMark';

interface FooterProps {
  content: SiteContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  pwa: PwaInstallState;
}

export function Footer({ content, locale, onLocaleChange, pwa }: FooterProps) {
  const { brand, footer, nav } = content;
  const [showManualHint, setShowManualHint] = useState(false);

  const handleInstallClick = async () => {
    if (pwa.isInstalled) return;
    const result = await pwa.install();
    if (result === 'manual') {
      setShowManualHint((prev) => !prev);
    } else {
      setShowManualHint(false);
    }
  };

  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Summary */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <BrandMark className="h-7 w-7 shrink-0" />
              <div className="leading-none">
                <div className="font-mono text-xs font-semibold tracking-[0.18em] text-ink">
                  {brand.name}
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-wider text-ink-muted">
                  {brand.descriptor}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-xs leading-relaxed text-ink-secondary">
              {footer.summary}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.16em] text-ink-muted">
              {footer.navigationTitle}
            </div>
            <ul className="mt-4 space-y-2.5 text-xs text-ink-secondary">
              <li>
                <a href="#capabilities" className="transition-colors hover:text-ink">
                  {nav.capabilities}
                </a>
              </li>
              <li>
                <a href="#industries" className="transition-colors hover:text-ink">
                  {nav.industries}
                </a>
              </li>
              <li>
                <a href="#plans" className="transition-colors hover:text-ink">
                  {nav.plans}
                </a>
              </li>
              <li>
                <a href="#process" className="transition-colors hover:text-ink">
                  {nav.process}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.16em] text-ink-muted">
              {footer.contactTitle}
            </div>
            <ul className="mt-4 space-y-2.5 font-mono text-xs text-ink-secondary">
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent-ink"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-accent-ink" strokeWidth={1.5} />
                  <span>{brand.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent-ink"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-accent-ink" strokeWidth={1.5} />
                  <span>{brand.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent-ink"
                >
                  <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent-ink" strokeWidth={1.5} />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Discrete PWA Installation Block */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.16em] text-ink-muted">
              {footer.pwaTitle}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-secondary">
              {pwa.isInstalled ? footer.pwaInstalledText : footer.pwaReadyText}
            </p>

            <div className="mt-4">
              {pwa.isInstalled ? (
                <div className="inline-flex items-center gap-2 border border-line bg-surface px-3.5 py-2 font-mono text-[11px] text-ink">
                  <Check className="h-3.5 w-3.5 text-accent-ink" strokeWidth={1.5} />
                  <span>{footer.pwaInstalledBtn}</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleInstallClick}
                  className="inline-flex items-center gap-2 border border-line-strong bg-surface px-3.5 py-2 font-mono text-[11px] text-ink transition-colors hover:border-accent hover:text-accent-ink cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>{footer.pwaInstallBtn}</span>
                </button>
              )}
            </div>

            {showManualHint && !pwa.isInstalled && (
              <div className="mt-3 border border-line bg-surface p-3 text-[11px] leading-relaxed text-ink-secondary">
                <div className="font-mono text-[10px] font-medium text-ink">
                  {footer.pwaManualTitle}
                </div>
                <p className="mt-1.5">
                  {pwa.isIos ? footer.pwaManualIos : footer.pwaManualDesktop}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Executive Row */}
        <div className="flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row sm:items-center">
          <div className="font-mono text-[11px] text-ink-muted">{footer.copyright}</div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">
              {footer.operationsNote}
            </span>

            <div
              className="inline-flex items-center border border-line bg-surface p-0.5 font-mono text-[10px]"
              role="group"
              aria-label="Footer language selector"
            >
              <button
                type="button"
                onClick={() => onLocaleChange('es')}
                className={`px-2 py-0.5 transition-colors cursor-pointer ${
                  locale === 'es'
                    ? 'bg-accent font-semibold text-accent-fg'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => onLocaleChange('en')}
                className={`px-2 py-0.5 transition-colors cursor-pointer ${
                  locale === 'en'
                    ? 'bg-accent font-semibold text-accent-fg'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
