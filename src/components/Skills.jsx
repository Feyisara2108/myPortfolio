import {
  SiTypescript, SiJavascript, SiRust, SiSolidity, SiHtml5, SiCss, SiPostgresql,
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiShadcnui, SiReactquery, SiReacthookform, SiReactrouter,
  SiStellar, SiEthereum, SiWagmi, SiEthers, SiIpfs,
  SiSupabase, SiNodedotjs, SiExpress, SiFirebase,
  SiVitest, SiGithubactions, SiCodecov, SiDocker, SiVercel,
} from 'react-icons/si';
import { FiBox, FiCode } from 'react-icons/fi';
import { profileData } from '../data/profile';
import Section from './Section';

// Logo per skill, matched on the skill's leading word(s); anything without a
// brand logo falls back to a neutral glyph so the grid stays even.
const ICONS = [
  ['TypeScript', SiTypescript], ['JavaScript', SiJavascript], ['Rust', SiRust], ['Solidity', SiSolidity],
  ['SQL', SiPostgresql], ['HTML', SiHtml5], ['CSS', SiCss],
  ['React Hook Form', SiReacthookform], ['React Router', SiReactrouter], ['React', SiReact],
  ['Next.js', SiNextdotjs], ['Vite', SiVite], ['Tailwind', SiTailwindcss], ['shadcn', SiShadcnui], ['TanStack', SiReactquery],
  ['Soroban', SiStellar], ['Stellar', SiStellar], ['wagmi', SiWagmi], ['Ethers', SiEthers], ['IPFS', SiIpfs], ['Uniswap', SiEthereum],
  ['Supabase', SiSupabase], ['Node', SiNodedotjs], ['Express', SiExpress], ['Firebase', SiFirebase],
  ['Vitest', SiVitest], ['GitHub Actions', SiGithubactions], ['Codecov', SiCodecov], ['Docker', SiDocker], ['Vercel', SiVercel],
  ['Foundry', FiBox], ['Hardhat', FiBox],
];

const iconFor = (skill) => ICONS.find(([prefix]) => skill.startsWith(prefix))?.[1] ?? FiCode;

// Every item is demonstrated in a project or merged open-source work (see data/profile.js).
export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {profileData.skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-textMuted mb-3">{group.category}</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
              {group.items.map((item) => {
                const Icon = iconFor(item);
                return (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <Icon className="shrink-0 text-textMuted" size={17} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
