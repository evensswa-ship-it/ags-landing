'use client'

import { motion } from 'framer-motion'
import { sectors } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Sectors() {
  return (
    <section id="secteurs" className="bg-[#010310] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <SectionLabel>{sectors.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {sectors.title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {sectors.items.map((sector) => (
            <motion.button
              key={sector.name}
              type="button"
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              title={sector.description}
              className="group min-h-12 rounded-full border border-[#1A2E55] bg-[#050E22] px-5 text-left text-sm font-medium text-white transition hover:border-[#1660EC] hover:bg-[#1660EC]"
            >
              <span>{sector.name}</span>
              <span className="ml-3 hidden text-xs font-light text-white/70 group-hover:inline sm:inline">
                {sector.description}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
