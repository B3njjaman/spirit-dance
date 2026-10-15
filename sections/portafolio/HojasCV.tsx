import type { ReactNode } from 'react';
import { COMPETENCIAS, CURSOS, EXPERIENCIA, FORMACION, LOGROS, PERFIL, PERSONA, type Cargo } from '@/data/portafolio';

// El CV en dos hojas A4 con la marca de Spirit Dance. Todo es texto real en una sola columna de lectura, para que los
// sistemas de selección (ATS) lo lean bien; el color y la cursiva son solo adorno.
const CARGOS_PRIMERA_HOJA = 2;

const Banda = () => {
  return <div aria-hidden className="h-[7px] bg-[linear-gradient(90deg,#FF4FA3_0%,#C653F0_55%,#9D5CFF_100%)]" />;
};

const Seccion = ({ titulo, children }: { titulo: string; children: ReactNode }) => {
  return (
    <section className="mt-[14px]">
      <h2 className="flex items-center gap-2.5 text-[13px] font-extrabold uppercase text-[#b0249a]">
        {titulo}
        <span aria-hidden className="h-px flex-1 bg-[linear-gradient(90deg,rgba(198,83,240,0.5),transparent)]" />
      </h2>
      <div className="mt-2">{children}</div>
    </section>
  );
};

const Experiencia = ({ cargo }: { cargo: Cargo }) => {
  return (
    <article className="mt-3 first:mt-0" style={{ breakInside: 'avoid' }}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[13.5px] font-bold leading-snug text-[#2a2140]">{cargo.cargo}</h3>
        <p className="shrink-0 font-mono text-[11px] font-bold text-[#8134c1]">{cargo.periodo}</p>
      </div>
      <p className="text-[12px] font-semibold text-[#b0249a]">{cargo.lugar}</p>
      <ul className="mt-1 grid gap-0.5">
        {cargo.logros.map((logro) => {
          return (
            <li key={logro} className="relative pl-3.5 text-[11.8px] leading-[1.45] text-[#4a4160]">
              <span aria-hidden className="absolute left-0 top-[6px] size-[5px] rounded-full bg-[#c653f0]" />
              {logro}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const PieHoja = ({ numero }: { numero: number }) => {
  return (
    <footer className="absolute inset-x-[15mm] bottom-[9mm] flex items-center justify-between border-t border-[#ece3f7] pt-2 text-[10.5px] text-[#8a819e]">
      <span>
        {PERSONA.nombre} · Portafolio: <a href={`https://${PERSONA.portafolio}/`}>{PERSONA.portafolio}</a>
      </span>
      <span className="font-mono">{numero} / 2</span>
    </footer>
  );
};

const PrimeraHoja = () => {
  return (
    <article className="hoja relative [word-spacing:0.06em]">
      <Banda />
      <div aria-hidden className="absolute -right-24 -top-28 size-[380px] bg-[radial-gradient(closest-side,rgba(220,203,255,0.7),transparent)]" />
      <div aria-hidden className="absolute -left-28 top-10 size-[300px] bg-[radial-gradient(closest-side,rgba(255,196,226,0.55),transparent)]" />
      <div className="relative px-[15mm] pt-[9mm]">
        <header className="flex items-center justify-between gap-6">
          <div>
            <h1 className="font-script text-[54px] leading-[1] text-[#8134c1]">{PERSONA.nombre}</h1>
            <p className="mt-1.5 text-[14px] font-bold uppercase text-[#b0249a]">{PERSONA.titular}</p>
            <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-0.5 text-[11.5px] text-[#4a4160]">
              <div className="flex gap-1.5">
                <dt className="font-bold text-[#2a2140]">Teléfono:</dt>
                <dd>{PERSONA.telefono}</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="font-bold text-[#2a2140]">Correo:</dt>
                <dd>{PERSONA.correo}</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="font-bold text-[#2a2140]">Comuna:</dt>
                <dd>{PERSONA.comuna}</dd>
              </div>
              <div className="flex gap-1.5">
                <dt className="font-bold text-[#2a2140]">LinkedIn:</dt>
                <dd>{PERSONA.linkedin}</dd>
              </div>
              <div className="col-span-2 flex gap-1.5">
                <dt className="font-bold text-[#2a2140]">Portafolio:</dt>
                <dd>
                  <a href={`https://${PERSONA.portafolio}/`} className="text-[#8134c1] underline decoration-[#c653f0]/40 underline-offset-2">
                    {PERSONA.portafolio}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative shrink-0">
            <div aria-hidden className="absolute -inset-[5px] rounded-full bg-[linear-gradient(135deg,#FF4FA3,#C653F0,#9D5CFF)]" />
            <img src={PERSONA.foto} alt="" className="relative size-[118px] rounded-full border-[3px] border-white object-cover object-[50%_12%]" />
          </div>
        </header>

        <Seccion titulo="Perfil profesional">
          <p className="text-[12.3px] leading-[1.5] text-[#4a4160]">{PERFIL}</p>
        </Seccion>

        <Seccion titulo="Logros destacados">
          <ul className="grid gap-1 rounded-2xl bg-[#f6effd] px-4 py-2.5">
            {LOGROS.map((logro) => {
              return (
                <li key={logro} className="relative pl-5 text-[11.8px] leading-[1.45] text-[#2a2140]">
                  <span aria-hidden className="absolute left-0 top-0 text-[12px] text-[#e6268c]">
                    ✦
                  </span>
                  {logro}
                </li>
              );
            })}
          </ul>
        </Seccion>

        <Seccion titulo="Competencias">
          <ul className="flex flex-wrap gap-1.5">
            {COMPETENCIAS.map((competencia) => {
              return (
                <li key={competencia} className="rounded-full border border-[#e3d3f7] bg-white px-2.5 py-[2px] text-[11px] font-semibold text-[#4a3a6a]">
                  {competencia}
                </li>
              );
            })}
          </ul>
        </Seccion>

        <Seccion titulo="Experiencia profesional">
          {EXPERIENCIA.slice(0, CARGOS_PRIMERA_HOJA).map((cargo) => {
            return <Experiencia key={cargo.lugar} cargo={cargo} />;
          })}
        </Seccion>
      </div>
      <PieHoja numero={1} />
    </article>
  );
};

const SegundaHoja = () => {
  return (
    <article className="hoja relative [word-spacing:0.06em]">
      <Banda />
      <div aria-hidden className="absolute -bottom-32 -right-28 size-[380px] bg-[radial-gradient(closest-side,rgba(220,203,255,0.6),transparent)]" />
      <div className="relative px-[15mm] pt-[9mm]">
        <Seccion titulo="Experiencia profesional (continuación)">
          {EXPERIENCIA.slice(CARGOS_PRIMERA_HOJA).map((cargo) => {
            return <Experiencia key={cargo.lugar} cargo={cargo} />;
          })}
        </Seccion>

        <Seccion titulo="Formación">
          <ul className="grid gap-1.5">
            {FORMACION.map((f) => {
              return (
                <li key={f.titulo} className="flex items-baseline justify-between gap-4">
                  <span className="text-[12.3px] text-[#4a4160]">
                    <span className="font-bold text-[#2a2140]">{f.titulo}</span> · {f.lugar}
                  </span>
                  {f.periodo && <span className="shrink-0 font-mono text-[11px] font-bold text-[#8134c1]">{f.periodo}</span>}
                </li>
              );
            })}
          </ul>
        </Seccion>

        <Seccion titulo="Cursos, idiomas y herramientas">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
            {CURSOS.map((curso) => {
              return (
                <li key={curso} className="relative pl-3.5 text-[11.8px] text-[#4a4160]">
                  <span aria-hidden className="absolute left-0 top-[6px] size-[5px] rounded-full bg-[#c653f0]" />
                  {curso}
                </li>
              );
            })}
          </ul>
        </Seccion>

      </div>
      <PieHoja numero={2} />
    </article>
  );
};

export const HojasCV = () => {
  return (
    <>
      <PrimeraHoja />
      <SegundaHoja />
    </>
  );
};
