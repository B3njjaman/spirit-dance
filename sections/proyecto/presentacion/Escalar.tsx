'use client';

import { useEffect, useState, type ReactNode } from 'react';

// En pantalla las láminas se achican para caber en el ancho; al imprimir vuelven a su tamaño (globals.css).
const ANCHO_LAMINA = 1280;
const MARGEN = 32;

export const Escalar = ({ children, ancho = ANCHO_LAMINA }: { children: ReactNode; ancho?: number }) => {
  const [escala, setEscala] = useState(1);

  useEffect(() => {
    const medir = () => setEscala(Math.min(1, (window.innerWidth - MARGEN) / ancho));
    medir();
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, [ancho]);

  return (
    <div className="laminas" style={{ zoom: escala }}>
      {children}
    </div>
  );
};
