import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { RevealDirective } from '../compartido/animaciones';
import { CtaPresupuesto } from '../compartido/cta-presupuesto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { FaqSeccion } from '../compartido/faq-seccion';
import { GuiaPrecios } from '../compartido/guia-precios';
import { Icono } from '../compartido/icono';
import { Migas } from '../compartido/migas';
import { TarjetaPagina } from '../compartido/tarjeta-pagina';
import {
  SERVICIOS,
  ZONAS,
  buscarServicio,
  formatearPrecio,
} from '../datos/catalogo-servicios';
import { enlaceWhatsApp } from '../datos/contacto';
import { altoDe, anchoDe, srcsetDe, tarjetaDe } from '../datos/imagenes';
import { PASOS_OBRA } from '../datos/pasos-obra';
import { ContextoPagina } from '../layout/contexto-pagina.service';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';
import {
  PAGINAS,
  buscarPagina,
  crearJsonLd,
  migasDe,
  paginaDeServicio,
  precioCabecera,
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
    FaqAcordeon,
    FaqSeccion,
    GuiaPrecios,
    Icono,
    Migas,
    TarjetaPagina,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  readonly presupuesto = inject(PresupuestoService);

  readonly pagina = buscarPagina(inject(ActivatedRoute).snapshot.data['slug']);
  readonly migas = migasDe(this.pagina);
  readonly relacionadas = this.pagina.relacionadas.map((path) => buscarPagina(path));
  readonly servicioCatalogo = buscarServicio(this.pagina.servicioCatalogo ?? '');
  readonly whatsapp = enlaceWhatsApp(this.pagina.whatsapp);

  readonly desde = precioCabecera(this.pagina);
  readonly desdeTexto = this.desde === null ? '' : formatearPrecio(this.desde);

  /** Índices: todo lo que cuelga de ellos. */
  readonly paginasServicio = PAGINAS.filter((p) => p.tipo === 'servicio');
  readonly paginasTrabajo = PAGINAS.filter((p) => p.tipo === 'trabajo');
  readonly paginasZona = PAGINAS.filter((p) => p.tipo === 'zona');
  readonly zonasPorNombre = ZONAS.filter((z) => z !== 'Otra zona de Madrid');
  readonly serviciosConPagina = SERVICIOS.map((s) => ({ s, pagina: paginaDeServicio(s) }));
  readonly pasos = PASOS_OBRA;

  readonly url = urlDePagina;
  readonly ancho = anchoDe;
  readonly alto = altoDe;
  readonly srcset = srcsetDe;
  readonly fotoTarjeta = tarjetaDe;

  constructor() {
    inject(ContextoPagina).fijar(this.pagina.servicioFormulario, this.pagina.whatsapp);

    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: urlDePagina(this.pagina),
      imagenPrincipal: this.pagina.imagen,
      imagenSizes: '(max-width: 960px) 100vw, 520px',
      jsonLd: crearJsonLd(this.pagina),
    });
  }
}
