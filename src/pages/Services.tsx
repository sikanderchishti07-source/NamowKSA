import { useI18n } from '../i18n';
import { Section, SectionTitle, ServiceCard, CTASection, ServicePageTemplate } from '../components/Shared';
import { Settings, ChefHat, Calculator, Package, Users, ShieldCheck, Rocket } from 'lucide-react';

export function ServicesOverview() {
  const { t, dir } = useI18n();

  const services = [
    { icon: <Settings size={24} />, title: t('svc.ops.title'), desc: t('svc.ops.desc'), to: '/services/operations' },
    { icon: <ChefHat size={24} />, title: t('svc.menu.title'), desc: t('svc.menu.desc'), to: '/services/menu-engineering' },
    { icon: <Calculator size={24} />, title: t('svc.cost.title'), desc: t('svc.cost.desc'), to: '/services/food-costing' },
    { icon: <Package size={24} />, title: t('svc.inventory.title'), desc: t('svc.inventory.desc'), to: '/services/inventory' },
    { icon: <Users size={24} />, title: t('svc.staff.title'), desc: t('svc.staff.desc'), to: '/services/staffing' },
    { icon: <ShieldCheck size={24} />, title: t('svc.safety.title'), desc: t('svc.safety.desc'), to: '/services/food-safety' },
    { icon: <Rocket size={24} />, title: t('svc.launch.title'), desc: t('svc.launch.desc'), to: '/services/launch' },
  ];

  return (
    <div dir={dir}>
      <div className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{t('services.title')}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>
      </div>

      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={i} {...svc} />
          ))}
        </div>
      </Section>

      <CTASection />
    </div>
  );
}

const serviceRelatedServices = [
  { title: 'Operations Management', to: '/services/operations' },
  { title: 'Menu Engineering', to: '/services/menu-engineering' },
  { title: 'Food Costing', to: '/services/food-costing' },
  { title: 'Inventory & Waste', to: '/services/inventory' },
  { title: 'Staffing & Training', to: '/services/staffing' },
  { title: 'Food Safety', to: '/services/food-safety' },
  { title: 'Launch & Expansion', to: '/services/launch' },
];

export function OperationsPage() {
  const { t } = useI18n();
  return (
    <ServicePageTemplate
      headline={t('svc.ops.headline')}
      description={t('svc.ops.full')}
      icon={<Settings size={32} />}
      image="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=80"
      challenges={[
        'Inconsistent processes between shifts and team members',
        'No documented standard operating procedures',
        'Difficulty maintaining quality at scale',
        'Management spending time on firefighting instead of strategy',
        'Poor communication between kitchen and front of house',
      ]}
      scope={[
        'Complete operational audit and gap analysis',
        'Development of comprehensive SOPs for all departments',
        'Shift management and handover procedures',
        'Communication protocols and reporting structures',
        'Performance metrics and KPI frameworks',
        'Management training and coaching',
      ]}
      deliverables={[
        'Operational audit report with findings and recommendations',
        'Complete SOP manual customized to your operation',
        'Shift checklists and handover templates',
        'KPI dashboard setup and training',
        'Management playbook and decision frameworks',
        'Implementation timeline and support plan',
      ]}
      benefits={[
        'Consistent quality and service across all shifts',
        'Reduced management time spent on daily firefighting',
        'Clear accountability and performance expectations',
        'Faster onboarding of new team members',
        'Scalable systems that support growth',
        'Improved team morale through clear processes',
      ]}
      relatedServices={serviceRelatedServices.filter(s => s.to !== '/services/operations').slice(0, 3)}
      faqItems={[
        { q: 'How long does an operational audit take?', a: 'A comprehensive operational audit typically takes 2-4 weeks depending on the size and complexity of your operation. This includes on-site observation, team interviews, process documentation review, and analysis.' },
        { q: 'Do you write the SOPs for us?', a: 'Yes, we develop complete SOP manuals tailored to your specific operation. We work alongside your team to ensure procedures are practical, clear, and actually followed in daily operations.' },
        { q: 'Can you help with just one department?', a: 'Absolutely. While we often work across the full operation, we can focus on specific departments like kitchen operations, front of house, or procurement based on your priorities.' },
      ]}
    />
  );
}

export function MenuEngineeringPage() {
  const { t } = useI18n();
  return (
    <ServicePageTemplate
      headline={t('svc.menu.headline')}
      description={t('svc.menu.full')}
      icon={<ChefHat size={32} />}
      image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
      challenges={[
        'Menu items that look popular but are unprofitable',
        'No data-driven approach to menu design',
        'Inconsistent recipe execution affecting quality',
        'Difficulty balancing variety with operational efficiency',
        'Pricing that doesn\'t reflect true costs',
      ]}
      scope={[
        'Menu mix analysis and profitability mapping',
        'Recipe standardization and documentation',
        'Menu engineering matrix (stars, puzzles, plowhorses, dogs)',
        'Pricing strategy development',
        'Menu layout and design recommendations',
        'Seasonal menu planning frameworks',
      ]}
      deliverables={[
        'Complete menu engineering analysis report',
        'Standardized recipe cards with costing for every item',
        'Menu profitability matrix with categorization',
        'Pricing recommendations with margin analysis',
        'Menu design and layout guidelines',
        'Implementation guide for menu changes',
      ]}
      benefits={[
        'Clear understanding of which items drive profit',
        'Consistent food quality through standardized recipes',
        'Optimized pricing that protects margins',
        'Streamlined kitchen operations through focused menu',
        'Data-driven decisions about menu additions and removals',
        'Improved customer satisfaction through better menu design',
      ]}
      relatedServices={serviceRelatedServices.filter(s => s.to !== '/services/menu-engineering').slice(0, 3)}
      faqItems={[
        { q: 'What is menu engineering?', a: 'Menu engineering is a data-driven approach to optimizing your menu for profitability. We analyze each item\'s popularity and profit margin to categorize them and make strategic decisions about pricing, placement, and promotion.' },
        { q: 'Do you help with menu design too?', a: 'We provide menu design guidelines and recommendations based on engineering principles. We can also connect you with professional designers who specialize in restaurant menu design.' },
        { q: 'How often should we review our menu?', a: 'We recommend a full menu engineering review at least quarterly, with ongoing monitoring of item performance. Seasonal changes and cost fluctuations may require more frequent adjustments.' },
      ]}
    />
  );
}

export function FoodCostingPage() {
  const { t } = useI18n();
  return (
    <ServicePageTemplate
      headline={t('svc.cost.headline')}
      description={t('svc.cost.full')}
      icon={<Calculator size={32} />}
      image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
      challenges={[
        'No accurate knowledge of true dish costs',
        'Rising ingredient costs eroding margins silently',
        'Pricing based on competitors rather than actual costs',
        'Portion inconsistencies affecting cost control',
        'Inability to identify which items are profitable',
      ]}
      scope={[
        'Complete recipe costing for all menu items',
        'Ingredient cost database setup and maintenance',
        'Portion control standards and procedures',
        'Margin analysis and pricing strategy',
        'Cost tracking systems and reporting',
        'Supplier price comparison and negotiation support',
      ]}
      deliverables={[
        'Recipe cost cards for every menu item',
        'Ingredient cost database with update procedures',
        'Portion control guides with visual references',
        'Pricing model with target margin analysis',
        'Weekly/monthly cost tracking reports',
        'Variance analysis framework',
      ]}
      benefits={[
        'Complete visibility into true food costs',
        'Protected margins through accurate pricing',
        'Reduced waste through portion control',
        'Data-driven pricing decisions',
        'Early detection of cost increases',
        'Improved profitability across the menu',
      ]}
      relatedServices={serviceRelatedServices.filter(s => s.to !== '/services/food-costing').slice(0, 3)}
    />
  );
}

export function InventoryPage() {
  const { t } = useI18n();
  return (
    <ServicePageTemplate
      headline={t('svc.inventory.headline')}
      description={t('svc.inventory.full')}
      icon={<Package size={32} />}
      image="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1920&q=80"
      challenges={[
        'Excessive food waste and spoilage',
        'Over-ordering or stock-outs disrupting operations',
        'No visibility into actual vs. theoretical usage',
        'Poor supplier management and pricing',
        'Theft and shrinkage going undetected',
      ]}
      scope={[
        'Inventory management system design and implementation',
        'Par level establishment for all items',
        'Ordering procedures and supplier management',
        'Receiving, storage, and rotation procedures',
        'Waste tracking and reduction programs',
        'Stocktake procedures and variance analysis',
      ]}
      deliverables={[
        'Inventory management procedures manual',
        'Par level sheets for all storage areas',
        'Ordering templates and supplier scorecards',
        'Waste tracking system and reporting',
        'Stocktake procedures and schedules',
        'Variance analysis reports and action plans',
      ]}
      benefits={[
        'Significant reduction in food waste',
        'Optimized stock levels reducing tied-up capital',
        'Better supplier relationships and pricing',
        'Early detection of theft or shrinkage',
        'Improved cash flow management',
        'Consistent ingredient availability',
      ]}
      relatedServices={serviceRelatedServices.filter(s => s.to !== '/services/inventory').slice(0, 3)}
    />
  );
}

export function StaffingPage() {
  const { t } = useI18n();
  return (
    <ServicePageTemplate
      headline={t('svc.staff.headline')}
      description={t('svc.staff.full')}
      icon={<Users size={32} />}
      image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
      challenges={[
        'High staff turnover increasing recruitment costs',
        'Inconsistent service quality due to training gaps',
        'Difficulty finding and retaining skilled staff',
        'No structured career development paths',
        'Poor team morale affecting customer experience',
      ]}
      scope={[
        'Staffing structure and org design',
        'Recruitment processes and job descriptions',
        'Onboarding programs for new hires',
        'Skills-based training curriculum development',
        'Performance management frameworks',
        'Team culture and retention strategies',
      ]}
      deliverables={[
        'Organizational structure recommendations',
        'Job descriptions and person specifications',
        'Recruitment and selection procedures',
        'Comprehensive training manuals and materials',
        'Performance review templates and processes',
        'Staff development and retention plan',
      ]}
      benefits={[
        'Reduced staff turnover and recruitment costs',
        'Consistent service quality across all team members',
        'Faster onboarding of new employees',
        'Clear performance expectations and accountability',
        'Improved team morale and engagement',
        'Building internal capability for long-term success',
      ]}
      relatedServices={serviceRelatedServices.filter(s => s.to !== '/services/staffing').slice(0, 3)}
    />
  );
}

export function FoodSafetyPage() {
  const { t } = useI18n();
  return (
    <ServicePageTemplate
      headline={t('svc.safety.headline')}
      description={t('svc.safety.full')}
      icon={<ShieldCheck size={32} />}
      image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
      challenges={[
        'Uncertainty about compliance with Saudi food safety regulations',
        'Inconsistent food handling practices',
        'Lack of documented food safety procedures',
        'Risk of contamination and foodborne illness',
        'Preparing for municipal inspections',
      ]}
      scope={[
        'Food safety compliance audit',
        'HACCP plan development and implementation',
        'Food handling and hygiene procedure development',
        'Temperature monitoring and recording systems',
        'Staff food safety training programs',
        'Inspection readiness preparation',
      ]}
      deliverables={[
        'Food safety compliance audit report',
        'HACCP plan customized to your operation',
        'Food safety procedure manuals',
        'Temperature monitoring logs and systems',
        'Staff training materials and certification tracking',
        'Inspection readiness checklist and action plan',
      ]}
      benefits={[
        'Full compliance with Saudi food safety regulations',
        'Reduced risk of foodborne illness incidents',
        'Confidence during municipal inspections',
        'Improved food quality and consistency',
        'Protected brand reputation',
        'Staff awareness and accountability for food safety',
      ]}
      relatedServices={serviceRelatedServices.filter(s => s.to !== '/services/food-safety').slice(0, 3)}
    />
  );
}

export function LaunchPage() {
  const { t } = useI18n();
  return (
    <ServicePageTemplate
      headline={t('svc.launch.headline')}
      description={t('svc.launch.full')}
      icon={<Rocket size={32} />}
      image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
      challenges={[
        'No clear roadmap from concept to opening',
        'Underestimating pre-opening complexity and timeline',
        'Lack of operational readiness on opening day',
        'Budget overruns during the build-out phase',
        'Difficulty coordinating multiple workstreams simultaneously',
      ]}
      scope={[
        'Concept development and feasibility assessment',
        'Pre-opening timeline and critical path planning',
        'Menu development and kitchen design consultation',
        'Equipment specification and procurement support',
        'Staff recruitment, training, and pre-opening program',
        'Soft launch and grand opening planning',
      ]}
      deliverables={[
        'Feasibility study and concept documentation',
        'Detailed pre-opening timeline with milestones',
        'Menu and recipe development package',
        'Equipment and layout recommendations',
        'Complete training program and SOPs',
        'Opening day operations plan and support',
      ]}
      benefits={[
        'Reduced risk of costly opening delays',
        'Operationally ready from day one',
        'Budget control through structured planning',
        'Trained and confident opening team',
        'Strong launch that builds momentum',
        'Systems in place for sustainable operations',
      ]}
      relatedServices={serviceRelatedServices.filter(s => s.to !== '/services/launch').slice(0, 3)}
    />
  );
}
