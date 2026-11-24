import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PERFIL_GOOGLE } from '../datos/contacto';

/** Botones a la ficha de Google: leer las reseñas y dejar una nueva. */
@Component({
  selector: 'app-botones-google',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-botones">
      <a class="button button-outline" [href]="perfil" target="_blank" rel="noopener">
        Ver opiniones en Google <span aria-hidden="true">↗</span>
      </a>
      <a class="button button-outline" [href]="perfil" target="_blank" rel="noopener">
        Escribir mi opinión <span aria-hidden="true">↗</span>
      </a>
    </div>
  `,
  styles: `
    .bg-botones {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 16px;
    }
    @media (max-width: 480px) {
      .bg-botones .button {
        flex: 1 1 100%;
      }
    }
  `,
})
export class BotonesGoogle {
  readonly perfil = PERFIL_GOOGLE;
}
