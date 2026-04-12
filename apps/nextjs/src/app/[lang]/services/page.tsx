import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import ServicesPage from "../../services/page";
import { buildPageMetadata } from "@/lib/seo";
import { buildServicesSchemas } from "@/lib/structured-data";

const services = [
  { title: "Yatırım Yoluyla Vatandaşlık", description: "Pasaport ve global özgürlük elde etmek için Türkiye ve dünya çapında emlak veya fon yatırımlarınızı yönetiyoruz." },
  { title: "Oturum İzinleri", description: "Altın Vize (Golden Visa) ve bağımsız yatırımcılar için uzun dönem oturum hakları danışmanlığı." },
  { title: "Şirket Kurulumu", description: "Ticari göçmenlik prosedürleri, uluslararası şube açılışı ve global vergi optimizasyonu çözümleri." },
  { title: "Aile Birleşimi", description: "Ailenizin tüm fertleri için eşzamanlı başvuru yapılarak bütünleşik vatandaşlık/oturum onayı alınması." },
  { title: "Çalışma İzinleri", description: "Global ölçekte nitelikli çalışan vizesi ve expat yöneticiler için çalışma izni başvuru yönetimi." },
  { title: "Hukuki Danışmanlık", description: "Gayrimenkul sözleşmeleri, fon aktarımı incelemeleri ve göçmenlik hukukunda uçtan uca koruma." },
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
      <ServicesPage />
    </>
  );
}
