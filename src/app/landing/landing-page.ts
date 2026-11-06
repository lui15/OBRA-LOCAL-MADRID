import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { RevealDirective } from '../compartido/animaciones';
import { CtaPresupuesto } from '../compartido/cta-presupuesto';
import { FaqSeccion } from '../compartido/faq-seccion';
import { Garantias } from '../compartido/garantias';
import { GuiaPrecios } from '../compartido/guia-precios';
import { Migas } from '../compartido/migas';
import { ProcesoTrabajo } from '../compartido/proceso-trabajo';
import { SERVICIOS, Servicio, ZONAS, buscarServicio, formatearPrecio } from '../datos/catalogo';
import { altoDe, anchoDe, srcsetDe } from '../datos/imagenes';
import { NavegacionService } from '../layout/navegacion.service';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import {
  PAGINAS,
  buscarPagina,
  crearJsonLd,
  migasDe,
  paginaDeServicio,
  urlDePagina,
} from './landing-data';

/** Plantilla de todas las URL de contenido. Cada una se define con un objeto de datos. */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterLink,
    RevealDirective,
    CtaPresupuesto,
    FaqSeccion,
    Garantias,
    GuiaPrecios,
    Migas,
    ProcesoTrabajo,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  readonly presupuesto = inject(PresupuestoService);
  readonly navegacion = inject(NavegacionService);

  readonly pagina = buscarPagina(inject(ActivatedRoute).snapshot.data['slug']);
  readonly migas = migasDe(this.pagina);
  readonly relacionadas = this.pagina.relacionadas.map((path) => buscarPagina(path));
  readonly servicioCatalogo = buscarServicio(this.pagina.servicioCatalogo ?? '');

  /** Índices: todo lo que cuelga de ellos. */
  readonly paginasServicio = PAGINAS.filter((p) => p.tipo === 'servicio');
  readonly paginasIntencion = PAGINAS.filter((p) => p.tipo === 'intencion');
  readonly paginasZona = PAGINAS.filter((p) => p.tipo === 'zona');
  readonly zonasAtendidas = ZONAS.filter((z) => z !== 'Otra zona de Madrid');

  /** Los servicios del catálogo con su página, para el índice de precios y las zonas. */
  readonly serviciosConPagina = SERVICIOS.map((s) => ({ s, pagina: paginaDeServicio(s) }));

  readonly anchoFoto = anchoDe(this.pagina.imagen);
  readonly altoFoto = altoDe(this.pagina.imagen);
  readonly srcsetFoto = srcsetDe(this.pagina.imagen);

  readonly url = urlDePagina;
  readonly formato = formatearPrecio;
  readonly verPrecios = Boolean(this.servicioCatalogo) || this.pagina.tipo === 'zona';

  desde(s: Servicio): number {
    return Math.min(...s.precios.map((p) => p.minimo));
  }

  hasta(s: Servicio): number {
    return Math.max(...s.precios.map((p) => p.maximo));
  }

  constructor() {
    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: urlDePagina(this.pagina),
      jsonLd: crearJsonLd(this.pagina),
    });
  }
}
