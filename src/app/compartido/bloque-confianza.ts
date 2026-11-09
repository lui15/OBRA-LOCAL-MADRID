import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CONFIANZA } from '../datos/confianza';
import { esPendiente } from '../datos/revision';

/** Solo se pinta lo confirmado: mientras todo esté PENDIENTE, el bloque no aparece. */
@Component({
  selector: 'app-bloque-confianza',
  standalone: true,
  template: `
    @if (confirmados.length) {
      <section class="confianza" aria-labelledby="confianza-titulo">
        <div class="container">
          <h2 id="confianza-titulo">Una sola empresa para toda tu reforma</h2>
          <ul>
            @for (c of confirmados; track c.titulo) {
              <li>
                <h3>{{ c.titulo }}</h3>
                <p>{{ c.texto }}</p>
              </li>
            }
          </ul>
        </div>
      </section>
    }
  `,
  styles: `
    .confianza {
      padding: 48px 0;
      border-block: 1px solid var(--line);
      background: #fff;
    }
    h2 {
      margin: 0 0 20px;
      color: var(--navy-dark);
      font-family: 'Montserrat', sans-serif;
      font-size: clamp(22px, 2.4vw, 28px);
      font-weight: 800;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr));
      gap: 16px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      padding: 18px 20px;
      border: 1px solid var(--line);
      border-radius: 14px;
    }
    h3 {
      margin: 0 0 6px;
      color: var(--navy);
      font-size: 15px;
      font-weight: 800;
    }
    p {
      margin: 0;
      color: #4b5c70;
      font-size: 14px;
      line-height: 1.6;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BloqueConfianza {
  readonly confirmados = CONFIANZA.filter((c) => !esPendiente(c.texto));
}
