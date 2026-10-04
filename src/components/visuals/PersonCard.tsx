import Image from 'next/image'

export type Person = {
  name: string
  role: string
  bio: string
  photo: { src: string; alt: string }
}

/** Carte d'un membre de l'équipe. Les deux photos reçoivent exactement le même traitement. */
export default function PersonCard({ name, role, bio, photo }: Person) {
  return (
    <article className="overflow-hidden rounded-card border border-line bg-night">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 768px) 420px, 100vw"
          className="object-cover object-top saturate-[0.8]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-night to-transparent"
        />
      </div>
      <div className="px-6 pb-8 pt-2 sm:px-8">
        <h3 className="t-h3">{name}</h3>
        <p className="t-small mt-1 font-medium text-signal">{role}</p>
        <p className="mt-4 text-mist">{bio}</p>
      </div>
    </article>
  )
}
