"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'ar', label: 'AR', name: 'العربية' },
  { code: 'fa', label: 'FA', name: 'فارسی' }
];

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const pathname = usePathname() || '/';
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fallback for when dict is not yet loaded or missing
  const navTitles = dict || {
    home: "Ana Sayfa",
    services: "Hizmetler",
    about: "Biz Kimiz",
    contact: "İletişim"
  };

  // Helper to switch language keeping the path
  const targetPath = (newLang: string) => {
    if (!pathname) return `/${newLang}`;
    const segments = pathname.split('/');
    segments[1] = newLang; // Replace the lang segment
    return segments.join('/') || '/';
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-[rgba(10,25,47,0.85)] backdrop-blur-md text-white border-b border-[rgba(255,255,255,0.1)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
             <Link href={`/${lang}`} className="font-bold text-2xl tracking-wider text-white">
                Citizenship<span className="text-[#a32222]">Web</span>
             </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${lang}`} className="text-sm font-medium text-gray-300 hover:text-white transition">{navTitles.home}</Link>
            <Link href={`/${lang}/services`} className="text-sm font-medium text-gray-300 hover:text-white transition">{navTitles.services}</Link>
            <Link href={`/${lang}/citizenship`} className="text-sm font-medium text-gray-300 hover:text-white transition">Adımlar</Link>
            <Link href={`/${lang}/knowledge`} className="text-sm font-medium text-gray-300 hover:text-white transition">Bilgi Bankası</Link>
            <Link href={`/${lang}/contact`} className="px-6 py-2 rounded-full bg-[#8a1c1c] hover:bg-[#a32222] transition text-sm font-bold shadow-lg">{navTitles.contact}</Link>
            
            {/* Language Switcher Dropdown */}
            <div className="relative ml-4">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className="flex items-center gap-1 text-sm font-bold text-white hover:text-gray-300 transition"
              >
                {lang.toUpperCase()}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl overflow-hidden py-2 border border-gray-100 transform opacity-100 scale-100 transition-all origin-top-right z-50">
                  {languages.map((l) => (
                    <Link 
                      key={l.code} 
                      href={targetPath(l.code)}
                      className="block px-4 py-2 text-sm text-center font-bold hover:bg-gray-50 transition"
                      style={{ color: lang === l.code ? '#8a1c1c' : '#0a192f', backgroundColor: lang === l.code ? 'rgba(254, 242, 242, 0.5)' : 'transparent' }}
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}
