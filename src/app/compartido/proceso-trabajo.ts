import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';

@Component({
  selector: 'app-proceso-trabajo',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './proceso-trabajo.html',
  styleUrl: './proceso-trabajo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcesoTrabajo {
  readonly servicio = input('');
  readonly presupuesto = inject(PresupuestoService);
}
