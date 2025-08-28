import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
        // Posthog
        {
            source: '/analytics/:path*',
            destination: 'https://eu.posthog.com/:path*',
        },
        {
            source: '/analytics/:path*/',
            destination: 'https://eu.posthog.com/:path*/',
        },
    ]
},
async headers() {
    async function getMyIp() {
        const x = await fetch('https://api.ipify.org')
        // const x = await fetch('https://api.my-ip.io/ip')
        return await x.text()
    }
    const ip = await getMyIp()
    return [
        {
            source: '/analytics/:path*',
            headers: [
                { key: 'X-Forwarded-Proto', value: 'https' },
                {
                    key: 'X-Forwarded-Host',
                    value: 'https://www.useflytrap.com',
                },
                { key: 'X-Forwarded-For', value: ip },
            ],
        },
        {
            source: '/analytics/:path*/',
            headers: [
                { key: 'X-Forwarded-Proto', value: 'https' },
                {
                    key: 'X-Forwarded-Host',
                    value: 'https://www.useflytrap.com',
                },
                { key: 'X-Forwarded-For', value: ip },
            ],
        },
    ]
},
};

export default nextConfig;
