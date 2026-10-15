import type { Metadata } from 'next';
import { HojasCV } from '@/sections/portafolio/HojasCV';
import { Escalar } from '@/sections/proyecto/presentacion/Escalar';

export const metadata: Metadata = {
  title: 'CV Paulina Quezada Sepúlveda',
  robots: { index: false },
};

// El CV en hojas A4. presentacion/generar-pdf.sh lo imprime a public/portafolio/cv-paulina-quezada.pdf.
const PaginaCV = () => {
  return (
    <div className="presentacion">
      <Escalar ancho={794} className="hojas">
        <HojasCV />
      </Escalar>
    </div>
  );
};

export default PaginaCV;
