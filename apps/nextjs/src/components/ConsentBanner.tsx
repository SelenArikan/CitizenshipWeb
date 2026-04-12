'use client';

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

type ConsentBannerCopy = {
  badge?: string;
  title?: string;
  description?: string;
  items?: string[];
  accept_label?: string;
  link_label?: string;
};

const CONSENT_STORAGE_KEY = "cw_privacy_consent_v1";

export default function ConsentBanner({
  lang = "tr",
  copy,
}: {
  lang?: string;
  copy?: ConsentBannerCopy;
}) {
  const [acceptedLocally, setAcceptedLocally] = useState(false);
  const hasStoredConsent = useSyncExternalStore(
    () => () => {},
    () => {
      try {
        return Boolean(window.localStorage.getItem(CONSENT_STORAGE_KEY));
      } catch {
        return false;
      }
    },
    () => true
  );

  const handleAccept = () => {
    try {
      window.localStorage.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({
          status: "accepted",
          acceptedAt: new Date().toISOString(),
        })
      );
    } catch {
      // localStorage kullanılamasa bile banner kapansın
    }

    setAcceptedLocally(true);
  };

  if (hasStoredConsent || acceptedLocally) {
    return null;
  }

  const safeCopy = {
    badge: copy?.badge || "Cookies and Privacy Notice",
    title: copy?.title || "We process the data you share while using the site transparently.",
    description:
      copy?.description ||
      "We use required cookies and similar technologies to keep the site running. Personal data you share through forms, live chat, and question submissions may also be processed for service delivery.",
    items: Array.isArray(copy?.items) ? copy.items.filter((item) => typeof item === "string" && item.trim()) : [],
    accept_label: copy?.accept_label || "I Agree",
    link_label: copy?.link_label || "Detailed privacy notice",
  };

  return (
    <div className="fixed bottom-4 left-4 right-24 z-40 sm:bottom-6 sm:left-6 sm:right-28">
      <div
        className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[rgba(10,25,47,0.94)] text-white shadow-[0_30px_90px_rgba(10,25,47,0.45)] backdrop-blur-xl"
        role="dialog"
        aria-labelledby="consent-banner-title"
        aria-describedby="consent-banner-description"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,34,34,0.24),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="relative p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                {safeCopy.badge}
              </p>
              <h2 id="consent-banner-title" className="mt-2 text-lg font-semibold sm:text-2xl">
                {safeCopy.title}
              </h2>
              <p id="consent-banner-description" className="mt-3 text-sm leading-6 text-gray-200 sm:text-[15px]">
                {safeCopy.description}
              </p>

              {safeCopy.items.length > 0 ? (
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-gray-200">
                  {safeCopy.items.map((item, index) => (
                    <li key={`${item}-${index}`} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-burgundy" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <Link
                href={`/${lang}/privacy`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 transition hover:text-gray-200 hover:decoration-white/70"
              >
                {safeCopy.link_label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex shrink-0 items-center justify-end">
              <button
                type="button"
                onClick={handleAccept}
                className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-burgundy px-6 py-3 text-sm font-bold text-white shadow-lg shadow-burgundy/30 transition hover:bg-burgundy-light"
              >
                {safeCopy.accept_label}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
