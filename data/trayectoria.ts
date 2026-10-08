// Todo sale del CV 2026 de Paulina Quezada; no agregar cifras que no estén ahí.
export type Hito = {
  periodo: string;
  cargo: string;
  lugar: string;
  detalle: string;
  tipo: 'formacion' | 'escuela' | 'academia' | 'universidad' | 'comunidad';
};

export const TRAYECTORIA: Hito[] = [
  {
    periodo: '1997 – 2004',
    cargo: 'Licenciatura en Educación y Pedagogía en Educación Física',
    lugar: 'Universidad Católica Silva Henríquez',
    detalle: 'Profesora de Educación Física, Deportes y Recreación. Diplomado de especialización en Danza Educativa y Expresión Corporal.',
    tipo: 'formacion',
  },
  {
    periodo: '2004 – 2008',
    cargo: 'Profesora monitora de recreación, programa "Ucelandia"',
    lugar: 'Centro Deportivo Universidad Católica',
    detalle: 'Juego, dinámicas grupales y expresión corporal para desarrollar habilidades sociales y convivencia.',
    tipo: 'comunidad',
  },
  {
    periodo: '2007 – 2020',
    cargo: 'Profesora de Educación Física y profesora jefe',
    lugar: 'American British School',
    detalle: 'Trece años en educación media: torneos internos, campeonatos interescolares y, desde 2009, jefatura de curso con foco en convivencia y habilidades socioemocionales.',
    tipo: 'escuela',
  },
  {
    periodo: '2008',
    cargo: 'Especialización federada de Baile Deportivo',
    lugar: 'Academia José Luis Tejo',
    detalle: 'Formación de marzo a diciembre en baile deportivo de competencia.',
    tipo: 'formacion',
  },
  {
    periodo: '2009 – 2020',
    cargo: 'Encargada de la Muestra Artística Internacional',
    lugar: 'American British School',
    detalle: 'Dirección del evento con instituciones, artistas y delegaciones; coreografías de distintas expresiones culturales, ensayos, montaje, luces, música, vestuario y escenografía.',
    tipo: 'escuela',
  },
  {
    periodo: '2009 – 2019',
    cargo: 'Profesora de la selección de Cheerdance',
    lugar: 'American British School',
    detalle: 'Coreografías según edad y nivel, técnica, ritmo y presentación escénica; representación del colegio en eventos internos y externos.',
    tipo: 'escuela',
  },
  {
    periodo: '2020 – hoy',
    cargo: 'Directora y fundadora',
    lugar: 'Spirit Dance Academy',
    detalle: 'Programas de danza infantil por edad y nivel de desarrollo. Dirige lo artístico, lo pedagógico y lo administrativo, en coordinación con colegios e instituciones culturales.',
    tipo: 'academia',
  },
  {
    periodo: '2020',
    cargo: 'Profesora de Educación Física, básica y media',
    lugar: 'Colegio Villa España',
    detalle: 'Clases online, metodologías para clases virtuales y cápsulas de evaluación para todos los niveles.',
    tipo: 'escuela',
  },
  {
    periodo: '2020 – 2021',
    cargo: 'Coordinadora Summer Camp "Tigres Dorados"',
    lugar: 'Escuela de verano',
    detalle: 'Coordinación de monitores, profesores y asistentes; seguridad, bienestar y participación de niñas, niños y adolescentes.',
    tipo: 'comunidad',
  },
  {
    periodo: '2021 – 2023',
    cargo: 'Docente universitaria, electivo "Dance"',
    lugar: 'Universidad Diego Portales',
    detalle: 'La danza como medio de expresión, autoconocimiento y desarrollo integral para estudiantes de distintas carreras.',
    tipo: 'universidad',
  },
  {
    periodo: '2023',
    cargo: 'Docente de la carrera de Preparador Físico',
    lugar: 'AIEP San Joaquín',
    detalle: 'Deportes individuales de nivel inicial y Acrosport: fuerza, equilibrio, coordinación y expresión corporal.',
    tipo: 'universidad',
  },
  {
    periodo: '2023',
    cargo: 'Coaching Deportivo y Gestión Deportiva',
    lugar: 'FIEPS Chile',
    detalle: 'Federación Internacional de Educación Física, capítulo Chile.',
    tipo: 'formacion',
  },
  {
    periodo: '2023 – 2025',
    cargo: 'Coordinadora del programa "Vida Sana"',
    lugar: 'CESFAM, comuna de Lo Espejo',
    detalle: 'Planificación anual de talleres, eventos y clases en colegios y jardines infantiles, y gestión de recintos deportivos.',
    tipo: 'comunidad',
  },
  {
    periodo: '2025 – hoy',
    cargo: 'Subdirectora de Arte',
    lugar: 'Centro Cultural "La Kema del Mono"',
    detalle: 'Escuela carnavalera comunitaria: metodologías participativas, inclusión e identidad cultural, con proyectos de fondos públicos y acceso gratuito.',
    tipo: 'comunidad',
  },
];

export const ETIQUETA_TIPO: Record<Hito['tipo'], string> = {
  formacion: 'Formación',
  escuela: 'Colegio',
  academia: 'Academia',
  universidad: 'Universidad',
  comunidad: 'Comunidad',
};
