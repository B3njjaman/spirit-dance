import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

// Cabecera de cada capítulo del proyecto: el número calado, el antetítulo y el título.
// Los tamaños propios (text-seccion, text-entrada) van fuera de cn: tailwind-merge los confunde con colores y los borra.
type Props = { numero: string; antetitulo: string; titulo: ReactNode; children?: ReactNode; centrado?: boolean; claro?: boolean };

export const TituloCapitulo = ({ numero, antetitulo, titulo, children, centrado, claro }: Props) => {
  return (
    <div className={cn('aparecer', centrado && 'mx-auto text-center')}>
      <span aria-hidden className={cn('numero-capitulo block select-none text-[5.5rem] sm:text-[7rem]', claro && '[-webkit-text-stroke-color:rgba(245,210,122,0.5)]')}>
        {numero}
      </span>
      <p className={cn('mt-3 text-[13px] font-semibold uppercase tracking-[0.14em]', claro ? 'text-[#f5d27a]' : 'text-magenta')}>{antetitulo}</p>
      <h2 className={`mt-3 text-seccion ${claro ? 'text-white' : ''}`}>{titulo}</h2>
      {children && <div className={`mt-4 max-w-2xl text-entrada ${claro ? 'text-white/75' : 'text-suave'} ${centrado ? 'mx-auto' : ''}`}>{children}</div>}
    </div>
  );
};
