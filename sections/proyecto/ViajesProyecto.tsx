import { CREDITOS_FOTOS, DESTINOS, PDF_PROYECTO, RUTA_INTERNACIONAL } from '@/data/proyecto';
import { ruta } from '@/lib/ruta';
import { TituloCapitulo } from './TituloCapitulo';

export const ViajesProyecto = () => {
  return (
    <section id="viajes" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="11" antetitulo="Proyección internacional" titulo={<>Próxima parada: <span className="degradado-texto">Disney.</span></>}>
          <p>Los grandes campeonatos de cheer y danza del mundo se compiten dentro de Walt Disney World, en Orlando. Es la meta del equipo competitivo.</p>
        </TituloCapitulo>

        <figure className="aparecer relative mt-12 overflow-hidden rounded-[2rem] shadow-vidrio">
          <img src={ruta('/img/proyecto/worlds-2019.jpg')} alt="Equipo campeón celebrando con serpentinas doradas en The Cheerleading Worlds 2019" loading="lazy" className="aspect-[16/10] w-full object-cover sm:aspect-[21/9]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1030]/90 via-[#1c1030]/20 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="font-script text-[clamp(2.75rem,7vw,5.5rem)] leading-none text-white">Orlando, Florida</p>
            <p className="mt-2 max-w-xl text-white/80">The Cheerleading Worlds 2019, en el ESPN Wide World of Sports de Disney.</p>
          </figcaption>
        </figure>

        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {DESTINOS.map((destino, i) => {
            return (
              <li key={destino.nombre} className="aparecer vidrio overflow-hidden" style={{ transitionDelay: `${i * 110}ms` }}>
                <img src={destino.foto} alt={destino.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-6">
                  <p className="font-mono text-xs font-bold text-magenta">
                    {destino.cuando} · {destino.lugar}
                  </p>
                  <p className="mt-2 text-xl font-extrabold tracking-tight text-tinta">{destino.nombre}</p>
                  <p className="mt-2 text-[15px] text-suave">{destino.texto}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <ol className="aparecer mt-14 grid gap-4 md:grid-cols-3">
          {RUTA_INTERNACIONAL.map((paso, i) => {
            return (
              <li key={paso.anio} className="relative rounded-3xl bg-white/60 p-6 shadow-suave">
                <p className="bg-degradado bg-clip-text font-script text-5xl leading-none text-transparent">{paso.anio}</p>
                <p className="mt-3 text-lg font-bold text-tinta">{paso.titulo}</p>
                <p className="mt-1 text-[15px] text-suave">{paso.texto}</p>
                {i < RUTA_INTERNACIONAL.length - 1 && (
                  <span aria-hidden className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-lila md:block">
                    →
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <div className="aparecer mt-16 text-center">
          <a href={PDF_PROYECTO} download className="boton-principal">
            Descargar el proyecto en PDF
            <span aria-hidden>↓</span>
          </a>
        </div>

        <p className="mt-10 text-center text-xs text-tenue">Fotos de Orlando: {CREDITOS_FOTOS.join(' · ')}</p>
      </div>
    </section>
  );
};
