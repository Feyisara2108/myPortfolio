import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiDownload, FiMail } from 'react-icons/fi';
import { SiHashnode } from 'react-icons/si';
import { profileData, RESUME_URL } from '../data/profile';
import Section from './Section';

const linkClass =
  'inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-line text-sm font-medium hover:border-accent hover:text-accent transition-colors';

export default function Contact() {
  const { socials } = profileData;

  return (
    <Section
      id="contact"
      title="Contact"
      intro="I'm looking for frontend and Web3 engineering roles. Email is the best way to reach me."
    >
      <a
        href={`mailto:${socials.email}`}
        className="inline-flex items-center gap-3 text-xl md:text-3xl font-semibold tracking-tight hover:text-accent transition-colors break-all"
      >
        <FiMail className="shrink-0" /> {socials.email}
      </a>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={RESUME_URL} target="_blank" rel="noreferrer" className={linkClass}>
          <FiDownload size={15} /> Résumé
        </a>
        <a href={socials.github} target="_blank" rel="noreferrer" className={linkClass}>
          <FaGithub size={15} /> GitHub
        </a>
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            LinkedIn
          </a>
        )}
        <a href={socials.twitter} target="_blank" rel="noreferrer" className={linkClass}>
          <FaXTwitter size={14} /> X
        </a>
        <a href={socials.blog} target="_blank" rel="noreferrer" className={linkClass}>
          <SiHashnode size={14} /> Blog
        </a>
      </div>
    </Section>
  );
}
