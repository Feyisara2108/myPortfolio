import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import { getProjectBySlug } from '../data/projects';
import ProjectCover from '../components/ProjectCover';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFound from './NotFound';

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-textMuted leading-relaxed">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const navigate = useNavigate();
  // 'default' means the visitor landed here directly (no in-app page to go back to).
  const cameFromSite = useLocation().key !== 'default';

  if (!project) {
    return <NotFound message="Project not found" backTo="/projects" backLabel="Back to all projects" />;
  }

  // Only the sections a project has data for are rendered.
  const sections = [
    { title: 'What I did', items: project.contribution },
    { title: "How it's built", items: project.architecture },
    { title: 'Hard parts', items: project.challenges },
  ].filter((s) => s.items?.length);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-5 md:px-8 pt-12 pb-20">
        <article className="max-w-3xl mx-auto fade-up">
          {cameFromSite ? (
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-accent transition-colors"
            >
              <FiArrowLeft size={14} /> Back
            </button>
          ) : (
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-accent transition-colors">
              <FiArrowLeft size={14} /> All projects
            </Link>
          )}

          <header className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.status}</p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">{project.title}</h1>
            <p className="mt-4 text-lg md:text-xl text-textMuted">{project.tagline}</p>
            {project.role && (
              <p className="mt-4 text-sm text-textMuted">
                <span className="font-semibold text-textPrimary">Role:</span> {project.role}
              </p>
            )}
            <p className="mt-2 font-mono text-xs text-textMuted">{project.tags.join(' · ')}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-textPrimary text-bg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Live site <FiArrowUpRight size={15} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-line text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  <FaGithub size={15} /> Source code
                </a>
              )}
            </div>
          </header>

          <div className="mt-10 rounded-lg overflow-hidden border border-line aspect-[16/10] bg-card">
            <ProjectCover project={project} />
          </div>

          <div className="mt-10 space-y-5 text-lg text-textMuted leading-relaxed">
            <p>{project.overview}</p>
            {project.problem && <p>{project.problem}</p>}
          </div>

          {sections.map((s) => (
            <section key={s.title} className="mt-10">
              <h2 className="text-xl font-semibold mb-4">{s.title}</h2>
              <BulletList items={s.items} />
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  );
}
