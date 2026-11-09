import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NOTA_OPINIONES, Opinion, resumenOpiniones } from '../datos/opiniones';
import { TarjetaOpinion } from './tarjeta-opinion';

/**
 * Opiniones de una página, con el resumen calculado y la nota legal.
 * En la portada pasan solas como una cinta continua (solo CSS, sin JavaScript): la lista va
 * dos veces seguidas y se desplaza la mitad, así el bucle no tiene saltos. Se detiene mientras
 * se deja el dedo o el ratón encima, para poder leer, y no se mueve con movimiento reducido.
 */
@Component({
  selector: 'app-bloque-opiniones',
  standalone: true,
  imports: [RouterLink, TarjetaOpinion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (opiniones().length) {
      <section class="section bo" [class.bo-cinta]="carrusel()" aria-labelledby="opiniones-titulo">
        <div class="container">
          <div class="bo-cabecera">
            <span class="eyebrow">OPINIONES DE CLIENTES</span>
            <h2 id="opiniones-titulo">{{ titulo() }}</h2>
            <p class="bo-resumen">
              <span class="bo-media" aria-hidden="true">★★★★★</span>
              {{ resumen.texto }}
            </p>
          </div>

          @if (carrusel()) {
            <div class="bo-ventana">
              <div class="bo-pista" [style.--duracion]="duracion()">
                <ul class="bo-fila">
                  @for (o of opiniones(); track o.nombre) {
                    <li><app-tarjeta-opinion [opinion]="o" /></li>
                  }
                </ul>
                <!-- Copia para que la cinta no tenga saltos: los lectores de pantalla no la leen. -->
                <ul class="bo-fila" aria-hidden="true" inert>
                  @for (o of opiniones(); track o.nombre) {
                    <li><app-tarjeta-opinion [opinion]="o" /></li>
                  }
                </ul>
              </div>
            </div>
          } @else {
            <ul class="bo-lista">
              @for (o of opiniones(); track o.nombre) {
                <li><app-tarjeta-opinion [opinion]="o" /></li>
              }
            </ul>
          }

          <p class="bo-nota">{{ nota }}</p>
          @if (enlaceTodas()) {
            <a class="bo-todas" routerLink="/opiniones/">Ver todas las opiniones <span aria-hidden="true">→</span></a>
          }
        </div>
      </section>
    }
  `,
  styles: `
    .bo-cabecera {
      margin-bottom: 26px;
    }
    h2 {
      margin: 12px 0 8px;
      color: var(--navy-dark);
      font-family: 'Montserrat', 'Montserrat Fallback', sans-serif;
      font-size: clamp(26px, 3vw, 36px);
      font-weight: 800;
      letter-spacing: -1px;
      line-height: 1.2;
    }
    .bo-resumen {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin: 0;
      color: #4f5f71;
      font-size: 15px;
    }
    .bo-media {
      padding: 3px 10px;
      border-radius: 999px;
      color: #b07200;
      background: #fdf3dc;
      font-weight: 800;
      letter-spacing: 1px;
    }

    /* Rejilla normal (páginas de servicio) */
    .bo-lista {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
      gap: 16px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    /* Cinta continua (portada) */
    .bo-ventana {
      overflow: hidden;
      padding: 4px 0 14px;
      /* Bordes difuminados, como un rótulo que pasa */
      mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
    }
    .bo-pista {
      display: flex;
      width: max-content;
      animation: cinta var(--duracion, 60s) linear infinite;
    }
    .bo-ventana:hover .bo-pista,
    .bo-ventana:active .bo-pista {
      animation-play-state: paused;
    }
    .bo-fila {
      display: flex;
      gap: 16px;
      margin: 0;
      /* El mismo hueco al final que entre tarjetas: así las dos copias encajan sin salto. */
      padding: 0 16px 0 0;
      list-style: none;
    }
    .bo-fila > li {
      flex: none;
      width: min(80vw, 340px);
    }
    @keyframes cinta {
      to {
        transform: translateX(-50%);
      }
    }
    /* Con movimiento reducido, la cinta se queda quieta y se puede deslizar con el dedo. */
    @media (prefers-reduced-motion: reduce) {
      .bo-ventana {
        overflow-x: auto;
        mask-image: none;
      }
      .bo-pista {
        animation: none;
      }
      .bo-fila[aria-hidden='true'] {
        display: none;
      }
    }

    .bo-nota {
      margin: 18px 0 0;
      color: #4f5f71;
      font-size: 14px;
    }
    .bo-todas {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 44px;
      margin-top: 6px;
      color: #b84800;
      font-weight: 700;
    }
  `,
})
export class BloqueOpiniones {
  readonly opiniones = input.required<Opinion[]>();
  readonly titulo = input('Lo que dicen nuestros clientes');
  readonly carrusel = input(false);
  readonly enlaceTodas = input(true);
  /** Segundos que tarda cada opinión en pasar. */
  readonly segundosPorOpinion = input(6);

  readonly nota = NOTA_OPINIONES;
  /** El resumen es siempre el de todas las opiniones, no solo las de la página. */
  readonly resumen = resumenOpiniones();
  readonly duracion = computed(() => `${this.opiniones().length * this.segundosPorOpinion()}s`);
}
