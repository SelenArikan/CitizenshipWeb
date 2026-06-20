import Image from "next/image";
import Link from "next/link";

import type { GreenPassportPageCopy } from "@/lib/green-passport";

const CheckIcon = () => (
  <svg className="h-3 w-3 text-[#8a1c1c]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2.5">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
            <CheckIcon />
          </span>
          <span className="text-sm leading-relaxed text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  );
}

type GreenPassportPageProps = {
  lang: string;
  dir: "ltr" | "rtl";
  homeLabel: string;
  copy: GreenPassportPageCopy;
};

export default function GreenPassportPage({
  lang,
  dir,
  homeLabel,
  copy,
}: GreenPassportPageProps) {
  const isRtl = dir === "rtl";
  const breadcrumbArrow = isRtl ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7";

  return (
    <main className="overflow-hidden" dir={dir}>
      <section className="relative bg-[#0a192f] pb-14 pt-28">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/hero/hukuki-hizmetler.webp"
            alt={copy.metadata.title}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            style={{ opacity: 0.45 }}
          />
        </div>
        <div className="absolute inset-0 bg-[#0a192f]/85" aria-hidden="true" />
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
              "radial-gradient(ellipse 70% 60% at 80% 50%,rgba(138,28,28,0.22) 0%,transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#8a1c1c]/40 bg-[#8a1c1c]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e05a5a]" />
              {copy.hero.tag}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              {copy.hero.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#sartlar"
                className="rounded-full bg-[#8a1c1c] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#a32222] hover:shadow-lg hover:shadow-[#8a1c1c]/30"
              >
                {copy.hero.primaryCta}
              </a>
              <Link
                href={`/${lang}/contact`}
                className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {copy.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {copy.quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-center backdrop-blur-sm"
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
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-gray-100 bg-[#E8ECF3] p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.intro.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">
              {copy.intro.title}
            </h2>
            <div className="mt-6 space-y-4">
              {copy.intro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-[#8a1c1c]/10 bg-[#8a1c1c]/5 p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.program.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0a192f] sm:text-4xl">
              {copy.program.title}
            </h2>
            <div className="mt-6 space-y-4">
              {copy.program.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="sartlar" className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.eligibility.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.eligibility.title}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0a192f]">{copy.eligibility.applicantsTitle}</h3>
              <div className="mt-6">
                <BulletList items={copy.eligibility.applicants} />
              </div>
            </article>

            <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#0a192f]">{copy.eligibility.conditionsTitle}</h3>
              <div className="mt-6">
                <BulletList items={copy.eligibility.conditions} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#0a192f] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              {copy.quota.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              {copy.quota.title}
            </h2>
            <p className="mt-4 leading-relaxed text-gray-300">{copy.quota.intro}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
            <div className="grid grid-cols-[2fr_1fr] border-b border-white/10 bg-white/10 px-6 py-4 text-sm font-bold text-white">
              <div>{copy.quota.rangeHeader}</div>
              <div>{copy.quota.countHeader}</div>
            </div>
            {copy.quota.rows.map((row) => (
              <div
                key={row.range}
                className="grid grid-cols-[2fr_1fr] border-b border-white/10 px-6 py-4 text-sm text-gray-200 last:border-b-0"
              >
                <div>{row.range}</div>
                <div className="font-semibold text-white">{row.count}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-bold text-white">{copy.quota.noteTitle}</h3>
              <p className="mt-4 leading-relaxed text-gray-300">{copy.quota.noteText}</p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-lg font-bold text-white">{copy.quota.excludedTitle}</h3>
              <div className="mt-6">
                <BulletList items={copy.quota.excluded} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.authorities.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.authorities.title}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-gray-100 bg-[#E8ECF3] p-8">
              <h3 className="text-lg font-bold text-[#0a192f]">{copy.authorities.eligibleTitle}</h3>
              <div className="mt-6">
                <BulletList items={copy.authorities.eligible} />
              </div>
            </article>

            <article className="rounded-3xl border border-gray-100 bg-[#E8ECF3] p-8">
              <h3 className="text-lg font-bold text-[#0a192f]">{copy.authorities.ineligibleTitle}</h3>
              <div className="mt-6">
                <BulletList items={copy.authorities.ineligible} />
              </div>
            </article>

            <article className="rounded-3xl border border-gray-100 bg-[#E8ECF3] p-8">
              <h3 className="text-lg font-bold text-[#0a192f]">{copy.authorities.firmsTitle}</h3>
              <div className="mt-6">
                <BulletList items={copy.authorities.firms} />
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-3xl border border-[#8a1c1c]/10 bg-[#8a1c1c]/5 p-8">
            <h3 className="text-lg font-bold text-[#0a192f]">{copy.authorities.familyTitle}</h3>
            <p className="mt-4 leading-relaxed text-gray-700">{copy.authorities.familyNote}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#E8ECF3] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {copy.documents.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0a192f] sm:text-4xl">
              {copy.documents.title}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {copy.documents.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8a1c1c]/10">
                  <CheckIcon />
                </span>
                <span className="text-sm leading-relaxed text-gray-700">{item}</span>
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
              className="rounded-full bg-white px-10 py-4 text-sm font-bold text-[#8a1c1c] transition hover:bg-[#E8ECF3]"
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
