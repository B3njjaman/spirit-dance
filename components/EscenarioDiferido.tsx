'use client';

import dynamic from 'next/dynamic';

// Three.js solo existe en el navegador: el lienzo se carga sin SSR.
export const EscenarioDiferido = dynamic(() => import('./Escenario').then((m) => m.Escenario), { ssr: false });
