import { cualidades, etapasClase, img, type Proyecto } from '@/data/proyecto';
import { ruta } from '@/lib/ruta';

// Proyecto "CheerDance Colegios Manquecura": equipos mixtos de 1° básico a IV° medio, para Ciudad del Este (Puente Alto),
// Valle Lo Campino (Quilicura) y Ñuñoa. Los datos del colegio salen de investigacion-manquecura/INFORME.md (octubre 2026);
// las categorías, de la División Escolar de DanceClassic (danceclassic.cl/reglamentos).

export const MANQUECURA: Proyecto = {
  colegio: { nombre: 'Colegios Manquecura', comuna: 'Puente Alto · Quilicura · Ñuñoa', articulo: 'los' },
  pdf: ruta('/proyecto/cheerdance-manquecura.pdf'),
  capitulos: [
    { id: 'academia', titulo: 'La academia' },
    { id: 'profesora', titulo: 'Profesional a cargo' },
    { id: 'colegio', titulo: 'Para Manquecura' },
    { id: 'taller', titulo: 'El programa' },
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
      'Academia de cheerdance para estudiantes de 1° básico a IV° medio, en equipos mixtos. Parte formativa, termina en el escenario y abre la puerta a competir en todo Chile, y más allá.',
    bajadaLamina: 'Academia de cheerdance para estudiantes de 1° básico a IV° medio, en equipos mixtos. De lo formativo a lo competitivo, con proyección internacional.',
  },
  enElColegio: {
    nombre: 'Manquecura',
    intro:
      'El cheerdance ya tiene historia en la red. Esta propuesta lo lleva a Ciudad del Este, Valle Lo Campino y Ñuñoa con el formato de academia que los colegios ya usan, y lo conecta con sus pilares.',
    red: [
      {
        colegio: 'Ciudad de los Valles',
        logro: 'Campeón nacional 2025',
        texto: 'Su academia de cheerleading ganó el 1er lugar Junior y el 3er lugar Youth en el Campeonato Nacional 2025.',
        destacado: true,
      },
      {
        colegio: 'Ciudad del Este',
        logro: 'Academia en 2022',
        texto: 'Tuvo academia de cheerleaders, que se presentó en un encuentro de siete equipos en enero de 2023.',
      },
      {
        colegio: 'Ñuñoa',
        logro: 'Taller en 2023 y 2024',
        texto: 'Tuvo taller de cheerleading, con equipos desde prekínder hasta IV° medio.',
      },
    ],
    pilares: [
      {
        nombre: 'Formación holística',
        texto: 'Los ejes del programa DLI se entrenan en cada ensayo: autogestión, habilidades sociales y toma de decisiones. Las capitanías del equipo forman líderes, como Líderes del Mañana.',
      },
      {
        nombre: 'Salvaguarda',
        texto: 'La academia trabaja bajo el protocolo de Salvaguarda de cada colegio y en coordinación con su encargada.',
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
      'Academia del Centro de Extensión, abierta a estudiantes de 1° básico a IV° medio',
      'Inscripción por SchoolNet, como las demás academias',
      'Pago directo de las familias, por semestre',
      'Semestres de abril a junio y de julio a noviembre, con muestra a las familias al cierre',
    ],
    encuentro: {
      nombre: 'Encuentro de Cheer Manquecura',
      texto:
        'Así como la red ya se junta en el fútbol y la robótica, un encuentro anual de cheer reuniría en un mismo escenario a los equipos de los cuatro colegios Manquecura, incluido el campeón de Ciudad de los Valles, y más adelante a los colegios Pumahue de Cognita.',
    },
  },
  taller: {
    titulo: ['Academia escolar', 'de Cheerdance.'],
    caracter: 'De carácter formativo a competitivo, con una muestra frente a la comunidad al cierre de cada semestre.',
    caracterLamina: 'Formativo a competitivo, con muestra al cierre de cada semestre.',
    publico: 'Para estudiantes de 1° básico a IV° medio, en equipos mixtos y por categorías según su curso.',
    modalidad: [
      { cifra: '1', unidad: 'sesión semanal', texto: '90 minutos por categoría' },
      { cifra: '+1', unidad: 'sesión extra', texto: 'semanal, para el equipo competitivo' },
      { cifra: '3', unidad: 'categorías', texto: 'de 1° básico a IV° medio' },
      { cifra: '2', unidad: 'muestras al año', texto: 'una al cierre de cada semestre' },
    ],
    tituloCategorias: 'Tres categorías, equipos mixtos',
    categorias: [
      {
        nombre: 'Mini',
        cursos: '1° a 3° básico',
        edades: '6 a 9 años',
        foco: 'Juego danzado, ritmo, coordinación y primeros motions con pompones.',
        foto: img('galeria/mini-fila-2019.jpg'),
      },
      {
        nombre: 'Youth',
        cursos: '4° a 6° básico',
        edades: '9 a 12 años',
        foco: 'Giros, saltos y kicks con técnica; memoria coreográfica y sincronización.',
        foto: img('galeria/seleccion-escenario-2019.jpg'),
      },
      {
        nombre: 'Varsity',
        cursos: '7° básico a IV° medio',
        edades: '12 a 18 años',
        foco: 'Técnica avanzada, tricks y coreografía de competencia, con capitanes y capitanas que lideran al equipo.',
        foto: img('galeria/selecciones-cancha-2019.jpg'),
      },
    ],
    notaCategorias:
      'Son las categorías de la División Escolar del Classic Super Nationals Dance. El equipo competitivo también puede inscribirse en Junior, que va de 3° a 8° básico.',
    etapas: [
      {
        nombre: 'Formativo',
        texto: 'Todos los estudiantes inscritos en la academia. Técnica, valores y una coreografía para la muestra de cada semestre frente a la comunidad.',
      },
      {
        nombre: 'Competitivo',
        texto: 'Quienes quieren ir más allá forman el equipo que representa al colegio en campeonatos nacionales, con una sesión semanal extra.',
      },
    ],
    objetivoGeneral:
      'Desarrollar en los estudiantes de los Colegios Manquecura las habilidades y técnicas del cheerdance (postura, coordinación, flexibilidad, conciencia corporal y espacial, y manejo del ritmo) mediante una academia formativa, personalizada e inclusiva que fomente el refuerzo positivo, el compañerismo, la autosuperación y el amor por la danza, y que los proyecte a la presentación escénica y a la competencia.',
    objetivosEspecificos: [
      'Mejorar las cualidades físicas básicas (flexibilidad, fuerza, equilibrio, coordinación y resistencia) de acuerdo con la edad de cada categoría.',
      'Desarrollar la conciencia corporal, la orientación espacial y la propiocepción con ejercicios de postura, alineación y control del movimiento.',
      'Aprender y ejecutar los elementos técnicos del cheerdance (piruetas, saltos, kicks, motions, trabajo de suelo y tricks) respetando la progresión metodológica de cada uno.',
      'Desarrollar la memoria coreográfica, la musicalidad, la espacialidad y la sincronización grupal mediante el montaje de coreografías.',
      'Fortalecer la expresión corporal, la autoestima y la seguridad escénica a través de las muestras de cada semestre.',
      'Promover habilidades socioemocionales (trabajo en equipo, respeto, responsabilidad, liderazgo y tolerancia a la frustración), en línea con los ejes del programa DLI.',
      'Conformar un equipo competitivo que represente al colegio en campeonatos nacionales de cheerdance.',
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
    etapas: etapasClase('Llegan 10 minutos antes, con ropa deportiva, el pelo tomado y su botella de agua.'),
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
  // Sigue los semestres de las academias del colegio: abril a junio y julio a noviembre.
  temporada: [
    { mes: 'Abr', texto: 'Inicio de la academia y formación de categorías' },
    { mes: 'May – Jun', texto: 'Técnica, selección del equipo competitivo y muestra del 1er semestre' },
    { mes: 'Jul – Ago', texto: 'Montaje de la coreografía de competencia' },
    { mes: 'Sep', texto: 'Pulido, uniformes y competencias de fogueo' },
    { mes: 'Oct – Nov', texto: 'Nacionales: Classic Super Nationals' },
    { mes: 'Nov', texto: 'Muestra del 2° semestre frente a la comunidad' },
  ],
  propuesta: {
    intro:
      'La academia formativa es la base. El equipo competitivo es el producto: se contrata aparte, se trabaja una coreografía propia durante todo el año y se compite a nivel nacional con el nombre de cada colegio.',
    planes: [
      {
        nombre: 'Academia formativa',
        bajada: 'Para todos los estudiantes inscritos',
        incluye: [
          '1 sesión semanal de 90 minutos por categoría',
          'Categorías Mini, Youth y Varsity, en equipos mixtos',
          'Inscripción por SchoolNet, como las demás academias',
          'Planificación semestral y evaluación de progreso',
          'Coreografía y muestra al cierre de cada semestre',
          'Informe para apoderados y colegio',
        ],
        venta: false,
      },
      {
        nombre: 'Equipo competitivo',
        bajada: 'El producto premium del programa',
        incluye: [
          'Selección de estudiantes desde la academia formativa',
          '1 sesión semanal extra de entrenamiento',
          'Coreografía original de competencia y música editada',
          'Inscripción y gestión de campeonatos nacionales',
          'Acompañamiento de la profesora en cada competencia',
          'Ruta de proyección internacional',
        ],
        venta: true,
      },
    ],
    cotizacion: 'número de estudiantes y categorías',
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
  },
};
