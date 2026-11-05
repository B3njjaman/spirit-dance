import type { Metadata } from 'next';
import { MANQUECURA } from '@/data/proyectos/manquecura';
import { Escalar } from '@/sections/proyecto/presentacion/Escalar';
import { Laminas } from '@/sections/proyecto/presentacion/Laminas';

export const metadata: Metadata = {
  title: 'Presentación CheerDance Manquecura Ciudad de los Valles',
  robots: { index: false },
};

// Las láminas del PDF descargable. presentacion/generar-pdf.sh manquecura imprime esta página desde el servidor local.
const PresentacionManquecura = () => {
  return (
    <div className="presentacion">
      <Escalar>
        <Laminas proyecto={MANQUECURA} />
      </Escalar>
    </div>
  );
};

export default PresentacionManquecura;
