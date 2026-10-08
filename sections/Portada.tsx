'use client';

import { useRef, type FC, type ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BailarinaRender } from '@/components/BailarinaRender';
import { CONTACTO } from '@/data/contacto';
import { cn } from '@/lib/cn';
import foto1 from '@/public/img/portada.jpg';
import foto2 from '@/public/img/portada-2.jpg';
import foto3 from '@/public/img/portada-3.jpg';
import foto4 from '@/public/img/portada-4.jpg';
import foto5 from '@/public/img/portada-5.jpg';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FotoPortada = { src: StaticImageData; alt: string; pie: string };

// Mientras la bailarina gira, la tarjeta de foto recorre la academia: una foto por tramo de scroll.
const FOTOS: FotoPortada[] = [
  { src: foto1, alt: 'Alumnas del Team La Florida sentadas en el escenario antes de la Gala', pie: 'Team La Florida' },
  { src: foto2, alt: 'Alumna practicando elongación con la pierna en alto junto a la ventana', pie: 'Elongación' },
  { src: foto3, alt: 'Grupo mini ensayando sobre las colchonetas', pie: 'Grupo mini' },
  { src: foto5, alt: 'Team La Florida en el escenario y sus profesoras con flores', pie: 'Las profesoras' },
  { src: foto4, alt: 'Alumna y profesora en la plataforma de la Gala', pie: 'Noche de Gala' },
];

const CRUCE = 0.6;
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
    <figure className="vidrio absolute bottom-[3%] right-0 z-10 w-[34%] max-w-[13rem] -rotate-3 !rounded-[22px] p-1.5 lg:bottom-[6%] lg:left-0 lg:right-auto lg:w-[32%] lg:-rotate-[4deg]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        {FOTOS.map((foto, i) => {
          return (
            <div key={foto.pie} className="foto-portada absolute inset-0 overflow-hidden" style={i === 0 ? undefined : { clipPath: 'inset(100% 0% 0% 0%)' }}>
              <Image src={foto.src} alt={foto.alt} fill sizes="(min-width: 1024px) 14rem, 34vw" className="object-cover" priority={i === 0} placeholder="blur" />
            </div>
          );
        })}
      </div>
      <figcaption className="relative mx-1.5 mb-0.5 mt-2 h-4 text-[11px] font-semibold text-suave lg:text-xs">
        {FOTOS.map((foto, i) => {
          return (
            <span key={foto.pie} className="pie-portada absolute inset-0 truncate" style={i === 0 ? undefined : { opacity: 0 }}>
              {foto.pie}
            </span>
          );
        })}
      </figcaption>
    </figure>
  );
};

export const Portada = () => {
  const seccion = useRef<HTMLElement>(null);
  const progreso = useRef(0);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: seccion.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          progreso.current = self.progress;
        },
      });
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const linea = gsap.timeline({
          defaults: { ease: 'none', duration: CRUCE },
          scrollTrigger: { trigger: seccion.current, start: 'top top', end: 'bottom bottom', scrub: 0.6 },
        });
        const fotos = gsap.utils.toArray<HTMLElement>('.foto-portada');
        const pies = gsap.utils.toArray<HTMLElement>('.pie-portada');
        fotos.forEach((foto, i) => {
          linea.fromTo(foto.querySelector('img'), { scale: 1.06 }, { scale: 1, duration: 1 }, i);
          if (i === 0) return;
          linea.fromTo(foto, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)' }, i - CRUCE / 2);
          linea.to(pies[i - 1], { opacity: 0, duration: CRUCE / 2 }, i - CRUCE / 2);
          linea.fromTo(pies[i], { opacity: 0 }, { opacity: 1, duration: CRUCE / 2 }, i - CRUCE / 4);
        });
      });
    },
    { scope: seccion },
  );

  return (
    <section ref={seccion} id="inicio" className="relative h-[260svh] lg:h-[300svh]">
      <div className="sticky top-0 flex h-svh flex-col pt-16 lg:pt-[72px]">
        <div className="mx-auto grid h-full w-full max-w-6xl grid-rows-[minmax(0,1fr)_auto] px-4 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:grid-rows-1 lg:items-center lg:gap-8">
          <div className="relative order-1 min-h-0 lg:order-2 lg:h-[84%]">
            <div aria-hidden className="absolute inset-[12%] rounded-full bg-[radial-gradient(closest-side,rgba(255,120,200,.32),rgba(170,110,255,.16)_60%,transparent)] blur-2xl" />
            <h1 className="sr-only">Spirit Dance Academy, danza infantil en La Florida</h1>
            <BailarinaRender progreso={progreso} />
            <TarjetaFoto />
            <Flotante className="right-0 top-[4%] w-44" retraso="0s">
              <p className="text-xs font-semibold text-tenue">En el aula</p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight text-tinta">+20 años</p>
              <p className="text-xs text-suave">enseñando danza</p>
            </Flotante>
            <Flotante className="left-[2%] top-[12%] w-48" retraso="-2s">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-degradado text-sm font-extrabold text-white">4+</span>
                <div>
                  <p className="text-sm font-bold text-tinta">Grupo mini</p>
                  <p className="text-xs text-suave">Desde los 4 años</p>
                </div>
              </div>
            </Flotante>
            <Flotante className="bottom-[12%] right-0 w-52" retraso="-4s">
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
            <span className="pastilla">
              <i />
              Academia de danza infantil · La Florida
            </span>
            <p className="mt-4 text-portada lg:mt-6">
              Danza para niñas y niños <span className="degradado-texto">desde los 4&nbsp;años.</span>
            </p>
            <p className="mx-auto mt-5 hidden max-w-md text-entrada text-suave [@media(min-height:820px)]:block">
              Clases con Paulina Quezada, profesora de Educación Física con más de veinte años enseñando danza en colegios y universidades.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:mt-8">
              <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className="boton-principal">
                Escribir por WhatsApp
                <span aria-hidden>→</span>
              </a>
              <a href="#clases" className="boton-vidrio hidden sm:inline-flex">
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
      </div>
    </section>
  );
};
