"use client";

import Link from "next/link";
import { useState } from "react";

/* ─────────────────────────────────────────────────────────────────
   TİP TANIMLARI
   ─────────────────────────────────────────────────────────────────
   Her bölüm (Section) kendi "type" alanıyla hangi şablonu
   kullanacağını belirtir. Sadece ilgili alanları doldurmanız yeterli.
───────────────────────────────────────────────────────────────── */

/** Giriş metni: paragraf listesi */
export type IntroSection = {
  type: "intro";
  eyebrow?: string;
  title?: string;
  paragraphs: string[];
};

/**
 * Numaralı liste:  her item { title, desc }
 * Süreç adımları, belgeler, gereksinimler vs. için kullanılır.
 */
export type NumberedSection = {
  type: "numbered";
  eyebrow?: string;
  title?: string;
  description?: string;
  items: Array<{ title: string; desc?: string }>;
  /** Liste sonunda gösterilecek uyarı kutusu (isteğe bağlı) */
  notice?: { title: string; text: string };
};

/** Bullet (noktalı) liste: her item { title, desc } */
export type BulletSection = {
  type: "bullet";
  eyebrow?: string;
  title?: string;
  description?: string;
  items: Array<{ title: string; desc?: string }>;
};

/** Saf metin bullet'ları (başlıksız kısa maddeler) */
export type PlainBulletSection = {
  type: "plain-bullet";
  eyebrow?: string;
  title?: string;
  description?: string;
  items: string[];
};

/** SSS / Accordion */
export type FaqSection = {
  type: "faq";
  eyebrow?: string;
  title?: string;
  items: Array<{ q: string; a: string }>;
};

/** Info kutusu: başlık + açıklama (tek satır bilgi kartı) */
export type InfoBoxSection = {
  type: "info-box";
  eyebrow?: string;
  title: string;
  desc: string;
};

/** Hukuki çerçeve veya başlıklı düz metin listesi */
export type LegalSection = {
  type: "legal";
  eyebrow?: string;
  title?: string;
  items: Array<{ title: string; text: string }>;
};

export type PageSection =
  | IntroSection
  | NumberedSection
  | BulletSection
  | PlainBulletSection
  | FaqSection
  | InfoBoxSection
  | LegalSection;

/* ─────────────────────────────────────────────────────────────────
   ANA PROP YAPISI
───────────────────────────────────────────────────────────────── */

export type OtherProgram = {
  label: string;
  slug: string;
  href?: string;
};

export type ServicePageLayoutProps = {
  /** Dil kodu: tr | en | ru | ar | fa */
  lang?: string;
  dir?: "ltr" | "rtl";
  homeLabel?: string;
  /** Breadcrumb'da gösterilen ebeveyn sayfa adı */
  backLabel?: string;
  /** Breadcrumb ebeveyn linki. Varsayılan: /{lang}/services */
  backHref?: string;
  consultationLabel?: string;
  /** Hero bölümü */
  hero: {
    breadcrumbLabel: string;
    summary?: string;
    /** Arka plan fotoğrafı yolu (public/) */
    backgroundImage?: string;
  };
  /** Sayfa bölümleri — sıralı olarak render edilir */
  sections: PageSection[];
  /** Sidebar'daki CTA kutusu */
  cta: {
    title: string;
    description?: string;
    primaryCta: string;
    secondaryCta?: string;
  };
  /** Sidebar'daki "Diğer Programlar" listesi */
  otherPrograms?: OtherProgram[];
  otherProgramsTitle?: string;
  otherProgramHrefPrefix?: string;
};

/* ─────────────────────────────────────────────────────────────────
   ALT BİLEŞENLER
───────────────────────────────────────────────────────────────── */

/* ── Eyebrow: kırmızı, küçük, uppercase, geniş aralıklı ── */
function SectionEyebrow({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-600">
      {text}
    </p>
  );
}

/* ── Başlık: h2 = çok büyük extrabold siyah | h3 = orta semibold ── */
function SectionTitle({
  text,
  as: Tag = "h2",
}: {
  text?: string;
  as?: "h2" | "h3";
}) {
  if (!text) return null;
  return (
    <Tag
      className={
        Tag === "h2"
          ? "mb-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl"
          : "mb-3 text-xl font-bold text-gray-900"
      }
    >
      {text}
    </Tag>
  );
}

function SectionDesc({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="mb-6 text-sm leading-relaxed text-gray-500">{text}</p>
  );
}

/* Giriş paragrafları */
function IntroBlock({ section }: { section: IntroSection }) {
  /* eyebrow varsa ana başlık (h2), yoksa alt başlık (h3) */
  const headingTag = section.eyebrow ? "h2" : "h3";
  const hasParagraphs = section.paragraphs.some((p) => p.trim().length > 0);
  return (
    <div className={hasParagraphs ? "mb-10" : "mb-4"}>
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} as={headingTag} />
      {section.paragraphs.map((p, i) => (
        <p key={i} className="mb-4 text-[15px] leading-relaxed text-gray-700">
          {p}
        </p>
      ))}
    </div>
  );
}

/* Numaralı liste */
function NumberedBlock({ section }: { section: NumberedSection }) {
  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} />
      <SectionDesc text={section.description} />
      <ol className="divide-y divide-gray-100 border-y border-gray-100">
        {section.items.map((item, i) => (
          <li key={i} className="flex gap-4 py-5">
            {/* Koyu daire — her zaman */}
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0a192f] text-xs font-bold text-white">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="font-semibold leading-snug text-gray-900">{item.title}</p>
              {item.desc && (
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      {section.notice && (
        <div className="mt-6 border-l-2 border-red-700 pl-5">
          <p className="text-xs font-bold uppercase tracking-widest text-red-700">
            {section.notice.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-gray-500">
            {section.notice.text}
          </p>
        </div>
      )}
    </div>
  );
}

/* Bullet liste (başlıklı madde) */
function BulletBlock({ section }: { section: BulletSection }) {
  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} />
      <SectionDesc text={section.description} />
      <ul className="divide-y divide-gray-100 border-y border-gray-100">
        {section.items.map((item, i) => (
          <li key={i} className="flex gap-4 py-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
            <div className="min-w-0">
              <p className="font-semibold leading-snug text-gray-900">{item.title}</p>
              {item.desc && (
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Saf metin bullet */
function PlainBulletBlock({ section }: { section: PlainBulletSection }) {
  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} />
      <SectionDesc text={section.description} />
      <ul className="divide-y divide-gray-100 border-y border-gray-100">
        {section.items.map((item, i) => (
          <li key={i} className="flex gap-3 py-3 text-sm leading-relaxed text-gray-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* SSS Accordion */
function FaqBlock({ section }: { section: FaqSection }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} />
      <div className="divide-y divide-gray-100 border-y border-gray-100">
        {section.items.map((faq, i) => (
          <details
            key={i}
            className="group"
            open={open === i}
            onClick={(e) => {
              e.preventDefault();
              setOpen(open === i ? null : i);
            }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
              {faq.q}
              <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition group-open:border-red-700 group-open:text-red-700">
                <svg
                  className="h-3 w-3 transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </summary>
            {open === i && (
              <p className="pb-4 text-sm leading-relaxed text-gray-500">
                {faq.a}
              </p>
            )}
          </details>
        ))}
      </div>
    </div>
  );
}

/* Info Kutusu */
function InfoBoxBlock({ section }: { section: InfoBoxSection }) {
  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
        <p className="mb-1 text-sm font-semibold text-gray-800">{section.title}</p>
        <p className="text-sm leading-relaxed text-gray-600">{section.desc}</p>
      </div>
    </div>
  );
}

/* Hukuki */
function LegalBlock({ section }: { section: LegalSection }) {
  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} />
      <ul className="divide-y divide-gray-100 border-y border-gray-100">
        {section.items.map((item, i) => (
          <li key={i} className="py-4">
            <p className="text-sm font-semibold text-gray-900">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-500">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Bölüm dağıtıcı */
function RenderSection({ section }: { section: PageSection }) {
  switch (section.type) {
    case "intro":
      return <IntroBlock section={section} />;
    case "numbered":
      return <NumberedBlock section={section} />;
    case "bullet":
      return <BulletBlock section={section} />;
    case "plain-bullet":
      return <PlainBulletBlock section={section} />;
    case "faq":
      return <FaqBlock section={section} />;
    case "info-box":
      return <InfoBoxBlock section={section} />;
    case "legal":
      return <LegalBlock section={section} />;
  }
}

/* ─────────────────────────────────────────────────────────────────
   ANA LAYOUT BİLEŞENİ
───────────────────────────────────────────────────────────────── */

export default function ServicePageLayout({
  lang = "tr",
  dir = "ltr",
  homeLabel = "Anasayfa",
  backLabel = "Yatırım Türleri",
  backHref,
  consultationLabel = "Danışmanlık",
  hero,
  sections,
  cta,
  otherPrograms = [],
  otherProgramsTitle = "Diğer Seçenekler",
  otherProgramHrefPrefix,
}: ServicePageLayoutProps) {
  const resolvedBackHref = backHref ?? `/${lang}/services`;
  const resolvedOtherProgramHrefPrefix =
    otherProgramHrefPrefix ?? `/${lang}/services`;

  return (
    <main dir={dir} className="bg-white">

      {/* ── BREADCRUMB + BAŞLIK ── */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white pt-8 pb-12">
        {hero.backgroundImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={hero.backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ opacity: 0.25 }}
          />
        )}
        <div className="relative mx-auto max-w-6xl px-6">
          {/* Breadcrumb */}
          <nav
            className="mb-8 flex items-center gap-1.5 text-xs text-gray-400"
            aria-label="Breadcrumb"
          >
            <Link href={`/${lang}`} className="transition hover:text-gray-700">
              {homeLabel}
            </Link>
            <span>/</span>
            <Link
              href={resolvedBackHref}
              className="transition hover:text-gray-700"
            >
              {backLabel}
            </Link>
            <span>/</span>
            <span className="text-gray-700">{hero.breadcrumbLabel}</span>
          </nav>

          {/* Başlık */}
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 md:text-4xl">
            {hero.breadcrumbLabel}
          </h1>
          {hero.summary && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              {hero.summary}
            </p>
          )}
        </div>
      </section>

      {/* ── ANA İÇERİK + SIDEBAR ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

            {/* SOL: bölümler */}
            <div className="min-w-0 flex-1">
              {sections.map((section, i) => (
                <RenderSection key={i} section={section} />
              ))}

              {/* İletişim notu */}
              <div className="border-t border-gray-100 pt-10 text-sm leading-relaxed text-gray-500">
                <p>
                  {cta.description}{" "}
                  <Link
                    href={`/${lang}/contact`}
                    className="border-b border-gray-400 pb-px font-semibold text-gray-800 transition hover:border-red-700 hover:text-red-700"
                  >
                    {cta.primaryCta}
                  </Link>
                </p>
              </div>
            </div>

            {/* SAĞ: sticky sidebar */}
            <aside className="w-full lg:w-64 lg:shrink-0">
              <div className="lg:sticky lg:top-28 space-y-5">

                {/* Danışmanlık kutusu */}
                <div className="border border-gray-100 p-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                    {consultationLabel}
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-gray-600">
                    {cta.title}
                  </p>
                  <Link
                    href={`/${lang}/contact`}
                    className="block border border-gray-900 bg-gray-900 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-gray-800"
                  >
                    {cta.primaryCta}
                  </Link>
                  {cta.secondaryCta && (
                    <Link
                      href={`/${lang}/questions`}
                      className="mt-2 block border border-gray-200 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-gray-600 transition hover:border-gray-400"
                    >
                      {cta.secondaryCta}
                    </Link>
                  )}
                </div>

                {/* Diğer Programlar */}
                {otherPrograms.length > 0 && (
                  <div className="border border-gray-100">
                    <div className="border-b border-gray-100 bg-gray-50 px-5 py-3">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                        {otherProgramsTitle}
                      </p>
                    </div>
                    <ul className="divide-y divide-gray-100">
                      {otherPrograms.map((prog) => (
                        <li key={prog.slug}>
                          <Link
                            href={
                              prog.href ??
                              `${resolvedOtherProgramHrefPrefix}/${prog.slug}`
                            }
                            className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-red-700"
                          >
                            {prog.label}
                            <svg
                              className="h-3.5 w-3.5 text-gray-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
