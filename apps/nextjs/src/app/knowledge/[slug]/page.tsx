import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getKnowledgePageCopy, getPublicKnowledgeEntry } from "@/lib/public-pages";

type KnowledgeDetailPageProps = {
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

export default function KnowledgeDetailPage({ lang = "tr", slug }: KnowledgeDetailPageProps) {
  const entry = getPublicKnowledgeEntry(lang, slug);
  if (!entry) notFound();

  const copy = getKnowledgePageCopy(lang);
  const paragraphs = entry.content.split("\n\n").filter(Boolean);

  return (
    <main className="min-h-screen bg-[#f4f6f8] text-navy">
      <section className="bg-navy px-6 pb-20 pt-36 text-white sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href={`/${lang}/knowledge`}
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-200 transition hover:bg-white/10"
          >
            ← {copy.title}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wide text-gray-300">
            <span className="rounded-full bg-white/10 px-3 py-1">{entry.category}</span>
            <span>{formatDate(entry.publishedAt, lang)}</span>
            {entry.authorName && <span>{entry.authorName}</span>}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">{entry.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">{entry.summary}</p>
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
                <span key={tag} className="rounded-full bg-[#f4f6f8] px-3 py-1 text-xs font-semibold text-gray-600">
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
