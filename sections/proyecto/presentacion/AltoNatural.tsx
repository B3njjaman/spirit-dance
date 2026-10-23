'use client';

import { useEffect, useRef, type ReactNode } from 'react';

// Cada página del PDF para celular toma el alto de su contenido: con las fuentes y las fotos ya cargadas se mide
// y recibe una regla @page de ese alto. Así un capítulo nunca se corta ni se reparte en dos páginas.
const ANCHO = 390;

const cargar = (img: HTMLImageElement) => {
  if (img.complete) return Promise.resolve();
  return new Promise<void>((listo) => {
    img.addEventListener('load', () => listo(), { once: true });
    img.addEventListener('error', () => listo(), { once: true });
  });
};

export const AltoNatural = ({ children }: { children: ReactNode }) => {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const estilo = document.createElement('style');
    let vigente = true;

    const medir = async () => {
      const contenedor = raiz.current;
      if (!contenedor) return;
      await document.fonts.ready;
      await Promise.all([...contenedor.querySelectorAll('img')].map(cargar));
      if (!vigente) return;
      const reglas = [...contenedor.querySelectorAll<HTMLElement>('.pagina-movil')].map((pagina, i) => {
        const alto = Math.ceil(pagina.offsetHeight);
        pagina.style.height = `${alto}px`;
        pagina.style.setProperty('page', `pagina-movil-${i}`);
        return `@page pagina-movil-${i} { size: ${ANCHO}px ${alto}px; margin: 0; }`;
      });
      estilo.textContent = reglas.join('\n');
      document.head.appendChild(estilo);
      contenedor.dataset.medido = 'si';
    };

    medir();
    return () => {
      vigente = false;
      estilo.remove();
    };
  }, []);

  return (
    <div ref={raiz} className="contents">
      {children}
    </div>
  );
};
