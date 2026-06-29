'use client'

import { motion } from 'framer-motion'
import { transparency } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Transparency() {
  return (
    <section id="stack" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <SectionLabel>{transparency.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {transparency.title}
          </h2>
          <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">{transparency.intro}</p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {transparency.providers.map((p) => (
              <motion.div
                key={p.name}
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5"
              >
                <p className="font-[var(--font-inter)] text-base font-bold text-white">{p.name}</p>
                <p className="mt-2 text-xs font-light leading-5 text-[#8899BB]">{p.role}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-6"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">
              Nos engagements
            </p>
            <ul className="mt-5 grid gap-3">
              {transparency.principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3 text-sm font-light leading-6 text-[#8899BB]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1660EC]" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-[#1A2E55] pt-5 text-xs font-light italic leading-6 text-[#8899BB]/70">
              {transparency.note}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}