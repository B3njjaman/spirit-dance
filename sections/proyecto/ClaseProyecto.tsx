import { Giro } from '@/components/Giro';
import { Motion } from '@/components/Motion';
import { ELEMENTOS_TECNICOS, ETAPAS_CLASE, MOTIONS } from '@/data/proyecto';
import { TituloCapitulo } from './TituloCapitulo';

const TONOS = ['#FFB3DA', '#FF7CC0', '#E05BD8', '#C653F0', '#9D5CFF', '#7B4BE0'];
const TOTAL_MINUTOS = ETAPAS_CLASE.reduce((suma, etapa) => suma + etapa.minutos, 0);

export const ClaseProyecto = () => {
  return (
    <section id="clase" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="05" antetitulo="Desarrollo de la clase" titulo={<>{TOTAL_MINUTOS} minutos, <span className="degradado-texto">seis momentos.</span></>}>
          <p>
            Cada clase se trabaja de manera personalizada e inclusiva: la profesora adapta cada ejercicio al nivel de cada niña, para que todas avancen y
            ninguna quede atrás.
          </p>
        </TituloCapitulo>

        <div className="aparecer mt-12">
          <div className="flex h-5 overflow-hidden rounded-full shadow-suave" aria-hidden>
            {ETAPAS_CLASE.map((etapa, i) => {
              return <span key={etapa.nombre} style={{ flexGrow: etapa.minutos, background: TONOS[i] }} />;
            })}
          </div>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ETAPAS_CLASE.map((etapa, i) => {
              return (
                <li key={etapa.nombre} className="vidrio relative overflow-hidden p-6">
                  <span aria-hidden className="absolute inset-y-0 left-0 w-1.5" style={{ background: TONOS[i] }} />
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-mono text-xs font-bold text-tenue">0{i + 1}</p>
                    <p className="font-mono text-xs font-bold text-magenta">{etapa.minutos} min</p>
                  </div>
                  <p className="mt-2 text-lg font-bold text-tinta">{etapa.nombre}</p>
                  <p className="mt-1 text-[15px] text-suave">{etapa.texto}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <h3 className="aparecer mt-20 text-2xl font-bold tracking-tight">Los elementos técnicos</h3>
        <p className="aparecer mt-2 max-w-2xl text-suave">Se trabajan clase a clase, respetando la metodología de enseñanza de cada tipo de elemento.</p>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ELEMENTOS_TECNICOS.map((elemento, i) => {
            return (
              <li key={elemento.nombre} className="aparecer group vidrio overflow-hidden" style={{ transitionDelay: `${(i % 4) * 90}ms` }}>
                <div className="relative grid aspect-square place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_60%,#f3e6ff,#fcf8fe)]">
                  {elemento.giro ? (
                    <Giro className="h-[92%] drop-shadow-[0_18px_20px_rgba(157,92,255,0.35)]" />
                  ) : (
                    <img src={elemento.foto} alt={elemento.alt} loading="lazy" className="size-full object-cover transition-[scale] duration-700 ease-fidelya group-hover:scale-105" />
                  )}
                </div>
                <div className="p-4">
                  <p className="font-bold text-tinta">{elemento.nombre}</p>
                  <p className="mt-1 text-sm text-suave">{elemento.texto}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="aparecer vidrio mt-10 px-6 py-8 sm:px-10">
          <p className="text-center text-sm font-bold uppercase tracking-[0.18em] text-magenta">Motions básicos del cheerdance</p>
          <ul className="mt-6 grid grid-cols-3 gap-y-6 sm:grid-cols-6">
            {MOTIONS.map((motion) => {
              return (
                <li key={motion.nombre}>
                  <Motion {...motion} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
