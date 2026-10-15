import Link from 'next/link';
import { Estrellas } from '@/components/Estrellas';
import { CIFRAS, COMPETENCIAS, CURSOS, DESCARGAS, EXPERIENCIA, FORMACION, LOGROS, PERFIL, PERSONA, PROYECTOS } from '@/data/portafolio';
import { TituloCapitulo } from '@/sections/proyecto/TituloCapitulo';

const WHATSAPP = `https://wa.me/${PERSONA.whatsapp}?text=${encodeURIComponent('Hola Paulina, vi tu portafolio y me gustaría conversar contigo.')}`;

export const PortadaPortafolio = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:pb-24 lg:pt-36">
      <div aria-hidden className="absolute -left-32 top-10 size-[28rem] rounded-full bg-[#FFC4E2] opacity-50 blur-3xl" />
      <div aria-hidden className="absolute -right-40 top-40 size-[30rem] rounded-full bg-[#DCCBFF] opacity-60 blur-3xl" />
      <div aria-hidden className="absolute inset-x-0 top-10 mx-auto h-[70%] max-w-4xl">
        <Estrellas />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <span className="pastilla">
            <i />
            Portafolio profesional
          </span>
          <h1 className="mt-6">
            <span className="block bg-degradado bg-clip-text pb-2 font-script text-[clamp(3.75rem,9vw,7rem)] leading-[0.95] text-transparent">Paulina Quezada</span>
            <span className="mt-1 block text-portada">Sepúlveda</span>
          </h1>
          <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-magenta">{PERSONA.titular}</p>
          <p className="mx-auto mt-5 max-w-xl text-entrada text-suave lg:mx-0">{PERFIL}</p>
          <div className="mt-8 flex flex-col justify-center gap-2.5 sm:flex-row sm:flex-wrap lg:justify-start">
            <a href={DESCARGAS.cv} download className="boton-principal">
              Descargar CV
              <span aria-hidden>↓</span>
            </a>
            <a href={DESCARGAS.carta} download className="boton-vidrio">
              Carta de presentación
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="boton-vidrio">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[24rem]">
          <div aria-hidden className="absolute inset-[-12%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(255,196,64,0.45),rgba(255,79,163,0.18)_60%,transparent)] blur-2xl" />
          <figure className="polaroid !px-3 !pb-5 !pt-3 -rotate-2">
            <img src={PERSONA.foto} alt="Paulina Quezada con la copa del Super Nacional 2019" className="block aspect-[4/5] w-full rounded-[3px] object-cover" />
            <figcaption className="mt-3 px-1 font-script text-[2rem] leading-none text-tinta/75">Super Nacional 2019</figcaption>
          </figure>
        </div>
      </div>

      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4">
        {CIFRAS.map((dato) => {
          return (
            <div key={dato.texto} className="vidrio px-5 py-5">
              <dt className="sr-only">{dato.texto}</dt>
              <dd>
                <span className="block bg-degradado bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">{dato.cifra}</span>
                <span className="mt-1 block text-sm text-suave">{dato.texto}</span>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
};

export const LogrosPortafolio = () => {
  return (
    <section id="logros" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="01" antetitulo="Logros destacados" titulo={<>Resultados que <span className="degradado-texto">hablan solos.</span></>} />
        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LOGROS.map((logro, i) => {
            return (
              <li key={logro} className={i === 0 ? 'aparecer relative overflow-hidden rounded-3xl bg-tinta p-7 text-white shadow-vidrio md:col-span-2 lg:col-span-1' : 'aparecer vidrio p-7'}>
                <span aria-hidden className={i === 0 ? 'dorado-texto text-2xl' : 'text-2xl text-rosa'}>
                  ✦
                </span>
                <p className={i === 0 ? 'mt-3 text-lg font-semibold' : 'mt-3 text-[16px] text-tinta'}>{logro}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export const ExperienciaPortafolio = () => {
  return (
    <section id="experiencia" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <TituloCapitulo numero="02" antetitulo="Experiencia profesional" titulo={<>Veinte años <span className="degradado-texto">en movimiento.</span></>} />
        <ol className="mt-10 border-l-2 border-lila/20 pl-6 sm:pl-8">
          {EXPERIENCIA.map((cargo) => {
            return (
              <li key={cargo.lugar} className="aparecer relative pb-10 last:pb-0">
                <span aria-hidden className="absolute -left-[33px] top-1.5 size-4 rounded-full border-4 border-papel bg-degradado sm:-left-[41px]" />
                <p className="font-mono text-xs font-bold text-magenta">{cargo.periodo}</p>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-tinta">{cargo.cargo}</h3>
                <p className="text-[15px] font-semibold text-suave">{cargo.lugar}</p>
                <ul className="mt-3 grid gap-1.5">
                  {cargo.logros.map((logro) => {
                    return (
                      <li key={logro} className="check !items-start !text-[15px]">
                        {logro}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export const ProyectosPortafolio = () => {
  return (
    <section id="proyectos" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <TituloCapitulo numero="03" antetitulo="Portafolio" titulo={<>Su trabajo, <span className="degradado-texto">para ver.</span></>}>
          <p>Proyectos, fotos y videos de su trabajo con niñas, niños y equipos.</p>
        </TituloCapitulo>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROYECTOS.map((proyecto) => {
            return (
              <li key={proyecto.titulo} className="aparecer">
                <Link href={proyecto.href} className="group vidrio block h-full overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={proyecto.foto} alt="" loading="lazy" className="size-full object-cover transition-[scale] duration-700 ease-fidelya group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1150]/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-lg font-bold text-tinta">
                      {proyecto.titulo} <span aria-hidden className="text-magenta">→</span>
                    </p>
                    <p className="mt-1 text-[15px] text-suave">{proyecto.texto}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export const FormacionPortafolio = () => {
  return (
    <section id="formacion" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
        <div>
          <TituloCapitulo numero="04" antetitulo="Formación" titulo={<>Estudios <span className="degradado-texto">y cursos.</span></>} />
          <ul className="aparecer mt-8 grid gap-3">
            {FORMACION.map((f) => {
              return (
                <li key={f.titulo} className="vidrio p-5">
                  <p className="font-mono text-xs font-bold text-magenta">{f.periodo}</p>
                  <p className="mt-1 font-bold text-tinta">{f.titulo}</p>
                  <p className="text-sm text-suave">{f.lugar}</p>
                </li>
              );
            })}
          </ul>
          <ul className="aparecer mt-5 grid gap-1.5">
            {CURSOS.map((curso) => {
              return (
                <li key={curso} className="check">
                  {curso}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <TituloCapitulo numero="05" antetitulo="Competencias" titulo={<>Lo que <span className="degradado-texto">sabe hacer.</span></>} />
          <ul className="aparecer mt-8 flex flex-wrap gap-2.5">
            {COMPETENCIAS.map((competencia, i) => {
              return (
                <li
                  key={competencia}
                  className={i % 4 === 0 ? 'rounded-full bg-degradado px-4 py-2 text-[15px] font-semibold text-white shadow-suave' : 'rounded-full border border-white/90 bg-white/75 px-4 py-2 text-[15px] font-semibold text-tinta shadow-suave'}
                >
                  {competencia}
                </li>
              );
            })}
          </ul>
          <div className="aparecer mt-10 rounded-3xl bg-degradado p-7 text-white shadow-boton">
            <p className="font-script text-4xl leading-none">¿Conversamos?</p>
            <p className="mt-3 text-white/90">
              {PERSONA.telefono} · {PERSONA.correo}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a href={DESCARGAS.cv} download className="boton bg-white text-magenta">
                Descargar CV
              </a>
              <a href={`mailto:${PERSONA.correo}`} className="boton border border-white/60 text-white">
                Escribir un correo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
