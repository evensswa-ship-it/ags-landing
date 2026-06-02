'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/content'
import Button from '@/components/ui/Button'

const fieldClass =
  'min-h-12 w-full rounded-[6px] border border-[#1A2E55] bg-[#010310] px-4 text-sm text-white outline-none transition placeholder:text-[#8899BB]/60 focus:border-[#1660EC]'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#010B17] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[var(--font-inter)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {contact.title}
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          action={contact.formspreeEndpoint}
          method="POST"
          className="rounded-[8px] border border-[#1A2E55] bg-[#050E22] p-5 sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-medium text-white">
              Prénom
              <input className={fieldClass} name="firstName" autoComplete="given-name" required />
            </label>
            <label className="grid gap-2 text-xs font-medium text-white">
              Email professionnel
              <input className={fieldClass} type="email" name="email" autoComplete="email" required />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-xs font-medium text-white">
            Secteur d'activité
            <select className={fieldClass} name="sector" required defaultValue="">
              <option value="" disabled>
                Sélectionner
              </option>
              {contact.sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 grid gap-2 text-xs font-medium text-white">
            Parlez-nous de votre activité
            <textarea className={`${fieldClass} min-h-32 resize-y py-3`} name="message" />
          </label>

          <label className="mt-5 flex items-start gap-3 text-xs font-light leading-6 text-[#8899BB]">
            <input
              type="checkbox"
              name="rgpd"
              required
              className="mt-1 h-4 w-4 rounded border-[#1A2E55] accent-[#1660EC]"
            />
            <span>{contact.rgpd}</span>
          </label>

          <Button type="submit" className="mt-7 w-full sm:w-auto">
            {contact.cta}
          </Button>
          <p className="mt-4 text-xs font-light leading-6 text-[#8899BB]">{contact.reassurance}</p>
        </motion.form>
      </div>
    </section>
  )
}
