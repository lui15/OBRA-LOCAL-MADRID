import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export interface PeticionPresupuesto {
  /** Nombre del servicio preseleccionado, tal como aparece en el catálogo. */
  servicio: string;
  /** Dónde se pulsó el botón. */
  ubicacion: string;
  /** Elemento que recupera el foco al cerrar. */
  origen: HTMLElement | null;
  /** Datos que llegan ya rellenos, por ejemplo desde la calculadora. */
  datos?: { metros?: string; descripcion?: string };
}

/** Abre el formulario de presupuesto desde cualquier página o componente. */
@Injectable({ providedIn: 'root' })
export class PresupuestoService {
  private readonly doc = inject(DOCUMENT);

  readonly abierto = signal(false);
  /** Última petición; cada apertura crea un objeto nuevo y el formulario reacciona a él. */
  readonly peticion = signal<PeticionPresupuesto | null>(null);

  abrir(servicio = '', ubicacion = 'pagina', datos?: PeticionPresupuesto['datos']): void {
    const activo = this.doc.activeElement;
    this.peticion.set({
      servicio,
      ubicacion,
      origen: activo instanceof HTMLElement ? activo : null,
      datos,
    });
    this.abierto.set(true);
  }

  cerrar(): void {
    this.abierto.set(false);
  }
}
