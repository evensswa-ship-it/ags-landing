import { Fragment } from 'react'

/** Texte venu des données : `**passage**` est affiché en gras, le reste tel quel. */
export default function Rich({ text }: { text: string }) {
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
