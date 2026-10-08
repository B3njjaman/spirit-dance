'use client';

import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { cn } from '@/lib/cn';

type Props = { src: string; poster: string; etiqueta: string; className?: string };

// Video sin sonido que solo corre mientras está en pantalla. Con "reducir movimiento"
// no arranca solo; siempre se puede pausar o reanudar con el botón.
export const VideoMudo: FC<Props> = ({ src, poster, etiqueta, className }) => {
  const video = useRef<HTMLVideoElement>(null);
  const [pausadoPorUsuario, setPausadoPorUsuario] = useState(false);
  const [sonando, setSonando] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducir) {
      setPausadoPorUsuario(true);
      return;
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting && !pausadoPorUsuario) void el.play().catch(() => undefined);
        else el.pause();
      },
      { threshold: 0.5 },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, [pausadoPorUsuario]);

  const alternar = useCallback(() => {
    const el = video.current;
    if (!el) return;
    if (el.paused) {
      setPausadoPorUsuario(false);
      void el.play().catch(() => undefined);
    } else {
      setPausadoPorUsuario(true);
      el.pause();
    }
  }, []);

  const alReproducir = useCallback(() => setSonando(true), []);
  const alPausar = useCallback(() => setSonando(false), []);

  return (
    <div className={cn('relative overflow-hidden bg-lavanda/40 outline outline-1 -outline-offset-1 outline-black/10', className)}>
      <video
        ref={video}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={etiqueta}
        onPlay={alReproducir}
        onPause={alPausar}
        className="size-full object-cover"
      />
      <button
        type="button"
        onClick={alternar}
        aria-label={sonando ? `Pausar: ${etiqueta}` : `Reproducir: ${etiqueta}`}
        className="absolute bottom-3 right-3 grid size-11 place-items-center rounded-full bg-white/85 text-tinta shadow-sm backdrop-blur transition-[scale,background-color] duration-150 ease-out hover:bg-white active:scale-[0.96]"
      >
        <span aria-hidden className={cn('text-xs', !sonando && 'ml-0.5')}>
          {sonando ? '❚❚' : '▶'}
        </span>
      </button>
    </div>
  );
};
