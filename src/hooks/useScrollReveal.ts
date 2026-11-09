import { useEffect } from 'react';

/**
 * Custom hook implementing reveal-on-scroll animations using the native
 * browser Intersection Observer API.
 * 
 * Features:
 * - Plays strictly ONCE per element.
 * - Respects 'prefers-reduced-motion' (immediately reveals with zero animation if enabled).
 * - Supports custom delays via 'data-reveal-delay' or staggered indexes.
 * - Pure lightweight vanilla implementation with zero heavy dependencies.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = document.querySelectorAll<HTMLElement>(
      '[data-reveal], .reveal-on-scroll, .reveal-card, .reveal-image'
    );

    if (prefersReducedMotion) {
      // Instantly reveal all elements without transitions
      targets.forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;

            if (delay) {
              setTimeout(() => {
                el.classList.add('is-revealed');
              }, parseInt(delay, 10));
            } else {
              el.classList.add('is-revealed');
            }

            // Play ONLY ONCE per element
            obs.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.08,
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
