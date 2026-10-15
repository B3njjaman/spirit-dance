import { TALLER } from '@/data/proyecto';
import { TituloCapitulo } from './TituloCapitulo';

export const TallerProyecto = () => {
  return (
    <section id="taller" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="03" antetitulo="Descripción de la actividad" titulo={<>Taller extraprogramático escolar <span className="degradado-texto">de Cheerdance.</span></>}>
          <p>{TALLER.publico} De carácter formativo a competitivo, con una presentación a fin de año del equipo formativo.</p>
        </TituloCapitulo>

        <ul className="aparecer mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {TALLER.modalidad.map((m) => {
            return (
              <li key={m.unidad} className="vidrio relative overflow-hidden px-5 py-6">
                <span aria-hidden className="absolute -right-6 -top-6 size-24 rounded-full bg-degradado opacity-15 blur-xl" />
                <span className="block bg-degradado bg-clip-text text-6xl font-extrabold leading-none tracking-tight text-transparent">{m.cifra}</span>
                <span className="mt-2 block font-bold text-tinta">{m.unidad}</span>
                <span className="block text-sm text-suave">{m.texto}</span>
              </li>
            );
          })}
        </ul>

        <h3 className="aparecer mt-20 text-2xl font-bold tracking-tight">Tres categorías, solo para niñas</h3>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {TALLER.categorias.map((categoria, i) => {
            return (
              <li key={categoria.nombre} className="aparecer group vidrio overflow-hidden" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={categoria.foto} alt="" loading="lazy" className="size-full object-cover transition-[scale] duration-700 ease-fidelya group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1150]/85 via-[#2a1150]/10 to-transparent" />
                  <p className="absolute bottom-3 left-5 font-script text-6xl leading-none text-white drop-shadow">{categoria.nombre}</p>
                </div>
                <div className="px-5 pb-6 pt-4">
                  <p className="font-bold text-tinta">{categoria.cursos}</p>
                  <p className="font-mono text-xs font-bold text-magenta">{categoria.edades}</p>
                  <p className="mt-3 text-[15px] text-suave">{categoria.foco}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="aparecer mt-14 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
          {TALLER.etapas.map((etapa, i) => {
            return (
              <div key={etapa.nombre} className="contents">
                {i === 1 && (
                  <span aria-hidden className="grid place-items-center text-4xl text-lila md:rotate-0">
                    <span className="rotate-90 md:rotate-0">→</span>
                  </span>
                )}
                <div className={i === 1 ? 'relative overflow-hidden rounded-3xl bg-tinta p-7 text-white shadow-vidrio' : 'vidrio p-7'}>
                  <p className={i === 1 ? 'dorado-texto text-sm font-bold uppercase tracking-[0.18em]' : 'text-sm font-bold uppercase tracking-[0.18em] text-magenta'}>Etapa {i + 1}</p>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight">{etapa.nombre}</p>
                  <p className={i === 1 ? 'mt-2 text-white/75' : 'mt-2 text-suave'}>{etapa.texto}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <div className="aparecer relative overflow-hidden rounded-3xl bg-degradado p-8 text-white shadow-boton sm:p-10">
            <span aria-hidden className="absolute -right-10 -top-16 font-script text-[12rem] leading-none text-white/15">“</span>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Objetivo general</p>
            <p className="relative mt-4 text-xl font-semibold leading-relaxed">{TALLER.objetivoGeneral}</p>
          </div>
          <div className="aparecer">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-magenta">Objetivos específicos</p>
            <ol className="mt-4 grid gap-3">
              {TALLER.objetivosEspecificos.map((objetivo, i) => {
                return (
                  <li key={objetivo} className="flex gap-4 rounded-2xl bg-white/60 p-4 shadow-suave">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-degradado font-mono text-xs font-bold text-white">{i + 1}</span>
                    <span className="text-[15.5px] text-tinta">{objetivo}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
