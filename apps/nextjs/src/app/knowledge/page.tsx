import Link from "next/link";
import Image from "next/image";

import { getKnowledgePageCopy, getPublicKnowledgeEntries, type PublicEntry } from "@/lib/public-pages";

type KnowledgeProps = {
  lang?: string;
  items?: PublicEntry[];
};

export default async function KnowledgeLibrary({ lang = "tr", items }: KnowledgeProps) {
  const copy = getKnowledgePageCopy(lang);
  const articles = items ?? getPublicKnowledgeEntries(lang);
  const [featuredArticle, ...restArticles] = articles;

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#f4f6f8]">
      <div className="w-full bg-navy px-4 py-24 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">{copy.title}</h1>
        <p className="mx-auto max-w-2xl text-xl font-light text-gray-300">{copy.summary}</p>
      </div>

      <section className="w-full max-w-7xl px-8 py-20">
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          {copy.categories.map((category, idx) => (
            <button
              key={category}
              className={`rounded-full px-6 py-2 font-bold transition ${
                idx === 0 ? "bg-burgundy text-white" : "border border-gray-200 bg-white text-navy hover:border-burgundy"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {featuredArticle && (
          <Link
            href={`/${lang}/knowledge/${featuredArticle.slug}`}
            className="group mb-16 flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-lg md:flex-row"
          >
            <div className="relative h-80 w-full overflow-hidden md:h-auto md:w-1/2">
              <Image
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex w-full flex-col justify-center p-10 md:w-1/2">
              <span className="mb-4 text-sm font-bold uppercase tracking-widest text-burgundy">{copy.featuredLabel}</span>
              <h2 className="mb-4 text-3xl font-bold text-navy">{featuredArticle.title}</h2>
              <p className="mb-8 text-lg text-gray-600">{featuredArticle.summary}</p>
              <span className="flex items-center text-sm font-bold uppercase text-burgundy">
                {copy.readMoreLabel} <span className="ml-2">→</span>
              </span>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${lang}/knowledge/${article.slug}`}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 block text-xs font-bold uppercase text-burgundy">{article.category}</span>
                <h3 className="mb-3 line-clamp-2 text-xl font-bold text-navy">{article.title}</h3>
                <span className="mt-4 inline-flex items-center text-sm font-bold text-burgundy">
                  {copy.readMoreLabel} <span className="ml-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
