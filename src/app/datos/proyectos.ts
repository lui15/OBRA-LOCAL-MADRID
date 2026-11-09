/**
 * Obras realizadas. Solo las que tengan publicado: true se prerenderizan, van al sitemap y
 * aparecen en /proyectos/ y en la página de su zona.
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

/*
 * Todavía no hay obras documentadas con fotos reales. Para activar /proyectos/, añade aquí cada
 * obra con publicado: true; se prerenderiza, entra en el sitemap y aparece en su página de zona.
 *
 * Ejemplo:
 * {
 *   slug: 'reforma-integral-chamberi',
 *   publicado: true,
 *   titulo: 'Reforma integral de un piso de 85 m² en Chamberí',
 *   zonaPath: 'reformas-chamberi',
 *   barrio: 'Trafalgar',
 *   m2: '85 m²',
 *   plazo: '10 semanas',
 *   rangoPrecio: '55.000–60.000 €',
 *   servicioPath: 'reformas-integrales-madrid',
 *   trabajos: ['Demolición', 'Instalaciones nuevas', 'Cocina', 'Baño', 'Pintura'],
 *   descripcion: 'Punto de partida, qué se hizo y resultado.',
 *   fotos: [{ antes: '/images/obras/chamberi-antes.webp', despues: '/images/obras/chamberi-despues.webp', alt: 'Salón antes y después' }],
 * },
 */
export const PROYECTOS: Proyecto[] = [];

export const PROYECTOS_PUBLICADOS = PROYECTOS.filter((p) => p.publicado);

export function proyectosDeZona(zonaPath: string): Proyecto[] {
  return PROYECTOS_PUBLICADOS.filter((p) => p.zonaPath === zonaPath);
}
