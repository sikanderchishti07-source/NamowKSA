import type { L } from "./types";

/**
 * Enquiry-based packages. No prices are published by design.
 * Edit, reorder or set `enabled: false` to remove a package.
 */
export type Package = {
  id: string;
  enabled: boolean;
  name: L;
  summary: L;
  forWhom: L;
  scope: L[];
  nextStep: L;
  services: string[];
};

export const packages: Package[] = [
  {
    id: "launch",
    enabled: true,
    name: { en: "Restaurant Launch", ar: "إطلاق المطعم" },
    summary: {
      en: "Operational readiness for a new restaurant or café, from plan to opening week.",
      ar: "جاهزية تشغيلية لمطعم أو مقهى جديد، من الخطة إلى أسبوع الافتتاح.",
    },
    forWhom: {
      en: "First-time owners and investors preparing to open a new concept.",
      ar: "الملاك والمستثمرون الذين يستعدون لافتتاح مفهوم جديد لأول مرة.",
    },
    scope: [
      { en: "Opening readiness plan and timeline", ar: "خطة جاهزية الافتتاح والجدول الزمني" },
      { en: "Menu development, recipe cards and costing", ar: "تطوير القائمة وبطاقات الوصفات والتكاليف" },
      { en: "Core procedures and food safety documentation", ar: "الإجراءات الأساسية ووثائق سلامة الغذاء" },
      { en: "Staffing plan and pre-opening training", ar: "خطة التوظيف والتدريب قبل الافتتاح" },
      { en: "QR menu and launch website (optional)", ar: "قائمة QR وموقع إطلاق (اختياري)" },
    ],
    nextStep: {
      en: "Share your concept, location status and target opening date in a first consultation.",
      ar: "شاركنا فكرتك وحالة الموقع وموعد الافتتاح المستهدف في استشارة أولى.",
    },
    services: ["launch-expansion", "menu-engineering", "staffing-training"],
  },
  {
    id: "optimization",
    enabled: true,
    name: { en: "Operations Optimization", ar: "تحسين التشغيل" },
    summary: {
      en: "A structured review and improvement programme for a restaurant that is already trading.",
      ar: "برنامج منظم للمراجعة والتحسين لمطعم قائم يعمل بالفعل.",
    },
    forWhom: {
      en: "Established restaurants and cafés facing rising costs, inconsistency or owner overload.",
      ar: "المطاعم والمقاهي القائمة التي تواجه ارتفاع التكاليف أو تفاوت المستوى أو ضغطًا على المالك.",
    },
    scope: [
      { en: "Operational audit and prioritised findings", ar: "مراجعة تشغيلية ونتائج مرتبة حسب الأولوية" },
      { en: "Recipe costing and menu engineering", ar: "احتساب تكاليف الوصفات وهندسة القائمة" },
      { en: "Inventory, purchasing and waste controls", ar: "ضوابط المخزون والمشتريات والهدر" },
      { en: "Updated SOPs and manager training", ar: "تحديث إجراءات التشغيل وتدريب المديرين" },
    ],
    nextStep: {
      en: "Start with a conversation about your current numbers and the problems you see most often.",
      ar: "ابدأ بحوار حول أرقامك الحالية والمشكلات التي تتكرر أمامك.",
    },
    services: ["restaurant-operations", "food-costing", "inventory-waste-control"],
  },
  {
    id: "digital",
    enabled: true,
    name: { en: "Digital Transformation", ar: "التحول الرقمي" },
    summary: {
      en: "A practical move from paper and scattered spreadsheets to connected digital tools.",
      ar: "انتقال عملي من الورق والجداول المتفرقة إلى أدوات رقمية مترابطة.",
    },
    forWhom: {
      en: "Operators who want better information and less manual admin without a large IT project.",
      ar: "المشغّلون الذين يريدون معلومات أفضل وأعمالًا إدارية يدوية أقل دون مشروع تقني ضخم.",
    },
    scope: [
      { en: "Review of current systems and processes", ar: "مراجعة الأنظمة والإجراءات الحالية" },
      { en: "QR menu and restaurant website", ar: "قائمة QR وموقع إلكتروني للمطعم" },
      { en: "Performance dashboard and reporting routine", ar: "لوحة أداء وروتين تقارير" },
      { en: "Digital checklists and workflow automation", ar: "قوائم تحقق رقمية وأتمتة سير العمل" },
    ],
    nextStep: {
      en: "Tell us which systems you use today and where time is being lost.",
      ar: "أخبرنا بالأنظمة التي تستخدمها اليوم وأين يضيع الوقت.",
    },
    services: ["qr-digital-menus", "dashboards-reporting", "workflow-automation"],
  },
  {
    id: "growth",
    enabled: true,
    name: { en: "Growth and Multi-Branch Support", ar: "دعم النمو والفروع المتعددة" },
    summary: {
      en: "Standards, reporting and an opening playbook for brands adding branches.",
      ar: "معايير وتقارير ودليل افتتاح للعلامات التي تضيف فروعًا جديدة.",
    },
    forWhom: {
      en: "Brands with two or more branches, or a successful site preparing to expand.",
      ar: "العلامات التي لديها فرعان أو أكثر، أو موقع ناجح يستعد للتوسع.",
    },
    scope: [
      { en: "Brand operating standards and documentation", ar: "معايير تشغيل العلامة وتوثيقها" },
      { en: "Branch comparison dashboard", ar: "لوحة مقارنة بين الفروع" },
      { en: "Area and branch manager training", ar: "تدريب مديري المناطق والفروع" },
      { en: "New branch opening playbook", ar: "دليل افتتاح الفروع الجديدة" },
      { en: "Optional retained monthly support", ar: "دعم شهري مستمر (اختياري)" },
    ],
    nextStep: {
      en: "Book a consultation to discuss your current branches and expansion plans.",
      ar: "احجز استشارة لمناقشة فروعك الحالية وخطط التوسع.",
    },
    services: ["launch-expansion", "dashboards-reporting", "restaurant-operations"],
  },
  {
    id: "custom",
    enabled: true,
    name: { en: "Custom Consultancy", ar: "استشارات مخصصة" },
    summary: {
      en: "A scope built around a specific problem, decision or project.",
      ar: "نطاق عمل مبني حول مشكلة أو قرار أو مشروع محدد.",
    },
    forWhom: {
      en: "Owners with a particular challenge that doesn't fit a standard package.",
      ar: "الملاك الذين يواجهون تحديًا محددًا لا يناسب الباقات المعتادة.",
    },
    scope: [
      { en: "Any combination of our consultancy services", ar: "أي مزيج من خدماتنا الاستشارية" },
      { en: "Advisory sessions on specific decisions", ar: "جلسات استشارية لقرارات محددة" },
      { en: "Project-based digital work", ar: "أعمال رقمية على شكل مشاريع" },
    ],
    nextStep: {
      en: "Describe the challenge and we'll propose a scope.",
      ar: "صِف التحدي وسنقترح نطاق العمل المناسب.",
    },
    services: [],
  },
];

export const activePackages = packages.filter((p) => p.enabled);
