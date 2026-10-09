import type { Metadata, Viewport } from 'next';
import { Allura, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { BailarinaFlotante } from '@/components/BailarinaFlotante';
import { Fondo } from '@/components/Fondo';
import { Movimiento } from '@/components/Movimiento';
import { Telon } from '@/components/Telon';
import { Contacto } from '@/sections/Contacto';
import { Navegacion } from '@/sections/Navegacion';
import './globals.css';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], style: ['normal', 'italic'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-mono' });
// Cursiva parecida a la del logo de la academia, solo para el nombre.
const script = Allura({ subsets: ['latin'], weight: '400', variable: '--font-script' });

const DESCRIPCION =
  'Clases de danza para niñas y niños desde los 4 años en La Florida, con la profesora Paulina Quezada: más de 20 años enseñando movimiento y expresión corporal.';

// Al compartir el link (WhatsApp, Instagram) se ve opengraph-image.png: la bailarina morada sobre blanco.
export const metadata: Metadata = {
  metadataBase: new URL('https://b3njjaman.github.io'),
  title: { default: 'Spirit Dance Academy · Danza infantil en La Florida', template: '%s · Spirit Dance Academy' },
  description: DESCRIPCION,
  openGraph: { title: 'Spirit Dance Academy', description: DESCRIPCION, siteName: 'Spirit Dance Academy', locale: 'es_CL', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Spirit Dance Academy', description: DESCRIPCION },
};

// La página es siempre clara. El meta color-scheme declara "light dark" para que ningún navegador la oscurezca
// por su cuenta (ver globals.css), y theme-color pinta clara la barra del navegador en el celular en ambos modos.
export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcf8fe' },
    { media: '(prefers-color-scheme: dark)', color: '#fcf8fe' },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable} ${script.variable}`}>
      <body className="font-sans text-cuerpo">
        <Fondo />
        <Movimiento />
        <Navegacion />
        <main>{children}</main>
        <Contacto />
        <BailarinaFlotante />
        <Telon />
      </body>
    </html>
  );
};

export default RootLayout;
