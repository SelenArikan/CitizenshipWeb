"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.05, rootMargin: '50px 0px -20px 0px' });

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.is-revealed)').forEach(el => observer.observe(el));
    };
    
    observeElements();
    
    // Periodically search for new elements in case of dynamic routing or client side rendering
    const interval = setInterval(observeElements, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return null;
}
