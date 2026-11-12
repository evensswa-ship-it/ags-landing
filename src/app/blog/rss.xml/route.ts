import { articles, blog, fullTitle } from '@/data/blog'
import { site } from '@/data/site'

/** Flux RSS du blog : généré au build à partir des articles, il suit donc chaque publication. */
export const dynamic = 'force-static'

const escape = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function GET() {
  const items = articles
    .map((article) => {
      const url = `${site.url}${blog.path}/${article.slug}`
      return `    <item>
      <title>${escape(fullTitle(article))}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(article.published).toUTCString()}</pubDate>
      <description>${escape(article.meta.description)}</description>${
        article.category ? `\n      <category>${escape(article.category)}</category>` : ''
      }
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(blog.meta.title)}</title>
    <link>${site.url}${blog.path}</link>
    <description>${escape(blog.meta.description)}</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date(articles[0].updated).toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}${blog.rss}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
