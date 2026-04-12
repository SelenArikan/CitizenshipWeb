import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import CitizenshipPage from "../../citizenship/page";
import { buildPageMetadata } from "@/lib/seo";
import { buildCitizenshipSchemas } from "@/lib/structured-data";

const steps = [
  { title: "Stratejik Değerlendirme", desc: "Durumunuza uygun vatandaşlık programının (yatırım, fon, bağış) analiz edilmesi." },
  { title: "Ön Onay ve Evrak Hazırlığı", desc: "Seçilen programa göre resmi başvuru evraklarının tercüme ve noter süreçleri." },
  { title: "Yatırımın Tamamlanması", desc: "Emlak alımı, fon yatırımı veya bağış işlemlerinin resmi kanallarla yapılması." },
  { title: "Resmi Başvurunun İletilmesi", desc: "Dosyanızın ilgili ülkenin Vatandaşlık ve Göçmenlik ofisine teslim edilmesi." },
  { title: "Güvenlik Soruşturması", desc: "İlgili ülke makamlarınca yapılan geçmiş arka plan araştırması sürecinin takibi." },
  { title: "Pasaport Teslimatı", desc: "Onay sertifikasının alınması ve ailenizin pasaport/kimlik teslimatının yapılması." },
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
      <JsonLd data={buildCitizenshipSchemas(lang, steps)} />
      <CitizenshipPage />
    </>
  );
}
