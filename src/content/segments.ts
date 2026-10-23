import type { L } from "./types";
import type { ImageKey } from "./images";

export type Segment = {
  id: string;
  name: L;
  summary: L;
  priorities: L[];
  services: string[];
  image: ImageKey;
};

export const segments: Segment[] = [
  {
    id: "new",
    name: { en: "New restaurants", ar: "المطاعم الجديدة" },
    summary: {
      en: "Getting the foundations right before the doors open: menu, costs, team and procedures.",
      ar: "بناء الأسس الصحيحة قبل فتح الأبواب: القائمة والتكاليف والفريق والإجراءات.",
    },
    priorities: [
      { en: "A realistic opening plan and timeline", ar: "خطة افتتاح وجدول زمني واقعيان" },
      { en: "Costed, tested recipes from day one", ar: "وصفات مختبرة ومحتسبة التكلفة منذ اليوم الأول" },
      { en: "A trained team before the first service", ar: "فريق مدرَّب قبل الخدمة الأولى" },
    ],
    services: ["launch-expansion", "menu-engineering", "staffing-training"],
    image: "diningTree",
  },
  {
    id: "established",
    name: { en: "Established restaurants", ar: "المطاعم القائمة" },
    summary: {
      en: "Restoring margin and consistency in a business that has grown busier but not easier.",
      ar: "استعادة الهامش وثبات المستوى في منشأة ازداد ضغط عملها دون أن تصبح إدارتها أسهل.",
    },
    priorities: [
      { en: "Understanding where profit is being lost", ar: "معرفة أين يضيع الربح" },
      { en: "Consistent quality across shifts", ar: "جودة ثابتة بين الورديات" },
      { en: "Freeing the owner from daily operations", ar: "تحرير المالك من التشغيل اليومي" },
    ],
    services: ["restaurant-operations", "food-costing", "inventory-waste-control"],
    image: "diningRoom",
  },
  {
    id: "cafes",
    name: { en: "Cafés and coffee shops", ar: "المقاهي" },
    summary: {
      en: "High volume, small tickets and tight margins, where small inefficiencies add up fast.",
      ar: "حجم مبيعات مرتفع، وقيمة فاتورة صغيرة، وهوامش ضيقة، حيث تتراكم أوجه القصور الصغيرة بسرعة.",
    },
    priorities: [
      { en: "Accurate costing of drinks and bakery items", ar: "احتساب دقيق لتكلفة المشروبات والمخبوزات" },
      { en: "Speed and consistency at the bar", ar: "السرعة وثبات الجودة عند منضدة التحضير" },
      { en: "Waste control on fresh and perishable products", ar: "ضبط هدر المنتجات الطازجة سريعة التلف" },
    ],
    services: ["food-costing", "staffing-training", "qr-digital-menus"],
    image: "cafeCounter",
  },
  {
    id: "multi",
    name: { en: "Multi-branch groups", ar: "المجموعات متعددة الفروع" },
    summary: {
      en: "Keeping standards, reporting and control consistent as the number of branches grows.",
      ar: "الحفاظ على اتساق المعايير والتقارير والرقابة مع ازدياد عدد الفروع.",
    },
    priorities: [
      { en: "One operating standard across every branch", ar: "معيار تشغيل واحد لجميع الفروع" },
      { en: "Comparable branch reporting", ar: "تقارير قابلة للمقارنة بين الفروع" },
      { en: "A repeatable model for new openings", ar: "نموذج قابل للتكرار للافتتاحات الجديدة" },
    ],
    services: ["dashboards-reporting", "launch-expansion", "workflow-automation"],
    image: "diningLarge",
  },
];
