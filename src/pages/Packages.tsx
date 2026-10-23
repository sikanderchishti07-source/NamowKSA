import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function Packages() {
  const { t, dir } = useI18n();

  const packages = [1, 2, 3, 4, 5].map(i => ({
    title: t(`pkg.${i}.title`),
    desc: t(`pkg.${i}.desc`),
    items: t(`pkg.${i}.items`).split('|'),
  }));

  return (
    <div dir={dir}>
      {/* Hero with background */}
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <h1 className="text-3xl md:text-5xl font-bold text-white">{t('packages.title')}</h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('packages.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <ScrollReveal key={i} animation="up" delay={(i % 3) + 1}>
              <div className={`relative p-8 rounded-2xl border h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${i === 1 ? 'border-teal bg-gradient-to-b from-teal/5 to-white shadow-lg' : 'border-sage/20 bg-white hover:border-teal/40'}`}>
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-teal text-white text-xs font-medium rounded-full shadow-md">
                      <Star size={12} className="fill-white" /> Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-navy mb-2">{pkg.title}</h3>
                <p className="text-sm text-charcoal/70 mb-6">{pkg.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 text-teal flex-shrink-0" />
                      <span className="text-sm text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3.5 rounded-xl font-medium transition-all ${
                    i === 1 
                      ? 'bg-teal text-white hover:bg-teal/90 shadow-md shadow-teal/20' 
                      : 'bg-navy text-white hover:bg-navy/90'
                  }`}
                >
                  {t('packages.enquiry')}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal animation="up">
          <p className="mt-10 text-center text-sm text-charcoal/50">
            All packages are customizable. Pricing is provided upon enquiry based on your specific requirements.
          </p>
        </ScrollReveal>
      </Section>

      <CTASection />
    </div>
  );
}
