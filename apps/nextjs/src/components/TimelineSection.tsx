"use client";
import { useEffect, useRef } from "react";

type TimelineDict = {
  title?: string;
  desc?: string;
  steps?: string[];
};

export default function TimelineSection({
  dict,
  dir = "ltr",
}: {
  dict?: TimelineDict;
  dir?: "ltr" | "rtl";
}) {
  const containerRef    = useRef<HTMLDivElement>(null);
  const hProgressRef    = useRef<HTMLDivElement>(null); // horizontal desktop fill
  const vProgressRef    = useRef<HTMLDivElement>(null); // vertical   mobile  fill
  const desktopRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const mobileRefs      = useRef<(HTMLDivElement | null)[]>([]);
  const isRtl = dir === "rtl";

  const safeDict: Required<TimelineDict> = {
    title: "Başvurunun Yol Haritası",
    desc: "Yatırım modelinin belirlenmesinden vatandaşlık kararına kadar ana adımları tek bakışta görün.",
    steps: [
      "1. Ön İnceleme",
      "2. Evrak ve Vekalet",
      "3. Yatırımın Tamamlanması",
      "4. Uygunluk Belgesi",
      "5. İkamet İzni",
      "6. Vatandaşlık Başvurusu",
    ],
    ...dict,
  };
  const steps = safeDict.steps;

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const scrolled   = -top;
      targetProgress = Math.max(0, Math.min(1, scrolled / scrollable));
    };

    const animateNode = (node: HTMLDivElement | null, isActive: boolean) => {
      if (!node) return;
      const circle = node.querySelector<HTMLDivElement>(".node-circle");
      const texts  = node.querySelectorAll<HTMLElement>(".node-text");

      if (circle) {
        circle.style.transform       = isActive ? "scale(1.3)"  : "scale(1)";
        circle.style.backgroundColor = isActive ? "#8a1c1c"     : "#ffffff";
        circle.style.borderColor     = isActive ? "#8a1c1c"     : "#d1d5db";
      }
      texts.forEach((el) => {
        el.style.opacity    = isActive ? "1"       : "0.35";
        el.style.color      = isActive ? "#0a192f" : "#9ca3af";
        el.style.fontWeight = isActive ? "700"     : "400";
      });
    };

    const renderLoop = () => {
      currentProgress += (targetProgress - currentProgress) * 0.05;

      // Progress bars
      if (hProgressRef.current) hProgressRef.current.style.width  = `${currentProgress * 100}%`;
      if (vProgressRef.current) vProgressRef.current.style.height = `${currentProgress * 100}%`;

      // Animate both desktop and mobile nodes
      steps.forEach((_, index) => {
        const visualIndex = isRtl ? steps.length - 1 - index : index;
        const threshold   = steps.length > 1 ? visualIndex / (steps.length - 1) : 0;
        const isActive    = currentProgress >= threshold - 0.05;

        animateNode(desktopRefs.current[index], isActive);
        animateNode(mobileRefs.current[index],  isActive);
      });

      rafId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    rafId = requestAnimationFrame(renderLoop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [steps.length, dir]);

  /* ─── shared circle style ──────────────────────────────────────── */
  const circleStyle: React.CSSProperties = {
    borderColor: "#d1d5db",
    transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background-color 0.4s, border-color 0.4s",
  };
  const textStyle: React.CSSProperties = {
    opacity: 0.35,
    color: "#9ca3af",
    transition: "opacity 0.4s ease, color 0.4s ease",
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full border-t border-gray-100 bg-white text-navy h-[320vh] sm:h-[260vh]"
      dir={dir}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-8">

        {/* Title */}
        <h2
          className="mb-3 text-center text-2xl font-bold sm:text-4xl md:text-5xl"
          dangerouslySetInnerHTML={{ __html: safeDict.title }}
        />
        <p className="mb-10 max-w-2xl text-center text-sm text-gray-500 sm:mb-16 sm:text-lg">
          {safeDict.desc}
        </p>

        {/* ══════════════════════════════════════════════════════════
            DESKTOP  —  horizontal alternating   (sm and above)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative hidden w-full max-w-5xl px-2 sm:block">
          {/* BG track */}
          <div
            className="absolute top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full bg-gray-200"
            style={{ left: 0 }}
          />
          {/* Fill */}
          <div
            ref={hProgressRef}
            className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#8a1c1c]"
            style={{ width: "0%", willChange: "width", ...(isRtl ? { right: 0 } : { left: 0 }) }}
          />
          {/* Nodes */}
          <div
            className="relative flex items-center justify-between"
            style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
          >
            {steps.map((step, index) => {
              const isAbove = index % 2 === 0;
              return (
                <div
                  key={`d-${index}`}
                  ref={(el) => { desktopRefs.current[index] = el; }}
                  className="relative z-10 flex flex-col items-center"
                  style={{ flex: "0 0 auto" }}
                >
                  {/* Label above */}
                  <div
                    className="node-text mb-3 w-24 text-center text-xs font-semibold leading-tight sm:w-28 sm:text-sm"
                    style={{
                      ...textStyle,
                      minHeight: "2.5rem",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      visibility: isAbove ? "visible" : "hidden",
                    }}
                  >
                    {isAbove ? step : ""}
                  </div>

                  {/* Circle */}
                  <div
                    className="node-circle h-5 w-5 rounded-full border-4 bg-white shadow-md sm:h-7 sm:w-7"
                    style={circleStyle}
                  />

                  {/* Label below */}
                  <div
                    className="node-text mt-3 w-24 text-center text-xs font-semibold leading-tight sm:w-28 sm:text-sm"
                    style={{
                      ...textStyle,
                      minHeight: "2.5rem",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      visibility: !isAbove ? "visible" : "hidden",
                    }}
                  >
                    {!isAbove ? step : ""}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE: kompakt düğümler, satırlar ve scroll alanı Y ekseninde geniş */}
        <div className="relative mx-auto flex w-full max-w-lg flex-col px-4 sm:hidden">
          <div className="pointer-events-none absolute bottom-6 top-6 w-1 start-10 -translate-x-1/2 rounded-full bg-gray-200" />
          <div
            ref={vProgressRef}
            className="pointer-events-none absolute top-6 w-1 start-10 -translate-x-1/2 rounded-full bg-[#8a1c1c]"
            style={{ height: "0%", willChange: "height" }}
          />

          {steps.map((step, index) => (
            <div
              key={`m-${index}`}
              ref={(el) => { mobileRefs.current[index] = el; }}
              className={`relative z-10 flex w-full max-w-lg min-h-[5.5rem] items-center gap-3 py-6 ${isRtl ? "flex-row-reverse" : ""}`}
            >
              <div className="flex w-10 shrink-0 justify-center">
                <div
                  className="node-circle h-6 w-6 rounded-full border-4 bg-white shadow-md"
                  style={circleStyle}
                />
              </div>
              <span
                className="node-text min-w-0 flex-1 text-sm font-semibold leading-snug"
                style={{ ...textStyle, textAlign: isRtl ? "right" : "left" }}
              >
                {step}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
