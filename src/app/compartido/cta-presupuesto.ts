import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { PresupuestoService } from '../presupuesto/presupuesto.service';

@Component({
  selector: 'app-cta-presupuesto',
  standalone: true,
  templateUrl: './cta-presupuesto.html',
  styleUrl: './cta-presupuesto.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaPresupuesto {
  readonly etiqueta = input('MADRID Y ALREDEDORES');
  readonly titulo = input('Tu próxima reforma empieza aquí.');
  readonly texto = input('Cuéntanos tu idea y empieza a organizar el trabajo.');
  readonly servicio = input('');
  readonly presupuesto = inject(PresupuestoService);
}
