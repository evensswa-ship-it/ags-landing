'use client'

import { motion } from 'framer-motion'
import { cockpit } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

const icons = [
  'M12 3v3M12 18v3M4.5 7.5l2.1 2.1M17.4 14.4l2.1 2.1M3 12h3M18 12h3M4.5 16.5l2.1-2.1M17.4 9.6l2.1-2.1M9 9h6v6H9z',
  'M5 6h14v10H8l-3 3V6zM9 10h6M9 13h4',
  'M4 7h16M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7M9 11h6M10 4h4',
  'M4 6h6v6H4zM14 12h6v6h-6zM10 9h2a4 4 0 014 4v1M14 15h-2a4 4 0 01-4-4v-1',
]

function CardIcon({ path }: { path: string }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#1660EC]/35 bg-[#1660EC]/10 text-[#1660EC]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  )
}

export default function Cockpit() {
  return (
    <section id="cockpit" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <SectionLabel>{cockpit.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {cockpit.title}
          </h2>
          {cockpit.subtitle ? (
            <p className="mt-5 max-w-2xl text-base font-light leading-7 text-[#8899BB]">{cockpit.subtitle}</p>
          ) : null}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {cockpit.promises.map((promise, index) => (
            <motion.article
              key={promise.title}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-6"
            >
              <CardIcon path={icons[index]} />
              <h3 className="mt-5 font-[var(--font-inter)] text-xl font-bold text-white">{promise.title}</h3>
              <p className="mt-4 text-sm font-light leading-7 text-[#8899BB]">{promise.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
