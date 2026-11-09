import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Enlace destacado a la calculadora, en la portada, /precios/ y los servicios. */
@Component({
  selector: 'app-bloque-calculadora',
  standalone: true,
  imports: [RouterLink],
  template: `
    <aside class="bloque" aria-label="Calculadora de reforma">
      <div class="container bloque-dentro">
        <div>
          <span class="eyebrow">CALCULADORA</span>
          <p class="titulo">¿Cuánto costaría tu reforma?</p>
          <p class="texto">
            Indica los metros, las estancias y la calidad, y te damos un rango orientativo con
            nuestros precios de referencia.
          </p>
        </div>
        <a class="button button-ink" routerLink="/calculadora-reforma">Calcular mi reforma <span>→</span></a>
      </div>
    </aside>
  `,
  styles: `
    .bloque {
      padding: 32px 0;
      background: var(--surface);
    }
    .bloque-dentro {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 26px 28px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: #fff;
    }
    .eyebrow {
      color: #b84800;
    }
    .titulo {
      margin: 8px 0 6px;
      color: var(--navy-dark);
      font-family: 'Montserrat', 'Montserrat Fallback', sans-serif;
      font-size: clamp(20px, 2.2vw, 26px);
      font-weight: 800;
    }
    .texto {
      max-width: 60ch;
      margin: 0;
      color: #4b5c70;
      font-size: 14px;
      line-height: 1.6;
    }
    a {
      flex: none;
    }
    @media (max-width: 720px) {
      .bloque-dentro {
        align-items: stretch;
        flex-direction: column;
        padding: 20px 18px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BloqueCalculadora {}
