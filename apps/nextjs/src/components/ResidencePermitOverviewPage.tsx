import Image from "next/image";
import Link from "next/link";

import {
  RESIDENCE_PERMIT_SLUGS,
  type ResidencePageCopy,
  getResidencePermitCanonicalPath,
} from "@/lib/residence-permits";

export default function ResidencePermitOverviewPage({
  lang = "tr",
  dir = "ltr",
  homeLabel,
  copy,
}: {
  lang?: string;
  dir?: "ltr" | "rtl";
  homeLabel: string;
  copy: ResidencePageCopy;
}) {
  const permitList = RESIDENCE_PERMIT_SLUGS.map((slug) => ({
    slug,
    ...copy.permits[slug],
  }));

  return (
    <main className="min-h-screen bg-white text-navy" dir={dir}>
      <section className="relative overflow-hidden bg-[#0a192f] px-6 pb-20 pt-32 text-white sm:px-8">
        <div className="absolute inset-0">
          <Image
            src="/hero/yatirimci-ikamet-izni.webp"
            alt={copy.overview.title}
            fill
            className="object-cover object-center opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#07101e]/80" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <nav
            className="mb-8 flex items-center gap-2 text-sm text-gray-300"
            aria-label="Breadcrumb"
          >
            <Link href={`/${lang}`} className="transition hover:text-white">
              {homeLabel}
            </Link>
            <span>/</span>
            <span className="text-white">{copy.overview.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2c17d]">
              {copy.overview.heroTag}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              {copy.overview.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              {copy.overview.summary}
            </p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-gray-200">
              {copy.overview.notice}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-[#8a1c1c] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#a32222]"
              >
                {copy.labels.contact_cta}
              </Link>
              <Link
                href={`/${lang}/questions`}
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {copy.labels.faq_cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8a1c1c] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 sm:px-8 lg:grid-cols-4">
          {copy.overview.quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-3xl border border-white/10 bg-white/10 px-5 py-6 text-center text-white"
            >
              <div className="text-3xl font-extrabold">{fact.value}</div>
              <div className="mt-2 text-sm font-semibold text-red-50">
                {fact.label}
              </div>
              <div className="mt-1 text-xs text-red-100/75">{fact.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a1c1c]">
            {copy.labels.overview.groups_eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
            {copy.labels.overview.groups_title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {copy.overview.mainGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-gray-200 bg-[#E8ECF3] p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#0a192f]">{group.title}</h3>
              <p className="mt-4 leading-8 text-gray-700">{group.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-gray-200 bg-[#f7f1ec] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a1c1c]">
              {copy.labels.overview.short_terms_eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.labels.overview.short_terms_title}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.overview.shortTermTypes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#8a1c1c]/10 bg-white px-5 py-4 text-sm font-medium leading-7 text-gray-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a1c1c]">
            {copy.labels.overview.permits_eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
            {copy.labels.overview.permits_title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {permitList.map((entry) => (
            <article
              key={entry.slug}
              className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a1c1c]">
                {entry.heroTag}
              </div>
              <h3 className="mt-3 text-2xl font-bold text-[#0a192f]">
                {entry.title}
              </h3>
              <p className="mt-4 leading-8 text-gray-700">
                {entry.cardDescription}
              </p>
              <Link
                href={getResidencePermitCanonicalPath(lang, entry.slug)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#8a1c1c] transition hover:text-[#a32222]"
              >
                {copy.labels.overview.permit_detail_cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0a192f] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2c17d]">
              {copy.labels.overview.notes_eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              {copy.labels.overview.notes_title}
            </h2>
            <div className="mt-8 grid gap-4">
              {copy.overview.notes.map((note) => (
                <div
                  key={note}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-gray-200"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">{copy.overview.ctaTitle}</h3>
            <p className="mt-4 leading-8 text-gray-300">
              {copy.overview.ctaDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-[#8a1c1c] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#a32222]"
              >
                {copy.labels.overview.cta_primary}
              </Link>
              <Link
                href={getResidencePermitCanonicalPath(
                  lang,
                  "uzun-donem-ikamet-izni"
                )}
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {copy.labels.overview.cta_secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
