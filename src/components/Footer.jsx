import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { profileData } from '../data/projects';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 w-full mt-auto">
      <div className="max-w-[53rem] mx-auto px-6 py-10 flex flex-col items-center justify-center gap-6 text-center">
        <p className="text-textMuted text-sm font-medium">
          © {currentYear} Mutmahinat Feyisara Arowolo. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a href={profileData.socials.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 text-textMuted hover:text-textPrimary transition-all">
            <FaXTwitter size={16} />
          </a>
          <a href={profileData.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 text-textMuted hover:text-textPrimary transition-all">
            <FaGithub size={16} />
          </a>
          {profileData.socials.linkedin && (
            <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 text-textMuted hover:text-textPrimary transition-all">
              <FaLinkedin size={16} />
            </a>
          )}
          <a href={`mailto:${profileData.socials.email}`} aria-label="Email" className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 text-textMuted hover:text-textPrimary transition-all">
            <MdEmail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
