import { motion } from 'framer-motion';
import { EASE, inView } from '../../lib/motion.js';

/**
 * The editorial "01 / ABOUT" marker that opens each section.
 * The rule beside it draws itself in as the section enters.
 */
export default function SectionLabel({ index, children }) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-6"
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, x: -10 },
          show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
        }}
        className="font-mono text-xs tracking-[0.25em] text-gold-400 shrink-0"
      >
        {index} / {children}
      </motion.span>
      <motion.span
        aria-hidden
        className="h-px bg-gold-700/60 origin-left flex-1"
        variants={{
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 1.1, ease: EASE } },
        }}
      />
    </motion.div>
  );
}
