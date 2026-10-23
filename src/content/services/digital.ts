import type { Service } from "./types";

export const digitalServices: Service[] = [
  {
    slug: "qr-digital-menus",
    category: "digital",
    enabled: true,
    image: "cafeTable",
    visual: "qr",
    title: { en: "QR Digital Menus", ar: "القوائم الرقمية عبر رمز QR" },
    short: {
      en: "Bilingual, on-brand digital menus guests open by scanning a code, updated without reprinting.",
      ar: "قوائم رقمية ثنائية اللغة بهوية علامتك، يفتحها الضيف بمسح الرمز، وتُحدَّث دون إعادة طباعة.",
    },
    headline: {
      en: "A menu you can update in minutes, in both languages",
      ar: "قائمة تحدّثها في دقائق، وباللغتين",
    },
    intro: {
      en: "A QR menu removes the cost and delay of reprinting every time a price or dish changes. We design it around your brand and your menu structure, with clear Arabic and English versions, photography where it helps, and allergen and calorie information where you provide it.",
      ar: "تُغنيك القائمة الرقمية عن تكلفة إعادة الطباعة وتأخيرها في كل مرة يتغير فيها سعر أو طبق. نصممها وفق هويتك وهيكل قائمتك، بنسختين عربية وإنجليزية واضحتين، وصور حيث تفيد، ومعلومات مسببات الحساسية والسعرات الحرارية عند توفيرها.",
    },
    problems: [
      { en: "Printed menus go out of date as soon as prices change.", ar: "تصبح القوائم المطبوعة قديمة بمجرد تغيّر الأسعار." },
      { en: "Generic menu apps don't reflect your brand.", ar: "تطبيقات القوائم العامة لا تعكس هوية علامتك." },
      { en: "Arabic and English versions are inconsistent.", ar: "النسختان العربية والإنجليزية غير متسقتين." },
      { en: "Guests can't easily find calorie or allergen details.", ar: "لا يجد الضيوف تفاصيل السعرات أو مسببات الحساسية بسهولة." },
    ],
    approach: [
      {
        title: { en: "Menu structure", ar: "هيكلة القائمة" },
        body: {
          en: "We organise categories and item order for easy browsing on a phone, ideally informed by menu engineering.",
          ar: "ننظم الفئات وترتيب الأصناف لتسهيل التصفح على الجوال، ويُفضَّل أن يستند ذلك إلى هندسة القائمة.",
        },
      },
      {
        title: { en: "Design and build", ar: "التصميم والتطوير" },
        body: {
          en: "We design a fast, mobile-first menu in your brand colours and typography, with true right-to-left Arabic layout.",
          ar: "نصمم قائمة سريعة تُعطي الأولوية للجوال، بألوان علامتك وخطوطها، وبتخطيط عربي حقيقي من اليمين إلى اليسار.",
        },
      },
      {
        title: { en: "Content and photography", ar: "المحتوى والصور" },
        body: {
          en: "We write or refine item descriptions in both languages and integrate your photography and nutritional information.",
          ar: "نكتب أوصاف الأصناف أو نحسّنها باللغتين، وندمج صورك والمعلومات الغذائية.",
        },
      },
      {
        title: { en: "Codes and handover", ar: "الرموز والتسليم" },
        body: {
          en: "We generate QR codes for tables and print materials, and show your team how to update items and prices.",
          ar: "نُنشئ رموز QR للطاولات والمطبوعات، ونوضح لفريقك كيفية تحديث الأصناف والأسعار.",
        },
      },
    ],
    deliverables: [
      { en: "Branded, bilingual mobile menu", ar: "قائمة جوال ثنائية اللغة بهوية علامتك" },
      { en: "Item descriptions in Arabic and English", ar: "أوصاف الأصناف بالعربية والإنجليزية" },
      { en: "QR code files for tables and print", ar: "ملفات رموز QR للطاولات والمطبوعات" },
      { en: "A simple way for your team to update items and prices", ar: "طريقة بسيطة لفريقك لتحديث الأصناف والأسعار" },
      { en: "Optional calorie and allergen display", ar: "عرض اختياري للسعرات ومسببات الحساسية" },
    ],
    benefits: [
      { en: "Price and menu changes published immediately", ar: "نشر فوري لتغييرات الأسعار والقائمة" },
      { en: "Lower ongoing printing costs", ar: "تكاليف طباعة مستمرة أقل" },
      { en: "A consistent brand experience at every table", ar: "تجربة علامة متسقة على كل طاولة" },
      { en: "Clear information for guests in their preferred language", ar: "معلومات واضحة للضيوف بلغتهم المفضلة" },
    ],
    faqs: [
      {
        q: { en: "Does the QR menu take orders or payments?", ar: "هل تستقبل القائمة الرقمية الطلبات أو المدفوعات؟" },
        a: {
          en: "Our standard QR menu is for browsing. Ordering and payment involve your POS and payment provider; we can advise on integrating with a suitable ordering system if you need one.",
          ar: "قائمتنا الرقمية القياسية مخصصة للتصفح. أما الطلب والدفع فيرتبطان بنظام نقاط البيع ومزوّد الدفع لديك، ويمكننا تقديم المشورة حول الربط مع نظام طلبات مناسب عند الحاجة.",
        },
      },
      {
        q: { en: "Do guests need to download an app?", ar: "هل يحتاج الضيف إلى تنزيل تطبيق؟" },
        a: {
          en: "No. The menu opens in the phone's browser after scanning the code.",
          ar: "لا. تُفتح القائمة في متصفح الجوال مباشرة بعد مسح الرمز.",
        },
      },
    ],
    related: ["menu-engineering", "restaurant-websites", "food-costing"],
    seoDescription: {
      en: "Bilingual QR digital menus for restaurants and cafés in Saudi Arabia: on-brand, mobile-first and easy to update.",
      ar: "قوائم رقمية ثنائية اللغة عبر رمز QR للمطاعم والمقاهي في السعودية: بهوية علامتك، ومصممة للجوال، وسهلة التحديث.",
    },
  },
  {
    slug: "restaurant-websites",
    category: "digital",
    enabled: true,
    image: "diningWood",
    visual: "website",
    title: { en: "Restaurant Website Development", ar: "تطوير مواقع المطاعم" },
    short: {
      en: "Fast, bilingual restaurant websites that answer guests' questions and lead to bookings and visits.",
      ar: "مواقع مطاعم سريعة وثنائية اللغة تجيب عن أسئلة الضيوف وتقودهم إلى الحجز والزيارة.",
    },
    headline: {
      en: "A website that does the job guests need it to do",
      ar: "موقع يؤدي ما يحتاجه الضيف منه",
    },
    intro: {
      en: "Most guests visit a restaurant website to check the menu, location, opening hours or how to book. We build fast, bilingual sites that make those answers obvious, reflect your brand properly, and are easy for your team to keep current.",
      ar: "يزور معظم الضيوف موقع المطعم للاطلاع على القائمة أو الموقع أو ساعات العمل أو طريقة الحجز. نبني مواقع سريعة وثنائية اللغة تجعل هذه الإجابات واضحة، وتعكس علامتك كما ينبغي، ويسهل على فريقك تحديثها.",
    },
    problems: [
      { en: "The current site is slow, outdated or hard to use on a phone.", ar: "الموقع الحالي بطيء أو قديم أو صعب الاستخدام على الجوال." },
      { en: "Menu, hours and location information is missing or wrong.", ar: "معلومات القائمة وساعات العمل والموقع ناقصة أو غير صحيحة." },
      { en: "The Arabic version feels like an afterthought.", ar: "النسخة العربية تبدو وكأنها أُضيفت لاحقًا." },
      { en: "There is no clear route to book, call or order.", ar: "لا يوجد مسار واضح للحجز أو الاتصال أو الطلب." },
    ],
    approach: [
      {
        title: { en: "Content and structure", ar: "المحتوى والهيكل" },
        body: {
          en: "We plan pages around guest questions and your business goals: visits, bookings, events or catering enquiries.",
          ar: "نخطط الصفحات حول أسئلة الضيوف وأهداف منشأتك: الزيارات، أو الحجوزات، أو المناسبات، أو طلبات التموين.",
        },
      },
      {
        title: { en: "Design", ar: "التصميم" },
        body: {
          en: "We design in your brand identity with proper Arabic typography and right-to-left layouts, not mirrored English.",
          ar: "نصمم وفق هوية علامتك بخطوط عربية مناسبة وتخطيط حقيقي من اليمين إلى اليسار، لا مجرد عكس للنسخة الإنجليزية.",
        },
      },
      {
        title: { en: "Build and integrations", ar: "التطوير والربط" },
        body: {
          en: "We build a fast, accessible site and connect booking, delivery, map and messaging links you already use.",
          ar: "نبني موقعًا سريعًا وسهل الوصول، ونربط روابط الحجز والتوصيل والخرائط والمراسلة التي تستخدمها بالفعل.",
        },
      },
      {
        title: { en: "Launch and search basics", ar: "الإطلاق وأساسيات الظهور في البحث" },
        body: {
          en: "We set up page titles, descriptions, structured data and analytics so the site can be found and measured.",
          ar: "نُعدّ عناوين الصفحات وأوصافها والبيانات المنظمة وأدوات التحليل ليسهل العثور على الموقع وقياس أدائه.",
        },
      },
    ],
    deliverables: [
      { en: "Bilingual, mobile-first website", ar: "موقع ثنائي اللغة يُعطي الأولوية للجوال" },
      { en: "Menu, location, hours and contact pages", ar: "صفحات للقائمة والموقع وساعات العمل والتواصل" },
      { en: "Booking, delivery and WhatsApp links", ar: "روابط الحجز والتوصيل وواتساب" },
      { en: "Search engine and social sharing setup", ar: "إعدادات محركات البحث والمشاركة الاجتماعية" },
      { en: "Handover guide for content updates", ar: "دليل تسليم لتحديث المحتوى" },
    ],
    benefits: [
      { en: "Guests find accurate information quickly", ar: "يجد الضيوف معلومات دقيقة بسرعة" },
      { en: "A clearer route from search to visit or booking", ar: "مسار أوضح من البحث إلى الزيارة أو الحجز" },
      { en: "A brand presence that matches the dining experience", ar: "حضور رقمي يليق بتجربة المطعم" },
      { en: "A site your team can keep up to date", ar: "موقع يستطيع فريقك إبقاءه محدّثًا" },
    ],
    faqs: [
      {
        q: { en: "Do you provide hosting and a domain?", ar: "هل توفرون الاستضافة واسم النطاق؟" },
        a: {
          en: "We can set up hosting and connect your domain, with the accounts registered in your business's name so you keep ownership.",
          ar: "يمكننا إعداد الاستضافة وربط اسم النطاق، مع تسجيل الحسابات باسم منشأتك لتبقى الملكية لك.",
        },
      },
      {
        q: { en: "Can the site include online ordering?", ar: "هل يمكن أن يتضمن الموقع الطلب عبر الإنترنت؟" },
        a: {
          en: "We link to your existing ordering or delivery platforms. Building a full ordering system is outside the scope of a marketing website.",
          ar: "نربط الموقع بمنصات الطلب أو التوصيل التي تستخدمها. أما بناء نظام طلبات متكامل فيقع خارج نطاق الموقع التعريفي.",
        },
      },
    ],
    related: ["qr-digital-menus", "launch-expansion", "workflow-automation"],
    seoDescription: {
      en: "Restaurant website development in Saudi Arabia: fast, bilingual Arabic and English sites with menus, booking links and search setup.",
      ar: "تطوير مواقع المطاعم في السعودية: مواقع سريعة ثنائية اللغة بالعربية والإنجليزية مع القوائم وروابط الحجز وإعدادات البحث.",
    },
  },
  {
    slug: "dashboards-reporting",
    category: "digital",
    enabled: true,
    image: "diningLarge",
    visual: "dashboard",
    title: { en: "Dashboards and Reporting", ar: "لوحات المتابعة والتقارير" },
    short: {
      en: "Performance dashboards and operational reports that bring sales, costs and labour into one view.",
      ar: "لوحات أداء وتقارير تشغيلية تجمع المبيعات والتكاليف والعمالة في عرض واحد.",
    },
    headline: {
      en: "The numbers that matter, in one place, every week",
      ar: "الأرقام المهمة، في مكان واحد، كل أسبوع",
    },
    intro: {
      en: "Most restaurants have plenty of data spread across a POS, delivery apps, spreadsheets and supplier invoices, but little time to bring it together. We design dashboards and reports around the decisions you actually make, and set up the routine that keeps them current.",
      ar: "تمتلك معظم المطاعم بيانات كثيرة موزعة بين نظام نقاط البيع وتطبيقات التوصيل والجداول وفواتير الموردين، لكن الوقت لجمعها قليل. نصمم لوحات متابعة وتقارير حول القرارات التي تتخذها فعليًا، ونُعدّ الروتين الذي يُبقيها محدّثة.",
    },
    problems: [
      { en: "Reports are assembled manually and arrive too late to act on.", ar: "تُجمع التقارير يدويًا وتصل متأخرة بعد فوات وقت التصرف." },
      { en: "Each branch reports differently, so comparisons are unreliable.", ar: "يرفع كل فرع تقاريره بطريقة مختلفة، فتصبح المقارنة غير موثوقة." },
      { en: "Sales are visible but food cost and labour are not.", ar: "المبيعات واضحة، لكن تكلفة الطعام والعمالة ليست كذلك." },
      { en: "Delivery-app performance sits in separate portals.", ar: "أداء تطبيقات التوصيل موزع على بوابات منفصلة." },
    ],
    approach: [
      {
        title: { en: "Define the measures", ar: "تحديد المؤشرات" },
        body: {
          en: "We agree a short list of indicators, definitions and targets with you, so everyone reads the numbers the same way.",
          ar: "نتفق معك على قائمة مختصرة من المؤشرات وتعريفاتها وأهدافها، ليقرأ الجميع الأرقام بالطريقة نفسها.",
        },
      },
      {
        title: { en: "Connect the sources", ar: "ربط المصادر" },
        body: {
          en: "We bring data from your POS exports, delivery platforms, costing and rota files together, using integrations where your systems allow them.",
          ar: "نجمع البيانات من مخرجات نقاط البيع ومنصات التوصيل وملفات التكاليف والمناوبات، باستخدام الربط المباشر حيث تسمح أنظمتك بذلك.",
        },
      },
      {
        title: { en: "Design the views", ar: "تصميم طرق العرض" },
        body: {
          en: "Owners, area managers and branch managers each get the view they need, from a weekly summary to a daily branch check.",
          ar: "يحصل المالك ومدير المنطقة ومدير الفرع كلٌّ على العرض الذي يحتاجه، من ملخص أسبوعي إلى متابعة يومية للفرع.",
        },
      },
      {
        title: { en: "Reporting rhythm", ar: "إيقاع التقارير" },
        body: {
          en: "We set up a review routine so the dashboard leads to decisions and actions, not just observation.",
          ar: "نُعدّ روتين مراجعة يجعل لوحة المتابعة تقود إلى قرارات وإجراءات، لا مجرد اطلاع.",
        },
      },
    ],
    deliverables: [
      { en: "Agreed KPI definitions and targets", ar: "تعريفات وأهداف متفق عليها لمؤشرات الأداء" },
      { en: "Dashboard covering sales, food cost, labour and channels", ar: "لوحة متابعة تغطي المبيعات وتكلفة الطعام والعمالة والقنوات" },
      { en: "Branch comparison views for multi-site operators", ar: "عروض مقارنة بين الفروع للمنشآت متعددة المواقع" },
      { en: "Data update procedure and ownership", ar: "إجراء لتحديث البيانات وتحديد المسؤول عنه" },
      { en: "Weekly review template", ar: "نموذج مراجعة أسبوعية" },
    ],
    benefits: [
      { en: "Earlier visibility of problems", ar: "رؤية مبكرة للمشكلات" },
      { en: "Consistent reporting across branches", ar: "تقارير متسقة بين الفروع" },
      { en: "Less time spent compiling spreadsheets", ar: "وقت أقل في تجميع الجداول" },
      { en: "Meetings focused on decisions rather than gathering figures", ar: "اجتماعات تركّز على القرارات بدلًا من جمع الأرقام" },
    ],
    faqs: [
      {
        q: { en: "Which systems can you connect to?", ar: "ما الأنظمة التي يمكنكم الربط معها؟" },
        a: {
          en: "It depends on what your POS and other platforms allow. Where direct integration isn't available, we use scheduled exports. We confirm what's possible during scoping.",
          ar: "يعتمد ذلك على ما يتيحه نظام نقاط البيع والمنصات الأخرى لديك. وحين لا يتوفر الربط المباشر نستخدم التصدير المجدول، ونؤكد الممكن أثناء تحديد النطاق.",
        },
      },
      {
        q: { en: "Is the dashboard on this website live?", ar: "هل لوحة المتابعة المعروضة في هذا الموقع حقيقية؟" },
        a: {
          en: "No. The dashboard shown here uses sample data for illustration only and is not connected to any restaurant system.",
          ar: "لا. اللوحة المعروضة هنا تستخدم بيانات توضيحية لأغراض العرض فقط، وليست مرتبطة بأي نظام مطعم.",
        },
      },
    ],
    related: ["food-costing", "workflow-automation", "restaurant-operations"],
    seoDescription: {
      en: "Restaurant performance dashboards and operational reporting in Saudi Arabia: sales, food cost, labour and branch comparisons in one view.",
      ar: "لوحات أداء المطاعم والتقارير التشغيلية في السعودية: المبيعات وتكلفة الطعام والعمالة والمقارنة بين الفروع في عرض واحد.",
    },
  },
  {
    slug: "workflow-automation",
    category: "digital",
    enabled: true,
    image: "kitchenPots",
    visual: "automation",
    title: { en: "Workflow Automation", ar: "أتمتة سير العمل" },
    short: {
      en: "Digital checklists, alerts and automated routines that replace paper and repeated manual tasks.",
      ar: "قوائم تحقق رقمية وتنبيهات وإجراءات مؤتمتة تحل محل الورق والمهام اليدوية المتكررة.",
    },
    headline: {
      en: "Less paperwork, fewer missed steps",
      ar: "أوراق أقل، وخطوات منسية أقل",
    },
    intro: {
      en: "Daily restaurant work is full of repeated tasks: checklists, temperature logs, order reminders, shift reports, approvals. We identify which ones can be digitised or automated with practical tools, and set them up so they fit your team's routine.",
      ar: "العمل اليومي في المطعم مليء بالمهام المتكررة: قوائم التحقق، وسجلات درجات الحرارة، وتذكيرات الطلب، وتقارير الورديات، والموافقات. نحدد ما يمكن رقمنته أو أتمتته بأدوات عملية، ونُعدّه بما يناسب روتين فريقك.",
    },
    problems: [
      { en: "Paper checklists get lost or are completed after the fact.", ar: "تضيع قوائم التحقق الورقية أو تُملأ بعد الحدث." },
      { en: "Managers chase the same information by message every day.", ar: "يلاحق المديرون المعلومات نفسها عبر الرسائل يوميًا." },
      { en: "Orders and reminders depend on someone remembering.", ar: "تعتمد الطلبات والتذكيرات على أن يتذكرها أحد." },
      { en: "Data is entered twice into different systems.", ar: "تُدخل البيانات مرتين في أنظمة مختلفة." },
    ],
    approach: [
      {
        title: { en: "Process mapping", ar: "رسم الإجراءات" },
        body: {
          en: "We map recurring tasks and find the ones where automation would save the most time or reduce the most errors.",
          ar: "نرسم المهام المتكررة ونحدد أكثرها توفيرًا للوقت أو تقليلًا للأخطاء عند أتمتتها.",
        },
      },
      {
        title: { en: "Tool selection", ar: "اختيار الأدوات" },
        body: {
          en: "We prefer tools you already pay for. Where something new is needed, we recommend options proportionate to your size.",
          ar: "نفضّل الأدوات التي تدفع مقابلها بالفعل، وحين تلزم أداة جديدة نوصي بخيارات تتناسب مع حجم منشأتك.",
        },
      },
      {
        title: { en: "Build and test", ar: "البناء والاختبار" },
        body: {
          en: "We build digital forms, alerts and automated flows, test them with your staff during real shifts, and refine them.",
          ar: "نبني النماذج الرقمية والتنبيهات والتدفقات المؤتمتة، ونختبرها مع موظفيك خلال ورديات فعلية، ثم نحسّنها.",
        },
      },
      {
        title: { en: "Train and hand over", ar: "التدريب والتسليم" },
        body: {
          en: "Your team learns to use and maintain the workflows, with simple documentation for each one.",
          ar: "يتعلم فريقك استخدام سير العمل وصيانته، مع توثيق مبسّط لكل واحد منها.",
        },
      },
    ],
    deliverables: [
      { en: "Map of recurring processes and automation priorities", ar: "خريطة للإجراءات المتكررة وأولويات الأتمتة" },
      { en: "Digital checklists and logs (opening, closing, temperatures, cleaning)", ar: "قوائم تحقق وسجلات رقمية (الافتتاح، والإغلاق، ودرجات الحرارة، والنظافة)" },
      { en: "Automated alerts and reminders", ar: "تنبيهات وتذكيرات مؤتمتة" },
      { en: "Shift and daily summary reports", ar: "تقارير ملخصة للورديات والأيام" },
      { en: "Documentation and team training", ar: "توثيق وتدريب للفريق" },
    ],
    benefits: [
      { en: "Time returned to managers each week", ar: "وقت يعود إلى المديرين كل أسبوع" },
      { en: "Fewer forgotten or skipped tasks", ar: "مهام منسية أو متجاوزة أقل" },
      { en: "Time-stamped records that are easy to review", ar: "سجلات بتوقيت زمني يسهل مراجعتها" },
      { en: "Less duplicated data entry", ar: "إدخال مكرر أقل للبيانات" },
    ],
    faqs: [
      {
        q: { en: "Do we need to replace our current systems?", ar: "هل نحتاج إلى استبدال أنظمتنا الحالية؟" },
        a: {
          en: "Usually not. Automation works best when it connects and simplifies what you already use.",
          ar: "غالبًا لا. تعمل الأتمتة بأفضل صورة حين تربط ما تستخدمه حاليًا وتبسّطه.",
        },
      },
    ],
    related: ["dashboards-reporting", "food-safety-compliance", "inventory-waste-control"],
    seoDescription: {
      en: "Restaurant workflow automation in Saudi Arabia: digital checklists, temperature logs, alerts and automated shift reports.",
      ar: "أتمتة سير العمل للمطاعم في السعودية: قوائم تحقق رقمية، وسجلات درجات الحرارة، وتنبيهات، وتقارير ورديات مؤتمتة.",
    },
  },
];
