import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { profileData } from '../data/projects';

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
            <FaXTwitter size={16} />
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
