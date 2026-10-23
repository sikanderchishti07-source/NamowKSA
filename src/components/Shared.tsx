import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Check, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n';
import { ScrollReveal } from './ScrollReveal';

export function SectionTitle({ title, subtitle, center = true }: { title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-charcoal/70">{subtitle}</p>}
    </div>
  );
}

export function Section({ children, className = '', dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <section className={`py-16 md:py-24 ${dark ? 'bg-navy text-white' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function ServiceCard({ title, desc, to, icon }: { title: string; desc: string; to: string; icon: ReactNode }) {
  const { t } = useI18n();
  return (
    <Link to={to} className="group block p-6 bg-white rounded-xl border border-sage/20 hover:border-teal/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="w-12 h-12 flex items-center justify-center bg-teal/10 text-teal rounded-lg mb-4 group-hover:bg-teal group-hover:text-white transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-teal transition-colors">{title}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal">
        {t('common.learnMore')} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className={`border rounded-xl overflow-hidden transition-all duration-300 ${open === i ? 'border-teal/30 shadow-md bg-white' : 'border-sage/20 bg-white/50 hover:bg-white'}`}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left transition-colors"
          >
            <span className="font-medium text-navy pr-4">{item.q}</span>
            <ChevronDown size={18} className={`flex-shrink-0 text-teal transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-5 pb-5 text-charcoal/70 leading-relaxed">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CTASection() {
  const { t } = useI18n();
  return (
    <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-navy/80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="up">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('cta.title')}</h2>
            <p className="mt-4 text-lg text-white/70">{t('cta.desc')}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-teal hover:bg-teal/90 text-white font-medium rounded-lg transition-all shadow-lg shadow-teal/25 hover:shadow-xl hover:-translate-y-0.5 group"
            >
              {t('cta.button')}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative bg-navy py-20 md:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animation="up">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{subtitle}</p>
        </ScrollReveal>
      </div>
    </div>
  );
}

export function ServicePageTemplate({
  headline,
  description,
  challenges,
  scope,
  deliverables,
  benefits,
  relatedServices,
  faqItems,
  icon,
}: {
  headline: string;
  description: string;
  challenges: string[];
  scope: string[];
  deliverables: string[];
  benefits: string[];
  relatedServices: { title: string; to: string }[];
  faqItems?: { q: string; a: string }[];
  icon: ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={headline} subtitle={description} />

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal animation="left">
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">{t('common.challenges')}</h3>
              <ul className="space-y-3">
                {challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-ivory transition-colors">
                    <span className="mt-0.5 w-5 h-5 flex items-center justify-center bg-red-50 text-red-500 rounded-full flex-shrink-0 text-xs">✕</span>
                    <span className="text-charcoal/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="right">
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">{t('common.scope')}</h3>
              <ul className="space-y-3">
                {scope.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-ivory transition-colors">
                    <Check size={16} className="mt-0.5 text-teal flex-shrink-0" />
                    <span className="text-charcoal/80">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-ivory">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal animation="left">
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">{t('common.deliverables')}</h3>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white hover:shadow-sm transition-all">
                    <Check size={16} className="mt-0.5 text-teal flex-shrink-0" />
                    <span className="text-charcoal/80">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="right">
            <div>
              <h3 className="text-xl font-bold text-navy mb-4">{t('common.benefits')}</h3>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white hover:shadow-sm transition-all">
                    <Check size={16} className="mt-0.5 text-teal flex-shrink-0" />
                    <span className="text-charcoal/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {faqItems && faqItems.length > 0 && (
        <Section>
          <ScrollReveal animation="up">
            <SectionTitle title={t('faq.title')} />
          </ScrollReveal>
          <ScrollReveal animation="up">
            <div className="max-w-3xl mx-auto">
              <FAQ items={faqItems} />
            </div>
          </ScrollReveal>
        </Section>
      )}

      <Section className="bg-ivory">
        <ScrollReveal animation="up">
          <SectionTitle title={t('common.related')} />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((svc, i) => (
            <ScrollReveal key={i} animation="up" delay={(i % 3) + 1}>
              <Link to={svc.to} className="group p-5 bg-white rounded-xl border border-sage/20 hover:border-teal/40 hover:shadow-lg hover:-translate-y-1 transition-all block h-full">
                <h4 className="font-medium text-navy group-hover:text-teal transition-colors">{svc.title}</h4>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-teal">
                  {t('common.learnMore')} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}

export function DigitalPageTemplate({
  headline,
  description,
  features,
  benefits,
  demo,
  relatedServices,
  icon,
}: {
  headline: string;
  description: string;
  features: string[];
  benefits: string[];
  demo?: ReactNode;
  relatedServices: { title: string; to: string }[];
  icon: ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <PageHero title={headline} subtitle={description} />

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-navy mb-4">Features</h3>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-teal flex-shrink-0" />
                  <span className="text-charcoal/80">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-4">{t('common.benefits')}</h3>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="mt-1 text-teal flex-shrink-0" />
                  <span className="text-charcoal/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {demo && (
        <Section className="bg-ivory">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">
              {t('common.demonstration')}
            </span>
            <p className="mt-2 text-sm text-charcoal/60">{t('common.sampleData')}</p>
          </div>
          {demo}
        </Section>
      )}

      <Section>
        <SectionTitle title={t('common.related')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((svc, i) => (
            <Link key={i} to={svc.to} className="group p-5 bg-ivory rounded-lg border border-sage/20 hover:border-teal/40 transition-all">
              <h4 className="font-medium text-navy group-hover:text-teal transition-colors">{svc.title}</h4>
              <span className="mt-2 inline-flex items-center gap-1 text-sm text-teal">
                {t('common.learnMore')} <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
