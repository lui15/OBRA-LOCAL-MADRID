import { Precio, buscarServicio, formatearPrecio } from './catalogo-servicios';

/*
 * Fuente única de precios para /precios/ y la calculadora. Todo sale de catalogo-servicios.ts.
 * Lo que el catálogo no tiene se marca PENDIENTE("...") y no se calcula.
 */

type Calidad = 'basica' | 'media' | 'alta';

/** «40–60 m²» → [40, 60]; si no son metros cuadrados con dos cifras, null. */
function metros(medidas: string): [number, number] | null {
  const m = medidas.match(/^(\d+)\s*[–-]\s*(\d+)\s*m²$/);
  return m ? [Number(m[1]), Number(m[2])] : null;
}

const redondear5 = (n: number) => Math.round(n / 5) * 5;

/** €/m² que se deducen de los rangos del catálogo: precio mínimo entre m² máximos y al revés. */
function euroM2(servicio: string): { minimo: number; maximo: number } | null {
  const filas = (buscarServicio(servicio)?.precios ?? [])
    .map((p) => ({ p, m: metros(p.medidas) }))
    .filter((x): x is { p: Precio; m: [number, number] } => x.m !== null);
  if (!filas.length) return null;
  return {
    minimo: redondear5(Math.min(...filas.map(({ p, m }) => p.minimo / m[1]))),
    maximo: redondear5(Math.max(...filas.map(({ p, m }) => p.maximo / m[0]))),
  };
}

export interface FilaEuroM2 {
  tipo: string;
  /** Rango deducido del catálogo, o PENDIENTE si el catálogo no da metros. */
  deducido: string;
  basica: string;
  media: string;
  alta: string;
}

const TIPOS_M2: [string, string][] = [
  ['Reforma integral', 'Reformas integrales'],
  ['Cocina', 'Reforma de cocinas'],
  ['Baño', 'Reforma de baño'],
  ['Pintura', 'Pintura'],
  ['Pladur', 'Pladur'],
  ['Alisado de paredes', 'Paredes'],
  ['Albañilería', 'Albañilería'],
];

export const TABLA_EURO_M2: FilaEuroM2[] = TIPOS_M2.map(([tipo, servicio]) => {
  const r = euroM2(servicio);
  return {
    tipo,
    deducido: r
      ? `${formatearPrecio(r.minimo)}–${formatearPrecio(r.maximo)}/m²`
      : `PENDIENTE("€/m² de ${tipo.toLowerCase()}: el catálogo no lo da por metros")`,
    basica: `PENDIENTE("€/m² de ${tipo.toLowerCase()} en calidad básica")`,
    media: `PENDIENTE("€/m² de ${tipo.toLowerCase()} en calidad media")`,
    alta: `PENDIENTE("€/m² de ${tipo.toLowerCase()} en calidad alta")`,
  };
});

/** Rango del catálogo para reformas integrales según los metros. */
export function rangoIntegral(m2: number): { precio: Precio; aviso?: string } {
  const p = buscarServicio('Reformas integrales')!.precios;
  if (m2 < 40) {
    return { precio: p[0], aviso: 'El catálogo empieza en 40 m²: se muestra el rango de 40–60 m².' };
  }
  if (m2 < 60) return { precio: p[0] };
  if (m2 <= 90) return { precio: p[1] };
  return { precio: p[2] };
}

/** Presupuesto de ejemplo de un piso de 80 m². Las partidas aún no tienen importe confirmado. */
export const EJEMPLO_80M2 = {
  total: rangoIntegral(80).precio,
  partidas: [
    'Demolición y desescombro',
    'Albañilería',
    'Fontanería',
    'Electricidad',
    'Alicatado y solados',
    'Carpintería',
    'Pintura',
    'Gestión y licencia',
  ].map((partida) => ({
    partida,
    importe: `PENDIENTE("importe de ${partida.toLowerCase()} en un piso de 80 m²")`,
  })),
};

/** Plazos por tipo de reforma: no hay datos confirmados todavía. */
export const PLAZOS: { tipo: string; plazo: string }[] = [
  'Reforma integral',
  'Reforma de piso completo',
  'Reforma de cocina',
  'Reforma de baño',
  'Cambio de bañera por plato de ducha',
  'Pintura de una vivienda',
  'Quitar gotelé y alisar',
  'Pladur',
].map((tipo) => ({ tipo, plazo: `PENDIENTE("plazo habitual de ${tipo.toLowerCase()}")` }));

/* ------------------------------------------------------------ calculadora */

export interface EntradaCalculadora {
  m2: number;
  cocina: 'no' | 'parcial' | 'completa';
  banos: number;
  tipoBano: 'parcial' | 'completo';
  pintura: boolean;
  suelos: boolean;
  calidad: Calidad;
  redistribucion: boolean;
}

export interface LineaCalculo {
  concepto: string;
  minimo: number;
  maximo: number;
}

export interface ResultadoCalculo {
  minimo: number;
  maximo: number;
  lineas: LineaCalculo[];
  /** Conceptos elegidos que no tienen precio en el catálogo. */
  sinPrecio: string[];
  avisos: string[];
  plazo: string;
  /** Servicio que se preselecciona en el formulario. */
  servicio: string;
}

/** Tramo del rango según la calidad: no cambia los precios, solo dónde se sitúa tu caso. */
const TRAMOS: Record<Calidad, [number, number]> = {
  basica: [0, 0.55],
  media: [0.2, 0.8],
  alta: [0.45, 1],
};

const redondear100 = (n: number) => Math.round(n / 100) * 100;

function tramo(p: Precio, calidad: Calidad, veces = 1): { minimo: number; maximo: number } {
  const [a, b] = TRAMOS[calidad];
  const ancho = p.maximo - p.minimo;
  return {
    minimo: redondear100((p.minimo + ancho * a) * veces),
    maximo: redondear100((p.minimo + ancho * b) * veces),
  };
}

export function calcularReforma(entrada: EntradaCalculadora): ResultadoCalculo | null {
  // Mientras se escribe puede llegar cualquier número: el cálculo siempre usa valores válidos.
  const e = { ...entrada, m2: Math.min(400, Math.max(20, Math.round(entrada.m2) || 20)), banos: Math.min(4, Math.max(0, Math.round(entrada.banos) || 0)) };
  const lineas: LineaCalculo[] = [];
  const sinPrecio: string[] = [];
  const avisos: string[] = [];
  let servicio = 'Reformas integrales';

  if (e.redistribucion) {
    const { precio, aviso } = rangoIntegral(e.m2);
    if (aviso) avisos.push(aviso);
    lineas.push({ concepto: `Reforma integral con redistribución (${precio.medidas})`, ...tramo(precio, e.calidad) });
    avisos.push('Con redistribución se usa el rango de reforma integral, que ya incluye cocina, baños y acabados.');
  } else {
    const cocina = buscarServicio('Reforma de cocinas')!.precios;
    const bano = buscarServicio('Reforma de baño')!.precios;
    const pintura = buscarServicio('Pintura')!.precios;

    if (e.cocina !== 'no') {
      const p = e.cocina === 'completa' ? cocina[2] : cocina[1];
      lineas.push({ concepto: `Cocina: ${p.medidas.toLowerCase()}`, ...tramo(p, e.calidad) });
    }
    if (e.banos > 0) {
      const p = e.tipoBano === 'completo' ? bano[2] : bano[1];
      const n = Math.min(e.banos, 4);
      lineas.push({ concepto: `${n} ${n === 1 ? 'baño' : 'baños'}: ${p.medidas.toLowerCase()}`, ...tramo(p, e.calidad, n) });
    }
    if (e.pintura) {
      lineas.push({ concepto: `Pintura: ${pintura[2].detalle.toLowerCase()}`, ...tramo(pintura[2], e.calidad) });
      avisos.push('El catálogo da la pintura de vivienda como un único rango: no se ajusta por metros.');
    }
    if (e.suelos) sinPrecio.push('Suelos y tarimas: PENDIENTE("precio de suelos por m²")');

    const elegidos = [e.cocina !== 'no', e.banos > 0, e.pintura].filter(Boolean).length;
    if (elegidos === 1) {
      servicio = e.cocina !== 'no' ? 'Reforma de cocinas' : e.banos > 0 ? 'Reforma de baño' : 'Pintura';
    }
  }

  if (!lineas.length) return null;

  return {
    minimo: lineas.reduce((n, l) => n + l.minimo, 0),
    maximo: lineas.reduce((n, l) => n + l.maximo, 0),
    lineas,
    sinPrecio,
    avisos,
    plazo: 'PENDIENTE("plazo orientativo según el tipo de reforma")',
    servicio,
  };
}

export const ENTRADA_INICIAL: EntradaCalculadora = {
  m2: 70,
  cocina: 'completa',
  banos: 1,
  tipoBano: 'completo',
  pintura: true,
  suelos: false,
  calidad: 'media',
  redistribucion: false,
};
