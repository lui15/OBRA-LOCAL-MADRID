import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { formatearPrecio } from '../datos/catalogo-servicios';
import {
  ENTRADA_INICIAL,
  EntradaCalculadora,
  calcularReforma,
} from '../datos/precios-guia';
import { esPendiente } from '../datos/revision';
import { PresupuestoService } from '../presupuesto/presupuesto.service';

/**
 * Calcula un rango orientativo con los precios del catálogo. En el servidor se pinta con los
 * valores iniciales; en el navegador se recalcula al cambiar cualquier dato.
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
  readonly formato = formatearPrecio;
  readonly pendiente = esPendiente;

  cambiar<K extends keyof EntradaCalculadora>(campo: K, valor: EntradaCalculadora[K]): void {
    this.entrada.update((e) => ({ ...e, [campo]: valor }));
  }

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

  valor(evento: Event): string {
    return (evento.target as HTMLSelectElement).value;
  }

  marcado(evento: Event): boolean {
    return (evento.target as HTMLInputElement).checked;
  }

  /** Abre el formulario con los datos ya rellenos. */
  pedirPresupuesto(): void {
    const e = this.entrada();
    const r = this.resultado();
    const m2 = Math.min(400, Math.max(20, Math.round(e.m2)));
    const partes = [
      `Piso de ${m2} m²`,
      e.redistribucion ? 'reforma integral con redistribución' : 'sin redistribución',
      !e.redistribucion && e.cocina !== 'no' ? `cocina ${e.cocina}` : '',
      !e.redistribucion && e.banos > 0 ? `${e.banos} ${e.banos === 1 ? 'baño' : 'baños'} (${e.tipoBano})` : '',
      !e.redistribucion && e.pintura ? 'pintura' : '',
      !e.redistribucion && e.suelos ? 'suelos' : '',
      `calidad ${e.calidad === 'basica' ? 'básica' : e.calidad}`,
    ].filter(Boolean);
    const rango = r ? ` Rango orientativo de la calculadora: ${formatearPrecio(r.minimo)}–${formatearPrecio(r.maximo)}.` : '';

    this.presupuesto.abrir(r?.servicio ?? 'Reformas integrales', 'calculadora', {
      metros: String(m2),
      descripcion: `Calculadora de reforma: ${partes.join(', ')}.${rango} Quiero el presupuesto por partidas.`,
    });
  }
}
