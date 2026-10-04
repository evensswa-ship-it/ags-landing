import Title from '@/components/ui/Title'

export default function PageHero({
  title,
  intro,
}: {
  title: { lead: string; rest?: string }
  intro: string
}) {
  return (
    <section aria-labelledby="page-title" className="bg-night px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:pb-24">
      <div className="mx-auto max-w-page">
        <Title as="h1" size="h2" id="page-title" stacked className="max-w-[22ch]" {...title} />
        <p className="t-lede mt-8 max-w-[38rem]">{intro}</p>
      </div>
    </section>
  )
}
