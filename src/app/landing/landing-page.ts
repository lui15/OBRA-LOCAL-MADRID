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
import { BloqueOpiniones } from '../compartido/bloque-opiniones';
import { ListadoOpiniones } from '../compartido/listado-opiniones';
import { opinionesDe } from '../datos/opiniones';
import { TarjetaPagina } from '../compartido/tarjeta-pagina';
import { MAS_PEDIDOS, NOTA_PRECIOS, cifra, preciosDePagina } from '../datos/precios';
import { PreciosReferencia } from '../compartido/precios-referencia';
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
  FICHAS_PUBLICADAS,
  guiasSobre,
  migasDe,
  paginaDeServicio,
  precioCabecera,
  relacionadasDe,
  urlDePagina,
} from './fichas';
import { crearJsonLd } from './json-ld';
import { PaginaSeo } from './pagina-seo';

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
    BloqueOpiniones,
    ListadoOpiniones,
    PreciosReferencia,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPage {
  readonly presupuesto = inject(PresupuestoService);

  readonly pagina: PaginaSeo = inject(ActivatedRoute).snapshot.data['pagina'];
  readonly migas = migasDe(this.pagina);
  readonly relacionadas = relacionadasDe(this.pagina);
  readonly guias = this.pagina.tipo === 'guia' ? [] : guiasSobre(this.pagina.path);
  /** Opiniones de la página; en las de servicio, si no tiene propias, 2 generales. */
  readonly opiniones =
    this.pagina.modulo === 'opiniones'
      ? []
      : opinionesDe(
          this.pagina.path ? `/${this.pagina.path}/` : '/',
          this.pagina.tipo === 'servicio' || this.pagina.tipo === 'trabajo',
        );
  readonly obras = this.pagina.tipo === 'zona' ? proyectosDeZona(this.pagina.path) : [];
  readonly esServicio = this.pagina.tipo === 'servicio' || this.pagina.tipo === 'trabajo';
  readonly servicioCatalogo = buscarServicio(this.pagina.servicioCatalogo ?? '');
  readonly whatsapp = enlaceWhatsApp(this.pagina.whatsapp);

  readonly desde = precioCabecera(this.pagina);

  /** Índices: todo lo que cuelga de ellos. */
  readonly paginasServicio = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'servicio');
  readonly paginasTrabajo = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'trabajo');
  readonly paginasZona = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'zona');
  readonly paginasGuia = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'guia');
  /** Precios del trabajo concreto de la página (o de su servicio). */
  readonly filasPrecio = this.pagina.preciosSoloReferencia ? [] : preciosDePagina(this.pagina.path, this.pagina.servicioCatalogo);
  readonly masPedidos = MAS_PEDIDOS;
  readonly notaPrecios = NOTA_PRECIOS;
  readonly cifra = cifra;
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
    inject(ContextoPagina).fijar(
      this.pagina.servicioFormulario,
      this.pagina.whatsapp,
      this.pagina.tipo === 'zona' ? (this.pagina.zona ?? '') : '',
    );

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
