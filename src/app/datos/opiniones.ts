/*
 * Opiniones de clientes, publicadas completas y sin editar (texto y estrellas tal como las dio cada
 * cliente). Por protección de datos solo se guarda el nombre y la inicial del apellido.
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
    nombre: 'Fernando R.',
    texto:
      'Hicieron la reforma integral de mi baño y el resultado es espectacular. Cumplieron los plazos al pie de la letra.',
    servicio: 'Reforma de baño',
    tipo: 'Baños',
    paginas: ['/reforma-banos-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Carmen M.',
    texto:
      'Gran equipo de profesionales. Nos asesoraron con la distribución y los materiales para la cocina y quedó increíble.',
    servicio: 'Reforma de cocina',
    tipo: 'Cocinas',
    paginas: ['/reforma-cocinas-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Adrián V.',
    texto:
      'Muy serios con las fechas de entrega, algo difícil de encontrar hoy en día en obras. Acabados de máxima calidad.',
    servicio: 'Reforma integral',
    tipo: 'Integral',
    paginas: ['/reformas-integrales-madrid/', '/'],
  },
  {
    estrellas: 5,
    nombre: 'Sofía N.',
    texto:
      'Excelente comunicación durante todo el proceso. Nos mantenían informados día a día del avance del proyecto.',
    servicio: 'Reforma de piso completo',
    tipo: 'Integral',
    paginas: ['/reforma-piso-completo-madrid/', '/como-trabajamos/'],
  },
  {
    estrellas: 5,
    nombre: 'Manuel T.',
    texto:
      'Reformaron el suelo y la pintura de toda la casa. Todo impecable, limpio y dentro del presupuesto acordado.',
    servicio: 'Suelos y pintura',
    tipo: 'Pintura',
    paginas: ['/pintores-madrid/'],
  },
  {
    estrellas: 4,
    nombre: 'Isabel B.',
    texto:
      'Muy contenta con el resultado final del alicatado. Tuvieron que corregir un pequeño detalle en un remate, pero lo solucionaron rápido.',
    servicio: 'Alicatado',
    tipo: 'Albañilería',
    paginas: ['/albanileria-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Alberto V.',
    texto:
      'Impecable trabajo de pladur e iluminación. Dejaron el local listo para abrir a tiempo. Repetiré para la próxima obra.',
    servicio: 'Pladur e iluminación',
    tipo: 'Pladur',
    paginas: ['/pladur-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Lucía D.',
    texto:
      'Grandes profesionales. Solucionaron un problema de humedades que llevaba años dándome dolores de cabeza.',
    servicio: 'Humedades',
    tipo: 'Albañilería',
    paginas: ['/albanileria-madrid/'],
  },
  {
    estrellas: 5,
    nombre: 'Enrique S.',
    texto:
      'Presupuesto detallado sin sorpresas al final. Da gusto trabajar con una empresa de reformas tan transparente.',
    servicio: 'Reforma',
    paginas: ['/precios/', '/'],
  },
  {
    estrellas: 5,
    nombre: 'Marina E.',
    texto:
      'Calidad, rapidez y buen precio. Transformaron mi terraza por completo. Los recomiendo totalmente en Madrid.',
    servicio: 'Reforma de terraza',
    paginas: ['/servicios/', '/'],
  },
];

export const TIPOS_OPINION: TipoOpinion[] = ['Integral', 'Baños', 'Cocinas', 'Pintura', 'Pladur', 'Albañilería'];

export const NOTA_OPINIONES =
  'Opiniones enviadas por clientes que contrataron la obra. Las publicamos completas, sin editar.';

/** Resumen calculado desde el archivo: «4,9 de 5 · 10 opiniones de clientes». */
export function resumenOpiniones(lista: Opinion[] = OPINIONES): { media: string; total: number; texto: string } {
  const total = lista.length;
  const media = total ? lista.reduce((n, o) => n + o.estrellas, 0) / total : 0;
  const mediaTexto = media.toFixed(1).replace('.', ',');
  return {
    media: mediaTexto,
    total,
    texto: `${mediaTexto} de 5 · ${total} ${total === 1 ? 'opinión' : 'opiniones'} de clientes`,
  };
}

/** Opiniones de una página. Si no tiene propias y se pide, 2 generales (las de la portada). */
export function opinionesDe(ruta: string, conGenerales = false): Opinion[] {
  const propias = OPINIONES.filter((o) => o.paginas.includes(ruta));
  if (propias.length || !conGenerales) return propias;
  return OPINIONES.filter((o) => o.paginas.includes('/')).slice(0, 2);
}
