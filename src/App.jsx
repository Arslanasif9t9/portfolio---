import { useSmoothScroll } from './hooks/useSmoothScroll.js';
import Nav from './components/layout/Nav.jsx';
import ScrollProgress from './components/layout/ScrollProgress.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Work from './components/sections/Work.jsx';
import Skills from './components/sections/Skills.jsx';
import Experience from './components/sections/Experience.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold-400 focus:text-ink-900 focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
