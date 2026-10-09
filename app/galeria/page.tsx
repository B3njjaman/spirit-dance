import type { Metadata } from 'next';
import { Encabezado } from '@/components/Encabezado';
import { Galeria } from '@/components/Galeria';

export const metadata: Metadata = {
  title: 'Galería',
  description: 'Fotos de clases, del equipo y de la Gala de Spirit Dance Academy, sacadas de su Instagram.',
};

const PaginaGaleria = () => {
  return (
    <>
      <Encabezado titulo="Galería">Cuatro años de fotos de su Instagram, tiradas sobre la mesa. Arrástrala para recorrerla y toca una foto para verla en grande.</Encabezado>
      <Galeria />
    </>
  );
};

export default PaginaGaleria;
