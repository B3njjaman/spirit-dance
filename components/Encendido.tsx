'use client';

import { useRef, type FC, type RefObject } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// Apertura de función: la página parte a oscuras, un foco morado baja sobre la bailarina, después
// dos focos cruzados encienden al grupo de alumnas y al final la luz se abre hasta dejar la página con su color.
const OSCURIDAD = 0.35;
const FOCO = 1.0;
const GRUPO = 0.8;
const APERTURA = 1.1;
const PENUMBRA = 0.42;

// Solo la primera visita parte a oscuras; al volver al inicio desde otra página ya está encendida.
let yaEncendida = false;

type Props = { objetivo: RefObject<HTMLElement | null>; grupos?: RefObject<HTMLElement | null>[] };

const visible = (caja: DOMRect) => caja.width > 0 && caja.height > 0;

// Un cono que nace en (x0, 0) y apunta al punto (x, y): se gira sobre su borde superior.
const apuntar = (selector: string, x0: number, x: number, y: number, ancho: number) => {
  gsap.set(selector, {
    left: x0 - ancho / 2,
    width: ancho,
    height: Math.hypot(x - x0, y) * 1.08,
    rotation: (Math.atan2(x0 - x, y) * 180) / Math.PI,
    transformOrigin: '50% 0%',
    opacity: 0,
  });
};

export const Encendido: FC<Props> = ({ objetivo, grupos = [] }) => {
  const telon = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const caja = objetivo.current?.getBoundingClientRect();
      if (yaEncendida || !caja || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(telon.current, { autoAlpha: 0 });
        return;
      }
      const x = caja.left + caja.width / 2;
      const y = caja.top + caja.height * 0.55;
      const pies = caja.top + caja.height * 0.95;
      const anchoHaz = caja.width * 1.4;
      const lejos = Math.hypot(window.innerWidth, window.innerHeight) * 1.6;
      const grupo = grupos.map((g) => g.current?.getBoundingClientRect()).find((c): c is DOMRect => !!c && visible(c));

      gsap.set('.encendido-oscuridad', { '--x': `${x}px`, '--y': `${y}px`, '--rx': `${caja.width * 0.62}px`, '--ry': `${caja.height * 0.6}px`, '--dentro': 1 });
      gsap.set('.encendido-bailarina', { left: x - anchoHaz / 2, width: anchoHaz, height: pies, opacity: 0 });

      const linea = gsap
        .timeline({ delay: OSCURIDAD, onComplete: () => (yaEncendida = true) })
        .to('.encendido-bailarina', { opacity: 0.75, duration: FOCO * 0.8, ease: 'power1.inOut' })
        .to('.encendido-oscuridad', { '--dentro': PENUMBRA, duration: FOCO, ease: 'sine.inOut' }, '<');

      if (grupo) {
        const gx = grupo.left + grupo.width / 2;
        const gy = grupo.top + grupo.height / 2;
        const ancho = Math.min(grupo.width, 420) * 0.55;
        apuntar('.encendido-grupo-izquierda', 0, gx - grupo.width * 0.18, gy, ancho);
        apuntar('.encendido-grupo-derecha', window.innerWidth, gx + grupo.width * 0.18, gy, ancho);
        gsap.set('.encendido-oscuridad', { '--gx': `${gx}px`, '--gy': `${gy}px`, '--grx': `${grupo.width * 0.62}px`, '--gry': `${grupo.height * 0.75}px`, '--gdentro': 1 });
        linea
          .to('.encendido-grupo', { opacity: 0.7, duration: GRUPO * 0.7, stagger: 0.2, ease: 'power1.inOut' }, '-=0.25')
          .to('.encendido-oscuridad', { '--gdentro': PENUMBRA, duration: GRUPO, ease: 'sine.inOut' }, '<');
      }

      linea
        .addLabel('abrir', '+=0.15')
        .to(
          '.encendido-oscuridad',
          { '--rx': `${lejos}px`, '--ry': `${lejos}px`, '--grx': `${lejos}px`, '--gry': `${lejos}px`, '--dentro': 0, '--gdentro': 0, duration: APERTURA, ease: 'power2.inOut' },
          'abrir',
        )
        .to('.encendido-haz', { opacity: 0, duration: APERTURA * 0.9, ease: 'power1.in' }, 'abrir')
        .to(telon.current, { autoAlpha: 0, duration: 0.5, ease: 'power1.out' }, `abrir+=${APERTURA - 0.4}`);
    },
    { scope: telon },
  );

  return (
    <div ref={telon} aria-hidden className="encendido pointer-events-none fixed inset-0 z-[70]">
      <div className="encendido-oscuridad absolute inset-0" />
      <div className="encendido-haz encendido-bailarina absolute top-0">
        <div className="encendido-cono size-full" />
      </div>
      <div className="encendido-haz encendido-grupo encendido-grupo-izquierda absolute top-0">
        <div className="encendido-cono size-full" />
      </div>
      <div className="encendido-haz encendido-grupo encendido-grupo-derecha absolute top-0">
        <div className="encendido-cono size-full" />
      </div>
    </div>
  );
};
