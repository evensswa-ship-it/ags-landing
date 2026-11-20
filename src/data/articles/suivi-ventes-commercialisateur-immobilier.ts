import type { Article } from '../blog'

export const suiviVentesCommercialisateur: Article = {
  slug: 'suivi-ventes-commercialisateur-immobilier',
  meta: {
    title: 'Commercialisateur immobilier : le suivi des ventes et l’IA',
    description:
      'Réservation, financement, acte : pourquoi le suivi des ventes d’un commercialisateur vit dans un Excel, ce que ça coûte, et ce qu’un agent IA prépare.',
  },
  category: 'Immobilier d’investissement',
  title: {
    lead: 'De la réservation à l’acte :',
    rest: 'pourquoi le suivi des ventes d’un commercialisateur vit encore dans un Excel',
  },
  lede:
    'Fin de journée. Un commercialisateur qui vend de l’immobilier d’investissement par des CGP depuis plus de vingt ans fait le tour de ses ventes en cours. Ici une offre de prêt qui tarde, là une pièce qui manque, plus loin une date de signature que personne n’a confirmée. Chaque ligne de son tableau est une relance à faire. Et presque toutes passent par lui.',
  published: '2026-11-20',
  updated: '2026-11-20',
  blocks: [
    {
      type: 'image',
      src: '/blog/suivi-ventes-commercialisateur-immobilier/en-tete.webp',
      width: 1280,
      height: 720,
      alt: 'Une commercialisatrice en immobilier, vue de profil, feuillette le soir des dossiers de vente et un classeur ouvert sur son bureau, sous une lampe, un téléphone posé à côté, devant une fenêtre donnant sur la ville.',
      caption: 'Entre la réservation et l’acte, chaque dossier attend quelque chose (personne fictive)',
    },
    {
      type: 'callout',
      title: 'En bref',
      items: [
        'Entre la réservation et l’acte, une vente passe par le client, son CGP, la banque, le notaire et le promoteur : l’information se perd entre eux.',
        'Le temps passé à reconstituer « où en est chaque dossier » ne se voit nulle part, mais il se paie chaque semaine.',
        'Un agent peut préparer la vue et les relances ; c’est toujours vous qui validez, avec votre ton.',
      ],
    },
    { type: 'h2', text: 'Entre la réservation et l’acte, des mois de relances que personne ne compte' },
    {
      type: 'p',
      text: 'Une vente en immobilier d’investissement ne se joue pas le jour de la réservation. Elle se joue dans les semaines qui suivent : le financement à obtenir, les pièces à réunir, le rendez-vous chez le notaire à caler. Entre ces étapes, cinq interlocuteurs au moins : le client, le CGP qui l’a conseillé, la banque, le notaire, le promoteur.',
    },
    {
      type: 'p',
      text: 'Chacun a une partie de l’information, souvent dans sa boîte mail. Le commercialisateur, lui, doit avoir la vue d’ensemble. Alors il la reconstruit à la main, dans un tableau, dossier par dossier. Et quand une vente traîne, c’est rarement parce que quelqu’un a dit non. C’est parce que personne n’a relancé au bon moment.',
    },
    {
      type: 'example',
      title: 'Le temps du suivi des ventes (à refaire avec vos propres chiffres)',
      rows: [
        { label: 'Ventes en cours entre réservation et acte', value: '30' },
        { label: 'Relances et points de suivi par vente et par mois', value: '4' },
        { label: 'Temps moyen par relance (retrouver le dossier, écrire, noter)', value: '10 min' },
        { label: 'Temps de relance par mois', value: 'environ 20 h' },
        { label: 'Mise à jour du tableau et point hebdomadaire', value: '2 h par semaine' },
        { label: 'Temps total consacré au suivi, par mois', value: 'environ 28 h', strong: true },
      ],
      note: 'Hypothèses à remplacer par les vôtres : nombre de ventes en cours, nombre de relances réelles, temps passé à chercher l’information avant d’écrire.',
    },
    {
      type: 'p',
      text: 'Près de quatre jours de travail par mois, passés à savoir où en sont les ventes plutôt qu’à en faire de nouvelles. Et ce calcul ne compte pas le plus coûteux : la vente qui glisse d’un mois parce qu’une pièce attendait dans une boîte mail, ou celle qui tombe parce que le financement n’a pas été relancé à temps.',
    },
    { type: 'h2', text: 'Ce que nous avons vu sur le terrain' },
    {
      type: 'p',
      text: '**Le suivi vit à côté des outils, pas dedans.** Chez un promoteur constructeur qui vend par des CGP, le suivi des ventes se fait sur Excel. Un CRM existe, mais il est mal paramétré, et une refonte est prévue. Ce n’est pas un manque d’outil : c’est que personne n’a eu le temps de le régler sur la façon dont le travail se fait vraiment.',
    },
    {
      type: 'p',
      text: '**C’est le dirigeant qui court après les pièces.** Le commercialisateur de notre scène d’ouverture nous l’a dit simplement : entre la promesse et l’acte, il court après les pièces et les dates. Le temps qu’il y passe, il ne le passe pas avec les CGP qui font son chiffre.',
    },
    {
      type: 'p',
      text: '**La vente ne s’arrête pas à l’acte.** Sur un programme neuf, le client attend ensuite deux à quatre ans de chantier. Il faut le rassurer, lui donner des nouvelles, répondre à son CGP. Ce suivi-là retombe sur la même personne, avec le même tableau.',
    },
    {
      type: 'p',
      text: '**Le ton ne se délègue pas.** Tutoiement ou vouvoiement, prénom ou nom : pour ce commercialisateur, c’est sacré. Une relance qui sonne faux abîme une relation construite pendant des années. L’IA peut préparer le message, jamais décider de la relation.',
    },
    { type: 'h2', text: 'À quoi ressemble votre lundi matin quand c’est réglé' },
    {
      type: 'p',
      text: 'Vous n’ouvrez plus votre tableau pour le mettre à jour. Le **Suivi des ventes**, un collaborateur IA branché sur vos outils actuels, l’a fait pour vous. Vous voyez trois colonnes : ce qui avance, ce qui attend, ce qui bloque. Pour chaque vente bloquée, la pièce ou la date qui manque, et qui doit la fournir.',
    },
    {
      type: 'p',
      text: 'Les relances de la semaine sont prêtes : au client, au CGP, à l’étude notariale. Elles sont écrites dans votre ton. Vous les relisez, vous corrigez si besoin, et **rien ne part sans votre clic**. Les nouvelles à donner aux clients pendant le chantier sont préparées de la même façon.',
    },
    {
      type: 'p',
      text: 'Vous ne changez pas de logiciel : l’agent travaille avec ce que vous avez déjà. Vos données restent à vous, et l’IA utilisée, en version professionnelle, n’apprend pas avec elles. Chaque gain est mesuré : ventes suivies, relances préparées, heures récupérées.',
    },
    {
      type: 'callout',
      title: 'Ce que vous gardez',
      items: [
        'La décision de relancer, d’attendre ou d’appeler.',
        'Le ton et la relation avec chaque client et chaque CGP.',
        'La relecture de chaque message avant envoi.',
      ],
    },
    { type: 'h2', text: 'Pourquoi on commence par vos données, pas par l’IA' },
    {
      type: 'p',
      text: 'Un agent qui lit un tableau à moitié à jour prépare des relances à moitié justes. C’est pour cela qu’on ne branche rien sur une donnée douteuse. Le premier travail consiste à regarder où vit réellement l’information sur vos ventes : le tableau, le CRM, les boîtes mail, la tête de votre responsable ADV. Parfois, la bonne réponse est de remettre un fichier au propre avant tout le reste. Si l’IA n’est pas la bonne réponse, on vous le dit.',
    },
    {
      type: 'cta',
      text: 'Le suivi des ventes est souvent le premier chantier qui rapporte, avant même la recherche de nouveaux CGP. Nous expliquons pourquoi dans notre article sur l’ordre à suivre.',
      link: { label: 'IA chez un promoteur : par quoi commencer', href: '/blog/ia-promoteur-par-ou-commencer' },
    },
    { type: 'h2', text: 'Les 3 questions à vous poser' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Combien de vos ventes en cours attendent quelque chose aujourd’hui, et savez-vous quoi sans ouvrir votre boîte mail ?',
        'Si vous partiez deux semaines, qui saurait où en est chaque dossier entre la réservation et l’acte ?',
        'Combien d’heures par mois passez-vous à relancer, plutôt qu’à travailler avec les CGP qui font votre chiffre ?',
      ],
    },
    {
      type: 'p',
      text: 'Si l’une de ces réponses vous fait hésiter, votre suivi des ventes mérite qu’on le regarde de près.',
    },
    {
      type: 'signature',
      text: 'Evens Augustin, fondateur d’AGS & Co. AGS & Co installe des collaborateurs IA dans les cabinets de courtage en assurance et chez les acteurs de l’immobilier d’investissement, avec validation humaine et traçabilité à chaque étape. L’IA au travail. Sous contrôle.',
    },
  ],
  closing: {
    title: 'Avant de parler d’IA, regardons comment vos ventes avancent vraiment',
    text: 'L’audit AGS cartographie votre suivi des ventes, votre réseau de CGP et l’état de vos données, puis classe les cas qui rapportent le plus. Il vous appartient, que vous travailliez avec nous ou non. Tout commence par un premier échange de 45 minutes.',
    label: 'Réserver un premier échange',
  },
}
