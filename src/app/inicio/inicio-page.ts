import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { RevealDirective } from '../compartido/animaciones';
import { CtaPresupuesto } from '../compartido/cta-presupuesto';
import { FaqAcordeon } from '../compartido/faq-acordeon';
import { FaqSeccion } from '../compartido/faq-seccion';
import { Garantias } from '../compartido/garantias';
import { BloqueCalculadora } from '../compartido/bloque-calculadora';
import { BloqueConfianza } from '../compartido/bloque-confianza';
import { Icono } from '../compartido/icono';
import { Revision } from '../compartido/revision';
import { BloqueOpiniones } from '../compartido/bloque-opiniones';
import { AsiTrabajamos } from '../compartido/asi-trabajamos';
import { OPINIONES, opinionesDe } from '../datos/opiniones';
import { MAS_PEDIDOS, cifra } from '../datos/precios';
import { ProcesoTrabajo } from '../compartido/proceso-trabajo';
import { TarjetaPagina } from '../compartido/tarjeta-pagina';
import { TarjetaServicio } from '../compartido/tarjeta-servicio';
import { enlaceWhatsApp } from '../datos/contacto';
import { srcsetDe } from '../datos/imagenes';
import { ContextoPagina } from '../layout/contexto-pagina.service';
import { PREGUNTAS_PORTADA, SERVICIOS } from '../datos/catalogo-servicios';
import { FICHAS_PUBLICADAS, urlDePagina } from '../landing/fichas';
import { crearJsonLd } from '../landing/json-ld';
import { PaginaSeo } from '../landing/pagina-seo';
import { NavegacionService } from '../layout/navegacion.service';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    BloqueOpiniones,
    AsiTrabajamos,
    RouterLink,
    RevealDirective,
    CtaPresupuesto,
    FaqAcordeon,
    FaqSeccion,
    Garantias,
    ProcesoTrabajo,
    TarjetaPagina,
    TarjetaServicio,
    Icono,
    BloqueCalculadora,
    BloqueConfianza,
    Revision,
  ],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioPage {
  /** Carrusel de la portada: primero las de la portada y después el resto, para que vayan pasando. */
  readonly opiniones = [...opinionesDe('/'), ...OPINIONES.filter((o) => !o.paginas.includes('/'))];
  /** Precios de partida del titular: baño, cocina e integral. */
  readonly masPedidos = MAS_PEDIDOS;
  readonly cifra = cifra;
  readonly navegacion = inject(NavegacionService);
  readonly presupuesto = inject(PresupuestoService);

  readonly trabajos = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'trabajo');
  readonly zonas = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'zona');
  readonly srcsetHero = srcsetDe('/images/hero-reforma.webp');
  readonly servicios = SERVICIOS;
  readonly preguntas = PREGUNTAS_PORTADA;

  /** Contenido SEO de la URL actual. */
  readonly pagina: PaginaSeo = inject(ActivatedRoute).snapshot.data['pagina'];
  readonly seccion = this.pagina.secciones[0];
  readonly whatsapp = enlaceWhatsApp(this.pagina.whatsapp);
  /** Enlazado interno: primero los índices, después todo lo demás. */
  readonly otrasPaginas = FICHAS_PUBLICADAS.filter(
    (p) => p.path !== '' && (p.tipo === 'hub' || p.tipo === 'herramienta' || p.tipo === 'servicio'),
  );

  constructor() {
    inject(ContextoPagina).fijar('', this.pagina.whatsapp);

    inject(SeoService).update({
      title: this.pagina.title,
      description: this.pagina.description,
      path: urlDePagina(this.pagina),
      imagenPrincipal: this.pagina.imagen,
      imagenSizes: '(max-width: 720px) 100vw, 540px',
      jsonLd: crearJsonLd(this.pagina, [...this.pagina.faqs, ...this.preguntas]),
    });
  }
}
