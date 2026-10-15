import { ACADEMIA, PROFESORA } from '@/data/proyecto';
import { TituloCapitulo } from './TituloCapitulo';

const GIROS = ['-rotate-3', 'rotate-2', '-rotate-1'];

export const AcademiaProyecto = () => {
  return (
    <section id="academia" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <TituloCapitulo numero="01" antetitulo="Presentación de la academia" titulo={<>Spirit Dance <span className="degradado-texto">Academy.</span></>}>
            <p>{ACADEMIA.objetivo}</p>
            <p className="mt-4">{ACADEMIA.caracter}</p>
          </TituloCapitulo>
          <dl className="aparecer mt-10 grid grid-cols-2 gap-3">
            {ACADEMIA.datos.map((dato) => {
              return (
                <div key={dato.texto} className="vidrio px-5 py-4">
                  <dt className="sr-only">{dato.texto}</dt>
                  <dd>
                    <span className="block bg-degradado bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">{dato.cifra}</span>
                    <span className="mt-1 block text-sm text-suave">{dato.texto}</span>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        <ul className="aparecer grid grid-cols-2 items-start gap-4 self-center sm:gap-6">
          {ACADEMIA.fotos.map((foto, i) => {
            return (
              <li key={foto.src} className={`polaroid ${GIROS[i]} ${i === 0 ? 'col-span-2' : ''}`}>
                <img src={foto.src} alt={foto.alt} loading="lazy" className={`block w-full rounded-[3px] object-cover ${i === 0 ? 'aspect-[16/10]' : 'aspect-[4/5]'}`} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export const ProfesoraProyecto = () => {
  return (
    <section id="profesora" className="scroll-mt-20 overflow-x-clip px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <figure className="aparecer relative mx-auto w-full max-w-[22rem] lg:sticky lg:top-28">
          <div aria-hidden className="absolute inset-[-12%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,196,64,0.45),rgba(255,79,163,0.18)_60%,transparent)] blur-2xl" />
          <div className="polaroid !px-3 !pb-5 !pt-3 -rotate-2">
            <img src={PROFESORA.foto} alt="Paulina Quezada con la copa del Super Nacional 2019" loading="lazy" className="block aspect-[4/5] w-full rounded-[3px] object-cover" />
            <figcaption className="mt-3 px-1 font-script text-[2rem] leading-none text-tinta/75">Paulina Quezada</figcaption>
          </div>
        </figure>

        <div>
          <TituloCapitulo numero="02" antetitulo="Profesional a cargo" titulo={<>Paulina Quezada <span className="degradado-texto">Sepúlveda.</span></>}>
            <p>
              {PROFESORA.cargo}. Más de 25 años enseñando danza y diez años al frente de una selección escolar de Cheerdance: sabe formar equipos en un colegio y
              llevarlos a competir.
            </p>
          </TituloCapitulo>
          <ul className="aparecer mt-8 grid gap-2.5 sm:grid-cols-2">
            {PROFESORA.titulos.map((titulo) => {
              return (
                <li key={titulo} className="check !items-start !text-[15px] !text-tinta">
                  {titulo}
                </li>
              );
            })}
          </ul>
          <ol className="aparecer mt-10 border-l-2 border-lila/20 pl-6">
            {PROFESORA.hitos.map((hito) => {
              return (
                <li key={hito.texto} className="relative pb-6 last:pb-0">
                  <span aria-hidden className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-degradado ring-4 ring-papel" />
                  <p className="font-mono text-xs font-bold text-magenta">{hito.periodo}</p>
                  <p className="mt-1 text-[15.5px] text-tinta">{hito.texto}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
