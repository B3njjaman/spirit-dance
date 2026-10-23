import type { Metadata } from 'next';
import { MANQUECURA } from '@/data/proyectos/manquecura';
import { AltoNatural } from '@/sections/proyecto/presentacion/AltoNatural';
import { DocumentoMovil } from '@/sections/proyecto/presentacion/DocumentoMovil';
import { Escalar } from '@/sections/proyecto/presentacion/Escalar';

export const metadata: Metadata = {
  title: 'Presentación para celular CheerDance Colegios Manquecura',
  robots: { index: false },
};

// El documento del PDF para celular. presentacion/generar-pdf.sh manquecura-movil imprime esta página desde el servidor local.
const PresentacionMovilManquecura = () => {
  return (
    <div className="presentacion">
      <Escalar ancho={390}>
        <AltoNatural>
          <DocumentoMovil proyecto={MANQUECURA} />
        </AltoNatural>
      </Escalar>
    </div>
  );
};

export default PresentacionMovilManquecura;
