import { Revelar } from '@/components/Revelar';
import type { IdCapitulo, Proyecto } from '@/data/proyecto';
import { AcademiaProyecto, ProfesoraProyecto } from './AcademiaProfesora';
import { ClaseProyecto } from './ClaseProyecto';
import { ColegioProyecto } from './ColegioProyecto';
import { CampeonatosProyecto, MerchProyecto, PropuestaProyecto } from './CompetenciaVenta';
import { CuerpoProyecto } from './CuerpoProyecto';
import { PortadaProyecto } from './PortadaProyecto';
import { TallerProyecto } from './TallerProyecto';
import { HistoriaProyecto, ValoresProyecto } from './ValoresHistoria';
import { ViajesProyecto } from './ViajesProyecto';

type Capitulo = (props: { proyecto: Proyecto }) => React.JSX.Element | null;

const CAPITULOS: Record<IdCapitulo, Capitulo> = {
  academia: AcademiaProyecto,
  profesora: ProfesoraProyecto,
  colegio: ColegioProyecto,
  taller: TallerProyecto,
  cuerpo: CuerpoProyecto,
  clase: ClaseProyecto,
  valores: ValoresProyecto,
  historia: HistoriaProyecto,
  campeonatos: CampeonatosProyecto,
  propuesta: PropuestaProyecto,
  merch: MerchProyecto,
  viajes: ViajesProyecto,
};

// El proyecto se lee como un dossier por capítulos, en el orden de su lista; la misma información va en el PDF descargable.
export const Dossier = ({ proyecto }: { proyecto: Proyecto }) => {
  return (
    <>
      <Revelar />
      <PortadaProyecto proyecto={proyecto} />
      {proyecto.capitulos.map(({ id }) => {
        const Capitulo = CAPITULOS[id];
        return <Capitulo key={id} proyecto={proyecto} />;
      })}
    </>
  );
};
