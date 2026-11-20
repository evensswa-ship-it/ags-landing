import type { Article } from '../blog'

export const cgpDormantsPromoteur: Article = {
  slug: 'cgp-dormants-promoteur',
  meta: {
    title: 'CGP dormants : ce qu’ils coûtent vraiment à un promoteur',
    description:
      'Sur 60 à 100 CGP actifs sur le papier, combien vendent encore vos programmes ? Ce que coûte vraiment un conseiller qui s’endort, et comment le repérer.',
  },
  category: 'Immobilier d’investissement',
  title: {
    lead: 'Vos CGP dormants vous coûtent plus cher',
    rest: 'que les CGP que vous n’avez pas encore trouvés',
  },
  lede:
    'Un promoteur constructeur régional vend ses résidences LMNP par des CGP. Sur le papier, son réseau compte entre 60 et 100 conseillers actifs. Nous lui avons posé une question simple : lesquels ont vendu un lot ces six derniers mois ? Silence. La réponse existe, quelque part entre un Excel, un CRM et des boîtes mail. Pendant ce temps, l’équipe passe environ un jour par semaine à chercher de nouveaux conseillers.',
  published: '2026-11-20',
  updated: '2026-11-20',
  blocks: [
    {
      type: 'image',
      src: '/blog/cgp-dormants-promoteur/en-tete.webp',
      width: 1280,
      height: 720,
      alt: 'Une grille de fiches dessinées au trait fin sur fond bleu nuit, reliées à un tableau central : la plupart sont ternes, quelques-unes sont éclairées en bleu clair, et certaines portent une coche dorée.',
      caption: 'Un réseau de conseillers sur le papier, et ceux qui vendent vraiment',
    },
    {
      type: 'callout',
      title: 'En bref',
      items: [
        'Un réseau de CGP « actifs » compte souvent une majorité de conseillers qui ne vendent plus, sans que personne ne le voie.',
        'Réveiller un conseiller qui connaît déjà vos programmes coûte moins d’effort que d’en convaincre un nouveau.',
        'La difficulté n’est pas de relancer : c’est de savoir, chaque semaine, qui relancer et pourquoi.',
      ],
    },
    { type: 'h2', text: 'Pourquoi un CGP qui s’endort coûte plus cher qu’il n’y paraît' },
    {
      type: 'p',
      text: 'Un conseiller qui cesse de vendre vos programmes ne vous prévient pas. Il ne résilie rien, il ne se plaint pas. Il a simplement trouvé un autre promoteur plus présent, un autre dispositif plus facile à placer, ou il a oublié votre dernière résidence. Son nom reste dans votre fichier, dans la colonne des actifs.',
    },
    {
      type: 'p',
      text: 'Or ce conseiller a déjà fait le plus dur : il connaît votre maison, vos programmes, votre façon de travailler. Il a peut-être déjà des clients à qui ils conviendraient. Un nouveau CGP, lui, doit tout découvrir avant sa première vente. Et pendant que l’équipe cherche ce nouveau conseiller, les anciens s’endorment un peu plus.',
    },
    {
      type: 'p',
      text: 'Le calcul suivant ne prétend pas décrire votre réseau. Il sert à poser la question avec vos propres chiffres.',
    },
    {
      type: 'example',
      title: 'Ce qui dort dans votre réseau (à refaire avec vos propres chiffres)',
      rows: [
        { label: 'CGP inscrits comme actifs', value: '80' },
        { label: 'Dont ayant vendu au moins un lot ces 12 derniers mois', value: '25' },
        { label: 'CGP dormants', value: '55', strong: true },
        { label: 'Si 1 dormant sur 10 revend 2 lots dans l’année', value: 'environ 11 lots' },
        { label: 'À comparer avec : les lots qui vous restent en fin de programme', value: 'votre chiffre', strong: true },
      ],
      note: 'Hypothèses à remplacer par les vôtres : nombre de conseillers inscrits, nombre réel de vendeurs sur la période, ventes moyennes d’un conseiller actif chez vous.',
    },
    {
      type: 'p',
      text: 'Onze lots, ce n’est pas une prévision. C’est un ordre de grandeur qui montre où regarder. En fin de programme, quand il reste un stock de lots à écouler, chaque conseiller réveillé compte davantage qu’un nom de plus dans le fichier.',
    },
    { type: 'h2', text: 'Ce que nous avons vu sur le terrain' },
    {
      type: 'p',
      text: '**Personne ne sait vraiment qui vend encore.** Chez ce promoteur, les CGP arrivent par le réseau, les recommandations, LinkedIn et un peu de démarchage. Tout est suivi à la main. Le CRM existe, mais l’équipe le juge mal paramétré, et le suivi des ventes vit dans un Excel à côté. Résultat : la liste des actifs ne dit pas qui est actif.',
    },
    {
      type: 'p',
      text: '**L’animation du réseau prend déjà beaucoup de temps.** L’équivalent de deux personnes à temps plein se partage entre l’animation des conseillers et le suivi des ventes. Ce n’est pas le temps qui manque, c’est la visibilité : on appelle ceux qu’on connaît le mieux, pas forcément ceux qui en ont le plus besoin.',
    },
    {
      type: 'p',
      text: '**Après échange, les priorités se sont inversées.** Au départ, le sujet qui revenait était de trouver de nouveaux CGP. En regardant où partait le temps, ce promoteur a reclassé lui-même : d’abord le suivi des ventes, ensuite l’animation du réseau, et seulement après la recherche de nouveaux conseillers.',
    },
    {
      type: 'p',
      text: '**Les événements réveillent, encore faut-il suivre.** Ses présentations réunissent une quinzaine de CGP, et elles plaisent. Mais sans trace de qui était là, de ce qu’il a vendu avant et de ce qu’il a demandé, l’élan retombe en quelques jours.',
    },
    { type: 'h2', text: 'À quoi ressemble votre lundi quand c’est réglé' },
    {
      type: 'p',
      text: 'Le directeur commercial ouvre une seule vue. **L’Animateur de réseau**, un collaborateur IA branché sur vos outils actuels, l’a préparée : qui a vendu quoi, depuis quand, quels conseillers ralentissent, lesquels n’ont rien vendu depuis des mois alors qu’ils vendaient bien avant.',
    },
    {
      type: 'p',
      text: 'Pour chaque conseiller à rappeler cette semaine, une raison claire : un programme qui correspond à sa clientèle, une ancienne vente, une question restée sans réponse après le dernier événement. Les messages de relance sont prêts, dans votre ton, tutoiement ou vouvoiement selon la relation. Votre équipe relit, corrige, et **rien ne part sans son clic**. Le téléphone, lui, reste à vous.',
    },
    {
      type: 'p',
      text: 'Vous ne changez pas de logiciel. Vos données restent à vous, et l’IA utilisée, en version professionnelle, n’apprend pas avec elles. Chaque gain est mesuré : conseillers relancés, conseillers revenus à la vente, heures récupérées par l’équipe.',
    },
    {
      type: 'callout',
      title: 'Ce que votre équipe garde',
      items: [
        'Le choix des conseillers à appeler, et l’ordre.',
        'Le ton et la relation avec chaque CGP.',
        'La relecture de chaque message avant envoi.',
      ],
    },
    {
      type: 'p',
      text: 'Une condition, tout de même : on ne branche rien sur une donnée douteuse. Si les ventes de vos conseillers sont éparpillées entre plusieurs fichiers, la première étape est de les remettre au propre. Si l’IA n’est pas la bonne réponse à ce moment-là, on vous le dit.',
    },
    {
      type: 'cta',
      text: 'Pourquoi le suivi des ventes et l’animation du réseau passent souvent avant la recherche de nouveaux CGP : nous l’expliquons dans notre article sur l’ordre à suivre.',
      link: { label: 'IA chez un promoteur : par quoi commencer', href: '/blog/ia-promoteur-par-ou-commencer' },
    },
    { type: 'h2', text: 'Les 3 questions à vous poser' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Sur vos CGP inscrits comme actifs, combien ont vendu au moins un lot ces douze derniers mois, et pouvez-vous le savoir en moins de cinq minutes ?',
        'Quand avez-vous rappelé pour la dernière fois un conseiller qui vendait bien il y a deux ans ?',
        'Cette semaine, votre équipe a-t-elle passé plus de temps à chercher de nouveaux CGP ou à réveiller ceux qui vous connaissent déjà ?',
      ],
    },
    {
      type: 'p',
      text: 'Si la première réponse vous demande plus d’une demi-journée de recherche, vous savez par où commencer.',
    },
    {
      type: 'signature',
      text: 'Evens Augustin, fondateur d’AGS & Co. AGS & Co installe des collaborateurs IA dans les cabinets de courtage en assurance et chez les acteurs de l’immobilier d’investissement, avec validation humaine et traçabilité à chaque étape. L’IA au travail. Sous contrôle.',
    },
  ],
  closing: {
    title: 'Avant de chercher de nouveaux CGP, regardons ceux qui dorment',
    text: 'L’audit AGS cartographie vos ventes, votre réseau de CGP et l’état de vos données, puis classe les cas qui rapportent le plus. Il vous appartient, que vous travailliez avec nous ou non. Tout commence par un premier échange de 45 minutes.',
    label: 'Réserver un premier échange',
  },
}
