import type { Metadata } from 'next';
import { MANQUECURA } from '@/data/proyectos/manquecura';
import { Dossier } from '@/sections/proyecto/Dossier';

export const metadata: Metadata = {
  title: 'Proyecto CheerDance Manquecura Ciudad de los Valles',
  description:
    'Rama de cheer dance para el Manquecura Ciudad de los Valles: talleres formativos desde playgroup y una selección por audición, en equipos mixtos, con proyección internacional.',
};

const PaginaManquecura = () => {
  return <Dossier proyecto={MANQUECURA} />;
};

export default PaginaManquecura;
