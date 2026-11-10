import type { Article } from '../blog'

export const coutRessaisieExtranets: Article = {
  slug: 'cout-ressaisie-extranets-cabinet-courtage',
  meta: {
    title: 'Ressaisie sur les extranets assureurs : le vrai coût pour un cabinet de courtage | AGS & Co',
    description:
      'Un devis, cinq extranets, cinq fois les mêmes informations. Le calcul du temps perdu dans un cabinet de courtage en assurance, et comment le récupérer sans perdre le contrôle.',
  },
  category: 'Courtage en assurance',
  title: {
    lead: 'Un devis, cinq extranets :',
    rest: 'ce que coûte vraiment la ressaisie dans un cabinet de courtage en assurance',
  },
  lede:
    'Dans un cabinet de courtage en assurance, obtenir un tarif comparé veut souvent dire saisir cinq fois les mêmes informations sur cinq extranets différents. Personne ne le chiffre, parce que « ça fait partie du métier ». Faisons le calcul.',
  published: '2026-11-10',
  updated: '2026-11-10',
  readingMinutes: 6,
  blocks: [
    { type: 'h2', text: 'La scène que tout courtier connaît' },
    {
      type: 'p',
      text: 'Un client professionnel vous demande un devis. Vous avez déjà tout : son Kbis, son activité, son chiffre d’affaires, ses sinistres des trois dernières années, les garanties qu’il veut.',
    },
    {
      type: 'p',
      text: 'Pour lui proposer le meilleur tarif, vous ouvrez l’extranet de la première compagnie. Identification, mot de passe, parfois un code reçu par SMS. Vous saisissez. Puis la deuxième compagnie : autre écran, autre ordre des champs, autre façon de nommer la même garantie. Vous ressaisissez. Puis la troisième, la quatrième, la cinquième.',
    },
    {
      type: 'p',
      text: 'Les outils de tarification multi-compagnies existent, mais ils couvrent rarement toutes vos compagnies partenaires, et presque jamais les risques un peu spécifiques. Pour ceux-là, c’est retour à la saisie, extranet par extranet.',
    },
    {
      type: 'p',
      text: 'Au bout d’une heure, vous avez cinq tarifs dans cinq onglets, que vous recopiez dans un tableau pour pouvoir les comparer. Et le client attend.',
    },
    { type: 'h2', text: 'Le calcul que personne ne fait' },
    {
      type: 'example',
      title: 'Exemple de calcul (à refaire avec vos propres chiffres)',
      rows: [
        { label: 'Extranets consultés par demande de devis', value: '5' },
        { label: 'Temps de saisie par extranet', value: '10 min' },
        { label: 'Temps de mise en forme du comparatif', value: '10 min' },
        { label: 'Temps par devis comparé', value: '1 h', strong: true },
        { label: 'Demandes de devis par semaine (cabinet de 3 personnes)', value: '15' },
        { label: 'Temps passé par mois', value: 'environ 65 h', strong: true },
        { label: 'Coût horaire chargé d’un chargé de clientèle', value: '35 €' },
        { label: 'Coût mensuel de la ressaisie', value: 'environ 2 300 €', strong: true },
      ],
      note: 'Ces chiffres sont des hypothèses moyennes. Prenez les vôtres : nombre de compagnies interrogées, nombre de devis par semaine, temps réel par écran.',
    },
    {
      type: 'p',
      text: '65 heures par mois, c’est presque deux semaines de travail d’une personne, passées à recopier des informations que le cabinet possède déjà.',
    },
    {
      type: 'callout',
      title: 'Ce que nous visons chez AGS & Co',
      text: 'Pour un cabinet de courtage en assurance, notre objectif avec un collaborateur IA : faire passer la ressaisie sur les extranets de **65 heures à 8 heures par mois**. Soit **plus de 55 heures récupérées** chaque mois pour conseiller les clients plutôt que recopier.',
    },
    { type: 'h2', text: 'Ce que le calcul ne montre pas' },
    { type: 'p', text: 'Le temps n’est que la partie visible. Trois autres coûts pèsent plus lourd.' },
    {
      type: 'p',
      text: '**Le délai de réponse.** Pendant que vous saisissez, le prospect continue de chercher. Un devis rendu le lendemain contre un devis rendu dans l’heure, c’est souvent la différence entre une affaire signée et une affaire perdue.',
    },
    {
      type: 'p',
      text: '**Les erreurs de saisie.** Cinq saisies, c’est cinq occasions de se tromper sur un chiffre d’affaires, une date de création ou un code activité. Un tarif faux, c’est au mieux un devis à refaire, au pire un contrat mal calibré.',
    },
    {
      type: 'p',
      text: '**La traçabilité du conseil.** Votre devoir de conseil vous impose de pouvoir montrer pourquoi vous avez recommandé telle offre plutôt qu’une autre. Quand la comparaison vit dans des onglets fermés et un tableau fait à la main, la preuve est fragile.',
    },
    { type: 'h2', text: 'Ce qui change avec un collaborateur IA' },
    {
      type: 'p',
      text: 'Le principe est simple : le chargé de clientèle saisit la demande **une seule fois**, dans une fiche unique. Un collaborateur IA prend le relais :',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'il se connecte aux extranets de vos compagnies partenaires ;',
        'il remplit chaque formulaire à partir de la fiche, dans le format propre à chaque compagnie ;',
        'il récupère les tarifs et les garanties proposées ;',
        'il les range dans un comparatif unique, toujours présenté de la même façon ;',
        'il signale ce qu’il n’a pas pu faire (champ inconnu, question spécifique, refus de tarification) au lieu de deviner.',
      ],
    },
    {
      type: 'callout',
      title: 'Ce que le courtier garde',
      items: [
        'Le choix des compagnies à interroger.',
        'La relecture du comparatif avant tout envoi au client.',
        'La recommandation finale et la relation client.',
        'Un historique de chaque demande : ce qui a été saisi, où, quand, et quel tarif est revenu.',
      ],
    },
    {
      type: 'p',
      text: 'Le collaborateur IA ne conseille pas le client. Il supprime la ressaisie. Le courtier passe de « celui qui recopie » à « celui qui compare et conseille ».',
    },
    { type: 'h2', text: 'Par où commencer' },
    {
      type: 'p',
      text: 'Pas besoin de tout transformer d’un coup. On commence par un seul type de risque, celui qui génère le plus de demandes de devis, et deux ou trois compagnies. On mesure le temps gagné sur un mois. Ensuite seulement, on étend.',
    },
    {
      type: 'p',
      text: 'La première étape consiste à refaire le calcul ci-dessus avec vos vrais chiffres. C’est exactement ce que nous faisons pendant le diagnostic gratuit : 45 minutes pour repérer où votre cabinet perd du temps, et combien cela vous coûte réellement.',
    },
    {
      type: 'signature',
      text: 'Evens Augustin, fondateur d’AGS & Co. AGS & Co installe des collaborateurs IA dans les cabinets de courtage en assurance et chez les acteurs de l’immobilier d’investissement, avec validation humaine et traçabilité à chaque étape. L’IA au travail. Sous contrôle.',
    },
  ],
  closing: {
    title: 'Combien d’heures votre cabinet passe-t-il sur les extranets ?',
    text: 'En 45 minutes, nous chiffrons avec vous le temps perdu en ressaisie et ce qu’il est réaliste de récupérer. Gratuit, sans engagement.',
    label: 'Réserver mon diagnostic gratuit',
  },
}
