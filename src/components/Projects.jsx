import React from 'react';
import { motion } from 'framer-motion';
import { projectsData, profileData } from '../data/projects';
import Marquee from './Marquee';
import { Link } from 'react-router-dom';
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiSolidity, SiHtml5, SiCss } from 'react-icons/si';
import { FaHardHat, FaCube, FaLink } from 'react-icons/fa';

const iconMap = {
  "JavaScript": <SiJavascript size={36} />,
  "React": <SiReact size={36} />,
  "Next.js": <SiNextdotjs size={36} />,
  "Tailwind CSS": <SiTailwindcss size={36} />,
  "Solidity": <SiSolidity size={36} />,
  "Hardhat": <FaHardHat size={36} />,
  "Foundry": <FaCube size={36} />,
  "Wagmi": <FaLink size={36} />,
  "HTML": <SiHtml5 size={36} />,
  "CSS": <SiCss size={36} />
};

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      {/* Tech Stack Marquee Above Projects */}
      <div className="w-full mb-20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee 
          items={profileData.skills} 
          reverse={true} 
          className="!border-transparent bg-transparent"
          renderItem={(skill) => (
            <div className="flex items-center text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-500 px-8 grayscale hover:grayscale-0">
              {iconMap[skill] || <span className="text-xl font-bold font-display uppercase tracking-wider">{skill}</span>}
            </div>
          )}
        />
      </div>

      <div className="px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center md:text-left text-textPrimary">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.slice(0, 4).map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-card backdrop-blur-sm border border-black/5 dark:border-white/5 shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden group flex flex-col transition-all"
              >
                <div className="h-64 sm:h-72 overflow-hidden relative border-b border-black/5 dark:border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Project+Mockup'; }}
                  />
                  {/* Decorative dots in corners of the image */}
                  <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-white/30 backdrop-blur-md"></div>
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/30 backdrop-blur-md"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-white/30 backdrop-blur-md"></div>
                  <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-white/30 backdrop-blur-md"></div>
                </div>
                
                <div className="p-8 space-y-4 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-semibold text-textPrimary">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-textMuted line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="pt-2 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-2.5 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-textPrimary rounded-full text-sm font-medium transition-colors">
                      View Project <span className="ml-2 font-bold">&gt;</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/projects" className="px-8 py-3 rounded-full bg-black text-white hover:bg-black/90 transition-colors inline-flex items-center text-sm font-medium">
              View All <span className="ml-2 font-bold">&gt;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

