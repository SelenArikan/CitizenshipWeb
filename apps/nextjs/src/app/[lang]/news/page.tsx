import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import NewsPage from "../../news/page";
import { buildPageMetadata } from "@/lib/seo";
import { buildCollectionSchemas } from "@/lib/structured-data";

const newsItems = [
  { category: "Mülkiyet", title: "Yabancılar İçin Mülk Edinme Yasası Değişiklikleri", summary: "2026 yılı itibarıyla yürürlüğe giren yeni gayrimenkul değerleme yasaları hakkında uzman görüşlerimiz..." },
  { category: "Aile", title: "Eş ve Çocuklar İçin Eşzamanlı Başvuru Stratejisi", summary: "Yeni bir ülkede hayata başlarken aileniz için en kaliteli eğitim ve kültürel adaptasyon adımları..." },
  { category: "Yatırım", title: "Global Fon Yatırımlarıyla AB Oturum İzni", summary: "Avrupa ve global altın vize programlarının karşılaştırmalı analizi yayında." },
  { category: "Vatandaşlık", title: "Çifte Vatandaşlık Kabul Eden Ülkeler", summary: "Sınırlarınızı genişletmek için çifte pasaport kurallarının tam haritası." },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("news", lang);
}

export default async function LangNewsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <JsonLd data={buildCollectionSchemas("news", lang, newsItems)} />
      <NewsPage />
    </>
  );
}
