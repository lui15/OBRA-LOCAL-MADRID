import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FilaPrecio, NOTA_PRECIOS, textoFila } from '../datos/precios';
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
  readonly precios = input.required<readonly FilaPrecio[]>();
  /** Fuera de la tarjeta de la portada, la página pone su propio título con el nivel correcto. */
  readonly conCabecera = input(true);
  readonly texto = textoFila;
  readonly nota = NOTA_PRECIOS;
}
