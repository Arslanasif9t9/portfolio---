import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Hairline reading-progress bar pinned to the top edge.
 * Spring-smoothed so it glides rather than tracking the scroll frame-for-frame.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: width }}
      className="fixed top-0 inset-x-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300"
    />
  );
}
