import { VideoCapitulos } from '@/components/VideoCapitulos';
import { TRAYECTORIA } from '@/data/trayectoria';

export const Paulina = () => {
  return (
    <section id="paulina" className="bg-superficie px-6 pb-28 pt-40 sm:px-10 lg:pb-40 lg:pt-48">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <h1 className="font-display text-seccion">Paulina Quezada Sepúlveda</h1>
          <div className="space-y-5 text-entrada text-suave lg:pt-3">
            <p>
              Es licenciada en Educación y profesora de Educación Física, con un diplomado en Danza Educativa y Expresión Corporal. Durante trece
              años hizo clases en el American British School, donde dirigió la Muestra Artística Internacional y la selección de Cheerdance.
            </p>
            <p>En 2020 fundó Spirit Dance Academy para enseñar danza a niñas y niños desde los 4 años.</p>
          </div>
        </div>

        <div className="mt-20">
          <VideoCapitulos />
        </div>

        <div className="mt-28 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <h2 className="font-display text-4xl lg:sticky lg:top-28 lg:self-start">Trayectoria</h2>
          <ol>
            {TRAYECTORIA.map((hito) => {
              return (
                <li key={`${hito.periodo}-${hito.cargo}`} className="grid gap-1 border-t border-linea/10 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
                  <span className="font-display text-xl tabular-nums text-morado">{hito.periodo}</span>
                  <div>
                    <p className="font-medium text-tinta">{hito.cargo}</p>
                    <p className="text-suave">{hito.lugar}</p>
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
