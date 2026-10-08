import { ruta } from '@/lib/ruta';

export const VIDEO_PRINCIPAL = {
  src: ruta('/videos/trayectoria.mp4'),
  poster: ruta('/videos/trayectoria.jpg'),
};

// Inicio de cada escena del video de trayectoria (video-trayectoria/escenas.json), en segundos.
export const CAPITULOS: { titulo: string; inicio: number }[] = [
  { titulo: 'Quién es Paulina', inicio: 0 },
  { titulo: 'Formación', inicio: 8.26 },
  { titulo: 'Especialización en danza', inicio: 19.27 },
  { titulo: 'American British School', inicio: 27.31 },
  { titulo: 'Spirit Dance Academy', inicio: 38.81 },
  { titulo: 'Del aula a la universidad', inicio: 49.86 },
  { titulo: 'Comunidad', inicio: 57.23 },
  { titulo: 'Bailar para crecer', inicio: 66.98 },
];

// Fotos y reels de @academiaspiritdance. La proporción define el ancho de cada pieza en la tira.
export type PiezaSala =
  | { tipo: 'foto'; src: string; alt: string; proporcion: number }
  | { tipo: 'video'; src: string; poster: string; alt: string; proporcion: number };

export const SALA: PiezaSala[] = [
  { tipo: 'video', src: ruta('/videos/reel-gala.mp4'), poster: ruta('/videos/reel-gala.jpg'), alt: 'Bailarinas en la Gala, sobre la plataforma con burbujas', proporcion: 9 / 16 },
  { tipo: 'foto', src: ruta('/img/momentos/CqEQD37vhYU.jpg'), alt: 'Team La Florida con sus profesoras después de una presentación', proporcion: 1 },
  { tipo: 'foto', src: ruta('/img/momentos/CjwUvuWDOSW.jpg'), alt: 'Grupo mini preparando la Gala 2022', proporcion: 1 },
  { tipo: 'video', src: ruta('/videos/reel-ensayo.mp4'), poster: ruta('/videos/reel-ensayo.jpg'), alt: 'Ensayo de una coreografía en el auditorio', proporcion: 16 / 9 },
  { tipo: 'foto', src: ruta('/img/momentos/CwyQGMcvNQp.jpg'), alt: 'Dos alumnas practicando elongación junto a la ventana', proporcion: 1 },
  { tipo: 'video', src: ruta('/videos/reel-historias.mp4'), poster: ruta('/videos/reel-historias.jpg'), alt: 'Fotos de las alumnas compartidas por sus familias', proporcion: 9 / 16 },
  { tipo: 'foto', src: ruta('/img/momentos/CqWO2ysP_NO_1.jpg'), alt: 'Clase de elongación del Team La Florida', proporcion: 4 / 3 },
  { tipo: 'foto', src: ruta('/img/momentos/CkUKwULvWQy.jpg'), alt: 'Alumnas de Spirit Dance en el escenario', proporcion: 1 },
];
