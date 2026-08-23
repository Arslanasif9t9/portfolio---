# New Portfolio — Build Plan

> **Status:** Planning complete. No code written yet.
> **Source of content:** `F:\Work\React\portfolio--` (local) + `https://arslanasif9t9.github.io/portfolio--` (live) — both verified, they match.
> **Design reference:** `learning-from-asset.md` (cinematic dark+gold reel screenshots)
> **Goal:** New portfolio must beat **both** the reference site **and** the current portfolio.

---

## 1. Content Inventory (extracted — this is YOUR data)

### Identity
| Field | Value |
|---|---|
| Name | **Arslan Ahmad** |
| Current site title | Full Stack Developer |
| CV title | Ideator & Senior Web Developer |
| Logo/wordmark | `<Arslan.Dev />` |
| Tagline pool | Building Modern Web Applications · Full-Stack Web Developer · Powered by React & Laravel · Crafting Seamless User Experiences |
| Stack one-liner | React • Laravel • MySQL |

### Contact & Social
| Field | Value |
|---|---|
| Email | arslanahmadt58@gmail.com |
| Phone | **+92 345 0776252** ✅ confirmed |
| Location | **Narowal, Punjab, Pakistan** ✅ confirmed |
| WhatsApp | https://wa.me/923450776252 |
| LinkedIn | https://www.linkedin.com/in/arslan-ahmad-983834343/ |
| GitHub | https://github.com/Arslanasif9t9 |
| Facebook | https://www.facebook.com/arslan.asif.70412 |

### Professional Summary (from CV)
> Innovative Web Developer with **3+ years** of experience architecting high-performance, user-centric applications. Expertise in modern front-end frameworks and robust back-end systems using PHP and Laravel. Strong problem solver with a deep foundation in C++, OOP, and DSA. Proven track record of leading projects from wireframing to full-scale deployment.

### Experience
| Role | Company | Period |
|---|---|---|
| Senior Web Designer & Developer (**Team Lead**) | Mazain Solution, Narowal | Nov 2025 – Present |
| Full-Stack Developer (Academic & Freelance) | Project-Based Solutions | Jan 2021 – Oct 2025 |

**Team Lead bullets:** end-to-end delivery w/ 99.9% uptime · project lifecycle ownership · mentoring juniors via code review · performance + SEO optimization.
**Freelance bullets:** 10+ custom web solutions · complex C++/DSA algorithmic systems · ran a digital business venture · responsive design across devices.

### Education
| Institute | Qualification | Period |
|---|---|---|
| The Sahara University | Bachelor's in Information Technology | 2023 – Present |
| Punjab Group of College | Intermediate (ICS) | 2021 – 2022 |

### Awards
- **Best Programmer Award (2024)** — 1st Prize, cross-semester programming competition, IT Department.

### Languages
English (Professional) · Urdu (Native)

### Projects (6)
| # | Title | Category | Stack | Live | GitHub status |
|---|---|---|---|---|---|
| 1 | Multi-vendor E-Commerce Platform | Full-Stack | Laravel, MySQL, JS, HTML/CSS | arslan.mjcheezain.com | ❌ **404** |
| 2 | Al-Kuwait E-Commerce | Full-Stack | Laravel, MySQL, JS, HTML/CSS | alkuwait.mjcheezain.com | ❌ **404** |
| 3 | BlogSphere | Web App | Laravel, MySQL, JS, HTML/CSS | blogsphere.mjcheezain.com | ❌ **404** |
| 4 | IoT Automatic Car Parking | Hardware/IoT | Embedded C++, PHP, IoT, JS, MySQL | — | ❌ **404** |
| 5 | React TextUtils | React Tool | React, JS, HTML5, CSS3 | arslanasif9t9.github.io/react-text | ✅ 200 |
| 6 | iCoder Bootstrap Portal | Frontend | Bootstrap 5, HTML5, CSS3, JS | arslanasif9t9.github.io/iCoder_Bootstrap | ✅ 200 |

### Skills (current grouping)
- **Frontend:** HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React, Next.js
- **Backend:** PHP, Laravel, Node.js, Express, MySQL, MongoDB
- **Tools:** Git, GitHub, AWS
- **CV adds:** C, C++, OOP, DSA, VS Code, SQL Workbench, XAMPP

### Blog posts (4, all link to one placeholder `blog.pdf`)
Architecting Multi-Vendor Systems in Laravel · Bridging Software and Hardware: IoT Parking Systems · Mastering the Laravel Admin Dashboard · Text Manipulation in React: Beyond Basic Hooks

### Available Assets
| File | Location | Verdict |
|---|---|---|
| `Hero-video.mp4` (2.5 MB) | `asset/` | ✅ **Hero background** |
| `pro.jpeg` | old `public/` | ✅ **Best photo** — suit, studio-lit, blurred office bg. Perfect for cinematic framed portrait |
| `simple.jpeg` / `simple (1).jpg` | old `public/` | ⚠️ Casual, **green foliage bg** — clashes badly with dark theme. Skip, or needs background removal |
| `Arslan_Ahmad_CV.pdf` | old `public/` | ✅ Resume download |
| `video.mp4` | old `public/` | Currently the About-section "resume video" |

---

## 2. ⚠️ Problems Found in Current Portfolio (fix in new build)

| # | Issue | Detail |
|---|---|---|
| 1 | **4 broken GitHub links (404)** | Repos don't exist under those names. Real ones are likely: `mjcheezain`, `alkuwait-zone`, `BlogSphere`, `Automatic_CPS`. **Need your confirmation.** |
| 2 | **Phone number conflict** | Contact page: `+92 345 0776252` · CV: `+92 345 0778252`. Which is right? |
| 3 | **City conflict** | Contact page: `Lahore` · CV: `Narowal`. Which one to show? |
| 4 | **Contact form is fake** | `handleSubmit` only does `console.log` — messages go nowhere. |
| 5 | **Footer lies** | Says "Built using React & FastAPI" — there is no FastAPI in the project. |
| 6 | **Title inconsistency** | Site says "Full-Stack Web Developer", CV says "Ideator & Senior Web Developer". |
| 7 | **Blog is placeholder** | All 4 posts link to the same `blog.pdf`. |
| 8 | **Broken CSS class** | `overflowhidden` typo in HeroSection (missing dash). |
| 9 | **`z-index: -1` on Contact** | Pushes contact section behind background — fragile hack. |
| 10 | **Dead weight** | ~60 shadcn/ui components installed, only a handful used. Bloats the bundle. |
| 11 | **Imports from `public/`** | `import img from "../../public/pro.jpeg"` — anti-pattern, breaks Vite asset handling. Should live in `src/assets/`. |

---

## 3. Design Direction — How the New One Wins

### vs. Your Current Portfolio
| Aspect | Current | New |
|---|---|---|
| Palette | Neon cyan + magenta + purple (3 competing neons — noisy) | **Disciplined:** near-black + one warm gold accent |
| Hero | Small circular avatar, centered text, floating icons | **Full-bleed cinematic video** + oversized editorial type |
| Type | Orbitron (sci-fi, dated "gamer" feel) | **Editorial display** — bold condensed, poster-grade |
| Layout | Standard centered sections, uniform cards | **Numbered editorial sections** (`01 /`, `02 /`), asymmetric grids |
| Projects | 6 identical small cards in a grid | **Full-width stacked cards** that pin & unfold on scroll |
| Motion | Infinite pulsing orbs everywhere (distracting) | **Purposeful scroll-choreography** — reveals tied to reading order |
| Credibility | No metrics anywhere | **Stat strip** with real numbers |
| Links | 4 broken GitHub links | All verified before ship |

### vs. The Reference Site
| Aspect | Reference | New (better) |
|---|---|---|
| Hero media | Static spotlight photo | **Live video background** (you have the asset) |
| Motion | Basic scroll reveals | **Lenis smooth scroll** + scroll-linked pinning |
| Project cards | Static stack | **Interactive** — hover tilt, expandable metrics |
| Accessibility | Not considered | `prefers-reduced-motion`, keyboard nav, semantic HTML, AA contrast |
| Performance | Unknown | Video poster + lazy sections + code-split |
| Extra | — | Optional: your **AI chatbot** (already built) as a floating "Ask about me" |

### Palette (proposed)
```
--bg-900   #08080C   near-black canvas
--bg-800   #0E0E14   raised surface
--gold-400 #E8B44A   primary accent (headings, borders, CTAs)
--gold-300 #F5D68A   highlight / glow
--text-100 #F4F4F6   primary text
--text-400 #8A8A96   muted body
```
Single accent = far more premium than the current 3-neon mix.
*(Alternative: keep a cyan accent for continuity with your brand — your call, see §8.)*

### Typography
- **Display:** a bold condensed face (Anton / Archivo Black / Bebas Neue) for poster headlines
- **Body:** clean grotesque (Inter / Geist)
- **Mono:** JetBrains Mono for tags, section labels, code touches

---

## 4. Section Blueprint

| # | Section | Content | Key motion |
|---|---|---|---|
| — | **Nav** | `<Arslan.Dev />` + About·Work·Skills·Experience·Contact + "LET'S TALK" | Hide on scroll-down, reveal on up; blur backdrop |
| 00 | **Hero** | `Hero-video.mp4` bg + dark gradient · "I BUILD FOR THE WEB" (2-line, gold accent) · role tags · CTAs: *Explore Work* / *Download CV* | Video fades in, headline masks up line-by-line, scroll cue |
| 01 | **About** | `01 / ABOUT` · headline · CV summary · framed `pro.jpeg` (gold border, spotlight) | Portrait parallax, text stagger |
| 02 | **Stats** | 4 tiles: `3+` Years · `10+` Projects Delivered · `Best Programmer '24` · `Team Lead` | Count-up on enter |
| 03 | **Work** | `02 / SELECTED WORK` · 6 full-width stacked cards: category tag → title → desc → tech pills → Live + GitHub → **`// STACK DETAILS`** side panel | **Sticky stack** — cards pin and unfold on scroll |
| 04 | **Skills** | `03 / TECH MATRIX` · 4 quadrants: Frontend Architecture · Backend & APIs · Data Platforms · Core CS (C++/OOP/DSA) | Quadrants slide in from alternating sides |
| 05 | **Experience** | `04 / TRAJECTORY` · timeline: Mazain Solution (Team Lead) → Freelance → Education → Award | Vertical line draws as you scroll |
| 06 | **Contact** | `05 / CONTACT` · **working** form + email/phone/location + socials | Field focus glow, real submit state |
| — | **Footer** | Wordmark · honest build credit · year | — |

**Optional:** floating AI chatbot (port `PersonalChatbot` from old project).

---

## 5. Tech Stack Decision

**Fresh Vite project — not a copy of the old one.** The old one carries ~60 unused shadcn components and structural anti-patterns; a clean base is faster to build and lighter to ship.

| Layer | Choice | Why |
|---|---|---|
| Build | **Vite + React 18 + TypeScript** | Same as current — familiar, fast |
| Styling | **Tailwind CSS** | Already know it |
| Motion | **Framer Motion** | Already in your deps |
| Smooth scroll | **Lenis** | The single biggest "expensive site" upgrade |
| Scroll pinning | CSS `position: sticky` + Framer `useScroll` | No GSAP needed — lighter |
| Icons | **lucide-react** + **react-icons** | Already using |
| Forms | **Formspree** or **EmailJS** | Makes the form actually work, no backend |
| Deploy | **GitHub Pages** (`gh-pages`) | Same as current |

**Dropping:** all unused shadcn/radix, recharts, embla, react-day-picker, vaul, jspdf, html2canvas, react-to-print → much smaller bundle.

---

## 6. File Structure

```
new-portf-cl-inst/
├── asset/                        # existing — source material
├── learning-from-asset.md
├── PLAN.md                       # this file
├── public/
│   └── Arslan_Ahmad_CV.pdf
└── src/
    ├── assets/
    │   ├── hero-video.mp4
    │   └── profile.jpg
    ├── data/                     # ALL content lives here — edit text without touching JSX
    │   ├── profile.ts
    │   ├── projects.ts
    │   ├── skills.ts
    │   └── experience.ts
    ├── components/
    │   ├── layout/     Nav, Footer, SmoothScroll
    │   ├── sections/   Hero, About, Stats, Work, Skills, Experience, Contact
    │   └── ui/         SectionLabel, Headline, TechPill, StatTile, ProjectCard
    ├── hooks/          useScrollDirection, useCountUp, useReducedMotion
    ├── styles/         index.css (tokens)
    └── App.tsx
```

**Key idea:** content in `src/data/*.ts` — you can update any text/project/link without touching a single component.

---

## 7. Build Phases

| Phase | Work | Output |
|---|---|---|
| **0** | Scaffold Vite+TS+Tailwind, design tokens, fonts, copy assets | Empty themed shell |
| **1** | Layout: Nav + Footer + Lenis smooth scroll | Navigable frame |
| **2** | Hero with video bg + headline animation | The "wow" moment |
| **3** | About + Stats | Credibility block |
| **4** | Work section + sticky stacked cards | The centerpiece |
| **5** | Skills + Experience timeline | Depth |
| **6** | Contact with working form | Functional |
| **7** | Polish: responsive, reduced-motion, a11y, Lighthouse, verify every link | Ship-ready |
| **8** | Deploy to GitHub Pages | Live |

---

## 8. ✅ Decisions Locked

| Decision | Choice |
|---|---|
| **Palette** | **Gold/Amber on near-black** — `#08080C` bg, `#E8B44A` accent, `#F4F4F6` text, `#8A8A96` muted. Single accent, no cyan/magenta. |
| **City** | **Narowal, Punjab, Pakistan** |
| **Broken GitHub links** | **Remove the GitHub button** on the 4 affected projects — show **Live link only**. No broken links ship. |
| **Title** | **Senior Web Developer & Team Lead** |

**Consequence to note:** *IoT Automatic Car Parking* has neither a live URL nor a working repo → that card ships **without any link button**, presented as a showcase/case-study card only. If you want a link on it later, send a URL.

---

## 9. Build Status

**Stack shipped:** Vite 8 · React 18 · **JavaScript** · Tailwind 4.3 · Framer Motion 13 · Lenis 1.3
JS chosen over TS because the old project was TypeScript in name only (every component had untyped props) and this is a static frontend with no API contracts where types would pay off.

| Phase | Status |
|---|---|
| 0 — Scaffold, tokens, fonts, assets | ✅ Done |
| 1 — Nav, Footer, Lenis smooth scroll | ✅ Done |
| 2 — Hero (video bg, masked headline, parallax) | ✅ Done |
| 3 — About + framed portrait + stat strip | ✅ Done |
| 4 — Work (sticky stacked cards + spec panel) | ✅ Done |
| 5 — Skills matrix + Experience timeline | ✅ Done |
| 6 — Contact (working form) | ✅ Done |
| 7 — Responsive / a11y / Lighthouse polish | ⬜ Next |
| 8 — Deploy to GitHub Pages | ⬜ Pending |

**Verified:** production build passes · 6 sections render · 6 project cards · **5 live buttons, 2 source buttons** (zero broken links) · no console errors · no horizontal overflow.

**Bundle vs old portfolio:**
| | Old | New | Change |
|---|---|---|---|
| JS | 505 KB | 325 KB | **−36%** |
| CSS | 76 KB | 30 KB | **−61%** |
| npm packages | ~500 | 133 | **−73%** |

---

## 10. ⚠️ Action Items For You

1. **Your CV PDF is 23 MB.** The old one was 240 KB — the current file is ~95× larger because `Resume.tsx` rasterised it via `html2canvas` at `scale: 3` and embedded two huge images. It works, but it's a slow download and a heavy deploy. **Re-export it** from Word/Google Docs/Canva as a normal PDF (should land around 200–500 KB) and drop it into `public/Arslan_Ahmad_CV.pdf`.
2. **Contact form** currently opens the visitor's mail client with the message pre-composed — it works today, nothing is dropped. To receive messages directly in your inbox instead, create a free form at [formspree.io](https://formspree.io), copy the form ID, and paste it into `FORMSPREE_ID` at the top of `src/components/sections/Contact.jsx`.

## 11. ❓ Still Open (non-blocking)

1. Are the stat numbers right? Currently: `3+` years · `10+` projects · `2024` award · `Lead`. Change any in `src/data/profile.js`.
2. Keep the AI chatbot from the old project? (Already built — easy to port.)
3. Blog section — dropped for now since all 4 posts pointed at one placeholder PDF. Want it back with real posts?
4. Any project to add or remove?
5. Full-body photo on a plain background would let the hero carry a portrait like the reference. Right now the hero leans on the video, which is arguably stronger.

**Note on the photo:** `pro.jpeg` (suit) is the only one that suits a dark cinematic theme. The reference site used a full-body studio shot — we only have chest-up, so the hero will lean on the **video** instead of a portrait, and `pro.jpeg` goes in the framed About block. If you have a full-body photo on a plain background, send it and the hero can get even closer to the reference.
