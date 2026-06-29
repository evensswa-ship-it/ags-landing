import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import ProcessJourney from '@/components/sections/ProcessJourney'
import Founder from '@/components/sections/Founder'
import Philosophy from '@/components/sections/Philosophy'
import Offer from '@/components/sections/Offer'
import FormationTeaser from '@/components/sections/FormationTeaser'
import AccompagnementTeaser from '@/components/sections/AccompagnementTeaser'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import { faq } from '@/data/content'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const Separator = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-[#1A2E55]/60 to-transparent" />
)

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <ProcessJourney />
        <Separator />
        <Founder />
        <Separator />
        <Philosophy />
        <Separator />
        <Offer />
        <FormationTeaser />
        <AccompagnementTeaser />
        <Separator />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}