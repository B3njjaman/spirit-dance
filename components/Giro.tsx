'use client';

import { useEffect, useState } from 'react';
import { ruta } from '@/lib/ruta';
import { cn } from '@/lib/cn';

// La bailarina del render girando en su eje: una pirueta en bucle. Con movimiento reducido queda quieta.
const CUADROS = 41;
const CUADRO_QUIETO = 12;
const MS_POR_CUADRO = 55;

const cuadro = (n: number) => ruta(`/render/giro_${String(n).padStart(3, '0')}.webp`);

export const Giro = ({ className }: { className?: string }) => {
  const [actual, setActual] = useState(CUADRO_QUIETO);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Array.from({ length: CUADROS }, (_, n) => (new Image().src = cuadro(n)));
    const reloj = window.setInterval(() => setActual((n) => (n + 1) % CUADROS), MS_POR_CUADRO);
    return () => window.clearInterval(reloj);
  }, []);

  return <img src={cuadro(actual)} alt="Bailarina girando una pirueta" width={597} height={900} className={cn('h-full w-auto object-contain', className)} />;
};
