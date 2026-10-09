'use client';

import { useEffect, useRef } from 'react';

// Estrellitas que caen despacio sobre la bailarina. Son pocas y chicas: casi todo el tiempo
// se ven tenues y cada tanto una destella con sus cuatro puntas, como brillo de escenario.
const CANTIDAD = 22;
const COLORES = ['198,83,240', '157,92,255', '255,79,163', '245,185,66'];
const VELOCIDAD_MIN = 10;
const VELOCIDAD_MAX = 26;

type Estrella = { x: number; y: number; tamano: number; velocidad: number; fase: number; ritmo: number; vaiven: number; color: string };

const azar = (min: number, max: number) => min + Math.random() * (max - min);

const nueva = (ancho: number, alto: number, enCualquierAltura: boolean): Estrella => ({
  x: azar(0.08, 0.92) * ancho,
  y: enCualquierAltura ? azar(0, alto) : azar(-0.15, 0) * alto,
  tamano: azar(1.6, 3.6),
  velocidad: azar(VELOCIDAD_MIN, VELOCIDAD_MAX),
  fase: azar(0, Math.PI * 2),
  ritmo: azar(0.8, 1.8),
  vaiven: azar(4, 12),
  color: COLORES[Math.floor(Math.random() * COLORES.length)],
});

// Aparece arriba, se apaga al llegar al piso del escenario.
const atenuarPorAltura = (y: number, alto: number) => Math.min(1, y / (alto * 0.12), (alto - y) / (alto * 0.18));

const dibujarEstrella = (g: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, alfa: number, destello: number) => {
  g.fillStyle = `rgba(${color},${alfa})`;
  g.shadowColor = `rgba(${color},${Math.min(1, alfa + 0.2)})`;
  g.shadowBlur = r * 4;
  const largo = r * (2.2 + destello * 2.6);
  g.beginPath();
  g.moveTo(x, y - largo);
  g.quadraticCurveTo(x, y, x + largo, y);
  g.quadraticCurveTo(x, y, x, y + largo);
  g.quadraticCurveTo(x, y, x - largo, y);
  g.quadraticCurveTo(x, y, x, y - largo);
  g.fill();
  g.shadowBlur = 0;
  g.fillStyle = `rgba(255,255,255,${alfa})`;
  g.beginPath();
  g.arc(x, y, r * 0.45, 0, Math.PI * 2);
  g.fill();
};

export const Estrellas = () => {
  const lienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = lienzo.current;
    const g = cv?.getContext('2d');
    if (!cv || !g) return;
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let dpr = 1;
    let estrellas: Estrella[] = [];
    let pedido = 0;
    let anterior = 0;
    let visible = true;

    const ajustar = () => {
      const r = cv.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(r.width * dpr);
      cv.height = Math.round(r.height * dpr);
      estrellas = Array.from({ length: CANTIDAD }, () => nueva(cv.width, cv.height, true));
    };

    const pintar = (t: number) => {
      g.clearRect(0, 0, cv.width, cv.height);
      for (const e of estrellas) {
        const pulso = Math.sin(t * e.ritmo + e.fase);
        const destello = Math.pow(Math.max(0, pulso), 10);
        const alfa = (0.35 + 0.25 * (pulso + 1) * 0.5 + destello * 0.4) * atenuarPorAltura(e.y, cv.height);
        if (alfa <= 0) continue;
        dibujarEstrella(g, e.x + Math.sin(t * 0.6 + e.fase) * e.vaiven * dpr, e.y, e.tamano * dpr, e.color, alfa, destello);
      }
    };

    const cuadro = (ahora: number) => {
      const dt = anterior ? Math.min(0.05, (ahora - anterior) / 1000) : 0;
      anterior = ahora;
      estrellas.forEach((e, i) => {
        e.y += e.velocidad * dpr * dt;
        if (e.y > cv.height) estrellas[i] = nueva(cv.width, cv.height, false);
      });
      pintar(ahora / 1000);
      pedido = visible ? requestAnimationFrame(cuadro) : 0;
    };

    ajustar();
    if (reducir) {
      pintar(0);
      return;
    }

    const observador = new ResizeObserver(ajustar);
    observador.observe(cv);
    const vigia = new IntersectionObserver(([entrada]) => {
      visible = entrada.isIntersecting;
      if (visible && !pedido) {
        anterior = 0;
        pedido = requestAnimationFrame(cuadro);
      }
    });
    vigia.observe(cv);
    pedido = requestAnimationFrame(cuadro);
    return () => {
      cancelAnimationFrame(pedido);
      observador.disconnect();
      vigia.disconnect();
    };
  }, []);

  return <canvas ref={lienzo} aria-hidden className="pointer-events-none absolute inset-0 size-full" />;
};
