"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { GayrimenkulFonPageCopy } from "@/lib/gayrimenkul-fon-page";

/* ─── Scroll reveal ───────────────────────────────────────────── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0) translateX(0)";
          }
        }),
      { threshold: 0.08 }
    );
    el.querySelectorAll("[data-reveal]").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── SVG icon helper ─────────────────────────────────────────── */
function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const p = {
    "aria-hidden": true as const,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };
  switch (name) {
    case "search":
      return <svg {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
    case "shield":
      return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "doc":
      return <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>;
    case "bank":
      return <svg {...p}><path d="M3 9h18"/><path d="M5 21h14"/><path d="M7 9v8"/><path d="M12 9v8"/><path d="M17 9v8"/><path d="m12 3 9 4H3l9-4Z"/></svg>;
    case "calendar":
      return <svg {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>;
    case "check-circle":
      return <svg {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
    case "alert":
      return <svg {...p}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>;
    case "arrow-right":
      return <svg {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
    case "landmark":
      return <svg {...p}><path d="M3 22h18"/><path d="M6 18V7"/><path d="M10 18V7"/><path d="M14 18V7"/><path d="M18 18V7"/><path d="M4 7h16"/><path d="m12 2 10 5H2l10-5Z"/></svg>;
    case "money":
      return <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>;
    case "home":
      return <svg {...p}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>;
    case "key":
      return <svg {...p}><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>;
    default:
      return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>;
  }
}

/* ─── Reusable section header ─────────────────────────────────── */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-14 ${center ? "text-center" : ""}`}
      data-reveal
      style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
    >
      <span className={`text-xs font-bold uppercase tracking-widest ${light ? "text-[#e05a5a]" : "text-[#8a1c1c]"}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-3 text-3xl font-extrabold sm:text-4xl ${light ? "text-white" : "text-[#0a192f]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl ${light ? "text-gray-400" : "text-gray-500"}`}>{subtitle}</p>
      )}
    </div>
  );
}

/* ─── Bullet list ─────────────────────────────────────────────── */
function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8a1c1c]" />
          <span className={`text-sm leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Numbered step list ──────────────────────────────────────── */
function StepList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <div className="space-y-3 mt-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8a1c1c] text-xs font-bold text-white">
            {i + 1}
          </span>
          <span className={`text-sm leading-relaxed ${light ? "text-gray-200" : "text-gray-600"}`}>{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Props ───────────────────────────────────────────────────── */
type Props = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: GayrimenkulFonPageCopy;
};

/* ══════════════════════════════════════════════════════════════ */
export default function GayrimenkulFonPage({ lang = "tr", dir = "ltr", backLabel = "Yatırım Türleri", copy }: Props) {
  const revealRef = useScrollReveal();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const isRtl = dir === "rtl";
  const arrow = isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7";

  return (
    <main ref={revealRef} className="overflow-hidden" dir={dir}>

      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative flex min-h-[520px] items-end bg-[#0a192f] pb-0 pt-28">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.03,
          }}
        />
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%,rgba(138,28,28,0.25) 0%,transparent 70%)" }}
        />
        {/* Right panel */}
        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block" aria-hidden="true">
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg,#0a192f 0%,#112240 30%,#0f2a45 60%,#0a192f 100%)" }}
            />
            {/* Decorative info cards */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="grid gap-4 w-full max-w-sm">
                {[
                  { label: "Minimum Yatırım", value: "400.000 USD", icon: "money" },
                  { label: "Satış Yasağı Şerhi", value: "3 Yıl", icon: "shield" },
                  { label: "Yetkili Kurum", value: "TKGM", icon: "landmark" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm flex items-center gap-4"
                    style={{ opacity: 0.92 }}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#8a1c1c]/20 text-[#e05a5a]">
                      <Icon name={card.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{card.label}</div>
                      <div className="text-xl font-extrabold text-white">{card.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right,#0a192f 0%,transparent 40%)" }} />
          </div>
        </div>

        {/* Hero text */}
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href={`/${lang}/services`} className="flex items-center gap-1.5 transition hover:text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={arrow} />
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
              {copy.hero.titleLines.map((line, i) => (
                <span key={i} className={`block ${i === copy.hero.highlightLineIndex ? "text-[#e05a5a]" : ""}`}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">{copy.hero.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/${lang}/contact`} className="rounded-full bg-[#8a1c1c] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#a32222] hover:shadow-lg hover:shadow-[#8a1c1c]/30">
                {copy.hero.primaryCta}
              </Link>
              <Link href={`/${lang}/questions`} className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                {copy.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════════ */}
      <section className="bg-[#8a1c1c] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {copy.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                data-reveal
                style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.5s ease ${i * 0.1}s` }}
              >
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm font-semibold text-red-100">{stat.label}</div>
                <div className="mt-0.5 text-xs text-red-200/70">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BÖLÜM 1 – INTRO ════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={copy.bolum1.eyebrow} title={copy.bolum1.title} center={false} />
          <div className="grid gap-8 lg:grid-cols-3">
            {copy.bolum1.intro.map((para, i) => (
              <div
                key={i}
                data-reveal
                style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.5s ease ${i * 0.1}s` }}
                className="rounded-2xl border border-gray-100 bg-[#E8ECF3] p-7"
              >
                <div className="mb-3 h-0.5 w-8 rounded-full bg-[#8a1c1c]" />
                <p className="text-sm leading-relaxed text-gray-700">{para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TAPU İNCELEME KARTLARI ════════════════════════════ */}
      <section className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={copy.bolum1.tapu.eyebrow}
            title={copy.bolum1.tapu.title}
            subtitle="Satın alma öncesi yapılan hukuki incelemenin kapsamı — bu adımların her biri vatandaşlık başvurusunun temelini oluşturur."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {copy.bolum1.tapu.items.map((item, i) => (
              <div
                key={item.num}
                data-reveal
                style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.5s ease ${i * 0.1}s` }}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:border-[#8a1c1c]/20 hover:shadow-md"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a192f] text-white transition-colors group-hover:bg-[#8a1c1c]">
                    <Icon name={["search","alert","doc","shield"][i] ?? "doc"} className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400">{item.num}</span>
                    <h3 className="font-bold text-[#0a192f]">{item.title}</h3>
                  </div>
                </div>
                {item.paragraphs.map((p, pi) => (
                  <p key={pi} className={`text-sm leading-relaxed text-gray-600 ${pi > 0 ? "mt-3" : ""}`}>{p}</p>
                ))}
                {item.bullets && item.bullets.length > 0 && <BulletList items={item.bullets} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ŞERH TÜRLERİ ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0a192f] py-20 lg:py-28">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.025,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={copy.bolum1.sherhler.eyebrow}
            title={copy.bolum1.sherhler.title}
            subtitle="Bu şerh türlerinden herhangi biri tapuda tespit edilirse devir işlemi engellenebilir veya özel prosedür gerektirebilir."
            light
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.bolum1.sherhler.items.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.5s ease ${i * 0.07}s` }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#8a1c1c]/40 hover:bg-white/10"
              >
                <div className="mb-3 h-0.5 w-8 rounded-full bg-[#8a1c1c]" />
                <h3 className="mb-2 font-bold text-white text-sm">{item.title}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TAPU TÜRÜ UYGUNLUĞU ════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div data-reveal style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">{copy.bolum1.tapuTuru.eyebrow}</span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">{copy.bolum1.tapuTuru.title}</h2>
              {copy.bolum1.tapuTuru.paragraphs.map((p, i) => (
                <p key={i} className={`leading-relaxed text-gray-600 ${i === 0 ? "mt-6" : "mt-4"}`}>{p}</p>
              ))}
            </div>
            <div data-reveal style={{ opacity: 0, transform: "translateX(20px)", transition: "all 0.6s ease 0.15s" }}>
              <div className="rounded-2xl border border-[#8a1c1c]/10 bg-[#8a1c1c]/5 p-7">
                <div className="mb-4 flex items-center gap-2">
                  <Icon name="alert" className="h-4 w-4 text-[#8a1c1c]" />
                  <span className="text-sm font-bold text-[#8a1c1c]">{copy.bolum1.tapuTuru.arsaTitle}</span>
                </div>
                <div className="space-y-2">
                  {copy.bolum1.tapuTuru.arsaBullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
                        <svg className="h-3 w-3 text-[#8a1c1c]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NOTER SÖZLEŞMESİ ══════════════════════════════════ */}
      <section className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={copy.bolum1.noter.eyebrow} title={copy.bolum1.noter.title} center={false} />
          <div className="grid gap-6 lg:grid-cols-2">
            {copy.bolum1.noter.paragraphs.map((p, i) => (
              <div
                key={i}
                data-reveal
                style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.45s ease ${i * 0.08}s` }}
                className="rounded-2xl border-l-4 border-[#8a1c1c] bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-gray-700">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EKSPERTİZ DEĞERLENDİRMESİ ═══════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div data-reveal style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">{copy.bolum1.ekspertiz.eyebrow}</span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">{copy.bolum1.ekspertiz.title}</h2>
              {copy.bolum1.ekspertiz.paragraphs.map((p, i) => (
                <p key={i} className={`leading-relaxed text-gray-600 ${i === 0 ? "mt-6" : "mt-4"}`}>{p}</p>
              ))}
            </div>
            <div data-reveal style={{ opacity: 0, transform: "translateX(20px)", transition: "all 0.6s ease 0.15s" }}>
              <div className="overflow-hidden rounded-3xl bg-[#0a192f] shadow-2xl">
                <div className="p-8">
                  <div className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                    {copy.bolum1.ekspertiz.formula.title}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm leading-relaxed text-gray-200">{copy.bolum1.ekspertiz.formula.desc}</p>
                  </div>
                </div>
                <div className="border-t border-white/10 bg-[#8a1c1c]/10 px-8 py-5 flex items-center gap-3">
                  <Icon name="check-circle" className="h-5 w-5 text-[#e05a5a]" />
                  <span className="text-sm font-semibold text-gray-200">Geçerli Tutar = min(DAB, Ekspertiz Raporu)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BÖLÜM 2 – DAB VE BANKA ════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0a192f] py-20 lg:py-28">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%,rgba(138,28,28,0.15) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(138,28,28,0.1) 0%,transparent 50%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={copy.bolum2.eyebrow} title={copy.bolum2.title} light />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {copy.bolum2.items.map((item, i) => (
              <div
                key={item.num}
                data-reveal
                style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.5s ease ${i * 0.08}s` }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#8a1c1c]/40 hover:bg-white/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#8a1c1c] text-xs font-bold text-white">{item.num}</span>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                </div>
                {item.paragraphs.map((p, pi) => (
                  <p key={pi} className={`text-sm leading-relaxed text-gray-300 ${pi > 0 ? "mt-2" : ""}`}>{p}</p>
                ))}
                {item.steps && <StepList items={item.steps} light />}
                {item.bullets && item.bullets.length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">DAB'ta yer alan bilgiler:</p>
                    <BulletList items={item.bullets} light />
                  </div>
                )}
                {item.subItems?.map((sub, si) => (
                  <div key={si} className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-bold text-[#e05a5a] mb-2">{sub.title}</p>
                    <BulletList items={sub.bullets} light />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BÖLÜM 3 – TAPU RANDEVU ════════════════════════════ */}
      <section className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={copy.bolum3.eyebrow} title={copy.bolum3.title} />
          <div className="space-y-5 max-w-4xl mx-auto">
            {copy.bolum3.items.map((item, i) => {
              const isOpen = openSection === item.num;
              return (
                <div
                  key={item.num}
                  data-reveal
                  style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.4s ease ${i * 0.07}s` }}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenSection(isOpen ? null : item.num)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#F0F3F9]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0a192f] text-xs font-bold text-white">{item.num}</span>
                      <span className="font-bold text-[#0a192f]">{item.title}</span>
                    </div>
                    <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#8a1c1c] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-50 px-6 pb-6 pt-4">
                      {item.paragraphs.map((p, pi) => (
                        <p key={pi} className={`text-sm leading-relaxed text-gray-600 ${pi > 0 ? "mt-3" : ""}`}>{p}</p>
                      ))}
                      {item.bullets && item.bullets.length > 0 && (
                        <div className="mt-4">
                          <BulletList items={item.bullets} />
                        </div>
                      )}
                      {item.steps && item.steps.length > 0 && (
                        <div className="mt-4">
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Görevli memur süreci:</p>
                          <StepList items={item.steps} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ BÖLÜM 4 – UYGUNLUK BELGESİ ═══════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow={copy.bolum4.eyebrow} title={copy.bolum4.title} />
          {/* Intro */}
          <div
            className="mx-auto mb-16 max-w-3xl rounded-2xl border-l-4 border-[#8a1c1c] bg-[#E8ECF3] p-7"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <p className="leading-relaxed text-gray-700">{copy.bolum4.intro}</p>
          </div>

          {/* Denetim Kapsamı */}
          <div className="mb-16 grid gap-12 lg:grid-cols-2">
            <div data-reveal style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">{copy.bolum4.denetim.eyebrow}</span>
              <h3 className="mt-2 text-2xl font-extrabold text-[#0a192f]">{copy.bolum4.denetim.title}</h3>
              <div className="mt-6 grid gap-3">
                {copy.bolum4.denetim.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-[#E8ECF3] px-4 py-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
                      <svg className="h-3 w-3 text-[#8a1c1c]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Süre + Sonrası */}
            <div className="flex flex-col gap-6" data-reveal style={{ opacity: 0, transform: "translateX(20px)", transition: "all 0.6s ease 0.15s" }}>
              <div className="rounded-2xl bg-[#0a192f] p-7">
                <div className="mb-3 flex items-center gap-2 text-[#e05a5a]">
                  <Icon name="calendar" className="h-5 w-5" />
                  <span className="font-bold text-white">{copy.bolum4.sure.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">{copy.bolum4.sure.desc}</p>
              </div>
              <div className="rounded-2xl border border-[#8a1c1c]/20 bg-[#fdf4f4] p-7">
                <div className="mb-3 flex items-center gap-2 text-[#8a1c1c]">
                  <Icon name="arrow-right" className="h-5 w-5" />
                  <span className="font-bold text-[#0a192f]">{copy.bolum4.sonrasi.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{copy.bolum4.sonrasi.desc}</p>
              </div>
            </div>
          </div>

          {/* 3-Step Process */}
          <div>
            <div
              className="mb-10 text-center"
              data-reveal
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">{copy.bolum4.process.eyebrow}</span>
              <h3 className="mt-2 text-2xl font-extrabold text-[#0a192f]">{copy.bolum4.process.title}</h3>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {copy.bolum4.process.steps.map((step, i) => (
                <div
                  key={step.num}
                  data-reveal
                  style={{ opacity: 0, transform: "translateY(30px)", transition: `all 0.5s ease ${i * 0.1}s` }}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:border-[#8a1c1c]/20 hover:shadow-md"
                >
                  <div className="absolute top-5 right-6 text-4xl font-black text-gray-100 select-none group-hover:text-[#8a1c1c]/10 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a192f] text-white transition-colors group-hover:bg-[#8a1c1c]">
                    <Icon name={["bank","doc","check-circle"][i] ?? "doc"} className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c] mb-1">{step.num}</p>
                  <h4 className="mb-3 font-bold text-[#0a192f]">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section className="bg-[#8a1c1c] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{copy.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">{copy.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={`/${lang}/contact`} className="rounded-full bg-white px-10 py-4 text-sm font-bold text-[#8a1c1c] shadow-lg transition hover:bg-[#E8ECF3]">
              {copy.cta.primaryCta}
            </Link>
            <Link href={`/${lang}/questions`} className="rounded-full border border-white/30 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/10">
              {copy.cta.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
