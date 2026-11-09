import { Route, Routes } from '@angular/router';

import { resolverPagina } from './landing/cargar-pagina';
import { FICHAS } from './landing/fichas';

const rutasLanding: Routes = FICHAS.map(
  (ficha): Route => ({
    path: ficha.path,
    pathMatch: 'full',
    loadComponent: () =>
      ficha.tipo === 'inicio'
        ? import('./inicio/inicio-page').then((m) => m.InicioPage)
        : import('./landing/landing-page').then((m) => m.LandingPage),
    resolve: { pagina: resolverPagina(ficha.path, ficha.grupo) },
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
