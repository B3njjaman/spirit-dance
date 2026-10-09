'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type FC } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { useGSAP } from '@gsap/react';
import { GALERIA, MOMENTOS, type FotoGaleria, type Momento } from '@/data/galeria';
import { cn } from '@/lib/cn';

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin);

type Vista = 'mesa' | 'cuadricula';
type Filtro = Momento | 'todas';

const COLUMNAS = 7;
const FILAS = Math.ceil(GALERIA.length / COLUMNAS);
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const fechaLarga = (fecha: string) => {
  const [anio, mes] = fecha.split('-').map(Number);
  return `${MESES[mes - 1]} de ${anio}`;
};

// Azar con semilla: la mesa queda igual en cada visita y entre el servidor y el navegador.
const azar = (semilla: number) => {
  let t = semilla + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Cada foto cae en su celda de una grilla, corrida y girada un poco, para que parezcan tiradas sobre la mesa.
const POSICIONES = GALERIA.map((_, i) => {
  const columna = i % COLUMNAS;
  const fila = Math.floor(i / COLUMNAS);
  const desfase = fila % 2 ? 0.5 : 0;
  return {
    left: `${((columna + 0.5 + desfase * 0.6 + (azar(i * 3) - 0.5) * 0.5) / (COLUMNAS + 0.4)) * 100}%`,
    top: `${((fila + 0.5 + (azar(i * 3 + 1) - 0.5) * 0.45) / FILAS) * 100}%`,
    giro: `${(azar(i * 3 + 2) - 0.5) * 14}deg`,
  };
});

type ChipProps = { valor: Filtro; activo: boolean; alElegir: (f: Filtro) => void };

const Chip: FC<ChipProps> = ({ valor, activo, alElegir }) => {
  const elegir = useCallback(() => alElegir(valor), [alElegir, valor]);
  return (
    <button
      type="button"
      aria-pressed={activo}
      onClick={elegir}
      className={cn('h-10 shrink-0 rounded-full px-4 text-sm font-semibold transition-[background-color,color,box-shadow] duration-300 ease-fidelya', activo ? 'bg-degradado text-white shadow-boton' : 'text-suave hover:bg-white/70')}
    >
      {valor === 'todas' ? 'Todas' : valor}
    </button>
  );
};

type PolaroidProps = { foto: FotoGaleria; indice: number; apagada: boolean; alAbrir: (id: string) => void; alEnfocar?: (e: React.FocusEvent<HTMLButtonElement>) => void; estilo?: CSSProperties; className?: string; conPie?: boolean };

const Polaroid: FC<PolaroidProps> = ({ foto, apagada, alAbrir, alEnfocar, estilo, className, conPie }) => {
  const abrir = useCallback(() => alAbrir(foto.id), [alAbrir, foto.id]);
  return (
    <button
      type="button"
      onClick={abrir}
      onFocus={alEnfocar}
      tabIndex={apagada ? -1 : undefined}
      aria-label={`${foto.alt}, ${fechaLarga(foto.fecha)}`}
      style={estilo}
      className={cn('polaroid block text-left transition-[opacity,scale,rotate,filter] duration-500 ease-fidelya', apagada && 'pointer-events-none opacity-15 grayscale', className)}
    >
      <img src={foto.miniatura} alt="" width={foto.ancho} height={foto.alto} loading="lazy" draggable={false} className="block h-auto w-full rounded-[3px]" />
      {conPie && <span className="mt-1.5 block px-1 font-script text-[1.3rem] leading-none text-tinta/70 lg:text-[1.6rem]">{fechaLarga(foto.fecha)}</span>}
    </button>
  );
};

const Mesa: FC<{ filtro: Filtro; alAbrir: (id: string) => void }> = ({ filtro, alAbrir }) => {
  const marco = useRef<HTMLDivElement>(null);
  const mesa = useRef<HTMLDivElement>(null);
  const arrastre = useRef<Draggable | null>(null);
  const [tocada, setTocada] = useState(false);

  const centrar = useCallback((suave: boolean) => {
    const m = marco.current;
    const t = mesa.current;
    if (!m || !t) return;
    const destino = { x: (m.clientWidth - t.offsetWidth) / 2, y: (m.clientHeight - t.offsetHeight) / 2 };
    if (suave) gsap.to(t, { ...destino, duration: 0.8, ease: 'power3.inOut', onUpdate: () => arrastre.current?.update() });
    else gsap.set(t, destino);
    arrastre.current?.update();
  }, []);

  useGSAP(
    () => {
      centrar(false);
      const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      [arrastre.current] = Draggable.create(mesa.current, {
        type: 'x,y',
        bounds: marco.current,
        inertia: !reducir,
        edgeResistance: 0.85,
        dragClickables: true,
        minimumMovement: 6,
        cursor: 'grab',
        activeCursor: 'grabbing',
        onDragStart: () => setTocada(true),
      });
      const alCambiarTamano = () => centrar(false);
      window.addEventListener('resize', alCambiarTamano);
      return () => window.removeEventListener('resize', alCambiarTamano);
    },
    { scope: marco },
  );

  // Con teclado: la mesa se desliza hasta dejar a la vista la foto enfocada.
  const alEnfocar = useCallback((e: React.FocusEvent<HTMLButtonElement>) => {
    const m = marco.current;
    const t = mesa.current;
    if (!m || !t) return;
    // El navegador desplaza el marco para mostrar el foco; se anula y la mesa se mueve con GSAP.
    m.scrollTo(0, 0);
    const caja = e.currentTarget.getBoundingClientRect();
    const vista = m.getBoundingClientRect();
    const x = gsap.getProperty(t, 'x') as number;
    const y = gsap.getProperty(t, 'y') as number;
    const dx = vista.left + vista.width / 2 - (caja.left + caja.width / 2);
    const dy = vista.top + vista.height / 2 - (caja.top + caja.height / 2);
    const limiteX = m.clientWidth - t.offsetWidth;
    const limiteY = m.clientHeight - t.offsetHeight;
    gsap.to(t, {
      x: gsap.utils.clamp(limiteX, 0, x + dx),
      y: gsap.utils.clamp(limiteY, 0, y + dy),
      duration: 0.6,
      ease: 'power3.out',
      onUpdate: () => arrastre.current?.update(),
    });
  }, []);

  const recentrar = useCallback(() => centrar(true), [centrar]);

  return (
    <div ref={marco} className="relative h-[72svh] bg-[#efe4fc] min-h-[440px] overflow-hidden rounded-[28px] border border-white/90 shadow-vidrio">
      <div ref={mesa} className="mesa relative h-[1500px] w-[1700px] touch-none select-none lg:h-[1900px] lg:w-[2300px]">
        {GALERIA.map((foto, i) => {
          const p = POSICIONES[i];
          return (
            <Polaroid
              key={foto.id}
              foto={foto}
              indice={i}
              apagada={filtro !== 'todas' && foto.momento !== filtro}
              alAbrir={alAbrir}
              alEnfocar={alEnfocar}
              conPie
              estilo={{ left: p.left, top: p.top, '--giro': p.giro } as CSSProperties}
              className="absolute w-[160px] -translate-x-1/2 -translate-y-1/2 rotate-[var(--giro)] hover:z-10 hover:rotate-0 hover:scale-105 focus-visible:z-10 focus-visible:rotate-0 focus-visible:scale-105 lg:w-[210px]"
            />
          );
        })}
      </div>
      <p
        aria-hidden
        className={cn('pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-tinta/75 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-opacity duration-500', tocada && 'opacity-0')}
      >
        Arrastra la mesa para recorrerla
      </p>
      <button type="button" onClick={recentrar} className="boton-vidrio absolute right-3 top-3 !h-10 !px-4 !text-sm">
        Volver al centro
      </button>
    </div>
  );
};

const Cuadricula: FC<{ fotos: FotoGaleria[]; alAbrir: (id: string) => void }> = ({ fotos, alAbrir }) => {
  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
      {fotos.map((foto, i) => {
        return <Polaroid key={foto.id} foto={foto} indice={i} apagada={false} alAbrir={alAbrir} className="mb-4 w-full break-inside-avoid hover:-rotate-1 hover:scale-[1.02]" conPie />;
      })}
    </div>
  );
};

type VisorProps = { fotos: FotoGaleria[]; abierta: string | null; alCambiar: (id: string | null) => void };

const Visor: FC<VisorProps> = ({ fotos, abierta, alCambiar }) => {
  const dialogo = useRef<HTMLDialogElement>(null);
  const indice = fotos.findIndex((f) => f.id === abierta);
  const foto = indice >= 0 ? fotos[indice] : null;

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (foto && !d.open) d.showModal();
    if (!foto && d.open) d.close();
  }, [foto]);

  const mover = useCallback((paso: number) => alCambiar(fotos[(indice + paso + fotos.length) % fotos.length].id), [alCambiar, fotos, indice]);
  const anterior = useCallback(() => mover(-1), [mover]);
  const siguiente = useCallback(() => mover(1), [mover]);
  const cerrar = useCallback(() => alCambiar(null), [alCambiar]);
  const alTecla = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') anterior();
      if (e.key === 'ArrowRight') siguiente();
    },
    [anterior, siguiente],
  );
  const alClicFondo = useCallback((e: React.MouseEvent<HTMLDialogElement>) => e.target === e.currentTarget && cerrar(), [cerrar]);

  return (
    <dialog
      ref={dialogo}
      onClose={cerrar}
      onClick={alClicFondo}
      onKeyDown={alTecla}
      aria-label={foto?.alt}
      className="m-auto max-h-[96svh] w-[min(94vw,60rem)] overflow-visible bg-transparent p-0 text-tinta backdrop:bg-tinta/80 backdrop:backdrop-blur-sm"
    >
      {foto && (
        <figure className="polaroid !p-3 sm:!p-4">
          <img key={foto.id} src={foto.grande} alt={foto.alt} width={foto.ancho} height={foto.alto} className="mx-auto max-h-[70svh] w-auto rounded-[4px] object-contain" />
          <figcaption className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 px-1 pt-4">
            <div>
              <p className="font-script text-4xl leading-none text-tinta/80">{fechaLarga(foto.fecha)}</p>
              <p className="mt-1 text-[15px] text-suave">{foto.alt}</p>
              {foto.publicacion && (
                <a href={foto.publicacion} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-semibold text-magenta underline decoration-rosa/30 underline-offset-4">
                  Ver la publicación en Instagram
                </a>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="mr-1 text-sm tabular-nums text-tenue">
                {indice + 1} de {fotos.length}
              </span>
              <button type="button" onClick={anterior} aria-label="Foto anterior" className="grid size-11 place-items-center rounded-full bg-tinta/5 text-xl text-tinta transition-colors hover:bg-tinta/10">
                ‹
              </button>
              <button type="button" onClick={siguiente} aria-label="Foto siguiente" className="grid size-11 place-items-center rounded-full bg-tinta/5 text-xl text-tinta transition-colors hover:bg-tinta/10">
                ›
              </button>
              <button type="button" onClick={cerrar} aria-label="Cerrar foto" className="grid size-11 place-items-center rounded-full bg-degradado text-lg text-white shadow-boton">
                ✕
              </button>
            </div>
          </figcaption>
        </figure>
      )}
    </dialog>
  );
};

export const Galeria = () => {
  const [vista, setVista] = useState<Vista>('mesa');
  const [filtro, setFiltro] = useState<Filtro>('todas');
  const [abierta, setAbierta] = useState<string | null>(null);
  const visibles = useMemo(() => GALERIA.filter((f) => filtro === 'todas' || f.momento === filtro), [filtro]);
  const verMesa = useCallback(() => setVista('mesa'), []);
  const verCuadricula = useCallback(() => setVista('cuadricula'), []);

  return (
    <section aria-label="Fotos de la academia" className="px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex flex-col items-center justify-between gap-3 lg:flex-row">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full p-1 sm:bg-white/50" role="group" aria-label="Filtrar fotos">
            {(['todas', ...MOMENTOS] as Filtro[]).map((m) => {
              return <Chip key={m} valor={m} activo={m === filtro} alElegir={setFiltro} />;
            })}
          </div>
          <div className="flex rounded-full bg-white/60 p-1 shadow-suave" role="group" aria-label="Cómo ver las fotos">
            <button type="button" aria-pressed={vista === 'mesa'} onClick={verMesa} className={cn('h-10 rounded-full px-5 text-sm font-semibold transition-colors', vista === 'mesa' ? 'bg-tinta text-white' : 'text-suave')}>
              Sobre la mesa
            </button>
            <button type="button" aria-pressed={vista === 'cuadricula'} onClick={verCuadricula} className={cn('h-10 rounded-full px-5 text-sm font-semibold transition-colors', vista === 'cuadricula' ? 'bg-tinta text-white' : 'text-suave')}>
              En orden
            </button>
          </div>
        </div>
        {vista === 'mesa' ? <Mesa filtro={filtro} alAbrir={setAbierta} /> : <Cuadricula fotos={visibles} alAbrir={setAbierta} />}
      </div>
      <Visor fotos={visibles} abierta={abierta} alCambiar={setAbierta} />
    </section>
  );
};
