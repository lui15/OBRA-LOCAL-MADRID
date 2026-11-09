import { RenderMode, ServerRoute } from '@angular/ssr';

import { PROYECTOS_PUBLICADOS } from './datos/proyectos';
import { FICHAS } from './landing/fichas';

/** Las obras solo se prerenderizan cuando hay alguna publicada. Antes, solo se ven en local. */
const rutasProyectos: ServerRoute[] = PROYECTOS_PUBLICADOS.length
  ? [
      { path: 'proyectos', renderMode: RenderMode.Prerender },
      {
        path: 'proyectos/:slug',
        renderMode: RenderMode.Prerender,
        getPrerenderParams: async () => PROYECTOS_PUBLICADOS.map((p) => ({ slug: p.slug })),
      },
    ]
  : [
      { path: 'proyectos', renderMode: RenderMode.Server },
      { path: 'proyectos/:slug', renderMode: RenderMode.Server },
    ];

export const serverRoutes: ServerRoute[] = [
  // Publicadas: se prerenderizan. Borradores: se renderizan al vuelo en local, con noindex.
  ...FICHAS.map(
    (f): ServerRoute =>
      f.borrador
        ? { path: f.path, renderMode: RenderMode.Server }
        : { path: f.path, renderMode: RenderMode.Prerender },
  ),
  ...rutasProyectos,
  { path: 'aviso-legal', renderMode: RenderMode.Prerender },
  { path: 'politica-privacidad', renderMode: RenderMode.Prerender },
  { path: 'politica-cookies', renderMode: RenderMode.Prerender },
  // Un comodín no se puede prerenderizar: se renderiza al vuelo con un 404 real.
  { path: '**', renderMode: RenderMode.Server, status: 404 },
];
