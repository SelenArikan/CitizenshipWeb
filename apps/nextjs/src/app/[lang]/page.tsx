import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import ConsentBanner from "@/components/ConsentBanner";
import { JsonLd } from "@/components/JsonLd";
import HeroSlider from "@/components/HeroSlider";
import { getDictionary } from "@/lib/dictionary";
import { buildPageMetadata } from "@/lib/seo";
import { buildHomeSchemas } from "@/lib/structured-data";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";

type HomeStat = { num: string; text: string };
type HomeFeature = { title: string; desc: string };
type HomeService = { title: string; desc: string };
type HomeFaq = { q: string; a: string };
type HomeTeamItem = { title: string; desc: string };

const investmentAnchors = [
  "gayrimenkul-yatirimi",
  "mevduat-hesabi",
  "istihdam-olusturmak",
  "devlet-borclanma-araclari",
  "gayrimenkul-yatirim-fonu",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildPageMetadata("home", lang);
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  const stats = Array.isArray(dict.stats) ? (dict.stats as HomeStat[]) : [];
  const features = Array.isArray(dict.features?.list) ? (dict.features.list as HomeFeature[]) : [];
  const services = Array.isArray(dict.services?.list) ? (dict.services.list as HomeService[]) : [];
  const faqs = Array.isArray(dict.faq?.list) ? (dict.faq.list as HomeFaq[]) : [];
  const teamItems = Array.isArray((dict as any).team?.list) ? ((dict as any).team.list as HomeTeamItem[]) : [];
  const aboutValues = Array.isArray((dict as any).about?.values) ? ((dict as any).about.values as string[]) : [];
  const homeFaqs = faqs.slice(0, 5);
  const schemas = buildHomeSchemas(resolvedParams.lang, faqs);

  /* ── Vatandaşlık program slide verileri ── */
  const citizenshipPrograms = [
    { country: "Türkiye", program: "Yatırım Yoluyla Vatandaşlık", href: `/${dict.lang}/services/gayrimenkul-yatirimi` },
    { country: "Türkiye", program: "Gayrimenkul Yatırımı", href: `/${dict.lang}/services/gayrimenkul-yatirimi` },
    { country: "Türkiye", program: "Banka Mevduatı", href: `/${dict.lang}/services/mevduat-hesabi` },
    { country: "Türkiye", program: "Yatırım Fonu", href: `/${dict.lang}/services/gayrimenkul-yatirim-fonu` },
    { country: "Türkiye", program: "Devlet Tahvili", href: `/${dict.lang}/services/devlet-borclanma-araclari` },
    { country: "Türkiye", program: "İstihdam", href: `/${dict.lang}/services/istihdam-olusturmak` },
  ];

  const residencePrograms = [
    { country: "Türkiye", program: "Yatırımcı İkamet İzni", href: `/${dict.lang}/ikamet-izni/yatirimci-ikamet-izni` },
    { country: "Türkiye", program: "Gayrimenkul İkamet İzni", href: `/${dict.lang}/ikamet-izni/gayrimenkul-ikamet-izni` },
    { country: "Türkiye", program: "Aile İkamet İzni", href: `/${dict.lang}/ikamet-izni/aile-ikamet-izni` },
    { country: "Türkiye", program: "Uzun Dönem İkamet İzni", href: `/${dict.lang}/ikamet-izni/uzun-donem-ikamet-izni` },
  ];

  const legalServices = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Gayrimenkul Hukuku",
      href: `/${dict.lang}/services`,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Şirket Kuruluşu",
      href: `/${dict.lang}/services`,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Vergi Danışmanlığı",
      href: `/${dict.lang}/services`,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "İkamet & Vatandaşlık",
      href: `/${dict.lang}/citizenship`,
    },
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <main className="w-full">
        <ScrollRevealWrapper />

        {/* ── Görsel olarak gizlenmiş H1 — SEO ── */}
        <h1 className="sr-only">
          {dict.hero.title_1} {dict.hero.title_2}
        </h1>

        {/* ════════════════════════════════════
            1. HERO SLIDER  (full-width)
        ════════════════════════════════════ */}
        <HeroSlider
          slides={
            Array.isArray((dict.hero as any).slides)
              ? (dict.hero as any).slides.map((s: any) => ({
                  image: s.image,
                  alt: s.label ?? s.title1 ?? "",
                  label: s.label ?? "",
                  href: s.href ? s.href.replace(/^\/tr\//, `/${dict.lang}/`) : undefined,
                }))
              : []
          }
          servicesHref={`/${dict.lang}/services`}
          dir={dict.dir === "rtl" ? "rtl" : "ltr"}
        />

        {/* ════════════════════════════════════
            2. HAKKIMIZDA  (ketenci stili: sol metin, sağ görsel)
        ════════════════════════════════════ */}
        <section id="about" className="border-b border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
              {/* Sol — metin */}
              <div className="reveal reveal-slide-left flex-1">
                <p className="mb-5 text-base leading-8 text-gray-600">
                  {dict.about?.p1}
                </p>
                <p className="mb-8 text-base leading-8 text-gray-600">
                  {dict.about?.p2}
                </p>
                <Link
                  href={`/${dict.lang}/about`}
                  className="inline-block border-b border-gray-800 pb-0.5 text-sm font-semibold uppercase tracking-widest text-gray-800 transition hover:border-red-700 hover:text-red-700"
                >
                  Devamını Oku
                </Link>
              </div>

              {/* Sağ — görsel */}
              <div className="reveal reveal-scale-in delay-200 relative h-80 w-full flex-shrink-0 overflow-hidden md:h-96 md:w-[420px]">
                <Image
                  src="/news2.png"
                  alt="CitizenshipWeb danışmanlık ekibi"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* stats bölümü kaldırıldı */}

        {/* ════════════════════════════════════
            4. VATANDAŞLIK PROGRAMLARI
            (ketenci stili: ülke adı üstte küçük, program adı büyük)
        ════════════════════════════════════ */}
        <section className="border-b border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal reveal-fade-up mb-10 flex items-end justify-between">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  {dict.services?.tag ?? "Vatandaşlık Programları"}
                </p>
                <h2 className="text-3xl font-light tracking-tight text-gray-900">
                  Yatırım Yoluyla Vatandaşlık
                </h2>
              </div>
              <Link
                href={`/${dict.lang}/services`}
                className="hidden text-xs font-semibold uppercase tracking-widest text-gray-500 underline-offset-4 transition hover:text-red-700 hover:underline md:block"
              >
                Tümünü Gör
              </Link>
            </div>

            <ul className="divide-y divide-gray-100 border-y border-gray-100">
              {services.map((service, idx) => (
                <li key={service.title}>
                  <Link
                    href={`/${dict.lang}/services#${investmentAnchors[idx] ?? investmentAnchors[0]}`}
                    className="reveal reveal-fade-up group flex items-center justify-between py-5 transition-colors duration-150 hover:text-red-700"
                  >
                    <div className="flex items-center gap-5">
                      <span className="w-5 text-center text-xs font-bold tabular-nums text-gray-300">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700">
                          Türkiye
                        </p>
                        <h3 className="text-base font-medium text-gray-900 group-hover:text-red-700 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <svg className="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ════════════════════════════════════
            5. İKAMET PROGRAMLARI
        ════════════════════════════════════ */}
        <section className="border-b border-gray-100 bg-gray-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="reveal reveal-fade-up mb-10 flex items-end justify-between">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  İkamet Programları
                </p>
                <h2 className="text-3xl font-light tracking-tight text-gray-900">
                  Yatırım Yoluyla İkamet İzni
                </h2>
              </div>
              <Link
                href={`/${dict.lang}/ikamet-izni/yatirimci-ikamet-izni`}
                className="hidden text-xs font-semibold uppercase tracking-widest text-gray-500 underline-offset-4 transition hover:text-red-700 hover:underline md:block"
              >
                Tümünü Gör
              </Link>
            </div>

            <ul className="divide-y divide-gray-200 border-y border-gray-200">
              {residencePrograms.map((prog, idx) => (
                <li key={prog.program}>
                  <Link
                    href={prog.href}
                    className="reveal reveal-fade-up group flex items-center justify-between py-5 transition-colors duration-150 hover:text-red-700"
                  >
                    <div className="flex items-center gap-5">
                      <span className="w-5 text-center text-xs font-bold tabular-nums text-gray-300">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-700">
                          {prog.country}
                        </p>
                        <h3 className="text-base font-medium text-gray-900 group-hover:text-red-700 transition-colors">
                          {prog.program}
                        </h3>
                      </div>
                    </div>
                    <svg className="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ════════════════════════════════════
            6. HUKUKİ HİZMETLER
            (ketenci stili: yatay liste + ikon)
        ════════════════════════════════════ */}
        <section className="border-b border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">

            {/* Hukuki hizmetler — kutucuk grid (başlıksız) */}
            <div className="grid grid-cols-1 gap-px bg-gray-100 border border-gray-100 sm:grid-cols-2 lg:grid-cols-4">
              {legalServices.map((svc) => (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="reveal reveal-fade-up group flex flex-col gap-4 bg-white p-8 transition-colors duration-200 hover:bg-gray-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition group-hover:border-red-700 group-hover:text-red-700">
                    {svc.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                    {svc.title}
                  </h3>
                </Link>
              ))}
            </div>

            {/* Avantajlar — liste */}
            {features.length > 0 && (
              <div className="mt-14">
                <h2 className="mb-6 text-2xl font-light tracking-tight text-gray-900">
                  Türk Vatandaşlığının Öne Çıkan Avantajları
                </h2>
                <ul className="divide-y divide-gray-100 border-y border-gray-100">
                  {features.map((feature, idx) => (
                    <li key={idx} className="reveal reveal-fade-up flex gap-4 py-4">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                      <div>
                        <p className="font-semibold text-gray-900">{feature.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════
            7. CTA / İLETİŞİM ŞERİDİ
            (ketenci stili: koyu arka plan, adres + buton)
        ════════════════════════════════════ */}
        <section className="bg-gray-900 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-light text-white md:text-3xl">
                  {dict.cta?.title ?? "Hangi yatırım modeli size uygun?"}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">
                  {dict.cta?.desc}
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${dict.lang}/services`}
                  className="inline-block border border-white/20 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-widest text-gray-900 transition hover:bg-gray-100"
                >
                  {dict.cta?.btn_ai ?? "Yatırım Türlerini Gör"}
                </Link>
                <Link
                  href={`/${dict.lang}/contact`}
                  className="inline-block border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            8. SIKÇA SORULAN SORULAR
        ════════════════════════════════════ */}
        {homeFaqs.length > 0 && (
          <section id="sss" className="border-b border-gray-100 bg-white py-20">
            <div className="mx-auto max-w-4xl px-6">
              <div className="reveal reveal-fade-up mb-10 text-center">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                  {dict.faq?.tag ?? "Sık Sorulan Sorular"}
                </p>
                <h2 className="text-3xl font-light tracking-tight text-gray-900">
                  {dict.faq?.title}
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {homeFaqs.map((faq, idx) => (
                  <details key={idx} className="reveal reveal-fade-up group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition group-open:border-red-700 group-open:text-red-700">
                        <svg className="h-3.5 w-3.5 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                  </details>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href={`/${dict.lang}/questions`}
                  className="inline-block border-b border-gray-400 pb-0.5 text-xs font-semibold uppercase tracking-widest text-gray-500 transition hover:border-red-700 hover:text-red-700"
                >
                  {dict.faq?.view_all ?? "Tüm Soruları Gör"}
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <ConsentBanner lang={dict.lang} copy={dict.consent_banner} />
    </>
  );
}
