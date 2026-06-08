"use client";

import Link from "next/link";
import { useState } from "react";
import type { GayrimenkulPageCopy } from "@/lib/gayrimenkul-page";

type GayrimenkulPageProps = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: GayrimenkulPageCopy;
};

const OTHER_PROGRAMS = [
  { label: "Mevduat Hesabı", slug: "mevduat-hesabi" },
  { label: "Gayrimenkul Yatırım Fonu", slug: "gayrimenkul-yatirim-fonu" },
  { label: "İstihdam Oluşturmak", slug: "istihdam-olusturmak" },
  { label: "Devlet Borçlanma Araçları", slug: "devlet-borclanma-araclari" },
];

export default function GayrimenkulPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Yatırım Türleri",
  copy,
}: GayrimenkulPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const isRtl = dir === "rtl";

  return (
    <main dir={dir} className="bg-white">

      {/* ── BREADCRUMB + BAŞLIK ── */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white pt-8 pb-12">
        {/* Arka plan resmi */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gayrimenkul-hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ opacity: 0.25 }}
        />
        {/* İçerik */}
        <div className="relative mx-auto max-w-6xl px-6">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href={`/${lang}`} className="transition hover:text-gray-700">Anasayfa</Link>
            <span>/</span>
            <Link href={`/${lang}/services`} className="transition hover:text-gray-700">{backLabel}</Link>
            <span>/</span>
            <span className="text-gray-700">{copy.hero.breadcrumbLabel}</span>
          </nav>

          {/* Başlık */}
          <h1 className="text-3xl font-light tracking-tight text-gray-900 md:text-4xl">
            {copy.hero.breadcrumbLabel}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
            {copy.hero.summary}
          </p>


        </div>
      </section>


      {/* ── ANA İÇERİK + SIDEBAR ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

            {/* ── SOL: içerik ── */}
            <div className="min-w-0 flex-1">

              {/* Giriş paragrafları */}
              <div className="prose prose-sm max-w-none text-gray-600">
                {copy.intro.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 leading-8 text-gray-600">{p}</p>
                ))}
              </div>

              {/* ── Yatırım Seçenekleri ── */}
              <div className="mt-14">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  {copy.requirements.eyebrow}
                </p>
                <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                  {copy.requirements.title}
                </h2>
                <ol className="divide-y divide-gray-100 border-y border-gray-100">
                  {copy.requirements.items.map((item, i) => (
                    <li key={i} className="py-5">
                      <div className="flex gap-5">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-xs font-bold text-gray-400">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── Süreç ── */}
              <div className="mt-14">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  {copy.process.eyebrow}
                </p>
                <h2 className="mb-2 text-2xl font-light tracking-tight text-gray-900">
                  {copy.process.title}
                </h2>
                {copy.process.description && (
                  <p className="mb-6 text-sm leading-relaxed text-gray-500">{copy.process.description}</p>
                )}
                <ol className="divide-y divide-gray-100 border-y border-gray-100">
                  {copy.process.items.map((step, i) => (
                    <li key={i} className="py-5">
                      <div className="flex gap-5">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                          {step.num ?? i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">{step.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-gray-500">{step.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── Avantajlar ── */}
              <div className="mt-14">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  {copy.benefits.eyebrow}
                </p>
                <h2 className="mb-2 text-2xl font-light tracking-tight text-gray-900">
                  {copy.benefits.title}
                </h2>
                {copy.benefits.description && (
                  <p className="mb-6 text-sm leading-relaxed text-gray-500">{copy.benefits.description}</p>
                )}
                <ul className="divide-y divide-gray-100 border-y border-gray-100">
                  {copy.benefits.items.map((item, i) => (
                    <li key={i} className="flex gap-4 py-4">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Tapu / Mülk Türleri ── */}
              {copy.propertyTypes?.items?.length > 0 && (
                <div className="mt-14">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.propertyTypes.eyebrow}
                  </p>
                  <h2 className="mb-2 text-2xl font-light tracking-tight text-gray-900">
                    {copy.propertyTypes.title}
                  </h2>
                  {copy.propertyTypes.description && (
                    <p className="mb-6 text-sm leading-relaxed text-gray-500">{copy.propertyTypes.description}</p>
                  )}
                  <ul className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.propertyTypes.items.map((item, i) => (
                      <li key={i} className="flex gap-4 py-4">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ── Belgeler ── */}
              {copy.documents?.items?.length > 0 && (
                <div className="mt-14">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.documents.eyebrow}
                  </p>
                  <h2 className="mb-2 text-2xl font-light tracking-tight text-gray-900">
                    {copy.documents.title}
                  </h2>
                  {copy.documents.description && (
                    <p className="mb-6 text-sm leading-relaxed text-gray-500">{copy.documents.description}</p>
                  )}
                  <ol className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.documents.items.map((item, i) => (
                      <li key={i} className="flex gap-5 py-4">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-xs font-bold text-gray-400">
                          {item.num ?? i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  {copy.documents.noticeTitle && (
                    <div className="mt-6 border-l-2 border-red-700 pl-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-red-700">{copy.documents.noticeTitle}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{copy.documents.noticeText}</p>
                    </div>
                  )}
                </div>
              )}

              {/* ── Hukuki Çerçeve ── */}
              {copy.legal?.items?.length > 0 && (
                <div className="mt-14">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.legal.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.legal.title}
                  </h2>
                  <ul className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.legal.items.map((item, i) => (
                      <li key={i} className="py-5">
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ── SSS ── */}
              {copy.faq?.items?.length > 0 && (
                <div className="mt-14">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.faq.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.faq.title}
                  </h2>
                  <div className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.faq.items.map((faq, i) => (
                      <details
                        key={i}
                        className="group"
                        open={openFaq === i}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenFaq(openFaq === i ? null : i);
                        }}
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-sm font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                          {faq.q}
                          <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition group-open:border-red-700 group-open:text-red-700">
                            <svg className="h-3 w-3 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </span>
                        </summary>
                        {openFaq === i && (
                          <p className="pb-5 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                        )}
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* ── İletişim notu ── */}
              <div className="mt-14 border-t border-gray-100 pt-10 text-sm leading-relaxed text-gray-500">
                <p>
                  {copy.cta.description}{" "}
                  <Link href={`/${lang}/contact`} className="border-b border-gray-400 pb-px font-semibold text-gray-800 transition hover:border-red-700 hover:text-red-700">
                    {copy.cta.primaryCta}
                  </Link>
                </p>
              </div>
            </div>

            {/* ── SAĞ: sticky sidebar ── */}
            <aside className="w-full lg:w-64 lg:shrink-0">
              <div className="lg:sticky lg:top-28">

                {/* Diğer Yatırım Seçenekleri */}
                <div className="border border-gray-100">
                  <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                      Diğer Seçenekler
                    </p>
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {OTHER_PROGRAMS.map((prog) => (
                      <li key={prog.slug}>
                        <Link
                          href={`/${lang}/services/${prog.slug}`}
                          className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-red-700"
                        >
                          {prog.label}
                          <svg className="h-3.5 w-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* İletişim kutusu */}
                <div className="mt-5 border border-gray-100 p-5">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                    Danışmanlık
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-gray-600">
                    {copy.cta.title}
                  </p>
                  <Link
                    href={`/${lang}/contact`}
                    className="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    {copy.cta.primaryCta}
                  </Link>
                  <Link
                    href={`/${lang}/questions`}
                    className="mt-2 block border border-gray-200 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-gray-600 transition hover:border-gray-400"
                  >
                    {copy.cta.secondaryCta}
                  </Link>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

    </main>
  );
}
