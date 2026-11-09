import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { AnaliticaService } from '../compartido/analitica.service';
import { CALIDADES, Calidad, NOTA_PRECIOS } from '../datos/precios';
import { ENLACE_TELEFONO, NEGOCIO, enlaceWhatsApp } from '../datos/contacto';
import { FICHAS_PUBLICADAS } from '../landing/fichas';
import { ZONAS } from '../datos/catalogo-servicios';
import {
  CUANDO,
  DatosFormulario,
  Errores,
  INMUEBLES,
  IdObra,
  OBRAS,
  PREGUNTAS,
  datosVacios,
  detalles,
  erroresPaso,
  estimar,
  explicacionCalidad,
  limpiarTelefono,
  mensajeFotos,
  mensajeWhatsApp,
  nombreCalidad,
  obraDe,
  obraDeServicio,
  resumen,
  telefonoCompleto,
  telefonoValido,
  tramoPara,
  valorLead,
} from './presupuesto-modelo';
import { PresupuestoEnvioService } from './presupuesto-envio.service';
import { CLAVE_PROGRESO, PeticionPresupuesto, PresupuestoService, leerUtm } from './presupuesto.service';

const SELECTOR_FOCO =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type Estado = 'formulario' | 'enviando' | 'exito' | 'error';

interface Progreso {
  paso: number;
  datos: DatosFormulario;
  abierto: boolean;
}

/**
 * Formulario de presupuesto en 4 pasos, de lo fácil a lo personal: qué, cómo, dónde y cuándo,
 * y al final el contacto. En el móvil ocupa la pantalla con el botón principal fijo abajo.
 */
@Component({
  selector: 'app-presupuesto-wizard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './presupuesto-wizard.html',
  styleUrl: './presupuesto-wizard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresupuestoWizard implements OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly presupuesto = inject(PresupuestoService);
  private readonly envio = inject(PresupuestoEnvioService);
  private readonly analitica = inject(AnaliticaService);
  private readonly esNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly cuerpo = viewChild<ElementRef<HTMLElement>>('cuerpo');
  private readonly dialogo = viewChild<ElementRef<HTMLElement>>('dialogo');

  readonly abierto = signal(false);
  readonly paso = signal(0);
  readonly datos = signal<DatosFormulario>(datosVacios());
  readonly estado = signal<Estado>('formulario');
  /** Errores visibles: se muestran al intentar avanzar o al salir de un campo. */
  readonly errores = signal<Errores>({});
  readonly direccion = signal<'adelante' | 'atras'>('adelante');
  /** Nombre y teléfono con los que se envió, para la pantalla de éxito. */
  readonly enviado = signal<{ nombre: string; telefono: string; fotos: string } | null>(null);

  /** Campo trampa anti-spam: los usuarios no lo ven ni lo rellenan. */
  honeypot = '';

  readonly totalPasos = 4;
  readonly titulos = ['¿Qué quieres reformar?', '¿Cómo es?', '¿Dónde y cuándo?', '¿A quién enviamos el presupuesto?'];
  readonly obras = OBRAS;
  readonly calidades = CALIDADES;
  readonly cuandoOpciones = CUANDO;
  readonly inmuebles = INMUEBLES;
  readonly notaPrecios = NOTA_PRECIOS;
  readonly telefonoNegocio = ENLACE_TELEFONO;
  readonly telefonoVisible = NEGOCIO.telefonoVisible;
  /** Zonas con página propia y municipios del catálogo, sin repetir. */
  readonly sugerenciasZona = [
    ...new Set([
      ...FICHAS_PUBLICADAS.filter((f) => f.tipo === 'zona' && f.zona).map((f) => f.zona!),
      ...ZONAS.filter((z) => z !== 'Otra zona de Madrid'),
    ]),
  ].sort((a, b) => a.localeCompare(b, 'es'));

  readonly obra = computed(() => obraDe(this.datos().obra));
  readonly preguntas = computed(() => {
    const o = this.datos().obra;
    return o ? PREGUNTAS[o] : null;
  });
  readonly estimacion = computed(() => estimar(this.datos()));
  readonly whatsapp = computed(() => enlaceWhatsApp(mensajeWhatsApp(this.datos())));
  readonly porcentaje = computed(() => Math.round(((this.paso() + 1) / this.totalPasos) * 100));

  private reducirMovimiento?: MediaQueryList;
  private scrollBloqueado = false;
  private elementoPrevio: HTMLElement | null = null;
  private pasoMedido = -1;

  constructor() {
    if (this.esNavegador) {
      this.reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
    }

    // Cada apertura crea una petición nueva, aunque sea con el mismo servicio.
    effect(() => {
      const peticion = this.presupuesto.peticion();
      if (peticion) untracked(() => this.abrir(peticion));
    });

    // El progreso se guarda en cada cambio: si se recarga la página, se sigue donde estaba.
    effect(() => {
      const progreso: Progreso = { paso: this.paso(), datos: this.datos(), abierto: this.abierto() };
      if (this.estado() === 'exito') return;
      untracked(() => this.guardarProgreso(progreso));
    });
  }

  ngOnDestroy(): void {
    this.desbloquearScroll();
  }

  /* ======================= apertura y cierre ======================= */

  private abrir(peticion: PeticionPresupuesto): void {
    const guardado = this.leerProgreso();
    const preObra = obraDeServicio(peticion.servicio);

    if (guardado && guardado.datos.obra && (!preObra || guardado.datos.obra === preObra)) {
      // Hay una solicitud a medias: se continúa donde estaba.
      this.datos.set({ ...datosVacios(), ...guardado.datos });
      this.paso.set(Math.min(Math.max(guardado.paso, 0), this.totalPasos - 1));
    } else if (this.estado() === 'exito' || !this.datos().obra || (preObra && this.datos().obra !== preObra)) {
      const d = datosVacios();
      if (preObra) d.obra = preObra;
      if (preObra === 'local') d.tipoInmueble = 'Local u oficina';
      if (peticion.zona) d.zona = peticion.zona;
      if (peticion.datos?.metros && preObra) d.metros = tramoPara(preObra, peticion.datos.metros);
      if (peticion.datos?.calidad) d.calidad = peticion.datos.calidad as Calidad;
      if (peticion.datos?.descripcion) d.mensaje = peticion.datos.descripcion;
      this.datos.set(d);
      // Con el trabajo ya elegido se empieza en «¿Cómo es?».
      this.paso.set(preObra ? 1 : 0);
      this.estado.set('formulario');
      this.enviado.set(null);
      this.envio.olvidarUltimoEnvio();
    } else if (peticion.zona && !this.datos().zona) {
      this.cambiar('zona', peticion.zona);
    }

    if (!this.abierto()) this.elementoPrevio = peticion.origen;
    this.errores.set({});
    this.abierto.set(true);
    this.bloquearScroll();
    this.envio.precargar();
    this.analitica.evento('form_open', { ubicacion: peticion.ubicacion });
    this.medirPaso();
    this.enfocarDialogo();
  }

  cerrar(): void {
    if (this.estado() === 'enviando' || !this.abierto()) return;
    this.abierto.set(false);
    this.desbloquearScroll();
    this.presupuesto.cerrar();
    if (this.estado() === 'exito') {
      this.borrarProgreso();
      this.datos.set(datosVacios());
      this.paso.set(0);
      this.estado.set('formulario');
    }
    if (this.elementoPrevio?.isConnected) this.elementoPrevio.focus({ preventScroll: true });
    this.elementoPrevio = null;
  }

  @HostListener('document:keydown.escape')
  cerrarConEscape(): void {
    if (this.abierto()) this.cerrar();
  }

  /** Mantiene el foco del teclado dentro del formulario mientras está abierto. */
  @HostListener('document:keydown.tab', ['$event'])
  @HostListener('document:keydown.shift.tab', ['$event'])
  atraparTab(evento: Event): void {
    const modal = this.dialogo()?.nativeElement;
    if (!this.abierto() || !modal) return;
    const tecla = evento as KeyboardEvent;
    const enfocables = Array.from(modal.querySelectorAll<HTMLElement>(SELECTOR_FOCO)).filter(
      (el) => el.offsetParent !== null,
    );
    if (!enfocables.length) return;
    const primero = enfocables[0];
    const ultimo = enfocables[enfocables.length - 1];
    const activo = document.activeElement;
    if (!activo || !modal.contains(activo)) {
      tecla.preventDefault();
      (tecla.shiftKey ? ultimo : primero).focus();
    } else if (tecla.shiftKey && activo === primero) {
      tecla.preventDefault();
      ultimo.focus();
    } else if (!tecla.shiftKey && activo === ultimo) {
      tecla.preventDefault();
      primero.focus();
    }
  }

  /* ======================= datos ======================= */

  cambiar<K extends keyof DatosFormulario>(clave: K, valor: DatosFormulario[K]): void {
    this.datos.update((d) => ({ ...d, [clave]: valor }));
    if (this.errores()[clave]) {
      this.errores.update((e) => {
        const copia = { ...e };
        delete copia[clave];
        return copia;
      });
    }
  }

  texto(evento: Event): string {
    return (evento.target as HTMLInputElement | HTMLTextAreaElement).value;
  }

  marcado(evento: Event): boolean {
    return (evento.target as HTMLInputElement).checked;
  }

  /** Paso 1: una tarjeta por toque, y pasa sola al siguiente paso. */
  elegirObra(id: IdObra): void {
    const anterior = this.datos().obra;
    if (anterior !== id) {
      this.datos.update((d) => ({
        ...d,
        obra: id,
        metros: '',
        estado: '',
        banos: '',
        gotele: '',
        opciones: [],
        comentario: '',
        tipoInmueble: id === 'local' ? 'Local u oficina' : d.tipoInmueble === 'Local u oficina' ? '' : d.tipoInmueble,
      }));
    }
    this.errores.set({});
    this.irA(1, 'adelante');
  }

  alternarOpcion(opcion: string, marcada: boolean): void {
    this.datos.update((d) => ({
      ...d,
      opciones: marcada ? [...new Set([...d.opciones, opcion])] : d.opciones.filter((o) => o !== opcion),
    }));
  }

  calidadExplicada(id: Calidad): string {
    return explicacionCalidad(this.datos().obra, id);
  }

  /** Validación al salir de un campo del último paso. */
  validarCampo(clave: 'nombre' | 'telefono' | 'correo'): void {
    const d = this.datos();
    if (clave === 'telefono' && d.telefono.trim()) {
      // Se muestra con el formato habitual si es válido.
      if (telefonoValido(d.telefono)) this.cambiar('telefono', telefonoCompleto(d.telefono).slice(4));
    }
    const e = erroresPaso(3, this.datos())[clave];
    const tocado = clave === 'nombre' ? d.nombre : clave === 'telefono' ? d.telefono : d.correo;
    if (e && tocado.trim()) this.errores.update((x) => ({ ...x, [clave]: e }));
  }

  /* ======================= navegación ======================= */

  siguiente(): void {
    const e = erroresPaso(this.paso(), this.datos());
    if (Object.keys(e).length) {
      this.errores.set(e);
      this.analitica.evento('form_error', { paso: this.paso() + 1, motivo: 'validacion' });
      this.enfocarPrimerError();
      return;
    }
    if (this.paso() === this.totalPasos - 1) {
      void this.enviar();
      return;
    }
    this.irA(this.paso() + 1, 'adelante');
  }

  atras(): void {
    if (this.estado() === 'error') {
      this.estado.set('formulario');
      return;
    }
    if (this.paso() > 0) this.irA(this.paso() - 1, 'atras');
  }

  private irA(paso: number, direccion: 'adelante' | 'atras'): void {
    this.direccion.set(direccion);
    this.paso.set(paso);
    this.errores.set({});
    this.medirPaso();
    this.subirYEnfocar();
  }

  private medirPaso(): void {
    if (this.paso() !== this.pasoMedido) {
      this.pasoMedido = this.paso();
      this.analitica.evento('form_step', { paso: this.paso() + 1 });
    }
  }

  /* ======================= envío ======================= */

  private async enviar(): Promise<void> {
    if (this.estado() === 'enviando') return;
    const d = this.datos();

    // Campo trampa: si lo rellena un robot, se simula el éxito sin enviar nada.
    if (this.honeypot.trim()) {
      this.mostrarExito(d);
      return;
    }

    const est = estimar(d);
    const paginaOrigen = this.esNavegador ? window.location.pathname : '';
    const respuesta = {
      nombre: d.nombre.trim(),
      telefono: telefonoCompleto(d.telefono),
      correo: d.correo.trim(),
      servicio: obraDe(d.obra)?.servicio ?? 'Reforma',
      zona: d.zona.trim(),
      metros: d.metros,
      tipoInmueble: d.tipoInmueble,
      estado: d.estado || d.banos || (d.gotele ? `Gotelé: ${d.gotele}` : ''),
      materiales: nombreCalidad(d.calidad),
      plazo: d.cuando,
      presupuesto: est?.corto ?? '',
      descripcion: resumen(d),
      detalles: detalles(d, paginaOrigen, leerUtm()),
    };

    this.estado.set('enviando');
    try {
      await this.envio.guardarEnCentral(respuesta);
      // Solo se llega aquí cuando Supabase ha confirmado el guardado.
      const valor = valorLead(d);
      this.analitica.evento('generate_lead', {
        servicio: respuesta.servicio,
        pagina_origen: paginaOrigen,
        currency: 'EUR',
        ...(valor !== null ? { value: valor } : {}),
      });
      this.mostrarExito(d);
      void this.envio.avisarPorEmail(respuesta).then((ok) => {
        if (!ok) this.analitica.evento('form_error', { motivo: 'aviso_email_fallido' });
      });
    } catch (error: unknown) {
      console.error('No se pudo guardar la solicitud:', error);
      this.analitica.evento('form_error', { motivo: 'guardado_fallido' });
      this.estado.set('error');
      this.subirYEnfocar();
    }
  }

  private mostrarExito(d: DatosFormulario): void {
    this.enviado.set({
      nombre: d.nombre.trim().split(/\s+/)[0],
      telefono: telefonoCompleto(d.telefono),
      fotos: enlaceWhatsApp(mensajeFotos(d)),
    });
    this.estado.set('exito');
    this.borrarProgreso();
    this.subirYEnfocar();
  }

  reintentar(): void {
    this.estado.set('formulario');
    void this.enviar();
  }

  /** Medición del botón de fotos. El clic general de WhatsApp lo mide AnaliticaService. */
  medirFotos(): void {
    this.analitica.evento('click_whatsapp_fotos', { ubicacion: 'formulario_exito' });
  }

  /* ======================= utilidades ======================= */

  telefonoLimpio(): string {
    return limpiarTelefono(this.datos().telefono);
  }

  private subirYEnfocar(): void {
    if (!this.esNavegador) return;
    requestAnimationFrame(() => {
      this.cuerpo()?.nativeElement.scrollTo({ top: 0, behavior: this.reducirMovimiento?.matches ? 'auto' : 'smooth' });
      const titulo = this.host.nativeElement.querySelector<HTMLElement>('[data-titulo-paso]');
      titulo?.focus({ preventScroll: true });
    });
  }

  private enfocarDialogo(): void {
    if (!this.esNavegador) return;
    requestAnimationFrame(() => {
      const titulo = this.host.nativeElement.querySelector<HTMLElement>('[data-titulo-paso]');
      (titulo ?? this.dialogo()?.nativeElement)?.focus({ preventScroll: true });
    });
  }

  private enfocarPrimerError(): void {
    if (!this.esNavegador) return;
    requestAnimationFrame(() => {
      const campo = this.host.nativeElement.querySelector<HTMLElement>('[aria-invalid="true"], .grupo-error');
      campo?.scrollIntoView({ block: 'center', behavior: this.reducirMovimiento?.matches ? 'auto' : 'smooth' });
      const enfocable = campo?.matches('input, textarea, button')
        ? campo
        : campo?.querySelector<HTMLElement>('button, input');
      enfocable?.focus({ preventScroll: true });
    });
  }

  private bloquearScroll(): void {
    if (!this.esNavegador || this.scrollBloqueado) return;
    const hueco = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (hueco > 0) document.body.style.paddingRight = `${hueco}px`;
    this.scrollBloqueado = true;
  }

  private desbloquearScroll(): void {
    if (!this.esNavegador || !this.scrollBloqueado) return;
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    this.scrollBloqueado = false;
  }

  private leerProgreso(): Progreso | null {
    if (!this.esNavegador) return null;
    try {
      const crudo = sessionStorage.getItem(CLAVE_PROGRESO);
      return crudo ? (JSON.parse(crudo) as Progreso) : null;
    } catch {
      return null;
    }
  }

  private guardarProgreso(p: Progreso): void {
    if (!this.esNavegador || !p.datos.obra) return;
    try {
      // La casilla de privacidad no se guarda: se acepta en cada envío.
      sessionStorage.setItem(CLAVE_PROGRESO, JSON.stringify({ ...p, datos: { ...p.datos, privacidad: false } }));
    } catch {
      /* Sin almacenamiento (modo privado): el formulario funciona igual. */
    }
  }

  private borrarProgreso(): void {
    if (!this.esNavegador) return;
    try {
      sessionStorage.removeItem(CLAVE_PROGRESO);
    } catch {
      /* nada que borrar */
    }
  }
}
