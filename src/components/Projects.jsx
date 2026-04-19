import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';

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
                className="bg-card border border-black/5 dark:border-white/5 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden group flex flex-col transition-all cursor-pointer"
              >
                <div className="h-48 sm:h-56 overflow-hidden relative border-b border-black/5 dark:border-white/5 bg-[#140b16]">
                  <img 
                    src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Decorative dots in corners of the image */}
                  <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-white/40 backdrop-blur-md"></div>
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/40 backdrop-blur-md"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-white/40 backdrop-blur-md"></div>
                  <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-white/40 backdrop-blur-md"></div>
                </div>
                
                <div className="p-6 space-y-3 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-display font-bold text-textPrimary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-textMuted max-w-sm mx-auto mb-4">
                    {project.description}
                  </p>
                  
                  <div className="pt-2 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center px-5 py-2.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-textPrimary rounded-full text-xs font-semibold transition-colors mx-auto">
                      View Project <span className="ml-2 font-bold">&gt;</span>
                    </a>
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
