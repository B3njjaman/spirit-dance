'use client';

import { useCallback, useEffect, useRef, useState, type FC } from 'react';
import { FotoEncuadrada } from '@/components/FotoEncuadrada';
import { ETIQUETA_CATEGORIA, VIDEOS, type Categoria, type Video } from '@/data/videos';
import { cn } from '@/lib/cn';

type Filtro = Categoria | 'todos';
const FILTROS: Filtro[] = ['todos', 'clases', 'gala', 'historias', 'trayectoria'];

type ChipProps = { filtro: Filtro; activo: boolean; alElegir: (f: Filtro) => void };

const Chip: FC<ChipProps> = ({ filtro, activo, alElegir }) => {
  const elegir = useCallback(() => alElegir(filtro), [alElegir, filtro]);
  return (
    <button
      type="button"
      aria-pressed={activo}
      onClick={elegir}
      className={cn('h-10 shrink-0 rounded-full px-5 text-sm font-semibold transition-[background-color,color,box-shadow] duration-300 ease-fidelya', activo ? 'bg-degradado text-white shadow-boton' : 'text-suave hover:bg-white/70')}
    >
      {filtro === 'todos' ? 'Todos' : ETIQUETA_CATEGORIA[filtro]}
    </button>
  );
};

type TarjetaProps = { video: Video; alAbrir: (v: Video) => void };

const Tarjeta: FC<TarjetaProps> = ({ video, alAbrir }) => {
  const abrir = useCallback(() => alAbrir(video), [alAbrir, video]);
  return (
    <li className="w-[15.5rem] shrink-0 snap-start">
      <button type="button" onClick={abrir} className="group block w-full text-left">
        <span className="vidrio relative block aspect-[4/5] overflow-hidden !rounded-[22px] p-1.5">
          <span className="relative block size-full overflow-hidden rounded-2xl">
            <FotoEncuadrada src={video.poster} alt="" sizes="15.5rem" className="transition-transform duration-500 ease-fidelya group-hover:scale-[1.03]" />
          </span>
          <span className="absolute bottom-4 left-4 grid size-11 place-items-center rounded-full bg-degradado text-white shadow-boton">
            <span aria-hidden className="ml-0.5 text-sm">▶</span>
          </span>
          <span className="absolute bottom-5 right-4 rounded-full bg-tinta/70 px-2.5 py-1 font-mono text-[11px] font-bold tabular-nums text-white backdrop-blur">{video.duracion}</span>
        </span>
        <span className="mt-3 block px-1 text-[15px] font-bold tracking-tight text-tinta">{video.titulo}</span>
      </button>
    </li>
  );
};

export const Videos = () => {
  const [filtro, setFiltro] = useState<Filtro>('todos');
  const [abierto, setAbierto] = useState<Video | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const visibles = VIDEOS.filter((v) => filtro === 'todos' || v.categoria === filtro);

  // <dialog> con showModal(): el navegador mueve el foco, lo atrapa y vuelve a quien lo abrió.
  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierto && !d.open) d.showModal();
    if (!abierto && d.open) d.close();
  }, [abierto]);

  const cerrar = useCallback(() => setAbierto(null), []);
  const alClicFondo = useCallback((e: React.MouseEvent<HTMLDialogElement>) => e.target === e.currentTarget && setAbierto(null), []);

  return (
    <section id="videos" className="py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <span className="pastilla">
          <i />
          Videos
        </span>
        <h2 className="mt-5 text-seccion">
          Todo Spirit Dance, <span className="degradado-texto">en videos cortos.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-entrada text-suave">Clases, ensayos, la Gala y la historia de Paulina, en menos de un minuto cada uno.</p>
        <div className="mx-auto mt-8 flex max-w-full gap-1 overflow-x-auto rounded-full p-1 sm:inline-flex sm:bg-white/50" role="group" aria-label="Filtrar videos">
          {FILTROS.map((f) => {
            return <Chip key={f} filtro={f} activo={f === filtro} alElegir={setFiltro} />;
          })}
        </div>
      </div>
      <ul className="mx-auto mt-10 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-6 sm:scroll-px-6 sm:px-6">
        {visibles.map((v) => {
          return <Tarjeta key={v.id} video={v} alAbrir={setAbierto} />;
        })}
      </ul>

      <dialog
        ref={dialogo}
        onClose={cerrar}
        onClick={alClicFondo}
        aria-label={abierto?.titulo}
        className="m-auto max-h-[92svh] w-[min(92vw,26rem)] overflow-visible bg-transparent p-0 backdrop:bg-tinta/70 backdrop:backdrop-blur-sm"
      >
        {abierto && (
          <div className="vidrio p-2">
            <video key={abierto.id} src={abierto.src} poster={abierto.poster} controls autoPlay playsInline className="max-h-[78svh] w-full rounded-2xl bg-tinta" />
            <div className="flex items-center justify-between gap-3 px-2 py-2.5">
              <p className="font-bold tracking-tight">{abierto.titulo}</p>
              <button type="button" onClick={cerrar} aria-label="Cerrar video" className="grid size-10 place-items-center rounded-full bg-tinta/5 text-lg text-tinta transition-colors hover:bg-tinta/10">
                ✕
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};
