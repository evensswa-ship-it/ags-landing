import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.agsandco.fr'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/offres/audit`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/offres/deploiement`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/offres/accompagnement`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/formation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/accompagnement`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/secteurs/assurance`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/secteurs/cgp`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/secteurs/expertise-comptable`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/secteurs/pme`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/secteurs/btp`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/legal/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/rgpd`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}