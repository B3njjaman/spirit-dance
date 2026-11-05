import type { ReactNode } from 'react';
import type { Proyecto } from '@/data/proyecto';

const enlace = 'font-semibold text-magenta underline underline-offset-4';

// Con versión para celular, cada pantalla descarga la suya: el teléfono sus láminas horizontales y el computador las de 16:9.
export const DescargarPdf = ({ proyecto, children }: { proyecto: Proyecto; children: ReactNode }) => {
  if (!proyecto.pdfMovil) {
    return (
      <a href={proyecto.pdf} download className="boton-principal">
        {children}
        <span aria-hidden>↓</span>
      </a>
    );
  }
  return (
    <>
      <a href={proyecto.pdfMovil} download className="boton-principal md:hidden">
        {children}
        <span aria-hidden>↓</span>
      </a>
      <a href={proyecto.pdf} download className="boton-principal hidden md:inline-flex">
        {children}
        <span aria-hidden>↓</span>
      </a>
    </>
  );
};

// Enlace chico a la versión que no le toca a la pantalla, para quien la quiera igual.
// text-nota va fuera de cn: tailwind-merge confunde los tamaños propios con colores y los borra.
export const OtraVersionPdf = ({ proyecto, className = '' }: { proyecto: Proyecto; className?: string }) => {
  if (!proyecto.pdfMovil) return null;
  return (
    <p className={`text-nota text-suave ${className}`}>
      <span className="md:hidden">
        ¿Lo verás en computador?{' '}
        <a href={proyecto.pdf} download className={enlace}>
          Descarga la versión en láminas
        </a>
      </span>
      <span className="hidden md:inline">
        ¿Lo compartirás por celular?{' '}
        <a href={proyecto.pdfMovil} download className={enlace}>
          Descarga la versión para celular
        </a>
      </span>
    </p>
  );
};
