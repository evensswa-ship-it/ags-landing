'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import { accompagnementPage } from '@/data/pages'

const Separator = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-[#1A2E55]/60 to-transparent" />
)

export default function AccompagnementPageContent() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero + raisons */}
        <section className="relative bg-[#010B17] px-5 pb-24 pt-40 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionLabel>{accompagnementPage.eyebrow}</SectionLabel>
                <h1 className="mt-5 font-[var(--font-inter)] text-4xl font-bold leading-tight text-white sm:text-6xl">
                  {accompagnementPage.title}
                </h1>
                <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">
                  {accompagnementPage.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                className="grid gap-4"
              >
                {accompagnementPage.reasons.map((r) => (
                  <motion.div
                    key={r.title}
                    variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5"
                  >
                    <p className="font-[var(--font-inter)] text-sm font-semibold text-white">{r.title}</p>
                    <p className="mt-2 text-sm font-light leading-6 text-[#8899BB]">{r.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Ce qui est inclus */}
        <section className="bg-[#010310] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SectionLabel>Ce qui est inclus</SectionLabel>
                <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
                  Chaque mois, sans relance de votre part
                </h2>
                <div className="mt-8 rounded-[8px] border border-[#1660EC]/30 bg-[#1660EC]/10 px-6 py-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#1660EC]">
                    {accompagnementPage.format.label}
                  </p>
                  <p className="mt-1 text-sm font-light text-white">{accompagnementPage.format.detail}</p>
                </div>
              </motion.div>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.08 }}
                className="grid gap-3"
              >
                {accompagnementPage.includes.map((item) => (
                  <motion.li
                    key={item}
                    variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-3 rounded-[8px] border border-[#1A2E55] bg-[#050E22] px-5 py-4"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1660EC]" />
                    <span className="text-sm font-light leading-6 text-[#8899BB]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="bg-[#010B17] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[var(--font-inter)] text-3xl font-bold text-white sm:text-4xl">
                L'accompagnement démarre après le déploiement.
              </h2>
              <p className="mt-4 text-base font-light leading-7 text-[#8899BB]">
                Parlons d'abord de votre organisation.
              </p>
              <Link
                href={accompagnementPage.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#1660EC] px-7 font-[var(--font-inter)] text-sm font-semibold text-white transition hover:bg-[#1151c4]"
              >
                {accompagnementPage.cta}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}