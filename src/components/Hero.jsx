import React from 'react';
import { motion } from 'framer-motion';
import { profileData, projectsData } from '../data/projects';
import Marquee from './Marquee';

export default function Hero() {
  const projectItems = projectsData.length > 0 ? projectsData : [
    { title: "Placeholder", image: "https://via.placeholder.com/600x400" },
    { title: "Placeholder2", image: "https://via.placeholder.com/600x400" }
  ];

  return (
    <section id="home" className="pt-32 md:pt-40 pb-10 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
      <div className="w-full max-w-4xl max-auto text-center pb-8 border-b border-black/5 dark:border-white/5 relative">
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-accent/5 to-transparent blur-3xl opacity-50 rounded-full"></div>
        
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
            <a href="#contact" className="px-8 py-3.5 rounded-full bg-textPrimary text-bg font-medium hover:opacity-90 transition-opacity">
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
      <div className="w-full mt-16 mb-4">
        <Marquee 
          items={projectItems} 
          className="!border-transparent bg-transparent overflow-visible py-4"
          renderItem={(project) => (
            <div className="w-[200px] md:w-[240px] relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform scale-100 hover:scale-105 hover:-translate-y-2 cursor-pointer border border-black/5 dark:border-white/5">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl relative bg-card">
                <img 
                  src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop"} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform"
                />
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}


