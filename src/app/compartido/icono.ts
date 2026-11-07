import { ChangeDetectionStrategy, Component, input } from '@angular/core';

const TRAZOS = {
  telefono:
    'M6.6 3.5 9 3l2 4.6-1.9 1.5a11 11 0 0 0 5.8 5.8l1.5-1.9L21 15l-.5 2.4a2.6 2.6 0 0 1-2.8 2.1C10 19 5 14 4.5 6.3a2.6 2.6 0 0 1 2.1-2.8Z',
  whatsapp: 'M4 20l1.3-4.2A8 8 0 1 1 8.4 19L4 20Z M9 9.5c.2 2.6 2.6 5 5.5 5.5l1-1.6-2-1-1 .8a4 4 0 0 1-1.7-1.7l.8-1-1-2L9 9.5Z',
  flecha: 'M7 17 17 7M8 7h9v9',
  solicitud: 'M7 3h7l4 4v14H7V3Zm7 0v4h4M10 12h5M10 16h5',
  medicion: 'M3 16 16 3l5 5L8 21l-5-5Zm4-4 2 2m1-5 2 2m1-5 2 2',
  presupuesto: 'M6 3h12v18l-3-2-3 2-3-2-3 2V3Zm3 5h6m-6 4h6m-6 4h3',
  calendario: 'M4 6h16v15H4V6Zm0 5h16M8 3v5m8-5v5',
  obra: 'M4 17a8 8 0 0 1 16 0M2 17h20v3H2v-3Zm8-9V4h4v4',
  revision: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-4-9 3 3 5-6',
} as const;

export type NombreIcono = keyof typeof TRAZOS;

/** Iconos de trazo. El tamaño se ajusta con --icono; siempre decorativos. */
@Component({
  selector: 'app-icono',
  standalone: true,
  template: `<svg viewBox="0 0 24 24" aria-hidden="true"><path [attr.d]="trazo()" /></svg>`,
  styles: `
    :host {
      display: inline-flex;
      flex: none;
      line-height: 0;
    }
    svg {
      width: var(--icono, 18px);
      height: var(--icono, 18px);
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icono {
  readonly nombre = input.required<NombreIcono>();
  trazo(): string {
    return TRAZOS[this.nombre()];
  }
}
