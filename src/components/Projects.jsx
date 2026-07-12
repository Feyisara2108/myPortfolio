import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
import ProjectCover from './ProjectCover';

// Home grid leads with the visually-rich, live projects (real screenshots) for an
// at-a-glance polished feel. The full list — including the smart-contract work —
// lives on /projects.
const FEATURED_SLUGS = ['e-commerce', 'space-tourism', 'personal-finance-tracker', 'stellargive'];
const featuredProjects = FEATURED_SLUGS
  .map((slug) => projectsData.find((p) => p.slug === slug))
  .filter(Boolean);

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block w-full rounded-[20px] border border-line bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image sits in its own rounded frame with a slow zoom on hover */}
                  <div className="px-5 pt-5 pb-1">
                    <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden border border-line bg-bg">
                      <ProjectCover project={project} className="transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-4">
                    <h3 className="text-[22px] font-display font-semibold text-textPrimary mb-1.5 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-textMuted text-[15px] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 bg-textPrimary/[0.06] group-hover:bg-textPrimary/[0.12] text-textPrimary rounded-[14px] px-4 py-2.5 text-sm font-medium transition-all">
                      View Project
                      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/projects" className="group inline-flex items-center gap-2 px-7 py-3 bg-textPrimary text-bg rounded-[14px] text-sm font-semibold hover:opacity-90 transition-all font-display">
              View All
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
