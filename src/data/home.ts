import { cta } from './site'

export const hero = {
  eyebrow: "Collaborateurs IA · PME & ETI · Rouen & Paris",
  title: { lead: "L’IA au travail.", rest: 'Sous contrôle.' },
  subtitle:
    "AGS & Co aide les entreprises à récupérer du temps et à augmenter leur capacité opérationnelle grâce à des collaborateurs IA : des experts métiers augmentés, formés à vos processus et à vos outils. Vos équipes gardent les décisions. Chaque gain est mesuré.",
  primary: cta.primary,
  secondary: cta.savings,
  note: 'Diagnostic initial gratuit · 45 min · sans engagement',
  flowLabel: "Exemple : un client demande un devis par email",
  flow: [
    { label: 'Le client demande un devis' },
    { label: "L’IA prépare le devis avec vos tarifs" },
    { label: 'Vous validez', human: true },
    { label: 'Le devis part, tout est tracé' },
  ],
  metrics: [
    { label: 'Avant', value: '45 min' },
    { label: 'Avec AGS', value: '8 min' },
    { label: 'Ressaisies', value: '0' },
  ],
}

export const links = [cta.governance]

export const about = {
  title: { lead: "Comprendre votre terrain", rest: "avant de parler technologie." },
  people: [
    {
      name: "Evens",
      role: "Fondateur · Intégration IA & pilotage de projets",
      bio: "Chef de projet depuis plusieurs années, dont deux ans au sein d’un grand acteur de l’assurance. Il conçoit et pilote l’intégration des collaborateurs IA dans vos outils.",
      photo: { src: "/team/evens-augustin.jpg", alt: "Portrait d’Evens" },
    },
    {
      name: "Naomie",
      role: "Co-fondatrice · Développement commercial & stratégie de marque",
      bio: "Ancienne dirigeante de l’agence de communication DesignByNao, aujourd’hui entrepreneure dans la beauté. Elle mène les premiers échanges avec les entreprises pour comprendre le terrain avant de parler de solution.",
      photo: { src: "/team/naomie.jpg", alt: "Portrait de Naomie" },
    },
  ],
  link: { label: "En savoir plus", href: "/a-propos" },
}

export const ecosystem = {
  title: { lead: 'Notre écosystème.' },
  paragraphs: [
    'AGS & Co s’inscrit dans un écosystème économique et numérique actif, en Normandie et autour de l’IA en France.',
    'Nous participons à des réseaux qui nous permettent de rester au plus près des dirigeants, des enjeux du territoire et des usages concrets de l’IA.',
  ],
  /**
   * Adhésions uniquement. Logos officiels (sources dans brand/ecosysteme). `plate` : logo sombre,
   * posé sur une plaque claire plutôt que recoloré.
   */
  members: [
    {
      name: 'Normandie Numérique',
      href: 'https://normandie-numerique.fr/',
      linkLabel: 'Normandie Numérique, site officiel (nouvel onglet)',
      logo: { src: '/ecosysteme/normandie-numerique.webp', width: 1065, height: 249, display: 44 },
    },
    {
      name: 'Hub France IA',
      href: 'https://www.hub-franceia.fr/',
      linkLabel: 'Hub France IA, site officiel (nouvel onglet)',
      logo: { src: '/ecosysteme/hub-france-ia.webp', width: 640, height: 263, display: 56 },
      plate: true,
    },
    {
      name: 'Rouen Normandie Rugby',
      href: 'https://rouennormandierugby.fr/',
      linkLabel: 'Rouen Normandie Rugby, site officiel (nouvel onglet)',
      logo: { src: '/ecosysteme/rouen-normandie-rugby.webp', width: 259, height: 320, display: 120 },
    },
  ],
  note: 'AGS & Co est membre de ces réseaux.',
}

export const finalCta = {
  title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
  text: "Diagnostic initial gratuit : 45 minutes pour comprendre votre besoin, repérer ce qui vous freine et voir s’il y a un sujet à creuser.",
  primary: cta.primary,
  secondary: cta.write,
}

/**
 * Résultats d’un vrai cas client. Masqué tant qu’il n’existe pas de cas livré et validé.
 * Ne jamais remplir avec des données inventées.
 */
export const results: {
  enabled: boolean
  title: { lead: string; rest: string }
  context: string
  metrics: { label: string; before: string; after: string }[]
} = {
  enabled: false,
  title: { lead: 'Des résultats mesurés,', rest: 'sur un vrai processus.' },
  context: '',
  metrics: [],
}
