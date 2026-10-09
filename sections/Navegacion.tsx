'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACTO } from '@/data/contacto';
import { cn } from '@/lib/cn';

const ENLACES = [
  { href: '/clases', texto: 'Clases' },
  { href: '/galeria', texto: 'Galería' },
  { href: '/videos', texto: 'Videos' },
  { href: '/sobre-nosotros', texto: 'Nosotros' },
];

const esActual = (pagina: string, href: string) => pagina.replace(/\/+$/, '') === href;

const Marca = () => {
  return (
    <Link href="/" className="flex items-baseline gap-1.5">
      <span className="-ml-1 bg-degradado bg-clip-text px-1 font-script text-[34px] leading-none text-transparent lg:text-[38px]">Spirit Dance</span>
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-suave">Academy</span>
    </Link>
  );
};

export const Navegacion = () => {
  const [conFondo, setConFondo] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const pagina = usePathname();

  useEffect(() => {
    const alBajar = () => setConFondo(window.scrollY > 24);
    alBajar();
    window.addEventListener('scroll', alBajar, { passive: true });
    return () => window.removeEventListener('scroll', alBajar);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const alTecla = (e: KeyboardEvent) => e.key === 'Escape' && setAbierto(false);
    window.addEventListener('keydown', alTecla);
    return () => window.removeEventListener('keydown', alTecla);
  }, [abierto]);

  const alternar = useCallback(() => setAbierto((a) => !a), []);
  const cerrar = useCallback(() => setAbierto(false), []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300', (conFondo || abierto) && 'bg-papel/80 shadow-[0_1px_0_rgba(42,33,64,0.06)] backdrop-blur-xl')}>
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-[72px]">
        <Marca />
        <ul className="hidden items-center gap-7 text-sm font-medium text-suave lg:flex">
          {ENLACES.map((enlace) => {
            return (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  aria-current={esActual(pagina, enlace.href) ? 'page' : undefined}
                  className="relative transition-colors duration-150 hover:text-tinta aria-[current=page]:font-bold aria-[current=page]:text-tinta aria-[current=page]:after:absolute aria-[current=page]:after:-bottom-2 aria-[current=page]:after:left-1/2 aria-[current=page]:after:size-1.5 aria-[current=page]:after:-translate-x-1/2 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-rosa"
                >
                  {enlace.texto}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={CONTACTO.instagram} target="_blank" rel="noreferrer" className="text-sm font-semibold text-tinta">
            Instagram
          </a>
          <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className="boton-principal !h-10 !px-5 !text-sm">
            Inscribir
          </a>
        </div>
        <button
          type="button"
          onClick={alternar}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          className="grid size-11 place-items-center rounded-2xl border border-white/90 bg-white/80 shadow-suave transition-[scale] duration-150 active:scale-[0.96] lg:hidden"
        >
          <span aria-hidden className="relative block h-3 w-4">
            <span className={cn('absolute inset-x-0 top-0 h-0.5 rounded-full bg-tinta transition-transform duration-300', abierto && 'translate-y-[5px] rotate-45')} />
            <span className={cn('absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-tinta transition-transform duration-300', abierto && '-translate-y-[5px] -rotate-45')} />
          </span>
        </button>
      </nav>

      <div id="menu-movil" hidden={!abierto} className="px-4 pb-5 lg:hidden">
        <div className="vidrio p-3">
          <ul className="flex flex-col">
            {ENLACES.map((enlace) => {
              return (
                <li key={enlace.href}>
                  <Link
                    href={enlace.href}
                    onClick={cerrar}
                    aria-current={esActual(pagina, enlace.href) ? 'page' : undefined}
                    className="flex h-12 items-center rounded-2xl px-4 text-[17px] font-semibold text-tinta active:bg-white aria-[current=page]:bg-white/80 aria-[current=page]:text-magenta"
                  >
                    {enlace.texto}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className="boton-principal mt-3 w-full">
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};
