import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../../data/profile.js';
import { EASE, fadeUp, stagger } from '../../lib/motion.js';
import heroVideo from '../../assets/hero-video.mp4';
import heroPoster from '../../assets/hero-poster.jpg';

const line = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 1.05, ease: EASE } },
};

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const media = (
    <>
      {reduced ? (
        <img
          src={heroPoster}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[50%_18%]"
        />
      ) : (
        <video
          className="h-full w-full object-cover object-[50%_18%]"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      )}
    </>
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/*
        Desktop: the video owns the right half and the copy sits beside it on
        plain background, so the footage needs no darkening at all and the
        text keeps full contrast.
        Mobile: there is no room to sit side by side, so the video goes
        full-bleed behind the copy and does take an overlay to stay legible.
      */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={reduced ? undefined : { y: videoY }}
      >
        {/* The panel is narrower than the footage's 16:9, so object-cover
            scales by height and crops only sideways — object-position's Y
            value does nothing here, and shortening the panel would just
            shrink the subject. Instead the plate is over-tall and pushed
            down, which drops his head clear of the header while keeping him
            at full size. */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[53%] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full lg:top-[11%] lg:h-[115%]">
            {media}
          </div>
          {/* Feather the inner edge so the panel melts into the page
              instead of showing a hard vertical seam. */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent" />
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink-900 to-transparent" />
          <div className="hidden lg:block absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-900 via-ink-900/60 to-transparent" />
        </div>

        {/* Mobile-only legibility layer — never applied on desktop. */}
        <div className="lg:hidden absolute inset-0 bg-ink-900/70" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { y: contentY }}
        className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-20"
      >
        <motion.div
          className="lg:max-w-[46%]"
          variants={stagger(0.11)}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 font-mono text-[11px] tracking-[0.22em] uppercase text-bone-400"
          >
            {profile.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold-700">/</span>}
                {role}
              </span>
            ))}
          </motion.div>

          <h1 className="text-[clamp(2.75rem,6.4vw,5.5rem)]">
            {[profile.hero.headlineTop, profile.hero.headlineBottom].map(
              (text, i) => (
                <span key={i} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className={`block ${i === 1 ? 'text-gold-grad glow-gold' : ''}`}
                    variants={line}
                  >
                    {text}
                  </motion.span>
                </span>
              )
            )}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-[15px] md:text-base text-bone-400 leading-relaxed"
          >
            {profile.hero.blurb}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-gold-400 text-ink-900 font-mono text-xs tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:bg-gold-300 transition-colors duration-300"
            >
              Explore my work
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.cvPath}`}
              download
              className="inline-flex items-center gap-2 border border-gold-700/50 text-gold-400 font-mono text-xs tracking-[0.15em] uppercase px-7 py-3.5 rounded-full hover:border-gold-400 hover:bg-gold-400/10 transition-all duration-300"
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.9, ease: EASE }}
        className="absolute bottom-6 left-6 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center gap-1.5 text-bone-400 hover:text-gold-400 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  );
}
