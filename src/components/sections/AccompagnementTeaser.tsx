'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { accompagnementTeaser } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function AccompagnementTeaser() {
  return (
    <section id="accompagnement-section" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>{accompagnementTeaser.eyebrow}</SectionLabel>
            <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
              {accompagnementTeaser.title}
            </h2>
            <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">
              {accompagnementTeaser.subtitle}
            </p>
            <div className="mt-8">
              <Link
                href={accompagnementTeaser.ctaHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1660EC] transition hover:text-white"
              >
                {accompagnementTeaser.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="grid gap-3"
          >
            {accompagnementTeaser.points.map((point) => (
              <motion.li
                key={point}
                variants={{ hidden: { opacity: 0, x: 12 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-3 rounded-[8px] border border-[#1A2E55] bg-[#050E22] px-5 py-4"
              >
                <span className="mt-1 h-4 w-4 shrink-0 rounded-full border border-[#1660EC] bg-[#1660EC]/10 flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1660EC]" />
                </span>
                <span className="text-sm font-light leading-6 text-[#8899BB]">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}