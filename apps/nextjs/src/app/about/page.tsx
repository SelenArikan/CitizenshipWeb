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
  { name: "Av. Necmettin Barman",        title: "Kurucu Avukat",        langs: "EN · AR", initials: "NB", founder: true },
  { name: "Büşra Barman",                title: "Genel Müdür",          langs: "",         initials: "BB", founder: true },
  { name: "Av. Nurten İnan",             title: "Avukat",               langs: "EN",       initials: "Nİ" },
  { name: "Av. Hafsa Nur Osmani Damar",  title: "Avukat",               langs: "EN",       initials: "HN" },
  { name: "Av. Ceyda Selin Şentürk",    title: "Avukat",               langs: "EN · DE · FR", initials: "CS" },
  { name: "Stj. Av. Ömer Faruk Şimsek", title: "Stajyer Avukat",       langs: "",         initials: "ÖF" },
  { name: "Natali Cenker",               title: "Tercüman",             langs: "RU · EN",  initials: "NC" },
  { name: "Ariadna Tülay",               title: "Tercüman",             langs: "RU · EN",  initials: "AT" },
  { name: "Madina Fidun",                title: "Tercüman",             langs: "RU",       initials: "MF" },
  { name: "Zeynep Genç",                 title: "Tercüman",             langs: "AR",       initials: "ZG" },
  { name: "Merve Genç",                  title: "Tercüman",             langs: "AR",       initials: "MG" },
  { name: "Mürüvet Kazıcı",              title: "Muhasebe",             langs: "",         initials: "MK" },
  { name: "Abdullah Sağlam",             title: "İş Takip Görevlisi",   langs: "",         initials: "AS" },
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
      <section className="relative min-h-[75vh] bg-[#0a192f]" id="about-hero">
        {/* Noise-like grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Right burgundy wash */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 80% 50%, rgba(138,28,28,0.22) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-4 pb-20 pt-36 sm:px-6 lg:flex-row lg:items-center lg:pb-0 lg:px-8">
          {/* Left: text */}
          <div className="flex-1 lg:pr-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8a1c1c]/40 bg-[#8a1c1c]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e05a5a]" />
              {d.hero_tag ?? "Hakkımızda"}
            </span>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {d.hero_title ?? "Biz"}&nbsp;
              <span
                style={{
                  WebkitTextStroke: "2px #8a1c1c",
                  color: "transparent",
                }}
              >
                {lang === "tr" ? "Kimiz" : lang === "en" ? "Who" : lang === "ar" ? "من نحن" : lang === "fa" ? "کی‌ایم" : "Кто мы"}
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
              {d.story_p1 ?? "CitizenshipWeb, 2013 yılından bu yana Türkiye vatandaşlık hukuku alanında saygın bir danışmanlık firmasıdır."}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center backdrop-blur-sm">
                  <p className="text-2xl font-extrabold text-[#e05a5a]">{s.num}</p>
                  <p className="mt-0.5 text-xs font-semibold text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: decorative vertical line + quote card */}
          <div className="mt-12 flex-shrink-0 lg:mt-0 lg:w-80">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              {/* Red top bar */}
              <div className="mb-5 h-1 w-12 rounded-full bg-[#8a1c1c]" />
              <p className="text-base leading-relaxed text-gray-300 italic">
                "Müvekkillerimizin vatandaşlık süreçlerini en verimli ve hızlı şekilde sonuçlandırmak amacıyla uzmanlaşmış departmanlarla çalışıyoruz."
              </p>
              <p className="mt-5 text-sm font-bold text-white">Av. Necmettin Barman</p>
              <p className="text-xs text-[#e05a5a]">Kurucu Avukat</p>
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
          VALUES — dark with large numbers
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0a192f] py-24 lg:py-32" id="about-values">
        {/* Subtle diagonal lines bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-start lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#e05a5a]">
                {d.values_tag ?? "Değerlerimiz"}
              </span>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                {d.values_title ?? "Çalışma Felsefemiz"}
              </h2>
            </div>
          </div>

          <div className="grid gap-px lg:grid-cols-3" style={{ background: "rgba(255,255,255,0.07)" }}>
            {values.map((val, idx) => (
              <div
                key={val.title}
                className="reveal reveal-fade-up group relative flex flex-col bg-[#0a192f] p-10 transition hover:bg-[#0e2240]"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Large index number */}
                <span
                  className="mb-6 block font-extrabold leading-none select-none"
                  style={{
                    fontSize: "clamp(4rem,8vw,7rem)",
                    WebkitTextStroke: "2px rgba(180,40,40,0.65)",
                    color: "rgba(138,28,28,0.12)",
                    lineHeight: 1,
                  }}
                >
                  0{idx + 1}
                </span>
                {/* Icon */}
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#8a1c1c]/20 text-[#e05a5a]">
                  {VALUE_CONFIG[idx]?.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{val.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{val.desc}</p>
                {/* Bottom accent line */}
                <div className="mt-auto pt-8">
                  <div className="h-px w-0 bg-[#8a1c1c] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TEAM
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#f8f9fc] py-24 lg:py-32" id="about-team">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
              {d.team_tag ?? "Ekibimiz"}
            </span>
            <h2 className="text-4xl font-extrabold text-[#0a192f] sm:text-5xl">
              {d.team_title ?? "Her Adımda Uzman Kadromuz"}
            </h2>
          </div>

          {/* Founders — 2-col large cards */}
          <div className="mb-10 grid gap-6 sm:grid-cols-2">
            {TEAM.filter((m) => m.founder).map((m) => (
              <div
                key={m.name}
                className="reveal reveal-fade-up group relative overflow-hidden rounded-3xl bg-[#0a192f] p-8 shadow-xl"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                  style={{ background: "radial-gradient(circle at 30% 50%, rgba(138,28,28,0.25) 0%, transparent 60%)" }}
                />
                <div className="relative flex items-center gap-6">
                  {/* Avatar */}
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-2xl font-extrabold text-white"
                    style={{ background: "linear-gradient(135deg,#8a1c1c,#c0392b)" }}
                  >
                    {m.initials}
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">{m.name}</p>
                    <p className="mt-1 text-sm font-semibold text-[#e05a5a]">{m.title}</p>
                    {m.langs && (
                      <span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-0.5 text-xs font-bold text-gray-300">
                        {m.langs}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rest — masonry-style 4-col grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TEAM.filter((m) => !m.founder).map((m, idx) => (
              <div
                key={m.name}
                className="reveal reveal-fade-up group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#8a1c1c]/30 hover:shadow-lg"
                style={{ transitionDelay: `${(idx % 4) * 60}ms` }}
              >
                {/* Color strip top */}
                <div className="mb-5 h-1 w-8 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-14 group-hover:bg-[#8a1c1c]" />
                {/* Initials */}
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl font-bold text-white text-sm transition-all duration-300"
                  style={{ background: "linear-gradient(135deg,#0a192f,#1a3a5c)" }}
                >
                  {m.initials}
                </div>
                <p className="font-bold text-[#0a192f] text-sm leading-snug">{m.name}</p>
                <p className="mt-0.5 text-xs text-gray-500">{m.title}</p>
                {m.langs && (
                  <span className="mt-3 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500 transition group-hover:bg-[#fef2f2] group-hover:text-[#8a1c1c]">
                    {m.langs}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — full-bleed dark with diagonal cut
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#0a192f] py-24" id="about-cta">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(138,28,28,0.2) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {d.cta_title ?? "Dosyanızı Bizimle Başlatın"}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">{d.cta_desc}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`/${lang}/contact`}
              className="inline-block rounded-full bg-[#8a1c1c] px-10 py-4 text-base font-bold text-white shadow-lg transition hover:bg-[#a32222] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(138,28,28,0.4)]"
            >
              {d.cta_btn ?? "Ücretsiz Ön Değerlendirme"}
            </a>
            <a
              href={`/${lang}/questions`}
              className="inline-block rounded-full border border-white/20 px-10 py-4 text-base font-bold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              {lang === "tr" ? "SSS" : lang === "en" ? "FAQ" : lang === "ru" ? "FAQ" : "SSS"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
