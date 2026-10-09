import Link from 'next/link';
import { CONTACTO } from '@/data/contacto';
import { ruta } from '@/lib/ruta';

const COLUMNAS = [
  {
    titulo: 'Academia',
    enlaces: [
      { href: '/#clases', texto: 'Clases' },
      { href: '/#grupos', texto: 'Grupos' },
      { href: '/#videos', texto: 'Videos' },
      { href: '/#preguntas', texto: 'Preguntas' },
    ],
  },
  {
    titulo: 'Nosotros',
    enlaces: [
      { href: '/sobre-nosotros', texto: 'Sobre nosotros' },
      { href: CONTACTO.instagram, texto: 'Instagram' },
    ],
  },
  {
    titulo: 'Contacto',
    enlaces: [
      { href: CONTACTO.whatsapp, texto: 'WhatsApp' },
      { href: `mailto:${CONTACTO.correo}`, texto: CONTACTO.correo },
    ],
  },
];

const esExterno = (href: string) => href.startsWith('http') || href.startsWith('mailto:');

export const Contacto = () => {
  return (
    <>
      <section id="contacto" className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="vidrio relative mx-auto max-w-4xl overflow-hidden px-6 pb-10 pt-6 text-center sm:px-12 sm:pb-14">
          <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full bg-[#FFC4E2] opacity-60 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-24 size-72 rounded-full bg-[#DCCBFF] opacity-60 blur-3xl" />
          <img src={ruta('/render/giro_012.webp')} alt="" className="relative mx-auto h-56 w-auto drop-shadow-[0_24px_30px_rgba(157,92,255,0.35)] sm:h-64" />
          <h2 className="relative text-cierre">
            Que su primera pirueta <span className="degradado-texto">sea aquí.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-entrada text-suave">Escríbele a Paulina: te cuenta los horarios, las edades de cada grupo y los cupos de esta temporada.</p>
          <div className="relative mt-8 flex flex-col justify-center gap-2.5 sm:flex-row">
            <a href={CONTACTO.whatsapp} target="_blank" rel="noreferrer" className="boton-principal">
              Escribir por WhatsApp
              <span aria-hidden>→</span>
            </a>
            <a href={CONTACTO.instagram} target="_blank" rel="noreferrer" className="boton-vidrio">
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-12 pt-6 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="flex items-baseline gap-1.5">
              <span className="-ml-1 bg-degradado bg-clip-text px-1 font-script text-[38px] leading-none text-transparent">Spirit Dance</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-suave">Academy</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-suave">Academia de danza infantil en La Florida. Bailar para crecer.</p>
          </div>
          {COLUMNAS.map((col) => {
            return (
              <nav key={col.titulo} aria-label={col.titulo}>
                <p className="text-sm font-bold">{col.titulo}</p>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-suave">
                  {col.enlaces.map((e) => {
                    return (
                      <li key={e.texto}>
                        {esExterno(e.href) ? (
                          <a href={e.href} target={e.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="break-all hover:text-tinta">
                            {e.texto}
                          </a>
                        ) : (
                          <Link href={e.href} className="hover:text-tinta">
                            {e.texto}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            );
          })}
        </div>
        <p className="mx-auto mt-12 max-w-6xl border-t border-tinta/[0.06] pt-6 text-xs text-tenue">© 2026 Spirit Dance Academy · {CONTACTO.comuna}</p>
      </footer>
    </>
  );
};
