import type { Metadata } from 'next';
import { Encabezado } from '@/components/Encabezado';
import { Galeria } from '@/components/Galeria';

export const metadata: Metadata = {
  title: 'Galería',
  description: 'Fotos de clases, del equipo, de la Gala y de las competencias de Spirit Dance Academy y su profesora Paulina Quezada.',
};

const PaginaGaleria = () => {
  return (
    <>
      <Encabezado titulo="Galería">Cuatro años de fotos de su Instagram y las competencias de 2019, tiradas sobre la mesa. Arrástrala para recorrerla y toca una foto para verla en grande.</Encabezado>
      <Galeria />
    </>
  );
};

export default PaginaGaleria;
