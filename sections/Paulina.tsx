import { VideoCapitulos } from '@/components/VideoCapitulos';
import { TRAYECTORIA } from '@/data/trayectoria';

export const Paulina = () => {
  return (
    <section id="paulina" className="px-4 pb-20 pt-28 sm:px-6 lg:pb-28 lg:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="pastilla">
            <i />
            Sobre nosotros
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-portada">
            Paulina Quezada, <span className="degradado-texto">fundadora.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-entrada text-suave">
            Licenciada en Educación y profesora de Educación Física, con un diplomado en Danza Educativa y Expresión Corporal. Trece años en el
            American British School, donde dirigió la Muestra Artística Internacional y la selección de Cheerdance. En 2020 fundó Spirit Dance
            Academy para enseñar danza a niñas y niños desde los 4 años.
          </p>
        </div>

        <div className="vidrio mt-14 p-2 sm:p-3">
          <VideoCapitulos />
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-seccion">
              Su <span className="degradado-texto">trayectoria.</span>
            </h2>
            <p className="mt-4 max-w-sm text-suave">De la UCSH a su propia academia: colegios, universidades, salud pública y cultura comunitaria.</p>
          </div>
          <ol className="vidrio divide-y divide-tinta/[0.06] px-5 sm:px-7">
            {TRAYECTORIA.map((hito) => {
              return (
                <li key={`${hito.periodo}-${hito.cargo}`} className="grid gap-1 py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <span className="font-mono text-[13px] font-bold tabular-nums text-magenta">{hito.periodo}</span>
                  <div>
                    <p className="font-bold tracking-tight">{hito.cargo}</p>
                    <p className="text-[15px] text-suave">{hito.lugar}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
