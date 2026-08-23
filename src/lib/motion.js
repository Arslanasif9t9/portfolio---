/**
 * Shared motion vocabulary.
 *
 * Every section previously carried its own hand-tuned duration and easing,
 * so reveals landed with slightly different weight and the page felt
 * unsettled. One curve and one set of timings makes the whole scroll read
 * as a single system.
 */

// Expo-out. Moves decisively, settles gently — the curve that reads as
// "considered" rather than "sprung".
export const EASE = [0.16, 1, 0.3, 1];

/** Viewport trigger used by every scroll reveal. */
export const inView = { once: true, amount: 0.25 };

/** Standard rise-and-fade for a single element. */
export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/** Same, entering from the side — used along the timeline spine. */
export const fadeIn = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Quiet fade with no travel, for supporting copy. */
export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

/**
 * Parent that releases its children one after another.
 * `stagger` is the gap between children; `delay` holds the whole group back.
 */
export const stagger = (gap = 0.09, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/** Small pop for chips and pills — scale reads better than travel at that size. */
export const pop = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};
