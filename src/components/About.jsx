import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/projects';
import Marquee from './Marquee';
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

export default function About() {
  return (
    <section id="about" className="py-10 px-6 md:px-12 max-w-3xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8 w-full text-center"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-textPrimary">About</h2>
        
        <div className="space-y-6 text-lg md:text-xl text-textMuted leading-relaxed max-w-3xl mx-auto">
          {profileData.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {/* Polaroids */}
        <div className="flex justify-center items-center mt-12 pt-4 perspective-1000">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ scale: 1.08, rotate: -2, y: -10, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rotate-[-8deg] transform bg-[#fdfdfd] p-3 pb-3 rounded-sm shadow-2xl w-40 h-48 md:w-48 md:h-56 cursor-pointer border border-black/5"
          >
            <div className="w-full h-full bg-gray-200 overflow-hidden">
              <img 
                src="/images/RYEU4654.JPG" 
                alt="Working" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            whileHover={{ scale: 1.08, rotate: 2, y: -10, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rotate-[8deg] transform bg-[#fdfdfd] p-3 pb-3 rounded-sm shadow-2xl w-40 h-48 md:w-48 md:h-56 -ml-12 cursor-pointer border border-black/5"
          >
            <div className="w-full h-full bg-gray-200 overflow-hidden">
              <img 
                src="/images/QKRU2729.JPG" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Slow Center Tech Stack Marquee */}
        <div className="w-full mt-16 max-w-sm mx-auto [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <Marquee 
            items={profileData.skills} 
            reverse={true} 
            className="!border-transparent bg-transparent py-2"
            customAnimationDuration="80s"
            renderItem={(skill) => (
              <div className="flex items-center text-textMuted/40 hover:text-textPrimary transition-colors duration-500 px-4 grayscale hover:grayscale-0 scale-75 md:scale-90">
                {iconMap[skill] || <span className="text-lg font-bold font-display uppercase tracking-wider">{skill}</span>}
              </div>
            )}
          />
        </div>
      </motion.div>
    </section>
  );
}


