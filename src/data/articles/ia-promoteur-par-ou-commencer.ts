import type { Article } from '../blog'

export const iaPromoteurParOuCommencer: Article = {
  slug: 'ia-promoteur-par-ou-commencer',
  meta: {
    title: 'IA chez un promoteur immobilier : par où commencer ?',
    description:
      'Suivi des ventes, animation des CGP, recherche de conseillers : par où un promoteur commence avec l’IA, et à quoi ressemble un agent en action.',
  },
  category: 'Immobilier d’investissement',
  title: {
    lead: 'IA chez un promoteur :',
    rest: 'par quoi commencer, et à quoi ça ressemble en vrai',
  },
  lede:
    'Quand on parle d’IA avec un promoteur, le premier sujet qui sort est presque toujours le même : trouver de nouveaux CGP. Chez un promoteur de la région bordelaise, nous avons pris le temps de regarder tout le reste. À la fin de l’échange, c’est lui qui a reclassé ses priorités. Et pour que ce ne reste pas abstrait, nous vous montrons plus bas un agent au travail, écran par écran.',
  published: '2026-11-13',
  updated: '2026-11-13',
  blocks: [
    {
      type: 'image',
      src: '/blog/ia-promoteur-par-ou-commencer/en-tete.webp',
      width: 1280,
      height: 720,
      alt: 'Quatre étapes de vente reliées par une ligne, la troisième en pointillés car bloquée, puis un réseau de conseillers dont une partie est éteinte.',
      caption: 'Une vente qui bloque, des conseillers qui s’endorment',
    },
    {
      type: 'callout',
      title: 'En bref',
      items: [
        'La recherche de nouveaux CGP est le sujet le plus visible, rarement le plus rentable.',
        'Un agent ne décide rien à votre place : il cherche, prouve, prépare, et votre équipe valide.',
        'Avant tout agent, on regarde l’état des données : on ne branche rien sur une donnée douteuse.',
      ],
    },
    { type: 'h2', text: 'Le cas le plus visible n’est pas toujours le plus rentable' },
    {
      type: 'p',
      text: 'Trouver des CGP, c’est la douleur qu’on sent le soir. Un commercialisateur avec vingt-cinq ans de métier nous racontait ses soirées sur Internet et sur LinkedIn à chercher quels cabinets vendent vraiment ses dispositifs. Il y en a des milliers en France ; une poignée seulement en vendent réellement.',
    },
    {
      type: 'p',
      text: 'Mais quand on regarde où part le temps de l’équipe, la photo change. Chez ce promoteur, l’animation du réseau et le suivi des ventes mobilisent **l’équivalent de deux personnes à temps plein**. La recherche de nouveaux conseillers, elle, prend environ **un jour par semaine**. Le calcul est simple, refaites-le avec vos chiffres.',
    },
    {
      type: 'example',
      title: 'Où part le temps de l’équipe (à refaire avec vos propres chiffres)',
      rows: [
        { label: 'Animation du réseau et suivi des ventes', value: '2 personnes à temps plein' },
        { label: 'Soit, par semaine, pour le réseau et les ventes', value: 'environ 70 h' },
        { label: 'Recherche de nouveaux CGP', value: 'environ 1 jour par semaine' },
        { label: 'Soit, par semaine, pour la recherche', value: 'environ 7 h' },
        { label: 'Part du temps consacrée au réseau et aux ventes déjà là', value: 'environ 90 %', strong: true },
      ],
      note: 'Ordres de grandeur arrondis, observés sur le terrain. Remplacez-les par les vôtres : qui suit les ventes, qui appelle les CGP, combien d’heures par semaine.',
    },
    {
      type: 'p',
      text: 'Neuf heures sur dix vont à ce qui existe déjà. C’est là qu’un gain se voit le plus vite, et c’est souvent là que l’argent dort : un lot qui ne se vend pas en fin de programme, une vente bloquée faute d’une pièce, un conseiller qui a vendu l’an dernier et que personne n’a rappelé depuis.',
    },
    { type: 'h2', text: 'Ce que nous avons appris sur le terrain' },
    {
      type: 'p',
      text: '**Le promoteur ne manque pas d’outils, il manque de visibilité.** Celui que nous avons rencontré compte entre 60 et 100 CGP actifs sur le papier. Personne ne sait vraiment qui vend encore et qui dort. Le suivi des ventes vit dans un Excel, à côté d’un CRM qui existe mais que l’équipe juge mal paramétré.',
    },
    {
      type: 'p',
      text: '**Ce qui coûte le plus cher ne fait pas de bruit.** Un commercialisateur passe une partie de ses semaines à courir après les pièces et les dates entre la promesse et l’acte, puis à rassurer ses clients pendant deux à quatre ans de chantier. Un conseiller qui s’endort ne prévient pas : il cesse simplement de vendre vos programmes.',
    },
    {
      type: 'p',
      text: '**Un prompt donne une réponse, un agent tient dans la durée.** Construire en interne est tentant, et certaines équipes le font avec sérieux. Mais un collaborateur IA qui tourne chez un promoteur doit se souvenir de chaque dossier pendant des années, travailler sur les données de l’entreprise, suivre des règles écrites, attendre une validation humaine, et être supervisé par quelqu’un qui le fait évoluer.',
    },
    { type: 'h2', text: 'Un agent en action : le Chasseur de CGP' },
    {
      type: 'p',
      text: 'Prenons l’agent que les promoteurs demandent en premier, parce que c’est le plus facile à montrer. Chaque matin, il cherche des cabinets qui conseillent déjà le type de programme que vous commercialisez, il vérifie qu’ils sont actifs, il les note, et il prépare un premier message. Voici l’écran que la responsable des partenariats ouvre en arrivant.',
    },
    {
      type: 'image',
      kind: 'capture',
      src: '/blog/ia-promoteur-par-ou-commencer/tableau-de-bord.webp',
      width: 1600,
      height: 1000,
      alt: 'Tableau de bord du Chasseur de CGP : 10 cabinets qualifiés, 5 à valider, 4 messages envoyés, 1 rendez-vous pris, les cinq étapes du travail de l’agent et le journal de ses actions.',
      caption: 'Le tableau de bord : ce qui attend, ce qui a été fait, et pourquoi',
    },
    {
      type: 'p',
      text: 'En haut, l’essentiel en une ligne : les cabinets qualifiés, ceux qui attendent une décision, les messages partis, les rendez-vous pris. Au milieu, les cinq étapes que l’agent a menées pour vous : **trouver, prouver, vérifier, noter, préparer**.',
    },
    {
      type: 'p',
      text: 'Le plus utile est en bas : le journal. On y voit ce que l’agent a retenu, mais aussi ce qu’il a écarté, avec la raison. Un cabinet qui ne fait que du LMNP d’occasion, un autre qui refuse de travailler avec les promoteurs : écartés, et c’est écrit. Chaque action de votre équipe y figure aussi. **Chaque action est tracée**, rien ne se passe en coulisses.',
    },
    { type: 'h2', text: 'Chaque cabinet arrive avec sa preuve' },
    {
      type: 'p',
      text: 'Quand on ouvre un cabinet à valider, on ne trouve pas un nom dans une liste. On trouve **la phrase de son site qui prouve qu’il vend ce que vous construisez**, avec le lien pour vérifier. Puis une note sur 100, expliquée point par point : chaque point dit d’où il vient.',
    },
    {
      type: 'image',
      kind: 'capture',
      src: '/blog/ia-promoteur-par-ou-commencer/cabinets-a-valider.webp',
      width: 1400,
      height: 1479,
      alt: 'Fiche d’un cabinet à valider : la preuve citée mot pour mot avec son lien, le détail de la note sur 100, les contacts publiés par le cabinet, le premier message prêt à relire et les boutons Écarter et Valider l’envoi.',
      caption: 'Une fiche à valider : la preuve, la note expliquée, le message prêt à relire',
    },
    {
      type: 'p',
      text: 'Les contacts sont ceux que le cabinet publie lui-même, avec leur source. Le premier message cite la preuve, présente le programme et part au nom de la personne de votre équipe. Le ton reste le vôtre : vouvoiement ou tutoiement, c’est vous qui choisissez.',
    },
    {
      type: 'p',
      text: '**Rien ne part sans un clic humain.** Votre équipe relit, corrige si besoin, puis dépose le message dans ses brouillons ou l’ouvre dans sa messagerie. Elle peut aussi écarter le cabinet ou laisser une note (« déjà rencontré au salon »). Vos données restent à vous, et l’IA utilisée, en version professionnelle, n’apprend pas avec elles.',
    },
    {
      type: 'p',
      text: 'Le même principe vaut pour les deux autres agents : chercher, prouver, préparer, puis une personne valide. Le Suivi des ventes met chaque lundi sous les yeux de l’ADV les ventes qui avancent, celles qui attendent et la pièce qui manque. L’Animateur de réseau dit au directeur commercial quels conseillers n’ont rien vendu depuis des mois, et pourquoi les rappeler cette semaine.',
    },
    { type: 'h2', text: 'Par quoi commencer, et par quoi ne pas commencer' },
    {
      type: 'p',
      text: 'Le Chasseur est le plus spectaculaire, pas forcément le premier à installer. L’ordre retenu par ce promoteur n’est pas une règle universelle, mais il revient souvent, parce qu’il suit l’argent :',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Le Suivi des ventes** : chaque vente, de la réservation à l’acte, avec ce qui avance, ce qui attend et ce qui bloque.',
        '**L’Animateur de réseau** : qui a vendu quoi, depuis quand, quels CGP s’endorment et qui relancer cette semaine.',
        '**Le Chasseur de CGP** : les cabinets qui vendent vraiment votre type de programme, avec la preuve, avant le premier appel.',
      ],
    },
    { type: 'p', text: 'Et trois façons de mal commencer :' },
    {
      type: 'list',
      items: [
        'Choisir l’agent le plus spectaculaire plutôt que celui qui libère le plus de temps.',
        'Brancher quoi que ce soit sur un CRM plein de doublons ou sur un fichier que seule une personne comprend.',
        'Lancer un agent sans savoir qui le supervise, qui valide, et comment on mesurera le gain.',
      ],
    },
    {
      type: 'p',
      text: 'Pour lui, la toute première étape n’était d’ailleurs pas un agent : c’était de remettre les données du CRM au propre. Si l’IA n’est pas la bonne réponse à un moment donné, il vaut mieux le dire.',
    },
    { type: 'h2', text: 'Les 3 questions à vous poser' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Sur vos CGP actifs, combien ont vendu au moins un lot ces six derniers mois, et qui dans l’équipe peut répondre en moins de cinq minutes ?',
        'Combien d’heures par semaine votre équipe passe-t-elle à reconstituer l’état des ventes plutôt qu’à les faire avancer ?',
        'Si vous branchiez un agent demain sur votre CRM, feriez-vous confiance à ce qu’il y lirait ?',
      ],
    },
    {
      type: 'p',
      text: 'Si l’une de ces réponses vous gêne, c’est probablement par là qu’il faut commencer. Et pas forcément par l’IA.',
    },
    {
      type: 'signature',
      text: 'Evens Augustin, fondateur d’AGS & Co. AGS & Co installe des collaborateurs IA dans les cabinets de courtage en assurance et chez les acteurs de l’immobilier d’investissement, avec validation humaine et traçabilité à chaque étape. L’IA au travail. Sous contrôle.',
    },
  ],
  closing: {
    title: 'Envie de voir comment ça marche avec vos programmes ?',
    text: 'En 45 minutes, nous regardons ensemble vos ventes, votre réseau de CGP et l’état de vos données, et nous vous montrons à quoi ressemblerait votre espace. Si un audit a du sens ensuite, il vous appartient, que vous travailliez avec nous ou non.',
    label: 'Réserver un premier échange',
  },
}
