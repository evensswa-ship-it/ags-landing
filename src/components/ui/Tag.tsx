import { illustrativeTag } from '@/data/site'

/** Étiquette obligatoire sur tout chiffre qui ne vient pas d'un vrai cas client. */
export default function Tag({ children = illustrativeTag }: { children?: string }) {
  return (
    <span className="inline-flex items-center rounded-pill border border-mist/40 px-3 py-1 text-[0.8125rem] font-medium text-mist">
      {children}
    </span>
  )
}
