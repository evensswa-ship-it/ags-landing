import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'
import JsonLd from '@/components/ui/JsonLd'
import Section from '@/components/ui/Section'
import { contact } from '@/data/contact'
import { breadcrumbSchema, pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(contact)

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(contact)} />
      <PageHero title={contact.title} intro={contact.intro} />

      <Section tone="deep" className="!pt-16">
        <div className="grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <h2 className="t-h3">{contact.booking.title}</h2>
            <p className="t-lede mt-3">{contact.booking.text}</p>
            <Button href={contact.booking.button.href} className="mt-7">
              {contact.booking.button.label}
            </Button>
          </div>
          <div className="border-t border-line pt-10 lg:border-l lg:border-t-0 lg:pl-20 lg:pt-0">
            <h2 className="t-h3">{contact.form.title}</h2>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
