import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { RevealDirective } from '../compartido/animaciones';
import { CtaPresupuesto } from '../compartido/cta-presupuesto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { FaqSeccion } from '../compartido/faq-seccion';
import { GuiaPrecios } from '../compartido/guia-precios';
import { Icono } from '../compartido/icono';
import { Migas } from '../compartido/migas';
import { BloqueCalculadora } from '../compartido/bloque-calculadora';
import { BloqueConfianza } from '../compartido/bloque-confianza';
import { CalculadoraReforma } from '../compartido/calculadora-reforma';
import { Revision } from '../compartido/revision';
import { TarjetaPagina } from '../compartido/tarjeta-pagina';
import { EJEMPLO_80M2, PLAZOS, TABLA_EURO_M2 } from '../datos/precios-guia';
import { proyectosDeZona } from '../datos/proyectos';
import { esPendiente } from '../datos/revision';
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
  guiasSobre,
  migasDe,
  paginaDeServicio,
  precioCabecera,
  relacionadasDe,
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
    BloqueCalculadora,
    BloqueConfianza,
    CalculadoraReforma,
    Revision,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  readonly presupuesto = inject(PresupuestoService);

  readonly pagina = buscarPagina(inject(ActivatedRoute).snapshot.data['slug']);
  readonly migas = migasDe(this.pagina);
  readonly relacionadas = relacionadasDe(this.pagina);
  readonly guias = this.pagina.tipo === 'guia' ? [] : guiasSobre(this.pagina);
  readonly obras = this.pagina.tipo === 'zona' ? proyectosDeZona(this.pagina.path) : [];
  readonly esServicio = this.pagina.tipo === 'servicio' || this.pagina.tipo === 'trabajo';
  readonly servicioCatalogo = buscarServicio(this.pagina.servicioCatalogo ?? '');
  readonly whatsapp = enlaceWhatsApp(this.pagina.whatsapp);

  readonly desde = precioCabecera(this.pagina);
  readonly desdeTexto = this.desde === null ? '' : formatearPrecio(this.desde);

  /** Índices: todo lo que cuelga de ellos. */
  readonly paginasServicio = PAGINAS.filter((p) => p.tipo === 'servicio');
  readonly paginasTrabajo = PAGINAS.filter((p) => p.tipo === 'trabajo');
  readonly paginasZona = PAGINAS.filter((p) => p.tipo === 'zona');
  readonly paginasGuia = PAGINAS.filter((p) => p.tipo === 'guia');
  readonly tablaM2 = TABLA_EURO_M2;
  readonly ejemplo = EJEMPLO_80M2;
  readonly plazos = PLAZOS;
  readonly formato = formatearPrecio;
  readonly pendiente = esPendiente;
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
      noindex: Boolean(this.pagina.borrador),
      jsonLd: crearJsonLd(this.pagina),
    });
  }
}
