import type { Block } from "./insights";
import type { L } from "./types";

/**
 * Legal pages. These are working drafts written for a Saudi-based consultancy
 * and must be reviewed by qualified counsel (including against the Personal
 * Data Protection Law) before publication. Fill in the company's legal name,
 * commercial registration and address where marked.
 */
export type LegalDoc = { slug: "privacy" | "terms" | "cookies"; title: L; updated: string; body: Block[] };

const p = (en: string, ar: string): Block => ({ type: "p", text: { en, ar } });
const h = (en: string, ar: string): Block => ({ type: "h2", text: { en, ar } });

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: { en: "Privacy policy", ar: "سياسة الخصوصية" },
    updated: "2026-10-24",
    body: [
      p(
        "This policy explains how NamowKSA (\"we\") collects and uses personal data through this website. We process personal data in accordance with the applicable laws of the Kingdom of Saudi Arabia, including the Personal Data Protection Law.",
        "توضح هذه السياسة كيف تجمع NamowKSA («نحن») البيانات الشخصية وتستخدمها عبر هذا الموقع. نعالج البيانات الشخصية وفقًا للأنظمة المعمول بها في المملكة العربية السعودية، بما فيها نظام حماية البيانات الشخصية.",
      ),
      h("Data we collect", "البيانات التي نجمعها"),
      {
        type: "ul",
        items: [
          {
            en: "Information you submit through our enquiry form: your name, business name, email address, phone number, business type, service of interest, project details and preferred contact method.",
            ar: "المعلومات التي ترسلها عبر نموذج الاستفسار: الاسم، واسم المنشأة، والبريد الإلكتروني، ورقم الهاتف، ونوع المنشأة، والخدمة المطلوبة، وتفاصيل المشروع، ووسيلة التواصل المفضلة.",
          },
          {
            en: "Information you send us directly by email, phone or WhatsApp.",
            ar: "المعلومات التي ترسلها إلينا مباشرة عبر البريد الإلكتروني أو الهاتف أو واتساب.",
          },
          {
            en: "Basic technical data processed by our hosting provider to deliver and secure the website, such as IP address and browser type.",
            ar: "بيانات تقنية أساسية يعالجها مزوّد الاستضافة لتقديم الموقع وتأمينه، مثل عنوان IP ونوع المتصفح.",
          },
        ],
      },
      h("How we use it", "كيف نستخدمها"),
      p(
        "We use enquiry data only to respond to you, discuss your requirements and prepare proposals. We do not sell personal data or use it for unrelated marketing without your consent.",
        "نستخدم بيانات الاستفسار فقط للرد عليك ومناقشة احتياجاتك وإعداد العروض. لا نبيع البيانات الشخصية، ولا نستخدمها لأغراض تسويقية غير ذات صلة دون موافقتك.",
      ),
      h("Sharing", "مشاركة البيانات"),
      p(
        "Enquiries are delivered to us through service providers that process data on our behalf, such as our email delivery and hosting providers. They may only use the data to provide their service to us.",
        "تصل الاستفسارات إلينا عبر مزوّدي خدمات يعالجون البيانات نيابةً عنا، مثل مزوّدي إرسال البريد والاستضافة، ولا يحق لهم استخدام البيانات إلا لتقديم خدماتهم لنا.",
      ),
      h("Retention", "مدة الاحتفاظ"),
      p(
        "We keep enquiry data for as long as needed to handle your enquiry and any resulting business relationship, and then delete it unless we are required by law to keep it.",
        "نحتفظ ببيانات الاستفسار طوال المدة اللازمة لمعالجته ولأي علاقة عمل تنشأ عنه، ثم نحذفها ما لم يُلزمنا النظام بالاحتفاظ بها.",
      ),
      h("Your rights", "حقوقك"),
      p(
        "You may ask to access, correct or delete your personal data, or withdraw your consent, by contacting us using the details on our contact page. We will respond within the periods required by law.",
        "يحق لك طلب الاطلاع على بياناتك الشخصية أو تصحيحها أو حذفها، أو سحب موافقتك، بالتواصل معنا عبر البيانات الموضحة في صفحة التواصل، وسنرد خلال المدد التي يحددها النظام.",
      ),
      h("Contact", "التواصل"),
      p(
        "[Company legal name, commercial registration number and registered address to be added.]",
        "[يُضاف الاسم القانوني للشركة ورقم السجل التجاري والعنوان المسجل.]",
      ),
    ],
  },
  {
    slug: "terms",
    title: { en: "Terms of use", ar: "شروط الاستخدام" },
    updated: "2026-10-24",
    body: [
      p(
        "These terms govern your use of this website. By using the site you agree to them.",
        "تحكم هذه الشروط استخدامك لهذا الموقع، وباستخدامك له فإنك توافق عليها.",
      ),
      h("Information on this site", "المعلومات في هذا الموقع"),
      p(
        "Content on this website is general information about our services. It is not professional advice for your specific situation, and any engagement is governed by a separate written agreement.",
        "المحتوى في هذا الموقع معلومات عامة عن خدماتنا، وليس استشارة مهنية لحالتك الخاصة، وأي تعاقد يخضع لاتفاقية مكتوبة مستقلة.",
      ),
      h("Demonstrations and sample data", "العروض التوضيحية والبيانات الافتراضية"),
      p(
        "Dashboards, menus and other demonstrations on this site use sample data for illustration. They are not connected to any live restaurant system and do not represent results achieved for any client.",
        "تستخدم لوحات المتابعة والقوائم والعروض التوضيحية الأخرى في هذا الموقع بيانات افتراضية لأغراض الإيضاح، وهي غير مرتبطة بأي نظام مطعم فعلي، ولا تمثل نتائج حققناها لأي عميل.",
      ),
      h("Intellectual property", "الملكية الفكرية"),
      p(
        "The NamowKSA name, logo, text and design of this website belong to NamowKSA or its licensors. Photography is used under its respective licence.",
        "اسم NamowKSA وشعارها ونصوص هذا الموقع وتصميمه مملوكة لـ NamowKSA أو للجهات المرخِّصة لها، وتُستخدم الصور وفق تراخيصها.",
      ),
      h("Governing law", "النظام الواجب التطبيق"),
      p(
        "These terms are governed by the laws of the Kingdom of Saudi Arabia.",
        "تخضع هذه الشروط لأنظمة المملكة العربية السعودية.",
      ),
    ],
  },
  {
    slug: "cookies",
    title: { en: "Cookie notice", ar: "إشعار ملفات تعريف الارتباط" },
    updated: "2026-10-24",
    body: [
      p(
        "This website uses a single strictly necessary cookie, NEXT_LOCALE, to remember whether you chose Arabic or English. It contains no personal information and expires after one year.",
        "يستخدم هذا الموقع ملف تعريف ارتباط واحدًا ضروريًا فقط، هو NEXT_LOCALE، لتذكّر اختيارك بين العربية والإنجليزية. لا يحتوي على أي معلومات شخصية، وتنتهي صلاحيته بعد عام واحد.",
      ),
      p(
        "We do not use advertising or tracking cookies. If analytics are added in future, this notice will be updated and, where required, your consent will be requested first.",
        "لا نستخدم ملفات ارتباط إعلانية أو للتتبع. وإذا أُضيفت أدوات تحليل مستقبلًا، فسيُحدَّث هذا الإشعار، وسنطلب موافقتك مسبقًا حيث يلزم ذلك.",
      ),
      p(
        "Photographs on this site are loaded from the Unsplash image service, which may receive standard technical information such as your IP address when images load.",
        "تُحمَّل الصور في هذا الموقع من خدمة الصور Unsplash، التي قد تتلقى معلومات تقنية اعتيادية مثل عنوان IP عند تحميل الصور.",
      ),
    ],
  },
];

export function getLegalDoc(slug: LegalDoc["slug"]) {
  return legalDocs.find((d) => d.slug === slug)!;
}
