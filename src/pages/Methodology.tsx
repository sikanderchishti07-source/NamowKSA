import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { Search, Lightbulb, Wrench, TrendingUp } from 'lucide-react';

export default function Methodology() {
  const { t, dir } = useI18n();

  const steps = [
    { icon: <Search size={28} />, title: t('method.1.title'), desc: t('method.1.desc'), num: '01' },
    { icon: <Lightbulb size={28} />, title: t('method.2.title'), desc: t('method.2.desc'), num: '02' },
    { icon: <Wrench size={28} />, title: t('method.3.title'), desc: t('method.3.desc'), num: '03' },
    { icon: <TrendingUp size={28} />, title: t('method.4.title'), desc: t('method.4.desc'), num: '04' },
  ];

  return (
    <div dir={dir}>
      {/* Hero with background image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
            alt="Restaurant operations"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <h1 className="text-3xl md:text-5xl font-bold text-white">{t('method.title')}</h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('method.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={i} animation={i % 2 === 0 ? 'left' : 'right'}>
              <div className="flex gap-6 mb-16 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-teal/10 text-teal rounded-2xl group-hover:bg-teal group-hover:text-white transition-all">
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-teal/30 to-transparent mt-4"></div>}
                </div>
                <div className="pb-8 flex-1">
                  <span className="text-sm font-bold text-teal">{step.num}</span>
                  <h3 className="text-xl font-bold text-navy mt-1 mb-3">{step.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-ivory">
        <ScrollReveal animation="up">
          <SectionTitle title="Our Principles" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Evidence-Based', desc: 'Every recommendation is grounded in data, observation, and proven industry practices.' },
            { title: 'Practical First', desc: 'We prioritize solutions your team can actually implement, not theoretical ideals.' },
            { title: 'Tailored Approach', desc: 'No cookie-cutter solutions. Every engagement is customized to your specific context.' },
            { title: 'Knowledge Transfer', desc: 'We build internal capability so improvements are sustainable after we leave.' },
            { title: 'Measurable Results', desc: 'We define success metrics upfront and track progress throughout the engagement.' },
            { title: 'Respect for Operations', desc: 'We implement changes with minimal disruption to your daily business.' },
          ].map((p, i) => (
            <ScrollReveal key={i} animation="scale" delay={(i % 3) + 1}>
              <div className="p-6 bg-white rounded-2xl border border-sage/20 hover:border-teal/30 hover:shadow-lg transition-all h-full">
                <h4 className="font-semibold text-navy mb-2">{p.title}</h4>
                <p className="text-sm text-charcoal/70">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
