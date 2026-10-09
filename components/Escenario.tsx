// Tarima ovalada donde se para la bailarina: piso claro con el charco de luz del foco,
// faldón de terciopelo morado y una fila de candilejas que titilan.
const CANDILEJAS = [70, 130, 195, 262, 338, 405, 470, 530];

export const Escenario = () => {
  return (
    <svg aria-hidden viewBox="0 0 600 200" className="absolute inset-0 size-full overflow-visible">
      <defs>
        <linearGradient id="escenario-faldon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8A3FE0" />
          <stop offset="0.55" stopColor="#5B2AA8" />
          <stop offset="1" stopColor="#2E1A55" />
        </linearGradient>
        <linearGradient id="escenario-pliegues" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.35" />
          <stop offset="0.2" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="0.8" stopColor="#fff" stopOpacity="0.08" />
          <stop offset="1" stopColor="#000" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="escenario-piso" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.45" stopColor="#F3E9FF" />
          <stop offset="1" stopColor="#D9C4FA" />
        </radialGradient>
        <radialGradient id="escenario-luz" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#C653F0" stopOpacity="0.38" />
          <stop offset="0.6" stopColor="#9D5CFF" stopOpacity="0.12" />
          <stop offset="1" stopColor="#9D5CFF" stopOpacity="0" />
        </radialGradient>
        <filter id="escenario-sombra" x="-10%" y="-10%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <ellipse cx="300" cy="150" rx="280" ry="34" fill="#5B2AA8" opacity="0.28" filter="url(#escenario-sombra)" />
      <path d="M10 60 A290 48 0 0 0 590 60 L590 104 A290 48 0 0 1 10 104 Z" fill="url(#escenario-faldon)" />
      <path d="M10 60 A290 48 0 0 0 590 60 L590 104 A290 48 0 0 1 10 104 Z" fill="url(#escenario-pliegues)" />
      <ellipse cx="300" cy="60" rx="290" ry="48" fill="url(#escenario-piso)" />
      <ellipse cx="300" cy="60" rx="290" ry="48" fill="none" stroke="#fff" strokeOpacity="0.9" strokeWidth="2" />
      <ellipse cx="300" cy="62" rx="190" ry="30" fill="url(#escenario-luz)" />
      <path d="M10 60 A290 48 0 0 0 590 60" fill="none" stroke="#E7B8FF" strokeOpacity="0.7" strokeWidth="3" />
      {CANDILEJAS.map((x, i) => {
        const y = 60 + 48 * Math.sqrt(1 - ((x - 300) / 290) ** 2) + 14;
        return <circle key={x} cx={x} cy={y} r="3.2" fill="#FFE7A8" className="animate-candileja" style={{ animationDelay: `${-i * 0.7}s` }} />;
      })}
    </svg>
  );
};
