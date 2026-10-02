import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiArrowLeft } from 'react-icons/fi';
import { profileData, RESUME_URL } from '../data/profile';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { resumeData } from '../data/resume';

const SITE_URL = 'https://my-portfolio-eight-iota-82.vercel.app';
const stripProtocol = (url) => url.replace(/^https?:\/\//, '');

export default function Resume() {
  useEffect(() => {
    document.title = `${profileData.name} | Résumé`;
  }, []);

  const projects = resumeData.projectSlugs
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter(Boolean);

  const contactLinks = [
    { href: `mailto:${profileData.socials.email}`, label: profileData.socials.email },
    { href: SITE_URL, label: stripProtocol(SITE_URL) },
    { href: profileData.socials.github, label: stripProtocol(profileData.socials.github) },
    profileData.socials.linkedin && { href: profileData.socials.linkedin, label: stripProtocol(profileData.socials.linkedin) },
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-bg text-textPrimary font-sans transition-colors duration-300 print:bg-white">
      {/* Toolbar — hidden when printing */}
      <div className="print:hidden sticky top-0 z-40 backdrop-blur-md bg-bg/85 border-b border-line">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-textMuted hover:text-accent transition-colors">
            <FiArrowLeft size={16} /> Back to portfolio
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-textPrimary text-bg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <FiDownload size={16} /> Download PDF
          </a>
        </div>
      </div>

      {/* Resume sheet */}
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-12 print:py-0 print:px-0">
        <article className="bg-card print:bg-white rounded-lg print:rounded-none border border-line print:border-0 p-8 md:p-12 print:p-0 print:text-black">
          <header className="pb-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{profileData.name}</h1>
            <p className="text-lg text-accent font-semibold mt-1">{profileData.role}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-textMuted print:text-gray-600">
              <span>{profileData.location}</span>
              {contactLinks.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {l.label}
                </a>
              ))}
            </div>
          </header>

          <Block title="Summary">
            <p className="text-textMuted print:text-gray-700 leading-relaxed">{resumeData.summary}</p>
          </Block>

          <Block title="Technical Skills">
            <dl className="space-y-1.5">
              {profileData.skillGroups.map((g) => (
                <div key={g.category} className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                  <dt className="font-semibold w-40 shrink-0">{g.category}</dt>
                  <dd className="text-textMuted print:text-gray-700">{g.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="Experience">
            <div className="space-y-4">
              {experienceData.map((e) => (
                <div key={e.company}>
                  <Heading
                    title={<>{e.role}<span className="font-normal text-textMuted print:text-gray-600">, {e.company}</span></>}
                    meta={e.dates}
                  />
                  <Bullets items={e.highlights} />
                </div>
              ))}
            </div>
          </Block>

          <Block title="Projects">
            <div className="space-y-4">
              {projects.map((p) => (
                <div key={p.slug}>
                  <Heading
                    title={<>{p.title}{p.role && <span className="font-normal text-textMuted print:text-gray-600">, {p.role}</span>}</>}
                    meta={p.tags?.join(' · ')}
                  />
                  <p className="text-sm text-textMuted print:text-gray-700 leading-relaxed mt-0.5">{p.description}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Education">
            <div className="space-y-3">
              {resumeData.education.map((e) => (
                <div key={`${e.school}-${e.dates}`}>
                  <Heading
                    title={<>{e.school}<span className="font-normal text-textMuted print:text-gray-600">, {e.program}</span></>}
                    meta={e.dates}
                  />
                </div>
              ))}
            </div>
          </Block>
          <Block title="Achievements">
            <Bullets items={resumeData.achievements} />
          </Block>
        </article>
      </main>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="font-mono text-xs font-medium uppercase tracking-widest text-accent mb-2 pb-1 border-b border-line">{title}</h2>
      {children}
    </section>
  );
}

function Heading({ title, meta }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
      <h3 className="font-semibold">{title}</h3>
      {meta && <span className="text-xs text-textMuted print:text-gray-500">{meta}</span>}
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="mt-1 space-y-1">
      {items.map((item) => (
        <li key={item} className="text-sm text-textMuted print:text-gray-700 leading-relaxed flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
