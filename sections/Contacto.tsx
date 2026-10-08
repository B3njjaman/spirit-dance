import { CONTACTO } from '@/data/contacto';

export const Contacto = () => {
  return (
    <section id="contacto" className="bg-morado px-6 pb-12 pt-28 text-white sm:px-10 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-4xl font-display text-cierre">Escríbele a Paulina.</h2>
        <p className="mt-8 max-w-lg text-entrada text-white/80">Te cuenta los horarios, las edades de cada grupo y los cupos que quedan esta temporada.</p>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5">
          <a
            href={CONTACTO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-8 py-4 font-medium text-morado transition-[background-color,scale] duration-150 ease-out hover:bg-lavanda active:scale-[0.96] focus-visible:outline-white"
          >
            Escribir por WhatsApp
          </a>
          <a href={CONTACTO.instagram} target="_blank" rel="noreferrer" className="underline decoration-white/40 decoration-2 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-white focus-visible:outline-white">
            Instagram {CONTACTO.usuarioInstagram}
          </a>
          <a href={`mailto:${CONTACTO.correo}`} className="underline decoration-white/40 decoration-2 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-white focus-visible:outline-white">
            {CONTACTO.correo}
          </a>
        </div>
        <footer className="mt-32 flex flex-col justify-between gap-2 border-t border-white/20 pt-6 text-nota text-white/70 sm:flex-row">
          <p>Spirit Dance Academy, {CONTACTO.comuna}</p>
          <p>Fundada por Paulina Quezada en 2020</p>
        </footer>
      </div>
    </section>
  );
};
