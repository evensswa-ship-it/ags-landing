import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ArticleBody from '@/components/blog/ArticleBody'
import FinalCta from '@/components/layout/FinalCta'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'
import { articles, blog, formatDate, fullTitle, getArticle, readingTime } from '@/data/blog'
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
    alternates: { ...base.alternates, types: { 'application/rss+xml': blog.rss } },
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
  const others = articles.filter((other) => other.slug !== article.slug).slice(0, 3)
  const faqItems = article.blocks.flatMap((block) => (block.type === 'faq' ? block.items : []))
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url },
        { '@type': 'ListItem', position: 2, name: blog.breadcrumb, item: `${site.url}${blog.path}` },
        { '@type': 'ListItem', position: 3, name: fullTitle(article), item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: fullTitle(article),
      ...(article.category ? { articleSection: article.category } : {}),
      description: article.meta.description,
      url,
      mainEntityOfPage: url,
      inLanguage: 'fr-FR',
      datePublished: article.published,
      dateModified: article.updated,
      author: { '@type': 'Person', name: labels.author, jobTitle: labels.authorRole, url: `${site.url}/a-propos` },
      publisher: { '@id': `${site.url}/#organization` },
    },
    ...(faqItems.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
        ]
      : []),
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
            {article.category ? <p className="t-small mt-8 font-medium text-signal">{article.category}</p> : null}
            <Title
              as="h1"
              size="h2"
              stacked
              className={`${article.category ? 'mt-3' : 'mt-8'} max-w-[24ch]`}
              {...article.title}
            />
            <p className="t-lede mt-8 max-w-[44rem] text-ink">{article.lede}</p>
            <p className="t-small t-num mt-6 text-mist">
              {labels.author}, {labels.authorRole} · {labels.published} {formatDate(article.published)} ·{' '}
              {readingTime(article)} {labels.readingTime}
            </p>
          </div>
        </header>
        <Section tone="deep" className="!pt-14">
          <ArticleBody blocks={article.blocks} />
          {article.landing ? (
            <Button href={article.landing.href} variant="link" className="mt-10">
              {article.landing.label}
            </Button>
          ) : null}
        </Section>
      </article>
      {others.length > 0 ? (
        <Section tone="deep" className="!pt-0" labelledBy="related-title">
          <h2 id="related-title" className="t-h3">
            {labels.related}
          </h2>
          <ul className="mt-6 max-w-[44rem] border-t border-line">
            {others.map((other) => (
              <li key={other.slug} className="border-b border-line">
                <Link href={`${blog.path}/${other.slug}`} className="group block py-5">
                  <span className="font-display font-semibold text-ink transition-colors duration-200 group-hover:text-signal">
                    {fullTitle(other)}
                  </span>
                  <span className="t-small t-num mt-1 block text-mist">
                    {formatDate(other.published)} · {readingTime(other)} {labels.readingTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
      {article.closing ? (
        <FinalCta
          title={{ lead: article.closing.title }}
          text={article.closing.text}
          primary={{ label: article.closing.label, href: blog.closing.primary.href }}
        />
      ) : (
        <FinalCta {...blog.closing} />
      )}
    </>
  )
}
