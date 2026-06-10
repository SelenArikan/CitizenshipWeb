"use client";

import type { GayrimenkulFonPageCopy } from "@/lib/gayrimenkul-fon-page";
import ServicePageLayout from "@/components/ServicePageLayout";
import type { PageSection, OtherProgram } from "@/components/ServicePageLayout";

const OTHER_PROGRAMS: OtherProgram[] = [
  { label: "Gayrimenkul Yatırımı", slug: "gayrimenkul-yatirimi" },
  { label: "Mevduat Hesabı", slug: "mevduat-hesabi" },
  { label: "İstihdam Oluşturmak", slug: "istihdam-olusturmak" },
  { label: "Devlet Borçlanma Araçları", slug: "devlet-borclanma-araclari" },
];

type Props = {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
  copy: GayrimenkulFonPageCopy;
};

export default function GayrimenkulFonPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Yatırım Türleri",
  copy,
}: Props) {
  const sections: PageSection[] = [
    // BÖLÜM 1 – Giriş
    ...(copy.bolum1?.intro?.length > 0
      ? [
          {
            type: "intro" as const,
            eyebrow: copy.bolum1.eyebrow,
            title: copy.bolum1.title,
            paragraphs: copy.bolum1.intro,
          },
        ]
      : []),

    // TAPU İNCELEME – numaralı, her item paragraf + bullet içerir
    // Düzleştirerek numbered'a çeviriyoruz
    ...(copy.bolum1?.tapu?.items?.length > 0
      ? [
          {
            type: "numbered" as const,
            eyebrow: copy.bolum1.tapu.eyebrow,
            title: copy.bolum1.tapu.title,
            items: copy.bolum1.tapu.items.map((item) => ({
              title: item.title,
              // Paragrafları ve bullet'ları desc olarak birleştiriyoruz
              desc: [
                ...item.paragraphs,
                ...(item.bullets ?? []),
              ].join(" "),
            })),
          },
        ]
      : []),

    // ŞERH TÜRLERİ – bullet
    ...(copy.bolum1?.sherhler?.items?.length > 0
      ? [
          {
            type: "bullet" as const,
            eyebrow: copy.bolum1.sherhler.eyebrow,
            title: copy.bolum1.sherhler.title,
            items: copy.bolum1.sherhler.items.map((i) => ({
              title: i.title,
              desc: i.desc,
            })),
          },
        ]
      : []),

    // TAPU TÜRÜ – intro + plain-bullet
    ...(copy.bolum1?.tapuTuru
      ? [
          {
            type: "intro" as const,
            eyebrow: copy.bolum1.tapuTuru.eyebrow,
            title: copy.bolum1.tapuTuru.title,
            paragraphs: copy.bolum1.tapuTuru.paragraphs,
          },
          ...(copy.bolum1.tapuTuru.arsaBullets?.length > 0
            ? [
                {
                  type: "plain-bullet" as const,
                  title: copy.bolum1.tapuTuru.arsaTitle,
                  items: copy.bolum1.tapuTuru.arsaBullets,
                },
              ]
            : []),
        ]
      : []),

    // NOTER SÖZLEŞMESİ – intro
    ...(copy.bolum1?.noter
      ? [
          {
            type: "intro" as const,
            eyebrow: copy.bolum1.noter.eyebrow,
            title: copy.bolum1.noter.title,
            paragraphs: copy.bolum1.noter.paragraphs,
          },
        ]
      : []),

    // EKSPERTİZ – intro + info-box (formül)
    ...(copy.bolum1?.ekspertiz
      ? [
          {
            type: "intro" as const,
            eyebrow: copy.bolum1.ekspertiz.eyebrow,
            title: copy.bolum1.ekspertiz.title,
            paragraphs: copy.bolum1.ekspertiz.paragraphs,
          },
          ...(copy.bolum1.ekspertiz.formula
            ? [
                {
                  type: "info-box" as const,
                  title: copy.bolum1.ekspertiz.formula.title,
                  desc: copy.bolum1.ekspertiz.formula.desc,
                },
              ]
            : []),
        ]
      : []),

    // BÖLÜM 2 – DAB (numaralı, her item paragraf + bullet + steps)
    ...(copy.bolum2?.items?.length > 0
      ? [
          {
            type: "numbered" as const,
            eyebrow: copy.bolum2.eyebrow,
            title: copy.bolum2.title,
            items: copy.bolum2.items.map((item) => ({
              title: item.title,
              desc: [
                ...item.paragraphs,
                ...(item.bullets ?? []),
                ...(item.steps ?? []),
              ].join(" "),
            })),
          },
        ]
      : []),

    // BÖLÜM 3 – TAPU RANDEVU (accordion/numbered)
    ...(copy.bolum3?.items?.length > 0
      ? [
          {
            type: "numbered" as const,
            eyebrow: copy.bolum3.eyebrow,
            title: copy.bolum3.title,
            items: copy.bolum3.items.map((item) => ({
              title: item.title,
              desc: [
                ...item.paragraphs,
                ...(item.bullets ?? []),
                ...(item.steps ?? []),
              ].join(" "),
            })),
          },
        ]
      : []),

    // BÖLÜM 4 – UYGUNLUK BELGESİ
    ...(copy.bolum4
      ? [
          {
            type: "intro" as const,
            eyebrow: copy.bolum4.eyebrow,
            title: copy.bolum4.title,
            paragraphs: copy.bolum4.intro ? [copy.bolum4.intro] : [],
          },

          // Denetim kapsamı
          ...(copy.bolum4.denetim
            ? [
                {
                  type: "plain-bullet" as const,
                  eyebrow: copy.bolum4.denetim.eyebrow,
                  title: copy.bolum4.denetim.title,
                  items: copy.bolum4.denetim.bullets,
                },
              ]
            : []),

          // 3 adımlı süreç
          ...(copy.bolum4.process?.steps?.length > 0
            ? [
                {
                  type: "numbered" as const,
                  eyebrow: copy.bolum4.process.eyebrow,
                  title: copy.bolum4.process.title,
                  items: copy.bolum4.process.steps.map((s) => ({
                    title: s.title,
                    desc: s.desc,
                  })),
                },
              ]
            : []),

          // Süre
          ...(copy.bolum4.sure
            ? [
                {
                  type: "info-box" as const,
                  title: copy.bolum4.sure.title,
                  desc: copy.bolum4.sure.desc,
                },
              ]
            : []),

          // Sonrası
          ...(copy.bolum4.sonrasi
            ? [
                {
                  type: "info-box" as const,
                  title: copy.bolum4.sonrasi.title,
                  desc: copy.bolum4.sonrasi.desc,
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
