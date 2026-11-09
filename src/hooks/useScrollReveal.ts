import { useEffect } from 'react';

/**
 * Custom hook implementing reveal-on-scroll animations using the native
 * browser Intersection Observer API.
 * 
 * Features:
 * - Plays strictly ONCE per element.
 * - Generous rootMargin (100px) so items smoothly animate in before or as user reaches them.
 * - Immediate reveal check for above-the-fold or currently visible elements.
 * - 1.2s safety fallback ensuring no image or card can ever remain hidden.
 * - Respects 'prefers-reduced-motion'.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = document.querySelectorAll<HTMLElement>(
      '[data-reveal], .reveal-on-scroll, .reveal-card, .reveal-image'
    );

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
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

            obs.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: '120px 0px 120px 0px',
        threshold: 0.01,
      }
    );

    const checkVisibleElements = () => {
      targets.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight + 200 && rect.bottom >= -200) {
            const delay = el.dataset.revealDelay;
            if (delay) {
              setTimeout(() => {
                el.classList.add('is-revealed');
              }, parseInt(delay, 10));
            } else {
              el.classList.add('is-revealed');
            }
          }
        }
      });
    };

    targets.forEach((el) => {
      observer.observe(el);
    });

    // Run immediate check
    checkVisibleElements();

    // Also attach scroll/resize listeners for rock-solid iframe reliability
    window.addEventListener('scroll', checkVisibleElements, { passive: true });
    window.addEventListener('resize', checkVisibleElements, { passive: true });

    // Rapid safety fallback: reveal all elements so nothing can ever remain hidden
    const safetyTimer = setTimeout(() => {
      targets.forEach((el) => el.classList.add('is-revealed'));
    }, 600);

    return () => {
      clearTimeout(safetyTimer);
      window.removeEventListener('scroll', checkVisibleElements);
      window.removeEventListener('resize', checkVisibleElements);
      observer.disconnect();
    };
  }, []);
}
