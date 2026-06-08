"use client";
import { useEffect } from "react";

export default function ScrollRevealWrapper() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      { threshold: 0.05, rootMargin: "80px 0px -10px 0px" }
    );

    const observeElements = () => {
      document.querySelectorAll(".reveal:not(.is-revealed)").forEach((el) => {
        observer.observe(el);
      });
    };

    observeElements();
    const intervalId = setInterval(observeElements, 800);

    // Safety net: force-reveal all elements after 2s if observer missed them
    const fallback = setTimeout(() => {
      document.querySelectorAll(".reveal:not(.is-revealed)").forEach((el) => {
        el.classList.add("is-revealed");
      });
    }, 2000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
