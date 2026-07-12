export const profileData = {
  name: "Mutmahinat Feyisara Arowolo",
  nickname: "Ayokomi",
  role: "Frontend Engineer & Web3 Developer",
  // One factual line: what I build + the stack. No clichés, no "passionate".
  tagline: "I build responsive, accessible web apps with React, Next.js, and TypeScript — and the Web3 layer that connects them to Ethereum and Stellar smart contracts.",
  // Résumé link used by every "Download Résumé" CTA. Paste your hosted résumé URL
  // (Google Drive, Dropbox, etc.) here; until then it falls back to the local PDF.
  resumeUrl: "",
  // Roles I'm actively looking for — surfaced in the hero so recruiters see fit immediately.
  rolesSeeking: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Web3 Frontend Developer",
  ],
  // About copy: an engineer introducing themselves. Concise, factual, early-career-honest.
  bio: [
    "I'm a frontend engineer focused on React, Next.js, and TypeScript, styling with Tailwind CSS. I build responsive, accessible interfaces and wire them to on-chain logic — wallet connections, contract calls, and data dashboards.",
    "I trained in frontend engineering at AltSchool Africa and in blockchain development at Web3Bridge Africa. My work spans production React apps and tested smart contracts on Ethereum (Solidity, Foundry, Hardhat) and Stellar (Soroban, Rust). I care about clean component structure, test coverage, and shipping to production.",
  ],
  socials: {
    twitter: "https://x.com/Ayokomi21",
    github: "https://github.com/Feyisara2108",
    linkedin: "", // TODO: add LinkedIn profile URL — top recruiter channel
    blog: "https://hashnode.com/@ayokomi",
    instagram: "https://instagram.com/mutmahinat_",
    email: "ayokomi2108@gmail.com"
  },
  // Flat list used by the decorative marquees. Only tech demonstrated in the projects below.
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Solidity",
    "Foundry",
    "Hardhat",
    "HTML",
    "CSS"
  ],
  // Categorized skills for the recruiter-facing Skills section. Every item is
  // demonstrated in a project or the résumé — nothing aspirational.
  skillGroups: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Solidity", "Rust (Soroban)", "HTML", "CSS"] },
    { category: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router"] },
    { category: "Web3", items: ["Foundry", "Hardhat", "Soroban", "ERC-20 / ERC-721", "IPFS / Pinata", "Merkle proofs"] },
    { category: "Tooling & Deployment", items: ["Git & GitHub", "GitHub Actions", "Codecov", "Vercel"] },
  ],
};

// Resume content rendered on /resume (screen + print). Single source of truth so the
// page, the "Download PDF" print view, and the static PDF never drift apart.
export const resumeData = {
  summary:
    "Frontend & blockchain developer specializing in scalable React/Next.js interfaces and secure smart contracts on Ethereum (Solidity, Foundry, Hardhat) and Stellar (Soroban, Rust). Comfortable across the full dApp stack: writing and testing contracts, deploying to testnets, and building the frontends that consume them. Active open-source contributor in the web3 ecosystem.",
  competencies: [
    { label: "Languages", value: "JavaScript, TypeScript, Solidity, Rust (Soroban), HTML5, CSS3" },
    { label: "Frontend", value: "React, Next.js, Vite, Tailwind CSS, Framer Motion, React Router; Vue (familiar)" },
    { label: "Blockchain", value: "Foundry, Hardhat, Soroban; contract development & testing; ERC-20 / ERC-721; EIP-2535 Diamond proxy; multi-signature wallets; Merkle-proof verification; IPFS / Pinata; testnet deployment (Sepolia, Stellar testnet)" },
    { label: "Practices & Tooling", value: "Git & GitHub, GitHub Actions (CI/CD), Codecov, Vercel, responsive & accessible UI" },
  ],
  education: [
    {
      school: "AltSchool Africa",
      program: "Software Engineering, Frontend Track",
      dates: "Nov 2024 – Present",
      detail: "Structured frontend engineering program covering modern JavaScript, React, Next.js, TypeScript, and professional software practices.",
    },
    {
      school: "Web3Bridge Africa",
      program: "Blockchain Development Cohort",
      dates: "Jan 2025 – Apr 2025",
      detail: "Advanced smart-contract development on Ethereum and Stellar; Solidity, Foundry, Hardhat, Soroban.",
    },
    {
      school: "Web3Bridge Africa",
      program: "Blockchain Development Cohort",
      dates: "Aug 2024 – Nov 2024",
      detail: "Foundations of blockchain and smart-contract engineering.",
    },
  ],
  openSource: [
    "Leading contributor to open-source web3 protocols (e.g. StellarGive on Stellar Soroban — 180+ commits, top contributor).",
    "Participant in hackathons and collaborative team builds within the Stellar and Ethereum ecosystems.",
    "Technical writer on Hashnode (hashnode.com/@ayokomi).",
  ],
};

// Each project includes case-study content used on its /projects/:slug detail page.
// Fields: slug, title, tagline, description (card), status, role, tags, github,
// liveLink, image, overview, problem, contribution[], architecture[], features[], challenges[].
export const projectsData = [
  {
    slug: "stellargive",
    title: "StellarGive",
    tagline: "Transparent on-chain crowdfunding on Stellar Soroban.",
    description: "Transparent crowdfunding protocol on Stellar Soroban. Leading contributor (180+ commits) who built smart-contract logic and tests for a testnet-deployed donation platform with full CI/CD.",
    role: "Lead open-source contributor",
    status: "Open source · Stellar testnet",
    github: "https://github.com/Feyisara2108/stellargive",
    liveLink: null,
    image: null,
    tags: ["Soroban", "Rust", "Stellar", "Open Source"],
    overview:
      "StellarGive is an open-source crowdfunding protocol built on the Stellar network using Soroban smart contracts (written in Rust). Donations and campaign state live entirely on-chain, so every contribution is publicly verifiable rather than trusted to a central platform.",
    problem:
      "Traditional crowdfunding relies on a trusted intermediary that holds the funds and reports where they went. Donors have no cryptographic guarantee that money reaches the campaign, and platforms can freeze or skim balances. StellarGive removes that trust assumption by settling everything on a public ledger.",
    contribution: [
      "Top contributor to the protocol with 180+ commits as an open-source collaborator.",
      "Implemented and refined Soroban smart-contract logic for campaign and donation flows.",
      "Wrote contract tests to validate behaviour and guard against regressions.",
      "Worked within a CI/CD pipeline (GitHub Actions) with Codecov coverage reporting.",
    ],
    architecture: [
      "Soroban smart contracts (Rust) deployed to the Stellar testnet.",
      "On-chain campaign and contribution state for full transparency.",
      "GitHub Actions CI running the test suite on every push, with Codecov reporting.",
    ],
    features: [
      "Create transparent fundraising campaigns on-chain.",
      "Publicly verifiable donations recorded on the Stellar ledger.",
      "Tested contract logic backed by continuous integration.",
    ],
    challenges: [
      "Working in Rust/Soroban's resource-metered environment, where contract storage and execution cost must be kept lean.",
      "Collaborating in an open-source codebase, matching existing conventions and keeping tests green across contributors.",
    ],
  },
  {
    slug: "scholarchain",
    title: "ScholarChain",
    tagline: "On-chain grant funding with Soul-Bound proof-of-grant.",
    description: "A decentralized grant protocol that distributes funding on-chain and issues Soul-Bound Tokens as immutable 'proof of grant'. Solidity + Foundry (100% coverage), React, IPFS via Pinata, quorum voting on Sepolia.",
    role: "Team project",
    status: "Team project · Ethereum Sepolia",
    github: "https://github.com/Feyisara2108/scholarChain",
    liveLink: null,
    image: null,
    tags: ["Solidity", "Foundry", "React", "IPFS"],
    overview:
      "ScholarChain is a decentralized grant protocol that distributes funding entirely on-chain. Approved recipients receive a Soul-Bound Token (SBT), a non-transferable NFT that acts as immutable, verifiable 'proof of grant'. Built as a team project on Ethereum (Sepolia).",
    problem:
      "Grant and scholarship distribution is opaque: applicants can't see how decisions are made, and 'proof' that someone received a grant is easily forged or lost. ScholarChain makes approvals transparent and the resulting credential permanent and tamper-proof.",
    contribution: [
      "Contributed 42 commits (2nd of 6 contributors) to the on-chain grant-distribution logic in Solidity.",
      "Helped implement Soul-Bound Token issuance as non-transferable proof of grant.",
      "Worked on the Foundry test suite that reached 100% coverage.",
      "Integrated proposal metadata storage on IPFS via Pinata.",
    ],
    architecture: [
      "Solidity contracts for grant proposals, quorum voting, and fund release on Sepolia.",
      "Soul-Bound (non-transferable) ERC-721-style tokens minted to approved recipients.",
      "Proposal metadata pinned to IPFS through Pinata, referenced on-chain by hash.",
      "React frontend for browsing proposals and interacting with the protocol.",
      "Foundry for testing and deployment (100% coverage).",
    ],
    features: [
      "Transparent quorum voting by designated signers.",
      "Immutable, non-transferable proof-of-grant credentials (SBTs).",
      "Decentralized, on-chain fund distribution.",
      "Off-chain metadata stored on IPFS for cost efficiency.",
    ],
    challenges: [
      "Designing tokens to be permanently non-transferable while still standards-friendly.",
      "Coordinating contract, tests, and frontend across a team and reaching full test coverage.",
    ],
  },
  {
    slug: "diamond-contract",
    title: "Diamond Contract (EIP-2535)",
    tagline: "Upgradeable NFT-collateralized lending via the Diamond proxy standard.",
    description: "An upgradeable NFT-collateralized lending protocol built with the Diamond proxy standard. Multiple facets (ERC-20, ERC-721, borrowing) deployed to the Sepolia testnet via Foundry.",
    status: "Ethereum Sepolia",
    github: "https://github.com/Feyisara2108/Diamond-Contract",
    liveLink: null,
    image: null,
    tags: ["Solidity", "Foundry", "Hardhat", "EIP-2535"],
    overview:
      "An upgradeable, NFT-collateralized lending protocol built on the EIP-2535 'Diamond' proxy standard. The system is split into independent facets (ERC-20, ERC-721, and borrowing) that share a single storage layout, allowing logic to be upgraded without redeploying or migrating state.",
    problem:
      "A monolithic contract hits the 24KB size limit and can't be upgraded without redeploying and migrating everything. The Diamond standard solves both: it routes calls to small, swappable facets behind one address, so the protocol can grow and be patched in place.",
    contribution: [
      "Implemented the Diamond (EIP-2535) proxy with a diamondCut for adding/replacing facets.",
      "Built separate ERC-20, ERC-721, and borrowing facets over shared diamond storage.",
      "Wrote deployment and verification scripts and deployed to Sepolia via Foundry.",
    ],
    architecture: [
      "EIP-2535 Diamond proxy routing function calls to registered facets.",
      "Facets: ERC-20 (loan/collateral token), ERC-721 (NFT collateral), and borrowing logic.",
      "Shared 'diamond storage' pattern to avoid storage-collision across facets.",
      "Foundry (and Hardhat) for compilation, testing, and Sepolia deployment.",
    ],
    features: [
      "Modular, upgradeable contract logic with no full redeploy.",
      "NFT-collateralized borrowing flow.",
      "Clean separation of token and lending concerns into facets.",
    ],
    challenges: [
      "Avoiding storage-slot collisions between facets, the core hazard of the Diamond pattern.",
      "Keeping the diamondCut upgrade path safe so logic can change without corrupting state.",
    ],
  },
  {
    slug: "multi-sig-wallet",
    title: "Multi-Signature Wallet",
    tagline: "A wallet that requires multiple approvals before any transaction executes.",
    description: "A secure multi-signature wallet smart contract requiring multiple approvals before a transaction executes. Written in Solidity with a full Hardhat test suite.",
    status: "Solidity · Hardhat",
    github: "https://github.com/Feyisara2108/multiSigContract",
    liveLink: null,
    image: null,
    tags: ["Solidity", "Hardhat", "TypeScript"],
    overview:
      "A multi-signature wallet smart contract: funds can only move when a required number of designated owners approve the same transaction. It's the pattern teams and DAOs use to remove single-key risk from a treasury.",
    problem:
      "A single private key is a single point of failure: lose it or leak it and the funds are gone. A multisig requires M-of-N owners to agree, so no one person (or one compromised key) can drain the wallet.",
    contribution: [
      "Designed the propose → approve → execute transaction lifecycle in Solidity.",
      "Enforced the M-of-N approval threshold and owner-only access control.",
      "Wrote a full Hardhat/TypeScript test suite covering the approval and execution flows.",
    ],
    architecture: [
      "Owner set and configurable confirmation threshold stored on-chain.",
      "Transactions submitted, confirmed by owners, then executed once the threshold is met.",
      "Hardhat + TypeScript for testing and deployment.",
    ],
    features: [
      "Configurable M-of-N approval requirement.",
      "Submit, confirm, revoke, and execute transaction flow.",
      "Guards against execution before the threshold is reached.",
    ],
    challenges: [
      "Preventing double-execution and replay of already-executed transactions.",
      "Validating owner permissions and confirmation counts on every state change.",
    ],
  },
  {
    slug: "erc20-faucet",
    title: "ERC-20 Token Faucet",
    tagline: "A testnet faucet: ERC-20 + faucet contracts, deploy scripts, and Hardhat tests.",
    description: "A testnet faucet that dispenses ERC-20 tokens to developers — the ERC-20 token and faucet contracts, deployment scripts, and a Hardhat test suite, plus a React frontend scaffold for the claim flow.",
    status: "Solidity · Hardhat · testnet",
    github: "https://github.com/Feyisara2108/faucet_dApp",
    liveLink: null,
    image: null,
    tags: ["Solidity", "Hardhat", "React"],
    overview:
      "A testnet faucet built around an ERC-20 token and a faucet contract that dispenses it. The focus is the on-chain logic — token, faucet contract, deployment scripts, and tests — with a React frontend scaffold for the wallet-connect and claim flow.",
    problem:
      "Developers building on a testnet constantly need test tokens. A faucet automates that distribution; this project covers the contract side end to end — token, faucet logic, deployment scripts, and a Hardhat test suite.",
    contribution: [
      "Wrote the ERC-20 token and faucet contracts in Solidity.",
      "Authored deployment scripts and a Hardhat test suite.",
      "Scaffolded a React frontend for the wallet-connect and claim flow.",
    ],
    architecture: [
      "ERC-20 token contract + faucet contract managing dispense logic.",
      "Hardhat for compilation, testing, and deployment.",
      "React frontend scaffold for interacting with the contracts via a wallet provider.",
    ],
    features: [
      "Reusable ERC-20 + faucet contract pair.",
      "Configurable claim limits so the faucet isn't trivially drained.",
      "Dispense logic covered by a Hardhat test suite.",
    ],
    challenges: [
      "Designing sensible claim limits so the faucet isn't trivially drained.",
      "Structuring the token and faucet contract pair for clean testnet deployment.",
    ],
  },
  {
    slug: "nft-minting",
    title: "NFT Minting Contract",
    tagline: "An ERC-721 collection with art and metadata pinned to IPFS.",
    description: "An ERC-721 NFT collection with metadata and artwork pinned to IPFS. Deployed and minted on a testnet.",
    status: "ERC-721 · IPFS · testnet",
    github: "https://github.com/Feyisara2108/nft",
    liveLink: null,
    // Token metadata reference (raw IPFS JSON, shown as a link inside the case study
    // rather than as a "live demo" so visitors don't land on a blank JSON page).
    metadataUrl: "https://aquamarine-efficient-meerkat-10.mypinata.cloud/ipfs/bafkreib54jied4qc2etb3j6oadqradd3skxjs5skme43uv6snqagz4khbu",
    image: null,
    tags: ["Solidity", "ERC-721", "IPFS"],
    overview:
      "An ERC-721 NFT collection deployed and minted on a testnet, with artwork and token metadata pinned to IPFS so the assets stay decentralized and content-addressed rather than hosted on a single server.",
    problem:
      "Many NFTs point their metadata at a centralized URL that can change or disappear, breaking the token. Pinning art and metadata to IPFS makes each token's content immutable and verifiable by hash.",
    contribution: [
      "Implemented the ERC-721 contract with mint logic and token URIs.",
      "Pinned artwork and metadata JSON to IPFS via Pinata.",
      "Deployed and minted on a testnet.",
    ],
    architecture: [
      "ERC-721 contract storing per-token metadata URIs.",
      "Artwork + metadata pinned to IPFS (content-addressed).",
      "Testnet deployment and minting.",
    ],
    features: [
      "Standards-compliant ERC-721 minting.",
      "Decentralized, content-addressed metadata on IPFS.",
    ],
    challenges: [
      "Structuring token metadata correctly so it resolves in wallets and marketplaces.",
      "Managing the IPFS pinning workflow for reliable availability.",
    ],
  },
  {
    slug: "merkle-airdrop",
    title: "Merkle Airdrop Verifier",
    tagline: "Gas-efficient whitelist verification using Merkle proofs.",
    description: "A gas-efficient airdrop/whitelist verifier using Merkle proofs to validate eligible addresses without storing the full list on-chain.",
    status: "Merkle proofs · Web3",
    github: "https://github.com/Feyisara2108/merkleTree",
    liveLink: null,
    image: null,
    tags: ["JavaScript", "Merkle Tree", "Web3"],
    overview:
      "A Merkle-tree-based verifier for airdrops and whitelists. Instead of storing thousands of eligible addresses on-chain, only a single 32-byte Merkle root is stored; each user proves eligibility by submitting a Merkle proof.",
    problem:
      "Storing a large allowlist on-chain is prohibitively expensive: every address costs gas. A Merkle tree compresses the entire list into one root hash, so eligibility checks stay cheap no matter how big the list is.",
    contribution: [
      "Built the Merkle tree generation and proof tooling in JavaScript.",
      "Implemented on-chain proof verification against the stored root.",
    ],
    architecture: [
      "Off-chain script builds the Merkle tree from the eligible-address list.",
      "Only the Merkle root is stored on-chain.",
      "Users submit a proof; the contract verifies it against the root before allowing a claim.",
    ],
    features: [
      "Constant on-chain storage cost regardless of list size.",
      "Cryptographically verifiable eligibility.",
    ],
    challenges: [
      "Generating proofs that exactly match the on-chain hashing scheme (ordering, encoding).",
      "Preventing double-claims after a valid proof is used.",
    ],
  },
  {
    slug: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    tagline: "Income, expense, and budget tracking with a clean dashboard.",
    description: "A finance tracking application to manage income, expenses, and budgets, with a clean dashboard interface. Live in production.",
    status: "Live in production",
    github: "https://github.com/Feyisara2108/personal-finance-tracker",
    liveLink: "https://personal-finance-tracker-azure-alpha.vercel.app",
    image: "/images/finance-tracker.png",
    tags: ["JavaScript", "React", "Frontend"],
    overview:
      "A finance-tracking application for managing income, expenses, and budgets, surfaced through a clean dashboard. Live in production on Vercel.",
    problem:
      "People lose track of where their money goes. This app centralizes income, spending, and budgets into one dashboard so balances and trends are visible at a glance.",
    contribution: [
      "Built the dashboard UI and state management in React.",
      "Implemented income/expense/budget tracking logic.",
      "Deployed to production on Vercel.",
    ],
    architecture: [
      "React single-page application with a dashboard layout.",
      "Client-side state for transactions and budgets.",
      "Vercel deployment.",
    ],
    features: [
      "Track income, expenses, and budgets in one place.",
      "Clean, readable dashboard.",
    ],
    challenges: [
      "Presenting financial data clearly and keeping totals consistent as entries change.",
    ],
  },
  {
    slug: "e-commerce",
    title: "E-commerce Website",
    tagline: "A fast, responsive e-commerce landing experience.",
    description: "A fast, responsive e-commerce storefront built with Next.js 15, TypeScript, and Tailwind CSS. Reusable product components and a smooth browsing experience, deployed to production on Vercel.",
    status: "Live · Next.js + TypeScript",
    github: "https://github.com/Feyisara2108/e-commerce",
    liveLink: "https://e-commerce-psi-kohl-81.vercel.app/",
    image: "/images/ecommerce.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    overview:
      "A responsive e-commerce storefront built with Next.js 15 (React 19) and TypeScript, styled with Tailwind CSS — focused on a fast, type-safe, component-driven shopping interface.",
    problem:
      "Online storefronts live or die on speed and clarity. This build emphasizes a type-safe component architecture and a responsive layout for a smooth browsing experience across devices.",
    contribution: [
      "Built the storefront UI in Next.js with TypeScript for type safety.",
      "Implemented reusable product components and responsive Tailwind layouts.",
      "Deployed to production on Vercel.",
    ],
    architecture: [
      "Next.js 15 (React 19) frontend with reusable, typed components.",
      "Tailwind CSS for responsive styling.",
      "Vercel deployment.",
    ],
    features: [
      "Responsive product browsing.",
      "Modern, fast landing experience.",
    ],
    challenges: [
      "Keeping the layout clean and performant across screen sizes.",
    ],
  },
  {
    slug: "space-tourism",
    title: "Space Tourism",
    tagline: "An immersive multi-page space-tourism front-end.",
    description: "An engaging front-end application focused on space tourism, featuring innovative navigation and an out-of-this-world UX.",
    status: "Live in production",
    github: "https://github.com/Feyisara2108/space-tourism",
    liveLink: "https://space-tourism-lake-two.vercel.app/",
    image: "/images/space-tourism.png",
    tags: ["HTML", "CSS", "JavaScript"],
    overview:
      "A multi-page space-tourism front-end with immersive visuals and custom navigation, a UI/UX-focused build emphasizing layout, typography, and interaction.",
    problem:
      "A classic front-end challenge in translating a rich multi-page design into a faithful, responsive, accessible implementation.",
    contribution: [
      "Implemented the multi-page layout and navigation in HTML/CSS/JavaScript.",
      "Matched the design system across breakpoints.",
      "Deployed to production.",
    ],
    architecture: [
      "Vanilla HTML/CSS/JavaScript multi-page site.",
      "Custom navigation and responsive layouts.",
    ],
    features: [
      "Immersive, design-faithful interface.",
      "Responsive across devices.",
    ],
    challenges: [
      "Reproducing a detailed design precisely without a framework.",
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projectsData.find((p) => p.slug === slug);

export const experienceData = [
  {
    role: "Frontend Engineer",
    company: "Independent Projects",
    dates: "2024 – Present",
  },
  {
    role: "Technical Program Coordinator (Volunteer)",
    company: "Web3Ladies — Technical Team",
    dates: "2026 – Present",
  },
  {
    role: "Blockchain Developer",
    company: "Hackathons & Team Projects",
    dates: "2025 – Present",
  },
  {
    role: "Frontend Engineering Trainee",
    company: "AltSchool Africa",
    dates: "2024 – 2025",
  },
  {
    role: "Web3 Developer Trainee",
    company: "Web3Bridge Africa",
    dates: "2024 – 2025",
  },
];
