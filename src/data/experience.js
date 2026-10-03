// Shown on the home page and on the résumé, newest first. `resumeOnly` entries
// are covered elsewhere on the site (the Open Source section) and skipped there.
export const experienceData = [
  {
    role: "Frontend Developer",
    company: "TSWorld Tech",
    location: "Remote",
    dates: "May 2026 – Present",
    highlights: [
      "Build the user-facing interfaces for Flux, a browser-native state synchronization and offline-resilience platform, in Next.js, React, TypeScript, and Tailwind CSS.",
      "Turn product requirements and sprint plans into responsive frontend features, working with engineers and designers.",
      "Proposed implementation approaches and engineering improvements that the team adopted; authored the company's Strategic Distribution & Partnership Intelligence Database.",
    ],
  },
  {
    role: "Founder & Maintainer",
    company: "StellarGive (open source)",
    location: "Remote",
    dates: "May 2026 – Present",
    highlights: [
      "Maintain a Soroban crowdfunding protocol and its Next.js app; recognized as an official Drips open-source maintainer.",
      "Review and merge work from about 30 contributors; the contract is covered by 340+ Rust tests.",
      "Built the CI/CD: 28 GitHub Actions workflows covering tests, CodeQL, secret scanning, Lighthouse, Playwright E2E, and contract deploy/rollback.",
    ],
  },
  {
    role: "Technical Program Operations & Documentation Volunteer",
    company: "Web3Ladies",
    location: "Remote",
    dates: "Apr 2025 – Present",
    highlights: [
      "Rebuilt and launched the organization's website and admin portal in Next.js 16, TypeScript, and Supabase (Postgres, Auth, Row Level Security, Storage), replacing a no-code site.",
      "Coordinate onboarding and communications for 28 mentees and 4 mentors, and write the program's documentation, forms, and participant materials.",
    ],
  },
  {
    role: "Smart Contract Developer, Cohort 14",
    company: "Web3Bridge Africa",
    dates: "Jan 2026 – May 2026",
    highlights: [
      "Built and tested Solidity contracts with Foundry and Hardhat: an EIP-2535 Diamond with ERC-20, ERC-721, and lending facets, a multi-signature wallet, and token and airdrop contracts.",
      "Led a five-developer team through the ScholarChain capstone: planned the work, reviewed and merged pull requests, and coordinated the frontend-to-contract integration.",
    ],
  },
  {
    role: "Open-Source Contributor",
    company: "Stellar & Ethereum ecosystem",
    resumeOnly: true,
    location: "Remote",
    dates: "2025 – Present",
    highlights: [
      "100+ pull requests merged across 40+ external repositories: Soroban contracts, Next.js/React frontends, and Node.js backends.",
      "Shipped contract features (escrow events, vote delegation, multi-token payouts, batch escrow release), a security fix adding admin auth to fund reclaims, and state-machine, edge-case, and E2E tests.",
    ],
  },
];
