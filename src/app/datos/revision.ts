/**
 * Fecha base de revisión: el último cambio que tocó todas las páginas (24-11-2026: nota 5,0 en
 * todas las descriptions y la reseña real de Google en el bloque de opiniones). Es el lastmod del
 * sitemap, el dateModified y el «Actualizado» de las páginas que no aparecen en ACTUALIZADAS.
 */
export const ULTIMA_REVISION = '2026-11-24';

/**
 * Páginas cambiadas después de la fecha base, por URL con barras ('/' es la portada).
 * Al cambiar el contenido de una página, añade o actualiza aquí su fecha.
 */
export const ACTUALIZADAS: Record<string, string> = {
  // 25-11-2026: reforma integral desde 450 €/m² (sale en las tarjetas de servicios de estas páginas),
  // títulos con precio en integrales y baños, preguntas nuevas con enlaces y enlaces a servicio × barrio.
  '/': '2026-11-25',
  '/albanileria-madrid/': '2026-11-25',
  '/ayudas-reformas-madrid/': '2026-11-25',
  '/calculadora-reforma/': '2026-11-25',
  '/cambiar-azulejos-bano-madrid/': '2026-11-25',
  '/cambiar-banera-por-plato-ducha-madrid/': '2026-11-25',
  '/cambiar-ventanas-madrid/': '2026-11-25',
  '/como-trabajamos/': '2026-11-25',
  '/cuanto-cuesta-reformar-piso-70-m2-madrid/': '2026-11-25',
  '/cuanto-cuesta-reformar-un-bano-en-madrid/': '2026-11-25',
  '/cuanto-cuesta-reformar-una-cocina-en-madrid/': '2026-11-25',
  '/cuanto-tarda-una-reforma-integral/': '2026-11-25',
  '/instalacion-suelos-madrid/': '2026-11-25',
  '/licencia-obra-madrid/': '2026-11-25',
  '/opiniones/': '2026-11-25',
  '/orden-trabajos-reforma-integral/': '2026-11-25',
  '/pintores-madrid/': '2026-11-25',
  '/pladur-madrid/': '2026-11-25',
  '/precios/': '2026-11-25',
  '/preguntas-frecuentes/': '2026-11-25',
  '/que-pedir-presupuesto-reforma/': '2026-11-25',
  '/quitar-gotele-madrid/': '2026-11-25',
  '/reforma-banos-madrid/': '2026-11-25',
  '/reforma-cocinas-madrid/': '2026-11-25',
  '/reforma-integral/chamberi/': '2026-11-25',
  '/reforma-piso-completo-madrid/': '2026-11-25',
  '/reformar-bano-pequeno-madrid/': '2026-11-25',
  '/reformas-alcobendas/': '2026-11-25',
  '/reformas-alcorcon/': '2026-11-25',
  '/reformas-arganzuela/': '2026-11-25',
  '/reformas-carabanchel/': '2026-11-25',
  '/reformas-chamartin/': '2026-11-25',
  '/reformas-chamberi/': '2026-11-25',
  '/reformas-ciudad-lineal/': '2026-11-25',
  '/reformas-getafe/': '2026-11-25',
  '/reformas-integrales-madrid/': '2026-11-25',
  '/reformas-las-rozas/': '2026-11-25',
  '/reformas-latina/': '2026-11-25',
  '/reformas-leganes/': '2026-11-25',
  '/reformas-majadahonda/': '2026-11-25',
  '/reformas-moncloa/': '2026-11-25',
  '/reformas-mostoles/': '2026-11-25',
  '/reformas-pozuelo-de-alarcon/': '2026-11-25',
  '/reformas-retiro/': '2026-11-25',
  '/reformas-salamanca/': '2026-11-25',
  '/reformas-tetuan/': '2026-11-25',
  '/reformas-vallecas/': '2026-11-25',
  '/servicios/': '2026-11-25',
  '/suelo-laminado-vinilico-o-porcelanico/': '2026-11-25',
  '/zonas/': '2026-11-25',
};

/** Fecha de la última revisión de una URL ('/precios/', '/reforma-integral/chamberi/'). */
export function fechaDe(url: string): string {
  return ACTUALIZADAS[url] ?? ULTIMA_REVISION;
}

const MESES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

/** «2026-11-09» → «noviembre 2026». */
export function mesYAnio(fecha: string): string {
  const [anio, mes] = fecha.split('-').map(Number);
  return `${MESES[mes - 1]} ${anio}`;
}
