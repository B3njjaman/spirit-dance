import Link from 'next/link';
import { FOTO_COPA, GALERIA } from '@/data/galeria';

// Paulina con la copa del Super Nacional 2019, en grande: es el logro que más queremos mostrar.
// Debajo, otras fotos de esa temporada con la selección del American British School.
const IDS_TEMPORADA = ['copa-super-nacional-2019', 'seleccion-escenario-2019', 'mini-pompones-2019'];
const TEMPORADA = GALERIA.filter((foto) => IDS_TEMPORADA.includes(foto.id));
const GIROS = [-4, 3, -2];

export const Copa = () => {
  return (
    <section aria-labelledby="copa-titulo" className="overflow-hidden px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-[24rem] lg:max-w-none">
          <div aria-hidden className="absolute inset-[-12%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,196,64,0.45),rgba(255,79,163,0.18)_60%,transparent)] blur-2xl" />
          <div className="polaroid !px-3 !pb-5 !pt-3 sm:!px-4 sm:!pt-4 lg:-rotate-2">
            <img src={FOTO_COPA.grande} alt={FOTO_COPA.alt} width={FOTO_COPA.ancho} height={FOTO_COPA.alto} loading="lazy" className="block h-auto w-full rounded-[3px]" />
            <figcaption className="mt-3 px-1 font-script text-[2rem] leading-none text-tinta/75">diciembre de 2019</figcaption>
          </div>
        </figure>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-magenta">Super Nacional 2019 · Bars Classic</p>
          <h2 id="copa-titulo" className="mt-3 text-seccion">
            La copa que llegó <span className="degradado-texto">a la sala.</span>
          </h2>
          <p className="mt-5 max-w-lg text-entrada text-suave">
            En diciembre de 2019 Paulina llevó a la selección de Cheerdance del American British School al Super Nacional de Bars Classic, y volvieron con
            la copa. Fue el cierre de diez años a cargo de la selección; al año siguiente fundó Spirit Dance Academy.
          </p>

          <ul className="mt-10 flex items-end gap-4 sm:gap-6">
            {TEMPORADA.map((foto, i) => {
              return (
                <li key={foto.id} style={{ rotate: `${GIROS[i]}deg` }} className="w-1/3 max-w-[10rem]">
                  <Link href="/galeria" className="polaroid block transition-[scale] duration-300 ease-fidelya hover:scale-105">
                    <img src={foto.miniatura} alt={foto.alt} width={foto.ancho} height={foto.alto} loading="lazy" className="block aspect-[3/4] w-full rounded-[3px] object-cover" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/galeria" className="mt-8 inline-block font-semibold text-magenta underline decoration-rosa/30 underline-offset-4">
            Ver las fotos de competencias en la galería
          </Link>
        </div>
      </div>
    </section>
  );
};
