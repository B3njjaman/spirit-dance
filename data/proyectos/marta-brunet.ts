import { cualidades, etapasClase, img, type Proyecto } from '@/data/proyecto';
import { ruta } from '@/lib/ruta';

// Proyecto "CheerDance Colegio Marta Brunet" (Macul): solo alumnas, de preescolar a 8° básico.
// Ya se envió a contactos: si cambia un texto, regenerar su PDF (presentacion/generar-pdf.sh marta-brunet).

export const MARTA_BRUNET: Proyecto = {
  colegio: { nombre: 'Colegio Marta Brunet', comuna: 'Macul', articulo: 'el' },
  pdf: ruta('/proyecto/cheerdance-marta-brunet.pdf'),
  capitulos: [
    { id: 'academia', titulo: 'La academia' },
    { id: 'profesora', titulo: 'Profesional a cargo' },
    { id: 'taller', titulo: 'El taller' },
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
      'Taller extraprogramático de cheerdance para las alumnas del colegio, de preescolar a 8° básico. Parte formativo, termina en el escenario y abre la puerta a competir en todo Chile, y más allá.',
    bajadaLamina: 'Taller extraprogramático de cheerdance para las alumnas del colegio. De lo formativo a lo competitivo, con proyección internacional.',
  },
  taller: {
    titulo: ['Taller extraprogramático escolar', 'de Cheerdance.'],
    caracter: 'De carácter formativo a competitivo, con una presentación a fin de año del equipo formativo.',
    caracterLamina: 'Formativo a competitivo, con presentación de fin de año.',
    publico: 'Para las alumnas del colegio (solo mujeres), por categorías según su curso.',
    modalidad: [
      { cifra: '2', unidad: 'horas pedagógicas', texto: '90 minutos por sesión' },
      { cifra: '2', unidad: 'días a la semana', texto: 'como mínimo' },
      { cifra: '3', unidad: 'categorías', texto: 'de preescolar a 8° básico' },
      { cifra: '1', unidad: 'presentación final', texto: 'del equipo formativo a fin de año' },
    ],
    tituloCategorias: 'Tres categorías, solo para niñas',
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
  },
  cuerpo: {
    intro: 'Cada elemento del cheerdance trabaja una cualidad física, modela la postura y le enseña a las niñas a habitar su cuerpo con seguridad.',
    cualidades: cualidades('todas marcan'),
    tituloBeneficios: 'Cómo mejora a las niñas',
    beneficios: [
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
    ],
  },
  clase: {
    intro:
      'Cada clase se trabaja de manera personalizada e inclusiva: la profesora adapta cada ejercicio al nivel de cada niña, para que todas avancen y ninguna quede atrás.',
    introLamina: 'Clases personalizadas e inclusivas: cada ejercicio se adapta al nivel de cada niña.',
    etapas: etapasClase('Las alumnas llegan 10 minutos antes, con el pelo tomado y su botella de agua.'),
  },
  valores: {
    intro: 'Seis valores guían cada clase de Spirit Dance. Y la disciplina desarrolla habilidades que las niñas llevan a la sala de clases y a la vida.',
    lista: [
      { nombre: 'Amor por la danza', texto: 'Conocer, valorar y disfrutar la danza es el centro de todo lo que hacemos.' },
      { nombre: 'Refuerzo positivo', texto: 'Se corrige con cariño y se celebra cada avance, por pequeño que sea.' },
      { nombre: 'Compañerismo', texto: 'Nadie brilla sola: el equipo se cuida y se levanta.' },
      { nombre: 'Autosuperación', texto: 'La meta es ser cada día mejor que ayer, no mejor que otra.' },
      { nombre: 'Inclusión', texto: 'Cada niña tiene un lugar. La enseñanza es personalizada y respeta su ritmo.' },
      { nombre: 'Respeto', texto: 'Por la profesora, las compañeras, las rivales y el escenario.' },
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
      'Seguridad en sí misma',
    ],
  },
  temporada: [
    { mes: 'Mar', texto: 'Evaluación inicial y formación de categorías' },
    { mes: 'Abr – May', texto: 'Técnica y selección del equipo competitivo' },
    { mes: 'Jun – Jul', texto: 'Montaje de la coreografía de competencia' },
    { mes: 'Ago – Sep', texto: 'Pulido, uniformes y competencias de fogueo' },
    { mes: 'Oct – Nov', texto: 'Nacionales: Classic Super Nationals' },
    { mes: 'Dic', texto: 'Presentación de fin de año del equipo formativo' },
  ],
  propuesta: {
    intro:
      'El taller formativo es la base. El equipo competitivo es el producto: se contrata aparte, se trabaja una coreografía propia durante todo el año y se compite a nivel nacional con el nombre del Colegio Marta Brunet.',
    planes: [
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
    ],
    cotizacion: 'número de alumnas y categorías',
  },
  merch: {
    colores: 'de Spirit Dance.',
    equipo: 'Marta Brunet',
    paleta: {
      tela: ['#9d5cff', '#6a2bbf'],
      cuello: '#3d1a78',
      poleron: ['#2a2140', '#3a2f55'],
      mono: ['#ff7cc0', '#e6268c', '#e6268c', '#c81f78', '#ff4fa3'],
      pompones: [
        ['#9d5cff', '#c653f0', '#f5d27a'],
        ['#ffffff', '#f5d27a', '#c653f0'],
      ],
    },
    piezas: [
      { id: 'polera', nombre: 'Polera de entrenamiento', texto: 'Algodón, morada, con el logo dorado al frente.' },
      { id: 'poleron', nombre: 'Polerón del equipo', texto: '"Marta Brunet Cheer" en la espalda, para viajar y competir.' },
      { id: 'mono', nombre: 'Moño de competencia', texto: 'El clásico bow del cheer, fucsia con brillos.' },
      { id: 'pompones', nombre: 'Pompones', texto: 'Metalizados en morado, dorado y blanco.' },
      { id: 'botella', nombre: 'Botella', texto: 'Una para cada alumna, como pide cada clase.' },
      { id: 'bolso', nombre: 'Bolso deportivo', texto: 'Para llevar zapatillas, pompones y todo el equipo.' },
    ],
  },
};
