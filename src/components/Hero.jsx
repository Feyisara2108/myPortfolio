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
    <section id="home" className="relative min-h-screen pt-32 pb-12 flex flex-col justify-between">
      <div className="px-6 flex items-center justify-center max-w-6xl mx-auto flex-grow w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center gap-6 w-full"
        >
          {/* Avatar Image */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-xl mb-2">
            <img 
              src="/images/QKRU2729.JPG" 
              alt={profileData.name} 
              className="w-full h-full object-cover scale-105"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/600x600?text=Profile+Image'; }}
            />
          </div>
          
          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold font-display leading-[1.1] text-textPrimary tracking-tight">
              Hey, I'm {profileData.name} <br />
              {profileData.role}
            </h1>
            <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto leading-relaxed">
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
            <div className="w-[300px] md:w-[350px] relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform scale-100 hover:scale-105 hover:-translate-y-2 cursor-pointer border border-black/5 dark:border-white/5">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl relative bg-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Project+Mockup'; }}
                />
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}


