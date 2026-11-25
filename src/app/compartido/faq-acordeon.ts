import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Faq {
  pregunta: string;
  respuesta: string;
  /** Enlace interno opcional bajo la respuesta (no va al JSON-LD). Ruta con barras: '/precios/'. */
  enlace?: { texto: string; ruta: string };
}

/** Lista de preguntas en acordeón. Su texto es el mismo que va al JSON-LD de FAQPage. */
@Component({
  selector: 'app-faq-acordeon',
  standalone: true,
  imports: [RouterLink],
  template: `
    @for (faq of faqs(); track faq.pregunta) {
      <details class="faq-item">
        <summary>{{ faq.pregunta }} <span>+</span></summary>
        <p>{{ faq.respuesta }}</p>
        @if (faq.enlace; as e) {
          <p class="faq-enlace"><a [routerLink]="e.ruta">{{ e.texto }} →</a></p>
        }
      </details>
    }
  `,
  styleUrl: './faq-acordeon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqAcordeon {
  readonly faqs = input.required<readonly Faq[]>();
}
