"use client";

import { useEffect } from "react";

/** Dil segmentinde <html lang/dir> eşlemesi (kök layout tek <html> kullanır) */
export function DocumentLang({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);
  return null;
}
