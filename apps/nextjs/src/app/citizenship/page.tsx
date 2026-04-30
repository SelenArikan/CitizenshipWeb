import Link from "next/link";

import { getCitizenshipPageCopy } from "@/lib/public-pages";

export default function CitizenshipBenefits({ lang = "tr" }: { lang?: string }) {
  const copy = getCitizenshipPageCopy(lang);

  const contactHref = `/${lang}/contact`;
  const servicesHref = `/${lang}/services`;

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white">
      <div className="w-full bg-navy px-4 py-24 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">{copy.title}</h1>
        <p className="mx-auto max-w-3xl text-xl font-light text-gray-300">{copy.summary}</p>
      </div>

      <section className="w-full max-w-7xl px-8 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {copy.benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className={`rounded-3xl border border-gray-100 bg-[#f4f6f8] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                idx % 2 === 0 ? "md:mr-4" : "md:ml-4"
              }`}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-burgundy shadow-sm">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-navy">{benefit.title}</h2>
              <p className="leading-relaxed text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex w-full flex-col items-center overflow-hidden bg-navy px-4 py-24 text-center">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-burgundy opacity-20 blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-white">{copy.ctaTitle}</h2>
          <p className="mb-8 text-lg text-gray-300">{copy.ctaDesc}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={servicesHref} className="rounded-full bg-burgundy px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-burgundy-light">
              {copy.servicesLabel}
            </Link>
            <Link href={contactHref} className="rounded-full border border-white/20 px-10 py-4 text-lg font-bold text-white transition hover:bg-white/10">
              {copy.contactLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
