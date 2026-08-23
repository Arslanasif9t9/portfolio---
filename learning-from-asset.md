# Learning From Asset — Portfolio Design Reference

> Planning-only notes. Iss file mein wo sab kuch likha hai jo maine `asset/` folder ke screenshots aur video se samjha hai. Abhi koi code nahi likha gaya — sirf understanding capture ki gayi hai taake next step (actual build) mein reference ke taur pe use ho sake.

## 1. Source Material

- **`asset/Hero-video.mp4`** (~2.5 MB) — background video, jo hamare apne portfolio ke **Hero section ka background** banega (reference site mein wahan ek static/spotlight photo hai, hamare paas iski jagah ek video hai).
- **`asset/WhatsApp Unknown ....zip`** → already extracted to **`asset/design-screenshots/`** (29 images). Yeh ek Instagram Reel (by `sl_tech_journal`, caption: *"A cinematic portfolio where code meets storytelling..."*) ke phone-screenshots hain, jisme kisi laptop screen par ek portfolio website scroll ho rahi hai. Poora reel "POV: Your portfolio has more aura than your resume 🔥" caption ke sath hai.
- Reference site kisi aur developer (Damisetti Shamya Lohitha) ka apna real portfolio hai — **content copy nahi karna**, sirf **layout / structure / visual style / interaction pattern** copy karna hai. Hamara portfolio isi jaisa ya isse **behtar** design hona chahiye, content humara apna (user ka) hoga.
- Reference site tech clue: browser tab mein `localhost:5173` (Vite dev server) dikh raha hai → wo bhi ek React/Vite project tha. Humara folder bhi React project hai, so stack overlap likely hai.

## 2. Overall Visual Style (design language)

- **Theme:** Dark mode — deep navy/black background (`#0a0a12`-ish) poori site mein consistent.
- **Accent color:** Warm gold / amber / yellow (`#d4a437`-ish), headings aur highlights ke liye — bold, glowing/blurred text-shadow effect deta hai ("neon glow" look).
- **Typography:** Bade, bold, condensed/impact-style display font headings ke liye (jaise "I BUILD DIGITAL EXPERIENCES", "SELECTED WORKS. ENGINEERED VALUE.") — poster/cinematic feel. Body text chhota, thin, muted grey.
- **Mood:** Cinematic, moody, spotlight-lit — hero mein ek model/founder photo par upar se light beam gir rahi hai jaise stage spotlight, halka smoke/fog effect background mein.
- **Section numbering:** Har major section ko number label diya gaya hai — `01 / ABOUT ME`, `02 / FEATURED WORK`, `03 / TECH MATRIX`, `04 / EXPERIENCE` — editorial/portfolio-book jaisa feel.
- **Cards:** Golden thin border + glow, dark translucent/glass background, stacked/layered card effect (jaise multiple project cards ek dusre ke peeche stacked dikhte hain jab scroll hota hai).
- **Micro-copy:** Har section mein chhoti helper line hoti hai (e.g. "Scroll down to unfold the system architecture cards...").

## 3. Page Structure (sections, top → bottom)

### Navbar (sticky top)
- Left: name/logo — "LOHITHA."
- Center/right links: `ABOUT · PROJECTS · SKILLS · EXPERIENCE · CONTACT`
- Right CTA button: **"LET'S TALK →"**

### 00 / Hero Section
- Big bold headline: **"I BUILD DIGITAL EXPERIENCES"** (2 lines, gold gradient on key words).
- Subheading: role tags — `FULL STACK DEVELOPER · UI/UX DESIGNER · DATA SCIENCE`
- Short paragraph: value proposition ("I turn bold ideas into seamless digital experiences. Where frontend meets powerful backend, and code transforms vision into impact.")
- Two CTA buttons: **"EXPLORE MY WORK →"** (primary) and **"DOWNLOAD RESUME +"** (secondary/outline).
- Right side: full-height photo of person, cinematic spotlight beam from top-right, subtle smoke/fog, signature ("Lohitha") near photo.
- Small side tagline: "CODE IS MY CRAFT. IMPACT IS MY GOAL."
- **Hamare version mein:** yeh spotlight-photo hero ki jagah **background video (`Hero-video.mp4`)** use hoga — video ke upar dark overlay/gradient rakh kar text/CTA readable banaya jayega.

### 01 / About Me
- Section label: `01 / ABOUT ME`
- Big headline: **"I DON'T JUST WRITE CODE. I BUILD WHAT'S NEXT."**
- Bio paragraph (intro + specialization + approach).
- Framed portrait photo (gold border, signature bottom-right).
- **Stat strip** (4 stat blocks with big gold number + small caption):
  - `1200+` — DSA Solved
  - `9.07` — B.Tech CGPA
  - `40+` — Industry-grade Projects
  - `TOP 100` — Myntra HackRamp

### 02 / Featured Work (Projects)
- Section label: `02 / FEATURED WORK`
- Headline: **"SELECTED WORKS. ENGINEERED VALUE."**
- Helper line about scrolling to reveal architecture cards.
- Each project = a **stacked card** with:
  - Small category tag (e.g. `01 // AI / LEGAL-TECH PLATFORM`)
  - Project title (large, bold)
  - Description paragraph
  - Tech-stack pill/tag row (e.g. `REACT.JS`, `NODE.JS`, `DOCKER`, ...)
  - "**VIEW ON GITHUB →**" button
  - A right-side **"// ARCHITECTURE METRICS"** mini panel — key/value rows specific to the project (e.g. Platforms / Engine / Pipeline, or Model / Accuracy / Workload).
- Projects seen (4 total, content examples — **not to copy, just pattern reference**):
  1. **PolicyGuard AI** — AI/Legal-tech, NLP privacy-policy & contract analysis. Stack: React.js, React Native, Electron.js, Node.js, Express.js, MongoDB Atlas, Gemini API, NLP, Docker.
  2. **Software Release Risk Heatmap** — ML/Dev platform, Random Forest classifier, risk heatmap. Stack: React.js, TypeScript, Python, FastAPI, Scikit-learn, PostgreSQL, Tailwind CSS, REST APIs, JWT.
  3. **Multi-Tenant SaaS Platform** — Cloud/distributed system, RBAC, tenant isolation, containerized deployment.
  4. **Payment Gateway with Hosted Checkout** — Fintech/payment systems, multi-currency, UPI/Cards, webhook verification. Stack: Node.js, Spring Boot, PostgreSQL, React, Docker, REST APIs.

### 03 / Tech Matrix (Skills)
- Section label: `03 / TECH MATRIX`
- Headline: **"ARCHITECTURAL MASTERY. PRECISION APPLIED."**
- 4 quadrant cards, each with a category tag + title + short description + tech pills:
  1. **Core Pillar — Frontend Architecture** (React.js, React Native, Tailwind CSS, Electron.js)
  2. **High Concurrency — Distributed Backend** (Node.js, Express.js, Spring Boot, Docker, Redis)
  3. **Persistence — Data Platforms** (MongoDB Atlas, PostgreSQL, MySQL)
  4. **Intelligence — Algorithms & Machine Learning** (C++, Python, Java, Scikit-learn, OpenAI API) — includes its own stat like "1200+ solved".

### 04 / Experience & Milestones
- Section label: `04 / EXPERIENCE`
- Headline: **"EXPERIENCE & MILESTONES."**
- Timeline-style entries, first one seen: **"Full Stack & Mobile Intern"** with description + duration/company (cut off in captured screenshots — pattern is a vertical timeline list).

### (Not captured in screenshots, but implied by navbar)
- **Contact section** — navbar has `CONTACT` link + `LET'S TALK →` CTA, so a contact/footer section almost certainly exists further down (form or contact links + socials). Screenshots reel ended before reaching it.

## 4. Interaction / Motion Notes (inferred from reel)
- Scroll-triggered reveal animations — cards "unfold"/stack in as you scroll (mentioned explicitly: "Scroll down to unfold the system architecture cards").
- Parallax/tilt on the browser-window mockup in the reel itself (that's just the reel's own camera effect, not part of the site).
- Glow/blur text-shadow on gold headline words for emphasis.
- Smooth section-to-section scroll snapping feel (cinematic pacing).

## 5. What I Still Need From You (before building)
Content jo humein khud dena hoga (reference site ka content copy nahi karna):
1. Aapka naam, role/title(s), aur ek short tagline/value-prop.
2. About-me bio + koi stats jo aap dikhana chahen (jaise projects count, CGPA/experience, achievements — jo bhi applicable ho).
3. Projects list (kam se kam jitne dikhane hain) — har ek ka: title, short description, tech stack, GitHub/live link.
4. Skills — categories aur tools/tech aap ke hisab se.
5. Experience/education timeline entries.
6. Contact info — email, resume file, social links (LinkedIn, GitHub, etc.).
7. Aapki photo (agar hero/about mein chahiye — reference site jaisa portrait style), ya sirf video-bg hi hero mein kaafi hoga?

## 6. Next Step (once you say "go")
- Confirm/collect content from point 5 above.
- Set up React project structure (sections as components: Navbar, Hero(with video bg), About, Projects, Skills, Experience, Contact, Footer).
- Match/exceed the dark + gold cinematic aesthetic using our own video hero instead of the static spotlight photo.
