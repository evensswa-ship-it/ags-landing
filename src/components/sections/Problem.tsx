'use client'

import { motion } from 'framer-motion'
import { problem } from '@/data/content'

export default function Problem() {
  return (
    <section id="probleme" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {problem.title}
          </h2>
          <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">{problem.subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}
