'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { gsap } from 'gsap';

// Cambiar de página es cambiar de acto: al tocar un enlace interno el telón se cierra, aparece el
// nombre del acto que viene y se abre ya en la página nueva. Volver con el navegador no lo cierra.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const CERRAR = 0.55;
const ABRIR = 0.9;

const ACTOS: Record<string, string> = {
  '/': 'Inicio',
  '/clases': 'Clases',
  '/galeria': 'Galería',
  '/videos': 'Videos',
  '/sobre-nosotros': 'Nosotros',
};

const sinBase = (ruta: string) => (BASE && ruta.startsWith(BASE) ? ruta.slice(BASE.length) || '/' : ruta);
const normalizar = (ruta: string) => ruta.replace(/\/+$/, '') || '/';

const enlaceInterno = (e: MouseEvent) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  const enlace = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
  if (!enlace || enlace.target === '_blank' || enlace.hasAttribute('download') || enlace.origin !== location.origin) return null;
  if (normalizar(enlace.pathname) === normalizar(location.pathname)) return null;
  return enlace;
};

export const Telon = () => {
  const router = useRouter();
  const ruta = usePathname();
  const telon = useRef<HTMLDivElement>(null);
  const cerrado = useRef(false);
  const [acto, setActo] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const alClic = (e: MouseEvent) => {
      const enlace = enlaceInterno(e);
      if (!enlace) return;
      e.preventDefault();
      e.stopPropagation();
      const destino = sinBase(enlace.pathname) + enlace.search + enlace.hash;
      setActo(ACTOS[normalizar(sinBase(enlace.pathname))] ?? '');
      cerrado.current = true;
      gsap
        .timeline({ onComplete: () => router.push(destino) })
        .set(telon.current, { autoAlpha: 1 })
        .fromTo('.telon-panel', { scaleX: 0 }, { scaleX: 1, duration: CERRAR, ease: 'power3.inOut' })
        .fromTo('.telon-acto', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=0.15');
    };
    document.addEventListener('click', alClic, true);
    return () => document.removeEventListener('click', alClic, true);
  }, [router]);

  useEffect(() => {
    if (!cerrado.current) return;
    cerrado.current = false;
    window.scrollTo(0, 0);
    gsap
      .timeline({ delay: 0.25 })
      .to('.telon-acto', { autoAlpha: 0, y: -8, duration: 0.3, ease: 'power1.in' })
      .to('.telon-panel', { scaleX: 0, duration: ABRIR, ease: 'power3.inOut' }, '-=0.1')
      .set(telon.current, { autoAlpha: 0 });
  }, [ruta]);

  return (
    <div ref={telon} aria-hidden className="pointer-events-none invisible fixed inset-0 z-[80] flex opacity-0">
      <div className="telon-panel h-full flex-1 origin-left" />
      <div className="telon-panel h-full flex-1 origin-right" />
      <p className="telon-acto absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-script text-[clamp(4rem,12vw,8rem)] leading-none text-[#FFE7A8] drop-shadow-[0_0_24px_rgba(255,200,120,0.45)]">
        {acto}
      </p>
    </div>
  );
};
