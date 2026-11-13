import { cleanSrc } from '@/data/rencontre'

/**
 * Reçoit les visites et les demandes de fiche de /rencontre et les transmet au webhook n8n
 * (adresse dans N8N_RENCONTRE_WEBHOOK_URL, jamais envoyée au navigateur).
 * Répond toujours « ok » au visiteur : une panne du webhook ne doit jamais le bloquer.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function text(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

async function forward(payload: Record<string, unknown>) {
  const url = process.env.N8N_RENCONTRE_WEBHOOK_URL
  if (!url) {
    console.error('[rencontre] N8N_RENCONTRE_WEBHOOK_URL absente : envoi non transmis', payload.type)
    return
  }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) console.error('[rencontre] webhook n8n en erreur', response.status, payload.type)
  } catch (error) {
    console.error('[rencontre] webhook n8n injoignable', payload.type, error)
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  const date = new Date().toISOString()
  const src = cleanSrc(body.src)

  if (body.type === 'visite') {
    await forward({ type: 'visite', src, date, page: '/rencontre' })
    return Response.json({ ok: true })
  }

  if (body.type !== 'fiche') return Response.json({ ok: false }, { status: 400 })

  // Pot de miel rempli : un robot. On répond comme si tout allait bien, sans rien transmettre.
  if (text(body.site_web, 200)) return Response.json({ ok: true })

  const prenom = text(body.prenom, 80)
  const email = text(body.email, 200).toLowerCase()
  if (!prenom || !EMAIL.test(email) || body.consentement !== true) {
    return Response.json({ ok: false }, { status: 400 })
  }

  await forward({
    type: 'fiche',
    prenom,
    email,
    entreprise: text(body.entreprise, 120),
    src,
    consentement: true,
    date,
    page: '/rencontre',
  })
  return Response.json({ ok: true })
}
