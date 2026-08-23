import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-gold-700/20 px-6 py-10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-mono text-sm text-bone-100">
          {profile.wordmark}
        </span>

        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-bone-400">
          Built with React &amp; Tailwind
        </p>

        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-bone-400">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-gold-700/35 text-bone-400 hover:text-gold-400 hover:border-gold-400 transition-all duration-300"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
