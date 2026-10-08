import { Movimiento } from '@/components/Movimiento';
import { Clases } from '@/sections/Clases';
import { Contacto } from '@/sections/Contacto';
import { EnLaSala } from '@/sections/EnLaSala';
import { Navegacion } from '@/sections/Navegacion';
import { Portada } from '@/sections/Portada';
import { Presentacion } from '@/sections/Presentacion';

const Inicio = () => {
  return (
    <>
      <Movimiento />
      <Navegacion />
      <main>
        <Portada />
        <Clases />
        <Presentacion />
        <EnLaSala />
        <Contacto />
      </main>
    </>
  );
};

export default Inicio;
