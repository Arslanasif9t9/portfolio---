import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lenis-driven inertial scrolling — the single biggest cue that a site
 * was built rather than assembled. Skipped entirely when the visitor has
 * asked for reduced motion, so they keep native scrolling.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    // lerp rather than duration: the scroll eases continuously toward the
    // pointer's target instead of restarting a fixed ramp on every notch,
    // which is what makes fast flicks feel smooth rather than steppy.
    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Anchor links need to go through Lenis or they jump instantly.
    // Resolve to an absolute offset rather than handing Lenis the element:
    // element targets silently no-op when the document's scroll container
    // isn't the one Lenis measured, which left every nav link dead.
    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      lenis.scrollTo(top, { duration: 1.2 });
    };
    document.addEventListener('click', onAnchorClick);

    return () => {
      document.removeEventListener('click', onAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
}
