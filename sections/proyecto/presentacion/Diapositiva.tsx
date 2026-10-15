import type { ReactNode } from 'react';
import { COLEGIO } from '@/data/proyecto';
import { cn } from '@/lib/cn';

// Una lámina de 1280 × 720 (16:9, el tamaño de PowerPoint). Al imprimir, cada una es una página del PDF.
export type Tema = 'claro' | 'oscuro' | 'degradado';
type Props = { tema?: Tema; numero?: number; children: ReactNode; className?: string };

const DESTELLOS = [
  { x: 6, y: 12, t: 22 },
  { x: 92, y: 9, t: 16 },
  { x: 85, y: 88, t: 26 },
  { x: 14, y: 84, t: 14 },
  { x: 52, y: 6, t: 12 },
  { x: 96, y: 52, t: 18 },
];

const FONDOS: Record<Tema, string> = {
  claro: 'bg-[#fcf8fe] text-tinta',
  oscuro: 'bg-[#1c1030] text-white',
  degradado: 'bg-[linear-gradient(125deg,#ff4fa3_0%,#c653f0_55%,#7b4be0_100%)] text-white',
};

const Brillos = ({ tema }: { tema: Tema }) => {
  if (tema === 'claro') {
    return (
      <>
        <div className="absolute -left-64 -top-64 size-[900px] bg-[radial-gradient(closest-side,rgba(255,196,226,0.75),transparent)]" />
        <div className="absolute -bottom-72 -right-64 size-[950px] bg-[radial-gradient(closest-side,rgba(220,203,255,0.85),transparent)]" />
      </>
    );
  }
  if (tema === 'oscuro') {
    return (
      <>
        <div className="absolute -left-64 -top-64 size-[900px] bg-[radial-gradient(closest-side,rgba(157,92,255,0.45),transparent)]" />
        <div className="absolute -bottom-72 -right-64 size-[950px] bg-[radial-gradient(closest-side,rgba(255,79,163,0.38),transparent)]" />
        <div className="absolute right-[12%] top-[-4%] size-[420px] bg-[radial-gradient(closest-side,rgba(245,210,122,0.22),transparent)]" />
      </>
    );
  }
  return <div className="absolute -right-72 -top-72 size-[1000px] bg-[radial-gradient(closest-side,rgba(255,255,255,0.3),transparent)]" />;
};

export const Diapositiva = ({ tema = 'claro', numero, children, className }: Props) => {
  const clara = tema === 'claro';
  return (
    <section className={cn('diapositiva relative overflow-hidden', FONDOS[tema])}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Brillos tema={tema} />
        {DESTELLOS.map((d) => {
          return (
            <span
              key={`${d.x}-${d.y}`}
              className={cn('absolute leading-none', clara ? 'text-[#c77dff]/50' : tema === 'oscuro' ? 'text-[#f5d27a]/60' : 'text-white/50')}
              style={{ left: `${d.x}%`, top: `${d.y}%`, fontSize: d.t }}
            >
              ✦
            </span>
          );
        })}
      </div>
      <div className={cn('relative h-full', className)}>{children}</div>
      {numero !== undefined && (
        <footer className={cn('absolute inset-x-14 bottom-6 flex items-center justify-between text-[12px] font-semibold', clara ? 'text-suave' : 'text-white/60')}>
          <span>
            <span className="font-script text-[20px]">Spirit Dance</span> · Proyecto CheerDance {COLEGIO.nombre}
          </span>
          <span className="font-mono">{String(numero).padStart(2, '0')}</span>
        </footer>
      )}
    </section>
  );
};

export const Antetitulo = ({ children, tema = 'claro' }: { children: ReactNode; tema?: Tema }) => {
  return (
    <p className={cn('text-[14px] font-bold uppercase tracking-[0.2em]', tema === 'claro' ? 'text-magenta' : tema === 'oscuro' ? 'text-[#f5d27a]' : 'text-white/80')}>{children}</p>
  );
};

export const NumeroGrande = ({ children, tema = 'claro' }: { children: ReactNode; tema?: Tema }) => {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute right-10 top-4 select-none text-[220px] font-extrabold leading-none tracking-[-0.06em] text-transparent"
      style={{ WebkitTextStroke: tema === 'claro' ? '2px rgba(157,92,255,0.22)' : '2px rgba(255,255,255,0.18)' }}
    >
      {children}
    </span>
  );
};
