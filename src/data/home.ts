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

export const changes = {
  title: { lead: 'Ce qui change', rest: 'dans vos journées.' },
  items: [
    {
      title: 'Moins de ressaisie',
      text: "Les informations passent d’un outil à l’autre sans copier-coller.",
    },
    {
      title: 'Des demandes traitées plus vite',
      text: 'Chaque demande est lue, classée et préparée dès son arrivée.',
    },
    {
      title: 'Plus de relance oubliée',
      text: 'Devis, pièces manquantes, prospects : le suivi part au bon moment.',
    },
    {
      title: 'Des gains mesurés',
      text: 'Volume traité, temps gagné, erreurs évitées : vous savez ce que vous y gagnez.',
    },
  ],
}

export const what = {
  title: { lead: "L’IA seule ne suffit pas.", rest: "Nous construisons ce qu’il faut autour." },
  text: "Les outils d’IA sont accessibles à tous. Ce qui fait la différence, c’est la façon de les brancher sur votre façon de travailler.",
  equation: {
    terms: ['Vos processus', 'Vos données', "L’IA", 'Vos outils', 'Des règles claires'],
    result: 'Un collaborateur IA qui travaille vraiment',
  },
}

export const examples = {
  title: { lead: 'Concrètement,', rest: 'ce qui peut être pris en charge.' },
  items: [
    'Une demande entrante est comprise et envoyée à la bonne personne.',
    'Un dossier est résumé avant que vous ne l’ouvriez.',
    'Une information est retrouvée dans plusieurs outils en quelques secondes.',
    'Un compte rendu de réunion déclenche les tâches qui suivent.',
    'Un reporting fait à la main est généré, puis vérifié.',
  ],
  beforeAfter: {
    before: {
      label: 'Avant',
      steps: [
        { label: "Lire l’email" },
        { label: 'Ressaisir dans le CRM', cut: true },
        { label: 'Chercher les tarifs' },
        { label: 'Vérifier le stock', cut: true },
        { label: 'Copier dans le devis', cut: true },
        { label: 'Rédiger' },
        { label: 'Relancer plus tard', cut: true },
        { label: 'Envoyer' },
      ],
      summary: '8 étapes · 3 outils · 45 min',
    },
    after: {
      label: 'Avec AGS',
      steps: [
        { label: "L’IA lit et classe" },
        { label: 'Infos retrouvées' },
        { label: 'Devis préparé' },
        { label: 'Une personne valide', human: true },
      ],
      summary: '4 étapes · 8 min',
    },
  },
  link: cta.useCases,
}

export const method = {
  title: { lead: 'Démarrer petit. Prouver.', rest: 'Puis étendre.' },
  steps: [
    {
      title: 'Audit',
      duration: '2 à 4 semaines',
      text: "On repère où l’IA vous fait gagner du temps et on le teste sur un vrai cas.",
    },
    {
      title: 'Mise en place',
      duration: '3 à 6 semaines',
      text: 'On installe vos collaborateurs IA, on les branche à vos outils, on forme vos équipes.',
    },
    {
      title: 'Abonnement',
      duration: 'chaque mois',
      text: 'On les fait tourner et évoluer. Chaque trimestre, on fait le point avec vous.',
    },
  ],
  link: { label: 'Voir la méthode et les offres', href: '/methode' },
}

export const governance = {
  title: {
    lead: 'Un agent capable de tout faire',
    rest: 'ne doit pas avoir le droit de tout faire.',
  },
  intro: 'Pour chaque collaborateur IA, nous définissons avec vous :',
  rules: [
    'ce qu’il voit ;',
    'ce qu’il peut faire seul ;',
    'ce qu’il doit faire valider par une personne ;',
    'ce qu’il ne fait jamais.',
  ],
  outro: 'Et chaque action est tracée.',
  card: {
    kind: 'Collaborateur IA',
    name: 'Demandes entrantes',
    rows: [
      { label: 'Ce qu’il voit', value: 'La boîte de contact et les fiches clients, en lecture.' },
      { label: 'Ce qu’il peut faire seul', value: 'Classer, résumer, préparer une réponse.' },
      {
        label: 'Ce qu’il doit faire valider',
        value: 'Tout envoi à un client.',
        human: true,
      },
      { label: 'Ce qu’il ne fait jamais', value: 'Modifier un tarif, supprimer une donnée.' },
    ],
    footer: 'Chaque action est tracée : historisation, journal de bord, logs techniques.',
  },
  link: cta.governance,
}

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
