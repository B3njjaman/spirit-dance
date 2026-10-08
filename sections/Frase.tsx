'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Cada punto es un año desde 1997, cuando Paulina entró a estudiar Pedagogía; los rosados son años haciendo clases (desde 2004).
const INICIO = 1997;
const PRIMERA_CLASE = 2004;
const HOY = 2026;
const ANIOS = Array.from({ length: HOY - INICIO + 1 }, (_, i) => INICIO + i);

export const Frase = () => {
  const seccion = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.anio-clase',
          { backgroundColor: 'rgba(42,33,64,0.1)', scale: 0.8 },
          {
            backgroundColor: '#FF4FA3',
            scale: 1,
            ease: 'none',
            stagger: 0.05,
            scrollTrigger: { trigger: seccion.current, start: 'top 75%', end: 'center 45%', scrub: 0.8 },
          },
        );
      });
    },
    { scope: seccion },
  );

  return (
    <section ref={seccion} className="px-4 py-24 sm:px-6 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
          <p className="text-cierre">
            Más de veinte años <span className="degradado-texto">enseñando a moverse.</span>
          </p>
          <p className="mt-5 max-w-md text-suave">
            Cada punto es un año desde que Paulina entró a estudiar Pedagogía en 1997. Los rosados son los años que lleva haciendo clases.
          </p>
        </div>
        <ol aria-label={`Años de ${INICIO} a ${HOY}`} className="grid grid-cols-6 gap-3 justify-self-center sm:gap-4">
          {ANIOS.map((anio) => {
            const enseniando = anio >= PRIMERA_CLASE;
            return (
              <li
                key={anio}
                title={String(anio)}
                className={enseniando ? 'anio-clase size-6 rounded-full bg-rosa sm:size-8' : 'size-6 rounded-full bg-tinta/10 sm:size-8'}
              >
                <span className="sr-only">
                  {anio}
                  {enseniando ? ', haciendo clases' : ', estudiando'}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
