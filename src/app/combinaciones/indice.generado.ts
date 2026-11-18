// Generado por scripts/generar-combos.mjs a partir de contenido/zonas/*.ts. No editar a mano.
import type { PaginaCombo } from './tipos';

export interface EntradaCombo {
  servicio: string;
  zona: string;
  title: string;
}

export const COMBOS: EntradaCombo[] = [
  {
    "servicio": "reforma-integral",
    "zona": "chamberi",
    "title": "Reforma integral en Chamberí | ObraLocal Madrid"
  },
  {
    "servicio": "reforma-bano",
    "zona": "chamberi",
    "title": "Reforma de baño en Chamberí | ObraLocal Madrid"
  },
  {
    "servicio": "reforma-cocina",
    "zona": "chamberi",
    "title": "Reforma de cocina en Chamberí | ObraLocal Madrid"
  }
];

/** Carga el contenido de una zona solo cuando hace falta. */
export const CARGADORES: Record<string, () => Promise<PaginaCombo[]>> = {
  'chamberi': () => import('./contenido/zonas/chamberi').then((m) => m.PAGINAS),
};

export function existeCombo(servicio: string, zona: string): boolean {
  return COMBOS.some((c) => c.servicio === servicio && c.zona === zona);
}
