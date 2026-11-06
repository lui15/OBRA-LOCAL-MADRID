/** Dimensiones reales de las imágenes de public/images. */
interface Imagen {
  w: number;
  h: number;
  /** Variante pequeña para móvil. */
  peq: { ruta: string; w: number };
}

export const IMAGENES: Record<string, Imagen> = {
  '/images/albanileria-ejemplo.webp': {
    w: 1000,
    h: 750,
    peq: {
      ruta: '/images/albanileria-ejemplo-480.webp',
      w: 480
    }
  },
  '/images/albanileria.webp': {
    w: 1000,
    h: 1500,
    peq: {
      ruta: '/images/albanileria-480.webp',
      w: 480
    }
  },
  '/images/paredes-ejemplo.webp': {
    w: 1000,
    h: 1333,
    peq: {
      ruta: '/images/paredes-ejemplo-480.webp',
      w: 480
    }
  },
  '/images/paredes.webp': {
    w: 1000,
    h: 1628,
    peq: {
      ruta: '/images/paredes-480.webp',
      w: 480
    }
  },
  '/images/pintura-ejemplo.webp': {
    w: 1000,
    h: 667,
    peq: {
      ruta: '/images/pintura-ejemplo-480.webp',
      w: 480
    }
  },
  '/images/pintura.webp': {
    w: 1000,
    h: 1500,
    peq: {
      ruta: '/images/pintura-480.webp',
      w: 480
    }
  },
  '/images/pladur-ejemplo.webp': {
    w: 1000,
    h: 1185,
    peq: {
      ruta: '/images/pladur-ejemplo-480.webp',
      w: 480
    }
  },
  '/images/pladur.webp': {
    w: 474,
    h: 842,
    peq: {
      ruta: '/images/pladur-480.webp',
      w: 474
    }
  },
  '/images/reforma-bano-ejemplo.webp': {
    w: 1000,
    h: 1351,
    peq: {
      ruta: '/images/reforma-bano-ejemplo-480.webp',
      w: 480
    }
  },
  '/images/reforma-bano.webp': {
    w: 736,
    h: 981,
    peq: {
      ruta: '/images/reforma-bano-480.webp',
      w: 480
    }
  },
  '/images/reforma-cocina-ejemplo.webp': {
    w: 736,
    h: 1104,
    peq: {
      ruta: '/images/reforma-cocina-ejemplo-480.webp',
      w: 480
    }
  },
  '/images/reforma-cocina.webp': {
    w: 736,
    h: 1104,
    peq: {
      ruta: '/images/reforma-cocina-480.webp',
      w: 480
    }
  },
  '/images/reformas-integrales-ejemplo.webp': {
    w: 1000,
    h: 1333,
    peq: {
      ruta: '/images/reformas-integrales-ejemplo-480.webp',
      w: 480
    }
  },
  '/images/reformas-integrales.webp': {
    w: 1000,
    h: 1333,
    peq: {
      ruta: '/images/reformas-integrales-480.webp',
      w: 480
    }
  },
  '/images/hero-reforma.webp': {
    w: 1200,
    h: 816,
    peq: {
      ruta: '/images/hero-reforma-640.webp',
      w: 640
    }
  }
};

export function anchoDe(ruta: string): number | null {
  return IMAGENES[ruta]?.w ?? null;
}

export function altoDe(ruta: string): number | null {
  return IMAGENES[ruta]?.h ?? null;
}

/** Atributo srcset con los dos tamaños disponibles. */
export function srcsetDe(ruta: string): string | null {
  const imagen = IMAGENES[ruta];
  return imagen ? `${imagen.peq.ruta} ${imagen.peq.w}w, ${ruta} ${imagen.w}w` : null;
}
