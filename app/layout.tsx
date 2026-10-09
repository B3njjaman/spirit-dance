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

// Resguardos para que la página siga clara aunque el navegador fuerce su modo oscuro. Corren en el <head>, antes de pintar.
// - Samsung Internet en modo oscuro oscurece la página aunque declare sus colores (confirmado en un Samsung real), así que
//   ahí la página se contra-invierte (data-compensar, ver globals.css): al oscurecerla, Samsung la deja otra vez clara.
// - En Chrome y otros, si el color de sistema "canvas" de un elemento marcado como claro deja de ser blanco, el navegador
//   está forzando el oscuro: la página se declara de esquema oscuro y Chromium apaga su oscurecimiento.
// - Con ?diagnostico en la URL se muestra qué detectó, para revisar un teléfono a distancia con una captura.
const SIEMPRE_CLARO = `(function(){try{
var r=document.documentElement,ua=navigator.userAgent,mq=matchMedia('(prefers-color-scheme: dark)');
var d=document.createElement('div');d.style.cssText='display:none;background-color:canvas;color-scheme:light';r.appendChild(d);
var c=getComputedStyle(d).backgroundColor;r.removeChild(d);
var samsung=/SamsungBrowser/i.test(ua);
var aplicar=function(){
if(samsung){if(mq.matches){r.setAttribute('data-compensar','')}else{r.removeAttribute('data-compensar')}}
else if(c!=='rgb(255, 255, 255)'){r.style.colorScheme='dark';r.setAttribute('data-oscuro-forzado','')}
};
aplicar();if(mq.addEventListener){mq.addEventListener('change',aplicar)}
if(/diagnostico/.test(location.search)){addEventListener('DOMContentLoaded',function(){var p=document.createElement('pre');
p.style.cssText='position:fixed;left:8px;right:8px;bottom:8px;z-index:99999;margin:0;padding:10px;font:12px/1.4 monospace;white-space:pre-wrap;background:#fff;color:#000;border:2px solid #c0f';
p.textContent='navegador: '+ua+'\\nprefiere oscuro: '+mq.matches+'\\ncanvas: '+c+'\\ncompensar: '+r.hasAttribute('data-compensar')+'\\nesquema oscuro: '+r.hasAttribute('data-oscuro-forzado');
document.body.appendChild(p)})}
}catch(e){}})();`;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es" suppressHydrationWarning className={`${sans.variable} ${mono.variable} ${script.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SIEMPRE_CLARO }} />
      </head>
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
