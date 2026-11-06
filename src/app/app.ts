import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AnaliticaService } from './compartido/analitica.service';
import { AvisoCookies } from './compartido/aviso-cookies';
import { ConsentimientoService } from './compartido/consentimiento.service';
import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';
import { PresupuestoWizard } from './presupuesto/presupuesto-wizard';
import { PresupuestoService } from './presupuesto/presupuesto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeader, SiteFooter, PresupuestoWizard, AvisoCookies],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly presupuesto = inject(PresupuestoService);

  constructor() {
    const analitica = inject(AnaliticaService);
    const consentimiento = inject(ConsentimientoService);

    // Solo en el navegador y tras hidratar: nada de esto entra en el HTML prerenderizado.
    afterNextRender(() => {
      analitica.iniciar();
      consentimiento.iniciar();
    });
  }
}
