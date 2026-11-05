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
  historiaDe,
  hitosDe,
  MOTIONS,
  numeroCapitulo,
  PROFESORA,
  RUTA_INTERNACIONAL,
  enGrupos,
  type Hito,
  type IdCapitulo,
  type Proyecto,
  type Video,
} from '@/data/proyecto';
import { ruta } from '@/lib/ruta';
import { cn } from '@/lib/cn';
import { TONOS } from './Laminas';

// El PDF para celular: láminas horizontales de 844 × 390, el tamaño de un iPhone girado. Con el teléfono vertical se ven
// diminutas, así que invitan a girarlo; girado, cada lámina llena la pantalla y se lee sin zoom. Tienen la misma
// información que las láminas para computador, repartida en más páginas y con letra más grande.
type Tema = 'claro' | 'oscuro' | 'degradado';
type PaginaProps = { proyecto: Proyecto; numero: number };
type Pagina = (props: PaginaProps) => React.JSX.Element | null;

const EN_PALABRAS: Record<number, string> = { 10: 'Diez', 11: 'Once', 12: 'Doce', 13: 'Trece' };
const FONDOS: Record<Tema, string> = {
  claro: 'bg-[#fcf8fe] text-tinta',
  oscuro: 'bg-[#1c1030] text-white',
  degradado: 'bg-[linear-gradient(125deg,#ff4fa3_0%,#c653f0_55%,#7b4be0_100%)] text-white',
};
// Colores planos y no texto con degradado: los visores de PDF dibujan un borde alrededor del texto recortado con background-clip.
// Por lo mismo las fotos van rectas: al imprimir una foto con object-cover girada, Chrome repite trozos de la foto en el borde.
const tituloGrande = 'text-[27px] font-extrabold leading-[1.06] tracking-[-0.03em]';
const acento = 'text-[#cf3fcf]';
const dorado = 'text-[#f5d27a]';
const resplandor = { textShadow: '0 0 22px rgba(255,79,163,0.55), 0 0 44px rgba(157,92,255,0.45)' };
const resplandorDorado = { textShadow: '0 0 20px rgba(245,210,122,0.55)' };
const tarjeta = 'rounded-[16px] border border-white bg-white/75 shadow-[0_1px_1px_rgba(80,40,120,.04),0_14px_30px_-20px_rgba(110,50,160,.35)]';
const tarjetaOscura = 'rounded-[18px] bg-[#1c1030] text-white shadow-[0_18px_36px_-18px_rgba(28,16,48,.8)]';
const tarjetaDegradado = 'rounded-[18px] bg-[linear-gradient(125deg,#ff4fa3_0%,#c653f0_55%,#7b4be0_100%)] text-white shadow-[0_18px_36px_-18px_rgba(214,60,190,.7)]';
const circulo = 'grid shrink-0 place-items-center rounded-full bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)] font-mono font-bold text-white';
const visto = 'mt-[1px] grid size-[15px] shrink-0 place-items-center rounded-full text-[9px] font-bold';

const colorEtiqueta = (tema: Tema) => (tema === 'claro' ? 'text-magenta' : tema === 'oscuro' ? dorado : 'text-white/80');

const Brillos = ({ tema }: { tema: Tema }) => {
  if (tema === 'degradado') {
    return <div aria-hidden className="pointer-events-none absolute -right-40 -top-56 size-[560px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.28),transparent)]" />;
  }
  const [arriba, abajo] = tema === 'claro' ? ['rgba(255,196,226,0.7)', 'rgba(220,203,255,0.8)'] : ['rgba(157,92,255,0.42)', 'rgba(255,79,163,0.34)'];
  return (
    <>
      <div aria-hidden className="pointer-events-none absolute -left-48 -top-56 size-[560px]" style={{ background: `radial-gradient(closest-side, ${arriba}, transparent)` }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-64 -right-40 size-[600px]" style={{ background: `radial-gradient(closest-side, ${abajo}, transparent)` }} />
    </>
  );
};

// Una lámina. Con número lleva al pie el nombre del colegio y el número de página.
const Hoja = ({ tema = 'claro', numero, colegio, className, children }: { tema?: Tema; numero?: number; colegio?: string; className?: string; children: ReactNode }) => {
  return (
    <section className={cn('lamina-movil relative overflow-hidden', FONDOS[tema])}>
      <Brillos tema={tema} />
      <div className={cn('relative h-full px-9 pb-9 pt-7', className)}>{children}</div>
      {numero !== undefined && (
        <footer className={cn('absolute inset-x-9 bottom-2.5 flex items-center justify-between text-[9.5px] font-semibold', tema === 'claro' ? 'text-suave' : 'text-white/60')}>
          <span>
            <span className="font-script text-[14px]">Spirit Dance</span> · Proyecto CheerDance {colegio}
          </span>
          <span className="font-mono">{String(numero).padStart(2, '0')}</span>
        </footer>
      )}
    </section>
  );
};

// En la lámina que abre un capítulo, el antetítulo lleva su número.
const Encabezado = ({ antetitulo, titulo, capitulo, tema = 'claro', className }: { antetitulo: string; titulo: ReactNode; capitulo?: string; tema?: Tema; className?: string }) => {
  return (
    <header className={className}>
      <p className={cn('text-[10.5px] font-bold uppercase tracking-[0.2em]', colorEtiqueta(tema))}>
        {capitulo && <span className="mr-2 rounded-full border border-current px-1.5 py-px font-mono tracking-normal">{capitulo}</span>}
        {antetitulo}
      </p>
      <h2 className={cn(tituloGrande, 'mt-1.5')}>{titulo}</h2>
    </header>
  );
};

const Etiqueta = ({ children, tema = 'claro', className }: { children: ReactNode; tema?: Tema; className?: string }) => {
  return <p className={cn('text-[10px] font-bold uppercase tracking-[0.18em]', colorEtiqueta(tema), className)}>{children}</p>;
};

const Foto = ({ src, className, imgClass }: { src: string; className?: string; imgClass?: string }) => {
  return (
    <div className={cn('rounded-[4px] bg-white p-[5px] pb-[8px] shadow-[0_1px_1px_rgba(80,40,120,0.06),0_16px_28px_-14px_rgba(80,40,120,0.45)]', className)}>
      <img src={src} alt="" className={cn('block w-full rounded-[2px] object-cover', imgClass)} />
    </div>
  );
};

const Portada: Pagina = ({ proyecto }) => {
  return (
    <Hoja tema="oscuro" className="grid grid-cols-[1.3fr_1fr] items-center gap-6 py-0">
      <div>
        <img src={ruta('/img/proyecto/logo-dorado.png')} alt="" className="mb-2 h-[50px] w-auto drop-shadow-[0_8px_18px_rgba(245,210,122,0.45)]" />
        <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#f5d27a]">Proyecto 2027 · {proyecto.colegio.comuna}</p>
        <h1 className="mt-1">
          <span className="block pb-1 font-script text-[76px] leading-[0.9] text-[#ffa3dc]" style={resplandor}>
            CheerDance
          </span>
          <span className="block text-[29px] font-extrabold leading-none tracking-[-0.03em]">{proyecto.colegio.nombre}</span>
        </h1>
        <p className="mt-3 max-w-[400px] text-[13px] leading-relaxed text-white/75">{proyecto.portada.bajadaLamina}</p>
        {proyecto.destinatario && (
          <p className="mt-3 text-[12px] text-white/80">
            Dirigido a <span className="font-bold text-[#f5d27a]">{proyecto.destinatario.nombre}</span>, {proyecto.destinatario.cargo}
          </p>
        )}
        <p className={cn('text-[11px] text-white/60', proyecto.destinatario ? 'mt-1' : 'mt-4')}>
          Presenta <span className="font-bold text-white">Spirit Dance Academy</span> · Prof. {PROFESORA.nombre}
        </p>
      </div>
      <div className="relative h-[300px]">
        <Foto src={ruta('/img/galeria/copa-super-nacional-2019.jpg')} className="absolute left-0 top-2 w-[150px]" imgClass="aspect-[4/5]" />
        <Foto src={ruta('/img/galeria/mini-pompones-2019.jpg')} className="absolute right-0 top-8 w-[136px]" imgClass="aspect-[4/5]" />
        <Foto src={ruta('/img/galeria/selecciones-cancha-2019.jpg')} className="absolute bottom-0 left-12 w-[210px]" imgClass="aspect-[4/3]" />
      </div>
      <GiraElTelefono />
    </Hoja>
  );
};

// Con el teléfono vertical la lámina se ve a menos de la mitad de su tamaño: el aviso es grande para que se note igual.
const GiraElTelefono = () => {
  return (
    <p className="absolute right-7 top-3 flex items-center gap-2 rounded-full border border-[#f5d27a]/60 bg-[#f5d27a]/10 py-1 pl-2 pr-3.5 text-[14px] font-bold text-[#f5d27a]">
      <svg viewBox="0 0 32 32" aria-hidden className="size-[30px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="26" height="15" rx="3" />
        <path d="M25 19.5h.01" />
        <path d="M9 8.5a9 9 0 0 1 14 0" />
        <path d="M23 5v3.5h-3.5" />
      </svg>
      Gira el teléfono
    </p>
  );
};

const Indice: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo="Contenido"
        titulo={
          <>
            {EN_PALABRAS[proyecto.capitulos.length] ?? proyecto.capitulos.length} capítulos, <span className={acento}>un proyecto.</span>
          </>
        }
      />
      <ol className="mt-6 grid grid-cols-3 gap-x-6 gap-y-3.5">
        {proyecto.capitulos.map((capitulo) => {
          return (
            <li key={capitulo.id} className="flex items-center gap-3">
              <span className={cn(circulo, 'size-[34px] text-[12px] shadow-[0_8px_20px_-8px_rgba(214,60,190,.6)]')}>{numeroCapitulo(proyecto, capitulo.id)}</span>
              <span className="text-[16px] font-bold">{capitulo.titulo}</span>
            </li>
          );
        })}
      </ol>
    </Hoja>
  );
};

const Academia: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} className="grid grid-cols-[1fr_290px] gap-7">
      <div>
        <Encabezado
          capitulo={numeroCapitulo(proyecto, 'academia')}
        antetitulo="Presentación de la academia"
          titulo={
            <>
              Spirit Dance <span className={acento}>Academy.</span>
            </>
          }
        />
        <p className="mt-2.5 text-[12.5px] leading-relaxed text-suave">{ACADEMIA.objetivo}</p>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {ACADEMIA.datos.map((dato) => {
            return (
              <div key={dato.texto} className={cn(tarjeta, 'px-3 py-2.5')}>
                <p className={cn('text-[22px] font-extrabold leading-none', acento)}>{dato.cifra}</p>
                <p className="mt-1 text-[10.5px] leading-snug text-suave">{dato.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 content-start gap-2 pt-1">
        <Foto src={ACADEMIA.fotos[0].src} className="col-span-2" imgClass="aspect-[16/9]" />
        <Foto src={ACADEMIA.fotos[1].src} imgClass="aspect-[4/3]" />
        <Foto src={ACADEMIA.fotos[2].src} imgClass="aspect-[4/3]" />
      </div>
    </Hoja>
  );
};

const Profesora: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} className="grid grid-cols-[205px_1fr] items-center gap-9">
      <div className="relative">
        <div className="absolute inset-[-14%] rounded-full bg-[radial-gradient(closest-side,rgba(255,196,64,0.5),rgba(255,79,163,0.2)_60%,transparent)]" />
        <div className="relative rounded-[4px] bg-white p-2 pb-2.5 shadow-[0_18px_30px_-12px_rgba(80,40,120,0.5)]">
          <img src={PROFESORA.foto} alt="" className="aspect-[4/5] w-full rounded-[2px] object-cover" />
          <p className="mt-1.5 font-script text-[22px] leading-none text-tinta/75">Paulina Quezada</p>
        </div>
      </div>
      <div>
        <Encabezado
          capitulo={numeroCapitulo(proyecto, 'profesora')}
        antetitulo="Profesional a cargo"
          titulo={
            <>
              {PROFESORA.nombre.replace(' Sepúlveda', '')} <span className={acento}>Sepúlveda.</span>
            </>
          }
        />
        <p className="mt-2 text-[13px] font-semibold text-suave">{PROFESORA.cargo} · más de 25 años de experiencia</p>
        <ul className="mt-4 grid gap-2">
          {PROFESORA.titulos.map((t) => {
            return (
              <li key={t} className="flex items-start gap-2 text-[13px] font-medium">
                <span className={cn(visto, 'bg-[#1fa97a]/15 text-[#1fa97a]')}>✓</span>
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </Hoja>
  );
};

// La trayectoria en páginas de hasta seis hitos: con más, la lámina se pasa del borde inferior.
const paginaTrayectoria = (hitos: Hito[], tramo: number): Pagina => {
  const PaginaTrayectoria: Pagina = ({ proyecto, numero }) => {
    return (
      <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
        <Encabezado
          antetitulo={tramo === 0 ? 'Trayectoria' : 'Trayectoria · continuación'}
          titulo={
            <>
              Más de 25 años <span className={acento}>formando equipos.</span>
            </>
          }
        />
        <ol className="mt-4 grid grid-cols-2 gap-x-7 gap-y-2.5">
          {hitos.map((hito) => {
            return (
              <li key={hito.texto} className="relative border-l-2 border-[#9d5cff]/25 pl-3.5">
                <span className="absolute -left-[5px] top-1 size-2 rounded-full bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)]" />
                <p className="font-mono text-[10.5px] font-bold text-magenta">{hito.periodo}</p>
                <p className="text-[12px] leading-snug">{hito.texto}</p>
              </li>
            );
          })}
        </ol>
      </Hoja>
    );
  };
  return PaginaTrayectoria;
};

// Un video de sus equipos. Es un enlace, así que también abre YouTube desde el PDF. Solo, va a lo ancho.
const TarjetaVideo = ({ video, sola }: { video: Video; sola: boolean }) => {
  return (
    <a href={video.url} className={cn(tarjeta, 'flex overflow-hidden', sola ? 'h-[230px]' : 'flex-col')}>
      <span className={cn('relative grid shrink-0 place-items-center bg-[radial-gradient(circle_at_25%_20%,rgba(255,79,163,0.5),transparent_60%),radial-gradient(circle_at_85%_90%,rgba(157,92,255,0.55),transparent_60%)] bg-[#1c1030]', sola ? 'w-[380px]' : 'h-[118px]')}>
        <span className={cn(circulo, 'size-[62px] shadow-[0_10px_26px_-6px_rgba(255,79,163,.8)]')}>
          <svg viewBox="0 0 24 24" aria-hidden className="ml-[8%] size-[45%] fill-white">
            <path d="M7 4.5v15l12.5-7.5z" />
          </svg>
        </span>
        <span className="absolute bottom-2.5 right-3.5 font-mono text-[10px] font-bold text-white/60">YouTube</span>
      </span>
      <span className={cn('flex flex-col justify-center', sola ? 'px-8' : 'px-4 py-3')}>
        <span className={cn('font-script leading-none text-tinta', sola ? 'text-[46px]' : 'text-[28px]')}>{video.titulo}</span>
        <span className="mt-1 text-[12px] text-suave">{video.detalle}</span>
        <span className="mt-1.5 text-[12px] font-bold text-magenta">▶ Ver en YouTube</span>
      </span>
    </a>
  );
};

// Los videos de sus equipos, de a tres por lámina, después de la trayectoria.
const paginaVideos = (videos: Video[], tramo: number): Pagina => {
  const PaginaVideos: Pagina = ({ proyecto, numero }) => {
    return (
      <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
        <Encabezado
          antetitulo={tramo === 0 ? 'En video · toque para verlo' : 'En video · continuación'}
          titulo={
            <>
              Así bailan <span className={acento}>sus equipos.</span>
            </>
          }
        />
        <div className="mt-4 grid gap-3" style={{ gridTemplateColumns: `repeat(${videos.length}, minmax(0, 1fr))` }}>
          {videos.map((video) => {
            return <TarjetaVideo key={video.url} video={video} sola={videos.length === 1} />;
          })}
        </div>
      </Hoja>
    );
  };
  return PaginaVideos;
};

const ColegioRed: Pagina = ({ proyecto, numero }) => {
  const colegio = proyecto.enElColegio;
  if (!colegio) return null;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        capitulo={numeroCapitulo(proyecto, 'colegio')}
        antetitulo="El proyecto en el colegio"
        titulo={
          <>
            Pensado para <span className={acento}>{colegio.nombre}.</span>
          </>
        }
      />
      <p className="mt-1.5 max-w-[700px] text-[12px] leading-snug text-suave">{colegio.intro}</p>
      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {colegio.red.map((r) => {
          return (
            <div key={r.colegio} className={cn('px-3.5 py-2.5', r.destacado ? tarjetaOscura : tarjeta)}>
              <p className={cn('text-[9.5px] font-bold uppercase tracking-[0.14em]', r.destacado ? dorado : 'text-magenta')}>{r.logro}</p>
              <p className="text-[15px] font-extrabold leading-tight">{r.colegio}</p>
              <p className={cn('mt-0.5 text-[11px] leading-snug', r.destacado ? 'text-white/75' : 'text-suave')}>{r.texto}</p>
            </div>
          );
        })}
      </div>
      <div className={cn(tarjetaDegradado, 'mt-3 px-5 py-3')}>
        <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-white/80">{colegio.encuentro.etiqueta}</p>
        <p className="text-[16px] font-extrabold tracking-tight">{colegio.encuentro.nombre}</p>
        <p className="mt-0.5 text-[11px] leading-snug text-white/90">{colegio.encuentro.texto}</p>
      </div>
    </Hoja>
  );
};

const ColegioPilares: Pagina = ({ proyecto, numero }) => {
  const colegio = proyecto.enElColegio;
  if (!colegio) return null;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo="Sus pilares"
        titulo={
          <>
            Los pilares de {colegio.nombre}, <span className={acento}>en cada clase.</span>
          </>
        }
      />
      <div className="mt-4 grid grid-cols-2 gap-3">
        {colegio.pilares.map((p) => {
          return (
            <div key={p.nombre} className={cn(tarjeta, 'px-4 py-3')}>
              <p className={cn('text-[15px] font-extrabold leading-tight', acento)}>✦ {p.nombre}</p>
              <p className="mt-1 text-[12px] leading-snug text-suave">{p.texto}</p>
            </div>
          );
        })}
      </div>
    </Hoja>
  );
};

const ColegioCompromisos: Pagina = ({ proyecto, numero }) => {
  const colegio = proyecto.enElColegio;
  if (!colegio) return null;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo="Cómo trabajamos en el colegio"
        titulo={
          <>
            Salvaguarda <span className={acento}>y formato de academia.</span>
          </>
        }
      />
      <div className="mt-3 grid grid-cols-[1.3fr_1fr] gap-3">
        <div className={cn(tarjetaOscura, 'px-5 py-3')}>
          <Etiqueta tema="oscuro">Compromisos de Salvaguarda</Etiqueta>
          <ul className="mt-2 grid gap-1">
            {colegio.salvaguarda.map((c) => {
              return (
                <li key={c} className="flex items-start gap-2 text-[11px] leading-[1.3] text-white/85">
                  <span className={cn(visto, 'bg-[#f5d27a] text-[#3d2a05]')}>✓</span>
                  {c}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={cn(tarjeta, 'px-5 py-4')}>
          <Etiqueta>Cómo entra en el colegio</Etiqueta>
          <ul className="mt-2.5 grid gap-2">
            {colegio.formato.map((f) => {
              return (
                <li key={f} className="flex items-start gap-2 text-[11.5px] leading-snug">
                  <span className={cn(visto, 'bg-[#1fa97a]/15 text-[#1fa97a]')}>✓</span>
                  {f}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Hoja>
  );
};

const Taller: Pagina = ({ proyecto, numero }) => {
  const { taller } = proyecto;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        capitulo={numeroCapitulo(proyecto, 'taller')}
        antetitulo="Descripción de la actividad"
        titulo={
          <>
            {taller.titulo[0]} <span className={acento}>{taller.titulo[1]}</span>
          </>
        }
      />
      <p className="mt-1.5 max-w-[680px] text-[12.5px] leading-snug text-suave">
        {taller.publico} {taller.caracterLamina}
      </p>
      <div className="mt-3 grid grid-cols-4 gap-2.5">
        {taller.modalidad.map((m) => {
          return (
            <div key={m.unidad} className={cn(tarjeta, 'px-3.5 py-2.5')}>
              <p className={cn('text-[28px] font-extrabold leading-none', acento)}>{m.cifra}</p>
              <p className="mt-1 text-[12.5px] font-bold leading-tight">{m.unidad}</p>
              <p className="text-[10.5px] leading-snug text-suave">{m.texto}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-stretch gap-2">
        {taller.etapas.map((etapa, i) => {
          return [
            i > 0 && (
              <span key={`flecha-${etapa.nombre}`} className="self-center text-[22px] text-[#9d5cff]">
                →
              </span>
            ),
            <div key={etapa.nombre} className={cn('px-4 py-3', i === 0 ? tarjeta : tarjetaOscura)}>
              <p className={cn('text-[15px] font-extrabold', i === 0 ? acento : dorado)}>{etapa.nombre}</p>
              <p className={cn('mt-0.5 text-[11.5px] leading-snug', i === 0 ? 'text-suave' : 'text-white/80')}>{etapa.texto}</p>
            </div>,
          ];
        })}
      </div>
    </Hoja>
  );
};

const Categorias: Pagina = ({ proyecto, numero }) => {
  const { taller } = proyecto;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado antetitulo="Categorías" titulo={taller.tituloCategorias} />
      <div className="mt-3.5 grid gap-3" style={{ gridTemplateColumns: `repeat(${taller.categorias.length}, minmax(0, 1fr))` }}>
        {taller.categorias.map((c) => {
          return (
            <div key={c.nombre} className={cn(tarjeta, 'overflow-hidden')}>
              <div className="relative h-[104px]">
                <img src={c.foto} alt="" className="size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1150]/85 to-transparent" />
                <p className="absolute bottom-1 left-3 font-script text-[38px] leading-none text-white">{c.nombre}</p>
              </div>
              <div className="px-3.5 py-2.5">
                <p className="text-[13px] font-bold">{c.cursos}</p>
                <p className="font-mono text-[10px] font-bold text-magenta">{c.edades}</p>
                <p className="mt-0.5 text-[11.5px] leading-snug text-suave">{c.foco}</p>
              </div>
            </div>
          );
        })}
      </div>
      {taller.notaCategorias && <p className="mt-2 text-[10.5px] text-suave">{taller.notaCategorias}</p>}
    </Hoja>
  );
};

const ObjetivoGeneral: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} className="grid grid-cols-[1fr_230px] items-center gap-6">
      <div className={cn(tarjetaDegradado, 'relative overflow-hidden px-7 py-6')}>
        <span className="absolute -right-2 -top-8 font-script text-[150px] leading-none text-white/15">“</span>
        <Etiqueta tema="degradado">Objetivo general</Etiqueta>
        <p className="relative mt-2 text-[14.5px] font-semibold leading-relaxed">{proyecto.taller.objetivoGeneral}</p>
      </div>
      <Foto src={ruta('/img/galeria/seleccion-escenario-2019.jpg')} imgClass="aspect-[4/5]" />
    </Hoja>
  );
};

const ObjetivosEspecificos: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo="Objetivos específicos"
        titulo={
          <>
            Lo que se logra, <span className={acento}>clase a clase.</span>
          </>
        }
      />
      <ol className="mt-3.5 grid grid-cols-2 gap-2">
        {proyecto.taller.objetivosEspecificos.map((o, i) => {
          return (
            <li key={o} className={cn(tarjeta, 'flex items-start gap-2.5 px-3 py-2 text-[11px] leading-[1.35]')}>
              <span className={cn(circulo, 'size-[22px] text-[10px]')}>{i + 1}</span>
              {o}
            </li>
          );
        })}
      </ol>
    </Hoja>
  );
};

const Cuerpo: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja tema="oscuro" numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        tema="oscuro"
        capitulo={numeroCapitulo(proyecto, 'cuerpo')}
        antetitulo="Cualidades físicas"
        titulo={
          <>
            Lo que la danza <span className={dorado}>entrena.</span>
          </>
        }
      />
      <ul className="mt-4 grid grid-cols-2 gap-x-9 gap-y-3.5">
        {proyecto.cuerpo.cualidades.map((c) => {
          return (
            <li key={c.nombre}>
              <div className="flex justify-between text-[13px] font-bold">
                <span>{c.nombre}</span>
                <span className="font-mono text-[10.5px] text-white/50">{c.nivel}%</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[linear-gradient(90deg,#FF4FA3,#C653F0,#f5d27a)]" style={{ width: `${c.nivel}%` }} />
              </div>
              <p className="mt-1 text-[11px] leading-snug text-white/60">{c.texto}</p>
            </li>
          );
        })}
      </ul>
    </Hoja>
  );
};

const Escultura: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja tema="oscuro" numero={numero} colegio={proyecto.colegio.nombre} className="grid grid-cols-[1fr_240px] gap-7">
      <div>
        <Encabezado tema="oscuro" antetitulo="En términos de escultura" titulo={ESCULTURA.titulo} />
        <p className="mt-2 text-[12.5px] leading-relaxed text-white/70">{ESCULTURA.texto}</p>
        <div className="mt-3.5 grid grid-cols-2 gap-2.5">
          {ESCULTURA.elementos.map((e) => {
            return (
              <div key={e.nombre} className="rounded-[14px] border border-white/10 bg-white/[0.06] px-3.5 py-2.5">
                <p className="text-[14px] font-bold text-[#f5d27a]">{e.nombre}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-white/70">{e.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
      <img src={ruta('/img/galeria/Ccya7v9v4jN_01.jpg')} alt="" className="h-[310px] w-full rounded-[18px] object-cover object-[50%_60%] opacity-90" />
    </Hoja>
  );
};

const Beneficios: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo={proyecto.cuerpo.tituloBeneficios}
        titulo={
          <>
            Propiocepción, expresión <span className={acento}>y confianza.</span>
          </>
        }
      />
      <div className="mt-3.5 grid grid-cols-3 gap-2.5">
        {proyecto.cuerpo.beneficios.map((b, i) => {
          return (
            <div key={b.nombre} className={cn('px-4 py-3', i === 0 ? tarjetaDegradado : tarjeta)}>
              <p className={cn('text-[15px] font-extrabold tracking-tight', i === 0 ? 'text-white' : acento)}>{b.nombre}</p>
              <p className={cn('mt-1 text-[11px] leading-snug', i === 0 ? 'text-white/85' : 'text-suave')}>{b.texto}</p>
            </div>
          );
        })}
      </div>
    </Hoja>
  );
};

const Clase: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        capitulo={numeroCapitulo(proyecto, 'clase')}
        antetitulo="Desarrollo de la clase"
        titulo={
          <>
            90 minutos, <span className={acento}>seis momentos.</span>
          </>
        }
      />
      <div className="mt-3 flex h-[8px] overflow-hidden rounded-full shadow-[0_8px_18px_-10px_rgba(110,50,160,.4)]">
        {proyecto.clase.etapas.map((e, i) => {
          return <span key={e.nombre} style={{ flexGrow: e.minutos, background: TONOS[i] }} />;
        })}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {proyecto.clase.etapas.map((e, i) => {
          return (
            <div key={e.nombre} className={cn(tarjeta, 'relative overflow-hidden px-4 py-2')}>
              <span className="absolute inset-y-0 left-0 w-1" style={{ background: TONOS[i] }} />
              <div className="flex justify-between font-mono text-[10px] font-bold">
                <span className="text-tenue">0{i + 1}</span>
                <span className="text-magenta">{e.minutos} min</span>
              </div>
              <p className="text-[13.5px] font-bold leading-tight">{e.nombre}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-suave">{e.texto}</p>
            </div>
          );
        })}
      </div>
    </Hoja>
  );
};

const Tecnica: Pagina = ({ proyecto, numero }) => {
  const conFoto = ELEMENTOS_TECNICOS.filter((e) => e.foto);
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo="Elementos técnicos"
        titulo={
          <>
            Piruette, suelo, saltos <span className={acento}>y tricks.</span>
          </>
        }
      />
      <div className="mt-3.5 grid grid-cols-5 gap-2.5">
        <div className={cn(tarjeta, 'flex flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_50%_55%,#f3e6ff,#ffffff)] px-2.5 py-2')}>
          <img src={ruta('/render/giro_012.webp')} alt="" className="h-[118px] w-auto drop-shadow-[0_14px_16px_rgba(157,92,255,0.4)]" />
          <p className="mt-1 text-[13px] font-bold">Piruette</p>
          <p className="text-center text-[10.5px] leading-snug text-suave">{ELEMENTOS_TECNICOS[0].texto}</p>
        </div>
        {conFoto.slice(0, 4).map((e) => {
          return (
            <div key={e.nombre} className={cn(tarjeta, 'overflow-hidden')}>
              <img src={e.foto} alt="" className="h-[104px] w-full object-cover" />
              <div className="px-2.5 py-2">
                <p className="text-[13px] font-bold">{e.nombre}</p>
                <p className="text-[10.5px] leading-snug text-suave">{e.texto}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Hoja>
  );
};

const Motions: Pagina = ({ proyecto, numero }) => {
  const conFoto = ELEMENTOS_TECNICOS.filter((e) => e.foto);
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo="Motions básicos"
        titulo={
          <>
            La geometría <span className={acento}>del cheer.</span>
          </>
        }
      />
      <div className={cn(tarjeta, 'mt-3 flex h-[128px] items-center justify-around overflow-hidden px-4')}>
        {MOTIONS.map((m) => {
          return (
            <div key={m.nombre} className="scale-[0.82]">
              <Motion {...m} />
            </div>
          );
        })}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {conFoto.slice(4).map((e) => {
          return (
            <div key={e.nombre} className={cn(tarjeta, 'px-4 py-2.5')}>
              <p className={cn('text-[14px] font-extrabold', acento)}>{e.nombre}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-suave">{e.texto}</p>
            </div>
          );
        })}
      </div>
    </Hoja>
  );
};

const Valores: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja tema="degradado" numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado tema="degradado" capitulo={numeroCapitulo(proyecto, 'valores')}
        antetitulo="Valores de la academia" titulo="Lo que se aprende más allá del paso." />
      <div className="mt-3 grid grid-cols-3 gap-2">
        {proyecto.valores.lista.map((v) => {
          return (
            <div key={v.nombre} className="rounded-[16px] border border-white/30 bg-white/15 px-3.5 py-2">
              <p className="text-[14px] font-extrabold">✦ {v.nombre}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-white/85">{v.texto}</p>
            </div>
          );
        })}
      </div>
      <Etiqueta tema="degradado" className="mt-2.5">
        Elementos transversales
      </Etiqueta>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {proyecto.valores.transversales.map((t, i) => {
          return (
            <span key={t} className={cn('rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold', i % 3 === 0 ? 'bg-white text-magenta' : 'border border-white/40 text-white')}>
              {t}
            </span>
          );
        })}
      </div>
    </Hoja>
  );
};

// Qué es el cheer dance, antes de su historia. Solo en los proyectos que lo explican.
const Disciplina: Pagina = ({ proyecto, numero }) => {
  const { disciplina } = proyecto;
  if (!disciplina) return null;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre} className="grid grid-cols-[1fr_245px] gap-6">
      <div>
        <Encabezado
          capitulo={numeroCapitulo(proyecto, 'historia')}
        antetitulo="La disciplina"
          titulo={
            <>
              ¿Qué es el <span className={acento}>cheer dance?</span>
            </>
          }
        />
        <p className="mt-2 text-[12.5px] leading-relaxed text-suave">{disciplina.intro}</p>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {disciplina.estilos.map((e) => {
            return (
              <div key={e.nombre} className={cn(tarjeta, 'px-3.5 py-2.5')}>
                <p className={cn('text-[15px] font-extrabold', acento)}>✦ {e.nombre}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-suave">{e.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid content-start gap-2.5">
        <Foto src={ruta('/img/galeria/seleccion-escenario-2019.jpg')} imgClass="aspect-[16/10]" />
        <div className={cn(tarjetaOscura, 'px-4 py-3')}>
          <Etiqueta tema="oscuro">Un estilo de vida</Etiqueta>
          <p className="mt-1 text-[11.5px] leading-snug text-white/85">{disciplina.enLosColegios}</p>
        </div>
      </div>
    </Hoja>
  );
};

// La línea de tiempo va en dos láminas de cinco hitos.
const tramoHistoria = (desde: number, hasta?: number): Pagina => {
  const Tramo: Pagina = ({ proyecto, numero }) => {
    const hitos = historiaDe(proyecto).slice(desde, hasta);
    return (
      <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
        <Encabezado
          capitulo={desde === 0 && !proyecto.disciplina ? numeroCapitulo(proyecto, 'historia') : undefined}
          antetitulo={desde === 0 ? 'Breve historia' : 'Breve historia · continuación'}
          titulo={
            <>
              El cheerdance <span className={acento}>en Chile.</span>
            </>
          }
        />
        <div className="relative mt-5">
          <div className="absolute inset-x-0 top-[10px] h-[3px] rounded-full bg-[linear-gradient(90deg,#FF4FA3,#C653F0,#9D5CFF)]" />
          <ol className="relative grid grid-cols-5 gap-x-4">
            {hitos.map((h) => {
              return (
                <li key={h.anio}>
                  <span className="block size-[22px] rounded-full border-[3px] border-[#fcf8fe] bg-[linear-gradient(115deg,#FF4FA3,#9D5CFF)] shadow-[0_6px_14px_-4px_rgba(214,60,190,.7)]" />
                  <p className="mt-2 font-mono text-[11px] font-bold text-magenta">{h.anio}</p>
                  <p className="text-[13px] font-bold leading-tight">{h.titulo}</p>
                  <p className="mt-1 text-[11px] leading-snug text-suave">{h.texto}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Hoja>
    );
  };
  return Tramo;
};

const HistoriaInicio = tramoHistoria(0, 5);
const HistoriaFin = tramoHistoria(5);

const Campeonatos: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        capitulo={numeroCapitulo(proyecto, 'campeonatos')}
        antetitulo="Dónde competir"
        titulo={
          <>
            Los campeonatos <span className={acento}>de la temporada.</span>
          </>
        }
      />
      <div className="mt-4 grid grid-cols-[1.2fr_1fr_1fr] gap-3">
        {CAMPEONATOS.slice(0, 3).map((c) => {
          return (
            <div key={c.nombre} className={cn('px-4 py-3.5', c.destacado ? tarjetaOscura : tarjeta)}>
              <p className={cn('text-[9.5px] font-bold uppercase tracking-[0.14em]', c.destacado ? dorado : 'text-magenta')}>{c.organiza}</p>
              <p className="mt-1 text-[16px] font-extrabold leading-tight">{c.nombre}</p>
              <p className={cn('mt-1 text-[11.5px] font-semibold', c.destacado ? 'text-white/80' : 'text-tinta')}>{c.cuando}</p>
              <p className={cn('text-[11.5px]', c.destacado ? 'text-white/70' : 'text-suave')}>{c.donde}</p>
              <p className={cn('mt-1.5 text-[11px] leading-snug', c.destacado ? 'text-white/70' : 'text-suave')}>{c.detalle}</p>
            </div>
          );
        })}
      </div>
    </Hoja>
  );
};

const Temporada: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo="La temporada"
        titulo={
          <>
            El año, <span className={acento}>mes a mes.</span>
          </>
        }
      />
      <div className="mt-4 grid grid-cols-3 gap-3">
        {proyecto.temporada.map((t, i) => {
          return (
            <div key={t.mes} className={cn(tarjeta, 'relative px-4 py-3.5')}>
              <span className="absolute inset-x-4 top-0 h-1 rounded-b-full" style={{ background: TONOS[i] }} />
              <p className="font-mono text-[15px] font-bold">{t.mes}</p>
              <p className="mt-0.5 text-[12px] leading-snug text-suave">{t.texto}</p>
            </div>
          );
        })}
      </div>
    </Hoja>
  );
};

const Propuesta: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja tema="oscuro" numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        tema="oscuro"
        capitulo={numeroCapitulo(proyecto, 'propuesta')}
        antetitulo="Propuesta comercial"
        titulo={
          <>
            Esto es una venta: <span className={dorado}>un producto para el colegio.</span>
          </>
        }
      />
      <p className="mt-1.5 text-[11.5px] leading-snug text-white/70">{proyecto.propuesta.intro}</p>
      <div className="mt-3.5 grid grid-cols-2 gap-3.5">
        {proyecto.propuesta.planes.map((p) => {
          return (
            <div
              key={p.nombre}
              className={cn(
                'relative rounded-[18px] px-5 py-2.5',
                p.venta ? 'bg-gradient-to-br from-[#3a2160] to-[#24123f] shadow-[0_20px_44px_-20px_rgba(245,210,122,0.6)] ring-2 ring-[#f5d27a]/80' : 'bg-white text-tinta',
              )}
            >
              {p.venta && (
                <span className="absolute -top-2.5 left-5 rounded-full bg-[linear-gradient(110deg,#c9952f,#ffe7a3,#d9a641)] px-3 py-0.5 text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-[#3d2a05]">
                  Producto a la venta
                </span>
              )}
              <p className={cn('text-[9.5px] font-bold uppercase tracking-[0.16em]', p.venta ? dorado : 'text-magenta')}>{p.bajada}</p>
              <p className="text-[18px] font-extrabold leading-tight tracking-tight">{p.nombre}</p>
              <ul className="mt-1 grid gap-[3px]">
                {p.incluye.map((item) => {
                  return (
                    <li key={item} className={cn('flex items-start gap-1.5 text-[11px] leading-snug', p.venta ? 'text-white/85' : 'text-suave')}>
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
      <p className="mt-2 text-[10px] leading-snug text-white/65">
        <span className="font-bold text-white">Se cotiza aparte:</span> {ADICIONALES.join(' · ')}. Valor según {proyecto.propuesta.cotizacion}.
      </p>
    </Hoja>
  );
};

const Merch: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        capitulo={numeroCapitulo(proyecto, 'merch')}
        antetitulo="Merch del equipo"
        titulo={
          <>
            Vestir los colores <span className={acento}>{proyecto.merch.colores}</span>
          </>
        }
      />
      <div className="mt-3.5 grid grid-cols-3 gap-2.5">
        {proyecto.merch.piezas.map((m) => {
          return (
            <div key={m.id} className={cn(tarjeta, 'flex h-[112px] items-center overflow-hidden')}>
              <div className="flex h-full w-[104px] shrink-0 items-center bg-[radial-gradient(circle_at_50%_45%,#f1e2ff,#ffffff_72%)] px-2">
                <MerchIlustracion id={m.id} nombre={m.nombre} equipo={proyecto.merch.equipo} paleta={proyecto.merch.paleta} />
              </div>
              <div className="pl-1 pr-3">
                <p className="text-[13px] font-bold leading-tight">{m.nombre}</p>
                <p className="mt-0.5 text-[10.5px] leading-snug text-suave">{m.texto}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Hoja>
  );
};

// Fotos reales de la vestimenta de la academia, rectas como todas las del PDF.
const Vestimenta: Pagina = ({ proyecto, numero }) => {
  const vestimenta = proyecto.merch.vestimenta;
  if (!vestimenta) return null;
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <div className="grid h-full grid-cols-[200px_1fr] gap-5">
        <div>
          <Encabezado
            antetitulo="Vestimenta"
            titulo={
              <>
                Así se viste hoy <span className={acento}>la academia.</span>
              </>
            }
          />
          <p className="mt-2.5 text-[11.5px] leading-snug text-suave">{vestimenta.intro}</p>
        </div>
        <div className="grid grid-cols-4 gap-2.5 pt-1">
          {vestimenta.fotos.map((foto) => {
            return (
              <div key={foto.src}>
                <Foto src={foto.src} imgClass="aspect-[4/5]" />
                <p className="mt-1.5 text-[11px] font-bold leading-tight">{foto.nombre}</p>
                <p className="mt-0.5 text-[9.5px] leading-snug text-suave">{foto.texto}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Hoja>
  );
};

const Viajes: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja tema="oscuro" numero={numero} colegio={proyecto.colegio.nombre}>
      <img src={ruta('/img/proyecto/castillo-disney.jpg')} alt="" className="absolute inset-0 size-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1030] via-[#1c1030]/85 to-[#1c1030]/30" />
      <div className="relative">
        <Etiqueta tema="oscuro">
          <span className="mr-2 rounded-full border border-current px-1.5 py-px font-mono tracking-normal">{numeroCapitulo(proyecto, 'viajes')}</span>
          Proyección internacional
        </Etiqueta>
        <h2 className="mt-1">
          <span className="block text-[26px] font-extrabold leading-none tracking-tight">Próxima parada:</span>
          <span className={cn('block pb-1 font-script text-[64px] leading-[0.95]', dorado)} style={resplandorDorado}>
            Disney
          </span>
        </h2>
        <div className="mt-2 grid grid-cols-3 gap-2.5">
          {DESTINOS.map((d) => {
            return (
              <div key={d.nombre} className="rounded-[14px] border border-white/15 bg-[#1c1030]/70 px-3.5 py-2.5">
                <p className="text-[13.5px] font-bold">{d.nombre}</p>
                <p className="font-mono text-[9.5px] font-bold text-[#f5d27a]">
                  {d.cuando} · {d.lugar}
                </p>
                <p className="mt-1 text-[10.5px] leading-snug text-white/75">{d.texto}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-[8px] text-white/45">Fotos: {CREDITOS_FOTOS.join(' · ')}</p>
      </div>
    </Hoja>
  );
};

const Ruta: Pagina = ({ proyecto, numero }) => {
  return (
    <Hoja numero={numero} colegio={proyecto.colegio.nombre}>
      <Encabezado
        antetitulo="Ruta internacional"
        titulo={
          <>
            Tres años <span className={acento}>hasta Orlando.</span>
          </>
        }
      />
      <div className="mt-4 grid grid-cols-3 gap-5">
        {RUTA_INTERNACIONAL.map((paso, i) => {
          return (
            <div key={paso.anio} className={cn('relative px-5 py-4', i === 2 ? tarjetaOscura : tarjeta)}>
              <p className={cn('font-script text-[42px] leading-none', i === 2 ? dorado : acento)}>{paso.anio}</p>
              <p className="mt-2 text-[17px] font-extrabold tracking-tight">{paso.titulo}</p>
              <p className={cn('mt-1 text-[12px] leading-snug', i === 2 ? 'text-white/75' : 'text-suave')}>{paso.texto}</p>
              {i < 2 && <span className="absolute -right-[18px] top-1/2 z-10 -translate-y-1/2 text-[20px] text-[#9d5cff]">→</span>}
            </div>
          );
        })}
      </div>
      <p className="mt-4 max-w-[700px] text-[12px] leading-relaxed text-suave">
        El viaje se financia con un plan junto a las familias (actividades, rifas y auspicios) desde el primer año, para que llegar a Disney sea una meta
        posible para todo el equipo.
      </p>
    </Hoja>
  );
};

const Cierre: Pagina = ({ proyecto }) => {
  return (
    <Hoja tema="degradado" className="flex flex-col items-center justify-center py-0 text-center">
      <img src={ruta('/render/giro_012.webp')} alt="" className="h-[120px] w-auto drop-shadow-[0_18px_24px_rgba(60,20,110,0.45)]" />
      <p className="font-script text-[60px] leading-[0.95]" style={{ textShadow: '0 0 30px rgba(255,255,255,0.55)' }}>
        ¡Gracias!
      </p>
      <p className="mt-1.5 text-[15px] text-white/90">Conversemos cómo llevar el cheerdance {conArticulo(proyecto, 'a')}.</p>
      <div className="mt-4 flex gap-2.5 text-[12px] font-semibold">
        <span className="rounded-full bg-white px-4 py-2 text-magenta">WhatsApp {CONTACTO_ACADEMIA.telefono}</span>
        <span className="rounded-full border border-white/50 px-4 py-2">{CONTACTO_ACADEMIA.correo}</span>
        <span className="rounded-full border border-white/50 px-4 py-2">@academiaspiritdance</span>
      </div>
      <p className="mt-4 text-[11px] text-white/75">Prof. {PROFESORA.nombre} · Directora y fundadora de Spirit Dance Academy</p>
    </Hoja>
  );
};

const paginasDe = (proyecto: Proyecto): Record<IdCapitulo, Pagina[]> => ({
  academia: [Academia],
  profesora: [Profesora, ...enGrupos(hitosDe(proyecto), 6).map(paginaTrayectoria), ...enGrupos(proyecto.videos ?? [], 3).map(paginaVideos)],
  colegio: [ColegioRed, ColegioPilares, ColegioCompromisos],
  taller: [Taller, Categorias, ObjetivoGeneral, ObjetivosEspecificos],
  cuerpo: [Cuerpo, Escultura, Beneficios],
  clase: [Clase, Tecnica, Motions],
  valores: [Valores],
  historia: proyecto.disciplina ? [Disciplina, HistoriaInicio, HistoriaFin] : [HistoriaInicio, HistoriaFin],
  campeonatos: [Campeonatos, Temporada],
  propuesta: [Propuesta],
  merch: proyecto.merch.vestimenta ? [Merch, Vestimenta] : [Merch],
  viajes: [Viajes, Ruta],
});

// Las láminas siguen el orden de los capítulos del proyecto, entre la portada con su índice y el cierre.
export const LaminasMovil = ({ proyecto }: { proyecto: Proyecto }) => {
  const porCapitulo = paginasDe(proyecto);
  const paginas = [Portada, Indice, ...proyecto.capitulos.flatMap(({ id }) => porCapitulo[id]), Cierre];
  return (
    <>
      {paginas.map((Pagina, i) => {
        return <Pagina key={i} proyecto={proyecto} numero={i + 1} />;
      })}
    </>
  );
};
