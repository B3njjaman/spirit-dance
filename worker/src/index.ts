import Anthropic from '@anthropic-ai/sdk';
import {
  CONTACTO_ACADEMIA,
  PAGINAS,
  RESPUESTA_NO_SE,
  SEDES,
  SOBRE_LA_ACADEMIA,
  type Accion,
  type Respuesta,
  type TipoAccion,
} from '../../data/academia';
import { TRAYECTORIA } from '../../data/trayectoria';

// Estrella, la asistente de spirit-dance: recibe la conversación desde la página (components/Asistente.tsx) y responde
// con Claude a partir de data/academia.ts. La respuesta es JSON con el texto y los botones que la página dibuja.

type Env = { ANTHROPIC_API_KEY: string; ORIGENES: string };
type MensajeEntrada = { rol: 'usuario' | 'asistente'; texto: string };

const MODELO = 'claude-opus-5-5';
const MAX_MENSAJES = 12;
const MAX_LARGO = 500;
const TIPOS: TipoAccion[] = ['whatsapp', 'mapa', 'pagina', 'instagram'];

const sedesTexto = SEDES.map(
  (s) =>
    `- id "${s.id}": ${s.nombre}, ${s.direccion}. ${s.horario}. ${s.edades}. Estilos: ${s.estilos}. ` +
    `${s.vigente ? 'SEDE ACTUAL' : 'SEDE ANTERIOR, no anunciar como vigente'} (fuente: ${s.fuente}).`,
).join('\n');

const SISTEMA = `Eres Estrella, la asistente del sitio web de Spirit Dance Academy, una academia de danza infantil en Santiago de Chile.
Hablas con apoderadas y apoderados que quieren saber de las clases. Responde en español de Chile, con un tono cálido y cercano,
en 1 a 3 oraciones cortas. Como mucho un emoji, y solo si suma.

Lo que sabes de la academia:
${SOBRE_LA_ACADEMIA}

Sedes:
${sedesTexto}

Trayectoria de Paulina (fundadora):
${TRAYECTORIA.map((h) => `- ${h.periodo}: ${h.cargo}, ${h.lugar}`).join('\n')}

Páginas del sitio (para acciones "pagina", usa exactamente estas rutas): ${PAGINAS.map((p) => `${p.ruta} (${p.nombre})`).join(', ')}.
WhatsApp de Paulina: ${CONTACTO_ACADEMIA.telefono}. Instagram: @academiaspiritdance.

Reglas:
- Responde solo con lo que está arriba. Si no está (precios, cupos, fechas de la próxima Gala, horarios exactos de esta
  temporada, uniformes, etc.), dilo con naturalidad y ofrece escribirle a Paulina por WhatsApp. Nunca inventes datos.
- Cuando des una sede o un horario, aclara que viene de la última publicación de la academia y que conviene confirmarlo con Paulina.
- No hables de otras academias ni de personas que no sean Paulina y su equipo. Si te preguntan algo que no tiene que ver
  con la academia, responde con amabilidad que solo puedes ayudar con Spirit Dance.
- Agrega acciones útiles (máximo 3):
  - "whatsapp": etiqueta corta (ej. "Inscribir por WhatsApp") y en "valor" el mensaje que la persona le mandaría a Paulina,
    escrito en primera persona y con lo que preguntó (ej. "Hola Paulina, quiero inscribir a mi hija de 6 años.").
  - "mapa": cuando pregunten dónde es o cómo llegar; "valor" es el id de la sede ("macul" para la actual) y la etiqueta "Cómo llegar".
  - "pagina": "valor" es una de las rutas del sitio.
  - "instagram": "valor" vacío.
  Si no hace falta ninguna acción, deja la lista vacía.`;

const ESQUEMA = {
  type: 'object',
  properties: {
    texto: { type: 'string' },
    acciones: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          tipo: { type: 'string', enum: TIPOS },
          etiqueta: { type: 'string' },
          valor: { type: 'string' },
        },
        required: ['tipo', 'etiqueta', 'valor'],
        additionalProperties: false,
      },
    },
  },
  required: ['texto', 'acciones'],
  additionalProperties: false,
};

const RUTAS = new Set<string>(PAGINAS.map((p) => p.ruta));

const accionValida = (a: Accion) => {
  if (!TIPOS.includes(a.tipo) || !a.etiqueta.trim()) return false;
  if (a.tipo === 'mapa') return SEDES.some((s) => s.id === a.valor);
  if (a.tipo === 'pagina') return RUTAS.has(a.valor);
  if (a.tipo === 'whatsapp') return a.valor.trim().length > 0;
  return true;
};

const cabecerasCors = (origen: string | null, env: Env): Record<string, string> => {
  const permitidos = env.ORIGENES.split(',').map((o) => o.trim());
  const permitido = origen && permitidos.includes(origen) ? origen : permitidos[0];
  return { 'Access-Control-Allow-Origin': permitido, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' };
};

const json = (cuerpo: unknown, estado: number, cors: Record<string, string>) =>
  new Response(JSON.stringify(cuerpo), { status: estado, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors } });

const leerMensajes = (cuerpo: unknown): MensajeEntrada[] | null => {
  const lista = (cuerpo as { mensajes?: unknown })?.mensajes;
  if (!Array.isArray(lista) || lista.length === 0 || lista.length > MAX_MENSAJES) return null;
  const mensajes = lista.filter(
    (m): m is MensajeEntrada => (m?.rol === 'usuario' || m?.rol === 'asistente') && typeof m?.texto === 'string' && m.texto.trim().length > 0,
  );
  if (mensajes.length !== lista.length || mensajes.some((m) => m.texto.length > MAX_LARGO)) return null;
  // La conversación con Claude tiene que empezar con la persona.
  while (mensajes[0]?.rol === 'asistente') mensajes.shift();
  return mensajes.length > 0 && mensajes[mensajes.length - 1].rol === 'usuario' ? mensajes : null;
};

const preguntarAClaude = async (env: Env, mensajes: MensajeEntrada[]): Promise<Respuesta> => {
  const cliente = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const respuesta = await cliente.beta.messages.create({
    model: MODELO,
    max_tokens: 4000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: [{ type: 'text', text: SISTEMA, cache_control: { type: 'ephemeral' } }],
    output_config: { effort: 'low', format: { type: 'json_schema', schema: ESQUEMA } },
    messages: mensajes.map((m) => ({ role: m.rol === 'usuario' ? 'user' : 'assistant', content: m.texto })),
  });
  if (respuesta.stop_reason === 'refusal' || respuesta.stop_reason === 'max_tokens') return RESPUESTA_NO_SE;
  const bloque = respuesta.content.find((b) => b.type === 'text');
  if (!bloque || bloque.type !== 'text') return RESPUESTA_NO_SE;
  const datos = JSON.parse(bloque.text) as Respuesta;
  return { texto: datos.texto, acciones: datos.acciones.filter(accionValida).slice(0, 3) };
};

export default {
  async fetch(peticion: Request, env: Env): Promise<Response> {
    const cors = cabecerasCors(peticion.headers.get('Origin'), env);
    if (peticion.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (peticion.method !== 'POST') return json({ error: 'Usa POST' }, 405, cors);

    const mensajes = leerMensajes(await peticion.json().catch(() => null));
    if (!mensajes) return json({ error: 'Conversación inválida' }, 400, cors);

    try {
      return json(await preguntarAClaude(env, mensajes), 200, cors);
    } catch (error) {
      if (error instanceof Anthropic.RateLimitError) return json({ error: 'Muchas preguntas seguidas, intenta en un rato' }, 429, cors);
      if (error instanceof Anthropic.APIError) return json({ error: `Error de la IA (${error.status})` }, 502, cors);
      if (error instanceof SyntaxError) return json(RESPUESTA_NO_SE, 200, cors);
      throw error;
    }
  },
};
