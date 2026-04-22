import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { INVESTMENTS, getLocalizedField, ServiceIconKey } from "@/lib/investments";

/* ─── Icon ─────────────────────────────────────────────────────── */
function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  const p = {
    "aria-hidden": true as const,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 64 64",
    className: "h-7 w-7",
  };
  switch (icon) {
    case "realEstate": return <svg {...p}><path d="M10 54h44" /><path d="M16 54V26l16-12 16 12v28" /><path d="M24 54V36h16v18" /><path d="M24 28h5" /><path d="M35 28h5" /></svg>;
    case "deposit":   return <svg {...p}><ellipse cx="32" cy="18" rx="16" ry="6" /><path d="M16 18v16c0 3.3 7.2 6 16 6s16-2.7 16-6V18" /><path d="M16 26c0 3.3 7.2 6 16 6s16-2.7 16-6" /><path d="M16 34c0 3.3 7.2 6 16 6s16-2.7 16-6" /></svg>;
    case "employment":return <svg {...p}><circle cx="22" cy="22" r="6" /><circle cx="42" cy="22" r="6" /><path d="M12 46c2.5-6 6.5-10 10-10s7.5 4 10 10" /><path d="M32 46c2.5-6 6.5-10 10-10s7.5 4 10 10" /><path d="M32 18v12" /><path d="M26 24h12" /></svg>;
    case "bonds":     return <svg {...p}><rect x="14" y="14" width="36" height="36" rx="8" /><path d="M24 24h16" /><path d="M24 32h10" /><path d="M24 40h16" /><path d="M42 22l4 4-4 4" /></svg>;
    case "fund":      return <svg {...p}><path d="M18 46c0-11 7-18 14-24 7 6 14 13 14 24" /><path d="M20 46h24" /><path d="M32 22v18" /><path d="M24 32c2 1.5 4.8 2 8 2s6-0.5 8-2" /></svg>;
  }
}

/* ─── Page labels ──────────────────────────────────────────────── */
const LABELS: Record<string, { heroTag: string; heroTitle: string; heroDesc: string; compareTitle: string; btnLabel: string; thresholdLabel: string; ctaTitle: string; ctaDesc: string; ctaBtn: string; faqBtn: string }> = {
  tr: { heroTag: "Program Kapsamındaki Seçenekler", heroTitle: "Yatırım Türleri", heroDesc: "Türkiye'de yatırım yoluyla vatandaşlık programında tanınan beş farklı yatırım modelini inceleyin.", compareTitle: "Hızlı Karşılaştırma", btnLabel: "Detayları İncele", thresholdLabel: "Asgari Eşik", ctaTitle: "Dosyanıza Uygun Modeli Birlikte Seçelim", ctaDesc: "Aile yapınız, bütçeniz ve süre beklentinize göre en uygun seçeneği belirlemek için bize ulaşın.", ctaBtn: "İletişime Geç", faqBtn: "SSS'yi İncele" },
  en: { heroTag: "Investment Options", heroTitle: "Investment Types", heroDesc: "Explore five investment models recognized under Turkey's citizenship by investment program.", compareTitle: "Quick Comparison", btnLabel: "View Details", thresholdLabel: "Min. Threshold", ctaTitle: "Let's Choose the Right Model Together", ctaDesc: "Contact us to determine which option suits your family structure, budget and timeline.", ctaBtn: "Get in Touch", faqBtn: "View FAQ" },
  ru: { heroTag: "Варианты инвестиций", heroTitle: "Виды инвестиций", heroDesc: "Изучите пять моделей инвестиций, признанных в рамках программы гражданства Турции по инвестициям.", compareTitle: "Быстрое сравнение", btnLabel: "Подробнее", thresholdLabel: "Мин. порог", ctaTitle: "Выберем подходящую модель вместе", ctaDesc: "Свяжитесь с нами, чтобы определить, какой вариант подходит для вашей семьи, бюджета и ожиданий.", ctaBtn: "Связаться", faqBtn: "FAQ" },
  ar: { heroTag: "خيارات الاستثمار", heroTitle: "أنواع الاستثمار", heroDesc: "اطّلع على النماذج الاستثمارية الخمسة المعتمدة ضمن برنامج الجنسية التركية عبر الاستثمار.", compareTitle: "مقارنة سريعة", btnLabel: "عرض التفاصيل", thresholdLabel: "الحد الأدنى", ctaTitle: "لنختر النموذج المناسب معاً", ctaDesc: "تواصل معنا لتحديد الخيار الأنسب لهيكل أسرتك وميزانيتك وتوقعاتك الزمنية.", ctaBtn: "تواصل معنا", faqBtn: "الأسئلة الشائعة" },
  fa: { heroTag: "گزینه‌های سرمایه‌گذاری", heroTitle: "انواع سرمایه‌گذاری", heroDesc: "پنج مدل سرمایه‌گذاری به رسمیت شناخته شده در برنامه شهروندی ترکیه از طریق سرمایه‌گذاری را بررسی کنید.", compareTitle: "مقایسه سریع", btnLabel: "مشاهده جزئیات", thresholdLabel: "حداقل آستانه", ctaTitle: "بیایید مدل مناسب را با هم انتخاب کنیم", ctaDesc: "برای تعیین گزینه مناسب با ساختار خانوادگی، بودجه و انتظارات زمانی‌تان با ما تماس بگیرید.", ctaBtn: "تماس با ما", faqBtn: "سؤالات متداول" },
};

/* ─── Main showcase component ──────────────────────────────────── */
export default async function ServicesShowcase({ lang = "tr" }: { lang?: string }) {
  const dict = await getDictionary(lang);
  const isRtl = (dict as any).dir === "rtl";
  const sp = (dict as any).services_page ?? {};
  const fallback = LABELS[lang] ?? LABELS.tr;
  const lbl = {
    heroTag:       sp.hero_tag        ?? fallback.heroTag,
    heroTitle:     sp.hero_title      ?? fallback.heroTitle,
    heroDesc:      sp.hero_desc       ?? fallback.heroDesc,
    compareTitle:  sp.compare_title   ?? fallback.compareTitle ?? "Hızlı Karşılaştırma",
    btnLabel:      sp.btn_label       ?? fallback.btnLabel,
    thresholdLabel:sp.threshold_label ?? fallback.thresholdLabel,
    ctaTitle:      sp.cta_title       ?? fallback.ctaTitle,
    ctaDesc:       sp.cta_desc        ?? fallback.ctaDesc,
    ctaBtn:        sp.cta_btn         ?? fallback.ctaBtn,
    faqBtn:        sp.faq_btn         ?? fallback.faqBtn,
  };

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="overflow-hidden">

      {/* ══ HERO ══ */}
      <section className="relative bg-[#0a192f] pb-20 pt-36">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden="true"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%,rgba(138,28,28,0.2) 0%,transparent 70%)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8a1c1c]/40 bg-[#8a1c1c]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e05a5a]" />
            {lbl.heroTag}
          </span>
          <h1 className="mt-4 max-w-2xl text-5xl font-extrabold leading-[1.1] text-white sm:text-7xl">
            {lbl.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-400">{lbl.heroDesc}</p>
        </div>
      </section>

      {/* ══ CARDS SHOWCASE ══ */}
      <section className="bg-[#f8f9fc] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {INVESTMENTS.map((inv, idx) => {
              const title = getLocalizedField(inv, "title", lang);
              const shortDesc = getLocalizedField(inv, "shortDesc", lang);
              const threshold = getLocalizedField(inv, "threshold", lang);

              return (
                <Link
                  key={inv.slug}
                  href={`/${lang}/services/${inv.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-xl hover:border-[#8a1c1c]/20"
                >
                  {/* Top colored strip */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#0a192f] to-[#8a1c1c] transition-all duration-500 group-hover:from-[#8a1c1c] group-hover:to-[#c0392b]" />

                  <div className="flex flex-1 flex-col p-8">
                    {/* Index + Icon row */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f1f1f4] text-[#0a192f] transition group-hover:bg-[#8a1c1c] group-hover:text-white">
                        <ServiceIcon icon={inv.icon} />
                      </div>
                      <span className="text-3xl font-extrabold text-gray-100 transition group-hover:text-[#8a1c1c]/20">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-xl font-extrabold text-[#0a192f] leading-snug">{title}</h2>

                    {/* Short desc */}
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-500">{shortDesc}</p>

                    {/* Threshold pill */}
                    <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#fdf4f4] px-4 py-1.5 text-xs font-bold text-[#8a1c1c]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8a1c1c]" aria-hidden="true" />
                      {threshold}
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center gap-1.5 text-sm font-bold text-[#8a1c1c] transition group-hover:gap-3">
                      {lbl.btnLabel}
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative bg-[#0a192f] py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%,rgba(138,28,28,0.2) 0%,transparent 70%)" }} />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">{lbl.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">{lbl.ctaDesc}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={`/${lang}/contact`}
              className="inline-block rounded-full bg-[#8a1c1c] px-10 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#a32222] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(138,28,28,0.4)]">
              {lbl.ctaBtn}
            </Link>
            <Link href={`/${lang}/questions`}
              className="inline-block rounded-full border border-white/20 px-10 py-4 text-base font-bold text-white transition hover:border-white/40 hover:bg-white/10">
              {lbl.faqBtn}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
