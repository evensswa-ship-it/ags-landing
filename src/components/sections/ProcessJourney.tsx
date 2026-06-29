'use client'

import { motion } from 'framer-motion'
import { processJourney } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function ProcessJourney() {
  return (
    <section id="parcours" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <SectionLabel>{processJourney.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {processJourney.title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {processJourney.phases.map((phase) => (
            <motion.div
              key={phase.num}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-7"
            >
              <span className="font-[var(--font-inter)] text-4xl font-bold text-[#1660EC]/25">
                {phase.num}
              </span>
              <h3 className="mt-4 font-[var(--font-inter)] text-xl font-bold text-white">
                {phase.title}
              </h3>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1660EC]">
                {phase.subtitle}
              </p>
              <ul className="mt-6 grid gap-3">
                {phase.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm font-light leading-6 text-[#8899BB]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1660EC]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}