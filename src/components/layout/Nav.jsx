import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile, navItems } from '../../data/profile.js';

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide on scroll down, reveal on scroll up — keeps the viewport clear
  // while reading but puts navigation one gesture away.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A locked body behind an open menu prevents the page scrolling underneath.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-ink-900/80 backdrop-blur-xl border-b border-gold-700/20' : ''
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center py-3 font-mono text-sm text-bone-100 hover:text-gold-400 transition-colors"
          >
            {profile.wordmark}
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative flex items-center py-3 font-mono text-xs tracking-[0.15em] uppercase text-bone-400 hover:text-bone-100 transition-colors"
                >
                  {item.label}
                  <span className="absolute bottom-2 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.15em] uppercase text-gold-400 border border-gold-700/50 rounded-full px-5 py-2.5 hover:bg-gold-400 hover:text-ink-900 hover:border-gold-400 transition-all duration-300"
          >
            Let's talk
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-bone-100 p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink-900 md:hidden flex flex-col"
          >
            <div className="h-20 px-6 flex items-center justify-between">
              <span className="font-mono text-sm">{profile.wordmark}</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-bone-100 p-2 -mr-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="flex-1 flex flex-col justify-center gap-2 px-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-display text-4xl uppercase py-3 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="p-6">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-ink-900 bg-gold-400 rounded-full py-4"
              >
                Let's talk <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
