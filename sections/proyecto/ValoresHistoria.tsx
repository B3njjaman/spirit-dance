import { FUENTES_HISTORIA, historiaDe, numeroCapitulo, type Disciplina, type Proyecto } from '@/data/proyecto';
import { cn } from '@/lib/cn';
import { TituloCapitulo } from './TituloCapitulo';

export const ValoresProyecto = ({ proyecto }: { proyecto: Proyecto }) => {
  return (
    <section id="valores" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo
          numero={numeroCapitulo(proyecto, 'valores')}
          antetitulo="Valores de la academia" titulo={<>Lo que se aprende <span className="degradado-texto">más allá del paso.</span></>} centrado>
          <p>{proyecto.valores.intro}</p>
        </TituloCapitulo>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proyecto.valores.lista.map((valor, i) => {
            return (
              <li key={valor.nombre} className="aparecer vidrio relative overflow-hidden p-7" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                <span aria-hidden className="absolute -right-3 -top-6 font-script text-[6.5rem] leading-none text-lila/10">{valor.nombre[0]}</span>
                <span aria-hidden className="text-2xl text-rosa">✦</span>
                <p className="mt-3 text-xl font-extrabold tracking-tight text-tinta">{valor.nombre}</p>
                <p className="mt-2 text-[15px] text-suave">{valor.texto}</p>
              </li>
            );
          })}
        </ul>

        <div className="aparecer mt-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-magenta">Elementos transversales que desarrolla el cheerdance</p>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {proyecto.valores.transversales.map((habilidad, i) => {
              return (
                <li key={habilidad} className={cn('rounded-full px-4 py-2 text-[15px] font-semibold shadow-suave', i % 3 === 0 ? 'bg-degradado text-white' : 'border border-white/90 bg-white/75 text-tinta')}>
                  {habilidad}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Qué es el cheer dance, antes de la línea de tiempo. Solo en los proyectos que lo explican.
const DisciplinaProyecto = ({ disciplina }: { disciplina: Disciplina }) => {
  return (
    <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="aparecer vidrio p-7 sm:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-magenta">¿Qué es el cheer dance?</p>
        <p className="mt-3 text-lg text-tinta">{disciplina.intro}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {disciplina.estilos.map((estilo) => {
            return (
              <li key={estilo.nombre}>
                <p className="text-lg font-extrabold text-tinta">
                  <span aria-hidden className="text-rosa">✦</span> {estilo.nombre}
                </p>
                <p className="mt-1 text-[15px] text-suave">{estilo.texto}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="aparecer flex flex-col justify-center rounded-[2rem] bg-[#2a1150] p-7 text-white sm:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5d27a]">Un estilo de vida</p>
        <p className="mt-3 text-lg text-white/85">{disciplina.enLosColegios}</p>
      </div>
    </div>
  );
};

export const HistoriaProyecto = ({ proyecto }: { proyecto: Proyecto }) => {
  return (
    <section id="historia" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <TituloCapitulo
          numero={numeroCapitulo(proyecto, 'historia')}
          antetitulo="Breve historia" titulo={<>El cheerdance <span className="degradado-texto">en Chile.</span></>} centrado>
          <p>De las barras escolares a los mundiales de Orlando: treinta años de un deporte que nació en los colegios.</p>
        </TituloCapitulo>

        {proyecto.disciplina && <DisciplinaProyecto disciplina={proyecto.disciplina} />}

        <ol className="relative mt-14 before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gradient-to-b before:from-rosa/50 before:via-lila/40 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
          {historiaDe(proyecto).map((hito, i) => {
            const derecha = i % 2 === 1;
            return (
              <li key={hito.anio} className={cn('aparecer relative pb-10 pl-10 md:w-1/2 md:pl-0', derecha ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right')}>
                <span
                  aria-hidden
                  className={cn('absolute left-0 top-1 size-6 rounded-full border-4 border-papel bg-degradado shadow-boton', derecha ? 'md:-left-3' : 'md:left-auto md:-right-3')}
                />
                <p className="font-mono text-sm font-bold text-magenta">{hito.anio}</p>
                <div className="vidrio mt-2 p-5">
                  <p className="text-lg font-bold text-tinta">{hito.titulo}</p>
                  <p className="mt-1 text-[15px] text-suave">{hito.texto}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <details className="text-nota text-tenue">
          <summary className="cursor-pointer font-semibold text-suave">Fuentes de la historia</summary>
          <ul className="mt-3 grid gap-1.5">
            {FUENTES_HISTORIA.map((fuente) => {
              return (
                <li key={fuente.href}>
                  <a href={fuente.href} target="_blank" rel="noreferrer" className="underline decoration-lila/30 underline-offset-4 hover:text-tinta">
                    {fuente.texto}
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    </section>
  );
};
