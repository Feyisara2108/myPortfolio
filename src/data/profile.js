// Fallback résumé served from /public. Set profileData.resumeUrl to override it
// with a hosted copy (Google Drive, Dropbox, etc.).
const LOCAL_RESUME = "/Mutmahinat-Arowolo-Resume.pdf";

export const profileData = {
  name: "Mutmahinat Feyisara Arowolo",
  nickname: "Ayokomi",
  role: "Frontend Engineer & Web3 Developer",
  location: "Lagos, Nigeria",
  // One factual line: what I build + the stack. No clichés, no "passionate".
  tagline: "I build production web apps with React, Next.js, and TypeScript, and the smart contracts behind them on Stellar, Ethereum, and Stacks.",
  resumeUrl: "",
  // Shown in the hero so recruiters see fit immediately.
  seeking: "Open to frontend and Web3 engineering roles.",
  // About copy: an engineer introducing themselves. Concise, factual, early-career-honest.
  bio: [
    "I'm a frontend engineer in Lagos. I work in React, Next.js, and TypeScript, currently as a Frontend Developer at TSWorld Tech, building the interfaces for Flux, an offline-resilience platform.",
    "I also write smart contracts, mostly Soroban (Rust) on Stellar, plus Solidity and Clarity. I founded and maintain StellarGive, rebuilt the Web3Ladies platform, and have had 100+ pull requests merged in other people's open-source projects. I trained at AltSchool Africa (Frontend Engineering diploma) and Web3Bridge Africa.",
  ],
  // Short proof points shown under the hero. Keep each one verifiable.
  stats: [
    { value: "100+", label: "PRs merged in other projects" },
    { value: "30", label: "contributors on StellarGive" },
    { value: "340+", label: "contract tests on StellarGive" },
    { value: "28", label: "CI workflows on StellarGive" },
  ],
  // "Beyond the code" in the About section: the parts of me a job title doesn't show.
  beyondCode: [
    {
      title: "Community",
      text: "At Web3Ladies I coordinate a mentorship program for 28 mentees and 4 mentors, from onboarding to deadlines to documentation.",
    },
    {
      title: "Writing",
      text: "10+ technical articles on Hashnode about frontend engineering, JavaScript, React, and blockchain development.",
      link: { href: "https://hashnode.com/@ayokomi", label: "Read on Hashnode" },
    },
    {
      title: "Hackathons",
      text: "Hack4Freedom, the Atrium UHI10 Hookathon, Scaffold Stacks, Monad, and DevCareer × Nomba. I like building something real against a deadline.",
    },
  ],
  socials: {
    twitter: "https://x.com/Ayokomi21",
    github: "https://github.com/Feyisara2108",
    linkedin: "", // Add once the account is restored; every LinkedIn link renders only when set.
    blog: "https://hashnode.com/@ayokomi",
    instagram: "https://instagram.com/mutmahinat_",
    email: "ayokomi2108@gmail.com",
  },
  // Categorized skills for the Skills section and the résumé. Every item is
  // demonstrated in a project or merged open-source work, nothing aspirational.
  skillGroups: [
    { category: "Languages", items: ["TypeScript", "JavaScript", "Rust", "Solidity", "Clarity", "SQL", "HTML", "CSS"] },
    { category: "Frontend", items: ["React", "Next.js (App Router)", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "React Hook Form + Zod", "React Router"] },
    { category: "Web3", items: ["Soroban (Stellar)", "Foundry", "Hardhat", "Uniswap v4 Hooks", "wagmi / viem", "Ethers.js", "Reown AppKit", "Stellar SDK + Freighter", "Stacks.js", "IPFS / Pinata"] },
    { category: "Backend & Data", items: ["Supabase (Postgres, Auth, RLS, Storage)", "Node.js", "Express", "REST APIs", "Firebase Auth"] },
    { category: "Testing & DevOps", items: ["Vitest", "Playwright", "Foundry tests", "GitHub Actions", "Codecov", "Docker", "Vercel"] },
  ],
};

export const RESUME_URL = profileData.resumeUrl || LOCAL_RESUME;
