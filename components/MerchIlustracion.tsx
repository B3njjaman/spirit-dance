import type { IdMerch, PaletaMerch } from '@/data/proyecto';
import { ruta } from '@/lib/ruta';

// Maquetas del merch dibujadas a mano en SVG, con el logo dorado de la academia donde va estampado.
// Los colores y el nombre del polerón cambian según el colegio (data/proyectos/).
const LOGO = ruta('/img/proyecto/logo-dorado.png');
const TINTA = '#2a2140';

type Dibujo = { paleta: PaletaMerch; equipo: string };

const Degradados = ({ paleta }: { paleta: PaletaMerch }) => {
  return (
    <defs>
      <linearGradient id="merch-tela" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={paleta.tela[0]} />
        <stop offset="100%" stopColor={paleta.tela[1]} />
      </linearGradient>
      <linearGradient id="merch-mono" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={paleta.mono[0]} />
        <stop offset="100%" stopColor={paleta.mono[1]} />
      </linearGradient>
      <linearGradient id="merch-dorado" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#b8862b" />
        <stop offset="50%" stopColor="#ffe7a3" />
        <stop offset="100%" stopColor="#b8862b" />
      </linearGradient>
    </defs>
  );
};

const Polera = ({ paleta }: Dibujo) => {
  return (
    <>
      <path d="M70 40 L100 28 Q120 44 140 28 L170 40 L196 78 L170 92 L162 80 L162 190 L78 190 L78 80 L70 92 L44 78 Z" fill="url(#merch-tela)" />
      <path d="M100 28 Q120 44 140 28" fill="none" stroke={paleta.cuello} strokeWidth="5" />
      <image href={LOGO} x="98" y="62" width="44" height="56" />
    </>
  );
};

const Poleron = ({ paleta, equipo }: Dibujo) => {
  const [cuerpo, detalle] = paleta.poleron;
  return (
    <>
      <path d="M68 52 L96 36 Q120 18 144 36 L172 52 L198 150 L176 156 L164 98 L164 196 L76 196 L76 98 L64 156 L42 150 Z" fill={cuerpo} />
      <path d="M96 36 Q120 64 144 36 Q132 22 120 22 Q108 22 96 36 Z" fill={detalle} />
      <rect x="92" y="150" width="56" height="26" rx="6" fill={detalle} />
      <text x="120" y="112" textAnchor="middle" fontFamily="var(--font-script), cursive" fontSize="23" fill="url(#merch-dorado)">
        {equipo}
      </text>
      <text x="120" y="134" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontWeight="800" fontSize="13" letterSpacing="6" fill="#f5d27a">
        CHEER
      </text>
    </>
  );
};

const Mono = ({ paleta }: Dibujo) => {
  const [, , cintaIzquierda, cintaDerecha, nudo] = paleta.mono;
  return (
    <>
      <path d="M120 100 C 80 40, 30 50, 40 100 C 30 150, 80 160, 120 100 Z" fill="url(#merch-mono)" />
      <path d="M120 100 C 160 40, 210 50, 200 100 C 210 150, 160 160, 120 100 Z" fill="url(#merch-mono)" />
      <path d="M110 108 L82 182 L100 172 L108 190 L120 112 Z" fill={cintaIzquierda} />
      <path d="M130 108 L158 182 L140 172 L132 190 L120 112 Z" fill={cintaDerecha} />
      <rect x="106" y="84" width="28" height="34" rx="10" fill={nudo} stroke="#fff" strokeOpacity=".5" strokeWidth="2" />
      {[
        [62, 82],
        [78, 120],
        [170, 80],
        [182, 118],
        [150, 128],
        [92, 96],
      ].map(([x, y]) => {
        return <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#fff" fillOpacity=".85" />;
      })}
    </>
  );
};

const HEBRAS = 44;
const colorHebra = (i: number, colores: string[]) => colores[i % colores.length];

const Pompon = ({ cx, cy, colores }: { cx: number; cy: number; colores: string[] }) => {
  return (
    <g>
      {Array.from({ length: HEBRAS }, (_, i) => {
        const angulo = (i / HEBRAS) * Math.PI * 2;
        const largo = 46 + ((i * 37) % 13);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + Math.cos(angulo) * largo}
            y2={cy + Math.sin(angulo) * largo}
            stroke={colorHebra(i, colores)}
            strokeWidth="5"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={cx} cy={cy} r="12" fill={TINTA} />
    </g>
  );
};

const Pompones = ({ paleta }: Dibujo) => {
  return (
    <>
      <Pompon cx={88} cy={92} colores={paleta.pompones[0]} />
      <Pompon cx={152} cy={120} colores={paleta.pompones[1]} />
    </>
  );
};

const Botella = () => {
  return (
    <>
      <rect x="104" y="20" width="32" height="22" rx="6" fill={TINTA} />
      <rect x="110" y="40" width="20" height="12" fill="#3a2f55" />
      <rect x="88" y="50" width="64" height="146" rx="24" fill="url(#merch-tela)" />
      <rect x="96" y="62" width="10" height="120" rx="5" fill="#fff" fillOpacity=".25" />
      <image href={LOGO} x="104" y="96" width="36" height="46" />
    </>
  );
};

const Bolso = ({ paleta }: Dibujo) => {
  return (
    <>
      <path d="M78 86 Q120 30 162 86" fill="none" stroke={TINTA} strokeWidth="9" strokeLinecap="round" />
      <rect x="34" y="82" width="172" height="100" rx="44" fill="url(#merch-tela)" />
      <rect x="34" y="82" width="172" height="16" rx="8" fill={paleta.cuello} fillOpacity=".55" />
      <circle cx="54" cy="132" r="22" fill={paleta.cuello} fillOpacity=".5" />
      <circle cx="186" cy="132" r="22" fill={paleta.cuello} fillOpacity=".5" />
      <text x="120" y="146" textAnchor="middle" fontFamily="var(--font-script), cursive" fontSize="34" fill="url(#merch-dorado)">
        Spirit Dance
      </text>
    </>
  );
};

const DIBUJOS: Record<IdMerch, (props: Dibujo) => React.JSX.Element> = { polera: Polera, poleron: Poleron, mono: Mono, pompones: Pompones, botella: Botella, bolso: Bolso };

type Props = Dibujo & { id: IdMerch; nombre: string };

export const MerchIlustracion = ({ id, nombre, paleta, equipo }: Props) => {
  const Dibujo = DIBUJOS[id];
  return (
    <svg viewBox="0 0 240 210" role="img" aria-label={nombre} className="h-auto w-full drop-shadow-[0_18px_22px_rgba(80,40,120,0.25)]">
      <Degradados paleta={paleta} />
      <Dibujo paleta={paleta} equipo={equipo} />
    </svg>
  );
};
