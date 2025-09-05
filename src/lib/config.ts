// Site configuration with environment variable support
export const siteConfig = {
  // External URLs
  docs: process.env.NEXT_PUBLIC_DOCS_URL || "https://docs.justaname.id",
  dashboard:
    process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://dashboard.justaname.id",
  explorer: process.env.NEXT_PUBLIC_EXPLORER_URL || "https://app.justaname.id",
  playground:
    process.env.NEXT_PUBLIC_PLAYGROUND_URL || "https://demo.justaname.id",

  // Social Links
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/justaname_id",
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/JustaName-id",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/company/just-a-lab",

  // Product Links
  ensvolution:
    process.env.NEXT_PUBLIC_ENSVOLUTION_URL || "https://ensvolution.xyz",
  letstalk: process.env.NEXT_PUBLIC_LETSTALK_URL || "https://letstalk.wtf",
  xmtpAgents:
    process.env.NEXT_PUBLIC_XMTP_AGENTS_URL ||
    "https://xmtp-agent-hub.vercel.app",
  chromeExtension:
    process.env.NEXT_PUBLIC_CHROME_EXT_URL ||
    "https://chromewebstore.google.com/detail/justweb3/bhjbdfdamankpcoocephhonphbhbbfdb",

  // Forms/Actions
  bookDemo:
    process.env.NEXT_PUBLIC_BOOK_DEMO_URL ||
    "https://calendly.com/justaname/demo",
  getStarted:
    process.env.NEXT_PUBLIC_GET_STARTED_URL || "https://dashboard.justaname.id",
  contact: process.env.NEXT_PUBLIC_CONTACT_URL || "mailto:support@justaname.id",

  // Internal Pages (these could be internal routes or external)
  home: "/",
} as const;

export type SiteConfig = typeof siteConfig;
