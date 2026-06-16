import { getDictionary } from "@/lib/dictionary";

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

const TEAM = [
  { name: "Av. Necmettin Barman",        title: "Kurucu Avukat",        langs: "EN · AR", phone: "+90 532 449 47 28", initials: "NB" },
  { name: "Av. Nurten İnan",             title: "Avukat",               langs: "EN",       phone: "+90 532 449 47 28", initials: "Nİ" },
  { name: "Av. Ceyda Selin Gündüz",      title: "Avukat",               langs: "EN · DE · FR", phone: "+90 532 449 47 28", initials: "CG" },
  { name: "Av. Cankut Aydemir",          title: "Avukat",               langs: "EN",       phone: "+90 532 449 47 28", initials: "CA" },
  { name: "Ariadna Tülay",               title: "Tercüman",             langs: "RU · EN",  phone: "+90 532 449 47 28", initials: "AT" },
  { name: "Fatima Zahraa Sekkaki",       title: "Tercüman",             langs: "AR · EN · FR", phone: "+90 532 449 47 28", initials: "FS" },
  { name: "Madina Fıdun",                title: "Tercüman",             langs: "RU",       phone: "+90 532 449 47 28", initials: "MF" },
  { name: "Mesut Salman",                title: "İş Takip Görevlisi",   langs: "EN",       phone: "+90 532 449 47 28", initials: "MS" },
  { name: "Abdullah Sağlam",             title: "İş Takip Görevlisi",   langs: "AR",       phone: "+90 532 449 47 28", initials: "AS" },
  { name: "Selda Akkaya",                title: "Mali Müşavir",         langs: "",         phone: "+90 532 449 47 28", initials: "SA" },
  { name: "Mürüvet Kazıcı",              title: "Muhasebe",             langs: "",         phone: "+90 532 449 47 28", initials: "MK" },
];

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
        className="relative min-h-[75vh]"
        id="about-hero"
        style={{ background: "linear-gradient(135deg, #EEF2F8 0%, #F5F8FD 50%, #EBF0F8 100%)" }}
      >
        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(#0a192f 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Right burgundy wash — lighter */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 80% 50%, rgba(138,28,28,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-36 sm:px-6 lg:flex-row lg:items-center lg:pb-0 lg:px-8">
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
      <section className="bg-white py-24 lg:py-32" id="about-story">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
