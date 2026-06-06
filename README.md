# Mutmahinat Arowolo — Portfolio

Personal portfolio of **Mutmahinat Arowolo** (Ayokomi), a Frontend & Blockchain developer.
Showcases web3 / smart-contract work and frontend projects, with per-project case-study
pages and a downloadable résumé.

🔗 **Live:** https://my-portfolio-eight-iota-82.vercel.app

## Tech stack

- **React 19** + **Vite** (SPA, `react-router-dom`)
- **Tailwind CSS v4** with a custom theme (Charcoal + Amber; dark/light toggle)
- **Framer Motion** for animation
- **react-icons**

## Features

- Dark / light theme toggle (persisted to `localStorage`)
- Project **case-study pages** at `/projects/:slug` — overview, problem, contribution,
  architecture, features, and challenges, so contract-only projects with no live UI still
  tell a full story
- **Résumé** at `/resume` — print-optimized page plus a one-click PDF download
  (`/public/Mutmahinat-Arowolo-Resume.pdf`)
- Contact form via [formsubmit.co](https://formsubmit.co) with a spam honeypot and a
  `mailto:` fallback

## Project structure

```
src/
├── App.jsx                # Routes: / · /projects · /projects/:slug · /resume
├── data/projects.js       # Single source of truth: profile, projects, résumé, experience
├── components/            # Navbar, Hero, About, Projects, ProjectCover, Contact, …
└── pages/                 # Home, AllProjects, ProjectDetail, Resume
```

All site content lives in `src/data/projects.js`.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Résumé PDF

The downloadable PDF is generated from `resume/resume.html`:

```bash
soffice --headless --convert-to pdf --outdir public resume/resume.html
mv public/resume.pdf public/Mutmahinat-Arowolo-Resume.pdf
```

The `/resume` page also offers browser **Print → Save as PDF** for a copy that matches the
site styling.

## Deployment

Deployed on Vercel. `vercel.json` rewrites non-asset routes to `index.html` so SPA deep
links (e.g. `/resume`, `/projects/stellargive`) resolve on direct visit and refresh.
