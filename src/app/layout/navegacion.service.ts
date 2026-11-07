import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

/** Desplazamiento suave a una sección de la página actual. */
@Injectable({ providedIn: 'root' })
export class NavegacionService {
  private readonly doc = inject(DOCUMENT);

  irA(id: string, evento?: Event): void {
    // Evita el salto brusco del enlace nativo para que funcione el scroll suave.
    evento?.preventDefault();

    const ventana = this.doc.defaultView;
    const destino = this.doc.getElementById(id);

    if (!ventana || !destino) {
      return;
    }

    const reducir = ventana.matchMedia('(prefers-reduced-motion: reduce)').matches;
    destino.scrollIntoView({ behavior: reducir ? 'auto' : 'smooth', block: 'start' });

    // Mantiene el hash en la URL sin provocar un salto.
    ventana.history.replaceState(null, '', `#${id}`);
  }
}
