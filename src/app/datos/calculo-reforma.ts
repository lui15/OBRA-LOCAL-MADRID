/*
 * Calculadora de reformas. Todas las cifras salen de datos/precios.ts, como en /precios/ y en el
 * formulario: si cambia un precio, cambia en toda la web.
 */
import {
  BANO_ALTA_HASTA,
  BANO_BASICA_DESDE,
  CALIDADES,
  Calidad,
  PLAZO_INTEGRAL_TOTAL,
  precioM2,
  precioTrabajo,
  redondear100,
} from './precios';

export interface EntradaCalculadora {
  m2: number;
  /** Tirar o mover tabiques: se calcula como reforma integral. */
  redistribucion: boolean;
  cocina: boolean;
  banos: number;
  /** Solo cambiar la bañera por un plato de ducha, en vez del baño completo. */
  soloPlato: boolean;
  pintura: boolean;
  suelos: boolean;
  calidad: Calidad;
}

export interface LineaCalculo {
  concepto: string;
  minimo: number;
  maximo: number;
  plazo: string;
  /** Días máximos del plazo, para saber qué parte marca el plazo total. */
  dias: number;
}

export interface ResultadoCalculo {
  minimo: number;
  maximo: number;
  lineas: LineaCalculo[];
  /** Plazo orientativo de la obra completa. */
  plazo: string;
  avisos: string[];
  /** Servicio que se preselecciona en el formulario. */
  servicio: string;
}

export const ENTRADA_INICIAL: EntradaCalculadora = {
  m2: 70,
  redistribucion: false,
  cocina: true,
  banos: 1,
  soloPlato: false,
  pintura: true,
  suelos: false,
  calidad: 'media',
};

export const LIMITES = { m2: [20, 400], banos: [0, 4] } as const;

const SUELO: Record<Calidad, Parameters<typeof precioTrabajo>[0]> = {
  basica: 'suelo-laminado',
  media: 'suelo-vinilico',
  alta: 'tarima',
};

/** «2–3 semanas» → 21 días; «3–5 días» → 5. Solo para comparar plazos. */
function diasMaximos(plazo: string): number {
  const n = Number(plazo.match(/(\d+)\s*(?:semanas?|días?)/)?.[1] ?? 0);
  return /semana/.test(plazo) ? n * 7 : n;
}

function nombreCalidad(c: Calidad): string {
  return CALIDADES.find((x) => x.id === c)!.nombre.toLowerCase();
}

export function calcularReforma(entrada: EntradaCalculadora): ResultadoCalculo | null {
  // Mientras se escribe puede llegar cualquier número: el cálculo siempre usa valores válidos.
  const m2 = Math.min(LIMITES.m2[1], Math.max(LIMITES.m2[0], Math.round(entrada.m2) || LIMITES.m2[0]));
  const banos = Math.min(LIMITES.banos[1], Math.max(LIMITES.banos[0], Math.round(entrada.banos) || 0));
  const e = { ...entrada, m2, banos };
  const lineas: LineaCalculo[] = [];
  const avisos: string[] = [];
  let servicio = 'Reformas integrales';

  if (e.redistribucion) {
    const r = precioM2('integral').calidades[e.calidad];
    lineas.push({
      concepto: `Reforma integral de ${m2} m², calidad ${nombreCalidad(e.calidad)} (${r.minimo}–${r.maximo} €/m²)`,
      minimo: redondear100(r.minimo * m2),
      maximo: redondear100(r.maximo * m2),
      plazo: PLAZO_INTEGRAL_TOTAL,
      dias: diasMaximos(PLAZO_INTEGRAL_TOTAL),
    });
    avisos.push('La reforma integral incluye demolición, instalaciones, cocina, baño, suelos, carpintería y pintura.');
    if (m2 > 90) avisos.push(`El plazo de ${PLAZO_INTEGRAL_TOTAL} es el de un piso de 70–80 m²; en uno más grande puede alargarse.`);
  } else {
    if (e.cocina) {
      const p = precioTrabajo('cocina');
      lineas.push({ concepto: 'Cocina completa (8–12 m², sin electrodomésticos)', minimo: p.minimo, maximo: p.maximo, plazo: p.plazo!, dias: diasMaximos(p.plazo!) });
    }
    if (banos > 0) {
      if (e.soloPlato) {
        const p = precioTrabajo('banera-plato');
        lineas.push({
          concepto: `Cambiar bañera por plato de ducha × ${banos}`,
          minimo: p.minimo * banos,
          maximo: p.maximo * banos,
          plazo: p.plazo!,
          dias: diasMaximos(p.plazo!),
        });
      } else {
        const p = precioTrabajo('bano');
        const min = e.calidad === 'basica' ? BANO_BASICA_DESDE : p.minimo;
        const max = e.calidad === 'alta' ? BANO_ALTA_HASTA : p.maximo;
        lineas.push({
          concepto: `${banos === 1 ? 'Baño completo' : `${banos} baños completos`} (4–6 m² cada uno), calidad ${nombreCalidad(e.calidad)}`,
          minimo: min * banos,
          maximo: max * banos,
          plazo: p.plazo!,
          dias: diasMaximos(p.plazo!),
        });
      }
    }
    if (e.pintura) {
      // El precio de pintar un piso de 80 m² (paredes y techos), proporcional a los metros.
      const p = precioTrabajo('pintura-piso');
      lineas.push({
        concepto: `Pintura de paredes y techos (${m2} m²)`,
        minimo: redondear100((p.minimo * m2) / 80),
        maximo: redondear100((p.maximo * m2) / 80),
        plazo: p.plazo!,
        dias: diasMaximos(p.plazo!),
      });
      avisos.push('Si las paredes tienen gotelé, quitarlo, alisar y pintar cuesta 14–22 €/m² de pared.');
    }
    if (e.suelos) {
      const p = precioTrabajo(SUELO[e.calidad]);
      lineas.push({
        concepto: `${p.trabajo.replace(' colocado', '').replace(' colocada', '')} (${m2} m², ${p.minimo}–${p.maximo} €/m²)`,
        minimo: redondear100(p.minimo * m2),
        maximo: redondear100(p.maximo * m2),
        plazo: p.plazo!,
        dias: diasMaximos(p.plazo!),
      });
    }
    const elegidos = [e.cocina, banos > 0, e.pintura, e.suelos].filter(Boolean).length;
    if (elegidos === 1) {
      servicio = e.cocina ? 'Reforma de cocinas' : banos > 0 ? 'Reforma de baño' : e.pintura ? 'Pintura' : '';
    }
  }

  if (!lineas.length) return null;

  const larga = lineas.reduce((a, b) => (b.dias > a.dias ? b : a));
  const plazo = lineas.length === 1 ? larga.plazo : `${larga.plazo} (la parte más larga)`;

  return {
    minimo: lineas.reduce((n, l) => n + l.minimo, 0),
    maximo: lineas.reduce((n, l) => n + l.maximo, 0),
    lineas,
    plazo,
    avisos,
    servicio,
  };
}
