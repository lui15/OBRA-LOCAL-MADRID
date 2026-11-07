import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Miga } from '../landing/landing-data';

@Component({
  selector: 'app-migas',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="migas" aria-label="Migas de pan">
      <ol>
        @for (m of migas(); track m.url; let ultima = $last) {
          <li>
            @if (ultima) {
              <span aria-current="page">{{ m.etiqueta }}</span>
            } @else {
              <a [routerLink]="m.url">{{ m.etiqueta }}</a>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styles: `
    ol {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 8px;
      margin: 0;
      padding: 0;
      color: var(--muted);
      font-size: 12px;
      list-style: none;
    }
    li + li::before {
      content: '›';
      margin-right: 8px;
      color: #93a1b1;
    }
    a {
      color: var(--navy);
      font-weight: 600;
      transition: color 0.2s ease;
    }
    a:hover {
      color: var(--orange-dark);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Migas {
  readonly migas = input.required<readonly Miga[]>();
}
