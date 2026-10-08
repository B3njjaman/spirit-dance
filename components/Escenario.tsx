'use client';

import { Suspense, useEffect, useState, type FC, type MutableRefObject } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { Bailarina } from './Bailarina';

type Props = { progreso: MutableRefObject<number> };

const CAMARA = { position: [0, 0, 6.4] as [number, number, number], fov: 36 };
const DPR: [number, number] = [1, 2];
const GL = { antialias: true, alpha: true };

// Luz de estudio blanca con un rebote lavanda y uno rosa, como focos de escenario sobre el logo.
export const Escenario: FC<Props> = ({ progreso }) => {
  const [reducirMovimiento, setReducirMovimiento] = useState(false);

  useEffect(() => {
    const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducirMovimiento(consulta.matches);
    const alCambiar = (e: MediaQueryListEvent) => setReducirMovimiento(e.matches);
    consulta.addEventListener('change', alCambiar);
    return () => consulta.removeEventListener('change', alCambiar);
  }, []);

  return (
    <Canvas camera={CAMARA} dpr={DPR} gl={GL}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 4, 5]} intensity={2.2} />
      <directionalLight position={[-4, 1, -3]} intensity={1.4} color="#e4c6ff" />
      <Suspense fallback={null}>
        <Bailarina progreso={progreso} reducirMovimiento={reducirMovimiento} />
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={4} position={[0, 4, 3]} scale={[8, 1.5, 1]} />
          <Lightformer form="rect" intensity={2.5} color="#efe0ff" position={[-5, 0.5, 1]} rotation-y={Math.PI / 2} scale={[4, 6, 1]} />
          <Lightformer form="rect" intensity={2} color="#ffd3ec" position={[5, -0.5, 1]} rotation-y={-Math.PI / 2} scale={[4, 6, 1]} />
        </Environment>
      </Suspense>
    </Canvas>
  );
};
