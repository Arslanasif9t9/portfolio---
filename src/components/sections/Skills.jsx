import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel.jsx';
import Headline from '../ui/Headline.jsx';
import { fadeUp, pop, stagger, inView } from '../../lib/motion.js';
import { skillGroups, tooling } from '../../data/skills.js';

export default function Skills() {
  return (
    <section id="skills" className="py-section px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03">Tech Matrix</SectionLabel>

        <Headline top="The stack," bottom="and what I do with it." />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid md:grid-cols-2 gap-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="panel rounded-lg p-8 md:p-10 hover:panel-lit transition-all duration-500"
            >
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-gold-400">
                {group.kicker}
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl">{group.title}</h3>

              <p className="mt-4 text-[15px] leading-relaxed text-bone-400">
                {group.description}
              </p>

              {/* Pills arrive after their card has settled, so the card reads
                  first and the stack list fills in behind it. */}
              <motion.ul
                variants={stagger(0.045, 0.25)}
                className="mt-7 flex flex-wrap gap-2"
              >
                {group.tech.map((t) => (
                  <motion.li
                    key={t}
                    variants={pop}
                    className="font-mono text-[11px] tracking-[0.12em] uppercase text-bone-400 border border-gold-700/35 rounded px-2.5 py-1.5"
                  >
                    {t}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Tooling runs as a quiet single line — supporting cast, not headline. */}
        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <motion.span
            variants={pop}
            className="font-mono text-[11px] tracking-[0.22em] uppercase text-gold-700"
          >
            Tooling //
          </motion.span>
          {tooling.map((t, i) => (
            <motion.span
              key={t}
              variants={pop}
              className="font-mono text-[11px] tracking-[0.1em] uppercase text-bone-400"
            >
              {t}
              {i < tooling.length - 1 && (
                <span aria-hidden className="ml-3 text-gold-600">·</span>
              )}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
