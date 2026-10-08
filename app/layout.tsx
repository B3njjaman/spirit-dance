import type { Metadata } from 'next';
import { Bodoni_Moda, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const display = Bodoni_Moda({ subsets: ['latin'], style: ['normal', 'italic'], axes: ['opsz'], variable: '--font-display' });
const sans = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Spirit Dance Academy · Danza infantil en La Florida',
  description:
    'Clases de danza para niñas y niños desde los 4 años en La Florida, con la profesora Paulina Quezada: más de 20 años enseñando movimiento y expresión corporal.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans text-cuerpo">{children}</body>
    </html>
  );
};

export default RootLayout;
