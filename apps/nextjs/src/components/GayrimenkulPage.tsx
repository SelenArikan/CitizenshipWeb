"use client";

import type { GayrimenkulPageCopy } from "@/lib/gayrimenkul-page";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { PageSection, OtherProgram } from "@/components/ServicePageLayout";

const OTHER_PROGRAMS: OtherProgram[] = [
  { label: "Mevduat Hesabı", slug: "mevduat-hesabi" },
  { label: "Gayrimenkul Yatırım Fonu", slug: "gayrimenkul-yatirim-fonu" },
  { label: "İstihdam Oluşturmak", slug: "istihdam-olusturmak" },
  { label: "Devlet Borçlanma Araçları", slug: "devlet-borclanma-araclari" },
];

type Props = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: GayrimenkulPageCopy;
};

export default function GayrimenkulPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Yatırım Türleri",
  copy,
}: Props) {
  const sections: PageSection[] = [
    // Giriş paragrafları
    {
      type: "intro",
      paragraphs: copy.intro.paragraphs,
    },

    // Süreç (numaralı) - BİRİNCİ BÖLÜM
    {
      type: "numbered",
      eyebrow: copy.process.eyebrow,
      title: copy.process.title,
      description: copy.process.description,
      items: copy.process.items.map((s) => ({ title: s.title, desc: s.desc, richDesc: s.richDesc, richDescFooter: s.richDescFooter, image: s.image })),
    },

    // Yatırım Seçenekleri / Gereksinimler (numaralı) - İKİNCİ BÖLÜM
    {
      type: "numbered",
      eyebrow: copy.requirements.eyebrow,
      title: copy.requirements.title,
      items: copy.requirements.items,
    },

    // Mülk Türleri (bullet) — isteğe bağlı - ÜÇÜNCÜ BÖLÜM
    ...(copy.propertyTypes?.items?.length > 0
      ? [
          {
            type: "bullet" as const,
            eyebrow: copy.propertyTypes.eyebrow,
            title: copy.propertyTypes.title,
            description: copy.propertyTypes.description,
            items: copy.propertyTypes.items.map((i) => ({
              title: i.title,
              desc: i.desc,
              image: i.image,
            })),
          },
        ]
      : []),

    // Belgeler (numaralı) — isteğe bağlı - DÖRDÜNCÜ BÖLÜM
    ...(copy.documents?.items?.length > 0
      ? [
          {
            type: "numbered" as const,
            eyebrow: copy.documents.eyebrow,
            title: copy.documents.title,
            description: copy.documents.description,
            items: copy.documents.items.map((d) => ({
              title: d.title,
              desc: d.desc,
            })),
            notice:
              copy.documents.noticeTitle
                ? {
                    title: copy.documents.noticeTitle,
                    text: copy.documents.noticeText,
                  }
                : undefined,
          },
        ]
      : []),

    // Hukuki Çerçeve — isteğe bağlı
    ...(copy.legal?.items?.length > 0
      ? [
          {
            type: "legal" as const,
            eyebrow: copy.legal.eyebrow,
            title: copy.legal.title,
            items: copy.legal.items,
          },
        ]
      : []),



  ];

  return (
    <ServicePageLayout
      lang={lang}
      dir={dir}
      backLabel={backLabel}
      hero={{
        breadcrumbLabel: copy.hero.breadcrumbLabel,
        summary: copy.hero.summary,
        backgroundImage: "/gayrimenkul-hero.jpg",
      }}
      sections={sections}
      cta={{
        title: copy.cta.title,
        description: copy.cta.description,
        primaryCta: copy.cta.primaryCta,
        secondaryCta: copy.cta.secondaryCta,
      }}
      otherPrograms={OTHER_PROGRAMS}
    />
  );
}
