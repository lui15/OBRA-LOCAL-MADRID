import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

import { NOTA_OPINIONES, Opinion, resumenOpiniones } from '../datos/opiniones';
import { TarjetaOpinion } from './tarjeta-opinion';

/**
 * Opiniones de una página, con el resumen calculado y la nota legal.
 * En la portada es un carrusel táctil con scroll-snap (sin librerías).
 */
@Component({
  selector: 'app-bloque-opiniones',
  standalone: true,
  imports: [RouterLink, TarjetaOpinion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (opiniones().length) {
      <section class="section bo" [class.bo-carrusel]="carrusel()" aria-labelledby="opiniones-titulo">
        <div class="container">
          <div class="bo-cabecera">
            <div>
              <span class="eyebrow">OPINIONES DE CLIENTES</span>
              <h2 id="opiniones-titulo">{{ titulo() }}</h2>
              <p class="bo-resumen">
                <span class="bo-media" aria-hidden="true">★★★★★</span>
                {{ resumen.texto }}
              </p>
            </div>
            @if (carrusel()) {
              <div class="bo-flechas">
                <button type="button" aria-label="Opinión anterior" (click)="mover(-1)">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
                </button>
                <button type="button" aria-label="Opinión siguiente" (click)="mover(1)">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
                </button>
              </div>
            }
          </div>

          <ul #pista class="bo-lista" [attr.tabindex]="carrusel() ? 0 : null" [attr.aria-label]="carrusel() ? 'Opiniones, desliza para ver más' : null">
            @for (o of opiniones(); track o.nombre) {
              <li><app-tarjeta-opinion [opinion]="o" /></li>
            }
          </ul>

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
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 20px;
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
    .bo-lista {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
      gap: 16px;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .bo-carrusel .bo-lista {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: min(85%, 360px);
      grid-template-columns: none;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      scroll-snap-type: x mandatory;
      scroll-padding-inline: 2px;
      padding: 4px 2px 14px;
      scrollbar-width: thin;
    }
    .bo-carrusel .bo-lista > li {
      scroll-snap-align: start;
    }
    .bo-lista:focus-visible {
      outline: 3px solid var(--navy);
      outline-offset: 4px;
      border-radius: 12px;
    }
    .bo-flechas {
      display: flex;
      gap: 8px;
    }
    .bo-flechas button {
      display: grid;
      place-items: center;
      width: 46px;
      height: 46px;
      border: 1px solid var(--line);
      border-radius: 50%;
      color: var(--navy-dark);
      background: white;
      cursor: pointer;
    }
    .bo-flechas svg {
      width: 22px;
      height: 22px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
      stroke-linejoin: round;
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
    @media (max-width: 640px) {
      .bo-flechas {
        display: none;
      }
    }
  `,
})
export class BloqueOpiniones {
  readonly opiniones = input.required<Opinion[]>();
  readonly titulo = input('Lo que dicen nuestros clientes');
  readonly carrusel = input(false);
  readonly enlaceTodas = input(true);

  readonly nota = NOTA_OPINIONES;
  /** El resumen es siempre el de todas las opiniones, no solo las de la página. */
  readonly resumen = resumenOpiniones();

  private readonly pista = viewChild<ElementRef<HTMLElement>>('pista');
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  mover(sentido: 1 | -1): void {
    const el = this.pista()?.nativeElement;
    if (!el || !this.esNavegador) return;
    const tarjeta = el.querySelector('li');
    const paso = (tarjeta?.getBoundingClientRect().width ?? 300) + 16;
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: paso * sentido, behavior: reducir ? 'auto' : 'smooth' });
  }
}
