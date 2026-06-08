"use client";

import Link from "next/link";
import { useState } from "react";
import type { GayrimenkulFonPageCopy } from "@/lib/gayrimenkul-fon-page";

const OTHER_PROGRAMS = [
  { label: "Gayrimenkul Yatırımı", slug: "gayrimenkul-yatirimi" },
  { label: "Mevduat Hesabı", slug: "mevduat-hesabi" },
  { label: "İstihdam Oluşturmak", slug: "istihdam-olusturmak" },
  { label: "Devlet Borçlanma Araçları", slug: "devlet-borclanma-araclari" },
];

type Props = { lang?: string; dir?: "ltr" | "rtl"; backLabel?: string; copy: GayrimenkulFonPageCopy };

export default function GayrimenkulFonPage({ lang = "tr", dir = "ltr", backLabel = "Yatırım Türleri", copy }: Props) {
  const [openSec, setOpenSec] = useState<string | null>(null);

  return (
    <main dir={dir} className="bg-white">

      {/* ── BREADCRUMB + BAŞLIK ── */}
      <section className="border-b border-gray-100 bg-white pt-8 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-gray-400" aria-label="Breadcrumb">
            <Link href={`/${lang}`} className="transition hover:text-gray-700">Anasayfa</Link>
            <span>/</span>
            <Link href={`/${lang}/services`} className="transition hover:text-gray-700">{backLabel}</Link>
            <span>/</span>
            <span className="text-gray-700">{copy.hero?.breadcrumbLabel}</span>
          </nav>
          <h1 className="text-3xl font-light tracking-tight text-gray-900 md:text-4xl">
            {copy.hero?.breadcrumbLabel}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">{copy.hero?.summary}</p>
        </div>
      </section>

      {/* ── ANA İÇERİK + SIDEBAR ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

            {/* ── SOL: içerik ── */}
            <div className="min-w-0 flex-1">

              {/* BÖLÜM 1 – GİRİŞ */}
              {copy.bolum1?.intro?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum1.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum1.title}</h2>
                  {copy.bolum1.intro.map((p, i) => (
                    <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">{p}</p>
                  ))}
                </div>
              )}

              {/* TAPU İNCELEME */}
              {copy.bolum1?.tapu?.items?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum1.tapu.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum1.tapu.title}</h2>
                  <ol className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.bolum1.tapu.items.map((item, i) => (
                      <li key={i} className="py-5">
                        <div className="flex gap-5">
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                            {item.num}
                          </span>
                          <div>
                            <p className="mb-2 font-semibold text-gray-900">{item.title}</p>
                            {item.paragraphs.map((p, pi) => <p key={pi} className="mb-2 text-sm leading-relaxed text-gray-500">{p}</p>)}
                            {(item.bullets?.length ?? 0) > 0 && (
                              <ul className="mt-2 divide-y divide-gray-100 border-t border-gray-100">
                                {item.bullets!.map((b, bi) => (
                                  <li key={bi} className="flex gap-3 py-2 text-sm text-gray-600">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />{b}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* ŞERH TÜRLERİ */}
              {copy.bolum1?.sherhler?.items?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum1.sherhler.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum1.sherhler.title}</h2>
                  <ul className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.bolum1.sherhler.items.map((item, i) => (
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

              {/* TAPU TÜRÜ */}
              {copy.bolum1?.tapuTuru && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum1.tapuTuru.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum1.tapuTuru.title}</h2>
                  {copy.bolum1.tapuTuru.paragraphs.map((p, i) => <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">{p}</p>)}
                  {copy.bolum1.tapuTuru.arsaBullets?.length > 0 && (
                    <>
                      <p className="mt-4 mb-3 text-sm font-semibold text-gray-900">{copy.bolum1.tapuTuru.arsaTitle}</p>
                      <ul className="divide-y divide-gray-100 border-y border-gray-100">
                        {copy.bolum1.tapuTuru.arsaBullets.map((b, i) => (
                          <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />{b}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}

              {/* NOTER SÖZLEŞMESİ */}
              {copy.bolum1?.noter && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum1.noter.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum1.noter.title}</h2>
                  {copy.bolum1.noter.paragraphs.map((p, i) => <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">{p}</p>)}
                </div>
              )}

              {/* EKSPERTİZ */}
              {copy.bolum1?.ekspertiz && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum1.ekspertiz.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum1.ekspertiz.title}</h2>
                  {copy.bolum1.ekspertiz.paragraphs.map((p, i) => <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">{p}</p>)}
                  {copy.bolum1.ekspertiz.formula && (
                    <div className="mt-6 border border-gray-200 bg-gray-50 p-5">
                      <p className="mb-2 text-sm font-semibold text-gray-900">{copy.bolum1.ekspertiz.formula.title}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{copy.bolum1.ekspertiz.formula.desc}</p>
                    </div>
                  )}
                </div>
              )}

              {/* BÖLÜM 2 – DAB */}
              {copy.bolum2?.items?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum2.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum2.title}</h2>
                  <ol className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.bolum2.items.map((item, i) => (
                      <li key={i} className="py-5">
                        <div className="flex gap-5">
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                            {item.num}
                          </span>
                          <div className="flex-1">
                            <p className="mb-2 font-semibold text-gray-900">{item.title}</p>
                            {item.paragraphs.map((p, pi) => <p key={pi} className="mb-2 text-sm leading-relaxed text-gray-500">{p}</p>)}
                            {(item.steps?.length ?? 0) > 0 && (
                              <ol className="mt-3 divide-y divide-gray-100 border-t border-gray-100">
                                {item.steps!.map((s, si) => (
                                  <li key={si} className="flex gap-3 py-2">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">{si + 1}</span>
                                    <span className="text-sm text-gray-600">{s}</span>
                                  </li>
                                ))}
                              </ol>
                            )}
                            {(item.bullets?.length ?? 0) > 0 && (
                              <ul className="mt-3 divide-y divide-gray-100 border-t border-gray-100">
                                {item.bullets!.map((b, bi) => (
                                  <li key={bi} className="flex gap-3 py-2 text-sm text-gray-600">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />{b}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {item.subItems?.map((sub, si) => (
                              <div key={si} className="mt-4 border-l-2 border-red-700 pl-4">
                                <p className="mb-2 text-sm font-semibold text-gray-900">{sub.title}</p>
                                <ul className="space-y-1">
                                  {sub.bullets.map((b, bi) => (
                                    <li key={bi} className="flex gap-3 text-sm text-gray-600">
                                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />{b}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* BÖLÜM 3 – TAPU RANDEVU (accordion) */}
              {copy.bolum3?.items?.length > 0 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum3.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum3.title}</h2>
                  <div className="divide-y divide-gray-100 border-y border-gray-100">
                    {copy.bolum3.items.map((item, i) => {
                      const isOpen = openSec === item.num;
                      return (
                        <details key={i} className="group py-4" open={isOpen} onToggle={e => setOpenSec((e.target as HTMLDetailsElement).open ? item.num : null)}>
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
                            <span className="flex items-center gap-3">
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">{item.num}</span>
                              {item.title}
                            </span>
                            <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition group-open:border-red-700 group-open:text-red-700">
                              <svg className="h-3 w-3 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </span>
                          </summary>
                          <div className="mt-4 ml-10">
                            {item.paragraphs.map((p, pi) => <p key={pi} className="mb-3 text-sm leading-relaxed text-gray-500">{p}</p>)}
                            {(item.bullets?.length ?? 0) > 0 && (
                              <ul className="mt-2 divide-y divide-gray-100 border-t border-gray-100">
                                {item.bullets!.map((b, bi) => (
                                  <li key={bi} className="flex gap-3 py-2 text-sm text-gray-600">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />{b}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {(item.steps?.length ?? 0) > 0 && (
                              <ol className="mt-3 divide-y divide-gray-100 border-t border-gray-100">
                                {item.steps!.map((s, si) => (
                                  <li key={si} className="flex gap-3 py-2">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">{si + 1}</span>
                                    <span className="text-sm text-gray-600">{s}</span>
                                  </li>
                                ))}
                              </ol>
                            )}
                          </div>
                        </details>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* BÖLÜM 4 – UYGUNLUK BELGESİ */}
              {copy.bolum4 && (
                <div className="mb-12">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum4.eyebrow}</p>
                  <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">{copy.bolum4.title}</h2>
                  {copy.bolum4.intro && <p className="mb-6 text-sm leading-relaxed text-gray-600">{copy.bolum4.intro}</p>}

                  {/* Denetim kapsamı */}
                  {copy.bolum4.denetim && (
                    <div className="mb-8">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum4.denetim.eyebrow}</p>
                      <p className="mb-4 font-semibold text-gray-900">{copy.bolum4.denetim.title}</p>
                      <ul className="divide-y divide-gray-100 border-y border-gray-100">
                        {copy.bolum4.denetim.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3 py-3 text-sm text-gray-700">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 3 adımlı süreç */}
                  {copy.bolum4.process?.steps?.length > 0 && (
                    <div className="mb-8">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">{copy.bolum4.process.eyebrow}</p>
                      <p className="mb-6 font-semibold text-gray-900">{copy.bolum4.process.title}</p>
                      <ol className="divide-y divide-gray-100 border-y border-gray-100">
                        {copy.bolum4.process.steps.map((step, i) => (
                          <li key={i} className="flex gap-5 py-5">
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">{i + 1}</span>
                            <div>
                              <p className="mb-1 font-semibold text-gray-900">{step.title}</p>
                              <p className="text-sm leading-relaxed text-gray-500">{step.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Süre + Sonrası */}
                  <div className="space-y-4">
                    {copy.bolum4.sure && (
                      <div className="border border-gray-100 bg-gray-50 p-5">
                        <p className="mb-1 font-semibold text-gray-900">{copy.bolum4.sure.title}</p>
                        <p className="text-sm leading-relaxed text-gray-600">{copy.bolum4.sure.desc}</p>
                      </div>
                    )}
                    {copy.bolum4.sonrasi && (
                      <div className="border border-gray-100 bg-gray-50 p-5">
                        <p className="mb-1 font-semibold text-gray-900">{copy.bolum4.sonrasi.title}</p>
                        <p className="text-sm leading-relaxed text-gray-600">{copy.bolum4.sonrasi.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* CTA */}
              {copy.cta && (
                <div className="border-t border-gray-100 pt-10">
                  <p className="mb-4 text-sm leading-relaxed text-gray-500">{copy.cta.description}</p>
                  <Link href={`/${lang}/contact`} className="inline-block border border-gray-900 bg-gray-900 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-gray-800">
                    {copy.cta.primaryCta}
                  </Link>
                </div>
              )}
            </div>

            {/* ── SAĞ: sticky sidebar ── */}
            <aside className="w-full shrink-0 lg:w-64">
              <div className="sticky top-8 space-y-8">
                <div className="border border-gray-100 bg-gray-50 p-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">Danışmanlık</p>
                  <p className="mb-4 text-sm font-semibold text-gray-900">Uzman görüşü alın</p>
                  <p className="mb-5 text-xs leading-relaxed text-gray-500">Tapu ve DAB süreçleri için hukuki destek alın.</p>
                  <Link href={`/${lang}/contact`} className="block border border-gray-900 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-gray-900 transition hover:bg-gray-900 hover:text-white">
                    {copy.cta?.primaryCta ?? "Ücretsiz Danışın"}
                  </Link>
                </div>
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Diğer Programlar</p>
                  <ul className="divide-y divide-gray-100 border-y border-gray-100">
                    {OTHER_PROGRAMS.map((p) => (
                      <li key={p.slug}>
                        <Link href={`/${lang}/services/${p.slug}`} className="group flex items-center justify-between py-3 text-sm text-gray-700 transition hover:text-red-700">
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
