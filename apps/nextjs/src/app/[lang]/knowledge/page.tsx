import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import KnowledgePage from "../../knowledge/page";
import { buildPageMetadata } from "@/lib/seo";
import { buildCollectionSchemas } from "@/lib/structured-data";

const knowledgeItems = [
  { category: "Mülkiyet", title: "Yabancılar İçin Mülk Edinme Yasası Değişiklikleri" },
  { category: "Aile", title: "Eş ve Çocuklar İçin Eşzamanlı Başvuru Stratejisi" },
  { category: "Yatırım", title: "Global Fon Yatırımlarıyla AB Oturum İzni" },
  { category: "Seyahat", title: "Vizesiz Seyahat Gücü Yüksek En İyi 5 Pasaport" },
  { category: "Vatandaşlık", title: "Çifte Vatandaşlık Kabul Eden ve Etmeyen Ülkeler" },
  { category: "Oturum", title: "Dijital Göçebe (Digital Nomad) Vizeleri 2026" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("knowledge", lang);
}

export default async function LangKnowledgePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <JsonLd data={buildCollectionSchemas("knowledge", lang, knowledgeItems)} />
      <KnowledgePage />
    </>
  );
}
