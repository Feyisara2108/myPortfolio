import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiDownload, FiArrowLeft } from 'react-icons/fi';
import { profileData, resumeData, projectsData } from '../data/projects';

// Selected projects to feature on the resume (web3 depth + live frontend work).
const RESUME_PROJECT_SLUGS = [
  'stellargive', 'scholarchain', 'diamond-contract', 'multi-sig-wallet',
  'personal-finance-tracker', 'e-commerce',
];

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${profileData.name} | Résumé`;
  }, []);

  const featured = RESUME_PROJECT_SLUGS
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-bg text-textPrimary font-sans transition-colors duration-300 print:bg-white">
      {/* Toolbar — hidden when printing */}
      <div className="print:hidden sticky top-0 z-40 backdrop-blur-md bg-bg/80">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-textMuted hover:text-accent transition-colors">
            <FiArrowLeft size={16} /> Back to portfolio
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={profileData.resumeUrl || "/Mutmahinat-Arowolo-Resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-[#141413] rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <FiDownload size={16} /> Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Resume sheet */}
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-12 print:py-0 print:px-0">
        <article className="bg-card print:bg-white rounded-2xl print:rounded-none border border-black/5 dark:border-white/5 print:border-0 shadow-xl print:shadow-none p-8 md:p-12 print:p-0 print:text-black">
          {/* Header */}
          <header className="pb-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-display font-bold">{profileData.name}</h1>
            <p className="text-lg text-accent font-semibold mt-1">{profileData.role}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-textMuted print:text-gray-600">
              <a href={`mailto:${profileData.socials.email}`} className="hover:text-accent">{profileData.socials.email}</a>
              <span>·</span>
              <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="hover:text-accent">github.com/Feyisara2108</a>
              <span>·</span>
              <a href={profileData.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-accent">x.com/Ayokomi21</a>
              <span>·</span>
              <a href={profileData.socials.blog} target="_blank" rel="noreferrer" className="hover:text-accent">hashnode.com/@ayokomi</a>
            </div>
          </header>

          {/* Summary */}
          <Block title="Summary">
            <p className="text-textMuted print:text-gray-700 leading-relaxed">{resumeData.summary}</p>
          </Block>

          {/* Skills */}
          <Block title="Technical Skills">
            <dl className="space-y-1.5">
              {resumeData.competencies.map((c) => (
                <div key={c.label} className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                  <dt className="font-semibold w-40 shrink-0">{c.label}</dt>
                  <dd className="text-textMuted print:text-gray-700">{c.value}</dd>
                </div>
              ))}
            </dl>
          </Block>

          {/* Projects */}
          <Block title="Selected Projects">
            <div className="space-y-4">
              {featured.map((p) => (
                <div key={p.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="font-semibold">
                      {p.title}
                      {p.role && <span className="font-normal text-textMuted print:text-gray-600">, {p.role}</span>}
                    </h3>
                    <span className="text-xs text-textMuted print:text-gray-500">{p.tags?.join(' · ')}</span>
                  </div>
                  <p className="text-sm text-textMuted print:text-gray-700 leading-relaxed mt-0.5">{p.description}</p>
                </div>
              ))}
            </div>
          </Block>

          {/* Education */}
          <Block title="Training & Education">
            <div className="space-y-3">
              {resumeData.education.map((e, i) => (
                <div key={i}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="font-semibold">{e.school} <span className="font-normal text-textMuted print:text-gray-600">· {e.program}</span></h3>
                    <span className="text-xs text-textMuted print:text-gray-500">{e.dates}</span>
                  </div>
                  <p className="text-sm text-textMuted print:text-gray-700 mt-0.5">{e.detail}</p>
                </div>
              ))}
            </div>
          </Block>

          {/* Open source */}
          <Block title="Open Source & Community">
            <ul className="space-y-1.5">
              {resumeData.openSource.map((item, i) => (
                <li key={i} className="text-sm text-textMuted print:text-gray-700 flex gap-2">
                  <span className="text-accent">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Block>
        </article>
      </main>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{title}</h2>
      {children}
    </section>
  );
}
