import { ruta } from '@/lib/ruta';

// Proyecto "CheerDance Colegio Marta Brunet" (Macul). Lo pedagógico sale del Protocolo Spirit Dance 2025 y del CV de
// Paulina; la historia, los campeonatos y los viajes, de las fuentes citadas al final de cada lista.
// La presentación descargable (presentacion/) repite estos textos: si cambia algo aquí, se cambia también allá.

export const COLEGIO = { nombre: 'Colegio Marta Brunet', comuna: 'Macul' };

export const PDF_PROYECTO = ruta('/proyecto/cheerdance-marta-brunet.pdf');

export const CAPITULOS = [
  { id: 'academia', numero: '01', titulo: 'La academia' },
  { id: 'profesora', numero: '02', titulo: 'Profesional a cargo' },
  { id: 'taller', numero: '03', titulo: 'El taller' },
  { id: 'cuerpo', numero: '04', titulo: 'Danza y cuerpo' },
  { id: 'clase', numero: '05', titulo: 'Una clase' },
  { id: 'valores', numero: '06', titulo: 'Valores' },
  { id: 'historia', numero: '07', titulo: 'Historia' },
  { id: 'campeonatos', numero: '08', titulo: 'Campeonatos' },
  { id: 'propuesta', numero: '09', titulo: 'Propuesta' },
  { id: 'merch', numero: '10', titulo: 'Merch' },
  { id: 'viajes', numero: '11', titulo: 'Viajes' },
] as const;

const img = (archivo: string) => ruta(`/img/${archivo}`);

// 01 · La academia (Protocolo Spirit Dance 2025)
export const ACADEMIA = {
  objetivo:
    'Spirit Dance Academy enseña, desarrolla y potencia las habilidades y técnicas de la danza: postura, coordinación, flexibilidad, conciencia corporal y espacial, y manejo del ritmo, a través de estilos como Urbano, Jazz, Girly, Contemporary y Commercial Dance.',
  caracter:
    'Es una academia de carácter formativo, con metodologías orientadas a la enseñanza personalizada, que fomenta el refuerzo positivo, el compañerismo, la autosuperación y, sobre todo, el conocimiento, la valoración y el amor por la danza.',
  datos: [
    { cifra: '2020', texto: 'año de fundación' },
    { cifra: '+25', texto: 'años de experiencia de su directora' },
    { cifra: '5', texto: 'estilos: Urbano, Jazz, Girly, Contemporary y Commercial' },
    { cifra: '1', texto: 'Gala de fin de año para cada grupo' },
  ],
  fotos: [
    { src: img('galeria/CqEQD37vhYU_01.jpg'), alt: 'Team La Florida con sus profesoras y flores' },
    { src: img('galeria/CqWO2ysP_NO_03.jpg'), alt: 'Toda la clase elongando en las colchonetas' },
    { src: img('galeria/C0ZPTvkAO5S_01.jpg'), alt: 'Alumna en la plataforma 360 de la Gala' },
  ],
};

// 02 · Profesional a cargo (CV 2026 y protocolo)
export const PROFESORA = {
  nombre: 'Paulina Quezada Sepúlveda',
  cargo: 'Directora y fundadora de Spirit Dance Academy',
  foto: img('galeria/paulina-copa-2019.jpg'),
  titulos: [
    'Licenciada en Educación',
    'Profesora de Educación Física (Universidad Católica Silva Henríquez)',
    'Diplomada en Danza Educativa y Expresión Corporal',
    'Entrenadora de equipos de Cheerdance formativos y competitivos',
  ],
  hitos: [
    { periodo: '2007 – 2020', texto: 'Profesora de Educación Física y profesora jefe en el American British School.' },
    { periodo: '2009 – 2019', texto: 'Entrenadora de la selección de Cheerdance del American British School: coreografías por edad y nivel, técnica y presentación escénica.' },
    { periodo: '2019', texto: 'Copa del Super Nacional de Bars Classic con la selección del colegio.' },
    { periodo: '2009 – 2020', texto: 'Directora de la Muestra Artística Internacional del American British School.' },
    { periodo: '2021 – 2023', texto: 'Docente del electivo "Dance" en la Universidad Diego Portales.' },
    { periodo: '2023', texto: 'Docente de Acrosport y deportes individuales en AIEP San Joaquín. Coaching y Gestión Deportiva (FIEPS Chile).' },
    { periodo: '2023 – 2025', texto: 'Coordinadora del programa "Vida Sana" del CESFAM de Lo Espejo, con talleres en colegios y jardines.' },
  ],
};

// 03 · El taller
export const TALLER = {
  nombre: 'Taller extraprogramático escolar de Cheerdance',
  publico: 'Para las alumnas del colegio (solo mujeres), por categorías según su curso.',
  modalidad: [
    { cifra: '2', unidad: 'horas pedagógicas', texto: '90 minutos por sesión' },
    { cifra: '2', unidad: 'días a la semana', texto: 'como mínimo' },
    { cifra: '3', unidad: 'categorías', texto: 'de preescolar a 8° básico' },
    { cifra: '1', unidad: 'presentación final', texto: 'del equipo formativo a fin de año' },
  ],
  categorias: [
    {
      nombre: 'Mini',
      cursos: 'Preescolar · pre-kínder y kínder',
      edades: '4 a 6 años',
      foco: 'Juego danzado, ritmo, motricidad gruesa y primeros motions con pompones.',
      foto: img('galeria/mini-pompones-2019.jpg'),
    },
    {
      nombre: 'Infantil',
      cursos: '1° y 2° básico',
      edades: '6 a 8 años',
      foco: 'Coordinación, equilibrio, primeros giros y saltos, memoria coreográfica.',
      foto: img('galeria/mini-fila-2019.jpg'),
    },
    {
      nombre: 'Junior',
      cursos: '3° a 8° básico',
      edades: '8 a 14 años',
      foco: 'Técnica de piruetas, saltos, kicks y tricks; sincronización y coreografía de competencia.',
      foto: img('galeria/seleccion-escenario-2019.jpg'),
    },
  ],
  etapas: [
    {
      nombre: 'Formativo',
      texto: 'Todas las alumnas inscritas. Técnica, valores y una coreografía para la presentación de fin de año frente a la comunidad.',
    },
    {
      nombre: 'Competitivo',
      texto: 'Las alumnas que quieren ir más allá forman el equipo que representa al colegio en campeonatos nacionales durante el año.',
    },
  ],
  objetivoGeneral:
    'Desarrollar en las alumnas del Colegio Marta Brunet las habilidades y técnicas del cheerdance (postura, coordinación, flexibilidad, conciencia corporal y espacial, y manejo del ritmo) mediante un taller formativo, personalizado e inclusivo que fomente el refuerzo positivo, el compañerismo, la autosuperación y el amor por la danza, y que las proyecte a la presentación escénica y a la competencia.',
  objetivosEspecificos: [
    'Mejorar las cualidades físicas básicas (flexibilidad, fuerza, equilibrio, coordinación y resistencia) de acuerdo con la edad de cada categoría.',
    'Desarrollar la conciencia corporal, la orientación espacial y la propiocepción con ejercicios de postura, alineación y control del movimiento.',
    'Aprender y ejecutar los elementos técnicos del cheerdance (piruetas, saltos, kicks, motions, trabajo de suelo y tricks) respetando la progresión metodológica de cada uno.',
    'Desarrollar la memoria coreográfica, la musicalidad, la espacialidad y la sincronización grupal mediante el montaje de coreografías.',
    'Fortalecer la expresión corporal, la autoestima y la seguridad escénica a través de la presentación de fin de año.',
    'Promover habilidades socioemocionales: trabajo en equipo, respeto, responsabilidad, disciplina y tolerancia a la frustración.',
    'Conformar un equipo competitivo que represente al colegio en campeonatos nacionales de cheerdance.',
  ],
};

// 04 · Danza y cuerpo
export const CUALIDADES = [
  { nombre: 'Flexibilidad', texto: 'Amplitud de movimiento en caderas, columna y hombros: spagat, puente y extensiones de pierna.', nivel: 95 },
  { nombre: 'Coordinación', texto: 'Brazos, piernas y cabeza al mismo tiempo y a tiempo con la música: la base de cada motion.', nivel: 92 },
  { nombre: 'Equilibrio', texto: 'Estático y dinámico: relevé, passé y piruetas sobre una pierna sin perder el eje.', nivel: 88 },
  { nombre: 'Fuerza', texto: 'Piernas para saltar y caer suave; core firme para sostener la postura y los giros.', nivel: 80 },
  { nombre: 'Resistencia', texto: 'Una rutina de competencia dura cerca de dos minutos y medio a máxima intensidad.', nivel: 78 },
  { nombre: 'Ritmo', texto: 'Musicalidad, conteos de ocho y precisión: todas marcan el mismo tiempo.', nivel: 96 },
];

export const ESCULTURA = {
  titulo: 'El cuerpo como escultura',
  texto:
    'En la danza el cuerpo se modela como una escultura en movimiento. Cada posición tiene líneas, ángulos y formas que se pueden mirar desde cualquier lado, y el equipo completo arma figuras en el espacio.',
  elementos: [
    { nombre: 'Línea', texto: 'Brazos largos, puntas estiradas y la cabeza alineada con la columna.' },
    { nombre: 'Ángulo', texto: 'Los motions del cheer son geometría: High V, Low V, T, L y Touchdown.' },
    { nombre: 'Tono', texto: 'Músculos activos sin rigidez: firmeza para sostener, soltura para fluir.' },
    { nombre: 'Forma grupal', texto: 'Formaciones, niveles y transiciones: el equipo es una sola escultura.' },
  ],
};

export const BENEFICIOS = [
  {
    nombre: 'Propiocepción',
    texto: 'Es el sentido que le dice al cerebro dónde está cada parte del cuerpo sin mirarla. Girar, saltar y caer, o sostener un equilibrio con los ojos en el público, lo entrenan clase a clase.',
  },
  {
    nombre: 'Expresión corporal',
    texto: 'Las niñas aprenden a comunicar emociones con el cuerpo y el rostro, y a proyectar energía hacia el público sin palabras.',
  },
  {
    nombre: 'Esquema corporal y lateralidad',
    texto: 'Reconocer derecha e izquierda, arriba y abajo, y el propio cuerpo en el espacio: base de la lectura, la escritura y el deporte.',
  },
  {
    nombre: 'Orientación espacial',
    texto: 'Moverse en formaciones, cambiar de lugar sin chocar y mantener distancias desarrolla la percepción del espacio.',
  },
  {
    nombre: 'Atención y memoria',
    texto: 'Memorizar secuencias y conteos ejercita la concentración y la memoria de trabajo.',
  },
  {
    nombre: 'Autoestima',
    texto: 'Lograr un giro, un salto o subir al escenario frente a su comunidad construye seguridad y confianza.',
  },
];

export const FUENTES_CUERPO = [
  { texto: 'Danza en la educación física escolar: revisión bibliográfica (Revista Renef, Unimontes)', href: 'https://periodicos.unimontes.br/index.php/renef/article/download/7269/7712/34672' },
  { texto: 'Expresión corporal y danza en educación infantil (Dialnet)', href: 'https://dialnet.unirioja.es/descarga/articulo/8358778.pdf' },
  { texto: 'Danza, capacidades motrices y autoconcepto en primaria (Dialnet)', href: 'https://dialnet.unirioja.es/descarga/articulo/8303178.pdf' },
  { texto: 'Danza y desarrollo motor en la infancia (Universidad de Sevilla, idUS)', href: 'https://idus.us.es/bitstream/11441/90551/1/RUIZ%20HIDALGO%2c%20MARIA%20VICTORIA.pdf' },
];

// 05 · Una clase (90 minutos)
export const ETAPAS_CLASE = [
  { minutos: 5, nombre: 'Recepción y saludo', texto: 'Las alumnas llegan 10 minutos antes, con el pelo tomado y su botella de agua.' },
  { minutos: 15, nombre: 'Calentamiento basado en la danza', texto: 'Activación corporal con juegos danzados: ritmo, motricidad, equilibrio y coordinación.' },
  { minutos: 15, nombre: 'Flexibilidad y elongación', texto: 'Técnica academista: spagat, puente, extensiones y movilidad articular.' },
  { minutos: 25, nombre: 'Elementos técnicos', texto: 'Los elementos propios de la disciplina, con la progresión metodológica de cada uno.' },
  { minutos: 20, nombre: 'Coreografía grupal', texto: 'Memoria coreográfica, espacialidad, temporalidad, sincronización y proyección.' },
  { minutos: 10, nombre: 'Vuelta a la calma', texto: 'Elongación y compensación al centro de la sala, y feedback de lo aprendido.' },
];

export type Elemento = { nombre: string; texto: string; foto?: string; alt?: string; giro?: boolean };

export const ELEMENTOS_TECNICOS: Elemento[] = [
  { nombre: 'Piruette', texto: 'Giros sobre una pierna en relevé, con el passé arriba y la mirada fija para no marearse.', giro: true },
  { nombre: 'Motions', texto: 'Posiciones de brazos precisas y con fuerza, con o sin pompones: el sello del cheerdance.', foto: img('galeria/mini-pompones-2019.jpg'), alt: 'Las más chicas con pompones fucsia' },
  { nombre: 'Trabajo de suelo', texto: 'Secuencias en el piso que conectan niveles: rodadas, apoyos y transiciones.', foto: img('galeria/CrLUKCXgh_7_01.jpg'), alt: 'Ejercicios de suelo' },
  { nombre: 'Saltos', texto: 'Leap, toe touch, sissone y saltos de cheer: impulso, línea en el aire y caída suave.', foto: img('proyecto/dance-team-cancha.jpg'), alt: 'Equipo de danza con pompones en una cancha' },
  { nombre: 'Tricks', texto: 'Elementos acrobáticos seguros según nivel: ruedas, parada de manos, walkovers.', foto: img('galeria/CbyYK4BA_hC_01.jpg'), alt: 'Acrobacia sobre la colchoneta' },
  { nombre: 'Coordinación', texto: 'Brazos y piernas en tiempos distintos, cambios de dirección y conteos de ocho.', foto: img('galeria/CrLUKCXgh_7_05.jpg'), alt: 'Ensayo de coreografía' },
  { nombre: 'Elementos fundamentales', texto: 'Postura, colocación, puntas y relevé: lo que sostiene a todo lo demás.', foto: img('galeria/CrLUw8pg9kV_01.jpg'), alt: 'Elongación en la barra' },
  { nombre: 'Kicks', texto: 'Patadas altas al frente y al costado, con la pierna de base firme y la cadera cuadrada.', foto: img('galeria/Ccya7v9v4jN_01.jpg'), alt: 'Spagat en el salón de madera' },
];

// Motions dibujados en la sección: ángulos de cada brazo en grados (0 = hacia el costado, 90 = arriba, -90 = abajo).
export const MOTIONS = [
  { nombre: 'High V', izquierdo: 135, derecho: 45 },
  { nombre: 'Low V', izquierdo: -135, derecho: -45 },
  { nombre: 'T', izquierdo: 180, derecho: 0 },
  { nombre: 'Touchdown', izquierdo: 102, derecho: 78 },
  { nombre: 'L', izquierdo: 180, derecho: 84 },
  { nombre: 'Diagonal', izquierdo: -135, derecho: 45 },
];

// 06 · Valores y elementos transversales
export const VALORES = [
  { nombre: 'Amor por la danza', texto: 'Conocer, valorar y disfrutar la danza es el centro de todo lo que hacemos.' },
  { nombre: 'Refuerzo positivo', texto: 'Se corrige con cariño y se celebra cada avance, por pequeño que sea.' },
  { nombre: 'Compañerismo', texto: 'Nadie brilla sola: el equipo se cuida y se levanta.' },
  { nombre: 'Autosuperación', texto: 'La meta es ser cada día mejor que ayer, no mejor que otra.' },
  { nombre: 'Inclusión', texto: 'Cada niña tiene un lugar. La enseñanza es personalizada y respeta su ritmo.' },
  { nombre: 'Respeto', texto: 'Por la profesora, las compañeras, las rivales y el escenario.' },
];

export const TRANSVERSALES = [
  'Trabajo en equipo',
  'Disciplina',
  'Responsabilidad',
  'Compromiso',
  'Liderazgo',
  'Tolerancia a la frustración',
  'Resiliencia',
  'Comunicación',
  'Puntualidad',
  'Empatía',
  'Hábitos de vida saludable',
  'Seguridad en sí misma',
];

// 07 · Historia del cheerdance en Chile
export const HISTORIA = [
  {
    anio: 'Antes de 1996',
    titulo: 'Las barras escolares',
    texto: 'Los colegios animan sus eventos deportivos con "barras" y nace el campeonato Coca-Cola Barras, el primero de alcance masivo.',
  },
  {
    anio: '1996',
    titulo: 'Llega el formato estadounidense',
    texto: 'El campeonato "Cheerleader en Chile" adopta las reglas y normas de seguridad de NCA (EE.UU.). Comienzan las certificaciones de instructores y los campamentos.',
  },
  {
    anio: 'Fines de los 90',
    titulo: 'Explosión de equipos',
    texto: 'Los reglamentos se unifican, las rutinas se vuelven más dinámicas y aparecen equipos en todas las regiones, de preescolar a universitarios.',
  },
  {
    anio: '2000',
    titulo: 'Final en el Estadio Nacional',
    texto: 'La Gran Final de Cheer Chile, con licencia de Varsity, UCA y UDA, reúne a más de 2.000 personas en el Court Central del Estadio Nacional.',
  },
  {
    anio: '2003 – 2004',
    titulo: 'La danza toma fuerza',
    texto: 'Los campeonatos ACDA abren categorías de Pom y Dance, donde colegios como el American British School suben al podio.',
  },
  {
    anio: '2006',
    titulo: 'Nace CheerleaderClassic',
    texto: 'Comienza el campeonato que hoy es el más tradicional del cheer chileno.',
  },
  {
    anio: '2009',
    titulo: 'Federación reconocida',
    texto: 'La International Cheer Union reconoce a FEDECHEER como la federación nacional. Ese año Paulina asume la selección de Cheerdance del American British School.',
  },
  {
    anio: '2017',
    titulo: 'Oro mundial',
    texto: 'Chile gana su primera medalla de oro en el Mundial ICU de Orlando, en la división Coed Elite.',
  },
  {
    anio: '2019',
    titulo: 'La copa de Paulina',
    texto: 'La selección del American British School, dirigida por Paulina, gana la copa del Super Nacional de Bars Classic.',
  },
  {
    anio: '2026',
    titulo: 'Veinte años de Classic',
    texto: 'Los Classic Super Nationals celebran 20 años y equipos chilenos compiten en el Panamericano ICU y en el Mundial de Orlando.',
  },
];

export const FUENTES_HISTORIA = [
  { texto: 'Historia del cheerleading en Chile (César Aracena)', href: 'http://cesararacenatoro.blogspot.com/2009/10/historia-del-cheerleading-en-chile.html' },
  { texto: 'Cheer Chile 2000, archivo de cheerchile.cl (Internet Archive)', href: 'https://web.archive.org/web/20010129001800/http://www.cheerchile.cl/final.htm' },
  { texto: 'Ranking ACDA 2003, archivo de cheerleader.cl (Internet Archive)', href: 'https://web.archive.org/web/20031030020423/http://www.cheerleader.cl/ranking1ermetropolitano_archivos/ranking1ermetropolitano.html' },
  { texto: 'Carta de la ICU sobre FEDECHEER', href: 'https://cheerunion.org/wp-content/uploads/2024/12/icu_NGBLetter_Chile.pdf' },
  { texto: 'CheerleaderClassic', href: 'https://cheerleaderclassic.cl/' },
  { texto: 'Resultados del Panamericano ICU 2026', href: 'https://cheerunion.org/championships/pac/' },
];

// 08 · Campeonatos
export const CAMPEONATOS = [
  {
    nombre: 'Classic Super Nationals Dance',
    organiza: 'DanceClassic (Classic Producciones)',
    cuando: 'Noviembre · en 2026, el 8 de noviembre',
    donde: 'Monticello Grand Casino',
    detalle: 'El nacional de danza: 18 categorías y afiliación a IASF y USASF. Los equipos destacados pueden recibir invitación a The Dance Worlds, The Dance Summit y UDA Nationals.',
    destacado: true,
    href: 'https://danceclassic.cl/',
  },
  {
    nombre: 'Classic Super Nationals Cheer',
    organiza: 'CheerleaderClassic (Classic Producciones)',
    cuando: 'Octubre · en 2026, el 25 de octubre',
    donde: 'Centro Cultural Chimkowe, Peñalolén',
    detalle: 'El campeonato más tradicional del cheer chileno, desde 2006, con jueces internacionales y springfloor.',
    destacado: false,
    href: 'https://cheerleaderclassic.cl/',
  },
  {
    nombre: 'Cheer Challenge Chile',
    organiza: 'Campeonato nacional',
    cuando: 'Abril · en 2026, en el Polideportivo de Viña del Mar',
    donde: 'Viña del Mar',
    detalle: 'Nacional de cheerleading con divisiones por edad y nivel. Abre la temporada competitiva.',
    destacado: false,
    href: 'https://somosdeportes.cl/2026/04/17/equipo-talquino-de-cheerleading-fue-campeon-nacional/',
  },
  {
    nombre: 'Selecciones FEDECHEER',
    organiza: 'Federación Deportiva Chilena de Cheerleaders',
    cuando: 'Según convocatoria',
    donde: 'Panamericano y Mundial ICU',
    detalle: 'La federación reconocida por la ICU arma las selecciones chilenas de Performance Cheer (Pom, Hip Hop y Jazz).',
    destacado: false,
    href: 'https://cheerunion.org/wp-content/uploads/2024/12/icu_NGBLetter_Chile.pdf',
  },
];

export const TEMPORADA = [
  { mes: 'Mar', texto: 'Evaluación inicial y formación de categorías' },
  { mes: 'Abr – May', texto: 'Técnica y selección del equipo competitivo' },
  { mes: 'Jun – Jul', texto: 'Montaje de la coreografía de competencia' },
  { mes: 'Ago – Sep', texto: 'Pulido, uniformes y competencias de fogueo' },
  { mes: 'Oct – Nov', texto: 'Nacionales: Classic Super Nationals' },
  { mes: 'Dic', texto: 'Presentación de fin de año del equipo formativo' },
];

// 09 · Propuesta
export const PLANES = [
  {
    nombre: 'Taller formativo',
    bajada: 'Extraprogramático para todas las alumnas',
    incluye: [
      '2 sesiones semanales de 2 horas pedagógicas',
      'Categorías Mini, Infantil y Junior',
      'Clases personalizadas e inclusivas',
      'Planificación anual y evaluación de progreso',
      'Coreografía y presentación de fin de año',
      'Informe para apoderados y colegio',
    ],
    venta: false,
  },
  {
    nombre: 'Equipo competitivo',
    bajada: 'El producto premium del programa',
    incluye: [
      'Selección de alumnas desde el taller formativo',
      'Coreografía original de competencia y música editada',
      'Entrenamientos extra antes de cada campeonato',
      'Inscripción y gestión de campeonatos nacionales',
      'Acompañamiento de la profesora en cada competencia',
      'Ruta de proyección internacional',
    ],
    venta: true,
  },
];

export const ADICIONALES = ['Uniforme de competencia y merch', 'Cuotas de inscripción de cada campeonato', 'Traslados y viajes'];

// 10 · Merch
export const MERCH = [
  { id: 'polera', nombre: 'Polera de entrenamiento', texto: 'Algodón, morada, con el logo dorado al frente.' },
  { id: 'poleron', nombre: 'Polerón del equipo', texto: '"Marta Brunet Cheer" en la espalda, para viajar y competir.' },
  { id: 'mono', nombre: 'Moño de competencia', texto: 'El clásico bow del cheer, fucsia con brillos.' },
  { id: 'pompones', nombre: 'Pompones', texto: 'Metalizados en morado, dorado y blanco.' },
  { id: 'botella', nombre: 'Botella', texto: 'Una para cada alumna, como pide cada clase.' },
  { id: 'bolso', nombre: 'Bolso deportivo', texto: 'Para llevar zapatillas, pompones y todo el equipo.' },
] as const;

export type IdMerch = (typeof MERCH)[number]['id'];

// 11 · Viajes internacionales
export const DESTINOS = [
  {
    nombre: 'The Dance Worlds',
    lugar: 'Walt Disney World, Orlando',
    cuando: 'Abril',
    texto: 'El mundial de clubes de danza. Se llega con una invitación (bid) ganada en un campeonato afiliado a IASF, como el Classic Super Nationals Dance.',
    foto: img('proyecto/castillo-disney.jpg'),
    alt: 'El castillo de Cenicienta en Magic Kingdom',
  },
  {
    nombre: 'Mundial ICU',
    lugar: 'ESPN Wide World of Sports, Disney',
    cuando: 'Abril',
    texto: 'El campeonato de selecciones nacionales, con división de Performance Cheer. Chile compite a través de FEDECHEER.',
    foto: img('proyecto/espn-wide-world.jpg'),
    alt: 'Vista aérea del complejo ESPN Wide World of Sports de Disney',
  },
  {
    nombre: 'UDA Nationals',
    lugar: 'Walt Disney World, Orlando',
    cuando: 'Enero a marzo',
    texto: 'Los nacionales de danza de Estados Unidos, que reciben equipos invitados desde campeonatos afiliados.',
    foto: img('proyecto/worlds-2019.jpg'),
    alt: 'Equipo campeón celebrando en el escenario de The Cheerleading Worlds 2019',
  },
];

export const RUTA_INTERNACIONAL = [
  { anio: 'Año 1', titulo: 'Formar y debutar', texto: 'Taller formativo, equipo competitivo y primer nacional.' },
  { anio: 'Año 2', titulo: 'Podio nacional', texto: 'Buscar el podio en los Classic Super Nationals y la invitación internacional.' },
  { anio: 'Año 3', titulo: 'Disney', texto: 'Viaje a Orlando con plan de financiamiento junto a las familias.' },
];

export const CREDITOS_FOTOS = [
  'Castillo de Cenicienta: Backattaxk251, CC BY-SA 4.0',
  'ESPN Wide World of Sports: Greg Goebel, CC BY-SA 2.0',
  'The Cheerleading Worlds 2019: Eunderwoood25, CC BY-SA 4.0',
  'Equipo de danza de UT Arlington: Michael Barera, CC BY-SA 4.0',
  'Todas vía Wikimedia Commons.',
];
