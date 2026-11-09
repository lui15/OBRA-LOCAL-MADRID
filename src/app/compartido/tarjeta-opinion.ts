import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { Opinion } from '../datos/opiniones';

/** Una opinión: estrellas, texto entre comillas, nombre con la inicial y tipo de obra. */
@Component({
  selector: 'app-tarjeta-opinion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let o = opinion();
    <figure class="op">
      <div class="op-estrellas" role="img" [attr.aria-label]="o.estrellas + ' de 5 estrellas'">
        @for (llena of estrellas(); track $index) {
          <svg viewBox="0 0 20 20" aria-hidden="true" [class.vacia]="!llena">
            <path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8L10 1.8Z" />
          </svg>
        }
      </div>
      <blockquote>
        <p>«{{ o.texto }}»</p>
      </blockquote>
      <figcaption>
        <strong>{{ o.nombre }}</strong>
        <span>{{ o.servicio }}@if (o.fecha) { · {{ o.fecha }} }</span>
      </figcaption>
    </figure>
  `,
  styles: `
    :host {
      display: block;
      height: 100%;
    }
    .op {
      display: flex;
      flex-direction: column;
      gap: 14px;
      height: 100%;
      margin: 0;
      padding: 22px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: white;
      box-shadow: 0 10px 30px rgba(9, 39, 70, 0.06);
    }
    .op-estrellas {
      display: flex;
      gap: 3px;
    }
    svg {
      width: 18px;
      height: 18px;
      fill: #e8a317;
    }
    svg.vacia {
      fill: #dfe5ec;
    }
    blockquote {
      flex: 1;
      margin: 0;
    }
    p {
      margin: 0;
      color: var(--text);
      font-size: 16px;
      line-height: 1.6;
    }
    figcaption {
      display: grid;
      gap: 2px;
      padding-top: 12px;
      border-top: 1px solid var(--line);
      font-size: 14px;
    }
    strong {
      color: var(--navy-dark);
      font-size: 15px;
    }
    span {
      color: #4f5f71;
    }
  `,
})
export class TarjetaOpinion {
  readonly opinion = input.required<Opinion>();
  readonly estrellas = computed(() => [1, 2, 3, 4, 5].map((n) => n <= this.opinion().estrellas));
}
