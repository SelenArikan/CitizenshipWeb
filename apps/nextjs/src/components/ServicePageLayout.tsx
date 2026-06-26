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
  items: Array<{
    title: string;
    desc?: string;
    /** Kalın terim + açıklama çiftleri için (orijinal doküman yapısına uygun) */
    richDesc?: Array<{ term: string; explanation: string }>;
    /** richDesc sonrası eklenecek kapanış cümlesi */
    richDescFooter?: string;
    /** Item içindeki görsel (src = public/ yolu, caption = altíyazı) */
    image?: { src: string; caption?: string };
  }>;
  /** Liste sonunda gösterilecek uyarı kutusu (isteğe bağlı) */
  notice?: { title: string; text: string };
};

/** Bullet (noktalı) liste: her item { title, desc, image } */
export type BulletSection = {
  type: "bullet";
  eyebrow?: string;
  title?: string;
  description?: string;
  items: Array<{
    title: string;
    desc?: string;
    image?: { src: string; caption?: string };
  }>;
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

export type TableSection = {
  type: "table";
  eyebrow?: string;
  title?: string;
  description?: string;
  headers: string[];
  rows: string[][];
};

export type PageSection =
  | IntroSection
  | NumberedSection
  | BulletSection
  | PlainBulletSection
  | FaqSection
  | InfoBoxSection
  | LegalSection
  | TableSection;

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

/* ── Başlık: h2 = kompakt bold siyah | h3 = orta semibold ── */
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
          ? "mb-4 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl"
          : "mb-3 text-lg font-semibold text-gray-900"
      }
    >
      {text}
    </Tag>
  );
}

function SectionDesc({ text, lang = "tr" }: { text?: string; lang?: string }) {
  if (!text) return null;
  return (
    <p className="mb-6 text-[15px] leading-7 text-gray-600">{parseInline(text, lang)}</p>
  );
}

/**
 * desc metnini akıllıca render eder:
 * - "\n\n" ile ayrılan blokları ayrı parıgraflar olarak gösterir
 * - "- " ile başlayan satırları bullet list olarak gösterir
 * - "1. ", "2. " ile başlayan satırları numaralı liste olarak gösterir
 * - Karma blokları (intro metin + bullet) doğru ayırır
 */
function parseInline(text: string, lang: string): React.ReactNode {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex));
    }
    const linkText = match[1];
    let linkUrl = match[2];

    if (linkUrl.startsWith("/") && !linkUrl.startsWith(`/${lang}/`) && linkUrl !== `/${lang}`) {
      const supportedLangs = ["tr", "en", "ru", "ar", "fa"];
      const hasLangPrefix = supportedLangs.some(l => linkUrl.startsWith(`/${l}/`) || linkUrl === `/${l}`);
      if (!hasLangPrefix) {
        linkUrl = `/${lang}${linkUrl}`;
      }
    }

    parts.push(
      <Link key={matchIndex} href={linkUrl} className="text-red-700 hover:text-red-900 underline font-semibold transition-colors duration-200">
        {linkText}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}

/**
 * desc metnini akıllıca render eder:
 * - "\n\n" ile ayrılan blokları ayrı parıgraflar olarak gösterir
 * - "- " ile başlayan satırları bullet list olarak gösterir
 * - "1. ", "2. " ile başlayan satırları numaralı liste olarak gösterir
 * - Karma blokları (intro metin + bullet) doğru ayırır
 */
function ParsedDesc({ text, lang = "tr" }: { text: string; lang?: string }) {
  const base = "text-[14px] leading-7 text-gray-600";

  const blocks = text.split(/\n\n+/);

  const renderBlock = (block: string, idx: number) => {
    const trimmedBlock = block.trim();
    if (!trimmedBlock) return null;

    // 1. Check for blue banner blockquote
    if (trimmedBlock.startsWith(">")) {
      const cleanText = trimmedBlock.replace(/^>\s*/, "");
      return (
        <blockquote key={idx} className="border-l-4 border-blue-600 bg-blue-50/50 px-4 py-3 text-blue-950 rounded-r-lg my-4 text-[14px] leading-relaxed font-normal not-italic">
          {parseInline(cleanText, lang)}
        </blockquote>
      );
    }

    // 2. Check for inline image markdown
    const imageMatch = trimmedBlock.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imageMatch) {
      const caption = imageMatch[1];
      const src = imageMatch[2];
      return (
        <figure key={idx} className="my-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={caption}
            className="w-full rounded-lg border border-gray-200 object-contain shadow-sm"
          />
          {caption && (
            <figcaption className="mt-2 text-center text-xs italic text-gray-400">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }

    // 3. Check for subheadings
    if (trimmedBlock.startsWith("###")) {
      const cleanText = trimmedBlock.replace(/^###\s*/, "");
      return (
        <h4 key={idx} className="text-[15px] font-bold text-gray-900 mt-4 mb-2">
          {parseInline(cleanText, lang)}
        </h4>
      );
    }

    const lines = block.split('\n').filter(l => l.trim());
    if (lines.length === 0) return null;

    const isBullet = (l: string) => /^[-•✔✓]\s/.test(l);
    const isNumbered = (l: string) => /^\d+\.\s/.test(l);

    const allBullet = lines.every(isBullet);
    const allNumbered = lines.every(isNumbered);

    if (allBullet) {
      return (
        <ul key={idx} className="list-none space-y-1.5">
          {lines.map((line, j) => (
            <li key={j} className={`flex gap-2.5 ${base}`}>
              <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
              <span>{parseInline(line.replace(/^[\s\t\u200B\uFEFF•\-*✓✔◦‣▪]+\s*/, ""), lang)}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (allNumbered) {
      return (
        <ol key={idx} className="space-y-1.5">
          {lines.map((line, j) => {
            const m = line.match(/^(\d+)\.\s+(.*)/);
            return (
              <li key={j} className={`flex gap-2 ${base}`}>
                <span className="shrink-0 font-medium text-gray-500">{m?.[1] ?? j + 1}.</span>
                <span>{parseInline(m?.[2] ?? line, lang)}</span>
              </li>
            );
          })}
        </ol>
      );
    }

    // Karma: intro satırlar + bullet/number
    const firstBulletIdx = lines.findIndex(isBullet);
    const firstNumberedIdx = lines.findIndex(isNumbered);
    const splitIdx = firstBulletIdx >= 0 ? firstBulletIdx
      : firstNumberedIdx >= 0 ? firstNumberedIdx
      : -1;

    if (splitIdx > 0) {
      const introLines = lines.slice(0, splitIdx);
      const listLines = lines.slice(splitIdx);
      const useBullet = isBullet(listLines[0]);
      return (
        <div key={idx}>
          <p className={base}>{parseInline(introLines.join(' '), lang)}</p>
          {useBullet ? (
            <ul className="list-none mt-2 space-y-1.5">
              {listLines.map((line, j) => (
                <li key={j} className={`flex gap-2.5 ${base}`}>
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                  <span>{parseInline(line.replace(/^[\s\t\u200B\uFEFF•\-*✓✔◦‣▪]+\s*/, ""), lang)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ol className="mt-2 space-y-1.5">
              {listLines.map((line, j) => {
                const m = line.match(/^(\d+)\.\s+(.*)/);
                return (
                  <li key={j} className={`flex gap-2 ${base}`}>
                    <span className="shrink-0 font-medium text-gray-500">{m?.[1] ?? j + 1}.</span>
                    <span>{parseInline(m?.[2] ?? line, lang)}</span>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      );
    }

    // Düz paragraf
    return <p key={idx} className={base}>{parseInline(lines.join(' '), lang)}</p>;
  };

  return (
    <div className="mt-2 space-y-3">
      {blocks.map((block, i) => renderBlock(block, i))}
    </div>
  );
}

/* Giriş paragrafları */
function IntroBlock({ section, lang = "tr" }: { section: IntroSection; lang?: string }) {
  /* eyebrow varsa ana başlık (h2), yoksa alt başlık (h3) */
  const headingTag = section.eyebrow ? "h2" : "h3";
  const hasParagraphs = section.paragraphs.some((p) => p.trim().length > 0);

  // Group consecutive bullet and numbered lines
  type GroupedBlock =
    | { type: "paragraph"; text: string }
    | { type: "bullets"; items: string[] }
    | { type: "numbers"; items: Array<{ num: string; text: string }> }
    | { type: "quote"; text: string };

  const grouped: GroupedBlock[] = [];

  section.paragraphs.forEach((p) => {
    const isQuote = p.trim().startsWith(">");
    const isBullet = !isQuote && (/^[\s\t\u200B\uFEFF•\-*✓✔◦‣▪]+\s*/.test(p) || /^[•\-*✓✔◦‣▪]/.test(p.trim()));
    const isNumbered = !isQuote && /^\d+\.\s+/.test(p.trim());

    if (isQuote) {
      const cleanText = p.trim().replace(/^>\s*/, "");
      grouped.push({ type: "quote", text: cleanText });
    } else if (isBullet) {
      const cleanText = p.replace(/^[\s\t\u200B\uFEFF•\-*✓✔◦‣▪]+\s*/, "");
      const last = grouped[grouped.length - 1];
      if (last && last.type === "bullets") {
        last.items.push(cleanText);
      } else {
        grouped.push({ type: "bullets", items: [cleanText] });
      }
    } else if (isNumbered) {
      const m = p.trim().match(/^(\d+)\.\s+(.*)/);
      const num = m?.[1] ?? "1";
      const cleanText = m?.[2] ?? p;
      const last = grouped[grouped.length - 1];
      if (last && last.type === "numbers") {
        last.items.push({ num, text: cleanText });
      } else {
        grouped.push({ type: "numbers", items: [{ num, text: cleanText }] });
      }
    } else {
      grouped.push({ type: "paragraph", text: p });
    }
  });

  return (
    <div className={hasParagraphs ? "mb-12" : "mb-4"}>
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} as={headingTag} />
      {grouped.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="mb-4 text-base leading-7 text-gray-700">
              {parseInline(block.text, lang)}
            </p>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote key={i} className="border-l-4 border-blue-600 bg-blue-50/50 px-4 py-3 text-blue-950 rounded-r-lg my-4 text-base leading-relaxed font-normal not-italic">
              {parseInline(block.text, lang)}
            </blockquote>
          );
        }

        if (block.type === "bullets") {
          return (
            <ul key={i} className="list-none mb-4 space-y-1.5 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-base leading-relaxed text-gray-700">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                  <span>{parseInline(item, lang)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "numbers") {
          return (
            <ol key={i} className="list-none mb-4 space-y-1.5 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-2 text-base leading-relaxed text-gray-700">
                  <span className="shrink-0 font-bold text-slate-900">{item.num}.</span>
                  <span>{parseInline(item.text, lang)}</span>
                </li>
              ))}
            </ol>
          );
        }

        return null;
      })}
    </div>
  );
}

/* Numaralı liste */
function NumberedBlock({ section, lang }: { section: NumberedSection; lang: string }) {
  const headingTag = section.eyebrow ? "h2" : "h3";
  return (
    <div className="mb-14 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} as={headingTag} />
      <SectionDesc text={section.description} lang={lang} />
      <ol className="space-y-4">
        {section.items.map((item, i) => (
          <li key={i} className="flex gap-4 rounded-lg border border-gray-100 bg-gray-50 p-5">
            {/* Koyu daire — her zaman */}
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0a192f] text-xs font-bold text-white">
              {i + 1}
            </span>
            <div className="min-w-0 w-full">
              <p className="text-[15px] font-semibold leading-snug text-gray-900">{item.title.replace(/^[\s\t\u200B\uFEFF•\-*✓✔◦‣▪]+\s*/, "")}</p>
              {/* Sıradan açıklama — akıllı parse ile */}
              {item.desc && <ParsedDesc text={item.desc} lang={lang} />}
              {/* Kalın terim + açıklama çiftleri */}
              {item.richDesc && item.richDesc.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {item.richDesc.map((entry, j) => (
                    <li key={j} className="text-[14px] leading-7 text-gray-600">
                      <strong className="font-semibold text-gray-800">{entry.term}:</strong>{" "}
                      {parseInline(entry.explanation, lang)}
                    </li>
                  ))}
                </ul>
              )}
              {/* Kapanış cümlesi */}
              {item.richDescFooter && (
                item.richDescFooter.trim().startsWith(">") ? (
                  <blockquote className="mt-3 border-l-4 border-blue-600 bg-blue-50/50 px-4 py-3 text-blue-950 rounded-r-lg text-[14px] leading-relaxed font-normal not-italic">
                    {parseInline(item.richDescFooter.trim().replace(/^>\s*/, ""), lang)}
                  </blockquote>
                ) : (
                  <p className="mt-3 text-[14px] leading-7 text-gray-500 italic">
                    {parseInline(item.richDescFooter, lang)}
                  </p>
                )
              )}
              {/* Dokümandan alınan görsel */}
              {item.image && (
                <figure className="mt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image.src}
                    alt={item.image.caption ?? ""}
                    className="w-full rounded-lg border border-gray-200 object-contain shadow-sm"
                  />
                  {item.image.caption && (
                    <figcaption className="mt-2 text-center text-xs italic text-gray-400">
                      {item.image.caption}
                    </figcaption>
                  )}
                </figure>
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
          <p className="mt-1 text-[14px] leading-7 text-gray-600">
            {parseInline(section.notice.text, lang)}
          </p>
        </div>
      )}
    </div>
  );
}

/* Bullet liste (başlıklı madde) */
function BulletBlock({ section, lang }: { section: BulletSection; lang: string }) {
  const headingTag = section.eyebrow ? "h2" : "h3";
  return (
    <div className="mb-14 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} as={headingTag} />
      <SectionDesc text={section.description} lang={lang} />
      <ul className="list-none space-y-4">
        {section.items.map((item, i) => (
          <li key={i} className="flex gap-4 rounded-lg border border-gray-100 bg-gray-50 p-5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
            <div className="min-w-0 w-full">
              <p className="text-[15px] font-semibold leading-snug text-gray-900">{item.title.replace(/^[\s\t\u200B\uFEFF•\-*✓✔◦‣▪]+\s*/, "")}</p>
              {item.desc && <ParsedDesc text={item.desc} lang={lang} />}
              {/* Dokümandan alınan görsel */}
              {item.image && (
                <figure className="mt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image.src}
                    alt={item.image.caption ?? ""}
                    className="w-full rounded-lg border border-gray-200 object-contain shadow-sm"
                  />
                  {item.image.caption && (
                    <figcaption className="mt-2 text-center text-xs italic text-gray-400">
                      {item.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Saf metin bullet */
function PlainBulletBlock({ section, lang = "tr" }: { section: PlainBulletSection; lang?: string }) {
  const headingTag = section.eyebrow ? "h2" : "h3";
  const isNumbered = section.items.length > 0 && section.items.every(item => /^\d+[.)]\s/.test(item.trim()));

  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} as={headingTag} />
      <SectionDesc text={section.description} lang={lang} />
      {isNumbered ? (
        <ol className="space-y-1.5 list-none border-y border-gray-100 divide-y divide-gray-100">
          {section.items.map((item, i) => {
            const m = item.trim().match(/^(\d+)[.)]\s+(.*)/);
            const num = m?.[1] ?? (i + 1).toString();
            const cleanText = m?.[2] ?? item;
            return (
              <li key={i} className="flex gap-3 py-3 text-sm leading-relaxed text-gray-700">
                <span className="shrink-0 font-medium text-gray-500">{num}.</span>
                <span>{parseInline(cleanText, lang)}</span>
              </li>
            );
          })}
        </ol>
      ) : (
        <ul className="list-none divide-y divide-gray-100 border-y border-gray-100">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 py-3 text-sm leading-relaxed text-gray-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
              <span>{parseInline(item.replace(/^[\s\t\u200B\uFEFF•\-*✓✔◦‣▪]+\s*/, ""), lang)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* SSS Accordion */
function FaqBlock({ section, lang = "tr" }: { section: FaqSection; lang?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const headingTag = section.eyebrow ? "h2" : "h3";
  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} as={headingTag} />
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
              {parseInline(faq.q, lang)}
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
                {parseInline(faq.a, lang)}
              </p>
            )}
          </details>
        ))}
      </div>
    </div>
  );
}

/* Info Kutusu */
function InfoBoxBlock({ section, lang = "tr" }: { section: InfoBoxSection; lang?: string }) {
  return (
    <div className="mb-10">
      <SectionEyebrow text={section.eyebrow} />
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
        <p className="mb-1 text-sm font-semibold text-gray-800">{parseInline(section.title, lang)}</p>
        <p className="text-sm leading-relaxed text-gray-600">{parseInline(section.desc, lang)}</p>
      </div>
    </div>
  );
}

/* Hukuki */
function LegalBlock({ section, lang = "tr" }: { section: LegalSection; lang?: string }) {
  const headingTag = section.eyebrow ? "h2" : "h3";
  return (
    <div className="mb-14 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} as={headingTag} />
      <ul className="space-y-4">
        {section.items.map((item, i) => (
          <li key={i} className="rounded-lg border border-gray-100 bg-gray-50 p-5">
            <p className="text-[15px] font-semibold text-gray-900">{parseInline(item.title, lang)}</p>
            <p className="mt-2 text-[14px] leading-7 text-gray-600">
              {parseInline(item.text, lang)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Tablo */
function TableBlock({ section, lang = "tr" }: { section: TableSection; lang?: string }) {
  const headingTag = section.eyebrow ? "h2" : "h3";
  return (
    <div className="mb-14 border-t border-gray-100 pt-10 first:border-t-0 first:pt-0">
      <SectionEyebrow text={section.eyebrow} />
      <SectionTitle text={section.title} as={headingTag} />
      <SectionDesc text={section.description} lang={lang} />
      <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                {section.headers.map((header, i) => (
                  <th
                    key={i}
                    className="px-6 py-3.5 text-left font-bold text-slate-900 border-b border-gray-200"
                  >
                    {parseInline(header, lang)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {section.rows.map((row, i) => (
                <tr key={i} className="transition-colors hover:bg-slate-50/50">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 text-gray-600 leading-relaxed ${
                        j === 0 ? "font-semibold text-slate-900 whitespace-nowrap" : "font-normal"
                      }`}
                    >
                      {parseInline(cell, lang)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Bölüm dağıtıcı */
function RenderSection({ section, lang }: { section: PageSection; lang: string }) {
  switch (section.type) {
    case "intro":
      return <IntroBlock section={section} lang={lang} />;
    case "numbered":
      return <NumberedBlock section={section} lang={lang} />;
    case "bullet":
      return <BulletBlock section={section} lang={lang} />;
    case "plain-bullet":
      return <PlainBulletBlock section={section} lang={lang} />;
    case "faq":
      return <FaqBlock section={section} lang={lang} />;
    case "info-box":
      return <InfoBoxBlock section={section} lang={lang} />;
    case "legal":
      return <LegalBlock section={section} lang={lang} />;
    case "table":
      return <TableBlock section={section} lang={lang} />;
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
      {hero.backgroundImage ? (
        <section className="relative overflow-hidden min-h-[450px] md:min-h-[540px] flex flex-col justify-between pt-10 pb-16 bg-slate-950">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition-opacity duration-500"
          />
          {/* Gradient Overlay: dark at bottom for title contrast, dark at top for breadcrumb contrast, lighter in the middle */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/60" />
          
          <div className="relative mx-auto w-full max-w-6xl px-6 flex flex-col justify-between flex-1">
            {/* Breadcrumb at the top */}
            <nav
              className="mb-auto flex items-center gap-1.5 text-xs text-white/70"
              aria-label="Breadcrumb"
            >
              <Link href={`/${lang}`} className="transition hover:text-white">
                {homeLabel}
              </Link>
              <span>/</span>
              <Link
                href={resolvedBackHref}
                className="transition hover:text-white"
              >
                {backLabel}
              </Link>
              <span>/</span>
              <span className="text-white font-medium">{hero.breadcrumbLabel}</span>
            </nav>

            {/* Başlık at the bottom */}
            <div className="mt-20">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-md">
                {hero.breadcrumbLabel}
              </h1>
              {hero.summary && (
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 drop-shadow">
                  {hero.summary}
                </p>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="relative overflow-hidden border-b border-gray-100 bg-white pt-8 pb-12">
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
      )}

      {/* ── ANA İÇERİK + SIDEBAR ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

            {/* SOL: bölümler */}
            <div className="min-w-0 flex-1">
              {sections.map((section, i) => (
                <RenderSection key={i} section={section} lang={lang} />
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
