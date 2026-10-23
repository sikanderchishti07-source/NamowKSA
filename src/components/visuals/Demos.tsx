import type { Locale } from "@/i18n/config";
import type { ServiceVisual } from "@/content/services";
import { images } from "@/content/images";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/cn";

type T = { en: string; ar: string };
const t = (v: T, l: Locale) => v[l];

/* ───────────── Sample-data badge ───────────── */
export function SampleBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-current/25 px-2.5 py-1 text-[0.7rem] font-semibold", className)}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {label}
    </span>
  );
}

/* ───────────── QR menu in a phone ───────────── */
const menuItems = [
  { name: { en: "Saffron chicken kabsa", ar: "كبسة دجاج بالزعفران" }, desc: { en: "Basmati rice, roasted nuts, tomato daqoos", ar: "أرز بسمتي، مكسرات محمصة، دقوس طماطم" }, price: "58", kcal: "740" },
  { name: { en: "Charred halloumi salad", ar: "سلطة حلومي مشوي" }, desc: { en: "Rocket, pomegranate, za'atar dressing", ar: "جرجير، رمان، صلصة الزعتر" }, price: "42", kcal: "390" },
  { name: { en: "Cardamom date cake", ar: "كيك التمر بالهيل" }, desc: { en: "Warm, with tahini caramel", ar: "يُقدَّم دافئًا مع كراميل الطحينة" }, price: "29", kcal: "460" },
];
const tabs = [
  { en: "Mains", ar: "الأطباق الرئيسية" },
  { en: "Salads", ar: "السلطات" },
  { en: "Desserts", ar: "الحلويات" },
];

export function QrMenuMockup({ locale, sampleLabel, className }: { locale: Locale; sampleLabel: string; className?: string }) {
  return (
    <figure className={cn("relative mx-auto w-[min(100%,300px)]", className)} aria-label={sampleLabel}>
      <div className="rounded-[2.6rem] bg-navy-deep p-2.5 shadow-[0_40px_80px_-30px_rgba(11,31,39,0.55)]">
        <div className="overflow-hidden rounded-[2.1rem] bg-ivory" lang={locale}>
          <div className="flex justify-center pt-2.5">
            <span className="h-5 w-24 rounded-full bg-navy-deep" aria-hidden="true" />
          </div>
          <div className="px-5 pb-2 pt-3">
            <div className="flex items-center justify-between">
              <p className="font-[family-name:var(--font-display)] text-lg text-navy">{t({ en: "Your restaurant", ar: "مطعمك" }, locale)}</p>
              <span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] font-semibold text-stone">EN | ع</span>
            </div>
            <div className="no-scrollbar mt-3 flex gap-1.5 overflow-hidden text-[0.7rem] font-semibold">
              {tabs.map((tab, i) => (
                <span key={tab.en} className={cn("whitespace-nowrap rounded-full px-3 py-1", i === 0 ? "bg-navy text-ivory" : "bg-ivory-deep text-stone")}>
                  {t(tab, locale)}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-5 mt-2 h-28 overflow-hidden rounded-xl">
            <Photo src={images.bowl.src} alt="" sizes="260px" className="absolute inset-0" />
          </div>
          <ul className="divide-y divide-line px-5 pb-6 pt-1">
            {menuItems.map((m) => (
              <li key={m.name.en} className="py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[0.82rem] font-semibold leading-snug text-navy">{t(m.name, locale)}</p>
                  <p className="shrink-0 text-[0.8rem] font-semibold text-teal-dark" dir="ltr">
                    {m.price} <span className="text-[0.65rem]">SAR</span>
                  </p>
                </div>
                <p className="mt-0.5 text-[0.7rem] leading-snug text-stone">{t(m.desc, locale)}</p>
                <p className="mt-1 text-[0.62rem] text-stone/80" dir="ltr">{m.kcal} kcal</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-4 flex justify-center text-stone">
        <SampleBadge label={sampleLabel} />
      </figcaption>
    </figure>
  );
}

/* ───────────── Dashboard ───────────── */
const week = [42, 48, 45, 51, 63, 78, 71];
const lastWeek = [40, 44, 47, 46, 58, 70, 66];
const days = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ar: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"] };
const branches = [
  { name: { en: "Branch A", ar: "فرع أ" }, value: 29.4 },
  { name: { en: "Branch B", ar: "فرع ب" }, value: 31.8 },
  { name: { en: "Branch C", ar: "فرع ج" }, value: 34.6 },
  { name: { en: "Branch D", ar: "فرع د" }, value: 30.2 },
];
const kpis = [
  { label: { en: "Net sales", ar: "صافي المبيعات" }, value: "398K", unit: "SAR", delta: "+6.1%" },
  { label: { en: "Food cost", ar: "تكلفة الطعام" }, value: "31.2", unit: "%", delta: "−0.8 pt" },
  { label: { en: "Labour", ar: "تكلفة العمالة" }, value: "24.5", unit: "%", delta: "+0.3 pt" },
  { label: { en: "Avg. ticket", ar: "متوسط الفاتورة" }, value: "86", unit: "SAR", delta: "+2.4%" },
];

function linePath(values: number[], w: number, h: number, min: number, max: number) {
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"}${((i / (values.length - 1)) * w).toFixed(1)},${(h - ((v - min) / (max - min)) * h).toFixed(1)}`)
    .join(" ");
}

export function DashboardMockup({
  locale,
  sampleLabel,
  sampleNote,
  className,
  tone = "light",
}: {
  locale: Locale;
  sampleLabel: string;
  sampleNote: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const W = 520;
  const H = 150;
  const dark = tone === "dark";
  const target = 32;
  return (
    <figure className={cn("rounded-lg border p-5 sm:p-6", dark ? "border-ivory/12 bg-navy-soft/60 text-ivory" : "border-line bg-white text-charcoal", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className={cn("font-semibold", dark ? "text-ivory" : "text-navy")}>{t({ en: "This week across the group", ar: "أداء المجموعة هذا الأسبوع" }, locale)}</p>
        <SampleBadge label={sampleLabel} className={dark ? "text-teal-light" : "text-teal-dark"} />
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label.en} className={cn("border-s-2 ps-3", dark ? "border-teal-light/50" : "border-teal/40")}>
            <dt className={cn("text-xs", dark ? "text-ivory/60" : "text-stone")}>{t(k.label, locale)}</dt>
            <dd className="mt-1" dir="ltr">
              <span className={cn("text-xl font-semibold tabular-nums", dark ? "text-ivory" : "text-navy")}>{k.value}</span>
              <span className={cn("ms-1 text-xs", dark ? "text-ivory/60" : "text-stone")}>{k.unit}</span>
              <span className={cn("block text-[0.7rem] tabular-nums", dark ? "text-sage-light" : "text-stone")}>{k.delta}</span>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className={cn("text-xs font-semibold", dark ? "text-ivory/70" : "text-stone")}>{t({ en: "Daily sales (SAR thousands)", ar: "المبيعات اليومية (بآلاف الريالات)" }, locale)}</p>
          <svg viewBox={`-22 -6 ${W + 44} ${H + 30}`} className="mt-2 w-full [direction:ltr]" role="img" aria-label={t({ en: "Line chart of daily sales this week compared with last week", ar: "رسم بياني خطي للمبيعات اليومية هذا الأسبوع مقارنة بالأسبوع الماضي" }, locale)}>
            {[0, 0.5, 1].map((f) => (
              <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="currentColor" strokeOpacity="0.1" />
            ))}
            <path d={linePath(lastWeek, W, H, 30, 85)} fill="none" stroke="var(--color-sage)" strokeWidth="2" strokeDasharray="5 5" />
            <path d={linePath(week, W, H, 30, 85)} fill="none" stroke={dark ? "var(--color-teal-light)" : "var(--color-teal)"} strokeWidth="2.5" strokeLinejoin="round" />
            {week.map((v, i) => (
              <circle key={i} cx={(i / 6) * W} cy={H - ((v - 30) / 55) * H} r="3.5" fill={dark ? "var(--color-teal-light)" : "var(--color-teal)"} />
            ))}
            {(locale === "ar" ? days.ar : days.en).map((d, i) => (
              <text key={d} x={(i / 6) * W} y={H + 22} textAnchor="middle" fontSize="12" fill="currentColor" fillOpacity="0.6">
                {d}
              </text>
            ))}
          </svg>
          <div className={cn("mt-1 flex gap-5 text-xs", dark ? "text-ivory/65" : "text-stone")}>
            <span className="inline-flex items-center gap-2"><span className={cn("h-0.5 w-5", dark ? "bg-teal-light" : "bg-teal")} />{t({ en: "This week", ar: "هذا الأسبوع" }, locale)}</span>
            <span className="inline-flex items-center gap-2"><span className="h-0.5 w-5 border-t-2 border-dashed border-sage" />{t({ en: "Last week", ar: "الأسبوع الماضي" }, locale)}</span>
          </div>
        </div>
        <div className="md:col-span-2">
          <p className={cn("text-xs font-semibold", dark ? "text-ivory/70" : "text-stone")}>{t({ en: "Food cost % by branch (target 32%)", ar: "نسبة تكلفة الطعام حسب الفرع (المستهدف 32%)" }, locale)}</p>
          <ul className="mt-3 space-y-3">
            {branches.map((b) => {
              const over = b.value > target;
              return (
                <li key={b.name.en} className="text-xs">
                  <div className="flex justify-between">
                    <span className={dark ? "text-ivory/80" : "text-charcoal"}>{t(b.name, locale)}</span>
                    <span className="tabular-nums" dir="ltr">{b.value.toFixed(1)}%</span>
                  </div>
                  <div className={cn("relative mt-1.5 h-2 rounded-full", dark ? "bg-ivory/10" : "bg-ivory-deep")}>
                    <div
                      className={cn("absolute inset-y-0 start-0 rounded-full", over ? "bg-[#d08a3a]" : dark ? "bg-teal-light" : "bg-teal")}
                      style={{ width: `${(b.value / 40) * 100}%` }}
                    />
                    <div className={cn("absolute -inset-y-1 w-px", dark ? "bg-ivory/60" : "bg-navy/50")} style={{ insetInlineStart: `${(target / 40) * 100}%` }} aria-hidden="true" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <figcaption className={cn("mt-5 text-xs", dark ? "text-ivory/55" : "text-stone")}>{sampleNote}</figcaption>
    </figure>
  );
}

/* ───────────── Website in a browser frame ───────────── */
export function WebsiteMockup({ locale, sampleLabel, className }: { locale: Locale; sampleLabel: string; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-lg border border-line bg-white shadow-[0_30px_60px_-30px_rgba(16,43,54,0.35)]", className)}>
      <div className="flex items-center gap-2 border-b border-line bg-ivory-deep px-4 py-2.5" dir="ltr">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="mx-auto rounded bg-white px-8 py-0.5 text-[0.65rem] text-stone">yourrestaurant.sa</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Photo src={images.diningWood.src} alt="" sizes="(min-width: 1024px) 560px, 90vw" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-navy/10" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-4 text-[0.7rem] font-semibold text-ivory">
          <span className="font-[family-name:var(--font-display)] text-base">{t({ en: "Your restaurant", ar: "مطعمك" }, locale)}</span>
          <span className="hidden gap-4 sm:flex">
            <span>{t({ en: "Menu", ar: "القائمة" }, locale)}</span>
            <span>{t({ en: "Location", ar: "الموقع" }, locale)}</span>
            <span>{t({ en: "Events", ar: "المناسبات" }, locale)}</span>
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="max-w-xs font-[family-name:var(--font-display)] text-2xl leading-tight text-ivory">
            {t({ en: "Seasonal Najdi cooking, served daily.", ar: "مطبخ نجدي موسمي، يُقدَّم يوميًا." }, locale)}
          </p>
          <div className="mt-3 flex gap-2 text-[0.7rem] font-semibold">
            <span className="rounded-sm bg-teal-dark px-3 py-1.5 text-white">{t({ en: "Book a table", ar: "احجز طاولة" }, locale)}</span>
            <span className="rounded-sm border border-ivory/50 px-3 py-1.5 text-ivory">{t({ en: "View menu", ar: "عرض القائمة" }, locale)}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-line text-[0.68rem] rtl:divide-x-reverse">
        {[
          { k: { en: "Open today", ar: "مفتوح اليوم" }, v: "13:00 – 00:00" },
          { k: { en: "Delivery", ar: "التوصيل" }, v: { en: "Order online", ar: "اطلب أونلاين" } },
          { k: { en: "WhatsApp", ar: "واتساب" }, v: { en: "Message us", ar: "راسلنا" } },
        ].map((row) => (
          <div key={row.k.en} className="px-4 py-3">
            <p className="text-stone">{t(row.k, locale)}</p>
            <p className="font-semibold text-navy">{typeof row.v === "string" ? <span dir="ltr">{row.v}</span> : t(row.v, locale)}</p>
          </div>
        ))}
      </div>
      <figcaption className="flex justify-end border-t border-line px-4 py-2 text-stone">
        <SampleBadge label={sampleLabel} />
      </figcaption>
    </figure>
  );
}

/* ───────────── Automation flow ───────────── */
const flow = [
  {
    time: "23:41",
    title: { en: "Closing checklist completed", ar: "اكتملت قائمة تحقق الإغلاق" },
    body: { en: "Submitted on a tablet by the shift supervisor, with photos.", ar: "أرسلها مشرف الوردية من جهاز لوحي مع الصور." },
  },
  {
    time: "23:42",
    title: { en: "Chiller 2 logged at 7°C", ar: "تسجيل الثلاجة 2 عند 7°م" },
    body: { en: "Above the limit, so the manager receives an alert automatically.", ar: "أعلى من الحد المسموح، فيصل تنبيه إلى المدير تلقائيًا." },
    alert: true,
  },
  {
    time: "06:00",
    title: { en: "Daily summary sent", ar: "إرسال الملخص اليومي" },
    body: { en: "Sales, waste log and open issues arrive in one message.", ar: "المبيعات وسجل الهدر والملاحظات المفتوحة في رسالة واحدة." },
  },
];

export function AutomationFlow({ locale, sampleLabel, className }: { locale: Locale; sampleLabel: string; className?: string }) {
  return (
    <figure className={cn("rounded-lg border border-line bg-white p-6", className)}>
      <ol className="relative space-y-6 before:absolute before:inset-y-3 before:start-[1.05rem] before:w-px before:bg-line">
        {flow.map((step, i) => (
          <li key={step.time} className="relative flex gap-4">
            <span
              className={cn(
                "relative z-10 grid size-[2.15rem] shrink-0 place-items-center rounded-full border text-xs font-semibold",
                step.alert ? "border-[#d08a3a] bg-[#fbf1e6] text-[#8a5419]" : "border-teal/40 bg-ivory text-teal-dark",
              )}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <div>
              <p className="text-xs tabular-nums text-stone" dir="ltr">{step.time}</p>
              <p className="font-semibold text-navy">{t(step.title, locale)}</p>
              <p className="mt-0.5 text-sm text-stone">{t(step.body, locale)}</p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="mt-6 flex text-stone">
        <SampleBadge label={sampleLabel} />
      </figcaption>
    </figure>
  );
}

export function ServiceDemo({
  visual,
  locale,
  sampleLabel,
  sampleNote,
}: {
  visual: ServiceVisual;
  locale: Locale;
  sampleLabel: string;
  sampleNote: string;
}) {
  switch (visual) {
    case "qr":
      return <QrMenuMockup locale={locale} sampleLabel={sampleLabel} />;
    case "website":
      return <WebsiteMockup locale={locale} sampleLabel={sampleLabel} />;
    case "dashboard":
      return <DashboardMockup locale={locale} sampleLabel={sampleLabel} sampleNote={sampleNote} />;
    case "automation":
      return <AutomationFlow locale={locale} sampleLabel={sampleLabel} />;
  }
}
