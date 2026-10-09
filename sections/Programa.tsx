'use client';

import { useCallback, useRef, type CSSProperties, type FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { ruta } from '@/lib/ruta';

// El inicio es el programa de la función: una entrada por acto, cada una lleva a su página.
type Acto = { href: string; numero: string; titulo: string; texto: string; foto: string; encuadre?: string; adelanto?: string; giro: number };

const ACTOS: Acto[] = [
  { href: '/clases', numero: 'Primer acto', titulo: 'Clases', texto: 'Grupos desde los 4 años y cómo es una clase por dentro.', foto: ruta('/img/galeria/min/CqWV1EKvQ-n_01.jpg'), giro: -4 },
  { href: '/galeria', numero: 'Segundo acto', titulo: 'Galería', texto: 'Cuatro años de fotos sobre una mesa que puedes recorrer.', foto: ruta('/img/galeria/min/CqWUDCLPVvj_01.jpg'), giro: 3 },
  { href: '/videos', numero: 'Tercer acto', titulo: 'Videos', texto: 'Ensayos, la Gala y la historia de Paulina en un minuto.', foto: ruta('/videos/reel-ensayo.jpg'), adelanto: ruta('/videos/reel-ensayo.mp4'), giro: -2 },
  { href: '/sobre-nosotros', numero: 'Cuarto acto', titulo: 'Nosotros', texto: 'Paulina, su equipo y veinte años enseñando a moverse.', foto: ruta('/img/galeria/min/paulina-copa-2019.jpg'), encuadre: 'object-[50%_25%]', giro: 4 },
];

const Entrada: FC<{ acto: Acto }> = ({ acto }) => {
  const video = useRef<HTMLVideoElement>(null);
  const reproducir = useCallback(() => void video.current?.play().catch(() => undefined), []);
  const pausar = useCallback(() => video.current?.pause(), []);

  return (
    <li className="w-[16.5rem] shrink-0 snap-center lg:w-auto lg:flex-1">
      <Link
        href={acto.href}
        onMouseEnter={reproducir}
        onMouseLeave={pausar}
        onFocus={reproducir}
        onBlur={pausar}
        style={{ '--giro': `${acto.giro}deg` } as CSSProperties}
        className="entrada group block rotate-[var(--giro)] transition-[rotate,translate] duration-500 ease-fidelya hover:-translate-y-3 hover:rotate-0 focus-visible:-translate-y-3 focus-visible:rotate-0 motion-reduce:rotate-0"
      >
        <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl">
          <img src={acto.foto} alt="" loading="lazy" className={cn('absolute inset-0 size-full object-cover', acto.encuadre)} />
          {acto.adelanto && (
            <video ref={video} src={acto.adelanto} muted loop playsInline preload="none" aria-hidden className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
          )}
        </span>
        <span className="block px-2 pb-1 pt-4">
          <span className="block text-[13px] font-semibold text-tenue">{acto.numero}</span>
          <span className="-ml-1 block bg-degradado bg-clip-text px-1 font-script text-[3.4rem] leading-[1.1] text-transparent">{acto.titulo}</span>
          <span className="mt-1 block text-[15px] leading-snug text-suave">{acto.texto}</span>
        </span>
        <span className="entrada-talon mt-4 flex items-center justify-between px-2 pt-3 text-sm font-bold text-magenta">
          Pasar al acto
          <span aria-hidden className="grid size-8 place-items-center rounded-full bg-rosa/10 transition-transform duration-300 ease-fidelya group-hover:translate-x-1">
            ›
          </span>
        </span>
      </Link>
    </li>
  );
};

export const Programa = () => {
  return (
    <section aria-labelledby="programa-titulo" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 id="programa-titulo" className="bg-degradado bg-clip-text font-script text-[clamp(3.5rem,7vw,5.5rem)] leading-[1.1] text-transparent">
          El programa
        </h2>
        <p className="mx-auto mt-2 max-w-md text-entrada text-suave">Cuatro actos. Elige por dónde quieres empezar la función.</p>
      </div>
      <ul className="mx-auto mt-10 flex max-w-6xl snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-10 pt-4 lg:gap-6 lg:overflow-visible lg:px-6">
        {ACTOS.map((acto) => {
          return <Entrada key={acto.href} acto={acto} />;
        })}
      </ul>
    </section>
  );
};
