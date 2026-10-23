import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
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
      <div className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('method.title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('method.subtitle')}</p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 mb-12 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-teal/10 text-teal rounded-xl">
                  {step.icon}
                </div>
                {i < steps.length - 1 && <div className="w-px h-full bg-sage/20 mt-4"></div>}
              </div>
              <div className="pb-8">
                <span className="text-sm font-medium text-teal">{step.num}</span>
                <h3 className="text-xl font-bold text-navy mt-1 mb-2">{step.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-ivory">
        <SectionTitle title="Our Principles" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: 'Evidence-Based', desc: 'Every recommendation is grounded in data, observation, and proven industry practices.' },
            { title: 'Practical First', desc: 'We prioritize solutions your team can actually implement, not theoretical ideals.' },
            { title: 'Tailored Approach', desc: 'No cookie-cutter solutions. Every engagement is customized to your specific context.' },
            { title: 'Knowledge Transfer', desc: 'We build internal capability so improvements are sustainable after we leave.' },
            { title: 'Measurable Results', desc: 'We define success metrics upfront and track progress throughout the engagement.' },
            { title: 'Respect for Operations', desc: 'We implement changes with minimal disruption to your daily business.' },
          ].map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-sage/20">
              <h4 className="font-semibold text-navy mb-2">{p.title}</h4>
              <p className="text-sm text-charcoal/70">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
