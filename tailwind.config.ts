import type { Config } from 'tailwindcss';

const token = (nombre: string) => `rgb(var(--${nombre}) / <alpha-value>)`;

// Tokens tomados de fidelya.cl (nueva/claro.css): fondo, tintas, rosa, lila y magenta.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        papel: token('papel'),
        superficie: token('superficie'),
        tinta: token('tinta'),
        suave: token('suave'),
        tenue: token('tenue'),
        rosa: token('rosa'),
        lila: token('lila'),
        magenta: token('magenta'),
        morado: token('lila'),
        lavanda: token('lavanda'),
        linea: token('tinta'),
        verde: token('verde'),
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        script: ['var(--font-script)', 'cursive'],
      },
      fontSize: {
        cuerpo: ['1.0625rem', { lineHeight: '1.6' }],
        nota: ['0.875rem', { lineHeight: '1.5' }],
        entrada: ['1.125rem', { lineHeight: '1.6' }],
        seccion: ['clamp(1.875rem, 4vw, 3.25rem)', { lineHeight: '1.06', letterSpacing: '-0.035em', fontWeight: '700' }],
        portada: ['clamp(2.375rem, 5.6vw, 4.75rem)', { lineHeight: '1.06', letterSpacing: '-0.035em', fontWeight: '700' }],
        cierre: ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.035em', fontWeight: '700' }],
      },
      boxShadow: {
        vidrio: '0 1px 1px rgba(80,40,120,.04), 0 24px 60px -28px rgba(110,50,160,.32)',
        suave: '0 1px 2px rgba(80,40,120,.06), 0 10px 24px -14px rgba(110,50,160,.22)',
        boton: '0 12px 30px -10px rgba(214,60,190,.6), inset 0 1px 0 rgba(255,255,255,.3)',
        'boton-alto': '0 18px 40px -10px rgba(214,60,190,.75), inset 0 1px 0 rgba(255,255,255,.3)',
      },
      backgroundImage: {
        degradado: 'linear-gradient(115deg, #FF4FA3 0%, #C653F0 55%, #9D5CFF 100%)',
        'degradado-claro': 'linear-gradient(115deg, #FFA8D4 0%, #FF8CC6 55%, #FFB3DA 100%)',
      },
      transitionTimingFunction: {
        fidelya: 'cubic-bezier(.22,.8,.24,1)',
      },
      keyframes: {
        flota1: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(6vw,4vh) scale(1.08)' } },
        flota2: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(-5vw,6vh) scale(.94)' } },
        cinta: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        llenar: { from: { transform: 'scaleX(0)' }, to: { transform: 'scaleX(1)' } },
        flotar: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        flota1: 'flota1 22s ease-in-out infinite',
        flota2: 'flota2 26s ease-in-out infinite',
        flota3: 'flota1 30s ease-in-out infinite reverse',
        cinta: 'cinta 40s linear infinite',
        'cinta-lenta': 'cinta 70s linear infinite',
        'cinta-reversa': 'cinta 80s linear infinite reverse',
        flotar: 'flotar 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
