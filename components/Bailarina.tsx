'use client';

import { useEffect, useMemo, useRef, type FC, type MutableRefObject } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import siluetaJson from '@/data/silueta.json';
import composicion from '@/data/composicion.json';
import { ruta } from '@/lib/ruta';

type Silueta = { proporcion: number; forma: number[][]; agujeros: number[][][] };
const silueta: Silueta = siluetaJson;

// El logo completo mide ALTO_LOGO unidades; todo se ubica en píxeles del logo original.
const ALTO_LOGO = 4.1;
const [ANCHO_PX, ALTO_PX] = composicion.logo;
const [X0, Y0, X1, Y1] = composicion.bailarina;
const ESCALA = ALTO_LOGO / ALTO_PX;
const ANCHO_LOGO = ANCHO_PX * ESCALA;
const ALTO = (Y1 - Y0) * ESCALA;
const ANCHO = (X1 - X0) * ESCALA;
const CENTRO_BAILARINA = new THREE.Vector3(((X0 + X1) / 2 - ANCHO_PX / 2) * ESCALA, (ALTO_PX / 2 - (Y0 + Y1) / 2) * ESCALA, 0.09);

const PROFUNDIDAD = 0.12;
const BISEL = 0.03;
const SUAVIZADO = 7;
const TRES_CUARTOS = 0.32;
const GIRO_MAXIMO = 1.1;

const aVector = ([u, v]: number[]) => new THREE.Vector2((u - 0.5) * ANCHO, (v - 0.5) * ALTO);

// Sólido extruido desde el contorno real de la bailarina. Las caras llevan el glitter
// proyectado de frente (u, v salen de x, y); el canto biselado es laca morada.
const crearCuerpo = () => {
  const forma = new THREE.Shape(silueta.forma.map(aVector));
  silueta.agujeros.forEach((agujero) => forma.holes.push(new THREE.Path(agujero.map(aVector))));
  const geometria = new THREE.ExtrudeGeometry(forma, {
    depth: PROFUNDIDAD,
    bevelEnabled: true,
    bevelThickness: BISEL,
    bevelSize: BISEL * 0.8,
    bevelSegments: 5,
    curveSegments: 1,
  });
  geometria.translate(0, 0, -PROFUNDIDAD / 2);
  const posicion = geometria.attributes.position;
  const uv = geometria.attributes.uv;
  for (let i = 0; i < posicion.count; i++) uv.setXY(i, posicion.getX(i) / ANCHO + 0.5, posicion.getY(i) / ALTO + 0.5);
  uv.needsUpdate = true;
  geometria.computeVertexNormals();
  return geometria;
};

type Props = { progreso: MutableRefObject<number>; reducirMovimiento: boolean };

export const Bailarina: FC<Props> = ({ progreso, reducirMovimiento }) => {
  const giro = useRef<THREE.Group>(null);
  const logo = useRef<THREE.Group>(null);
  const { pointer, viewport } = useThree();
  const [glitter, letras] = useTexture([ruta('/img/bailarina-morada.png'), ruta('/img/logo-letras.png')]);

  const recursos = useMemo(() => {
    glitter.colorSpace = THREE.SRGBColorSpace;
    glitter.anisotropy = 8;
    letras.colorSpace = THREE.SRGBColorSpace;
    letras.anisotropy = 8;
    return {
      cuerpo: crearCuerpo(),
      plano: new THREE.PlaneGeometry(ANCHO_LOGO, ALTO_LOGO),
      caras: new THREE.MeshPhysicalMaterial({
        map: glitter,
        roughness: 0.3,
        metalness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        iridescence: 0.4,
        iridescenceIOR: 1.5,
      }),
      canto: new THREE.MeshPhysicalMaterial({ color: '#6c22b8', roughness: 0.2, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.06 }),
      tinta: new THREE.MeshBasicMaterial({ map: letras, transparent: true, toneMapped: false, depthWrite: false }),
    };
  }, [glitter, letras]);

  useEffect(() => {
    return () => {
      recursos.cuerpo.dispose();
      recursos.plano.dispose();
      recursos.caras.dispose();
      recursos.canto.dispose();
      recursos.tinta.dispose();
    };
  }, [recursos]);

  useFrame((estado, delta) => {
    if (!giro.current || !logo.current) return;
    const t = estado.clock.elapsedTime;
    const suavizado = Math.min(1, delta * SUAVIZADO);
    // Entrada: aterriza desde media vuelta.
    const aterrizaje = reducirMovimiento ? 1 : 1 - Math.pow(1 - Math.min(1, t / 1.8), 3);
    // Con el scroll gira despacio hasta mostrar el perfil y vuelve: un solo gesto, sin vueltas completas.
    const pirueta = reducirMovimiento ? 0 : Math.sin(progreso.current * Math.PI) * GIRO_MAXIMO;
    const respiracion = reducirMovimiento ? 0 : Math.sin(t * 0.8) * 0.06;
    // En reposo queda en tres cuartos para que se lea el volumen del bisel.
    const objetivo = -Math.PI * (1 - aterrizaje) + TRES_CUARTOS + pirueta + respiracion + pointer.x * 0.25;
    giro.current.rotation.y += (objetivo - giro.current.rotation.y) * suavizado;
    giro.current.position.y = CENTRO_BAILARINA.y + (1 - aterrizaje) * 0.5;
    logo.current.rotation.x += (-pointer.y * 0.06 - logo.current.rotation.x) * suavizado;
    logo.current.rotation.y += (pointer.x * 0.08 - logo.current.rotation.y) * suavizado;
    logo.current.scale.setScalar(Math.min(1, (viewport.height * 0.9) / ALTO_LOGO, (viewport.width * 0.92) / ANCHO_LOGO));
  });

  return (
    <group ref={logo}>
      <mesh geometry={recursos.plano} material={recursos.tinta} renderOrder={0} />
      <group ref={giro} position={CENTRO_BAILARINA}>
        <mesh geometry={recursos.cuerpo} material={[recursos.caras, recursos.canto]} renderOrder={1} />
      </group>
    </group>
  );
};
