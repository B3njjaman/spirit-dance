import { CARTA, PERSONA } from '@/data/portafolio';
import { ruta } from '@/lib/ruta';

// La carta de presentación en una hoja A4, con el mismo membrete que el CV.
export const HojaCarta = () => {
  return (
    <article className="hoja relative [word-spacing:0.06em]">
      <div aria-hidden className="h-[7px] bg-[linear-gradient(90deg,#FF4FA3_0%,#C653F0_55%,#9D5CFF_100%)]" />
      <div aria-hidden className="absolute -right-24 -top-28 size-[360px] bg-[radial-gradient(closest-side,rgba(220,203,255,0.7),transparent)]" />
      <div aria-hidden className="absolute -bottom-32 -left-28 size-[340px] bg-[radial-gradient(closest-side,rgba(255,196,226,0.5),transparent)]" />

      <div className="relative flex h-[calc(297mm-7px)] flex-col px-[20mm] pb-[12mm] pt-[12mm]">
        <header className="flex items-start justify-between gap-6 border-b border-[#ece3f7] pb-4">
          <div>
            <p className="font-script text-[44px] leading-[1] text-[#8134c1]">{PERSONA.nombre}</p>
            <p className="mt-1 text-[12.5px] font-bold uppercase text-[#b0249a]">{PERSONA.titular}</p>
          </div>
          <div className="shrink-0 whitespace-nowrap text-right text-[11px] leading-[1.6] text-[#4a4160]">
            <p>{PERSONA.telefono}</p>
            <p>{PERSONA.correo}</p>
            <p>{PERSONA.comuna}</p>
          </div>
        </header>

        <div className="mt-7 text-[13px] leading-[1.65] text-[#2a2140]">
          <p className="text-right text-[#4a4160]">{CARTA.fecha}</p>
          <p className="mt-5">
            {CARTA.destinatario.map((linea) => {
              return (
                <span key={linea} className="block font-semibold">
                  {linea}
                </span>
              );
            })}
          </p>
          <p className="mt-5">{CARTA.saludo}</p>
          {CARTA.parrafos.map((parrafo) => {
            return (
              <p key={parrafo.slice(0, 24)} className="mt-3.5 text-justify [hyphens:auto]">
                {parrafo}
              </p>
            );
          })}
          <p className="mt-6">{CARTA.despedida}</p>
          <p className="mt-3 font-script text-[38px] leading-none text-[#8134c1]">Paulina Quezada</p>
          <p className="mt-1 font-bold">{PERSONA.nombre}</p>
          <p className="text-[12px] text-[#4a4160]">{PERSONA.titular}</p>
        </div>

        <footer className="mt-auto flex items-center gap-3 rounded-2xl bg-[#f6effd] px-4 py-2.5 text-[11.5px] text-[#4a4160]">
          <img src={ruta('/render/giro_012.webp')} alt="" className="h-[40px] w-auto" />
          <span>
            Portafolio con fotos, videos y proyectos:{' '}
            <a href={`https://${PERSONA.portafolio}/`} className="font-bold text-[#8134c1] underline underline-offset-2">
              {PERSONA.portafolio}
            </a>
          </span>
        </footer>
      </div>
    </article>
  );
};
