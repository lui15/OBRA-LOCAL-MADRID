import type { GrupoPaginas } from './ficha';
import { PaginaSeo } from './pagina-seo';
import { PAGINAS_GUIAS } from './paginas-guias';
import { PAGINAS_HUB } from './paginas-hub';
import { PAGINAS_INFO } from './paginas-info';
import { PAGINAS_SERVICIOS } from './paginas-servicios';
import { PAGINAS_TRABAJOS } from './paginas-trabajos';
import { PAGINAS_ZONAS } from './paginas-zonas';

/*
 * Todas las páginas con su contenido completo. Lo usan los scripts (sitemap, fichas y
 * comprobaciones). La web no lo importa entero: cada página carga solo su grupo.
 */

export type { PaginaSeo } from './pagina-seo';
export { ULTIMA_REVISION } from '../datos/revision';

export const PAGINAS_POR_GRUPO: Record<GrupoPaginas, PaginaSeo[]> = {
  hub: PAGINAS_HUB,
  servicios: PAGINAS_SERVICIOS,
  trabajos: PAGINAS_TRABAJOS,
  zonas: PAGINAS_ZONAS,
  info: PAGINAS_INFO,
  guias: PAGINAS_GUIAS,
};

export const TODAS_LAS_PAGINAS: PaginaSeo[] = Object.values(PAGINAS_POR_GRUPO).flat();
export const PAGINAS: PaginaSeo[] = TODAS_LAS_PAGINAS.filter((p) => !p.borrador);
