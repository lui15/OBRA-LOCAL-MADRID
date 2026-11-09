/*
 * Fuente única de precios y plazos de toda la web: /precios/, servicios, zonas, calculadora,
 * formulario, guías y datos estructurados. Precios orientativos para Madrid en 2026, IVA incluido,
 * mano de obra y materiales de gama media salvo que se indique.
 */

export type Calidad = 'basica' | 'media' | 'alta';

export interface Rango {
  minimo: number;
  maximo: number;
}

export const NOTA_PRECIOS =
  'Precios orientativos para Madrid en 2026. Te damos un presupuesto cerrado por escrito cuando vemos tu caso.';

export const CALIDADES: { id: Calidad; nombre: string; explicacion: string }[] = [
  { id: 'basica', nombre: 'Básica', explicacion: 'Materiales sencillos y resistentes, de gama estándar.' },
  { id: 'media', nombre: 'Media', explicacion: 'La más pedida: buenos materiales y acabados cuidados.' },
  { id: 'alta', nombre: 'Alta', explicacion: 'Materiales de gama alta y acabados a medida.' },
];

/* ------------------------------------------------------------ por m² y calidad */

export interface PrecioM2 {
  id: 'integral' | 'terraza' | 'local';
  trabajo: string;
  calidades: Record<Calidad, Rango>;
}

export const PRECIOS_M2: PrecioM2[] = [
  {
    id: 'integral',
    trabajo: 'Reforma integral de piso',
    calidades: { basica: { minimo: 500, maximo: 650 }, media: { minimo: 650, maximo: 850 }, alta: { minimo: 850, maximo: 1200 } },
  },
  {
    id: 'terraza',
    trabajo: 'Reforma de terraza',
    calidades: { basica: { minimo: 80, maximo: 120 }, media: { minimo: 120, maximo: 180 }, alta: { minimo: 180, maximo: 260 } },
  },
  {
    id: 'local',
    trabajo: 'Acondicionamiento de local u oficina',
    calidades: { basica: { minimo: 300, maximo: 450 }, media: { minimo: 450, maximo: 700 }, alta: { minimo: 700, maximo: 1000 } },
  },
];

export function precioM2(id: PrecioM2['id']): PrecioM2 {
  return PRECIOS_M2.find((p) => p.id === id)!;
}

/* ------------------------------------------------------------ por trabajo */

export type IdTrabajo =
  | 'bano'
  | 'cocina'
  | 'banera-plato'
  | 'pintura-piso'
  | 'pintura-m2'
  | 'gotele'
  | 'alisado'
  | 'tabique-pladur'
  | 'techo-pladur'
  | 'punto-luz'
  | 'suelo-laminado'
  | 'suelo-vinilico'
  | 'suelo-porcelanico'
  | 'tarima'
  | 'alicatado'
  | 'albanileria-hora'
  | 'humedades'
  | 'electricidad'
  | 'fontaneria'
  | 'ventana'
  | 'puerta';

export interface PrecioTrabajo {
  id: IdTrabajo;
  trabajo: string;
  minimo: number;
  maximo: number;
  /** Unidad del precio: si no hay, es el precio total del trabajo. */
  unidad?: '€/m²' | '€/m² de pared' | '€/h' | '€ por punto' | '€ por ventana' | '€ por puerta';
  /** Aclaración que acompaña al precio. */
  detalle?: string;
  plazo?: string;
}

export const PRECIOS_TRABAJO: PrecioTrabajo[] = [
  { id: 'bano', trabajo: 'Baño completo (4–6 m²)', minimo: 5500, maximo: 10000, detalle: 'Básica desde 5.000 €; alta hasta 13.000 €', plazo: '2–3 semanas' },
  { id: 'cocina', trabajo: 'Cocina completa (8–12 m², sin electrodomésticos)', minimo: 8000, maximo: 18000, plazo: '3–4 semanas' },
  { id: 'banera-plato', trabajo: 'Cambiar bañera por plato de ducha', minimo: 1000, maximo: 2200, plazo: '1–2 días' },
  { id: 'pintura-piso', trabajo: 'Pintura de piso de 80 m² (paredes y techos)', minimo: 1400, maximo: 2600, plazo: '3–5 días' },
  { id: 'pintura-m2', trabajo: 'Pintura', minimo: 8, maximo: 14, unidad: '€/m² de pared' },
  { id: 'gotele', trabajo: 'Quitar gotelé, alisar y pintar', minimo: 14, maximo: 22, unidad: '€/m² de pared', plazo: '1–2 semanas (piso completo)' },
  { id: 'alisado', trabajo: 'Alisado de paredes (sin gotelé)', minimo: 10, maximo: 16, unidad: '€/m²' },
  { id: 'tabique-pladur', trabajo: 'Tabique de pladur', minimo: 35, maximo: 55, unidad: '€/m²' },
  { id: 'techo-pladur', trabajo: 'Falso techo de pladur', minimo: 30, maximo: 50, unidad: '€/m²', plazo: '1–2 semanas (piso completo)' },
  { id: 'punto-luz', trabajo: 'Punto de luz empotrado en techo', minimo: 25, maximo: 40, unidad: '€ por punto' },
  { id: 'suelo-laminado', trabajo: 'Suelo laminado colocado', minimo: 25, maximo: 45, unidad: '€/m²', plazo: '2–4 días' },
  { id: 'suelo-vinilico', trabajo: 'Suelo vinílico colocado', minimo: 30, maximo: 55, unidad: '€/m²', plazo: '2–4 días' },
  { id: 'suelo-porcelanico', trabajo: 'Suelo porcelánico colocado', minimo: 45, maximo: 80, unidad: '€/m²', plazo: '1–2 semanas' },
  { id: 'tarima', trabajo: 'Tarima de madera colocada', minimo: 55, maximo: 95, unidad: '€/m²', plazo: '1 semana' },
  { id: 'alicatado', trabajo: 'Alicatado', minimo: 35, maximo: 60, unidad: '€/m²' },
  { id: 'albanileria-hora', trabajo: 'Albañilería (oficial por hora)', minimo: 25, maximo: 35, unidad: '€/h' },
  { id: 'humedades', trabajo: 'Tratamiento de humedades', minimo: 30, maximo: 60, unidad: '€/m²', detalle: 'Desde 400 €', plazo: '2–5 días' },
  { id: 'electricidad', trabajo: 'Instalación eléctrica completa (piso de 80 m²)', minimo: 3500, maximo: 7000, plazo: '1–2 semanas' },
  { id: 'fontaneria', trabajo: 'Fontanería completa (piso de 80 m²)', minimo: 2500, maximo: 5000, plazo: '1–2 semanas' },
  { id: 'ventana', trabajo: 'Ventana de aluminio con rotura de puente térmico, colocada', minimo: 400, maximo: 800, unidad: '€ por ventana' },
  { id: 'puerta', trabajo: 'Puerta interior colocada', minimo: 180, maximo: 450, unidad: '€ por puerta' },
];

export function precioTrabajo(id: IdTrabajo): PrecioTrabajo {
  return PRECIOS_TRABAJO.find((p) => p.id === id)!;
}

/** Mínimo del tratamiento de humedades, aunque la superficie sea pequeña. */
export const MINIMO_HUMEDADES = 400;
/** Baño completo: extremos por calidad que da la tabla («básica desde 5.000 €; alta hasta 13.000 €»). */
export const BANO_BASICA_DESDE = 5000;
export const BANO_ALTA_HASTA = 13000;

/* ------------------------------------------------------------ piso de 80 m² */

export const DESGLOSE_80M2: { partida: string; minimo: number; maximo: number }[] = [
  { partida: 'Demolición y desescombro', minimo: 3000, maximo: 5000 },
  { partida: 'Albañilería y tabiquería', minimo: 6000, maximo: 10000 },
  { partida: 'Instalación eléctrica', minimo: 4000, maximo: 6500 },
  { partida: 'Fontanería', minimo: 3000, maximo: 5000 },
  { partida: 'Baño completo', minimo: 6500, maximo: 9000 },
  { partida: 'Cocina', minimo: 9000, maximo: 15000 },
  { partida: 'Suelos', minimo: 3500, maximo: 6000 },
  { partida: 'Puertas y carpintería interior', minimo: 3000, maximo: 5500 },
  { partida: 'Alisado y pintura', minimo: 2000, maximo: 3500 },
  { partida: 'Ventanas', minimo: 4000, maximo: 8000 },
];

/** El total sale de sumar las partidas: así siempre cuadra. */
export const TOTAL_80M2: Rango = {
  minimo: DESGLOSE_80M2.reduce((n, p) => n + p.minimo, 0),
  maximo: DESGLOSE_80M2.reduce((n, p) => n + p.maximo, 0),
};

/* ------------------------------------------------------------ plazos de una integral */

export const PLAZO_INTEGRAL_TOTAL = '8–12 semanas';

export const FASES_INTEGRAL: { fase: string; plazo: string }[] = [
  { fase: 'Demolición', plazo: '1 semana' },
  { fase: 'Instalaciones (electricidad y fontanería)', plazo: '2–3 semanas' },
  { fase: 'Albañilería y tabiquería', plazo: '2–3 semanas' },
  { fase: 'Alicatados y suelos', plazo: '2 semanas' },
  { fase: 'Carpintería', plazo: '1 semana' },
  { fase: 'Pintura', plazo: '1 semana' },
  { fase: 'Remates y limpieza', plazo: '3–5 días' },
];

/* ------------------------------------------------------------ formato */

/** Punto de miles también en cifras de cuatro dígitos («5.500»), como se escribe en los precios. */
const EUROS = { format: (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.') };

/** 6500 → «6.500 €». */
export function euros(n: number): string {
  return `${EUROS.format(n)} €`;
}

/** Números sin símbolo: 6500 → «6.500». */
export function cifra(n: number): string {
  return EUROS.format(n);
}

/** {5500, 10000} → «5.500–10.000 €»; con unidad: «35–55 €/m²». */
export function rango(r: Rango, unidad = '€'): string {
  return `${cifra(r.minimo)}–${cifra(r.maximo)} ${unidad}`;
}

/** Precio de una fila de trabajo, con su unidad. */
export function textoPrecio(p: PrecioTrabajo): string {
  return rango(p, p.unidad ?? '€');
}

/** Redondeo a centenas para rangos calculados. */
export function redondear100(n: number): number {
  return Math.round(n / 100) * 100;
}

/* ------------------------------------------------------------ filas por servicio y por página */

/** Una fila de precio tal como se muestra: trabajo, rango con unidad, plazo y aclaración. */
export interface FilaPrecio {
  id: string;
  trabajo: string;
  minimo: number;
  maximo: number;
  unidad?: string;
  detalle?: string;
  plazo?: string;
}

const integral = precioM2('integral');
const FILAS_INTEGRAL: FilaPrecio[] = CALIDADES.map((c) => ({
  id: `integral-${c.id}`,
  trabajo: `Reforma integral, calidad ${c.nombre.toLowerCase()}`,
  ...integral.calidades[c.id],
  unidad: '€/m²',
  detalle: `Piso de 80 m²: ${rango({ minimo: integral.calidades[c.id].minimo * 80, maximo: integral.calidades[c.id].maximo * 80 })}`,
  plazo: `${PLAZO_INTEGRAL_TOTAL} (70–80 m²)`,
}));

const FILAS_M2: FilaPrecio[] = PRECIOS_M2.filter((p) => p.id !== 'integral').flatMap((p) =>
  CALIDADES.map((c) => ({
    id: `${p.id}-${c.id}`,
    trabajo: `${p.trabajo}, calidad ${c.nombre.toLowerCase()}`,
    ...p.calidades[c.id],
    unidad: '€/m²',
  })),
);

/** Todas las filas: trabajos sueltos y precios por m² según calidad. */
export const FILAS: FilaPrecio[] = [...PRECIOS_TRABAJO, ...FILAS_INTEGRAL, ...FILAS_M2];

export function fila(id: string): FilaPrecio {
  const f = FILAS.find((x) => x.id === id);
  if (!f) throw new Error(`Precio desconocido: ${id}`);
  return f;
}

/** Precios de cada servicio del catálogo. El primero es el principal (cabecera y datos estructurados). */
export const PRECIOS_SERVICIO: Record<string, string[]> = {
  'Reformas integrales': ['integral-basica', 'integral-media', 'integral-alta'],
  'Reforma de baño': ['bano', 'banera-plato'],
  'Reforma de cocinas': ['cocina'],
  Pintura: ['pintura-piso', 'pintura-m2'],
  Paredes: ['alisado', 'gotele'],
  Pladur: ['tabique-pladur', 'techo-pladur', 'punto-luz'],
  Albañilería: ['albanileria-hora', 'alicatado', 'humedades'],
};

/** Páginas cuyo trabajo concreto tiene sus propios precios (si no, se usan los de su servicio). */
export const PRECIOS_PAGINA: Record<string, string[]> = {
  'cambiar-banera-por-plato-ducha-madrid': ['banera-plato', 'bano'],
  'quitar-gotele-madrid': ['gotele', 'alisado', 'pintura-m2'],
  'reforma-piso-completo-madrid': ['integral-basica', 'integral-media', 'integral-alta', 'electricidad', 'fontaneria'],
};

export function filasDe(ids: string[]): FilaPrecio[] {
  return ids.map(fila);
}

/** Precios de una página: los suyos o los de su servicio. */
export function preciosDePagina(path: string, servicioCatalogo?: string): FilaPrecio[] {
  const ids = PRECIOS_PAGINA[path] ?? (servicioCatalogo ? PRECIOS_SERVICIO[servicioCatalogo] : undefined);
  return ids ? filasDe(ids) : [];
}

/** Rango con su unidad: «5.500–10.000 €», «500–650 €/m²». */
export function textoFila(f: FilaPrecio): string {
  return rango(f, f.unidad ?? '€');
}

/** Mínimo y máximo de una fila. El baño completo va de 5.000 € (básica) a 13.000 € (alta). */
export function extremosFila(f: FilaPrecio): Rango {
  return f.id === 'bano' ? { minimo: BANO_BASICA_DESDE, maximo: BANO_ALTA_HASTA } : { minimo: f.minimo, maximo: f.maximo };
}

/** Mínimo y máximo de la fila principal y de sus otras calidades (p. ej. las tres de una integral). */
export function extremosFilas(filas: FilaPrecio[]): Rango | null {
  if (!filas.length) return null;
  // Solo el mismo trabajo en sus distintas calidades: «integral-basica», «integral-media»…
  const trabajo = filas[0].id.split('-')[0];
  const mismas = filas.filter((f) => f.unidad === filas[0].unidad && f.id.split('-')[0] === trabajo).map(extremosFila);
  return { minimo: Math.min(...mismas.map((r) => r.minimo)), maximo: Math.max(...mismas.map((r) => r.maximo)) };
}

/** Precio de partida sin la palabra «Desde»: «5.000 €», «500 €/m²». */
export function valorDesde(f: FilaPrecio): string {
  return `${cifra(extremosFila(f).minimo)} ${f.unidad ?? '€'}`;
}

/** «Desde 5.000 €», «Desde 500 €/m²». */
export function desdeFila(f: FilaPrecio): string {
  return `Desde ${valorDesde(f)}`;
}

/** Los tres trabajos más pedidos, con su precio de partida (páginas de zona y portada). */
export const MAS_PEDIDOS: { trabajo: string; fila: FilaPrecio; desde: number; unidad: string; ruta: string }[] = [
  { trabajo: 'Baño completo', fila: fila('bano'), desde: BANO_BASICA_DESDE, unidad: '€', ruta: '/reforma-banos-madrid/' },
  { trabajo: 'Cocina completa', fila: fila('cocina'), desde: fila('cocina').minimo, unidad: '€', ruta: '/reforma-cocinas-madrid/' },
  { trabajo: 'Reforma integral', fila: fila('integral-basica'), desde: fila('integral-basica').minimo, unidad: '€/m²', ruta: '/reformas-integrales-madrid/' },
];
