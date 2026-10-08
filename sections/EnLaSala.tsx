import Image from 'next/image';
import { VideoMudo } from '@/components/VideoMudo';
import { SALA, type PiezaSala } from '@/data/videos';

const ALTO_PIEZA_REM = 26;

const Pieza = ({ pieza }: { pieza: PiezaSala }) => {
  const estilo = { width: `${ALTO_PIEZA_REM * pieza.proporcion}rem` };
  if (pieza.tipo === 'video') {
    return (
      <li className="shrink-0 snap-start" style={estilo}>
        <VideoMudo src={pieza.src} poster={pieza.poster} etiqueta={pieza.alt} className="h-[26rem] rounded-2xl" />
      </li>
    );
  }
  return (
    <li className="relative h-[26rem] shrink-0 snap-start overflow-hidden rounded-2xl outline outline-1 -outline-offset-1 outline-black/10" style={estilo}>
      <Image src={pieza.src} alt={pieza.alt} fill sizes="40vw" className="object-cover" />
    </li>
  );
};

export const EnLaSala = () => {
  return (
    <section id="sala" className="py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-display text-seccion">En la sala</h2>
        <p className="mt-6 max-w-xl text-entrada text-suave">Clases, ensayos y la Gala, tal como las comparten en Instagram las alumnas y sus familias.</p>
      </div>
      <ul
        tabIndex={0}
        aria-label="Fotos y videos de la academia"
        className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-6 sm:scroll-px-10 sm:px-10 lg:scroll-px-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))] lg:px-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]"
      >
        {SALA.map((pieza) => {
          return <Pieza key={pieza.src} pieza={pieza} />;
        })}
      </ul>
    </section>
  );
};
