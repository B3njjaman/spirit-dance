'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CONTACTO } from '@/data/contacto';
import { cn } from '@/lib/cn';
import { ruta } from '@/lib/ruta';

// Como la mascota AURA de fidelya.cl: la bailarina flota abajo a la derecha con un globo que lleva a WhatsApp.
// En el inicio aparece cuando termina la portada, donde ya está la bailarina grande; en las demás páginas, al bajar un poco.
export const BailarinaFlotante = () => {
  const [visible, setVisible] = useState(false);
  const pagina = usePathname();

  useEffect(() => {
    const portada = document.getElementById('inicio');
    const alBajar = () => setVisible(window.scrollY > (portada ? portada.offsetHeight - window.innerHeight * 0.6 : 240));
    alBajar();
    window.addEventListener('scroll', alBajar, { passive: true });
    return () => window.removeEventListener('scroll', alBajar);
  }, [pagina]);

  return (
    <a
      href={CONTACTO.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className={cn(
        'fixed bottom-[calc(14px+env(safe-area-inset-bottom))] right-3.5 z-30 flex items-end gap-1 transition-[opacity,translate] duration-500 ease-fidelya [html[data-inmersivo]_&]:pointer-events-none [html[data-inmersivo]_&]:opacity-0 lg:bottom-7 lg:right-8',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <span className="mb-5 rounded-2xl rounded-br-md bg-white px-3 py-1.5 text-[13px] font-bold lg:mb-6 lg:px-3.5 lg:py-2 lg:text-sm text-tinta shadow-suave">¿Bailamos?</span>
      <img src={ruta('/render/giro_012.webp')} alt="" className="h-16 w-auto animate-flotar drop-shadow-[0_14px_18px_rgba(214,40,160,0.35)] lg:h-24" />
    </a>
  );
};
