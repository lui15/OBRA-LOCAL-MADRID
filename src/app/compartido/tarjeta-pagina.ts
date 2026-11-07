import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { formatearPrecio } from '../datos/catalogo-servicios';
import { altoDe, anchoDe, srcsetDe, tarjetaDe } from '../datos/imagenes';
import { PaginaSeo, precioDesde, urlDePagina } from '../landing/landing-data';

/** Tarjeta compacta que enlaza a una página, con foto y «desde X €» si procede. */
@Component({
  selector: 'app-tarjeta-pagina',
  standalone: true,
  imports: [RouterLink],
  template: `
    @let p = pagina();
    <a class="tp" [routerLink]="url(p)">
      <div class="tp-foto">
        <img
          [src]="foto(p.imagen)"
          [attr.srcset]="srcset(p.imagen)"
          sizes="(max-width: 720px) 100vw, 360px"
          [alt]="p.imagenAlt"
          [attr.width]="ancho(p.imagen)"
          [attr.height]="alto(p.imagen)"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="tp-cuerpo">
        <h3>{{ p.etiqueta }}</h3>
        <span class="tp-resumen">{{ p.resumen }}</span>
        @if (textoPrecio(); as texto) {
          <span class="tp-precio">{{ texto }}</span>
        }
      </div>
    </a>
  `,
  styles: `
    :host {
      display: block;
      height: 100%;
    }
    .tp {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: #fff;
      transition:
        border-color 0.25s ease,
        box-shadow 0.3s ease,
        transform 0.35s var(--ease-out);
    }
    .tp:hover {
      border-color: #f6b88a;
      box-shadow: 0 12px 26px rgba(241, 106, 10, 0.12);
      transform: translateY(-3px);
    }
    .tp-foto {
      display: block;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: #edf1f5;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .tp-cuerpo {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 8px;
      padding: 18px;
    }
    h3 {
      margin: 0;
      color: var(--navy-dark);
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      font-weight: 800;
      line-height: 1.3;
    }
    .tp-resumen {
      flex: 1;
      color: #566679;
      font-size: 13px;
      line-height: 1.6;
    }
    .tp-precio {
      color: #b84800;
      font-size: 14px;
      font-weight: 700;
    }
    /* En móvil, foto a la izquierda: se ve todo de un vistazo sin hacer la página eterna. */
    @media (max-width: 560px) {
      .tp {
        display: grid;
        grid-template-columns: 112px minmax(0, 1fr);
      }
      .tp-foto {
        position: relative;
        aspect-ratio: auto;
        min-height: 100%;
      }
      img {
        position: absolute;
        inset: 0;
      }
      .tp-cuerpo {
        padding: 14px;
      }
      h3 {
        font-size: 15px;
      }
      .tp-resumen {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarjetaPagina {
  readonly pagina = input.required<PaginaSeo>();

  readonly url = urlDePagina;
  readonly foto = tarjetaDe;
  readonly srcset = srcsetDe;
  readonly ancho = anchoDe;
  readonly alto = altoDe;

  readonly textoPrecio = computed(() => {
    const p = this.pagina();
    if (p.tipo !== 'servicio' && p.tipo !== 'trabajo') return null;
    const desde = precioDesde(p);
    return desde === null ? 'Precio según valoración' : `Desde ${formatearPrecio(desde)}`;
  });
}
