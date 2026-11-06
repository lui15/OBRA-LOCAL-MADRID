import { PlatformLocation } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

/** Indica si se está en la portada. Es correcto desde el primer render, también en el servidor. */
@Injectable({ providedIn: 'root' })
export class EstadoRuta {
  private readonly ubicacion = inject(PlatformLocation);

  readonly esPortada = signal(this.ubicacion.pathname === '/');

  constructor() {
    inject(Router).events.subscribe((evento) => {
      if (evento instanceof NavigationEnd) {
        this.esPortada.set(evento.urlAfterRedirects.split(/[?#]/)[0] === '/');
      }
    });
  }
}
