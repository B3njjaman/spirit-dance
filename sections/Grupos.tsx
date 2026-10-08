import { CONTACTO } from '@/data/contacto';
import { cn } from '@/lib/cn';

// Formato de las tarjetas de planes de fidelya.cl, con lo que se sabe de cada grupo por las publicaciones.
const GRUPOS = [
  {
    nombre: 'Grupo mini',
    etiqueta: 'Desde los 4 años',
    texto: 'El primer contacto con la danza, a través del juego.',
    incluye: ['Juego, ritmo y musicalidad', 'Primeros pasos de danza', 'Coreografía para la Gala'],
    destacado: false,
  },
  {
    nombre: 'Danza infantil',
    etiqueta: 'Desde los 6 años',
    texto: 'Técnica y coreografía para las que ya quieren más.',
    incluye: ['Técnica de danza', 'Elongación', 'Coreografía de grupo', 'Gala de fin de año'],
    destacado: true,
  },
  {
    nombre: 'Dónde y cuándo',
    etiqueta: 'La Florida',
    texto: 'Las clases son en La Araucana, La Florida.',
    incluye: ['Grupos por edad y nivel', 'Horarios según la temporada', 'Dirigida por Paulina Quezada'],
    destacado: false,
  },
];

export const Grupos = () => {
  return (
    <section id="grupos" className="px-4 py-20 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <span className="pastilla">
          <i />
          Grupos
        </span>
        <h2 className="mt-5 text-seccion">
          Un grupo para cada edad, <span className="degradado-texto">sin apurar etapas.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-entrada text-suave">Los horarios y cupos cambian cada temporada. Escríbenos y te contamos los de ahora.</p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
        {GRUPOS.map((g) => {
          return (
            <article key={g.nombre} className={cn('vidrio flex flex-col p-7', g.destacado && 'lg:-translate-y-3 lg:shadow-[0_1px_1px_rgba(80,40,120,.04),0_40px_80px_-30px_rgba(198,83,240,.55)]')}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold">{g.nombre}</h3>
                <span className={cn('rounded-full px-3 py-1 text-xs font-bold', g.destacado ? 'bg-degradado text-white' : 'bg-tinta/5 text-suave')}>{g.etiqueta}</span>
              </div>
              <p className="mt-2 text-suave">{g.texto}</p>
              <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-tenue">Incluye</p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {g.incluye.map((item) => {
                  return (
                    <li key={item} className="check !text-[15px]">
                      {item}
                    </li>
                  );
                })}
              </ul>
              <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className={cn('mt-8 w-full', g.destacado ? 'boton-principal' : 'boton-vidrio')}>
                Consultar cupos
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
