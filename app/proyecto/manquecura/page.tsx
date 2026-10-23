import type { Metadata } from 'next';
import { MANQUECURA } from '@/data/proyectos/manquecura';
import { Dossier } from '@/sections/proyecto/Dossier';

export const metadata: Metadata = {
  title: 'Proyecto CheerDance Colegios Manquecura',
  description:
    'Academia de cheerdance para estudiantes de 1° básico a IV° medio de los Colegios Manquecura: equipos mixtos en categorías Mini, Youth y Varsity, de lo formativo a lo competitivo, con proyección internacional.',
};

const PaginaManquecura = () => {
  return <Dossier proyecto={MANQUECURA} />;
};

export default PaginaManquecura;
