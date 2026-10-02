// Builds the downloadable résumé from the same data the site renders, so the
// PDF, the /resume page, and the Markdown copy never drift apart.
//
//   npm run resume
//
// Writes resume/resume.html and resume/Mutmahinat-Arowolo-Resume.md, then prints
// the HTML to public/Mutmahinat-Arowolo-Resume.pdf with a local Chromium browser
// (Chrome, Brave, Edge, or CHROME_PATH). The layout is single-column with
// standard headings and no tables, which applicant tracking systems parse reliably.
import { spawn } from 'node:child_process';
import { copyFileSync, existsSync, mkdtempSync, statSync, writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { profileData } from '../src/data/profile.js';
import { projectsData } from '../src/data/projects.js';
import { experienceData } from '../src/data/experience.js';
import { resumeData } from '../src/data/resume.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://my-portfolio-eight-iota-82.vercel.app';

const strip = (url) => url.replace(/^https?:\/\//, '').replace(/^mailto:/, '');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const { socials } = profileData;
const contacts = [
  profileData.location,
  socials.email,
  strip(SITE_URL),
  strip(socials.github),
  socials.linkedin && strip(socials.linkedin),
].filter(Boolean);

const projects = resumeData.projectSlugs.map((slug) => {
  const p = projectsData.find((x) => x.slug === slug);
  if (!p) throw new Error(`resumeData.projectSlugs: unknown project "${slug}"`);
  return p;
});

// ---------- HTML (source of the PDF) ----------
const entry = (title, meta, body) => `
  <div class="entry">
    <div class="head"><span class="title">${title}</span><span class="meta">${meta}</span></div>
    ${body}
  </div>`;
const bullets = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(profileData.name)} - Resume</title>
<style>
  @page { size: A4; margin: 1.2cm 1.4cm; }
  body { font-family: Arial, Helvetica, sans-serif; color: #1a1a1a; font-size: 9.6pt; line-height: 1.38; margin: 0; }
  h1 { font-size: 19pt; margin: 0; }
  .role { font-weight: bold; font-size: 11pt; margin: 1pt 0 3pt; }
  .contact { font-size: 8.8pt; color: #333; margin: 0 0 4pt; }
  h2 { font-size: 10pt; text-transform: uppercase; letter-spacing: 0.8px; margin: 10pt 0 4pt; padding-bottom: 1.5pt; border-bottom: 1px solid #999; }
  p { margin: 2pt 0; }
  .entry { margin: 0 0 6pt; break-inside: avoid; }
  .head { display: flex; justify-content: space-between; gap: 8pt; }
  .title { font-weight: bold; }
  .meta { color: #444; font-size: 8.8pt; white-space: nowrap; }
  ul { margin: 2pt 0 0; padding-left: 13pt; }
  li { margin: 1pt 0; }
  .skills p { margin: 1.5pt 0; }
</style>
</head>
<body>
  <h1>${esc(profileData.name)}</h1>
  <div class="role">${esc(profileData.role)}</div>
  <div class="contact">${contacts.map(esc).join(' | ')}</div>

  <h2>Summary</h2>
  <p>${esc(resumeData.summary)}</p>

  <h2>Skills</h2>
  <div class="skills">
    ${profileData.skillGroups.map((g) => `<p><b>${esc(g.category)}:</b> ${esc(g.items.join(', '))}</p>`).join('\n    ')}
  </div>

  <h2>Experience</h2>
  ${experienceData.map((e) => entry(`${esc(e.role)}, ${esc(e.company)}`, `${esc(e.dates)}${e.location ? ` | ${esc(e.location)}` : ''}`, bullets(e.highlights))).join('')}

  <h2>Projects</h2>
  ${projects.map((p) => entry(
    `${esc(p.title)}${p.role ? `, ${esc(p.role)}` : ''}`,
    esc(p.tags.join(', ')),
    `<p>${esc(p.description)}</p><p class="meta">${strip(p.liveLink || p.github)}</p>`,
  )).join('')}

  <h2>Education</h2>
  ${resumeData.education.map((e) => entry(`${esc(e.school)}, ${esc(e.program)}`, esc(e.dates), '')).join('')}

  <h2>Achievements</h2>
  ${bullets(resumeData.achievements)}
</body>
</html>
`;

// ---------- Markdown (plain-text copy for pasting into application forms) ----------
const md = [
  `# ${profileData.name}`,
  `**${profileData.role}**`,
  '',
  contacts.join(' | '),
  '',
  '## Summary',
  resumeData.summary,
  '',
  '## Skills',
  ...profileData.skillGroups.map((g) => `- **${g.category}:** ${g.items.join(', ')}`),
  '',
  '## Experience',
  ...experienceData.flatMap((e) => [`### ${e.role}, ${e.company}`, `*${e.dates}${e.location ? ` | ${e.location}` : ''}*`, ...e.highlights.map((h) => `- ${h}`), '']),
  '## Projects',
  ...projects.flatMap((p) => [
    `### ${p.title}${p.role ? `, ${p.role}` : ''}`,
    `*${p.tags.join(', ')}* | ${strip(p.liveLink || p.github)}`,
    p.description,
    '',
  ]),
  '## Education',
  ...resumeData.education.flatMap((e) => [`### ${e.school}, ${e.program}`, `*${e.dates}*`, '']),
  '## Achievements',
  ...resumeData.achievements.map((a) => `- ${a}`),
].join('\n');

const htmlPath = join(root, 'resume/resume.html');
writeFileSync(htmlPath, html);
writeFileSync(join(root, 'resume/Mutmahinat-Arowolo-Resume.md'), md);
console.log('wrote resume/resume.html and resume/Mutmahinat-Arowolo-Resume.md');

// ---------- PDF ----------
const browsers = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);
const browser = browsers.find((b) => existsSync(b));

if (!browser) {
  console.warn('No Chromium browser found; set CHROME_PATH to also regenerate the PDF.');
} else {
  const tmp = mkdtempSync(join(tmpdir(), 'resume-'));
  const profileDir = join(tmp, 'profile');
  const tmpPdf = join(tmp, 'resume.pdf');

  // Print once. Some Chromium builds (Brave) keep running after printing, so we
  // wait for the file to finish writing and stop the browser ourselves.
  const print = async (timeoutMs) => {
    const child = spawn(browser, [
      '--headless=new',
      '--no-first-run',
      `--user-data-dir=${profileDir}`,
      '--no-pdf-header-footer',
      `--print-to-pdf=${tmpPdf}`,
      `file://${htmlPath}`,
    ], { stdio: 'ignore' });
    try {
      let lastSize = -1;
      for (let waited = 0; waited < timeoutMs; waited += 500) {
        await sleep(500);
        const size = existsSync(tmpPdf) ? statSync(tmpPdf).size : 0;
        if (size > 0 && size === lastSize) return true;
        lastSize = size;
      }
      return false;
    } finally {
      child.kill('SIGKILL');
    }
  };

  // Brave can stall on the first launch of a fresh profile, so retry once.
  if (!(await print(25_000)) && !(await print(40_000))) {
    throw new Error('Timed out waiting for the browser to print the PDF.');
  }
  copyFileSync(tmpPdf, join(root, 'public/Mutmahinat-Arowolo-Resume.pdf'));
  console.log('wrote public/Mutmahinat-Arowolo-Resume.pdf');
}
