import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleBody from '@/components/blog/ArticleBody'
import FinalCta from '@/components/layout/FinalCta'
import Button from '@/components/ui/Button'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import { articles, blog, formatDate, getArticle, readingTime } from '@/data/blog'
import { site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

/** Seuls les articles déclarés existent : toute autre adresse renvoie une 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug)
  if (!article) return {}
  const path = `${blog.path}/${article.slug}`
  const base = pageMetadata({ path, breadcrumb: article.title.lead, meta: article.meta })
  return {
    ...base,
    authors: [{ name: blog.labels.author, url: `${site.url}/a-propos` }],
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [blog.labels.author],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug)
  if (!article) notFound()

  const url = `${site.url}${blog.path}/${article.slug}`
  const { labels } = blog
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url },
        { '@type': 'ListItem', position: 2, name: blog.breadcrumb, item: `${site.url}${blog.path}` },
        { '@type': 'ListItem', position: 3, name: article.title.lead, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title.lead,
      description: article.meta.description,
      url,
      mainEntityOfPage: url,
      inLanguage: 'fr-FR',
      datePublished: article.published,
      dateModified: article.updated,
      author: { '@type': 'Person', name: labels.author, jobTitle: labels.authorRole, url: `${site.url}/a-propos` },
      publisher: { '@id': `${site.url}/#organization` },
    },
  ]

  return (
    <>
      <JsonLd data={schemas} />
      <article>
        <header className="bg-night px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
          <div className="mx-auto max-w-page">
            <Button href={blog.path} variant="link">
              {labels.back}
            </Button>
            <Title as="h1" size="h2" stacked className="mt-8 max-w-[24ch]" {...article.title} />
            <p className="t-lede mt-8 max-w-[44rem] text-ink">{article.lede}</p>
            <p className="t-small t-num mt-6 text-mist">
              {labels.author}, {labels.authorRole} · {labels.published} {formatDate(article.published)} ·{' '}
              {readingTime(article)} {labels.readingTime}
            </p>
          </div>
        </header>
        <Section tone="deep" className="!pt-14">
          <ArticleBody blocks={article.blocks} />
        </Section>
      </article>
      <FinalCta {...blog.closing} />
    </>
  )
}
