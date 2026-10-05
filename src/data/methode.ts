import { cta } from './site'

export const methode = {
  path: '/methode',
  breadcrumb: 'Méthode & offres',
  meta: {
    title: 'Méthode & offres : diagnostic gratuit, audit, mise en place, AGS Care · AGS & Co',
    description:
      'Un diagnostic initial gratuit de 45 minutes, puis trois offres : Audit AGS (650 € HT), mise en place sur devis, AGS Care (550 € HT par mois, 4 revues par an).',
  },
  journey: {
    title: { lead: 'Le parcours,', rest: 'en sept temps.' },
    steps: [
      { name: 'Découvrir', text: '45 minutes, gratuites, pour comprendre votre activité.' },
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
      id: 'diagnostic',
      name: 'Diagnostic initial',
      format: 'Gratuit · 45 min',
      paid: false,
      title: { lead: 'Un premier échange,', rest: 'pour voir s’il y a un sujet.' },
      text: 'On prend 45 minutes pour comprendre votre activité et ce qui vous fait perdre du temps. Vous repartez avec un avis clair.',
      includes: [
        'Comprendre votre besoin',
        'Repérer ce qui vous fait perdre du temps',
        'Voir s’il existe un sujet qui mérite d’aller plus loin',
      ],
      note: 'Sans engagement. L’audit ne vient qu’ensuite, si vous le décidez.',
    },
    {
      id: 'audit',
      name: 'Audit AGS',
      format: 'Forfait · 650 € HT',
      paid: true,
      title: { lead: "Savoir où l’IA vous fait gagner du temps,", rest: "preuve à l’appui." },
      text: 'On regarde comment vous travaillez, on choisit le cas le plus rentable et on le teste sur le terrain.',
      includes: [
        'Vos processus décrits étape par étape',
        "L’état de vos données, prêtes ou à préparer",
        "Vos cas d’usage classés par gain attendu",
        'Une recommandation claire : on continue ou non',
      ],
      note: "L’audit vous appartient. Vous pouvez l’utiliser avec ou sans nous.",
    },
    {
      id: 'setup',
      name: 'Mise en place',
      format: 'Projet · sur devis',
      paid: true,
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
      name: 'AGS Care',
      format: '550 € HT / mois',
      paid: true,
      title: { lead: 'Vous ne payez pas tous les mois', rest: 'pour un outil installé une fois.' },
      text: 'Vos collaborateurs IA tournent, nous les supervisons et nous les faisons évoluer avec votre activité.',
      includes: [
        'La supervision de vos collaborateurs IA',
        'Un accompagnement dans la durée',
        'Le suivi des performances et des gains',
        'Les évolutions et la prise en compte de vos nouveaux besoins',
        '4 revues par an',
        'Une sensibilisation à la cybersécurité : les bonnes pratiques pour vos équipes',
      ],
      note: 'À venir : des interventions d’experts en cybersécurité.',
    },
  ],
  faq: {
    title: { lead: 'Questions', rest: 'fréquentes.' },
    items: [
      {
        question: 'Le diagnostic est-il vraiment gratuit ?',
        answer:
          "Oui. C’est un échange de 45 minutes, sans engagement, pour comprendre votre besoin et voir s’il y a un sujet. L’Audit AGS est une prestation distincte, à 650 € HT, que vous décidez ensuite ou non.",
      },
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
        question: 'Que comprend AGS Care ?',
        answer:
          "La supervision, le suivi des performances, quatre revues par an et les évolutions qui en découlent. Un nouveau collaborateur IA complet fait l’objet d’un devis.",
      },
    ],
  },
  closing: {
    title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
    text: "Diagnostic initial gratuit : 45 minutes pour comprendre votre besoin, repérer ce qui vous freine et voir s’il y a un sujet à creuser.",
    primary: cta.primary,
    secondary: cta.write,
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
