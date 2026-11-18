import type { Faq } from '../landing/pagina-seo';

/** Una página servicio × zona, escrita entera a mano (sin plantillas que solo cambien el nombre). */
export interface PaginaCombo {
  /** Slug del servicio (ver servicios.ts). */
  servicio: string;
  /** Slug de la zona (ver zonas.ts). */
  zona: string;
  title: string;
  description: string;
  h1: string;
  /** Introducción propia del servicio en esa zona. */
  intro: string[];
  /** El barrio: viviendas, épocas, calles y accesos, aparcamiento, dificultades y consejos. */
  barrio: { titulo: string; parrafos: string[] }[];
  /** Proceso paso a paso adaptado a la zona. */
  proceso: { titulo: string; texto: string }[];
  /** Qué incluye el servicio. */
  incluye: string[];
  /** Orientación de precios, con cifras de datos/precios.ts. */
  precios: string[];
  /** De 5 a 8 preguntas propias del servicio y el barrio. */
  faqs: Faq[];
}
