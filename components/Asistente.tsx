'use client';

import { useCallback, useEffect, useRef, useState, type FC, type FormEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CONTACTO_ACADEMIA,
  RESPUESTA_NO_SE,
  RESPUESTAS_BASE,
  SALUDO,
  SEDES,
  type Accion,
  type Respuesta,
} from '@/data/academia';
import { cn } from '@/lib/cn';
import { ruta } from '@/lib/ruta';

// Estrella, la asistente del sitio (como AURA en fidelya.cl): vive en la bailarina flotante. Si el sitio se construyó
// con NEXT_PUBLIC_ASISTENTE_URL responde Claude a través del Worker (worker/); si no, o si el Worker falla,
// responde con las respuestas preparadas de data/academia.ts. Las respuestas traen botones: WhatsApp con el mensaje
// escrito, cómo llegar en Google Maps (con el mapa adentro), páginas del sitio e Instagram.
const URL_IA = process.env.NEXT_PUBLIC_ASISTENTE_URL ?? '';
const MAX_HISTORIAL = 10;

type Mensaje = { id: number; rol: 'usuario' | 'asistente'; texto: string; acciones: Accion[] };

const sinTildes = (texto: string) => texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const responderLocal = (pregunta: string): Respuesta => {
  const texto = sinTildes(pregunta);
  const puntajes = RESPUESTAS_BASE.map((r) => ({ r, puntos: r.claves.filter((c) => texto.includes(sinTildes(c))).length }));
  const mejor = puntajes.sort((a, b) => b.puntos - a.puntos)[0];
  return mejor && mejor.puntos > 0 ? mejor.r.respuesta : RESPUESTA_NO_SE;
};

const responderConIA = async (historial: Mensaje[]): Promise<Respuesta> => {
  const mensajes = historial.slice(-MAX_HISTORIAL).map((m) => ({ rol: m.rol, texto: m.texto }));
  const res = await fetch(URL_IA, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mensajes }) });
  if (!res.ok) throw new Error(`Asistente respondió ${res.status}`);
  return (await res.json()) as Respuesta;
};

const enlaceWhatsapp = (texto: string) => `https://wa.me/${CONTACTO_ACADEMIA.whatsapp}?text=${encodeURIComponent(texto)}`;
const enlaceRuta = (direccion: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(direccion)}`;
const enlaceMapa = (direccion: string) => `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`;

const BOTON = 'inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[13px] font-bold transition-[background-color,scale] duration-150 active:scale-[0.96]';

const BotonAccion: FC<{ accion: Accion }> = ({ accion }) => {
  if (accion.tipo === 'pagina') {
    return (
      <Link href={accion.valor} className={cn(BOTON, 'bg-lavanda text-morado hover:bg-lavanda/70')}>
        {accion.etiqueta}
      </Link>
    );
  }
  if (accion.tipo === 'mapa') {
    const sede = SEDES.find((s) => s.id === accion.valor);
    if (!sede) return null;
    return (
      <div className="w-full">
        <iframe
          title={`Mapa: ${sede.nombre}`}
          src={enlaceMapa(sede.direccion)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-40 w-full rounded-2xl border-0 bg-lavanda"
        />
        <a href={enlaceRuta(sede.direccion)} target="_blank" rel="noreferrer" className={cn(BOTON, 'mt-2 bg-degradado text-white')}>
          {accion.etiqueta}
          <span aria-hidden>↗</span>
        </a>
      </div>
    );
  }
  const href = accion.tipo === 'whatsapp' ? enlaceWhatsapp(accion.valor) : CONTACTO_ACADEMIA.instagram;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cn(BOTON, accion.tipo === 'whatsapp' ? 'bg-[#25D366] text-white' : 'bg-lavanda text-morado hover:bg-lavanda/70')}>
      {accion.etiqueta}
    </a>
  );
};

const Burbuja: FC<{ mensaje: Mensaje }> = ({ mensaje }) => {
  const propio = mensaje.rol === 'usuario';
  return (
    <li className={cn('flex flex-col gap-2', propio ? 'items-end' : 'items-start')}>
      <p
        className={cn(
          'max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[14.5px] leading-snug',
          propio ? 'rounded-br-md bg-degradado text-white' : 'rounded-bl-md bg-white text-tinta shadow-suave',
        )}
      >
        {mensaje.texto}
      </p>
      {mensaje.acciones.length > 0 && (
        <div className="flex w-full max-w-[90%] flex-wrap gap-2">
          {mensaje.acciones.map((a) => {
            return <BotonAccion key={`${a.tipo}-${a.valor}`} accion={a} />;
          })}
        </div>
      )}
    </li>
  );
};

export const Asistente = () => {
  const [visible, setVisible] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([{ id: 0, rol: 'asistente', ...SALUDO }]);
  const [borrador, setBorrador] = useState('');
  const [pensando, setPensando] = useState(false);
  const lista = useRef<HTMLOListElement>(null);
  const entrada = useRef<HTMLInputElement>(null);
  const pagina = usePathname();

  // En el inicio aparece cuando termina la portada, donde ya está la bailarina grande; en las demás páginas, al bajar un poco.
  useEffect(() => {
    const portada = document.getElementById('inicio');
    const alBajar = () => setVisible(window.scrollY > (portada ? portada.offsetHeight - window.innerHeight * 0.6 : 240));
    alBajar();
    window.addEventListener('scroll', alBajar, { passive: true });
    return () => window.removeEventListener('scroll', alBajar);
  }, [pagina]);

  useEffect(() => setAbierto(false), [pagina]);

  useEffect(() => {
    if (!abierto) return;
    entrada.current?.focus();
    const alTecla = (e: KeyboardEvent) => e.key === 'Escape' && setAbierto(false);
    window.addEventListener('keydown', alTecla);
    return () => window.removeEventListener('keydown', alTecla);
  }, [abierto]);

  useEffect(() => {
    lista.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [mensajes, pensando]);

  const preguntar = useCallback(
    async (texto: string) => {
      const limpio = texto.trim().slice(0, 500);
      if (!limpio || pensando) return;
      const pregunta: Mensaje = { id: Date.now(), rol: 'usuario', texto: limpio, acciones: [] };
      const historial = [...mensajes, pregunta];
      setMensajes(historial);
      setBorrador('');
      setPensando(true);
      let respuesta: Respuesta;
      try {
        respuesta = URL_IA ? await responderConIA(historial.slice(1)) : responderLocal(limpio);
      } catch {
        respuesta = responderLocal(limpio);
      }
      setMensajes((previos) => [...previos, { id: Date.now() + 1, rol: 'asistente', ...respuesta }]);
      setPensando(false);
    },
    [mensajes, pensando],
  );

  const alEnviar = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      void preguntar(borrador);
    },
    [borrador, preguntar],
  );
  const alternar = useCallback(() => setAbierto((a) => !a), []);
  const cerrar = useCallback(() => setAbierto(false), []);
  const soloSaludo = mensajes.length === 1;

  return (
    <>
      <section
        role="dialog"
        aria-modal="false"
        aria-label="Estrella, asistente de Spirit Dance"
        hidden={!abierto}
        className="fixed inset-x-2 bottom-[calc(96px+env(safe-area-inset-bottom))] z-40 flex max-h-[min(78svh,40rem)] flex-col overflow-hidden rounded-[26px] border border-white/90 bg-papel shadow-vidrio sm:inset-x-auto sm:right-6 sm:w-[24rem] lg:bottom-36 lg:right-8"
      >
        <header className="flex items-center gap-3 bg-degradado px-4 py-3 text-white">
          <img src={ruta('/render/giro_012.webp')} alt="" className="h-11 w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]" />
          <div className="min-w-0 flex-1">
            <p className="font-script text-[1.9rem] leading-none">Estrella</p>
            <p className="flex items-center gap-1.5 text-xs font-semibold text-white/85">
              <span aria-hidden className="size-2 rounded-full bg-[#7CF5B8]" />
              Asistente de Spirit Dance
            </p>
          </div>
          <button type="button" onClick={cerrar} aria-label="Cerrar asistente" className="grid size-9 place-items-center rounded-full bg-white/20 text-lg transition-colors hover:bg-white/30">
            ✕
          </button>
        </header>

        <ol ref={lista} aria-live="polite" className="flex flex-1 flex-col gap-3 overflow-y-auto overscroll-contain px-3.5 py-4">
          {mensajes.map((m) => {
            return <Burbuja key={m.id} mensaje={m} />;
          })}
          {soloSaludo && (
            <li className="flex flex-wrap gap-2">
              {RESPUESTAS_BASE.slice(0, 5).map((r) => {
                return (
                  <button
                    key={r.pregunta}
                    type="button"
                    onClick={() => void preguntar(r.pregunta)}
                    className="rounded-full border border-lila/30 bg-white px-3 py-1.5 text-[13px] font-semibold text-morado transition-colors hover:bg-lavanda"
                  >
                    {r.pregunta}
                  </button>
                );
              })}
            </li>
          )}
          {pensando && (
            <li aria-label="Estrella está escribiendo" className="flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-md bg-white py-3 shadow-suave">
              <span className="size-1.5 animate-bounce rounded-full bg-lila [animation-delay:-0.3s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-lila [animation-delay:-0.15s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-lila" />
            </li>
          )}
        </ol>

        <form onSubmit={alEnviar} className="flex items-center gap-2 border-t border-tinta/[0.06] bg-white/70 p-2.5">
          <label htmlFor="pregunta-asistente" className="sr-only">
            Escribe tu pregunta
          </label>
          <input
            ref={entrada}
            id="pregunta-asistente"
            value={borrador}
            onChange={(e) => setBorrador(e.target.value)}
            maxLength={500}
            placeholder="Escribe tu pregunta…"
            autoComplete="off"
            className="h-11 min-w-0 flex-1 rounded-full border border-tinta/10 bg-white px-4 text-[15px] text-tinta placeholder:text-tenue focus:border-lila focus:outline-none"
          />
          <button type="submit" disabled={!borrador.trim() || pensando} aria-label="Enviar pregunta" className="grid size-11 shrink-0 place-items-center rounded-full bg-degradado text-white shadow-boton transition-[opacity,scale] active:scale-[0.96] disabled:opacity-40">
            <span aria-hidden>➤</span>
          </button>
        </form>
      </section>

      <button
        type="button"
        onClick={alternar}
        aria-expanded={abierto}
        aria-label={abierto ? 'Cerrar asistente' : 'Abrir asistente: ¿te ayudo?'}
        className={cn(
          'fixed bottom-[calc(14px+env(safe-area-inset-bottom))] right-3.5 z-40 flex items-end gap-1 transition-[opacity,translate] duration-500 ease-fidelya [html[data-inmersivo]_&]:pointer-events-none [html[data-inmersivo]_&]:opacity-0 lg:bottom-7 lg:right-8',
          visible || abierto ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <span className="mb-5 rounded-2xl rounded-br-md bg-white px-3 py-1.5 text-[13px] font-bold text-tinta shadow-suave lg:mb-6 lg:px-3.5 lg:py-2 lg:text-sm">
          {abierto ? 'Cerrar' : '¿Te ayudo?'}
        </span>
        <img src={ruta('/render/giro_012.webp')} alt="" className="h-16 w-auto animate-flotar drop-shadow-[0_14px_18px_rgba(214,40,160,0.35)] lg:h-24" />
      </button>
    </>
  );
};
