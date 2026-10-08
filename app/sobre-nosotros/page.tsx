import type { Metadata } from 'next';
import { BailarinaFlotante } from '@/components/BailarinaFlotante';
import { Movimiento } from '@/components/Movimiento';
import { Contacto } from '@/sections/Contacto';
import { Navegacion } from '@/sections/Navegacion';
import { Paulina } from '@/sections/Paulina';

export const metadata: Metadata = {
  title: 'Sobre nosotros · Spirit Dance Academy',
  description: 'La historia de Paulina Quezada, fundadora de Spirit Dance Academy: formación, trayectoria en colegios y universidades, y el video de su recorrido.',
};

const SobreNosotros = () => {
  return (
    <>
      <Movimiento />
      <Navegacion />
      <main>
        <Paulina />
        <Contacto />
      </main>
      <BailarinaFlotante />
    </>
  );
};

export default SobreNosotros;
