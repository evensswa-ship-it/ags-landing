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
        'Le temps de travail par dossier : traiter, contrôler, valider, chercher une information, ressaisir, relancer. Toutes personnes confondues.',
        'Le temps perdu autour : les interruptions, la reprise d’un dossier qui passe d’une personne à une autre, la coordination (« tu as vu mon mail ? »), les dossiers à reprendre parce qu’ils étaient incomplets.',
        'Les erreurs : le temps pour les corriger, plus ce qu’elles coûtent à l’extérieur (avoir, geste commercial, envoi refait).',
      ],
    },
    {
      type: 'image',
      src: '/blog/cout-processus-manuel/trois-couches.webp',
      width: 1280,
      height: 720,
      alt: 'Trois plaques superposées : en haut, les documents traités ; au milieu, des documents qui passent de main en main avec une horloge ; en bas, un document marqué d’une erreur.',
      caption: 'Le travail visible, le temps perdu autour, les erreurs',
    },
    {
      type: 'p',
      text: 'Les deux dernières couches sont celles qu’on ne voit pas dans un planning. C’est pour cela qu’on parle de coût invisible.',
    },
    { type: 'h2', text: 'La formule, simplement' },
    {
      type: 'callout',
      title: 'Coût mensuel d’un processus',
      text: 'Volume par mois × (temps de travail + temps perdu autour) ÷ 60 × coût horaire chargé, plus le coût des erreurs (volume × taux d’erreur × (temps de correction × coût horaire + coût externe)).',
    },
    {
      type: 'list',
      items: [
        'Volume par mois : un volume hebdomadaire se multiplie par 4,33, un volume quotidien par 21 jours ouvrés.',
        'Coût horaire chargé : le coût annuel d’un salarié (salaire brut et charges patronales) divisé par 1 607 heures, la durée légale annuelle d’un temps plein en France.',
        'Coût annuel : le coût mensuel multiplié par le nombre de mois d’activité.',
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
        { label: 'Volume', value: '45 par semaine, soit environ 195 par mois' },
        { label: 'Temps de travail par devis', value: '10 min' },
        { label: 'Temps perdu autour', value: '4 min' },
        { label: 'Devis avec une erreur', value: '3 %, 15 min de correction et 20 € de geste commercial' },
        { label: 'Coût annuel chargé d’un salarié', value: '45 000 €, soit 28 € de l’heure' },
        { label: 'Heures par mois', value: '45,5 h' },
        { label: 'Coût par devis', value: '7,34 €' },
        { label: 'Coût total par an', value: '17 172 €' },
        { label: 'Part du coût invisible', value: '36 %' },
      ],
      note: 'Plus d’une semaine de travail par mois pour un seul processus, dont plus d’un tiers ne se voit pas.',
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
