import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { Search, Lightbulb, Wrench, TrendingUp } from 'lucide-react';

export default function Methodology() {
  const { t, dir } = useI18n();

  const steps = [
    { 
      icon: <Search size={28} />, 
      title: t('method.1.title'), 
      desc: t('method.1.desc'), 
      num: '01',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'
    },
    { 
      icon: <Lightbulb size={28} />, 
      title: t('method.2.title'), 
      desc: t('method.2.desc'), 
      num: '02',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
    },
    { 
      icon: <Wrench size={28} />, 
      title: t('method.3.title'), 
      desc: t('method.3.desc'), 
      num: '03',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80'
    },
    { 
      icon: <TrendingUp size={28} />, 
      title: t('method.4.title'), 
      desc: t('method.4.desc'), 
      num: '04',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
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

      {/* Steps with Images */}
      <Section>
        <div className="max-w-6xl mx-auto space-y-20">
          {steps.map((step, i) => (
            <ScrollReveal key={i} animation={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute -top-4 -left-4 w-full h-full bg-teal/10 rounded-2xl"></div>
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="relative rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-teal/10 text-teal rounded-2xl">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-bold text-teal/20">{step.num}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed text-lg">{step.desc}</p>
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
