import { Injectable, computed, inject, signal } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { MENSAJE_GENERAL, enlaceWhatsApp } from '../datos/contacto';

/** Servicio y mensaje de WhatsApp de la página actual, para la barra móvil y el botón flotante. */
@Injectable({ providedIn: 'root' })
export class ContextoPagina {
  readonly servicio = signal('');
  readonly mensaje = signal(MENSAJE_GENERAL);
  /** Zona de la página (solo en páginas de zona): el formulario la trae ya rellena. */
  readonly zona = signal('');
  readonly whatsapp = computed(() => enlaceWhatsApp(this.mensaje()));

  constructor() {
    // Las páginas que no fijan contexto (legales, 404) vuelven al general.
    inject(Router).events.subscribe((evento) => {
      if (evento instanceof NavigationStart) this.fijar('', MENSAJE_GENERAL);
    });
  }

  fijar(servicio: string, mensaje: string, zona = ''): void {
    this.servicio.set(servicio);
    this.mensaje.set(mensaje);
    this.zona.set(zona);
  }
}
