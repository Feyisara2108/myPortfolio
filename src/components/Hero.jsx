import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { profileData, RESUME_URL } from '../data/profile';

export default function Hero() {
  return (
    <section id="home" className="px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
      <div className="max-w-5xl mx-auto fade-up">
        <p className="font-mono text-xs md:text-sm text-textMuted">
          {profileData.location} · {profileData.seeking}
        </p>
        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          {profileData.name}
        </h1>
        <p className="mt-3 text-xl md:text-2xl text-accent font-medium">{profileData.role}</p>
        <p className="mt-6 max-w-2xl text-lg text-textMuted leading-relaxed">{profileData.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
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

        <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden">
          {profileData.stats.map((s) => (
            <div key={s.label} className="bg-bg p-4 md:p-5">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl md:text-3xl font-semibold tracking-tight">{s.value}</span>
                <span className="block mt-1 text-sm text-textMuted leading-snug">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
