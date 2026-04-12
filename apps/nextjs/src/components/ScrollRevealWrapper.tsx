"use client";
import { useEffect } from "react";

export default function ScrollRevealWrapper() {
  useEffect(() => {
    // A more aggressive observer setup for React
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Don't unobserve immediately in dev to avoid hot-reload issues, 
            // but for prod it's fine. We'll leave it observing so if they scroll up it might re-trigger or stay static.
          }
        });
      },
      { threshold: 0.05, rootMargin: "50px 0px -20px 0px" } // extremely forgiving margins
    );

    const observeElements = () => {
      document.querySelectorAll(".reveal:not(.is-revealed)").forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial pass
    observeElements();
    
    // Fallback passes for NextJS hydration and dynamic imports
    const intervalId = setInterval(observeElements, 1000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  return null;
}
