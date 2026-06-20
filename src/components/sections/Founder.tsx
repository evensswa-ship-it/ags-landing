'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { founder } from '@/data/content'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Founder() {
  return (
    <section id="fondateur" className="bg-[#010310] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionLabel>{founder.eyebrow}</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[420px] w-full overflow-hidden rounded-[8px] border border-[#1A2E55]"
          >
            <Image
              src={founder.photo}
              alt={founder.photoAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="font-[var(--font-inter)] text-2xl font-bold text-white sm:text-3xl">
                {founder.name}
              </p>
              <p className="mt-1 text-sm font-light text-[#1660EC]">{founder.role}</p>
            </div>

            <p className="text-sm font-light leading-7 text-[#8899BB]">{founder.bio}</p>

            <div className="flex flex-wrap gap-3">
              {founder.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] px-4 py-2"
                >
                  <p className="text-xs font-medium text-white">{h.label}</p>
                  <p className="mt-0.5 text-[11px] font-light text-[#8899BB]">{h.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
