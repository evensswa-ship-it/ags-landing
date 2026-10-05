import Image from 'next/image'
import Title from '@/components/ui/Title'

export type EcosystemMember = {
  name: string
  href: string
  linkLabel: string
  /** `display` : hauteur affichée en px, réglée par logo pour un poids visuel homogène. */
  logo: { src: string; width: number; height: number; display: number }
}

/**
 * Réseaux dont AGS & Co est membre. Logos officiels, jamais recolorés ni redessinés.
 * Ce sont des adhésions : ne pas les présenter comme des partenaires ou des cautions.
 */
export default function Ecosystem({
  title,
  paragraphs,
  members,
  note,
}: {
  title: { lead: string; rest?: string }
  paragraphs: string[]
  members: EcosystemMember[]
  note: string
}) {
  return (
    <div className="grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
      <div>
        <Title id="ecosystem-title" stacked {...title} />
        {paragraphs.map((paragraph, i) => (
          <p key={paragraph} className={`max-w-[34rem] ${i === 0 ? 't-lede mt-8 text-ink' : 'mt-4 text-mist'}`}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="lg:pt-3">
        <ul className="flex flex-col items-start gap-x-16 gap-y-12 border-t border-line pt-12 sm:flex-row sm:flex-wrap sm:items-center">
          {members.map((member) => (
            <li key={member.name}>
              <a
                href={member.href}
                target="_blank"
                rel="noopener"
                aria-label={member.linkLabel}
                className="block rounded-sm transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <Image
                  src={member.logo.src}
                  alt={member.name}
                  width={member.logo.width}
                  height={member.logo.height}
                  sizes="200px"
                  className="w-auto"
                  style={{ height: `${member.logo.display / 16}rem` }}
                />
              </a>
            </li>
          ))}
        </ul>
        <p className="t-small mt-12 text-mist">{note}</p>
      </div>
    </div>
  )
}
