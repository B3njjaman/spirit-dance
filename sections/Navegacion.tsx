'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONTACTO } from '@/data/contacto';
import { cn } from '@/lib/cn';

const ENLACES = [
  { href: '/#clases', texto: 'Clases' },
  { href: '/sobre-nosotros', texto: 'Sobre nosotros' },
  { href: '/#sala', texto: 'En la sala' },
];

export const Navegacion = () => {
  const [conFondo, setConFondo] = useState(false);

  useEffect(() => {
    const alBajar = () => setConFondo(window.scrollY > 24);
    alBajar();
    window.addEventListener('scroll', alBajar, { passive: true });
    return () => window.removeEventListener('scroll', alBajar);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-30 transition-[background-color,box-shadow] duration-300', conFondo && 'bg-papel/85 shadow-[0_1px_0_rgb(var(--linea)/0.08)] backdrop-blur-md')}>
      <nav aria-label="Principal" className="mx-auto flex h-[72px] max-w-[90rem] items-center justify-between px-6 sm:px-10">
        <Link href="/" className="font-display text-xl italic text-morado">
          Spirit Dance Academy
        </Link>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 text-suave md:flex">
            {ENLACES.map((enlace) => {
              return (
                <li key={enlace.href}>
                  <Link href={enlace.href} className="transition-colors duration-150 hover:text-tinta">
                    {enlace.texto}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-morado/30 px-5 py-2.5 text-nota font-medium text-morado transition-[background-color,color,scale] duration-150 ease-out hover:bg-morado hover:text-white active:scale-[0.96]">
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
};
