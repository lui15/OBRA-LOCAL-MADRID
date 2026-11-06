import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
  effect,
  inject,
  untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  ESTADOS,
  MATERIALES,
  PLAZOS,
  PRESUPUESTOS,
  SERVICIOS,
  TIPOS_INMUEBLE,
  ZONAS,
} from '../datos/catalogo';
import { IMAGENES } from '../datos/imagenes';
import { PresupuestoEnvioService, RespuestaPresupuesto } from './presupuesto-envio.service';
import { PeticionPresupuesto, PresupuestoService } from './presupuesto.service';

type DireccionPaso = 'adelante' | 'atras';

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_TELEFONO = /^[+]?[\d\s().-]+$/;
const SELECTOR_FOCO =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const DURACION_CIERRE_MODAL = 220;

/** Formulario de presupuesto por pasos, en ventana flotante. Se abre con PresupuestoService. */
@Component({
  selector: 'app-presupuesto-wizard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './presupuesto-wizard.html',
  styleUrl: './presupuesto-wizard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresupuestoWizard implements OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly presupuestoService = inject(PresupuestoService);
  private readonly envio = inject(PresupuestoEnvioService);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  /** Al crearse el modal recibe el foco (accesibilidad con teclado y lector de pantalla). */
  @ViewChild('modalPresupuesto')
  set modalPresupuesto(ref: ElementRef<HTMLElement> | undefined) {
    if (ref && this.esNavegador) {
      ref.nativeElement.focus({ preventScroll: true });
    }
  }

  presupuestoAbierto = false;
  cerrandoPresupuesto = false;

  pasoActual = 0;
  direccionPaso: DireccionPaso = 'adelante';
  intentoContinuar = false;
  confirmacionEnvio = false;

  enviandoSolicitud = false;
  errorEnvio = '';

  /** Campo trampa anti-spam: los usuarios no lo ven ni lo rellenan. */
  honeypot = '';

  private temporizadorCierre?: ReturnType<typeof setTimeout>;
  private reducirMovimiento?: MediaQueryList;
  private scrollBloqueado = false;
  private elementoPrevio: HTMLElement | null = null;
  private destruido = false;

  respuesta: RespuestaPresupuesto = this.respuestaInicial();

  /** Formulario de 3 pasos: datos, proyecto y detalles (el último envía). */
  readonly pasos = [
    { numero: 1, titulo: 'Tus datos', subtitulo: '¿Cómo te llamamos?' },
    { numero: 2, titulo: 'Tu proyecto', subtitulo: '¿Qué necesitas hacer?' },
    { numero: 3, titulo: 'Detalles', subtitulo: 'Cuéntanos un poco más' },
  ];

  /** Índice del último paso (desde aquí se envía la solicitud). */
  readonly ultimoPaso = this.pasos.length - 1;

  readonly servicios = SERVICIOS;
  readonly zonas = ZONAS;
  readonly tiposInmueble = TIPOS_INMUEBLE;
  readonly estados = ESTADOS;
  readonly materiales = MATERIALES;
  readonly plazos = PLAZOS;
  readonly presupuestos = PRESUPUESTOS;

  constructor() {
    if (this.esNavegador) {
      this.reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
    }

    // Cada apertura crea una petición nueva, aunque sea con el mismo servicio.
    effect(() => {
      const peticion = this.presupuestoService.peticion();
      if (!peticion) return;

      untracked(() => {
        this.abrirPresupuesto(peticion);
        this.cdr.markForCheck();
      });
    });
  }

  ngOnDestroy(): void {
    this.destruido = true;

    if (this.temporizadorCierre !== undefined) {
      clearTimeout(this.temporizadorCierre);
      this.temporizadorCierre = undefined;
    }

    this.desbloquearScroll();
  }

  @HostListener('document:keydown.escape')
  cerrarConEscape(): void {
    if (this.presupuestoAbierto && !this.enviandoSolicitud) {
      this.cerrarPresupuesto();
    }
  }

  /** Mantiene el foco del teclado dentro del formulario mientras está abierto. */
  @HostListener('document:keydown.tab', ['$event'])
  @HostListener('document:keydown.shift.tab', ['$event'])
  atraparTab(evento: Event): void {
    if (!this.presupuestoAbierto || !this.esNavegador) {
      return;
    }

    const tecla = evento as KeyboardEvent;
    const modal = this.host.nativeElement.querySelector<HTMLElement>('.quote-modal');

    if (!modal) {
      return;
    }

    const enfocables = Array.from(modal.querySelectorAll<HTMLElement>(SELECTOR_FOCO)).filter(
      (elemento) => elemento.offsetParent !== null,
    );

    if (enfocables.length === 0) {
      tecla.preventDefault();
      modal.focus();
      return;
    }

    const primero = enfocables[0];
    const ultimo = enfocables[enfocables.length - 1];
    const activo = document.activeElement;

    if (!activo || activo === modal || !modal.contains(activo)) {
      tecla.preventDefault();
      (tecla.shiftKey ? ultimo : primero).focus();
      return;
    }

    if (tecla.shiftKey && activo === primero) {
      tecla.preventDefault();
      ultimo.focus();
    } else if (!tecla.shiftKey && activo === ultimo) {
      tecla.preventDefault();
      primero.focus();
    }
  }

  /* ======================= SCROLL ======================= */

  private comportamientoScroll(): ScrollBehavior {
    return this.reducirMovimiento?.matches ? 'auto' : 'smooth';
  }

  private bloquearScroll(): void {
    if (!this.esNavegador || this.scrollBloqueado) {
      return;
    }

    // Compensa el ancho de la barra de scroll para que la página no "salte".
    const hueco = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';

    if (hueco > 0) {
      document.body.style.paddingRight = `${hueco}px`;
    }

    this.scrollBloqueado = true;
  }

  private desbloquearScroll(): void {
    if (!this.esNavegador || !this.scrollBloqueado) {
      return;
    }

    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    this.scrollBloqueado = false;
  }

  /* ======================= ESTADO Y VISTA ======================= */

  private respuestaInicial(): RespuestaPresupuesto {
    return {
      nombre: '',
      telefono: '',
      correo: '',
      servicio: '',
      zona: '',
      metros: '',
      tipoInmueble: '',
      estado: '',
      materiales: '',
      plazo: '',
      presupuesto: '',
      descripcion: '',
    };
  }

  /** Marca la vista y la actualiza al momento (para cambios que llegan fuera de un evento). */
  private refrescarVista(): void {
    if (this.destruido) {
      return;
    }

    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  miniatura(ruta: string): string {
    return IMAGENES[ruta]?.peq.ruta ?? ruta;
  }

  get porcentajeProgreso(): number {
    return Math.round(((this.pasoActual + 1) / this.pasos.length) * 100);
  }

  /* ======================= FORMULARIO FLOTANTE ======================= */

  private abrirPresupuesto(peticion: PeticionPresupuesto): void {
    this.cancelarCierre();

    if (peticion.servicio) {
      this.respuesta.servicio = peticion.servicio;
    }

    if (!this.presupuestoAbierto) {
      this.elementoPrevio = peticion.origen;
    }

    this.pasoActual = 0;
    this.direccionPaso = 'adelante';
    this.intentoContinuar = false;
    this.confirmacionEnvio = false;
    this.errorEnvio = '';
    this.presupuestoAbierto = true;

    this.bloquearScroll();
    this.envio.precargar();
  }

  cerrarPresupuesto(): void {
    if (this.enviandoSolicitud || !this.presupuestoAbierto || this.cerrandoPresupuesto) {
      return;
    }

    if (!this.esNavegador || this.reducirMovimiento?.matches) {
      this.finalizarCierre();
      return;
    }

    // Se reproduce la animación de salida antes de quitar el modal del DOM.
    this.cerrandoPresupuesto = true;

    this.temporizadorCierre = setTimeout(() => {
      this.temporizadorCierre = undefined;
      this.finalizarCierre();

      if (!this.destruido) {
        this.cdr.markForCheck();
      }
    }, DURACION_CIERRE_MODAL);
  }

  private cancelarCierre(): void {
    if (this.temporizadorCierre !== undefined) {
      clearTimeout(this.temporizadorCierre);
      this.temporizadorCierre = undefined;
    }

    this.cerrandoPresupuesto = false;
  }

  private finalizarCierre(): void {
    this.cerrandoPresupuesto = false;
    this.presupuestoAbierto = false;
    this.desbloquearScroll();
    this.presupuestoService.cerrar();

    if (this.elementoPrevio?.isConnected) {
      this.elementoPrevio.focus({ preventScroll: true });
    }

    this.elementoPrevio = null;
  }

  /** Lleva la vista al inicio del formulario al cambiar de paso. */
  private irArribaDelFormulario(): void {
    if (!this.esNavegador) {
      return;
    }

    const raiz = this.host.nativeElement;
    const modal = raiz.querySelector<HTMLElement>('.quote-modal');
    const tarjeta = raiz.querySelector<HTMLElement>(
      '.quote-modal .wizard-card, .quote-modal .wizard-success',
    );

    if (!modal) {
      return;
    }

    const unaColumna = window.matchMedia('(max-width: 1000px)').matches;
    const top = unaColumna && tarjeta ? Math.max(0, tarjeta.offsetTop - 16) : 0;

    modal.scrollTo({ top, behavior: this.comportamientoScroll() });
  }

  /* ======================= NAVEGACIÓN DEL FORMULARIO ======================= */

  siguiente(): void {
    this.intentoContinuar = true;

    if (!this.pasoValido()) {
      return;
    }

    if (this.pasoActual < this.ultimoPaso) {
      this.direccionPaso = 'adelante';
      this.pasoActual++;
      this.intentoContinuar = false;
      this.errorEnvio = '';
      this.irArribaDelFormulario();
    }
  }

  anterior(): void {
    if (this.pasoActual > 0) {
      this.direccionPaso = 'atras';
      this.pasoActual--;
      this.intentoContinuar = false;
      this.errorEnvio = '';
      this.irArribaDelFormulario();
    }
  }

  irAlPaso(indice: number): void {
    if (indice >= 0 && indice < this.pasoActual) {
      this.direccionPaso = 'atras';
      this.pasoActual = indice;
      this.intentoContinuar = false;
      this.errorEnvio = '';
      this.irArribaDelFormulario();
    }
  }

  /* ======================= VALIDACIÓN ======================= */

  private datosPersonalesValidos(): boolean {
    const r = this.respuesta;

    return Boolean(
      r.nombre.trim() && this.telefonoValido() && (!r.correo.trim() || this.correoValido()),
    );
  }

  private proyectoValido(): boolean {
    return Boolean(this.respuesta.servicio.trim() && this.respuesta.zona.trim());
  }

  private descripcionValida(): boolean {
    return Boolean(this.respuesta.descripcion.trim());
  }

  pasoValido(): boolean {
    switch (this.pasoActual) {
      case 0:
        return this.datosPersonalesValidos();

      case 1:
        return this.proyectoValido();

      case 2:
        // Último paso: se comprueba todo el formulario antes de enviar.
        return this.datosPersonalesValidos() && this.proyectoValido() && this.descripcionValida();

      default:
        return false;
    }
  }

  telefonoValido(): boolean {
    const limpio = this.respuesta.telefono.trim();
    const digitos = limpio.replace(/\D/g, '');

    return REGEX_TELEFONO.test(limpio) && digitos.length >= 9 && digitos.length <= 15;
  }

  correoValido(): boolean {
    const correo = this.respuesta.correo.trim();

    return correo !== '' && REGEX_CORREO.test(correo);
  }

  /* ======================= ENVÍO ======================= */

  async enviarSolicitud(): Promise<void> {
    if (this.enviandoSolicitud) {
      return;
    }

    this.intentoContinuar = true;
    this.errorEnvio = '';
    this.confirmacionEnvio = false;

    if (!this.pasoValido()) {
      this.errorEnvio = 'Revisa los datos del formulario y describe el trabajo antes de enviar.';

      this.refrescarVista();
      return;
    }

    // Campo trampa: si lo rellena un robot, se simula el éxito sin enviar nada.
    if (this.honeypot.trim()) {
      this.confirmacionEnvio = true;
      this.refrescarVista();
      return;
    }

    this.enviandoSolicitud = true;
    this.refrescarVista();

    try {
      await this.envio.guardarEnCentral(this.respuesta);

      // Solo se llega aquí cuando Supabase ha confirmado el guardado.
      this.confirmacionEnvio = true;
      this.errorEnvio = '';
      this.intentoContinuar = false;
      this.enviandoSolicitud = false;

      this.refrescarVista();
      this.irArribaDelFormulario();

      void this.envio.avisarPorEmail(this.respuesta);
    } catch (error: unknown) {
      console.error('No se pudo guardar la solicitud:', error);

      this.confirmacionEnvio = false;
      this.enviandoSolicitud = false;
      this.errorEnvio =
        'No hemos podido confirmar el envío. Comprueba la conexión e inténtalo de nuevo.';

      this.refrescarVista();
    }
  }

  editarSolicitud(): void {
    this.confirmacionEnvio = false;
    this.direccionPaso = 'atras';
    this.pasoActual = 0;
    this.intentoContinuar = false;
    this.errorEnvio = '';
  }

  nuevaSolicitud(): void {
    this.honeypot = '';
    this.envio.olvidarUltimoEnvio();
    this.respuesta = this.respuestaInicial();
    this.direccionPaso = 'atras';
    this.pasoActual = 0;
    this.confirmacionEnvio = false;
    this.intentoContinuar = false;
    this.enviandoSolicitud = false;
    this.errorEnvio = '';
    this.irArribaDelFormulario();
  }
}
