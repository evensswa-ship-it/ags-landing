'use client'

import { motion } from 'framer-motion'
import { hero } from '@/data/content'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#010310] px-5 pt-32 sm:px-8">
      <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_70%_30%,rgba(22,96,236,0.22),transparent_34%),linear-gradient(180deg,#010310_0%,#010310_66%,#010B17_100%)]" />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="relative mx-auto grid w-full max-w-7xl gap-12 py-12 lg:grid-cols-[1fr_420px] lg:items-center"
      >
        <div className="max-w-5xl">
          <motion.div variants={item} transition={{ duration: 0.5 }}>
            <SectionLabel>{hero.eyebrow}</SectionLabel>
          </motion.div>
          <motion.h1
            variants={item}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-6xl font-[var(--font-inter)] text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[72px]"
          >
            {hero.h1}
          </motion.h1>
          <motion.p
            variants={item}
            transition={{ duration: 0.5 }}
            className="mt-7 max-w-2xl text-[15px] font-light leading-7 text-[#8899BB]"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div variants={item} transition={{ duration: 0.5 }} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button as="a" href={hero.primaryCtaHref} target="_blank" rel="noreferrer">
              {hero.primaryCta}
            </Button>
          </motion.div>
          <motion.p
            variants={item}
            transition={{ duration: 0.5 }}
            className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-[#8899BB]"
          >
            {hero.proof}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="hidden rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.32)] lg:block"
        >
          <div className="flex items-center justify-between border-b border-[#1A2E55] pb-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#1660EC]">AGS Cockpit</p>
              <p className="mt-2 text-sm text-white">Brief du matin</p>
            </div>
            <span className="rounded-[6px] border border-[#1660EC]/40 px-3 py-1 text-xs text-[#8899BB]">08:12</span>
          </div>
          <div className="mt-5 grid gap-3">
            {['3 priorités à traiter', '2 relances prêtes', '1 demande à déléguer'].map((text) => (
              <div key={text} className="rounded-[6px] border border-[#1A2E55] bg-[#010B17] p-4 text-sm text-white">
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
