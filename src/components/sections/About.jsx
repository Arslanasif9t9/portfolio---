import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel.jsx';
import Headline from '../ui/Headline.jsx';
import { profile } from '../../data/profile.js';
import { EASE, fadeUp, stagger, inView } from '../../lib/motion.js';
import portrait from '../../assets/profile.jpg';

/** Gold L-bracket. Four of these frame the portrait like a viewfinder. */
function Corner({ className }) {
  return (
    <span
      aria-hidden
      className={`absolute h-7 w-7 border-gold-400/70 ${className}`}
    />
  );
}

export default function About() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { available, label } = profile.availability;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%']);

  return (
    <section id="about" ref={ref} className="py-section px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="01">About</SectionLabel>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-start">
          <div>
            <Headline
              top={profile.about.headlineTop}
              bottom={profile.about.headlineBottom}
            />

            <div className="mt-9 max-w-xl">
              <motion.div
                variants={stagger(0.14)}
                initial="hidden"
                whileInView="show"
                viewport={inView}
                className="space-y-5"
              >
                {profile.about.body.map((para, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-[15px] md:text-base text-bone-400 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Portrait, framed like a viewfinder */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={inView}
            variants={stagger(0.12)}
            className="group relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <motion.div
              variants={{
                // Unmask upward rather than fading in — the image assembles
                // itself, which suits the stage-lighting motif next door.
                hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
                show: {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  transition: { duration: 1.25, ease: EASE },
                },
              }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <motion.img
                src={portrait}
                alt={`${profile.name}, ${profile.title}`}
                loading="lazy"
                className="h-[116%] w-full object-cover object-top grayscale-[0.22] sepia-[0.16] contrast-[1.06] brightness-[0.92] saturate-[0.95] transition-[filter] duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100"
                style={reduced ? undefined : { y: portraitY }}
              />

              {/* Warm the headshot toward the palette — but only tint it.
                  This previously also carried brightness 0.62, a flat ink wash
                  and a full-height floor gradient stacked together, which
                  buried the face. */}
              <div className="absolute inset-0 bg-gold-700/18 mix-blend-color" />
              {/* Rim-light down the right edge, echoing the hero spotlight. */}
              <div className="absolute inset-0 bg-gradient-to-l from-gold-400/14 via-transparent to-transparent" />
              {/* Floor only the bottom third, so the caption plate stays
                  readable without dimming the face above it. */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-900 via-ink-900/55 to-transparent" />

              {/* Status pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-gold-700/40 bg-ink-900/70 px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  {available && !reduced && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                  )}
                  <span
                    className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                      available ? 'bg-gold-400' : 'bg-bone-600'
                    }`}
                  />
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone-100">
                  {available ? label : 'Not taking work'}
                </span>
              </div>

              {/* Caption plate */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-display text-xl uppercase leading-none text-bone-100">
                  {profile.name}
                </div>
                <div className="mt-1.5 font-mono text-[9px] tracking-[0.22em] uppercase text-gold-400">
                  {profile.title}
                </div>
              </div>

              <Corner className="top-0 left-0 border-l-2 border-t-2" />
              <Corner className="top-0 right-0 border-r-2 border-t-2" />
              <Corner className="bottom-0 left-0 border-b-2 border-l-2" />
              <Corner className="bottom-0 right-0 border-b-2 border-r-2" />
            </motion.div>

            {/* Offset frame line */}
            <motion.div
              aria-hidden
              variants={fadeUp}
              className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-sm border border-gold-700/40"
            />
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold-700/25 border border-gold-700/25"
        >
          {profile.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group/stat bg-ink-900 px-6 py-9 text-center sm:text-left transition-colors duration-500 hover:bg-ink-800"
            >
              <div className="font-display text-4xl md:text-5xl text-gold-grad">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-bone-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
