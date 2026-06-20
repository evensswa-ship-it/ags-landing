'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/content'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Philosophy() {
  return (
    <section id="philosophie" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <SectionLabel>{philosophy.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {philosophy.title}
          </h2>
          <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">
            {philosophy.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {philosophy.pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-6 transition-all duration-300 hover:border-[#1660EC]/40 hover:shadow-[0_0_32px_rgba(22,96,236,0.12)]"
            >
              <p className="font-[var(--font-inter)] text-base font-semibold text-white">
                {pillar.title}
              </p>
              <p className="mt-3 text-sm font-light leading-7 text-[#8899BB]">{pillar.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex"
        >
          <Button
            as="a"
            href={philosophy.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            {philosophy.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
