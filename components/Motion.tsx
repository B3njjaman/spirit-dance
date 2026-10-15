// Figura de un motion de cheer: el cuerpo quieto y los brazos en el ángulo de cada posición, con un pompón en cada mano.
// Ángulos en grados: 0 apunta al costado derecho, 90 arriba, 180 al costado izquierdo y -90 abajo.
type Props = { nombre: string; izquierdo: number; derecho: number };

const HOMBRO = { x: 50, y: 40 };
const LARGO_BRAZO = 30;

const mano = (grados: number) => {
  const radianes = (grados * Math.PI) / 180;
  return { x: HOMBRO.x + Math.cos(radianes) * LARGO_BRAZO, y: HOMBRO.y - Math.sin(radianes) * LARGO_BRAZO };
};

export const Motion = ({ nombre, izquierdo, derecho }: Props) => {
  const manos = [mano(izquierdo), mano(derecho)];
  const idDegradado = `pompon-${nombre.replace(/\s/g, '')}`;

  return (
    <figure className="flex flex-col items-center">
      <svg viewBox="0 0 100 120" className="h-28 w-24" role="img" aria-label={`Motion ${nombre}`}>
        <defs>
          <radialGradient id={idDegradado}>
            <stop offset="0%" stopColor="#FFB3DA" />
            <stop offset="100%" stopColor="#E6268C" />
          </radialGradient>
        </defs>
        <g stroke="rgb(42 33 64)" strokeWidth="4.5" strokeLinecap="round" fill="none">
          <line x1="50" y1="34" x2="50" y2="74" />
          <line x1="50" y1="74" x2="40" y2="110" />
          <line x1="50" y1="74" x2="60" y2="110" />
          {manos.map((m, i) => {
            return <line key={i} x1={HOMBRO.x} y1={HOMBRO.y} x2={m.x} y2={m.y} />;
          })}
        </g>
        <circle cx="50" cy="22" r="9" fill="rgb(42 33 64)" />
        {manos.map((m, i) => {
          return <circle key={i} cx={m.x} cy={m.y} r="8" fill={`url(#${idDegradado})`} />;
        })}
      </svg>
      <figcaption className="mt-1 text-sm font-bold text-tinta">{nombre}</figcaption>
    </figure>
  );
};
