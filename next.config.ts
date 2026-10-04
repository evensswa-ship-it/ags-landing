import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: '/offres/audit', destination: '/methode#audit', permanent: true },
      { source: '/offres/deploiement', destination: '/methode#setup', permanent: true },
      { source: '/offres/accompagnement', destination: '/methode#abonnement', permanent: true },
      { source: '/accompagnement', destination: '/methode#abonnement', permanent: true },
      { source: '/formation', destination: '/methode#setup', permanent: true },
      { source: '/secteurs/:slug', destination: '/cas-usage', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
};

export default nextConfig;