"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  image: string;
  alt: string;
  label: string;
  href?: string;
};

type HeroSliderProps = {
  slides: Slide[];
  servicesHref: string;
  dir?: "ltr" | "rtl";
};

export default function HeroSlider({
  slides,
  servicesHref,
  dir = "ltr",
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  // Hangi slaytların daha önce görüntülendiğini takip et → preload için
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0]));

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setPrev(current);
      setLoaded((prev) => new Set(prev).add(index));
      setCurrent(index);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 500);
    },
    [animating, current]
  );

  const goPrev = useCallback(() => {
    const prevIdx = (current - 1 + slides.length) % slides.length;
    goTo(prevIdx);
  }, [current, slides.length, goTo]);

  const goNext = useCallback(() => {
    const next = (current + 1) % slides.length;
    goTo(next);
  }, [current, slides.length, goTo]);

  const slide = slides[current];

  return (
    <section
      className="relative h-[700px] w-full overflow-hidden bg-navy"
      dir={dir}
      aria-label="Hero slider"
      aria-roledescription="carousel"
    >
      {/* Slides — sadece daha önce görüntülenenler + aktif render edilir */}
      {slides.map((s, idx) => {
        const isActive = idx === current;
        const isPrev = idx === prev;
        // Daha önce hiç gösterilmediyse DOM'a ekleme (performans)
        if (!loaded.has(idx)) return null;

        return (
          <Link
            key={idx}
            href={s.href || servicesHref}
            aria-label={s.label}
            aria-hidden={!isActive}
            className="absolute inset-0 block"
            style={{
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              zIndex: isActive ? 1 : isPrev ? 0 : -1,
              transition: "opacity 0.5s ease",
              pointerEvents: isActive ? "auto" : "none",
            }}
            tabIndex={isActive ? 0 : -1}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              // Masaüstü için 1920px, tablet 1280px, mobil 768px — gereksiz veri indirimi önler
              sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
              className="object-cover object-center"
              priority={idx === 0}   // Yalnızca ilk slayt → LCP görseli
              quality={85}
            />
          </Link>
        );
      })}

      {/* Gradient — label okunurluğu */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Label badge — sol alt (RTL için sağ) */}
      <div
        className="absolute bottom-6 z-30 px-4"
        style={dir === "rtl" ? { right: "1.5rem" } : { left: "1.5rem" }}
      >
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
          style={{
            backgroundColor: "#9b1c1c",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(6px)" : "translateY(0)",
            transition: "opacity 0.4s, transform 0.4s",
          }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-white/80" />
          {slide?.label}
        </span>
      </div>

      {/* Sol ok */}
      <button
        onClick={goPrev}
        aria-label="Önceki slayt"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/55 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Sağ ok */}
      <button
        onClick={goNext}
        aria-label="Sonraki slayt"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/55 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot navigation */}
      <div
        className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3"
        role="tablist"
        aria-label="Slayt navigasyonu"
      >
        {slides.map((s, idx) => (
          <button
            key={idx}
            role="tab"
            onClick={() => goTo(idx)}
            aria-label={`${s.label} — slayt ${idx + 1}`}
            aria-selected={idx === current}
            className="flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: idx === current ? "28px" : "8px",
                height: "8px",
                backgroundColor:
                  idx === current ? "#9b1c1c" : "rgba(255,255,255,0.5)",
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
