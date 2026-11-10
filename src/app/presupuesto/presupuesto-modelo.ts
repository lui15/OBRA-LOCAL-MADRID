/*
 * Lógica del formulario de presupuesto, sin Angular: tipos de obra, preguntas, precio orientativo,
 * resumen, mensaje de WhatsApp y registro para la Central. Los precios salen de datos/precios.ts.
 */
import {
  BANO_ALTA_HASTA,
  BANO_BASICA_DESDE,
  CALIDADES,
  Calidad,
  MINIMO_HUMEDADES,
  cifra,
  precioM2,
  precioTrabajo,
  redondear100,
  textoPrecio,
} from '../datos/precios';

export type IdObra = 'piso' | 'bano' | 'cocina' | 'pintura' | 'suelos' | 'pladur' | 'albanileria' | 'local' | 'terraza' | 'otro';

export interface Obra {
  id: IdObra;
  /** Texto de la tarjeta del paso 1. */
  nombre: string;
  /** Valor de la columna `service` de la Central. */
  servicio: string;
  /** Trazo SVG del icono (24×24). */
  icono: string;
}

export const OBRAS: Obra[] = [
  { id: 'piso', nombre: 'Piso completo', servicio: 'Reforma integral de piso', icono: 'M3 11 12 4l9 7v9H3v-9Zm6 9v-6h6v6' },
  { id: 'bano', nombre: 'Baño', servicio: 'Reforma de baño', icono: 'M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Zm2 0V6a2 2 0 0 1 4 0M8 19l-1 2m10-2 1 2' },
  { id: 'cocina', nombre: 'Cocina', servicio: 'Reforma de cocina', icono: 'M4 10h16v10H4V10Zm0 4h16M8 6h0m4 0h0m4 0h0M4 3h16v3H4V3' },
  { id: 'pintura', nombre: 'Pintura o gotelé', servicio: 'Pintura o gotelé', icono: 'M4 4h13v5H4V4Zm13 2h3v6h-8v3m-2 0h4v6h-4v-6' },
  { id: 'suelos', nombre: 'Suelos', servicio: 'Suelos', icono: 'M3 15h18v5H3v-5Zm0 0 4-4h10l4 4M9 15v5m6-5v5' },
  { id: 'pladur', nombre: 'Pladur y techos', servicio: 'Pladur y techos', icono: 'M3 5h18M5 5v15m14-15v15M5 10h14M9 14h2m4 0h0' },
  { id: 'albanileria', nombre: 'Albañilería o humedades', servicio: 'Albañilería o humedades', icono: 'M3 6h8v4H3V6Zm10 0h8v4h-8V6ZM7 10h10v4H7v-4ZM3 14h8v4H3v-4Zm10 0h8v4h-8v-4Z' },
  { id: 'local', nombre: 'Local u oficina', servicio: 'Reforma de local u oficina', icono: 'M3 9l2-5h14l2 5M3 9h18v11H3V9Zm6 11v-6h6v6' },
  { id: 'terraza', nombre: 'Terraza', servicio: 'Reforma de terraza', icono: 'M3 20h18M5 20V9h14v11M3 9l9-5 9 5M9 20v-5h6v5' },
  { id: 'otro', nombre: 'Otro', servicio: 'Otra reforma', icono: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-4-9h8m-4-4v8' },
];

export function obraDe(id: IdObra | ''): Obra | undefined {
  return OBRAS.find((o) => o.id === id);
}

/** Servicio de las páginas (catálogo) → tipo de obra del paso 1. */
const OBRA_DE_SERVICIO: Record<string, IdObra> = {
  'Reformas integrales': 'piso',
  'Reforma de baño': 'bano',
  'Reforma de cocinas': 'cocina',
  Pintura: 'pintura',
  Paredes: 'pintura',
  Pladur: 'pladur',
  Albañilería: 'albanileria',
  'Reforma de locales': 'local',
  'Reforma de terrazas': 'terraza',
  'Tratamiento de humedades': 'albanileria',
  Alicatados: 'albanileria',
  'Instalación de suelos': 'suelos',
  'Cambiar ventanas': 'otro',
};

export function obraDeServicio(servicio: string): IdObra | '' {
  return OBRA_DE_SERVICIO[servicio] ?? (OBRAS.some((o) => o.id === servicio) ? (servicio as IdObra) : '');
}

/* ------------------------------------------------------------ preguntas del paso 2 */

/** Tramos de metros: el texto del botón y los metros con los que se calcula (máximo null = «más de»). */
interface Tramo {
  texto: string;
  min: number;
  max: number | null;
}

const T_PISO: Tramo[] = [
  { texto: 'Menos de 50 m²', min: 35, max: 50 },
  { texto: '50–80 m²', min: 50, max: 80 },
  { texto: '80–120 m²', min: 80, max: 120 },
  { texto: 'Más de 120 m²', min: 120, max: null },
];
const T_COCINA: Tramo[] = [
  { texto: 'Menos de 8 m²', min: 5, max: 8 },
  { texto: '8–12 m²', min: 8, max: 12 },
  { texto: 'Más de 12 m²', min: 12, max: null },
];
const T_PEQUENO: Tramo[] = [
  { texto: 'Menos de 10 m²', min: 5, max: 10 },
  { texto: '10–30 m²', min: 10, max: 30 },
  { texto: '30–60 m²', min: 30, max: 60 },
  { texto: 'Más de 60 m²', min: 60, max: null },
];
const T_TERRAZA: Tramo[] = [
  { texto: 'Menos de 10 m²', min: 5, max: 10 },
  { texto: '10–20 m²', min: 10, max: 20 },
  { texto: '20–40 m²', min: 20, max: 40 },
  { texto: 'Más de 40 m²', min: 40, max: null },
];
const T_LOCAL: Tramo[] = [
  { texto: 'Menos de 50 m²', min: 30, max: 50 },
  { texto: '50–100 m²', min: 50, max: 100 },
  { texto: '100–200 m²', min: 100, max: 200 },
  { texto: 'Más de 200 m²', min: 200, max: null },
];

export interface PreguntasObra {
  metros: { titulo: string; tramos: Tramo[]; obligatorio: boolean };
  /** Pregunta extra de botones (estado del piso, número de baños o gotelé). */
  extra?: { clave: 'estado' | 'banos' | 'gotele'; titulo: string; opciones: string[] };
  /** Casillas opcionales. */
  opciones?: { titulo: string; lista: string[] };
  /** Texto corto opcional. */
  comentario: boolean;
  /** Qué significa cada calidad en esta obra (si cambia respecto a la general). */
  calidades?: Partial<Record<Calidad, string>>;
}

export const PREGUNTAS: Record<IdObra, PreguntasObra> = {
  piso: {
    metros: { titulo: '¿Cuántos metros tiene el piso?', tramos: T_PISO, obligatorio: true },
    extra: { clave: 'estado', titulo: '¿En qué estado está?', opciones: ['Para entrar a vivir', 'Antiguo, hay que renovarlo todo'] },
    comentario: false,
  },
  bano: {
    metros: { titulo: '', tramos: [], obligatorio: false },
    extra: { clave: 'banos', titulo: '¿Cuántos baños?', opciones: ['1 baño', '2 baños'] },
    opciones: { titulo: '¿Qué quieres cambiar? (opcional)', lista: ['Cambiar bañera por plato', 'Cambiar sanitarios', 'Alicatado nuevo', 'Mueble de lavabo'] },
    comentario: false,
  },
  cocina: {
    metros: { titulo: '¿Cuántos metros tiene la cocina?', tramos: T_COCINA, obligatorio: true },
    opciones: { titulo: '¿Qué incluye? (opcional)', lista: ['Muebles nuevos', 'Encimera', 'Cambiar distribución', 'Electrodomésticos'] },
    comentario: false,
  },
  pintura: {
    metros: { titulo: '¿Cuántos metros tiene el piso?', tramos: T_PISO, obligatorio: true },
    extra: { clave: 'gotele', titulo: '¿Hay gotelé?', opciones: ['Sí', 'No'] },
    comentario: false,
  },
  suelos: {
    metros: { titulo: '¿Cuántos metros de suelo, más o menos?', tramos: T_PEQUENO, obligatorio: true },
    comentario: true,
    calidades: { basica: 'Suelo laminado.', media: 'Suelo vinílico.', alta: 'Tarima de madera.' },
  },
  pladur: {
    metros: { titulo: '¿Cuántos metros, más o menos?', tramos: T_PEQUENO, obligatorio: true },
    comentario: true,
  },
  albanileria: {
    metros: { titulo: '¿Cuántos metros, más o menos?', tramos: T_PEQUENO, obligatorio: true },
    comentario: true,
  },
  local: {
    metros: { titulo: '¿Cuántos metros tiene el local?', tramos: T_LOCAL, obligatorio: true },
    comentario: true,
  },
  terraza: {
    metros: { titulo: '¿Cuántos metros tiene la terraza?', tramos: T_TERRAZA, obligatorio: true },
    opciones: { titulo: '¿Qué quieres hacer? (opcional)', lista: ['Suelo nuevo', 'Impermeabilizar', 'Cerramiento', 'Iluminación'] },
    comentario: true,
  },
  otro: {
    metros: { titulo: '¿Cuántos metros, más o menos? (opcional)', tramos: T_PEQUENO, obligatorio: false },
    comentario: true,
  },
};

/** Metros exactos (por ejemplo, de la calculadora) → texto del tramo que los contiene. */
export function tramoPara(obra: IdObra, metros: string): string {
  const tramos = PREGUNTAS[obra].metros.tramos;
  if (tramos.some((t) => t.texto === metros)) return metros;
  const n = Number(metros);
  if (!Number.isFinite(n) || n <= 0) return '';
  return (tramos.find((t) => n <= (t.max ?? Infinity)) ?? tramos[tramos.length - 1])?.texto ?? '';
}

export function explicacionCalidad(obra: IdObra | '', calidad: Calidad): string {
  const propia = obra ? PREGUNTAS[obra].calidades?.[calidad] : undefined;
  const general = CALIDADES.find((c) => c.id === calidad)!.explicacion;
  return propia ? `${propia} ${general}` : general;
}

/* ------------------------------------------------------------ pasos 3 y 4 */

export const CUANDO = ['Lo antes posible', '1–3 meses', 'Más de 3 meses', 'Solo me informo'];
export const INMUEBLES = ['Vivienda', 'Local u oficina'];

/* ------------------------------------------------------------ estado del formulario */

export interface DatosFormulario {
  obra: IdObra | '';
  metros: string;
  estado: string;
  banos: string;
  gotele: string;
  opciones: string[];
  calidad: Calidad | '';
  comentario: string;
  zona: string;
  cuando: string;
  tipoInmueble: string;
  nombre: string;
  /** Solo los 9 dígitos españoles; el prefijo +34 es fijo. */
  telefono: string;
  correo: string;
  mensaje: string;
  privacidad: boolean;
}

export function datosVacios(): DatosFormulario {
  return {
    obra: '',
    metros: '',
    estado: '',
    banos: '',
    gotele: '',
    opciones: [],
    calidad: 'media',
    comentario: '',
    zona: '',
    cuando: '',
    tipoInmueble: '',
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: '',
    privacidad: false,
  };
}

/* ------------------------------------------------------------ validación */

export type Errores = Partial<Record<keyof DatosFormulario, string>>;

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Deja solo los 9 dígitos: acepta «+34 612 345 678», «0034612345678» o «612 34 56 78». */
export function limpiarTelefono(valor: string): string {
  const d = valor.replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('34')) return d.slice(2);
  if (d.length === 13 && d.startsWith('0034')) return d.slice(4);
  return d;
}

export function telefonoValido(valor: string): boolean {
  return /^[6789]\d{8}$/.test(limpiarTelefono(valor));
}

/** «612345678» → «+34 612 345 678». */
export function telefonoCompleto(valor: string): string {
  const d = limpiarTelefono(valor);
  return `+34 ${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6)}`.trim();
}

export function erroresPaso(paso: number, d: DatosFormulario): Errores {
  const e: Errores = {};
  if (paso === 0 && !d.obra) e.obra = 'Elige qué quieres reformar.';
  if (paso === 1 && d.obra) {
    const p = PREGUNTAS[d.obra];
    if (p.metros.obligatorio && !d.metros) e.metros = 'Elige los metros aproximados.';
    if (p.extra && !d[p.extra.clave]) e[p.extra.clave] = 'Elige una opción.';
    if (!d.calidad) e.calidad = 'Elige una calidad.';
  }
  if (paso === 2) {
    if (!d.zona.trim()) e.zona = 'Escribe el municipio o el barrio.';
    if (!d.cuando) e.cuando = 'Dinos cuándo quieres empezar.';
    if (!d.tipoInmueble) e.tipoInmueble = 'Elige vivienda o local.';
  }
  if (paso === 3) {
    if (!d.nombre.trim()) e.nombre = 'Escribe tu nombre.';
    if (!d.telefono.trim()) e.telefono = 'Escribe tu teléfono.';
    else if (!telefonoValido(d.telefono)) e.telefono = 'Revisa el teléfono: son 9 cifras y empieza por 6, 7, 8 o 9.';
    if (d.correo.trim() && !REGEX_CORREO.test(d.correo.trim())) e.correo = 'Revisa el correo o déjalo vacío.';
    if (!d.privacidad) e.privacidad = 'Necesitamos que aceptes la política de privacidad.';
  }
  return e;
}

/* ------------------------------------------------------------ precio orientativo */

export interface Estimacion {
  /** Frase que se muestra: «Una reforma así suele costar entre 6.500 y 8.500 €». */
  texto: string;
  /** Rango corto para el panel y el correo: «6.500 € – 8.500 €». */
  corto: string;
  minimo?: number;
  maximo?: number;
}

function porMetros(tramo: Tramo, min: number, max: number, minimoAbsoluto = 0): Estimacion {
  const a = Math.max(minimoAbsoluto, redondear100(tramo.min * min));
  if (tramo.max === null) {
    return { texto: `Una reforma así suele costar desde ${cifra(a)} €`, corto: `desde ${cifra(a)} €`, minimo: a };
  }
  const b = Math.max(a, redondear100(tramo.max * max));
  return entre(a, b);
}

function entre(a: number, b: number): Estimacion {
  return {
    texto: `Una reforma así suele costar entre ${cifra(a)} y ${cifra(b)} €`,
    corto: `${cifra(a)} € – ${cifra(b)} €`,
    minimo: a,
    maximo: b,
  };
}

function tarifa(texto: string): Estimacion {
  return { texto, corto: texto };
}

export function estimar(d: DatosFormulario): Estimacion | null {
  if (!d.obra || !d.calidad) return null;
  const q = PREGUNTAS[d.obra];
  const tramo = q.metros.tramos.find((t) => t.texto === d.metros);
  const calidad = d.calidad;

  switch (d.obra) {
    case 'piso': {
      if (!tramo) return null;
      const r = precioM2('integral').calidades[calidad];
      return porMetros(tramo, r.minimo, r.maximo);
    }
    case 'terraza': {
      if (!tramo) return null;
      const r = precioM2('terraza').calidades[calidad];
      return porMetros(tramo, r.minimo, r.maximo);
    }
    case 'local': {
      if (!tramo) return null;
      const r = precioM2('local').calidades[calidad];
      return porMetros(tramo, r.minimo, r.maximo);
    }
    case 'bano': {
      if (!d.banos) return null;
      const n = d.banos.startsWith('2') ? 2 : 1;
      if (d.opciones.length === 1 && d.opciones[0] === 'Cambiar bañera por plato') {
        const p = precioTrabajo('banera-plato');
        return entre(p.minimo * n, p.maximo * n);
      }
      const p = precioTrabajo('bano');
      const min = calidad === 'basica' ? BANO_BASICA_DESDE : p.minimo;
      const max = calidad === 'alta' ? BANO_ALTA_HASTA : p.maximo;
      return entre(min * n, max * n);
    }
    case 'cocina': {
      if (!tramo) return null;
      const p = precioTrabajo('cocina');
      return entre(p.minimo, p.maximo);
    }
    case 'pintura': {
      if (!tramo || !d.gotele) return null;
      if (d.gotele === 'Sí') {
        return tarifa(`Quitar el gotelé, alisar y pintar suele costar ${textoPrecio(precioTrabajo('gotele'))}`);
      }
      // Pintura de paredes y techos: el precio de un piso de 80 m², proporcional a los metros.
      const p = precioTrabajo('pintura-piso');
      return porMetros(tramo, p.minimo / 80, p.maximo / 80);
    }
    case 'suelos': {
      if (!tramo) return null;
      const p = precioTrabajo(calidad === 'basica' ? 'suelo-laminado' : calidad === 'media' ? 'suelo-vinilico' : 'tarima');
      return porMetros(tramo, p.minimo, p.maximo);
    }
    case 'pladur': {
      if (!tramo) return null;
      const techo = precioTrabajo('techo-pladur');
      const tabique = precioTrabajo('tabique-pladur');
      return porMetros(tramo, Math.min(techo.minimo, tabique.minimo), Math.max(techo.maximo, tabique.maximo));
    }
    case 'albanileria': {
      const h = precioTrabajo('humedades');
      const a = precioTrabajo('albanileria-hora');
      return tarifa(`Humedades: ${textoPrecio(h)} (desde ${cifra(MINIMO_HUMEDADES)} €). Albañilería: ${textoPrecio(a)}`);
    }
    default:
      return null;
  }
}

/* ------------------------------------------------------------ resumen y mensajes */

export function nombreCalidad(c: Calidad | ''): string {
  return CALIDADES.find((x) => x.id === c)?.nombre ?? '';
}

/** Líneas legibles con todo lo elegido (sin datos de contacto ni precio: se pueden mostrar al cliente). */
export function lineasProyecto(d: DatosFormulario): string[] {
  const obra = obraDe(d.obra);
  const l: string[] = [];
  if (obra) l.push(`Trabajo: ${obra.nombre}`);
  if (d.metros) l.push(`Metros: ${d.metros}`);
  if (d.banos) l.push(`Baños: ${d.banos}`);
  if (d.estado) l.push(`Estado: ${d.estado}`);
  if (d.gotele) l.push(`Gotelé: ${d.gotele}`);
  if (d.opciones.length) l.push(`Incluye: ${d.opciones.join(', ')}`);
  if (d.calidad && obra) l.push(`Calidad: ${nombreCalidad(d.calidad)}`);
  if (d.comentario.trim()) l.push(`Detalle: ${d.comentario.trim()}`);
  if (d.zona.trim()) l.push(`Zona: ${d.zona.trim()}`);
  if (d.tipoInmueble) l.push(`Inmueble: ${d.tipoInmueble}`);
  if (d.cuando) l.push(`Cuándo: ${d.cuando}`);
  return l;
}

/**
 * Descripción completa para la Central y el correo del negocio. Es interna: lleva el precio
 * orientativo calculado y la nota de la calculadora, que el cliente no ve en el formulario.
 */
export function resumen(d: DatosFormulario, notaInterna = ''): string {
  const l = lineasProyecto(d);
  const est = obraDe(d.obra) ? estimar(d) : null;
  if (est) l.push(`Precio orientativo (interno): ${est.corto}`);
  if (d.mensaje.trim()) l.push(`Mensaje: ${d.mensaje.trim()}`);
  if (notaInterna.trim()) l.push(notaInterna.trim());
  return l.join('\n');
}

/** Mensaje de WhatsApp con lo que ya se ha rellenado. Sin precios: lo envía el cliente. */
export function mensajeWhatsApp(d: DatosFormulario): string {
  const obra = obraDe(d.obra);
  const inicio = obra
    ? `Hola, quiero pedir presupuesto para ${obra.nombre.toLowerCase()}.`
    : 'Hola, quiero pedir presupuesto para una reforma.';
  const resto = lineasProyecto(d).filter((x) => !x.startsWith('Trabajo:'));
  if (d.nombre.trim()) resto.push(`Me llamo ${d.nombre.trim()}.`);
  if (d.mensaje.trim()) resto.push(d.mensaje.trim());
  return [inicio, ...resto].join('\n');
}

export function mensajeFotos(d: DatosFormulario): string {
  const obra = obraDe(d.obra);
  return `Hola, acabo de pedir presupuesto para ${obra ? obra.nombre.toLowerCase() : 'una reforma'}, os envío fotos`;
}

/* ------------------------------------------------------------ registro para la Central */

export interface Utm {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

/**
 * `details` de la tabla public.requests. El precio orientativo se calcula aquí, en segundo plano,
 * solo para el panel: el formulario no lo muestra. Solo valores planos (texto, número o lista):
 * el panel de gestión los muestra como etiquetas y no lee objetos anidados.
 */
export function detalles(d: DatosFormulario, paginaOrigen: string, utm: Utm): Record<string, unknown> {
  const est = estimar(d);
  const limpio = (v: string) => v.trim() || null;
  return {
    trabajo: obraDe(d.obra)?.nombre ?? null,
    metros: limpio(d.metros),
    estado: limpio(d.estado || d.banos || (d.gotele ? `Gotelé: ${d.gotele}` : '')),
    opciones: d.opciones.length ? d.opciones : null,
    calidad: limpio(nombreCalidad(d.calidad)),
    zona: limpio(d.zona),
    tipoInmueble: limpio(d.tipoInmueble),
    cuando: limpio(d.cuando),
    precioOrientativo: est?.corto ?? null,
    precioMinimo: est?.minimo ?? null,
    precioMaximo: est?.maximo ?? null,
    paginaOrigen: limpio(paginaOrigen),
    utm_source: utm.utm_source ?? null,
    utm_medium: utm.utm_medium ?? null,
    utm_campaign: utm.utm_campaign ?? null,
  };
}

/** Valor del lead para Google Ads: punto medio del precio orientativo × 0,12. */
export function valorLead(d: DatosFormulario): number | null {
  const est = estimar(d);
  if (est?.minimo === undefined) return null;
  const medio = est.maximo !== undefined ? (est.minimo + est.maximo) / 2 : est.minimo;
  return Math.round(medio * 0.12);
}
