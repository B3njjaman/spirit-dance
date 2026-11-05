import { cualidades, etapasClase, HISTORIA, img, type Proyecto } from '@/data/proyecto';
import { ruta } from '@/lib/ruta';

// Proyecto "Rama de Cheer Dance" para el Manquecura Ciudad de los Valles, en equipos mixtos desde playgroup hasta IV° medio.
// Es solo para ese colegio y va dirigido a Héctor Caro, rector de los Colegios Manquecura, que conoció la rama que Paulina
// llevó en su colegio anterior. Por eso cuenta esa rama (talleres formativos más una selección por audición) sin nombrar
// ese colegio. Así lo pidió Paulina en sus audios del 23-10-2026 (audios-paulina/). Los datos del colegio salen de
// investigacion-manquecura/INFORME.md.

// La historia de siempre, pero sin el nombre del colegio anterior: Héctor Caro lo va a reconocer igual.
const HISTORIA_SIN_COLEGIO: Record<string, string> = {
  '2003 – 2004': 'Los campeonatos ACDA abren categorías de Pom y Dance, y los equipos de colegios particulares suben al podio.',
  '2009': 'La International Cheer Union reconoce a FEDECHEER como la federación nacional. Ese año Paulina asume la rama de Cheerdance de su colegio, cuya selección compite en Orlando.',
  '2019': 'Los equipos dirigidos por Paulina ganan el 1° lugar Nacional del Campeonato Intense Chile en Mini Poms y Junior Jazz.',
};

export const MANQUECURA: Proyecto = {
  colegio: { nombre: 'Manquecura Ciudad de los Valles', comuna: 'Pudahuel', articulo: 'el' },
  destinatario: { nombre: 'Héctor Caro', cargo: 'Rector Colegios Manquecura' },
  pdf: ruta('/proyecto/cheerdance-manquecura.pdf'),
  pdfMovil: ruta('/proyecto/cheerdance-manquecura-movil.pdf'),
  hitos: [
    { periodo: '2007 – 2020', texto: 'Profesora de Educación Física y profesora jefe en un colegio particular de Santiago.' },
    { periodo: '2009 – 2019', texto: 'Profesora de la rama de Cheerdance del colegio: talleres formativos desde playgroup y selección por audición, con cerca de 150 alumnas.' },
    { periodo: '2009', texto: 'Campeonato internacional en Orlando, Estados Unidos, con la selección del colegio.' },
    { periodo: '2019', texto: '1° lugar Nacional del Campeonato Intense Chile en las categorías Mini Poms y Junior Jazz, con los equipos del colegio.' },
    { periodo: '2021 – 2023', texto: 'Docente del electivo "Dance" en la Universidad Diego Portales.' },
    { periodo: '2021 – 2024', texto: 'Clases de Spirit Dance Academy en sus sedes de La Reina y La Florida; en 2022 y 2023, con el patrocinio del British Royal School.' },
    { periodo: '2022 – 2023', texto: 'Entrenadora de la Selección Nacional de Dance (Dance Team Chile) para el Mundial de Cheerleading IFC en Takasaki, Japón.' },
    { periodo: '2023', texto: 'Docente de Acrosport y deportes individuales en AIEP San Joaquín. Coaching y Gestión Deportiva (FIEPS Chile).' },
    { periodo: '2023 – 2025', texto: 'Coordinadora del programa "Vida Sana" del CESFAM de Lo Espejo, con talleres en colegios y jardines.' },
  ],
  historia: HISTORIA.map((hito) => ({ ...hito, texto: HISTORIA_SIN_COLEGIO[hito.anio] ?? hito.texto })),
  // Los envió Paulina el 23-10-2026. Son del canal del colegio anterior, que los títulos nombran; el texto propio no.
  videos: [
    { titulo: 'Galactic Girls', detalle: 'Muestra Artística 2014 · 3 min', url: 'https://youtu.be/UNpA6TcFTkk' },
    { titulo: 'Angel Girls', detalle: 'Muestra Artística 2014 · 3 min', url: 'https://youtu.be/hDkL5DK2t74' },
    { titulo: 'Electric Girls', detalle: 'Muestra Artística 2014 · 3 min', url: 'https://youtu.be/KXs8t8BIqGU' },
    { titulo: 'Galactic Girls', detalle: 'Jazz · Muestra Artística 2017 · 3 min', url: 'https://youtu.be/vy8diGS7Uew' },
  ],
  disciplina: {
    intro:
      'El cheer dance es la rama de danza del cheerleading: una disciplina deportiva con reglamento, jueces y campeonatos, que se baila en equipo con la energía del cheer y sin acrobacias en altura.',
    estilos: [
      { nombre: 'Pom', texto: 'Con pompones: motions precisos, sincronía y efectos visuales de todo el equipo.' },
      { nombre: 'Jazz', texto: 'Técnica de ballet y jazz: giros, saltos, extensiones y líneas largas.' },
      { nombre: 'Hip hop', texto: 'Estilo urbano: ritmo, actitud, golpes y grooves.' },
      { nombre: 'Lírico', texto: 'Movimiento fluido que interpreta la letra y la emoción de la canción.' },
    ],
    enLosColegios:
      'La mayoría de los colegios particulares de Chile tiene su rama de cheer dance. Para sus estudiantes es un estilo de vida: compañerismo, disciplina y el orgullo de pertenecer al equipo que representa al colegio.',
  },
  capitulos: [
    { id: 'academia', titulo: 'La academia' },
    { id: 'profesora', titulo: 'Profesional a cargo' },
    { id: 'colegio', titulo: 'Ciudad de los Valles' },
    { id: 'taller', titulo: 'La rama' },
    { id: 'cuerpo', titulo: 'Danza y cuerpo' },
    { id: 'clase', titulo: 'Una clase' },
    { id: 'valores', titulo: 'Valores' },
    { id: 'historia', titulo: 'Historia' },
    { id: 'campeonatos', titulo: 'Campeonatos' },
    { id: 'propuesta', titulo: 'Propuesta' },
    { id: 'merch', titulo: 'Merch' },
    { id: 'viajes', titulo: 'Viajes' },
  ],
  portada: {
    bajada:
      'La rama de cheer dance del Manquecura Ciudad de los Valles: talleres formativos desde playgroup hasta 6° básico y una selección por audición que representa al colegio en campeonatos de todo Chile, y más allá.',
    bajadaLamina: 'Talleres formativos desde playgroup y una selección por audición que representa al colegio, con proyección internacional.',
  },
  enElColegio: {
    nombre: 'Ciudad de los Valles',
    intro:
      'Ciudad de los Valles ya sabe ganar en cheer: su academia de cheerleading fue campeona nacional Junior en 2025. Le falta una rama de cheer dance. Esta propuesta la crea con el formato de academia del colegio, junto a su equipo de cheerleading y conectada con los pilares Manquecura.',
    tituloRed: 'El cheer en Ciudad de los Valles',
    red: [
      {
        colegio: 'Cheerleading',
        logro: 'Campeón nacional 2025',
        texto: 'La academia del colegio ganó el 1er lugar Junior y el 3er lugar Youth en el Campeonato Nacional 2025.',
        destacado: true,
      },
      {
        colegio: 'Cheer dance',
        logro: 'Lo que suma la rama',
        texto: 'La danza del cheer: pom, jazz, hip hop y lírico, sin acrobacias en altura. Complementa al cheerleading.',
      },
      {
        colegio: 'Playgroup a IV° medio',
        logro: 'Una rama completa',
        texto: 'Los talleres parten con los más chicos y forman a quienes después audicionan para la selección.',
      },
    ],
    pilares: [
      {
        nombre: 'Formación holística',
        texto: 'Los ejes del programa DLI se entrenan en cada ensayo: autogestión, habilidades sociales y toma de decisiones. Las capitanías del equipo forman líderes, como Líderes del Mañana.',
      },
      {
        nombre: 'Salvaguarda',
        texto: 'La academia trabaja bajo el protocolo de Salvaguarda del colegio y en coordinación con su encargada.',
      },
      {
        nombre: 'Perspectiva global',
        texto: 'El cheer se enseña en inglés (High V, toe touch, five-six-seven-eight) y su ruta competitiva apunta a los mundiales de Orlando.',
      },
      {
        nombre: 'Vida saludable',
        texto: 'Actividad física intensa, hidratación y autocuidado en cada clase. Paulina coordinó el programa Vida Sana del CESFAM de Lo Espejo.',
      },
    ],
    salvaguarda: [
      'Profesional a cargo titulada en Educación, con certificado de antecedentes vigente y sin inhabilidades para trabajar con menores.',
      'Clases dentro del colegio, en el horario y espacio que asigne el Centro de Extensión, con registro de asistencia.',
      'Correcciones técnicas de palabra y con demostración. El contacto físico, solo cuando la técnica lo requiere, avisado y a la vista del grupo.',
      'Comunicación con las familias solo por los canales oficiales del colegio.',
      'Aviso inmediato a la encargada de Salvaguarda ante cualquier señal de alerta.',
    ],
    formato: [
      'Talleres del Centro de Extensión, con cupos por orden de inscripción',
      'Inscripción por SchoolNet, como las demás academias',
      'Pago directo de las familias, por semestre; la selección paga una cuota reducida',
      'Semestres de abril a junio y de julio a noviembre, con presentación de cierre ante las familias',
    ],
    encuentro: {
      etiqueta: 'Una idea para el colegio',
      nombre: 'Gala de Cheer Ciudad de los Valles',
      texto:
        'Una gala al final de cada año en que los talleres, la selección de cheer dance y la academia de cheerleading comparten el escenario frente a toda la comunidad del colegio.',
    },
  },
  taller: {
    titulo: ['Rama de', 'Cheer Dance.'],
    caracter: 'Talleres formativos abiertos a todos y una selección por audición que representa al colegio. Cada semestre cierra con una presentación frente a la comunidad.',
    caracterLamina: 'Talleres para todos y selección por audición.',
    publico: 'Desde playgroup hasta IV° medio, en equipos mixtos y por categorías según el curso.',
    modalidad: [
      { cifra: '2', unidad: 'niveles', texto: 'talleres formativos y selección' },
      { cifra: '1–2', unidad: 'clases semanales', texto: 'en los talleres; los más chicos, el sábado' },
      { cifra: '2', unidad: 'entrenamientos', texto: 'semanales para la selección' },
      { cifra: '2', unidad: 'presentaciones', texto: 'al año, una al cierre de cada semestre' },
    ],
    tituloCategorias: 'Tres categorías, equipos mixtos',
    categorias: [
      {
        nombre: 'Mini',
        cursos: 'Playgroup a 2° básico',
        edades: '2 a 8 años',
        foco: 'Juego danzado, ritmo, coordinación y primeros motions con pompones. Los más chicos, el sábado.',
        foto: img('galeria/mini-pompones-2019.jpg'),
      },
      {
        nombre: 'Junior',
        cursos: '3° a 6° básico',
        edades: '8 a 12 años',
        foco: 'Giros, saltos y kicks con técnica; memoria coreográfica, sincronización y los estilos pom y jazz.',
        foto: img('galeria/seleccion-escenario-2019.jpg'),
      },
      {
        nombre: 'Senior',
        cursos: '7° básico a IV° medio',
        edades: '12 a 18 años',
        foco: 'La selección: técnica avanzada, tricks y coreografía de competencia, con capitanes y capitanas.',
        foto: img('galeria/selecciones-cancha-2019.jpg'),
      },
    ],
    notaCategorias:
      'En media la rama trabaja como selección. Cada equipo compite en su división del Classic Super Nationals Dance.',
    etapas: [
      {
        nombre: 'Taller formativo',
        texto: 'Abierto a todos, por orden de inscripción hasta completar los cupos. Técnica, valores y una coreografía para la presentación de cada semestre.',
      },
      {
        nombre: 'Selección',
        texto: 'Se entra por audición en marzo, después del intensivo de verano de diciembre. Entrena dos veces por semana y representa al colegio en campeonatos.',
      },
    ],
    objetivoGeneral:
      'Desarrollar en los estudiantes del Manquecura Ciudad de los Valles las habilidades y técnicas del cheer dance (postura, coordinación, flexibilidad, conciencia corporal y espacial, y manejo del ritmo) mediante una rama con talleres formativos y una selección, personalizada e inclusiva, que fomente el refuerzo positivo, el compañerismo, la autosuperación y el amor por la danza, y que los proyecte a la presentación escénica y a la competencia.',
    objetivosEspecificos: [
      'Mejorar las cualidades físicas básicas (flexibilidad, fuerza, equilibrio, coordinación y resistencia) de acuerdo con la edad de cada categoría.',
      'Desarrollar la conciencia corporal, la orientación espacial y la propiocepción con ejercicios de postura, alineación y control del movimiento.',
      'Aprender y ejecutar los elementos técnicos del cheerdance (piruetas, saltos, kicks, motions, trabajo de suelo y tricks) respetando la progresión metodológica de cada uno.',
      'Desarrollar la memoria coreográfica, la musicalidad, la espacialidad y la sincronización grupal mediante el montaje de coreografías.',
      'Fortalecer la expresión corporal, la autoestima y la seguridad escénica a través de las muestras de cada semestre.',
      'Promover habilidades socioemocionales (trabajo en equipo, respeto, responsabilidad, liderazgo y tolerancia a la frustración), en línea con los ejes del programa DLI.',
      'Conformar una selección que represente al colegio en campeonatos nacionales e internacionales de cheer dance.',
    ],
  },
  cuerpo: {
    intro: 'Cada elemento del cheerdance trabaja una cualidad física, modela la postura y le enseña a cada estudiante a habitar su cuerpo con seguridad.',
    cualidades: cualidades('todo el equipo marca'),
    tituloBeneficios: 'Lo que gana cada estudiante',
    beneficios: [
      {
        nombre: 'Propiocepción',
        texto: 'Es el sentido que le dice al cerebro dónde está cada parte del cuerpo sin mirarla. Girar, saltar y caer, o sostener un equilibrio con los ojos en el público, lo entrenan clase a clase.',
      },
      {
        nombre: 'Expresión corporal',
        texto: 'Aprenden a comunicar emociones con el cuerpo y el rostro, y a proyectar energía hacia el público sin palabras.',
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
    ],
  },
  clase: {
    intro:
      'Cada clase se trabaja de manera personalizada e inclusiva: la profesora adapta cada ejercicio al nivel de cada estudiante, para que todos avancen y nadie quede atrás.',
    introLamina: 'Clases personalizadas e inclusivas: cada ejercicio se adapta al nivel de cada estudiante.',
    etapas: etapasClase('Llegan 10 minutos antes, con el uniforme de la rama (polerón, calzas y pollera), el pelo tomado y su botella de agua.'),
  },
  valores: {
    intro: 'Seis valores guían cada clase de Spirit Dance. Y la disciplina desarrolla habilidades que los estudiantes llevan a la sala de clases y a la vida.',
    lista: [
      { nombre: 'Amor por la danza', texto: 'Conocer, valorar y disfrutar la danza es el centro de todo lo que hacemos.' },
      { nombre: 'Refuerzo positivo', texto: 'Se corrige con cariño y se celebra cada avance, por pequeño que sea.' },
      { nombre: 'Compañerismo', texto: 'Nadie brilla solo: el equipo se cuida y se levanta.' },
      { nombre: 'Autosuperación', texto: 'La meta es ser cada día mejor que ayer, no mejor que los demás.' },
      { nombre: 'Inclusión', texto: 'Cada estudiante tiene un lugar. La enseñanza es personalizada y respeta su ritmo.' },
      { nombre: 'Respeto', texto: 'Por la profesora, el equipo, los rivales y el escenario.' },
    ],
    transversales: [
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
      'Autoconfianza',
    ],
  },
  // El año de la rama: intensivo de verano en diciembre, audiciones en marzo y los semestres de las academias del colegio.
  temporada: [
    { mes: 'Dic', texto: 'Intensivo de verano: dos semanas de clases para preparar la audición' },
    { mes: 'Mar', texto: 'Audiciones para la selección' },
    { mes: 'Abr', texto: 'Inicio de los talleres formativos y de la selección' },
    { mes: 'Jun – Jul', texto: 'Presentación de cierre del 1er semestre' },
    { mes: 'Ago – Sep', texto: 'Montaje y pulido de la coreografía de competencia' },
    { mes: 'Oct – Nov', texto: 'Nacionales y presentación de cierre del 2° semestre' },
  ],
  propuesta: {
    intro:
      'Los talleres formativos son la base de la rama y la sostienen: las familias los pagan por semestre, y eso permite que la selección entrene dos veces por semana con una cuota reducida. El colegio suma talleres muy pedidos y un equipo que lo representa.',
    planes: [
      {
        nombre: 'Talleres formativos',
        bajada: 'Para todos, por cupos',
        incluye: [
          'Desde playgroup hasta 6° básico, en Mini y Junior',
          '1 o 2 clases semanales; los más chicos, el sábado en la mañana',
          'Inscripción por SchoolNet, por orden de llegada',
          'Planificación semestral y evaluación de progreso',
          'Coreografía y presentación al cierre de cada semestre',
          'Informe para apoderados y colegio',
        ],
        venta: false,
      },
      {
        nombre: 'Selección',
        bajada: 'El producto premium de la rama',
        incluye: [
          'Audición en marzo, con intensivo de verano en diciembre',
          '2 entrenamientos semanales',
          'Cuota reducida para quienes quedan seleccionados',
          'Coreografía original de competencia y música editada',
          'Inscripción y acompañamiento en campeonatos nacionales',
          'Ruta de proyección internacional',
        ],
        venta: true,
      },
    ],
    cotizacion: 'número de estudiantes, categorías y cupos',
  },
  merch: {
    colores: 'de Manquecura.',
    equipo: 'Manquecura',
    paleta: {
      tela: ['#0C4693', '#022E55'],
      cuello: '#011a33',
      poleron: ['#022E55', '#0b3d6b'],
      mono: ['#ffa24d', '#ED6A08', '#ED6A08', '#c4540a', '#f58a2a'],
      pompones: [
        ['#0C4693', '#ED6A08', '#ffffff'],
        ['#ffffff', '#EFA84A', '#022E55'],
      ],
    },
    piezas: [
      { id: 'polera', nombre: 'Polera de entrenamiento', texto: 'Algodón, azul marino, con el logo dorado al frente.' },
      { id: 'poleron', nombre: 'Polerón del equipo', texto: '"Manquecura Cheer" en la espalda, para viajar y competir.' },
      { id: 'mono', nombre: 'Moño de competencia', texto: 'El clásico bow del cheer, naranjo con brillos, para quien lo use.' },
      { id: 'pompones', nombre: 'Pompones', texto: 'Metalizados en azul, naranjo, dorado y blanco.' },
      { id: 'botella', nombre: 'Botella', texto: 'Una para cada estudiante, como pide cada clase.' },
      { id: 'bolso', nombre: 'Bolso deportivo', texto: 'Para llevar zapatillas, pompones y todo el equipo.' },
    ],
    // Fotos que mandó Paulina el 23-10-2026 (video-compilado/fotos), con las caras de las alumnas difuminadas.
    vestimenta: {
      intro:
        'Hoy las alumnas de la academia entrenan con polerón, calzas y pollera, y se presentan con polera, moño y pompones. La rama tendría lo suyo, en los colores del colegio.',
      fotos: [
        { src: img('galeria/uniforme-academia.jpg'), nombre: 'Uniforme de clases', texto: 'Polerón, calzas y pollera de Spirit Dance Academy.' },
        { src: img('galeria/campamento-brs-polerones.jpg'), nombre: 'Polerón de la academia', texto: 'Negro, con el logo de Spirit Dance, para entrenar y viajar.' },
        { src: img('galeria/gala-academia-2022.jpg'), nombre: 'Gala 2022', texto: 'Polera, moño y pompones para subir al escenario.' },
        {
          src: img('galeria/seleccion-nacional-polera-mono.jpg'),
          nombre: 'Selección Nacional de Dance',
          texto: 'Moño y polera de entrenamiento del equipo que Paulina preparó para Takasaki 2023.',
        },
      ],
    },
  },
};
