import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { ConsentimientoService } from './consentimiento.service';

/** Aceptar y rechazar tienen el mismo aspecto y el mismo número de clics, como pide la AEPD. */
@Component({
  selector: 'app-aviso-cookies',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (consentimiento.avisoVisible()) {
      <section #caja class="aviso" aria-label="Aviso de cookies" tabindex="-1">
        <p>
          <strong>¿Nos dejas medir las visitas?</strong>
          Usamos cookies de Google Analytics para saber qué páginas interesan más. Solo se activan
          si las aceptas.
          <a routerLink="/politica-cookies">Política de cookies</a>
        </p>
        <div class="aviso-botones">
          <button type="button" class="button button-outline" (click)="consentimiento.rechazar()">
            Rechazar
          </button>
          <button type="button" class="button button-outline" (click)="consentimiento.aceptar()">
            Aceptar
          </button>
        </div>
      </section>
    }
  `,
  styles: `
    .aviso {
      position: fixed;
      left: 20px;
      bottom: calc(20px + env(safe-area-inset-bottom));
      z-index: 85;
      width: min(25rem, calc(100vw - 40px));
      padding: 18px 20px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: #fff;
      box-shadow: 0 18px 44px rgba(9, 39, 70, 0.2);
      color: #4b5c70;
      font-size: 13px;
      line-height: 1.55;
    }
    .aviso:focus {
      outline: none;
    }
    p {
      margin: 0;
    }
    strong {
      display: block;
      margin-bottom: 4px;
      color: var(--navy-dark);
      font-size: 14px;
    }
    a {
      color: #b84800;
      font-weight: 600;
      text-decoration: underline;
    }
    .aviso-botones {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-top: 14px;
    }
    .button {
      width: 100%;
      min-height: 44px;
    }
    @media (max-width: 768px) {
      .aviso {
        left: 10px;
        /* Queda justo encima de la barra de acción móvil. */
        bottom: calc(76px + env(safe-area-inset-bottom));
        width: calc(100vw - 20px);
        padding: 16px;
      }
    }
  `,
})
export class AvisoCookies {
  readonly consentimiento = inject(ConsentimientoService);
  private readonly caja = viewChild<ElementRef<HTMLElement>>('caja');

  constructor() {
    effect(() => {
      if (this.consentimiento.reabierto()) {
        this.caja()?.nativeElement.focus({ preventScroll: true });
      }
    });
  }
}
