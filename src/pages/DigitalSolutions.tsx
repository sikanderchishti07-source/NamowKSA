import { useI18n } from '../i18n';
import { Section, SectionTitle, ServiceCard, CTASection, DigitalPageTemplate } from '../components/Shared';
import { QrCode, Globe, BarChart3, Zap, MonitorSmartphone } from 'lucide-react';

const digitalRelated = [
  { title: 'QR Digital Menus', to: '/digital/qr-menus' },
  { title: 'Restaurant Websites', to: '/digital/websites' },
  { title: 'Dashboards & Reporting', to: '/digital/dashboards' },
  { title: 'Workflow Automation', to: '/digital/automation' },
];

export function DigitalOverview() {
  const { t, dir } = useI18n();

  const solutions = [
    { icon: <QrCode size={24} />, title: t('digital.1.title'), desc: t('digital.1.desc'), to: '/digital/qr-menus' },
    { icon: <Globe size={24} />, title: t('digital.2.title'), desc: t('digital.2.desc'), to: '/digital/websites' },
    { icon: <BarChart3 size={24} />, title: t('digital.3.title'), desc: t('digital.3.desc'), to: '/digital/dashboards' },
    { icon: <Zap size={24} />, title: t('digital.4.title'), desc: t('digital.4.desc'), to: '/digital/automation' },
  ];

  return (
    <div dir={dir}>
      <section className="relative bg-navy py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
            alt="Digital solutions"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('digital.title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('digital.subtitle')}</p>
        </div>
      </section>

      <Section>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((svc, i) => (
            <ServiceCard key={i} {...svc} />
          ))}
        </div>
      </Section>

      <Section className="bg-ivory">
        <SectionTitle title="Digital Transformation" subtitle="A comprehensive approach to modernizing your restaurant technology" />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-charcoal/70 leading-relaxed mb-8">
            Beyond individual solutions, we help restaurants develop a comprehensive digital strategy that integrates all technology touchpoints — from customer-facing tools to back-office systems.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-teal font-medium hover:underline">
            Discuss your digital strategy →
          </a>
        </div>
      </Section>

      <CTASection />
    </div>
  );
}

export function QRMenusPage() {
  const { t } = useI18n();
  return (
    <DigitalPageTemplate
      headline={t('dig.qr.headline')}
      description={t('dig.qr.full')}
      icon={<QrCode size={32} />}
      image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
      features={[
        'Contactless menu access via QR code scanning',
        'Mobile-optimized design that works on any device',
        'Instant menu updates without reprinting',
        'Multi-language support (Arabic, English, and more)',
        'High-quality food photography integration',
        'Category organization and search functionality',
        'Allergen and dietary information display',
        'Custom branding to match your restaurant identity',
      ]}
      benefits={[
        'Eliminate printing costs and waste',
        'Update prices and items instantly',
        'Modern, hygienic customer experience',
        'Reduce waitstaff dependency for menu queries',
        'Support international tourists and residents',
        'Collect data on menu item interest',
      ]}
      demo={
        <div className="bg-white rounded-xl p-8 border border-sage/20 max-w-sm mx-auto">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto bg-navy rounded-xl flex items-center justify-center mb-3">
              <QrCode size={32} className="text-teal" />
            </div>
            <h4 className="font-semibold text-navy">Demo Restaurant</h4>
            <p className="text-xs text-charcoal/50">Sample digital menu</p>
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
            <div className="flex justify-between items-center p-3 bg-ivory rounded-lg">
              <div>
                <p className="text-sm font-medium text-navy">Kunafa</p>
                <p className="text-xs text-charcoal/50">Dessert</p>
              </div>
              <span className="text-sm font-semibold text-teal">35 SAR</span>
            </div>
          </div>
        </div>
      }
      relatedServices={digitalRelated.filter(s => s.to !== '/digital/qr-menus')}
    />
  );
}

export function WebsitesPage() {
  const { t } = useI18n();
  return (
    <DigitalPageTemplate
      headline={t('dig.web.headline')}
      description={t('dig.web.full')}
      icon={<Globe size={32} />}
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      features={[
        'Custom design reflecting your restaurant brand',
        'Mobile-first responsive development',
        'Fast loading speeds optimized for mobile networks',
        'Menu display with online ordering integration',
        'Location maps and contact information',
        'Reservation and booking integration',
        'SEO optimization for local search visibility',
        'Bilingual support (Arabic/English)',
        'Social media integration',
        'Analytics and performance tracking',
      ]}
      benefits={[
        'Professional online presence that builds trust',
        'Increased visibility in local search results',
        'Direct booking and ordering without commission fees',
        'Showcase your brand story and ambiance',
        'Reach new customers through online discovery',
        'Control your narrative vs. third-party platforms',
      ]}
      demo={
        <div className="bg-white rounded-xl border border-sage/20 overflow-hidden max-w-lg mx-auto">
          <div className="bg-navy p-4 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white/10 rounded px-3 py-1 text-xs text-white/50 text-center">
              www.demorestaurant.sa
            </div>
          </div>
          <div className="p-6">
            <div className="h-32 bg-gradient-to-br from-navy to-charcoal rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">Demo Restaurant</span>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-ivory rounded w-3/4"></div>
              <div className="h-3 bg-ivory rounded w-1/2"></div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="h-16 bg-ivory rounded"></div>
              <div className="h-16 bg-ivory rounded"></div>
              <div className="h-16 bg-ivory rounded"></div>
            </div>
          </div>
        </div>
      }
      relatedServices={digitalRelated.filter(s => s.to !== '/digital/websites')}
    />
  );
}

export function DashboardsPage() {
  const { t } = useI18n();
  return (
    <DigitalPageTemplate
      headline={t('dig.dash.headline')}
      description={t('dig.dash.full')}
      icon={<BarChart3 size={32} />}
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
      features={[
        'Real-time sales and revenue tracking',
        'Food cost monitoring and alerts',
        'Labor cost analysis and scheduling insights',
        'Inventory level tracking and reorder alerts',
        'Customer satisfaction metrics',
        'Waste tracking and reduction metrics',
        'Custom KPI dashboards per role',
        'Automated daily/weekly/monthly reports',
        'Multi-location comparison views',
      ]}
      benefits={[
        'Make informed decisions with real-time data',
        'Identify issues before they become problems',
        'Track progress against targets consistently',
        'Reduce time spent on manual reporting',
        'Empower managers with actionable insights',
        'Build a data-driven culture across your operation',
      ]}
      demo={
        <div className="bg-white rounded-xl p-6 border border-sage/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="bg-ivory p-3 rounded-lg text-center">
              <p className="text-xs text-charcoal/50">Revenue</p>
              <p className="text-lg font-bold text-navy">12.4K</p>
              <p className="text-xs text-teal">+8%</p>
            </div>
            <div className="bg-ivory p-3 rounded-lg text-center">
              <p className="text-xs text-charcoal/50">Food Cost</p>
              <p className="text-lg font-bold text-navy">28%</p>
              <p className="text-xs text-teal">-2%</p>
            </div>
            <div className="bg-ivory p-3 rounded-lg text-center">
              <p className="text-xs text-charcoal/50">Labor</p>
              <p className="text-lg font-bold text-navy">22%</p>
              <p className="text-xs text-charcoal/50">0%</p>
            </div>
            <div className="bg-ivory p-3 rounded-lg text-center">
              <p className="text-xs text-charcoal/50">Waste</p>
              <p className="text-lg font-bold text-teal">3.2%</p>
              <p className="text-xs text-teal">-1.5%</p>
            </div>
          </div>
          <div className="bg-ivory p-4 rounded-lg">
            <p className="text-sm font-medium text-navy mb-3">Weekly Revenue Trend</p>
            <div className="flex items-end gap-2 h-20">
              {[60, 75, 45, 80, 90, 70, 85].map((h, i) => (
                <div key={i} className="flex-1 bg-teal/60 rounded-t" style={{ height: `${h}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <span key={i} className="text-xs text-charcoal/40 flex-1 text-center">{d}</span>
              ))}
            </div>
          </div>
        </div>
      }
      relatedServices={digitalRelated.filter(s => s.to !== '/digital/dashboards')}
    />
  );
}

export function AutomationPage() {
  const { t } = useI18n();
  return (
    <DigitalPageTemplate
      headline={t('dig.auto.headline')}
      description={t('dig.auto.full')}
      icon={<Zap size={32} />}
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
      features={[
        'Automated inventory reorder triggers',
        'Scheduled reporting and distribution',
        'Staff scheduling optimization',
        'Supplier communication automation',
        'Maintenance request workflows',
        'Customer feedback collection and routing',
        'Approval workflows for purchases',
        'Integration with existing POS and systems',
      ]}
      benefits={[
        'Free staff time for customer-facing activities',
        'Reduce manual errors in ordering and reporting',
        'Faster response times to operational needs',
        'Consistent processes regardless of who is on shift',
        'Better data accuracy and reliability',
        'Scalable processes that don\'t require more headcount',
      ]}
      demo={
        <div className="bg-white rounded-xl p-6 border border-sage/20 max-w-md mx-auto">
          <p className="text-sm font-medium text-navy mb-4">Sample Workflow</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-ivory rounded-lg">
              <div className="w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center">
                <span className="text-teal text-xs font-bold">1</span>
              </div>
              <div>
                <p className="text-sm font-medium text-navy">Low Stock Alert</p>
                <p className="text-xs text-charcoal/50">System detects inventory below par</p>
              </div>
            </div>
            <div className="flex justify-center"><div className="w-px h-4 bg-sage/30"></div></div>
            <div className="flex items-center gap-3 p-3 bg-ivory rounded-lg">
              <div className="w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center">
                <span className="text-teal text-xs font-bold">2</span>
              </div>
              <div>
                <p className="text-sm font-medium text-navy">Auto-Generate Order</p>
                <p className="text-xs text-charcoal/50">Purchase order created automatically</p>
              </div>
            </div>
            <div className="flex justify-center"><div className="w-px h-4 bg-sage/30"></div></div>
            <div className="flex items-center gap-3 p-3 bg-ivory rounded-lg">
              <div className="w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center">
                <span className="text-teal text-xs font-bold">3</span>
              </div>
              <div>
                <p className="text-sm font-medium text-navy">Manager Approval</p>
                <p className="text-xs text-charcoal/50">Notification sent for one-click approval</p>
              </div>
            </div>
            <div className="flex justify-center"><div className="w-px h-4 bg-sage/30"></div></div>
            <div className="flex items-center gap-3 p-3 bg-teal/10 rounded-lg border border-teal/20">
              <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium text-teal">Order Sent to Supplier</p>
                <p className="text-xs text-charcoal/50">Automatic delivery scheduling</p>
              </div>
            </div>
          </div>
        </div>
      }
      relatedServices={digitalRelated.filter(s => s.to !== '/digital/automation')}
    />
  );
}
