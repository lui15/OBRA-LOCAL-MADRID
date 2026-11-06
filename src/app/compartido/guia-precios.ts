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
  readonly formato = formatearPrecio;
}
