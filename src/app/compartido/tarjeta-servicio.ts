import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { Servicio } from '../datos/catalogo-servicios';
import { altoDe, anchoDe, srcsetDe } from '../datos/imagenes';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';
import { GuiaPrecios } from './guia-precios';

@Component({
  selector: 'app-tarjeta-servicio',
  standalone: true,
  imports: [RevealDirective, GuiaPrecios],
  templateUrl: './tarjeta-servicio.html',
  styleUrl: './tarjeta-servicio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarjetaServicio {
  readonly servicio = input.required<Servicio>();
  readonly presupuesto = inject(PresupuestoService);
  readonly ancho = anchoDe;
  readonly alto = altoDe;
  readonly srcset = srcsetDe;
}
