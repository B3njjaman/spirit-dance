import type { ReactNode } from 'react';
import { MerchIlustracion } from '@/components/MerchIlustracion';
import { Motion } from '@/components/Motion';
import { CONTACTO_ACADEMIA } from '@/data/academia';
import {
  ACADEMIA,
  ADICIONALES,
  CAMPEONATOS,
  conArticulo,
  CREDITOS_FOTOS,
  DESTINOS,
  ELEMENTOS_TECNICOS,
  ESCULTURA,
  HISTORIA,
  MOTIONS,
  numeroCapitulo,
  PROFESORA,
  RUTA_INTERNACIONAL,
  type IdCapitulo,
  type Proyecto,
} from '@/data/proyecto';
import { ruta } from '@/lib/ruta';
import { cn } from '@/lib/cn';
import { Polaroid, TONOS } from './Laminas';

// El PDF para celular no son láminas: es un documento que se lee hacia abajo, como la página en el teléfono.
// Cada capítulo es una página de 390 px de ancho y el alto de su contenido (AltoNatural), con la misma información
// que las láminas del PDF para computador.
type Tema = 'claro' | 'oscuro' | 'degradado';
type PaginaProps = { proyecto: Proyecto; numero: number };
type Pagina = (props: PaginaProps) => React.JSX.Element | null;

const EN_PALABRAS: Record<number, string> = { 10: 'Diez', 11: 'Once', 12: 'Doce', 13: 'Trece' };
const FONDOS: Record<Tema, string> = {
  claro: 'bg-[#fcf8fe] text-tinta',
  oscuro: 'bg-[#1c1030] text-white',
  degradado: 'bg-[linear-gradient(165deg,#ff4fa3_0%,#c653f0_55%,#7b4be0_100%)] text-white',
};
// Colores planos y no texto con degradado: los visores de PDF dibujan un borde alrededor del texto recortado con background-clip.
// Por lo mismo las polaroids van rectas: al imprimir una foto con object-cover girada, Chrome repite trozos de la foto en el borde.
const acento = 'text-[#cf3fcf]';
const dorado = 'text-[#f5d27a]';
const resplandor = { textShadow: '0 0 22px rgba(255,79,163,0.55), 0 0 44px rgba(157,92,255,0.45)' };
const resplandorDorado = { textShadow: '0 0 22px rgba(245,210,122,0.55)' };
const tarjeta = 'rounded-[20px] border border-white bg-white/75 shadow-[0_1px_1px_rgba(80,40,120,.04),0_18px_40px_-24px_rgba(110,50,160,.32)]';
const tarjetaOscura = 'rounded-[22px] bg-[#1c1030] text-white shadow-[0_24px_50px_-20px_rgba(28,16,48,.8)]';
const tarjetaDegradado = 'bg-[linear-gradient(125deg,#ff4fa3_0%,#c653f0_55%,#7b4be0_100%)] text-white shadow-[0_24px_50px_-20px_rgba(214,60,190,.7)]';
const circulo = 'grid shrink-0 place-items-center rounded-full bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)] font-mono font-bold text-white';
const visto = 'mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full text-[10px] font-bold';

const colorEtiqueta = (tema: Tema) => (tema === 'claro' ? 'text-magenta' : tema === 'oscuro' ? dorado : 'text-white/80');

const Brillos = ({ tema }: { tema: Tema }) => {
  if (tema === 'degradado') {
    return <div aria-hidden className="pointer-events-none absolute -right-48 -top-48 size-[620px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.28),transparent)]" />;
  }
  const [arriba, abajo] = tema === 'claro' ? ['rgba(255,196,226,0.7)', 'rgba(220,203,255,0.8)'] : ['rgba(157,92,255,0.42)', 'rgba(255,79,163,0.34)'];
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute -left-56 -top-56 size-[620px]" style={{ background: `radial-gradient(closest-side, ${arriba}, transparent)` }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-64 -right-56 size-[660px]" style={{ background: `radial-gradient(closest-side, ${abajo}, transparent)` }} />
    </>
  );
};

// Una página del documento. Con número lleva al pie el nombre del colegio y el número de página.
const Hoja = ({ tema = 'claro', numero, colegio, id, children }: { tema?: Tema; numero?: number; colegio?: string; id?: string; children: ReactNode }) => {
  return (
    <section id={id} className={cn('pagina-movil relative flex flex-col overflow-hidden', FONDOS[tema])}>
      <Brillos tema={tema} />
      <div className="relative flex flex-1 flex-col">{children}</div>
      {numero !== undefined && (
        <footer className={cn('relative flex items-center justify-between px-6 pb-6 pt-12 text-[10px] font-semibold', tema === 'claro' ? 'text-suave' : 'text-white/60')}>
          <span>
            <span className="font-script text-[17px]">Spirit Dance</span> · Proyecto CheerDance {colegio}
          </span>
          <span className="font-mono">{String(numero).padStart(2, '0')}</span>
        </footer>
      )}
    </section>
  );
};

// Tramo de una página con otro fondo, de borde a borde: la parte oscura de "Danza y cuerpo" o la de Disney.
const Tramo = ({ tema, children }: { tema: Tema; children: ReactNode }) => {
  return (
    <div className={cn('relative overflow-hidden', FONDOS[tema])}>
      <Brillos tema={tema} />
      <div className="relative">{children}</div>
    </div>
  );
};

const Apertura = ({ numero, antetitulo, titulo, tema = 'claro', children }: { numero: string; antetitulo: string; titulo: ReactNode; tema?: Tema; children?: ReactNode }) => {
  return (
    <header>
      <span
        aria-hidden
        className="block select-none text-[92px] font-extrabold leading-[0.8] tracking-[-0.06em] text-transparent"
        style={{ WebkitTextStroke: tema === 'claro' ? '1.5px rgba(157,92,255,0.45)' : '1.5px rgba(255,255,255,0.4)' }}
      >
        {numero}
      </span>
      <p className={cn('mt-5 text-[12px] font-bold uppercase tracking-[0.18em]', colorEtiqueta(tema))}>{antetitulo}</p>
      <h2 className="mt-2 text-[32px] font-extrabold leading-[1.06] tracking-[-0.03em]">{titulo}</h2>
      {children && <div className={cn('mt-4 grid gap-3 text-[15.5px] leading-relaxed', tema === 'claro' ? 'text-suave' : 'text-white/75')}>{children}</div>}
    </header>
  );
};

const Subtitulo = ({ antetitulo, titulo, tema = 'claro' }: { antetitulo: string; titulo: ReactNode; tema?: Tema }) => {
  return (
    <header className="mt-14">
      <p className={cn('text-[12px] font-bold uppercase tracking-[0.18em]', colorEtiqueta(tema))}>{antetitulo}</p>
      <h3 className="mt-2 text-[26px] font-extrabold leading-[1.08] tracking-[-0.03em]">{titulo}</h3>
    </header>
  );
};

const Etiqueta = ({ children, tema = 'claro', className }: { children: ReactNode; tema?: Tema; className?: string }) => {
  return <p className={cn('text-[12px] font-bold uppercase tracking-[0.16em]', colorEtiqueta(tema), className)}>{children}</p>;
};

const Portada: Pagina = ({ proyecto }) => {
  return (
    <Hoja tema="oscuro">
      <div className="flex flex-1 flex-col px-6 pb-10 pt-14">
        <img src={ruta('/img/proyecto/logo-dorado.png')} alt="" className="h-[64px] w-auto self-start drop-shadow-[0_10px_24px_rgba(245,210,122,0.45)]" />
        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f5d27a]">Proyecto 2027 · {proyecto.colegio.comuna}</p>
        <h1 className="mt-3">
          <span className="block pb-2 font-script text-[76px] leading-[0.9] text-[#ffa3dc]" style={resplandor}>
            CheerDance
          </span>
          <span className="block text-[36px] font-extrabold leading-[1.02] tracking-[-0.035em]">{proyecto.colegio.nombre}</span>
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-white/75">{proyecto.portada.bajadaLamina}</p>
        <p className="mt-5 text-[13px] text-white/60">
          Presenta <span className="font-bold text-white">Spirit Dance Academy</span> · Prof. {PROFESORA.nombre}
        </p>
        <div className="mt-auto grid grid-cols-3 gap-3 pt-8">
          <Polaroid src={ruta('/img/galeria/copa-super-nacional-2019.jpg')} imgClass="aspect-[3/4]" />
          <Polaroid src={ruta('/img/galeria/mini-pompones-2019.jpg')} imgClass="aspect-[3/4]" />
          <Polaroid src={ruta('/img/galeria/selecciones-cancha-2019.jpg')} imgClass="aspect-[3/4]" />
        </div>
      </div>
    </Hoja>
  );
};

// El índice enlaza cada capítulo: en el visor del celular se toca y salta a esa página.
const Indice: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <div className="px-6 pt-14">
        <Etiqueta>Contenido</Etiqueta>
        <h2 className="mt-2 text-[32px] font-extrabold leading-[1.06] tracking-[-0.03em]">
          {EN_PALABRAS[proyecto.capitulos.length] ?? proyecto.capitulos.length} capítulos, <span className={acento}>un proyecto.</span>
        </h2>
        <ol className="mt-7 grid">
          {proyecto.capitulos.map((capitulo) => {
            return (
              <li key={capitulo.id} className="border-b border-[#9d5cff]/15 last:border-0">
                <a href={`#cap-${capitulo.id}`} className="flex items-center gap-4 py-2.5">
                  <span className={cn(circulo, 'size-9 text-[13px]')}>{numeroCapitulo(proyecto, capitulo.id)}</span>
                  <span className="flex-1 text-[17px] font-bold">{capitulo.titulo}</span>
                  <span aria-hidden className="text-[18px] text-[#9d5cff]">→</span>
                </a>
              </li>
            );
          })}
        </ol>
        <p className="mt-5 text-[12.5px] text-suave">Toca un capítulo para ir directo a él.</p>
      </div>
    </Hoja>
  );
};

const Academia: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-academia">
      <div className="px-6 pt-12">
        <Apertura
          numero={numeroCapitulo(proyecto, 'academia')}
          antetitulo="Presentación de la academia"
          titulo={
            <>
              Spirit Dance <span className={acento}>Academy.</span>
            </>
          }
        >
          <p>{ACADEMIA.objetivo}</p>
          <p>{ACADEMIA.caracter}</p>
        </Apertura>
        <div className="mt-7 grid grid-cols-2 gap-3">
          {ACADEMIA.datos.map((dato) => {
            return (
              <div key={dato.texto} className={cn(tarjeta, 'px-4 py-4')}>
                <p className={cn('text-[30px] font-extrabold leading-none', acento)}>{dato.cifra}</p>
                <p className="mt-1.5 text-[12.5px] leading-snug text-suave">{dato.texto}</p>
              </div>
            );
          })}
        </div>
        <Polaroid src={ACADEMIA.fotos[0].src} className="mt-9" imgClass="aspect-[16/10]" />
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Polaroid src={ACADEMIA.fotos[1].src} imgClass="aspect-[4/5]" />
          <Polaroid src={ACADEMIA.fotos[2].src} imgClass="aspect-[4/5]" />
        </div>
      </div>
    </Hoja>
  );
};

const Profesora: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-profesora">
      <div className="px-6 pt-12">
        <Apertura
          numero={numeroCapitulo(proyecto, 'profesora')}
          antetitulo="Profesional a cargo"
          titulo={
            <>
              {PROFESORA.nombre.replace(' Sepúlveda', '')} <span className={acento}>Sepúlveda.</span>
            </>
          }
        >
          <p>{PROFESORA.cargo} · más de 25 años de experiencia</p>
        </Apertura>
        <div className="relative mx-auto mt-9 w-[240px]">
          <div aria-hidden className="absolute inset-[-16%] rounded-full bg-[radial-gradient(closest-side,rgba(255,196,64,0.45),rgba(255,79,163,0.18)_60%,transparent)]" />
          <div className="relative rounded-[4px] bg-white p-2.5 pb-3 shadow-[0_24px_40px_-14px_rgba(80,40,120,0.5)]">
            <img src={PROFESORA.foto} alt="" className="block aspect-[4/5] w-full rounded-[2px] object-cover" />
            <p className="mt-2 font-script text-[30px] leading-none text-tinta/75">Paulina Quezada</p>
          </div>
        </div>
        <Etiqueta className="mt-12">Formación</Etiqueta>
        <ul className="mt-3 grid gap-2.5">
          {PROFESORA.titulos.map((t) => {
            return (
              <li key={t} className="flex items-start gap-2.5 text-[15px] font-medium leading-snug">
                <span className={cn(visto, 'bg-[#1fa97a]/15 text-[#1fa97a]')}>✓</span>
                {t}
              </li>
            );
          })}
        </ul>
        <Etiqueta className="mt-10">Trayectoria</Etiqueta>
        <ol className="mt-4 grid gap-3.5 border-l-2 border-[#9d5cff]/25 pl-5">
          {PROFESORA.hitos.slice(0, 6).map((hito) => {
            return (
              <li key={hito.texto} className="relative text-[14.5px] leading-snug">
                <span className="absolute -left-[27px] top-1 size-2.5 rounded-full bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)]" />
                <span className="block font-mono text-[12px] font-bold text-magenta">{hito.periodo}</span>
                {hito.texto}
              </li>
            );
          })}
        </ol>
      </div>
    </Hoja>
  );
};

// Capítulo propio del colegio: la red y sus pilares, y luego la Salvaguarda, el formato y el encuentro.
const Colegio: Pagina = ({ proyecto, numero }) => {
  const colegio = proyecto.enElColegio;
  if (!colegio) return null;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-colegio">
      <div className="px-6 pt-12">
        <Apertura
          numero={numeroCapitulo(proyecto, 'colegio')}
          antetitulo="El proyecto en el colegio"
          titulo={
            <>
              Pensado para <span className={acento}>{colegio.nombre}.</span>
            </>
          }
        >
          <p>{colegio.intro}</p>
        </Apertura>
        <Etiqueta className="mt-10">El cheer ya se vive en la red</Etiqueta>
        <div className="mt-3 grid gap-3">
          {colegio.red.map((r) => {
            return (
              <div key={r.colegio} className={cn('px-5 py-4', r.destacado ? tarjetaOscura : tarjeta)}>
                <p className={cn('text-[11px] font-bold uppercase tracking-[0.14em]', r.destacado ? dorado : 'text-magenta')}>{r.logro}</p>
                <p className="mt-1 text-[20px] font-extrabold leading-tight">{r.colegio}</p>
                <p className={cn('mt-1.5 text-[14px] leading-snug', r.destacado ? 'text-white/75' : 'text-suave')}>{r.texto}</p>
              </div>
            );
          })}
        </div>
        <Etiqueta className="mt-10">Sus pilares, en cada clase</Etiqueta>
        <div className="mt-3 grid gap-3">
          {colegio.pilares.map((p) => {
            return (
              <div key={p.nombre} className={cn(tarjeta, 'px-5 py-4')}>
                <p className={cn('text-[18px] font-extrabold leading-tight', acento)}>✦ {p.nombre}</p>
                <p className="mt-1.5 text-[14px] leading-snug text-suave">{p.texto}</p>
              </div>
            );
          })}
        </div>
        <Subtitulo
          antetitulo="Cómo trabajamos en el colegio"
          titulo={
            <>
              Salvaguarda <span className={acento}>y formato de academia.</span>
            </>
          }
        />
        <div className={cn(tarjetaOscura, 'mt-5 p-6')}>
          <p className={cn('text-[12px] font-bold uppercase tracking-[0.16em]', dorado)}>Compromisos de Salvaguarda</p>
          <ul className="mt-4 grid gap-3">
            {colegio.salvaguarda.map((c) => {
              return (
                <li key={c} className="flex items-start gap-3 text-[14.5px] leading-snug text-white/85">
                  <span className={cn(visto, 'bg-[#f5d27a] text-[#3d2a05]')}>✓</span>
                  {c}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={cn(tarjeta, 'mt-4 p-6')}>
          <Etiqueta>Cómo entra en el colegio</Etiqueta>
          <ul className="mt-4 grid gap-3">
            {colegio.formato.map((f) => {
              return (
                <li key={f} className="flex items-start gap-3 text-[14.5px] leading-snug">
                  <span className={cn(visto, 'bg-[#1fa97a]/15 text-[#1fa97a]')}>✓</span>
                  {f}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={cn(tarjetaDegradado, 'mt-4 rounded-[22px] p-6')}>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Una idea para la red</p>
          <p className="mt-1.5 text-[22px] font-extrabold leading-tight tracking-tight">{colegio.encuentro.nombre}</p>
          <p className="mt-2 text-[14.5px] leading-snug text-white/90">{colegio.encuentro.texto}</p>
        </div>
      </div>
    </Hoja>
  );
};

const Taller: Pagina = ({ proyecto, numero }) => {
  const { taller } = proyecto;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-taller">
      <div className="px-6 pt-12">
        <Apertura
          numero={numeroCapitulo(proyecto, 'taller')}
          antetitulo="Descripción de la actividad"
          titulo={
            <>
              {taller.titulo[0]} <span className={acento}>{taller.titulo[1]}</span>
            </>
          }
        >
          <p>
            {taller.publico} {taller.caracterLamina}
          </p>
        </Apertura>
        <div className="mt-7 grid grid-cols-2 gap-3">
          {taller.modalidad.map((m) => {
            return (
              <div key={m.unidad} className={cn(tarjeta, 'px-4 py-4')}>
                <p className={cn('text-[38px] font-extrabold leading-none', acento)}>{m.cifra}</p>
                <p className="mt-1.5 text-[14.5px] font-bold leading-tight">{m.unidad}</p>
                <p className="mt-0.5 text-[12.5px] leading-snug text-suave">{m.texto}</p>
              </div>
            );
          })}
        </div>
        <Etiqueta className="mt-10">{taller.tituloCategorias}</Etiqueta>
        <div className="mt-3 grid gap-4">
          {taller.categorias.map((c) => {
            return (
              <div key={c.nombre} className={cn(tarjeta, 'overflow-hidden')}>
                <div className="relative aspect-[16/9]">
                  <img src={c.foto} alt="" className="size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1150]/85 via-[#2a1150]/10 to-transparent" />
                  <p className="absolute bottom-2 left-5 font-script text-[54px] leading-none text-white">{c.nombre}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-[16px] font-bold">{c.cursos}</p>
                  <p className="font-mono text-[12px] font-bold text-magenta">{c.edades}</p>
                  <p className="mt-2 text-[14px] leading-snug text-suave">{c.foco}</p>
                </div>
              </div>
            );
          })}
        </div>
        {taller.notaCategorias && <p className="mt-3 text-[12px] leading-snug text-suave">{taller.notaCategorias}</p>}
        <div className={cn(tarjetaDegradado, 'relative mt-12 overflow-hidden rounded-[26px] p-7')}>
          <span aria-hidden className="absolute -right-2 -top-10 font-script text-[180px] leading-none text-white/15">
            “
          </span>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/80">Objetivo general</p>
          <p className="relative mt-3 text-[17px] font-semibold leading-relaxed">{taller.objetivoGeneral}</p>
        </div>
        <Etiqueta className="mt-10">Objetivos específicos</Etiqueta>
        <ol className="mt-3 grid gap-2.5">
          {taller.objetivosEspecificos.map((o, i) => {
            return (
              <li key={o} className={cn(tarjeta, 'flex items-start gap-3 px-4 py-3.5 text-[14.5px] leading-snug')}>
                <span className={cn(circulo, 'size-7 text-[12px]')}>{i + 1}</span>
                {o}
              </li>
            );
          })}
        </ol>
      </div>
    </Hoja>
  );
};

// Danza y cuerpo: un tramo oscuro con las cualidades y la escultura, y debajo los beneficios.
const Cuerpo: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-cuerpo">
      <Tramo tema="oscuro">
        <div className="px-6 pb-14 pt-12">
          <Apertura
            tema="oscuro"
            numero={numeroCapitulo(proyecto, 'cuerpo')}
            antetitulo="Cualidades físicas"
            titulo={
              <>
                Lo que la danza <span className={dorado}>entrena.</span>
              </>
            }
          />
          <ul className="mt-8 grid gap-5">
            {proyecto.cuerpo.cualidades.map((c) => {
              return (
                <li key={c.nombre}>
                  <div className="flex justify-between text-[15.5px] font-bold">
                    <span>{c.nombre}</span>
                    <span className="font-mono text-[12px] text-white/50">{c.nivel}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-[linear-gradient(90deg,#FF4FA3,#C653F0,#f5d27a)]" style={{ width: `${c.nivel}%` }} />
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-snug text-white/60">{c.texto}</p>
                </li>
              );
            })}
          </ul>
          <Subtitulo tema="oscuro" antetitulo="En términos de escultura" titulo={ESCULTURA.titulo} />
          <p className="mt-3 text-[15px] leading-relaxed text-white/70">{ESCULTURA.texto}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {ESCULTURA.elementos.map((e) => {
              return (
                <div key={e.nombre} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-[16px] font-bold text-[#f5d27a]">{e.nombre}</p>
                  <p className="mt-1 text-[13px] leading-snug text-white/70">{e.texto}</p>
                </div>
              );
            })}
          </div>
          <img src={ruta('/img/galeria/Ccya7v9v4jN_01.jpg')} alt="" className="mt-5 aspect-[16/9] w-full rounded-2xl object-cover object-[50%_60%] opacity-90" />
        </div>
      </Tramo>
      <div className="px-6 pt-4">
        <Subtitulo
          antetitulo={proyecto.cuerpo.tituloBeneficios}
          titulo={
            <>
              Propiocepción, expresión <span className={acento}>y confianza.</span>
            </>
          }
        />
        <div className="mt-6 grid gap-3">
          {proyecto.cuerpo.beneficios.map((b, i) => {
            return (
              <div key={b.nombre} className={cn(i === 0 ? tarjetaDegradado : tarjeta, 'rounded-[20px] p-5')}>
                <p className={cn('text-[19px] font-extrabold tracking-tight', i === 0 ? 'text-white' : acento)}>{b.nombre}</p>
                <p className={cn('mt-1.5 text-[14.5px] leading-relaxed', i === 0 ? 'text-white/85' : 'text-suave')}>{b.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Hoja>
  );
};

const Clase: Pagina = ({ proyecto, numero }) => {
  const conFoto = ELEMENTOS_TECNICOS.filter((e) => e.foto);
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-clase">
      <div className="px-6 pt-12">
        <Apertura
          numero={numeroCapitulo(proyecto, 'clase')}
          antetitulo="Desarrollo de la clase"
          titulo={
            <>
              90 minutos, <span className={acento}>seis momentos.</span>
            </>
          }
        >
          <p>{proyecto.clase.introLamina}</p>
        </Apertura>
        <div className="mt-7 flex h-[14px] overflow-hidden rounded-full shadow-[0_10px_24px_-14px_rgba(110,50,160,.4)]">
          {proyecto.clase.etapas.map((e, i) => {
            return <span key={e.nombre} style={{ flexGrow: e.minutos, background: TONOS[i] }} />;
          })}
        </div>
        <ol className="mt-5 grid gap-2.5">
          {proyecto.clase.etapas.map((e, i) => {
            return (
              <li key={e.nombre} className={cn(tarjeta, 'relative overflow-hidden py-3.5 pl-6 pr-4')}>
                <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: TONOS[i] }} />
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-[16px] font-bold leading-tight">
                    <span className="mr-1.5 font-mono text-[12px] text-tenue">0{i + 1}</span>
                    {e.nombre}
                  </p>
                  <span className="shrink-0 font-mono text-[12px] font-bold text-magenta">{e.minutos} min</span>
                </div>
                <p className="mt-1 text-[13.5px] leading-snug text-suave">{e.texto}</p>
              </li>
            );
          })}
        </ol>
        <Subtitulo
          antetitulo="Elementos técnicos"
          titulo={
            <>
              Piruette, suelo, saltos <span className={acento}>y tricks.</span>
            </>
          }
        />
        <div className={cn(tarjeta, 'mt-5 flex items-center gap-4 bg-[radial-gradient(circle_at_20%_55%,#f3e6ff,#ffffff)] px-4 py-4')}>
          <img src={ruta('/render/giro_012.webp')} alt="" className="h-[120px] w-auto shrink-0 drop-shadow-[0_14px_16px_rgba(157,92,255,0.4)]" />
          <div>
            <p className="text-[18px] font-bold">Piruette</p>
            <p className="mt-1 text-[13.5px] leading-snug text-suave">{ELEMENTOS_TECNICOS[0].texto}</p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {conFoto.slice(0, 4).map((e) => {
            return (
              <div key={e.nombre} className={cn(tarjeta, 'overflow-hidden')}>
                <img src={e.foto} alt="" className="aspect-[4/3] w-full object-cover" />
                <div className="px-3.5 py-3">
                  <p className="text-[15px] font-bold">{e.nombre}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-suave">{e.texto}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Etiqueta className="mt-10">Motions básicos</Etiqueta>
        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {MOTIONS.map((m) => {
            return (
              <div key={m.nombre} className={cn(tarjeta, 'flex justify-center py-3')}>
                <Motion {...m} />
              </div>
            );
          })}
        </div>
      </div>
    </Hoja>
  );
};

const Valores: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja tema="degradado" numero={numero} colegio={proyecto.colegio.nombre} id="cap-valores">
      <div className="px-6 pt-12">
        <Apertura tema="degradado" numero={numeroCapitulo(proyecto, 'valores')} antetitulo="Valores de la academia" titulo="Lo que se aprende más allá del paso." />
        <div className="mt-7 grid gap-3">
          {proyecto.valores.lista.map((v) => {
            return (
              <div key={v.nombre} className="rounded-[20px] border border-white/30 bg-white/15 px-5 py-4">
                <p className="text-[19px] font-extrabold leading-tight">✦ {v.nombre}</p>
                <p className="mt-1.5 text-[14.5px] leading-snug text-white/85">{v.texto}</p>
              </div>
            );
          })}
        </div>
        <Etiqueta tema="degradado" className="mt-10">
          Elementos transversales
        </Etiqueta>
        <div className="mt-3 flex flex-wrap gap-2">
          {proyecto.valores.transversales.map((t, i) => {
            return (
              <span key={t} className={cn('rounded-full px-3.5 py-1.5 text-[13.5px] font-semibold', i % 3 === 0 ? 'bg-white text-magenta' : 'border border-white/40 text-white')}>
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </Hoja>
  );
};

const Historia: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-historia">
      <div className="px-6 pt-12">
        <Apertura
          numero={numeroCapitulo(proyecto, 'historia')}
          antetitulo="Breve historia"
          titulo={
            <>
              El cheerdance <span className={acento}>en Chile.</span>
            </>
          }
        />
        <ol className="relative mt-9 grid gap-7 pl-8">
          <span aria-hidden className="absolute bottom-3 left-[10px] top-3 w-[3px] rounded-full bg-[linear-gradient(180deg,#FF4FA3,#C653F0,#9D5CFF)]" />
          {HISTORIA.map((h) => {
            return (
              <li key={h.anio} className="relative">
                <span className="absolute -left-8 top-0.5 block size-6 rounded-full border-4 border-[#fcf8fe] bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)] shadow-[0_8px_18px_-6px_rgba(214,60,190,.7)]" />
                <p className="font-mono text-[12.5px] font-bold text-magenta">{h.anio}</p>
                <p className="mt-0.5 text-[17px] font-bold leading-tight">{h.titulo}</p>
                <p className="mt-1.5 text-[14px] leading-snug text-suave">{h.texto}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </Hoja>
  );
};

const Campeonatos: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-campeonatos">
      <div className="px-6 pt-12">
        <Apertura
          numero={numeroCapitulo(proyecto, 'campeonatos')}
          antetitulo="Dónde competir"
          titulo={
            <>
              Los campeonatos <span className={acento}>de la temporada.</span>
            </>
          }
        />
        <div className="mt-7 grid gap-3.5">
          {CAMPEONATOS.slice(0, 3).map((c) => {
            return (
              <div key={c.nombre} className={cn('p-5', c.destacado ? tarjetaOscura : tarjeta)}>
                <p className={cn('text-[11px] font-bold uppercase tracking-[0.14em]', c.destacado ? dorado : 'text-magenta')}>{c.organiza}</p>
                <p className="mt-1.5 text-[20px] font-extrabold leading-tight">{c.nombre}</p>
                <p className={cn('mt-2 text-[13.5px] font-semibold', c.destacado ? 'text-white/80' : 'text-tinta')}>{c.cuando}</p>
                <p className={cn('text-[13.5px]', c.destacado ? 'text-white/70' : 'text-suave')}>{c.donde}</p>
                <p className={cn('mt-2 text-[13.5px] leading-snug', c.destacado ? 'text-white/70' : 'text-suave')}>{c.detalle}</p>
              </div>
            );
          })}
        </div>
        <Etiqueta className="mt-10">Temporada del equipo competitivo</Etiqueta>
        <ol className="mt-3 grid gap-2.5">
          {proyecto.temporada.map((t, i) => {
            return (
              <li key={t.mes} className={cn(tarjeta, 'relative overflow-hidden py-3.5 pl-6 pr-4')}>
                <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: TONOS[i % TONOS.length] }} />
                <p className="font-mono text-[13px] font-bold">{t.mes}</p>
                <p className="mt-0.5 text-[14px] leading-snug text-suave">{t.texto}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </Hoja>
  );
};

const Propuesta: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja tema="oscuro" numero={numero} colegio={proyecto.colegio.nombre} id="cap-propuesta">
      <div className="px-6 pt-12">
        <Apertura
          tema="oscuro"
          numero={numeroCapitulo(proyecto, 'propuesta')}
          antetitulo="Propuesta comercial"
          titulo={
            <>
              Esto es una venta: <span className={dorado}>un producto para el colegio.</span>
            </>
          }
        />
        <div className="mt-8 grid gap-4">
          {proyecto.propuesta.planes.map((p) => {
            return (
              <div
                key={p.nombre}
                className={cn(
                  'rounded-[24px] p-6',
                  p.venta ? 'bg-gradient-to-br from-[#3a2160] to-[#24123f] shadow-[0_30px_70px_-26px_rgba(245,210,122,0.6)] ring-2 ring-[#f5d27a]/80' : 'bg-white text-tinta',
                )}
              >
                {p.venta && (
                  <span className="mb-4 inline-block rounded-full bg-[linear-gradient(110deg,#c9952f,#ffe7a3,#d9a641)] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#3d2a05]">
                    Producto a la venta
                  </span>
                )}
                <p className={cn('text-[12px] font-bold uppercase tracking-[0.16em]', p.venta ? dorado : 'text-magenta')}>{p.bajada}</p>
                <p className="mt-1 text-[28px] font-extrabold leading-tight tracking-tight">{p.nombre}</p>
                <ul className="mt-4 grid gap-2">
                  {p.incluye.map((item) => {
                    return (
                      <li key={item} className={cn('flex items-start gap-2.5 text-[14.5px] leading-snug', p.venta ? 'text-white/85' : 'text-suave')}>
                        <span className={cn(visto, p.venta ? 'bg-[#f5d27a] text-[#3d2a05]' : 'bg-[#1fa97a]/15 text-[#1fa97a]')}>✓</span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-7 text-[14px] leading-relaxed text-white/65">
          <span className="font-bold text-white">Se cotiza aparte:</span> {ADICIONALES.join(' · ')}. Valor según {proyecto.propuesta.cotizacion}.
        </p>
      </div>
    </Hoja>
  );
};

const Merch: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-merch">
      <div className="px-6 pt-12">
        <Apertura
          numero={numeroCapitulo(proyecto, 'merch')}
          antetitulo="Merch del equipo"
          titulo={
            <>
              Vestir los colores <span className={acento}>{proyecto.merch.colores}</span>
            </>
          }
        />
        <div className="mt-7 grid gap-3">
          {proyecto.merch.piezas.map((m) => {
            return (
              <div key={m.id} className={cn(tarjeta, 'flex items-center gap-4 overflow-hidden pr-4')}>
                <div className="flex w-[112px] shrink-0 items-center self-stretch bg-[radial-gradient(circle_at_50%_45%,#f1e2ff,#ffffff_72%)] px-2.5 py-2">
                  <MerchIlustracion id={m.id} nombre={m.nombre} equipo={proyecto.merch.equipo} paleta={proyecto.merch.paleta} />
                </div>
                <div className="py-4">
                  <p className="text-[17px] font-bold leading-tight">{m.nombre}</p>
                  <p className="mt-1 text-[13.5px] leading-snug text-suave">{m.texto}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Hoja>
  );
};

// Viajes: el tramo oscuro de Disney con sus destinos, y debajo la ruta de tres años hasta Orlando.
const Viajes: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} id="cap-viajes">
      <Tramo tema="oscuro">
        <div className="relative h-[230px]">
          <img src={ruta('/img/proyecto/castillo-disney.jpg')} alt="" className="size-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c1030]/30 to-[#1c1030]" />
        </div>
        <div className="px-6 pb-12 pt-2">
          <Apertura
            tema="oscuro"
            numero={numeroCapitulo(proyecto, 'viajes')}
            antetitulo="Proyección internacional"
            titulo={
              <>
                <span className="block">Próxima parada:</span>
                <span className={cn('block pb-1 pt-1 font-script text-[80px] font-normal leading-[1] tracking-normal', dorado)} style={resplandorDorado}>
                  Disney
                </span>
              </>
            }
          />
          <div className="mt-6 grid gap-3">
            {DESTINOS.map((d) => {
              return (
                <div key={d.nombre} className="rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-4">
                  <p className="text-[18px] font-bold leading-tight">{d.nombre}</p>
                  <p className="mt-0.5 font-mono text-[11.5px] font-bold text-[#f5d27a]">
                    {d.cuando} · {d.lugar}
                  </p>
                  <p className="mt-1.5 text-[14px] leading-snug text-white/70">{d.texto}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Polaroid src={ruta('/img/proyecto/worlds-2019.jpg')} imgClass="aspect-[4/3]" />
            <Polaroid src={ruta('/img/proyecto/espn-wide-world.jpg')} imgClass="aspect-[4/3]" />
          </div>
          <p className="mt-6 text-[10px] leading-snug text-white/45">Fotos: {CREDITOS_FOTOS.join(' · ')}</p>
        </div>
      </Tramo>
      <div className="px-6 pt-4">
        <Subtitulo
          antetitulo="Ruta internacional"
          titulo={
            <>
              Tres años <span className={acento}>hasta Orlando.</span>
            </>
          }
        />
        <ol className="mt-6 grid">
          {RUTA_INTERNACIONAL.map((paso, i) => {
            return (
              <li key={paso.anio}>
                {i > 0 && (
                  <span aria-hidden className="block py-1.5 text-center text-[26px] leading-none text-[#9d5cff]">
                    ↓
                  </span>
                )}
                <div className={cn('rounded-[24px] p-6', i === 2 ? tarjetaOscura : tarjeta)}>
                  <p className={cn('font-script text-[46px] leading-none', i === 2 ? dorado : acento)}>{paso.anio}</p>
                  <p className="mt-2 text-[22px] font-extrabold tracking-tight">{paso.titulo}</p>
                  <p className={cn('mt-1.5 text-[14.5px] leading-relaxed', i === 2 ? 'text-white/75' : 'text-suave')}>{paso.texto}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="mt-7 text-[15px] leading-relaxed text-suave">
          El viaje se financia con un plan junto a las familias (actividades, rifas y auspicios) desde el primer año, para que llegar a Disney sea una meta
          posible para todo el equipo.
        </p>
      </div>
    </Hoja>
  );
};

const Cierre: Pagina = ({ proyecto }) => {
  return (
    <Hoja tema="degradado">
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-14 text-center">
        <img src={ruta('/render/giro_012.webp')} alt="" className="h-[180px] w-auto drop-shadow-[0_24px_30px_rgba(60,20,110,0.45)]" />
        <p className="mt-2 font-script text-[80px] leading-[0.95]" style={{ textShadow: '0 0 30px rgba(255,255,255,0.55)' }}>
          ¡Gracias!
        </p>
        <p className="mt-3 text-[17px] leading-relaxed text-white/90">Conversemos cómo llevar el cheerdance {conArticulo(proyecto, 'a')}.</p>
        <div className="mt-8 grid w-full max-w-[310px] gap-3 text-[15px] font-semibold">
          <span className="rounded-full bg-white px-6 py-3.5 text-magenta">WhatsApp {CONTACTO_ACADEMIA.telefono}</span>
          <span className="rounded-full border border-white/50 px-6 py-3.5">{CONTACTO_ACADEMIA.correo}</span>
          <span className="rounded-full border border-white/50 px-6 py-3.5">@academiaspiritdance</span>
        </div>
        <p className="mt-10 text-[13px] leading-relaxed text-white/75">
          Prof. {PROFESORA.nombre}
          <br />
          Directora y fundadora de Spirit Dance Academy
        </p>
      </div>
    </Hoja>
  );
};

const CAPITULOS: Record<IdCapitulo, Pagina> = {
  academia: Academia,
  profesora: Profesora,
  colegio: Colegio,
  taller: Taller,
  cuerpo: Cuerpo,
  clase: Clase,
  valores: Valores,
  historia: Historia,
  campeonatos: Campeonatos,
  propuesta: Propuesta,
  merch: Merch,
  viajes: Viajes,
};

// Portada, índice, un capítulo por página en el orden del proyecto, y el cierre.
export const DocumentoMovil = ({ proyecto }: { proyecto: Proyecto }) => {
  const paginas = [Portada, Indice, ...proyecto.capitulos.map(({ id }) => CAPITULOS[id]), Cierre];
  return (
    <>
      {paginas.map((Pagina, i) => {
        return <Pagina key={i} proyecto={proyecto} numero={i + 1} />;
      })}
    </>
  );
};
