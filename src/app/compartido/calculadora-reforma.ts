import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { ENTRADA_INICIAL, EntradaCalculadora, LIMITES, calcularReforma } from '../datos/calculo-reforma';
import { CALIDADES, NOTA_PRECIOS, euros } from '../datos/precios';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

/**
 * Calcula un rango y un plazo orientativos con los precios de datos/precios.ts. En el servidor se
 * pinta con los valores iniciales; en el navegador se recalcula al cambiar cualquier dato.
 */
@Component({
  selector: 'app-calculadora-reforma',
  standalone: true,
  templateUrl: './calculadora-reforma.html',
  styleUrl: './calculadora-reforma.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculadoraReforma {
  private readonly presupuesto = inject(PresupuestoService);

  readonly entrada = signal<EntradaCalculadora>({ ...ENTRADA_INICIAL });
  readonly resultado = computed(() => calcularReforma(this.entrada()));
  readonly euros = euros;
  readonly calidades = CALIDADES;
  readonly nota = NOTA_PRECIOS;
  readonly limites = LIMITES;

  cambiar<K extends keyof EntradaCalculadora>(campo: K, valor: EntradaCalculadora[K]): void {
    this.entrada.update((e) => ({ ...e, [campo]: valor }));
  }

  /** Número dentro de los límites (al salir del campo). */
  numero(evento: Event, minimo: number, maximo: number): number {
    const n = Math.round(Number((evento.target as HTMLInputElement).value));
    return Number.isFinite(n) ? Math.min(maximo, Math.max(minimo, n)) : minimo;
  }

  /** Mientras se escribe no se corrige el número: el cálculo usa un valor dentro de los límites. */
  libre(evento: Event): number {
    const n = Number((evento.target as HTMLInputElement).value);
    return Number.isFinite(n) ? n : 0;
  }

  /** Al salir del campo, muestra el valor que se está usando. */
  fijar(evento: Event, valor: number): void {
    (evento.target as HTMLInputElement).value = String(valor);
  }

  marcado(evento: Event): boolean {
    return (evento.target as HTMLInputElement).checked;
  }

  /** «Pide tu presupuesto cerrado»: abre el formulario con lo calculado. */
  pedirPresupuesto(): void {
    const e = this.entrada();
    const r = this.resultado();
    const m2 = Math.min(LIMITES.m2[1], Math.max(LIMITES.m2[0], Math.round(e.m2)));
    const lineas = r?.lineas.map((l) => `- ${l.concepto}: ${euros(l.minimo)} – ${euros(l.maximo)}`) ?? [];
    const descripcion = [
      `Calculadora de reforma (piso de ${m2} m²):`,
      ...lineas,
      r ? `Total orientativo: ${euros(r.minimo)} – ${euros(r.maximo)}. Plazo: ${r.plazo}.` : '',
    ]
      .filter(Boolean)
      .join('\n');

    this.presupuesto.abrir(r?.servicio || 'Reformas integrales', 'calculadora', {
      metros: String(m2),
      calidad: e.calidad,
      descripcion,
    });
  }
}
