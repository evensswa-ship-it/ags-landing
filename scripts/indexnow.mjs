// Signale à IndexNow (Bing, Yandex, Seznam, Naver…) toutes les pages du sitemap en ligne.
// Lancé par `npm run publier` après la mise en production. Google n'utilise pas IndexNow :
// pour lui, le sitemap, le flux RSS et la demande d'indexation dans Search Console font foi.
const host = 'www.agsandco.fr'
const key = 'dcbb734c468c1ff2db1f1aa94de9dc60'

const xml = await (await fetch(`https://${host}/sitemap.xml`, { signal: AbortSignal.timeout(30_000) })).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
if (urlList.length === 0) throw new Error('Sitemap vide ou illisible : rien envoyé.')

// Point d'entrée de Bing : il partage l'envoi avec les autres moteurs IndexNow (api.indexnow.org ne répond pas depuis tous les réseaux).
const res = await fetch('https://www.bing.com/indexnow', {
  method: 'POST',
  signal: AbortSignal.timeout(30_000),
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
})
if (!res.ok) throw new Error(`IndexNow a refusé l'envoi : ${res.status} ${await res.text()}`)
console.log(`IndexNow : ${urlList.length} pages signalées (${res.status}).`)
