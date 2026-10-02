import { experienceData } from '../data/experience';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experienceData.filter((job) => !job.resumeOnly).map((job) => (
          <li key={`${job.company}-${job.role}`} className="grid md:grid-cols-[11rem_1fr] gap-2 md:gap-8">
            <p className="font-mono text-xs md:text-sm text-textMuted md:pt-1">{job.dates}</p>
            <div>
              <h3 className="font-semibold text-lg leading-snug">
                {job.role} <span className="text-textMuted font-normal">· {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-textMuted leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
