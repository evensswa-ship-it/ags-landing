import Image from 'next/image'

/** Portrait d'un collaborateur IA. Toujours accompagné de sa mention : ce n'est ni un salarié ni un témoignage. */
export default function AgentAvatar({
  src,
  alt,
  kind,
  role,
}: {
  src: string
  alt: string
  kind: string
  role: string
}) {
  return (
    <figure className="flex items-center gap-4">
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        sizes="96px"
        className="size-24 rounded-full border border-line object-cover"
      />
      <figcaption className="t-small text-mist">
        <span className="block font-medium text-ink">{kind}</span>
        {role}
      </figcaption>
    </figure>
  )
}
