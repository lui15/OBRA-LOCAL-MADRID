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
