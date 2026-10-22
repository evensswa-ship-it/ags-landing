import { cta } from './site'

export type OfferId = 'diagnostic' | 'audit' | 'setup' | 'abonnement'

export type Offer = {
  id: OfferId
  name: string
  /** Prix affiché. `amount` sert au balisage (null : sur devis). */
  price: { label: string; unit?: string; amount: number | null }
  format: string
  promise: string
  audience: string
  /** Trois puces au maximum. */
  includes: string[]
  note?: string
  entry?: boolean
}

export const offers: Offer[] = [
  {
    id: 'diagnostic',
    name: 'Diagnostic initial',
    price: { label: 'Gratuit', amount: 0 },
    format: '45 min · sans engagement',
    promise: 'Un premier échange, pour voir s’il y a un sujet.',
    audience: 'Vous ne savez pas encore où l’IA peut vous aider.',
    includes: [
      'Comprendre votre activité et votre besoin',
      'Repérer ce qui vous fait perdre du temps',
      'Un avis clair : aller plus loin ou non',
    ],
    entry: true,
  },
  {
    id: 'audit',
    name: 'Audit AGS',
    price: { label: '650 € HT', amount: 650 },
    format: 'Forfait',
    promise: 'Savoir où l’IA vous fait gagner du temps, avant d’investir.',
    audience: 'Vous avez repéré un processus et voulez savoir si ça vaut le coup.',
    includes: [
      'Vos processus et vos données passés en revue',
      'Vos cas d’usage classés par gain attendu',
      'Une recommandation claire : on continue ou non',
    ],
    note: 'L’audit vous appartient.',
  },
  {
    id: 'setup',
    name: 'Mise en place',
    price: { label: 'Sur devis', amount: null },
    format: 'Projet',
    promise: 'Des experts métiers augmentés, formés à vos règles, au travail dans vos outils.',
    audience: 'Le cas est validé, vous voulez le mettre en place.',
    includes: [
      'La connexion à vos logiciels, après vérification technique et sécurité',
      'Des règles claires : ce que l’IA fait seule, ce qu’une personne valide',
      'Une formation par profil et le suivi des 30 premiers jours',
    ],
  },
  {
    id: 'abonnement',
    name: 'AGS Care',
    price: { label: '550 € HT', unit: '/ mois', amount: 550 },
    format: 'Abonnement · 4 revues par an',
    promise: 'Vos collaborateurs IA suivis et améliorés dans la durée.',
    audience: 'Vos collaborateurs IA tournent, vous voulez qu’ils évoluent avec vous.',
    includes: [
      'La supervision et le suivi des performances',
      'Les évolutions selon vos nouveaux besoins',
      'Une sensibilisation à la cybersécurité : les bonnes pratiques',
    ],
    note: 'À venir : des interventions d’experts en cybersécurité.',
  },
]

export const ladderLabels = {
  list: 'Les quatre offres, de la première à la dernière étape',
  entry: 'Point d’entrée',
  audience: 'Pour qui',
}

/** Bande courte de l’accueil et des pages locales. */
export const offersTeaser = {
  title: { lead: 'Nos offres.', rest: 'Un prix affiché à chaque étape.' },
  text: 'On part d’un échange gratuit. On n’avance que si le gain est réel.',
  link: { label: 'Voir le détail des offres', href: '/offres' },
}

export const offres = {
  path: '/offres',
  breadcrumb: 'Offres',
  meta: {
    title: 'Offres IA pour PME et ETI : audit, agents IA · AGS & Co',
    description:
      'Diagnostic initial gratuit (45 min), Audit AGS à 650 € HT, mise en place d’agents IA sur devis, AGS Care à 550 € HT par mois. À Rouen, à Paris ou à distance.',
  },
  hero: {
    title: { lead: 'Nos offres IA pour PME et ETI.', rest: 'Un prix affiché à chaque étape.' },
    text: 'On part d’un échange gratuit. On n’avance à l’étape suivante que si le gain est réel.',
    primary: cta.primary,
    place: 'Rouen · Paris · à distance',
  },
  start: {
    title: { lead: 'Par où commencer ?' },
    label: 'Commencez par',
    items: [
      { situation: '« Je ne sais pas où l’IA peut m’aider. »', offer: 'diagnostic' },
      { situation: '« J’ai repéré un processus, je veux savoir si ça vaut le coup. »', offer: 'audit' },
      { situation: '« Le cas est validé, je veux le mettre en place. »', offer: 'setup' },
    ] satisfies { situation: string; offer: OfferId }[],
  },
  steps: {
    title: { lead: 'Comment ça se passe,', rest: 'en trois temps.' },
    items: [
      {
        name: 'Comprendre',
        offers: 'Diagnostic · Audit',
        text: 'On regarde comment le travail se fait vraiment, puis on choisit le cas qui rapporte le plus.',
      },
      {
        name: 'Mettre en place',
        offers: 'Mise en place',
        text: 'Branché à vos outils, équipe par équipe, avec une formation adaptée à chaque profil.',
      },
      {
        name: 'Faire évoluer',
        offers: 'AGS Care',
        text: 'Volume traité, temps gagné, erreurs évitées : on mesure, puis on ajuste chaque trimestre.',
      },
    ],
  },
  trust: {
    title: { lead: 'Pourquoi nous faire confiance.' },
    items: [
      {
        title: 'L’audit vous appartient.',
        text: 'Vous pouvez l’utiliser avec ou sans nous.',
      },
      {
        title: 'Une personne valide, tout est tracé.',
        text: 'Une IA de confiance : chaque collaborateur IA a ses droits, ses limites et son historique.',
        link: { label: 'Voir la gouvernance', href: '/gouvernance' },
        human: true,
      },
      {
        title: 'Les gains sont mesurés.',
        text: 'Les mêmes indicateurs avant et après : volume traité, temps gagné, erreurs évitées.',
      },
    ],
    membership: 'Membre de Normandie Numérique et du Hub France IA.',
  },
  faq: {
    title: { lead: 'Questions', rest: 'fréquentes.' },
    items: [
      {
        question: 'Le diagnostic est-il vraiment gratuit ?',
        answer:
          'Oui. C’est un échange de 45 minutes, sans engagement, pour comprendre votre besoin et voir s’il y a un sujet. L’Audit AGS est une prestation distincte, à 650 € HT, que vous décidez ensuite ou non.',
      },
      {
        question: 'Faut-il changer nos logiciels ?',
        answer:
          'Non, dans la grande majorité des cas. On part de vos outils. Si une connexion est impossible, vous le savez dès l’audit.',
      },
      {
        question: 'Et si l’IA n’est pas la bonne réponse ?',
        answer: 'On vous le dit. Parfois une automatisation simple ou un changement d’organisation suffit.',
      },
      {
        question: 'La formation est-elle incluse ?',
        answer:
          'Oui, dans la mise en place. Chaque profil apprend ce que l’outil fait, ce qu’il ne fait pas et quand reprendre la main.',
      },
      {
        question: 'Que comprend AGS Care ?',
        answer:
          'La supervision, le suivi des performances, quatre revues par an et les évolutions qui en découlent. Un nouveau collaborateur IA complet fait l’objet d’un devis.',
      },
      {
        question: 'Intervenez-vous en Normandie et à Paris ?',
        answer:
          'Oui. AGS & Co est à Rouen et à Paris. Les rendez-vous se font dans vos locaux ou à distance, selon ce qui vous arrange.',
      },
      {
        question: 'Comment l’AI Act est-il pris en compte ?',
        answer:
          'Chaque collaborateur IA est conçu en lisant le règlement européen sur l’IA (AI Act) : niveau de risque qualifié dès l’audit, usages interdits écartés, personnes informées quand elles échangent avec une IA, contrôle humain et documentation tenus à jour. AGS ne garantit pas la conformité : vos équipes conformité et votre DPO gardent la validation finale.',
      },
    ],
  },
  closing: {
    title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
    text: 'Diagnostic initial gratuit : 45 minutes pour comprendre votre besoin, repérer ce qui vous freine et voir s’il y a un sujet à creuser.',
    primary: cta.primary,
    secondary: cta.write,
  },
}
