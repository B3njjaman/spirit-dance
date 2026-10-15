import type { Metadata } from 'next';
import { HojaCarta } from '@/sections/portafolio/HojaCarta';
import { Escalar } from '@/sections/proyecto/presentacion/Escalar';

export const metadata: Metadata = {
  title: 'Carta de presentación Paulina Quezada Sepúlveda',
  robots: { index: false },
};

// La carta en una hoja A4. presentacion/generar-pdf.sh la imprime a public/portafolio/carta-presentacion-paulina-quezada.pdf.
const PaginaCarta = () => {
  return (
    <div className="presentacion">
      <Escalar ancho={794} className="hojas">
        <HojaCarta />
      </Escalar>
    </div>
  );
};

export default PaginaCarta;
