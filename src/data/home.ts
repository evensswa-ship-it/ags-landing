import { cta } from './site'

export const hero = {
  eyebrow: "Intégration de l’IA · PME & ETI · Rouen",
  title: { lead: "L’IA au travail.", rest: 'Sous contrôle.' },
  subtitle:
    "Nous connectons l’IA à vos outils pour prendre en charge les tâches répétitives. Vos équipes gardent les décisions. Chaque gain est mesuré.",
  primary: cta.primary,
  secondary: cta.method,
  note: 'Premier échange offert · 30 min · sans engagement',
  flowLabel: "Exemple de flux : le traitement d’une demande entrante",
  flow: [
    { label: 'Demande reçue' },
    { label: "L’IA lit et classe" },
    { label: 'Infos retrouvées dans vos outils' },
    { label: 'Réponse préparée' },
    { label: 'Une personne valide', human: true },
    { label: 'Envoyé et tracé' },
  ],
  metrics: [
    { label: 'Avant', value: '45 min' },
    { label: 'Avec AGS', value: '8 min' },
    { label: 'Ressaisies', value: '0' },
  ],
}

export const links = [
  { label: 'Voir la méthode et les offres', href: '/methode' },
  cta.governance,
]

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

export const finalCta = {
  title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
  text: '30 minutes pour en parler, sans engagement.',
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
