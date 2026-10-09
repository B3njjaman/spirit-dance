import Link from 'next/link';
import { FotoEncuadrada } from '@/components/FotoEncuadrada';
import profesoras from '@/public/img/momentos/CqEQD37vhYU.jpg';

// Como el banner de "App de meseros" en fidelya.cl: una tarjeta que lleva a la página Sobre nosotros.
export const Presentacion = () => {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="vidrio mx-auto grid max-w-6xl items-center gap-8 overflow-hidden p-3 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] lg:aspect-[5/4]">
          <FotoEncuadrada src={profesoras} alt="Team La Florida en el escenario y sus profesoras con flores" sizes="(min-width: 1024px) 40vw, 92vw" />
        </div>
        <div className="px-3 pb-5 lg:px-0 lg:pb-0 lg:pr-10">
          <span className="pastilla">
            <i />
            Quién enseña
          </span>
          <h2 className="mt-5 text-seccion">
            Paulina Quezada <span className="degradado-texto">y su equipo.</span>
          </h2>
          <p className="mt-4 text-entrada text-suave">
            Profesora de Educación Física especialista en danza. Antes de fundar la academia pasó trece años en el American British School y enseñó
            danza en la Universidad Diego Portales.
          </p>
          <Link href="/sobre-nosotros" className="boton-principal mt-7">
            Conoce su historia
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
