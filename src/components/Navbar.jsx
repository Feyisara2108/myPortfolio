import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaSun, FaMoon, FaAdjust } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiHome, FiFileText } from 'react-icons/fi';
import { profileData } from '../data/projects';
import { useTheme } from './ThemeProvider';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    if (theme === 'light') return <FaSun size={18} />;
    if (theme === 'dim') return <FaAdjust size={18} />;
    return <FaMoon size={18} />;
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 w-full z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto bg-card/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full px-4 py-2 flex items-center justify-between gap-2 shadow-2xl transition-colors duration-300">
        <Link to="/" className="p-2.5 text-textMuted hover:text-textPrimary bg-transparent hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all" aria-label="Home">
          <FiHome size={20} />
        </Link>
        <div className="w-[1px] h-5 bg-black/10 dark:bg-white/10 mx-1"></div>
        
        <div className="flex items-center gap-1">
          <a href={profileData.socials.twitter} target="_blank" rel="noreferrer" className="p-2.5 text-textMuted hover:text-textPrimary rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all" aria-label="Twitter">
            <FaXTwitter size={18} />
          </a>
          <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="p-2.5 text-textMuted hover:text-textPrimary rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all" aria-label="Github">
            <FaGithub size={18} />
          </a>
          <a href="/#resume" className="p-2.5 text-textMuted hover:text-textPrimary rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all" aria-label="Resume">
            <FiFileText size={18} />
          </a>
        </div>
        
        <div className="w-[1px] h-5 bg-black/10 dark:bg-white/10 mx-1"></div>
        
        <a href={profileData.socials.blog} target="_blank" rel="noreferrer" className="ml-1 px-4 py-1.5 bg-textPrimary text-bg rounded-full font-medium text-xs hover:scale-105 transition-transform">
          My Blog
        </a>

        {/* Theme toggle integrated seamlessly */}
        <button onClick={toggleTheme} className="ml-1 p-2 text-textMuted hover:text-accent rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all" title={`Current theme: ${theme}`}>
          {getThemeIcon()}
        </button>
      </nav>
    </motion.div>
  );
}


