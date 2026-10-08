'use client';

import { useCallback, useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { CONTACTO } from '@/data/contacto';
import { HISTORIAS, type Historia } from '@/data/historias';
import { cn } from '@/lib/cn';

// Misma mecánica que el recap de "tu visita" en Fidelya: 4,5 s por historia, barras segmentadas,
// 30 % izquierdo retrocede y el resto avanza, mantener 220 ms pausa.
const DURACION_MS = 4500;
const ESPERA_PAUSA_MS = 220;
const ENTRADA = { opacity: 0, y: 8 };
const VISIBLE = { opacity: 1, y: 0 };
const SALIDA = { opacity: 0, y: -8 };
const CAMBIO = { duration: 0.35 };
const CURVA: [number, number, number, number] = [0.16, 1, 0.3, 1];
const TOQUE = { touchAction: 'manipulation' as const };

const Escalonado: FC<{ children: ReactNode; retraso?: number }> = ({ children, retraso = 0 }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: retraso, ease: CURVA }}>
      {children}
    </motion.div>
  );
};

type BarrasProps = { total: number; actual: number; detenido: boolean; alTerminar: () => void };

// La barra activa es una animación CSS: se congela de verdad al pausar y su final dispara el avance.
const Barras: FC<BarrasProps> = ({ total, actual, detenido, alTerminar }) => {
  return (
    <div className="flex gap-[3px]" aria-hidden>
      {Array.from({ length: total }, (_, i) => {
        return (
          <div key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
            {i === actual ? (
              <div
                key={`activa-${actual}`}
                onAnimationEnd={alTerminar}
                className="h-full origin-left bg-white"
                style={{ animation: `llenar ${DURACION_MS}ms linear forwards`, animationPlayState: detenido ? 'paused' : 'running' }}
              />
            ) : (
              <div className={cn('h-full bg-white', i < actual ? 'opacity-100' : 'opacity-0')} />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Fondo: FC<{ historia: Historia; pausado: boolean }> = ({ historia, pausado }) => {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!video.current) return;
    if (pausado) video.current.pause();
    else void video.current.play().catch(() => undefined);
  }, [pausado]);

  if (historia.fondo.tipo === 'video') {
    return <video ref={video} src={historia.fondo.src} poster={historia.fondo.poster} muted loop playsInline autoPlay aria-label={historia.alt} className="absolute inset-0 size-full object-cover" />;
  }
  return <Image src={historia.fondo.src} alt={historia.alt} fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />;
};

const Diapositiva: FC<{ historia: Historia; pausado: boolean }> = ({ historia, pausado }) => {
  return (
    <div className="absolute inset-0">
      <Fondo historia={historia} pausado={pausado} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(42_19_64/0.55)_0%,transparent_22%,transparent_45%,rgb(42_19_64/0.85)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-10 text-white">
        <Escalonado>
          <p className="text-nota text-white/80">{historia.antetitulo}</p>
        </Escalonado>
        <Escalonado retraso={0.1}>
          <h3 className="mt-2 text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.035em]">{historia.titulo}</h3>
        </Escalonado>
        {historia.texto && (
          <Escalonado retraso={0.2}>
            <p className="mt-4 max-w-xs text-entrada text-white/90">{historia.texto}</p>
          </Escalonado>
        )}
        {historia.cta && (
          <Escalonado retraso={0.3}>
            <a
              href={CONTACTO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="relative z-30 mt-6 inline-flex rounded-full bg-white px-7 py-3.5 font-medium text-morado transition-[scale] duration-150 ease-out active:scale-[0.96]"
            >
              Escribir por WhatsApp
            </a>
          </Escalonado>
        )}
      </div>
    </div>
  );
};

type HistoriasProps = { actual: number; setActual: React.Dispatch<React.SetStateAction<number>> };

// El índice vive afuera para que la lista de capítulos de la sección quede sincronizada con el teléfono.
export const Historias: FC<HistoriasProps> = ({ actual, setActual }) => {
  const contenedor = useRef<HTMLDivElement>(null);
  const [pausado, setPausado] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducir, setReducir] = useState(false);
  const temporizadorPausa = useRef<ReturnType<typeof setTimeout> | null>(null);
  const manteniendo = useRef(false);
  const total = HISTORIAS.length;
  const detenido = pausado || !visible || reducir;

  useEffect(() => {
    setReducir(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (!contenedor.current) return;
    // En celular las historias ocupan toda la pantalla: mientras se ven, la navegación se esconde.
    const raiz = document.documentElement;
    const observador = new IntersectionObserver(
      ([e]) => {
        setVisible(e.intersectionRatio >= 0.6);
        if (e.intersectionRatio > 0.85) raiz.dataset.inmersivo = '';
        else delete raiz.dataset.inmersivo;
      },
      { threshold: [0, 0.6, 0.85, 1] },
    );
    observador.observe(contenedor.current);
    return () => {
      observador.disconnect();
      delete raiz.dataset.inmersivo;
    };
  }, []);

  const siguiente = useCallback(() => setActual((i) => (i < total - 1 ? i + 1 : 0)), [setActual, total]);
  const anterior = useCallback(() => setActual((i) => Math.max(i - 1, 0)), [setActual]);
  const alTerminarBarra = useCallback(() => setActual((i) => Math.min(i + 1, total - 1)), [setActual, total]);

  const presionar = useCallback(() => {
    manteniendo.current = false;
    temporizadorPausa.current = setTimeout(() => {
      manteniendo.current = true;
      setPausado(true);
    }, ESPERA_PAUSA_MS);
  }, []);

  const soltar = useCallback((accion: () => void) => {
    if (temporizadorPausa.current) clearTimeout(temporizadorPausa.current);
    temporizadorPausa.current = null;
    if (manteniendo.current) {
      manteniendo.current = false;
      setPausado(false);
    } else accion();
  }, []);

  const cancelar = useCallback(() => {
    if (temporizadorPausa.current) clearTimeout(temporizadorPausa.current);
    manteniendo.current = false;
    setPausado(false);
  }, []);

  const soltarAnterior = useCallback(() => soltar(anterior), [soltar, anterior]);
  const soltarSiguiente = useCallback(() => soltar(siguiente), [soltar, siguiente]);

  const alTeclado = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight') siguiente();
      else if (e.key === 'ArrowLeft') anterior();
      else if (e.key === ' ') {
        e.preventDefault();
        setPausado((p) => !p);
      }
    },
    [siguiente, anterior],
  );

  const historia = HISTORIAS[actual];

  return (
    <div
      ref={contenedor}
      role="region"
      aria-roledescription="historias"
      aria-label={`Historia ${actual + 1} de ${total}: ${historia.titulo}`}
      tabIndex={0}
      onKeyDown={alTeclado}
      className="relative h-[100svh] w-full select-none overflow-hidden bg-tinta lg:h-full lg:rounded-[2.1rem]"
    >
      <AnimatePresence mode="wait">
        <motion.div key={historia.id} initial={ENTRADA} animate={VISIBLE} exit={SALIDA} transition={CAMBIO} className="absolute inset-0">
          <Diapositiva historia={historia} pausado={detenido} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 top-0 z-20 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] lg:pt-12">
        <Barras total={total} actual={actual} detenido={detenido} alTerminar={alTerminarBarra} />
        <div className="mt-3 flex items-center gap-2.5 text-white">
          <span className="grid size-8 place-items-center rounded-full bg-degradado text-xs font-extrabold text-white ring-2 ring-white">SD</span>
          <span className="text-nota font-medium">academiaspiritdance</span>
          {pausado && <span className="text-nota text-white/70">En pausa</span>}
        </div>
      </div>

      <div className={cn('absolute inset-0 z-10 flex', historia.cta && 'bottom-32')}>
        <button
          type="button"
          aria-label="Historia anterior"
          onPointerDown={presionar}
          onPointerUp={soltarAnterior}
          onPointerLeave={cancelar}
          onPointerCancel={cancelar}
          className="h-full w-[30%] focus:outline-none"
          style={TOQUE}
        />
        <button
          type="button"
          aria-label="Historia siguiente"
          onPointerDown={presionar}
          onPointerUp={soltarSiguiente}
          onPointerLeave={cancelar}
          onPointerCancel={cancelar}
          className="h-full flex-1 focus:outline-none"
          style={TOQUE}
        />
      </div>
    </div>
  );
};
