import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiHome } from 'react-icons/fi';
import { profileData } from '../data/projects';
import { useTheme } from './ThemeProvider';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    if (theme === 'light') return <FaSun size={18} />;
    return <FaMoon size={18} />;
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 w-full z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto relative overflow-hidden flex items-center gap-1 rounded-[20px] border border-black/10 dark:border-white/10 bg-white/55 dark:bg-card/60 backdrop-blur-xl px-1.5 py-1.5 shadow-lg shadow-black/5">
        {/* 'Liquid glass' shine — inset highlight on the frosted panel */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[20px] [box-shadow:inset_1.5px_1.5px_1px_rgba(255,255,255,0.7),inset_-1px_-1px_1px_1px_rgba(255,255,255,0.45)] dark:[box-shadow:inset_1px_1px_1px_rgba(255,255,255,0.12),inset_-1px_-1px_1px_rgba(255,255,255,0.06)]"
        />

        <div className="relative z-10 flex items-center gap-1">
          <Link to="/" className="p-3 hover:px-4 text-textMuted hover:text-textPrimary hover:bg-black/5 dark:hover:bg-white/10 rounded-[15px] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,2.2)]" aria-label="Home">
            <FiHome size={19} />
          </Link>

          <a href={profileData.socials.twitter} target="_blank" rel="noreferrer" className="p-3 hover:px-4 text-textMuted hover:text-textPrimary rounded-[15px] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,2.2)]" aria-label="Twitter">
            <FaXTwitter size={17} />
          </a>
          <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="p-3 hover:px-4 text-textMuted hover:text-textPrimary rounded-[15px] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,2.2)]" aria-label="Github">
            <FaGithub size={17} />
          </a>

          {profileData.socials.linkedin && (
            <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 hover:px-4 text-textMuted hover:text-textPrimary rounded-[15px] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,2.2)]" aria-label="LinkedIn">
              <FaLinkedin size={17} />
            </a>
          )}

          <a href={profileData.socials.blog} target="_blank" rel="noreferrer" className="hidden sm:inline-block px-3 py-2 text-textMuted hover:text-textPrimary rounded-[15px] hover:bg-black/5 dark:hover:bg-white/10 font-medium text-xs whitespace-nowrap transition-all duration-300">
            Blog
          </a>

          <Link to="/resume" className="ml-1 px-5 py-2.5 bg-textPrimary text-bg hover:bg-accent rounded-[14px] font-semibold text-xs whitespace-nowrap hover:px-6 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,2.2)]">
            Resume
          </Link>

          <button onClick={toggleTheme} className="ml-0.5 p-2.5 text-textMuted hover:text-accent rounded-[14px] hover:bg-black/5 dark:hover:bg-white/10 transition-all" title={`Current theme: ${theme}`} aria-label="Toggle theme">
            {getThemeIcon()}
          </button>
        </div>
      </nav>
    </motion.div>
  );
}


