import { useI18n } from '../i18n';
import { Section, SectionTitle, CTASection } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { Target, Eye, Check, Award, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const { t, dir } = useI18n();

  const differentiators = [
    { icon: <Users size={20} />, text: 'Hands-on operational experience in the Saudi market' },
    { icon: <Lightbulb size={20} />, text: 'Combined consultancy and digital solutions under one roof' },
    { icon: <Target size={20} />, text: 'Practical, actionable recommendations — not theoretical frameworks' },
    { icon: <Award size={20} />, text: 'Deep understanding of local regulations and supply chains' },
    { icon: <Check size={20} />, text: 'Flexible engagement models tailored to your stage and scale' },
    { icon: <Eye size={20} />, text: 'Bilingual support in English and Arabic' },
  ];

  return (
    <div dir={dir}>
      {/* Hero with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2c6551513?w=1920&q=80"
            alt="Restaurant team"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="up">
            <h1 className="text-3xl md:text-5xl font-bold text-white">{t('about.title')}</h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('about.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="left">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-teal/20 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Restaurant consultancy at work"
                className="relative rounded-2xl shadow-xl w-full h-[450px] object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right">
            <div className="space-y-6">
              <p className="text-lg text-charcoal/80 leading-relaxed">{t('about.p1')}</p>
              <p className="text-charcoal/70 leading-relaxed">{t('about.p2')}</p>
              <p className="text-charcoal/70 leading-relaxed">{t('about.p3')}</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-ivory">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <ScrollReveal animation="up" delay={1}>
            <div className="bg-white p-8 rounded-2xl border border-sage/20 hover:shadow-lg transition-shadow h-full">
              <div className="w-14 h-14 flex items-center justify-center bg-teal/10 text-teal rounded-xl mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{t('about.mission.title')}</h3>
              <p className="text-charcoal/70 leading-relaxed">{t('about.mission.desc')}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="up" delay={2}>
            <div className="bg-white p-8 rounded-2xl border border-sage/20 hover:shadow-lg transition-shadow h-full">
              <div className="w-14 h-14 flex items-center justify-center bg-teal/10 text-teal rounded-xl mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{t('about.vision.title')}</h3>
              <p className="text-charcoal/70 leading-relaxed">{t('about.vision.desc')}</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* What Sets Us Apart */}
      <Section>
        <ScrollReveal animation="up">
          <SectionTitle title="What Sets Us Apart" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentiators.map((item, i) => (
            <ScrollReveal key={i} animation="up" delay={(i % 3) + 1}>
              <div className="flex items-start gap-4 p-5 bg-ivory rounded-xl border border-sage/10 hover:border-teal/30 hover:shadow-md transition-all group">
                <div className="w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                  {item.icon}
                </div>
                <span className="text-charcoal/80 text-sm leading-relaxed">{item.text}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Values Section with Image */}
      <Section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Commitment to Excellence</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Every restaurant we work with receives the same level of dedication and expertise. We believe that great restaurants are built on strong foundations — clear processes, well-trained teams, and data-driven decisions.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our approach is collaborative. We work alongside your team, transferring knowledge and building internal capability so that improvements are sustainable long after our engagement ends.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-teal mb-2">100%</p>
                <p className="text-sm text-white/60">Client-focused approach</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-teal mb-2">EN/AR</p>
                <p className="text-sm text-white/60">Full bilingual support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-teal mb-2">KSA</p>
                <p className="text-sm text-white/60">Deep local expertise</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <p className="text-3xl font-bold text-teal mb-2">24/7</p>
                <p className="text-sm text-white/60">Available when you need us</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
