import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCover from '../components/ProjectCover';
import { projectsData } from '../data/projects';

export default function AllProjects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-5 md:px-8 pt-12 pb-20">
        <div className="max-w-5xl mx-auto fade-up">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-textMuted hover:text-accent transition-colors">
            <FiArrowLeft size={14} /> Home
          </Link>
          <h1 className="mt-8 text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-3 text-textMuted max-w-2xl">
            Production apps, smart contracts, and hackathon builds, each with a case study.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <article key={project.slug} className="flex flex-col rounded-lg border border-line bg-card overflow-hidden">
                <Link to={`/projects/${project.slug}`} className="block aspect-[16/10] overflow-hidden border-b border-line">
                  <ProjectCover project={project} className="hover:scale-[1.02] transition-transform duration-500" />
                </Link>
                <div className="flex flex-col flex-1 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{project.status}</p>
                  <h2 className="mt-2 text-lg font-semibold">
                    <Link to={`/projects/${project.slug}`} className="hover:text-accent transition-colors">
                      {project.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-textMuted leading-relaxed flex-1">{project.tagline}</p>
                  <div className="mt-4 flex gap-4 text-sm font-medium">
                    <Link to={`/projects/${project.slug}`} className="text-accent hover:underline underline-offset-4">
                      Case study
                    </Link>
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-textMuted hover:text-textPrimary">
                        Live <FiArrowUpRight size={13} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-textMuted hover:text-textPrimary">
                        <FaGithub size={13} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
