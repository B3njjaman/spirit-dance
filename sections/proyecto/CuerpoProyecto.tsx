import { BENEFICIOS, CUALIDADES, ESCULTURA, FUENTES_CUERPO } from '@/data/proyecto';
import { ruta } from '@/lib/ruta';
import { TituloCapitulo } from './TituloCapitulo';

export const CuerpoProyecto = () => {
  return (
    <section id="cuerpo" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="04" antetitulo="Lo que la danza hace en el cuerpo" titulo={<>Cualidades físicas, escultura <span className="degradado-texto">y expresión.</span></>}>
          <p>Cada elemento del cheerdance trabaja una cualidad física, modela la postura y le enseña a las niñas a habitar su cuerpo con seguridad.</p>
        </TituloCapitulo>

        <ul className="aparecer mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {CUALIDADES.map((cualidad) => {
            return (
              <li key={cualidad.nombre}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-lg font-bold text-tinta">{cualidad.nombre}</p>
                  <p className="font-mono text-xs font-bold text-tenue">{cualidad.nivel}%</p>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-lila/10">
                  <div className="barra-cualidad h-full origin-left rounded-full bg-degradado" style={{ width: `${cualidad.nivel}%` }} />
                </div>
                <p className="mt-2 text-[15px] text-suave">{cualidad.texto}</p>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-nota text-tenue">Referencial: cuánto exige el cheerdance cada cualidad.</p>

        <div className="mt-20 grid items-center gap-10 overflow-hidden rounded-[2rem] bg-[#2a1150] p-6 text-white sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div className="aparecer relative">
            <div aria-hidden className="absolute inset-0 -z-0 rounded-full bg-[radial-gradient(closest-side,rgba(198,83,240,0.55),transparent)] blur-2xl" />
            <img src={ruta('/img/galeria/Ccya7v9v4jN_01.jpg')} alt="Alumna haciendo spagat en el salón" loading="lazy" className="relative aspect-square w-full rounded-3xl object-cover" />
          </div>
          <div className="aparecer">
            <p className="dorado-texto text-[13px] font-bold uppercase tracking-[0.18em]">En términos de escultura</p>
            <h3 className="mt-3 text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-tight tracking-tight">{ESCULTURA.titulo}</h3>
            <p className="mt-4 text-white/75">{ESCULTURA.texto}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {ESCULTURA.elementos.map((elemento) => {
                return (
                  <div key={elemento.nombre} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="font-bold text-[#f5d27a]">{elemento.nombre}</dt>
                    <dd className="mt-1 text-sm text-white/75">{elemento.texto}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>

        <h3 className="aparecer mt-20 text-2xl font-bold tracking-tight">Cómo mejora a las niñas</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.map((beneficio, i) => {
            return (
              <li key={beneficio.nombre} className="aparecer vidrio p-6" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                <p className="bg-degradado bg-clip-text text-xl font-extrabold tracking-tight text-transparent">{beneficio.nombre}</p>
                <p className="mt-2 text-[15px] text-suave">{beneficio.texto}</p>
              </li>
            );
          })}
        </ul>

        <details className="mt-8 text-nota text-tenue">
          <summary className="cursor-pointer font-semibold text-suave">Fuentes consultadas</summary>
          <ul className="mt-3 grid gap-1.5">
            {FUENTES_CUERPO.map((fuente) => {
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
