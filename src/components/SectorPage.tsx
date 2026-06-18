'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { sectorPages } from '@/data/content'

type SectorKey = keyof typeof sectorPages

export default function SectorPage({ sector }: { sector: SectorKey }) {
  const data = sectorPages[sector]

  return (
    <>
      <Nav />
      <main>
        <section className="relative flex min-h-[80vh] items-center bg-[#010310] px-5 pb-24 pt-32 sm:px-8">
          <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_70%_30%,rgba(22,96,236,0.22),transparent_34%),linear-gradient(180deg,#010310_0%,#010310_66%,#010B17_100%)]" />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-7xl"
          >
            <SectionLabel>{data.eyebrow}</SectionLabel>
            <h1 className="mt-6 max-w-4xl font-[var(--font-inter)] text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[64px]">
              {data.h1}
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] font-light leading-7 text-[#8899BB]">
              {data.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button as="a" href={data.ctaHref} target="_blank" rel="noreferrer">
                {data.cta}
              </Button>
              <Button as="a" href="/" variant="outline">
                Retour à l&apos;accueil
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="bg-[#010B17] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl"
            >
              Ce que nos clients gèrent au quotidien
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="mt-12 grid gap-5 sm:grid-cols-2"
            >
              {data.painPoints.map((point) => (
                <motion.div
                  key={point.title}
                  variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-6"
                >
                  <h3 className="font-[var(--font-inter)] text-lg font-bold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm font-light leading-7 text-[#8899BB]">{point.text}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-14"
            >
              <Button as="a" href={data.ctaHref} target="_blank" rel="noreferrer">
                {data.cta}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}