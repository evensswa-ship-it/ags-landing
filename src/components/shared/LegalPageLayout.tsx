'use client'

import { motion } from 'framer-motion'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import { lastUpdated } from '@/data/legal'
import type { LegalPageData } from '@/data/legal'

export default function LegalPageLayout({ data }: { data: LegalPageData }) {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#010B17] px-5 pb-24 pt-40 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Informations légales</SectionLabel>
              <h1 className="mt-5 font-[var(--font-inter)] text-4xl font-bold leading-tight text-white sm:text-5xl">
                {data.title}
              </h1>
              <p className="mt-4 text-sm font-light text-[#8899BB]">{data.subtitle}</p>
              <p className="mt-2 text-xs text-[#8899BB]/60">
                Dernière mise à jour : {lastUpdated}
              </p>
            </motion.div>

            <div className="mt-16 grid gap-12">
              {data.sections.map((section, i) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <h2 className="font-[var(--font-inter)] text-lg font-semibold text-white">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-1">
                    {section.content.split('\n').map((line, j) =>
                      line === '' ? (
                        <div key={j} className="h-3" />
                      ) : (
                        <p key={j} className="text-sm font-light leading-7 text-[#8899BB]">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}