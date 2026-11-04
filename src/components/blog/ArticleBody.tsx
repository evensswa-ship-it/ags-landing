import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import type { ArticleBlock } from '@/data/blog'

/** Corps d’un article : une colonne de lecture, des blocs typés venus de `src/data/articles/`. */
export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="grid max-w-[44rem] gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} className="t-h3 mt-8">
                {block.text}
              </h2>
            )
          case 'p':
            return (
              <p key={i} className="t-lede text-ink">
                {block.text}
              </p>
            )
          case 'list': {
            const List = block.ordered ? 'ol' : 'ul'
            return (
              <List key={i} className="t-lede grid gap-3 text-ink">
                {block.items.map((item, n) => (
                  <li key={item} className="grid grid-cols-[1.75rem_1fr] gap-2">
                    <span className="t-num font-medium text-signal" aria-hidden="true">
                      {block.ordered ? `${n + 1}.` : '—'}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </List>
            )
          }
          case 'callout':
            return (
              <div key={i} className="border-l-2 border-signal py-1 pl-6">
                <p className="font-display font-semibold text-ink">{block.title}</p>
                <p className="t-lede mt-2">{block.text}</p>
              </div>
            )
          case 'example':
            return (
              <figure key={i} className="rounded-card border border-line bg-deep p-6 sm:p-8">
                <figcaption className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-display font-semibold text-ink">{block.title}</span>
                  <Tag />
                </figcaption>
                <dl className="mt-5">
                  {block.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex flex-col gap-1 border-t border-line py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <dt className="t-small text-mist">{row.label}</dt>
                      <dd className="t-num font-medium text-ink sm:text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                {block.note ? <p className="mt-4 text-ink">{block.note}</p> : null}
              </figure>
            )
          case 'cta':
            return (
              <div key={i} className="mt-6 border-t border-line pt-8">
                <p className="t-lede text-ink">{block.text}</p>
                <Button href={block.link.href} variant="secondary" className="mt-5">
                  {block.link.label}
                </Button>
              </div>
            )
        }
      })}
    </div>
  )
}
