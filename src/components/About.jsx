import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/projects';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-12 w-full text-center"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-textPrimary">About</h2>
        
        <div className="space-y-6 text-lg md:text-xl text-textMuted leading-relaxed max-w-3xl mx-auto">
          {profileData.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {/* Polaroids */}
        <div className="flex justify-center items-center mt-16 pt-8 perspective-1000">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ scale: 1.08, rotate: -2, y: -10, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rotate-[-8deg] transform bg-[#fdfdfd] p-3 pb-12 rounded-sm shadow-2xl w-48 h-56 md:w-56 md:h-64 cursor-pointer border border-black/5"
          >
            <div className="w-full h-full bg-gray-200 overflow-hidden">
              <img 
                src="/images/RYEU4654.JPG" 
                alt="Working" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=Work+Image'; }}
              />
            </div>
            <span className="absolute bottom-4 w-full text-center text-xs md:text-sm font-medium text-black -ml-3">@ikr...</span>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            whileHover={{ scale: 1.08, rotate: 2, y: -10, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rotate-[8deg] transform bg-[#fdfdfd] p-3 pb-12 rounded-sm shadow-2xl w-48 h-56 md:w-56 md:h-64 -ml-12 cursor-pointer border border-black/5"
          >
            <div className="w-full h-full bg-gray-200 overflow-hidden">
              <img 
                src="/images/QKRU2729.JPG" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x500?text=Profile+Image'; }}
              />
            </div>
            <span className="absolute bottom-4 w-full text-center text-xs md:text-sm font-medium text-black -ml-3">@codewithhonour</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


