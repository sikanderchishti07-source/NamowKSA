import type { L } from "./types";
import type { ImageKey } from "./images";

export type Block =
  | { type: "p"; text: L }
  | { type: "h2"; text: L }
  | { type: "ul"; items: L[] };

export type Article = {
  slug: string;
  enabled: boolean;
  date: string; // ISO
  minutes: number;
  image: ImageKey;
  title: L;
  excerpt: L;
  body: Block[];
  services: string[];
};

export const articles: Article[] = [
  {
    slug: "theoretical-vs-actual-food-cost",
    enabled: true,
    date: "2026-10-20",
    minutes: 5,
    image: "spices",
    title: {
      en: "Theoretical vs actual food cost: where the gap comes from",
      ar: "تكلفة الطعام النظرية مقابل الفعلية: من أين تأتي الفجوة",
    },
    excerpt: {
      en: "Your recipes say food cost should be one number. Your stock count says another. Here's how to find out why.",
      ar: "تقول وصفاتك إن تكلفة الطعام يجب أن تكون رقمًا معينًا، ويقول الجرد رقمًا آخر. إليك كيف تعرف السبب.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Every restaurant has two food cost figures, whether it measures them or not. Theoretical food cost is what you should have spent if every dish was made exactly to recipe and nothing was wasted. Actual food cost is what you really spent, calculated from purchases and stock counts. The difference between them is money that left the business without reaching a guest's plate.",
          ar: "لكل مطعم رقمان لتكلفة الطعام، سواء قاسهما أم لا. التكلفة النظرية هي ما كان ينبغي أن تنفقه لو حُضِّر كل طبق وفق الوصفة تمامًا ولم يُهدر شيء. والتكلفة الفعلية هي ما أنفقته حقًا، محسوبًا من المشتريات والجرد. والفرق بينهما مال خرج من المنشأة دون أن يصل إلى طبق الضيف.",
        },
      },
      { type: "h2", text: { en: "Calculating both numbers", ar: "حساب الرقمين" } },
      {
        type: "p",
        text: {
          en: "Theoretical cost needs two things: an accurate cost for every recipe and item-level sales from your POS. Multiply each item's recipe cost by the number sold and add them up. Actual cost is opening stock plus purchases minus closing stock, for the same period. Divide each by food sales to compare percentages.",
          ar: "تحتاج التكلفة النظرية إلى أمرين: تكلفة دقيقة لكل وصفة، ومبيعات كل صنف من نظام نقاط البيع. اضرب تكلفة وصفة كل صنف في عدد ما بِيع منه، ثم اجمع النتائج. أما التكلفة الفعلية فهي مخزون أول المدة مضافًا إليه المشتريات مطروحًا منه مخزون آخر المدة، للفترة نفسها. اقسم كلًّا منهما على مبيعات الطعام لمقارنة النسب.",
        },
      },
      { type: "h2", text: { en: "The usual causes", ar: "الأسباب المعتادة" } },
      {
        type: "ul",
        items: [
          { en: "Over-portioning, especially on proteins and sauces", ar: "زيادة الحصص، خاصة في البروتينات والصلصات" },
          { en: "Unrecorded waste from over-preparation or spoilage", ar: "هدر غير مسجّل بسبب التحضير الزائد أو التلف" },
          { en: "Staff meals and complimentary items that aren't logged", ar: "وجبات الموظفين والأصناف المجانية غير المسجلة" },
          { en: "Recipe costs based on old supplier prices or wrong yields", ar: "تكاليف وصفات مبنية على أسعار قديمة أو نسب صافي خاطئة" },
          { en: "Counting errors and deliveries accepted without checks", ar: "أخطاء الجرد وشحنات تُستلم دون فحص" },
        ],
      },
      { type: "h2", text: { en: "Closing the gap", ar: "سدّ الفجوة" } },
      {
        type: "p",
        text: {
          en: "Start by making sure recipe costs are current, otherwise you are chasing a phantom gap. Then add a waste log and a staff meal log for a month, and spot-check portions on your top-selling items. In most kitchens, those three steps explain a large share of the variance and point clearly to what needs fixing.",
          ar: "ابدأ بالتأكد من أن تكاليف الوصفات محدّثة، وإلا فإنك تطارد فجوة وهمية. ثم أضف سجلًا للهدر وآخر لوجبات الموظفين لمدة شهر، وافحص الحصص عشوائيًا في الأصناف الأكثر مبيعًا. في معظم المطابخ، تفسّر هذه الخطوات الثلاث جزءًا كبيرًا من الفرق وتشير بوضوح إلى ما يجب إصلاحه.",
        },
      },
    ],
    services: ["food-costing", "inventory-waste-control"],
  },
  {
    slug: "menu-engineering-basics",
    enabled: true,
    date: "2026-10-13",
    minutes: 6,
    image: "plating",
    title: {
      en: "Menu engineering basics: popularity, margin and the four quadrants",
      ar: "أساسيات هندسة القوائم: الشعبية والهامش والأرباع الأربعة",
    },
    excerpt: {
      en: "A simple framework for deciding which dishes to promote, rework, reprice or remove.",
      ar: "إطار بسيط لتقرر أي الأطباق تروّج لها، وأيها تعيد تطويرها أو تسعيرها، وأيها تحذفها.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Menu engineering looks at each dish on two measures: how often it sells compared with other items in its category, and how much contribution margin it brings in, meaning price minus food cost. Plotting both gives four groups, each with a different course of action.",
          ar: "تنظر هندسة القوائم إلى كل طبق من زاويتين: مدى تكرار بيعه مقارنة ببقية أصناف فئته، وقيمة هامش المساهمة الذي يحققه، أي السعر مطروحًا منه تكلفة الطعام. ويؤدي الجمع بين المقياسين إلى أربع مجموعات، لكل منها إجراء مختلف.",
        },
      },
      { type: "h2", text: { en: "The four groups", ar: "المجموعات الأربع" } },
      {
        type: "ul",
        items: [
          {
            en: "High popularity, high margin: your strongest dishes. Protect the recipe and give them the best positions on the menu.",
            ar: "شعبية عالية وهامش عالٍ: أقوى أطباقك. حافظ على وصفتها وامنحها أفضل المواقع في القائمة.",
          },
          {
            en: "High popularity, low margin: guests love them but they earn little. Review portion, recipe cost or price carefully.",
            ar: "شعبية عالية وهامش منخفض: يحبها الضيوف لكنها تحقق القليل. راجع الحصة أو تكلفة الوصفة أو السعر بعناية.",
          },
          {
            en: "Low popularity, high margin: profitable but overlooked. Try better placement, a clearer description or staff recommendation.",
            ar: "شعبية منخفضة وهامش عالٍ: مربحة لكنها مهملة. جرّب موقعًا أفضل أو وصفًا أوضح أو توصية من فريق الخدمة.",
          },
          {
            en: "Low popularity, low margin: candidates for removal, unless they serve a clear purpose such as a dietary option.",
            ar: "شعبية منخفضة وهامش منخفض: مرشحة للحذف، ما لم تؤدِّ غرضًا واضحًا كخيار غذائي خاص.",
          },
        ],
      },
      { type: "h2", text: { en: "Getting the inputs right", ar: "دقة المدخلات" } },
      {
        type: "p",
        text: {
          en: "The analysis is only as good as its data. Use at least a few months of sales to smooth out seasonal swings, and make sure recipe costs reflect current prices and real yields. Analyse each category separately: comparing a coffee with a main course tells you little.",
          ar: "لا تكون نتائج التحليل أفضل من بياناته. استخدم مبيعات عدة أشهر على الأقل لتخفيف أثر التقلبات الموسمية، وتأكد أن تكاليف الوصفات تعكس الأسعار الحالية ونسب الصافي الحقيقية. وحلّل كل فئة على حدة؛ فمقارنة القهوة بطبق رئيسي لا تخبرك بالكثير.",
        },
      },
      {
        type: "p",
        text: {
          en: "Finally, treat the result as a starting point for decisions, not an automatic verdict. Some low performers anchor your brand; some popular dishes bring guests who order profitable sides. Judgement still matters.",
          ar: "وأخيرًا، تعامل مع النتيجة بوصفها نقطة انطلاق للقرار لا حكمًا تلقائيًا؛ فبعض الأطباق الأضعف أداءً تمثل جوهر علامتك، وبعض الأطباق الشائعة تجلب ضيوفًا يطلبون أصنافًا جانبية مربحة. يبقى التقدير المهني ضروريًا.",
        },
      },
    ],
    services: ["menu-engineering", "food-costing"],
  },
  {
    slug: "before-you-open-another-branch",
    enabled: true,
    date: "2026-10-06",
    minutes: 5,
    image: "diningLarge",
    title: {
      en: "Before you open another branch: five things to standardise first",
      ar: "قبل افتتاح فرع جديد: خمسة أمور يجب توحيدها أولًا",
    },
    excerpt: {
      en: "A successful first site doesn't automatically become a successful second one. These foundations make the difference.",
      ar: "نجاح الفرع الأول لا يعني تلقائيًا نجاح الثاني. هذه الأسس هي ما يصنع الفرق.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Much of what makes a first restaurant work lives in the owner's head and in the habits of a few key people. A second branch needs those things written down, taught and measured, otherwise quality and margins drift from day one.",
          ar: "كثير مما يُنجح المطعم الأول يعيش في ذهن المالك وفي عادات عدد قليل من الأشخاص الرئيسيين. أما الفرع الثاني فيحتاج إلى توثيق ذلك وتعليمه وقياسه، وإلا تراجعت الجودة والهوامش منذ اليوم الأول.",
        },
      },
      {
        type: "ul",
        items: [
          { en: "Recipes: exact quantities, methods, portion sizes and plating photos", ar: "الوصفات: كميات دقيقة، وطرق تحضير، وأحجام حصص، وصور تقديم" },
          { en: "Procedures: opening, closing, receiving, cleaning and cash handling", ar: "الإجراءات: الافتتاح، والإغلاق، والاستلام، والنظافة، والتعامل مع النقد" },
          { en: "Purchasing: approved suppliers, specifications and order guides", ar: "المشتريات: موردون معتمدون، ومواصفات، وأدلة طلب" },
          { en: "People: role descriptions and a training path for each position", ar: "الكوادر: أوصاف وظيفية ومسار تدريب لكل وظيفة" },
          { en: "Reporting: the same measures, defined the same way, for every branch", ar: "التقارير: المؤشرات نفسها، بالتعريفات نفسها، لكل فرع" },
        ],
      },
      { type: "h2", text: { en: "Test the system on the first site", ar: "اختبر النظام في الفرع الأول" } },
      {
        type: "p",
        text: {
          en: "The best test of your standards is whether your current restaurant can run on them while you step back. If managers can follow the documents without calling you, they are probably ready to travel to a new location.",
          ar: "أفضل اختبار لمعاييرك هو قدرة مطعمك الحالي على العمل بها وأنت تبتعد قليلًا. فإذا استطاع المديرون اتباع الوثائق دون الاتصال بك، فالأرجح أنها جاهزة للانتقال إلى موقع جديد.",
        },
      },
    ],
    services: ["launch-expansion", "restaurant-operations", "dashboards-reporting"],
  },
];

export const publishedArticles = articles
  .filter((a) => a.enabled)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string) {
  return publishedArticles.find((a) => a.slug === slug);
}
