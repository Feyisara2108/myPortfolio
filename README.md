# Mutmahinat Feyisara Arowolo — Portfolio

Personal portfolio of **Mutmahinat Feyisara Arowolo** (Ayokomi), a Frontend Engineer & Web3 Developer.
Showcases production web apps, smart-contract projects, and open-source contributions, with
per-project case-study pages and an ATS-friendly downloadable résumé.

🔗 **Live:** https://my-portfolio-eight-iota-82.vercel.app

## Tech stack

- **React 19** + **Vite** (SPA, `react-router-dom`)
- **Tailwind CSS v4** with a custom theme (teal accent; dark/light toggle)
- **Framer Motion** for animation
- **react-icons**

## Features

- Dark / light theme toggle (persisted to `localStorage`)
- Project **case-study pages** at `/projects/:slug`: overview, problem, contribution,
  architecture, features, and challenges
- **Open Source** section listing merged pull requests to other projects
- **Résumé** at `/resume`, plus a one-click PDF download
  (`/public/Mutmahinat-Arowolo-Resume.pdf`) generated from the same data
- Contact form via [formsubmit.co](https://formsubmit.co) with a spam honeypot and a
  `mailto:` fallback

## Project structure

```
src/
├── App.jsx                # Routes: / · /projects · /projects/:slug · /resume · 404
├── data/
│   ├── profile.js         # Name, bio, socials, skills, résumé link
│   ├── projects.js        # Projects + case-study content (`featured` = shown on home)
│   ├── experience.js      # Roles with résumé bullet points
│   ├── openSource.js      # Merged PRs to other repositories
│   └── resume.js          # Résumé summary, project selection, education
├── components/            # Navbar, Hero, Projects, OpenSource, Contact, …
├── hooks/useTheme.js      # Theme context + hook
└── pages/                 # Home, AllProjects, ProjectDetail, Resume, NotFound
scripts/build-resume.mjs   # Generates the résumé HTML, Markdown, and PDF from src/data
```

All site content lives in `src/data/`.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # eslint
npm run resume   # regenerate the résumé PDF/HTML/Markdown from src/data
```

## Résumé PDF

The résumé is generated from `src/data/` so it always matches the site:

```bash
npm run resume
```

This writes `resume/resume.html`, `resume/Mutmahinat-Arowolo-Resume.md` (plain text for
pasting into application forms), and `public/Mutmahinat-Arowolo-Resume.pdf`. The PDF step uses a
local Chrome, Brave, or Edge; set `CHROME_PATH` to use another Chromium browser. The layout is
single-column with standard headings and no tables, so applicant tracking systems parse it cleanly.

## Deployment

Deployed on Vercel. `vercel.json` rewrites non-asset routes to `index.html` so SPA deep
links (e.g. `/resume`, `/projects/stellargive`) resolve on direct visit and refresh.
