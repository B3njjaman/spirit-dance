import { VideoCapitulos } from '@/components/VideoCapitulos';
import { TRAYECTORIA } from '@/data/trayectoria';

export const Paulina = () => {
  return (
    <section id="paulina" className="px-4 pb-20 sm:px-6 lg:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="vidrio p-2 sm:p-3">
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
