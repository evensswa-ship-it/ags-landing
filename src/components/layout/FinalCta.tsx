import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import Title from '@/components/ui/Title'

type Link = { label: string; href: string }

export default function FinalCta({
  title,
  text,
  primary,
  secondary,
  tone = 'night',
}: {
  title: { lead: string; rest?: string }
  text?: string
  primary: Link
  secondary?: Link
  tone?: 'night' | 'deep'
}) {
  return (
    <Section tone={tone} labelledBy="final-title">
      <Title id="final-title" stacked className="max-w-[20ch]" {...title} />
      {text ? <p className="t-lede mt-6">{text}</p> : null}
      <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        <Button href={primary.href}>{primary.label}</Button>
        {secondary ? (
          <Button href={secondary.href} variant="link">
            {secondary.label}
          </Button>
        ) : null}
      </div>
    </Section>
  )
}
