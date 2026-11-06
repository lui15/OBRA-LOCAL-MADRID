/** Catálogo único de servicios, precios orientativos y opciones del formulario. */

export interface Precio {
  tamano: string;
  medidas: string;
  detalle: string;
  minimo: number;
  maximo: number;
}

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

export const TIPOS_INMUEBLE = [
  'Piso o apartamento',
  'Casa o chalet',
  'Local comercial',
  'Oficina',
  'Comunidad de vecinos',
  'Otro',
];

export const ESTADOS = [
  'Buen estado, quiero renovar',
  'Necesita reparaciones',
  'Hay que retirar materiales antiguos',
  'Hay humedad o desperfectos importantes',
  'No lo sé, necesito asesoramiento',
];

export const MATERIALES = [
  'Económicos y funcionales',
  'Calidad media',
  'Gama alta',
  'Quiero que me asesoren',
  'Ya tengo los materiales',
];

export const PLAZOS = [
  'Lo antes posible',
  'En las próximas 2–4 semanas',
  'En 1–3 meses',
  'Más adelante',
  'Solo estoy comparando precios',
];

export const PRESUPUESTOS = [
  'Menos de 500 €',
  '500–1.500 €',
  '1.500–3.000 €',
  '3.000–6.000 €',
  '6.000–15.000 €',
  'Más de 15.000 €',
  'Necesito orientación',
];

const FORMATO_EUROS = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

export function formatearPrecio(precio: number): string {
  return FORMATO_EUROS.format(precio);
}

export function buscarServicio(nombre: string): Servicio | undefined {
  return SERVICIOS.find((s) => s.nombre === nombre);
}
