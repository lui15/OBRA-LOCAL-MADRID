import type { Faq } from '../compartido/faq-acordeon';

export type { Faq };

export type TipoPagina =
  | 'inicio'
  | 'hub'
  | 'servicio'
  | 'trabajo'
  | 'zona'
  | 'info'
  | 'guia'
  | 'herramienta';

export type ModuloPagina = 'servicios' | 'precios' | 'zonas' | 'proceso' | 'calculadora' | 'guias';

export interface SubseccionPagina {
  titulo: string;
  texto: string;
  /** Si tiene imagen, se pinta como tarjeta con foto. */
  imagen?: string;
  imagenAlt?: string;
}

export interface SeccionPagina {
  /** Se pinta como H2. */
  titulo: string;
  parrafos: string[];
  lista?: string[];
  /** Se pintan como H3 bajo el H2 de la sección. */
  subsecciones?: SubseccionPagina[];
}

/** Una URL de contenido. Añadir una página es añadir un objeto en su archivo. */
export interface PaginaSeo {
  /** Ruta sin barras. '' es la página de inicio. La URL pública lleva barra final. */
  path: string;
  tipo: TipoPagina;
  /** Página de la que cuelga en las migas de pan, por su path. */
  padre?: string;
  /**
   * Página todavía no publicable (por ejemplo, un servicio sin confirmar). Indica el motivo.
   * Se puede ver en local, pero no se prerenderiza, no va al sitemap ni a los menús y es noindex.
   */
  borrador?: string;
  /** Máximo 60 caracteres. */
  title: string;
  /** Máximo 155 caracteres. */
  description: string;
  /** Texto del enlace interno hacia esta página. */
  etiqueta: string;
  /** Resumen para las tarjetas de los índices. */
  resumen: string;
  /** H1 con la parte resaltada en color de marca. */
  h1: { antes: string; resaltado: string; despues: string };
  /** Franja de cuatro datos bajo la cabecera. */
  puntos: string[];
  /** Mensaje ya escrito al abrir WhatsApp desde esta página. */
  whatsapp: string;
  kicker: string;
  intro: string;
  /** Aviso destacado bajo la cabecera (por ejemplo, «Revisa la convocatoria vigente»). */
  aviso?: string;
  secciones: SeccionPagina[];
  /** Fuentes oficiales que se citan, con enlace. */
  fuentes?: { texto: string; url: string }[];
  faqs: Faq[];
  /** En lugar de faqs: preguntas agrupadas por tema. */
  gruposFaq?: { titulo: string; faqs: Faq[] }[];
  /** Nombre y descripción del servicio en los datos estructurados. */
  servicio: { nombre: string; descripcion: string };
  /** Nombre en el catálogo: de ahí salen los precios que se muestran. */
  servicioCatalogo?: string;
  /** Servicio que se preselecciona en el formulario. Debe coincidir con el catálogo. */
  servicioFormulario: string;
  /**
   * Los precios mostrados son de un servicio más amplio y no del trabajo concreto de la página:
   * no se anuncian como «desde» ni se publican como oferta en los datos estructurados.
   */
  preciosSoloReferencia?: boolean;
  /** Zona a la que se dirige la página, para los datos estructurados. */
  zona?: string;
  /** Solo guías: fecha de publicación (AAAA-MM-DD). */
  publicado?: string;
  imagen: string;
  imagenAlt: string;
  /** Sección especial de las páginas índice o de herramientas. */
  modulo?: ModuloPagina;
  /** Páginas relacionadas, por su path. */
  relacionadas: string[];
}
