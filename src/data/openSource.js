// The five most substantial contributions to repositories I don't own; the
// full list is linked via prSearchUrl. Counts come from GitHub
// search (author:Feyisara2108 is:pr is:merged). Refresh them when updating the site.
export const openSourceStats = {
  mergedPRs: "100+",
  repositories: "40+",
  prSearchUrl:
    "https://github.com/search?q=author%3AFeyisara2108+is%3Apr+is%3Amerged&type=pullrequests",
};

export const openSourceContributions = [
  {
    repo: "bakeronchain/learnvault",
    name: "LearnVault",
    prs: 9,
    summary: "Escrow events for the milestone contract, an admin-auth security fix on fund reclaims, shared contract types, a community forum, and an end-to-end test of the scholarship flow.",
    tags: ["Soroban", "Rust", "React"],
  },
  {
    repo: "Invoice-Liquidity-Network/Invoice-Liquidity-Network",
    name: "Invoice Liquidity Network",
    prs: 7,
    summary: "Exhaustive state-machine and multi-token edge-case tests, SDK multi-token helpers, an npm release workflow, and frontend CI standardization.",
    tags: ["Soroban", "TypeScript", "CI"],
  },
  {
    repo: "Iris-IV/ProofOfHeart-stellar",
    name: "ProofOfHeart",
    prs: 6,
    summary: "Campaign ownership transfer in the contract; campaign comments and Q&A, and signature-verified campaign updates in the frontend.",
    tags: ["Soroban", "Next.js"],
  },
  {
    repo: "leojay-net/Stellar-Dex-Chat",
    name: "Stellar-Dex-Chat",
    prs: 5,
    summary: "Telemetry consent settings, debounced draft persistence, rate-limit unit tests, and a contract circuit-breaker test.",
    tags: ["Next.js", "Soroban", "Testing"],
  },
  {
    repo: "PhasoraLabs/StellarGrantProtocol",
    name: "StellarGrant Protocol",
    prs: 3,
    summary: "Reviewer vote delegation and multi-token milestone payouts in the grant contract.",
    tags: ["Soroban", "Rust"],
  },
];
