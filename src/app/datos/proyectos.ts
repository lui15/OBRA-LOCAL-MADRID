/**
 * Obras realizadas. Solo las que tengan publicado: true se prerenderizan, van al sitemap y
 * aparecen en /proyectos/ y en la página de su zona. Las de ejemplo están sin publicar.
 */
export interface Proyecto {
  slug: string;
  publicado: boolean;
  titulo: string;
  /** Path de la página de zona (por ejemplo 'reformas-chamberi') para «Obras en …». */
  zonaPath: string;
  barrio: string;
  m2: string;
  plazo: string;
  rangoPrecio: string;
  /** Path del servicio relacionado. */
  servicioPath: string;
  trabajos: string[];
  descripcion: string;
  fotos: { antes: string; despues: string; alt: string }[];
}

export const PROYECTOS: Proyecto[] = [
  {
    slug: 'ejemplo-reforma-integral',
    publicado: false,
    titulo: 'PENDIENTE("título de la obra")',
    zonaPath: 'reformas-chamberi',
    barrio: 'PENDIENTE("barrio")',
    m2: 'PENDIENTE("metros cuadrados")',
    plazo: 'PENDIENTE("duración real de la obra")',
    rangoPrecio: 'PENDIENTE("rango de precio real")',
    servicioPath: 'reformas-integrales-madrid',
    trabajos: ['PENDIENTE("trabajos realizados")'],
    descripcion: 'PENDIENTE("descripción de la obra: punto de partida, qué se hizo y resultado")',
    fotos: [
      {
        antes: '/images/piso-en-obra.webp',
        despues: '/images/piso-reformado.webp',
        alt: 'PENDIENTE("fotos reales de antes y después")',
      },
    ],
  },
  {
    slug: 'ejemplo-reforma-bano',
    publicado: false,
    titulo: 'PENDIENTE("título de la obra")',
    zonaPath: 'reformas-retiro',
    barrio: 'PENDIENTE("barrio")',
    m2: 'PENDIENTE("metros cuadrados")',
    plazo: 'PENDIENTE("duración real de la obra")',
    rangoPrecio: 'PENDIENTE("rango de precio real")',
    servicioPath: 'reforma-banos-madrid',
    trabajos: ['PENDIENTE("trabajos realizados")'],
    descripcion: 'PENDIENTE("descripción de la obra")',
    fotos: [
      {
        antes: '/images/reforma-bano-ejemplo.webp',
        despues: '/images/bano-moderno.webp',
        alt: 'PENDIENTE("fotos reales de antes y después")',
      },
    ],
  },
  {
    slug: 'ejemplo-quitar-gotele',
    publicado: false,
    titulo: 'PENDIENTE("título de la obra")',
    zonaPath: 'reformas-carabanchel',
    barrio: 'PENDIENTE("barrio")',
    m2: 'PENDIENTE("metros cuadrados")',
    plazo: 'PENDIENTE("duración real de la obra")',
    rangoPrecio: 'PENDIENTE("rango de precio real")',
    servicioPath: 'quitar-gotele-madrid',
    trabajos: ['PENDIENTE("trabajos realizados")'],
    descripcion: 'PENDIENTE("descripción de la obra")',
    fotos: [
      {
        antes: '/images/paredes-ejemplo.webp',
        despues: '/images/sala-vacia.webp',
        alt: 'PENDIENTE("fotos reales de antes y después")',
      },
    ],
  },
];

export const PROYECTOS_PUBLICADOS = PROYECTOS.filter((p) => p.publicado);

export function proyectosDeZona(zonaPath: string): Proyecto[] {
  return PROYECTOS_PUBLICADOS.filter((p) => p.zonaPath === zonaPath);
}
