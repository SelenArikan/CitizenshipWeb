import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import ServicesPage from "../../services/page";
import { buildPageMetadata } from "@/lib/seo";
import { buildServicesSchemas } from "@/lib/structured-data";

const services = [
  {
    title: "Gayrimenkul Yatırımı",
    description: "En az 400.000 USD tutarında taşınmaz alımı ve üç yıl satılamaz şerhi ile vatandaşlık başvurusu yapılabilir.",
  },
  {
    title: "Mevduat Hesabı",
    description: "Türk bankasında en az 500.000 USD karşılığı tutarın üç yıl tutulması ile uygunluk belgesi alınabilir.",
  },
  {
    title: "İstihdam Oluşturmak",
    description: "Türkiye'de en az 50 kişilik istihdam oluşturan yatırımcılar resmi inceleme sonrasında başvuru hakkı elde edebilir.",
  },
  {
    title: "Devlet Borçlanma Araçları",
    description: "En az 500.000 USD veya karşılığı tutarın devlet borçlanma araçlarına yatırılması ve üç yıl korunması mümkündür.",
  },
  {
    title: "Gayrimenkul Yatırım Fonu",
    description: "En az 500.000 USD değerinde fon katılma paylarının en az üç yıl tutulması ile yatırım modeli kurulabilir.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("services", lang);
}

export default async function LangServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <JsonLd data={buildServicesSchemas(lang, services)} />
      <ServicesPage lang={lang} />
    </>
  );
}
