import { FUENTES_HISTORIA, HISTORIA, TRANSVERSALES, VALORES } from '@/data/proyecto';
import { cn } from '@/lib/cn';
import { TituloCapitulo } from './TituloCapitulo';

export const ValoresProyecto = () => {
  return (
    <section id="valores" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="06" antetitulo="Valores de la academia" titulo={<>Lo que se aprende <span className="degradado-texto">más allá del paso.</span></>} centrado>
          <p>Seis valores guían cada clase de Spirit Dance. Y la disciplina desarrolla habilidades que las niñas llevan a la sala de clases y a la vida.</p>
        </TituloCapitulo>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALORES.map((valor, i) => {
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
            {TRANSVERSALES.map((habilidad, i) => {
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

export const HistoriaProyecto = () => {
  return (
    <section id="historia" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <TituloCapitulo numero="07" antetitulo="Breve historia" titulo={<>El cheerdance <span className="degradado-texto">en Chile.</span></>} centrado>
          <p>De las barras escolares a los mundiales de Orlando: treinta años de un deporte que nació en los colegios.</p>
        </TituloCapitulo>

        <ol className="relative mt-14 before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gradient-to-b before:from-rosa/50 before:via-lila/40 before:to-transparent md:before:left-1/2 md:before:-translate-x-1/2">
          {HISTORIA.map((hito, i) => {
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
