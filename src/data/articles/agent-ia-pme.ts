import type { Article } from '../blog'

export const agentIaPme: Article = {
  slug: 'agent-ia-pme',
  meta: {
    title: 'Agent IA en PME : ce qu’il fait, ce qu’il ne fait pas · AGS & Co',
    description:
      'Ce qu’un agent IA prend en charge dans une PME, ce qui reste à une personne, et comment choisir un premier processus. Un guide concret, sans promesse.',
  },
  title: { lead: 'Agent IA en PME :', rest: 'ce qu’il fait, ce qu’il ne fait pas.' },
  lede:
    'On entend tout et son contraire sur les agents IA : qu’ils vont tout faire seuls, ou qu’ils ne servent qu’à rédiger des emails. Dans une PME, la réalité est plus simple et plus utile. Voici où passe la frontière.',
  published: '2026-11-09',
  updated: '2026-11-09',
  blocks: [
    {
      type: 'image',
      src: '/blog/agent-ia-pme/en-tete.webp',
      width: 1280,
      height: 720,
      alt: 'Des documents entrent à gauche, passent par une suite d’étapes reliées par une ligne, et une étape dorée marque le moment où une personne valide avant la sortie.',
      caption: 'Un travail traité de bout en bout, avec une validation humaine au bon endroit',
    },
    { type: 'h2', text: 'Un agent IA, concrètement' },
    {
      type: 'p',
      text: 'Un agent IA n’est pas une fenêtre de conversation. C’est un collaborateur formé aux processus, aux règles et aux outils d’une fonction : il reçoit un travail, le traite de bout en bout, et passe la main à une personne quand une décision est à prendre.',
    },
    {
      type: 'callout',
      title: 'La différence avec un outil qui rédige',
      text: 'Un outil de rédaction attend qu’on lui demande quelque chose. Un agent IA part d’un événement (un email reçu, une facture déposée, un dossier incomplet) et enchaîne seul les étapes prévues, jusqu’au point où une personne valide.',
    },
    { type: 'h2', text: 'Ce qu’il fait' },
    {
      type: 'list',
      items: [
        'Il trie ce qui arrive : emails, pièces jointes, formulaires, demandes de devis.',
        'Il vérifie : pièces manquantes, montants, cohérence avec une commande ou un contrat.',
        'Il prépare : un devis, une réponse, une saisie, un dossier complet prêt à valider.',
        'Il relance selon vos règles : un client, un fournisseur, un collègue qui n’a pas répondu.',
        'Il met à jour vos outils (CRM, comptabilité, tableur), et chaque action est tracée.',
      ],
    },
    { type: 'h2', text: 'Ce qu’il ne fait pas' },
    {
      type: 'list',
      items: [
        'Il ne décide pas à votre place : un prix, un geste commercial, un litige restent à une personne.',
        'Il n’invente pas une règle qui n’existe pas : si le processus n’est pas clair, il faut d’abord le clarifier.',
        'Il n’agit pas hors de ses permissions : il n’accède qu’aux outils et aux données prévus.',
        'Il ne remplace pas une équipe : il lui rend du temps pour ce qui demande du jugement.',
        'Il ne tourne pas sans suivi : ses résultats se mesurent et ses règles évoluent avec votre activité.',
      ],
    },
    { type: 'h2', text: 'La frontière : une personne valide' },
    {
      type: 'p',
      text: 'Tout l’enjeu est de placer la validation au bon endroit. Trop tôt, l’agent ne fait gagner aucun temps. Trop tard, une erreur part chez un client. On la place là où une erreur coûte cher : un envoi externe, un paiement, un engagement.',
    },
    {
      type: 'image',
      src: '/blog/agent-ia-pme/validation.webp',
      width: 1280,
      height: 720,
      alt: 'Une colonne de factures : quatre suivent une ligne bleue jusqu’à une pile de documents validés ; une seule bifurque vers un point doré où une personne valide, puis rejoint la ligne.',
      caption: 'Seul le dossier qui pose question passe par une personne',
    },
    {
      type: 'example',
      title: 'Traitement d’une facture fournisseur',
      rows: [
        { label: 'Réception', value: 'L’agent lit la facture et la rattache à la bonne commande' },
        { label: 'Vérification', value: 'Il compare montants, quantités et TVA avec la commande' },
        { label: 'Écart détecté', value: 'Il prépare une note claire et passe la main' },
        { label: 'Décision', value: 'Une personne valide ou refuse le paiement' },
        { label: 'Mise à jour', value: 'L’agent saisit la facture dans l’outil comptable, action tracée' },
      ],
      note: 'La personne ne traite plus que les factures qui posent question, et elle les reçoit déjà préparées.',
    },
    { type: 'h2', text: 'Les bons premiers processus' },
    {
      type: 'p',
      text: 'Le meilleur point de départ n’est pas le plus spectaculaire. C’est un processus qui coche la plupart de ces cases :',
    },
    {
      type: 'list',
      items: [
        'Fréquent : il revient chaque jour ou chaque semaine.',
        'Manuel : on copie, on vérifie, on ressaisit.',
        'Encadré par des règles claires, même si elles ne sont écrites nulle part.',
        'Appuyé sur des données accessibles : emails, documents, outils existants.',
        'Rattrapable : une erreur se corrige avant de partir chez un client.',
      ],
    },
    { type: 'h2', text: 'Ce qu’il faut prévoir avant' },
    {
      type: 'list',
      items: [
        'Un processus décrit tel qu’il se fait vraiment, pas tel qu’il devrait se faire.',
        'Des données prêtes : où elles sont, qui y a accès, ce qui peut être traité.',
        'Une personne responsable côté entreprise, qui valide et fait évoluer les règles.',
        'Des indicateurs simples : volume traité, temps gagné, erreurs évitées.',
      ],
    },
    { type: 'h2', text: 'Ce que ça change' },
    {
      type: 'p',
      text: 'Un agent IA bien placé ne se juge pas à ce qu’il sait faire, mais à ce qu’il libère : plus de dossiers traités, des délais plus courts, moins de reprises, et une équipe qui passe son temps sur les décisions plutôt que sur la ressaisie. C’est une capacité en plus, sans hausse proportionnelle des charges.',
    },
    {
      type: 'cta',
      text: 'Voyez ce qu’un collaborateur IA prend en charge dans chaque fonction : commercial, service client, administration et finance, opérations, direction.',
      link: { label: 'Voir les cas d’usage', href: '/#cas-usage' },
    },
  ],
}
