import type { L } from "./types";

/**
 * Photography library. Images are served from the Unsplash CDN (free to use
 * under the Unsplash License). To use your own photography, replace `src`
 * with a path under /public (e.g. "/images/hero.jpg"); the Photo component
 * handles both. Wine and alcohol imagery is intentionally excluded.
 */
export type ImageAsset = { src: string; alt: L; credit?: string };

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  /** Homepage hero background, generated with Higgsfield (GPT Image 2.5) for NamowKSA. */
  heroBackground: {
    src: "/images/hero-restaurant.jpg",
    alt: {
      en: "An upscale restaurant dining room in deep navy and teal, set for evening service under warm brass pendant lights",
      ar: "صالة طعام راقية بدرجات الكحلي والأزرق المخضر، مُعدّة لخدمة المساء تحت إضاءة نحاسية دافئة",
    },
  },
  /** Homepage "why us" photo, generated with Higgsfield (GPT Image 2.5). */
  chefPass: {
    src: "/images/chef-pass.jpg",
    alt: {
      en: "A chef finishing a plate under brass heat lamps at the kitchen pass",
      ar: "طاهٍ يضع اللمسات الأخيرة على طبق تحت مصابيح التسخين النحاسية عند منصة التقديم",
    },
  },
  heroDish: {
    src: u("photo-1414235077428-338989a2e8c0"),
    alt: { en: "A plated dish under warm restaurant lighting", ar: "طبق مُقدَّم بعناية تحت إضاءة مطعم دافئة" },
  },
  diningRoom: {
    src: u("photo-1552960226-639240203497"),
    alt: { en: "Pendant lamps glowing over an empty dining room", ar: "مصابيح معلقة تضيء صالة طعام هادئة" },
  },
  diningWood: {
    src: u("photo-1602232037779-30b01ac3c457"),
    alt: { en: "Wooden tables and chairs in a restaurant dining room", ar: "طاولات وكراسٍ خشبية في صالة مطعم" },
  },
  diningTree: {
    src: u("photo-1636405189493-181ecf851006"),
    alt: { en: "A restaurant interior arranged around an indoor tree", ar: "صالة مطعم مصممة حول شجرة داخلية" },
  },
  diningLarge: {
    src: u("photo-1633944241961-e511ab23455f"),
    alt: { en: "A large restaurant floor set for service", ar: "صالة مطعم واسعة جاهزة للخدمة" },
  },
  tableSetting: {
    src: u("photo-1599458252573-56ae36120de1"),
    alt: { en: "A white plate set on a wooden table", ar: "طبق أبيض على طاولة خشبية" },
  },
  kitchenPots: {
    src: u("photo-1588416820614-f8d6ac6cea56"),
    alt: { en: "Stainless steel pots on a commercial stove", ar: "قدور من الستانلس ستيل على موقد تجاري" },
  },
  kitchenUtensils: {
    src: u("photo-1749478072094-d21cb929490c"),
    alt: { en: "Utensils hanging in a professional kitchen", ar: "أدوات معلقة في مطبخ احترافي" },
  },
  kitchenClean: {
    src: u("photo-1589109807644-924edf14ee09"),
    alt: { en: "A clean commercial kitchen with steel shelving", ar: "مطبخ تجاري نظيف برفوف معدنية" },
  },
  kitchenBrigade: {
    src: u("photo-1767785990437-dfe1fe516fe8"),
    alt: { en: "Chefs working through a busy service", ar: "طهاة يعملون خلال وقت خدمة مزدحم" },
  },
  garnish: {
    src: u("photo-1503453776591-b4548af666a2"),
    alt: { en: "A dish being garnished before service", ar: "تزيين طبق قبل تقديمه" },
  },
  plating: {
    src: u("photo-1577106263724-2c8e03bfe9cf"),
    alt: { en: "Food being plated by hand", ar: "تقديم الطعام في الطبق يدويًا" },
  },
  platedDish: {
    src: u("photo-1603073163308-9654c3fb70b5"),
    alt: { en: "A carefully plated restaurant dish", ar: "طبق مطعم مُقدَّم بعناية" },
  },
  bowl: {
    src: u("photo-1559847844-5315695dadae"),
    alt: { en: "A bowl of freshly prepared food", ar: "وعاء من الطعام المحضَّر طازجًا" },
  },
  spices: {
    src: u("photo-1596040033229-a9821ebd058d"),
    alt: { en: "A variety of spices laid out on a table", ar: "تشكيلة من البهارات على طاولة" },
  },
  pantry: {
    src: u("photo-1591272216626-b09e38519371"),
    alt: { en: "Spices stored in labelled glass containers", ar: "بهارات محفوظة في عبوات زجاجية" },
  },
  cafeCounter: {
    src: u("photo-1501339847302-ac426a4a7cbb"),
    alt: { en: "A café counter with pendant lamps and menu boards", ar: "منضدة مقهى بمصابيح معلقة ولوحات قائمة" },
  },
  cafeInterior: {
    src: u("photo-1511081692775-05d0f180a065"),
    alt: { en: "A café interior with hanging bulbs", ar: "مقهى بإضاءة معلقة دافئة" },
  },
  cafeTable: {
    src: u("photo-1542372147193-a7aca54189cd"),
    alt: { en: "A latte and croissant on a café table", ar: "قهوة لاتيه وكرواسون على طاولة مقهى" },
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
