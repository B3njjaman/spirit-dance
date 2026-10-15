import type { Metadata } from 'next';
import { Revelar } from '@/components/Revelar';
import { AcademiaProyecto, ProfesoraProyecto } from '@/sections/proyecto/AcademiaProfesora';
import { ClaseProyecto } from '@/sections/proyecto/ClaseProyecto';
import { CampeonatosProyecto, MerchProyecto, PropuestaProyecto } from '@/sections/proyecto/CompetenciaVenta';
import { CuerpoProyecto } from '@/sections/proyecto/CuerpoProyecto';
import { PortadaProyecto } from '@/sections/proyecto/PortadaProyecto';
import { TallerProyecto } from '@/sections/proyecto/TallerProyecto';
import { HistoriaProyecto, ValoresProyecto } from '@/sections/proyecto/ValoresHistoria';
import { ViajesProyecto } from '@/sections/proyecto/ViajesProyecto';

export const metadata: Metadata = {
  title: 'Proyecto CheerDance Colegio Marta Brunet',
  description:
    'Taller extraprogramático de cheerdance para las alumnas del Colegio Marta Brunet de Macul: categorías Mini, Infantil y Junior, de lo formativo a lo competitivo, con proyección internacional.',
};

// El proyecto se lee como un dossier de once capítulos; la misma información va en el PDF descargable.
const PaginaProyecto = () => {
  return (
    <>
      <Revelar />
      <PortadaProyecto />
      <AcademiaProyecto />
      <ProfesoraProyecto />
      <TallerProyecto />
      <CuerpoProyecto />
      <ClaseProyecto />
      <ValoresProyecto />
      <HistoriaProyecto />
      <CampeonatosProyecto />
      <PropuestaProyecto />
      <MerchProyecto />
      <ViajesProyecto />
    </>
  );
};

export default PaginaProyecto;
