import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Icono } from '../compartido/icono';
import { ENLACE_TELEFONO, NEGOCIO } from '../datos/contacto';
import { FICHAS_PUBLICADAS, urlDePagina } from '../landing/fichas';
import { PresupuestoService } from '../presupuesto/presupuesto.service';
import { ContextoPagina } from './contexto-pagina.service';
import { ScrollEstado } from './scroll-estado.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [Icono, RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  readonly scroll = inject(ScrollEstado);
  private readonly presupuesto = inject(PresupuestoService);
  private readonly contexto = inject(ContextoPagina);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly doc = inject(DOCUMENT);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  readonly telefono = ENLACE_TELEFONO;
  readonly telefonoVisible = NEGOCIO.telefonoVisible;
  readonly url = urlDePagina;

  readonly servicios = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'servicio');
  readonly trabajos = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'trabajo');
  /** El mega menú muestra las primeras zonas y enlaza al índice completo. */
  readonly zonas = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'zona').slice(0, 8);
  readonly todasLasZonas = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'zona');

  readonly enlaces = [
    { ruta: '/precios', texto: 'Precios' },
    { ruta: '/zonas', texto: 'Zonas' },
    { ruta: '/guias', texto: 'Guías' },
    { ruta: '/como-trabajamos', texto: 'Cómo trabajamos' },
    { ruta: '/preguntas-frecuentes', texto: 'Preguntas' },
  ];

  readonly megaAbierto = signal(false);
  readonly menuAbierto = signal(false);

  constructor() {
    effect(() => {
      const abierto = this.menuAbierto();
      if (this.esNavegador) this.doc.documentElement.style.overflow = abierto ? 'hidden' : '';
    });
  }

  /** Con teclado alterna; con ratón o táctil solo abre, porque pasar por encima ya lo abrió. */
  alPulsarServicios(evento: MouseEvent): void {
    this.megaAbierto.set(evento.detail === 0 ? !this.megaAbierto() : true);
  }

  /** Al salir con el tabulador del mega menú, se cierra. */
  alSalirDelMenu(evento: FocusEvent): void {
    const destino = evento.relatedTarget;
    const contenedor = evento.currentTarget as HTMLElement;
    if (destino instanceof Node && !contenedor.contains(destino)) this.megaAbierto.set(false);
  }

  cerrarTodo(): void {
    this.megaAbierto.set(false);
    this.menuAbierto.set(false);
  }

  pedirPresupuesto(ubicacion: string): void {
    this.cerrarTodo();
    this.presupuesto.abrir(this.contexto.servicio(), ubicacion);
  }

  @HostListener('document:keydown.escape')
  alPulsarEscape(): void {
    this.cerrarTodo();
  }

  @HostListener('document:click', ['$event'])
  alPulsarFuera(evento: MouseEvent): void {
    if (this.megaAbierto() && !this.host.contains(evento.target as Node)) {
      this.megaAbierto.set(false);
    }
  }
}
