import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/projects';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-4xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-12 overflow-x-hidden"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center md:text-left text-textPrimary">
          Work Experience
        </h2>
        
        <div className="flex flex-col space-y-4">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 px-4 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all group"
            >
              {/* Date */}
              <div className="text-textMuted text-[15px] font-medium mb-3 md:mb-0 w-48">
                {item.dates}
              </div>
              
              {/* Role & Company */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 flex-grow text-left md:text-right justify-end">
                <span className="text-lg md:text-xl font-semibold text-textPrimary group-hover:text-accent transition-colors">
                  {item.role}
                </span>
                <span className="hidden md:inline text-textMuted">at</span>
                <div className="flex items-center gap-2 border border-black/10 dark:border-white/10 px-4 py-1.5 rounded-full bg-white/5 text-sm md:text-base text-[#4d7ef2] font-medium w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d7ef2]"></span>
                  {item.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
