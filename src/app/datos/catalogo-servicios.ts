/** Catálogo de servicios. Los precios salen de datos/precios.ts. */
import { FilaPrecio, PRECIOS_SERVICIO, euros, filasDe } from './precios';

/** Una fila de precio: se define en datos/precios.ts. */
export type Precio = FilaPrecio;

export interface Servicio {
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

export const SERVICIOS: Servicio[] = [
  {
    numero: 1,
    nombre: 'Albañilería',
    color: 'naranja',
    imagen: '/images/albanileria.webp',
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
    ejemploImagen: '/images/albanileria-ejemplo.webp',
    precios: filasDe(PRECIOS_SERVICIO['Albañilería']),
    nota: 'Demoliciones estructurales, refuerzos, licencias y residuos especiales se valoran aparte.',
  },
  {
    numero: 2,
    nombre: 'Pintura',
    color: 'azul',
    imagen: '/images/pintura.webp',
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
    ejemploImagen: '/images/pintura-ejemplo.webp',
    precios: filasDe(PRECIOS_SERVICIO['Pintura']),
    nota: 'Quitar gotelé, alisar, reparar humedades o aplicar productos especiales puede aumentar el coste.',
  },
  {
    numero: 3,
    nombre: 'Reforma de baño',
    color: 'turquesa',
    imagen: '/images/reforma-bano.webp',
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
    ejemploImagen: '/images/reforma-bano-ejemplo.webp',
    precios: filasDe(PRECIOS_SERVICIO['Reforma de baño']),
    nota: 'El coste depende de los materiales, instalaciones ocultas, impermeabilización y mampara.',
  },
  {
    numero: 4,
    nombre: 'Reforma de cocinas',
    color: 'verde',
    imagen: '/images/reforma-cocina.webp',
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
    ejemploImagen: '/images/reforma-cocina-ejemplo.webp',
    precios: filasDe(PRECIOS_SERVICIO['Reforma de cocinas']),
    nota: 'Electrodomésticos, encimeras de piedra y cambios de distribución pueden aumentar el coste.',
  },
  {
    numero: 5,
    nombre: 'Reformas integrales',
    color: 'azul-oscuro',
    imagen: '/images/reformas-integrales.webp',
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
    ejemploImagen: '/images/reformas-integrales-ejemplo.webp',
    precios: filasDe(PRECIOS_SERVICIO['Reformas integrales']),
    nota: 'El presupuesto debe separar partidas, calidades, exclusiones, impuestos y trabajos adicionales.',
  },
  {
    numero: 6,
    nombre: 'Pladur',
    color: 'morado',
    imagen: '/images/pladur.webp',
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
    ejemploImagen: '/images/pladur-ejemplo.webp',
    precios: filasDe(PRECIOS_SERVICIO['Pladur']),
    nota: 'Altura, aislamiento, focos empotrados y acabado de pintura pueden modificar el precio.',
  },
  {
    numero: 7,
    nombre: 'Paredes',
    color: 'rojo',
    imagen: '/images/paredes.webp',
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
    ejemploImagen: '/images/paredes-ejemplo.webp',
    precios: filasDe(PRECIOS_SERVICIO['Paredes']),
    nota: 'El precio depende del estado de la pared, las capas de gotelé, la preparación y el acabado final.',
  },
];

export const PREGUNTAS_PORTADA = [
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

export const ZONAS = [
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

/** 5500 → «5.500 €». */
export function formatearPrecio(precio: number): string {
  return euros(precio);
}

export function buscarServicio(nombre: string): Servicio | undefined {
  return SERVICIOS.find((s) => s.nombre === nombre);
}
