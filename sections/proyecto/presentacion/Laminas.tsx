import { MerchIlustracion } from '@/components/MerchIlustracion';
import { Motion } from '@/components/Motion';
import { CONTACTO_ACADEMIA } from '@/data/academia';
import {
  ACADEMIA,
  ADICIONALES,
  BENEFICIOS,
  CAMPEONATOS,
  CAPITULOS,
  COLEGIO,
  CREDITOS_FOTOS,
  CUALIDADES,
  DESTINOS,
  ELEMENTOS_TECNICOS,
  ESCULTURA,
  ETAPAS_CLASE,
  HISTORIA,
  MERCH,
  MOTIONS,
  PLANES,
  PROFESORA,
  RUTA_INTERNACIONAL,
  TALLER,
  TEMPORADA,
  TRANSVERSALES,
  VALORES,
} from '@/data/proyecto';
import { ruta } from '@/lib/ruta';
import { cn } from '@/lib/cn';
import { Antetitulo, Diapositiva, NumeroGrande } from './Diapositiva';

const TONOS = ['#FFB3DA', '#FF7CC0', '#E05BD8', '#C653F0', '#9D5CFF', '#7B4BE0'];
const titulo = 'text-[52px] font-extrabold leading-[1.02] tracking-[-0.035em]';
// Colores planos y no texto con degradado: los visores de PDF dibujan un borde alrededor del texto recortado con background-clip.
const degradado = 'text-[#cf3fcf]';
const dorado = 'text-[#f5d27a]';
const resplandor = { textShadow: '0 0 28px rgba(255,79,163,0.55), 0 0 60px rgba(157,92,255,0.45)' };
const resplandorDorado = { textShadow: '0 0 26px rgba(245,210,122,0.55)' };
const tarjeta = 'rounded-[22px] border border-white bg-white/75 shadow-[0_1px_1px_rgba(80,40,120,.04),0_24px_60px_-28px_rgba(110,50,160,.32)]';

const Polaroid = ({ src, className, imgClass }: { src: string; className?: string; imgClass?: string }) => {
  return (
    <div className={cn('rounded-[4px] bg-white p-[8px] pb-[12px] shadow-[0_1px_1px_rgba(80,40,120,0.06),0_20px_36px_-14px_rgba(80,40,120,0.45)]', className)}>
      <img src={src} alt="" className={cn('block w-full rounded-[2px] object-cover', imgClass)} />
    </div>
  );
};

const Portada = () => {
  return (
    <Diapositiva tema="oscuro">
      <div className="grid h-full grid-cols-[1.15fr_1fr] items-center gap-6 px-16">
        <div>
          <img src={ruta('/img/proyecto/logo-dorado.png')} alt="" className="mb-4 h-[110px] w-auto drop-shadow-[0_10px_24px_rgba(245,210,122,0.45)]" />
          <p className="text-[15px] font-bold uppercase tracking-[0.3em] text-[#f5d27a]">Proyecto 2027 · {COLEGIO.comuna}</p>
          <h1 className="mt-3">
            <span className="block pb-3 font-script text-[150px] leading-[0.9] text-[#ffa3dc]" style={resplandor}>
              CheerDance
            </span>
            <span className="block text-[54px] font-extrabold leading-none tracking-[-0.035em]">{COLEGIO.nombre}</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[19px] leading-relaxed text-white/75">
            Taller extraprogramático de cheerdance para las alumnas del colegio. De lo formativo a lo competitivo, con proyección internacional.
          </p>
          <p className="mt-8 text-[15px] text-white/60">
            Presenta <span className="font-bold text-white">Spirit Dance Academy</span> · Prof. {PROFESORA.nombre}
          </p>
        </div>
        <div className="relative h-[560px]">
          <Polaroid src={ruta('/img/galeria/copa-super-nacional-2019.jpg')} className="absolute left-0 top-6 w-[250px] -rotate-6" imgClass="aspect-[4/5]" />
          <Polaroid src={ruta('/img/galeria/mini-pompones-2019.jpg')} className="absolute right-2 top-0 w-[230px] rotate-[6deg]" imgClass="aspect-[4/5]" />
          <Polaroid src={ruta('/img/galeria/selecciones-cancha-2019.jpg')} className="absolute bottom-6 left-16 w-[340px] rotate-2" imgClass="aspect-[4/3]" />
        </div>
      </div>
    </Diapositiva>
  );
};

const Indice = () => {
  return (
    <Diapositiva numero={2} className="px-16 pt-16">
      <Antetitulo>Contenido</Antetitulo>
      <h2 className={cn(titulo, 'mt-3')}>
        Once capítulos, <span className={degradado}>un proyecto.</span>
      </h2>
      <ol className="mt-12 grid grid-cols-3 gap-x-10 gap-y-5">
        {CAPITULOS.map((capitulo) => {
          return (
            <li key={capitulo.id} className="flex items-center gap-4">
              <span className="grid size-[52px] shrink-0 place-items-center rounded-full bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)] font-mono text-[17px] font-bold text-white shadow-[0_12px_30px_-10px_rgba(214,60,190,.6)]">
                {capitulo.numero}
              </span>
              <span className="text-[22px] font-bold">{capitulo.titulo}</span>
            </li>
          );
        })}
      </ol>
    </Diapositiva>
  );
};

const Academia = () => {
  return (
    <Diapositiva numero={3}>
      <NumeroGrande>01</NumeroGrande>
      <div className="grid h-full grid-cols-[1.1fr_1fr] gap-12 px-16 pt-16">
        <div>
          <Antetitulo>Presentación de la academia</Antetitulo>
          <h2 className={cn(titulo, 'mt-3')}>
            Spirit Dance <span className={degradado}>Academy.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-suave">{ACADEMIA.objetivo}</p>
          <p className="mt-3 text-[17px] leading-relaxed text-suave">{ACADEMIA.caracter}</p>
          <div className="mt-7 grid grid-cols-4 gap-3">
            {ACADEMIA.datos.map((dato) => {
              return (
                <div key={dato.texto} className={cn(tarjeta, 'px-4 py-3')}>
                  <p className={cn('text-[34px] font-extrabold leading-none', degradado)}>{dato.cifra}</p>
                  <p className="mt-1.5 text-[12px] leading-snug text-suave">{dato.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <Polaroid src={ACADEMIA.fotos[0].src} className="absolute left-0 top-4 w-[440px] -rotate-2" imgClass="aspect-[16/10]" />
          <Polaroid src={ACADEMIA.fotos[1].src} className="absolute bottom-16 left-6 w-[230px] rotate-[-4deg]" imgClass="aspect-[4/5]" />
          <Polaroid src={ACADEMIA.fotos[2].src} className="absolute bottom-10 right-4 w-[200px] rotate-[5deg]" imgClass="aspect-[4/5]" />
        </div>
      </div>
    </Diapositiva>
  );
};

const Profesora = () => {
  return (
    <Diapositiva numero={4}>
      <NumeroGrande>02</NumeroGrande>
      <div className="grid h-full grid-cols-[360px_1fr] gap-14 px-16 pt-14">
        <div className="relative">
          <div className="absolute inset-[-14%] rounded-full bg-[radial-gradient(closest-side,rgba(255,196,64,0.5),rgba(255,79,163,0.2)_60%,transparent)]" />
          <div className="relative -rotate-2 rounded-[4px] bg-white p-3 pb-4 shadow-[0_24px_40px_-14px_rgba(80,40,120,0.5)]">
            <img src={PROFESORA.foto} alt="" className="aspect-[4/5] w-full rounded-[2px] object-cover" />
            <p className="mt-2 font-script text-[34px] leading-none text-tinta/75">Paulina Quezada</p>
          </div>
        </div>
        <div>
          <Antetitulo>Profesional a cargo</Antetitulo>
          <h2 className={cn(titulo, 'mt-3 text-[46px]')}>
            {PROFESORA.nombre.replace(' Sepúlveda', '')} <span className={degradado}>Sepúlveda.</span>
          </h2>
          <p className="mt-2 text-[17px] font-semibold text-suave">{PROFESORA.cargo} · más de 25 años de experiencia</p>
          <ul className="mt-5 grid grid-cols-2 gap-2">
            {PROFESORA.titulos.map((t) => {
              return (
                <li key={t} className="flex items-start gap-2 text-[14.5px] font-medium">
                  <span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-[#1fa97a]/15 text-[11px] font-bold text-[#1fa97a]">✓</span>
                  {t}
                </li>
              );
            })}
          </ul>
          <ol className="mt-5 grid gap-2 border-l-2 border-[#9d5cff]/25 pl-5">
            {PROFESORA.hitos.slice(0, 6).map((hito) => {
              return (
                <li key={hito.texto} className="relative text-[14px] leading-snug">
                  <span className="absolute -left-[27px] top-1 size-2.5 rounded-full bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)]" />
                  <span className="font-mono text-[12px] font-bold text-magenta">{hito.periodo}</span> · {hito.texto}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Diapositiva>
  );
};

const Taller = () => {
  return (
    <Diapositiva numero={5}>
      <NumeroGrande>03</NumeroGrande>
      <div className="px-16 pt-14">
        <Antetitulo>Descripción de la actividad</Antetitulo>
        <h2 className={cn(titulo, 'mt-3 max-w-[900px] text-[46px]')}>
          Taller extraprogramático escolar <span className={degradado}>de Cheerdance.</span>
        </h2>
        <p className="mt-2 text-[17px] text-suave">{TALLER.publico} Formativo a competitivo, con presentación de fin de año.</p>
        <div className="mt-6 grid grid-cols-4 gap-3">
          {TALLER.modalidad.map((m) => {
            return (
              <div key={m.unidad} className={cn(tarjeta, 'px-5 py-3')}>
                <p className={cn('text-[44px] font-extrabold leading-none', degradado)}>{m.cifra}</p>
                <p className="mt-1 text-[15px] font-bold">{m.unidad}</p>
                <p className="text-[13px] text-suave">{m.texto}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {TALLER.categorias.map((c) => {
            return (
              <div key={c.nombre} className={cn(tarjeta, 'overflow-hidden')}>
                <div className="relative h-[130px]">
                  <img src={c.foto} alt="" className="size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1150]/85 to-transparent" />
                  <p className="absolute bottom-1 left-4 font-script text-[54px] leading-none text-white">{c.nombre}</p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-[15px] font-bold">
                    {c.cursos} <span className="font-mono text-[12px] text-magenta">· {c.edades}</span>
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-suave">{c.foco}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Diapositiva>
  );
};

const Objetivos = () => {
  return (
    <Diapositiva numero={6}>
      <div className="grid h-full grid-cols-[420px_1fr] gap-10 px-16 pb-20 pt-14">
        <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(125deg,#ff4fa3_0%,#c653f0_55%,#7b4be0_100%)] p-9 text-white shadow-[0_30px_60px_-24px_rgba(214,60,190,.7)]">
          <span className="absolute -right-4 -top-12 font-script text-[220px] leading-none text-white/15">“</span>
          <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-white/80">Objetivo general</p>
          <p className="relative mt-4 text-[20px] font-semibold leading-relaxed">{TALLER.objetivoGeneral}</p>
        </div>
        <div>
          <Antetitulo>Objetivos específicos</Antetitulo>
          <ol className="mt-4 grid gap-2.5">
            {TALLER.objetivosEspecificos.map((o, i) => {
              return (
                <li key={o} className={cn(tarjeta, 'flex items-start gap-3 px-4 py-2.5 text-[14.5px] leading-snug')}>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)] font-mono text-[12px] font-bold text-white">{i + 1}</span>
                  {o}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Diapositiva>
  );
};

const Cuerpo = () => {
  return (
    <Diapositiva numero={7} tema="oscuro">
      <NumeroGrande tema="oscuro">04</NumeroGrande>
      <div className="grid h-full grid-cols-2 gap-12 px-16 pt-14">
        <div>
          <Antetitulo tema="oscuro">Cualidades físicas</Antetitulo>
          <h2 className={cn(titulo, 'mt-3 text-[46px]')}>
            Lo que la danza <span className={dorado}>entrena.</span>
          </h2>
          <ul className="mt-6 grid gap-3.5">
            {CUALIDADES.map((c) => {
              return (
                <li key={c.nombre}>
                  <div className="flex justify-between text-[15px] font-bold">
                    <span>{c.nombre}</span>
                    <span className="font-mono text-[12px] text-white/50">{c.nivel}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-[linear-gradient(90deg,#FF4FA3,#C653F0,#f5d27a)]" style={{ width: `${c.nivel}%` }} />
                  </div>
                  <p className="mt-1 text-[12.5px] text-white/60">{c.texto}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Antetitulo tema="oscuro">En términos de escultura</Antetitulo>
          <h3 className="mt-3 text-[34px] font-extrabold leading-tight tracking-tight">{ESCULTURA.titulo}</h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-white/70">{ESCULTURA.texto}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {ESCULTURA.elementos.map((e) => {
              return (
                <div key={e.nombre} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-[17px] font-bold text-[#f5d27a]">{e.nombre}</p>
                  <p className="mt-1 text-[13px] leading-snug text-white/70">{e.texto}</p>
                </div>
              );
            })}
          </div>
          <img src={ruta('/img/galeria/Ccya7v9v4jN_01.jpg')} alt="" className="mt-4 h-[120px] w-full rounded-2xl object-cover object-[50%_60%] opacity-90" />
        </div>
      </div>
    </Diapositiva>
  );
};

const Beneficios = () => {
  return (
    <Diapositiva numero={8}>
      <div className="px-16 pt-14">
        <Antetitulo>Cómo mejora a las niñas</Antetitulo>
        <h2 className={cn(titulo, 'mt-3')}>
          Propiocepción, expresión <span className={degradado}>y confianza.</span>
        </h2>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {BENEFICIOS.map((b, i) => {
            return (
              <div key={b.nombre} className={cn(i === 0 ? 'bg-[linear-gradient(125deg,#ff4fa3_0%,#c653f0_55%,#7b4be0_100%)] text-white shadow-[0_24px_50px_-20px_rgba(214,60,190,.7)]' : tarjeta, 'rounded-[22px] p-6')}>
                <p className={cn('text-[22px] font-extrabold tracking-tight', i === 0 ? 'text-white' : degradado)}>{b.nombre}</p>
                <p className={cn('mt-2 text-[14.5px] leading-relaxed', i === 0 ? 'text-white/85' : 'text-suave')}>{b.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Diapositiva>
  );
};

const Clase = () => {
  return (
    <Diapositiva numero={9}>
      <NumeroGrande>05</NumeroGrande>
      <div className="px-16 pt-14">
        <Antetitulo>Desarrollo de la clase</Antetitulo>
        <h2 className={cn(titulo, 'mt-3')}>
          90 minutos, <span className={degradado}>seis momentos.</span>
        </h2>
        <p className="mt-2 max-w-[820px] text-[16px] text-suave">Clases personalizadas e inclusivas: cada ejercicio se adapta al nivel de cada niña.</p>
        <div className="mt-7 flex h-[18px] overflow-hidden rounded-full shadow-[0_10px_24px_-14px_rgba(110,50,160,.4)]">
          {ETAPAS_CLASE.map((e, i) => {
            return <span key={e.nombre} style={{ flexGrow: e.minutos, background: TONOS[i] }} />;
          })}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {ETAPAS_CLASE.map((e, i) => {
            return (
              <div key={e.nombre} className={cn(tarjeta, 'relative overflow-hidden px-5 py-4')}>
                <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: TONOS[i] }} />
                <div className="flex justify-between font-mono text-[12px] font-bold">
                  <span className="text-tenue">0{i + 1}</span>
                  <span className="text-magenta">{e.minutos} min</span>
                </div>
                <p className="mt-1 text-[18px] font-bold">{e.nombre}</p>
                <p className="mt-1 text-[13.5px] leading-snug text-suave">{e.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Diapositiva>
  );
};

const Tecnica = () => {
  const conFoto = ELEMENTOS_TECNICOS.filter((e) => e.foto);
  return (
    <Diapositiva numero={10}>
      <div className="px-16 pt-12">
        <Antetitulo>Elementos técnicos</Antetitulo>
        <h2 className={cn(titulo, 'mt-2 text-[44px]')}>
          Piruette, suelo, saltos <span className={degradado}>y tricks.</span>
        </h2>
        <div className="mt-5 grid grid-cols-[220px_1fr] gap-4">
          <div className={cn(tarjeta, 'flex flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_50%_55%,#f3e6ff,#ffffff)] p-3')}>
            <img src={ruta('/render/giro_012.webp')} alt="" className="h-[200px] w-auto drop-shadow-[0_18px_20px_rgba(157,92,255,0.4)]" />
            <p className="mt-2 text-[17px] font-bold">Piruette</p>
            <p className="text-center text-[12px] leading-snug text-suave">{ELEMENTOS_TECNICOS[0].texto}</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {conFoto.slice(0, 4).map((e) => {
              return (
                <div key={e.nombre} className={cn(tarjeta, 'overflow-hidden')}>
                  <img src={e.foto} alt="" className="h-[150px] w-full object-cover" />
                  <div className="px-3 py-2">
                    <p className="text-[15px] font-bold">{e.nombre}</p>
                    <p className="text-[11.5px] leading-snug text-suave">{e.texto}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={cn(tarjeta, 'mt-4 flex items-center justify-between px-6 py-2')}>
          <p className="w-[150px] text-[13px] font-bold uppercase tracking-[0.16em] text-magenta">Motions básicos</p>
          {MOTIONS.map((m) => {
            return (
              <div key={m.nombre} className="scale-[0.85]">
                <Motion {...m} />
              </div>
            );
          })}
        </div>
      </div>
    </Diapositiva>
  );
};

const Valores = () => {
  return (
    <Diapositiva numero={11} tema="degradado">
      <NumeroGrande tema="degradado">06</NumeroGrande>
      <div className="px-16 pt-14">
        <Antetitulo tema="degradado">Valores de la academia</Antetitulo>
        <h2 className={cn(titulo, 'mt-3')}>Lo que se aprende más allá del paso.</h2>
        <div className="mt-7 grid grid-cols-3 gap-4">
          {VALORES.map((v) => {
            return (
              <div key={v.nombre} className="rounded-[22px] border border-white/30 bg-white/15 p-5">
                <p className="text-[22px] font-extrabold">✦ {v.nombre}</p>
                <p className="mt-1 text-[14px] leading-snug text-white/85">{v.texto}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-7 text-[13px] font-bold uppercase tracking-[0.2em] text-white/80">Elementos transversales</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {TRANSVERSALES.map((t, i) => {
            return (
              <span key={t} className={cn('rounded-full px-4 py-1.5 text-[14px] font-semibold', i % 3 === 0 ? 'bg-white text-magenta' : 'border border-white/40 text-white')}>
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </Diapositiva>
  );
};

const Historia = () => {
  return (
    <Diapositiva numero={12}>
      <NumeroGrande>07</NumeroGrande>
      <div className="px-16 pt-14">
        <Antetitulo>Breve historia</Antetitulo>
        <h2 className={cn(titulo, 'mt-3')}>
          El cheerdance <span className={degradado}>en Chile.</span>
        </h2>
        {[HISTORIA.slice(0, 5), HISTORIA.slice(5)].map((fila) => {
          return (
            <div key={fila[0].anio} className="relative mt-9">
              <div className="absolute inset-x-0 top-[13px] h-[3px] rounded-full bg-[linear-gradient(90deg,#FF4FA3,#C653F0,#9D5CFF)]" />
              <ol className="relative grid grid-cols-5 gap-x-5">
                {fila.map((h) => {
                  return (
                    <li key={h.anio}>
                      <span className="block size-7 rounded-full border-4 border-[#fcf8fe] bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)] shadow-[0_8px_18px_-6px_rgba(214,60,190,.7)]" />
                      <p className="mt-2 font-mono text-[13px] font-bold text-magenta">{h.anio}</p>
                      <p className="text-[15.5px] font-bold leading-tight">{h.titulo}</p>
                      <p className="mt-1 text-[12px] leading-snug text-suave">{h.texto}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </Diapositiva>
  );
};

const Campeonatos = () => {
  return (
    <Diapositiva numero={13}>
      <NumeroGrande>08</NumeroGrande>
      <div className="px-16 pt-14">
        <Antetitulo>Dónde competir</Antetitulo>
        <h2 className={cn(titulo, 'mt-3 text-[46px]')}>
          Los campeonatos <span className={degradado}>de la temporada.</span>
        </h2>
        <div className="mt-6 grid grid-cols-[1.2fr_1fr_1fr] gap-4">
          {CAMPEONATOS.slice(0, 3).map((c) => {
            return (
              <div key={c.nombre} className={cn('rounded-[22px] p-5', c.destacado ? 'bg-[#1c1030] text-white shadow-[0_24px_50px_-20px_rgba(28,16,48,.8)]' : tarjeta)}>
                <p className={cn('text-[11.5px] font-bold uppercase tracking-[0.14em]', c.destacado ? 'text-[#f5d27a]' : 'text-magenta')}>{c.organiza}</p>
                <p className="mt-1.5 text-[22px] font-extrabold leading-tight">{c.nombre}</p>
                <p className={cn('mt-1.5 text-[13px] font-semibold', c.destacado ? 'text-white/80' : 'text-tinta')}>{c.cuando}</p>
                <p className={cn('text-[13px]', c.destacado ? 'text-white/70' : 'text-suave')}>{c.donde}</p>
                <p className={cn('mt-2 text-[12.5px] leading-snug', c.destacado ? 'text-white/70' : 'text-suave')}>{c.detalle}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.18em] text-magenta">Temporada del equipo competitivo</p>
        <div className="mt-3 grid grid-cols-6 gap-2.5">
          {TEMPORADA.map((t, i) => {
            return (
              <div key={t.mes} className={cn(tarjeta, 'relative px-3 py-3')}>
                <span className="absolute inset-x-3 top-0 h-1 rounded-b-full" style={{ background: TONOS[i] }} />
                <p className="font-mono text-[13px] font-bold">{t.mes}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-suave">{t.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Diapositiva>
  );
};

const Propuesta = () => {
  return (
    <Diapositiva numero={14} tema="oscuro">
      <NumeroGrande tema="oscuro">09</NumeroGrande>
      <div className="px-16 pt-12">
        <Antetitulo tema="oscuro">Propuesta comercial</Antetitulo>
        <h2 className={cn(titulo, 'mt-2 text-[48px]')}>
          Esto es una venta: <span className={dorado}>un producto para el colegio.</span>
        </h2>
        <div className="mt-7 grid grid-cols-2 gap-5">
          {PLANES.map((p) => {
            return (
              <div
                key={p.nombre}
                className={cn(
                  'relative rounded-[24px] p-7',
                  p.venta ? 'bg-gradient-to-br from-[#3a2160] to-[#24123f] ring-2 ring-[#f5d27a]/80 shadow-[0_30px_70px_-26px_rgba(245,210,122,0.6)]' : 'bg-white text-tinta',
                )}
              >
                {p.venta && (
                  <span className="absolute -top-3.5 left-7 rounded-full bg-[linear-gradient(110deg,#c9952f,#ffe7a3,#d9a641)] px-4 py-1 text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#3d2a05]">
                    Producto a la venta
                  </span>
                )}
                <p className={cn('text-[13px] font-bold uppercase tracking-[0.16em]', p.venta ? 'text-[#f5d27a]' : 'text-magenta')}>{p.bajada}</p>
                <p className="mt-1 text-[32px] font-extrabold tracking-tight">{p.nombre}</p>
                <ul className="mt-3 grid gap-1.5">
                  {p.incluye.map((item) => {
                    return (
                      <li key={item} className={cn('flex items-start gap-2 text-[14.5px]', p.venta ? 'text-white/85' : 'text-suave')}>
                        <span className={cn('mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full text-[10px] font-bold', p.venta ? 'bg-[#f5d27a] text-[#3d2a05]' : 'bg-[#1fa97a]/15 text-[#1fa97a]')}>✓</span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-5 text-[14px] text-white/65">
          <span className="font-bold text-white">Se cotiza aparte:</span> {ADICIONALES.join(' · ')}. Valor según número de alumnas y categorías.
        </p>
      </div>
    </Diapositiva>
  );
};

const Merch = () => {
  return (
    <Diapositiva numero={15}>
      <NumeroGrande>10</NumeroGrande>
      <div className="px-16 pt-14">
        <Antetitulo>Merch del equipo</Antetitulo>
        <h2 className={cn(titulo, 'mt-3')}>
          Vestir los colores <span className={degradado}>de Spirit Dance.</span>
        </h2>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {MERCH.map((m) => {
            return (
              <div key={m.id} className={cn(tarjeta, 'flex h-[210px] items-center overflow-hidden')}>
                <div className="flex h-full w-[200px] shrink-0 items-center bg-[radial-gradient(circle_at_50%_45%,#f1e2ff,#ffffff_72%)] px-4">
                  <MerchIlustracion id={m.id} nombre={m.nombre} />
                </div>
                <div className="pr-5">
                  <p className="text-[19px] font-bold leading-tight">{m.nombre}</p>
                  <p className="mt-1.5 text-[13.5px] leading-snug text-suave">{m.texto}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Diapositiva>
  );
};

const Viajes = () => {
  return (
    <Diapositiva numero={16} tema="oscuro">
      <img src={ruta('/img/proyecto/castillo-disney.jpg')} alt="" className="absolute inset-0 size-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1030] via-[#1c1030]/85 to-[#1c1030]/30" />
      <div className="relative grid h-full grid-cols-[1fr_440px] gap-10 px-16 pt-14">
        <div>
          <Antetitulo tema="oscuro">Proyección internacional</Antetitulo>
          <h2 className="mt-2">
            <span className="block text-[44px] font-extrabold leading-none tracking-tight">Próxima parada:</span>
            <span className={cn('block pb-2 font-script text-[120px] leading-[0.95]', dorado)} style={resplandorDorado}>
              Disney
            </span>
          </h2>
          <div className="mt-2 grid gap-3">
            {DESTINOS.map((d) => {
              return (
                <div key={d.nombre} className="rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-3">
                  <p className="text-[18px] font-bold">
                    {d.nombre} <span className="font-mono text-[12px] font-bold text-[#f5d27a]">· {d.cuando} · {d.lugar}</span>
                  </p>
                  <p className="mt-0.5 text-[13px] leading-snug text-white/70">{d.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <Polaroid src={ruta('/img/proyecto/worlds-2019.jpg')} className="absolute right-0 top-10 w-[400px] rotate-3" imgClass="aspect-[4/3]" />
          <Polaroid src={ruta('/img/proyecto/espn-wide-world.jpg')} className="absolute left-0 top-[330px] w-[280px] -rotate-3" imgClass="aspect-[4/3]" />
        </div>
      </div>
      <p className="absolute bottom-[52px] left-16 right-16 text-[10px] text-white/45">Fotos: {CREDITOS_FOTOS.join(' · ')}</p>
    </Diapositiva>
  );
};

const Ruta = () => {
  return (
    <Diapositiva numero={17}>
      <NumeroGrande>11</NumeroGrande>
      <div className="px-16 pt-14">
        <Antetitulo>Ruta internacional</Antetitulo>
        <h2 className={cn(titulo, 'mt-3')}>
          Tres años <span className={degradado}>hasta Orlando.</span>
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-6">
          {RUTA_INTERNACIONAL.map((paso, i) => {
            return (
              <div key={paso.anio} className={cn('relative rounded-[26px] p-8', i === 2 ? 'bg-[#1c1030] text-white shadow-[0_30px_60px_-24px_rgba(28,16,48,.8)]' : tarjeta)}>
                <p className={cn('font-script text-[72px] leading-none', i === 2 ? dorado : degradado)}>{paso.anio}</p>
                <p className="mt-4 text-[26px] font-extrabold tracking-tight">{paso.titulo}</p>
                <p className={cn('mt-2 text-[16px] leading-relaxed', i === 2 ? 'text-white/75' : 'text-suave')}>{paso.texto}</p>
                {i < 2 && <span className="absolute -right-6 top-1/2 z-10 -translate-y-1/2 text-[34px] text-[#9d5cff]">→</span>}
              </div>
            );
          })}
        </div>
        <p className="mt-10 max-w-[900px] text-[16px] leading-relaxed text-suave">
          El viaje se financia con un plan junto a las familias (actividades, rifas y auspicios) desde el primer año, para que llegar a Disney sea una meta
          posible para todo el equipo.
        </p>
      </div>
    </Diapositiva>
  );
};

const Cierre = () => {
  return (
    <Diapositiva tema="degradado">
      <div className="flex h-full flex-col items-center justify-center px-16 text-center">
        <img src={ruta('/render/giro_012.webp')} alt="" className="h-[250px] w-auto drop-shadow-[0_24px_30px_rgba(60,20,110,0.45)]" />
        <p className="mt-2 font-script text-[110px] leading-[0.95]" style={{ textShadow: '0 0 40px rgba(255,255,255,0.55)' }}>
          ¡Gracias!
        </p>
        <p className="mt-3 max-w-[760px] text-[21px] text-white/90">Conversemos cómo llevar el cheerdance al {COLEGIO.nombre}.</p>
        <div className="mt-8 flex gap-4 text-[17px] font-semibold">
          <span className="rounded-full bg-white px-6 py-3 text-magenta">WhatsApp {CONTACTO_ACADEMIA.telefono}</span>
          <span className="rounded-full border border-white/50 px-6 py-3">{CONTACTO_ACADEMIA.correo}</span>
          <span className="rounded-full border border-white/50 px-6 py-3">@academiaspiritdance</span>
        </div>
        <p className="mt-10 text-[14px] text-white/75">
          Prof. {PROFESORA.nombre} · Directora y fundadora de Spirit Dance Academy
        </p>
      </div>
    </Diapositiva>
  );
};

export const Laminas = () => {
  return (
    <>
      <Portada />
      <Indice />
      <Academia />
      <Profesora />
      <Taller />
      <Objetivos />
      <Cuerpo />
      <Beneficios />
      <Clase />
      <Tecnica />
      <Valores />
      <Historia />
      <Campeonatos />
      <Propuesta />
      <Merch />
      <Viajes />
      <Ruta />
      <Cierre />
    </>
  );
};
