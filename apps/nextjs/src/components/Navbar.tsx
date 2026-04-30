"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

import enNav from "../generated/i18n/en.json";

const languages = [
  { code: "tr", label: "TR", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "EN", name: "English", flag: "🇬🇧" },
  { code: "ru", label: "RU", name: "Русский", flag: "🇷🇺" },
  { code: "ar", label: "AR", name: "العربية", flag: "🇸🇦" },
  { code: "fa", label: "FA", name: "فارسی", flag: "🇮🇷" },
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
  mega_tc?: string;
  mega_res?: string;
  mega_leg?: string;
  mega_h_invest?: string;
  mega_h_other?: string;
  item_cit_gen?: string;
  item_cit_marriage?: string;
  item_cit_passport?: string;
  mega_h_rtypes?: string;
  item_res_j?: string;
  item_res_re?: string;
  item_res_fam?: string;
  item_res_long?: string;
  mega_h_tax?: string;
  item_tax_exempt?: string;
  item_tax_deed?: string;
  item_tax_re?: string;
  item_tax_rent?: string;
  mega_h_law?: string;
  item_law_rent?: string;
  item_law_com?: string;
  item_law_inherit?: string;
  item_law_pop?: string;
  item_law_enf?: string;
  mega_h_more?: string;
  item_more_bank?: string;
  item_more_green?: string;
  nav_desc_400?: string;
  nav_desc_500?: string;
  nav_desc_emp?: string;
};

type SubItem = { label: string; href: string; desc?: string };
type SubGroup = { heading?: string; items: SubItem[] };

type MenuEntry =
  | { type: "link"; label: string; href: string }
  | { type: "mega"; label: string; key: string; groups: SubGroup[]; featuredImage?: string };

/** Returns a safe left offset so the dropdown never overflows the viewport */
function calcDropdownLeft(
  triggerRect: DOMRect,
  dropdownWidth: number,
  viewportWidth: number
): number {
  // Center under trigger
  let left = triggerRect.left + triggerRect.width / 2 - dropdownWidth / 2;
  const margin = 12;
  left = Math.max(margin, left);
  left = Math.min(left, viewportWidth - dropdownWidth - margin);
  return left;
}

const LOCALE_CODES = ["tr", "en", "ru", "ar", "fa"] as const;

export default function Navbar({ dict, lang }: { dict: NavCopy; lang: string }) {
  const params = useParams();
  const pathname = usePathname() || "/";
  /** URL segmenti (client geçişlerinde prop gecikse bile doğru menü) */
  const langFromRoute =
    typeof params?.lang === "string" && LOCALE_CODES.includes(params.lang as (typeof LOCALE_CODES)[number])
      ? params.lang
      : lang;
  const L = langFromRoute;
  const [langOpen, setLangOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // For fixed-position dropdown we track trigger rect
  const triggerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [dropdownPos, setDropdownPos] = useState<{ left: number; top: number } | null>(null);

  const DROPDOWN_WIDTH = 800;

  const updatePos = useCallback((key: string) => {
    const el = triggerRefs.current[key];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const left = calcDropdownLeft(rect, DROPDOWN_WIDTH, window.innerWidth);
    setDropdownPos({ left, top: rect.bottom + 6 });
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setActiveMenu(null);
    setLangOpen(false);
  }, [pathname, L]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const nav = document.getElementById("cw-navbar");
      if (nav && !nav.contains(e.target as Node)) {
        setActiveMenu(null);
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Reposition on scroll/resize
  useEffect(() => {
    if (!activeMenu) return;
    const reposition = () => updatePos(activeMenu);
    window.addEventListener("scroll", reposition, { passive: true });
    window.addEventListener("resize", reposition);
    return () => {
      window.removeEventListener("scroll", reposition);
      window.removeEventListener("resize", reposition);
    };
  }, [activeMenu, updatePos]);

  /** Eksik anahtar: `shared/i18n/en.json` `nav` (Türkçe’ye zorlanmaz) */
  const t = useMemo(
    () => ({ ...enNav.nav, ...dict } as typeof enNav.nav & NavCopy),
    [dict]
  );

  const switchLang = (newLang: string) => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length > 0 && LOCALE_CODES.includes(parts[0] as (typeof LOCALE_CODES)[number])) {
      parts[0] = newLang;
      return "/" + parts.join("/");
    }
    return `/${newLang}`;
  };

  const currentFlag = languages.find((l) => l.code === L)?.flag ?? "🌐";

  /** Tüm dillerde aynı mega yapı; metinler i18n `nav` altındaki anahtarlardan */
  const menuEntries: MenuEntry[] = [
    { type: "link", label: t.home, href: `/${L}` },
    { type: "link", label: t.about_company, href: `/${L}/about` },
    {
      type: "mega",
      label: t.mega_tc,
      key: "vatandaslik",
      featuredImage: "/hero/gayrimenkul-vatandaslik.webp",
      groups: [
        {
          heading: t.mega_h_invest,
          items: [
            { label: t.investment_real_estate, href: `/${L}/services/gayrimenkul-yatirimi`, desc: t.nav_desc_400 },
            { label: t.investment_deposit, href: `/${L}/services/mevduat-hesabi`, desc: t.nav_desc_500 },
            { label: t.investment_fund, href: `/${L}/services/gayrimenkul-yatirim-fonu`, desc: t.nav_desc_500 },
            { label: t.investment_employment, href: `/${L}/services/istihdam-olusturmak`, desc: t.nav_desc_emp },
            { label: t.investment_bonds, href: `/${L}/services/devlet-borclanma-araclari`, desc: t.nav_desc_500 },
          ],
        },
        {
          heading: t.mega_h_other,
          items: [
            { label: t.item_cit_gen, href: `/${L}/citizenship` },
            { label: t.item_cit_marriage, href: `/${L}/citizenship` },
            { label: t.item_cit_passport, href: `/${L}/citizenship` },
          ],
        },
      ],
    },
    {
      type: "mega",
      label: t.mega_res,
      key: "oturum",
      featuredImage: "/hero/yatirimci-ikamet-izni.webp",
      groups: [
        {
          heading: t.mega_h_rtypes,
          items: [
            { label: t.item_res_j, href: `/${L}/citizenship` },
            { label: t.item_res_re, href: `/${L}/citizenship` },
            { label: t.item_res_fam, href: `/${L}/citizenship` },
            { label: t.item_res_long, href: `/${L}/citizenship` },
          ],
        },
      ],
    },
    {
      type: "mega",
      label: t.mega_leg,
      key: "hukuki",
      featuredImage: "/hero/vergi-muafiyeti.webp",
      groups: [
        {
          heading: t.mega_h_tax,
          items: [
            { label: t.item_tax_exempt, href: `/${L}/services` },
            { label: t.item_tax_deed, href: `/${L}/services` },
            { label: t.item_tax_re, href: `/${L}/services` },
            { label: t.item_tax_rent, href: `/${L}/services` },
          ],
        },
        {
          heading: t.mega_h_law,
          items: [
            { label: t.item_law_rent, href: `/${L}/services` },
            { label: t.item_law_com, href: `/${L}/services` },
            { label: t.item_law_inherit, href: `/${L}/services` },
            { label: t.item_law_pop, href: `/${L}/services` },
            { label: t.item_law_enf, href: `/${L}/services` },
          ],
        },
        {
          heading: t.mega_h_more,
          items: [
            { label: t.item_more_bank, href: `/${L}/services` },
            { label: t.item_more_green, href: `/${L}/services` },
          ],
        },
      ],
    },
    { type: "link", label: t.faq, href: `/${L}/questions` },
  ];

  const handleMouseEnter = (key: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveMenu(key);
    updatePos(key);
  };
  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setActiveMenu(null), 180);
  };

  const activeMegaEntry = menuEntries.find(
    (e) => e.type === "mega" && e.key === activeMenu
  ) as Extract<MenuEntry, { type: "mega" }> | undefined;

  return (
    <nav
      id="cw-navbar"
      className="fixed top-0 z-50 w-full border-b border-[rgba(255,255,255,0.1)] bg-[rgba(10,25,47,0.92)] text-white shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo — Necmettin Barman & Associates (public/logo) */}
          <Link
            href={`/${L}`}
            className="relative flex h-9 max-w-[min(100%,240px)] shrink-0 items-center sm:h-12 sm:max-w-[280px]"
          >
            <Image
              src="/logo/necmettin-barman-logo.png"
              alt="CITIZENSHIP LAW FIRM — Necmettin Barman & Associates — Attorneys at Law"
              width={1024}
              height={273}
              className="h-9 w-auto bg-transparent object-contain object-left sm:h-12"
              sizes="(max-width: 640px) 200px, 280px"
              priority
              loading="eager"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {menuEntries.map((entry) => {
              if (entry.type === "link") {
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                  >
                    {entry.label}
                  </Link>
                );
              }

              const isOpen = activeMenu === entry.key;
              return (
                <div
                  key={entry.key}
                  ref={(el) => { triggerRefs.current[entry.key] = el; }}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(entry.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => {
                      if (activeMenu === entry.key) {
                        setActiveMenu(null);
                      } else {
                        setActiveMenu(entry.key);
                        updatePos(entry.key);
                      }
                    }}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isOpen ? "bg-white/10 text-white" : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {entry.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              );
            })}

            <Link
              href={`/${L}/contact`}
              className="ml-2 rounded-full bg-[#8a1c1c] px-6 py-2 text-sm font-bold text-white shadow-lg transition visited:text-white hover:bg-[#a32222] hover:text-white"
            >
              {t.contact}
            </Link>

            {/* Language picker — flag only trigger */}
            <div className="relative ml-1">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-lg transition hover:bg-white/10"
                title={languages.find((l) => l.code === L)?.name}
              >
                <span>{currentFlag}</span>
                <svg className="h-3 w-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl py-1.5 shadow-2xl"
                  style={{
                    background: "rgba(10,25,47,0.98)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      href={switchLang(l.code)}
                      onClick={() => setLangOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10"
                      style={{ color: L === l.code ? "#fff" : "rgba(255,255,255,0.6)" }}
                    >
                      <span className="text-xl">{l.flag}</span>
                      <span>{l.name}</span>
                      {L === l.code && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#8a1c1c]" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile: flag + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-xl"
              >
                {currentFlag}
                <svg className="h-3 w-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl py-1.5 shadow-xl"
                  style={{ background: "rgba(10,25,47,0.97)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      href={switchLang(l.code)}
                      onClick={() => setLangOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                    >
                      <span className="text-xl">{l.flag}</span>
                      <span>{l.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

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

      {/* Mobile menu */}
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
                    <svg
                      className={`h-4 w-4 transition-transform ${mobileExpanded === entry.key ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileExpanded === entry.key && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-white/10 pl-4">
                      {entry.groups.map((group, gi) => (
                        <div key={gi}>
                          {group.heading && (
                            <span className="block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[#8a1c1c]">
                              {group.heading}
                            </span>
                          )}
                          {group.items.map((item) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-sm text-gray-200 transition hover:text-white"
                            >
                              {item.label}
                              {item.desc && <span className="ml-2 text-xs text-gray-600">{item.desc}</span>}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="mt-3 border-t border-white/10 pt-3">
              <Link
                href={`/${L}/contact`}
                className="block rounded-full bg-[#8a1c1c] px-6 py-3 text-center text-sm font-bold text-white transition visited:text-white hover:bg-[#a32222] hover:text-white"
              >
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── Fixed-position mega dropdown portal ── */}
      {activeMegaEntry && dropdownPos && (
        <div
          className="fixed z-[200]"
          style={{ top: dropdownPos.top, left: dropdownPos.left, width: DROPDOWN_WIDTH }}
          onMouseEnter={() => {
            if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          {/* Invisible bridge so mouse can move from trigger → panel */}
          <div className="absolute -top-2 left-0 h-3 w-full" />

          <div
            className="overflow-hidden shadow-2xl"
            style={{
              background: "rgba(8,20,40,0.97)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "16px",
              animation: "cwDropIn 0.18s ease both",
            }}
          >
            <div className="flex">
              {/* Featured image panel */}
              {activeMegaEntry.featuredImage && (
                <div className="relative w-56 shrink-0 overflow-hidden" style={{ minHeight: "280px" }}>
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${activeMegaEntry.featuredImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#08142880] to-transparent" />
                  <div className="absolute bottom-4 left-4 right-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#c94040]">
                      {activeMegaEntry.label}
                    </span>
                  </div>
                </div>
              )}

              {/* Groups */}
              <div className="flex flex-1 gap-0 divide-x divide-white/[0.06] overflow-x-auto">
                {activeMegaEntry.groups.map((group, gi) => (
                  <div key={gi} className="flex min-w-[200px] flex-col p-6">
                    {group.heading && (
                      <span className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#a33333]">
                        {group.heading}
                      </span>
                    )}
                    <div className="flex flex-col gap-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href + item.label}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-center justify-between rounded-lg px-3 py-3 text-[0.9375rem] text-gray-300 transition-all duration-150 hover:bg-white/[0.07] hover:text-white hover:translate-x-0.5"
                        >
                          <span className="leading-snug">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes cwDropIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)  scale(1); }
        }
      `}</style>
    </nav>
  );
}
