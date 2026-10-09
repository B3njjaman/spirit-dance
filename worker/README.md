# Estrella: el Worker con IA

La página (`components/Asistente.tsx`) le manda la conversación a este Worker de Cloudflare, que le pregunta a Claude
usando lo que hay en `data/academia.ts` y devuelve el texto con sus botones (WhatsApp, mapa, páginas, Instagram).
Mientras el Worker no esté publicado, el asistente del sitio responde con las respuestas preparadas de ese mismo archivo.

## Publicarlo

1. Crea una clave en https://platform.claude.com (API keys) y deja saldo en la cuenta.
2. Desde esta carpeta:
   ```bash
   npm install
   npx wrangler login                          # abre el navegador para entrar a Cloudflare (gratis)
   npx wrangler secret put ANTHROPIC_API_KEY   # pega la clave cuando la pida
   npx wrangler deploy                         # imprime la dirección, algo como https://spirit-dance-asistente.<cuenta>.workers.dev
   ```
3. En GitHub, en el repositorio: Settings → Secrets and variables → Actions → Variables → New repository variable,
   con nombre `ASISTENTE_URL` y como valor la dirección del paso anterior. El próximo despliegue del sitio ya usa la IA.

## Corregir lo que sabe

Sedes, horarios y respuestas están en `data/academia.ts`. Después de editarlo, vuelve a correr `npx wrangler deploy`
aquí y haz push del sitio.
