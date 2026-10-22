import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      // Sources exactes : `/offres` reste une vraie page, seules ses anciennes sous-pages redirigent.
      { source: '/methode', destination: '/offres', permanent: true },
      { source: '/offres/audit', destination: '/offres#audit', permanent: true },
      { source: '/offres/deploiement', destination: '/offres#setup', permanent: true },
      { source: '/offres/accompagnement', destination: '/offres#abonnement', permanent: true },
      { source: '/accompagnement', destination: '/offres#abonnement', permanent: true },
      { source: '/formation', destination: '/offres#setup', permanent: true },
      { source: '/secteurs/:slug', destination: '/#cas-usage', permanent: true },
      { source: '/cas-usage', destination: '/#cas-usage', permanent: true },
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