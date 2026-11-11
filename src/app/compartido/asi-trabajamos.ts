import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ASI_TRABAJAMOS } from '../datos/asi-trabajamos';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

/** «Así trabajamos» en 4 pasos. En /como-trabajamos/ es el bloque principal (sin enlace a sí mismo). */
@Component({
  selector: 'app-asi-trabajamos',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section at" [class.at-principal]="principal()" aria-labelledby="asi-trabajamos-titulo" data-ubicacion="asi_trabajamos">
      <div class="container">
        <div class="at-cabecera">
          <span class="eyebrow">CÓMO TRABAJAMOS</span>
          <h2 id="asi-trabajamos-titulo">{{ datos.titulo }}</h2>
          <p class="at-sub">{{ datos.subtitulo }}</p>
        </div>
        <ol class="at-pasos">
          @for (p of datos.pasos; track p.titulo; let i = $index) {
            <li>
              <span class="at-num" aria-hidden="true">{{ i + 1 }}</span>
              <h3>{{ p.titulo }}</h3>
              <p>{{ p.texto }}</p>
            </li>
          }
        </ol>
        <div class="at-acciones">
          <button type="button" class="button button-orange" (click)="presupuesto.abrir(servicio(), 'asi_trabajamos')">
            Pide presupuesto <span aria-hidden="true">↗</span>
          </button>
          @if (!principal()) {
            <a class="at-enlace" routerLink="/como-trabajamos/">Más sobre cómo trabajamos →</a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .at {
      background: var(--surface);
    }
    .at-cabecera {
      max-width: 720px;
      margin-bottom: 28px;
    }
    h2 {
      margin: 12px 0 10px;
      color: var(--navy-dark);
      font-family: 'Montserrat', 'Montserrat Fallback', sans-serif;
      font-size: clamp(28px, 3.4vw, 40px);
      font-weight: 800;
      letter-spacing: -1px;
      line-height: 1.15;
    }
    .at-sub {
      margin: 0;
      color: #33475d;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.5;
    }
    .at-pasos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
      gap: 16px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .at-pasos li {
      padding: 24px 22px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: white;
    }
    .at-num {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      margin-bottom: 14px;
      border-radius: 50%;
      color: white;
      background: #b84800;
      font-size: 18px;
      font-weight: 800;
    }
    h3 {
      margin: 0 0 8px;
      color: var(--navy-dark);
      font-size: 18px;
      line-height: 1.3;
    }
    .at-pasos p {
      margin: 0;
      color: #4f5f71;
      font-size: 15px;
      line-height: 1.6;
    }
    .at-acciones {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px 24px;
      margin-top: 26px;
    }
    .at-enlace {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      color: #b84800;
      font-weight: 700;
    }
  `,
})
export class AsiTrabajamos {
  readonly presupuesto = inject(PresupuestoService);
  readonly datos = ASI_TRABAJAMOS;
  /** En /como-trabajamos/ es el bloque principal. */
  readonly principal = input(false);
  /** Servicio que se preselecciona en el formulario. */
  readonly servicio = input('');
}
