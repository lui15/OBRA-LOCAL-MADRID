import { DOCUMENT, NgTemplateOutlet, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  afterNextRender,
  inject,
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { EstadoRuta } from './estado-ruta.service';
import { NavegacionService } from './navegacion.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader implements OnDestroy {
  private readonly doc = inject(DOCUMENT);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly navegacion = inject(NavegacionService);
  private readonly presupuesto = inject(PresupuestoService);

  @ViewChild('barraScroll', { static: true }) private barraScroll?: ElementRef<HTMLElement>;
  @ViewChild('cabecera', { static: true }) private cabecera?: ElementRef<HTMLElement>;

  readonly ruta = inject(EstadoRuta);

  menuAbierto = false;

  private rafScroll = 0;
  private conSombra = false;

  constructor() {
    afterNextRender(() => {
      const ventana = this.doc.defaultView!;
      ventana.addEventListener('scroll', this.alHacerScroll, { passive: true });
      ventana.addEventListener('resize', this.alHacerScroll, { passive: true });
      this.actualizarScroll();
    });
  }

  ngOnDestroy(): void {
    if (!this.esNavegador) return;

    const ventana = this.doc.defaultView!;
    ventana.removeEventListener('scroll', this.alHacerScroll);
    ventana.removeEventListener('resize', this.alHacerScroll);
    if (this.rafScroll) cancelAnimationFrame(this.rafScroll);
  }

  irA(id: string, evento: Event): void {
    this.menuAbierto = false;
    this.navegacion.irA(id, evento);
  }

  pedirPresupuesto(): void {
    this.menuAbierto = false;
    this.presupuesto.abrir('', 'cabecera');
  }

  private readonly alHacerScroll = (): void => {
    if (this.rafScroll) return;

    this.rafScroll = requestAnimationFrame(() => {
      this.rafScroll = 0;
      this.actualizarScroll();
    });
  };

  /** Se escribe directamente en el DOM con transform: sin detección de cambios y sin reflow. */
  private actualizarScroll(): void {
    const ventana = this.doc.defaultView!;
    const altura = this.doc.documentElement.scrollHeight - ventana.innerHeight;
    const posicion = ventana.scrollY;
    const progreso = altura > 0 ? Math.min(100, Math.max(0, (posicion / altura) * 100)) : 0;

    const barra = this.barraScroll?.nativeElement;
    if (barra) barra.style.transform = `scaleX(${progreso / 100})`;

    const conSombra = posicion > 8;
    if (conSombra !== this.conSombra) {
      this.conSombra = conSombra;
      this.cabecera?.nativeElement.classList.toggle('is-scrolled', conSombra);
    }
  }
}
