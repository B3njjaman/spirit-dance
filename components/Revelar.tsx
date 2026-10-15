'use client';

import { useEffect } from 'react';

// Hace entrar los bloques marcados con .aparecer cuando llegan a la pantalla. Sin JavaScript, o con movimiento
// reducido, quedan visibles desde el principio: solo se ocultan cuando html tiene data-revelar.
export const Revelar = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const raiz = document.documentElement;
    const bloques = document.querySelectorAll<HTMLElement>('.aparecer');
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px' },
    );
    raiz.setAttribute('data-revelar', '');
    bloques.forEach((bloque) => observador.observe(bloque));
    return () => {
      observador.disconnect();
      raiz.removeAttribute('data-revelar');
    };
  }, []);

  return null;
};
