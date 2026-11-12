// Mise en production puis signalement des pages aux moteurs : `npm run publier`.
// L'entrée standard est fermée pour que la CLI Vercel n'attende jamais une réponse au clavier.
import { spawnSync } from 'node:child_process'

const run = (command) => {
  const { status } = spawnSync(command, { shell: true, stdio: ['ignore', 'inherit', 'inherit'] })
  if (status !== 0) process.exit(status ?? 1)
}

run('vercel deploy --prod --yes')
run('node scripts/indexnow.mjs')
