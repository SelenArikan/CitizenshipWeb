"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { EhliyetPageCopy } from "@/lib/ehliyet-tebdil";

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
            (entry.target as HTMLElement).style.transform = "none";
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

const CheckIcon = () => (
  <svg className="h-3 w-3 text-[#8a1c1c]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

type EhliyetPageProps = {
  lang?: string;
  dir?: "ltr" | "rtl";
  homeLabel?: string;
  copy: EhliyetPageCopy;
};

export default function EhliyetPage({
  lang = "tr",
  dir = "ltr",
  homeLabel = "Home",
  copy,
}: EhliyetPageProps) {
  const revealRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCountry, setOpenCountry] = useState<number | null>(null);
  const isRtl = dir === "rtl";
  const breadcrumbArrow = isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7";

  return (
    <main ref={revealRef} className="overflow-hidden" dir={dir}>
      <section className="relative flex flex-col bg-[#0a192f] pb-0 pt-28">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/hero/hukuki-hizmetler.jpg"
            alt={copy.hero.imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            style={{ opacity: 0.6 }}
          />
        </div>
        <div className="absolute inset-0 bg-[#0a192f]/80" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.04,
          }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%,rgba(138,28,28,0.20) 0%,transparent 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400" aria-label="Breadcrumb">
            <Link href={`/${lang}`} className="flex items-center gap-1.5 transition hover:text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={breadcrumbArrow} />
              </svg>
              {homeLabel}
            </Link>
            <span>/</span>
            <span className="text-white">{copy.metadata.breadcrumbLabel}</span>
          </nav>

          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8a1c1c]/40 bg-[#8a1c1c]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e05a5a]" />
              {copy.hero.tag}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {copy.hero.title}
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

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {copy.quickFacts.map((fact, index) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `all 0.5s ease ${index * 0.1}s`,
                }}
              >
                <div className="text-3xl font-extrabold text-white">{fact.value}</div>
                <div className="mt-1 text-sm font-semibold text-[#e05a5a]">{fact.label}</div>
                <div className="mt-0.5 text-xs text-gray-400">{fact.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                {copy.overview.eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">
                {copy.overview.title}
              </h2>
              <p className="mt-6 leading-relaxed text-gray-600">{copy.hero.warning}</p>
              <div className="mt-8 grid grid-cols-1 gap-3">
                {copy.overview.bullets.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
                      <CheckIcon />
                    </span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="grid gap-5"
              data-reveal
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s ease 0.15s" }}
            >
              {copy.overview.spotlights.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-[#E8ECF3] p-6 transition-all duration-300 hover:border-[#8a1c1c]/20 hover:shadow-md"
                >
                  <h3 className="font-bold text-[#0a192f]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </article>
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
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.025,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-14 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              {copy.legal.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              {copy.legal.title}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {copy.legal.items.map((item, index) => (
              <div
                key={index}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${index * 0.08}s`,
                }}
                className="rounded-2xl border-l-4 border-[#8a1c1c] bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
              >
                <div className="mb-4 h-0.5 w-8 rounded-full bg-[#8a1c1c]" />
                <p className="text-sm leading-relaxed text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="mb-16 text-center"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.eligibility.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.eligibility.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">{copy.eligibility.description}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {copy.eligibility.items.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${index * 0.08}s`,
                }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#8a1c1c]/20 hover:shadow-md"
              >
                <div className="absolute top-6 right-6 select-none text-4xl font-black text-gray-100 transition-colors group-hover:text-[#8a1c1c]/10">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-xl font-bold text-[#0a192f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
                <div className="mt-5 rounded-xl border border-gray-100 bg-[#E8ECF3] px-4 py-3 text-sm font-semibold text-[#0a192f]">
                  {item.outcome}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.countries.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.countries.title}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-500">{copy.countries.description}</p>
          </div>

          <div className="mt-12 space-y-4">
            {copy.countries.groups.map((group, index) => (
              <div
                key={group.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `all 0.4s ease ${index * 0.07}s`,
                }}
                className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
              >
                <button
                  onClick={() => setOpenCountry(openCountry === index ? null : index)}
                  className="flex w-full items-center justify-between bg-[#E8ECF3] p-6 text-left transition-colors duration-200 hover:bg-white"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 rounded-xl bg-[#0a192f] px-3 py-1.5 text-xs font-black text-white">
                      {group.countries.length} {copy.countries.countLabel}
                    </span>
                    <span className="font-bold text-[#0a192f]">{group.title}</span>
                  </div>
                  <span className="flex-shrink-0 text-[#8a1c1c]">
                    <ChevronIcon open={openCountry === index} />
                  </span>
                </button>
                {openCountry === index && (
                  <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-4">
                    <p className="mb-5 text-sm leading-relaxed text-gray-500">{group.description}</p>
                    <div className={`grid gap-2 ${group.countries.length > 30 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                      {group.countries.map((country) => (
                        <div
                          key={country}
                          className="flex items-center gap-2 rounded-xl border border-gray-100 bg-[#E8ECF3] px-4 py-2.5 text-sm text-gray-700 transition-colors hover:border-[#8a1c1c]/20"
                        >
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8a1c1c]" />
                          {country}
                        </div>
                      ))}
                    </div>
                    {group.note && (
                      <div className="mt-5 rounded-xl border border-[#8a1c1c]/20 bg-[#8a1c1c]/5 px-5 py-4 text-sm leading-relaxed text-[#0a192f]">
                        {group.note}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl border border-[#8a1c1c]/10 bg-[#8a1c1c]/5 px-6 py-5 text-sm leading-relaxed text-gray-700"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            {copy.countries.disclaimer}
          </div>
        </div>
      </section>

      <section className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.requirements.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.requirements.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.requirements.items.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${(index % 3) * 0.08}s`,
                }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#8a1c1c]/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a192f] text-sm font-black text-white transition-colors duration-300 group-hover:bg-[#8a1c1c]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-bold text-[#0a192f]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              data-reveal
              style={{ opacity: 0, transform: "translateX(-20px)", transition: "all 0.6s ease" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                {copy.process.eyebrow}
              </span>
              <div className="mt-8 space-y-6">
                {copy.process.steps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#0a192f] text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a192f]">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="rounded-2xl bg-[#0a192f] p-8 text-white shadow-xl"
                data-reveal
                style={{ opacity: 0, transform: "translateX(20px)", transition: "all 0.6s ease" }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
                  {copy.process.channelsEyebrow}
                </span>
                <div className="mt-6 space-y-4">
                  {copy.process.channels.map((channel) => (
                    <div
                      key={channel.title}
                      className="rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10"
                    >
                      <h3 className="font-bold text-white">{channel.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-300">
                        {channel.description}
                      </p>
                      {channel.href && channel.cta && (
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#e05a5a] transition-colors hover:text-white"
                        >
                          {channel.cta}
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={isRtl ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                data-reveal
                style={{ opacity: 0, transform: "translateX(20px)", transition: "all 0.6s ease 0.1s" }}
              >
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#8a1c1c]/10">
                    <svg className="h-5 w-5 text-[#8a1c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a192f]">{copy.process.appointmentTitle}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {copy.process.appointmentNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.postApplication.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.postApplication.title}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {copy.postApplication.items.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${index * 0.08}s`,
                }}
                className="rounded-2xl border-l-4 border-[#8a1c1c] bg-[#E8ECF3] p-7 transition-all duration-300 hover:shadow-md"
              >
                <h3 className="font-bold text-[#0a192f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </article>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl border border-gray-100 bg-[#E8ECF3] p-8 shadow-sm"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.postApplication.feesTitle}
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {copy.postApplication.feeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-[#8a1c1c]/20 hover:shadow-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed text-gray-700">{item}</span>
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
            className="max-w-4xl"
            data-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.5s ease" }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              {copy.issues.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              {copy.issues.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.issues.items.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.5s ease ${(index % 3) * 0.08}s`,
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#e05a5a]/30 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e05a5a]/30 bg-[#e05a5a]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {copy.issues.riskBadge}
                </div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </article>
            ))}
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

      <section className="bg-[#8a1c1c] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{copy.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-red-100">{copy.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/${lang}/contact`}
              className="rounded-full bg-white px-10 py-4 text-sm font-bold text-[#8a1c1c] transition hover:bg-[#E8ECF3] hover:shadow-lg"
            >
              {copy.cta.primaryCta}
            </Link>
            <Link
              href={`/${lang}/services`}
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
