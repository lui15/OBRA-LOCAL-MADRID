import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

import { ContextoPagina } from '../layout/contexto-pagina.service';

export interface PeticionPresupuesto {
  /** Servicio de la página (catálogo) o tipo de obra: preselecciona el paso 1. */
  servicio: string;
  /** Dónde se pulsó el botón. */
  ubicacion: string;
  /** Elemento que recupera el foco al cerrar. */
  origen: HTMLElement | null;
  /** Zona de la página, si es una página de zona. */
  zona?: string;
  /** Datos que llegan ya rellenos, por ejemplo desde la calculadora. */
  datos?: { metros?: string; calidad?: string; descripcion?: string };
}

/** Progreso del formulario en sessionStorage. */
export const CLAVE_PROGRESO = 'obralocal-presupuesto';
const CLAVE_UTM = 'obralocal-utm';

/** UTM de la visita (se guardan al llegar, porque el visitante puede navegar antes de pedir presupuesto). */
export function leerUtm(): { utm_source?: string; utm_medium?: string; utm_campaign?: string } {
  try {
    return JSON.parse(sessionStorage.getItem(CLAVE_UTM) ?? '{}');
  } catch {
    return {};
  }
}

/** Abre el formulario de presupuesto desde cualquier página o componente. */
@Injectable({ providedIn: 'root' })
export class PresupuestoService {
  private readonly doc = inject(DOCUMENT);
  private readonly contexto = inject(ContextoPagina);

  readonly abierto = signal(false);
  /** Última petición; cada apertura crea un objeto nuevo y el formulario reacciona a él. */
  readonly peticion = signal<PeticionPresupuesto | null>(null);

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) this.guardarUtm();
  }

  abrir(servicio = '', ubicacion = 'pagina', datos?: PeticionPresupuesto['datos']): void {
    const activo = this.doc.activeElement;
    this.peticion.set({
      servicio,
      ubicacion,
      origen: activo instanceof HTMLElement ? activo : null,
      zona: this.contexto.zona() || undefined,
      datos,
    });
    this.abierto.set(true);
  }

  cerrar(): void {
    this.abierto.set(false);
  }

  /** Si se recargó la página con el formulario abierto, se vuelve a abrir donde estaba. */
  reanudar(): void {
    try {
      const guardado = JSON.parse(sessionStorage.getItem(CLAVE_PROGRESO) ?? 'null');
      if (guardado?.abierto && guardado?.datos?.obra) this.abrir('', 'recarga');
    } catch {
      /* sin almacenamiento: no hay nada que reanudar */
    }
  }

  private guardarUtm(): void {
    try {
      const p = new URLSearchParams(this.doc.defaultView?.location.search ?? '');
      const utm: Record<string, string> = {};
      for (const k of ['utm_source', 'utm_medium', 'utm_campaign']) {
        const v = p.get(k);
        if (v) utm[k] = v.slice(0, 100);
      }
      if (Object.keys(utm).length) sessionStorage.setItem(CLAVE_UTM, JSON.stringify(utm));
    } catch {
      /* sin almacenamiento: la solicitud se envía sin UTM */
    }
  }
}
