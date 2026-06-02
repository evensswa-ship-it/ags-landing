'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/content'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Philosophy() {
  return (
    <section id="philosophie" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid max-w-4xl gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <SectionLabel>{philosophy.eyebrow}</SectionLabel>
            <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
              {philosophy.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex"
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
      </div>
    </section>
  )
}
