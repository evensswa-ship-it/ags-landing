import { casUsage } from './cas-usage'
import { cta } from './site'

type Case = (typeof casUsage.groups)[number]['cases'][number]

/** Cas tirés de la section Cas d’usage de l’accueil, par titre : un seul texte à maintenir. */
function pickCases(titles: string[]): Case[] {
  const all = casUsage.groups.flatMap((group) => group.cases)
  return titles.map((title) => {
    const found = all.find((item) => item.title === title)
    if (!found) throw new Error(`Cas d’usage introuvable : ${title}`)
    return found
  })
}

export type LocalPageData = {
  path: string
  breadcrumb: string
  meta: { title: string; description: string }
  /** Balisage Service : zone servie. */
  area: { '@type': string; name: string }[]
  serviceName: string
  hero: { eyebrow: string; title: { lead: string; rest: string }; intro: string }
  context: { title: { lead: string; rest: string }; paragraphs: string[]; link?: { label: string; href: string } }
  cases: Case[]
  faq: { question: string; answer: string }[]
}

/** Libellés communs aux deux pages locales. */
export const localLabels = {
  casesTitle: { lead: 'Trois exemples', rest: 'de ce qu’un collaborateur IA prend en charge.' },
  casesLink: { label: 'Voir les dix cas d’usage', href: '/#cas-usage' },
  faqTitle: { lead: 'Questions', rest: 'fréquentes.' },
  closing: {
    title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
    text: 'Diagnostic initial gratuit : 45 minutes pour comprendre votre besoin, repérer ce qui vous freine et voir s’il y a un sujet à creuser.',
    primary: cta.primary,
    secondary: cta.write,
  },
}

export const normandie: LocalPageData = {
  path: '/ia-entreprise-normandie',
  breadcrumb: 'IA en Normandie',
  meta: {
    title: 'Agents IA pour PME et ETI en Normandie · AGS & Co',
    description:
      'Collaborateurs IA (agents IA) pour les PME et ETI de Normandie : Rouen, Caen, Le Havre, Évreux. Diagnostic initial gratuit de 45 min, sur site ou à distance.',
  },
  area: [{ '@type': 'AdministrativeArea', name: 'Normandie' }],
  serviceName: 'Intégration d’agents IA pour les PME et ETI en Normandie',
  hero: {
    eyebrow: 'Rouen · Caen · Le Havre · Évreux',
    title: { lead: 'Agents IA pour les PME et ETI normandes.', rest: 'Depuis Rouen, au plus près du terrain.' },
    intro:
      'AGS & Co est basé à Rouen. Nous aidons les entreprises normandes à récupérer du temps grâce à des collaborateurs IA, branchés à leurs outils et validés par leurs équipes.',
  },
  context: {
    title: { lead: 'Un cabinet normand,', rest: 'qui vient vous voir.' },
    paragraphs: [
      'Dans une PME ou une ETI, quelques personnes portent souvent les devis, les relances, la saisie et le reporting. C’est là qu’un collaborateur IA fait gagner du temps.',
      'Nous venons dans vos locaux, à Rouen, Caen, Le Havre ou Évreux, pour comprendre comment le travail se fait vraiment. Le suivi se fait ensuite sur place ou à distance, selon ce qui vous arrange.',
      'Evens a mené des projets pour des acteurs normands, dont deux ans en mission au sein d’un grand acteur de l’assurance en Normandie. AGS & Co est membre de Normandie Numérique.',
    ],
  },
  cases: pickCases(['Relancer devis et prospects', 'Traiter factures et documents', 'Repérer les dossiers incomplets']),
  faq: [
    {
      question: 'Vous déplacez-vous partout en Normandie ?',
      answer:
        'Oui. Nous sommes basés à Rouen et nous venons à Caen, au Havre, à Évreux et ailleurs en Normandie pour les rendez-vous qui gagnent à se faire sur place. Le reste se fait à distance.',
    },
    {
      question: 'Le diagnostic peut-il se faire dans nos locaux ?',
      answer: 'Oui, si vous le préférez. Il dure 45 minutes, en visio ou chez vous, et reste gratuit et sans engagement.',
    },
    {
      question: 'Faut-il être une grande entreprise ?',
      answer:
        'Non. Nous travaillons avec des PME comme avec des ETI. Ce qui compte, c’est un processus répétitif qui prend du temps à vos équipes, pas la taille de l’entreprise.',
    },
  ],
}

export const paris: LocalPageData = {
  path: '/ia-entreprise-paris',
  breadcrumb: 'IA à Paris',
  meta: {
    title: 'Agents IA pour PME et ETI à Paris · AGS & Co',
    description:
      'Collaborateurs IA (agents IA) pour les PME et ETI de Paris et d’Île-de-France. Siège dans le 8e arrondissement, format hybride, diagnostic initial gratuit de 45 min.',
  },
  area: [
    { '@type': 'City', name: 'Paris' },
    { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  ],
  serviceName: 'Intégration d’agents IA pour les PME et ETI à Paris et en Île-de-France',
  hero: {
    eyebrow: 'Paris · Île-de-France',
    title: { lead: 'Agents IA pour les PME et ETI parisiennes.', rest: 'Sur site quand il le faut, à distance le reste du temps.' },
    intro:
      'AGS & Co a son siège à Paris, dans le 8e arrondissement. Nous mettons en place des collaborateurs IA dans les entreprises d’Île-de-France, branchés à leurs outils et sous le contrôle de leurs équipes.',
  },
  context: {
    title: { lead: 'Un format hybride,', rest: 'qui suit votre agenda.' },
    paragraphs: [
      'Les rendez-vous clés se font dans vos locaux, avec les personnes qui font le travail au quotidien. Le reste avance à distance, sans vous faire perdre de temps en déplacements.',
      'Dans une ETI, la question est souvent moins « est-ce possible ? » que « qui valide, qui voit quoi, comment c’est tracé ? ». C’est par là que nous commençons : chaque collaborateur IA a ses droits, ses limites et son historique.',
      'Evens a conduit des projets de migration cloud et de télécoms pour des acteurs normands et parisiens. AGS & Co est membre du Hub France IA.',
    ],
    link: cta.governance,
  },
  cases: pickCases(['Orienter les demandes entrantes', 'Du rendez-vous à la fiche client', 'Produire le reporting']),
  faq: [
    {
      question: 'Intervenez-vous dans toute l’Île-de-France ?',
      answer: 'Oui. Paris et l’Île-de-France : dans vos locaux pour les rendez-vous qui le demandent, à distance pour le reste.',
    },
    {
      question: 'Travaillez-vous avec nos équipes informatique et conformité ?',
      answer:
        'Oui, dès le départ. Vos équipes informatique, sécurité et conformité, et votre DPO, gardent la validation finale. AGS ne garantit pas la conformité : nous concevons et encadrons les collaborateurs IA avec vous.',
    },
    {
      question: 'Combien coûte un premier projet ?',
      answer:
        'Le diagnostic initial est gratuit. L’Audit AGS coûte 650 € HT. La mise en place est chiffrée sur devis après l’audit, et AGS Care coûte 550 € HT par mois.',
    },
  ],
}
