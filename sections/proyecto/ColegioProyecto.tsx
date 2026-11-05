import { numeroCapitulo, type Proyecto } from '@/data/proyecto';
import { cn } from '@/lib/cn';
import { TituloCapitulo } from './TituloCapitulo';

// Capítulo propio del colegio: el cheer que ya tuvo su red, sus pilares, Salvaguarda y cómo entra la academia.
export const ColegioProyecto = ({ proyecto }: { proyecto: Proyecto }) => {
  const colegio = proyecto.enElColegio;
  if (!colegio) return null;

  return (
    <section id="colegio" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo
          numero={numeroCapitulo(proyecto, 'colegio')}
          antetitulo="El proyecto en el colegio"
          titulo={<>Pensado para <span className="degradado-texto">{colegio.nombre}.</span></>}
        >
          <p>{colegio.intro}</p>
        </TituloCapitulo>

        <h3 className="aparecer mt-14 text-2xl font-bold tracking-tight">{colegio.tituloRed}</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {colegio.red.map((item, i) => {
            return (
              <li
                key={item.colegio}
                className={cn('aparecer relative overflow-hidden rounded-3xl p-7', item.destacado ? 'bg-tinta text-white shadow-vidrio' : 'vidrio')}
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <p className={cn('text-xs font-bold uppercase tracking-[0.16em]', item.destacado ? 'text-[#f5d27a]' : 'text-magenta')}>{item.logro}</p>
                <p className={cn('mt-2 text-2xl font-extrabold tracking-tight', !item.destacado && 'text-tinta')}>{item.colegio}</p>
                <p className={cn('mt-2 text-[15px]', item.destacado ? 'text-white/75' : 'text-suave')}>{item.texto}</p>
              </li>
            );
          })}
        </ul>

        <h3 className="aparecer mt-16 text-2xl font-bold tracking-tight">Sus pilares, en cada clase</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {colegio.pilares.map((pilar, i) => {
            return (
              <li key={pilar.nombre} className="aparecer vidrio relative overflow-hidden p-6" style={{ transitionDelay: `${(i % 4) * 90}ms` }}>
                <span aria-hidden className="text-2xl text-rosa">✦</span>
                <p className="mt-3 text-xl font-extrabold tracking-tight text-tinta">{pilar.nombre}</p>
                <p className="mt-2 text-[15px] text-suave">{pilar.texto}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 grid gap-5 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="aparecer relative overflow-hidden rounded-3xl bg-[#1c1030] p-7 text-white sm:p-9">
            <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full bg-[#9d5cff] opacity-30 blur-3xl" />
            <p className="dorado-texto relative text-sm font-bold uppercase tracking-[0.18em]">Compromisos de Salvaguarda</p>
            <ul className="relative mt-5 grid gap-3">
              {colegio.salvaguarda.map((compromiso) => {
                return (
                  <li key={compromiso} className="flex items-start gap-3 text-[15.5px] text-white/85">
                    <span aria-hidden className="sello-dorado mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[11px] font-bold text-[#3d2a05]">
                      ✓
                    </span>
                    {compromiso}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="aparecer vidrio p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-magenta">Cómo entra en el colegio</p>
            <ul className="mt-5 grid gap-3">
              {colegio.formato.map((paso) => {
                return (
                  <li key={paso} className="check !items-start !text-[15px] !text-tinta">
                    {paso}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="aparecer relative mt-5 overflow-hidden rounded-3xl bg-degradado p-8 text-white shadow-boton sm:p-10">
          <span aria-hidden className="absolute -right-4 -top-8 text-[9rem] leading-none text-white/15">✦</span>
          <p className="relative text-sm font-bold uppercase tracking-[0.18em] text-white/80">{colegio.encuentro.etiqueta}</p>
          <p className="relative mt-3 text-3xl font-extrabold tracking-tight">{colegio.encuentro.nombre}</p>
          <p className="relative mt-3 max-w-3xl text-lg text-white/90">{colegio.encuentro.texto}</p>
        </div>
      </div>
    </section>
  );
};
