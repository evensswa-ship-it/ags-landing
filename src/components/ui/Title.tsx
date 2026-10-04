type Level = 'h1' | 'h2' | 'h3'

const sizes: Record<Level, string> = { h1: 't-h1', h2: 't-h2', h3: 't-h3' }

/** Titre sur deux tons : la promesse en clair, la suite en gris. */
export default function Title({
  as = 'h2',
  size,
  lead,
  rest,
  stacked = false,
  id,
  className = '',
}: {
  as?: Level
  size?: Level
  lead: string
  rest?: string
  stacked?: boolean
  id?: string
  className?: string
}) {
  const Tag = as
  return (
    <Tag id={id} className={`${sizes[size ?? as]} ${className}`}>
      {lead}
      {rest ? (
        <>
          {stacked ? <br /> : ' '}
          <span className="text-mist">{rest}</span>
        </>
      ) : null}
    </Tag>
  )
}
