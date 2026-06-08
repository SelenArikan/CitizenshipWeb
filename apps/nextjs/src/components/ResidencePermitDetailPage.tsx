import Image from "next/image";
import Link from "next/link";

import {
  RESIDENCE_PERMIT_SLUGS,
  type ResidencePageCopy,
  type ResidencePermitSlug,
  getResidencePermitCanonicalPath,
  getResidencePermitEntry,
} from "@/lib/residence-permits";

export default function ResidencePermitDetailPage({
  lang = "tr",
  dir = "ltr",
  homeLabel,
  copy,
  slug,
}: {
  lang?: string;
  dir?: "ltr" | "rtl";
  homeLabel: string;
  copy: ResidencePageCopy;
  slug: ResidencePermitSlug;
}) {
  const entry = getResidencePermitEntry(copy, slug);

  if (!entry) {
    return null;
  }

  const relatedPages = RESIDENCE_PERMIT_SLUGS.filter((itemSlug) => itemSlug !== slug).map(
    (itemSlug) => ({
      slug: itemSlug,
      ...copy.permits[itemSlug],
    })
  );

  return (
    <main className="min-h-screen bg-white text-navy" dir={dir}>
      <section className="relative overflow-hidden bg-[#0a192f] px-6 pb-20 pt-32 text-white sm:px-8">
        <div className="absolute inset-0">
          <Image
            src={entry.heroImage}
            alt={entry.title}
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
            <Link
              href={getResidencePermitCanonicalPath(lang)}
              className="transition hover:text-white"
            >
              {copy.overview.title}
            </Link>
            <span>/</span>
            <span className="text-white">{entry.title}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2c17d]">
              {entry.heroTag}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              {entry.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              {entry.summary}
            </p>
            {entry.warning ? (
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-gray-200">
                {entry.warning}
              </div>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${lang}/contact`}
                className="rounded-full bg-[#8a1c1c] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#a32222]"
              >
                {copy.labels.contact_cta}
              </Link>
              <Link
                href={getResidencePermitCanonicalPath(lang)}
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {copy.labels.detail.all_types_cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8a1c1c] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 sm:px-8 lg:grid-cols-4">
          {entry.quickFacts.map((fact) => (
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

      {entry.sections.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 0 ? "bg-white py-20" : "bg-[#f7f1ec] py-20"}
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a1c1c]">
                {copy.labels.detail.section_label} {index + 1}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
                {section.title}
              </h2>
              {section.intro ? (
                <p className="mt-5 text-lg leading-8 text-gray-700">
                  {section.intro}
                </p>
              ) : null}
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {section.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-[#0a192f]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-gray-700">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-y border-gray-200 bg-[#E8ECF3] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a1c1c]">
              {copy.labels.detail.process_eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {entry.processTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-5">
            {entry.process.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-4 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[96px_1fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8a1c1c] text-2xl font-extrabold text-white">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0a192f]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-8 text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8a1c1c]">
            {copy.labels.detail.faq_eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
            {copy.labels.detail.faq_title}
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {entry.faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-bold text-[#0a192f]">
                {faq.q}
              </summary>
              <p className="mt-4 leading-8 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#0a192f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2c17d]">
                {copy.labels.detail.related_eyebrow}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                {copy.labels.detail.related_title}
              </h2>
            </div>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex rounded-full bg-[#8a1c1c] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#a32222]"
            >
              {copy.labels.detail.expert_cta}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedPages.map((item) => (
              <article
                key={item.slug}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2c17d]">
                  {item.heroTag}
                </div>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-8 text-gray-300">
                  {item.cardDescription}
                </p>
                <Link
                  href={getResidencePermitCanonicalPath(lang, item.slug)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f2c17d] transition hover:text-white"
                >
                  {copy.labels.detail.related_cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
