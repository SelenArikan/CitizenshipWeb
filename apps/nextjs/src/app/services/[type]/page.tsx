import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionary";
import { getInvestmentBySlug, getLocalizedField, getLocalizedBullets, INVESTMENTS, ServiceIconKey } from "@/lib/investments";

/* ─── Icon ────────────────────────────────────────────────────── */
function ServiceIcon({ icon, className = "h-8 w-8" }: { icon: ServiceIconKey; className?: string }) {
  const p = { "aria-hidden": true as const, fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.8, viewBox: "0 0 64 64", className };
  switch (icon) {
    case "realEstate": return <svg {...p}><path d="M10 54h44" /><path d="M16 54V26l16-12 16 12v28" /><path d="M24 54V36h16v18" /><path d="M24 28h5" /><path d="M35 28h5" /></svg>;
    case "deposit":    return <svg {...p}><ellipse cx="32" cy="18" rx="16" ry="6" /><path d="M16 18v16c0 3.3 7.2 6 16 6s16-2.7 16-6V18" /><path d="M16 26c0 3.3 7.2 6 16 6s16-2.7 16-6" /><path d="M16 34c0 3.3 7.2 6 16 6s16-2.7 16-6" /></svg>;
    case "employment": return <svg {...p}><circle cx="22" cy="22" r="6" /><circle cx="42" cy="22" r="6" /><path d="M12 46c2.5-6 6.5-10 10-10s7.5 4 10 10" /><path d="M32 46c2.5-6 6.5-10 10-10s7.5 4 10 10" /><path d="M32 18v12" /><path d="M26 24h12" /></svg>;
    case "bonds":      return <svg {...p}><rect x="14" y="14" width="36" height="36" rx="8" /><path d="M24 24h16" /><path d="M24 32h10" /><path d="M24 40h16" /><path d="M42 22l4 4-4 4" /></svg>;
    case "fund":       return <svg {...p}><path d="M18 46c0-11 7-18 14-24 7 6 14 13 14 24" /><path d="M20 46h24" /><path d="M32 22v18" /><path d="M24 32c2 1.5 4.8 2 8 2s6-0.5 8-2" /></svg>;
  }
}

const UI: Record<string, { backLabel: string; otherTitle: string; minLabel: string; authorityLabel: string; nextTitle: string; nextDesc: string; ctaBtn: string; faqBtn: string; ctaTitle: string }> = {
  tr: { backLabel: "Yatırım Türleri", otherTitle: "Diğer Yatırım Seçenekleri", minLabel: "Asgari Eşik", authorityLabel: "Yetkili Kurum", nextTitle: "Sonraki Adım", nextDesc: "Modeli belirledikten sonra evrak planı, uygunluk belgesi ve ikamet izni adımları birlikte kurgulanır.", ctaBtn: "Ücretsiz Danışın", faqBtn: "SSS'yi İncele", ctaTitle: "Dosyanızı Başlatmaya Hazır mısınız?" },
  en: { backLabel: "Investment Types", otherTitle: "Other Investment Options", minLabel: "Min. Threshold", authorityLabel: "Competent Authority", nextTitle: "Next Step", nextDesc: "After choosing the model, we plan your documentation, eligibility certificate, and residence permit steps together.", ctaBtn: "Free Consultation", faqBtn: "View FAQ", ctaTitle: "Ready to Start Your File?" },
  ru: { backLabel: "Виды инвестиций", otherTitle: "Другие варианты инвестиций", minLabel: "Мин. порог", authorityLabel: "Компетентный орган", nextTitle: "Следующий шаг", nextDesc: "После выбора модели мы совместно планируем документацию, сертификат соответствия и шаги ВНЖ.", ctaBtn: "Бесплатная консультация", faqBtn: "FAQ", ctaTitle: "Готовы начать своё досье?" },
  ar: { backLabel: "أنواع الاستثمار", otherTitle: "خيارات الاستثمار الأخرى", minLabel: "الحد الأدنى", authorityLabel: "الجهة المختصة", nextTitle: "الخطوة التالية", nextDesc: "بعد اختيار النموذج نضع معاً خطة الوثائق وشهادة الأهلية وخطوات الإقامة.", ctaBtn: "استشارة مجانية", faqBtn: "الأسئلة الشائعة", ctaTitle: "هل أنت مستعد لبدء ملفك؟" },
  fa: { backLabel: "انواع سرمایه‌گذاری", otherTitle: "سایر گزینه‌های سرمایه‌گذاری", minLabel: "حداقل آستانه", authorityLabel: "مرجع صلاحیت‌دار", nextTitle: "مرحله بعدی", nextDesc: "پس از انتخاب مدل، مدارک، گواهی صلاحیت و مراحل اقامت را با هم برنامه‌ریزی می‌کنیم.", ctaBtn: "مشاوره رایگان", faqBtn: "سؤالات متداول", ctaTitle: "آماده شروع پرونده‌تان هستید؟" },
};

export default async function ServiceDetailPage({ slug, lang = "tr" }: { slug: string; lang?: string }) {
  const dict = await getDictionary(lang);
  const isRtl = (dict as any).dir === "rtl";
  const inv = getInvestmentBySlug(slug);
  if (!inv) notFound();

  const sp = (dict as any).services_page ?? {};
  const fallback = UI[lang] ?? UI.tr;
  const ui = {
    backLabel:     sp.detail_back      ?? fallback.backLabel,
    otherTitle:    sp.detail_others    ?? fallback.otherTitle,
    minLabel:      sp.detail_min       ?? fallback.minLabel,
    authorityLabel:sp.detail_authority ?? fallback.authorityLabel,
    nextTitle:     sp.detail_next_title?? fallback.nextTitle,
    nextDesc:      sp.detail_next_desc ?? fallback.nextDesc,
    ctaTitle:      sp.detail_cta_title ?? fallback.ctaTitle,
    ctaBtn:        sp.detail_cta_btn   ?? fallback.ctaBtn,
    faqBtn:        sp.detail_faq_btn   ?? fallback.faqBtn,
  };
  const title = getLocalizedField(inv, "title", lang);
  const desc = getLocalizedField(inv, "desc", lang);
  const threshold = getLocalizedField(inv, "threshold", lang);
  const authority = getLocalizedField(inv, "authority", lang);
  const bullets = getLocalizedBullets(inv, lang);

  // Other investments (not current)
  const otherInvestments = INVESTMENTS.filter((i) => i.slug !== slug).slice(0, 4);

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="overflow-hidden">

      {/* ══ HERO ══ */}
      <section className="relative bg-[#0a192f] pb-16 pt-36">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden="true"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%,rgba(138,28,28,0.2) 0%,transparent 70%)" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href={`/${lang}/services`} className="flex items-center gap-1.5 transition hover:text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
              </svg>
              {ui.backLabel}
            </Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className="hidden shrink-0 sm:flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#e05a5a]">
              <ServiceIcon icon={inv.icon} className="h-8 w-8" />
            </div>
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#8a1c1c]/40 bg-[#8a1c1c]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e05a5a]" />
                {authority}
              </span>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">{title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-16 lg:items-start">

            {/* Left — description + bullets */}
            <div>
              <p className="mb-10 text-lg leading-relaxed text-gray-600 sm:text-xl">{desc}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                {bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#f8fafc] p-5 transition hover:border-[#8a1c1c]/20 hover:bg-[#fdf9f9]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10 text-[#8a1c1c]" aria-hidden="true">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="text-sm leading-relaxed text-gray-600">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — sticky sidebar */}
            <div className="lg:sticky lg:top-28 space-y-5">
              {/* Threshold card */}
              <div className="overflow-hidden rounded-3xl bg-[#0a192f]">
                <div className="p-8">
                  <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-2xl border border-white/10 bg-white/5 text-[#e05a5a]">
                    <ServiceIcon icon={inv.icon} className="h-8 w-8" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{ui.minLabel}</p>
                  <p className="mt-2 text-3xl font-extrabold text-white">{threshold}</p>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{ui.authorityLabel}</p>
                    <p className="mt-2 text-sm font-semibold text-gray-200">{authority}</p>
                  </div>
                </div>
                {/* Next step */}
                <div className="border-t border-white/10 bg-white/5 p-6">
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-[#8a1c1c]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{ui.nextTitle}</p>
                  <p className="text-sm leading-relaxed text-gray-300">{ui.nextDesc}</p>
                </div>
              </div>

              {/* CTA card */}
              <div className="rounded-3xl border border-[#8a1c1c]/20 bg-[#fdf4f4] p-7 text-center">
                <p className="mb-4 font-bold text-[#0a192f]">{ui.ctaTitle}</p>
                <Link href={`/${lang}/contact`}
                  className="block w-full rounded-full bg-[#8a1c1c] py-3 text-sm font-bold text-white transition hover:bg-[#a32222] mb-3">
                  {ui.ctaBtn}
                </Link>
                <Link href={`/${lang}/questions`}
                  className="block w-full rounded-full border border-[#8a1c1c]/30 py-3 text-sm font-bold text-[#8a1c1c] transition hover:bg-[#8a1c1c]/5">
                  {ui.faqBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OTHER INVESTMENTS ══ */}
      <section className="bg-[#f8f9fc] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-gray-400">{ui.otherTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherInvestments.map((other) => {
              const otherTitle = getLocalizedField(other, "title", lang);
              const otherThreshold = getLocalizedField(other, "threshold", lang);
              return (
                <Link key={other.slug} href={`/${lang}/services/${other.slug}`}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#8a1c1c]/20 hover:shadow-md">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-[#0a192f] transition group-hover:bg-[#8a1c1c] group-hover:text-white">
                    <ServiceIcon icon={other.icon} className="h-5 w-5" />
                  </div>
                  <p className="mb-2 font-bold text-[#0a192f] text-sm leading-snug">{otherTitle}</p>
                  <p className="mt-auto pt-3 text-xs font-semibold text-[#8a1c1c]">{otherThreshold}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
