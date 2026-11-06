import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';

let observadorCompartido: IntersectionObserver | null = null;

function observador(): IntersectionObserver {
  observadorCompartido ??= new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          observadorCompartido?.unobserve(entrada.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
  );
  return observadorCompartido;
}

/**
 * Hace aparecer el elemento al entrar en pantalla. En el HTML prerenderizado todo es visible;
 * el estado oculto solo se activa en el navegador y si el observador está disponible.
 * Con prefers-reduced-motion, styles.css anula la animación.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly nodo = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  ngAfterViewInit(): void {
    if (!this.esNavegador) return;

    if (typeof IntersectionObserver === 'undefined') {
      this.nodo.classList.add('is-visible');
      return;
    }

    document.documentElement.classList.add('reveal-ready');
    observador().observe(this.nodo);
  }

  ngOnDestroy(): void {
    if (this.esNavegador) observadorCompartido?.unobserve(this.nodo);
  }
}
