import { ruta } from '@/lib/ruta';

// Historias de la sección Clases. Todo sale de las publicaciones de @academiaspiritdance y del CV.
export type Historia = {
  id: string;
  fondo: { tipo: 'foto' | 'video'; src: string; poster?: string };
  alt: string;
  antetitulo: string;
  titulo: string;
  texto?: string;
  cta?: boolean;
};

export const HISTORIAS: Historia[] = [
  {
    id: 'clase',
    fondo: { tipo: 'video', src: ruta('/videos/reel-clase.mp4'), poster: ruta('/videos/reel-clase.jpg') },
    alt: 'Una clase del Team La Florida',
    antetitulo: 'Spirit Dance Academy',
    titulo: 'Así es una clase',
    texto: 'Toca a la derecha para avanzar.',
  },
  {
    id: 'mini',
    fondo: { tipo: 'foto', src: ruta('/img/grupo-mini.jpg') },
    alt: 'Grupo mini ensayando sobre las colchonetas',
    antetitulo: 'Desde los 4 años',
    titulo: 'Grupo mini',
    texto: 'Juego, ritmo y los primeros pasos de danza.',
  },
  {
    id: 'infantil',
    fondo: { tipo: 'foto', src: ruta('/img/danza-infantil.jpg') },
    alt: 'Alumna practicando elongación con la pierna en alto',
    antetitulo: 'Desde los 6 años',
    titulo: 'Danza infantil',
    texto: 'Técnica, elongación y coreografía.',
  },
  {
    id: 'grupo',
    fondo: { tipo: 'foto', src: ruta('/img/momentos/CqWO2ysP_NO_1.jpg') },
    alt: 'Clase de elongación del Team La Florida',
    antetitulo: 'En cada clase',
    titulo: 'Se baila en grupo',
    texto: 'Cada una aporta a la coreografía que van a presentar.',
  },
  {
    id: 'gala',
    fondo: { tipo: 'video', src: ruta('/videos/reel-gala.mp4'), poster: ruta('/videos/reel-gala.jpg') },
    alt: 'Bailarinas en la plataforma de la Gala',
    antetitulo: 'Fin de año',
    titulo: 'La Gala',
    texto: 'El escenario, el público y la familia mirando.',
  },
  {
    id: 'profesoras',
    fondo: { tipo: 'foto', src: ruta('/img/momentos/CqEQD37vhYU.jpg') },
    alt: 'Team La Florida con sus profesoras',
    antetitulo: 'La Araucana, La Florida',
    titulo: 'Team La Florida y sus profesoras',
  },
  {
    id: 'inscripcion',
    fondo: { tipo: 'foto', src: ruta('/img/team-la-florida.jpg') },
    alt: 'Alumnas sentadas en el escenario',
    antetitulo: 'Inscripciones abiertas',
    titulo: '¿Bailamos?',
    texto: 'Escríbele a Paulina para conocer horarios y cupos.',
    cta: true,
  },
];
