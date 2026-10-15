import type { Metadata } from 'next';
import { Escalar } from '@/sections/proyecto/presentacion/Escalar';
import { Laminas } from '@/sections/proyecto/presentacion/Laminas';

export const metadata: Metadata = {
  title: 'Presentación CheerDance Colegio Marta Brunet',
  robots: { index: false },
};

// Las láminas del PDF descargable. presentacion/generar-pdf.sh imprime esta página desde el servidor local.
const Presentacion = () => {
  return (
    <div className="presentacion">
      <Escalar>
        <Laminas />
      </Escalar>
    </div>
  );
};

export default Presentacion;
