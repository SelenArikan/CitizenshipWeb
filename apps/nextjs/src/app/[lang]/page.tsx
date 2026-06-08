import type { Metadata } from "next";
import Image from "next/image";

import NewsletterSection from "@/components/NewsletterSection";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import ConsentBanner from "@/components/ConsentBanner";
import { JsonLd } from "@/components/JsonLd";
import HeroSlider from "@/components/HeroSlider";
import { getDictionary } from "@/lib/dictionary";
import { buildPageMetadata } from "@/lib/seo";
import { buildHomeSchemas } from "@/lib/structured-data";

// İlk hero görseli LCP öğesi — her dilde aynı dosya
const FIRST_HERO_IMAGE = "/hero/gayrimenkul-vatandaslik.webp";

type HomeStat = {
  num: string;
  text: string;
};

type HomeFeature = {
  title: string;
  desc: string;
};

type HomeService = {
  title: string;
  desc: string;
};

type HomeFaq = {
  q: string;
  a: string;
};

type HomeTeamItem = {
  title: string;
  desc: string;
};

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
  const homeFaqs = faqs.slice(0, 4);
  const schemas = buildHomeSchemas(resolvedParams.lang, faqs);

  return (
    <>
      <JsonLd data={schemas} />
      <main className="flex min-h-screen w-full flex-col items-center">
        <ScrollRevealWrapper />

        {/* Görsel olarak gizlenmiş H1 — SEO için zorunlu, tasarımı etkilemez */}
        <h1
          className="sr-only"
          aria-label={dict.hero.title_1 + " " + dict.hero.title_2}
        >
          {dict.hero.title_1} {dict.hero.title_2}
        </h1>

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


        <section
          id="about"
          className="scroll-mt-32 flex w-full justify-center border-b border-blue-50 bg-white py-24 text-navy"
        >
          <div className="flex w-full max-w-7xl flex-col items-center gap-16 px-8 md:flex-row">
            <div className="reveal reveal-slide-left flex w-full flex-col md:w-1/2">
              <span className="mb-2 text-sm font-bold uppercase tracking-wider text-burgundy">{dict.about?.tag}</span>
              <h2 className="mb-6 text-4xl font-bold">{dict.about?.title}</h2>
              <p className="mb-6 text-lg leading-relaxed text-[#0a192f]/70">{dict.about?.p1}</p>
              <p className="mb-8 text-lg leading-relaxed text-[#0a192f]/70">{dict.about?.p2}</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {aboutValues.length > 0 ? aboutValues.map((value) => (
                  <div key={value} className="rounded-2xl border border-blue-100 bg-[#E8ECF3] px-5 py-4 text-center font-bold text-[#0a192f]">
                    {value}
                  </div>
                )) : ["Şeffaflık", "Güvenilirlik", "Ekip Çalışması"].map((value) => (
                  <div key={value} className="rounded-2xl border border-blue-100 bg-[#E8ECF3] px-5 py-4 text-center font-bold text-[#0a192f]">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-scale-in delay-200 group relative h-[450px] w-full overflow-hidden rounded-3xl shadow-xl md:w-1/2">
              <Image
                src="/news2.png"
                alt="Turkiye vatandaslik ekibi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/20 transition-colors duration-500 group-hover:bg-transparent"></div>
            </div>
          </div>
        </section>

        <section
          id="team"
          className="scroll-mt-32 flex w-full flex-col items-center border-b border-blue-100 bg-[#E8ECF3] py-24 text-navy"
        >
          <div className="flex w-full max-w-7xl flex-col px-8">
            <div className="reveal reveal-slide-left mb-12 flex flex-col">
              <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-burgundy">{(dict as any).team?.tag ?? "Ekip"}</span>
              <h2 className="text-4xl font-bold text-navy">{(dict as any).team?.title ?? "Sürecin her adımı için koordineli uzmanlık"}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamItems.map((item, idx) => (
                <div
                  key={item.title}
                  className={`reveal reveal-fade-up delay-${(idx % 3) * 100} rounded-3xl border border-blue-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8ECF3] text-burgundy">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0112 20.055a12.083 12.083 0 01-6.16-9.477L12 14zm0 0v6" />
                    </svg>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                  <p className="text-[#0a192f]/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative w-full bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/news3.png')" }}>
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply backdrop-blur-[2px]"></div>

          <section className="relative z-10 flex w-full items-center justify-center py-24">
            <div className="reveal reveal-fade-up flex w-full max-w-4xl flex-col items-center px-8 text-center text-white">
              <h2 className="mb-6 text-4xl font-bold drop-shadow-md md:text-5xl">{dict.cta?.title}</h2>
              <p className="mb-8 max-w-3xl text-xl font-light leading-relaxed text-white/90 drop-shadow-sm">
                {dict.cta?.desc}
              </p>
              <div className="flex w-full flex-col justify-center gap-5 sm:flex-row">
                <a
                  href={`/${dict.lang}/services`}
                  className="flex items-center justify-center rounded-2xl bg-burgundy px-8 py-4 text-lg font-bold text-white shadow-2xl transition hover:bg-burgundy-light hover:shadow-burgundy/50"
                >
                  {dict.cta?.btn_ai}
                </a>
                <a
                  href={`/${dict.lang}/questions`}
                  className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  {dict.cta?.btn_lib}
                </a>
              </div>
            </div>
          </section>

          <section className="relative z-10 flex w-full flex-col items-center overflow-hidden pb-24 text-white">
            <div className="absolute -mr-40 -mt-40 right-0 top-0 h-[500px] w-[500px] rounded-full bg-burgundy opacity-20 blur-[150px] pointer-events-none"></div>
            <div className="flex w-full max-w-7xl flex-col px-8">
              <h2 className="reveal reveal-fade-down relative z-10 mb-12 text-center text-4xl font-bold drop-shadow-md">
                {dict.features?.title}
              </h2>
              <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`reveal reveal-fade-up delay-${idx * 100} rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-sm transition hover:bg-white/10`}
                  >
                    <div className="mb-6 text-burgundy">
                      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
                    <p className="text-white/80">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <a
                  href={`/${dict.lang}/citizenship`}
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                  {(dict as any).team?.view_all ?? "Explore All Benefits"}
                </a>
              </div>
            </div>
          </section>
        </div>

        <section className="flex w-full flex-col items-center border-b border-blue-50 bg-white py-24 text-navy">
          <div className="flex w-full max-w-7xl flex-col px-8">
            <div className="reveal reveal-slide-left mb-12 flex flex-col justify-between md:flex-row md:items-end">
              <div>
                <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-burgundy">
                  {dict.services?.tag}
                </span>
                <h2 className="text-4xl font-bold text-navy">{dict.services?.title}</h2>
              </div>
              <a
                href={`/${dict.lang}/services`}
                className="mt-4 flex items-center text-sm font-bold uppercase text-burgundy transition hover:text-burgundy-light md:mt-0"
              >
                {dict.services?.view_all} <span className="ml-2">→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <a
                  key={service.title}
                  href={`/${dict.lang}/services#${investmentAnchors[idx] ?? investmentAnchors[0]}`}
                  className={`reveal reveal-fade-up delay-${(idx % 3) * 100} group flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm transition hover:shadow-xl hover:border-blue-200`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E8ECF3] transition-transform group-hover:scale-110">
                    <svg className="h-8 w-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="mb-2 text-xl font-bold text-navy">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-[#0a192f]/65">{service.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>


        <section
          id="sss"
          className="flex w-full flex-col items-center bg-[#E8ECF3] py-24 text-navy"
        >
          <div className="reveal reveal-scale-in flex w-full max-w-4xl flex-col items-center px-8">
            <span className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-burgundy">
              {dict.faq?.tag}
            </span>
            <h2 className="mb-12 text-center text-4xl font-bold">{dict.faq?.title}</h2>
            <div className="flex w-full flex-col space-y-4">
              {homeFaqs.map((faq, idx) => (
                <details key={idx} className="group cursor-pointer rounded-2xl bg-white border border-blue-100">
                  <summary className="list-none border-blue-100 p-6 font-bold text-[#0a192f] focus:outline-none group-open:border-b [&::-webkit-details-marker]:hidden">
                    <div className="flex items-center justify-between">
                      {faq.q}
                      <span className="text-2xl text-burgundy transition-transform group-open:rotate-45">+</span>
                    </div>
                  </summary>
                  <p className="rounded-b-2xl border-x border-b border-blue-100 bg-[#E8ECF3]/40 p-6 leading-relaxed text-[#0a192f]/70">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
            <a
              href={`/${dict.lang}/questions`}
              className="mt-10 flex items-center text-sm font-bold uppercase text-burgundy transition hover:text-burgundy-light"
            >
              {dict.faq?.view_all} <span className="ml-2">→</span>
            </a>
          </div>
        </section>

        <NewsletterSection dict={dict.newsletter} formCopy={dict.question_form} lang={dict.lang} />
      </main>
      <ConsentBanner lang={dict.lang} copy={dict.consent_banner} />
    </>
  );
}
