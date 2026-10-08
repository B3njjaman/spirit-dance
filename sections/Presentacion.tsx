import Link from 'next/link';

// Franja breve en el inicio: quién enseña, con el paso a la página completa.
export const Presentacion = () => {
  return (
    <section className="bg-superficie px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <h2 className="font-display text-seccion">Quién enseña</h2>
        <div className="lg:pt-3">
          <p className="text-entrada text-suave">
            Paulina Quezada es profesora de Educación Física y especialista en danza. Antes de fundar la academia en 2020 pasó trece años en el
            American British School y enseñó danza en la Universidad Diego Portales.
          </p>
          <Link
            href="/sobre-nosotros"
            className="mt-8 inline-flex font-medium text-morado underline decoration-lavanda decoration-2 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-morado"
          >
            Conoce su historia y su trayectoria
          </Link>
        </div>
      </div>
    </section>
  );
};
