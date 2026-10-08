// Como "Locales que hoy operan con FIDELYA": los lugares donde ha enseñado Paulina (CV 2026).
const LUGARES = [
  'American British School',
  'Universidad Diego Portales',
  'AIEP San Joaquín',
  'CESFAM Lo Espejo',
  'La Kema del Mono',
  'Colegio Villa España',
  'Centro Deportivo UC',
];

export const Cinta = () => {
  return (
    <section aria-labelledby="cinta-titulo" className="py-10">
      <p id="cinta-titulo" className="text-center text-[13px] font-semibold text-tenue">
        Donde ha enseñado Paulina
      </p>
      <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-cinta gap-12 pr-12">
          {[...LUGARES, ...LUGARES].map((lugar, i) => {
            return (
              <li key={`${lugar}-${i}`} aria-hidden={i >= LUGARES.length || undefined} className="whitespace-nowrap text-xl font-bold tracking-tight text-tenue/80">
                {lugar}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
