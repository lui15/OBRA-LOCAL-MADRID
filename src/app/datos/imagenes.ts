/** Dimensiones reales de las imágenes de public/images. Cada una existe en 1200, 800, 480 y 240 px. */
interface Imagen {
  w: number;
  h: number;
  /** Anchos reales de las variantes -800, -240 y -480. */
  m: number;
  p: number;
  c: number;
}

export const IMAGENES: Record<string, Imagen> = {
  '/images/albanileria.webp': {
    w: 1200,
    h: 1800,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/albanileria-ejemplo.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/paredes.webp': {
    w: 1199,
    h: 1952,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/paredes-ejemplo.webp': {
    w: 1200,
    h: 1600,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/pintura.webp': {
    w: 1200,
    h: 1800,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/pintura-ejemplo.webp': {
    w: 1200,
    h: 800,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/pladur.webp': {
    w: 474,
    h: 842,
    m: 474,
    p: 240,
    c: 474
  },
  '/images/pladur-ejemplo.webp': {
    w: 1200,
    h: 1422,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/reforma-bano.webp': {
    w: 736,
    h: 981,
    m: 736,
    p: 240,
    c: 480
  },
  '/images/reforma-bano-ejemplo.webp': {
    w: 1125,
    h: 1520,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/reforma-cocina.webp': {
    w: 736,
    h: 1104,
    m: 736,
    p: 240,
    c: 480
  },
  '/images/reforma-cocina-ejemplo.webp': {
    w: 736,
    h: 1104,
    m: 736,
    p: 240,
    c: 480
  },
  '/images/reformas-integrales.webp': {
    w: 1200,
    h: 1600,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/reformas-integrales-ejemplo.webp': {
    w: 1200,
    h: 1600,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/hero-reforma.webp': {
    w: 1200,
    h: 816,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/plato-ducha.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/bano-moderno.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/cocina-nueva.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/cocina-abierta.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/pintor-rodillo.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/rodillos-pared.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/albanil-ladrillos.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/llana-masilla.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/alisando-pared.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/enlucido.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/tabique-pladur.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/instalando-pladur.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/sala-vacia.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/piso-reformado.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/obra-en-curso.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/piso-en-obra.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/instalaciones-vistas.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/medicion-pared.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/planos-medidas.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/planos-mesa.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/edificio-clasico-madrid.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/edificio-esquina.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/edificios-madrid.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  },
  '/images/edificio-ladrillo-madrid.webp': {
    w: 1200,
    h: 900,
    m: 800,
    p: 240,
    c: 480
  }
};

export function anchoDe(ruta: string): number | null {
  return IMAGENES[ruta]?.w ?? null;
}

export function altoDe(ruta: string): number | null {
  return IMAGENES[ruta]?.h ?? null;
}

const variante = (ruta: string, sufijo: string): string => ruta.replace('.webp', `-${sufijo}.webp`);

/** Variante de 240 px, para miniaturas. */
export function miniaturaDe(ruta: string): string {
  return IMAGENES[ruta] ? variante(ruta, '240') : ruta;
}

/** Variante de 800 px, para tarjetas. */
export function tarjetaDe(ruta: string): string {
  return IMAGENES[ruta] ? variante(ruta, '800') : ruta;
}

/** Atributo srcset con los tamaños disponibles. */
export function srcsetDe(ruta: string): string | null {
  const i = IMAGENES[ruta];
  if (!i) return null;
  return `${variante(ruta, '240')} ${i.p}w, ${variante(ruta, '480')} ${i.c}w, ${variante(ruta, '800')} ${i.m}w, ${ruta} ${i.w}w`;
}
