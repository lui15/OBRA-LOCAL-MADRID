import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SERVICIOS } from '../datos/catalogo';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { NavegacionService } from './navegacion.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  readonly navegacion = inject(NavegacionService);
  readonly presupuesto = inject(PresupuestoService);
  readonly servicios = SERVICIOS;

  pedir(evento: Event): void {
    evento.preventDefault();
    this.presupuesto.abrir('', 'pie');
  }
}
