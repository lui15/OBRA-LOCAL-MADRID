import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { RevealDirective } from './animaciones';
import { Faq, FaqAcordeon } from './faq-acordeon';

@Component({
  selector: 'app-faq-seccion',
  standalone: true,
  imports: [RevealDirective, FaqAcordeon],
  template: `
    <section class="section faq-section" id="preguntas">
      <div class="container faq-layout">
        <div class="faq-intro" appReveal>
          <span class="eyebrow">PREGUNTAS FRECUENTES</span>
          <h2>{{ titulo() }}</h2>
          <p>{{ texto() }}</p>

          <button
            class="button button-outline"
            type="button"
            (click)="presupuesto.abrir(servicio(), 'faq')"
          >
            Preparar presupuesto
          </button>
        </div>

        <div class="faq-list" appReveal>
          <app-faq-acordeon [faqs]="faqs()" />
        </div>
      </div>
    </section>
  `,
  styleUrl: './faq-seccion.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSeccion {
  readonly faqs = input.required<readonly Faq[]>();
  readonly titulo = input('Antes de empezar tu reforma');
  readonly texto = input('Información práctica para organizar la obra y comparar presupuestos.');
  /** Servicio que se preselecciona al abrir el formulario desde este bloque. */
  readonly servicio = input('');
  readonly presupuesto = inject(PresupuestoService);
}
