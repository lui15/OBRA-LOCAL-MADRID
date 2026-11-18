import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AsiTrabajamos } from '../compartido/asi-trabajamos';
import { CtaPresupuesto } from '../compartido/cta-presupuesto';
import { FaqSeccion } from '../compartido/faq-seccion';
import { GuiaPrecios } from '../compartido/guia-precios';
import { Migas } from '../compartido/migas';
import { MENSAJE_GENERAL, SITE_URL } from '../datos/contacto';
import { extremosFilas, filasDe } from '../datos/precios';
import { Miga, nodoMigas, nodoNegocio, nodoPagina, nodoWeb, ID_NEGOCIO } from '../landing/fichas';
import { ContextoPagina } from '../layout/contexto-pagina.service';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import { COMBOS } from './indice.generado';
import { SERVICIOS_COMBO, servicioCombo } from './servicios';
import { PaginaCombo } from './tipos';
import { ZONAS_COMBO, zonaCombo } from './zonas';

/** Página servicio × zona (/:servicio/:zona/). El contenido llega ya resuelto de contenido/zonas/<zona>.ts. */
@Component({
  selector: 'app-combo-page',
  standalone: true,
  imports: [RouterLink, Migas, GuiaPrecios, FaqSeccion, CtaPresupuesto, AsiTrabajamos],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './combo-page.html',
  styleUrl: './combo-page.css',
})
export class ComboPage {
  readonly presupuesto = inject(PresupuestoService);
  readonly p: PaginaCombo = inject(ActivatedRoute).snapshot.data['pagina'];
  readonly servicio = servicioCombo(this.p.servicio)!;
  readonly zona = zonaCombo(this.p.zona)!;
  readonly url = `/${this.p.servicio}/${this.p.zona}/`;
  readonly filas = filasDe(this.servicio.precios);

  readonly migas: Miga[] = [
    { etiqueta: 'Inicio', url: '/' },
    { etiqueta: this.servicio.nombre, url: `/${this.servicio.pagina}/` },
    { etiqueta: this.zona.nombre, url: this.url },
  ];

  /** El mismo servicio en zonas cercanas (solo las que ya tienen página). */
  readonly cercanas = this.zona.cercanas
    .filter((z) => COMBOS.some((c) => c.servicio === this.p.servicio && c.zona === z))
    .map((z) => ({ nombre: ZONAS_COMBO.find((x) => x.slug === z)!.nombre, url: `/${this.p.servicio}/${z}/` }));

  /** Servicios relacionados en la misma zona (o su página general si aún no hay combinación). */
  readonly relacionados = this.servicio.relacionados.map((s) => {
    const sv = SERVICIOS_COMBO.find((x) => x.slug === s)!;
    const hay = COMBOS.some((c) => c.servicio === s && c.zona === this.p.zona);
    return { nombre: hay ? `${sv.nombre} en ${this.zona.nombre}` : sv.nombre, url: hay ? `/${s}/${this.p.zona}/` : `/${sv.pagina}/` };
  });

  constructor() {
    inject(ContextoPagina).fijar(
      this.servicio.formulario,
      `${MENSAJE_GENERAL}: ${this.servicio.nombre.toLowerCase()} en ${this.zona.nombre}`,
      this.zona.nombre,
    );
    const url = SITE_URL + this.url;
    const r = extremosFilas(this.filas);
    inject(SeoService).update({
      title: this.p.title,
      description: this.p.description,
      path: this.url,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          nodoNegocio(),
          nodoWeb(),
          nodoPagina(url, this.p.title),
          nodoMigas(this.migas),
          {
            '@type': 'Service',
            name: `${this.servicio.nombre} en ${this.zona.nombre}`,
            serviceType: this.servicio.nombre,
            url,
            provider: { '@id': ID_NEGOCIO },
            areaServed: { '@type': 'Place', name: this.zona.nombre },
            ...(r
              ? {
                  offers: {
                    '@type': 'Offer',
                    url,
                    priceCurrency: 'EUR',
                    priceSpecification: {
                      '@type': this.filas[0].unidad ? 'UnitPriceSpecification' : 'PriceSpecification',
                      minPrice: r.minimo,
                      maxPrice: r.maximo,
                      priceCurrency: 'EUR',
                      valueAddedTaxIncluded: true,
                    },
                  },
                }
              : {}),
          },
          {
            '@type': 'FAQPage',
            mainEntity: this.p.faqs.map((f) => ({
              '@type': 'Question',
              name: f.pregunta,
              acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
            })),
          },
        ],
      },
    });
  }
}
