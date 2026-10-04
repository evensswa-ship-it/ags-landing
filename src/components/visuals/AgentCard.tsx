type Row = { label: string; value: string; human?: boolean }

/** Fiche d'identité d'un collaborateur IA : ce qu'il voit, fait, fait valider, ne fait jamais. */
export default function AgentCard({
  kind,
  name,
  rows,
  footer,
}: {
  kind: string
  name: string
  rows: Row[]
  footer?: string
}) {
  return (
    <article className="rounded-card border border-line bg-night p-6 sm:p-8">
      <header className="border-b border-line pb-5">
        <p className="t-small text-mist">{kind}</p>
        <h3 className="t-h3 mt-1">{name}</h3>
      </header>
      <dl>
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <dt className={`t-small font-medium ${row.human ? 'text-human' : 'text-mist'}`}>
              {row.label}
            </dt>
            <dd className={row.human ? 'font-medium text-human' : 'text-ink'}>{row.value}</dd>
          </div>
        ))}
      </dl>
      {footer ? <p className="t-small pt-5 text-mist">{footer}</p> : null}
    </article>
  )
}
