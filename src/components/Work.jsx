import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { featuredProjects, projectsData } from '../data/projects';
import ProjectCover from './ProjectCover';
import Section from './Section';

const otherProjects = projectsData.filter((p) => !p.featured);

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
      <Link to={`/projects/${project.slug}`} className="group inline-flex items-center gap-1.5 text-accent hover:underline underline-offset-4">
        Case study <FiArrowRight className="transition-transform group-hover:translate-x-0.5" size={14} />
      </Link>
      {project.liveLink && (
        <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-textMuted hover:text-textPrimary">
          Live <FiArrowUpRight size={14} />
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-textMuted hover:text-textPrimary">
          <FaGithub size={14} /> Code
        </a>
      )}
    </div>
  );
}

export default function Work() {
  return (
    <Section id="work" title="Selected work" intro="Production apps and protocols I built or lead. Each one has a case study, the code, and a live version where one exists.">
      <div className="space-y-16 md:space-y-20">
        {featuredProjects.map((project, i) => (
          <article key={project.slug} className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <Link
              to={`/projects/${project.slug}`}
              className={`group/frame block rounded-lg overflow-hidden border border-line bg-card shadow-sm hover:shadow-md transition-shadow ${i % 2 ? 'md:order-2' : ''}`}
            >
              {/* Browser-window chrome so screenshots read as shipped products */}
              <div className="flex items-center gap-1.5 px-3 h-7 border-b border-line bg-bg" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                {project.liveLink && (
                  <span className="ml-3 truncate font-mono text-[10px] text-textMuted">
                    {project.liveLink.replace(/^https?:\/\//, '')}
                  </span>
                )}
              </div>
              <div className="aspect-[16/10] overflow-hidden">
                <ProjectCover project={project} className="group-hover/frame:scale-[1.02] transition-transform duration-500" />
              </div>
            </Link>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.status}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                <Link to={`/projects/${project.slug}`} className="hover:text-accent transition-colors">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-textMuted">{project.role}</p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-textMuted leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-xs text-textMuted">{project.tags.join(' · ')}</p>
              <div className="mt-5">
                <ProjectLinks project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-20 mb-4 text-lg font-semibold">More projects</h3>
      <ul className="divide-y divide-line border-y border-line">
        {otherProjects.map((project) => (
          <li key={project.slug} className="py-5 grid md:grid-cols-[1fr_auto] gap-3 md:gap-8 md:items-center">
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <Link to={`/projects/${project.slug}`} className="font-semibold hover:text-accent transition-colors">
                  {project.title}
                </Link>
                <span className="font-mono text-xs text-textMuted">{project.status}</span>
              </div>
              <p className="mt-1 text-sm text-textMuted leading-relaxed max-w-2xl">{project.tagline}</p>
            </div>
            <ProjectLinks project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
