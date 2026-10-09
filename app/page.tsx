import { Momentos } from '@/sections/Momentos';
import { Portada } from '@/sections/Portada';
import { Programa } from '@/sections/Programa';

// El inicio es corto: el escenario, el programa con un acto por página y fotos de Instagram pasando.
const Inicio = () => {
  return (
    <>
      <Portada />
      <Programa />
      <Momentos />
    </>
  );
};

export default Inicio;
