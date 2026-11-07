import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { ENLACE_TELEFONO, NEGOCIO } from '../datos/contacto';
import { ContextoPagina } from '../layout/contexto-pagina.service';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { Icono } from './icono';

@Component({
  selector: 'app-cta-presupuesto',
  standalone: true,
  imports: [Icono],
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
  readonly contexto = inject(ContextoPagina);
  readonly telefono = ENLACE_TELEFONO;
  readonly telefonoVisible = NEGOCIO.telefonoVisible;
}
