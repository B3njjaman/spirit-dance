import { ruta } from '@/lib/ruta';

// Portafolio profesional de Paulina: lo usan la página /portafolio, el CV y la carta (que se imprimen a PDF con
// presentacion/generar-pdf.sh). Todo sale de su CV 2026; los años de experiencia se cuentan desde 2004, su primer trabajo.

export const PERSONA = {
  nombre: 'Paulina Quezada Sepúlveda',
  titular: 'Profesora de Educación Física · Especialista en Danza y Cheerdance',
  comuna: 'Macul, Región Metropolitana',
  telefono: '+56 9 3642 9735',
  whatsapp: '56936429735',
  correo: 'pauliale3@gmail.com',
  instagram: '@academiaspiritdance',
  linkedin: 'Paulina Quezada Sepúlveda',
  portafolio: 'b3njjaman.github.io/spirit-dance/portafolio',
  foto: ruta('/img/galeria/paulina-copa-2019.jpg'),
};

export const DESCARGAS = {
  cv: ruta('/portafolio/cv-paulina-quezada.pdf'),
  carta: ruta('/portafolio/carta-presentacion-paulina-quezada.pdf'),
};

export const PERFIL =
  'Licenciada en Educación y Profesora de Educación Física (UCSH), diplomada en Danza Educativa y Expresión Corporal, con más de 20 años de experiencia en colegios, universidades, programas de salud y proyectos culturales. Trece años en el American British School, donde entrenó a la selección de Cheerdance, ganadora de la copa del Super Nacional 2019, y dirigió la Muestra Artística Internacional. Fundadora y directora de Spirit Dance Academy desde 2020. Diseña programas formativos por edad y nivel, lidera equipos y produce eventos de principio a fin.';

export const CIFRAS = [
  { cifra: '+20', texto: 'años enseñando' },
  { cifra: '13', texto: 'años en el American British School' },
  { cifra: '10', texto: 'temporadas al frente de una selección de Cheerdance' },
  { cifra: '2019', texto: 'Copa del Super Nacional de Bars Classic' },
];

export const LOGROS = [
  'Ganó la copa del Super Nacional de Bars Classic 2019 como entrenadora de la selección de Cheerdance del American British School.',
  'Diez temporadas a cargo de los talleres y la selección de Cheerdance del American British School (2009–2019).',
  'Once años dirigiendo la Muestra Artística Internacional del colegio: coreografías, montaje, luces, vestuario y producción.',
  'Fundó Spirit Dance Academy en 2020 y la dirige hasta hoy, con grupos por edad y una Gala anual de fin de año.',
  'Tres años como docente universitaria del electivo "Dance" en la Universidad Diego Portales.',
];

export const COMPETENCIAS = [
  'Planificación curricular de Educación Física',
  'Danza educativa y expresión corporal',
  'Cheerdance formativo y competitivo',
  'Coreografía y montaje escénico',
  'Producción de eventos y muestras artísticas',
  'Coordinación de equipos y monitores',
  'Jefatura de curso y convivencia escolar',
  'Metodologías activas e inclusivas',
  'Programas de vida saludable',
  'Gestión y coaching deportivo',
  'Clases online y cápsulas de evaluación',
  'Canva y ofimática',
];

export type Cargo = { periodo: string; cargo: string; lugar: string; logros: string[] };

export const EXPERIENCIA: Cargo[] = [
  {
    periodo: '2025 – hoy',
    cargo: 'Subdirectora de Arte',
    lugar: 'Centro Cultural y de Desarrollo Social "La Kema del Mono", Escuela Chilena Carnavalera',
    logros: [
      'Planifica y coordina el programa artístico comunitario para niños, jóvenes y adultos.',
      'Diseña metodologías participativas centradas en la inclusión, el trabajo en equipo y la identidad cultural.',
      'Vincula proyectos financiados con fondos públicos que garantizan acceso gratuito a la comunidad.',
    ],
  },
  {
    periodo: '2020 – hoy',
    cargo: 'Directora y fundadora',
    lugar: 'Spirit Dance Academy',
    logros: [
      'Fundó y dirige la academia en sus áreas artística, pedagógica y administrativa.',
      'Diseña programas de danza infantil por edad y nivel: Urbano, Jazz, Girly, Contemporary y Commercial.',
      'Gestiona presupuesto, difusión y alianzas con colegios e instituciones culturales; produce la Gala anual.',
    ],
  },
  {
    periodo: '2023 – 2025',
    cargo: 'Coordinadora del programa "Vida Sana"',
    lugar: 'CESFAM JAP, comuna de Lo Espejo',
    logros: [
      'Planificó el programa anual: talleres, eventos y clases en colegios y jardines infantiles, y evaluaciones nutricionales.',
      'Gestionó recintos deportivos y educacionales para los talleres; registro en el sistema Rayen.',
    ],
  },
  {
    periodo: '2023',
    cargo: 'Docente de la carrera de Preparador Físico',
    lugar: 'AIEP San Joaquín',
    logros: ['Dictó Deportes Individuales (nivel inicial) y Acrosport: fuerza, equilibrio, coordinación y expresión corporal.'],
  },
  {
    periodo: '2021 – 2023',
    cargo: 'Docente universitaria, electivo "Dance"',
    lugar: 'Universidad Diego Portales',
    logros: [
      'Diseñó y dictó el curso de formación general para estudiantes de distintas carreras: la danza como expresión y desarrollo integral.',
      'Elaboró programa, guías y materiales; evaluación continua técnica, expresiva y reflexiva.',
    ],
  },
  {
    periodo: '2020 – 2021',
    cargo: 'Coordinadora de Summer Camp "Tigres Dorados"',
    lugar: 'Escuela "Cobreloa Sangre Loína"',
    logros: ['Dirigió la escuela de verano: equipo de monitores, profesores y asistentes, logística y seguridad de los participantes.'],
  },
  {
    periodo: '2020',
    cargo: 'Profesora de Educación Física, básica y media',
    lugar: 'Colegio Villa España',
    logros: ['Clases online según el currículo nacional y cápsulas de evaluación para todos los niveles.'],
  },
  {
    periodo: '2007 – 2020',
    cargo: 'Profesora de Educación Física, profesora jefe, encargada de la Muestra Artística Internacional y entrenadora de Cheerdance',
    lugar: 'American British School',
    logros: [
      'Educación Física en enseñanza media (2007–2020): planificación y evaluación según el currículo nacional; torneos internos, campeonatos interescolares y jornadas recreativas.',
      'Profesora jefe (2009–2020): acompañamiento académico y socioemocional del curso, convivencia, orientación y trabajo con apoderados.',
      'Muestra Artística Internacional (2009–2020): dirección del evento con instituciones, artistas y delegaciones; coreografías y producción técnica.',
      'Talleres y selección de Cheerdance (2009–2019): coreografías por edad y nivel y representación del colegio en competencias. Copa del Super Nacional 2019.',
    ],
  },
  {
    periodo: '2004 – 2008',
    cargo: 'Profesora monitora de recreación, programa "Ucelandia"',
    lugar: 'Centro Deportivo Universidad Católica',
    logros: ['Juego, dinámicas grupales y expresión corporal para desarrollar habilidades sociales y convivencia.'],
  },
];

export const FORMACION = [
  { periodo: '1997 – 2004', titulo: 'Licenciatura en Educación y Pedagogía en Educación Física, Deportes y Recreación', lugar: 'Universidad Católica Silva Henríquez (UCSH)' },
  { periodo: '', titulo: 'Diplomado de Especialización en Danza Educativa y Expresión Corporal', lugar: 'UCSH' },
  { periodo: '2008', titulo: 'Especialización Federada de Baile Deportivo', lugar: 'Academia José Luis Tejo' },
  { periodo: '2023', titulo: 'Coaching Deportivo y Gestión Deportiva', lugar: 'FIEPS Chile' },
];

export const CURSOS = [
  'Inglés intermedio B1 (American British, 2010)',
  'Canva nivel experto (Universidad Diego Portales, 2021)',
  'Sistema Rayen nivel experto (CESFAM Lo Espejo, 2024)',
  'Multimedia y ofimática para el aula (American British, 2008)',
];

export const PROYECTOS = [
  {
    titulo: 'Spirit Dance Academy',
    texto: 'La academia de danza infantil que fundó en 2020: grupos por edad, estilos y la Gala de fin de año.',
    href: '/',
    foto: ruta('/img/galeria/CqEQD37vhYU_01.jpg'),
  },
  {
    titulo: 'Proyecto CheerDance Colegio Marta Brunet',
    texto: 'Propuesta de taller extraprogramático de cheerdance, de lo formativo a lo competitivo, con su presentación en PDF.',
    href: '/proyecto',
    foto: ruta('/img/galeria/mini-pompones-2019.jpg'),
  },
  {
    titulo: 'Selección de Cheerdance ABS',
    texto: 'La temporada 2019 con el American British School y la copa del Super Nacional.',
    href: '/sobre-nosotros',
    foto: ruta('/img/galeria/copa-super-nacional-2019.jpg'),
  },
  {
    titulo: 'Galería',
    texto: 'Clases, Galas, equipos y competencias, foto por foto.',
    href: '/galeria',
    foto: ruta('/img/galeria/CqWO2ysP_NO_03.jpg'),
  },
  {
    titulo: 'Videos',
    texto: 'Coreografías y presentaciones de la academia.',
    href: '/videos',
    foto: ruta('/img/galeria/C0ZPTvkAO5S_01.jpg'),
  },
];

// Carta de presentación general: sirve para colegios, academias y programas; se adapta por postulación desde el .txt.
export const CARTA = {
  fecha: 'Santiago, octubre de 2026',
  destinatario: ['Señores', 'Equipo de Selección', 'Presente'],
  saludo: 'Estimados:',
  parrafos: [
    'Me dirijo a ustedes para presentar mi postulación a cargos de Educación Física, danza o talleres extraprogramáticos en su institución. Soy Licenciada en Educación y Profesora de Educación Física de la Universidad Católica Silva Henríquez, diplomada en Danza Educativa y Expresión Corporal, con más de veinte años de experiencia formando a niñas, niños y jóvenes a través del movimiento.',
    'Durante trece años fui parte del American British School como profesora de Educación Física y profesora jefe. Ahí entrené a la selección de Cheerdance, con la que ganamos la copa del Super Nacional de Bars Classic en 2019, y estuve a cargo de la Muestra Artística Internacional: coreografías, ensayos, montaje, luces, vestuario y producción. En 2020 fundé Spirit Dance Academy, la academia de danza infantil que dirijo hasta hoy, y he enseñado danza en la Universidad Diego Portales y Acrosport en AIEP.',
    'También he coordinado programas y equipos: el programa Vida Sana del CESFAM de Lo Espejo, con talleres en colegios y jardines; escuelas de verano con monitores a cargo; y hoy la subdirección de arte de un centro cultural comunitario. Trabajo de manera personalizada e inclusiva, con refuerzo positivo, y me importa que cada estudiante avance a su ritmo y disfrute lo que aprende.',
    'Me encantaría aportar esa experiencia a su comunidad, ya sea en clases de Educación Física, en talleres de danza o cheerdance, o formando un equipo que represente a la institución. En mi portafolio pueden ver fotos, videos y un proyecto de taller de cheerdance escolar.',
    'Quedo atenta a la posibilidad de conversar en una entrevista. Agradezco de antemano su tiempo y consideración.',
  ],
  despedida: 'Saludos cordiales,',
};
