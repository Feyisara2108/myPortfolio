import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';

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
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              All <span className="text-gradient">Projects</span>
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
                <div className="h-48 overflow-hidden relative border-b border-black/5 dark:border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Project+Mockup'; }}
                  />
                  {/* Decorative dots in corners of the image */}
                  <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-white/30 backdrop-blur-md"></div>
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/30 backdrop-blur-md"></div>
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-white/30 backdrop-blur-md"></div>
                  <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-white/30 backdrop-blur-md"></div>
                </div>
                
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-semibold text-textPrimary">
                    {project.title}
                  </h3>
                  <p className="text-sm text-textMuted line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="pt-2 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-5 py-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-textPrimary rounded-full text-xs font-medium transition-colors">
                      View Project <span className="ml-2 font-bold">&gt;</span>
                    </a>
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
