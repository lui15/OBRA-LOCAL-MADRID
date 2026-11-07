import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  afterNextRender,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AnaliticaService } from './compartido/analitica.service';
import { AvisoCookies } from './compartido/aviso-cookies';
import { ConsentimientoService } from './compartido/consentimiento.service';
import { Icono } from './compartido/icono';
import { ENLACE_TELEFONO } from './datos/contacto';
import { ContextoPagina } from './layout/contexto-pagina.service';
import { ScrollEstado } from './layout/scroll-estado.service';
import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';
import { PresupuestoWizard } from './presupuesto/presupuesto-wizard';
import { PresupuestoService } from './presupuesto/presupuesto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeader, SiteFooter, PresupuestoWizard, AvisoCookies, Icono],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly presupuesto = inject(PresupuestoService);
  readonly scroll = inject(ScrollEstado);
  readonly contexto = inject(ContextoPagina);
  readonly telefono = ENLACE_TELEFONO;
  private readonly doc = inject(DOCUMENT);

  constructor() {
    const analitica = inject(AnaliticaService);
    const consentimiento = inject(ConsentimientoService);

    // Solo en el navegador y tras hidratar: nada de esto entra en el HTML prerenderizado.
    afterNextRender(() => {
      analitica.iniciar();
      consentimiento.iniciar();
    });
  }

  /**
   * Con base href="/", un enlace "#seccion" llevaría a la portada desde cualquier otra URL.
   * Se intercepta para desplazarse dentro de la página actual.
   */
  @HostListener('click', ['$event'])
  alPulsarEnlace(evento: MouseEvent): void {
    if (evento.defaultPrevented || evento.button !== 0) return;
    if (evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) return;

    const enlace = (evento.target as Element | null)?.closest('a[href^="#"]');
    const destino = this.doc.getElementById(enlace?.getAttribute('href')?.slice(1) ?? '');
    if (!destino) return;

    evento.preventDefault();
    const reducir = this.doc.defaultView?.matchMedia('(prefers-reduced-motion: reduce)').matches;
    destino.scrollIntoView({ behavior: reducir ? 'auto' : 'smooth', block: 'start' });

    // Mantiene el comportamiento de "Saltar al contenido": el foco va al destino.
    if (!destino.hasAttribute('tabindex')) destino.setAttribute('tabindex', '-1');
    destino.focus({ preventScroll: true });
  }
}
