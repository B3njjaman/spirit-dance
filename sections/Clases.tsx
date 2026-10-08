'use client';

import { useCallback, useState, type FC } from 'react';
import { Historias } from '@/components/Historias';
import { HISTORIAS } from '@/data/historias';
import { cn } from '@/lib/cn';

type CapituloProps = { indice: number; titulo: string; detalle: string; activo: boolean; alElegir: (i: number) => void };

const Capitulo: FC<CapituloProps> = ({ indice, titulo, detalle, activo, alElegir }) => {
  const elegir = useCallback(() => alElegir(indice), [alElegir, indice]);
  return (
    <li>
      <button
        type="button"
        onClick={elegir}
        aria-current={activo || undefined}
        className={cn('flex w-full items-start gap-4 rounded-2xl px-4 py-3 text-left transition-[background-color,box-shadow] duration-300 ease-fidelya', activo ? 'bg-white/80 shadow-suave' : 'hover:bg-white/40')}
      >
        <span className={cn('mt-0.5 grid h-6 min-w-8 place-items-center rounded-full font-mono text-[11px] font-bold', activo ? 'bg-degradado text-white' : 'bg-tinta/5 text-tenue')}>
          {String(indice + 1).padStart(2, '0')}
        </span>
        <span>
          <span className={cn('block text-[17px] font-bold tracking-tight', activo ? 'text-tinta' : 'text-suave')}>{titulo}</span>
          <span className={cn('grid transition-[grid-template-rows,opacity] duration-300 ease-fidelya', activo ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
            <span className="overflow-hidden text-sm text-suave">{detalle}</span>
          </span>
        </span>
      </button>
    </li>
  );
};

export const Clases = () => {
  const [actual, setActual] = useState(0);

  return (
    <section id="clases" className="py-20 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-6">
        <div className="px-4 text-center sm:px-6 lg:px-0 lg:text-left">
          <span className="pastilla">
            <i />
            Una clase en Spirit Dance
          </span>
          <h2 className="mt-5 text-seccion">
            Así se vive una clase, <span className="degradado-texto">por dentro.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-entrada text-suave lg:mx-0">
            Míralo como historias de Instagram: toca a la derecha para avanzar y mantén presionado para pausar.
          </p>
          <ol className="mt-8 hidden max-w-md flex-col gap-1 lg:flex">
            {HISTORIAS.map((h, i) => {
              return <Capitulo key={h.id} indice={i} titulo={h.titulo} detalle={h.texto ?? h.antetitulo} activo={i === actual} alElegir={setActual} />;
            })}
          </ol>
        </div>

        {/* En celular las historias van a pantalla completa; desde lg, dentro de un teléfono como el de fidelya.cl. */}
        <div className="relative lg:h-[44rem] lg:w-[22.5rem] lg:rounded-[2.75rem] lg:border lg:border-white/90 lg:bg-white/80 lg:p-2.5 lg:shadow-vidrio lg:backdrop-blur-xl">
          <div aria-hidden className="absolute left-1/2 top-4 z-30 hidden h-6 w-24 -translate-x-1/2 rounded-full bg-tinta lg:block" />
          <Historias actual={actual} setActual={setActual} />
        </div>
      </div>
    </section>
  );
};
