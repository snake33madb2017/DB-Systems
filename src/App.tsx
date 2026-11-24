import { useEffect, useState } from 'react';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ConsultationModal } from './components/ConsultationModal';
import { EngagementModelsSection } from './components/EngagementModelsSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IndustriesSection } from './components/IndustriesSection';
import { Navbar, type Theme } from './components/Navbar';
import { ProcessSection } from './components/ProcessSection';
import {
  CONTENT,
  type IndustryId,
  type Locale,
  type PlanId,
} from './data/content';
import { usePwaInstall } from './pwa/usePwaInstall';

const LOCALE_STORAGE_KEY = 'db-systems-locale';
const THEME_STORAGE_KEY = 'db-systems-theme';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es';
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === 'es' || saved === 'en') return saved;
  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return 'light';
}

export function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<PlanId>('turnkey');
  const [modalIndustry, setModalIndustry] = useState<IndustryId>('hospitality');

  const pwa = usePwaInstall();
  const content = CONTENT[locale];

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.title = content.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', content.meta.description);
    }
  }, [locale, content.meta.title, content.meta.description]);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'dark' ? '#09090B' : '#FAFAF9');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const openGeneralModal = () => {
    setModalOpen(true);
  };

  const openModalWithPlan = (planId: PlanId) => {
    setModalPlan(planId);
    setModalOpen(true);
  };

  const openModalWithIndustry = (industryId: IndustryId) => {
    setModalIndustry(industryId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-page text-ink transition-colors duration-200">
      <Navbar
        content={content}
        locale={locale}
        onLocaleChange={setLocale}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenModal={openGeneralModal}
        canPromptInstall={pwa.canPrompt && !pwa.isInstalled}
        onInstallPwa={() => {
          void pwa.install();
        }}
      />

      <main>
        <HeroSection content={content} onOpenModal={openGeneralModal} />
        <CapabilitiesSection content={content} />
        <IndustriesSection
          content={content}
          onSelectIndustryForBrief={openModalWithIndustry}
        />
        <EngagementModelsSection
          content={content}
          onSelectPlan={openModalWithPlan}
        />
        <ProcessSection content={content} onOpenModal={openGeneralModal} />
      </main>

      <Footer
        content={content}
        locale={locale}
        onLocaleChange={setLocale}
        pwa={pwa}
      />

      <ConsultationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        content={content}
        initialPlan={modalPlan}
        initialIndustry={modalIndustry}
      />
    </div>
  );
}

export default App;
