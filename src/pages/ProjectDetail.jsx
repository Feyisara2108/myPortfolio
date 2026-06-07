import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { getProjectBySlug } from '../data/projects';
import ProjectCover from '../components/ProjectCover';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-textMuted leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-textPrimary flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-display font-bold mb-4">Project not found</h1>
          <Link to="/projects" className="text-accent underline underline-offset-4">
            Back to all projects
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-textPrimary font-sans transition-colors duration-300 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-medium text-textMuted hover:text-accent transition-colors mb-8"
          >
            <span className="mr-2">←</span> All projects
          </Link>

          {/* Header */}
          <div className="space-y-4 mb-10">
            {project.status && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent">
                {project.status}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              {project.title}
            </h1>
            {project.tagline && (
              <p className="text-lg md:text-xl text-textMuted max-w-2xl">{project.tagline}</p>
            )}

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-accent text-[#141413] hover:opacity-90 rounded-full text-sm font-semibold transition-opacity"
                >
                  Live Demo <span className="ml-2 font-bold">&gt;</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-textPrimary rounded-full text-sm font-semibold transition-colors"
                >
                  <FaGithub size={16} /> View Code
                </a>
              )}
              {project.metadataUrl && (
                <a
                  href={project.metadataUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-textPrimary rounded-full text-sm font-semibold transition-colors"
                >
                  Token Metadata (IPFS)
                </a>
              )}
            </div>
          </div>

          {/* Cover */}
          <div className="rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 shadow-xl aspect-[16/9] mb-12 bg-card">
            <ProjectCover project={project} />
          </div>

          {/* Case study */}
          <div className="space-y-10">
            {project.overview && (
              <Section title="Overview">
                <p className="text-textMuted leading-relaxed text-base md:text-lg">{project.overview}</p>
              </Section>
            )}
            {project.problem && (
              <Section title="Problem">
                <p className="text-textMuted leading-relaxed text-base md:text-lg">{project.problem}</p>
              </Section>
            )}
            {project.contribution?.length > 0 && (
              <Section title={project.role ? `My Contribution` : 'What I Built'}>
                <BulletList items={project.contribution} />
              </Section>
            )}
            {project.architecture?.length > 0 && (
              <Section title="Technical Architecture">
                <BulletList items={project.architecture} />
              </Section>
            )}
            {project.features?.length > 0 && (
              <Section title="Key Features">
                <BulletList items={project.features} />
              </Section>
            )}
            {project.challenges?.length > 0 && (
              <Section title="Challenges Solved">
                <BulletList items={project.challenges} />
              </Section>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-14 pt-8 flex flex-wrap items-center justify-between gap-4">
            <Link to="/projects" className="text-sm font-medium text-textMuted hover:text-accent transition-colors">
              ← Back to all projects
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#141413] hover:opacity-90 rounded-full text-sm font-semibold transition-opacity"
              >
                <FaGithub size={16} /> Explore the Code
              </a>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
