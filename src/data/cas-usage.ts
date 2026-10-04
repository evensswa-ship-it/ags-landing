export const casUsage = {
  title: { lead: "Ce qu’un collaborateur IA peut prendre en charge", rest: 'chez vous.' },
  intro:
    "Dix situations courantes, classées par fonction. Pour chacune : ce qui se passe aujourd’hui, ce que fait le collaborateur IA, ce que vous gardez, ce qu’on mesure.",
  labels: {
    problem: "Aujourd’hui",
    agent: 'Avec le collaborateur IA',
    human: 'Ce que vous gardez',
    metric: 'On mesure',
    agentKind: 'Collaborateur IA',
    aiNotice: 'Visages générés par IA : ces portraits représentent des collaborateurs IA, pas des personnes réelles.',
  },
  groups: [
    {
      name: 'Commercial',
      avatar: { src: '/agents/commercial.webp', alt: 'Avatar du collaborateur IA Commercial' },
      cases: [
        {
          title: 'Relancer devis et prospects',
          problem: 'Les devis envoyés ne sont pas tous relancés, faute de temps.',
          agent: 'Il repère les devis sans réponse et prépare la relance au bon moment.',
          human: "Vous validez ou ajustez avant l’envoi.",
          metric: 'Devis relancés, ventes récupérées',
        },
        {
          title: 'Du rendez-vous à la fiche client',
          problem: "Après un rendez-vous, la saisie attend le soir, ou n’est jamais faite.",
          agent: 'Il transforme vos notes en compte rendu, met la fiche à jour et crée les tâches.',
          human: "Vous relisez avant d’enregistrer.",
          metric: 'Fiches à jour, temps de saisie',
        },
      ],
    },
    {
      name: 'Service client',
      avatar: { src: '/agents/service-client.webp', alt: 'Avatar du collaborateur IA Service client' },
      cases: [
        {
          title: 'Orienter les demandes entrantes',
          problem: 'Les demandes arrivent de partout ; les urgentes attendent au milieu des autres.',
          agent: "Il lit chaque demande, la classe et l’envoie à la bonne personne avec un résumé.",
          human: 'La réponse au client reste la vôtre.',
          metric: 'Délai de première réponse',
        },
        {
          title: 'Répondre aux questions récurrentes',
          problem: 'Les mêmes questions reviennent chaque jour et occupent vos équipes.',
          agent: "Il prépare la réponse à partir de vos documents et de l’historique du client.",
          human: 'Une personne valide les réponses sensibles.',
          metric: 'Demandes traitées, délai de réponse',
        },
      ],
    },
    {
      name: 'Administration & finance',
      avatar: { src: '/agents/administration-finance.webp', alt: 'Avatar du collaborateur IA Administration & finance' },
      cases: [
        {
          title: 'Traiter factures et documents',
          problem: 'Factures et bons de commande sont saisis à la main.',
          agent: 'Il lit le document et place les informations dans votre logiciel.',
          human: 'Vous contrôlez les écarts et validez les paiements.',
          metric: 'Documents traités, erreurs évitées',
        },
        {
          title: "Relancer les impayés à l’amiable",
          problem: 'Les relances de factures passent après tout le reste.',
          agent: 'Il suit les échéances et prépare une relance courtoise, adaptée au client.',
          human: 'Vous gardez la main sur les cas délicats.',
          metric: 'Délai de paiement',
        },
      ],
    },
    {
      name: 'Opérations',
      avatar: { src: '/agents/operations.webp', alt: 'Avatar du collaborateur IA Opérations' },
      cases: [
        {
          title: 'Repérer les dossiers incomplets',
          problem: 'Un dossier bloqué pour une pièce manquante, découvert trop tard.',
          agent: "Il vérifie chaque dossier à l’arrivée et demande la pièce manquante.",
          human: 'Vous décidez des exceptions.',
          metric: 'Dossiers complets du premier coup',
        },
        {
          title: 'Retrouver une information interne',
          problem: 'La réponse existe, dans un document que personne ne retrouve.',
          agent: 'Il cherche dans vos documents et répond en citant sa source.',
          human: "Vous vérifiez la source quand l’enjeu est important.",
          metric: 'Temps de recherche',
        },
      ],
    },
    {
      name: 'Direction',
      avatar: { src: '/agents/direction.webp', alt: 'Avatar du collaborateur IA Direction' },
      cases: [
        {
          title: 'Produire le reporting',
          problem: "Chaque mois, quelqu’un assemble des chiffres depuis plusieurs outils.",
          agent: 'Il rassemble les données, produit le rapport et signale les écarts.',
          human: 'Vous vérifiez et commentez.',
          metric: 'Temps de préparation',
        },
        {
          title: 'Le point du matin',
          problem: 'Vous ouvrez plusieurs outils pour savoir où vous en êtes.',
          agent: 'Il prépare chaque matin un point court : demandes en attente, relances, alertes.',
          human: 'Vous décidez des priorités.',
          metric: 'Temps gagné chaque matin',
        },
      ],
    },
  ],
}
