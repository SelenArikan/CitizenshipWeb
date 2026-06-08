import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getNewsPageCopy, getPublicNewsEntry } from "@/lib/public-pages";

type NewsDetailPageProps = {
  lang?: string;
  slug: string;
};

function formatDate(date: string | null, lang: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function NewsDetailPage({ lang = "tr", slug }: NewsDetailPageProps) {
  const entry = getPublicNewsEntry(lang, slug);
  if (!entry) notFound();

  const copy = getNewsPageCopy(lang);
  const paragraphs = entry.content.split("\n\n").filter(Boolean);

  return (
    <main className="min-h-screen bg-[#E8ECF3] text-navy">
      <section
        className="relative px-6 pb-20 pt-36 sm:px-8"
        style={{ background: "linear-gradient(135deg, #EEF2F8 0%, #F5F8FD 50%, #EBF0F8 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true"
          style={{ backgroundImage: "radial-gradient(#0a192f 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-5xl">
          <Link
            href={`/${lang}/news`}
            className="inline-flex items-center rounded-full border border-[#0a192f]/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#0a192f]/70 transition hover:bg-white hover:text-[#0a192f]"
          >
            ← {copy.title}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide text-[#0a192f]/50">
            <span className="rounded-full bg-[#0a192f]/8 px-3 py-1">{entry.category}</span>
            <span>{formatDate(entry.publishedAt, lang)}</span>
            {entry.authorName && <span>{entry.authorName}</span>}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-[#0a192f] sm:text-5xl">{entry.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0a192f]/60">{entry.summary}</p>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(10,25,47,0.08)]">
          <div className="relative h-72 w-full sm:h-96">
            <Image src={entry.coverImage} alt={entry.title} fill className="object-cover" />
          </div>

          <article className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="mb-8 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#E8ECF3] px-3 py-1 text-xs font-semibold text-gray-600">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-[17px] leading-8 text-gray-700">
              {paragraphs.map((paragraph, index) => (
                <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
