"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { MevduatPageCopy } from "@/lib/mevduat-page";

/* ─── Scroll reveal hook ──────────────────────────────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0) translateX(0)";
          }
        });
      },
      { threshold: 0.08 }
    );
    el.querySelectorAll("[data-reveal]").forEach((child) => obs.observe(child));
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── SVG Icons ───────────────────────────────────────────────── */
function PageIcon({ icon, className = "h-6 w-6" }: { icon: string; className?: string }) {
  const props = {
    "aria-hidden": true as const,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (icon) {
    case "🏦":
      return (
        <svg {...props}>
          <path d="M3 9h18" />
          <path d="M5 21h14" />
          <path d="M7 9v8" />
          <path d="M12 9v8" />
          <path d="M17 9v8" />
          <path d="m12 3 9 4H3l9-4Z" />
        </svg>
      );
    case "💱":
      return (
        <svg {...props}>
          <path d="M7 7h10" />
          <path d="m13 3 4 4-4 4" />
          <path d="M17 17H7" />
          <path d="m11 13-4 4 4 4" />
        </svg>
      );
    case "🔒":
      return (
        <svg {...props}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 1 1 8 0v3" />
          <path d="M12 15v2" />
        </svg>
      );
    case "📜":
      return (
        <svg {...props}>
          <path d="M8 4h8a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H8a3 3 0 0 0 0-6h8" />
          <path d="M8 4a3 3 0 0 0 0 6h8" />
          <path d="M10 10h5" />
          <path d="M10 14h4" />
        </svg>
      );
    case "🏛️":
      return (
        <svg {...props}>
          <path d="M3 9h18" />
          <path d="M5 21h14" />
          <path d="M6 9v9" />
          <path d="M10 9v9" />
          <path d="M14 9v9" />
          <path d="M18 9v9" />
          <path d="m12 3 9 4H3l9-4Z" />
        </svg>
      );
    case "🇹🇷":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M13.5 8.5a3.5 3.5 0 1 0 0 7 4.2 4.2 0 0 1 0-7Z" />
          <path d="m15.7 12 1 1.9 2.1.3-1.5 1.5.3 2.1-1.9-1-1.9 1 .3-2.1-1.5-1.5 2.1-.3 1-1.9Z" />
        </svg>
      );
    case "💡":
      return (
        <svg {...props}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M8.5 14.5c-1-1-2.5-2.6-2.5-4.8a6 6 0 1 1 12 0c0 2.2-1.5 3.8-2.5 4.8-.6.6-1 1.2-1.2 1.8h-2.6c-.2-.6-.6-1.2-1.2-1.8Z" />
        </svg>
      );
    case "⚠️":
      return (
        <svg {...props}>
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      );
    case "👨‍👩‍👧‍👦":
      return (
        <svg {...props}>
          <circle cx="8" cy="8" r="2.5" />
          <circle cx="16" cy="8" r="2.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M4.5 19a4 4 0 0 1 7 0" />
          <path d="M12.5 19a4 4 0 0 1 7 0" />
          <path d="M9 19a3.5 3.5 0 0 1 6 0" />
        </svg>
      );
    case "✅":
      return (
        <svg {...props}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "💼":
      return (
        <svg {...props}>
          <rect x="4" y="7" width="16" height="12" rx="2" />
          <path d="M9 7V5h6v2" />
          <path d="M4 12h16" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
  }
}

/* ─── Component types ─────────────────────────────────────────── */
type MevduatPageProps = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: MevduatPageCopy;
};

/* ─── Main component ──────────────────────────────────────────── */
export default function MevduatPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Yatırım Türleri",
  copy,
}: MevduatPageProps) {
  const revealRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const isRtl = dir === "rtl";
  const breadcrumbArrow = isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7";

  return (
    <main ref={revealRef} className="overflow-hidden" dir={dir}>

      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[520px] items-end bg-[#0a192f] pb-0 pt-28">
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.03,
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%,rgba(138,28,28,0.25) 0%,transparent 70%)",
          }}
        />
        {/* Right image panel */}
        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block" aria-hidden="true">
          <div className="relative h-full w-full overflow-hidden">
            {/* Bank/finance themed gradient panel */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0a192f 0%, #112240 30%, #1a3a5c 60%, #0d2137 100%)",
              }}
            />
            {/* Decorative banking UI elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid gap-4 p-12 w-full max-w-sm">
                <div
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  style={{ opacity: 0.9 }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Asgari Mevduat</div>
                  <div className="text-3xl font-extrabold text-white">500.000 USD</div>
                  <div className="text-sm text-gray-400 mt-1">veya karşılığı döviz</div>
                </div>
                <div
                  className="rounded-2xl border border-[#8a1c1c]/30 bg-[#8a1c1c]/10 p-5 backdrop-blur-sm"
                  style={{ opacity: 0.9 }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-[#e05a5a] mb-2">Tutma Süresi</div>
                  <div className="text-3xl font-extrabold text-white">3 Yıl</div>
                  <div className="text-sm text-gray-400 mt-1">blokaj / taahhüt</div>
                </div>
                <div
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  style={{ opacity: 0.9 }}
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Yetkili Kurum</div>
                  <div className="text-2xl font-extrabold text-white">BDDK</div>
                  <div className="text-sm text-gray-400 mt-1">uygunluk belgesi</div>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #0a192f 0%, transparent 40%)" }}
            />
          </div>
        </div>

        {/* Hero text */}
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href={`/${lang}/services`} className="flex items-center gap-1.5 transition hover:text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={breadcrumbArrow} />
              </svg>
              {backLabel}
            </Link>
            <span>/</span>
            <span className="text-white">{copy.hero.breadcrumbLabel}</span>
          </nav>

          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8a1c1c]/40 bg-[#8a1c1c]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e05a5a]" />
              {copy.hero.tag}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {copy.hero.titleLines.map((line, index) => (
                <span
                  key={`${line}-${index}`}
                  className={`block ${index === copy.hero.highlightLineIndex ? "text-[#e05a5a]" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">{copy.hero.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-[#8a1c1c] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#a32222] hover:shadow-lg hover:shadow-[#8a1c1c]/30"
              >
                {copy.hero.primaryCta}
              </Link>
              <Link
                href={`/${lang}/questions`}
                className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {copy.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ═════════════════════════════════════════════ */}
      <section className="bg-[#8a1c1c] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {copy.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                data-reveal
                style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.5s ease ${index * 0.1}s` }}
              >
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm font-semibold text-red-100">{stat.label}</div>
                <div className="mt-0.5 text-xs text-red-200/70">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTRO / GENEL BAKIŞ ═══════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left text */}
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                {copy.intro.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">
                {copy.intro.title}
              </h2>
              {copy.intro.paragraphs.map((para, i) => (
                <p key={i} className={`leading-relaxed text-gray-600 ${i === 0 ? "mt-6" : "mt-4"}`}>
                  {para}
                </p>
              ))}
            </div>
            {/* Right — info card panel */}
            <div
              className="relative"
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.15s" }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-[#0a192f] shadow-2xl">
                <div className="p-8">
                  <div className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                    Vatandaşlık Sürecinin Temel Adımları
                  </div>
                  <div className="space-y-3">
                    {copy.overview.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8a1c1c] text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="text-sm text-gray-200">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/10 bg-white/5 px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8a1c1c]/20 text-[#e05a5a]">
                      <PageIcon icon="🏦" className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{copy.intro.cardValue}</div>
                      <div className="text-xs text-gray-400">{copy.intro.cardLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className={`absolute -top-4 rounded-2xl bg-[#8a1c1c] px-5 py-3 shadow-xl ${isRtl ? "-left-4" : "-right-4"}`}>
                <div className="text-xl font-extrabold text-white">{copy.intro.badgeValue}</div>
                <div className="text-xs text-red-200">{copy.intro.badgeLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GENEL ÇERÇEVE ═════════════════════════════════════════ */}
      <section className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-12 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.overview.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">{copy.overview.title}</h2>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.1s" }}
            >
              {copy.overview.paragraphs.map((para, i) => (
                <p key={i} className={`leading-relaxed text-gray-600 ${i === 0 ? "" : "mt-4"}`}>
                  {para}
                </p>
              ))}
            </div>
            <div
              className="grid gap-3"
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.2s" }}
            >
              {copy.overview.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
                    <svg className="h-3 w-3 text-[#8a1c1c]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ADIM ADIM SÜREÇ ═══════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-16 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.process.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">{copy.process.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">{copy.process.description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.process.items.map((step, index) => (
              <div
                key={step.num}
                data-reveal
                style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.5s ease ${index * 0.08}s` }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#8a1c1c]/20 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a192f] text-white transition-colors duration-300 group-hover:bg-[#8a1c1c]">
                      <PageIcon icon={step.icon} className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 select-none text-4xl font-black text-gray-100 transition-colors group-hover:text-[#8a1c1c]/10">
                    {step.num}
                  </div>
                </div>
                <h3 className="mt-4 font-bold leading-snug text-[#0a192f]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ KRİTİK RİSKLER ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0a192f] py-20 lg:py-28">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.025,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-16 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              {copy.risks.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{copy.risks.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">{copy.risks.description}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {copy.risks.items.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.5s ease ${index * 0.08}s` }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#8a1c1c]/40 hover:bg-white/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8a1c1c]/20 text-[#e05a5a]">
                    <PageIcon icon="⚠️" className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BES YÖNTEMİ ═══════════════════════════════════════════ */}
      <section className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left */}
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                {copy.bes.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">
                {copy.bes.title}
              </h2>
              {copy.bes.paragraphs.map((para, i) => (
                <p key={i} className={`leading-relaxed text-gray-600 ${i === 0 ? "mt-6" : "mt-4"}`}>
                  {para}
                </p>
              ))}

              {/* Kısıtlamalar */}
              <div className="mt-8 rounded-2xl border border-[#8a1c1c]/10 bg-[#8a1c1c]/5 p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#8a1c1c]">
                  <PageIcon icon="⚠️" className="h-4 w-4" />
                  <span>İlk 3 Yıl Kısıtlamaları</span>
                </div>
                <ul className="space-y-2">
                  {copy.bes.restrictions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8a1c1c]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — Office Role */}
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateX(20px)", transition: "all 0.6s ease 0.15s" }}
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-2 text-sm font-bold text-[#0a192f]">
                  <PageIcon icon="💼" className="h-4 w-4" />
                  <span>BES Yönteminde Büromuzun Rolü</span>
                </div>
                <div className="space-y-3">
                  {copy.bes.officeRole.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0a192f] text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ UYGUNLUK BELGESİ SONRASI ═════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                {copy.postApproval.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">
                {copy.postApproval.title}
              </h2>
              {copy.postApproval.paragraphs.map((para, i) => (
                <p key={i} className={`leading-relaxed text-gray-600 ${i === 0 ? "mt-6" : "mt-4"}`}>
                  {para}
                </p>
              ))}
            </div>
            <div
              className="grid gap-4"
              data-reveal
              style={{ opacity: 0, transform: "translateX(20px)", transition: "all 0.6s ease 0.15s" }}
            >
              {copy.postApproval.bullets.map((bullet, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#E8ECF3] p-5"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0a192f] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-semibold text-[#0a192f]">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ KİMELER BAŞVURABİLİR ══════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0a192f] py-20 lg:py-28">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(138,28,28,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(138,28,28,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-14 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              {copy.whoCanApply.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{copy.whoCanApply.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Başvuru Koşulları */}
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.5s ease" }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 h-0.5 w-8 rounded-full bg-[#8a1c1c]" />
              <h3 className="mb-4 font-bold text-white">Başvuru Koşulları</h3>
              <ul className="space-y-2">
                {copy.whoCanApply.conditions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e05a5a]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 mb-3 text-sm font-bold text-white">{copy.whoCanApply.familyTitle}</div>
              <ul className="space-y-2">
                {copy.whoCanApply.family.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e05a5a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Alamazlar */}
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.5s ease 0.08s" }}
              className="rounded-2xl border border-[#8a1c1c]/30 bg-[#8a1c1c]/10 p-6"
            >
              <div className="mb-4 h-0.5 w-8 rounded-full bg-[#e05a5a]" />
              <h3 className="mb-4 font-bold text-white">{copy.whoCanApply.cannotTitle}</h3>
              <ul className="space-y-2">
                {copy.whoCanApply.cannot.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e05a5a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* İstisnai Durumlar */}
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.5s ease 0.16s" }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 h-0.5 w-8 rounded-full bg-[#8a1c1c]" />
              <h3 className="mb-4 font-bold text-white">{copy.whoCanApply.specialTitle}</h3>
              <ul className="space-y-2">
                {copy.whoCanApply.special.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#e05a5a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HİZMET KAPSAMI ════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-12 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.serviceScope.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.serviceScope.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.serviceScope.items.map((item, index) => (
              <div
                key={index}
                data-reveal
                style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.4s ease ${index * 0.05}s` }}
                className="rounded-2xl border-l-4 border-[#8a1c1c] bg-[#E8ECF3] p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
                    <svg className="h-3 w-3 text-[#8a1c1c]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-14 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.faq.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">{copy.faq.title}</h2>
          </div>
          <div className="space-y-3">
            {copy.faq.items.map((faq, index) => (
              <div
                key={faq.q}
                data-reveal
                style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.4s ease ${index * 0.06}s` }}
                className="overflow-hidden rounded-2xl border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#F0F3F9]"
                >
                  <span className="pr-4 font-semibold text-[#0a192f]">{faq.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#8a1c1c] transition-transform duration-200 ${openFaq === index ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="border-t border-gray-50 px-6 pb-6 pt-4 text-sm leading-relaxed text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════ */}
      <section className="bg-[#8a1c1c] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{copy.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">{copy.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/${lang}/contact`}
              className="rounded-full bg-white px-10 py-4 text-sm font-bold text-[#8a1c1c] shadow-lg transition hover:bg-[#E8ECF3]"
            >
              {copy.cta.primaryCta}
            </Link>
            <Link
              href={`/${lang}/questions`}
              className="rounded-full border border-white/30 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {copy.cta.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
