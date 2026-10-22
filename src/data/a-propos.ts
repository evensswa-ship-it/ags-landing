export const aPropos = {
  path: '/a-propos',
  breadcrumb: 'À propos',
  meta: {
    title: 'À propos : l’équipe AGS & Co, à Rouen et à Paris',
    description:
      'Evens et Naomie accompagnent les PME et ETI de Normandie et de Paris dans l’intégration de l’IA, en partant du terrain avant de parler de technologie.',
  },
  title: { lead: 'Comprendre votre terrain', rest: 'avant de parler technologie.' },
  intro: 'AGS & Co est basé à Rouen et à Paris, et accompagne des PME et des ETI.',
  people: [
    {
      name: 'Evens',
      role: 'Fondateur · Intégration IA & pilotage de projets',
      photo: { src: '/team/evens-augustin.jpg', alt: "Portrait d’Evens" },
      paragraphs: [
        "Evens pilote l’intégration de l’IA chez les clients d’AGS & Co avec une double expertise : la gestion de projet et la technique.",
        "Chef de projet depuis plusieurs années, il a été PMO sur une migration cloud et sur des projets télécoms pour des acteurs normands et parisiens, puis a passé deux ans en mission au sein d’un grand acteur de l’assurance en Normandie. Cette expérience lui a montré ce qui fait réussir un projet dans une organisation exigeante : comprendre le terrain, préparer les données, prévoir les validations, accompagner les équipes.",
        "Chez AGS & Co, il intervient dans l’audit, la conception des collaborateurs IA, leur connexion à vos outils et leur suivi dans la durée.",
        "Son approche est simple : comprendre un processus avant d’y mettre de l’IA, et mesurer ce que l’on gagne.",
      ],
    },
    {
      name: 'Naomie',
      role: 'Co-fondatrice · Développement commercial & stratégie de marque',
      photo: { src: '/team/naomie.jpg', alt: 'Portrait de Naomie' },
      paragraphs: [
        "Naomie accompagne le développement commercial d’AGS & Co avec une double expertise : la communication et l’entrepreneuriat.",
        "Après avoir dirigé DesignByNao, son agence de communication, elle développe aujourd’hui une activité dans le secteur de la beauté, soutenue par une communauté engagée. Cette expérience lui donne une compréhension très concrète des enjeux des entrepreneurs et des dirigeants : attirer des clients, développer une marque, créer une relation de confiance et faire grandir une activité.",
        "Chez AGS & Co, elle intervient dans la relation commerciale, l’identification des besoins et les premiers échanges avec les entreprises.",
        'Son approche est simple : comprendre le terrain, les objectifs et les irritants avant de parler de solution, avec un regard à la fois commercial, marketing et opérationnel.',
      ],
    },
  ],
  partners: {
    title: {
      lead: 'Vous êtes ESN, cabinet de conseil, intégrateur ou expert métier ?',
      rest: 'Travaillons ensemble.',
    },
    intro:
      'Un collaborateur IA bien installé crée des besoins autour de lui : intégration, données, développement, maintenance. Nous ne faisons pas tout seuls : nous faisons appel à vous.',
    gainsLabel: 'Ce que vous y gagnez',
    gains: [
      {
        title: 'Des missions pour vos consultants',
        text: 'Quand un de nos comptes a besoin de renfort, nous vous proposons d’y placer vos consultants.',
      },
      {
        title: 'L’industrialisation, avec vous',
        text: 'Une fois le premier cas validé, nous faisons appel à vos équipes pour le déployer à plus grande échelle et le maintenir.',
      },
      {
        title: 'Une offre IA concrète pour vos clients',
        text: 'Vos clients vous demandent de l’IA : vous leur proposez une démarche structurée, du diagnostic au suivi, sans monter une équipe dédiée.',
      },
    ],
    itemsLabel: 'Trois façons de travailler ensemble',
    items: [
      { title: "Apport d’affaires", text: 'Vous nous présentez un client, nous menons la mission.' },
      { title: 'Co-intervention', text: 'Nous intervenons ensemble, chacun sur son métier.' },
      {
        title: 'Sous-traitance',
        text: 'Nous réalisons la partie IA de votre mission, pour votre compte.',
      },
    ],
    link: { label: 'Parlons partenariat', href: '/contact' },
  },
}
