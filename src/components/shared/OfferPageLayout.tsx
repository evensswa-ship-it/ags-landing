'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import type { OfferPageData } from '@/data/offers'

const calendlyHref = 'https://calendly.com/evens-agsandco/30min'

const Separator = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-[#1A2E55]/60 to-transparent" />
)

export default function OfferPageLayout({ data }: { data: OfferPageData }) {
  return (
    <>
      <Nav />
      <main>
        {/* Hero + problèmes */}
        <section className="relative bg-[#010B17] px-5 pb-24 pt-40 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionLabel>Offre</SectionLabel>
                <h1 className="mt-5 font-[var(--font-inter)] text-4xl font-bold leading-tight text-white sm:text-6xl">
                  {data.title}
                </h1>
                <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">{data.tagline}</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1A2E55] bg-[#050E22] px-4 py-2 text-sm text-[#8899BB]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {data.duration}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-6"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#1660EC]">
                  Ce que ça résout
                </p>
                <ul className="mt-4 grid gap-3">
                  {data.problems.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm font-light leading-6 text-[#8899BB]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1660EC]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Déroulement + livrables */}
        <section className="bg-[#010310] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <SectionLabel>Comment ça se passe</SectionLabel>
              <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
                Les étapes de la mission
              </h2>
            </motion.div>

            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="mt-12 grid gap-4 lg:grid-cols-2"
            >
              {data.process.map((step) => (
                <motion.li
                  key={step.num}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-5 rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1660EC] bg-[#1660EC]/10 font-[var(--font-inter)] text-sm font-bold text-[#1660EC]">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-[var(--font-inter)] text-sm font-semibold text-white">{step.title}</p>
                    <p className="mt-1 text-sm font-light leading-6 text-[#8899BB]">{step.detail}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>

            <div className="mt-10 flex flex-wrap gap-3">
              {data.deliverables.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-[#1660EC]/30 bg-[#1660EC]/10 px-4 py-1.5 text-sm font-light text-[#1660EC]"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Avant / Avec AGS */}
        <section className="bg-[#010B17] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 max-w-2xl"
            >
              <SectionLabel>Avant / Avec AGS</SectionLabel>
              <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
                Ce qui change concrètement
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}
              className="grid gap-4"
            >
              {data.comparison.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <div className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] px-5 py-4">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8899BB]/60">
                      Avant
                    </p>
                    <p className="text-sm font-light leading-6 text-[#8899BB]">{item.before}</p>
                  </div>
                  <div className="rounded-[8px] border border-[#1660EC]/30 bg-[#1660EC]/10 px-5 py-4">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1660EC]">
                      Avec AGS
                    </p>
                    <p className="text-sm font-light leading-6 text-white">{item.after}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Separator />

        {/* CTA + FAQ */}
        <section className="bg-[#010310] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-[var(--font-inter)] text-3xl font-bold text-white sm:text-4xl">
                  Prêt à démarrer ?
                </h2>
                <p className="mt-4 text-base font-light leading-7 text-[#8899BB]">
                  Audit gratuit · Sans engagement · 60 minutes
                </p>
                <Link
                  href={calendlyHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#1660EC] px-7 font-[var(--font-inter)] text-sm font-semibold text-white transition hover:bg-[#1151c4]"
                >
                  Planifier un échange
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid gap-4"
              >
                {data.faq.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-[8px] border border-[#1A2E55] bg-[#050E22]"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-5 px-5 py-4 font-[var(--font-inter)] text-sm font-medium text-white">
                      <span>{item.q}</span>
                      <svg
                        className="h-4 w-4 shrink-0 text-[#1660EC] transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <p className="border-t border-[#1A2E55] px-5 py-4 text-sm font-light leading-7 text-[#8899BB]">
                      {item.a}
                    </p>
                  </details>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}