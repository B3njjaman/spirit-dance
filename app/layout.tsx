import type { Metadata } from 'next';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { Fondo } from '@/components/Fondo';
import './globals.css';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], style: ['normal', 'italic'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Spirit Dance Academy · Danza infantil en La Florida',
  description:
    'Clases de danza para niñas y niños desde los 4 años en La Florida, con la profesora Paulina Quezada: más de 20 años enseñando movimiento y expresión corporal.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans text-cuerpo">
        <Fondo />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
