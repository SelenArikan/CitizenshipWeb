import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import CitizenshipPage from "../../citizenship/page";
import { buildPageMetadata } from "@/lib/seo";
import { buildCitizenshipSchemas, buildHowToSchema } from "@/lib/structured-data";
import { getDictionary } from "@/lib/dictionary";

const benefits = [
  {
    title: "Vizesiz veya kolay vizeli seyahat esnekliği",
    desc: "Türk pasaportu çok sayıda destinasyonda vizesiz, kapıda vize veya e-vize ile erişim planlamasında avantaj sağlayabilir.",
  },
  {
    title: "Genel sağlık sistemi ve eğitim imkanları",
    desc: "Sağlık altyapısı, kamu hizmetleri ve eğitim kurumları vatandaşlık sonrasında güçlü bir yerleşim zemini sunar.",
  },
  {
    title: "Çifte vatandaşlık ve E-2 vize stratejisi",
    desc: "Türkiye çoklu vatandaşlığa izin verir ve belirli koşullarda ABD E-2 yatırımcı vizesi planlamasında stratejik zemin oluşturabilir.",
  },
  {
    title: "Türkiye'de yaşama zorunluluğu olmadan süreç yönetimi",
    desc: "Yatırım ve başvuru dosyası uygun vekalet ve resmi akışla uzaktan da yönetilebilir.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("citizenship", lang);
}

export default async function LangCitizenshipPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <JsonLd data={buildCitizenshipSchemas(lang, benefits)} />
      <CitizenshipPage lang={lang} />
    </>
  );
}
