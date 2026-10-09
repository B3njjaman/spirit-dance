'use client';

import { useRef, type FC, type ReactNode, type RefObject } from 'react';
import Image from 'next/image';
import { Encendido } from '@/components/Encendido';
import { Escenario } from '@/components/Escenario';
import { Estrellas } from '@/components/Estrellas';
import { CONTACTO } from '@/data/contacto';
import { cn } from '@/lib/cn';
import { ruta } from '@/lib/ruta';
import grupo from '@/public/img/grupo-completo.jpg';

// Cuadro del render de Blender (render-bailarina/render.py) en su pose de reposo, de frente y levemente girada.
const BAILARINA = ruta('/render/giro_006.webp');
const GARANTIAS = ['Desde los 4 años', 'Profesora titulada', 'Gala de fin de año'];

const Flotante: FC<{ className: string; retraso: string; children: ReactNode }> = ({ className, retraso, children }) => {
  return (
    <div className={cn('vidrio absolute z-10 hidden animate-flotar !rounded-[20px] p-3.5 lg:block', className)} style={{ animationDelay: retraso }}>
      {children}
    </div>
  );
};

const TarjetaFoto = () => {
  return (
    <figure className="vidrio absolute left-0 top-[4%] z-10 w-[46%] max-w-[22rem] -rotate-2 !rounded-[22px] p-1.5 lg:bottom-[25%] lg:left-[-6%] lg:top-auto lg:w-[50%] lg:-rotate-3">
      <div className="relative aspect-[1080/490] overflow-hidden rounded-2xl">
        <Image src={grupo} alt="El grupo completo del Team La Florida sentado en el escenario" fill sizes="(min-width: 1024px) 22rem, 46vw" className="object-cover" priority placeholder="blur" />
      </div>
      <figcaption className="mx-1.5 mb-0.5 mt-2 text-[11px] font-semibold text-suave lg:text-xs">Team La Florida</figcaption>
    </figure>
  );
};

// La bailarina quieta sobre su tarima, bajo un foco morado, con estrellitas cayendo.
const Bailarina: FC<{ caja: RefObject<HTMLDivElement | null> }> = ({ caja }) => {
  return (
    <div ref={caja} className="absolute bottom-[11%] left-[60%] aspect-[597/900] h-[80%] -translate-x-1/2 lg:left-1/2">
      <div aria-hidden className="absolute -top-[30%] left-[-30%] h-[126%] w-[160%] blur-xl">
        <div className="foco-escenario size-full" />
      </div>
      <div className="absolute left-[-35%] top-[77.7%] aspect-[3/1] w-[170%]">
        <Escenario />
      </div>
      <img src={BAILARINA} alt="" fetchPriority="high" className="absolute inset-0 size-full" />
      <div className="absolute -inset-x-[25%] -top-[15%] bottom-[9%]">
        <Estrellas />
      </div>
    </div>
  );
};

export const Portada = () => {
  const caja = useRef<HTMLDivElement>(null);

  return (
    <section id="inicio" className="relative flex h-svh min-h-[620px] flex-col pt-16 lg:pt-[72px]">
      <div className="mx-auto grid h-full w-full max-w-6xl grid-rows-[minmax(0,1fr)_auto] px-4 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:grid-rows-1 lg:items-center lg:gap-8">
        <div className="relative order-1 min-h-0 lg:order-2 lg:h-[88%]">
          <Bailarina caja={caja} />
          <TarjetaFoto />
          <Flotante className="right-0 top-[2%] w-44" retraso="0s">
            <p className="text-xs font-semibold text-tenue">En el aula</p>
            <p className="mt-1 text-3xl font-extrabold tracking-tight text-tinta">+20 años</p>
            <p className="text-xs text-suave">enseñando danza</p>
          </Flotante>
          <Flotante className="left-0 top-[8%] w-48" retraso="-2s">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-degradado text-sm font-extrabold text-white">4+</span>
              <div>
                <p className="text-sm font-bold text-tinta">Grupo mini</p>
                <p className="text-xs text-suave">Desde los 4 años</p>
              </div>
            </div>
          </Flotante>
          <Flotante className="bottom-[34%] right-0 w-52" retraso="-4s">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-full bg-verde/15 text-sm font-bold text-verde">✓</span>
              <div>
                <p className="text-sm font-bold text-tinta">Gala de fin de año</p>
                <p className="text-xs text-suave">Escenario, público y familia</p>
              </div>
            </div>
          </Flotante>
        </div>

        <div className="order-2 pb-6 pt-2 text-center lg:order-1 lg:pb-0 lg:pt-0">
          <h1>
            <span className="inline-block bg-degradado bg-clip-text px-4 pb-1 font-script text-[clamp(3.75rem,8vw,6.5rem)] leading-[1.05] text-transparent">Spirit Dance</span>
            <span className="-mt-1 block text-xs font-bold uppercase tracking-[0.55em] text-suave lg:text-sm">Academy</span>
            <span className="sr-only">, danza infantil en La Florida</span>
          </h1>
          <p className="mt-4 text-[clamp(1.875rem,3.3vw,3rem)] font-bold leading-[1.06] tracking-[-0.035em] lg:mt-6">
            Danza para niñas y niños{' '}
            <span className="relative inline-block">
              <span className="brillo-fucsia">desde los 4&nbsp;años.</span>
              <i aria-hidden className="chispa -right-4 -top-3 text-[1.1rem]" />
              <i aria-hidden className="chispa -left-3 top-1/2 text-[0.7rem] [animation-delay:-1.1s]" />
              <i aria-hidden className="chispa -bottom-2 right-[28%] text-[0.85rem] [animation-delay:-2s]" />
            </span>
          </p>
          <p className="mx-auto mt-5 hidden max-w-md text-entrada text-suave [@media(min-height:820px)]:block">
            Clases con Paulina Quezada, profesora de Educación Física con más de veinte años enseñando danza en colegios y universidades.
          </p>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:mt-8">
            <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className="boton-principal">
              Escribir por WhatsApp
              <span aria-hidden>→</span>
            </a>
            <a href="/clases" className="boton-vidrio hidden sm:inline-flex">
              Ver una clase
            </a>
          </div>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5 lg:mt-6">
            {GARANTIAS.map((g) => {
              return (
                <li key={g} className="check">
                  {g}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Va al final: su efecto mide la caja de la bailarina, que React enlaza antes en el árbol. */}
      <Encendido objetivo={caja} />
    </section>
  );
};
