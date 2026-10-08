// Atmósfera de fidelya.cl (#fondo): manchas rosa, lila y durazno, difuminadas y flotando lento.
export const Fondo = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <i className="absolute -left-[8vw] -top-[10vw] size-[90vw] animate-flota1 rounded-full bg-[#FFC4E2] opacity-55 blur-[60px] lg:size-[46vw] lg:blur-[80px]" />
      <i className="absolute -right-[10vw] top-[10vh] size-[80vw] animate-flota2 rounded-full bg-[#DCCBFF] opacity-55 blur-[60px] lg:size-[40vw] lg:blur-[80px]" />
      <i className="absolute -bottom-[14vw] left-[30vw] hidden size-[34vw] animate-flota3 rounded-full bg-[#FFE0D2] opacity-55 blur-[80px] lg:block" />
    </div>
  );
};
