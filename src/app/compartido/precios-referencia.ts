import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import {
  CALIDADES,
  Calidad,
  DESGLOSE_80M2,
  FASES_INTEGRAL,
  NOTA_PRECIOS,
  PLAZO_INTEGRAL_TOTAL,
  PRECIOS_M2,
  PRECIOS_TRABAJO,
  TOTAL_80M2,
  cifra,
  precioM2,
  precioTrabajo,
  rango,
  textoPrecio,
} from '../datos/precios';

/** Un ejemplo de presupuesto paso a paso, con las cifras de las tablas. */
interface Ejemplo {
  id: string;
  titulo: string;
  pasos: string[];
  total: string;
  plazo: string;
}

const bano = precioTrabajo('bano');
const plato = precioTrabajo('banera-plato');
const cocina = precioTrabajo('cocina');
const luz = precioTrabajo('punto-luz');
const gotele = precioTrabajo('gotele');
const PARED_EJEMPLO = 180;

const EJEMPLOS: Ejemplo[] = [
  {
    id: 'ejemplo-bano',
    titulo: 'Baño de 5 m² en calidad media',
    pasos: [
      `Un baño de 5 m² entra en el baño completo de 4–6 m²: ${textoPrecio(bano)} en calidad media.`,
      'Es el precio en calidad media. En calidad básica parte de 5.000 € y en alta puede llegar a 13.000 €.',
      `Si solo quieres cambiar la bañera por un plato de ducha, el trabajo baja a ${textoPrecio(plato)} y se hace en ${plato.plazo}.`,
    ],
    total: textoPrecio(bano),
    plazo: bano.plazo!,
  },
  {
    id: 'ejemplo-cocina',
    titulo: 'Cocina de 10 m²',
    pasos: [
      `Una cocina de 10 m² entra en la cocina completa de 8–12 m²: ${textoPrecio(cocina)}, sin electrodomésticos.`,
      `Si añades 4 puntos de luz empotrados en el techo (${textoPrecio(luz)}): ${cifra(luz.minimo * 4)}–${cifra(luz.maximo * 4)} € más.`,
      'Los electrodomésticos se presupuestan aparte, porque cada cliente elige marca y gama.',
    ],
    total: `${cifra(cocina.minimo + luz.minimo * 4)}–${cifra(cocina.maximo + luz.maximo * 4)} €`,
    plazo: cocina.plazo!,
  },
  {
    id: 'ejemplo-gotele',
    titulo: 'Piso de 70 m² con gotelé',
    pasos: [
      `Lo que cuenta es la superficie de pared, no la del suelo. Supongamos ${PARED_EJEMPLO} m² de pared: mídelo sumando el perímetro de cada habitación por su altura, sin puertas ni ventanas.`,
      `Quitar el gotelé, alisar y pintar: ${textoPrecio(gotele)}.`,
      `${PARED_EJEMPLO} m² × ${cifra(gotele.minimo)}–${cifra(gotele.maximo)} € = ${cifra(PARED_EJEMPLO * gotele.minimo)}–${cifra(PARED_EJEMPLO * gotele.maximo)} €.`,
    ],
    total: `${cifra(PARED_EJEMPLO * gotele.minimo)}–${cifra(PARED_EJEMPLO * gotele.maximo)} €`,
    plazo: gotele.plazo!,
  },
];

/** Contenido numérico de /precios/: tablas, desglose, plazos y ejemplos. */
@Component({
  selector: 'app-precios-referencia',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './precios-referencia.html',
  styleUrl: './precios-referencia.css',
})
export class PreciosReferencia {
  readonly calidades = CALIDADES;
  readonly m2 = PRECIOS_M2;
  readonly trabajos = PRECIOS_TRABAJO;
  readonly desglose = DESGLOSE_80M2;
  readonly total80 = TOTAL_80M2;
  readonly fases = FASES_INTEGRAL;
  readonly plazoTotal = PLAZO_INTEGRAL_TOTAL;
  readonly ejemplos = EJEMPLOS;
  readonly nota = NOTA_PRECIOS;
  readonly integralMedia = precioM2('integral').calidades.media;
  readonly rango = rango;
  readonly texto = textoPrecio;
  readonly cifra = cifra;

  /** Pestaña de calidad en el móvil. */
  readonly calidad = signal<Calidad>('media');

  /** Escala de las barras: la partida más cara llega al 100 %. */
  private readonly maximo = Math.max(...DESGLOSE_80M2.map((p) => p.maximo));
  inicio(p: { minimo: number }): number {
    return (p.minimo / this.maximo) * 100;
  }
  ancho(p: { minimo: number; maximo: number }): number {
    return ((p.maximo - p.minimo) / this.maximo) * 100;
  }

  readonly indice = [
    { id: 'por-m2', texto: 'Precio por m² según calidad' },
    { id: 'por-trabajo', texto: 'Precio y plazo por trabajo' },
    { id: 'desglose', texto: 'Piso de 80 m² por partidas' },
    { id: 'plazos', texto: 'Plazos de una reforma integral' },
    { id: 'ejemplos', texto: 'Tres presupuestos de ejemplo' },
    { id: 'que-sube', texto: 'Qué hace subir el precio' },
    { id: 'ahorrar', texto: 'Cómo ahorrar sin perder calidad' },
    { id: 'preguntas', texto: 'Preguntas frecuentes' },
  ];
}
