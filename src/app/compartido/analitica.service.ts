import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, untracked } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { ConsentimientoService } from './consentimiento.service';

type ParametrosEvento = Record<string, string | number>;

/**
 * Eventos de Google Analytics. No hace nada sin consentimiento y nunca debe recibir datos
 * personales (nombre, teléfono, correo o dirección).
 */
@Injectable({ providedIn: 'root' })
export class AnaliticaService {
  private readonly doc = inject(DOCUMENT);
  private readonly consentimiento = inject(ConsentimientoService);
  private readonly router = inject(Router);

  private iniciada = false;
  private ultimaPagina: string | null = null;

  constructor() {
    // Al aceptar se registra la página en la que está el visitante.
    effect(() => {
      if (this.consentimiento.analiticaActiva()) {
        untracked(() => this.enviarPaginaVista());
      } else {
        this.ultimaPagina = null;
      }
    });
  }

  /** Se llama solo en el navegador, tras hidratar. */
  iniciar(): void {
    if (this.iniciada) return;
    this.iniciada = true;

    this.router.events.subscribe((evento) => {
      if (evento instanceof NavigationEnd) this.enviarPaginaVista();
    });

    this.doc.addEventListener('click', (evento) => this.alPulsar(evento), { passive: true });
  }

  evento(nombre: string, parametros: ParametrosEvento = {}): void {
    if (!this.consentimiento.analiticaActiva()) return;

    (this.doc.defaultView as (Window & { gtag?: (...args: unknown[]) => void }) | null)?.gtag?.(
      'event',
      nombre,
      parametros,
    );
  }

  /** El título ya es el de la nueva ruta: SeoService lo actualiza al crear la página. */
  private enviarPaginaVista(): void {
    const ubicacion = this.doc.defaultView?.location;
    if (!ubicacion || !this.consentimiento.analiticaActiva()) return;

    const pagina = ubicacion.pathname + ubicacion.search;
    if (pagina === this.ultimaPagina) return;
    this.ultimaPagina = pagina;

    this.evento('page_view', {
      page_location: ubicacion.origin + pagina,
      page_title: this.doc.title,
    });
  }

  /** Enlaces de teléfono y WhatsApp, estén donde estén. Solo se envía la zona de la página. */
  private alPulsar(evento: Event): void {
    const objetivo = evento.target;
    if (!(objetivo instanceof Element)) return;

    const enlace = objetivo.closest('a[href]');
    const href = enlace?.getAttribute('href') ?? '';

    if (href.startsWith('tel:')) {
      this.evento('click_telefono', { ubicacion: this.ubicacionDe(enlace!) });
    } else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\b/.test(href)) {
      this.evento('click_whatsapp', { ubicacion: this.ubicacionDe(enlace!) });
    }
  }

  private ubicacionDe(elemento: Element): string {
    return elemento.closest('[data-ubicacion]')?.getAttribute('data-ubicacion') ?? 'contenido';
  }
}
