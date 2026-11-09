import { Route, Routes } from '@angular/router';

import { TODAS_LAS_PAGINAS } from './landing/landing-data';

const rutasLanding: Routes = TODAS_LAS_PAGINAS.map(
  (pagina): Route => ({
    path: pagina.path,
    pathMatch: 'full',
    loadComponent: () =>
      pagina.tipo === 'inicio'
        ? import('./inicio/inicio-page').then((m) => m.InicioPage)
        : import('./landing/landing-page').then((m) => m.LandingPage),
    data: { slug: pagina.path },
  }),
);

export const routes: Routes = [
  ...rutasLanding,
  {
    path: 'proyectos',
    pathMatch: 'full',
    loadComponent: () => import('./proyectos/proyectos-page').then((m) => m.ProyectosPage),
  },
  {
    path: 'proyectos/:slug',
    loadComponent: () => import('./proyectos/proyecto-page').then((m) => m.ProyectoPage),
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./legal/legal-page').then((m) => m.LegalPage),
    data: { tipo: 'aviso' },
  },
  {
    path: 'politica-privacidad',
    loadComponent: () => import('./legal/legal-page').then((m) => m.LegalPage),
    data: { tipo: 'privacidad' },
  },
  {
    path: 'politica-cookies',
    loadComponent: () => import('./legal/legal-page').then((m) => m.LegalPage),
    data: { tipo: 'cookies' },
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
