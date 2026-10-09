// Lo que sabe Estrella, la asistente del sitio. Lo usan el chat (respuestas sin IA) y el Worker con Claude
// (worker/), así que es la única fuente: si cambia un horario o una sede, se corrige aquí.
// Todo sale de las publicaciones de @academiaspiritdance, del CV de Paulina y del propio sitio.
// No importar nada de lib/ aquí: el Worker lo empaqueta fuera de Next.

export const CONTACTO_ACADEMIA = {
  whatsapp: '56936429735',
  telefono: '+56 9 3642 9735',
  instagram: 'https://www.instagram.com/academiaspiritdance',
  correo: 'pauliale3@gmail.com',
};

export type Sede = {
  id: string;
  nombre: string;
  direccion: string;
  horario: string;
  edades: string;
  estilos: string;
  vigente: boolean;
  fuente: string;
};

// La publicación más reciente (noviembre de 2025) anuncia las clases en Macul. La Araucana fue la sede de 2022-2023.
export const SEDES: Sede[] = [
  {
    id: 'macul',
    nombre: 'Junta de Vecinos Villa Santa Elena',
    direccion: 'Mauricio Rugendas 2151, Villa Santa Elena, Macul, Santiago',
    horario: 'Sábados de 11:00 a 12:00',
    edades: 'Niñas y niños desde los 5 años',
    estilos: 'Urban, Jazz, Girly y más',
    vigente: true,
    fuente: 'Publicación de Instagram de noviembre de 2025',
  },
  {
    id: 'la-florida',
    nombre: 'Parque Deportivo La Araucana',
    direccion: 'Walker Martínez 2295, La Florida, Santiago',
    horario: 'En 2023: martes de 17:00 a 18:00 (desde 6 años) y sábados de 10:00 a 11:10 (desde 4 años)',
    edades: 'Desde los 4 años',
    estilos: 'Danza infantil, técnica y coreografía',
    vigente: false,
    fuente: 'Publicaciones de Instagram de 2022 y 2023',
  },
];

export const PAGINAS = [
  { ruta: '/', nombre: 'Inicio' },
  { ruta: '/clases', nombre: 'Clases y grupos' },
  { ruta: '/galeria', nombre: 'Galería de fotos' },
  { ruta: '/videos', nombre: 'Videos' },
  { ruta: '/sobre-nosotros', nombre: 'Paulina y su equipo' },
] as const;

export const SOBRE_LA_ACADEMIA = `Spirit Dance Academy es una academia de danza infantil fundada en 2020 por Paulina Quezada Sepúlveda,
licenciada en Educación y profesora de Educación Física (Universidad Católica Silva Henríquez) con un diplomado en Danza
Educativa y Expresión Corporal y más de veinte años enseñando danza. Trabajó trece años en el American British School, donde
dirigió la Muestra Artística Internacional y la selección de Cheerdance, y enseñó danza en la Universidad Diego Portales.
Las clases son por edad y nivel: el Grupo mini (ha recibido niñas desde los 4 años: juego, ritmo y primeros pasos) y Danza infantil
(técnica, elongación y coreografía). Se enseñan estilos como Urban, Jazz y Girly. No hace falta saber bailar para entrar.
Cada fin de año hay una Gala: cada grupo sube al escenario a presentar la coreografía que preparó frente a sus familias.
Paulina hace las clases junto a su equipo de profesoras.
Horarios, cupos, precios e inscripción se consultan directamente con Paulina por WhatsApp.`;

export type TipoAccion = 'whatsapp' | 'mapa' | 'pagina' | 'instagram';
export type Accion = { tipo: TipoAccion; etiqueta: string; valor: string };
export type Respuesta = { texto: string; acciones: Accion[] };

const SEDE_ACTUAL = SEDES.find((s) => s.vigente) ?? SEDES[0];

// Respuestas preparadas: se usan sin IA y como preguntas sugeridas. "claves" son palabras que las activan.
export const RESPUESTAS_BASE: { pregunta: string; claves: string[]; respuesta: Respuesta }[] = [
  {
    pregunta: '¿Dónde son las clases?',
    claves: ['donde', 'dónde', 'direccion', 'dirección', 'lugar', 'sede', 'ubicacion', 'ubicación', 'llegar', 'mapa', 'macul', 'florida'],
    respuesta: {
      texto: `Según la última publicación de la academia, las clases son en la ${SEDE_ACTUAL.nombre}, ${SEDE_ACTUAL.direccion}. Te dejo el mapa para llegar; antes de ir, confirma con Paulina por WhatsApp.`,
      acciones: [
        { tipo: 'mapa', etiqueta: 'Cómo llegar', valor: SEDE_ACTUAL.id },
        { tipo: 'whatsapp', etiqueta: 'Confirmar con Paulina', valor: 'Hola Paulina, quiero confirmar dónde son las clases de Spirit Dance.' },
      ],
    },
  },
  {
    pregunta: '¿Qué días y a qué hora?',
    claves: ['horario', 'hora', 'dia', 'día', 'dias', 'días', 'cuando', 'cuándo', 'sabado', 'sábado'],
    respuesta: {
      texto: `La última publicación anuncia clases los ${SEDE_ACTUAL.horario.toLowerCase()} en Macul. Los horarios cambian cada temporada, así que lo mejor es confirmarlos con Paulina.`,
      acciones: [{ tipo: 'whatsapp', etiqueta: 'Preguntar horarios', valor: 'Hola Paulina, ¿qué horarios tienen las clases de danza esta temporada?' }],
    },
  },
  {
    pregunta: '¿Desde qué edad pueden entrar?',
    claves: ['edad', 'años', 'anos', 'pequeña', 'pequeño', 'chica', 'chico', 'niña', 'niño', 'mini'],
    respuesta: {
      texto:
        'Las clases se arman por edad y nivel: el Grupo mini ha recibido niñas desde los 4 años y Danza infantil es para las que ya quieren más técnica. La última convocatoria, en Macul, es desde los 5 años; Paulina te confirma el grupo según la edad.',
      acciones: [
        { tipo: 'pagina', etiqueta: 'Ver los grupos', valor: '/clases' },
        { tipo: 'whatsapp', etiqueta: 'Consultar por mi hija', valor: 'Hola Paulina, quiero saber en qué grupo podría entrar mi hija.' },
      ],
    },
  },
  {
    pregunta: '¿Cómo inscribo a mi hija?',
    claves: ['inscrib', 'matricul', 'precio', 'valor', 'cuesta', 'pagar', 'mensualidad', 'cupo', 'cupos'],
    respuesta: {
      texto: 'La inscripción se hace directamente con Paulina por WhatsApp: ahí te cuenta los cupos, el valor y el horario de esta temporada.',
      acciones: [{ tipo: 'whatsapp', etiqueta: 'Inscribir por WhatsApp', valor: 'Hola Paulina, quiero inscribir a mi hija en Spirit Dance.' }],
    },
  },
  {
    pregunta: '¿Qué es la Gala?',
    claves: ['gala', 'presentacion', 'presentación', 'escenario', 'fin de año'],
    respuesta: {
      texto: 'La Gala es la presentación de fin de año: cada grupo sube al escenario a bailar la coreografía que preparó, frente a sus familias.',
      acciones: [{ tipo: 'pagina', etiqueta: 'Ver videos de la Gala', valor: '/videos' }],
    },
  },
  {
    pregunta: '¿Quién hace las clases?',
    claves: ['quien', 'quién', 'profesora', 'paulina', 'equipo', 'experiencia'],
    respuesta: {
      texto: 'Paulina Quezada, fundadora de la academia y profesora de Educación Física con más de veinte años enseñando danza, junto a su equipo de profesoras.',
      acciones: [{ tipo: 'pagina', etiqueta: 'Conocer a Paulina', valor: '/sobre-nosotros' }],
    },
  },
  {
    pregunta: '¿Necesita saber bailar?',
    claves: ['saber bailar', 'experiencia previa', 'nunca ha bailado', 'principiante'],
    respuesta: {
      texto: 'No. Los grupos se arman por edad y nivel, y cada clase se adapta a la etapa de cada niña o niño.',
      acciones: [{ tipo: 'pagina', etiqueta: 'Ver cómo es una clase', valor: '/clases' }],
    },
  },
];

export const RESPUESTA_NO_SE: Respuesta = {
  texto: 'Eso no lo tengo claro, pero Paulina te lo responde al tiro por WhatsApp.',
  acciones: [{ tipo: 'whatsapp', etiqueta: 'Escribir a Paulina', valor: 'Hola Paulina, tengo una pregunta sobre Spirit Dance.' }],
};

export const SALUDO: Respuesta = {
  texto: '¡Hola! Soy Estrella, la asistente de Spirit Dance. Te ayudo con las clases, dónde son, las edades y la inscripción. ¿Qué quieres saber?',
  acciones: [],
};
