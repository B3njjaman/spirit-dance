import type { Metadata } from 'next';
import { Encabezado } from '@/components/Encabezado';
import { Videos } from '@/sections/Videos';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'Clases, ensayos, la Gala y la historia de Paulina Quezada en videos cortos.',
};

const PaginaVideos = () => {
  return (
    <>
      <Encabezado titulo="Videos">Clases, ensayos, la Gala y la historia de Paulina, en menos de un minuto cada uno.</Encabezado>
      <Videos />
    </>
  );
};

export default PaginaVideos;
