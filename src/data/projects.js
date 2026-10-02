// Each project includes case-study content used on its /projects/:slug detail page.
// Fields: slug, title, tagline, description (card), status, role, featured (home grid),
// tags, github, liveLink, image, overview, problem, contribution[], architecture[],
// features[], challenges[].
export const projectsData = [
  {
    slug: "web3ladies",
    title: "Web3Ladies Platform",
    tagline: "Production website and admin portal for a women-in-tech community.",
    description: "Rebuilt and launched the Web3Ladies website and admin portal. Next.js 16, TypeScript, and Supabase (Postgres, Auth, Row Level Security, Storage), with a CMS that lets non-technical staff run every page and form.",
    role: "Sole developer",
    status: "Live in production",
    featured: true,
    github: "https://github.com/Feyisara2108/web3ladies",
    liveLink: "https://web3ladies-eight.vercel.app",
    image: "/images/web3ladies.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    highlights: [
      "Replaced a no-code site with a Next.js app and Supabase backend the organization owns.",
      "Admin CMS for events, cohorts, posts, partners, media, and users, with role-based access.",
      "Postgres schema and Row Level Security written as versioned SQL migrations.",
    ],
    overview:
      "Web3Ladies is a community and programs platform for women building careers in blockchain, AI, and emerging tech across Africa and the UAE. I rebuilt the organization's site, previously hosted on a no-code builder, as a Next.js application on its own Supabase project and Vercel deployment, with a full admin portal behind it.",
    problem:
      "The original site lived on a hosted builder: content changes depended on the tool, form submissions were hard to manage, and the organization didn't own its data. The team needed a site they control, with an admin area where staff can update events, cohorts, partners, and posts and work through applications without a developer.",
    contribution: [
      "Built the whole application alone (103 commits): 8 public routes, the admin portal, and the database.",
      "Designed the Supabase schema, Row Level Security policies, and Storage buckets as versioned SQL migrations.",
      "Built an admin CMS covering events, cohorts, blog posts, partners, testimonials, impact stats, media, and users.",
      "Made the public application forms configurable from the admin portal, with submissions exportable to Excel.",
      "Shipped it to production on Vercel, with the setup documented so the organization can run it independently.",
    ],
    architecture: [
      "Next.js 16 App Router with React 19 and TypeScript; public pages and the admin portal as separate route groups.",
      "Supabase for Postgres, Auth, Row Level Security, and Storage; a server-only API route handles superadmin user management.",
      "TanStack Query for admin data loading and cache invalidation; shadcn/ui (Radix) components with Tailwind CSS.",
      "SheetJS for Excel export of form submissions; Vercel deploys from the main branch.",
    ],
    features: [
      "Public site: home, venture builder, events, community, partnerships, news, cohorts, and membership.",
      "Role-based admin portal with superadmin-only user management.",
      "Editable public forms and an Excel export of every submission.",
      "Media library and founder-story/impact content editable without code.",
    ],
    challenges: [
      "Keeping the rebuild faithful to the live content while moving it onto a schema the team can edit.",
      "Writing RLS policies so the public anon key can read published content and submit forms, while only authenticated admins can write.",
    ],
  },
  {
    slug: "stellargive",
    title: "StellarGive",
    tagline: "Transparent on-chain crowdfunding on Stellar Soroban.",
    description: "Open-source crowdfunding protocol on Stellar that I founded and maintain (official Drips maintainer): Soroban contract with 340+ Rust tests, a Next.js donor app, Playwright E2E, and 28 GitHub Actions workflows. 30 contributors.",
    role: "Founder & maintainer",
    status: "Live · Stellar testnet",
    featured: true,
    github: "https://github.com/Feyisara2108/stellargive",
    liveLink: "https://stellargive.vercel.app",
    image: "/images/stellargive.jpg",
    tags: ["Soroban", "Rust", "Next.js", "TypeScript"],
    highlights: [
      "Founder and maintainer; official Drips open-source maintainer with about 30 contributors.",
      "Soroban contract for campaigns, donations, claims, and refunds, covered by 340+ Rust tests.",
      "28 GitHub Actions workflows, including CodeQL, Playwright E2E, and contract deploy/rollback.",
    ],
    overview:
      "StellarGive is an open-source crowdfunding protocol on the Stellar network. Campaigns, donations, claims, and refunds are handled by a Soroban smart contract, so every contribution can be checked on a public ledger instead of trusted to a platform. A Next.js app lets donors connect a Freighter wallet and give.",
    problem:
      "Traditional crowdfunding relies on an intermediary that holds the funds and reports where they went. Donors can't verify that their money reached the campaign, and platforms can freeze or skim balances. StellarGive settles everything on-chain, and refunds are enforced by the contract.",
    contribution: [
      "Founded the project and maintain it: roadmap, issues, reviews, and merges for about 30 contributors. Recognized as an official Drips open-source maintainer.",
      "Built and hardened the Soroban contract for campaign creation, donations, claims, and refunds, backed by 340+ Rust unit tests.",
      "Set up the CI/CD: 28 GitHub Actions workflows covering contract tests, lint, CodeQL, gitleaks, Lighthouse, visual regression, nightly E2E, and contract deploy and rollback.",
      "Fixed CI blockers and the frontend deploy pipeline, and configured Dependabot to keep major upgrades in separate PRs.",
    ],
    architecture: [
      "Soroban smart contract (Rust) deployed to the Stellar testnet.",
      "Next.js frontend using the Stellar SDK and Freighter wallet, React Hook Form + Zod, TanStack Query, and Sentry.",
      "Playwright E2E specs for create, donate, claim, refund, explore, keyboard navigation, and mobile layouts.",
      "Docker images for local and production runs; Codecov coverage and an OpenSSF Scorecard on the repo.",
    ],
    features: [
      "Create campaigns and donate in XLM with a browser wallet.",
      "Contract-enforced claims for campaign owners and refunds for donors.",
      "Every donation is publicly verifiable on the Stellar ledger.",
    ],
    challenges: [
      "Keeping storage and execution lean in Soroban's resource-metered environment.",
      "Keeping CI green and conventions consistent across a large, rotating group of open-source contributors.",
    ],
  },
  {
    slug: "mev-auction-hook",
    title: "LP-Governed MEV Auction Hook",
    tagline: "A Uniswap v4 hook that auctions execution rights and returns MEV to LPs.",
    description: "Uniswap v4 hook that turns large swaps into on-chain auctions for execution rights, splitting searcher bids between LPs and traders under LP governance. 49 Foundry tests, deployed on Unichain Sepolia, with a Next.js + wagmi UI.",
    role: "Hookathon project (Atrium UHI10)",
    status: "Live · Unichain Sepolia",
    featured: true,
    github: "https://github.com/Feyisara2108/mev-auction-hook",
    liveLink: "https://mev-auction-hook.vercel.app",
    image: "/images/mev-auction-hook.jpg",
    tags: ["Solidity", "Foundry", "Uniswap v4", "Next.js"],
    highlights: [
      "On-chain auction for large swaps, with no oracle, relayer, or keeper.",
      "LP-weighted governance over how winning bids split between LPs and traders.",
      "49 Foundry tests; deployed and verified on Unichain Sepolia.",
    ],
    overview:
      "A Uniswap v4 hook that turns every large swap into a short on-chain auction for execution rights. The winning bid is split between a donation to in-range liquidity providers and a rebate to the trader, and the LPs of each pool vote on that split, weighted by their liquidity. Built for the Atrium Academy UHI10 Hookathon.",
    problem:
      "Arbitrageurs and MEV bots trade against stale prices and take that value out of the pool, and LPs absorb it as impermanent loss. Swap fees don't cover those losses in most major pools. This hook creates a market for execution rights, so value that would have been extracted stays in the pool under rules the LPs set.",
    contribution: [
      "Designed and wrote the GovernedMevAuctionHook contract: intent submission, timed bidding, and execution inside poolManager.unlock().",
      "Wrote 49 Foundry tests, including a dedicated edge-case suite.",
      "Added LP attestation signatures verified with OpenZeppelin SignatureChecker (EOA and ERC-1271) and bound to chain, hook, pool, and LP.",
      "Deployed and verified the contract on Unichain Sepolia, and built the Next.js + wagmi/viem governance and swap UI.",
    ],
    architecture: [
      "requestSwap → submitBid → executeSwap lifecycle; small swaps take an express lane with no auction or delay.",
      "Pull-payment refunds (pendingRefunds) instead of push refunds, which removes the revert-griefing vector.",
      "Winning bid split with poolManager.donate() to in-range LPs, with the remainder rebated to the trader.",
      "No oracle, relayer, or keeper: every decision comes from on-chain inputs.",
    ],
    features: [
      "On-chain MEV auction for large swaps.",
      "LP-weighted governance over the LP/trader revenue split.",
      "Express lane so small swaps execute immediately at no extra cost.",
    ],
    challenges: [
      "Making the auction resistant to griefing without any off-chain coordinator.",
      "Binding signed attestations tightly enough that they can't be replayed on another chain, hook, or pool.",
    ],
  },
  {
    slug: "blockwork",
    title: "Blockwork",
    tagline: "Trustless bounty board on Stacks with STX locked in escrow.",
    description: "Bounty marketplace where the STX reward is locked in a Clarity contract until the poster approves the work, with timeouts so funds can't get stuck. Next.js + Stacks.js frontend, 16 contract tests, live on Stacks testnet.",
    role: "Solo build (Scaffold Stacks challenge)",
    status: "Live · Stacks testnet",
    github: "https://github.com/Feyisara2108/blockwork",
    liveLink: "https://blockwork-sooty.vercel.app",
    image: "/images/blockwork.jpg",
    tags: ["Clarity", "Stacks", "Next.js", "TypeScript"],
    overview:
      "Blockwork lets anyone post a task with an STX reward locked in a Clarity smart contract. A worker claims it and submits a link to the work, and the poster approves it to release payment. If either side goes quiet, a timeout lets the other recover the funds. Built for the Scaffold Stacks 20 Builders Challenge.",
    problem:
      "Freelance bounties depend on trust: the poster may never pay, or the worker may never deliver. Escrow platforms solve this by holding the money themselves. Blockwork puts the escrow in a contract with explicit timeouts, so neither party can get funds stuck.",
    contribution: [
      "Wrote the bounty-board Clarity contract and its full lifecycle: post, claim, submit, approve, cancel, abandon, reopen, and timeout payout.",
      "Wrote 16 Vitest tests against the contract with Clarinet.",
      "Built the Next.js frontend: marketplace, bounty pages, builder profiles, leaderboard, and posting flow.",
      "Deployed the contract to Stacks testnet and the app to Vercel.",
    ],
    architecture: [
      "Clarity contract holding STX in escrow, with deadlines counted in Bitcoin blocks.",
      "Next.js frontend using @stacks/connect and @stacks/transactions, with Jotai for state.",
      "Reputation and earnings computed only from on-chain contract history.",
    ],
    features: [
      "Marketplace with live escrow stats, category filters, search, and sorting.",
      "Lifecycle stepper and on-chain activity timeline that link every step to its transaction.",
      "Builder profiles, a leaderboard, and a live Bitcoin block ticker.",
    ],
    challenges: [
      "Designing timeouts for every state so funds can always be recovered.",
      "Presenting deadlines measured in Bitcoin blocks in a way users can follow.",
    ],
  },
  {
    slug: "fairmark",
    title: "FairMark",
    tagline: "Surfaces mispricing in tokenized pre-IPO stocks.",
    description: "Data product that compares tokenized pre-IPO stocks (SpaceX, OpenAI…) against fair value across two issuers, verifies every token on Solana, and links out to trade. React + TypeScript with serverless API routes.",
    status: "Live",
    github: "https://github.com/Feyisara2108/fairmark",
    liveLink: "https://fairmark-sepia.vercel.app",
    image: "/images/fairmark.jpg",
    tags: ["React", "TypeScript", "Solana", "Vite"],
    overview:
      "Platforms like PreStocks and Tessera issue tokens that track private companies' valuations. FairMark pulls their public APIs, calculates each token's deviation from fair value, totals the mispricing across all live tokens, and shows the same company priced by two issuers side by side.",
    problem:
      "Buyers of tokenized pre-IPO stocks can't easily see whether a token trades at a premium or a discount to fair value, or that two issuers price the same company very differently. Nothing showed either gap before a buyer traded.",
    contribution: [
      "Built the app alone (40 commits): data layer, serverless API routes, and UI.",
      "Wrote API adapters for PreStocks, Tessera, and Pyth price feeds.",
      "Added on-chain verification that reads each token's SPL mint supply from Solana RPC and degrades gracefully if the RPC is unavailable.",
      "Built a cross-issuer comparison view, blended baskets, sparklines, and deviation badges.",
    ],
    architecture: [
      "React + TypeScript single-page app built with Vite.",
      "Serverless API routes that fetch and normalize issuer and price data.",
      "Solana RPC reads to verify each listing is a real on-chain asset.",
    ],
    features: [
      "Live dollar total of mispricing across every token.",
      "Side-by-side cross-issuer comparison.",
      "\"Verified on-chain\" badge per token, with one-click links out to Jupiter to trade.",
    ],
    challenges: [
      "Normalizing two issuers with different legal structures and API shapes into one model.",
      "Keeping the UI responsive when on-chain verification is slow or fails.",
    ],
  },
  {
    slug: "safesale",
    title: "SafeSale",
    tagline: "Zero-custody escrow for social-commerce sellers in Nigeria.",
    description: "Hack4Freedom first-runner-up escrow app for Instagram and WhatsApp sellers: funds are locked in Cashu ecash tied to the buyer's Nostr key, so no platform ever holds them. Built the React + TypeScript frontend (14 merged PRs).",
    role: "Frontend developer, hackathon team",
    status: "Hack4Freedom · 1st Runner-Up",
    featured: true,
    github: "https://github.com/JSE19/safe-sales",
    liveLink: "https://safe-kappa-umber.vercel.app",
    image: "/images/safesale.jpg",
    tags: ["React", "TypeScript", "Nostr", "Cashu"],
    highlights: [
      "First Runner-Up at the Hack4Freedom hackathon.",
      "Built the frontend across 14 merged PRs: onboarding, seller dashboard, listings, and checkout.",
      "Buyer funds stay in ecash only the buyer's key can release; the platform never holds them.",
    ],
    overview:
      "SafeSale is a decentralized escrow layer for micro-sellers who trade through Instagram, WhatsApp, TikTok, X, and Telegram. Payment is locked into a Cashu ecash token that only the buyer's key can release, and seller identity and reputation live on Nostr.",
    problem:
      "Social-commerce in Nigeria runs on trust between strangers: buyers fear paying and never receiving the item, and sellers fear shipping and never being paid. Centralized escrow charges high fees, can freeze funds, and requires KYC that excludes informal merchants.",
    contribution: [
      "Built the frontend across 14 merged pull requests: onboarding, seller dashboard, storefront, and checkout.",
      "Integrated the Cashu library and aligned the frontend with the team's working MavaPay payment flow.",
      "Rewrote the project README and documentation for the submission.",
    ],
    architecture: [
      "React + TypeScript (Vite) with TanStack Query, React Hook Form, and Zod.",
      "Cashu ecash tokens P2PK-locked (NUT-11) to a one-time Nostr key generated in the buyer's browser.",
      "Seller listings published as Nostr kind 30018 events.",
    ],
    features: [
      "Shareable checkout link that works in any chat app.",
      "Buyer-controlled fund release; the platform never takes custody.",
      "Portable seller reputation that doesn't depend on any platform.",
    ],
    challenges: [
      "Making key generation and ecash locking invisible to non-crypto users.",
      "Keeping the frontend in sync with a backend and payment flow that changed during the hackathon.",
    ],
  },
  {
    slug: "scholarchain",
    title: "ScholarChain",
    tagline: "On-chain grant funding with Soul-Bound proof of grant.",
    description: "Decentralized grant protocol: multi-donor pools, quorum voting, automatic payout, and Soul-Bound Tokens as permanent proof of grant. Solidity + Foundry (197 tests, 100% coverage), React, IPFS, on Sepolia; led the five-developer team.",
    role: "Team lead, five-developer capstone",
    status: "Team project · Ethereum Sepolia",
    github: "https://github.com/Feyisara2108/scholarChain",
    liveLink: null,
    image: null,
    tags: ["Solidity", "Foundry", "React", "IPFS"],
    overview:
      "ScholarChain is a fully on-chain grant distribution protocol on Ethereum Sepolia. Anyone can create a grant pool, donors fund it in USDT, applicants submit proposals stored on IPFS, and designated signers vote on-chain. Winners are paid automatically and receive a non-transferable Soul-Bound Token as permanent proof of the grant.",
    problem:
      "Grant distribution is opaque: applicants can't see how decisions are made, payouts are slowed by banks, and proof that someone received a grant is easy to forge or lose. ScholarChain makes approvals transparent and the resulting credential permanent.",
    contribution: [
      "Led a five-developer team: set the project direction, broke requirements into tasks, and assigned work.",
      "Reviewed and merged pull requests and coordinated the frontend-to-contract integration.",
      "Implemented the grant pool in Solidity and contributed to debugging across the stack.",
      "Worked on the Foundry suite of 197 tests at 100% coverage.",
      "Fixed the review page's data loading (Promise.all) and frontend build failures.",
    ],
    architecture: [
      "Solidity contracts for grant pools, quorum voting, and fund release on Sepolia.",
      "Soul-Bound Tokens with fully on-chain metadata.",
      "Proposal metadata and PDFs pinned to IPFS through Pinata.",
      "React 19 + Vite frontend.",
    ],
    features: [
      "Permissionless grant pools with multi-donor USDT funding.",
      "Transparent quorum voting and automatic payout.",
      "Non-transferable proof-of-grant credentials.",
    ],
    challenges: [
      "Making tokens permanently non-transferable while staying standards-friendly.",
      "Coordinating contracts, tests, and frontend across a five-person team in two weeks.",
    ],
  },
];

export const featuredProjects = projectsData.filter((p) => p.featured);

export const getProjectBySlug = (slug) =>
  projectsData.find((p) => p.slug === slug);
