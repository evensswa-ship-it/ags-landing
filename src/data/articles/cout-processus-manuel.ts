import type { Article } from '../blog'

export const coutProcessusManuel: Article = {
  slug: 'cout-processus-manuel',
  meta: {
    title: 'Coût d’un processus manuel : la méthode de calcul · AGS & Co',
    description:
      'Temps de travail, temps perdu autour, erreurs : la méthode simple pour chiffrer ce que coûte vraiment un processus manuel dans une PME, avec un exemple pas à pas.',
  },
  title: { lead: 'Combien coûte vraiment un processus manuel ?', rest: 'La méthode, pas à pas.' },
  lede:
    'Quand on chiffre un processus, on compte presque toujours le temps passé sur la tâche elle-même. Le reste, ce qui se passe autour, n’apparaît nulle part. C’est souvent là que se cache une bonne partie du coût.',
  published: '2026-11-04',
  updated: '2026-11-04',
  blocks: [
    {
      type: 'image',
      src: '/blog/cout-processus-manuel/en-tete.webp',
      width: 1280,
      height: 720,
      alt: 'Un devis au centre, entouré de documents empilés, d’un email, d’une horloge et de flèches de passage de main : le travail invisible autour d’une tâche.',
      caption: 'Autour du devis, tout ce qui ne se voit pas dans un planning',
    },
    { type: 'h2', text: 'Pourquoi on sous-estime presque toujours ce chiffre' },
    {
      type: 'p',
      text: 'Demandez à une équipe combien de temps prend un devis, une facture fournisseur ou une relance. La réponse porte sur le cœur de la tâche : « dix minutes ». C’est rarement faux, mais c’est incomplet. Avant et après ces dix minutes, il y a l’information qu’on cherche, le collègue qu’on interrompt, le dossier qu’on rouvre parce qu’il manque une pièce, l’erreur qu’on corrige trois jours plus tard.',
    },
    {
      type: 'p',
      text: 'Pris un par un, ces moments paraissent négligeables. Multipliés par le volume d’un mois, ils pèsent souvent autant que le travail lui-même. Les mesurer, c’est la première étape avant de décider s’il faut automatiser, réorganiser ou ne rien changer.',
    },
    { type: 'h2', text: 'Les trois couches du coût d’un processus' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Le temps de travail : traiter le dossier lui-même.',
        'Le temps perdu autour : chercher une information, relancer, être interrompu, attendre une réponse (« tu as vu mon mail ? »).',
        'Les dossiers à reprendre : une erreur, une pièce manquante, et le travail est à refaire.',
      ],
    },
    {
      type: 'image',
      src: '/blog/cout-processus-manuel/trois-couches.webp',
      width: 1280,
      height: 720,
      alt: 'Trois plaques superposées : en haut, les documents traités ; au milieu, des documents qui passent de main en main avec une horloge ; en bas, un document marqué d’une erreur.',
      caption: 'Le travail visible, le temps perdu autour, les dossiers à reprendre',
    },
    {
      type: 'p',
      text: 'Les deux dernières couches sont celles qu’on ne voit pas dans un planning. C’est pour cela qu’on parle de coût invisible.',
    },
    { type: 'h2', text: 'Le calcul, en trois étapes' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Le temps par dossier : le temps de travail, plus le temps perdu autour, plus la part des dossiers à refaire.',
        'Les heures par mois : ce temps multiplié par le nombre de dossiers par semaine, puis par 4,33 (le nombre moyen de semaines dans un mois).',
        'Le coût : ces heures multipliées par le coût d’une heure. Pour l’obtenir, on prend le salaire brut mensuel, on ajoute environ 45 % de charges patronales, et on divise par 134 heures travaillées par mois.',
      ],
    },
    { type: 'h2', text: 'Un exemple réaliste : le traitement des devis' },
    {
      type: 'p',
      text: 'Prenons une équipe commerciale efficace, qui utilise déjà l’IA pour rédiger. Elle traite 45 demandes de devis par semaine. Rien d’alarmant sur le papier.',
    },
    {
      type: 'example',
      title: 'Traitement des demandes de devis',
      rows: [
        { label: 'Devis par semaine', value: '45' },
        { label: 'Temps par devis', value: '10 min de travail + 4 min perdues autour' },
        { label: 'Devis à reprendre', value: '3 sur 100' },
        { label: 'Salaire brut', value: '2 600 € par mois, soit 28 € de l’heure charges comprises' },
        { label: 'Temps total', value: '46 heures par mois' },
        { label: 'Coût par devis', value: '6,71 €' },
        { label: 'Coût par an', value: '15 688 €' },
        { label: 'Coût invisible', value: '30 %' },
      ],
      note: 'Plus d’une semaine de travail par mois pour un seul processus, dont près d’un tiers ne se voit pas.',
    },
    {
      type: 'callout',
      title: 'Le calcul, déroulé',
      text: '10 + 4 + 0,3 (3 devis sur 100 refaits) = 14,3 minutes par devis. Multiplié par 195 devis par mois : 46 heures. Multiplié par 28 € de l’heure : 1 307 € par mois, soit 15 688 € par an.',
    },
    {
      type: 'p',
      text: 'Et ce n’est qu’un processus. Ajoutez les factures fournisseurs, les relances d’impayés et les demandes clients : le total grimpe vite.',
    },
    { type: 'h2', text: 'Mesurer sans y passer des semaines' },
    {
      type: 'list',
      items: [
        'Mesurez sur une à deux semaines plutôt que de mémoire : un simple relevé du nombre de dossiers et du temps passé suffit.',
        'Comptez les reprises : combien de dossiers sont rouverts, et combien de fois un dossier change de mains.',
        'Demandez à ceux qui font le travail : ce sont eux qui savent où le temps se perd.',
      ],
    },
    { type: 'h2', text: 'Ce que ce chiffre ne dit pas' },
    {
      type: 'p',
      text: 'Le délai n’entre pas dans le calcul. Un dossier peut demander vingt minutes de travail et neuf jours d’attente. Ce délai a un coût réel (un client qui attend, une trésorerie qui tarde), mais il se qualifie à part.',
    },
    {
      type: 'p',
      text: 'Ensuite, réduire ce coût n’est pas une économie de salaire. Le temps libéré devient une valeur s’il est réalloué : plus de dossiers traités, plus de prospects rappelés, des délais plus courts, une croissance absorbée sans recruter dans l’urgence.',
    },
    { type: 'h2', text: 'Que faire du résultat ?' },
    {
      type: 'p',
      text: 'Un repère simple : au-delà de 20 heures ou de 1 000 € par mois, un processus mérite une analyse plus approfondie. En dessous, gardez-le en observation et comparez-le à vos autres processus. Le plus coûteux n’est pas toujours le premier à traiter : un processus fréquent, manuel et bien défini est souvent le meilleur point de départ, parce qu’un collaborateur IA peut le prendre en charge pendant qu’une personne garde la validation.',
    },
    {
      type: 'cta',
      text: 'Faites le calcul sur un de vos processus : c’est gratuit, sans engagement, et les formules sont celles de cet article.',
      link: { label: 'Combien coûte mon processus ?', href: '/calculateur' },
    },
  ],
}
