import { FiArrowUpRight } from 'react-icons/fi';
import { openSourceContributions, openSourceStats } from '../data/openSource';
import Section from './Section';

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      title="Open source"
      intro={`${openSourceStats.mergedPRs} pull requests merged across ${openSourceStats.repositories} repositories I don't own: Soroban contracts, React/Next.js frontends, tests, and CI. The biggest ones:`}
    >
      <ul className="divide-y divide-line border-y border-line">
        {openSourceContributions.map((c) => (
          <li key={c.repo}>
            <a
              href={`https://github.com/${c.repo}/pulls?q=is%3Apr+author%3AFeyisara2108+is%3Amerged`}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-4 md:grid-cols-[14rem_1fr_auto] md:items-baseline"
            >
              <span className="font-semibold group-hover:text-accent transition-colors">
                {c.name}
                <FiArrowUpRight className="inline ml-1 align-[-2px] text-textMuted" size={14} aria-hidden="true" />
              </span>
              <span className="font-mono text-xs text-textMuted md:order-3 whitespace-nowrap">
                {c.prs} merged
              </span>
              <span className="col-span-2 md:col-span-1 text-sm text-textMuted leading-relaxed">{c.summary}</span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={openSourceStats.prSearchUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4"
      >
        All merged pull requests on GitHub <FiArrowUpRight size={14} />
      </a>
    </Section>
  );
}
