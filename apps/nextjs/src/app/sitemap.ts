import { MetadataRoute } from "next";

import { getPublicKnowledgeSitemapEntries, getPublicNewsSitemapEntries } from "@/lib/public-pages";
import { ALL_SITEMAP_PATHS } from "@/lib/sitemap-routes";

const BASE_URL = "https://citizenshipweb.com";
const LOCALES = ["tr", "en", "ru", "ar", "fa"] as const;
const STATIC_LAST_MODIFIED = new Date("2026-04-23T00:00:00.000Z");

const hreflangAlts = (path: string) =>
  Object.fromEntries([
    ["x-default", `${BASE_URL}/en${path}`],
    ...LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}`]),
  ]);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = ALL_SITEMAP_PATHS.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency,
      priority,
      alternates: { languages: hreflangAlts(path) },
    }))
  );

  const newsEntries = getPublicNewsSitemapEntries().map(({ locale, slug, updatedAt }) => ({
    url: `${BASE_URL}/${locale}/news/${slug}`,
    lastModified: new Date(updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const knowledgeEntries = getPublicKnowledgeSitemapEntries().map(({ locale, slug, updatedAt }) => ({
    url: `${BASE_URL}/${locale}/knowledge/${slug}`,
    lastModified: new Date(updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...newsEntries, ...knowledgeEntries];
}
