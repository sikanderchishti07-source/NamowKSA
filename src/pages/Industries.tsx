import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
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
      {/* Hero with background image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Restaurant dining"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <h1 className="text-3xl md:text-5xl font-bold text-white">{t('types.title')}</h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              We work across the full spectrum of food service operations in Saudi Arabia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <ScrollReveal key={i} animation="up" delay={(i % 3) + 1}>
              <div className="p-8 bg-ivory rounded-2xl border border-sage/20 hover:border-teal/40 hover:shadow-xl hover:-translate-y-1 transition-all h-full group">
                <div className="w-16 h-16 flex items-center justify-center bg-teal/10 text-teal rounded-2xl mb-5 group-hover:bg-teal group-hover:text-white transition-all">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{ind.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{ind.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section className="bg-ivory">
        <ScrollReveal animation="up">
          <SectionTitle title="Our Approach by Segment" />
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { title: 'Independent Restaurants', desc: 'Hands-on operational support with practical systems that owner-operators can manage day-to-day. Focus on profitability and sustainability.' },
            { title: 'Restaurant Groups & Franchises', desc: 'Standardized systems and centralized reporting that maintain brand consistency while allowing local adaptation. Multi-unit optimization.' },
            { title: 'Investors & New Concepts', desc: 'Feasibility analysis, concept development, and launch support that de-risks new restaurant investments in the Saudi market.' },
          ].map((item, i) => (
            <ScrollReveal key={i} animation="left" delay={i + 1}>
              <div className="p-6 bg-white rounded-2xl border border-sage/20 hover:border-teal/30 hover:shadow-lg transition-all">
                <h4 className="font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
