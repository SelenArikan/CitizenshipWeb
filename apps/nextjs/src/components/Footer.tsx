import Image from "next/image";
import Link from "next/link";

type FooterCopy = {
  desc?: string;
  col1?: string;
  col2?: string;
  col3?: string;
  home?: string;
  about?: string;
  services?: string;
  investments?: string;
  benefits?: string;
  knowledge?: string;
  news?: string;
  faq?: string;
  contact?: string;
  privacy?: string;
  location_title?: string;
  address_line_1?: string;
  address_line_2?: string;
  phone_label?: string;
  email_label?: string;
  hours_title?: string;
  hours_weekdays?: string;
  hours_weekend?: string;
  map_button?: string;
  rights?: string;
};

export default function Footer({ dict, lang }: { dict?: FooterCopy; lang?: string }) {
  const safeDict = dict || {
    desc: "Dünya çapında vatandaşlık ve göçmenlik hedefleriniz için güvenilir danışmanlık.",
    col1: "Site Haritası",
    col2: "Destek",
    col3: "İletişim",
    home: "Anasayfa",
    about: "Biz Kimiz",
    services: "Yatırım Türleri",
    benefits: "Vatandaşlık Süreci",
    knowledge: "Bilgi Bankası",
    news: "Haberler",
    faq: "SSS",
    contact: "İletişim",
    privacy: "Gizlilik Politikası",
    location_title: "Ofis Konumu",
    address_line_1: "Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2",
    address_line_2: "GINZA PLAZA, 34015 Zeytinburnu / İstanbul",
    phone_label: "Telefon",
    email_label: "E-posta",
    hours_title: "Çalışma Saatleri",
    hours_weekdays: "Pazartesi - Cuma: 08:30 - 18:00",
    hours_weekend: "Cumartesi - Pazar: Kapalı",
    map_button: "Haritada Gör",
    rights: "Tüm Hakları Saklıdır.",
  };
  const safeLang = lang || "tr";
  const isRtl = safeLang === "ar" || safeLang === "fa";
  const mapQuery = encodeURIComponent(
    "Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2 GINZA PLAZA, 34015 Zeytinburnu, Istanbul"
  );
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`;
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  const mainLinks: { href: string; label: string }[] = [
    { href: `/${safeLang}`, label: safeDict.home ?? "Home" },
    { href: `/${safeLang}/about`, label: safeDict.about ?? "About" },
    { href: `/${safeLang}/services`, label: safeDict.services ?? "Services" },
    { href: `/${safeLang}/citizenship`, label: safeDict.benefits ?? "Citizenship" },
    { href: `/${safeLang}/knowledge`, label: safeDict.knowledge ?? "Knowledge" },
    { href: `/${safeLang}/news`, label: safeDict.news ?? "News" },
  ];

  return (
    <footer className="relative z-20 mt-auto border-t border-[rgba(255,255,255,0.1)] bg-[#0a192f] py-10 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-1">
            <Link href={`/${safeLang}`} className="mb-4 block max-w-xs">
              <Image
                src="/logo/necmettin-barman-logo.png"
                alt="CITIZENSHIP LAW FIRM — Necmettin Barman & Associates — Attorneys at Law"
                width={1024}
                height={273}
                className="h-auto w-full max-h-20 bg-transparent object-contain object-left"
                unoptimized
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">{safeDict.desc}</p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">{safeDict.col1}</h4>
            <ul className="space-y-2.5 text-sm">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 transition no-underline hover:text-white visited:text-gray-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">{safeDict.col2}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={`/${safeLang}/questions`}
                  className="text-gray-300 transition no-underline hover:text-white visited:text-gray-300"
                >
                  {safeDict.faq}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${safeLang}/contact`}
                  className="text-gray-300 transition no-underline hover:text-white visited:text-gray-300"
                >
                  {safeDict.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${safeLang}/privacy`}
                  className="text-gray-300 transition no-underline hover:text-white visited:text-gray-300"
                >
                  {safeDict.privacy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">{safeDict.col3}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+905324494728" className="text-gray-400 transition hover:text-white" dir="ltr">
                  +90 532 449 47 28
                </a>
              </div>
              <div className="flex items-start gap-2">
                <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@turkeyinvestmentcitizenship.com" className="break-all text-gray-400 transition hover:text-white" dir="ltr">
                  info@turkeyinvestmentcitizenship.com
                </a>
              </div>
              {safeDict.hours_weekdays && (
                <div className="flex items-start gap-2">
                  <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-400">
                    <p>{safeDict.hours_weekdays}</p>
                    {safeDict.hours_weekend && <p>{safeDict.hours_weekend}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-2 flex items-center justify-between gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">{safeDict.location_title}</h4>
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="shrink-0 rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                {safeDict.map_button ?? "Open Map"}
              </a>
            </div>
            <p className="mb-2 text-xs leading-snug text-gray-500" dir={isRtl ? "rtl" : "ltr"}>
              {safeDict.address_line_1}
              <br />
              {safeDict.address_line_2}
            </p>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Office map"
                src={mapEmbedUrl}
                loading="lazy"
                className="h-36 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(255,255,255,0.05)] pt-6 text-center text-sm text-gray-500">
          © 2026 Necmettin Barman & Associates. {safeDict.rights}
        </div>
      </div>
    </footer>
  );
}
