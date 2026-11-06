import type { Faq } from '../compartido/faq-acordeon';

export type { Faq };

export type TipoPagina = 'inicio' | 'hub' | 'servicio' | 'intencion' | 'zona';
export type ModuloPagina = 'servicios' | 'precios' | 'zonas' | 'proceso';

export interface SeccionPagina {
  /** Se pinta como H2. */
  titulo: string;
  parrafos: string[];
  lista?: string[];
  /** Se pintan como H3 bajo el H2 de la sección. */
  subsecciones?: { titulo: string; texto: string }[];
}

/** Una URL de contenido. Añadir una página es añadir un objeto en su archivo. */
export interface PaginaSeo {
  /** Ruta sin barra inicial. '' es la página de inicio. */
  path: string;
  tipo: TipoPagina;
  /** Página de la que cuelga en las migas de pan, por su path. */
  padre?: string;
  /** Máximo 60 caracteres. */
  title: string;
  /** Máximo 155 caracteres. */
  description: string;
  /** Texto del enlace interno hacia esta página. */
  etiqueta: string;
  /** Resumen para las tarjetas de los índices. */
  resumen: string;
  h1: { linea: string; resaltado: string };
  kicker: string;
  intro: string;
  secciones: SeccionPagina[];
  faqs: Faq[];
  /** Nombre y descripción del servicio en los datos estructurados. */
  servicio: { nombre: string; descripcion: string };
  /** Nombre en el catálogo: de ahí salen los precios que se muestran. */
  servicioCatalogo?: string;
  /** Servicio que se preselecciona en el formulario. Debe coincidir con el catálogo. */
  servicioFormulario: string;
  /**
   * Los precios mostrados son de un servicio más amplio y no del trabajo concreto de la página:
   * no se publican como oferta en los datos estructurados.
   */
  preciosSoloReferencia?: boolean;
  /** Zona a la que se dirige la página, para los datos estructurados. */
  zona?: string;
  imagen: string;
  imagenAlt: string;
  /** Sección especial de las páginas índice. */
  modulo?: ModuloPagina;
  /** Páginas relacionadas, por su path. */
  relacionadas: string[];
}
