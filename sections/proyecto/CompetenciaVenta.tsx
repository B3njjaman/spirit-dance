import { MerchIlustracion } from '@/components/MerchIlustracion';
import { ADICIONALES, CAMPEONATOS, COLEGIO, MERCH, PLANES, TEMPORADA } from '@/data/proyecto';
import { cn } from '@/lib/cn';
import { WHATSAPP_PROYECTO } from './PortadaProyecto';
import { TituloCapitulo } from './TituloCapitulo';

export const CampeonatosProyecto = () => {
  return (
    <section id="campeonatos" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="08" antetitulo="Dónde competir" titulo={<>Los campeonatos <span className="degradado-texto">de la temporada.</span></>}>
          <p>El equipo competitivo prepara una coreografía durante el año para competir a nivel nacional. Estos son los escenarios actuales del cheerdance chileno.</p>
        </TituloCapitulo>

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {CAMPEONATOS.map((campeonato) => {
            return (
              <li
                key={campeonato.nombre}
                className={cn('aparecer relative overflow-hidden rounded-3xl p-7', campeonato.destacado ? 'bg-tinta text-white shadow-vidrio md:row-span-2' : 'vidrio')}
              >
                {campeonato.destacado && <span className="sello-dorado mb-4 inline-block rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#3d2a05]">Objetivo principal</span>}
                <p className={cn('text-xs font-bold uppercase tracking-[0.16em]', campeonato.destacado ? 'text-[#f5d27a]' : 'text-magenta')}>{campeonato.organiza}</p>
                <p className={cn('mt-3 font-extrabold tracking-tight', campeonato.destacado ? 'text-4xl' : 'text-2xl text-tinta')}>{campeonato.nombre}</p>
                <dl className={cn('mt-4 grid gap-1 text-sm', campeonato.destacado ? 'text-white/80' : 'text-suave')}>
                  <div className="flex gap-2">
                    <dt className="font-bold">Cuándo:</dt>
                    <dd>{campeonato.cuando}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-bold">Dónde:</dt>
                    <dd>{campeonato.donde}</dd>
                  </div>
                </dl>
                <p className={cn('mt-4 text-[15px]', campeonato.destacado ? 'text-white/75' : 'text-suave')}>{campeonato.detalle}</p>
                <a href={campeonato.href} target="_blank" rel="noreferrer" className={cn('mt-5 inline-block text-sm font-semibold underline underline-offset-4', campeonato.destacado ? 'text-[#f5d27a]' : 'text-magenta decoration-rosa/30')}>
                  Ver fuente
                </a>
              </li>
            );
          })}
        </ul>

        <div className="aparecer mt-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-magenta">Temporada del equipo competitivo</p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {TEMPORADA.map((etapa, i) => {
              return (
                <li key={etapa.mes} className="relative rounded-2xl bg-white/60 p-4 shadow-suave">
                  <span aria-hidden className="absolute inset-x-4 top-0 h-1 rounded-b-full bg-degradado" style={{ opacity: 0.4 + i * 0.12 }} />
                  <p className="font-mono text-sm font-bold text-tinta">{etapa.mes}</p>
                  <p className="mt-1 text-sm text-suave">{etapa.texto}</p>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-nota text-tenue">Fechas y bases se confirman cada temporada con cada organizador.</p>
        </div>
      </div>
    </section>
  );
};

export const PropuestaProyecto = () => {
  return (
    <section id="propuesta" className="scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-[#1c1030] px-5 py-14 sm:px-10 lg:px-14 lg:py-20">
        <div aria-hidden className="absolute -left-24 -top-24 size-96 rounded-full bg-[#9d5cff] opacity-30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -right-24 size-[28rem] rounded-full bg-[#ff4fa3] opacity-25 blur-3xl" />
        <div aria-hidden className="absolute right-10 top-10 size-40 rounded-full bg-[#f5d27a] opacity-20 blur-3xl" />

        <div className="relative">
          <TituloCapitulo numero="09" antetitulo="Propuesta comercial" titulo={<>Esto es una venta: <span className="dorado-texto">un producto para el colegio.</span></>} claro>
            <p>
              El taller formativo es la base. El equipo competitivo es el producto: se contrata aparte, se trabaja una coreografía propia durante todo el año y
              se compite a nivel nacional con el nombre del {COLEGIO.nombre}.
            </p>
          </TituloCapitulo>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {PLANES.map((plan) => {
              return (
                <article
                  key={plan.nombre}
                  className={cn(
                    'aparecer relative rounded-3xl p-7 sm:p-9',
                    plan.venta ? 'bg-gradient-to-br from-[#3a2160] to-[#24123f] text-white ring-2 ring-[#f5d27a]/70 shadow-[0_30px_80px_-30px_rgba(245,210,122,0.55)]' : 'bg-white text-tinta',
                  )}
                >
                  {plan.venta && (
                    <span className="sello-dorado absolute -top-4 left-7 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#3d2a05] shadow-lg">
                      Producto a la venta
                    </span>
                  )}
                  <p className={cn('text-sm font-bold uppercase tracking-[0.16em]', plan.venta ? 'text-[#f5d27a]' : 'text-magenta')}>{plan.bajada}</p>
                  <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{plan.nombre}</h3>
                  <ul className="mt-6 grid gap-3">
                    {plan.incluye.map((item) => {
                      return (
                        <li key={item} className="flex items-start gap-3 text-[15.5px]">
                          <span aria-hidden className={cn('mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[11px] font-bold', plan.venta ? 'sello-dorado text-[#3d2a05]' : 'bg-verde/15 text-verde')}>
                            ✓
                          </span>
                          <span className={plan.venta ? 'text-white/85' : 'text-suave'}>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <p className={cn('mt-7 border-t pt-5 text-sm', plan.venta ? 'border-white/10 text-white/60' : 'border-tinta/10 text-tenue')}>
                    Valor: cotización según número de alumnas y categorías.
                  </p>
                </article>
              );
            })}
          </div>

          <div className="aparecer mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:flex-row lg:items-center">
            <div>
              <p className="font-bold text-white">Se cotiza aparte</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {ADICIONALES.map((adicional) => {
                  return (
                    <li key={adicional} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/75">
                      {adicional}
                    </li>
                  );
                })}
              </ul>
            </div>
            <a href={WHATSAPP_PROYECTO} target="_blank" rel="noreferrer" className="boton sello-dorado shrink-0 text-[#3d2a05] shadow-[0_14px_34px_-12px_rgba(245,210,122,0.8)]">
              Agendar reunión con Paulina
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MerchProyecto = () => {
  return (
    <section id="merch" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="10" antetitulo="Merch del equipo" titulo={<>Vestir los colores <span className="degradado-texto">de Spirit Dance.</span></>}>
          <p>Una línea pequeña para entrenar, competir y viajar. También es parte de la venta: cada pieza se cotiza por separado.</p>
        </TituloCapitulo>
        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {MERCH.map((pieza, i) => {
            return (
              <li key={pieza.id} className="aparecer group vidrio overflow-hidden" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                <div className="bg-[radial-gradient(circle_at_50%_40%,#f6ecff,#fcf8fe_70%)] px-6 pb-2 pt-8 transition-[scale] duration-500 ease-fidelya group-hover:scale-[1.04]">
                  <MerchIlustracion id={pieza.id} nombre={pieza.nombre} />
                </div>
                <div className="px-5 pb-6 pt-3">
                  <p className="font-bold text-tinta">{pieza.nombre}</p>
                  <p className="mt-1 text-sm text-suave">{pieza.texto}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
