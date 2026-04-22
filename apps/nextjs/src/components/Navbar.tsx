"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "ar", label: "AR", name: "العربية" },
  { code: "fa", label: "FA", name: "فارسی" },
];

type NavCopy = {
  home?: string;
  services?: string;
  about?: string;
  about_company?: string;
  about_team?: string;
  investment?: string;
  investment_real_estate?: string;
  investment_deposit?: string;
  investment_employment?: string;
  investment_bonds?: string;
  investment_fund?: string;
  benefits?: string;
  knowledge?: string;
  faq?: string;
  contact?: string;
};

type MenuItem = { label: string; href: string };
type MenuEntry =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; key: string; items: MenuItem[] };

export default function Navbar({ dict, lang }: { dict: NavCopy; lang: string }) {
  const pathname = usePathname() || "/";
  const [langOpen, setLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const t = {
    home: dict?.home ?? "Ana Sayfa",
    services: dict?.services ?? "Hizmetler",
    about: dict?.about ?? "Hakkımızda",
    about_company: dict?.about_company ?? "Biz Kimiz",
    about_team: dict?.about_team ?? "Ekip",
    investment: dict?.investment ?? dict?.services ?? "Yatırım Türleri",
    investment_real_estate: dict?.investment_real_estate ?? "Gayrimenkul Yatırımı",
    investment_deposit: dict?.investment_deposit ?? "Mevduat Hesabı",
    investment_employment: dict?.investment_employment ?? "İstihdam Oluşturmak",
    investment_bonds: dict?.investment_bonds ?? "Devlet Borçlanma Araçları",
    investment_fund: dict?.investment_fund ?? "Gayrimenkul Yatırım Fonu",
    benefits: dict?.benefits ?? "Avantajlar",
    knowledge: dict?.knowledge ?? "Bilgi Bankası",
    faq: dict?.faq ?? "SSS",
    contact: dict?.contact ?? "İletişim",
  };

  const switchLang = (newLang: string) => {
    const segments = pathname.split("/");
    if (segments.length > 1 && segments[1]) segments[1] = newLang;
    return segments.join("/") || `/${newLang}`;
  };

  const isTr = lang === "tr";

  const menuEntries: MenuEntry[] = isTr
    ? [
        { type: "link", label: t.home, href: `/${lang}` },
        { type: "link", label: t.about, href: `/${lang}/about` },
        {
          type: "dropdown",
          label: t.investment,
          key: "investment",
          items: [
            { label: t.investment_real_estate, href: `/${lang}/services/gayrimenkul-yatirimi` },
            { label: t.investment_deposit, href: `/${lang}/services/mevduat-hesabi` },
            { label: t.investment_employment, href: `/${lang}/services/istihdam-olusturmak` },
            { label: t.investment_bonds, href: `/${lang}/services/devlet-borclanma-araclari` },
            { label: t.investment_fund, href: `/${lang}/services/gayrimenkul-yatirim-fonu` },
          ],
        },
        { type: "link", label: t.benefits, href: `/${lang}/citizenship` },
        { type: "link", label: t.faq, href: `/${lang}/questions` },
      ]
    : [
        { type: "link", label: t.home, href: `/${lang}` },
        { type: "link", label: t.about, href: `/${lang}/about` },
        { type: "link", label: t.services, href: `/${lang}/services` },
        { type: "link", label: t.benefits, href: `/${lang}/citizenship` },
        { type: "link", label: t.knowledge, href: `/${lang}/knowledge` },
      ];

  // Dropdown hover handlers with delay to prevent flicker
  const handleMouseEnter = (key: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveMenu(key);
  };
  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[rgba(255,255,255,0.1)] bg-[rgba(10,25,47,0.92)] text-white shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="shrink-0 text-2xl font-bold tracking-wider text-white">
            Citizenship<span className="text-[#a32222]">Web</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-5 lg:flex">
            {menuEntries.map((entry) => {
              if (entry.type === "link") {
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className="text-sm font-medium text-gray-300 transition hover:text-white"
                  >
                    {entry.label}
                  </Link>
                );
              }

              return (
                <div
                  key={entry.key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(entry.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveMenu((c) => (c === entry.key ? null : entry.key))}
                    className="flex items-center gap-1 text-sm font-medium text-gray-300 transition hover:text-white"
                  >
                    {entry.label}
                    <svg className={`h-4 w-4 transition-transform duration-200 ${activeMenu === entry.key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {activeMenu === entry.key && (
                    <div
                      className="absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-100 bg-white py-2 shadow-2xl"
                      onMouseEnter={() => handleMouseEnter(entry.key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="block px-5 py-3 text-sm font-semibold text-[#0a192f] transition hover:bg-gray-50 hover:text-[#8a1c1c]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href={`/${lang}/contact`}
              className="rounded-full bg-[#8a1c1c] px-6 py-2 text-sm font-bold shadow-lg transition hover:bg-[#a32222]"
            >
              {t.contact}
            </Link>

            {/* Language picker */}
            <div className="relative ml-1">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                onBlur={() => setTimeout(() => setLangOpen(false), 200)}
                className="flex items-center gap-1 text-sm font-bold text-white transition hover:text-gray-300"
              >
                {lang.toUpperCase()}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      href={switchLang(l.code)}
                      className="block px-4 py-2 text-center text-sm font-bold transition hover:bg-gray-50"
                      style={{ color: lang === l.code ? "#8a1c1c" : "#0a192f", backgroundColor: lang === l.code ? "rgba(254,242,242,0.5)" : "transparent" }}
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile: lang switcher + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Compact lang switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                onBlur={() => setTimeout(() => setLangOpen(false), 200)}
                className="flex items-center gap-1 text-sm font-bold text-white"
              >
                {lang.toUpperCase()}
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      href={switchLang(l.code)}
                      className="block px-4 py-2 text-center text-sm font-bold transition hover:bg-gray-50"
                      style={{ color: lang === l.code ? "#8a1c1c" : "#0a192f", backgroundColor: lang === l.code ? "rgba(254,242,242,0.5)" : "transparent" }}
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 transition hover:bg-white/20"
            >
              {mobileOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0a192f] px-4 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {menuEntries.map((entry) => {
              if (entry.type === "link") {
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
                  >
                    {entry.label}
                  </Link>
                );
              }

              return (
                <div key={entry.key}>
                  <button
                    type="button"
                    onClick={() => setMobileExpanded((c) => (c === entry.key ? null : entry.key))}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
                  >
                    {entry.label}
                    <svg className={`h-4 w-4 transition-transform ${mobileExpanded === entry.key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === entry.key && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-3 border-t border-white/10 pt-3">
              <Link
                href={`/${lang}/contact`}
                className="block rounded-full bg-[#8a1c1c] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#a32222]"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
