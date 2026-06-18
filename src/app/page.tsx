import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Cockpit from '@/components/sections/Cockpit'
import Philosophy from '@/components/sections/Philosophy'
import CockpitTeaser from '@/components/sections/CockpitTeaser'
import Offer from '@/components/sections/Offer'
import FAQ from '@/components/sections/FAQ'
import DataPrivacy from '@/components/sections/DataPrivacy'
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
        <Cockpit />
        <CockpitTeaser />
        {/* TODO: Social proof — ajouter bloc temoignages/chiffres clients ici */}
        <Philosophy />
        <Offer />
        <FAQ />
        <DataPrivacy />
        <Contact />
        <Footer />
      </main>
    </>
  )
}