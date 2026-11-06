import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { Servicio } from '../datos/catalogo';
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
}
