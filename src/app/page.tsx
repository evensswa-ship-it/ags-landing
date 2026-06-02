import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import Cockpit from '@/components/sections/Cockpit'
import Philosophy from '@/components/sections/Philosophy'
import Offer from '@/components/sections/Offer'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Cockpit />
        <Philosophy />
        <Offer />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
