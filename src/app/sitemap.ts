import type { MetadataRoute } from 'next'

/** Dates de dernière modification réelle du contenu : à mettre à jour quand une page change. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.agsandco.fr'

  return [
    { url: base, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/offres`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ia-entreprise-normandie`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/ia-entreprise-paris`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/gouvernance`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/a-propos`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/legal/mentions-legales`, lastModified: '2026-10-04', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/confidentialite`, lastModified: '2026-10-04', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/rgpd`, lastModified: '2026-10-04', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/legal/cookies`, lastModified: '2026-10-04', changeFrequency: 'yearly', priority: 0.3 },
  ]
}
