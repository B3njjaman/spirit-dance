'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ALTO_NAVEGACION = 72;

// El elemento al que apunta el #ancla de la URL. Un hash mal codificado ("#100%") no rompe la página: se busca tal cual.
const anclaDeLaUrl = () => {
  const hash = window.location.hash.slice(1);
  if (!hash) return null;
  try {
    return document.getElementById(decodeURIComponent(hash));
  } catch {
    return document.getElementById(hash);
  }
};

// Scroll suave sincronizado con ScrollTrigger. Las anclas internas usan Lenis
// pero conservan lo nativo: el hash en la URL y el foco en el destino.
export const Movimiento = () => {
  const lenisActual = useRef<Lenis | null>(null);
  const pagina = usePathname();

  // Cada página nueva parte desde arriba, o desde su ancla si el enlace traía una, y vuelve a medir sus animaciones de scroll.
  useEffect(() => {
    ScrollTrigger.refresh();
    const ancla = anclaDeLaUrl();
    const y = ancla ? ancla.getBoundingClientRect().top + window.scrollY - ALTO_NAVEGACION : 0;
    if (lenisActual.current) lenisActual.current.scrollTo(y, { immediate: true });
    else if (ancla) window.scrollTo(0, y);
  }, [pagina]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.1 });
    lenisActual.current = lenis;
    const avanzar = (tiempo: number) => lenis.raf(tiempo * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(avanzar);
    gsap.ticker.lagSmoothing(0);

    const alClic = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const enlace = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
      if (!enlace || !enlace.hash || enlace.pathname !== location.pathname) return;
      const destino = document.querySelector<HTMLElement>(enlace.hash);
      if (!destino) return;
      e.preventDefault();
      e.stopPropagation();
      history.pushState(null, '', enlace.hash);
      lenis.scrollTo(destino, {
        offset: -ALTO_NAVEGACION,
        onComplete: () => {
          if (!destino.hasAttribute('tabindex')) destino.setAttribute('tabindex', '-1');
          destino.focus({ preventScroll: true });
        },
      });
    };
    document.addEventListener('click', alClic, true);

    return () => {
      document.removeEventListener('click', alClic, true);
      gsap.ticker.remove(avanzar);
      lenis.destroy();
      lenisActual.current = null;
    };
  }, []);

  return null;
};
