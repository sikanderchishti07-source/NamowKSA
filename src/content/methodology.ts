import type { L } from "./types";

export type MethodStage = {
  id: string;
  name: L;
  summary: L;
  activities: L[];
  outputs: L[];
};

export const methodology: MethodStage[] = [
  {
    id: "discover",
    name: { en: "Discover", ar: "الاستكشاف" },
    summary: {
      en: "We listen first: your goals, your concerns and how the business works today.",
      ar: "نبدأ بالاستماع: أهدافك ومخاوفك وطريقة عمل منشأتك اليوم.",
    },
    activities: [
      { en: "Introductory consultation with the owner or leadership", ar: "استشارة تعريفية مع المالك أو الإدارة" },
      { en: "Collection of sales, cost and staffing information", ar: "جمع معلومات المبيعات والتكاليف والتوظيف" },
      { en: "Agreement on scope and priorities", ar: "الاتفاق على النطاق والأولويات" },
    ],
    outputs: [{ en: "Written proposal with scope, timeline and fees", ar: "عرض مكتوب يتضمن النطاق والجدول الزمني والرسوم" }],
  },
  {
    id: "audit",
    name: { en: "Audit", ar: "المراجعة" },
    summary: {
      en: "We see the operation for ourselves and check the numbers behind it.",
      ar: "نرى التشغيل بأعيننا ونتحقق من الأرقام التي تقف خلفه.",
    },
    activities: [
      { en: "On-site observation across different shifts", ar: "ملاحظة ميدانية خلال ورديات مختلفة" },
      { en: "Team interviews and document review", ar: "مقابلات مع الفريق ومراجعة للوثائق" },
      { en: "Analysis of costs, menu mix and stock", ar: "تحليل التكاليف ومزيج القائمة والمخزون" },
    ],
    outputs: [{ en: "Audit findings ranked by impact and effort", ar: "نتائج المراجعة مرتبة حسب الأثر والجهد" }],
  },
  {
    id: "strategize",
    name: { en: "Strategize", ar: "التخطيط" },
    summary: {
      en: "Together we decide what to change, in what order, and how we'll know it worked.",
      ar: "نقرر معًا ما الذي سيتغير، وبأي ترتيب، وكيف سنعرف أنه نجح.",
    },
    activities: [
      { en: "Workshop on findings with owners and managers", ar: "ورشة لمناقشة النتائج مع الملاك والمديرين" },
      { en: "Selection of initiatives and quick wins", ar: "اختيار المبادرات والمكاسب السريعة" },
      { en: "Definition of measures and baselines", ar: "تحديد المؤشرات وخطوط الأساس" },
    ],
    outputs: [{ en: "Action plan with owners, dates and measures", ar: "خطة عمل بمسؤولين ومواعيد ومؤشرات" }],
  },
  {
    id: "implement",
    name: { en: "Implement", ar: "التنفيذ" },
    summary: {
      en: "We build the procedures, tools and training, and put them to work with your team.",
      ar: "نبني الإجراءات والأدوات والتدريب، ونطبقها مع فريقك.",
    },
    activities: [
      { en: "Preparation of SOPs, recipe cards and templates", ar: "إعداد إجراءات التشغيل وبطاقات الوصفات والنماذج" },
      { en: "Setup of digital tools where agreed", ar: "إعداد الأدوات الرقمية المتفق عليها" },
      { en: "Training sessions and on-the-floor coaching", ar: "جلسات تدريب وتوجيه أثناء العمل" },
    ],
    outputs: [{ en: "Working systems in daily use", ar: "أنظمة تعمل في الاستخدام اليومي" }],
  },
  {
    id: "monitor",
    name: { en: "Monitor", ar: "المتابعة" },
    summary: {
      en: "We check that changes are holding and that the numbers are moving.",
      ar: "نتحقق من ثبات التغييرات ومن تحرك الأرقام.",
    },
    activities: [
      { en: "Follow-up visits and spot checks", ar: "زيارات متابعة وفحوصات مفاجئة" },
      { en: "Review of agreed measures against baseline", ar: "مراجعة المؤشرات المتفق عليها مقابل خط الأساس" },
      { en: "Feedback from managers and staff", ar: "ملاحظات المديرين والموظفين" },
    ],
    outputs: [{ en: "Progress report against the action plan", ar: "تقرير تقدّم مقابل خطة العمل" }],
  },
  {
    id: "optimize",
    name: { en: "Optimize", ar: "التحسين" },
    summary: {
      en: "We refine what works, fix what doesn't, and set the next priorities.",
      ar: "نطوّر ما ينجح، ونصلح ما لا ينجح، ونحدد الأولويات التالية.",
    },
    activities: [
      { en: "Adjustment of procedures and tools", ar: "تعديل الإجراءات والأدوات" },
      { en: "Handover of routines to your team", ar: "تسليم الروتين لفريقك" },
      { en: "Recommendations for the next phase", ar: "توصيات للمرحلة التالية" },
    ],
    outputs: [{ en: "Closing review and next-step recommendations", ar: "مراجعة ختامية وتوصيات للخطوات التالية" }],
  },
];
