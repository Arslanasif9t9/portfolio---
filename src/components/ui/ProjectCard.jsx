import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { fadeUp, pop, stagger, inView, EASE } from '../../lib/motion.js';

/**
 * One project in the stack.
 *
 * Cards are sticky at staggered offsets so each new card slides over the
 * previous one; the outgoing card scales down and dims slightly, which reads
 * as depth rather than as content being covered up.
 */
export default function ProjectCard({ project, index, total }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.15', 'end 0.3'],
  });
  // Recede further and dim harder than before so the depth cue is legible
  // rather than a faint wobble as the next card slides over.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.18]);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(3px)']);

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `calc(6rem + ${index * 1.25}rem)` }}
    >
      <motion.article
        style={
          reduced || isLast ? undefined : { scale, opacity, filter: blur }
        }
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="panel rounded-lg overflow-hidden will-change-transform"
      >
        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          {/* Left — the pitch */}
          <div className="p-7 md:p-9">
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-gold-400">
              <span className="tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-gold-700">//</span>
              <span className="text-bone-400">{project.tag}</span>
            </div>

            <h3 className="mt-4 text-[clamp(1.6rem,2.9vw,2.5rem)] leading-[0.98]">
              {project.title}
            </h3>

            <p className="mt-4 max-w-lg text-[15px] md:text-base leading-relaxed text-bone-400">
              {project.description}
            </p>

            <motion.ul
              variants={stagger(0.05, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="mt-6 flex flex-wrap gap-2"
            >
              {project.tech.map((t) => (
                <motion.li
                  key={t}
                  variants={pop}
                  className="font-mono text-[10px] tracking-[0.12em] uppercase text-bone-400 border border-gold-700/35 rounded px-2.5 py-1.5"
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>

            {(project.live || project.github) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-ink-900 bg-gold-400 rounded-full px-6 py-3 hover:bg-gold-300 transition-colors"
                  >
                    View live
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-gold-400 border border-gold-700/50 rounded-full px-6 py-3 hover:border-gold-400 hover:bg-gold-400/10 transition-all"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right — the spec sheet */}
          <div className="border-t lg:border-t-0 lg:border-l border-gold-700/25 bg-ink-900/40 p-7 md:p-9 flex flex-col justify-center">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone-400 mb-6">
              <span className="text-gold-700">//</span> Stack details
            </div>
            <motion.dl
              variants={stagger(0.09, 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="space-y-0"
            >
              {project.metrics.map(([k, v]) => (
                <motion.div
                  key={k}
                  variants={fadeUp}
                  className="flex items-baseline justify-between gap-4 py-3 border-b border-gold-700/20 last:border-0"
                >
                  <dt className="font-mono text-[10px] tracking-[0.15em] uppercase text-bone-400 shrink-0">
                    {k}
                  </dt>
                  <dd className="text-right text-xs md:text-sm text-bone-100">
                    {v}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
