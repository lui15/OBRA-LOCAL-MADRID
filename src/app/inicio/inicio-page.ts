import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../compartido/animaciones';
import { CtaPresupuesto } from '../compartido/cta-presupuesto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { FaqSeccion } from '../compartido/faq-seccion';
import { Garantias } from '../compartido/garantias';
import { ProcesoTrabajo } from '../compartido/proceso-trabajo';
import { TarjetaServicio } from '../compartido/tarjeta-servicio';
import { PREGUNTAS_PORTADA, SERVICIOS } from '../datos/catalogo';
import {
  PAGINAS,
  PaginaSeo,
  buscarPagina,
  crearJsonLd,
  urlDePagina,
} from '../landing/landing-data';
import { NavegacionService } from '../layout/navegacion.service';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterLink,
    RevealDirective,
    CtaPresupuesto,
    FaqAcordeon,
    FaqSeccion,
    Garantias,
    ProcesoTrabajo,
    TarjetaServicio,
  ],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPage {
  readonly navegacion = inject(NavegacionService);
  readonly presupuesto = inject(PresupuestoService);

  readonly servicios = SERVICIOS;
  readonly preguntas = PREGUNTAS_PORTADA;

  /** Contenido SEO de la URL actual. */
  readonly pagina = buscarPagina('');
  readonly seccion = this.pagina.secciones[0];
  /** Enlazado interno: primero los índices, después todo lo demás. */
  readonly otrasPaginas = PAGINAS.filter((p) => p !== this.pagina && !this.esIntencion(p));

  private esIntencion(p: PaginaSeo): boolean {
    return p.tipo === 'intencion';
  }

  constructor() {
    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: urlDePagina(this.pagina),
      jsonLd: crearJsonLd(this.pagina, [...this.pagina.faqs, ...this.preguntas]),
    });
  }
}
