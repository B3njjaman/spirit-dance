import { CONTACTO } from '@/data/contacto';

// Solo respuestas que salen del CV y de las publicaciones de la academia.
const PREGUNTAS = [
  { p: '¿Desde qué edad pueden entrar?', r: 'Desde los 4 años, en el Grupo mini. Desde los 6 pasan a Danza infantil.' },
  { p: '¿Dónde son las clases?', r: 'En La Araucana, La Florida.' },
  { p: '¿Qué días y a qué hora?', r: 'Los horarios cambian cada temporada. Escríbele a Paulina por WhatsApp y te cuenta los de ahora y los cupos que quedan.' },
  { p: '¿Necesita saber bailar?', r: 'No. Los grupos se arman por edad y nivel, y cada programa se adapta a la etapa de desarrollo de las niñas y niños.' },
  { p: '¿Qué es la Gala?', r: 'Es la presentación de fin de año: cada grupo sube al escenario a bailar la coreografía que preparó, frente a sus familias.' },
  { p: '¿Quién hace las clases?', r: 'Paulina Quezada, fundadora de la academia, profesora de Educación Física con más de veinte años de experiencia, junto a su equipo de profesoras.' },
];

export const Preguntas = () => {
  return (
    <section id="preguntas" className="px-4 py-20 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="pastilla">
          <i />
          Preguntas
        </span>
        <h2 className="mt-5 text-seccion">Lo que nos preguntan antes de inscribir</h2>
      </div>
      <div className="vidrio mx-auto mt-10 max-w-3xl divide-y divide-tinta/[0.06] px-5 sm:px-7">
        {PREGUNTAS.map(({ p, r }) => {
          return (
            <details key={p} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[17px] font-bold tracking-tight [&::-webkit-details-marker]:hidden">
                {p}
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-rosa/10 text-lg text-magenta transition-transform duration-300 ease-fidelya group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 pr-12 text-suave">{r}</p>
            </details>
          );
        })}
      </div>
      <p className="mt-6 text-center text-sm text-suave">
        ¿Otra duda?{' '}
        <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className="font-semibold text-magenta underline decoration-rosa/30 underline-offset-4">
          Escríbenos por WhatsApp
        </a>
      </p>
    </section>
  );
};
