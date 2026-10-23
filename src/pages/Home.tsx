import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { Section, SectionTitle, ServiceCard, FAQ, CTASection } from '../components/Shared';
import {
  Settings, ChefHat, Calculator, Package, Users, ShieldCheck, Rocket,
  QrCode, Globe, BarChart3, Zap, ArrowRight, MonitorSmartphone,
  TrendingUp, Clock, AlertTriangle
} from 'lucide-react';

export default function Home() {
  const { t, dir } = useI18n();

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

  return (
    <div dir={dir}>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-charcoal"></div>
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-sage rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 border border-teal/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal rounded-full"></span>
              <span className="text-xs font-medium text-teal">Restaurant Consultancy — Saudi Arabia</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('hero.headline')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              {t('hero.subheadline')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-teal hover:bg-teal/90 text-white font-medium rounded-lg transition-colors shadow-lg shadow-teal/20"
              >
                {t('hero.cta1')}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white hover:bg-white/5 font-medium rounded-lg transition-colors"
              >
                {t('hero.cta2')}
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
                <span>Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
                <span>Menu Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
                <span>Digital Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-ivory border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-charcoal/50">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-teal rounded-full"></span>Restaurant Operations</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-teal rounded-full"></span>Menu Engineering</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-teal rounded-full"></span>Food Costing</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-teal rounded-full"></span>Digital Solutions</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-teal rounded-full"></span>Staff Training</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <Section>
        <SectionTitle title={t('value.title')} subtitle={t('value.desc')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="text-center p-6">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-teal/10 text-teal rounded-xl mb-4">
                {i === 1 && <Settings size={24} />}
                {i === 2 && <MonitorSmartphone size={24} />}
                {i === 3 && <TrendingUp size={24} />}
                {i === 4 && <Globe size={24} />}
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{t(`value.${i}.title`)}</h3>
              <p className="text-sm text-charcoal/70">{t(`value.${i}.desc`)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Consultancy Services */}
      <Section className="bg-ivory">
        <SectionTitle title={t('services.title')} subtitle={t('services.subtitle')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {consultancyServices.map((svc, i) => (
            <ServiceCard key={i} {...svc} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-teal font-medium hover:underline">
            {t('services.explore')} <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Digital Solutions */}
      <Section>
        <SectionTitle title={t('digital.title')} subtitle={t('digital.subtitle')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalSolutions.map((svc, i) => (
            <ServiceCard key={i} {...svc} />
          ))}
        </div>
      </Section>

      {/* Challenges */}
      <Section className="bg-navy">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t('challenges.title')}</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {challenges.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <AlertTriangle size={18} className="text-teal flex-shrink-0" />
              <span className="text-white/80 text-sm">{c}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Methodology */}
      <Section>
        <SectionTitle title={t('method.title')} subtitle={t('method.subtitle')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((m, i) => (
            <div key={i} className="relative">
              <span className="text-5xl font-bold text-teal/10">{m.num}</span>
              <h3 className="mt-2 text-lg font-semibold text-navy">{m.title}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/methodology" className="inline-flex items-center gap-2 text-teal font-medium hover:underline">
            {t('common.learnMore')} <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Business Types */}
      <Section className="bg-ivory">
        <SectionTitle title={t('types.title')} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {businessTypes.map((type, i) => (
            <Link key={i} to="/industries" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-sage/20 hover:border-teal/40 transition-all group">
              <div className="w-10 h-10 flex items-center justify-center bg-teal/10 text-teal rounded-lg group-hover:bg-teal/20 transition-colors">
                <ChefHat size={18} />
              </div>
              <span className="font-medium text-navy group-hover:text-teal transition-colors">{type}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Dashboard Demo */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full mb-4">
              {t('common.demonstration')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              {t('digital.3.title')}
            </h2>
            <p className="text-charcoal/70 mb-6">{t('digital.3.desc')}</p>
            <Link to="/digital/dashboards" className="inline-flex items-center gap-2 text-teal font-medium hover:underline">
              {t('common.learnMore')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="bg-ivory rounded-xl p-6 border border-sage/20">
            <p className="text-xs text-charcoal/50 mb-4 text-center">{t('common.sampleData')}</p>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="text-xs text-charcoal/50">Food Cost</p>
                  <p className="text-lg font-bold text-navy">28%</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="text-xs text-charcoal/50">Labor</p>
                  <p className="text-lg font-bold text-navy">22%</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="text-xs text-charcoal/50">Waste</p>
                  <p className="text-lg font-bold text-teal">3.2%</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-navy">Daily Revenue</span>
                  <span className="text-sm text-teal font-medium">+12%</span>
                </div>
                <div className="h-2 bg-ivory rounded-full overflow-hidden">
                  <div className="h-full bg-teal rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-navy">Customer Satisfaction</span>
                  <span className="text-sm text-teal font-medium">4.7/5</span>
                </div>
                <div className="h-2 bg-ivory rounded-full overflow-hidden">
                  <div className="h-full bg-sage rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* QR Menu Demo */}
      <Section className="bg-ivory">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl p-8 border border-sage/20 max-w-sm mx-auto">
              <p className="text-xs text-charcoal/50 mb-4 text-center">{t('common.sampleData')}</p>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-navy rounded-xl flex items-center justify-center mb-3">
                  <QrCode size={32} className="text-teal" />
                </div>
                <h4 className="font-semibold text-navy">Sample Restaurant</h4>
                <p className="text-xs text-charcoal/50">Scan to view menu</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-ivory rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-navy">Grilled Kabsa</p>
                    <p className="text-xs text-charcoal/50">Signature dish</p>
                  </div>
                  <span className="text-sm font-semibold text-teal">85 SAR</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-ivory rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-navy">Fresh Hummus</p>
                    <p className="text-xs text-charcoal/50">Appetizer</p>
                  </div>
                  <span className="text-sm font-semibold text-teal">25 SAR</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-ivory rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-navy">Mixed Grill</p>
                    <p className="text-xs text-charcoal/50">For two</p>
                  </div>
                  <span className="text-sm font-semibold text-teal">120 SAR</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full mb-4">
              {t('common.demonstration')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              {t('digital.1.title')}
            </h2>
            <p className="text-charcoal/70 mb-6">{t('digital.1.desc')}</p>
            <Link to="/digital/qr-menus" className="inline-flex items-center gap-2 text-teal font-medium hover:underline">
              {t('common.learnMore')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionTitle title={t('faq.title')} />
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
