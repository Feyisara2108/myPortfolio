import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import ProjectCover from '../components/ProjectCover';

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-textPrimary font-sans transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-textMuted hover:text-accent transition-colors mb-6">
              <span className="mr-2">←</span> Back to Portfolio
            </Link>
            <h1 className="text-3xl md:text-4xl font-display font-bold">
              All <span>Projects</span>
            </h1>
            <p className="text-textMuted mt-4 max-w-2xl">
              An archive of all my projects, experiments, and works.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-card backdrop-blur-sm border border-black/5 dark:border-white/5 shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden group flex flex-col transition-all"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="h-52 overflow-hidden relative border-b border-black/5 dark:border-white/5 bg-bg">
                    <ProjectCover project={project} className="group-hover:scale-105 transition-transform duration-500" />
                    {project.status && (
                      <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 font-semibold">
                        {project.status}
                      </span>
                    )}
                  </div>
                </Link>

                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <Link to={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-display font-semibold text-textPrimary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-textMuted line-clamp-3 mb-2">
                    {project.description}
                  </p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-textMuted font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 mt-auto flex flex-wrap gap-2">
                    <Link to={`/projects/${project.slug}`} className="inline-flex items-center px-5 py-2 bg-accent text-[#141413] hover:opacity-90 rounded-full text-xs font-semibold transition-opacity">
                      View Project <span className="ml-2 font-bold">&gt;</span>
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-textPrimary rounded-full text-xs font-medium transition-colors">
                        <FaGithub size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
