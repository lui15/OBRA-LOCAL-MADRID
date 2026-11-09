import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Migas } from '../compartido/migas';
import { SITE_URL } from '../datos/contacto';
import { PROYECTOS } from '../datos/proyectos';
import { buscarPagina, nodoMigas, nodoNegocio, nodoPagina, urlDePagina } from '../landing/landing-data';
import { SeoService } from '../seo.service';

/** Plantilla de una obra: antes y después, barrio, m², plazo, trabajos, precio y servicio. */
@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [Migas, RouterLink],
  template: `
    @if (proyecto; as p) {
      <div class="container pagina">
        <app-migas [migas]="migas" />
        @if (!p.publicado) {
          <p class="aviso">BORRADOR: obra de ejemplo sin datos reales. No se publica.</p>
        }
        <h1>{{ p.titulo }}</h1>
        <dl class="ficha">
          <div><dt>Barrio</dt><dd>{{ p.barrio }}</dd></div>
          <div><dt>Superficie</dt><dd>{{ p.m2 }}</dd></div>
          <div><dt>Plazo</dt><dd>{{ p.plazo }}</dd></div>
          <div><dt>Precio</dt><dd>{{ p.rangoPrecio }}</dd></div>
        </dl>
        @for (f of p.fotos; track f.despues) {
          <div class="antes-despues">
            <figure><img [src]="f.antes" [alt]="'Antes: ' + f.alt" width="800" height="600" /><figcaption>Antes</figcaption></figure>
            <figure><img [src]="f.despues" [alt]="'Después: ' + f.alt" width="800" height="600" /><figcaption>Después</figcaption></figure>
          </div>
        }
        <h2>Qué hicimos</h2>
        <p>{{ p.descripcion }}</p>
        <ul>
          @for (t of p.trabajos; track t) {
            <li>{{ t }}</li>
          }
        </ul>
        <p>
          Servicio relacionado:
          <a [routerLink]="servicioUrl">{{ servicioEtiqueta }}</a>
        </p>
      </div>
    }
  `,
  styleUrl: './proyectos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectoPage {
  readonly proyecto = PROYECTOS.find((p) => p.slug === inject(ActivatedRoute).snapshot.paramMap.get('slug'));
  readonly servicioUrl = this.proyecto ? urlDePagina(buscarPagina(this.proyecto.servicioPath)) : '/';
  readonly servicioEtiqueta = this.proyecto ? buscarPagina(this.proyecto.servicioPath).etiqueta : '';
  readonly migas = [
    { etiqueta: 'Inicio', url: '/' },
    { etiqueta: 'Proyectos', url: '/proyectos/' },
    { etiqueta: this.proyecto?.titulo ?? '', url: `/proyectos/${this.proyecto?.slug}/` },
  ];

  constructor() {
    const p = this.proyecto;
    const path = `/proyectos/${p?.slug}/`;
    const url = SITE_URL + path;
    inject(SeoService).update({
      title: `${p?.titulo ?? 'Proyecto'} | ObraLocal Madrid`,
      description: p?.descripcion ?? '',
      path,
      noindex: !p?.publicado,
      jsonLd: p
        ? {
            '@context': 'https://schema.org',
            '@graph': [
              nodoNegocio(),
              nodoPagina(url, p.titulo),
              nodoMigas(this.migas),
              ...p.fotos.flatMap((f) => [
                { '@type': 'ImageObject', contentUrl: SITE_URL + f.antes, caption: 'Antes: ' + f.alt },
                { '@type': 'ImageObject', contentUrl: SITE_URL + f.despues, caption: 'Después: ' + f.alt },
              ]),
            ],
          }
        : undefined,
    });
  }
}
