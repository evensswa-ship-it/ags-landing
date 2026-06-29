'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import { formationPage } from '@/data/pages'

const Separator = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-[#1A2E55]/60 to-transparent" />
)

export default function FormationPageContent() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero + pourquoi */}
        <section className="relative bg-[#010B17] px-5 pb-24 pt-40 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionLabel>{formationPage.eyebrow}</SectionLabel>
                <h1 className="mt-5 font-[var(--font-inter)] text-4xl font-bold leading-tight text-white sm:text-6xl">
                  {formationPage.title}
                </h1>
                <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">
                  {formationPage.subtitle}
                </p>
              </motion.div>

              <motion.ul
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
                className="grid gap-3"
              >
                {formationPage.whyPoints.map((p) => (
                  <motion.li
                    key={p}
                    variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-3 rounded-[8px] border border-[#1A2E55] bg-[#050E22] px-5 py-4"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1660EC]" />
                    <span className="text-sm font-light leading-6 text-[#8899BB]">{p}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        <Separator />

        {/* Approche + personas */}
        <section className="bg-[#010310] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <SectionLabel>Notre approche</SectionLabel>
              <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
                Adaptée à chaque profil
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
                className="grid gap-4 content-start"
              >
                {formationPage.approach.map((card) => (
                  <motion.div
                    key={card.title}
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5"
                  >
                    <p className="font-[var(--font-inter)] text-sm font-semibold text-white">{card.title}</p>
                    <p className="mt-2 text-sm font-light leading-6 text-[#8899BB]">{card.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
                className="grid gap-4 content-start"
              >
                {formationPage.personas.map((persona) => (
                  <motion.div
                    key={persona.role}
                    variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.4 }}
                    className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#1660EC]">
                      {persona.role}
                    </p>
                    <ul className="mt-3 grid gap-1.5">
                      {persona.points.map((pt) => (
                        <li key={pt} className="flex gap-2 text-sm font-light leading-6 text-[#8899BB]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1660EC]" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
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
                La formation commence avec le déploiement.
              </h2>
              <p className="mt-4 text-base font-light leading-7 text-[#8899BB]">
                Audit gratuit · Sans engagement · 60 minutes
              </p>
              <Link
                href={formationPage.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#1660EC] px-7 font-[var(--font-inter)] text-sm font-semibold text-white transition hover:bg-[#1151c4]"
              >
                {formationPage.cta}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}