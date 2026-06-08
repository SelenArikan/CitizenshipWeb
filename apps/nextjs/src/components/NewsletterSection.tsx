"use client";
import { useEffect, useRef } from "react";

import QuestionSubmissionForm, { type QuestionFormCopy } from "./QuestionSubmissionForm";

type QuestionPromptCopy = {
  title: string;
  title_bold: string;
  desc: string;
  placeholder: string;
  btn: string;
  helper: string;
  success: string;
  error_required: string;
  error_generic: string;
  sending: string;
};

export default function NewsletterSection({
  dict,
  formCopy,
  lang = "tr",
}: {
  dict?: Partial<QuestionPromptCopy>;
  formCopy?: Partial<QuestionFormCopy>;
  lang?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  const safeDict: QuestionPromptCopy = {
    title: "Aklınızdaki",
    title_bold: "Soruyu Yazın",
    desc: "Vatandaşlık, oturum izni veya yatırım süreçleriyle ilgili sorunuzu bize iletin. Uzman ekibimiz inceleyip size dönüş yapsın.",
    placeholder: "Sorunuzu detaylı şekilde yazın...",
    btn: "Soruyu Gönder",
    helper: "Sorunuz uzman ekibimize iletilir ve incelendikten sonra yanıtlanır.",
    success: "Sorunuz başarıyla alındı. En kısa sürede inceleyeceğiz.",
    error_required: "Lütfen sorunuzu yazın.",
    error_generic: "Soru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
    sending: "Gönderiliyor...",
    ...dict,
  };

  useEffect(() => {
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;
    let animationFrameId: number;
    const container = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 100;
      targetY = ((e.clientY - rect.top) / rect.height) * 100;
    };

    const renderLoop = () => {
      currentX += (targetX - currentX) * 0.08; // Butter smooth lerp without css jitter
      currentY += (targetY - currentY) * 0.08;
      
      if (blobRef.current) {
        blobRef.current.style.left = `${currentX}%`;
        blobRef.current.style.top = `${currentY}%`;
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    if (container) {
       container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    
    animationFrameId = requestAnimationFrame(renderLoop);
    
    return () => {
      if (container) container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full py-32 flex justify-center relative overflow-hidden group cursor-crosshair"
      style={{ background: "linear-gradient(135deg, #E8EEF6 0%, #EEF2F8 50%, #F0F5FA 100%)" }}
    >
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
        style={{ backgroundImage: "radial-gradient(#0a192f 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* Interactive Glowing Blob — softer */}
      <div 
         ref={blobRef}
         className="absolute w-[600px] h-[600px] bg-[#8a1c1c] rounded-full blur-[160px] opacity-10 pointer-events-none"
         style={{
           left: '50%',
           top: '50%',
           transform: 'translate(-50%, -50%)',
           willChange: 'left, top',
         }}
      ></div>

      <div className="max-w-4xl w-full px-8 flex flex-col items-center text-center z-10 p-16 rounded-3xl border border-[#0a192f]/8 bg-white/60 backdrop-blur-xl shadow-lg relative">
        <h2 className="text-4xl font-bold mb-4 text-[#0a192f]">{safeDict.title} <span className="text-[#8a1c1c] font-light">{safeDict.title_bold}</span></h2>
        <p className="text-[#0a192f]/60 mb-8 max-w-xl text-lg">{safeDict.desc}</p>
        <div className="w-full max-w-2xl">
          <QuestionSubmissionForm
            lang={lang}
            copy={formCopy}
            submissionCopy={safeDict}
            variant="home"
          />
        </div>
      </div>
    </section>
  );
}
