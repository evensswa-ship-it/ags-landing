import { cta } from './site'

/**
 * Page /courtiers : destination des articles de la série « courtage en assurance et CGP ».
 * Règles propres : aucun prix, aucun nom d’assureur ou de comparateur, jamais le mot « outil »
 * pour ce que vend AGS, AGS n’est jamais présenté comme « spécialiste du courtage ».
 */
export const courtiers = {
  path: '/courtiers',
  breadcrumb: 'Courtiers et CGP',
  meta: {
    title: 'Agents IA pour cabinets de courtage et CGP · AGS & Co',
    description:
      'Ressaisie, pièces, e-mails, conformité : un agent IA prépare le travail de votre cabinet, vous validez. Diagnostic gratuit de 45 minutes, sans engagement.',
  },
  serviceName: 'Agents IA pour cabinets de courtage en assurance et conseillers en gestion de patrimoine',
  audience: 'Cabinets de courtage en assurance et conseillers en gestion de patrimoine',

  hero: {
    eyebrow: 'Courtiers en assurance · CGP',
    title: { lead: 'Moins de ressaisie, plus de conseil.', rest: 'L’agent prépare, vous décidez.' },
    intro:
      'Un agent IA prend en charge le travail répétitif de votre cabinet : il lit les pièces, prépare les dossiers, trie les e-mails, relance. Le conseil, la validation et la signature restent à vous.',
    primary: { label: 'Réserver mon diagnostic gratuit', href: cta.primary.href },
  },

  pains: {
    title: { lead: 'Votre semaine,', rest: 'hors du conseil.' },
    intro:
      'Dans les cabinets avec qui nous échangeons, le temps ne part pas dans le conseil. Il part autour.',
    items: [
      '**La ressaisie.** Le même permis, la même carte grise, le même relevé d’informations, saisis sur chaque extranet compagnie.',
      '**Les dossiers qui reviennent.** Une pièce manque, une date ne colle pas : le dossier repart, on recommence.',
      '**La boîte mail.** Devis, sinistres, échéances et réclamations arrivent mélangés, et tout se trie à la main.',
      '**Les relances.** Pièces KYC, justificatifs, documents manquants : on ne peut pas les oublier, et ils ne rapportent rien.',
      '**La conformité après le rendez-vous.** Compte-rendu, lettre de mission, rapport d’adéquation : tout doit être rédigé, signé et tracé.',
    ],
    note: 'Quand un dossier est vendu à prix fixe, chaque heure passée là fait baisser sa rentabilité. C’est le temps administratif qui plafonne votre chiffre d’affaires, pas le nombre de clients.',
    link: cta.calculator,
  },

  method: {
    title: { lead: 'L’agent prépare,', rest: 'vous décidez.' },
    intro: 'Chaque agent suit le même chemin. Rien ne part chez un client ou une compagnie sans votre validation.',
    flowLabel: 'Comment un agent IA traite un dossier dans votre cabinet',
    flow: [
      { label: 'Il reçoit' },
      { label: 'Il lit et vérifie' },
      { label: 'Il prépare' },
      { label: 'Vous décidez', human: true },
      { label: 'Il exécute et trace' },
    ],
  },

  agents: {
    title: { lead: 'Ce qu’un agent IA', rest: 'peut prendre en charge.' },
    intro: 'On commence par un seul processus : celui qui vous coûte le plus. Quelques exemples.',
    labels: { agent: 'L’agent', human: 'Vous gardez' },
    items: [
      {
        title: 'Devis express',
        agent:
          'Le client envoie ses pièces le soir, en photo ou en PDF. L’agent les lit, complète le dossier, signale les anomalies et prépare le comparatif.',
        human: 'Le choix des compagnies, la relecture du comparatif et la recommandation au client.',
      },
      {
        title: 'Tri des e-mails',
        agent:
          'Chaque message est lu, classé (devis, sinistre, échéance, réclamation), rattaché au bon client, avec un brouillon de réponse.',
        human: 'La réponse envoyée et tout ce qui demande un jugement.',
      },
      {
        title: '« Est-ce couvert ? »',
        agent: 'L’agent cherche dans les conditions générales de la compagnie et cite l’article et la page.',
        human: 'La lecture de la clause et la réponse donnée au client.',
      },
      {
        title: 'Rendez-vous et conformité (CGP)',
        agent:
          'Préparation du rendez-vous, compte-rendu, recueil d’informations, projets de lettre de mission et de rapport d’adéquation, relances des pièces KYC.',
        human: 'Le conseil, la relecture et la signature de chaque document.',
      },
      {
        title: 'Échéances et renouvellements',
        agent: 'Les échéances sont anticipées, le client est relancé, la comparaison est prête à temps.',
        human: 'La décision de renouveler, de renégocier ou de changer de contrat.',
      },
    ],
  },

  safeguards: {
    title: { lead: 'Les garde-fous,', rest: 'dès le premier jour.' },
    items: [
      { title: 'Votre devoir de conseil reste le vôtre', text: 'L’agent prépare, vous validez et signez. Il ne conseille pas le client.' },
      { title: 'Vos accès restent à vous', text: 'L’agent travaille avec vos accès, dans votre session, sans stocker vos mots de passe.' },
      { title: 'Chaque action est tracée', text: 'Qui a validé quoi, et quand : l’historique est consultable à tout moment.' },
      { title: 'Vos clients sont informés', text: 'Quand un client échange avec une IA, il le sait, et il peut toujours joindre une personne.' },
    ],
    link: cta.governance,
  },

  start: {
    title: { lead: 'Par où commencer ?', rest: 'Par vos vrais dossiers.' },
    steps: [
      {
        title: 'Diagnostic gratuit',
        text: '45 minutes en visio, sans engagement. On repère le processus qui vous coûte le plus et on le chiffre. Vous repartez avec le chiffre, même si vous n’allez pas plus loin.',
      },
      {
        title: 'Audit de modélisation',
        text: 'On regarde vos vrais dossiers et vos logiciels, et on dessine l’agent : ce qu’il fait, ce qu’il ne fait pas, ce que vous validez, et le temps gagné attendu.',
      },
      {
        title: 'Intégration',
        text: 'L’agent est branché sur les logiciels que vous utilisez déjà. Il ne les remplace pas. Le temps gagné est mesuré.',
      },
    ],
  },

  articles: {
    title: { lead: 'À lire', rest: 'sur le blog.' },
    categories: ['Courtage en assurance', 'Gestion de patrimoine'],
    link: { label: 'Tous les articles', href: '/blog' },
  },

  faqTitle: { lead: 'Questions', rest: 'fréquentes.' },
  faq: [
    {
      question: 'L’IA, est-ce vraiment pour un cabinet comme le nôtre ?',
      answer:
        'C’est le but du diagnostic : voir sur vos vrais dossiers si un agent vous fait gagner du temps. Si ce n’est pas le cas, on vous le dit.',
    },
    {
      question: 'Nous avons déjà un comparateur et un logiciel de gestion.',
      answer: 'L’agent se branche sur ce que vous avez déjà. Il ne le remplace pas, et vos équipes gardent leurs habitudes.',
    },
    {
      question: 'Et nos mots de passe d’extranet ?',
      answer:
        'L’agent travaille avec vos accès, dans votre session, sans stocker vos mots de passe. Tout est journalisé : qui a validé quoi, et quand.',
    },
    {
      question: 'Et le devoir de conseil ?',
      answer:
        'L’agent prépare, vous validez et signez. Rien ne part chez le client ou la compagnie sans votre validation.',
    },
    {
      question: 'Je n’ai pas le temps de mettre ça en place.',
      answer:
        'C’est pour ça qu’on commence par un seul processus, celui qui vous coûte le plus, et qu’on mesure le temps gagné avant d’aller plus loin.',
    },
  ],

  closing: {
    title: { lead: 'Quel processus vous fait perdre le plus de temps ?' },
    text: 'Réservez votre diagnostic gratuit de 45 minutes, en visio et sans engagement. On repère ensemble le processus qui vous coûte le plus et on le chiffre. Vous repartez avec le chiffre, même si vous n’allez pas plus loin.',
    primary: { label: 'Réserver mon diagnostic gratuit', href: cta.primary.href },
  },
}
