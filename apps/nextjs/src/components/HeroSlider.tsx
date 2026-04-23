"use client";

import { useEffect, useState, useCallback } from "react";

type Slide = {
  image: string;
  label: string;
  title1?: string;
  title2?: string;
  href?: string;
};

type HeroSliderProps = {
  slides: Slide[];
  title1: string;
  title2: string;
  desc: string;
  btnPrimary: string;
  btnSecondary: string;
  servicesHref: string;
  questionsHref: string;
  dir?: "ltr" | "rtl";
};

export default function HeroSlider({
  slides,
  title1,
  title2,
  desc,
  btnPrimary,
  btnSecondary,
  servicesHref,
  questionsHref,
  dir = "ltr",
}: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setContentVisible(false);
      setTimeout(() => {
        setCurrent(index);
        setContentVisible(true);
        setAnimating(false);
      }, 600);
    },
    [animating, current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (current + 1) % slides.length;
      setAnimating(true);
      setContentVisible(false);
      setTimeout(() => {
        setCurrent(next);
        setContentVisible(true);
        setAnimating(false);
      }, 600);
    }, 3000);
    return () => clearInterval(timer);
  }, [current, slides.length]);

  const slide = slides[current];
  const activeTitle1 = slide?.title1 || title1;
  const activeTitle2 = slide?.title2 || title2;
  const activeHref = slide?.href || servicesHref;

  return (
    <section
      className="relative flex h-[700px] w-full items-end justify-center overflow-hidden bg-navy text-white"
      dir={dir}
    >
      {/* Background slides */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: idx === current ? 1 : 0,
            zIndex: idx === current ? 1 : 0,
          }}
          aria-hidden={idx !== current}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/95 via-navy/55 to-navy/20" />

      {/* Slide label badge — top left (or right for RTL) */}
      <div
        className="absolute top-8 z-30 px-4"
        style={dir === "rtl" ? { right: "2rem" } : { left: "2rem" }}
      >
        <span
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-burgundy" />
          {slide?.label}
        </span>
      </div>

      {/* Hero content — title changes per slide */}
      <div
        className="relative z-20 mb-16 flex max-w-4xl flex-col items-center px-4 text-center"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <h1 className="mb-6 text-5xl font-bold tracking-tight drop-shadow-xl md:text-7xl">
          {activeTitle1}
          <br />
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent">
            {activeTitle2}
          </span>
        </h1>
        <p className="mb-10 max-w-3xl text-lg font-light text-gray-200 drop-shadow-md md:text-xl">
          {desc}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Primary button — links to relevant service page */}
          <a
            href={activeHref}
            className="rounded-full bg-burgundy px-8 py-4 font-medium text-white shadow-lg transition hover:bg-burgundy-light"
          >
            {btnPrimary}
          </a>
          <a
            href={questionsHref}
            className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            {btnSecondary}
          </a>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Slide ${idx + 1}`}
            className="flex items-center justify-center"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: idx === current ? "28px" : "8px",
                height: "8px",
                backgroundColor:
                  idx === current
                    ? "var(--color-burgundy, #8a1c1c)"
                    : "rgba(255,255,255,0.4)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 z-30 h-[3px] w-full bg-white/10">
        <div
          key={current}
          className="h-full bg-burgundy"
          style={{ animation: "heroProgress 3s linear forwards" }}
        />
      </div>

      <style>{`
        @keyframes heroProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
