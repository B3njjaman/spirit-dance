'use client';

import { useRef, type FC, type ReactNode, type RefObject } from 'react';
import Image from 'next/image';
import { CintaFotos } from '@/components/CintaFotos';
import { Encendido } from '@/components/Encendido';
import { Escenario } from '@/components/Escenario';
import { Estrellas } from '@/components/Estrellas';
import { CONTACTO } from '@/data/contacto';
import { GALERIA } from '@/data/galeria';
import { cn } from '@/lib/cn';
import { ruta } from '@/lib/ruta';
import grupo from '@/public/img/grupo-completo.jpg';

// Cuadro del render de Blender (render-bailarina/render.py) en su pose de reposo, de frente y levemente girada.
const BAILARINA = ruta('/render/giro_006.webp');
const GARANTIAS = ['Desde los 4 años', 'Profesora titulada', 'Gala de fin de año'];

const fotos = (ids: string[]) => ids.flatMap((id) => GALERIA.filter((f) => f.id === id));
// Todas las niñas de la academia: los grupos completos en una fila y el retrato de cada alumna en la otra.
const GRUPOS = fotos(['CkUKwULvWQy_01', 'CYmnhW0vmek_01', 'CeG9lgmOybp_01', 'CIau0P7h_Yt_01', 'CsWBxxcA67j_01', 'CeG8ARsO00t_01', 'CuSQ4swgx_e_01', 'CqEQD37vhYU_01']);
const RETRATOS = fotos(['CqWUDCLPVvj_01', 'CqWUDCLPVvj_02', 'CqWUDCLPVvj_03', 'CqWUDCLPVvj_04', 'CqWUDCLPVvj_05', 'CqWUDCLPVvj_06', 'CqWUDCLPVvj_07', 'CqWUDCLPVvj_08']);

// En celular la bailarina baila frente a sus alumnas: un muro de fotos detrás del escenario,
// como el fondo de una función. Los focos solo lo encienden en la entrada (components/Encendido).
const MuroNinas: FC<{ muro: RefObject<HTMLDivElement | null> }> = ({ muro }) => {
  return (
    <div ref={muro} aria-hidden inert className="absolute -inset-x-4 top-0 h-[62%] sm:-inset-x-6 lg:hidden">
      <div className="muro-ninas absolute inset-0 flex flex-col justify-center">
        <CintaFotos fotos={GRUPOS} altoFoto="h-[4.5rem]" className="!py-1.5" />
        <CintaFotos fotos={RETRATOS} reversa altoFoto="h-[4.5rem]" className="!py-1.5" />
      </div>
    </div>
  );
};

// Estrellitas que se desprenden de las letras y suben despacio hasta desaparecer.
const ESTRELLITAS = [
  { x: 6, retraso: 0, duracion: 3.8, tamano: 0.7 },
  { x: 22, retraso: 1.6, duracion: 4.4, tamano: 0.55 },
  { x: 37, retraso: 0.8, duracion: 3.6, tamano: 0.8 },
  { x: 52, retraso: 2.4, duracion: 4.2, tamano: 0.6 },
  { x: 66, retraso: 0.4, duracion: 4.8, tamano: 0.75 },
  { x: 81, retraso: 3.1, duracion: 3.9, tamano: 0.55 },
  { x: 95, retraso: 1.2, duracion: 4.5, tamano: 0.7 },
];

const LetrasConEstrellas: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="relative inline-block">
      <span className="texto-bailarina">{children}</span>
      {ESTRELLITAS.map((e) => {
        return (
          <i
            key={e.x}
            aria-hidden
            className="estrellita"
            style={{ left: `${e.x}%`, fontSize: `${e.tamano}rem`, animationDelay: `${e.retraso}s`, animationDuration: `${e.duracion}s` }}
          />
        );
      })}
    </span>
  );
};

const Flotante: FC<{ className: string; retraso: string; children: ReactNode }> = ({ className, retraso, children }) => {
  return (
    <div className={cn('vidrio absolute z-10 hidden animate-flotar !rounded-[20px] p-3.5 lg:block', className)} style={{ animationDelay: retraso }}>
      {children}
    </div>
  );
};

const TarjetaFoto: FC<{ tarjeta: RefObject<HTMLElement | null> }> = ({ tarjeta }) => {
  return (
    <figure ref={tarjeta} className="vidrio absolute bottom-[25%] left-[-6%] z-10 hidden w-[50%] max-w-[22rem] -rotate-3 !rounded-[22px] p-1.5 lg:block">
      <div className="relative aspect-[1080/490] overflow-hidden rounded-2xl">
        <Image src={grupo} alt="El grupo completo del Team La Florida sentado en el escenario" fill sizes="22rem" className="object-cover" priority placeholder="blur" />
      </div>
      <figcaption className="mx-1.5 mb-0.5 mt-2 text-[11px] font-semibold text-suave lg:text-xs">Team La Florida</figcaption>
    </figure>
  );
};

// La bailarina quieta sobre su tarima, con estrellitas cayendo.
const Bailarina: FC<{ caja: RefObject<HTMLDivElement | null> }> = ({ caja }) => {
  return (
    <div ref={caja} className="absolute bottom-[11%] left-1/2 aspect-[597/900] h-[74%] -translate-x-1/2 lg:h-[80%]">
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
  const muro = useRef<HTMLDivElement>(null);
  const tarjeta = useRef<HTMLElement>(null);

  return (
    <section id="inicio" className="relative flex h-svh min-h-[620px] flex-col pt-16 lg:pt-[72px]">
      <div className="mx-auto grid h-full w-full max-w-6xl grid-rows-[minmax(0,1fr)_auto] px-4 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:grid-rows-1 lg:items-center lg:gap-8">
        <div className="relative order-1 min-h-0 lg:order-2 lg:h-[88%]">
          <MuroNinas muro={muro} />
          <Bailarina caja={caja} />
          <TarjetaFoto tarjeta={tarjeta} />
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
            <LetrasConEstrellas>desde los 4&nbsp;años.</LetrasConEstrellas>
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
      <Encendido objetivo={caja} grupos={[muro, tarjeta]} />
    </section>
  );
};
