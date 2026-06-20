'use client'

import { motion } from 'framer-motion'
import { offer } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Offer() {
  return (
    <section id="offre" className="bg-[#010310] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <SectionLabel>{offer.eyebrow}</SectionLabel>
            <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
              {offer.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5"
          >
            {offer.notes.map((note) => (
              <p key={note} className="text-sm font-light leading-7 text-[#8899BB]">
                {note}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 grid items-stretch gap-5 md:grid-cols-2"
        >
          {offer.items.map((item) => (
            <motion.article
              key={item.number}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="flex min-h-[390px] rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-6 transition-all duration-300 hover:border-[#1660EC]/40 hover:shadow-[0_0_32px_rgba(22,96,236,0.12)]"
            >
              <div className="grid w-full gap-6 xl:grid-cols-[0.82fr_1.18fr]">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1660EC] bg-[#1660EC]/10 font-[var(--font-inter)] text-sm text-white">
                      {item.number}
                    </span>
                    <span className="rounded-full border border-[#1A2E55] px-3 py-1 text-[11px] text-[#8899BB]">{item.badge}</span>
                  </div>
                  <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8899BB]">{item.label}</p>
                  <h3 className="mt-3 font-[var(--font-inter)] text-2xl font-bold leading-tight text-white">{item.title}</h3>
                  <p
                    className={`mt-5 font-[var(--font-inter)] font-bold leading-tight text-white ${
                      item.label === 'AGS COCKPIT' ? 'whitespace-nowrap text-2xl sm:text-3xl' : 'text-3xl'
                    }`}
                  >
                    {item.price}
                  </p>
                  <div className="mt-auto pt-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">{item.outcomeLabel}</p>
                    <p className="mt-3 text-sm font-light leading-6 text-white/85">{item.outcome}</p>
                  </div>
                </div>

                <div className="rounded-[8px] border border-[#1A2E55] bg-[#010B17] p-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">Comprend</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                    {item.includes.map((include) => (
                      <li key={include} className="flex gap-2 text-sm font-light leading-6 text-[#8899BB]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1660EC]" />
                        <span>{include}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
