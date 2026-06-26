"use client";

import type { BondsPageCopy } from "@/lib/bonds-page";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { PageSection, OtherProgram } from "@/components/ServicePageLayout";

const OTHER_PROGRAMS: OtherProgram[] = [
  { label: "Gayrimenkul Yatırımı", slug: "gayrimenkul-yatirimi" },
  { label: "Mevduat Hesabı", slug: "mevduat-hesabi" },
  { label: "İstihdam Oluşturmak", slug: "istihdam-olusturmak" },
  { label: "Gayrimenkul Yatırım Fonu", slug: "gayrimenkul-yatirim-fonu" },
];

type Props = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: BondsPageCopy;
};

export default function BondsPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Yatırım Türleri",
  copy,
}: Props) {
  const sections: PageSection[] = [
    // Intro / Giriş
    ...(copy.intro
      ? [
          {
            type: "intro" as const,
            eyebrow: copy.intro.eyebrow,
            title: copy.intro.title,
            paragraphs: copy.intro.paragraphs ?? [],
          },
        ]
      : []),

    // Süreç (numaralı)
    ...(copy.process?.items?.length > 0
      ? [
          {
            type: "numbered" as const,
            eyebrow: copy.process.eyebrow,
            title: copy.process.title,
            description: copy.process.description,
            items: copy.process.items.map((s) => ({
              title: s.title,
              desc: s.desc,
            })),
          },
        ]
      : []),

    // Yatırım Süreci Aşamaları
    ...(copy.processStages && copy.processStages.items && copy.processStages.items.length > 0
      ? [
          {
            type: "plain-bullet" as const,
            eyebrow: copy.processStages.eyebrow,
            title: copy.processStages.title,
            description: copy.processStages.description,
            items: copy.processStages.items,
          },
        ]
      : []),

    // Hukuki Çerçeve
    ...(copy.legal?.items?.length > 0
      ? [
          {
            type: "legal" as const,
            eyebrow: copy.legal.eyebrow,
            title: copy.legal.title,
            items: copy.legal.items.map((i) => ({
              title: i.title,
              text: i.text,
            })),
          },
        ]
      : []),

    // Uygunluk Belgesi Sonrası
    ...(copy.postApproval
      ? [
          {
            type: "intro" as const,
            eyebrow: copy.postApproval.eyebrow,
            title: copy.postApproval.title,
            paragraphs: copy.postApproval.paragraphs ?? [],
          },
          ...(copy.postApproval.bullets && copy.postApproval.bullets.length > 0
            ? [
                {
                  type: "plain-bullet" as const,
                  items: copy.postApproval.bullets ?? [],
                },
              ]
            : []),
        ]
      : []),
  ];

  return (
    <ServicePageLayout
      lang={lang}
      dir={dir}
      backLabel={backLabel}
      hero={{
        breadcrumbLabel: copy.hero?.breadcrumbLabel ?? "",
        summary: copy.hero?.summary,
      }}
      sections={sections}
      cta={{
        title: copy.cta?.title ?? "",
        description: copy.cta?.description,
        primaryCta: copy.cta?.primaryCta ?? "Ücretsiz Danışın",
        secondaryCta: copy.cta?.secondaryCta,
      }}
      otherPrograms={OTHER_PROGRAMS}
    />
  );
}
