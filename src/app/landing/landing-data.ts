import { NEGOCIO, SITE_URL } from '../seo.service';

export interface PaginaSeo {
  /** Ruta sin barra inicial. '' es la página de inicio. */
  path: string;
  title: string;
  description: string;
  /** Texto del enlace interno hacia esta página. */
  etiqueta: string;
  h1: { linea: string; resaltado: string };
  kicker: string;
  h2: string;
  intro: string;
  puntos: string[];
  bloques: { titulo: string; texto: string }[];
  faqs: { pregunta: string; respuesta: string }[];
  servicio: { nombre: string; descripcion: string };
  /** Servicio que se preselecciona al abrir el formulario. Debe coincidir con `servicios`. */
  servicioFormulario: string;
  zona?: string;
}

const ZONAS_TEXTO =
  'Madrid capital y municipios como Alcalá de Henares, Alcobendas, Alcorcón, Aranjuez, Arganda del Rey, Boadilla del Monte, Collado Villalba, Coslada, Fuenlabrada, Getafe, Leganés, Majadahonda, Móstoles, Pozuelo de Alarcón, Rivas-Vaciamadrid, Las Rozas, San Sebastián de los Reyes, Torrejón de Ardoz y Valdemoro. Si tu zona no aparece, elige «Otra zona de Madrid» en el formulario.';

const SOLICITUD_TEXTO =
  'Con el formulario de tres pasos de esta página: tus datos, tu proyecto y los detalles. Describe el trabajo, la zona y las medidas aproximadas; las fotografías ayudan a entender el estado actual.';

const PRECIOS_AVISO =
  'Son precios orientativos: el precio final debe confirmar cantidades, materiales, mano de obra, impuestos y exclusiones.';

function paginaDeZona(zona: string, barrios: string, cercanos: string): Omit<PaginaSeo, 'path'> {
  return {
    title: `Reformas en ${zona}, Madrid | Baños, cocinas y pintura | ObraLocalMADRID`,
    description: `Reformas en ${zona} (Madrid): baños, cocinas, albañilería, pintura, pladur y reformas integrales. Precios orientativos y presupuesto paso a paso.`,
    etiqueta: `Reformas en ${zona}`,
    zona,
    h1: { linea: `Reformas en ${zona}.`, resaltado: 'Tu proyecto, bien hecho.' },
    kicker: `REFORMAS EN ${zona.toUpperCase()}`,
    h2: `Empresa de reformas para tu vivienda o local en ${zona}`,
    intro: `Si vas a reformar en ${zona}, cuéntanos el trabajo y la zona (${barrios}) y prepara tu presupuesto paso a paso. Trabajamos en viviendas, locales, oficinas y comunidades de vecinos.`,
    puntos: [
      `Servicio en ${zona}`,
      'Baños, cocinas y reformas integrales',
      'Albañilería, pintura y pladur',
      'Precios orientativos por servicio',
    ],
    bloques: [
      {
        titulo: `Qué reformamos en ${zona}`,
        texto:
          'Reformas de baño y cocina, reformas integrales, albañilería, pintura, pladur y reparación de paredes, incluido quitar gotelé.',
      },
      {
        titulo: 'Qué necesitamos saber',
        texto:
          'El tipo de inmueble, su estado actual, las medidas aproximadas, los materiales que prefieres y cuándo quieres empezar. Con eso se puede orientar mejor el presupuesto.',
      },
      {
        titulo: 'Zonas cercanas',
        texto: `Si estás cerca de ${zona}, en ${cercanos}, también puedes pedir presupuesto.`,
      },
    ],
    faqs: [
      {
        pregunta: `¿Hacéis reformas en todo ${zona}?`,
        respuesta: `Sí, ${zona} es una de nuestras zonas de trabajo. Selecciónalo en el formulario e indica tu barrio en los detalles.`,
      },
      {
        pregunta: `¿Cuánto cuesta una reforma en ${zona}?`,
        respuesta: `Depende del trabajo. Como referencia, la reforma parcial de un baño va de 1.500 a 3.000 € y pintar una habitación amplia, de 500 a 900 €. ${PRECIOS_AVISO}`,
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: `Reformas en ${zona}`,
      descripcion: `Reformas de viviendas y locales en ${zona}, Comunidad de Madrid: baños, cocinas, albañilería, pintura y pladur.`,
    },
    servicioFormulario: '',
  };
}

export const PAGINAS: PaginaSeo[] = [
  /* ---------------------------- INICIO ---------------------------- */
  {
    path: '',
    title: 'Reformas en Madrid | Albañilería, baños y cocinas | ObraLocalMADRID',
    description:
      'ObraLocalMADRID: reformas en Madrid y alrededores. Albañilería, pintura, baños, cocinas, pladur y reformas integrales. Precios orientativos y presupuesto paso a paso.',
    etiqueta: 'Reformas en Madrid',
    h1: { linea: 'Reformas en Madrid.', resaltado: 'Tu proyecto, bien hecho.' },
    kicker: 'REFORMAS EN MADRID',
    h2: 'Reformas en Madrid capital y en toda la Comunidad',
    intro:
      'En ObraLocalMADRID preparamos contigo tu reforma, desde un arreglo puntual hasta la renovación completa de una vivienda o un local en Madrid y alrededores.',
    puntos: [
      'Madrid capital y municipios',
      'Precios orientativos por servicio',
      'Solicitud en tres pasos',
      'Viviendas, locales y comunidades',
    ],
    bloques: [
      {
        titulo: 'Baños y cocinas',
        texto:
          'Renovación de azulejos, sanitarios, muebles, encimeras e instalaciones, desde un cambio puntual hasta la reforma completa.',
      },
      {
        titulo: 'Reformas integrales',
        texto:
          'Demolición y nueva distribución, albañilería e instalaciones, suelos, revestimientos, pintura y acabados.',
      },
      {
        titulo: 'Albañilería, pintura y pladur',
        texto:
          'Reparaciones de obra, alicatados, pintura de paredes y techos, quitar gotelé, tabiques y falsos techos de pladur.',
      },
    ],
    faqs: [
      { pregunta: '¿En qué zonas de Madrid trabajáis?', respuesta: ZONAS_TEXTO },
      {
        pregunta: '¿Cuánto cuesta una reforma en Madrid?',
        respuesta: `Depende del alcance. Como referencia, un baño completo va de 3.500 a 7.000 € y una reforma integral de 60–90 m², de 25.000 a 45.000 €. ${PRECIOS_AVISO}`,
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Reformas en Madrid',
      descripcion:
        'Reformas de viviendas y locales en Madrid y alrededores: albañilería, pintura, baños, cocinas, pladur y reformas integrales.',
    },
    servicioFormulario: '',
  },

  /* ---------------------------- SERVICIOS ---------------------------- */
  {
    path: 'reformas-integrales-madrid',
    title: 'Reformas Integrales en Madrid | Precios orientativos | ObraLocalMADRID',
    description:
      'Reformas integrales de pisos, casas y locales en Madrid: demolición, distribución, instalaciones y acabados. Orientación de precios por superficie.',
    etiqueta: 'Reformas integrales en Madrid',
    h1: { linea: 'Reformas integrales', resaltado: 'en Madrid.' },
    kicker: 'REFORMAS INTEGRALES',
    h2: 'Renovación completa o parcial de viviendas y locales en Madrid',
    intro:
      'Una reforma integral coordina muchos oficios. Te ayudamos a ordenarla por partidas: distribución, instalaciones, suelos, cocina, baño, pintura y acabados.',
    puntos: [
      'Demolición y nueva distribución',
      'Albañilería e instalaciones',
      'Cocina y baño',
      'Pintura y acabados',
    ],
    bloques: [
      {
        titulo: 'Precios orientativos',
        texto:
          'De 40 a 60 m²: entre 15.000 y 25.000 €. De 60 a 90 m²: entre 25.000 y 45.000 €. A partir de 90 m²: entre 45.000 y 80.000 €.',
      },
      {
        titulo: 'Qué influye en el presupuesto',
        texto:
          'La superficie y la distribución, el estado de las instalaciones, las calidades, las demoliciones y escombros, los plazos y los permisos.',
      },
      {
        titulo: 'Un presupuesto comparable',
        texto:
          'El presupuesto debe separar partidas, calidades, exclusiones, impuestos y trabajos adicionales para que puedas comparar con criterio.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un piso de 80 m² en Madrid?',
        respuesta: `Como referencia, una reforma de 60 a 90 m² en varias estancias va de 25.000 a 45.000 €. ${PRECIOS_AVISO}`,
      },
      { pregunta: '¿En qué zonas hacéis reformas integrales?', respuesta: ZONAS_TEXTO },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Reformas integrales',
      descripcion: 'Renovación completa o parcial de viviendas y locales en Madrid.',
    },
    servicioFormulario: 'Reformas integrales',
  },
  {
    path: 'reformas-banos-madrid',
    title: 'Reformas de Baños en Madrid | Precios orientativos | ObraLocalMADRID',
    description:
      'Reforma de baños en Madrid: azulejos, sanitarios, grifería y cambio de bañera por ducha. Precios orientativos desde cambios puntuales hasta baño completo.',
    etiqueta: 'Reformas de baños en Madrid',
    h1: { linea: 'Reformas de baños', resaltado: 'en Madrid.' },
    kicker: 'REFORMA DE BAÑO',
    h2: 'Renueva tu baño en Madrid, por partes o por completo',
    intro:
      'Desde cambiar la grifería o el mueble hasta demoler y renovar todo el baño, incluidos los revestimientos, los sanitarios y las instalaciones.',
    puntos: [
      'Azulejos y pavimento',
      'Sanitarios y grifería',
      'Cambio de bañera por ducha',
      'Fontanería y electricidad',
    ],
    bloques: [
      {
        titulo: 'Precios orientativos',
        texto:
          'Cambio puntual de grifería o mueble: de 600 a 1.200 €. Reforma parcial sin cambiar la distribución: de 1.500 a 3.000 €. Baño completo: de 3.500 a 7.000 €.',
      },
      {
        titulo: 'Qué influye en el presupuesto',
        texto:
          'Las medidas de paredes y suelo, la demolición y retirada, la calidad de los azulejos, las instalaciones y desagües, la impermeabilización y la mampara.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un baño en Madrid?',
        respuesta: `Un baño completo, con demolición y renovación, va de 3.500 a 7.000 € como referencia. ${PRECIOS_AVISO}`,
      },
      {
        pregunta: '¿Podéis cambiar la bañera por una ducha?',
        respuesta:
          'Sí, es uno de los trabajos incluidos en la reforma de baño. Indícalo en los detalles de tu solicitud.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Reforma de baños',
      descripcion: 'Renovación de baños, sanitarios, revestimientos e instalaciones en Madrid.',
    },
    servicioFormulario: 'Reforma de baño',
  },
  {
    path: 'reformas-cocinas-madrid',
    title: 'Reformas de Cocinas en Madrid | Precios orientativos | ObraLocalMADRID',
    description:
      'Reforma de cocinas en Madrid: muebles, encimeras, alicatado, fregadero y conexiones de electrodomésticos. Precios orientativos por tipo de reforma.',
    etiqueta: 'Reformas de cocinas en Madrid',
    h1: { linea: 'Reformas de cocinas', resaltado: 'en Madrid.' },
    kicker: 'REFORMA DE COCINAS',
    h2: 'Renueva muebles, encimera e instalaciones de tu cocina en Madrid',
    intro:
      'Puedes cambiar solo la encimera, renovar los muebles o rehacer la cocina completa con sus instalaciones de agua y luz.',
    puntos: [
      'Montaje de muebles',
      'Instalación de encimeras',
      'Alicatado y solado',
      'Conexión de electrodomésticos',
    ],
    bloques: [
      {
        titulo: 'Precios orientativos',
        texto:
          'Cambio puntual de encimera y ajustes: de 1.500 a 3.000 €. Cocina parcial con muebles y encimera: de 4.000 a 8.000 €. Cocina completa con instalaciones: de 9.000 a 15.000 €.',
      },
      {
        titulo: 'Qué influye en el presupuesto',
        texto:
          'Las medidas y el número de módulos, el material de muebles y encimera, las instalaciones de agua y luz y el desmontaje de la cocina antigua.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar una cocina en Madrid?',
        respuesta: `Una cocina completa con muebles e instalaciones va de 9.000 a 15.000 € como referencia. Los electrodomésticos, las encimeras de piedra y los cambios de distribución pueden aumentar el coste. ${PRECIOS_AVISO}`,
      },
      { pregunta: '¿En qué zonas reformáis cocinas?', respuesta: ZONAS_TEXTO },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Reforma de cocinas',
      descripcion: 'Renovación de muebles, encimeras, revestimientos e instalaciones en Madrid.',
    },
    servicioFormulario: 'Reforma de cocinas',
  },
  {
    path: 'albanileria-madrid',
    title: 'Albañilería en Madrid | Reparaciones y obra | ObraLocalMADRID',
    description:
      'Albañilería en Madrid: tabiques, enfoscados, alicatados, solados, apertura de huecos y reparaciones de obra. Precios orientativos por superficie.',
    etiqueta: 'Albañilería en Madrid',
    h1: { linea: 'Albañilería', resaltado: 'en Madrid.' },
    kicker: 'ALBAÑILERÍA',
    h2: 'Reparaciones, construcción y revestimientos en Madrid',
    intro:
      'Trabajos de albañilería para viviendas y locales, desde una reparación localizada hasta actuaciones amplias de 20 a 40 m².',
    puntos: [
      'Tabiques y demoliciones',
      'Enfoscados y enlucidos',
      'Alicatados y solados',
      'Apertura y cierre de huecos',
    ],
    bloques: [
      {
        titulo: 'Precios orientativos',
        texto:
          'Reparación localizada de 1–2 m²: de 150 a 300 €. Reparación y revestimiento de 5–10 m²: de 400 a 800 €. Trabajo amplio de 20–40 m²: de 1.200 a 2.500 €.',
      },
      {
        titulo: 'Qué se valora aparte',
        texto:
          'Las demoliciones estructurales, los refuerzos, las licencias y los residuos especiales se valoran por separado.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta un trabajo de albañilería en Madrid?',
        respuesta: `Depende de la superficie: una reparación de 5 a 10 m² va de 400 a 800 € como referencia. ${PRECIOS_AVISO}`,
      },
      { pregunta: '¿En qué zonas trabajáis?', respuesta: ZONAS_TEXTO },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Albañilería',
      descripcion: 'Reparaciones, construcción, revestimientos y trabajos de albañilería en Madrid.',
    },
    servicioFormulario: 'Albañilería',
  },
  {
    path: 'pintores-madrid',
    title: 'Pintores en Madrid | Pintura y quitar gotelé | ObraLocalMADRID',
    description:
      'Pintores en Madrid: paredes y techos, reparación de grietas, puertas y marcos. Precios orientativos desde una habitación hasta varias estancias.',
    etiqueta: 'Pintores en Madrid',
    h1: { linea: 'Pintores', resaltado: 'en Madrid.' },
    kicker: 'PINTURA',
    h2: 'Pintura de paredes y techos en tu casa o local de Madrid',
    intro:
      'Preparamos la superficie, reparamos las grietas y pintamos paredes, techos, puertas y marcos, desde una habitación hasta varias estancias.',
    puntos: [
      'Paredes y techos',
      'Lijado e imprimación',
      'Reparación de grietas',
      'Puertas y marcos',
    ],
    bloques: [
      {
        titulo: 'Precios orientativos',
        texto:
          'Habitación pequeña: de 200 a 400 €. Habitación amplia con preparación: de 500 a 900 €. Varias estancias: de 1.000 a 1.800 €.',
      },
      {
        titulo: 'Qué puede aumentar el coste',
        texto:
          'Quitar gotelé, alisar, reparar humedades o aplicar productos especiales. Cuéntanos el estado de las paredes en tu solicitud.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta pintar una habitación en Madrid?',
        respuesta: `Una habitación pequeña va de 200 a 400 € y una amplia con preparación, de 500 a 900 €, como referencia. ${PRECIOS_AVISO}`,
      },
      {
        pregunta: '¿También quitáis el gotelé?',
        respuesta:
          'Sí. El precio depende del estado de la pared, las capas de gotelé, la preparación y el acabado final.',
      },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Pintura',
      descripcion: 'Pintura de paredes y techos, preparación de superficies y acabados en Madrid.',
    },
    servicioFormulario: 'Pintura',
  },
  {
    path: 'pladur-madrid',
    title: 'Pladur en Madrid | Tabiques y falsos techos | ObraLocalMADRID',
    description:
      'Pladur en Madrid: tabiques, falsos techos, trasdosados y aislamiento térmico y acústico. Precios orientativos por metros cuadrados.',
    etiqueta: 'Pladur en Madrid',
    h1: { linea: 'Pladur', resaltado: 'en Madrid.' },
    kicker: 'PLADUR',
    h2: 'Tabiques, falsos techos y aislamiento de pladur en Madrid',
    intro:
      'Divide una estancia, baja un techo o mejora el aislamiento de tu vivienda o local con soluciones de pladur.',
    puntos: [
      'Tabiques y divisiones',
      'Falsos techos',
      'Trasdosados',
      'Aislamiento térmico y acústico',
    ],
    bloques: [
      {
        titulo: 'Precios orientativos',
        texto:
          'Techo sencillo de 3–6 m²: de 250 a 550 €. Techo o tabique de 7–15 m²: de 600 a 1.200 €. Superficie amplia de 16–30 m²: de 1.500 a 3.000 €.',
      },
      {
        titulo: 'Qué influye en el presupuesto',
        texto:
          'Los metros cuadrados y la altura, el tipo de placa, la estructura y el aislamiento, los huecos para puertas y luces, las juntas y el acabado final.',
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta un tabique de pladur en Madrid?',
        respuesta: `Un techo o tabique de 7 a 15 m² va de 600 a 1.200 € como referencia. La altura, el aislamiento, los focos empotrados y la pintura pueden modificar el precio. ${PRECIOS_AVISO}`,
      },
      { pregunta: '¿En qué zonas trabajáis?', respuesta: ZONAS_TEXTO },
      { pregunta: '¿Cómo pido presupuesto?', respuesta: SOLICITUD_TEXTO },
    ],
    servicio: {
      nombre: 'Pladur',
      descripcion: 'Tabiques, falsos techos, trasdosados y aislamiento de pladur en Madrid.',
    },
    servicioFormulario: 'Pladur',
  },

  /* ---------------------------- ZONAS ---------------------------- */
  {
    path: 'reformas-getafe',
    ...paginaDeZona(
      'Getafe',
      'Getafe Norte, Sector III, El Bercial, Perales del Río…',
      'Leganés o Fuenlabrada',
    ),
  },
  {
    path: 'reformas-alcobendas',
    ...paginaDeZona(
      'Alcobendas',
      'Valdelasfuentes, Arroyo de la Vega, La Moraleja…',
      'San Sebastián de los Reyes o el norte de Madrid capital',
    ),
  },
  {
    path: 'reformas-mostoles',
    ...paginaDeZona(
      'Móstoles',
      'Parque Coimbra, Villafontana, Móstoles Sur…',
      'Alcorcón o Fuenlabrada',
    ),
  },
];

export function buscarPagina(slug: unknown): PaginaSeo {
  return PAGINAS.find((p) => p.path === slug) ?? PAGINAS[0];
}

/** Ruta canónica de la página, con barra inicial. */
export function urlDePagina(p: PaginaSeo): string {
  return '/' + p.path;
}

export function crearJsonLd(p: PaginaSeo): object {
  const url = SITE_URL + urlDePagina(p);
  const idNegocio = SITE_URL + '/#organization';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': SITE_URL + '/#website',
        url: SITE_URL + '/',
        name: NEGOCIO.nombre,
        inLanguage: 'es-ES',
        publisher: { '@id': idNegocio },
      },
      {
        '@type': ['GeneralContractor', 'LocalBusiness'],
        '@id': idNegocio,
        name: NEGOCIO.nombre,
        url: SITE_URL + '/',
        logo: SITE_URL + '/images/logo.png',
        image: SITE_URL + '/images/logo.png',
        priceRange: '€€',
        // TODO: añadir telephone, streetAddress y postalCode cuando estén confirmados.
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Madrid',
          addressRegion: 'Comunidad de Madrid',
          addressCountry: 'ES',
        },
        areaServed: [
          { '@type': 'City', name: 'Madrid' },
          { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
        ],
      },
      {
        '@type': 'Service',
        name: p.servicio.nombre,
        description: p.servicio.descripcion,
        serviceType: p.servicio.nombre,
        url,
        provider: { '@id': idNegocio },
        areaServed: { '@type': 'Place', name: p.zona ?? 'Madrid' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((f) => ({
          '@type': 'Question',
          name: f.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
        })),
      },
    ],
  };
}
