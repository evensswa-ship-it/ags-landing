'use client'

import { motion } from 'framer-motion'
import { howItWorks } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

const icons = [
  'M4 12a8 8 0 0116 0M8 12a4 4 0 018 0M12 12v6',
  'M4 5h16M4 12h10M4 19h7M17 15l3 3-3 3',
  'M5 7h14v10H5zM8 10h8M8 14h5',
  'M5 12l4 4L19 6M5 20h14',
]

function StepIcon({ path }: { path: string }) {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#1660EC] bg-[#050E22] text-[#1660EC]">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  )
}

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="bg-[#010310] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <SectionLabel>{howItWorks.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {howItWorks.title}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="relative mt-14 grid gap-5 lg:grid-cols-4"
        >
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[#1A2E55] lg:block" />
          {howItWorks.steps.map((step, index) => (
            <motion.article
              key={step.number}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[8px] border border-[#1A2E55] bg-[#010310] p-6"
            >
              <div className="flex items-center gap-4">
                <StepIcon path={icons[index]} />
                <span className="font-[var(--font-inter)] text-sm text-[#8899BB]">{step.number}</span>
              </div>
              <h3 className="mt-7 font-[var(--font-inter)] text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-sm font-light leading-7 text-[#8899BB]">{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
