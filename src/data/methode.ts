import { cta } from './site'

export const methode = {
  path: '/methode',
  breadcrumb: 'Méthode & offres',
  meta: {
    title: 'Méthode & offres : audit, mise en place, abonnement · AGS & Co',
    description:
      'Intégration IA en trois étapes : un audit de 2 à 4 semaines, une mise en place de 3 à 6 semaines, un abonnement avec revue trimestrielle.',
  },
  journey: {
    title: { lead: 'Le parcours,', rest: 'en sept temps.' },
    steps: [
      { name: 'Découvrir', text: '30 minutes pour comprendre votre activité.' },
      { name: 'Cartographier', text: 'Comment le travail se fait vraiment, étape par étape.' },
      { name: 'Prioriser', text: 'Les cas qui rapportent le plus, pas les plus spectaculaires.' },
      { name: 'Tester', text: 'Un vrai cas, avec vos équipes.' },
      { name: 'Déployer', text: 'Branché à vos outils, équipe par équipe.' },
      { name: 'Mesurer', text: 'Volume traité, temps gagné, erreurs évitées.' },
      { name: 'Faire évoluer', text: 'Un point chaque trimestre.' },
    ],
  },
  includesLabel: 'Vous obtenez',
  offers: [
    {
      id: 'audit',
      name: 'Audit',
      format: 'Forfait · 2 à 4 semaines',
      title: { lead: "Savoir où l’IA vous fait gagner du temps,", rest: "preuve à l’appui." },
      text: 'On regarde comment vous travaillez, on choisit le cas le plus rentable et on le teste sur le terrain.',
      includes: [
        'Vos processus décrits étape par étape',
        "L’état de vos données, prêtes ou à préparer",
        "Vos cas d’usage classés par gain attendu",
        'Un test sur un vrai cas, avec 2 à 5 utilisateurs',
        'Une recommandation claire : on continue ou non',
      ],
      note: "L’audit vous appartient. Vous pouvez l’utiliser avec ou sans nous.",
    },
    {
      id: 'setup',
      name: 'Mise en place',
      format: 'Projet · 3 à 6 semaines',
      title: { lead: 'Vos collaborateurs IA au travail,', rest: 'dans vos outils.' },
      text: 'Le test a fait ses preuves. On passe en conditions réelles, sans bousculer ce qui marche.',
      includes: [
        'Une vérification technique et sécurité, puis la connexion à vos logiciels',
        "Des règles claires : ce que l’IA fait seule, ce qu’une personne valide",
        'Un démarrage progressif, équipe par équipe',
        'Une formation par profil : dirigeant, manager, utilisateur',
        'Le suivi des 30 premiers jours',
      ],
      note: '',
    },
    {
      id: 'abonnement',
      name: 'Abonnement',
      format: 'Mensuel',
      title: { lead: 'Vous ne payez pas tous les mois', rest: 'pour un outil installé une fois.' },
      text: 'Vos collaborateurs IA tournent, nous les surveillons et nous les faisons évoluer avec votre activité.',
      includes: [
        'Le fonctionnement et la surveillance au quotidien',
        '4 revues par an, une par trimestre',
        'Avant chaque revue, une feuille de route à remplir : ce qui marche, ce qui coince, ce que vous voulez faire évoluer',
        'La mise à jour de vos collaborateurs IA après chaque revue',
        'Un bilan des gains chaque trimestre',
      ],
      note: '',
    },
  ],
  faq: {
    title: { lead: 'Questions', rest: 'fréquentes.' },
    items: [
      {
        question: 'Faut-il changer nos logiciels ?',
        answer:
          "Non, dans la grande majorité des cas. On part de vos outils. Si une connexion est impossible, vous le savez dès l’audit.",
      },
      {
        question: "Et si l’IA n’est pas la bonne réponse ?",
        answer:
          "On vous le dit. Parfois une automatisation simple ou un changement d’organisation suffit.",
      },
      {
        question: 'La formation est-elle incluse ?',
        answer:
          "Oui, dans la mise en place. Chaque profil apprend ce que l’outil fait, ce qu’il ne fait pas et quand reprendre la main.",
      },
      {
        question: "Que comprend l’abonnement ?",
        answer:
          "Le fonctionnement, la surveillance, quatre revues par an et les mises à jour qui en découlent. Un nouveau collaborateur IA complet fait l’objet d’un devis.",
      },
    ],
  },
  closing: {
    title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
    text: '30 minutes pour en parler, sans engagement.',
    primary: cta.primary,
    secondary: cta.write,
  },
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
