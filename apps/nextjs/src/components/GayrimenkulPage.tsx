"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { GayrimenkulPageCopy } from "@/lib/gayrimenkul-page";

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
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((child) => obs.observe(child));

    return () => obs.disconnect();
  }, []);

  return ref;
}

function PageIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: string;
  className?: string;
}) {
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
    case "🏠":
      return (
        <svg {...props}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M10 21v-6h4v6" />
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
    case "📋":
      return (
        <svg {...props}>
          <rect x="6" y="4" width="12" height="16" rx="2" />
          <path d="M9 4.5h6v3H9z" />
          <path d="m9.5 13 1.8 1.8 3.2-3.6" />
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
    case "🏢":
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 7h1" />
          <path d="M14 7h1" />
          <path d="M9 11h1" />
          <path d="M14 11h1" />
          <path d="M9 15h1" />
          <path d="M14 15h1" />
          <path d="M11 21v-4h2v4" />
        </svg>
      );
    case "🏪":
      return (
        <svg {...props}>
          <path d="M4 8h16l-1 4H5L4 8Z" />
          <path d="M6 12v8h12v-8" />
          <path d="M9 16h2" />
          <path d="M14 12v8" />
        </svg>
      );
    case "🌱":
      return (
        <svg {...props}>
          <path d="M12 21v-7" />
          <path d="M12 14c0-4-3-6-7-6 0 4 2 7 6 7" />
          <path d="M12 10c0-3 2.5-5 6-5 0 3.5-1.5 6-5 6" />
        </svg>
      );
    case "🏗️":
      return (
        <svg {...props}>
          <path d="M5 21h14" />
          <path d="M8 21V8h4" />
          <path d="M12 5h7" />
          <path d="M15 5v10" />
          <path d="M12 9h6" />
          <path d="m13 15-3 2v4" />
        </svg>
      );
    case "🏨":
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 7h6" />
          <path d="M12 5v6" />
          <path d="M9 14h1" />
          <path d="M14 14h1" />
          <path d="M11 21v-4h2v4" />
        </svg>
      );
    case "📦":
      return (
        <svg {...props}>
          <path d="m12 3 7 4-7 4-7-4 7-4Z" />
          <path d="m5 7 7 4 7-4" />
          <path d="M5 7v8l7 4 7-4V7" />
          <path d="M12 11v8" />
        </svg>
      );
    case "✈️":
      return (
        <svg {...props}>
          <path d="m3 13 18-6-5 6 5 4-7-1-4 3v-5l-7-1Z" />
        </svg>
      );
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
    case "🔒":
      return (
        <svg {...props}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 1 1 8 0v3" />
          <path d="M12 15v2" />
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
    case "🌍":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
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

type GayrimenkulPageProps = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: GayrimenkulPageCopy;
};

export default function GayrimenkulPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Services",
  copy,
}: GayrimenkulPageProps) {
  const revealRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const isRtl = dir === "rtl";
  const breadcrumbArrow = isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7";

  return (
    <main ref={revealRef} className="overflow-hidden" dir={dir}>
      <section className="relative flex min-h-[520px] items-end bg-[#0a192f] pb-0 pt-28">
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
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%,rgba(138,28,28,0.25) 0%,transparent 70%)",
          }}
        />

        <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block" aria-hidden="true">
          <div className="relative h-full w-full">
            <Image
              src="/hero/15.jpg"
              alt={copy.hero.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #0a192f 0%, transparent 40%)" }}
            />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link
              href={`/${lang}/services`}
              className="flex items-center gap-1.5 transition hover:text-white"
            >
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
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              {copy.hero.summary}
            </p>
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

      <section className="bg-[#8a1c1c] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {copy.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center"
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `all 0.5s ease ${index * 0.1}s`,
                }}
              >
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm font-semibold text-red-100">{stat.label}</div>
                <div className="mt-0.5 text-xs text-red-200/70">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
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
              {copy.intro.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`leading-relaxed text-gray-600 ${index === 0 ? "mt-6" : "mt-4"}`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {copy.intro.bullets.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
                      <svg className="h-3 w-3 text-[#8a1c1c]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative"
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.15s" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/hero/gayrimenkul-ikamet-izni.webp"
                  alt={copy.intro.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,25,47,0.6) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <div className="text-lg font-bold text-white">{copy.intro.cardValue}</div>
                    <div className="mt-1 text-sm text-gray-300">{copy.intro.cardLabel}</div>
                  </div>
                </div>
              </div>
              <div
                className={`absolute -top-4 rounded-2xl bg-[#8a1c1c] px-5 py-3 shadow-xl ${isRtl ? "-left-4" : "-right-4"}`}
              >
                <div className="text-xl font-extrabold text-white">{copy.intro.badgeValue}</div>
                <div className="text-xs text-red-200">{copy.intro.badgeLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-16 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.process.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.process.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">{copy.process.description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.process.items.map((step, index) => (
              <div
                key={step.num}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${index * 0.08}s`,
                }}
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
              {copy.requirements.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              {copy.requirements.title}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.requirements.items.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${index * 0.08}s`,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#8a1c1c]/40 hover:bg-white/10"
              >
                <div className="mb-4 h-0.5 w-8 rounded-full bg-[#8a1c1c]" />
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-14 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.propertyTypes.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.propertyTypes.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              {copy.propertyTypes.description}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.propertyTypes.items.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${index * 0.07}s`,
                }}
                className="group flex gap-4 rounded-2xl border border-gray-100 bg-[#f8f9fc] p-6 transition-all duration-300 hover:border-[#8a1c1c]/20 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white text-[#0a192f] shadow-sm transition-colors duration-300 group-hover:bg-[#8a1c1c] group-hover:text-white">
                  <PageIcon icon={item.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#0a192f]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fc] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                {copy.documents.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">
                {copy.documents.title}
              </h2>
              <p className="mt-6 leading-relaxed text-gray-600">{copy.documents.description}</p>
              <div className="mt-8 rounded-2xl border border-[#8a1c1c]/10 bg-[#8a1c1c]/5 p-6">
                <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#8a1c1c]">
                  <PageIcon icon="💡" className="h-4 w-4" />
                  <span>{copy.documents.noticeTitle}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{copy.documents.noticeText}</p>
              </div>
            </div>
            <div className="grid gap-4">
              {copy.documents.items.map((item, index) => (
                <div
                  key={item.num}
                  data-reveal
                  style={{
                    opacity: 0,
                    transform: "translateX(20px)",
                    transition: `all 0.4s ease ${index * 0.06}s`,
                  }}
                  className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-[#8a1c1c]/20 hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#0a192f] text-xs font-black text-white">
                    {item.num}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#0a192f]">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              {copy.benefits.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              {copy.benefits.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">{copy.benefits.description}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.benefits.items.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${index * 0.06}s`,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#e05a5a]/30 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex text-[#e05a5a] transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
                  <PageIcon icon={item.icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-12 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.legal.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.legal.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {copy.legal.items.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `all 0.4s ease ${index * 0.1}s`,
                }}
                className="rounded-2xl border-l-4 border-[#8a1c1c] bg-[#f8f9fc] p-7"
              >
                <h3 className="mb-3 font-bold text-[#0a192f]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-80 overflow-hidden">
        <Image
          src="/hero/gayrimenkul-vatandaslik.webp"
          alt={copy.strip.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,25,47,0.85) 0%, rgba(10,25,47,0.3) 60%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              {copy.strip.eyebrow}
            </p>
            <h3 className="mt-2 max-w-lg text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {copy.strip.title}
            </h3>
            <Link
              href={`/${lang}/contact`}
              className="mt-6 inline-block rounded-full bg-[#8a1c1c] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#a32222]"
            >
              {copy.strip.cta}
            </Link>
          </div>
        </div>
      </section>

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
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.faq.title}
            </h2>
          </div>
          <div className="space-y-3">
            {copy.faq.items.map((faq, index) => (
              <div
                key={faq.q}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `all 0.4s ease ${index * 0.06}s`,
                }}
                className="overflow-hidden rounded-2xl border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
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

      <section className="bg-[#8a1c1c] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{copy.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">{copy.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/${lang}/contact`}
              className="rounded-full bg-white px-10 py-4 text-sm font-bold text-[#8a1c1c] shadow-lg transition hover:bg-gray-100"
            >
              {copy.cta.primaryCta}
            </Link>
            <Link
              href={`/${lang}/questions`}
              className="rounded-full border-2 border-white/40 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {copy.cta.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
