import { cta } from './site'
import { agentIaPme } from './articles/agent-ia-pme'
import { coutProcessusManuel } from './articles/cout-processus-manuel'
import { coutRessaisieExtranets } from './articles/cout-ressaisie-extranets-cabinet-courtage'

/**
 * Blocs d’un article. Le texte reste dans les données, les composants ne font que le mettre en forme.
 * Dans `p`, `list`, `callout` et `signature`, `**texte**` est affiché en gras.
 */
export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  /** Encadré : définition, formule ou point clé ; un texte, une liste, ou les deux. */
  | { type: 'callout'; title: string; text?: string; items?: string[] }
  /** Exemple chiffré : toujours étiqueté « Exemple illustratif ». `strong` met une ligne de résultat en avant. */
  | { type: 'example'; title: string; rows: { label: string; value: string; strong?: boolean }[]; note?: string }
  | { type: 'cta'; text: string; link: { label: string; href: string } }
  /** Illustration générée par IA : fichier dans `public/blog/<slug>/`, mention « Image générée par IA » affichée. */
  | { type: 'image'; src: string; width: number; height: number; alt: string; caption?: string }
  /** Signature de fin d’article. */
  | { type: 'signature'; text: string }
  /** Questions fréquentes : affichées en accordéon et déclarées à Google (FAQPage). */
  | { type: 'faq'; title: string; items: { question: string; answer: string }[] }

export type Article = {
  slug: string
  /** Balise title (environ 60 caractères) et description (environ 155). */
  meta: { title: string; description: string }
  /** Rubrique affichée au-dessus du titre et déclarée dans le balisage (articleSection). */
  category?: string
  title: { lead: string; rest?: string }
  lede: string
  /** Dates ISO : publication et dernière modification réelle. */
  published: string
  updated: string
  blocks: ArticleBlock[]
  /** Temps de lecture imposé, en minutes ; sinon il est estimé à 200 mots par minute. */
  readingMinutes?: number
  /** Lien vers la page de la cible (ex. /courtiers), affiché sous le corps de l'article. */
  landing?: { label: string; href: string }
  /** Appel final propre à l’article ; sinon celui du blog. Le bouton mène toujours au diagnostic. */
  closing?: { title: string; text: string; label: string }
}

/** Du plus récent au plus ancien. */
export const articles: Article[] = [coutRessaisieExtranets, agentIaPme, coutProcessusManuel]

/** Titre complet d’un article, en une ligne (liste du blog, fil d’Ariane, balisage). */
export function fullTitle(article: Article) {
  return article.title.rest ? `${article.title.lead} ${article.title.rest}` : article.title.lead
}

export const blog = {
  path: '/blog',
  rss: '/blog/rss.xml',
  breadcrumb: 'Blog',
  meta: {
    title: 'Blog : agents IA et processus des PME · AGS & Co',
    description:
      'Méthodes concrètes pour chiffrer un processus, choisir un premier cas d’usage et intégrer des agents IA dans une PME ou une ETI, sous contrôle humain.',
  },
  title: { lead: 'Le blog.', rest: 'Des méthodes, pas des promesses.' },
  intro:
    'Comment chiffrer ce qui prend du temps, par où commencer et ce qu’un collaborateur IA change concrètement dans une PME. Un nouvel article chaque semaine.',
  labels: {
    author: 'Evens Augustin',
    authorRole: 'Fondateur d’AGS & Co',
    published: 'Publié le',
    readingTime: 'min de lecture',
    readMore: 'Lire l’article',
    aiImage: 'Image générée par IA',
    back: 'Tous les articles',
    related: 'À lire aussi',
  },
  closing: {
    title: { lead: 'Quel processus vous fait perdre du temps aujourd’hui ?' },
    text: 'Diagnostic initial gratuit : 45 minutes pour comprendre votre besoin, repérer ce qui vous freine et voir s’il y a un sujet à creuser.',
    primary: cta.primary,
    secondary: cta.calculator,
  },
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}

/** Temps de lecture estimé, à 200 mots par minute. */
export function readingTime(article: Article) {
  if (article.readingMinutes) return article.readingMinutes
  const text = article.blocks
    .map((block) => {
      switch (block.type) {
        case 'list':
          return block.items.join(' ')
        case 'callout':
          return [block.title, block.text ?? '', ...(block.items ?? [])].join(' ')
        case 'example':
          return block.rows.map((row) => `${row.label} ${row.value}`).join(' ')
        case 'faq':
          return [block.title, ...block.items.map((item) => `${item.question} ${item.answer}`)].join(' ')
        case 'image':
          return ''
        default:
          return block.text
      }
    })
    .join(' ')
  return Math.max(1, Math.round(text.split(/\s+/).length / 200))
}

const dateFormat = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

export function formatDate(iso: string) {
  return dateFormat.format(new Date(iso))
}
