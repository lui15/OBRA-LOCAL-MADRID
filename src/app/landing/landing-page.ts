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
import { AsiTrabajamos } from '../compartido/asi-trabajamos';
import { proyectosDeZona } from '../datos/proyectos';
import {
  SERVICIOS,
  ZONAS,
  buscarServicio,
  formatearPrecio,
} from '../datos/catalogo-servicios';
import { enlaceWhatsApp } from '../datos/contacto';
import { fechaDe } from '../datos/revision';
import { altoDe, anchoDe, srcsetDe, tarjetaDe } from '../datos/imagenes';
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
import { COMBOS } from '../combinaciones/indice.generado';
import { SERVICIOS_COMBO } from '../combinaciones/servicios';
import { ZONAS_COMBO } from '../combinaciones/zonas';

/**
 * Páginas servicio × zona que enlaza cada página: la del servicio enlaza sus barrios, la de zona
 * sus servicios y el índice de zonas todas. Así ninguna combinación se queda sin enlaces.
 */
function combosDe(p: PaginaSeo): { texto: string; url: string }[] {
  return COMBOS.map((c) => ({
    c,
    s: SERVICIOS_COMBO.find((x) => x.slug === c.servicio)!,
    z: ZONAS_COMBO.find((x) => x.slug === c.zona)!,
  }))
    .filter(({ s, z }) => p.modulo === 'zonas' || s.pagina === p.path || z.pagina === p.path)
    .map(({ c, s, z }) => ({ texto: `${s.nombre} en ${z.nombre}`, url: `/${c.servicio}/${c.zona}/` }));
}

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
    AsiTrabajamos,
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
  /** Opiniones de la página; si no tiene propias, las generales (las de la portada). */
  readonly opiniones =
    this.pagina.modulo === 'opiniones' ? [] : opinionesDe(this.pagina.path ? `/${this.pagina.path}/` : '/', true);
  readonly obras = this.pagina.tipo === 'zona' ? proyectosDeZona(this.pagina.path) : [];
  readonly esServicio = this.pagina.tipo === 'servicio' || this.pagina.tipo === 'trabajo';
  readonly servicioCatalogo = buscarServicio(this.pagina.servicioCatalogo ?? '');
  readonly whatsapp = enlaceWhatsApp(this.pagina.whatsapp);

  readonly desde = precioCabecera(this.pagina);
  readonly fecha = fechaDe(urlDePagina(this.pagina));

  /** Páginas por servicio y barrio relacionadas con esta. */
  readonly combos = combosDe(this.pagina);
  readonly tituloCombos =
    this.pagina.tipo === 'zona'
      ? `Servicios en ${this.pagina.zona}, en detalle`
      : this.pagina.modulo === 'zonas'
        ? 'Servicios por barrio, en detalle'
        : `${this.pagina.etiqueta} por barrios`;

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
  readonly zonasPorNombre = ZONAS.filter((z) => z !== 'Otra zona de Madrid');
  readonly serviciosConPagina = SERVICIOS.map((s) => ({ s, pagina: paginaDeServicio(s) }));

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
