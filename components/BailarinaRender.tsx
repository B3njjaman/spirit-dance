'use client';

import { useEffect, useRef, type FC, type MutableRefObject } from 'react';
import { ruta } from '@/lib/ruta';

// Secuencia renderizada en Blender Cycles (render-bailarina/render.py): 41 cuadros de 0° a 60°,
// 1,5° cada uno. El scroll de la portada elige el cuadro, como los sitios de producto de Apple.
const CUADROS = 41;
const GRADOS_POR_CUADRO = 1.5;
const REPOSO = 18;
const GIRO_MAXIMO = 40;
const SUAVIZADO = 0.12;

const archivo = (i: number) => ruta(`/render/giro_${String(i).padStart(3, '0')}.webp`);

type Props = { progreso: MutableRefObject<number> };

export const BailarinaRender: FC<Props> = ({ progreso }) => {
  const lienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = lienzo.current;
    const g = cv?.getContext('2d');
    if (!cv || !g) return;
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const imagenes = Array.from({ length: CUADROS }, (_, i) => {
      const im = new Image();
      im.decoding = 'async';
      im.src = archivo(i);
      return im;
    });

    let angulo = REPOSO;
    let dibujado = -1;
    let pedido = 0;

    const ajustar = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(r.width * dpr);
      cv.height = Math.round(r.height * dpr);
      dibujado = -1;
    };

    const dibujar = (indice: number) => {
      const im = imagenes[indice];
      if (!im.complete || !im.naturalWidth) return false;
      const escala = Math.min(cv.width / im.naturalWidth, cv.height / im.naturalHeight);
      const w = im.naturalWidth * escala;
      const h = im.naturalHeight * escala;
      g.clearRect(0, 0, cv.width, cv.height);
      g.drawImage(im, (cv.width - w) / 2, (cv.height - h) / 2, w, h);
      return true;
    };

    const cuadro = () => {
      const objetivo = reducir ? REPOSO : REPOSO + Math.sin(progreso.current * Math.PI) * GIRO_MAXIMO;
      angulo += (objetivo - angulo) * SUAVIZADO;
      const indice = Math.max(0, Math.min(CUADROS - 1, Math.round(angulo / GRADOS_POR_CUADRO)));
      if (indice !== dibujado && dibujar(indice)) dibujado = indice;
      pedido = requestAnimationFrame(cuadro);
    };

    ajustar();
    const observador = new ResizeObserver(ajustar);
    observador.observe(cv);
    pedido = requestAnimationFrame(cuadro);
    return () => {
      cancelAnimationFrame(pedido);
      observador.disconnect();
    };
  }, [progreso]);

  return <canvas ref={lienzo} aria-hidden className="absolute inset-0 size-full" />;
};
