import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel.jsx';
import Headline from '../ui/Headline.jsx';
import { EASE, fadeIn, fadeUp, stagger, inView } from '../../lib/motion.js';
import { timeline, languages } from '../../data/experience.js';

const markers = {
  work: Briefcase,
  education: GraduationCap,
  award: Trophy,
};

const node = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

export default function Experience() {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  // The spine draws itself as the section scrolls past.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.65'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="py-section px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="04">Trajectory</SectionLabel>

        <Headline top="Where I've been," bottom="and what I led." />

        <div ref={ref} className="relative mt-16 pl-12 md:pl-20">
          {/* Spine */}
          <div className="absolute left-[15px] md:left-[23px] top-2 bottom-2 w-px bg-gold-700/25" />
          <motion.div
            className="absolute left-[15px] md:left-[23px] top-2 w-px bg-gold-400 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-8">
            {timeline.map((entry, i) => {
              const Icon = markers[entry.kind] ?? Briefcase;
              const isCurrent = entry.period.includes('Present');
              // Roles carry responsibilities and earn a full card; schooling
              // and the award are single facts, so they stay as light rows.
              // The alternating weight is what gives the column its rhythm.
              const isRole = entry.points.length > 0;

              return (
                <motion.div
                  key={`${entry.role}-${i}`}
                  variants={stagger(0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={inView}
                  className="relative"
                >
                  {/* Marker sits on the spine and lands before its content. */}
                  <motion.span
                    variants={node}
                    className={`absolute -left-12 md:-left-20 top-4 grid h-8 w-8 md:h-12 md:w-12 place-items-center rounded-full border bg-ink-800 ${
                      isCurrent
                        ? 'border-gold-400 text-gold-300'
                        : 'border-gold-700/50 text-gold-400'
                    }`}
                  >
                    {isCurrent && !reduced && (
                      <span className="absolute inset-0 animate-ping rounded-full border border-gold-400/60" />
                    )}
                    <Icon size={15} />
                  </motion.span>

                  {isRole ? (
                    <motion.article
                      variants={fadeIn}
                      className="panel rounded-lg p-6 md:p-8 hover:panel-lit transition-all duration-500"
                    >
                      <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                        <div>
                          <h3 className="text-xl md:text-2xl leading-tight">
                            {entry.role}
                          </h3>
                          <div className="mt-2 text-sm text-bone-400">
                            {entry.org}
                          </div>
                        </div>

                        <span
                          className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase ${
                            isCurrent
                              ? 'border-gold-400/60 bg-gold-400/10 text-gold-300'
                              : 'border-gold-700/40 text-bone-400'
                          }`}
                        >
                          {entry.period}
                        </span>
                      </header>

                      {/* Two columns on wide screens — one long ragged list
                          left half the row empty. */}
                      <motion.ul
                        variants={stagger(0.07, 0.12)}
                        className="mt-6 grid gap-x-10 gap-y-3 lg:grid-cols-2"
                      >
                        {entry.points.map((p) => (
                          <motion.li
                            key={p}
                            variants={fadeUp}
                            className="relative pl-5 text-[15px] leading-relaxed text-bone-400"
                          >
                            <span className="absolute left-0 top-[0.62em] h-1 w-1 rounded-full bg-gold-400/70" />
                            {p}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.article>
                  ) : (
                    <motion.div
                      variants={fadeIn}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-gold-700/20 py-5"
                    >
                      <div>
                        <h3 className="text-lg md:text-xl leading-tight">
                          {entry.role}
                        </h3>
                        <div className="mt-1.5 text-sm text-bone-400">
                          {entry.org}
                        </div>
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-bone-400">
                        {entry.period}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Languages */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 pl-12 md:pl-20"
        >
          <motion.span
            variants={fadeUp}
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold-700"
          >
            Languages //
          </motion.span>
          {languages.map((l) => (
            <motion.span
              key={l.name}
              variants={fadeUp}
              className="text-sm text-bone-400"
            >
              <span className="text-bone-100">{l.name}</span>
              <span className="mx-2 text-gold-700">—</span>
              {l.level}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
