import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  X,
} from 'lucide-react';
import type { IndustryId, PlanId, SiteContent } from '../data/content';

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
  content: SiteContent;
  initialPlan?: PlanId;
  initialIndustry?: IndustryId;
}

export function ConsultationModal({
  open,
  onClose,
  content,
  initialPlan = 'turnkey',
  initialIndustry = 'hospitality',
}: ConsultationModalProps) {
  const { modal, brand, plans, industries } = content;

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [market, setMarket] = useState<'spain' | 'us' | 'both'>('spain');
  const [plan, setPlan] = useState<PlanId>(initialPlan);
  const [industry, setIndustry] = useState<IndustryId>(initialIndustry);
  const [brief, setBrief] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPlan(initialPlan);
  }, [initialPlan]);

  useEffect(() => {
    setIndustry(initialIndustry);
  }, [initialIndustry]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const selectedPlanLabel =
    plans.items.find((p) => p.id === plan)?.name ?? plan;
  const selectedIndustryLabel =
    industries.items.find((i) => i.id === industry)?.title ?? industry;
  const selectedMarketLabel = modal.markets[market];

  const buildSummaryText = () => {
    const lines = [
      `${brand.name} — ${modal.title}`,
      '----------------------------------------',
      `${modal.fields.name}: ${name || '-'}`,
      `${modal.fields.company}: ${company || '-'}`,
      `${modal.fields.email}: ${email || '-'}`,
      `${modal.fields.market}: ${selectedMarketLabel}`,
      `${modal.fields.plan}: ${selectedPlanLabel}`,
      `${modal.fields.industry}: ${selectedIndustryLabel}`,
      '',
      `${modal.fields.brief}:`,
      brief || '-',
    ];
    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${brand.name}] ${selectedPlanLabel} — ${company || selectedIndustryLabel}`
    );
    const body = encodeURIComponent(buildSummaryText());
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="animate-modal-enter max-h-[92vh] w-full max-w-2xl overflow-y-auto border border-line bg-surface">
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between border-b border-line px-6 py-5 sm:px-8">
          <div>
            <div className="font-mono text-[11px] font-medium tracking-[0.14em] text-accent-ink">
              {modal.code}
            </div>
            <h2
              id="consultation-modal-title"
              className="mt-1.5 text-xl font-semibold tracking-tight text-ink"
            >
              {modal.title}
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">
              {modal.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={modal.closeLabel}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-line bg-page text-ink-secondary transition-colors hover:border-line-strong hover:text-ink cursor-pointer"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Direct Executive Channels */}
        <div className="border-b border-line bg-subtle px-6 py-4 sm:px-8">
          <div className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">
            {modal.directChannelsLabel}
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-2 border border-line bg-surface px-3 py-2 font-mono text-[11px] text-ink transition-colors hover:border-accent hover:text-accent-ink"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-accent-ink" strokeWidth={1.5} />
              <span className="truncate">{brand.email}</span>
            </a>
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-line bg-surface px-3 py-2 font-mono text-[11px] text-ink transition-colors hover:border-accent hover:text-accent-ink"
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0 text-accent-ink" strokeWidth={1.5} />
              <span>WhatsApp · {brand.phoneDisplay}</span>
            </a>
            <a
              href={brand.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-line bg-surface px-3 py-2 font-mono text-[11px] text-ink transition-colors hover:border-accent hover:text-accent-ink"
            >
              <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent-ink" strokeWidth={1.5} />
              <span className="truncate">LinkedIn</span>
            </a>
          </div>
          <div className="mt-2.5 flex items-center gap-2 font-mono text-[11px] text-ink-muted">
            <Phone className="h-3 w-3" strokeWidth={1.5} />
            <a href={brand.phoneHref} className="hover:text-ink">
              {brand.phoneDisplay}
            </a>
            <span>·</span>
            <span>{brand.regions}</span>
          </div>
        </div>

        {/* Scope Summary Form */}
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6 sm:px-8">
          <div className="font-mono text-[10px] tracking-[0.14em] text-ink-muted">
            {modal.formTitle}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-ink" htmlFor="brief-name">
                {modal.fields.name}
              </label>
              <input
                id="brief-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={modal.fields.namePlaceholder}
                className="mt-1.5 w-full border border-line bg-page px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-ink" htmlFor="brief-company">
                {modal.fields.company}
              </label>
              <input
                id="brief-company"
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={modal.fields.companyPlaceholder}
                className="mt-1.5 w-full border border-line bg-page px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-ink" htmlFor="brief-email">
                {modal.fields.email}
              </label>
              <input
                id="brief-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={modal.fields.emailPlaceholder}
                className="mt-1.5 w-full border border-line bg-page px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-ink" htmlFor="brief-market">
                {modal.fields.market}
              </label>
              <select
                id="brief-market"
                value={market}
                onChange={(e) => setMarket(e.target.value as 'spain' | 'us' | 'both')}
                className="mt-1.5 w-full border border-line bg-page px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
              >
                <option value="spain">{modal.markets.spain}</option>
                <option value="us">{modal.markets.us}</option>
                <option value="both">{modal.markets.both}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-ink" htmlFor="brief-plan">
                {modal.fields.plan}
              </label>
              <select
                id="brief-plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value as PlanId)}
                className="mt-1.5 w-full border border-line bg-page px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
              >
                {plans.items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.code} — {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-ink" htmlFor="brief-industry">
                {modal.fields.industry}
              </label>
              <select
                id="brief-industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value as IndustryId)}
                className="mt-1.5 w-full border border-line bg-page px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
              >
                {industries.items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-ink" htmlFor="brief-notes">
              {modal.fields.brief}
            </label>
            <textarea
              id="brief-notes"
              rows={3}
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              placeholder={modal.fields.briefPlaceholder}
              className="mt-1.5 w-full resize-none border border-line bg-page px-3 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
            />
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handleCopyBrief}
              className="inline-flex h-10 items-center justify-center gap-2 border border-line bg-page px-4 font-mono text-xs text-ink-secondary transition-colors hover:border-line-strong hover:text-ink cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-accent-ink" strokeWidth={1.5} />
                  <span>{modal.copiedConfirm}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>{modal.copyBrief}</span>
                </>
              )}
            </button>

            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center gap-2 border border-accent bg-accent px-5 text-xs font-medium text-accent-fg transition-colors hover:bg-accent-hover cursor-pointer"
            >
              <span>{modal.submitMail}</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
