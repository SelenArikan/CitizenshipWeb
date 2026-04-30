import type { MetadataRoute } from "next";

import { INVESTMENTS } from "@/lib/investments";

export type SitemapChangefreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

export type SitemapPathConfig = {
  path: string;
  priority: number;
  changeFrequency: SitemapChangefreq;
};

/** Statik [lang] sayfaları (navbar / footer ile aynı bilgi mimarisi) */
export const SITEMAP_STATIC_PATHS: SitemapPathConfig[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/citizenship", priority: 0.9, changeFrequency: "monthly" },
  { path: "/knowledge", priority: 0.8, changeFrequency: "weekly" },
  { path: "/news", priority: 0.8, changeFrequency: "weekly" },
  { path: "/questions", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.65, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" },
];

/** Yatırım türü detay (navbar mega menü + /services) */
export const SITEMAP_SERVICE_SLUGS: SitemapPathConfig[] = INVESTMENTS.map((inv) => ({
  path: `/services/${inv.slug}`,
  priority: 0.85,
  changeFrequency: "monthly" as const,
}));

export const ALL_SITEMAP_PATHS: SitemapPathConfig[] = [
  ...SITEMAP_STATIC_PATHS,
  ...SITEMAP_SERVICE_SLUGS,
];
