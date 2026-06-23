import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      // PostHog reverse proxy. NOTE: ingestion lives on eu.i.posthog.com — the
      // old eu.posthog.com host no longer accepts /capture events.
      {
        source: "/analytics/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      // Trailing-slash variant first: posthog-js hits /e/, /decide/, /s/.
      {
        source: "/analytics/:path*/",
        destination: "https://eu.i.posthog.com/:path*/",
      },
      {
        source: "/analytics/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
};

export default nextConfig;
