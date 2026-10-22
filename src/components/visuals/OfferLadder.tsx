import Link from 'next/link'
import type { CSSProperties } from 'react'
import type { Offer } from '@/data/offres'

type Labels = { list: string; entry: string; audience: string }

/**
 * Échelle des offres : quatre étapes reliées par une ligne, du diagnostic gratuit à AGS Care.
 * `full` (page Offres) : ancre par offre, pour qui, trois puces. `compact` (accueil, pages locales) :
 * nom, prix, promesse, lien vers l’ancre de la page Offres.
 */
export default function OfferLadder({
  offers,
  labels,
  variant = 'full',
  headingLevel = 'h2',
  offersPath = '/offres',
}: {
  offers: Offer[]
  labels: Labels
  variant?: 'full' | 'compact'
  headingLevel?: 'h2' | 'h3'
  offersPath?: string
}) {
  const Heading = headingLevel
  const full = variant === 'full'
  return (
    <ol aria-label={labels.list} className="ladder" style={{ '--ladder-count': offers.length } as CSSProperties}>
      {offers.map((offer, i) => (
        <li
          key={offer.id}
          id={full ? offer.id : undefined}
          className="ladder-step"
          data-entry={offer.entry ? '' : undefined}
          data-last={i === offers.length - 1 ? '' : undefined}
        >
          <span className="ladder-node" aria-hidden="true" />
          <div
            className={`ladder-body rounded-card border ${offer.entry ? 'border-signal/50 bg-deep' : 'border-transparent'}`}
          >
            <p className="t-num t-small font-medium text-mist">
              {String(i + 1).padStart(2, '0')}
              {offer.entry ? <span className="text-signal"> · {labels.entry}</span> : null}
            </p>
            <Heading className="mt-2 font-display text-[1.25rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
              {full ? (
                offer.name
              ) : (
                <Link
                  href={`${offersPath}#${offer.id}`}
                  className="underline decoration-transparent underline-offset-[6px] transition-colors duration-200 hover:decoration-signal"
                >
                  {offer.name}
                </Link>
              )}
            </Heading>
            <p className="t-num mt-3 font-display text-[clamp(2rem,2.6vw,2.4rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
              {offer.price.label}
              {offer.price.unit ? <span className="t-small ml-1.5 font-sans font-medium tracking-normal text-mist">{offer.price.unit}</span> : null}
            </p>
            {full ? <p className="t-small mt-2 text-mist">{offer.format}</p> : null}
            <p className={`mt-4 ${full ? 'font-medium' : ''} text-ink`}>{offer.promise}</p>
            {full ? (
              <>
                <p className="t-small mt-4 text-mist">
                  <span className="font-medium text-ink">{labels.audience} : </span>
                  {offer.audience}
                </p>
                <ul className="t-small mt-5">
                  {offer.includes.map((line) => (
                    <li key={line} className="border-t border-line py-3 text-ink">
                      {line}
                    </li>
                  ))}
                </ul>
                {offer.note ? <p className="t-small mt-1 text-mist">{offer.note}</p> : null}
              </>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  )
}
