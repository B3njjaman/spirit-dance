import { Historias } from '@/components/Historias';
import { CONTACTO } from '@/data/contacto';

// Grupos y sede según las publicaciones de @academiaspiritdance. Los horarios cambian
// cada temporada, por eso no se publican: se consultan por WhatsApp.
const GRUPOS = [
  {
    nombre: 'Grupo mini',
    edad: 'Desde los 4 años',
    texto: 'Juego, ritmo y los primeros pasos de danza. Cada niña y cada niño aprende a seguir la música y a moverse con otros.',
  },
  {
    nombre: 'Danza infantil',
    edad: 'Desde los 6 años',
    texto: 'Técnica, elongación y coreografía. El grupo prepara durante el año lo que va a bailar en la Gala.',
  },
];

export const Clases = () => {
  return (
    <section id="clases" className="px-6 py-28 sm:px-10 lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_24.75rem] lg:gap-24">
        <div>
          <h2 className="font-display text-seccion">Las clases</h2>
          <p className="mt-6 max-w-xl text-entrada text-suave">
            Los grupos se arman por edad, y en cada clase se combinan el juego, la técnica y la coreografía. El año termina en una Gala sobre el
            escenario, con familia y público.
          </p>

          <dl className="mt-14 border-t border-linea/15">
            {GRUPOS.map((grupo) => {
              return (
                <div key={grupo.nombre} className="grid gap-2 border-b border-linea/15 py-8 sm:grid-cols-[13rem_1fr] sm:gap-8">
                  <dt>
                    <span className="block font-display text-3xl">{grupo.nombre}</span>
                    <span className="mt-1 block text-morado">{grupo.edad}</span>
                  </dt>
                  <dd className="max-w-md text-suave">{grupo.texto}</dd>
                </div>
              );
            })}
            <div className="grid gap-2 py-8 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <dt className="font-display text-3xl">Dónde</dt>
              <dd className="max-w-md text-suave">
                En La Araucana, La Florida. Para conocer los horarios y cupos de esta temporada,{' '}
                <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className="text-morado underline decoration-lavanda decoration-2 underline-offset-4 hover:decoration-morado">
                  escríbele a Paulina
                </a>
                .
              </dd>
            </div>
          </dl>
        </div>

        <div className="-mx-6 sm:-mx-10 lg:mx-0 lg:pt-6">
          <Historias />
          <p className="mt-4 hidden text-nota text-suave lg:block">Toca los lados para avanzar o retroceder; mantén presionado para pausar.</p>
        </div>
      </div>
    </section>
  );
};
