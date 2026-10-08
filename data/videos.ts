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

export type Categoria = 'clases' | 'gala' | 'historias' | 'trayectoria';

export type Video = { id: string; titulo: string; categoria: Categoria; duracion: string; src: string; poster: string };

// Reels de @academiaspiritdance y el video de trayectoria con sus tres cortes.
export const VIDEOS: Video[] = [
  { id: 'trayectoria', titulo: 'Paulina en 76 segundos', categoria: 'trayectoria', duracion: '1:17', src: ruta('/videos/trayectoria.mp4'), poster: ruta('/videos/trayectoria.jpg') },
  { id: 'clase', titulo: 'Aprende distintas técnicas', categoria: 'clases', duracion: '0:18', src: ruta('/videos/reel-clase.mp4'), poster: ruta('/videos/reel-clase.jpg') },
  { id: 'gala', titulo: 'Noche de Gala', categoria: 'gala', duracion: '0:14', src: ruta('/videos/reel-gala.mp4'), poster: ruta('/videos/reel-gala.jpg') },
  { id: 'ensayo', titulo: 'Ensayo en el escenario', categoria: 'clases', duracion: '0:19', src: ruta('/videos/reel-ensayo.mp4'), poster: ruta('/videos/reel-ensayo.jpg') },
  { id: 'historias', titulo: 'Nuestras bailarinas', categoria: 'historias', duracion: '0:33', src: ruta('/videos/reel-historias.mp4'), poster: ruta('/videos/reel-historias.jpg') },
  { id: 'formacion', titulo: 'Su formación', categoria: 'trayectoria', duracion: '0:11', src: ruta('/videos/clip-formacion.mp4'), poster: ruta('/videos/clip-formacion.jpg') },
  { id: 'escenario', titulo: 'Trece años en el escenario', categoria: 'trayectoria', duracion: '0:12', src: ruta('/videos/clip-escenario.mp4'), poster: ruta('/videos/clip-escenario.jpg') },
  { id: 'academia', titulo: 'Así nació Spirit Dance', categoria: 'trayectoria', duracion: '0:11', src: ruta('/videos/clip-academia.mp4'), poster: ruta('/videos/clip-academia.jpg') },
];

export const ETIQUETA_CATEGORIA: Record<Categoria, string> = {
  clases: 'Clases',
  gala: 'Gala',
  historias: 'Historias',
  trayectoria: 'Trayectoria',
};
