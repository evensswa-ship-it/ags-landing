import Image from 'next/image'
import { Fragment } from 'react'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import { blog, type ArticleBlock } from '@/data/blog'

/** Texte d’un bloc : `**passage**` est affiché en gras, le reste tel quel. */
function Rich({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, n) =>
    n % 2 === 1 ? (
      <strong key={n} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      <Fragment key={n}>{part}</Fragment>
    ),
  )
}

function Items({ items, ordered = false, className = '' }: { items: string[]; ordered?: boolean; className?: string }) {
  const List = ordered ? 'ol' : 'ul'
  return (
    <List className={`t-lede grid gap-3 text-ink ${className}`}>
      {items.map((item, n) => (
        <li key={item} className="grid grid-cols-[1.75rem_1fr] gap-2">
          <span className="t-num font-medium text-signal" aria-hidden="true">
            {ordered ? `${n + 1}.` : '—'}
          </span>
          <span>
            <Rich text={item} />
          </span>
        </li>
      ))}
    </List>
  )
}

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
                <Rich text={block.text} />
              </p>
            )
          case 'list':
            return <Items key={i} items={block.items} ordered={block.ordered} />
          case 'callout':
            return (
              <div key={i} className="border-l-2 border-signal py-1 pl-6">
                <p className="font-display font-semibold text-ink">{block.title}</p>
                {block.text ? (
                  <p className="t-lede mt-2">
                    <Rich text={block.text} />
                  </p>
                ) : null}
                {block.items ? <Items items={block.items} className="mt-3" /> : null}
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
                      <dt className={row.strong ? 't-small font-semibold text-ink' : 't-small text-mist'}>
                        {row.label}
                      </dt>
                      <dd
                        className={`t-num text-ink sm:shrink-0 sm:text-right ${row.strong ? 'font-semibold text-signal' : 'font-medium'}`}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {block.note ? <p className="mt-4 text-ink">{block.note}</p> : null}
              </figure>
            )
          case 'image':
            return (
              <figure key={i} className="my-4">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  sizes="(min-width: 768px) 44rem, 100vw"
                  priority={i === 0}
                  className="h-auto w-full rounded-card border border-line"
                />
                <figcaption className="t-small mt-3 text-mist">
                  {block.caption ? `${block.caption} · ` : ''}
                  {blog.labels.aiImage}
                </figcaption>
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
          case 'signature':
            return (
              <p key={i} className="t-small mt-6 border-t border-line pt-8 text-mist">
                <Rich text={block.text} />
              </p>
            )
        }
      })}
    </div>
  )
}
