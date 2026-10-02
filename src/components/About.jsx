import { FiArrowUpRight } from 'react-icons/fi';
import { profileData } from '../data/profile';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-[1fr_15rem] gap-10 md:gap-14">
        <div className="space-y-5 text-lg text-textMuted leading-relaxed max-w-2xl">
          {profileData.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <img
          src="/images/QKRU2729.JPG"
          alt={`Portrait of ${profileData.name}`}
          width="480"
          height="600"
          loading="lazy"
          className="w-40 md:w-full aspect-[4/5] object-cover rounded-lg border border-line order-first md:order-none"
        />
      </div>

      <h3 className="mt-14 mb-6 text-lg font-semibold">Beyond the code</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {profileData.beyondCode.map((item) => (
          <div key={item.title}>
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent">{item.title}</h4>
            <p className="mt-2 text-textMuted leading-relaxed">{item.text}</p>
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline underline-offset-4"
              >
                {item.link.label} <FiArrowUpRight size={13} />
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
