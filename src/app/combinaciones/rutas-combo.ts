import { CanMatchFn, ResolveFn, Route } from '@angular/router';

import type { PaginaCombo } from './tipos';

/** Solo entra si la combinación existe; si no, sigue hasta la ruta '**' (404). El índice se carga aparte. */
const existe: CanMatchFn = (_ruta, segmentos) =>
  import('./indice.generado').then((m) => m.existeCombo(segmentos[0]?.path ?? '', segmentos[1]?.path ?? ''));

/** Carga solo el archivo de contenido de esa zona. */
const resolver: ResolveFn<PaginaCombo | undefined> = async (ruta) => {
  const { CARGADORES } = await import('./indice.generado');
  const zona = ruta.paramMap.get('zona') ?? '';
  const servicio = ruta.paramMap.get('servicio') ?? '';
  const paginas = (await CARGADORES[zona]?.()) ?? [];
  return paginas.find((p) => p.servicio === servicio);
};

export const RUTA_COMBO: Route = {
  path: ':servicio/:zona',
  canMatch: [existe],
  loadComponent: () => import('./combo-page').then((m) => m.ComboPage),
  resolve: { pagina: resolver },
};
