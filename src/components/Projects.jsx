import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
import ProjectCover from './ProjectCover';

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center text-textPrimary">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.slice(0, 4).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-black/5 dark:border-white/5 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden group flex flex-col transition-all"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="h-52 sm:h-60 overflow-hidden relative border-b border-black/5 dark:border-white/5 bg-bg">
                    <ProjectCover project={project} className="opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    {project.status && (
                      <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 font-semibold">
                        {project.status}
                      </span>
                    )}
                  </div>
                </Link>

                <div className="p-6 space-y-3 flex flex-col flex-grow text-center">
                  <Link to={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-display font-bold text-textPrimary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-textMuted max-w-sm mx-auto mb-2">
                    {project.description}
                  </p>

                  {project.tags && (
                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-textMuted font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-2 mt-auto flex flex-wrap gap-2 justify-center">
                    <Link to={`/projects/${project.slug}`} className="inline-flex justify-center items-center px-5 py-2.5 bg-accent text-[#141413] hover:opacity-90 rounded-full text-xs font-semibold transition-opacity">
                      View Project <span className="ml-2 font-bold">&gt;</span>
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 px-5 py-2.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-textPrimary rounded-full text-xs font-semibold transition-colors">
                        <FaGithub size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/projects" className="px-8 py-3 bg-textPrimary text-bg rounded-full text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg font-display flex items-center justify-center">
              View All &gt;
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
