import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Faq {
  pregunta: string;
  respuesta: string;
}

/** Lista de preguntas en acordeón. Su texto es el mismo que va al JSON-LD de FAQPage. */
@Component({
  selector: 'app-faq-acordeon',
  standalone: true,
  template: `
    @for (faq of faqs(); track faq.pregunta) {
      <details class="faq-item">
        <summary>{{ faq.pregunta }} <span>+</span></summary>
        <p>{{ faq.respuesta }}</p>
      </details>
    }
  `,
  styleUrl: './faq-acordeon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqAcordeon {
  readonly faqs = input.required<readonly Faq[]>();
}
