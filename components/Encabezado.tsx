import type { ReactNode } from 'react';
import { Estrellas } from '@/components/Estrellas';

// Cabecera de cada acto (página): el nombre en la cursiva del logo, con las mismas estrellas de la portada cayendo detrás.
type Props = { titulo: string; children: ReactNode };

export const Encabezado = ({ titulo, children }: Props) => {
  return (
    <header className="relative overflow-hidden px-4 pb-10 pt-28 text-center sm:px-6 lg:pb-14 lg:pt-36">
      <div aria-hidden className="absolute inset-x-0 top-10 mx-auto h-[85%] max-w-3xl">
        <Estrellas />
      </div>
      <h1 className="relative">
        <span className="inline-block bg-degradado bg-clip-text px-6 pb-2 font-script text-[clamp(4.5rem,11vw,8.5rem)] leading-[1] text-transparent">{titulo}</span>
      </h1>
      <div className="relative mx-auto mt-3 max-w-2xl text-entrada text-suave">{children}</div>
    </header>
  );
};
