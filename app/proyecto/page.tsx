import type { Metadata } from 'next';
import { MARTA_BRUNET } from '@/data/proyectos/marta-brunet';
import { Dossier } from '@/sections/proyecto/Dossier';

export const metadata: Metadata = {
  title: 'Proyecto CheerDance Colegio Marta Brunet',
  description:
    'Taller extraprogramático de cheerdance para las alumnas del Colegio Marta Brunet de Macul: categorías Mini, Infantil y Junior, de lo formativo a lo competitivo, con proyección internacional.',
};

const PaginaProyecto = () => {
  return <Dossier proyecto={MARTA_BRUNET} />;
};

export default PaginaProyecto;
