import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';
import { PresupuestoWizard } from './presupuesto/presupuesto-wizard';
import { PresupuestoService } from './presupuesto/presupuesto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeader, SiteFooter, PresupuestoWizard],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly presupuesto = inject(PresupuestoService);
}
