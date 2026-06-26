import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

type AboutPageDict = {
  hero_tag?: string;
  hero_title?: string;
  story_tag?: string;
  story_title?: string;
  story_p1?: string;
  story_p2?: string;
  story_p3?: string;
  values_tag?: string;
  values_title?: string;
  values?: { title: string; desc: string }[];
  stats?: { num: string; label: string }[];
  team_tag?: string;
  team_title?: string;
  cta_title?: string;
  cta_desc?: string;
  cta_btn?: string;
};

interface TeamMember {
  name: string;
  title: string;
  langs: string;
  initials: string;
  phone?: string;
}

const TEAM: TeamMember[] = [
  { name: "Av. Necmettin Barman",        title: "Kurucu Avukat",        langs: "EN · AR", initials: "NB" },
  { name: "Büşra Barman",                title: "Genel Müdür",          langs: "",        initials: "BB" },
  { name: "Av. Nurten İnan",             title: "Avukat",               langs: "EN",       initials: "Nİ" },
  { name: "Av. Ceyda Selin Gündüz",      title: "Avukat",               langs: "EN · DE · FR", initials: "CG" },
  { name: "Av. Cankut Aydemir",          title: "Avukat",               langs: "EN",       initials: "CA" },
  { name: "Ariadna Tülay",               title: "Tercüman",             langs: "RU · EN",  initials: "AT" },
  { name: "Fatima Zahraa Sekkaki",       title: "Tercüman",             langs: "AR · EN · FR", initials: "FS" },
  { name: "Madina Fıdun",                title: "Tercüman",             langs: "RU",       initials: "MF" },
  { name: "Mesut Salman",                title: "İş Takip Görevlisi",   langs: "EN",       initials: "MS" },
  { name: "Abdullah Sağlam",             title: "İş Takip Görevlisi",   langs: "AR",       initials: "AS" },
  { name: "Selda Akkaya",                title: "Mali Müşavir",         langs: "",         initials: "SA" },
  { name: "Mürüvet Kazıcı",              title: "Muhasebe",             langs: "",         initials: "MK" },
  { name: "Fatma Odabaş",                title: "Hukuk Asistanı",       langs: "",         initials: "FO" },
  { name: "Eren Memiş",                  title: "IT Uzmanı",            langs: "",         initials: "EM" },
  { name: "Talip Sağlam",                title: "Ulaşım Sorumlusu",     langs: "",         initials: "TS" },
];

const CONTACT_LINES = {
  tr: [
    { label: "Kurucu Avukat Necmettin Barman (Arapça, Türkçe)", phone: "+90 532 175 18 29", info: "" },
    { label: "Rusça İrtibat Hattı", phone: "+90 535 245 14 55", info: "Ariadna Tülay" },
    { label: "Arapça İrtibat Hattı", phone: "+90 532 449 47 28", info: "Fatima Zahraa Sekkaki" },
    { label: "Türkçe İrtibat Hattı", phone: "+90 532 175 18 29", info: "Av. Necmettin Barman" },
    { label: "İngilizce İrtibat Hattı", phone: "+90 530 153 10 41", info: "Av. Ceyda Selin Gündüz" },
  ],
  en: [
    { label: "Founding Atty. Necmettin Barman (Arabic, Turkish)", phone: "+90 532 175 18 29", info: "" },
    { label: "Russian Hotline", phone: "+90 535 245 14 55", info: "Ariadna Tülay" },
    { label: "Arabic Hotline", phone: "+90 532 449 47 28", info: "Fatima Zahraa Sekkaki" },
    { label: "Turkish Hotline", phone: "+90 532 175 18 29", info: "Atty. Necmettin Barman" },
    { label: "English Hotline", phone: "+90 530 153 10 41", info: "Atty. Ceyda Selin Gündüz" },
  ],
  ru: [
    { label: "Учредитель Некметтин Барман (арабский, турецкий)", phone: "+90 532 175 18 29", info: "" },
    { label: "Горячая линия на русском", phone: "+90 535 245 14 55", info: "Ариадна Тюлай" },
    { label: "Горячая линия на арабском", phone: "+90 532 449 47 28", info: "Фатима Захра Секкаки" },
    { label: "Горячая линия на турецком", phone: "+90 532 175 18 29", info: "Адв. Некметтин Барман" },
    { label: "Горячая линия на английском", phone: "+90 530 153 10 41", info: "Адв. Джейда Селин Гюндюз" },
  ],
  ar: [
    { label: "المحامي المؤسس نجم الدين بارمان (العربية، التركية)", phone: "+90 532 175 18 29", info: "" },
    { label: "خط الاتصال بالروسية", phone: "+90 535 245 14 55", info: "أريادنا تولاي" },
    { label: "خط الاتصال بالعربية", phone: "+90 532 449 47 28", info: "فاطمة الزهراء سكاكي" },
    { label: "خط الاتصال بالتركية", phone: "+90 532 175 18 29", info: "المحامي نجم الدين بارمان" },
    { label: "خط الاتصال بالإنجليزية", phone: "+90 530 153 10 41", info: "المحامية جيدة سيلين غوندوز" },
  ],
  fa: [
    { label: "وکیل مؤسس نجم‌الدین بارمان (عربی، ترکی)", phone: "+90 532 175 18 29", info: "" },
    { label: "خط ارتباطی روسی", phone: "+90 535 245 14 55", info: "آریادنا تولای" },
    { label: "خط ارتباطی عربی", phone: "+90 532 449 47 28", info: "فاطمه زهرا سکاکی" },
    { label: "خط ارتباطی ترکی", phone: "+90 532 175 18 29", info: "وکیل نجم‌الدین بارمان" },
    { label: "خط ارتباطی انگلیسی", phone: "+90 530 153 10 41", info: "وکیل جیدا سلین گوندوز" },
  ],
};

const VALUE_CONFIG = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default async function AboutPageContent({ lang }: { lang: string }) {
  const dict = await getDictionary(lang);
  const d: AboutPageDict = (dict as any).about_page ?? {};
  const isRtl = dict.dir === "rtl";

  const values = d.values ?? [
    { title: "Şeffaflık", desc: "Müvekkillerimizle şeffaf ve güçlü bir iletişim kurarız." },
    { title: "Güvenilirlik", desc: "Her adımda müvekkillerimizin yanında, güvenle hizmet veririz." },
    { title: "Ekip Çalışması", desc: "Uzman ekibimiz her süreçte titizlikle çalışır." },
  ];
  const stats = d.stats ?? [
    { num: "2013", label: "Kuruluş" },
    { num: "13", label: "Uzman" },
    { num: "1000+", label: "Dosya" },
    { num: "5", label: "Dil" },
  ];

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="overflow-hidden">

      {/* ══════════════════════════════════════════════════
          HERO — split layout
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[75vh] overflow-hidden"
        id="about-hero"
        style={{ background: "linear-gradient(135deg, #EEF2F8 0%, #F5F8FD 50%, #EBF0F8 100%)" }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover pointer-events-none z-0"
        >
          <source src="/hero/Plan_Sekans_Ofis_v2.mp4" type="video/mp4" />
        </video>

        {/* Light Overlay for Text Readability */}
        <div
          className="pointer-events-none absolute inset-0 bg-[#EEF2F8]/40 backdrop-blur-[1px] z-0"
          aria-hidden="true"
        />

        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] z-10"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(#0a192f 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Right burgundy wash — lighter */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 80% 50%, rgba(138,28,28,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-36 sm:px-6 lg:flex-row lg:items-center lg:pb-0 lg:px-8 z-20">
          {/* Left: text */}
          <div className="flex-1 lg:pr-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8a1c1c]/30 bg-[#8a1c1c]/8 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8a1c1c]" />
              {d.hero_tag ?? "Hakkımızda"}
            </span>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.1] text-[#0a192f] sm:text-6xl md:text-7xl lg:text-8xl">
              {lang === "tr" ? "Ekibimiz" : lang === "en" ? "Our Team" : lang === "ru" ? "Наша команда" : lang === "ar" ? "فريقنا" : "تیم ما"}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0a192f]/60">
              {d.story_p1 ?? "CitizenshipWeb, 2013 yılından bu yana Türkiye vatandaşlık hukuku alanında saygın bir danışmanlık firmasıdır."}
            </p>

          </div>

          {/* Right: quote card */}
          <div className="mt-12 flex-shrink-0 lg:mt-0 lg:w-80">
            <div className="relative rounded-3xl border border-[#0a192f]/10 bg-white/70 p-8 shadow-md backdrop-blur-md">
              <div className="mb-5 h-1 w-12 rounded-full bg-[#8a1c1c]" />
              <p className="text-base leading-relaxed text-[#0a192f]/70 italic">
                "Müvekkillerimizin vatandaşlık süreçlerini en verimli ve hızlı şekilde sonuçlandırmak amacıyla uzmanlaşmış departmanlarla çalışıyoruz."
              </p>
              <p className="mt-5 text-sm font-bold text-[#0a192f]">Av. Necmettin Barman</p>
              <p className="text-xs text-[#8a1c1c]">Kurucu Avukat</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STORY — timeline-style
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden" id="about-story">
        {/* Background shadow image */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/team/story-bg.jpeg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.15] pointer-events-none"
            unoptimized
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
            {/* Left sticky header */}
            <div className="lg:sticky lg:top-28">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                {d.story_tag ?? "Hikayemiz"}
              </span>
              <h2 className="text-4xl font-extrabold leading-tight text-[#0a192f] sm:text-5xl">
                {d.story_title ?? "2013'ten Bugüne Güvenilir Danışmanlık"}
              </h2>
              <div className="mt-6 h-1 w-16 rounded-full bg-[#8a1c1c]" />
            </div>

            {/* Right paragraphs with vertical accent */}
            <div className="relative space-y-8 border-l-2 border-gray-100 pl-8">
              {[d.story_p1, d.story_p2, d.story_p3].filter(Boolean).map((para, i) => (
                <div key={i} className="relative">
                  {/* dot */}
                  <span
                    className="absolute -left-[calc(2rem+1px)] flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#8a1c1c] bg-white"
                    aria-hidden="true"
                  />
                  <p className="text-base leading-relaxed text-gray-600">{para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════
          TEAM
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32 border-t border-gray-100" id="about-team">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {d.team_tag ?? "Ekibimiz"}
            </span>
            <h2 className="text-4xl font-extrabold text-[#0a192f] sm:text-5xl">
              {d.team_title ?? "Her Adımda Uzman Kadromuz"}
            </h2>
          </div>

          {/* Simplified Side-by-Side Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
            {TEAM.map((m, idx) => (
              <div
                key={m.name}
                className="reveal reveal-fade-up flex flex-col items-center text-center group"
                style={{ transitionDelay: `${(idx % 5) * 50}ms` }}
              >
                <p className="font-bold text-[#0a192f] text-base leading-snug">{m.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#8a1c1c]">{m.title}</p>
                
                {/* Languages */}
                {m.langs && (
                  <p className="mt-1 text-xs text-gray-500 font-medium">
                    {m.langs}
                  </p>
                )}
                
                {/* Phone */}
                {m.phone && (
                  <a
                    href={`tel:${m.phone.replace(/\s+/g, "")}`}
                    className="mt-1 flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#8a1c1c] transition-colors"
                  >
                    <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{m.phone}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* İrtibat Hatları / Hotline Lines Section */}
          <div className="mt-20 max-w-4xl mx-auto rounded-3xl border border-gray-100 bg-gray-50/50 p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-[#0a192f] text-center mb-8 flex items-center justify-center gap-2">
              <svg className="h-5 w-5 text-[#8a1c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {lang === "tr" ? "İrtibat Hatları" : lang === "en" ? "Hotlines" : lang === "ru" ? "Горячие линии" : lang === "ar" ? "خطوط الاتصال" : "خطوط ارتباطی"}
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {((CONTACT_LINES as any)[lang] || CONTACT_LINES.tr).map((line: any, idx: number) => (
                <div 
                  key={idx} 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-white bg-white shadow-sm hover:border-[#8a1c1c]/20 transition-all duration-200 ${idx === 0 ? 'sm:col-span-2 bg-[#8a1c1c]/5 border-[#8a1c1c]/10' : ''}`}
                >
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {line.label}
                    </p>
                    {line.info && (
                      <p className="text-sm font-semibold text-[#0a192f] mt-0.5">
                        {line.info}
                      </p>
                    )}
                  </div>
                  <a 
                    href={`tel:${line.phone.replace(/\s+/g, "")}`}
                    className="mt-2 sm:mt-0 inline-flex items-center gap-2 text-base font-bold text-[#8a1c1c] hover:text-[#a32222] transition-colors"
                  >
                    <span>{line.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — full-bleed dark with diagonal cut
      ══════════════════════════════════════════════════ */}
      <section
        className="relative py-24"
        id="about-cta"
        style={{ background: "linear-gradient(135deg, #F5F8FD 0%, #EEF2F8 60%, #E8EEF6 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,25,47,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(10,25,47,0.6) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(138,28,28,0.08) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-4xl font-extrabold leading-tight text-[#0a192f] sm:text-5xl">
            {d.cta_title ?? "Dosyanızı Bizimle Başlatın"}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-[#0a192f]/60">{d.cta_desc}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`/${lang}/contact`}
              className="inline-block rounded-full bg-[#8a1c1c] px-10 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#a32222] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(138,28,28,0.35)]"
            >
              {d.cta_btn ?? "Ücretsiz Ön Değerlendirme"}
            </a>
            <a
              href={`/${lang}/questions`}
              className="inline-block rounded-full border border-[#0a192f]/20 px-10 py-4 text-base font-bold text-[#0a192f] transition hover:border-[#8a1c1c] hover:bg-[#8a1c1c]/5"
            >
              {lang === "tr" ? "SSS" : lang === "en" ? "FAQ" : lang === "ru" ? "FAQ" : "SSS"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
