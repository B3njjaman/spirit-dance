import { Estrellas } from '@/components/Estrellas';
import { CONTACTO_ACADEMIA } from '@/data/academia';
import { CAPITULOS, COLEGIO, PDF_PROYECTO } from '@/data/proyecto';
import { ruta } from '@/lib/ruta';

export const WHATSAPP_PROYECTO = `https://wa.me/${CONTACTO_ACADEMIA.whatsapp}?text=${encodeURIComponent(
  `Hola Paulina, vi el proyecto de CheerDance para el ${COLEGIO.nombre} y quiero agendar una reunión.`,
)}`;

const COLLAGE = [
  { src: ruta('/img/galeria/copa-super-nacional-2019.jpg'), alt: 'La copa del Super Nacional 2019 entre las alumnas', clase: 'left-0 top-6 w-[46%] -rotate-6' },
  { src: ruta('/img/galeria/mini-pompones-2019.jpg'), alt: 'Las más chicas con pompones fucsia', clase: 'right-0 top-0 w-[44%] rotate-[5deg]' },
  { src: ruta('/img/galeria/selecciones-cancha-2019.jpg'), alt: 'Las selecciones juntas en la cancha', clase: 'bottom-0 left-[18%] w-[62%] rotate-2' },
];

export const PortadaProyecto = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:pb-20 lg:pt-36">
      <div aria-hidden className="absolute -left-32 top-10 size-[28rem] rounded-full bg-[#FFC4E2] opacity-50 blur-3xl" />
      <div aria-hidden className="absolute -right-40 top-40 size-[30rem] rounded-full bg-[#DCCBFF] opacity-60 blur-3xl" />
      <div aria-hidden className="absolute inset-x-0 top-10 mx-auto h-[70%] max-w-4xl">
        <Estrellas />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <span className="pastilla">
            <i />
            Proyecto · {COLEGIO.comuna}
          </span>
          <h1 className="mt-6">
            <span className="block bg-degradado bg-clip-text pb-2 font-script text-[clamp(4.5rem,12vw,9rem)] leading-[0.95] text-transparent">CheerDance</span>
            <span className="mt-1 block text-portada">{COLEGIO.nombre}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-entrada text-suave lg:mx-0">
            Taller extraprogramático de cheerdance para las alumnas del colegio, de preescolar a 8° básico. Parte formativo, termina en el escenario y abre
            la puerta a competir en todo Chile, y más allá.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-2.5 sm:flex-row lg:justify-start">
            <a href={PDF_PROYECTO} download className="boton-principal">
              Descargar presentación PDF
              <span aria-hidden>↓</span>
            </a>
            <a href={WHATSAPP_PROYECTO} target="_blank" rel="noreferrer" className="boton-vidrio">
              Agendar reunión
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[1/1] w-full max-w-[30rem]">
          {COLLAGE.map((foto) => {
            return (
              <figure key={foto.src} className={`polaroid absolute ${foto.clase}`}>
                <img src={foto.src} alt={foto.alt} className="block aspect-[4/5] w-full rounded-[3px] object-cover" />
              </figure>
            );
          })}
          <img
            src={ruta('/img/proyecto/logo-dorado.png')}
            alt="Logo dorado de Spirit Dance Academy"
            className="absolute -bottom-6 -right-4 w-[34%] animate-flotar drop-shadow-[0_18px_24px_rgba(184,134,43,0.45)]"
          />
        </div>
      </div>

      <nav aria-label="Capítulos del proyecto" className="relative mx-auto mt-16 max-w-6xl">
        <ol className="flex flex-wrap justify-center gap-2">
          {CAPITULOS.map((capitulo) => {
            return (
              <li key={capitulo.id}>
                <a
                  href={`#${capitulo.id}`}
                  className="flex h-10 items-center gap-2 rounded-full border border-white/90 bg-white/70 pl-1.5 pr-4 text-sm font-semibold text-suave shadow-suave transition-colors duration-150 hover:text-tinta"
                >
                  <span className="grid h-7 min-w-7 place-items-center rounded-full bg-degradado px-1.5 font-mono text-[11px] font-bold text-white">{capitulo.numero}</span>
                  {capitulo.titulo}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
};
