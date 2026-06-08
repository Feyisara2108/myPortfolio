export const profileData = {
  name: "Mutmahinat Arowolo",
  nickname: "Ayokomi",
  role: "Frontend & Blockchain Developer",
  tagline: "Building robust, scalable applications and decentralized solutions. Passionate about empowering the future of the web.",
  bio: [
    "I like to craft solid and scalable products with exceptional user experiences, focusing on innovation and problem-solving across various industries.",
    "I'm Mutmahinat Arowolo, a developer with extensive experience in scalable frontends and secure smart contracts. I specialize in building high-fidelity web/dApp applications and decentralized protocols.",
    "A passionate web3 advocate, I am deeply involved in modern frontend frameworks and Ethereum ecosystems. My core tech stack includes React, Next.js, and Solidity."
  ],
  socials: {
    twitter: "https://x.com/Ayokomi21",
    github: "https://github.com/Feyisara2108",
    blog: "https://hashnode.com/@ayokomi",
    instagram: "https://instagram.com/mutmahinat_",
    email: "ayokomi2108@gmail.com"
  },
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Solidity",
    "HTML",
    "CSS"
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
    "Active contributor to open-source web3 protocols (e.g. StellarGive on Stellar Soroban, 61 commits).",
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
    description: "Transparent crowdfunding protocol on Stellar Soroban. Open-source contributor (61 commits) who built smart-contract logic and tests for a testnet-deployed donation platform with full CI/CD.",
    role: "Open-source contributor",
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
      "Contributed 61 commits to the protocol as an open-source collaborator.",
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
      "Contributed to the on-chain grant-distribution logic in Solidity.",
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
    title: "ERC-20 Token Faucet dApp",
    tagline: "A testnet faucet with contract, scripts, tests, and a React claim UI.",
    description: "A testnet faucet that dispenses ERC-20 tokens to developers. Includes the token contract, deploy scripts, tests, and a React frontend for claiming tokens.",
    status: "Full dApp · testnet",
    github: "https://github.com/Feyisara2108/faucet_dApp",
    liveLink: null,
    image: null,
    tags: ["Solidity", "React", "Hardhat"],
    overview:
      "A complete testnet faucet dApp: an ERC-20 token plus a faucet contract that dispenses it, wired to a React frontend where developers can connect a wallet and claim tokens for testing.",
    problem:
      "Developers building on a testnet constantly need test tokens. A faucet automates that distribution and demonstrates an end-to-end dApp (contract, deployment, tests, and a working UI) in one project.",
    contribution: [
      "Wrote the ERC-20 token and faucet contracts in Solidity.",
      "Authored deployment scripts and a Hardhat test suite.",
      "Built the React frontend for wallet connection and token claiming.",
    ],
    architecture: [
      "ERC-20 token contract + faucet contract managing dispense logic.",
      "Hardhat for compilation, testing, and deployment.",
      "React frontend interacting with the contracts via a wallet provider.",
    ],
    features: [
      "One-click token claiming from a connected wallet.",
      "Reusable ERC-20 + faucet contract pair.",
      "End-to-end flow from contract to UI.",
    ],
    challenges: [
      "Handling wallet connection and transaction states gracefully in the UI.",
      "Adding sensible claim limits so the faucet isn't trivially drained.",
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
    slug: "safe",
    title: "Safe",
    tagline: "A polished, production TypeScript/React web application.",
    description: "A full TypeScript web application built with React. A polished, responsive product interface deployed to production.",
    status: "Live in production",
    github: "https://github.com/Feyisara2108/safe",
    liveLink: "https://safe-kappa-umber.vercel.app",
    image: null,
    tags: ["TypeScript", "React", "Frontend"],
    overview:
      "A full TypeScript + React web application with a polished, responsive product interface, deployed to production on Vercel.",
    problem:
      "Demonstrates building a complete, type-safe single-page application end to end, from component architecture to a deployed, responsive production build.",
    contribution: [
      "Built the application in React with TypeScript for type safety.",
      "Designed a responsive, polished UI.",
      "Deployed to production on Vercel.",
    ],
    architecture: [
      "React + TypeScript single-page application.",
      "Component-driven UI, responsive across breakpoints.",
      "Vercel deployment.",
    ],
    features: [
      "Type-safe React codebase.",
      "Responsive, production-ready interface.",
    ],
    challenges: [
      "Maintaining strong typing across the component tree.",
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
    image: null,
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
    description: "A feature-rich e-commerce landing page crafted with modern frontend technologies, providing users with a fast and responsive shopping experience.",
    status: "Live in production",
    github: "https://github.com/Feyisara2108/e-commerce",
    liveLink: "https://e-commerce-psi-kohl-81.vercel.app/",
    image: "/images/screenshot1.jpg",
    tags: ["React", "CSS", "Frontend"],
    overview:
      "A feature-rich e-commerce landing experience built with modern frontend tooling, focused on a fast, responsive shopping interface.",
    problem:
      "Online storefronts live or die on speed and clarity. This build emphasizes a responsive layout and a smooth browsing experience across devices.",
    contribution: [
      "Built the storefront UI in React.",
      "Implemented responsive layouts and product presentation.",
      "Deployed to production on Vercel.",
    ],
    architecture: [
      "React frontend with reusable product/UI components.",
      "Responsive CSS layout.",
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
    image: "/images/screenshot.jpg",
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
  {
    slug: "easybank",
    title: "Easybank Landing Page",
    tagline: "A clean, conversion-focused virtual-banking landing page.",
    description: "A clean and modern UI representing a virtual banking experience, designed for flawless conversion and accessibility.",
    status: "Live",
    github: "https://github.com/Feyisara2108/Easybank-landing-page",
    liveLink: "https://feyisara2108.github.io/Easybank-landing-page/",
    image: "/images/screenshot2.jpg",
    tags: ["UI/UX", "JavaScript", "HTML"],
    overview:
      "A modern landing page for a virtual-banking brand, built with a focus on clean UI, accessibility, and conversion.",
    problem:
      "Landing pages need to communicate value fast and convert. This build emphasizes hierarchy, responsiveness, and accessible markup.",
    contribution: [
      "Built the landing page UI and interactions.",
      "Focused on responsive, accessible markup.",
      "Deployed on GitHub Pages.",
    ],
    architecture: [
      "HTML/CSS/JavaScript landing page.",
      "Responsive, accessible layout.",
    ],
    features: [
      "Clean, conversion-oriented design.",
      "Responsive and accessible.",
    ],
    challenges: [
      "Balancing visual polish with accessibility and performance.",
    ],
  }
];

export const getProjectBySlug = (slug) =>
  projectsData.find((p) => p.slug === slug);

export const experienceData = [
  {
    role: "Student",
    company: "AltSchool Africa",
    dates: "Nov 2024 - Present",
  },
  {
    role: "Student",
    company: "Web3Bridge Africa",
    dates: "Jan 2025 - April 2025",
  },
  {
    role: "Student",
    company: "Web3Bridge Africa",
    dates: "Aug 2024 - Nov 2024",
  }
];
