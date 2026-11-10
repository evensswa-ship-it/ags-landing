import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import { articles, blog, formatDate, fullTitle, readingTime } from '@/data/blog'
import { site } from '@/data/site'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(blog)

const schemas = [
  breadcrumbSchema(blog),
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: blog.meta.title,
    description: blog.meta.description,
    url: `${site.url}${blog.path}`,
    publisher: { '@id': `${site.url}/#organization` },
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: fullTitle(article),
      url: `${site.url}${blog.path}/${article.slug}`,
      datePublished: article.published,
    })),
  },
]

export default function BlogPage() {
  const { labels } = blog
  return (
    <>
      <JsonLd data={schemas} />
      <PageHero title={blog.title} intro={blog.intro} />
      <Section tone="deep" className="!pt-16">
        <ul className="border-t border-line">
          {articles.map((article) => (
            <li key={article.slug} className="border-b border-line">
              <Link
                href={`${blog.path}/${article.slug}`}
                className="group grid gap-3 py-8 lg:grid-cols-[3fr_9fr] lg:gap-12"
              >
                <div className="t-small t-num text-mist">
                  {article.category ? <p className="font-medium text-signal">{article.category}</p> : null}
                  <p className={article.category ? 'mt-1' : ''}>
                    {formatDate(article.published)} · {readingTime(article)} {labels.readingTime}
                  </p>
                </div>
                <div>
                  <h2 className="t-h3 transition-colors duration-200 group-hover:text-signal">
                    {fullTitle(article)}
                  </h2>
                  <p className="mt-3 max-w-[44rem] text-mist">{article.meta.description}</p>
                  <p className="t-small mt-4 font-medium text-signal">{labels.readMore}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
