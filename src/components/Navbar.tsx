import { useState } from 'react';
import { ArrowUpRight, Download, Menu, Moon, Sun, X } from 'lucide-react';
import type { Locale, SiteContent } from '../data/content';
import { BrandMark } from './BrandMark';

export type Theme = 'light' | 'dark';

interface NavbarProps {
  content: SiteContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  theme: Theme;
  onToggleTheme: () => void;
  onOpenModal: () => void;
  canPromptInstall: boolean;
  onInstallPwa: () => void;
}

export function Navbar({
  content,
  locale,
  onLocaleChange,
  theme,
  onToggleTheme,
  onOpenModal,
  canPromptInstall,
  onInstallPwa,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#capabilities', label: content.nav.capabilities },
    { href: '#industries', label: content.nav.industries },
    { href: '#plans', label: content.nav.plans },
    { href: '#process', label: content.nav.process },
  ];

  const themeToggleLabel =
    locale === 'es'
      ? theme === 'light'
        ? 'Cambiar a modo oscuro'
        : 'Cambiar a modo claro'
      : theme === 'light'
        ? 'Switch to dark mode'
        : 'Switch to light mode';

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-line bg-page/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        >
          <BrandMark className="h-7 w-7 shrink-0" />
          <div className="flex flex-col leading-none">
            <span className="font-mono text-xs font-semibold tracking-[0.18em] text-ink">
              {content.brand.name}
            </span>
            <span className="mt-1 hidden font-mono text-[10px] tracking-wider text-ink-muted sm:inline">
              {content.brand.regions.toUpperCase()}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label={content.nav.menuLabel}>
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-ink-secondary transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {canPromptInstall && (
            <button
              type="button"
              onClick={onInstallPwa}
              title={content.footer.pwaInstallBtn}
              className="hidden h-8 items-center gap-1.5 border border-line bg-surface px-2.5 font-mono text-[11px] text-ink-secondary transition-colors hover:border-line-strong hover:text-ink lg:inline-flex cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span>PWA</span>
            </button>
          )}

          {/* Discrete Light / Dark toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            title={themeToggleLabel}
            aria-label={themeToggleLabel}
            className="inline-flex h-8 w-8 items-center justify-center border border-line bg-surface text-ink-secondary transition-colors hover:border-line-strong hover:text-ink cursor-pointer"
          >
            {theme === 'light' ? (
              <Moon className="h-3.5 w-3.5" strokeWidth={1.5} />
            ) : (
              <Sun className="h-3.5 w-3.5" strokeWidth={1.5} />
            )}
          </button>

          {/* ES | EN segmented selector */}
          <div
            className="inline-flex h-8 items-center border border-line bg-surface p-0.5 font-mono text-[11px]"
            role="group"
            aria-label="Language selector"
          >
            <button
              type="button"
              onClick={() => onLocaleChange('es')}
              aria-pressed={locale === 'es'}
              className={`h-full px-2.5 transition-colors cursor-pointer ${
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
              aria-pressed={locale === 'en'}
              className={`h-full px-2.5 transition-colors cursor-pointer ${
                locale === 'en'
                  ? 'bg-accent font-semibold text-accent-fg'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenModal}
            className="hidden h-8 items-center gap-1.5 border border-accent bg-accent px-3.5 text-xs font-medium text-accent-fg transition-colors hover:bg-accent-hover sm:inline-flex cursor-pointer"
          >
            <span>{content.nav.cta}</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-8 w-8 items-center justify-center border border-line bg-surface text-ink-secondary transition-colors hover:border-line-strong hover:text-ink md:hidden cursor-pointer"
            aria-label={content.nav.menuLabel}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-line bg-page md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col divide-y divide-line px-5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <div className="py-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenModal();
                }}
                className="flex w-full items-center justify-center gap-2 border border-accent bg-accent px-4 py-2.5 text-xs font-medium text-accent-fg transition-colors hover:bg-accent-hover cursor-pointer"
              >
                <span>{content.nav.cta}</span>
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
