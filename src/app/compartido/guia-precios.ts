import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Precio, formatearPrecio } from '../datos/catalogo';
import { RevealDirective } from './animaciones';

/** Rangos orientativos de un servicio. */
@Component({
  selector: 'app-guia-precios',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './guia-precios.html',
  styleUrl: './guia-precios.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuiaPrecios {
  readonly precios = input.required<readonly Precio[]>();
  /** Fuera de la tarjeta de la portada, la página pone su propio título con el nivel correcto. */
  readonly conCabecera = input(true);
  readonly formato = formatearPrecio;
}
