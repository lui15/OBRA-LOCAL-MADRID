import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { createClient } from '@supabase/supabase-js';

interface Precio {
  tamano: string;
  medidas: string;
  detalle: string;
  minimo: number;
  maximo: number;
}

interface Servicio {
  numero: number;
  nombre: string;
  color: string;
  imagen: string;
  resumen: string;
  incluye: string[];
  presupuestar: string[];
  ejemplo: string;
  ejemploImagen: string;
  precios: Precio[];
  nota: string;
}

interface RespuestaPresupuesto {
  nombre: string;
  telefono: string;
  correo: string;
  servicio: string;
  zona: string;
  metros: string;
  tipoInmueble: string;
  estado: string;
  materiales: string;
  plazo: string;
  presupuesto: string;
  descripcion: string;
}

type DireccionPaso = 'adelante' | 'atras';

/* Constantes creadas una sola vez (antes se recreaban en cada comprobación) */
const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_TELEFONO = /^[+]?[\d\s().-]+$/;
const FORMATO_EUROS = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});
const SELECTOR_FOCO =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const DURACION_CIERRE_MODAL = 220;

/* =====================================================
   CENTRAL DE SOLICITUDES (Supabase)
   Solo clave pública (publishable). Nunca la service_role.
   La seguridad la aplican las políticas RLS de public.requests.
===================================================== */

const SUPABASE_URL = 'https://obdetimymgchgqnlxbew.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vGYxgkMKDNJr1G0aq7vBMQ_lLUQfJqn';

/**
 * Identificador de esta web en la columna `source` de la Central.
 * Debe ser uno de los valores que permite la tabla:
 * 'armamuebles' | 'obralocalmadrid' | 'mudanzas360' | 'tramo'
 */
const FUENTE_CENTRAL = 'obralocalmadrid'; // ← CAMBIO (antes: 'obralocal')

/** Tiempo máximo de espera al guardar la solicitud. */
const TIEMPO_MAX_ENVIO_MS = 15000;

// Web pública sin inicio de sesión: no hace falta guardar ni renovar sesiones.
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
});

interface SolicitudCentral {
  source: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  description: string | null;
  details: Record<string, unknown>;
}

/** UUID para identificar cada envío; permite reintentar sin duplicar registros. */
function nuevoId(): string {
  const c = (globalThis as { crypto?: Crypto }).crypto;

  if (c?.randomUUID) {
    return c.randomUUID();
  }

  const bytes = new Uint8Array(16);

  if (c?.getRandomValues) {
    c.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');

  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly esNavegador = isPlatformBrowser(this.platformId);

  @ViewChild('barraScroll', { static: true }) private barraScroll?: ElementRef<HTMLElement>;
  @ViewChild('cabecera', { static: true }) private cabecera?: ElementRef<HTMLElement>;

  /** Al crearse el modal recibe el foco (accesibilidad con teclado y lector de pantalla). */
  @ViewChild('modalPresupuesto')
  set modalPresupuesto(ref: ElementRef<HTMLElement> | undefined) {
    if (ref && this.esNavegador) {
      ref.nativeElement.focus({ preventScroll: true });
    }
  }

  menuAbierto = false;

  // El formulario permanece cerrado al entrar en la web.
  presupuestoAbierto = false;
  cerrandoPresupuesto = false;

  pasoActual = 0;
  direccionPaso: DireccionPaso = 'adelante';
  intentoContinuar = false;
  confirmacionEnvio = false;
  progresoScroll = 0;

  enviandoSolicitud = false;
  errorEnvio = '';

  /** Campo trampa anti-spam: los usuarios no lo ven ni lo rellenan. */
  honeypot = '';

  /**
   * Identificador del último envío. Si el guardado se corta por la red y el cliente
   * reintenta con los mismos datos, se reutiliza el mismo id y no se duplica el registro.
   */
  private ultimoEnvio: { id: string; firma: string } | null = null;

  private readonly emailJsServiceId = 'service_zsdcdm9';
  private readonly emailJsTemplateId = 'template_990lvyf';
  private readonly emailJsPublicKey = 'AMG0Y5wJ2v1LfrRFL';

  private observer?: IntersectionObserver;
  private temporizadorCierre?: ReturnType<typeof setTimeout>;
  private reducirMovimiento?: MediaQueryList;
  private rafScroll = 0;
  private escuchandoScroll = false;
  private scrollBloqueado = false;
  private cabeceraConSombra = false;
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

  readonly zonas = [
    'Madrid capital',
    'Alcalá de Henares',
    'Alcobendas',
    'Alcorcón',
    'Aranjuez',
    'Arganda del Rey',
    'Boadilla del Monte',
    'Collado Villalba',
    'Coslada',
    'Fuenlabrada',
    'Getafe',
    'Leganés',
    'Majadahonda',
    'Móstoles',
    'Pozuelo de Alarcón',
    'Rivas-Vaciamadrid',
    'Las Rozas',
    'San Sebastián de los Reyes',
    'Torrejón de Ardoz',
    'Valdemoro',
    'Otra zona de Madrid',
  ];

  readonly tiposInmueble = [
    'Piso o apartamento',
    'Casa o chalet',
    'Local comercial',
    'Oficina',
    'Comunidad de vecinos',
    'Otro',
  ];

  readonly estados = [
    'Buen estado, quiero renovar',
    'Necesita reparaciones',
    'Hay que retirar materiales antiguos',
    'Hay humedad o desperfectos importantes',
    'No lo sé, necesito asesoramiento',
  ];

  readonly materiales = [
    'Económicos y funcionales',
    'Calidad media',
    'Gama alta',
    'Quiero que me asesoren',
    'Ya tengo los materiales',
  ];

  readonly plazos = [
    'Lo antes posible',
    'En las próximas 2–4 semanas',
    'En 1–3 meses',
    'Más adelante',
    'Solo estoy comparando precios',
  ];

  readonly presupuestos = [
    'Menos de 500 €',
    '500–1.500 €',
    '1.500–3.000 €',
    '3.000–6.000 €',
    '6.000–15.000 €',
    'Más de 15.000 €',
    'Necesito orientación',
  ];

  readonly servicios: Servicio[] = [
    {
      numero: 1,
      nombre: 'Albañilería',
      color: 'naranja',
      imagen: '/images/albanileria.jpg',
      resumen: 'Reparaciones, construcción, revestimientos y trabajos de albañilería.',
      incluye: [
        'Levantamiento y demolición de tabiques',
        'Enfoscados y enlucidos',
        'Alicatados y solados',
        'Apertura y cierre de huecos',
        'Reparaciones de obra',
      ],
      presupuestar: [
        'Medidas y tipo de trabajo',
        'Materiales y preparación',
        'Estado del soporte',
        'Accesibilidad y escombros',
        'Protecciones y acabados',
      ],
      ejemplo: 'Reparación de pared',
      ejemploImagen: '/images/albanileria-ejemplo.jpg',
      precios: [
        {
          tamano: 'Pequeño',
          medidas: '1–2 m²',
          detalle: 'Reparación localizada',
          minimo: 150,
          maximo: 300,
        },
        {
          tamano: 'Mediano',
          medidas: '5–10 m²',
          detalle: 'Reparación y revestimiento',
          minimo: 400,
          maximo: 800,
        },
        {
          tamano: 'Grande',
          medidas: '20–40 m²',
          detalle: 'Trabajo amplio de albañilería',
          minimo: 1200,
          maximo: 2500,
        },
      ],
      nota: 'Demoliciones estructurales, refuerzos, licencias y residuos especiales se valoran aparte.',
    },
    {
      numero: 2,
      nombre: 'Pintura',
      color: 'azul',
      imagen: '/images/pintura.jpg',
      resumen: 'Pintura de paredes y techos, preparación de superficies y acabados.',
      incluye: [
        'Pintura plástica de paredes y techos',
        'Lijado e imprimación',
        'Reparación de grietas',
        'Pintura de puertas y marcos',
        'Acabados decorativos',
      ],
      presupuestar: [
        'Superficie que se pintará',
        'Estado de paredes y techos',
        'Gotelé, grietas o humedades',
        'Número de manos y pintura',
        'Protección de muebles y suelos',
      ],
      ejemplo: 'Pintar una habitación',
      ejemploImagen: '/images/pintura-ejemplo.jpg',
      precios: [
        {
          tamano: 'Pequeño',
          medidas: 'Habitación pequeña',
          detalle: 'Pintura sencilla',
          minimo: 200,
          maximo: 400,
        },
        {
          tamano: 'Mediano',
          medidas: 'Una habitación amplia',
          detalle: 'Preparación y pintura',
          minimo: 500,
          maximo: 900,
        },
        {
          tamano: 'Grande',
          medidas: 'Varias estancias',
          detalle: 'Pintura de vivienda',
          minimo: 1000,
          maximo: 1800,
        },
      ],
      nota: 'Quitar gotelé, alisar, reparar humedades o aplicar productos especiales puede aumentar el coste.',
    },
    {
      numero: 3,
      nombre: 'Reforma de baño',
      color: 'turquesa',
      imagen: '/images/reforma-bano.jpg',
      resumen: 'Renovación de baños, sanitarios, revestimientos e instalaciones.',
      incluye: [
        'Cambio de azulejos y pavimento',
        'Instalación de sanitarios',
        'Muebles y grifería',
        'Cambio de bañera por ducha',
        'Fontanería y electricidad',
      ],
      presupuestar: [
        'Medidas de paredes y suelo',
        'Demolición y retirada',
        'Calidad de azulejos',
        'Instalaciones y desagües',
        'Impermeabilización y mampara',
      ],
      ejemplo: 'Renovación de baño',
      ejemploImagen: '/images/reforma-bano-ejemplo.jpg',
      precios: [
        {
          tamano: 'Pequeño',
          medidas: 'Cambio puntual',
          detalle: 'Grifería o mueble',
          minimo: 600,
          maximo: 1200,
        },
        {
          tamano: 'Mediano',
          medidas: 'Reforma parcial',
          detalle: 'Sin cambiar distribución',
          minimo: 1500,
          maximo: 3000,
        },
        {
          tamano: 'Grande',
          medidas: 'Baño completo',
          detalle: 'Demolición y renovación',
          minimo: 3500,
          maximo: 7000,
        },
      ],
      nota: 'El coste depende de los materiales, instalaciones ocultas, impermeabilización y mampara.',
    },
    {
      numero: 4,
      nombre: 'Reforma de cocinas',
      color: 'verde',
      imagen: '/images/reforma-cocina.jpg',
      resumen: 'Renovación de muebles, encimeras, revestimientos e instalaciones.',
      incluye: [
        'Montaje de muebles',
        'Instalación de encimeras',
        'Alicatado y solado',
        'Fregadero y grifería',
        'Conexiones de electrodomésticos',
      ],
      presupuestar: [
        'Medidas y número de módulos',
        'Material de muebles y encimera',
        'Instalaciones de agua y luz',
        'Desmontaje de cocina antigua',
        'Cortes, remates y conexiones',
      ],
      ejemplo: 'Cambio de encimera y muebles',
      ejemploImagen: '/images/reforma-cocina-ejemplo.jpg',
      precios: [
        {
          tamano: 'Pequeño',
          medidas: 'Cambio puntual',
          detalle: 'Encimera y ajustes',
          minimo: 1500,
          maximo: 3000,
        },
        {
          tamano: 'Mediano',
          medidas: 'Cocina parcial',
          detalle: 'Muebles y encimera',
          minimo: 4000,
          maximo: 8000,
        },
        {
          tamano: 'Grande',
          medidas: 'Cocina completa',
          detalle: 'Muebles e instalaciones',
          minimo: 9000,
          maximo: 15000,
        },
      ],
      nota: 'Electrodomésticos, encimeras de piedra y cambios de distribución pueden aumentar el coste.',
    },
    {
      numero: 5,
      nombre: 'Reformas integrales',
      color: 'azul-oscuro',
      imagen: '/images/reformas-integrales.jpg',
      resumen: 'Renovación completa o parcial de viviendas y locales.',
      incluye: [
        'Demolición y nueva distribución',
        'Albañilería e instalaciones',
        'Suelos y revestimientos',
        'Cocina y baño',
        'Pintura y acabados',
      ],
      presupuestar: [
        'Superficie y distribución',
        'Estado de las instalaciones',
        'Calidades y materiales',
        'Demoliciones y escombros',
        'Plazos y permisos',
      ],
      ejemplo: 'Reforma de vivienda',
      ejemploImagen: '/images/reformas-integrales-ejemplo.jpg',
      precios: [
        {
          tamano: 'Pequeña',
          medidas: '40–60 m²',
          detalle: 'Renovación parcial',
          minimo: 15000,
          maximo: 25000,
        },
        {
          tamano: 'Mediana',
          medidas: '60–90 m²',
          detalle: 'Varias estancias',
          minimo: 25000,
          maximo: 45000,
        },
        {
          tamano: 'Grande',
          medidas: '90 m² o más',
          detalle: 'Reforma amplia',
          minimo: 45000,
          maximo: 80000,
        },
      ],
      nota: 'El presupuesto debe separar partidas, calidades, exclusiones, impuestos y trabajos adicionales.',
    },
    {
      numero: 6,
      nombre: 'Pladur',
      color: 'morado',
      imagen: '/images/pladur.jpg',
      resumen: 'Tabiques, falsos techos, trasdosados y aislamiento.',
      incluye: [
        'Tabiques y divisiones',
        'Falsos techos',
        'Trasdosados',
        'Aislamiento térmico y acústico',
        'Registros y remates',
      ],
      presupuestar: [
        'Metros cuadrados y altura',
        'Tipo de placa',
        'Estructura y aislamiento',
        'Huecos para puertas y luces',
        'Juntas y acabado final',
      ],
      ejemplo: 'Falso techo',
      ejemploImagen: '/images/pladur-ejemplo.jpg',
      precios: [
        {
          tamano: 'Pequeño',
          medidas: '3–6 m²',
          detalle: 'Techo sencillo',
          minimo: 250,
          maximo: 550,
        },
        {
          tamano: 'Mediano',
          medidas: '7–15 m²',
          detalle: 'Techo o tabique',
          minimo: 600,
          maximo: 1200,
        },
        {
          tamano: 'Grande',
          medidas: '16–30 m²',
          detalle: 'Superficie amplia',
          minimo: 1500,
          maximo: 3000,
        },
      ],
      nota: 'Altura, aislamiento, focos empotrados y acabado de pintura pueden modificar el precio.',
    },
    {
      numero: 7,
      nombre: 'Paredes',
      color: 'rojo',
      imagen: '/images/paredes.jpg',
      resumen: 'Reparación, alisado, revestimiento y renovación de paredes.',
      incluye: [
        'Reparación de grietas y agujeros',
        'Enlucido y revestimiento',
        'Quitar gotelé y alisar',
        'Pintura o papel pintado',
        'Preparación de acabados',
      ],
      presupuestar: [
        'Metros cuadrados y altura',
        'Tipo y estado del soporte',
        'Gotelé y capas de pintura',
        'Masilla, lijado e imprimación',
        'Protección y retirada de residuos',
      ],
      ejemplo: 'Alisar y pintar una pared',
      ejemploImagen: '/images/paredes-ejemplo.jpg',
      precios: [
        {
          tamano: 'Pequeño',
          medidas: '5–10 m²',
          detalle: 'Alisado localizado',
          minimo: 150,
          maximo: 350,
        },
        {
          tamano: 'Mediano',
          medidas: '10–20 m²',
          detalle: 'Alisado y preparación',
          minimo: 400,
          maximo: 800,
        },
        {
          tamano: 'Grande',
          medidas: '20–40 m²',
          detalle: 'Alisado y pintura',
          minimo: 1000,
          maximo: 2000,
        },
      ],
      nota: 'El precio depende del estado de la pared, las capas de gotelé, la preparación y el acabado final.',
    },
  ];

  readonly preguntas = [
    {
      pregunta: '¿Qué necesito para solicitar un presupuesto?',
      respuesta:
        'Describe el trabajo, la zona y las medidas aproximadas. Las fotografías ayudan a entender mejor el estado actual.',
    },
    {
      pregunta: '¿Los precios son definitivos?',
      respuesta:
        'No. Son orientativos. El precio final debe confirmar las cantidades, materiales, mano de obra, impuestos y exclusiones.',
    },
    {
      pregunta: '¿Puedo volver a una pregunta anterior?',
      respuesta: 'Sí. Puedes volver atrás y cambiar tus respuestas antes de enviar la solicitud.',
    },
  ];

  /* ---------- trackBy: evita recrear el DOM de las listas ---------- */
  readonly trackPorNumero = (_: number, servicio: Servicio): number => servicio.numero;
  readonly trackPorTamano = (_: number, precio: Precio): string => precio.tamano;
  readonly trackPorIndice = (indice: number): number => indice;
  readonly trackPorValor = (_: number, valor: string): string => valor;
  readonly trackPorPaso = (_: number, paso: { numero: number }): number => paso.numero;
  readonly trackPorPregunta = (_: number, item: { pregunta: string }): string => item.pregunta;

  /* ======================= CICLO DE VIDA ======================= */

  ngOnInit(): void {
    if (!this.esNavegador) {
      return;
    }

    this.reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

    // El estado inicial "oculto" de las animaciones solo se activa si el observador funciona.
    if (typeof IntersectionObserver !== 'undefined') {
      this.host.nativeElement.classList.add('reveal-ready');
    }

    // El scroll se escucha fuera de Angular: no dispara detección de cambios en cada evento.
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.alHacerScroll, { passive: true });
      window.addEventListener('resize', this.alHacerScroll, { passive: true });
    });

    this.escuchandoScroll = true;
    this.actualizarScroll();
  }

  ngAfterViewInit(): void {
    if (!this.esNavegador) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.host.nativeElement
        .querySelectorAll('.reveal')
        .forEach((elemento) => elemento.classList.add('is-visible'));
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entradas) => {
          for (const entrada of entradas) {
            if (entrada.isIntersecting) {
              entrada.target.classList.add('is-visible');
              this.observer?.unobserve(entrada.target);
            }
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
      );

      this.observarElementos();
    });
  }

  ngOnDestroy(): void {
    this.destruido = true;

    this.observer?.disconnect();
    this.observer = undefined;

    if (this.temporizadorCierre !== undefined) {
      clearTimeout(this.temporizadorCierre);
      this.temporizadorCierre = undefined;
    }

    if (this.esNavegador) {
      if (this.escuchandoScroll) {
        window.removeEventListener('scroll', this.alHacerScroll);
        window.removeEventListener('resize', this.alHacerScroll);
        this.escuchandoScroll = false;
      }

      if (this.rafScroll) {
        cancelAnimationFrame(this.rafScroll);
        this.rafScroll = 0;
      }

      this.desbloquearScroll();
    }
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

  private readonly alHacerScroll = (): void => {
    if (this.rafScroll) {
      return;
    }

    this.rafScroll = requestAnimationFrame(() => {
      this.rafScroll = 0;
      this.actualizarScroll();
    });
  };

  actualizarScroll = (): void => {
    if (!this.esNavegador) {
      return;
    }

    const altura = document.documentElement.scrollHeight - window.innerHeight;
    const posicion = window.scrollY;

    this.progresoScroll = altura > 0 ? Math.min(100, Math.max(0, (posicion / altura) * 100)) : 0;

    // Se escribe directamente en el DOM con transform: sin detección de cambios y sin reflow.
    const barra = this.barraScroll?.nativeElement;

    if (barra) {
      barra.style.transform = `scaleX(${this.progresoScroll / 100})`;
    }

    const conSombra = posicion > 8;

    if (conSombra !== this.cabeceraConSombra) {
      this.cabeceraConSombra = conSombra;
      this.cabecera?.nativeElement.classList.toggle('is-scrolled', conSombra);
    }
  };

  private comportamientoScroll(): ScrollBehavior {
    return this.reducirMovimiento?.matches ? 'auto' : 'smooth';
  }

  private observarElementos(): void {
    this.host.nativeElement
      .querySelectorAll('.reveal:not(.is-visible)')
      .forEach((elemento) => this.observer?.observe(elemento));
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

  get porcentajeProgreso(): number {
    return Math.round(((this.pasoActual + 1) / this.pasos.length) * 100);
  }

  formatoPrecio(precio: number): string {
    return FORMATO_EUROS.format(precio);
  }

  /* ======================= FORMULARIO FLOTANTE ======================= */

  abrirPresupuesto(nombreServicio = ''): void {
    this.cancelarCierre();

    if (nombreServicio) {
      this.respuesta.servicio = nombreServicio;
    }

    if (!this.presupuestoAbierto && this.esNavegador) {
      this.elementoPrevio = document.activeElement as HTMLElement | null;
    }

    this.pasoActual = 0;
    this.direccionPaso = 'adelante';
    this.intentoContinuar = false;
    this.confirmacionEnvio = false;
    this.errorEnvio = '';
    this.menuAbierto = false;
    this.presupuestoAbierto = true;

    this.bloquearScroll();
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

    if (this.elementoPrevio?.isConnected) {
      this.elementoPrevio.focus({ preventScroll: true });
    }

    this.elementoPrevio = null;
  }

  seleccionarServicio(nombre: string, evento?: Event): void {
    evento?.preventDefault();
    this.abrirPresupuesto(nombre);
  }

  irA(id: string, evento?: Event): void {
    // Evita el salto brusco del enlace nativo para que funcione el scroll suave.
    evento?.preventDefault();
    this.menuAbierto = false;

    if (!this.esNavegador) {
      return;
    }

    // Si el destino es el formulario, abrimos la ventana flotante.
    if (id === 'presupuesto') {
      this.abrirPresupuesto();
      return;
    }

    const destino = document.getElementById(id);

    if (!destino) {
      return;
    }

    destino.scrollIntoView({ behavior: this.comportamientoScroll(), block: 'start' });

    // Mantiene el hash en la URL sin provocar un salto.
    history.replaceState(null, '', `#${id}`);
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

  /** Datos para la plantilla de EmailJS (aviso opcional por correo). */
  private crearDatosPlantilla(): Record<string, string> {
    const r = this.respuesta;

    return {
      nombre: r.nombre.trim(),
      telefono: r.telefono.trim(),
      correo: r.correo.trim(),
      servicio: r.servicio,
      zona: r.zona,
      metros: String(r.metros ?? '').trim(),
      tipo_inmueble: r.tipoInmueble,
      estado: r.estado,
      materiales: r.materiales,
      plazo: r.plazo,
      presupuesto: r.presupuesto,
      descripcion: r.descripcion.trim(),
      to_email: 'tramoreforma@gmail.com',
      subject: 'Nueva solicitud de presupuesto - ObraLocalMADRID',
    };
  }

  /** Construye el registro tal y como lo espera la tabla public.requests. */
  private crearSolicitud(): SolicitudCentral {
    const r = this.respuesta;

    return {
      source: FUENTE_CENTRAL,
      name: r.nombre.trim(),
      phone: r.telefono.trim(),
      email: r.correo.trim() || null,
      service: r.servicio,
      description: r.descripcion.trim() || null,
      details: {
        zona: r.zona,
        metros: r.metros ? Number(r.metros) : null,
        tipo_inmueble: r.tipoInmueble || null,
        estado: r.estado || null,
        materiales: r.materiales || null,
        plazo: r.plazo || null,
        presupuesto_previsto: r.presupuesto || null,
      },
    };
  }

  /**
   * Guarda la solicitud en Supabase.
   * - No usa .select(): los visitantes pueden insertar pero no leer (RLS).
   * - Si un reintento llega con un id ya guardado (error 23505), la solicitud
   *   ya existe y se considera guardada, sin duplicarla.
   */
  private async guardarEnCentral(solicitud: SolicitudCentral): Promise<void> {
    const firma = JSON.stringify(solicitud);

    if (!this.ultimoEnvio || this.ultimoEnvio.firma !== firma) {
      this.ultimoEnvio = { id: nuevoId(), firma };
    }

    const registro = { id: this.ultimoEnvio.id, ...solicitud };

    let temporizador: ReturnType<typeof setTimeout> | undefined;

    const limite = new Promise<never>((_, rechazar) => {
      temporizador = setTimeout(() => rechazar(new Error('TIMEOUT_ENVIO')), TIEMPO_MAX_ENVIO_MS);
    });

    try {
      const { error } = await Promise.race([supabase.from('requests').insert(registro), limite]);

      if (error && error.code !== '23505') {
        throw error;
      }
    } finally {
      clearTimeout(temporizador);
    }
  }

  /** Aviso opcional por email: si falla, la solicitud ya está guardada y el cliente no lo nota. */
  private async avisarPorEmail(): Promise<void> {
    try {
      await emailjs.send(
        this.emailJsServiceId,
        this.emailJsTemplateId,
        this.crearDatosPlantilla(),
        { publicKey: this.emailJsPublicKey },
      );
    } catch (error) {
      console.warn('La solicitud se guardó, pero no se pudo enviar el aviso por email', error);
    }
  }

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
      await this.guardarEnCentral(this.crearSolicitud());

      // Solo se llega aquí cuando Supabase ha confirmado el guardado.
      this.ngZone.run(() => {
        this.confirmacionEnvio = true;
        this.errorEnvio = '';
        this.intentoContinuar = false;
        this.enviandoSolicitud = false;

        this.refrescarVista();
        this.irArribaDelFormulario();
      });

      void this.avisarPorEmail();
    } catch (error: unknown) {
      console.error('No se pudo guardar la solicitud:', error);

      this.ngZone.run(() => {
        this.confirmacionEnvio = false;
        this.enviandoSolicitud = false;
        this.errorEnvio =
          'No hemos podido confirmar el envío. Comprueba la conexión e inténtalo de nuevo.';

        this.refrescarVista();
      });
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
    this.ultimoEnvio = null;
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
