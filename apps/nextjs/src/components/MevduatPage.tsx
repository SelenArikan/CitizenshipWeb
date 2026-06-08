"use client";

import Link from "next/link";
import { useState } from "react";
import type { MevduatPageCopy } from "@/lib/mevduat-page";

const OTHER_PROGRAMS = [
  { label: "Gayrimenkul Yatırımı", slug: "gayrimenkul-yatirimi" },
  { label: "Gayrimenkul Yatırım Fonu", slug: "gayrimenkul-yatirim-fonu" },
  { label: "İstihdam Oluşturmak", slug: "istihdam-olusturmak" },
  { label: "Devlet Borçlanma Araçları", slug: "devlet-borclanma-araclari" },
];

type MevduatPageProps = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: MevduatPageCopy;
};

export default function MevduatPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Yatırım Türleri",
  copy,
}: MevduatPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main dir={dir} className="bg-white">

      {/* ── BREADCRUMB + BAŞLIK ── */}
      <section className="border-b border-gray-100 bg-white pt-8 pb-12">
        <div className="mx-auto max-w-6xl px-6">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href={`/${lang}`} className="transition hover:text-gray-700">Anasayfa</Link>
            <span>/</span>
            <Link href={`/${lang}/services`} className="transition hover:text-gray-700">{backLabel}</Link>
            <span>/</span>
            <span className="text-gray-700">{copy.hero?.breadcrumbLabel}</span>
          </nav>

          {/* Başlık */}
          <h1 className="text-3xl font-light tracking-tight text-gray-900 md:text-4xl">
            {copy.hero?.breadcrumbLabel}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
            {copy.hero?.summary}
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
              {copy.intro?.paragraphs?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.intro.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.intro.title}
                  </h2>
                  {copy.intro.paragraphs.map((para, i) => (
                    <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Genel Bakış */}
              {copy.overview && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.overview.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.overview.title}
                  </h2>
                  {copy.overview.paragraphs?.map((para, i) => (
                    <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">
                      {para}
                    </p>
                  ))}
                  {copy.overview.bullets?.length > 0 && (
                    <ul className="mt-6 divide-y divide-gray-100 border-y border-gray-100">
                      {copy.overview.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Adım Adım Süreç */}
              {copy.process?.items?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.process.eyebrow}
                  </p>
                  <h2 className="mb-2 text-2xl font-light tracking-tight text-gray-900">
                    {copy.process.title}
                  </h2>
                  {copy.process.description && (
                    <p className="mb-6 text-sm leading-relaxed text-gray-500">
                      {copy.process.description}
                    </p>
                  )}
                  <ol className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.process.items.map((step, i) => (
                      <li key={i} className="py-5">
                        <div className="flex gap-5">
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                            {step.num ?? i + 1}
                          </span>
                          <div>
                            <p className="mb-1 font-semibold text-gray-900">{step.title}</p>
                            <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Kritik Riskler */}
              {copy.risks?.items?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.risks.eyebrow}
                  </p>
                  <h2 className="mb-2 text-2xl font-light tracking-tight text-gray-900">
                    {copy.risks.title}
                  </h2>
                  {copy.risks.description && (
                    <p className="mb-6 text-sm leading-relaxed text-gray-500">
                      {copy.risks.description}
                    </p>
                  )}
                  <ul className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.risks.items.map((item, i) => (
                      <li key={i} className="flex gap-4 py-4">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* BES Yöntemi */}
              {copy.bes && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.bes.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.bes.title}
                  </h2>
                  {copy.bes.paragraphs?.map((para, i) => (
                    <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">
                      {para}
                    </p>
                  ))}
                  {copy.bes.restrictions?.length > 0 && (
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-semibold text-gray-900">{copy.bes.restrictionsTitle}</p>
                      <ul className="divide-y divide-gray-100 border-y border-gray-100">
                        {copy.bes.restrictions.map((item, i) => (
                          <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {copy.bes.officeRole?.length > 0 && (
                    <div className="mt-8">
                      <p className="mb-3 text-sm font-semibold text-gray-900">{copy.bes.officeRoleTitle}</p>
                      <ol className="divide-y divide-gray-100 border-y border-gray-100">
                        {copy.bes.officeRole.map((item, i) => (
                          <li key={i} className="flex gap-4 py-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                              {i + 1}
                            </span>
                            <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}

              {/* Uygunluk Belgesi Sonrası */}
              {copy.postApproval && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.postApproval.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.postApproval.title}
                  </h2>
                  {copy.postApproval.paragraphs?.map((para, i) => (
                    <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">{para}</p>
                  ))}
                  {copy.postApproval.bullets?.length > 0 && (
                    <ul className="mt-4 divide-y divide-gray-100 border-y border-gray-100">
                      {copy.postApproval.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Kimler Başvurabilir */}
              {copy.whoCanApply && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.whoCanApply.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.whoCanApply.title}
                  </h2>

                  <div className="space-y-6">
                    {copy.whoCanApply.conditions?.length > 0 && (
                      <div>
                        <p className="mb-3 text-sm font-semibold text-gray-900">{copy.whoCanApply.conditionsTitle}</p>
                        <ul className="divide-y divide-gray-100 border-y border-gray-100">
                          {copy.whoCanApply.conditions.map((item, i) => (
                            <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {copy.whoCanApply.family?.length > 0 && (
                      <div>
                        <p className="mb-3 text-sm font-semibold text-gray-900">{copy.whoCanApply.familyTitle}</p>
                        <ul className="divide-y divide-gray-100 border-y border-gray-100">
                          {copy.whoCanApply.family.map((item, i) => (
                            <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {copy.whoCanApply.cannot?.length > 0 && (
                      <div>
                        <p className="mb-3 text-sm font-semibold text-gray-900">{copy.whoCanApply.cannotTitle}</p>
                        <ul className="divide-y divide-gray-100 border-y border-gray-100">
                          {copy.whoCanApply.cannot.map((item, i) => (
                            <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {copy.whoCanApply.special?.length > 0 && (
                      <div>
                        <p className="mb-3 text-sm font-semibold text-gray-900">{copy.whoCanApply.specialTitle}</p>
                        <ul className="divide-y divide-gray-100 border-y border-gray-100">
                          {copy.whoCanApply.special.map((item, i) => (
                            <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Hizmet Kapsamı */}
              {copy.serviceScope?.items?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.serviceScope.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.serviceScope.title}
                  </h2>
                  <ul className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.serviceScope.items.map((item, i) => (
                      <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SSS */}
              {copy.faq?.items?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    {copy.faq.eyebrow}
                  </p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                    {copy.faq.title}
                  </h2>
                  <div className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.faq.items.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group py-4"
                        open={openFaq === idx}
                        onToggle={(e) =>
                          setOpenFaq((e.target as HTMLDetailsElement).open ? idx : null)
                        }
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
                          {faq.q}
                          <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition group-open:border-red-700 group-open:text-red-700">
                            <svg className="h-3 w-3 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              {copy.cta && (
                <div className="border-t border-gray-100 pt-10">
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">{copy.cta.description}</p>
                  <Link
                    href={`/${lang}/contact`}
                    className="inline-block border border-gray-900 bg-gray-900 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    {copy.cta.primaryCta}
                  </Link>
                </div>
              )}
            </div>

            {/* ── SAĞ: sticky sidebar ── */}
            <aside className="w-full shrink-0 lg:w-64">
              <div className="sticky top-8 space-y-8">

                {/* İletişim kutusu */}
                <div className="border border-gray-100 bg-gray-50 p-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    Danışmanlık
                  </p>
                  <p className="mb-4 text-sm font-semibold text-gray-900">
                    Uzman görüşü alın
                  </p>
                  <p className="mb-5 text-xs leading-relaxed text-gray-500">
                    Mevduat yöntemiyle vatandaşlık sürecinizi birlikte planlayalım.
                  </p>
                  <Link
                    href={`/${lang}/contact`}
                    className="block border border-gray-900 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-gray-900 transition hover:bg-gray-900 hover:text-white"
                  >
                    {copy.cta?.primaryCta ?? "Ücretsiz Danışın"}
                  </Link>
                </div>

                {/* Diğer programlar */}
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                    Diğer Programlar
                  </p>
                  <ul className="divide-y divide-gray-100 border-y border-gray-100">
                    {OTHER_PROGRAMS.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/${lang}/services/${p.slug}`}
                          className="group flex items-center justify-between py-3 text-sm text-gray-700 transition hover:text-red-700"
                        >
                          {p.label}
                          <svg className="h-3.5 w-3.5 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
