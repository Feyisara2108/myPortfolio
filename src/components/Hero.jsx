import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profileData, projectsData } from '../data/projects';
import Marquee from './Marquee';
import ProjectCover from './ProjectCover';

export default function Hero() {
  // Feature every project in the strip; ProjectCover renders a branded cover
  // for the ones without a screenshot so the marquee stays full and balanced.
  const projectItems = projectsData;

  return (
    <section id="home" className="pt-32 md:pt-40 pb-10 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
      <div className="w-full max-w-4xl max-auto text-center pb-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          {/* Avatar Image */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-xl mb-1">
            <img 
              src="/images/QKRU2729.JPG" 
              alt={profileData.name} 
              className="w-full h-full object-cover scale-105"
            />
          </div>
          
          {/* Text Content */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-bold font-display leading-[1.1] text-textPrimary tracking-tight">
              Hey, I'm {profileData.name} <br />
              <span className="text-2xl md:text-4xl lg:text-5xl">{profileData.role}</span>
            </h1>
            <p className="text-base md:text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
              {profileData.tagline}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a href="#contact" className="px-8 py-3.5 rounded-full bg-accent text-[#141413] font-semibold hover:opacity-90 transition-opacity">
              Hire Me
            </a>
            <a href="#contact" className="px-6 py-3.5 rounded-full border border-black/10 dark:border-white/10 text-textPrimary font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
              Available for projects
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Continuing Projects Marquee */}
      <div className="w-full mt-16 mb-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <Marquee
          items={projectItems}
          className="!border-transparent bg-transparent overflow-visible py-4"
          customAnimationDuration="55s"
          renderItem={(project) => (
            <Link
              to={`/projects/${project.slug}`}
              className="block w-[300px] md:w-[360px] relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-black/5 dark:border-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-card">
                <ProjectCover project={project} className="transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold text-white">{project.title}</span>
              </div>
            </Link>
          )}
        />
      </div>
    </section>
  );
}


