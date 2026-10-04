import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.agsandco.fr'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/methode`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/gouvernance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/legal/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/rgpd`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
