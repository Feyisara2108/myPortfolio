import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaSun, FaMoon, FaAdjust } from 'react-icons/fa';
import { FiHome, FiFileText } from 'react-icons/fi';
import { profileData } from '../data/projects';
import { useTheme } from './ThemeProvider';
import { Link } from 'react-router-dom';

// Custom X (Twitter) Logo SVG
const XLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Navbar() {
  const { theme, cycleTheme } = useTheme();

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
      <nav className="pointer-events-auto bg-card/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full px-5 py-2.5 flex items-center justify-between gap-4 shadow-2xl transition-colors duration-300">
        <Link to="/" className="p-3 text-textMuted hover:text-textPrimary bg-transparent hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all" aria-label="Home">
          <FiHome size={22} />
        </Link>
        <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10 mx-1"></div>
        
        <div className="flex items-center gap-2">
          <a href={profileData.socials.twitter} target="_blank" rel="noreferrer" className="p-3 text-textMuted hover:text-textPrimary rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all" aria-label="Twitter">
            <XLogo size={20} />
          </a>
          <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="p-3 text-textMuted hover:text-textPrimary rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all" aria-label="Github">
            <FaGithub size={20} />
          </a>
          <a href="/#resume" className="p-3 text-textMuted hover:text-textPrimary rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all" aria-label="Resume">
            <FiFileText size={20} />
          </a>
        </div>
        
        <div className="w-[1px] h-6 bg-black/10 dark:bg-white/10 mx-1"></div>
        
        <a href={profileData.socials.blog} target="_blank" rel="noreferrer" className="ml-1 px-5 py-2 bg-textPrimary text-bg rounded-full font-medium text-sm hover:scale-105 transition-transform">
          My Blog
        </a>

        {/* Theme toggle integrated seamlessly */}
        <button onClick={cycleTheme} className="ml-1 p-2.5 text-textMuted hover:text-accent rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all" title={`Current theme: ${theme}`}>
          {getThemeIcon()}
        </button>
      </nav>
    </motion.div>
  );
}


