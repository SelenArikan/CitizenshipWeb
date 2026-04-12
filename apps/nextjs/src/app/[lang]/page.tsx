import type { Metadata } from "next";
import Image from "next/image";
import TimelineSection from "@/components/TimelineSection";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import ConsentBanner from "@/components/ConsentBanner";
import { JsonLd } from "@/components/JsonLd";
import { getDictionary } from "@/lib/dictionary";
import { buildPageMetadata } from "@/lib/seo";
import { buildHomeSchemas } from "@/lib/structured-data";

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
  const schemas = buildHomeSchemas(resolvedParams.lang, faqs);

  return (
    <>
      <JsonLd data={schemas} />
      <main className="flex flex-col items-center w-full min-h-screen">
        <ScrollRevealWrapper />
        {/* Hero Section */}
        <section 
          className="relative w-full h-[700px] flex items-center justify-center bg-navy text-white overflow-hidden"
          style={{ backgroundImage: "url('/hero.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-navy/70 z-0"></div>
          <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl pt-10 reveal reveal-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-xl">
              {dict.hero.title_1}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                {dict.hero.title_2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md">
              {dict.hero.desc}
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-burgundy hover:bg-burgundy-light transition rounded-full font-medium text-white shadow-lg">
                {dict.hero.btn_primary}
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition rounded-full font-medium text-white border border-white/30">
                {dict.hero.btn_secondary}
              </button>
            </div>
          </div>
        </section>
      
      {/* Sayılarla Biz (Numbers/Stats Block) */}
      <section className="w-full py-20 bg-navy text-white flex justify-center border-t border-glass-border-dark relative z-20">
        <div className="max-w-7xl w-full px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center p-4 reveal reveal-fade-up delay-${idx * 100}`}>
              <span className="text-5xl font-bold mb-2 text-burgundy">{stat.num}</span>
              <span className="text-sm uppercase tracking-widest text-gray-400 font-bold mt-2">{stat.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Biz Kimiz (Who Are We) */}
      <section className="w-full py-24 bg-white text-navy flex justify-center border-b border-gray-100">
         <div className="max-w-7xl w-full px-8 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 flex flex-col reveal reveal-slide-left">
               <span className="text-burgundy font-bold uppercase tracking-wider mb-2 text-sm">{dict.about?.tag}</span>
               <h2 className="text-4xl font-bold mb-6">{dict.about?.title}</h2>
               <p className="text-gray-600 text-lg mb-6 leading-relaxed">{dict.about?.p1}</p>
               <p className="text-gray-600 text-lg mb-8 leading-relaxed">{dict.about?.p2}</p>
            </div>
            <div className="w-full md:w-1/2 relative h-[450px] rounded-3xl overflow-hidden shadow-xl group reveal reveal-scale-in delay-200">
               <Image src="/news2.png" alt="Our Team" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
         </div>
      </section>

      {/* COMBINED PARALLAX SECTION: Image Background CTA + Why Choose Us */}
      <div 
        className="w-full relative bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/news3.png')" }}
      >
        {/* Combined Dark Overlay */}
        <div className="absolute inset-0 bg-navy/90 mix-blend-multiply backdrop-blur-[2px]"></div>
        
        {/* Top Half: AI / Knowledge Base CTA */}
        <section className="w-full py-24 flex items-center justify-center relative z-10">
          <div className="max-w-4xl w-full px-8 flex flex-col items-center text-center text-white reveal reveal-fade-up">
           <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">{dict.cta?.title}</h2>
           <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-3xl drop-shadow-sm">
             {dict.cta?.desc}
           </p>
           <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
             <button className="px-8 py-4 bg-burgundy hover:bg-burgundy-light rounded-2xl font-bold transition shadow-2xl hover:shadow-burgundy/50 text-white flex items-center justify-center text-lg">
                {dict.cta?.btn_ai}
             </button>
             <a href={`/${dict.lang}/knowledge`} className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl font-bold transition border border-white/20 text-white flex items-center justify-center text-lg">
                {dict.cta?.btn_lib}
             </a>
           </div>
          </div>
        </section>

        {/* Bottom Half: Neden Bizi Tercih Etmelisiniz? (Why Choose Us) */}
        <section className="w-full pb-24 text-white flex flex-col items-center relative z-10 overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burgundy rounded-full blur-[150px] opacity-20 pointer-events-none -mr-40 -mt-40"></div>
         <div className="max-w-7xl w-full px-8 flex flex-col">
            <h2 className="text-4xl font-bold mb-12 text-center drop-shadow-md relative z-10 reveal reveal-fade-down">{dict.features?.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
               {features.map((feature, idx) => (
                 <div key={idx} className={`bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition shadow-xl reveal reveal-fade-up delay-${idx * 100}`}>
                    <div className="text-burgundy mb-6">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                 </div>
               ))}
            </div>
         </div>
        </section>
      </div>

      {/* NEW: Hizmetlerimiz (Our Services Cards) */}
      <section className="w-full py-24 bg-[#f4f6f8] text-navy flex flex-col items-center border-b border-gray-200">
         <div className="max-w-7xl w-full px-8 flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal reveal-slide-left">
               <div>
                  <span className="text-burgundy font-bold uppercase tracking-wider mb-2 text-sm block">{dict.services?.tag}</span>
                  <h2 className="text-4xl font-bold text-navy">{dict.services?.title}</h2>
               </div>
               <a href={`/${dict.lang}/services`} className="text-burgundy font-bold flex items-center hover:text-burgundy-light transition uppercase text-sm mt-4 md:mt-0">{dict.services?.view_all} <span className="ml-2">→</span></a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s, idx) => (
                  <div key={idx} className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition flex gap-4 items-start border border-gray-100 group reveal reveal-fade-up delay-${(idx % 3) * 100}`}>
                     <div className="bg-[#f4f6f8] w-14 h-14 shrink-0 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                     </div>
                     <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                     </div>
                  </div>
                ))}
            </div>
         </div>
      </section>

      {/* Advanced Animated Timeline */}
      <TimelineSection dict={dict.timeline} />

      {/* Sıkça Sorulan Sorular */}
      <section className="w-full py-24 bg-white text-navy flex flex-col items-center">
         <div className="max-w-4xl w-full px-8 flex flex-col items-center reveal reveal-scale-in">
            <span className="text-burgundy font-bold uppercase tracking-wider mb-2 text-sm text-center">{dict.faq?.tag}</span>
            <h2 className="text-4xl font-bold mb-12 text-center">{dict.faq?.title}</h2>
            <div className="w-full flex flex-col space-y-4">
               {faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-[#f4f6f8] rounded-2xl cursor-pointer">
                     <summary className="flex justify-between items-center font-bold text-navy p-6 group-open:border-b border-gray-200 focus:outline-none list-none [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <span className="text-burgundy transition-transform group-open:rotate-45 text-2xl">+</span>
                     </summary>
                     <p className="text-gray-600 p-6 leading-relaxed bg-white rounded-b-2xl border-x border-b border-[#f4f6f8]">
                        {faq.a}
                     </p>
                  </details>
               ))}
            </div>
            <a href={`/${dict.lang}/questions`} className="text-burgundy mt-10 font-bold flex items-center hover:text-burgundy-light transition uppercase text-sm">{dict.faq?.view_all} <span className="ml-2">→</span></a>
         </div>
      </section>

      {/* Advanced Animated Newsletter */}
      <NewsletterSection dict={dict.newsletter} formCopy={dict.question_form} lang={dict.lang} />

      </main>
      <ConsentBanner lang={dict.lang} copy={dict.consent_banner} />
    </>
  );
}
