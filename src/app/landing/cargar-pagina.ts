import type { ResolveFn } from '@angular/router';

import type { GrupoPaginas } from './ficha';
import type { PaginaSeo } from './pagina-seo';

/** Cada grupo es un archivo aparte: una página solo descarga el contenido de su grupo. */
const GRUPOS: Record<GrupoPaginas, () => Promise<PaginaSeo[]>> = {
  hub: () => import('./paginas-hub').then((m) => m.PAGINAS_HUB),
  servicios: () => import('./paginas-servicios').then((m) => m.PAGINAS_SERVICIOS),
  trabajos: () => import('./paginas-trabajos').then((m) => m.PAGINAS_TRABAJOS),
  zonas: () => import('./paginas-zonas').then((m) => m.PAGINAS_ZONAS),
  info: () => import('./paginas-info').then((m) => m.PAGINAS_INFO),
  guias: () => import('./paginas-guias').then((m) => m.PAGINAS_GUIAS),
};

export function resolverPagina(path: string, grupo: GrupoPaginas): ResolveFn<PaginaSeo> {
  return async () => {
    const pagina = (await GRUPOS[grupo]()).find((p) => p.path === path);
    if (!pagina) throw new Error(`Página no encontrada: ${path}`);
    return pagina;
  };
}
