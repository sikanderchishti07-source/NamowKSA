import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ChefHat, Coffee, Truck, Building2, Rocket, UtensilsCrossed } from 'lucide-react';

export default function Industries() {
  const { t, dir } = useI18n();

  const industries = [
    { icon: <ChefHat size={28} />, title: t('types.1'), desc: 'Elevated dining experiences requiring precision, consistency, and exceptional service standards.' },
    { icon: <UtensilsCrossed size={28} />, title: t('types.2'), desc: 'High-volume operations balancing efficiency with quality and guest experience.' },
    { icon: <Truck size={28} />, title: t('types.3'), desc: 'Delivery-focused operations optimized for speed, packaging, and food quality in transit.' },
    { icon: <Building2 size={28} />, title: t('types.4'), desc: 'Scaling operations requiring standardized systems, centralized reporting, and consistent quality.' },
    { icon: <Rocket size={28} />, title: t('types.5'), desc: 'New ventures needing comprehensive pre-opening planning and launch support.' },
    { icon: <Coffee size={28} />, title: t('types.6'), desc: 'Event-based food service requiring flexible menus, logistics, and quality at scale.' },
  ];

  return (
    <div dir={dir}>
      <div className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('types.title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            We work across the full spectrum of food service operations in Saudi Arabia.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="p-6 bg-ivory rounded-xl border border-sage/20 hover:border-teal/40 transition-all">
              <div className="w-14 h-14 flex items-center justify-center bg-teal/10 text-teal rounded-xl mb-4">
                {ind.icon}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{ind.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ivory">
        <SectionTitle title="Our Approach by Segment" />
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 bg-white rounded-xl border border-sage/20">
            <h4 className="font-semibold text-navy mb-2">Independent Restaurants</h4>
            <p className="text-sm text-charcoal/70">Hands-on operational support with practical systems that owner-operators can manage day-to-day. Focus on profitability and sustainability.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-sage/20">
            <h4 className="font-semibold text-navy mb-2">Restaurant Groups & Franchises</h4>
            <p className="text-sm text-charcoal/70">Standardized systems and centralized reporting that maintain brand consistency while allowing local adaptation. Multi-unit optimization.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-sage/20">
            <h4 className="font-semibold text-navy mb-2">Investors & New Concepts</h4>
            <p className="text-sm text-charcoal/70">Feasibility analysis, concept development, and launch support that de-risks new restaurant investments in the Saudi market.</p>
          </div>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
