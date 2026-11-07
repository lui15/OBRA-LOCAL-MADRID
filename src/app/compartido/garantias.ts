import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from './animaciones';

/** Franja de confianza: lo que ofrece el servicio, sin promesas que no se puedan comprobar. */
@Component({
  selector: 'app-garantias',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './garantias.html',
  styleUrl: './garantias.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Garantias {}
