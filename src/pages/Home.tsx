import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Section, SectionTitle, ServiceCard, FAQ, CTASection } from '../components/Shared';
import { ScrollReveal } from '../components/ScrollReveal';
import { useParallax } from '../hooks/useScrollAnimation';
import {
  Settings, ChefHat, Calculator, Package, Users, ShieldCheck, Rocket,
  QrCode, Globe, BarChart3, Zap, ArrowRight, MonitorSmartphone,
  TrendingUp, AlertTriangle, Star, Target, CheckCircle2, Play
} from 'lucide-react';

export default function Home() {
  const { t, dir } = useI18n();
  const parallaxOffset = useParallax();

  const consultancyServices = [
    { icon: <Settings size={24} />, title: t('svc.ops.title'), desc: t('svc.ops.desc'), to: '/services/operations' },
    { icon: <ChefHat size={24} />, title: t('svc.menu.title'), desc: t('svc.menu.desc'), to: '/services/menu-engineering' },
    { icon: <Calculator size={24} />, title: t('svc.cost.title'), desc: t('svc.cost.desc'), to: '/services/food-costing' },
    { icon: <Package size={24} />, title: t('svc.inventory.title'), desc: t('svc.inventory.desc'), to: '/services/inventory' },
    { icon: <Users size={24} />, title: t('svc.staff.title'), desc: t('svc.staff.desc'), to: '/services/staffing' },
    { icon: <ShieldCheck size={24} />, title: t('svc.safety.title'), desc: t('svc.safety.desc'), to: '/services/food-safety' },
    { icon: <Rocket size={24} />, title: t('svc.launch.title'), desc: t('svc.launch.desc'), to: '/services/launch' },
  ];

  const digitalSolutions = [
    { icon: <QrCode size={24} />, title: t('digital.1.title'), desc: t('digital.1.desc'), to: '/digital/qr-menus' },
    { icon: <Globe size={24} />, title: t('digital.2.title'), desc: t('digital.2.desc'), to: '/digital/websites' },
    { icon: <BarChart3 size={24} />, title: t('digital.3.title'), desc: t('digital.3.desc'), to: '/digital/dashboards' },
    { icon: <Zap size={24} />, title: t('digital.4.title'), desc: t('digital.4.desc'), to: '/digital/automation' },
  ];

  const challenges = Array.from({ length: 8 }, (_, i) => t(`challenges.${i + 1}`));

  const methodology = [
    { title: t('method.1.title'), desc: t('method.1.desc'), num: '01' },
    { title: t('method.2.title'), desc: t('method.2.desc'), num: '02' },
    { title: t('method.3.title'), desc: t('method.3.desc'), num: '03' },
    { title: t('method.4.title'), desc: t('method.4.desc'), num: '04' },
  ];

  const businessTypes = Array.from({ length: 6 }, (_, i) => t(`types.${i + 1}`));

  const faqItems = [
    { q: t('faq.1.q'), a: t('faq.1.a') },
    { q: t('faq.2.q'), a: t('faq.2.a') },
    { q: t('faq.3.q'), a: t('faq.3.a') },
    { q: t('faq.4.q'), a: t('faq.4.a') },
    { q: t('faq.5.q'), a: t('faq.5.a') },
  ];

  const stats = [
    { number: '100+', label: 'Restaurant Concepts Advised' },
    { number: '8+', label: 'Years of Experience' },
    { number: '50+', label: 'SOPs Developed' },
    { number: '24/7', label: 'Support Availability' },
  ];

  return (
    <div dir={dir}>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="Premium restaurant interior"
            className="w-full h-[120%] object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-[1]">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">
            <ScrollReveal animation="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                <span className="w-2 h-2 bg-teal rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-white/90">Restaurant Consultancy — Saudi Arabia</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={1}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                {t('hero.headline')}
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={2}>
              <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                {t('hero.subheadline')}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal hover:bg-teal/90 text-white font-medium rounded-lg transition-all shadow-lg shadow-teal/25 hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-0.5"
                >
                  {t('hero.cta1')}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-medium rounded-lg transition-all backdrop-blur-sm"
                >
                  {t('hero.cta2')}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={4}>
              <div className="mt-16 flex flex-wrap items-center gap-8 text-white/50 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal" />
                  <span>Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal" />
                  <span>Menu Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal" />
                  <span>Digital Solutions</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-navy py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} animation="up" delay={i + 1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-teal mb-2">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition with Image */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="left">
            <div>
              <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{t('value.title')}</h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">{t('value.desc')}</p>
              
              <div className="space-y-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-teal/10 text-teal rounded-xl flex-shrink-0">
                      {i === 1 && <Settings size={20} />}
                      {i === 2 && <MonitorSmartphone size={20} />}
                      {i === 3 && <TrendingUp size={20} />}
                      {i === 4 && <Globe size={20} />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-1">{t(`value.${i}.title`)}</h3>
                      <p className="text-sm text-charcoal/70">{t(`value.${i}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-teal/10 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Professional restaurant kitchen"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Star size={20} className="text-teal fill-teal" />
                  </div>
                  <div>
                    <p className="font-bold text-navy">Trusted Partner</p>
                    <p className="text-xs text-charcoal/60">For Saudi restaurants</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Consultancy Services */}
      <Section className="bg-ivory">
        <ScrollReveal animation="up">
          <SectionTitle title={t('services.title')} subtitle={t('services.subtitle')} />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {consultancyServices.map((svc, i) => (
            <ScrollReveal key={i} animation="up" delay={(i % 4) + 1}>
              <ServiceCard {...svc} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal animation="up">
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-teal font-medium hover:underline group">
              {t('services.explore')} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* Digital Solutions with Image */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                alt="Beautiful food presentation"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                      <QrCode size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">QR Digital Menus</p>
                      <p className="text-xs text-charcoal/60">Instant menu updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="right">
            <div>
              <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full mb-4">
                Digital Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{t('digital.title')}</h2>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">{t('digital.subtitle')}</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {digitalSolutions.map((svc, i) => (
                  <Link key={i} to={svc.to} className="group p-4 bg-ivory rounded-xl border border-sage/20 hover:border-teal/40 hover:shadow-md transition-all">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg mb-3 group-hover:bg-teal/20 transition-colors">
                      {svc.icon}
                    </div>
                    <h3 className="font-semibold text-navy mb-1 text-sm group-hover:text-teal transition-colors">{svc.title}</h3>
                    <p className="text-xs text-charcoal/60">{svc.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Challenges Section */}
      <Section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative">
          <ScrollReveal animation="up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t('challenges.title')}</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {challenges.map((c, i) => (
              <ScrollReveal key={i} animation="up" delay={(i % 4) + 1}>
                <div className="flex items-center gap-3 p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-teal/30 transition-all group">
                  <AlertTriangle size={20} className="text-teal flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 text-sm">{c}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Methodology */}
      <Section>
        <ScrollReveal animation="up">
          <SectionTitle title={t('method.title')} subtitle={t('method.subtitle')} />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((m, i) => (
            <ScrollReveal key={i} animation="up" delay={i + 1}>
              <div className="relative group">
                <div className="absolute -top-2 -left-2 text-6xl font-bold text-teal/10 group-hover:text-teal/20 transition-colors">{m.num}</div>
                <div className="relative pt-8">
                  <h3 className="text-xl font-bold text-navy mb-3">{m.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal animation="up">
          <div className="mt-12 text-center">
            <Link to="/methodology" className="inline-flex items-center gap-2 text-teal font-medium hover:underline group">
              {t('common.learnMore')} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* Business Types */}
      <Section className="bg-ivory">
        <ScrollReveal animation="up">
          <SectionTitle title={t('types.title')} />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {businessTypes.map((type, i) => (
            <ScrollReveal key={i} animation="scale" delay={(i % 3) + 1}>
              <Link to="/industries" className="flex items-center gap-3 p-5 bg-white rounded-xl border border-sage/20 hover:border-teal/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 flex items-center justify-center bg-teal/10 text-teal rounded-xl group-hover:bg-teal/20 transition-colors">
                  <ChefHat size={20} />
                </div>
                <span className="font-medium text-navy group-hover:text-teal transition-colors">{type}</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Dashboard Demo with Image Background */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-teal/5"></div>
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="left">
            <div>
              <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full mb-4">
                {t('common.demonstration')}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                {t('digital.3.title')}
              </h2>
              <p className="text-charcoal/70 mb-6 leading-relaxed">{t('digital.3.desc')}</p>
              <Link to="/digital/dashboards" className="inline-flex items-center gap-2 text-teal font-medium hover:underline group">
                {t('common.learnMore')} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="right">
            <div className="bg-white rounded-2xl p-8 border border-sage/20 shadow-xl">
              <p className="text-xs text-charcoal/50 mb-6 text-center">{t('common.sampleData')}</p>
              <div className="space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-ivory p-4 rounded-xl text-center">
                    <p className="text-xs text-charcoal/50">Food Cost</p>
                    <p className="text-2xl font-bold text-navy mt-1">28%</p>
                  </div>
                  <div className="bg-ivory p-4 rounded-xl text-center">
                    <p className="text-xs text-charcoal/50">Labor</p>
                    <p className="text-2xl font-bold text-navy mt-1">22%</p>
                  </div>
                  <div className="bg-ivory p-4 rounded-xl text-center">
                    <p className="text-xs text-charcoal/50">Waste</p>
                    <p className="text-2xl font-bold text-teal mt-1">3.2%</p>
                  </div>
                </div>
                <div className="bg-ivory p-5 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-navy">Daily Revenue</span>
                    <span className="text-sm text-teal font-medium">+12%</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal to-teal/70 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div className="bg-ivory p-5 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-navy">Customer Satisfaction</span>
                    <span className="text-sm text-teal font-medium">4.7/5</span>
                  </div>
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sage to-sage/70 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-ivory">
        <ScrollReveal animation="up">
          <SectionTitle title={t('faq.title')} />
        </ScrollReveal>
        <ScrollReveal animation="up">
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqItems} />
          </div>
        </ScrollReveal>
      </Section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
