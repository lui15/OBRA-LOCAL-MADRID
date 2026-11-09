import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Migas } from '../compartido/migas';
import { SITE_URL } from '../datos/contacto';
import { PROYECTOS, PROYECTOS_PUBLICADOS } from '../datos/proyectos';
import { nodoMigas, nodoNegocio, nodoPagina } from '../landing/fichas';
import { SeoService } from '../seo.service';

/** Índice de obras. Mientras no haya obras publicadas es noindex y no se enlaza. */
@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [Migas, RouterLink],
  template: `
    <div class="container pagina">
      <app-migas [migas]="migas" />
      <h1>Proyectos de <em>reformas</em> en Madrid</h1>
      @if (publicados.length) {
        <p class="intro">Obras que hemos terminado, con su barrio, superficie, plazo y precio.</p>
      } @else {
        <p class="aviso">
          BORRADOR: todavía no hay obras publicadas. Esta página no se prerenderiza ni aparece en el
          sitemap hasta que se publique la primera. Las entradas de abajo son ejemplos sin datos.
        </p>
      }
      <ul class="lista">
        @for (p of (publicados.length ? publicados : todos); track p.slug) {
          <li>
            <a [routerLink]="'/proyectos/' + p.slug">
              <img [src]="p.fotos[0].despues" [alt]="p.fotos[0].alt" width="800" height="600" loading="lazy" />
              <strong>{{ p.titulo }}</strong>
              <span>{{ p.barrio }} · {{ p.m2 }}</span>
            </a>
          </li>
        }
      </ul>
    </div>
  `,
  styleUrl: './proyectos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosPage {
  readonly publicados = PROYECTOS_PUBLICADOS;
  readonly todos = PROYECTOS;
  readonly migas = [
    { etiqueta: 'Inicio', url: '/' },
    { etiqueta: 'Proyectos', url: '/proyectos/' },
  ];

  constructor() {
    const url = SITE_URL + '/proyectos/';
    inject(SeoService).update({
      title: 'Proyectos de reformas en Madrid | ObraLocal Madrid',
      description: 'Obras de reforma terminadas en Madrid: barrio, metros, plazo, trabajos y rango de precio de cada una.',
      path: '/proyectos/',
      noindex: !this.publicados.length,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [nodoNegocio(), nodoPagina(url, 'Proyectos de reformas en Madrid'), nodoMigas(this.migas)],
      },
    });
  }
}
