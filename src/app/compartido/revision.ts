import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { RESPONSABLE_OBRA } from '../datos/contacto';
import { ULTIMA_REVISION, mesYAnio } from '../datos/revision';

@Component({
  selector: 'app-revision',
  standalone: true,
  template: `
    <p class="revision">
      Revisado por {{ responsable }} · Actualizado:
      <time [attr.datetime]="fecha()">{{ mes() }}</time>
    </p>
  `,
  styles: `
    .revision {
      margin: 14px 0 0;
      color: #566679;
      font-size: 12.5px;
      line-height: 1.5;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Revision {
  readonly fecha = input(ULTIMA_REVISION);
  readonly responsable = RESPONSABLE_OBRA;
  mes(): string {
    return mesYAnio(this.fecha());
  }
}
