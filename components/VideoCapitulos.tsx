'use client';

import { useCallback, useRef, useState, type FC } from 'react';
import { CAPITULOS, VIDEO_PRINCIPAL } from '@/data/videos';
import { cn } from '@/lib/cn';

const formatear = (segundos: number) => `${Math.floor(segundos / 60)}:${String(Math.floor(segundos % 60)).padStart(2, '0')}`;

type CapituloProps = { titulo: string; inicio: number; activo: boolean; alElegir: (inicio: number) => void };

const Capitulo: FC<CapituloProps> = ({ titulo, inicio, activo, alElegir }) => {
  const elegir = useCallback(() => alElegir(inicio), [alElegir, inicio]);
  return (
    <li>
      <button
        type="button"
        onClick={elegir}
        aria-current={activo || undefined}
        className={cn(
          'flex w-full items-baseline justify-between gap-4 border-b border-linea/10 py-3 text-left transition-colors duration-150',
          activo ? 'text-morado' : 'text-suave hover:text-tinta',
        )}
      >
        <span>{titulo}</span>
        <span className="text-nota tabular-nums">{formatear(inicio)}</span>
      </button>
    </li>
  );
};

export const VideoCapitulos = () => {
  const video = useRef<HTMLVideoElement>(null);
  const [actual, setActual] = useState(0);

  const irA = useCallback((inicio: number) => {
    if (!video.current) return;
    video.current.currentTime = inicio;
    void video.current.play();
  }, []);

  const alAvanzar = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => setActual(e.currentTarget.currentTime), []);
  const activo = CAPITULOS.reduce((indice, c, i) => (actual >= c.inicio ? i : indice), 0);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_15rem]">
      <video
        ref={video}
        src={VIDEO_PRINCIPAL.src}
        poster={VIDEO_PRINCIPAL.poster}
        controls
        playsInline
        preload="metadata"
        onTimeUpdate={alAvanzar}
        className="aspect-video w-full rounded-2xl bg-lavanda/40 outline outline-1 -outline-offset-1 outline-black/10"
      />
      <ol aria-label="Capítulos del video" className="self-end border-t border-linea/10">
        {CAPITULOS.map((c, i) => {
          return <Capitulo key={c.titulo} titulo={c.titulo} inicio={c.inicio} activo={actual > 0 && i === activo} alElegir={irA} />;
        })}
      </ol>
    </div>
  );
};
