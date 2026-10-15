'use client';

import { useEffect, useState, type ReactNode } from 'react';

// En pantalla las hojas impresas (láminas de 1280 px, A4 de 794 px) se achican para caber en el ancho;
// al imprimir vuelven a su tamaño (globals.css).
const MARGEN = 32;

type Props = { ancho?: number; className?: string; children: ReactNode };

export const Escalar = ({ ancho = 1280, className = 'laminas', children }: Props) => {
  const [escala, setEscala] = useState(1);

  useEffect(() => {
    const medir = () => setEscala(Math.min(1, (window.innerWidth - MARGEN) / ancho));
    medir();
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, [ancho]);

  return (
    <div className={className} style={{ zoom: escala }}>
      {children}
    </div>
  );
};
