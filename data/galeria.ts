import { ruta } from '@/lib/ruta';

// Fotos de las publicaciones de @academiaspiritdance (instagram/completo), de la más nueva a la más antigua.
// Generado por la herramienta de galería: cada foto tiene versión grande y miniatura en public/img/galeria.
export const MOMENTOS = ['En clase', 'El equipo', 'Retratos', 'La Gala', 'Al aire libre'] as const;
export type Momento = (typeof MOMENTOS)[number];

export type FotoGaleria = { id: string; grande: string; miniatura: string; ancho: number; alto: number; alt: string; momento: Momento; fecha: string; publicacion: string };

const foto = (id: string, ancho: number, alto: number, alt: string, momento: Momento, fecha: string, codigo: string): FotoGaleria => ({
  id,
  grande: ruta(`/img/galeria/${id}.jpg`),
  miniatura: ruta(`/img/galeria/min/${id}.jpg`),
  ancho,
  alto,
  alt,
  momento,
  fecha,
  publicacion: `https://www.instagram.com/p/${codigo}/`,
});

export const GALERIA: FotoGaleria[] = [
  foto('C0ZPTvkAO5S_01', 403, 726, 'Alumna en la plataforma 360 de la Gala', 'La Gala', '2023-12-03', 'C0ZPTvkAO5S'),
  foto('CwyQGMcvNQp_01', 1400, 1400, 'Elongación de pie con ayuda de una compañera', 'En clase', '2023-09-04', 'CwyQGMcvNQp'),
  foto('CvDoM7-PArO_01', 693, 693, 'Alumna y profesora en la fiesta de la Barbie', 'La Gala', '2023-07-23', 'CvDoM7-PArO'),
  foto('CuSQ4swgx_e_01', 830, 830, 'El grupo con sus premios, en blanco y negro', 'La Gala', '2023-07-04', 'CuSQ4swgx_e'),
  foto('CsWBxxcA67j_01', 867, 760, 'El grupo con su profesora en el gimnasio', 'El equipo', '2023-05-17', 'CsWBxxcA67j'),
  foto('CrLUKCXgh_7_01', 720, 405, 'Ejercicios de suelo en blanco y negro', 'En clase', '2023-04-18', 'CrLUKCXgh_7'),
  foto('CrLUKCXgh_7_02', 720, 405, 'Elongación en parejas, en blanco y negro', 'En clase', '2023-04-18', 'CrLUKCXgh_7'),
  foto('CrLUKCXgh_7_03', 720, 405, 'Alumnas estirando, en blanco y negro', 'En clase', '2023-04-18', 'CrLUKCXgh_7'),
  foto('CrLUKCXgh_7_05', 720, 405, 'Ensayo de coreografía, en blanco y negro', 'En clase', '2023-04-18', 'CrLUKCXgh_7'),
  foto('CrLUw8pg9kV_01', 553, 553, 'Elongación en la barra, en blanco y negro', 'En clase', '2023-04-18', 'CrLUw8pg9kV'),
  foto('Cq59im-uApE_01', 480, 600, 'Alumna de perfil, en blanco y negro', 'Retratos', '2023-04-11', 'Cq59im-uApE'),
  foto('Cq59im-uApE_02', 480, 600, 'Clase en blanco y negro', 'En clase', '2023-04-11', 'Cq59im-uApE'),
  foto('CqWO2ysP_NO_01', 768, 576, 'Elongación en las colchonetas', 'En clase', '2023-03-28', 'CqWO2ysP_NO'),
  foto('CqWO2ysP_NO_02', 768, 576, 'Ejercicio de piernas en las colchonetas', 'En clase', '2023-03-28', 'CqWO2ysP_NO'),
  foto('CqWO2ysP_NO_03', 768, 576, 'Toda la clase elongando', 'En clase', '2023-03-28', 'CqWO2ysP_NO'),
  foto('CqWUDCLPVvj_01', 789, 608, 'Dos alumnas frente a la cortina de lentejuelas', 'Retratos', '2023-03-28', 'CqWUDCLPVvj'),
  foto('CqWUDCLPVvj_02', 794, 616, 'Alumna con polera lila frente a la cortina de lentejuelas', 'Retratos', '2023-03-28', 'CqWUDCLPVvj'),
  foto('CqWUDCLPVvj_03', 794, 616, 'Alumna con polera negra frente a la cortina de lentejuelas', 'Retratos', '2023-03-28', 'CqWUDCLPVvj'),
  foto('CqWUDCLPVvj_04', 794, 616, 'Alumna sonriendo frente a la cortina de lentejuelas', 'Retratos', '2023-03-28', 'CqWUDCLPVvj'),
  foto('CqWUDCLPVvj_05', 794, 616, 'Alumna con polera rosada frente a la cortina de lentejuelas', 'Retratos', '2023-03-28', 'CqWUDCLPVvj'),
  foto('CqWUDCLPVvj_06', 794, 616, 'Alumna con polera de Spirit Dance', 'Retratos', '2023-03-28', 'CqWUDCLPVvj'),
  foto('CqWUDCLPVvj_07', 794, 616, 'Alumna con cintillo rojo', 'Retratos', '2023-03-28', 'CqWUDCLPVvj'),
  foto('CqWUDCLPVvj_08', 794, 616, 'Alumna con lentes frente a la cortina de lentejuelas', 'Retratos', '2023-03-28', 'CqWUDCLPVvj'),
  foto('CqWV1EKvQ-n_01', 1200, 900, 'Clase en las colchonetas rosadas', 'En clase', '2023-03-28', 'CqWV1EKvQ-n'),
  foto('CqWV1EKvQ-n_02', 1200, 900, 'La profesora corrigiendo una postura', 'En clase', '2023-03-28', 'CqWV1EKvQ-n'),
  foto('CqWV1EKvQ-n_03', 1200, 900, 'Ejercicios de suelo en las colchonetas', 'En clase', '2023-03-28', 'CqWV1EKvQ-n'),
  foto('CqEQD37vhYU_01', 925, 925, 'Team La Florida y sus profesoras con flores', 'El equipo', '2023-03-21', 'CqEQD37vhYU'),
  foto('CmfHqLTv2Gz_01', 1120, 1400, 'La medalla de Spirit Dance', 'La Gala', '2022-12-22', 'CmfHqLTv2Gz'),
  foto('CkUKwULvWQy_01', 1080, 1080, 'Team La Florida sentado en el escenario', 'El equipo', '2022-10-29', 'CkUKwULvWQy'),
  foto('CjwUvuWDOSW_01', 768, 768, 'El Grupo mini ensayando', 'En clase', '2022-10-16', 'CjwUvuWDOSW'),
  foto('CiDvKAnBSZk_01', 864, 864, 'Elongación sobre las colchonetas', 'En clase', '2022-09-03', 'CiDvKAnBSZk'),
  foto('CeG8ARsO00t_01', 768, 768, 'El Team sentado en ronda en la cancha azul', 'El equipo', '2022-05-28', 'CeG8ARsO00t'),
  foto('CeG9lgmOybp_01', 1400, 1050, 'El Team posando en la cancha azul', 'El equipo', '2022-05-28', 'CeG9lgmOybp'),
  foto('CdD4JzwuC_2_01', 810, 810, 'Clase con luces de colores', 'En clase', '2022-05-02', 'CdD4JzwuC_2'),
  foto('Ccya7v9v4jN_01', 1080, 1080, 'Spagat en el salón de madera', 'En clase', '2022-04-25', 'Ccya7v9v4jN'),
  foto('CbyYK4BA_hC_01', 1080, 1080, 'Acrobacia sobre la colchoneta', 'En clase', '2022-03-31', 'CbyYK4BA_hC'),
  foto('CbnKDQ3A_fJ_01', 1169, 842, 'Ensayo en el salón', 'En clase', '2022-03-27', 'CbnKDQ3A_fJ'),
  foto('CYmnWpdPawX_01', 1080, 810, 'Clase en el gimnasio de piso de madera', 'En clase', '2022-01-11', 'CYmnWpdPawX'),
  foto('CYmnhW0vmek_01', 1080, 810, 'El grupo con sus poleras rosadas en el gimnasio', 'El equipo', '2022-01-11', 'CYmnhW0vmek'),
  foto('CXTogUKM2CC_01', 1120, 1400, 'Calentamiento en la cancha techada', 'Al aire libre', '2021-12-10', 'CXTogUKM2CC'),
  foto('CWb-m-_g4NY_01', 1400, 1050, 'Elongación en la cancha de pasto', 'Al aire libre', '2021-11-19', 'CWb-m-_g4NY'),
  foto('CIau0P7h_Yt_01', 1280, 960, 'El grupo en el parque, cada una con su diploma', 'Al aire libre', '2020-12-05', 'CIau0P7h_Yt'),
];
