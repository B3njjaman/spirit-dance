import type { Metadata } from 'next';
import { Encabezado } from '@/components/Encabezado';
import { Clases } from '@/sections/Clases';
import { Grupos } from '@/sections/Grupos';
import { Preguntas } from '@/sections/Preguntas';

export const metadata: Metadata = {
  title: 'Clases',
  description: 'Grupos de danza desde los 4 años en La Florida: cómo es una clase, qué aprende cada grupo y las preguntas frecuentes.',
};

const PaginaClases = () => {
  return (
    <>
      <Encabezado titulo="Clases">Grupos por edad desde los 4 años en La Florida. Mira una clase por dentro, elige grupo y resuelve tus dudas.</Encabezado>
      <Clases />
      <Grupos />
      <Preguntas />
    </>
  );
};

export default PaginaClases;
