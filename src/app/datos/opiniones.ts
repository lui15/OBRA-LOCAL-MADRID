/*
 * Reseñas de clientes en la ficha de Google, copiadas completas y sin editar (texto y estrellas tal
 * como las dio cada cliente). Por protección de datos solo se guarda el nombre y la inicial del apellido.
 *
 * No se añade Review ni AggregateRating a los datos estructurados: Google no muestra estrellas de
 * opiniones que una empresa publica sobre sí misma y puede imponer una acción manual.
 */

export type TipoOpinion = 'Integral' | 'Baños' | 'Cocinas' | 'Pintura' | 'Pladur' | 'Albañilería';

export interface Opinion {
  estrellas: 1 | 2 | 3 | 4 | 5;
  /** Nombre y la inicial del apellido. */
  nombre: string;
  texto: string;
  /** Tipo de obra que se muestra en la tarjeta. */
  servicio: string;
  /** Filtro de /opiniones/. Sin tipo, solo aparece en «Todas». */
  tipo?: TipoOpinion;
  /** Rutas donde se muestra, con barra final. */
  paginas: string[];
  /** Solo se muestra si se rellena. */
  fecha?: string;
}

export const OPINIONES: Opinion[] = [
  {
    estrellas: 5,
    nombre: 'Estefany C.',
    texto:
      'Muy contenta con la reforma de mi baño. Han hecho un trabajo excelente, cuidando cada detalle y demostrando mucha profesionalidad. El resultado ha quedado precioso, moderno y con unos acabados impecables. Fueron responsables, atentos y cumplieron con lo acordado. Sin duda, una empresa totalmente recomendable. ¡Muchas gracias por el gran trabajo!',
    servicio: 'Reforma de baño',
    tipo: 'Baños',
    paginas: ['/', '/reforma-banos-madrid/', '/opiniones/'],
    fecha: 'noviembre de 2026',
  },
];

export const TIPOS_OPINION: TipoOpinion[] = ['Integral', 'Baños', 'Cocinas', 'Pintura', 'Pladur', 'Albañilería'];

export const NOTA_OPINIONES =
  'Reseñas que nuestros clientes han dejado en nuestra ficha de Google, copiadas sin editar.';

/** Tipos de obra que tienen al menos una opinión (los filtros vacíos no se muestran). */
export const TIPOS_CON_OPINIONES: TipoOpinion[] = TIPOS_OPINION.filter((t) => OPINIONES.some((o) => o.tipo === t));

/** Resumen calculado desde el archivo: «5,0 de 5 · 1 opinión en Google». */
export function resumenOpiniones(lista: Opinion[] = OPINIONES): { media: string; total: number; texto: string } {
  const total = lista.length;
  const media = total ? lista.reduce((n, o) => n + o.estrellas, 0) / total : 0;
  const mediaTexto = media.toFixed(1).replace('.', ',');
  return {
    media: mediaTexto,
    total,
    texto: `${mediaTexto} de 5 · ${total} ${total === 1 ? 'opinión' : 'opiniones'} en Google`,
  };
}

/** Opiniones de una página. Si no tiene propias y se pide, hasta 2 generales (las de la portada). */
export function opinionesDe(ruta: string, conGenerales = false): Opinion[] {
  const propias = OPINIONES.filter((o) => o.paginas.includes(ruta));
  if (propias.length || !conGenerales) return propias;
  return OPINIONES.filter((o) => o.paginas.includes('/')).slice(0, 2);
}
