import { motion } from 'framer-motion';
import { EASE, inView } from '../../lib/motion.js';

const line = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1, ease: EASE } },
};

// Second line trails the first, so the pair reads as one gesture.
const track = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } };

/**
 * Two-line poster headline with a masked slide-up reveal.
 *
 * The viewport trigger lives on the outer element, never on the text that
 * moves. Putting it on the text deadlocks: the hidden state translates the
 * text fully outside its overflow-hidden parent, IntersectionObserver clips
 * against that ancestor and reports it as never visible, so the reveal never
 * fires and the headline stays invisible forever.
 */
export default function Headline({ top, bottom, as: Tag = 'h2', className = '' }) {
  return (
    <motion.div
      variants={track}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      <Tag className={`text-[clamp(2.25rem,5.2vw,4.25rem)] ${className}`}>
        {[top, bottom].map((text, i) => (
          <span key={i} className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className={`block ${i === 1 ? 'text-gold-grad glow-gold' : ''}`}
              variants={line}
            >
              {text}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
