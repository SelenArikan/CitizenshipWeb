/**
 * YENİ SAYFA ÖRNEK ŞABLONU
 * ────────────────────────────────────────────────────────────────────
 * ServicePageLayout'u kullanarak yeni bir yatırım sayfası oluşturmak
 * için sadece bu dosyayı kopyalayın ve içeriği değiştirin.
 *
 * Kullanım:
 *   1. Bu dosyayı kopyalayın, örn: components/IstidamPage.tsx
 *   2. Bileşen adını ve copy tipini güncelleyin.
 *   3. sections[] içine istediğiniz bölümleri ekleyin.
 *   4. services/[type]/page.tsx içinde slug kontrolü yapıp render edin.
 */

"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import type {
  PageSection,
  OtherProgram,
} from "@/components/ServicePageLayout";

// ── Diğer seçenekler (sidebar'da gösterilir) ──────────────────────
const OTHER_PROGRAMS: OtherProgram[] = [
  { label: "Gayrimenkul Yatırımı", slug: "gayrimenkul-yatirimi" },
  { label: "Mevduat Hesabı", slug: "mevduat-hesabi" },
  { label: "Gayrimenkul Yatırım Fonu", slug: "gayrimenkul-yatirim-fonu" },
  { label: "Devlet Borçlanma Araçları", slug: "devlet-borclanma-araclari" },
];

// ── Sayfa bileşeni ────────────────────────────────────────────────
export default function ExampleInvestmentPage({
  lang = "tr",
  dir = "ltr",
  backLabel = "Yatırım Türleri",
}: {
  lang?: string;
  dir?: "ltr" | "rtl";
  backLabel?: string;
}) {
  //
  // ── Tüm bölümleri buraya ekleyin ──────────────────────────────
  // Her bölüm için sadece "type" ve ilgili alanları doldurun.
  // Boş bölümler (items: []) otomatik olarak gizlenir.
  //
  const sections: PageSection[] = [
    // ① Giriş paragrafları
    {
      type: "intro",
      eyebrow: "GENEL BAKIŞ",           // küçük üst etiket (isteğe bağlı)
      title: "Bölüm Başlığı",            // h2 başlığı (isteğe bağlı)
      paragraphs: [
        "Birinci paragraf metni buraya gelir.",
        "İkinci paragraf metni buraya gelir.",
      ],
    },

    // ② Numaralı liste (süreç adımları, gereksinimler, belgeler…)
    {
      type: "numbered",
      eyebrow: "SÜRECİN AŞAMALARI",
      title: "Adım Adım Başvuru",
      description: "İsteğe bağlı açıklama metni.",  // (isteğe bağlı)
      items: [
        { title: "Birinci adım başlığı", desc: "Açıklama metni." },
        { title: "İkinci adım başlığı", desc: "Açıklama metni." },
      ],
      // Listenin sonunda uyarı kutusu göstermek için:
      notice: {
        title: "ÖNEMLİ NOT",
        text: "Uyarı metni buraya gelir.",
      },
    },

    // ③ Başlıklı bullet listesi (avantajlar, mülk türleri…)
    {
      type: "bullet",
      eyebrow: "AVANTAJLAR",
      title: "Neden Bu Yöntem?",
      items: [
        { title: "Avantaj başlığı", desc: "Açıklama." },
        { title: "Avantaj başlığı", desc: "Açıklama." },
      ],
    },

    // ④ Saf metin bullet (kısa madde listesi, kısıtlamalar…)
    {
      type: "plain-bullet",
      eyebrow: "KISITLAMALAR",
      title: "Dikkat Edilmesi Gerekenler",
      items: [
        "Birinci kısa madde.",
        "İkinci kısa madde.",
      ],
    },

    // ⑤ SSS / Accordion
    {
      type: "faq",
      eyebrow: "SSS",
      title: "Sık Sorulan Sorular",
      items: [
        {
          q: "Soru metni?",
          a: "Cevap metni.",
        },
      ],
    },

    // ⑥ Info kutusu (tek bir bilgi kartı, tarih/süre/formül…)
    {
      type: "info-box",
      eyebrow: "SÜRE",
      title: "Başvuru Süresi",
      desc: "Ortalama işlem süresi 6-8 aydır.",
    },

    // ⑦ Hukuki çerçeve (kanun maddeleri, yönetmelikler…)
    {
      type: "legal",
      eyebrow: "HUKUKİ ÇERÇEVE",
      title: "Yasal Dayanak",
      items: [
        {
          title: "Kanun Adı ve Maddesi",
          text: "Madde içeriği açıklaması.",
        },
      ],
    },
  ];

  return (
    <ServicePageLayout
      lang={lang}
      dir={dir}
      backLabel={backLabel}
      hero={{
        breadcrumbLabel: "Sayfa Başlığı",           // h1 ve breadcrumb'da gösterilir
        summary: "Kısa açıklama cümlesi.",           // (isteğe bağlı)
        backgroundImage: "/hero-gorseli.jpg",        // public/ klasöründen (isteğe bağlı)
      }}
      sections={sections}
      cta={{
        title: "Sidebar CTA başlığı",
        description: "İletişim notu metni.",
        primaryCta: "Ücretsiz Danışın",
        secondaryCta: "SSS'yi İncele",              // (isteğe bağlı)
      }}
      otherPrograms={OTHER_PROGRAMS}
    />
  );
}
