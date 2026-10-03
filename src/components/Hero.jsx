import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { profileData, RESUME_URL } from '../data/profile';

export default function Hero() {
  return (
    <section id="home" className="px-5 md:px-8 pt-14 md:pt-20 pb-6 md:pb-10">
      <div className="max-w-5xl mx-auto fade-up">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          {profileData.name}
        </h1>
        <p className="mt-3 text-xl md:text-2xl text-accent font-medium">{profileData.role}</p>
        <div className="mt-6 max-w-2xl space-y-4 text-lg text-textMuted leading-relaxed">
          {profileData.tagline.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-textPrimary text-bg font-medium hover:opacity-90 transition-opacity"
          >
            See my work
            <FiArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-line font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <FiDownload size={16} /> Résumé (PDF)
          </a>
        </div>

        <p className="mt-6 text-sm text-textMuted">
          Based in {profileData.location}. {profileData.seeking}
        </p>
      </div>
    </section>
  );
}
