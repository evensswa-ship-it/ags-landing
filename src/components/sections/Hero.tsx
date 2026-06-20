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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(22,96,236,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,96,236,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at center, black 0%, transparent 70%)',
        }}
      />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="relative mx-auto w-full max-w-7xl py-12"
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
            {'secondaryCta' in hero && (
              <Button as="a" href={hero.secondaryCtaHref as string} variant="outline">
                {hero.secondaryCta as string}
              </Button>
            )}
          </motion.div>
          {'stat' in hero && (
            <motion.p
              variants={item}
              transition={{ duration: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-[6px] border border-[#1A2E55] bg-[#050E22] px-3 py-1.5 text-xs font-medium text-white"
            >
              {hero.stat}
            </motion.p>
          )}
          <motion.p
            variants={item}
            transition={{ duration: 0.5 }}
            className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-[#8899BB]"
          >
            {hero.proof}
          </motion.p>
        </div>
      </motion.div>
      <motion.a
        href="#cockpit"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8899BB] transition-colors hover:text-white"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Défiler vers la section suivante"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  )
}
