import { BailarinaFlotante } from '@/components/BailarinaFlotante';
import { Movimiento } from '@/components/Movimiento';
import { Cinta } from '@/sections/Cinta';
import { Clases } from '@/sections/Clases';
import { Contacto } from '@/sections/Contacto';
import { Frase } from '@/sections/Frase';
import { Grupos } from '@/sections/Grupos';
import { Navegacion } from '@/sections/Navegacion';
import { Portada } from '@/sections/Portada';
import { Preguntas } from '@/sections/Preguntas';
import { Presentacion } from '@/sections/Presentacion';
import { Videos } from '@/sections/Videos';

// Mismo orden que fidelya.cl: portada, cinta, frase, capítulos, planes, videos, banner, preguntas y cierre.
const Inicio = () => {
  return (
    <>
      <Movimiento />
      <Navegacion />
      <main>
        <Portada />
        <Cinta />
        <Frase />
        <Clases />
        <Grupos />
        <Videos />
        <Presentacion />
        <Preguntas />
        <Contacto />
      </main>
      <BailarinaFlotante />
    </>
  );
};

export default Inicio;
