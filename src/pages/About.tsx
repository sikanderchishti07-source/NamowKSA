import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { Target, Eye, Check } from 'lucide-react';

export default function About() {
  const { t, dir } = useI18n();

  return (
    <div dir={dir}>
      <div className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('about.title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-charcoal/80 leading-relaxed">{t('about.p1')}</p>
          <p className="text-charcoal/70 leading-relaxed">{t('about.p2')}</p>
          <p className="text-charcoal/70 leading-relaxed">{t('about.p3')}</p>
        </div>
      </Section>

      <Section className="bg-ivory">
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl border border-sage/20">
            <div className="w-12 h-12 flex items-center justify-center bg-teal/10 text-teal rounded-lg mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{t('about.mission.title')}</h3>
            <p className="text-charcoal/70 leading-relaxed">{t('about.mission.desc')}</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-sage/20">
            <div className="w-12 h-12 flex items-center justify-center bg-teal/10 text-teal rounded-lg mb-4">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{t('about.vision.title')}</h3>
            <p className="text-charcoal/70 leading-relaxed">{t('about.vision.desc')}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle title="What Sets Us Apart" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            'Hands-on operational experience in the Saudi market',
            'Combined consultancy and digital solutions under one roof',
            'Practical, actionable recommendations — not theoretical frameworks',
            'Deep understanding of local regulations and supply chains',
            'Flexible engagement models tailored to your stage and scale',
            'Bilingual support in English and Arabic',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4">
              <Check size={18} className="mt-0.5 text-teal flex-shrink-0" />
              <span className="text-charcoal/80 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
