import type { Config } from 'tailwindcss';

const token = (nombre: string) => `rgb(var(--${nombre}) / <alpha-value>)`;

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        papel: token('papel'),
        superficie: token('superficie'),
        tinta: token('tinta'),
        suave: token('suave'),
        morado: token('morado'),
        lavanda: token('lavanda'),
        rosa: token('rosa'),
        linea: token('linea'),
      },
      fontFamily: {
        display: ['var(--font-display)', 'Didot', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Escala modular 1.25 desde 17px (Bringhurst): cada paso tiene un rol.
        cuerpo: ['1.0625rem', { lineHeight: '1.65' }],
        nota: ['0.875rem', { lineHeight: '1.5' }],
        entrada: ['1.3125rem', { lineHeight: '1.55' }],
        seccion: ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        portada: ['clamp(2.75rem, 4.6vw, 4.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        cierre: ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
};

export default config;
