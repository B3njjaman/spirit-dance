import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/cn';

// Muestra la foto completa, sin recortarla ni agrandarla, y rellena el espacio que sobra con la
// misma foto difuminada, como hace Instagram con las fotos horizontales en una historia.
type Props = {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  // Sube la foto dentro del marco para dejar abajo espacio libre al texto que va encima.
  arriba?: boolean;
};

export const FotoEncuadrada = ({ src, alt, sizes, className, priority, arriba }: Props) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <Image src={src} alt="" aria-hidden fill sizes="64px" className="scale-125 object-cover opacity-80 blur-2xl saturate-150" />
      <Image src={src} alt={alt} fill sizes={sizes} className={cn('object-contain', arriba && 'object-[50%_30%]')} priority={priority} />
    </div>
  );
};
