"use client";

import { useState, type FormEvent } from "react";

import type { QuestionReplyMode } from "@/lib/questions";

export type QuestionFormCopy = {
  name_placeholder: string;
  email_placeholder: string;
  public_option_title: string;
  public_option_desc: string;
  private_option_title: string;
  private_option_desc: string;
  error_email_required: string;
};

type SubmissionCopy = {
  placeholder: string;
  btn: string;
  helper: string;
  success: string;
  error_required: string;
  error_generic: string;
  sending: string;
};

type Props = {
  lang: string;
  copy?: Partial<QuestionFormCopy>;
  submissionCopy?: Partial<SubmissionCopy>;
  variant?: "home" | "sidebar";
};

const defaultFormCopy: QuestionFormCopy = {
  name_placeholder: "Adiniz (istege bagli)",
  email_placeholder: "E-posta adresiniz",
  public_option_title: "Herkese acik",
  public_option_desc: "Uygun bulunursa soru ve cevap SSS sayfasinda anonim olarak yayinlanabilir.",
  private_option_title: "Ozel cevap",
  private_option_desc: "Yanit yalnizca size e-posta ile gonderilir ve sitede yayinlanmaz.",
  error_email_required: "Ozel cevap icin gecerli bir e-posta adresi girin.",
};

const defaultSubmissionCopy: SubmissionCopy = {
  placeholder: "Sorunuzu detayli sekilde yazin...",
  btn: "Soruyu Gonder",
  helper: "Public secenekte soru uygun bulunursa SSS'de yayinlanir. Ozel secenekte yanit e-posta ile iletilir.",
  success: "Sorunuz basariyla alindi. Inceleme sonrasi seciminize gore yayinlanacak veya e-posta ile yanitlanacak.",
  error_required: "Lutfen sorunuzu yazin.",
  error_generic: "Soru gonderilirken bir hata olustu. Lutfen tekrar deneyin.",
  sending: "Gonderiliyor...",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function QuestionSubmissionForm({
  lang,
  copy,
  submissionCopy,
  variant = "home",
}: Props) {
  const formCopy = { ...defaultFormCopy, ...copy };
  const submitCopy = { ...defaultSubmissionCopy, ...submissionCopy };
  const isSidebar = variant === "sidebar";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [replyMode, setReplyMode] = useState<QuestionReplyMode>("public");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const inputClass = isSidebar
    ? "w-full px-4 py-3 rounded-xl bg-white border border-[#D1D9E8] text-[#0a192f] focus:outline-none focus:border-[#0a192f]/50 placeholder:text-[#0a192f]/40 text-sm transition"
    : "w-full px-5 py-4 rounded-2xl bg-white border border-[#D1D9E8] text-[#0a192f] focus:outline-none focus:border-[#0a192f]/50 focus:ring-1 focus:ring-[#0a192f]/15 transition placeholder:text-[#0a192f]/40";

  const helperMessage =
    status === "success"
      ? submitCopy.success
      : status === "error"
        ? errorMessage || submitCopy.error_generic
        : submitCopy.helper;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!question.trim()) {
      setErrorMessage(submitCopy.error_required);
      setStatus("error");
      return;
    }

    if (replyMode === "private" && !isValidEmail(email.trim())) {
      setErrorMessage(formCopy.error_email_required);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          question,
          lang,
          replyMode,
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!response.ok || !payload?.success) {
        if (payload?.error === "private_email_required" || payload?.error === "invalid_email") {
          throw new Error(formCopy.error_email_required);
        }
        if (payload?.error === "question_required") {
          throw new Error(submitCopy.error_required);
        }
        throw new Error(submitCopy.error_generic);
      }

      setName("");
      setEmail("");
      setQuestion("");
      setReplyMode("public");
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : submitCopy.error_generic);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className={`grid gap-3 ${isSidebar ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder={formCopy.name_placeholder}
          className={inputClass}
        />
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder={formCopy.email_placeholder}
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            setReplyMode("public");
            if (status !== "idle") setStatus("idle");
          }}
          className={`flex flex-col justify-between rounded-xl p-3 border text-left transition-all duration-200 cursor-pointer ${
            replyMode === "public"
              ? "border-[#8a1c1c] bg-[#fdf9f9] ring-1 ring-[#8a1c1c]/10 shadow-sm"
              : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
          }`}
        >
          <span className={`text-xs sm:text-sm font-bold ${replyMode === "public" ? "text-[#8a1c1c]" : "text-[#0a192f]"}`}>
            {formCopy.public_option_title}
          </span>
          <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-500 leading-snug">
            {formCopy.public_option_desc}
          </p>
        </button>
        <button
          type="button"
          onClick={() => {
            setReplyMode("private");
            if (status !== "idle") setStatus("idle");
          }}
          className={`flex flex-col justify-between rounded-xl p-3 border text-left transition-all duration-200 cursor-pointer ${
            replyMode === "private"
              ? "border-[#8a1c1c] bg-[#fdf9f9] ring-1 ring-[#8a1c1c]/10 shadow-sm"
              : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
          }`}
        >
          <span className={`text-xs sm:text-sm font-bold ${replyMode === "private" ? "text-[#8a1c1c]" : "text-[#0a192f]"}`}>
            {formCopy.private_option_title}
          </span>
          <p className="mt-1.5 text-[10px] sm:text-[11px] text-slate-500 leading-snug">
            {formCopy.private_option_desc}
          </p>
        </button>
      </div>

      <textarea
        value={question}
        onChange={(event) => {
          setQuestion(event.target.value);
          if (status !== "idle") setStatus("idle");
        }}
        placeholder={submitCopy.placeholder}
        rows={isSidebar ? 4 : 4}
        maxLength={2000}
        required
        className={`${inputClass} resize-none ${isSidebar ? "" : "px-6 py-5 rounded-[2rem]"}`}
      />

      <div className={`flex flex-col ${isSidebar ? "" : "items-center"} gap-3`}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`${isSidebar ? "w-full rounded-xl" : "rounded-full"} px-8 py-4 bg-[#8a1c1c] hover:bg-[#a32222] font-bold transition shadow-lg hover:shadow-[#8a1c1c]/20 text-white disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {status === "submitting" ? submitCopy.sending : submitCopy.btn}
        </button>
        <p
          aria-live="polite"
          className={
            status === "success"
              ? "text-sm text-emerald-600 font-semibold text-center"
              : status === "error"
                ? "text-sm text-rose-500 font-semibold text-center"
                : `text-sm text-center ${isSidebar ? "text-slate-400" : "text-slate-400"}`
          }
        >
          {helperMessage}
        </p>
      </div>
    </form>
  );
}
