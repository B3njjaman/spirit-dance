import Link from 'next/link';
import { CintaFotos } from '@/components/CintaFotos';
import { GALERIA } from '@/data/galeria';

// Dos filas de polaroids de Instagram que pasan en sentidos opuestos; cualquiera lleva a la galería.
const FILA_A = GALERIA.filter((_, i) => i % 2 === 0).slice(0, 12);
const FILA_B = GALERIA.filter((_, i) => i % 2 === 1).slice(0, 12);

export const Momentos = () => {
  return (
    <section aria-labelledby="momentos-titulo" className="py-10 lg:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6">
        <h2 id="momentos-titulo" className="text-seccion">Momentos de la academia</h2>
        <p className="max-w-md text-suave">
          Sacados de su Instagram.{' '}
          <Link href="/galeria" className="font-semibold text-magenta underline decoration-rosa/30 underline-offset-4">
            Verlos todos en la galería
          </Link>
        </p>
      </div>
      <div className="mt-8">
        <CintaFotos fotos={FILA_A} />
        <CintaFotos fotos={FILA_B} reversa />
      </div>
    </section>
  );
};
