"use client";

import type { MevduatPageCopy } from "@/lib/mevduat-page";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { PageSection, OtherProgram } from "@/components/ServicePageLayout";

const OTHER_PROGRAMS: OtherProgram[] = [
  { label: "Gayrimenkul Yatırımı", slug: "gayrimenkul-yatirimi" },
  { label: "Gayrimenkul Yatırım Fonu", slug: "gayrimenkul-yatirim-fonu" },
  { label: "İstihdam Oluşturmak", slug: "istihdam-olusturmak" },
  { label: "Devlet Borçlanma Araçları", slug: "devlet-borclanma-araclari" },
];

type Props = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: MevduatPageCopy;
};

export default function MevduatPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Yatırım Türleri",
  copy,
}: Props) {
  const sections: PageSection[] = [
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

    // Kritik Riskler (bullet)
    ...(copy.risks?.items?.length > 0
      ? [
          {
            type: "bullet" as const,
            eyebrow: copy.risks.eyebrow,
            title: copy.risks.title,
            description: copy.risks.description,
            items: copy.risks.items.map((r) => ({
              title: r.title,
              desc: r.desc,
            })),
          },
        ]
      : []),

    // BES Yöntemi
    ...(copy.bes
      ? [
          {
            type: "intro" as const,
            eyebrow: copy.bes.eyebrow,
            title: copy.bes.title,
            paragraphs: copy.bes.paragraphs ?? [],
          },
          ...(copy.bes.restrictions?.length > 0
            ? [
                {
                  type: "plain-bullet" as const,
                  title: copy.bes.restrictionsTitle,
                  items: copy.bes.restrictions,
                },
              ]
            : []),
          ...(copy.bes.officeRole?.length > 0
            ? [
                {
                  type: "numbered" as const,
                  title: copy.bes.officeRoleTitle,
                  items: copy.bes.officeRole.map((item) => ({ title: item })),
                },
              ]
            : []),
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
          ...(copy.postApproval.bullets?.length > 0
            ? [
                {
                  type: "plain-bullet" as const,
                  items: copy.postApproval.bullets,
                },
              ]
            : []),
        ]
      : []),

    // Kimler Başvurabilir
    ...(copy.whoCanApply
      ? [
          // Alt gruplar ayrı plain-bullet bölümleri olarak
          ...(copy.whoCanApply.conditions?.length > 0
            ? [
                {
                  type: "plain-bullet" as const,
                  eyebrow: copy.whoCanApply.eyebrow,
                  title: copy.whoCanApply.conditionsTitle,
                  items: copy.whoCanApply.conditions,
                },
              ]
            : []),
          ...(copy.whoCanApply.family?.length > 0
            ? [
                {
                  type: "plain-bullet" as const,
                  title: copy.whoCanApply.familyTitle,
                  items: copy.whoCanApply.family,
                },
              ]
            : []),
          ...(copy.whoCanApply.cannot?.length > 0
            ? [
                {
                  type: "plain-bullet" as const,
                  title: copy.whoCanApply.cannotTitle,
                  items: copy.whoCanApply.cannot,
                },
              ]
            : []),
          ...(copy.whoCanApply.special?.length > 0
            ? [
                {
                  type: "plain-bullet" as const,
                  title: copy.whoCanApply.specialTitle,
                  items: copy.whoCanApply.special,
                },
              ]
            : []),
        ]
      : []),

    // Hizmet Kapsamı
    ...(copy.serviceScope?.items?.length > 0
      ? [
          {
            type: "plain-bullet" as const,
            eyebrow: copy.serviceScope.eyebrow,
            title: copy.serviceScope.title,
            items: copy.serviceScope.items,
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
