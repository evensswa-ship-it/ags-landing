'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { offer } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Offer() {
  return (
    <section id="offre" className="bg-[#010310] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <SectionLabel>{offer.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {offer.title}
          </h2>
          <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">{offer.subtitle}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 grid items-stretch gap-5 lg:grid-cols-3"
        >
          {offer.items.map((item) => (
            <motion.article
              key={item.number}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="flex flex-col rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-6 transition-all duration-300 hover:border-[#1660EC]/40 hover:shadow-[0_0_32px_rgba(22,96,236,0.12)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1660EC] bg-[#1660EC]/10 font-[var(--font-inter)] text-sm text-white">
                  {item.number}
                </span>
                <span className="rounded-full border border-[#1A2E55] px-3 py-1 text-[11px] text-[#8899BB]">
                  {item.badge}
                </span>
              </div>

              <h3 className="mt-5 font-[var(--font-inter)] text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-6 text-[#8899BB]">{item.subtitle}</p>

              <div className="mt-6 rounded-[8px] border border-[#1A2E55] bg-[#010B17] p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">
                  Comprend
                </p>
                <ul className="mt-4 grid gap-2">
                  {item.includes.map((inc) => (
                    <li key={inc} className="flex gap-2 text-sm font-light leading-6 text-[#8899BB]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1660EC]" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">
                  {item.outcomeLabel}
                </p>
                <p className="mt-2 text-sm font-light leading-6 text-white/85">{item.outcome}</p>
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1660EC] transition hover:text-white"
                >
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}