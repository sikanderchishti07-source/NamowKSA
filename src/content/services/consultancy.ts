import type { Service } from "./types";

export const consultancyServices: Service[] = [
  {
    slug: "restaurant-operations",
    category: "consultancy",
    enabled: true,
    image: "kitchenBrigade",
    title: { en: "Restaurant Operations Management", ar: "إدارة تشغيل المطاعم" },
    short: {
      en: "Operational audits, standard operating procedures and day-to-day routines that make service consistent.",
      ar: "مراجعات تشغيلية، وإجراءات تشغيل قياسية، وروتين يومي يجعل الخدمة ثابتة المستوى.",
    },
    headline: {
      en: "An operation that runs the same way on every shift",
      ar: "تشغيل يسير بالمستوى نفسه في كل وردية",
    },
    intro: {
      en: "We review how your restaurant actually runs, from opening checks to closing cash-up, then build the procedures, roles and routines that make good service repeatable. The goal is an operation your managers can run confidently without every decision passing through the owner.",
      ar: "نراجع كيف يعمل مطعمك فعليًا، من فحوصات الافتتاح إلى إقفال الصندوق، ثم نبني الإجراءات والأدوار والروتين الذي يجعل الخدمة الجيدة قابلة للتكرار. والهدف تشغيل يديره مديروك بثقة دون أن يمر كل قرار عبر المالك.",
    },
    problems: [
      { en: "Service quality depends on which manager or chef is on shift.", ar: "جودة الخدمة تعتمد على المدير أو الطاهي المناوب." },
      { en: "Procedures exist only in people's heads, so new staff learn by guesswork.", ar: "الإجراءات موجودة في أذهان الأشخاص فقط، فيتعلم الموظفون الجدد بالتخمين." },
      { en: "The owner is pulled into daily problems and has no time for growth.", ar: "ينشغل المالك بالمشكلات اليومية ولا يجد وقتًا للتطوير." },
      { en: "Opening, closing and handover routines are inconsistent or skipped.", ar: "إجراءات الافتتاح والإغلاق والتسليم غير منتظمة أو تُهمَل." },
    ],
    approach: [
      {
        title: { en: "Operational audit", ar: "مراجعة تشغيلية" },
        body: {
          en: "We observe service, walk the kitchen and front of house, interview the team and review existing documents to map how work really happens.",
          ar: "نراقب الخدمة، ونتجول في المطبخ والصالة، ونقابل الفريق، ونراجع الوثائق الحالية لرسم صورة دقيقة لسير العمل الفعلي.",
        },
      },
      {
        title: { en: "Findings and priorities", ar: "النتائج والأولويات" },
        body: {
          en: "You receive a clear report of strengths, gaps and risks, ranked by impact and effort, with a recommended order of work.",
          ar: "تحصل على تقرير واضح بنقاط القوة والفجوات والمخاطر، مرتبة حسب الأثر والجهد، مع ترتيب مقترح للعمل.",
        },
      },
      {
        title: { en: "Procedures and roles", ar: "الإجراءات والأدوار" },
        body: {
          en: "We write standard operating procedures, checklists and role descriptions in plain language, in Arabic, English or both.",
          ar: "نكتب إجراءات التشغيل القياسية وقوائم التحقق ووصف الأدوار بلغة واضحة، بالعربية أو الإنجليزية أو كلتيهما.",
        },
      },
      {
        title: { en: "Embedding and follow-up", ar: "الترسيخ والمتابعة" },
        body: {
          en: "We train managers to use the new routines, then return to check adoption and adjust what isn't working.",
          ar: "ندرّب المديرين على استخدام الروتين الجديد، ثم نعود للتحقق من تطبيقه وتعديل ما لا يعمل كما ينبغي.",
        },
      },
    ],
    deliverables: [
      { en: "Operational audit report with prioritised recommendations", ar: "تقرير مراجعة تشغيلية بتوصيات مرتبة حسب الأولوية" },
      { en: "Standard operating procedures for kitchen and front of house", ar: "إجراءات تشغيل قياسية للمطبخ والصالة" },
      { en: "Opening, closing, shift handover and cleaning checklists", ar: "قوائم تحقق للافتتاح والإغلاق وتسليم الوردية والنظافة" },
      { en: "Role descriptions and a clear reporting structure", ar: "أوصاف وظيفية وهيكل واضح للمسؤوليات" },
      { en: "Manager briefing sessions and a follow-up review", ar: "جلسات إحاطة للمديرين ومراجعة متابعة" },
    ],
    benefits: [
      { en: "More consistent service and product quality across shifts", ar: "ثبات أكبر في جودة الخدمة والمنتج بين الورديات" },
      { en: "Faster, more structured onboarding of new staff", ar: "تهيئة أسرع وأكثر تنظيمًا للموظفين الجدد" },
      { en: "Less owner time spent on daily firefighting", ar: "وقت أقل يقضيه المالك في معالجة الطوارئ اليومية" },
      { en: "A documented operation that is easier to replicate in new branches", ar: "تشغيل موثّق يسهل نقله إلى فروع جديدة" },
    ],
    faqs: [
      {
        q: { en: "How long does an operational audit take?", ar: "كم تستغرق المراجعة التشغيلية؟" },
        a: {
          en: "For a single site, fieldwork usually takes a few days spread across different shifts, followed by the written report. Multi-branch reviews take longer and are scoped individually.",
          ar: "للموقع الواحد يستغرق العمل الميداني عادةً بضعة أيام موزعة على ورديات مختلفة، يليه التقرير المكتوب. أما مراجعات الفروع المتعددة فتستغرق وقتًا أطول ويُحدَّد نطاقها لكل حالة.",
        },
      },
      {
        q: { en: "Will the audit disrupt service?", ar: "هل تؤثر المراجعة على سير الخدمة؟" },
        a: {
          en: "No. We observe quietly and schedule interviews around peak periods. Your guests should not notice we are there.",
          ar: "لا. نراقب بهدوء ونجدول المقابلات بعيدًا عن أوقات الذروة، ولن يلاحظ ضيوفك وجودنا.",
        },
      },
      {
        q: { en: "Can you write procedures in Arabic and English?", ar: "هل يمكنكم كتابة الإجراءات بالعربية والإنجليزية؟" },
        a: {
          en: "Yes. We prepare documents in whichever languages your team works in, and keep them short enough to be used on the floor.",
          ar: "نعم. نُعدّ الوثائق باللغات التي يعمل بها فريقك، ونحرص على أن تكون موجزة بما يكفي لاستخدامها أثناء العمل.",
        },
      },
    ],
    related: ["staffing-training", "food-safety-compliance", "dashboards-reporting"],
    seoDescription: {
      en: "Restaurant operations consulting in Saudi Arabia: operational audits, SOPs, checklists and management routines that make service consistent.",
      ar: "استشارات تشغيل المطاعم في السعودية: مراجعات تشغيلية، وإجراءات تشغيل قياسية، وقوائم تحقق، وروتين إداري يضمن ثبات الخدمة.",
    },
  },
  {
    slug: "menu-engineering",
    category: "consultancy",
    enabled: true,
    image: "garnish",
    title: { en: "Menu Engineering and Development", ar: "هندسة القوائم وتطويرها" },
    short: {
      en: "Menu analysis, recipe standardisation and a menu structure that guides guests toward your best dishes.",
      ar: "تحليل القائمة، وتوحيد الوصفات، وهيكلة القائمة بما يوجّه الضيوف نحو أفضل أطباقك.",
    },
    headline: {
      en: "A menu that sells well and cooks the same every time",
      ar: "قائمة تبيع جيدًا وتُطهى بالمستوى نفسه في كل مرة",
    },
    intro: {
      en: "We analyse what each dish sells and earns, standardise the recipes behind it, and help you shape a menu that is easier to cook, easier to cost and easier for guests to choose from.",
      ar: "نحلل مبيعات كل طبق وما يحققه من ربح، ونوحّد الوصفات التي يقوم عليها، ونساعدك في بناء قائمة أسهل في التحضير والتسعير وأسهل على الضيف في الاختيار.",
    },
    problems: [
      { en: "The menu has grown long and some dishes rarely sell.", ar: "طالت القائمة وأصبحت بعض الأطباق نادرة الطلب." },
      { en: "Popular items may not be the profitable ones, and nobody is sure which are.", ar: "قد لا تكون الأصناف الأكثر طلبًا هي الأكثر ربحًا، ولا أحد متأكد من ذلك." },
      { en: "Recipes and portions vary between cooks and branches.", ar: "تختلف الوصفات والحصص بين الطهاة والفروع." },
      { en: "New dishes are added without testing cost, prep time or kitchen capacity.", ar: "تُضاف أطباق جديدة دون اختبار تكلفتها ووقت تحضيرها وقدرة المطبخ." },
    ],
    approach: [
      {
        title: { en: "Sales and margin analysis", ar: "تحليل المبيعات والهوامش" },
        body: {
          en: "Using your POS data and recipe costs, we classify each item by popularity and contribution margin to see which dishes earn their place.",
          ar: "باستخدام بيانات نقاط البيع وتكاليف الوصفات، نصنّف كل صنف حسب شعبيته وهامش مساهمته لنعرف أي الأطباق تستحق مكانها.",
        },
      },
      {
        title: { en: "Recipe standardisation", ar: "توحيد الوصفات" },
        body: {
          en: "We document each recipe with exact quantities, method, portion size, plating standard and photo, so every plate matches.",
          ar: "نوثّق كل وصفة بالكميات الدقيقة وطريقة التحضير وحجم الحصة ومعيار التقديم وصورة مرجعية، ليتطابق كل طبق.",
        },
      },
      {
        title: { en: "Menu structure and design brief", ar: "هيكل القائمة وتوجيهات التصميم" },
        body: {
          en: "We recommend what to keep, rework, reprice or remove, and how to group and position items so the menu guides choice.",
          ar: "نوصي بما يُبقى أو يُعاد تطويره أو يُعاد تسعيره أو يُحذف، وبطريقة تجميع الأصناف وترتيبها بحيث توجّه القائمة اختيار الضيف.",
        },
      },
      {
        title: { en: "New dish development", ar: "تطوير أطباق جديدة" },
        body: {
          en: "Where needed, we support development and testing of new items, checking cost, prep time and station load before launch.",
          ar: "عند الحاجة، ندعم تطوير الأصناف الجديدة واختبارها، مع التحقق من التكلفة ووقت التحضير وضغط محطات العمل قبل إطلاقها.",
        },
      },
    ],
    deliverables: [
      { en: "Menu engineering analysis with item-by-item recommendations", ar: "تحليل هندسة القائمة بتوصيات لكل صنف" },
      { en: "Standardised recipe cards with portion and plating standards", ar: "بطاقات وصفات موحّدة بمعايير الحصص والتقديم" },
      { en: "Recommended menu structure and layout brief for your designer", ar: "هيكل مقترح للقائمة وتوجيهات تصميم لمصممك" },
      { en: "Prep lists aligned to the new menu", ar: "قوائم تحضير متوافقة مع القائمة الجديدة" },
      { en: "Kitchen briefing on new standards", ar: "إحاطة للمطبخ حول المعايير الجديدة" },
    ],
    benefits: [
      { en: "A clearer view of which dishes drive profit", ar: "رؤية أوضح للأطباق التي تحقق الربح" },
      { en: "More consistent taste, portions and presentation", ar: "ثبات أكبر في الطعم والحصص وطريقة التقديم" },
      { en: "A simpler menu that is easier to prepare and stock", ar: "قائمة أبسط يسهل تحضيرها وتوفير موادها" },
      { en: "Better-informed pricing decisions", ar: "قرارات تسعير مبنية على معلومات أدق" },
    ],
    faqs: [
      {
        q: { en: "What data do you need from us?", ar: "ما البيانات التي تحتاجونها منا؟" },
        a: {
          en: "Ideally item-level sales from your POS for at least the last three months, current recipes if you have them, and recent supplier invoices. We can work with partial data and fill gaps on site.",
          ar: "يُفضَّل الحصول على مبيعات كل صنف من نظام نقاط البيع لثلاثة أشهر على الأقل، والوصفات الحالية إن وُجدت، وفواتير الموردين الأخيرة. ويمكننا العمل ببيانات جزئية واستكمال النقص ميدانيًا.",
        },
      },
      {
        q: { en: "Do you design the printed menu?", ar: "هل تصممون القائمة المطبوعة؟" },
        a: {
          en: "We provide the structure, content and design brief. We can also produce the digital QR menu, and coordinate with your graphic designer for print.",
          ar: "نقدّم الهيكل والمحتوى وتوجيهات التصميم، ويمكننا كذلك إعداد القائمة الرقمية عبر رمز QR، والتنسيق مع مصممك الجرافيكي للنسخة المطبوعة.",
        },
      },
    ],
    related: ["food-costing", "qr-digital-menus", "inventory-waste-control"],
    seoDescription: {
      en: "Menu engineering for restaurants and cafés in Saudi Arabia: sales and margin analysis, recipe standardisation and menu structure.",
      ar: "هندسة القوائم للمطاعم والمقاهي في السعودية: تحليل المبيعات والهوامش، وتوحيد الوصفات، وهيكلة القائمة.",
    },
  },
  {
    slug: "food-costing",
    category: "consultancy",
    enabled: true,
    image: "platedDish",
    title: { en: "Food Costing and Profitability", ar: "تكاليف الأطباق والربحية" },
    short: {
      en: "Accurate recipe costing, pricing analysis and the reports that show where your margin goes.",
      ar: "احتساب دقيق لتكاليف الوصفات، وتحليل للتسعير، وتقارير تُظهر أين يذهب هامشك.",
    },
    headline: {
      en: "Know what every plate costs, and what it earns",
      ar: "اعرف تكلفة كل طبق وما يحققه من ربح",
    },
    intro: {
      en: "Rising ingredient prices and unmeasured portions quietly erode margin. We build accurate recipe costings, compare theoretical and actual food cost, and give you a pricing framework you can keep up to date.",
      ar: "ارتفاع أسعار المواد والحصص غير المقاسة يستنزفان الهامش بصمت. نبني احتسابًا دقيقًا لتكاليف الوصفات، ونقارن تكلفة الطعام النظرية بالفعلية، ونقدّم لك إطار تسعير يمكنك تحديثه باستمرار.",
    },
    problems: [
      { en: "Menu prices were set once and haven't kept up with supplier prices.", ar: "حُدِّدت الأسعار مرة واحدة ولم تواكب تغيّر أسعار الموردين." },
      { en: "Nobody knows the true cost of each dish, including sauces and garnish.", ar: "لا أحد يعرف التكلفة الحقيقية لكل طبق بما فيها الصلصات والإضافات." },
      { en: "Food cost percentage changes month to month without explanation.", ar: "تتغير نسبة تكلفة الطعام من شهر لآخر دون تفسير." },
      { en: "Promotions and delivery-app pricing are set without checking margin.", ar: "تُحدَّد العروض وأسعار تطبيقات التوصيل دون التحقق من الهامش." },
    ],
    approach: [
      {
        title: { en: "Ingredient and yield review", ar: "مراجعة المواد ونسب الصافي" },
        body: {
          en: "We build a current ingredient price list and measure yields for key items, because a trimmed kilo of meat is not a purchased kilo.",
          ar: "نُعدّ قائمة أسعار محدّثة للمواد، ونقيس نسب الصافي للمواد الرئيسية، فالكيلو بعد التنظيف ليس هو الكيلو المشترى.",
        },
      },
      {
        title: { en: "Recipe costing", ar: "احتساب تكلفة الوصفات" },
        body: {
          en: "Every recipe and sub-recipe is costed per portion, giving you food cost and gross margin for each menu item and sales channel.",
          ar: "نحتسب تكلفة كل وصفة ووصفة فرعية لكل حصة، فتحصل على تكلفة الطعام وهامش الربح الإجمالي لكل صنف ولكل قناة بيع.",
        },
      },
      {
        title: { en: "Theoretical vs actual analysis", ar: "مقارنة النظري بالفعلي" },
        body: {
          en: "We compare what you should have used with what you actually used, and trace the gap to portioning, waste, recording or purchasing.",
          ar: "نقارن ما كان ينبغي استهلاكه بما استُهلك فعلًا، ونتتبع الفارق إلى الحصص أو الهدر أو التسجيل أو المشتريات.",
        },
      },
      {
        title: { en: "Pricing framework", ar: "إطار التسعير" },
        body: {
          en: "We recommend price adjustments with clear reasoning, and leave you a costing tool and routine for keeping prices current.",
          ar: "نوصي بتعديلات الأسعار مع مبررات واضحة، ونترك لك أداة احتساب وروتينًا لإبقاء الأسعار محدّثة.",
        },
      },
    ],
    deliverables: [
      { en: "Costed recipe database for your full menu", ar: "قاعدة بيانات بتكاليف وصفات القائمة كاملة" },
      { en: "Item-level margin report by channel (dine-in, takeaway, delivery)", ar: "تقرير هوامش لكل صنف حسب القناة (داخل المطعم، سفري، توصيل)" },
      { en: "Theoretical vs actual food cost analysis", ar: "تحليل تكلفة الطعام النظرية مقابل الفعلية" },
      { en: "Pricing recommendations with supporting calculations", ar: "توصيات تسعير مدعومة بالحسابات" },
      { en: "A costing template and monthly review routine", ar: "نموذج احتساب تكاليف وروتين مراجعة شهري" },
    ],
    benefits: [
      { en: "Pricing based on real costs rather than estimates", ar: "تسعير مبني على تكاليف حقيقية لا تقديرات" },
      { en: "Early warning when supplier prices move", ar: "تنبيه مبكر عند تغيّر أسعار الموردين" },
      { en: "Clear explanations for changes in food cost", ar: "تفسير واضح لتغيرات تكلفة الطعام" },
      { en: "Confidence when setting promotions and delivery prices", ar: "ثقة أكبر عند تحديد العروض وأسعار التوصيل" },
    ],
    faqs: [
      {
        q: { en: "Do we need special software for costing?", ar: "هل نحتاج إلى برنامج خاص لاحتساب التكاليف؟" },
        a: {
          en: "Not necessarily. We can build costing in a well-structured spreadsheet, or set it up in your existing inventory or POS system if it supports recipes.",
          ar: "ليس بالضرورة. يمكننا بناء نظام التكاليف في جدول بيانات منظم، أو إعداده في نظام المخزون أو نقاط البيع الحالي إن كان يدعم الوصفات.",
        },
      },
      {
        q: { en: "Will you tell us to raise prices?", ar: "هل ستطلبون منا رفع الأسعار؟" },
        a: {
          en: "Only where the numbers support it. Often the answer is a mix of portion control, supplier changes, recipe adjustments and selective price changes.",
          ar: "فقط حين تدعم الأرقام ذلك. وكثيرًا ما يكون الحل مزيجًا من ضبط الحصص وتغيير الموردين وتعديل الوصفات وتعديلات سعرية انتقائية.",
        },
      },
    ],
    related: ["menu-engineering", "inventory-waste-control", "dashboards-reporting"],
    seoDescription: {
      en: "Restaurant food costing and pricing in Saudi Arabia: recipe costing, margin analysis by channel, and theoretical vs actual food cost.",
      ar: "احتساب تكاليف الأطباق والتسعير للمطاعم في السعودية: تكلفة الوصفات، وتحليل الهوامش حسب القناة، ومقارنة التكلفة النظرية بالفعلية.",
    },
  },
  {
    slug: "business-planning-budgeting",
    category: "consultancy",
    enabled: true,
    image: "financePlanning",
    title: { en: "Business Plans and Budget Cycle", ar: "خطط العمل ودورة الميزانية" },
    short: {
      en: "Business plans built on real restaurant numbers, and a yearly budget you can manage against month by month.",
      ar: "خطط عمل مبنية على أرقام مطعمك الحقيقية، وميزانية سنوية تتابعها وتديرها شهرًا بشهر.",
    },
    headline: {
      en: "A plan you can run the business on, not just present",
      ar: "خطة تُدير بها عملك، لا مجرد خطة للعرض",
    },
    intro: {
      en: "Many restaurant plans are written once for a bank or an investor and never opened again. We build business plans and annual budgets from your actual sales, costs and capacity, then set up a simple budget cycle so you compare plan with reality every month and adjust early.",
      ar: "كثير من خطط المطاعم تُكتب مرة واحدة لبنك أو مستثمر ثم لا تُفتح مجددًا. نبني خطط العمل والميزانيات السنوية من مبيعاتك وتكاليفك وطاقتك الفعلية، ثم نضع دورة ميزانية بسيطة تقارن فيها الخطة بالواقع كل شهر وتعدّل مبكرًا.",
    },
    problems: [
      { en: "There is no written budget, so spending decisions are made case by case.", ar: "لا توجد ميزانية مكتوبة، فتُتخذ قرارات الإنفاق حالة بحالة." },
      { en: "The business plan was prepared for financing and no longer reflects how the restaurant runs.", ar: "أُعدّت خطة العمل لغرض التمويل ولم تعد تعكس طريقة تشغيل المطعم." },
      { en: "Sales targets are set without looking at seats, opening hours or delivery capacity.", ar: "تُحدَّد أهداف المبيعات دون النظر إلى المقاعد أو ساعات العمل أو طاقة التوصيل." },
      { en: "Nobody reviews actual results against the plan until the year is over.", ar: "لا أحد يراجع النتائج الفعلية مقابل الخطة حتى نهاية السنة." },
    ],
    approach: [
      {
        title: { en: "Baseline and assumptions", ar: "خط الأساس والافتراضات" },
        body: {
          en: "We review your recent sales, costs and capacity, and agree clear, written assumptions for covers, average spend, seasonality and cost levels.",
          ar: "نراجع مبيعاتك وتكاليفك وطاقتك في الفترة الأخيرة، ونتفق على افتراضات مكتوبة وواضحة لعدد الزبائن ومتوسط الإنفاق والموسمية ومستويات التكلفة.",
        },
      },
      {
        title: { en: "Business plan", ar: "خطة العمل" },
        body: {
          en: "For a new concept, a new branch or a funding request, we prepare a business plan covering the market, the concept, the operating model and the financial projections behind it.",
          ar: "لمفهوم جديد أو فرع جديد أو طلب تمويل، نُعدّ خطة عمل تغطي السوق والمفهوم ونموذج التشغيل والتوقعات المالية التي تستند إليها.",
        },
      },
      {
        title: { en: "Annual budget", ar: "الميزانية السنوية" },
        body: {
          en: "We build a month-by-month budget for sales, food and beverage cost, payroll, rent, marketing and other operating costs, by branch where you have more than one.",
          ar: "نبني ميزانية شهرية للمبيعات وتكلفة الطعام والمشروبات والرواتب والإيجار والتسويق وباقي التكاليف التشغيلية، ولكل فرع على حدة إن كان لديك أكثر من فرع.",
        },
      },
      {
        title: { en: "Budget cycle", ar: "دورة الميزانية" },
        body: {
          en: "We set up a monthly review of budget against actual, with a short variance commentary and a routine for reforecasting the rest of the year.",
          ar: "نضع مراجعة شهرية للميزانية مقابل الفعلي، مع تعليق موجز على الفروقات، وروتين لإعادة التوقع لبقية السنة.",
        },
      },
    ],
    deliverables: [
      { en: "Business plan with financial projections", ar: "خطة عمل مع توقعات مالية" },
      { en: "Month-by-month annual budget (by branch where relevant)", ar: "ميزانية سنوية مقسمة شهريًا (لكل فرع عند الحاجة)" },
      { en: "Documented planning assumptions", ar: "افتراضات تخطيط موثقة" },
      { en: "Monthly budget-vs-actual template and review routine", ar: "نموذج شهري للميزانية مقابل الفعلي وروتين للمراجعة" },
      { en: "Reforecast template for the rest of the year", ar: "نموذج لإعادة التوقع لبقية السنة" },
    ],
    benefits: [
      { en: "Spending decisions made against a clear plan", ar: "قرارات إنفاق مبنية على خطة واضحة" },
      { en: "Early warning when sales or costs move away from plan", ar: "تنبيه مبكر عند ابتعاد المبيعات أو التكاليف عن الخطة" },
      { en: "A credible plan to share with partners, investors or lenders", ar: "خطة موثوقة تشاركها مع الشركاء أو المستثمرين أو جهات التمويل" },
      { en: "Targets your managers understand and can act on", ar: "أهداف يفهمها مديروك ويستطيعون العمل عليها" },
    ],
    faqs: [
      {
        q: { en: "Can you prepare a business plan for a restaurant that hasn't opened yet?", ar: "هل يمكنكم إعداد خطة عمل لمطعم لم يُفتتح بعد؟" },
        a: {
          en: "Yes. For a new concept we base the projections on the location, the concept and comparable operating assumptions, and we document every assumption so it can be checked and updated.",
          ar: "نعم. للمفاهيم الجديدة نبني التوقعات على الموقع والمفهوم وافتراضات تشغيلية مماثلة، ونوثّق كل افتراض ليمكن التحقق منه وتحديثه.",
        },
      },
      {
        q: { en: "How long does it take to build an annual budget?", ar: "كم يستغرق إعداد الميزانية السنوية؟" },
        a: {
          en: "It depends on the number of branches and how complete your records are. We agree a timeline after reviewing your data in the first meeting.",
          ar: "يعتمد ذلك على عدد الفروع ومدى اكتمال سجلاتك. نتفق على الجدول الزمني بعد مراجعة بياناتك في الاجتماع الأول.",
        },
      },
    ],
    related: ["fb-accounting-reporting", "cashflow-expansion-planning", "food-costing"],
    seoDescription: {
      en: "Restaurant business plans and annual budgets in Saudi Arabia, with a monthly budget-vs-actual cycle and reforecasting.",
      ar: "خطط عمل وميزانيات سنوية للمطاعم في السعودية، مع دورة شهرية لمقارنة الميزانية بالفعلي وإعادة التوقع.",
    },
  },
  {
    slug: "fb-accounting-reporting",
    category: "consultancy",
    enabled: true,
    image: "financeReporting",
    title: { en: "F&B Accounting and Reporting", ar: "المحاسبة والتقارير لقطاع الأغذية والمشروبات" },
    short: {
      en: "Management accounts built for restaurants, with a monthly P&L, the F&B ratios that matter and dashboards made for your business.",
      ar: "حسابات إدارية مصممة للمطاعم: قائمة دخل شهرية، ونسب الأغذية والمشروبات المهمة، ولوحات متابعة مخصصة لعملك.",
    },
    headline: {
      en: "Numbers that tell you how the restaurant is really doing",
      ar: "أرقام تخبرك بحقيقة أداء مطعمك",
    },
    intro: {
      en: "General accounting often lumps restaurant costs together, so owners can't see food cost, labour cost or the profit of each branch. We structure your management accounts the F&B way and give you monthly reports and dashboards you can actually use to make decisions.",
      ar: "كثيرًا ما تجمع المحاسبة العامة تكاليف المطعم معًا، فلا يرى المالك تكلفة الطعام أو تكلفة العمالة أو ربح كل فرع. ننظّم حساباتك الإدارية بطريقة قطاع الأغذية والمشروبات، ونقدّم تقارير شهرية ولوحات متابعة تستخدمها فعلًا في اتخاذ القرارات.",
    },
    problems: [
      { en: "The monthly accounts arrive late and don't show food cost or labour cost clearly.", ar: "تصل الحسابات الشهرية متأخرة ولا تُظهر تكلفة الطعام أو العمالة بوضوح." },
      { en: "You can't see which branch, channel or category is making money.", ar: "لا تستطيع معرفة أي فرع أو قناة أو فئة تحقق الربح." },
      { en: "POS, inventory and accounting figures don't match.", ar: "أرقام نقاط البيع والمخزون والمحاسبة لا تتطابق." },
      { en: "Reports exist, but nobody reads them because they are hard to follow.", ar: "التقارير موجودة لكن لا أحد يقرؤها لصعوبة فهمها." },
    ],
    approach: [
      {
        title: { en: "Chart of accounts for F&B", ar: "دليل حسابات لقطاع الأغذية والمشروبات" },
        body: {
          en: "We restructure your chart of accounts so food, beverage, packaging, payroll, delivery commissions and occupancy costs are tracked separately, by branch.",
          ar: "نعيد هيكلة دليل الحسابات بحيث تُتابَع تكاليف الطعام والمشروبات والتغليف والرواتب وعمولات التوصيل والإشغال بشكل منفصل ولكل فرع.",
        },
      },
      {
        title: { en: "Month-end routine", ar: "روتين إقفال الشهر" },
        body: {
          en: "We set up a month-end checklist that reconciles sales, stock counts and purchases, so the P&L reflects what actually happened.",
          ar: "نضع قائمة إقفال شهرية تطابق المبيعات وجرد المخزون والمشتريات، لتعكس قائمة الدخل ما حدث فعلًا.",
        },
      },
      {
        title: { en: "F&B reporting pack", ar: "حزمة تقارير الأغذية والمشروبات" },
        body: {
          en: "A short monthly pack with the P&L by branch and the key ratios: food and beverage cost percentage, labour cost percentage, prime cost and sales per cover.",
          ar: "حزمة شهرية موجزة تضم قائمة الدخل لكل فرع والنسب الرئيسية: نسبة تكلفة الطعام والمشروبات، ونسبة تكلفة العمالة، والتكلفة الأساسية، والمبيعات لكل زبون.",
        },
      },
      {
        title: { en: "Specific dashboards", ar: "لوحات متابعة مخصصة" },
        body: {
          en: "We design dashboards around the decisions you make each week, for owners, finance and branch managers, connected to your POS and accounting data where possible.",
          ar: "نصمم لوحات متابعة حول القرارات التي تتخذها كل أسبوع، للملاك والإدارة المالية ومديري الفروع، وترتبط ببيانات نقاط البيع والمحاسبة حيثما أمكن.",
        },
      },
    ],
    deliverables: [
      { en: "F&B chart of accounts and cost-centre structure", ar: "دليل حسابات وهيكل مراكز تكلفة لقطاع الأغذية والمشروبات" },
      { en: "Month-end close checklist and reconciliation routine", ar: "قائمة إقفال شهري وروتين للمطابقة" },
      { en: "Monthly reporting pack with P&L by branch", ar: "حزمة تقارير شهرية مع قائمة الدخل لكل فرع" },
      { en: "Key ratio definitions (food, beverage, labour and prime cost)", ar: "تعريفات النسب الرئيسية (الطعام والمشروبات والعمالة والتكلفة الأساسية)" },
      { en: "Owner and branch dashboards specific to your business", ar: "لوحات متابعة للمالك والفروع مخصصة لعملك" },
    ],
    benefits: [
      { en: "A clear view of profit by branch and channel", ar: "رؤية واضحة للربح حسب الفرع والقناة" },
      { en: "Faster, more reliable month-end figures", ar: "أرقام نهاية الشهر أسرع وأكثر موثوقية" },
      { en: "Cost problems spotted while they are still small", ar: "اكتشاف مشكلات التكلفة وهي لا تزال صغيرة" },
      { en: "One set of numbers that owners, finance and managers all trust", ar: "مجموعة أرقام واحدة يثق بها الملاك والإدارة المالية والمديرون" },
    ],
    faqs: [
      {
        q: { en: "Do you replace our accountant or auditor?", ar: "هل تحلّون محل المحاسب أو المراجع لدينا؟" },
        a: {
          en: "No. We focus on management accounting and reporting for decision-making. Statutory audit, zakat and tax filings stay with your licensed accountant or auditor, and we work alongside them.",
          ar: "لا. نركّز على المحاسبة الإدارية والتقارير لدعم القرار. أما المراجعة النظامية وإقرارات الزكاة والضريبة فتبقى لدى المحاسب أو المراجع المرخص لديك، ونعمل بالتنسيق معه.",
        },
      },
      {
        q: { en: "Which systems can the dashboards connect to?", ar: "بأي أنظمة يمكن ربط لوحات المتابعة؟" },
        a: {
          en: "It depends on the POS, inventory and accounting systems you already use. We review what data they can export and build the dashboards around that.",
          ar: "يعتمد ذلك على أنظمة نقاط البيع والمخزون والمحاسبة التي تستخدمها حاليًا. نراجع البيانات التي يمكن تصديرها منها ونبني اللوحات على أساسها.",
        },
      },
    ],
    related: ["dashboards-reporting", "business-planning-budgeting", "food-costing"],
    seoDescription: {
      en: "F&B management accounting and reporting for restaurants in Saudi Arabia: P&L by branch, food and labour cost ratios, and custom dashboards.",
      ar: "محاسبة إدارية وتقارير للمطاعم في السعودية: قائمة دخل لكل فرع، ونسب تكلفة الطعام والعمالة، ولوحات متابعة مخصصة.",
    },
  },
  {
    slug: "cashflow-expansion-planning",
    category: "consultancy",
    enabled: true,
    image: "financeExpansion",
    title: { en: "Cashflow Management and Expansion Planning", ar: "إدارة التدفق النقدي وتخطيط التوسع" },
    short: {
      en: "Cashflow forecasting and control for day-to-day stability, and financial planning before you open your next branch.",
      ar: "توقّع التدفق النقدي وضبطه لاستقرار التشغيل اليومي، وتخطيط مالي قبل افتتاح فرعك التالي.",
    },
    headline: {
      en: "Keep cash under control, and grow when the numbers are ready",
      ar: "تحكّم في نقدك، وتوسّع حين تكون الأرقام جاهزة",
    },
    intro: {
      en: "A restaurant can be busy and profitable on paper yet still run short of cash. We help you forecast and manage cashflow week by week, and when you are considering a new branch, we test whether the business can fund it and what it needs to earn.",
      ar: "قد يكون المطعم مزدحمًا ورابحًا على الورق ومع ذلك يعاني نقصًا في النقد. نساعدك على توقّع التدفق النقدي وإدارته أسبوعًا بأسبوع، وعندما تفكّر في فرع جديد نختبر قدرة العمل على تمويله وما يجب أن يحققه.",
    },
    problems: [
      { en: "Cash runs tight before rent, salaries or supplier payments, even in good months.", ar: "يضيق النقد قبل الإيجار أو الرواتب أو دفعات الموردين حتى في الأشهر الجيدة." },
      { en: "Delivery-app settlements and supplier terms aren't tracked in one place.", ar: "تسويات تطبيقات التوصيل وشروط الموردين غير متابعة في مكان واحد." },
      { en: "A new branch is being planned without a clear view of the investment and payback.", ar: "يُخطَّط لفرع جديد دون رؤية واضحة للاستثمار وفترة الاسترداد." },
      { en: "Expansion decisions are based on the busiest branch, not the average one.", ar: "تُتخذ قرارات التوسع بناءً على الفرع الأكثر ازدحامًا لا على الفرع المتوسط." },
    ],
    approach: [
      {
        title: { en: "Cashflow forecast", ar: "توقّع التدفق النقدي" },
        body: {
          en: "We build a rolling 13-week cashflow forecast covering sales receipts, delivery-app settlements, payroll, rent, suppliers and loan payments.",
          ar: "نبني توقعًا متجددًا للتدفق النقدي لمدة 13 أسبوعًا يشمل متحصلات المبيعات وتسويات تطبيقات التوصيل والرواتب والإيجار والموردين وأقساط التمويل.",
        },
      },
      {
        title: { en: "Working capital controls", ar: "ضوابط رأس المال العامل" },
        body: {
          en: "We review stock levels, supplier terms and payment timing, and agree simple rules that free up cash without hurting operations.",
          ar: "نراجع مستويات المخزون وشروط الموردين وتوقيت الدفعات، ونتفق على قواعد بسيطة تحرّر النقد دون الإضرار بالتشغيل.",
        },
      },
      {
        title: { en: "Expansion readiness", ar: "جاهزية التوسع" },
        body: {
          en: "Before a new branch, we check whether your current operation is stable and documented enough to repeat, and whether cash and financing can support it.",
          ar: "قبل الفرع الجديد، نتحقق من أن تشغيلك الحالي مستقر وموثّق بما يكفي لتكراره، ومن قدرة النقد والتمويل على دعمه.",
        },
      },
      {
        title: { en: "Branch investment case", ar: "دراسة الاستثمار للفرع" },
        body: {
          en: "We model the capital cost, pre-opening costs, ramp-up period and break-even for the proposed site, with conservative and expected scenarios.",
          ar: "نحسب تكلفة الإنشاء وتكاليف ما قبل الافتتاح وفترة النمو التدريجي ونقطة التعادل للموقع المقترح، مع سيناريو متحفظ وآخر متوقع.",
        },
      },
    ],
    deliverables: [
      { en: "Rolling 13-week cashflow forecast template", ar: "نموذج توقّع متجدد للتدفق النقدي لمدة 13 أسبوعًا" },
      { en: "Working capital review with recommended actions", ar: "مراجعة لرأس المال العامل مع إجراءات موصى بها" },
      { en: "Expansion readiness assessment", ar: "تقييم جاهزية التوسع" },
      { en: "New-branch investment and break-even model", ar: "نموذج استثمار ونقطة تعادل للفرع الجديد" },
      { en: "Funding and phasing options for the expansion plan", ar: "خيارات التمويل والمراحل لخطة التوسع" },
    ],
    benefits: [
      { en: "Fewer cash surprises before payroll and rent", ar: "مفاجآت نقدية أقل قبل الرواتب والإيجار" },
      { en: "Cash released from stock and payment timing", ar: "تحرير نقد من المخزون وتوقيت الدفعات" },
      { en: "Expansion decisions based on tested numbers", ar: "قرارات توسع مبنية على أرقام مختبرة" },
      { en: "A clear case to present to partners or lenders", ar: "دراسة واضحة تعرضها على الشركاء أو جهات التمويل" },
    ],
    faqs: [
      {
        q: { en: "Do you arrange financing?", ar: "هل ترتّبون التمويل؟" },
        a: {
          en: "We don't provide or broker financing. We prepare the cashflow forecast and investment case that banks, partners and investors usually ask for.",
          ar: "لا نقدّم التمويل ولا نتوسط فيه. نُعدّ توقعات التدفق النقدي ودراسة الاستثمار التي تطلبها عادةً البنوك والشركاء والمستثمرون.",
        },
      },
      {
        q: { en: "How is this different from Restaurant Launch and Expansion?", ar: "ما الفرق بين هذه الخدمة وخدمة افتتاح المطاعم والتوسع؟" },
        a: {
          en: "This service focuses on the money: cashflow and whether an expansion makes financial sense. Launch and Expansion covers delivering the opening itself, from planning to the first weeks of trading.",
          ar: "تركّز هذه الخدمة على الجانب المالي: التدفق النقدي ومدى جدوى التوسع ماليًا. أما خدمة الافتتاح والتوسع فتغطي تنفيذ الافتتاح نفسه من التخطيط حتى الأسابيع الأولى من التشغيل.",
        },
      },
    ],
    related: ["launch-expansion", "business-planning-budgeting", "fb-accounting-reporting"],
    seoDescription: {
      en: "Restaurant cashflow management and expansion planning in Saudi Arabia: 13-week cash forecasts, working capital and new-branch investment cases.",
      ar: "إدارة التدفق النقدي وتخطيط التوسع للمطاعم في السعودية: توقعات نقدية لـ13 أسبوعًا، ورأس المال العامل، ودراسات استثمار الفروع الجديدة.",
    },
  },
  {
    slug: "inventory-waste-control",
    category: "consultancy",
    enabled: true,
    image: "pantry",
    title: { en: "Inventory and Waste Control", ar: "ضبط المخزون والهدر" },
    short: {
      en: "Purchasing, receiving, storage and stock-count routines that reduce waste and stock losses.",
      ar: "إجراءات للشراء والاستلام والتخزين والجرد تقلل الهدر وفقد المخزون.",
    },
    headline: {
      en: "Know where your stock goes, and waste less of it",
      ar: "اعرف أين يذهب مخزونك، وقلّل ما يُهدر منه",
    },
    intro: {
      en: "Stock is cash sitting on shelves. We put structure around ordering, receiving, storing and counting it, and help you measure waste so it can be reduced deliberately rather than by guesswork.",
      ar: "المخزون مال موضوع على الرفوف. نضع نظامًا للطلب والاستلام والتخزين والجرد، ونساعدك في قياس الهدر لتقليله بخطة واضحة لا بالتخمين.",
    },
    problems: [
      { en: "Orders are placed by feel, leading to overstock of some items and shortages of others.", ar: "تُطلب المواد بالتقدير، فيتكدس بعضها وينقص بعضها الآخر." },
      { en: "Deliveries are accepted without checking weights, quality or prices.", ar: "تُستلم الشحنات دون التحقق من الأوزان أو الجودة أو الأسعار." },
      { en: "Stock counts are irregular and rarely reconciled.", ar: "الجرد غير منتظم ونادرًا ما تُطابَق نتائجه." },
      { en: "Waste is thrown away unrecorded, so its causes stay hidden.", ar: "يُرمى الهدر دون تسجيل، فتبقى أسبابه مجهولة." },
    ],
    approach: [
      {
        title: { en: "Stock flow review", ar: "مراجعة حركة المخزون" },
        body: {
          en: "We trace how product moves from supplier to plate and identify where loss, spoilage and errors occur.",
          ar: "نتتبع حركة المواد من المورد إلى الطبق ونحدد مواضع الفقد والتلف والأخطاء.",
        },
      },
      {
        title: { en: "Purchasing and par levels", ar: "المشتريات والحدود الدنيا" },
        body: {
          en: "We set par levels based on usage, simplify the supplier list where sensible, and create order guides for each category.",
          ar: "نحدد مستويات المخزون بناءً على الاستهلاك، ونبسّط قائمة الموردين حيث يكون ذلك مناسبًا، ونُعدّ أدلة طلب لكل فئة.",
        },
      },
      {
        title: { en: "Receiving, storage and counting", ar: "الاستلام والتخزين والجرد" },
        body: {
          en: "We introduce receiving checks, labelling and FIFO storage, and a stock-count routine your team can complete in reasonable time.",
          ar: "نطبّق إجراءات فحص عند الاستلام، ووسم المواد، والتخزين بمبدأ «الوارد أولًا يُصرف أولًا»، وروتين جرد يستطيع فريقك إنجازه في وقت معقول.",
        },
      },
      {
        title: { en: "Waste tracking", ar: "تتبع الهدر" },
        body: {
          en: "A simple waste log records what is discarded and why, giving you the information to fix prep levels, recipes or storage.",
          ar: "يسجّل سجل الهدر البسيط ما يُتلف وسببه، فيمنحك المعلومات اللازمة لتعديل كميات التحضير أو الوصفات أو التخزين.",
        },
      },
    ],
    deliverables: [
      { en: "Stock flow review with identified loss points", ar: "مراجعة لحركة المخزون مع تحديد مواضع الفقد" },
      { en: "Par levels and order guides by category", ar: "حدود دنيا للمخزون وأدلة طلب لكل فئة" },
      { en: "Receiving, labelling and storage procedures", ar: "إجراءات الاستلام والوسم والتخزين" },
      { en: "Stock-count sheets and a reconciliation routine", ar: "نماذج جرد وروتين للمطابقة" },
      { en: "Waste log and monthly waste review format", ar: "سجل هدر ونموذج مراجعة شهرية" },
    ],
    benefits: [
      { en: "Less cash tied up in excess stock", ar: "أموال أقل مجمّدة في مخزون زائد" },
      { en: "Fewer stock-outs during service", ar: "نفاد أقل للمواد أثناء الخدمة" },
      { en: "Visibility of waste and its causes", ar: "رؤية واضحة للهدر وأسبابه" },
      { en: "Stronger control over supplier quality and pricing", ar: "رقابة أقوى على جودة الموردين وأسعارهم" },
    ],
    faqs: [
      {
        q: { en: "Do you supply inventory software?", ar: "هل توفرون برنامجًا لإدارة المخزون؟" },
        a: {
          en: "We are not an inventory software vendor. We design the process first, then help you use your existing system or choose a suitable one if you need it.",
          ar: "لسنا مزوّد برمجيات مخزون. نصمم الإجراءات أولًا، ثم نساعدك في استخدام نظامك الحالي أو اختيار نظام مناسب عند الحاجة.",
        },
      },
      {
        q: { en: "How often should we count stock?", ar: "كم مرة ينبغي إجراء الجرد؟" },
        a: {
          en: "It depends on your volume and product mix. Many operations do a full monthly count with weekly or daily counts of high-value items. We recommend a rhythm that suits your team.",
          ar: "يعتمد ذلك على حجم العمل وتنوع المواد. تجري كثير من المنشآت جردًا شاملًا شهريًا مع جرد أسبوعي أو يومي للمواد عالية القيمة، ونوصي بالإيقاع المناسب لفريقك.",
        },
      },
    ],
    related: ["food-costing", "workflow-automation", "restaurant-operations"],
    seoDescription: {
      en: "Restaurant inventory and food waste control in Saudi Arabia: par levels, receiving checks, stock counts and waste tracking.",
      ar: "ضبط مخزون المطاعم وهدر الطعام في السعودية: حدود المخزون، وفحص الاستلام، والجرد، وتتبع الهدر.",
    },
  },
  {
    slug: "staffing-training",
    category: "consultancy",
    enabled: true,
    image: "kitchenUtensils",
    title: { en: "Staffing and Training", ar: "التوظيف والتدريب" },
    short: {
      en: "Workforce planning, role structures and practical training programmes for kitchen and service teams.",
      ar: "تخطيط القوى العاملة، وهيكلة الأدوار، وبرامج تدريب عملية لفرق المطبخ والخدمة.",
    },
    headline: {
      en: "The right team, in the right numbers, trained to the same standard",
      ar: "الفريق المناسب، بالعدد المناسب، مدرَّب على المعيار نفسه",
    },
    intro: {
      en: "Labour is one of the largest costs in a restaurant, and the team is what guests experience. We help you plan staffing around real demand, define clear roles, and train people to standards that hold up during a busy service.",
      ar: "العمالة من أكبر تكاليف المطعم، والفريق هو ما يعيشه الضيف فعليًا. نساعدك في تخطيط التوظيف وفق الطلب الحقيقي، وتحديد أدوار واضحة، وتدريب الفريق على معايير تصمد في أوقات الذروة.",
    },
    problems: [
      { en: "Rotas are based on habit rather than sales patterns.", ar: "تُبنى جداول المناوبات على العادة لا على أنماط المبيعات." },
      { en: "High turnover means constantly training from scratch.", ar: "ارتفاع دوران الموظفين يعني التدريب من الصفر باستمرار." },
      { en: "Roles overlap and responsibilities are unclear.", ar: "تتداخل الأدوار والمسؤوليات غير واضحة." },
      { en: "Training happens informally and standards drift.", ar: "يتم التدريب بشكل غير رسمي فتتراجع المعايير." },
    ],
    approach: [
      {
        title: { en: "Workforce planning", ar: "تخطيط القوى العاملة" },
        body: {
          en: "We match staffing levels to trading patterns by day and hour, and identify where you are over- or under-staffed.",
          ar: "نوائم أعداد الموظفين مع أنماط العمل حسب اليوم والساعة، ونحدد مواضع الزيادة أو النقص في الكادر.",
        },
      },
      {
        title: { en: "Role design", ar: "تصميم الأدوار" },
        body: {
          en: "We define roles, responsibilities and reporting lines, including supervisory roles that let managers delegate.",
          ar: "نحدد الأدوار والمسؤوليات وخطوط الإشراف، بما فيها الأدوار الإشرافية التي تتيح للمديرين التفويض.",
        },
      },
      {
        title: { en: "Training programme", ar: "برنامج التدريب" },
        body: {
          en: "We build onboarding and skills training for each role, using short modules, demonstrations and on-the-job practice.",
          ar: "نبني برامج تهيئة وتدريب مهارات لكل دور، باستخدام وحدات قصيرة وعروض عملية وتطبيق أثناء العمل.",
        },
      },
      {
        title: { en: "Assessment and coaching", ar: "التقييم والتوجيه" },
        body: {
          en: "Simple skills checklists let supervisors confirm competence, and we coach managers to keep training going after we leave.",
          ar: "تتيح قوائم تقييم المهارات البسيطة للمشرفين التأكد من الكفاءة، ونوجّه المديرين لمواصلة التدريب بعد انتهاء عملنا.",
        },
      },
    ],
    deliverables: [
      { en: "Staffing model aligned to trading patterns", ar: "نموذج توظيف متوائم مع أنماط العمل" },
      { en: "Organisation chart and role descriptions", ar: "هيكل تنظيمي وأوصاف وظيفية" },
      { en: "Onboarding programme for new starters", ar: "برنامج تهيئة للموظفين الجدد" },
      { en: "Role-specific training materials and skills checklists", ar: "مواد تدريبية وقوائم تقييم مهارات لكل دور" },
      { en: "Delivered training sessions for your team", ar: "جلسات تدريب مقدَّمة لفريقك" },
    ],
    benefits: [
      { en: "Labour scheduled around actual demand", ar: "جدولة العمالة وفق الطلب الفعلي" },
      { en: "New staff productive sooner", ar: "موظفون جدد منتجون في وقت أقصر" },
      { en: "Consistent service standards across the team", ar: "معايير خدمة ثابتة لدى الفريق كاملًا" },
      { en: "Managers equipped to train and develop their people", ar: "مديرون مؤهلون لتدريب فرقهم وتطويرها" },
    ],
    faqs: [
      {
        q: { en: "Do you recruit staff for us?", ar: "هل توظفون العاملين نيابةً عنا؟" },
        a: {
          en: "Our focus is planning, role design and training. We can advise on hiring profiles and interview criteria, but we are not a recruitment or labour-supply agency.",
          ar: "يتركز عملنا على التخطيط وتصميم الأدوار والتدريب. ويمكننا تقديم المشورة حول ملامح المرشحين ومعايير المقابلات، لكننا لسنا جهة توظيف أو توريد عمالة.",
        },
      },
      {
        q: { en: "Can training be delivered in Arabic?", ar: "هل يمكن تقديم التدريب بالعربية؟" },
        a: {
          en: "Yes. Training materials and sessions can be prepared in Arabic, English or both, depending on your team.",
          ar: "نعم. يمكن إعداد المواد التدريبية والجلسات بالعربية أو الإنجليزية أو كلتيهما بحسب فريقك.",
        },
      },
    ],
    related: ["restaurant-operations", "food-safety-compliance", "launch-expansion"],
    seoDescription: {
      en: "Restaurant staffing and training consultancy in Saudi Arabia: workforce planning, role design and practical training for kitchen and service teams.",
      ar: "استشارات التوظيف والتدريب للمطاعم في السعودية: تخطيط القوى العاملة، وتصميم الأدوار، وتدريب عملي لفرق المطبخ والخدمة.",
    },
  },
  {
    slug: "food-safety-compliance",
    category: "consultancy",
    enabled: true,
    image: "kitchenClean",
    title: { en: "Food Safety and Compliance Support", ar: "دعم سلامة الغذاء والامتثال" },
    short: {
      en: "Food safety documentation, daily monitoring routines and inspection readiness.",
      ar: "وثائق سلامة الغذاء، وروتين المراقبة اليومية، والجاهزية للزيارات الرقابية.",
    },
    headline: {
      en: "Food safety that is part of the daily routine",
      ar: "سلامة غذاء جزء من الروتين اليومي",
    },
    intro: {
      en: "We help you build the documentation and daily habits that keep food safe and keep your premises ready for inspection, with records that show your team is doing what the procedures say.",
      ar: "نساعدك في بناء الوثائق والعادات اليومية التي تحافظ على سلامة الغذاء وتُبقي منشأتك جاهزة للزيارات الرقابية، مع سجلات تُثبت أن فريقك يطبق ما تنص عليه الإجراءات.",
    },
    problems: [
      { en: "Food safety records are incomplete or filled in after the fact.", ar: "سجلات سلامة الغذاء غير مكتملة أو تُملأ بعد الحدث." },
      { en: "Staff are unsure about temperature limits, labelling or allergen handling.", ar: "الموظفون غير متأكدين من حدود درجات الحرارة أو الوسم أو التعامل مع مسببات الحساسية." },
      { en: "Inspections cause last-minute scrambles.", ar: "تسبب الزيارات الرقابية ارتباكًا في اللحظات الأخيرة." },
      { en: "Cleaning schedules exist but aren't followed consistently.", ar: "جداول النظافة موجودة لكنها لا تُطبق بانتظام." },
    ],
    approach: [
      {
        title: { en: "Gap assessment", ar: "تقييم الفجوات" },
        body: {
          en: "We review your premises, practices and records against applicable food safety requirements and good practice, and list what needs attention.",
          ar: "نراجع منشأتك وممارساتك وسجلاتك مقارنة بمتطلبات سلامة الغذاء المعمول بها وأفضل الممارسات، ونحدد ما يحتاج إلى معالجة.",
        },
      },
      {
        title: { en: "Documentation", ar: "التوثيق" },
        body: {
          en: "We prepare a food safety manual, hazard analysis for your menu, and practical record sheets for temperatures, cleaning and receiving.",
          ar: "نُعدّ دليلًا لسلامة الغذاء، وتحليلًا للمخاطر خاصًا بقائمتك، ونماذج سجلات عملية لدرجات الحرارة والنظافة والاستلام.",
        },
      },
      {
        title: { en: "Training and routines", ar: "التدريب والروتين" },
        body: {
          en: "We train staff on hygiene, temperature control, allergens and cleaning, and build checks into opening and closing routines.",
          ar: "ندرّب الموظفين على النظافة الشخصية وضبط درجات الحرارة ومسببات الحساسية والتنظيف، وندمج الفحوصات في إجراءات الافتتاح والإغلاق.",
        },
      },
      {
        title: { en: "Internal inspections", ar: "عمليات تفتيش داخلية" },
        body: {
          en: "Periodic internal audits help you find and fix issues before an official visit does.",
          ar: "تساعدك عمليات التدقيق الداخلي الدورية في اكتشاف المشكلات ومعالجتها قبل الزيارة الرسمية.",
        },
      },
    ],
    deliverables: [
      { en: "Food safety gap assessment report", ar: "تقرير تقييم فجوات سلامة الغذاء" },
      { en: "Food safety manual and hazard analysis", ar: "دليل سلامة الغذاء وتحليل المخاطر" },
      { en: "Daily record sheets and cleaning schedules", ar: "نماذج سجلات يومية وجداول نظافة" },
      { en: "Staff hygiene and food safety training", ar: "تدريب الموظفين على النظافة وسلامة الغذاء" },
      { en: "Internal inspection checklist", ar: "قائمة تحقق للتفتيش الداخلي" },
    ],
    benefits: [
      { en: "Clear records that demonstrate safe practice", ar: "سجلات واضحة تُثبت سلامة الممارسات" },
      { en: "A team that knows what is expected of it", ar: "فريق يعرف ما هو مطلوب منه" },
      { en: "Calmer, better-prepared inspections", ar: "زيارات رقابية أكثر هدوءًا واستعدادًا" },
      { en: "Reduced food safety risk for your guests", ar: "مخاطر أقل على سلامة الغذاء لضيوفك" },
    ],
    faqs: [
      {
        q: { en: "Do you issue licences or certifications?", ar: "هل تصدرون تراخيص أو شهادات؟" },
        a: {
          en: "No. Licences, permits and official certifications are issued by the relevant authorities and accredited bodies. We help you prepare the documentation and practices those processes look for.",
          ar: "لا. تُصدر التراخيص والتصاريح والشهادات الرسمية من الجهات المختصة والجهات المعتمدة، ونحن نساعدك في إعداد الوثائق والممارسات التي تتطلبها تلك الإجراءات.",
        },
      },
      {
        q: { en: "Which requirements do you work to?", ar: "ما المتطلبات التي تعملون وفقها؟" },
        a: {
          en: "We work with the requirements that apply to your activity and location in Saudi Arabia, including those of the relevant municipal and food authorities. Because regulations are updated, we confirm current requirements at the start of each engagement.",
          ar: "نعمل وفق المتطلبات المنطبقة على نشاطك وموقعك في المملكة، بما فيها متطلبات الجهات البلدية والغذائية المختصة. ولأن الأنظمة تُحدَّث، نتحقق من المتطلبات السارية في بداية كل مشروع.",
        },
      },
    ],
    related: ["restaurant-operations", "staffing-training", "workflow-automation"],
    seoDescription: {
      en: "Food safety documentation and compliance support for restaurants in Saudi Arabia: gap assessments, manuals, record sheets and staff training.",
      ar: "دعم وثائق سلامة الغذاء والامتثال للمطاعم في السعودية: تقييم الفجوات، والأدلة، ونماذج السجلات، وتدريب الموظفين.",
    },
  },
  {
    slug: "launch-expansion",
    category: "consultancy",
    enabled: true,
    image: "diningTree",
    title: { en: "Restaurant Launch and Expansion", ar: "افتتاح المطاعم والتوسع" },
    short: {
      en: "Operational readiness for new openings and a repeatable model for additional branches.",
      ar: "جاهزية تشغيلية للافتتاحات الجديدة ونموذج قابل للتكرار للفروع الإضافية.",
    },
    headline: {
      en: "Open ready. Grow without losing what works.",
      ar: "افتتح وأنت جاهز، وتوسّع دون أن تفقد ما ينجح.",
    },
    intro: {
      en: "Whether you are preparing a first opening or a fifth branch, we plan the operational side in detail: kitchen workflow, menu, suppliers, team, systems and the weeks around opening day, so the restaurant performs from the start.",
      ar: "سواء كنت تستعد لافتتاحك الأول أو لفرعك الخامس، نخطط للجانب التشغيلي بالتفصيل: سير العمل في المطبخ، والقائمة، والموردين، والفريق، والأنظمة، والأسابيع المحيطة بيوم الافتتاح، ليعمل المطعم بكفاءة منذ البداية.",
    },
    problems: [
      { en: "The concept is clear but the operational plan is not.", ar: "الفكرة واضحة لكن الخطة التشغيلية ليست كذلك." },
      { en: "Opening dates slip because tasks were not sequenced.", ar: "تتأخر مواعيد الافتتاح لأن المهام لم تُرتب زمنيًا." },
      { en: "A new branch doesn't perform like the first one.", ar: "الفرع الجديد لا يحقق أداء الفرع الأول." },
      { en: "Growth has stretched systems built for a single site.", ar: "أرهق النمو أنظمة صُممت لموقع واحد." },
    ],
    approach: [
      {
        title: { en: "Readiness plan", ar: "خطة الجاهزية" },
        body: {
          en: "We build an opening plan covering workflow, equipment needs, suppliers, menu, systems, hiring and training, with owners and dates for each task.",
          ar: "نبني خطة افتتاح تشمل سير العمل، والمعدات المطلوبة، والموردين، والقائمة، والأنظمة، والتوظيف، والتدريب، مع تحديد مسؤول وموعد لكل مهمة.",
        },
      },
      {
        title: { en: "Kitchen and flow input", ar: "مدخلات المطبخ وسير العمل" },
        body: {
          en: "We review layouts with your designer or contractor from an operator's perspective, checking stations, storage and service flow.",
          ar: "نراجع المخططات مع المصمم أو المقاول من منظور المشغّل، مع التحقق من محطات العمل والتخزين وانسيابية الخدمة.",
        },
      },
      {
        title: { en: "Pre-opening and soft launch", ar: "ما قبل الافتتاح والتشغيل التجريبي" },
        body: {
          en: "We support pre-opening training, trial services and a soft launch, then adjust procedures based on what we see.",
          ar: "ندعم التدريب قبل الافتتاح، والخدمات التجريبية، والتشغيل التجريبي، ثم نعدّل الإجراءات بناءً على ما نلاحظه.",
        },
      },
      {
        title: { en: "Expansion playbook", ar: "دليل التوسع" },
        body: {
          en: "For growing brands, we document the operating model, standards and opening checklist so each new branch follows the same blueprint.",
          ar: "للعلامات النامية، نوثّق نموذج التشغيل والمعايير وقائمة تحقق الافتتاح ليتبع كل فرع جديد المخطط نفسه.",
        },
      },
    ],
    deliverables: [
      { en: "Opening readiness plan with task owners and timeline", ar: "خطة جاهزية للافتتاح بمسؤولين وجدول زمني" },
      { en: "Operator review of kitchen and service layouts", ar: "مراجعة تشغيلية لمخططات المطبخ والخدمة" },
      { en: "Supplier and equipment checklists", ar: "قوائم تحقق للموردين والمعدات" },
      { en: "Pre-opening training and trial service plan", ar: "خطة تدريب ما قبل الافتتاح والخدمات التجريبية" },
      { en: "Branch opening playbook for multi-site growth", ar: "دليل افتتاح الفروع للنمو متعدد المواقع" },
    ],
    benefits: [
      { en: "Fewer surprises in the final weeks before opening", ar: "مفاجآت أقل في الأسابيع الأخيرة قبل الافتتاح" },
      { en: "A team that is trained before the first guest arrives", ar: "فريق مدرَّب قبل وصول الضيف الأول" },
      { en: "New branches that follow proven standards", ar: "فروع جديدة تتبع معايير مُثبتة" },
      { en: "Growth plans grounded in operational reality", ar: "خطط نمو مبنية على الواقع التشغيلي" },
    ],
    faqs: [
      {
        q: { en: "When should we involve you in an opening?", ar: "متى ينبغي إشراككم في الافتتاح؟" },
        a: {
          en: "As early as possible, ideally before the kitchen layout is final. Changes are far cheaper on paper than after construction.",
          ar: "في أبكر وقت ممكن، ويُفضَّل قبل اعتماد مخطط المطبخ نهائيًا، فالتعديل على الورق أقل تكلفة بكثير من التعديل بعد التنفيذ.",
        },
      },
      {
        q: { en: "Do you help with licences and permits?", ar: "هل تساعدون في التراخيص والتصاريح؟" },
        a: {
          en: "We include licensing steps in the readiness plan so they are not missed, and help prepare operational documents. Applications themselves are submitted by the business or its licensing representative.",
          ar: "ندرج خطوات الترخيص في خطة الجاهزية حتى لا تُغفل، ونساعد في إعداد الوثائق التشغيلية. أما الطلبات نفسها فتقدّمها المنشأة أو من يمثلها في إجراءات الترخيص.",
        },
      },
    ],
    related: ["cashflow-expansion-planning", "staffing-training", "restaurant-websites"],
    seoDescription: {
      en: "Restaurant opening and expansion consulting in Saudi Arabia: readiness planning, pre-opening training and multi-branch playbooks.",
      ar: "استشارات افتتاح المطاعم والتوسع في السعودية: تخطيط الجاهزية، والتدريب قبل الافتتاح، وأدلة الفروع المتعددة.",
    },
  },
];
