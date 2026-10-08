// En GitHub Pages el sitio vive bajo /spirit-dance; las rutas a archivos de public/ necesitan ese prefijo.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const ruta = (archivo: string) => `${BASE}${archivo}`;
