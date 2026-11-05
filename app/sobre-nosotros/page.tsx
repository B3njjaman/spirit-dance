import type { Metadata } from 'next';
import { Encabezado } from '@/components/Encabezado';
import { Copa } from '@/sections/Copa';
import { Cinta } from '@/sections/Cinta';
import { Frase } from '@/sections/Frase';
import { Paulina } from '@/sections/Paulina';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'La historia de Paulina Quezada, fundadora de Spirit Dance Academy: formación, trayectoria en colegios y universidades, y el video de su recorrido.',
};

const SobreNosotros = () => {
  return (
    <>
      <Encabezado titulo="Nosotros">
        Paulina Quezada es licenciada en Educación y profesora de Educación Física, con un diplomado en Danza Educativa y Expresión Corporal. Trece años
        en el American British School a cargo de la rama de Cheerdance, entrenadora de la Selección Nacional de Dance y, desde 2020, fundadora de
        Spirit Dance Academy.
      </Encabezado>
      <Copa />
      <Paulina />
      <Frase />
      <Cinta />
    </>
  );
};

export default SobreNosotros;
