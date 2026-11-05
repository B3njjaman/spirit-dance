import type { Metadata } from 'next';
import { MANQUECURA } from '@/data/proyectos/manquecura';
import { Escalar } from '@/sections/proyecto/presentacion/Escalar';
import { LaminasMovil } from '@/sections/proyecto/presentacion/LaminasMovil';

export const metadata: Metadata = {
  title: 'Presentación para celular CheerDance Manquecura Ciudad de los Valles',
  robots: { index: false },
};

// Las láminas horizontales del PDF para celular. presentacion/generar-pdf.sh manquecura-movil imprime esta página desde el servidor local.
const PresentacionMovilManquecura = () => {
  return (
    <div className="presentacion">
      <Escalar ancho={844}>
        <LaminasMovil proyecto={MANQUECURA} />
      </Escalar>
    </div>
  );
};

export default PresentacionMovilManquecura;
