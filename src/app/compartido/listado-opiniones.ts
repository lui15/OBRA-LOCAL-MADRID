import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { NOTA_OPINIONES, OPINIONES, TIPOS_OPINION, TipoOpinion, resumenOpiniones } from '../datos/opiniones';
import { TarjetaOpinion } from './tarjeta-opinion';

/** /opiniones/: todas las opiniones con filtro por tipo de obra. El HTML del servidor las trae todas. */
@Component({
  selector: 'app-listado-opiniones',
  standalone: true,
  imports: [TarjetaOpinion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section lp-banda" id="opiniones" aria-labelledby="listado-titulo">
      <div class="container">
        <h2 id="listado-titulo" class="lo-titulo">Todas las opiniones</h2>
        <p class="lo-resumen"><span aria-hidden="true">★★★★★</span> {{ resumen.texto }}</p>

        <div class="lo-filtro" role="group" aria-label="Filtrar por tipo de obra">
          @for (t of filtros; track t) {
            <button type="button" [attr.aria-pressed]="filtro() === t" (click)="filtro.set(t)">
              {{ t }} <span>({{ cuenta(t) }})</span>
            </button>
          }
        </div>

        <p class="lo-visibles" aria-live="polite">{{ visibles().length }} {{ visibles().length === 1 ? 'opinión' : 'opiniones' }}</p>
        <ul class="lo-lista">
          @for (o of visibles(); track o.nombre) {
            <li><app-tarjeta-opinion [opinion]="o" /></li>
          }
        </ul>
        <p class="lo-nota">{{ nota }}</p>
      </div>
    </section>
  `,
  styles: `
    .lo-titulo {
      margin: 0 0 8px;
      color: var(--navy-dark);
      font-family: 'Montserrat', 'Montserrat Fallback', sans-serif;
      font-size: clamp(26px, 3vw, 34px);
      font-weight: 800;
    }
    .lo-resumen {
      margin: 0 0 20px;
      color: #4f5f71;
      font-size: 16px;
    }
    .lo-resumen span {
      color: #b07200;
      letter-spacing: 1px;
    }
    .lo-filtro {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .lo-filtro button {
      min-height: 44px;
      padding: 8px 16px;
      border: 1.5px solid #d5dee8;
      border-radius: 999px;
      color: var(--navy-dark);
      background: white;
      font: inherit;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }
    .lo-filtro button span {
      color: #4f5f71;
      font-weight: 500;
    }
    .lo-filtro button[aria-pressed='true'] {
      border-color: #b84800;
      color: white;
      background: #b84800;
    }
    .lo-filtro button[aria-pressed='true'] span {
      color: white;
    }
    .lo-visibles {
      margin: 16px 0 12px;
      color: #4f5f71;
      font-size: 14px;
    }
    .lo-lista {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
      gap: 16px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .lo-nota {
      margin: 20px 0 0;
      color: #4f5f71;
      font-size: 14px;
    }
  `,
})
export class ListadoOpiniones {
  readonly filtros: ('Todas' | TipoOpinion)[] = ['Todas', ...TIPOS_OPINION];
  readonly filtro = signal<'Todas' | TipoOpinion>('Todas');
  readonly visibles = computed(() =>
    this.filtro() === 'Todas' ? OPINIONES : OPINIONES.filter((o) => o.tipo === this.filtro()),
  );
  readonly resumen = resumenOpiniones();
  readonly nota = NOTA_OPINIONES;

  cuenta(t: 'Todas' | TipoOpinion): number {
    return t === 'Todas' ? OPINIONES.length : OPINIONES.filter((o) => o.tipo === t).length;
  }
}
