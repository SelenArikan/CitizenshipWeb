"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.05, rootMargin: '80px 0px -10px 0px' });

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.is-revealed)').forEach(el => observer.observe(el));
    };
    
    observeElements();
    const interval = setInterval(observeElements, 800);

    // Safety net: force-reveal everything after 2s in case observer fails
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-revealed)').forEach(el => {
        el.classList.add('is-revealed');
      });
    }, 2000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return null;
}
