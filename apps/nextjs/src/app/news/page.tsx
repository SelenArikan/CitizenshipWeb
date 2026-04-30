import Link from "next/link";
import Image from "next/image";

import { getNewsPageCopy, getPublicNewsEntries, type PublicEntry } from "@/lib/public-pages";

type NewsProps = {
  lang?: string;
  items?: PublicEntry[];
};

function formatDate(date: string | null, lang: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat(lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default async function News({ lang = "tr", items }: NewsProps) {
  const copy = getNewsPageCopy(lang);
  const articles = items ?? getPublicNewsEntries(lang);
  const [featuredArticle, ...restArticles] = articles;

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#f4f6f8]">
      <div className="w-full bg-navy px-4 pb-24 pt-40 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">{copy.title}</h1>
        <p className="mx-auto max-w-2xl text-xl font-light text-gray-300">{copy.summary}</p>
      </div>

      <section className="flex w-full max-w-7xl flex-col gap-12 px-8 py-20 md:flex-row">
        <div className="w-full md:w-1/4">
          <div className="sticky top-32 rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="mb-6 border-b pb-4 text-xl font-bold text-navy">{copy.categoriesTitle}</h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="cursor-pointer font-bold text-burgundy">{copy.allLabel}</li>
              {copy.categories.map((category) => (
                <li key={category} className="cursor-pointer transition hover:text-burgundy">
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          {featuredArticle && (
            <Link
              href={`/${lang}/news/${featuredArticle.slug}`}
              className="mb-8 block overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="group flex flex-col sm:flex-row">
                <div className="relative h-56 w-full overflow-hidden sm:h-auto sm:w-1/3">
                  <Image
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:w-2/3">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase text-burgundy">{copy.featuredLabel}</span>
                    <span className="text-xs text-gray-400">{formatDate(featuredArticle.publishedAt, lang)}</span>
                  </div>
                  <h2 className="mb-3 text-3xl font-bold text-navy">{featuredArticle.title}</h2>
                  <p className="mb-4 text-gray-600">{featuredArticle.summary}</p>
                  <span className="mt-auto text-sm font-bold text-burgundy">{copy.readMoreLabel} →</span>
                </div>
              </div>
            </Link>
          )}

          <div className="flex flex-col space-y-8">
            {restArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${lang}/news/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md sm:flex-row"
              >
                <div className="relative h-56 w-full overflow-hidden sm:h-auto sm:w-1/3">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:w-2/3">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase text-burgundy">{article.category}</span>
                    <span className="text-xs text-gray-400">{formatDate(article.publishedAt, lang)}</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-navy transition group-hover:text-burgundy">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{article.summary}</p>
                  <span className="mt-auto text-sm font-bold text-burgundy">{copy.readMoreLabel} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
