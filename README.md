# Portfolio — Arslan Ahmad

Personal portfolio site. Senior Web Developer & Team Lead, Narowal, Pakistan.

**Live:** https://arslanasif9t9.github.io/portfolio---/

## Stack

Vite 8 · React 18 (JavaScript) · Tailwind CSS 4 · Framer Motion · Lenis

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built output
npm run deploy   # build + publish dist/ to the gh-pages branch
```

## Editing content

All copy lives in `src/data/` — no component edits needed:

| File | Holds |
| --- | --- |
| `profile.js` | Name, title, hero copy, stats, contact details, socials, availability pill |
| `projects.js` | Project cards, in display order |
| `skills.js` | The four tech-matrix groups plus the tooling line |
| `experience.js` | Timeline entries and languages |

## Notes

- **Contact form** currently opens the visitor's mail client with the message
  pre-composed, so nothing is lost. To receive messages directly instead,
  create a free form at [formspree.io](https://formspree.io) and paste its ID
  into `FORMSPREE_ID` at the top of `src/components/sections/Contact.jsx`.
- **`public/Arslan_Ahmad_CV.pdf` is ~23 MB.** It works, but every visitor who
  clicks *Download CV* pulls that much. Re-exporting it from Word, Google Docs
  or Canva as a normal PDF should land nearer 200–500 KB.
- `asset/` is git-ignored: it holds the original uncompressed hero video and
  reference screenshots. The shipped video (338 KB) and its poster live in
  `src/assets/`.
