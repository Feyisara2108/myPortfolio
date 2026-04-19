import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { profileData } from '../data/projects';

// Custom X (Twitter) Logo SVG
const XLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 text-center border-t border-black/5 dark:border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <p className="text-textMuted text-sm font-medium">
          © {currentYear} Mutmahinat Arowolo. All rights reserved.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <a href={profileData.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 text-textMuted hover:text-textPrimary transition-all">
            <XLogo size={16} />
          </a>
          <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 text-textMuted hover:text-textPrimary transition-all">
            <FaGithub size={16} />
          </a>
          <a href={profileData.socials.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 text-textMuted hover:text-textPrimary transition-all">
            <FaInstagram size={16} />
          </a>
          <a href={`mailto:${profileData.socials.email}`} className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 text-textMuted hover:text-textPrimary transition-all">
            <MdEmail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
