import type { ModuloPagina, TipoPagina } from './pagina-seo';

/** Archivo de datos donde vive el contenido completo de la página. */
export type GrupoPaginas = 'hub' | 'servicios' | 'trabajos' | 'zonas' | 'info' | 'guias';

/**
 * Lo mínimo de cada página para menús, tarjetas, migas y rutas. Se genera a partir de los datos
 * completos (scripts/generar-sitemap.mjs), así que nunca se desincroniza. El contenido completo
 * se descarga solo en la página que lo necesita.
 */
export interface FichaPagina {
  path: string;
  tipo: TipoPagina;
  grupo: GrupoPaginas;
  padre?: string;
  borrador?: string;
  title: string;
  etiqueta: string;
  resumen: string;
  zona?: string;
  imagen: string;
  imagenAlt: string;
  servicioCatalogo?: string;
  preciosSoloReferencia?: boolean;
  modulo?: ModuloPagina;
  relacionadas: string[];
}
