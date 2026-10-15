import type { Metadata } from 'next';
import { Revelar } from '@/components/Revelar';
import { ExperienciaPortafolio, FormacionPortafolio, LogrosPortafolio, PortadaPortafolio, ProyectosPortafolio } from '@/sections/portafolio/Portafolio';

export const metadata: Metadata = {
  title: 'Portafolio de Paulina Quezada Sepúlveda',
  description:
    'Portafolio profesional de Paulina Quezada Sepúlveda, profesora de Educación Física especialista en danza y cheerdance: experiencia, logros, proyectos, CV y carta de presentación.',
};

// La página que Paulina comparte con reclutadores: su perfil, logros, experiencia y trabajo, con el CV y la carta en PDF.
const PaginaPortafolio = () => {
  return (
    <>
      <Revelar />
      <PortadaPortafolio />
      <LogrosPortafolio />
      <ExperienciaPortafolio />
      <ProyectosPortafolio />
      <FormacionPortafolio />
    </>
  );
};

export default PaginaPortafolio;
