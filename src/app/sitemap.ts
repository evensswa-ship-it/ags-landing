import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://agsandco.fr'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/secteurs/assurance`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/secteurs/cgp`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/secteurs/expertise-comptable`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/secteurs/pme`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/secteurs/btp`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}