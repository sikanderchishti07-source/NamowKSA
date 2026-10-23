import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { Check, ArrowRight } from 'lucide-react';

export default function Packages() {
  const { t, dir } = useI18n();

  const packages = [1, 2, 3, 4, 5].map(i => ({
    title: t(`pkg.${i}.title`),
    desc: t(`pkg.${i}.desc`),
    items: t(`pkg.${i}.items`).split('|'),
  }));

  return (
    <div dir={dir}>
      <div className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('packages.title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('packages.subtitle')}</p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`p-8 rounded-xl border ${i === 1 ? 'border-teal bg-teal/5' : 'border-sage/20 bg-white'} hover:shadow-lg transition-shadow`}>
              {i === 1 && (
                <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full mb-4">Popular</span>
              )}
              <h3 className="text-xl font-bold text-navy mb-2">{pkg.title}</h3>
              <p className="text-sm text-charcoal/70 mb-6">{pkg.desc}</p>
              <ul className="space-y-3 mb-8">
                {pkg.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 text-teal flex-shrink-0" />
                    <span className="text-sm text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                  i === 1 ? 'bg-teal text-white hover:bg-teal/90' : 'bg-navy text-white hover:bg-navy/90'
                }`}
              >
                {t('packages.enquiry')}
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-charcoal/50">
          All packages are customizable. Pricing is provided upon enquiry based on your specific requirements.
        </p>
      </Section>

      <CTASection />
    </div>
  );
}
