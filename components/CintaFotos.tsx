import Link from 'next/link';
import type { FotoGaleria } from '@/data/galeria';
import { cn } from '@/lib/cn';

// Una fila de polaroids de Instagram que pasa sola; repite la lista para que el loop no se corte.
const GIROS = [-3, 2, -1.5, 3, -2.5, 1.5];

type Props = { fotos: FotoGaleria[]; reversa?: boolean; className?: string; altoFoto?: string };

export const CintaFotos = ({ fotos, reversa, className, altoFoto = 'h-36 sm:h-44' }: Props) => {
  return (
    <div className={cn('overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]', className)}>
      <ul className={cn('flex w-max gap-5 pr-5 hover:[animation-play-state:paused]', reversa ? 'animate-cinta-reversa' : 'animate-cinta-lenta')}>
        {[...fotos, ...fotos].map((foto, i) => {
          const copia = i >= fotos.length;
          return (
            <li key={`${foto.id}-${i}`} aria-hidden={copia || undefined} style={{ rotate: `${GIROS[i % GIROS.length]}deg` }} className="shrink-0">
              <Link href="/galeria" tabIndex={copia ? -1 : undefined} className="polaroid block transition-[scale] duration-300 ease-fidelya hover:scale-105">
                <img src={foto.miniatura} alt={foto.alt} loading="lazy" width={foto.ancho} height={foto.alto} className={cn('w-auto rounded-[3px]', altoFoto)} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
