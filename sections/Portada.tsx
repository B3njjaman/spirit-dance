'use client';

import { useRef } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { EscenarioDiferido } from '@/components/EscenarioDiferido';
import { CONTACTO } from '@/data/contacto';
import foto1 from '@/public/img/portada.jpg';
import foto2 from '@/public/img/portada-2.jpg';
import foto3 from '@/public/img/portada-3.jpg';
import foto4 from '@/public/img/portada-4.jpg';
import foto5 from '@/public/img/portada-5.jpg';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FotoPortada = { src: StaticImageData; alt: string; pie: string };

// Mientras la bailarina gira, el arco recorre la academia: una foto por tramo de scroll.
const FOTOS: FotoPortada[] = [
  { src: foto1, alt: 'Alumnas del Team La Florida sentadas en el escenario antes de la Gala', pie: 'Team La Florida en el escenario de la Gala.' },
  { src: foto2, alt: 'Alumna practicando elongación con la pierna en alto junto a la ventana', pie: 'Elongación antes de la clase.' },
  { src: foto3, alt: 'Grupo mini ensayando sobre las colchonetas', pie: 'El grupo mini prepara su coreografía.' },
  { src: foto5, alt: 'Team La Florida en el escenario y sus profesoras con flores', pie: 'Team La Florida y sus profesoras.' },
  { src: foto4, alt: 'Alumna y profesora en la plataforma de la Gala', pie: 'Noche de Gala.' },
];

const CRUCE = 0.6;

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
          linea.fromTo(foto.querySelector('img'), { scale: 1.04 }, { scale: 1, duration: 1 }, i);
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
    <section ref={seccion} id="inicio" className="relative lg:h-[420svh]">
      <div className="grid lg:sticky lg:top-0 lg:h-svh lg:grid-cols-[1.1fr_0.95fr_0.75fr]">
        <div className="relative h-[66svh] pt-[72px] lg:h-full lg:pt-0">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-3/4 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgb(var(--lavanda)/0.75),transparent)]" />
          <h1 className="sr-only">Spirit Dance Academy</h1>
          <EscenarioDiferido progreso={progreso} />
        </div>

        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-4">
          <p className="font-display text-portada text-tinta">Danza para niñas y niños desde los 4 años.</p>
          <p className="mt-7 max-w-md text-entrada text-suave">
            Clases en La Florida con Paulina Quezada, profesora de Educación Física que lleva más de veinte años enseñando danza en colegios y
            universidades.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={CONTACTO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-morado px-7 py-3.5 font-medium text-white shadow-[0_10px_30px_-10px_rgb(var(--morado)/0.7)] transition-[background-color,scale] duration-150 ease-out hover:bg-tinta active:scale-[0.96]"
            >
              Escribir por WhatsApp
            </a>
            <a href="#clases" className="font-medium text-morado underline decoration-lavanda decoration-2 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-morado">
              Ver grupos y edades
            </a>
          </div>
        </div>

        <figure className="mx-auto flex w-full max-w-xs flex-col justify-center px-6 pb-20 pt-14 lg:max-w-none lg:px-0 lg:pb-0 lg:pr-10 lg:pt-0">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-t-[11rem] outline outline-1 -outline-offset-1 outline-black/10">
            {FOTOS.map((foto, i) => {
              return (
                <div key={foto.pie} className="foto-portada absolute inset-0 overflow-hidden" style={i === 0 ? undefined : { clipPath: 'inset(100% 0% 0% 0%)' }}>
                  <Image src={foto.src} alt={foto.alt} fill sizes="(min-width: 1024px) 25vw, 80vw" className="object-cover" priority={i === 0} placeholder="blur" />
                </div>
              );
            })}
          </div>
          <figcaption className="relative mx-auto mt-4 h-6 w-full max-w-[22rem] text-nota text-suave">
            {FOTOS.map((foto, i) => {
              return (
                <span key={foto.pie} className="pie-portada absolute inset-0" style={i === 0 ? undefined : { opacity: 0 }}>
                  {foto.pie}
                </span>
              );
            })}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
