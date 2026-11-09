import { cta } from './site'
import { agentIaPme } from './articles/agent-ia-pme'
import { coutProcessusManuel } from './articles/cout-processus-manuel'

/** Blocs d’un article. Le texte reste dans les données, les composants ne font que le mettre en forme. */
export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  /** Encadré : définition, formule ou point clé. */
  | { type: 'callout'; title: string; text: string }
  /** Exemple chiffré : toujours étiqueté « Exemple illustratif ». */
  | { type: 'example'; title: string; rows: { label: string; value: string }[]; note?: string }
  | { type: 'cta'; text: string; link: { label: string; href: string } }
  /** Illustration générée par IA : fichier dans `public/blog/<slug>/`, mention « Image générée par IA » affichée. */
  | { type: 'image'; src: string; width: number; height: number; alt: string; caption?: string }

export type Article = {
  slug: string
  /** Balise title (environ 60 caractères) et description (environ 155). */
  meta: { title: string; description: string }
  title: { lead: string; rest?: string }
  lede: string
  /** Dates ISO : publication et dernière modification réelle. */
  published: string
  updated: string
  blocks: ArticleBlock[]
}

/** Du plus récent au plus ancien. */
export const articles: Article[] = [agentIaPme, coutProcessusManuel]

export const blog = {
  path: '/blog',
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
  const text = article.blocks
    .map((block) => {
      switch (block.type) {
        case 'list':
          return block.items.join(' ')
        case 'callout':
          return `${block.title} ${block.text}`
        case 'example':
          return block.rows.map((row) => `${row.label} ${row.value}`).join(' ')
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
