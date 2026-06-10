'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { dataPrivacy } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function DataPrivacy() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="donnees" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <SectionLabel>{dataPrivacy.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {dataPrivacy.title}
          </h2>
          <p className="mt-5 text-base font-light leading-7 text-[#8899BB]">{dataPrivacy.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 rounded-[8px] border border-[#1A2E55] bg-[#050E22]"
        >
          {dataPrivacy.items.map((item, index) => {
            const isOpen = openIndex === index
            const isLast = index === dataPrivacy.items.length - 1

            return (
              <div key={item.title} className={isLast ? '' : 'border-b border-[#1A2E55]'}>
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-[var(--font-inter)] text-base font-semibold text-white">
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="shrink-0 text-[#1660EC]"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm font-light leading-7 text-[#8899BB]">
                        {item.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-xs font-light leading-6 text-[#8899BB]/60"
        >
          {dataPrivacy.note}
        </motion.p>
      </div>
    </section>
  )
}
