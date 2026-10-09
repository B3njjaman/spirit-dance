'use client';

import { useRef, type FC, type RefObject } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// Apertura de función: la página parte a oscuras, un foco morado baja sobre la bailarina,
// la ilumina tenue y después la luz se abre hasta dejar la página con su color.
const OSCURIDAD = 1.1;
const FOCO = 1.8;
const APERTURA = 1.6;
const PENUMBRA = 0.42;

type Props = { objetivo: RefObject<HTMLElement | null> };

export const Encendido: FC<Props> = ({ objetivo }) => {
  const telon = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const caja = objetivo.current?.getBoundingClientRect();
      if (!caja || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(telon.current, { autoAlpha: 0 });
        return;
      }
      const x = caja.left + caja.width / 2;
      const y = caja.top + caja.height * 0.55;
      const pies = caja.top + caja.height * 0.95;
      const anchoHaz = caja.width * 1.4;
      const lejos = Math.hypot(window.innerWidth, window.innerHeight) * 1.6;

      gsap.set('.encendido-oscuridad', { '--x': `${x}px`, '--y': `${y}px`, '--rx': `${caja.width * 0.62}px`, '--ry': `${caja.height * 0.6}px`, '--dentro': 1 });
      gsap.set('.encendido-haz', { left: x - anchoHaz / 2, width: anchoHaz, height: pies, opacity: 0 });

      gsap
        .timeline({ delay: OSCURIDAD })
        .to('.encendido-haz', { opacity: 0.75, duration: FOCO * 0.8, ease: 'power1.inOut' })
        .to('.encendido-oscuridad', { '--dentro': PENUMBRA, duration: FOCO, ease: 'sine.inOut' }, '<')
        .addLabel('abrir', '+=0.35')
        .to('.encendido-oscuridad', { '--rx': `${lejos}px`, '--ry': `${lejos}px`, '--dentro': 0, duration: APERTURA, ease: 'power2.inOut' }, 'abrir')
        .to('.encendido-haz', { opacity: 0, duration: APERTURA * 0.9, ease: 'power1.in' }, 'abrir')
        .to(telon.current, { autoAlpha: 0, duration: 0.5, ease: 'power1.out' }, `abrir+=${APERTURA - 0.4}`);
    },
    { scope: telon },
  );

  return (
    <div ref={telon} aria-hidden className="encendido pointer-events-none fixed inset-0 z-[70]">
      <div className="encendido-oscuridad absolute inset-0" />
      <div className="encendido-haz absolute top-0">
        <div className="encendido-cono size-full" />
      </div>
    </div>
  );
};
