"use client";
import { useEffect, useRef } from "react";

type TimelineDict = {
  title?: string;
  desc?: string;
  steps?: string[];
};

export default function TimelineSection({ dict }: { dict?: TimelineDict }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Default values to prevent errors
  const safeDict: Required<TimelineDict> = {
    title: "Adım Adım Geleceğe<br/>Hazırlanın",
    desc: "Karmaşık hukuki göçmenlik süreçlerini uygulabilir aşamalara böldük.",
    steps: ["1. Ön Danışmanlık", "2. Evrak", "3. Başvuru", "4. Teslim"],
    ...dict,
  };

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollableDistance = height - window.innerHeight;
      const scrolledDistance = -top;
      
      targetProgress = Math.max(0, Math.min(1, scrolledDistance / scrollableDistance));
    };

    const renderLoop = () => {
      currentProgress += (targetProgress - currentProgress) * 0.05; // Butter smooth lerp
      
      if (progressLineRef.current) {
        progressLineRef.current.style.width = `${currentProgress * 100}%`;
      }

      nodesRef.current.forEach((node, index) => {
        if (!node) return;
        const threshold = index / 3;
        const isActive = currentProgress >= threshold - 0.05;
        
        const circle = node.querySelector('.node-circle') as HTMLDivElement;
        const text = node.querySelector('.node-text') as HTMLHeadingElement;
        
        if (circle && text) {
           if (isActive) {
             circle.style.transform = 'scale(1.3)';
             circle.style.backgroundColor = '#8a1c1c';
             circle.style.borderColor = '#8a1c1c';
             text.style.opacity = '1';
             text.style.transform = 'translateY(0)';
             text.style.color = '#0a192f';
           } else {
             circle.style.transform = 'scale(1)';
             circle.style.backgroundColor = '#ffffff';
             circle.style.borderColor = '#d1d5db';
             text.style.opacity = '0';
             text.style.transform = 'translateY(1rem)';
             text.style.color = '#9ca3af';
           }
        }
      });
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationFrameId = requestAnimationFrame(renderLoop);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const steps = safeDict.steps;

  return (
    <section ref={containerRef} className="w-full h-[250vh] bg-white text-navy border-t border-gray-100 relative">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center px-8 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" dangerouslySetInnerHTML={{ __html: safeDict.title }}></h2>
        <p className="text-gray-500 mb-20 max-w-2xl text-lg text-center">{safeDict.desc}</p>
        
        <div className="relative w-full max-w-4xl flex items-center justify-between">
          <div className="absolute left-0 top-1/2 w-full h-1 -translate-y-1/2 bg-gray-200 rounded-full"></div>
          
          <div 
            ref={progressLineRef}
            className="absolute top-1/2 h-1 -translate-y-1/2 bg-[#8a1c1c] rounded-full timeline-progress-line"
            style={{ width: '0%', willChange: 'width' }}
          ></div>

          {steps.map((step, index) => (
              <div 
                key={index} 
                ref={el => { nodesRef.current[index] = el; }}
                className="relative z-10 flex flex-col items-center"
              >
                 <div 
                   className="node-circle w-6 h-6 md:w-8 md:h-8 rounded-full border-4 shadow bg-white border-gray-300 scale-100"
                   style={{ transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.4s, border-color 0.4s' }}
                 ></div>
                 <h4 
                   className="node-text mt-8 md:mt-10 font-bold absolute text-center w-32 whitespace-nowrap text-gray-400 opacity-0 translate-y-4"
                   style={{ transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }}
                 >
                   {step}
                 </h4>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
