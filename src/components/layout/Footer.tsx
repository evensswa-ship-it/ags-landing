import Link from 'next/link'
import { footer, site } from '@/data/site'

const linkClass = 'text-mist transition-colors duration-200 hover:text-ink'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-night px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-page">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="t-h3">
              {site.name}
              <span className="block pt-1 text-mist">
                {footer.tagline.lead} {footer.tagline.rest}
              </span>
            </p>
            <p className="t-small mt-5 text-mist">{footer.place}</p>
          </div>

          <nav aria-label={footer.pagesLabel}>
            <h2 className="t-small font-semibold text-ink">{footer.pagesLabel}</h2>
            <ul className="t-small mt-4 grid gap-3">
              {footer.pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.legalLabel}>
            <h2 className="t-small font-semibold text-ink">{footer.legalLabel}</h2>
            <ul className="t-small mt-4 grid gap-3">
              {footer.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="t-small font-semibold text-ink">{footer.contactLabel}</h2>
            <ul className="t-small mt-4 grid gap-3">
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {footer.linkedinLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="t-small mt-14 flex flex-col gap-4 border-t border-line pt-6 text-mist md:flex-row md:items-center md:justify-between">
          <p>
            {footer.partners.text}{' '}
            <Link
              href={footer.partners.href}
              className="font-medium text-ink underline decoration-mist/50 underline-offset-4 hover:decoration-ink"
            >
              {footer.partners.link}
            </Link>
          </p>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
