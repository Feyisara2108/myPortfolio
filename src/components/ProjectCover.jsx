import React from 'react';
import {
  SiSolidity, SiReact, SiJavascript, SiTypescript, SiRust, SiHtml5, SiCss, SiIpfs, SiStellar, SiEthereum,
} from 'react-icons/si';
import { FaCube, FaHardHat, FaShieldAlt, FaCode } from 'react-icons/fa';

// Pick a representative glyph for a project from its tags, so contract/backend
// projects with no screenshot still get a recognizable, branded cover.
const TAG_ICON = {
  Solidity: SiSolidity,
  React: SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Rust: SiRust,
  Soroban: SiStellar,
  Stellar: SiStellar,
  Ethereum: SiEthereum,
  HTML: SiHtml5,
  CSS: SiCss,
  IPFS: SiIpfs,
  Foundry: FaCube,
  Hardhat: FaHardHat,
  'EIP-2535': FaCube,
  'Merkle Tree': FaShieldAlt,
  'ERC-721': FaCube,
  'Open Source': FaCode,
};

function glyphFor(tags = []) {
  for (const tag of tags) {
    if (TAG_ICON[tag]) return TAG_ICON[tag];
  }
  return FaCode;
}

// If the project has a screenshot, show it; otherwise render a branded cover
// (faint tech glyph + title + primary tags) so every card communicates.
export default function ProjectCover({ project, className = '' }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} user interface`}
        width="1280"
        height="800"
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  const glyph = glyphFor(project.tags);

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center bg-bg p-6 text-center overflow-hidden">
      {React.createElement(glyph, { className: 'absolute -right-6 -bottom-6 text-textMuted/10', size: 150, 'aria-hidden': 'true' })}
      {React.createElement(glyph, { className: 'text-accent mb-3', size: 32, 'aria-hidden': 'true' })}
      <span className="text-lg md:text-xl font-display font-bold text-textPrimary leading-tight relative z-10">
        {project.title}
      </span>
      {project.tags && (
        <div className="mt-3 flex flex-wrap gap-1.5 justify-center relative z-10">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
