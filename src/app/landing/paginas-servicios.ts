import { PaginaSeo } from './pagina-seo';

/** Páginas de cada servicio del catálogo. */
export const PAGINAS_SERVICIOS: PaginaSeo[] = [
  /* ---------------------------- REFORMAS INTEGRALES ---------------------------- */
  {
    path: 'reformas-integrales-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Reformas integrales en Madrid desde 500 €/m² | ObraLocal',
    description:
      'Reformas integrales en Madrid: 500–650 €/m² en calidad básica, 650–850 € en media y 850–1.200 € en alta. Plazo de 8–12 semanas y presupuesto cerrado.',
    etiqueta: 'Reformas integrales',
    resumen: 'Renovación completa o parcial de viviendas y locales, ordenada por partidas.',
    h1: { antes: 'Reformas', resaltado: 'integrales', despues: 'en Madrid' },
    puntos: [
      'Desde 500 €/m²',
      'Presupuesto por partidas',
      'Viviendas y locales',
      'Distribución e instalaciones',
    ],
    whatsapp: 'Hola, quiero presupuesto para una reforma integral en Madrid',
    kicker: 'REFORMAS INTEGRALES',
    intro:
      'Una reforma integral coordina muchos oficios en un mismo espacio: demolición, albañilería, fontanería, electricidad, suelos, carpintería y pintura. Lo que decide si sale bien no es solo la calidad de los materiales, sino el orden en que se hace cada cosa y lo claro que esté el presupuesto antes de empezar.',
    secciones: [
      {
        titulo: 'Qué entra en una reforma integral',
        parrafos: [
          'Hablamos de reforma integral cuando se actúa sobre la mayor parte de una vivienda o un local, normalmente tocando distribución e instalaciones. Puede ser un piso que se compra para vivir, una vivienda heredada que lleva décadas sin renovar o un local que cambia de uso.',
          'No todas son iguales. Una renovación de 50 m² sin mover tabiques tiene poco que ver con abrir la cocina al salón y rehacer toda la instalación eléctrica en un piso de 110 m². Por eso conviene definir el alcance por escrito antes de comparar precios.',
        ],
        lista: [
          'Demolición y nueva distribución de tabiques',
          'Albañilería e instalaciones de agua y luz',
          'Suelos y revestimientos',
          'Cocina y baño',
          'Pintura y acabados',
        ],
      },
      {
        titulo: 'El orden de los trabajos, y por qué importa',
        parrafos: [
          'Una obra bien planificada avanza de lo grueso a lo fino. Cambiar el orden suele acabar en rozas sobre paredes recién terminadas o en suelos dañados por otros oficios, y eso se paga dos veces.',
        ],
        subsecciones: [
          {
            titulo: 'Primero, lo que no se volverá a ver',
            imagen: '/images/instalaciones-vistas.webp',
            imagenAlt: 'Tuberías y cables antes de cerrar la pared',
            texto:
              'Protección de zonas comunes, demolición, retirada de escombros, nueva tabiquería y paso de instalaciones. Es el mejor momento para decidir dónde irán enchufes, tomas de agua, radiadores y puntos de luz, porque después moverlos cuesta mucho más.',
          },
          {
            titulo: 'Después, lo que se va a ver',
            imagen: '/images/rodillos-pared.webp',
            imagenAlt: 'Rodillo pintando una pared al final de la obra',
            texto:
              'Alicatados, solados, falsos techos, carpintería, muebles de cocina y baño, y por último pintura y remates. Los suelos delicados y la pintura final se dejan para el tramo final, cuando ya no pasan materiales pesados por la vivienda.',
          },
        ],
      },
      {
        titulo: 'Cómo leer un presupuesto de reforma integral',
        parrafos: [
          'Un precio global sin desglose no permite comparar. El presupuesto debe separar partidas, calidades, exclusiones, impuestos y trabajos adicionales, de forma que puedas ver qué pasa si cambias un material o eliminas una partida.',
          'Fíjate en lo que no aparece: retirada de escombros, licencias y tasas, protección de portal y ascensor, boletines de instalaciones, o qué ocurre si al demoler aparece algo imprevisto. En viviendas antiguas lo oculto es la principal fuente de desviaciones, y conviene dejar acordado cómo se valorará.',
        ],
      },
      {
        titulo: 'Permisos y comunidad de vecinos',
        parrafos: [
          'En Madrid capital, la Ordenanza 6/2022 establece la declaración responsable como vía general y reserva la licencia a los casos de su anexo. Las actuaciones que afectan a estructura, fachada o a edificios protegidos exigen más comprobaciones que un simple cambio de acabados. En otros municipios, el trámite lo marca su propio ayuntamiento, así que hay que comprobarlo caso por caso.',
          'Si vives en un edificio con comunidad, la Ley de Propiedad Horizontal obliga a comunicar la obra previamente a quien la represente, normalmente el presidente o el administrador. Avisar con tiempo también facilita acordar la protección del ascensor y el paso de materiales.',
        ],
      },
      {
        titulo: 'Materiales y acabados: dónde merece la pena invertir',
        parrafos: [
          'Antes de elegir revestimientos, separa lo que se usa a diario de lo decorativo. Suelos, grifería y herrajes de cocina soportan el desgaste de cada día, y una calidad media-alta suele compensar. En cambio, una lámpara o un color de pared se cambian sin obra. Conviene cerrar los materiales antes de empezar, porque los plazos de entrega también condicionan el calendario.',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'Una reforma integral se mide en semanas o meses, según la superficie, los trámites y el estado de las instalaciones. Lo que más alarga una obra no es el trabajo en sí, sino los cambios de decisión a mitad de camino y los materiales que tardan en llegar. Las fechas se fijan contigo al planificar, una vez definido el alcance.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un piso de 80 m² en Madrid?',
        respuesta:
          'Una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. En un piso de 80 m² en calidad media, desglosado por partidas, queda entre 44.000 y 73.500 €. Un piso de 70–80 m² se reforma en 8–12 semanas. Te damos el presupuesto cerrado por escrito cuando vemos tu caso.',
      },
      {
        pregunta: '¿Puedo vivir en casa durante una reforma integral?',
        respuesta:
          'Suele ser poco práctico: durante varias fases no hay agua, luz, cocina o baño disponibles, y hay polvo y ruido en toda la vivienda. Si necesitas quedarte, indícalo en la solicitud para valorar si la obra puede dividirse por zonas.',
      },
      {
        pregunta: '¿Qué pasa si aparece algo imprevisto al demoler?',
        respuesta:
          'En edificios antiguos puede ocurrir: tuberías en mal estado, humedades o paredes con desplomes. Por eso es recomendable acordar por escrito, antes de empezar, cómo se valorarán y aprobarán los trabajos adicionales.',
      },
      {
        pregunta: '¿Hacéis también reformas integrales de locales?',
        respuesta:
          'Sí, el servicio cubre viviendas y locales. En un local, el uso previsto puede añadir requisitos de accesibilidad, ventilación o protección contra incendios, así que cuéntanos a qué se va a dedicar.',
      },
    ],
    servicio: {
      nombre: 'Reformas integrales',
      descripcion: 'Renovación completa o parcial de viviendas y locales en Madrid.',
    },
    servicioCatalogo: 'Reformas integrales',
    servicioFormulario: 'Reformas integrales',
    imagen: '/images/reformas-integrales.webp',
    imagenAlt: 'Vivienda en Madrid durante una reforma integral',
    relacionadas: [
      'orden-trabajos-reforma-integral',
      'cuanto-cuesta-reformar-piso-70-m2-madrid',
      'calculadora-reforma',
      'reforma-piso-completo-madrid',
      'reforma-banos-madrid',
      'reforma-cocinas-madrid',
    ],
  },

  /* ---------------------------- BAÑOS ---------------------------- */
  {
    path: 'reforma-banos-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Reforma de baños en Madrid desde 5.000 € | ObraLocal',
    description:
      'Reforma de baños en Madrid: baño completo de 4–6 m² por 5.500–10.000 € en calidad media, en 2–3 semanas. Cambiar bañera por plato, 1.000–2.200 €.',
    etiqueta: 'Reforma de baños',
    resumen: 'Azulejos, sanitarios, muebles, grifería e instalaciones, por partes o por completo.',
    h1: { antes: 'Reforma de', resaltado: 'baños', despues: 'en Madrid' },
    puntos: [
      'Baño completo desde 5.000 €',
      'Parcial o completa',
      'Impermeabilización incluida en la valoración',
      'Cambio de bañera por ducha',
    ],
    whatsapp: 'Hola, quiero presupuesto para reformar un baño en Madrid',
    kicker: 'REFORMA DE BAÑO',
    intro:
      'El baño concentra en pocos metros agua, electricidad, ventilación y revestimientos, y cualquier error se nota con el tiempo en forma de humedades. Te ayudamos a decidir hasta dónde merece la pena llegar: desde cambiar un mueble y la grifería hasta demoler y empezar de cero.',
    secciones: [
      {
        titulo: 'Tres niveles de reforma, tres presupuestos distintos',
        parrafos: [
          'Antes de pedir precio, conviene ubicar tu baño en uno de estos niveles. La diferencia entre ellos no es tanto el tamaño de la estancia como lo que se abre y lo que se conserva.',
        ],
        subsecciones: [
          {
            titulo: 'Cambio puntual',
            imagen: '/images/reforma-bano-ejemplo.webp',
            imagenAlt: 'Baño con mueble y grifería renovados',
            texto:
              'Sustituyes grifería, mueble de lavabo o sanitarios sin tocar paredes ni suelo. Es lo más rápido, y tiene sentido si los azulejos están bien y no hay problemas de humedad.',
          },
          {
            titulo: 'Reforma parcial',
            imagen: '/images/bano-moderno.webp',
            imagenAlt: 'Baño con revestimientos nuevos',
            texto:
              'Renuevas revestimientos y sanitarios sin cambiar la distribución. Las tomas de agua y los desagües se quedan en su sitio, lo que contiene bastante el coste.',
          },
          {
            titulo: 'Baño completo',
            imagen: '/images/plato-ducha.webp',
            imagenAlt: 'Baño completo con ducha de obra',
            texto:
              'Demolición, nuevas instalaciones, impermeabilización, revestimientos, sanitarios y mampara. Es la opción recomendable si las tuberías son antiguas: reformar sobre una instalación agotada es arriesgarse a romper lo nuevo.',
          },
        ],
      },
      {
        titulo: 'Lo que no se ve es lo que más importa',
        parrafos: [
          'La parte más importante de un baño queda oculta tras el azulejo. La impermeabilización de la zona de ducha, la pendiente hacia el desagüe y el estado de las tuberías determinan si la reforma aguantará años o si tendrás filtraciones al vecino de abajo.',
          'En un piso con más de treinta o cuarenta años es habitual encontrar tuberías de plomo o hierro, y desagües con poca pendiente. Si vas a levantar suelo y paredes, es el momento de revisarlos, porque hacerlo después significa volver a romper.',
        ],
        lista: [
          'Medidas de paredes y suelo',
          'Demolición y retirada de escombros',
          'Calidad de los azulejos',
          'Instalaciones y desagües',
          'Impermeabilización y mampara',
        ],
      },
      {
        titulo: 'Decisiones que conviene tomar antes de empezar',
        parrafos: [
          'Sin agua ni baño en casa durante unos días, conviene planificar. Si es tu único baño, coméntalo en la solicitud para valorar cómo organizar el trabajo y qué fases dejan el baño fuera de servicio.',
          'Mover el inodoro es de lo que más encarece un baño, porque su desagüe tiene un diámetro grande y necesita pendiente hacia la bajante. Si puedes mantenerlo donde está, ahorrarás obra. Mover lavabo o ducha suele ser más sencillo, aunque depende del edificio.',
          'Elige los azulejos y el plato de ducha antes de fijar el presupuesto final: el formato y la colocación influyen en el precio de la mano de obra. Las piezas de gran formato y los diseños con cortes requieren más tiempo que un formato estándar.',
          'En baños sin ventana, la ventilación no es un detalle. Un extractor bien dimensionado y conectado al conducto adecuado evita condensaciones y moho, especialmente en los baños interiores tan frecuentes en los pisos de Madrid.',
        ],
      },
      {
        titulo: 'Proceso de la obra',
        parrafos: [
          'Primero se protegen las zonas de paso y se desmonta lo existente. Después se adaptan fontanería, electricidad y desagües, y se impermeabiliza la zona húmeda. Con la base lista llega el alicatado y el solado, y por último la colocación de sanitarios, mueble, grifería y mampara, seguida de una prueba de agua y desagües.',
        ],
      },
      {
        titulo: 'Materiales y acabados',
        parrafos: [
          'En suelos, busca piezas antideslizantes, sobre todo en la zona de ducha. Las juntas estrechas con un buen producto se limpian mejor. Si el baño es pequeño, los tonos claros y un espejo grande dan amplitud, y un mueble suspendido deja ver más suelo.',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'Un cambio puntual puede resolverse en poco tiempo, mientras que un baño completo requiere secados y varios oficios que se suceden, por lo que se organiza por fases. Las fechas se acuerdan contigo al planificar, y conviene preverlas bien si es el único baño de la vivienda.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un baño en Madrid?',
        respuesta:
          'Un baño completo de 4 a 6 m² cuesta entre 5.500 y 10.000 € en calidad media, IVA incluido: en básica parte de 5.000 € y en alta puede llegar a 13.000 €. Se hace en 2–3 semanas. Si solo quieres cambiar la bañera por un plato de ducha, son 1.000–2.200 € en 1–2 días.',
      },
      {
        pregunta: '¿Se puede alicatar encima del azulejo antiguo?',
        respuesta:
          'A veces sí, si la base está firme y bien adherida, y reduce escombro. El inconveniente es que no permite revisar tuberías ni impermeabilización y reduce algo el espacio, por lo que no es buena idea si las instalaciones son antiguas.',
      },
      {
        pregunta: '¿Necesito permiso para reformar el baño?',
        respuesta:
          'En Madrid capital, los acabados interiores de una vivienda no protegida no suelen necesitar título urbanístico, pero cambiar instalaciones o distribución puede requerir declaración responsable. Comunícalo también a tu comunidad antes de empezar.',
      },
    ],
    servicio: {
      nombre: 'Reforma de baños',
      descripcion: 'Renovación de baños, sanitarios, revestimientos e instalaciones en Madrid.',
    },
    servicioCatalogo: 'Reforma de baño',
    servicioFormulario: 'Reforma de baño',
    imagen: '/images/reforma-bano.webp',
    imagenAlt: 'Baño reformado con revestimientos nuevos en una vivienda de Madrid',
    relacionadas: [
      'que-pedir-presupuesto-reforma',
      'calculadora-reforma',
      'cambiar-banera-por-plato-ducha-madrid',
      'reforma-cocinas-madrid',
      'reformas-integrales-madrid',
      'albanileria-madrid',
    ],
  },

  /* ---------------------------- COCINAS ---------------------------- */
  {
    path: 'reforma-cocinas-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Reforma de cocinas en Madrid desde 8.000 € | ObraLocal',
    description:
      'Reforma de cocinas en Madrid: cocina completa de 8–12 m² por 8.000–18.000 €, sin electrodomésticos, en 3–4 semanas. Presupuesto cerrado por escrito.',
    etiqueta: 'Reforma de cocinas',
    resumen: 'Muebles, encimeras, revestimientos e instalaciones de agua y luz.',
    h1: { antes: 'Reforma de', resaltado: 'cocinas', despues: 'en Madrid' },
    puntos: [
      'Desde 8.000 €',
      'Muebles y encimeras',
      'Agua y electricidad',
      'Cambio puntual o cocina completa',
    ],
    whatsapp: 'Hola, quiero presupuesto para reformar una cocina en Madrid',
    kicker: 'REFORMA DE COCINAS',
    intro:
      'Reformar la cocina no siempre significa cambiarlo todo. A veces basta con una encimera nueva y otras hay que replantear la distribución y las instalaciones. Lo sensato es partir de cómo cocinas y de lo que no funciona hoy, y a partir de ahí decidir el alcance.',
    secciones: [
      {
        titulo: 'Empieza por la distribución',
        parrafos: [
          'Antes que el color de los muebles, importa el recorrido entre fregadero, zona de cocción y frigorífico. Si tienes que dar muchos pasos o no hay encimera libre junto a la placa, unos muebles nuevos no resolverán el problema.',
          'Muchos pisos de Madrid tienen cocinas estrechas o alargadas. Ahí el reto suele ser aprovechar la altura con muebles hasta el techo y reservar una zona de trabajo continua, más que añadir módulos. Si estudias abrir la cocina al salón, recuerda que antes hay que confirmar que el tabique no es estructural y revisar las condiciones de ventilación.',
        ],
      },
      {
        titulo: 'Materiales de encimera y muebles',
        parrafos: [
          'La elección de materiales cambia mucho el presupuesto y el mantenimiento. No hay una opción mejor para todos: depende de cuánto cocines y de cuánto cuidado quieras dedicarle.',
        ],
        subsecciones: [
          {
            titulo: 'Encimera',
            imagen: '/images/cocina-abierta.webp',
            imagenAlt: 'Cocina con encimera clara',
            texto:
              'El laminado es la opción económica y hoy tiene acabados muy conseguidos, aunque sufre más con el calor y las juntas mojadas. Las piedras naturales y los compactos soportan mejor el uso intensivo, pero pesan más y encarecen la partida: las encimeras de piedra pueden aumentar el coste.',
          },
          {
            titulo: 'Muebles',
            imagen: '/images/reforma-cocina.webp',
            imagenAlt: 'Muebles de cocina nuevos',
            texto:
              'Lo que más se nota con los años son los herrajes, las bisagras y las guías de los cajones, y la resistencia del tablero a la humedad, sobre todo bajo el fregadero. Merece la pena mirar eso antes que el acabado exterior.',
          },
        ],
      },
      {
        titulo: 'Instalaciones: el momento de ponerlas al día',
        parrafos: [
          'La cocina es la estancia con más consumo eléctrico de la vivienda. Horno, placa de inducción, lavavajillas y lavadora necesitan circuitos adecuados, y en una instalación antigua puede que no los haya. Si la placa va a pasar de gas a inducción, hay que comprobar la potencia disponible.',
          'Mover el fregadero o el lavavajillas implica llevar agua y desagüe con pendiente suficiente. Cambiar de sitio la cocina de gas es un trabajo que debe hacer un instalador autorizado. También conviene comprobar por dónde sale la campana: un recorrido corto y con pocos codos extrae mucho mejor.',
        ],
        lista: [
          'Medidas y número de módulos',
          'Material de muebles y encimera',
          'Instalaciones de agua y luz',
          'Desmontaje de la cocina antigua',
          'Cortes, remates y conexiones',
        ],
      },
      {
        titulo: 'Qué suele quedar fuera del precio',
        parrafos: [
          'Mide también el hueco por el que entrarán los muebles y la encimera. En edificios antiguos, un portal o ascensor estrecho puede obligar a dividir una pieza larga, y eso influye en el diseño.',
          'Los electrodomésticos, las encimeras de piedra y los cambios de distribución pueden aumentar el coste, así que aclara si están incluidos. Pregunta también quién suministra los muebles, quién mide y quién responde si una pieza llega mal: si cada parte la lleva una empresa distinta, conviene saber quién coordina el conjunto.',
        ],
      },
      {
        titulo: 'Qué incluye',
        parrafos: [
          'Según el alcance, la reforma puede abarcar desde un único elemento hasta toda la estancia.',
        ],
        lista: [
          'Montaje de muebles',
          'Instalación de encimeras',
          'Alicatado y solado',
          'Fregadero y grifería',
          'Conexiones de electrodomésticos',
        ],
      },
      {
        titulo: 'Proceso de la obra',
        parrafos: [
          'Se empieza midiendo con precisión y desmontando la cocina antigua. Luego se adaptan agua, luz y extracción, se reparan paredes y se renuevan revestimientos. Los muebles se montan al final de la obra gruesa, y la encimera se mide sobre ellos para ajustarla bien. Por último se conectan los electrodomésticos.',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'La fabricación o la entrega de muebles y encimeras suele marcar el calendario más que la propia obra, así que conviene encargarlos con margen. Mientras dure, tendrás la cocina fuera de servicio durante algunas fases: pregúntalo al fijar las fechas para organizarte en casa.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar una cocina en Madrid?',
        respuesta:
          'Una cocina completa de 8 a 12 m² cuesta entre 8.000 y 18.000 €, sin electrodomésticos e IVA incluido. Se hace en 3–4 semanas. Cada punto de luz empotrado en el techo suma 25–40 €.',
      },
      {
        pregunta: '¿Puedo cambiar la encimera sin cambiar los muebles?',
        respuesta:
          'Sí, siempre que los muebles estén nivelados y en buen estado. Hay que retirar la encimera antigua con cuidado y volver a conectar fregadero y placa. Indica en la solicitud el material actual y el que te gustaría poner.',
      },
      {
        pregunta: '¿Puedo poner los azulejos nuevos sobre los antiguos?',
        respuesta:
          'Muchas veces es posible, si los antiguos están firmes y no hay humedades. Hay que tener en cuenta el grosor que se añade en enchufes, remates y encuentros con los muebles.',
      },
    ],
    servicio: {
      nombre: 'Reforma de cocinas',
      descripcion: 'Renovación de muebles, encimeras, revestimientos e instalaciones en Madrid.',
    },
    servicioCatalogo: 'Reforma de cocinas',
    servicioFormulario: 'Reforma de cocinas',
    imagen: '/images/cocina-nueva.webp',
    imagenAlt: 'Cocina nueva con isla central y muebles claros',
    relacionadas: [
      'que-pedir-presupuesto-reforma',
      'calculadora-reforma',
      'reforma-banos-madrid',
      'reformas-integrales-madrid',
      'albanileria-madrid',
      'pintores-madrid',
    ],
  },

  /* ---------------------------- ALBAÑILERÍA ---------------------------- */
  {
    path: 'albanileria-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Albañilería en Madrid: oficial desde 25 €/h | ObraLocal',
    description:
      'Albañilería en Madrid: tabiques, alicatados a 35–60 €/m², humedades a 30–60 €/m² y obra. Oficial a 25–35 €/h, IVA incluido y presupuesto cerrado.',
    etiqueta: 'Albañilería',
    resumen: 'Tabiques, enfoscados, alicatados, solados, huecos y reparaciones de obra.',
    h1: { antes: '', resaltado: 'Albañilería', despues: 'en Madrid' },
    puntos: [
      'Oficial desde 25 €/h',
      'Arreglos pequeños y obra',
      'Tabiques, alicatados y solados',
      'Retirada de escombros valorada',
    ],
    whatsapp: 'Hola, quiero presupuesto para un trabajo de albañilería en Madrid',
    kicker: 'ALBAÑILERÍA',
    intro:
      'La albañilería es la base de casi cualquier obra, y también lo que resuelve los pequeños problemas de una vivienda: una pared dañada, un hueco que abrir o cerrar, un suelo levantado. Aquí encontrarás qué trabajos cubrimos, qué cuesta cada escala de intervención y qué conviene comprobar antes.',
    secciones: [
      {
        titulo: 'Trabajos habituales',
        parrafos: [
          'Un albañil interviene tanto en reformas grandes como en arreglos de una mañana. Estos son los encargos más frecuentes y lo que implica cada uno.',
        ],
        subsecciones: [
          {
            titulo: 'Tabiques: levantar y demoler',
            imagen: '/images/obra-en-curso.webp',
            imagenAlt: 'Vivienda con tabiques en obra',
            texto:
              'Dividir una habitación o unir dos estancias cambia por completo una vivienda. El punto clave es confirmar antes que el muro que se quiere tirar no sea estructural, y prever por dónde pasan instalaciones que pueda haber dentro.',
          },
          {
            titulo: 'Enfoscados y enlucidos',
            imagen: '/images/enlucido.webp',
            imagenAlt: 'Enlucido de una pared',
            texto:
              'Son las capas que regularizan la pared antes del acabado. Una pared mal preparada se nota después en la pintura o en el azulejo, por lo que es una de las partidas en las que no conviene recortar.',
          },
          {
            titulo: 'Alicatados y solados',
            imagen: '/images/reforma-bano-ejemplo.webp',
            imagenAlt: 'Baño con alicatado nuevo',
            texto:
              'Colocación de azulejo en paredes y baldosa en suelos. Influyen el formato de la pieza, el estado de la base y la cantidad de cortes. En terrazas y exteriores, además, importan la pendiente y las juntas de dilatación.',
          },
          {
            titulo: 'Apertura y cierre de huecos',
            imagen: '/images/albanileria-ejemplo.webp',
            imagenAlt: 'Reparación de una pared',
            texto:
              'Para una puerta nueva, un paso más ancho o tapar una antigua. En tabiques simples es una obra sencilla; en muros de carga o en fachada es otra cosa, y requiere estudio técnico y permiso.',
          },
        ],
      },
      {
        titulo: 'Cuándo hay que parar y consultar a un técnico',
        parrafos: [
          'Las grietas no son todas iguales. Una fisura fina en el yeso suele ser superficial y se repara durante la preparación. Una grieta que crece, que atraviesa el muro o que aparece en diagonal junto a puertas y ventanas puede indicar un movimiento del edificio, y debería verla un técnico antes de taparla.',
          'Lo mismo ocurre con las demoliciones. Las demoliciones estructurales, los refuerzos, las licencias y los residuos especiales se valoran aparte, porque requieren proyecto o gestión específica. En los edificios antiguos de Madrid, los muros de carga no siempre son evidentes a simple vista, y algunos tabiques han terminado trabajando con los años.',
        ],
      },
      {
        titulo: 'Qué nos ayuda a darte una orientación mejor',
        parrafos: [
          'Si el arreglo es consecuencia de otro problema, como una fuga o una humedad, dilo también: tiene poco sentido reparar la pared antes de solucionar el origen, y puede ser necesario coordinarse con el seguro o con la comunidad.',
          'Las medidas aproximadas, la planta en la que está el trabajo y, cuando hablemos, unas fotos ayudan a afinar. Si no hay ascensor o los escombros deben bajarse a mano, el coste sube, y lo mismo si hay que colocar un contenedor en la calle, porque ocupar la vía pública requiere autorización municipal.',
        ],
        lista: [
          'Medidas y tipo de trabajo',
          'Materiales y preparación',
          'Estado del soporte',
          'Accesibilidad y escombros',
          'Protecciones y acabados',
        ],
      },
      {
        titulo: 'Proceso de la obra',
        parrafos: [
          'Se protege la zona, se demuele o se sanea lo necesario y se retira el escombro. A continuación se ejecuta el trabajo: tabique, enfoscado, alicatado o reparación. Se respetan los tiempos de fraguado y secado antes de dar acabados, porque si se acortan aparecen fisuras o piezas sueltas.',
        ],
      },
      {
        titulo: 'Materiales y acabados',
        parrafos: [
          'La elección depende del uso. Un tabique de ladrillo aporta masa y resistencia, el mortero debe ser compatible con el soporte existente y, en zonas húmedas o exteriores, hacen falta adhesivos y juntas adecuados. En edificios antiguos conviene evitar materiales que impidan transpirar a los muros.',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'Una reparación localizada es un trabajo corto, aunque el secado puede requerir volver otro día para el acabado. Los trabajos amplios dependen de la superficie, del acceso y de la retirada de escombros. Te indicaremos las fechas previstas al concretar el presupuesto.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta un trabajo de albañilería en Madrid?',
        respuesta:
          'Depende del trabajo. La hora de oficial de albañilería cuesta 25–35 €, el alicatado 35–60 €/m² y el tratamiento de humedades 30–60 €/m², desde 400 € (2–5 días). En una reforma integral de 80 m², la albañilería y la tabiquería suponen 6.000–10.000 €. IVA incluido.',
      },
      {
        pregunta: '¿Atendéis trabajos pequeños?',
        respuesta:
          'Sí, la guía de precios incluye reparaciones localizadas de 1 a 2 m². Describe el trabajo en la solicitud, y si puedes, añade medidas aproximadas en los detalles.',
      },
      {
        pregunta: '¿Cómo sé si un muro es de carga?',
        respuesta:
          'No debe suponerse a simple vista. Su grosor y posición dan pistas, y los planos del edificio ayudan, pero la confirmación debe darla un técnico competente antes de abrir o demoler nada.',
      },
      {
        pregunta: '¿Quién se ocupa de los escombros?',
        respuesta:
          'La retirada de escombros debe figurar en el presupuesto como partida. Comprueba que está incluida y cómo se hará, ya que depende del acceso al edificio y del volumen de la obra.',
      },
    ],
    servicio: {
      nombre: 'Albañilería',
      descripcion: 'Reparaciones, construcción, revestimientos y trabajos de albañilería en Madrid.',
    },
    servicioCatalogo: 'Albañilería',
    servicioFormulario: 'Albañilería',
    imagen: '/images/albanil-ladrillos.webp',
    imagenAlt: 'Mano de albañil colocando un ladrillo con mortero',
    relacionadas: [
      'orden-trabajos-reforma-integral',
      'calculadora-reforma',
      'reformas-integrales-madrid',
      'pladur-madrid',
      'alisado-paredes-madrid',
      'reforma-banos-madrid',
    ],
  },

  /* ---------------------------- PINTORES ---------------------------- */
  {
    path: 'pintores-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Pintores en Madrid: piso de 80 m² desde 1.400 € | ObraLocal',
    description:
      'Pintores en Madrid: pintar un piso de 80 m² cuesta 1.400–2.600 € en 3–5 días, a 8–14 €/m² de pared. Con gotelé, 14–22 €/m². Presupuesto cerrado.',
    etiqueta: 'Pintores',
    resumen: 'Pintura de paredes y techos, preparación de superficies y acabados.',
    h1: { antes: '', resaltado: 'Pintores', despues: 'en Madrid' },
    puntos: [
      'Desde 8 €/m²',
      'Paredes y techos',
      'Preparación del soporte',
      'Puertas y marcos',
    ],
    whatsapp: 'Hola, quiero presupuesto para pintar mi vivienda en Madrid',
    kicker: 'PINTURA',
    intro:
      'Pintar parece sencillo hasta que se ven las marcas de una mala preparación con la luz lateral de la tarde. La calidad del resultado depende sobre todo de lo que se hace antes de abrir el bote: proteger, reparar, lijar e imprimar. Por eso dos presupuestos de la misma habitación pueden ser muy diferentes.',
    secciones: [
      {
        titulo: 'Qué hace que un trabajo de pintura dure',
        parrafos: [
          'Una pared con grietas, restos de pintura descascarillada o manchas no se arregla con más pintura. Estas son las fases que conviene ver reflejadas en un presupuesto serio.',
        ],
        subsecciones: [
          {
            titulo: 'Protección',
            imagen: '/images/pintura-ejemplo.webp',
            imagenAlt: 'Habitación preparada para pintar',
            texto:
              'Cubrir suelos, muebles, enchufes y marcos. Es tiempo de trabajo real, sobre todo si la vivienda está amueblada y se sigue habitando durante la obra.',
          },
          {
            titulo: 'Preparación del soporte',
            imagen: '/images/llana-masilla.webp',
            imagenAlt: 'Masilla aplicada con llana',
            texto:
              'Reparar grietas y agujeros con masilla, lijar para unificar y aplicar imprimación donde haga falta. Las paredes nuevas de yeso o las reparaciones absorben de otro modo la pintura, y sin imprimación se notan las diferencias de tono.',
          },
          {
            titulo: 'Manos de pintura',
            imagen: '/images/rodillos-pared.webp',
            imagenAlt: 'Rodillo sobre una pared blanca',
            texto:
              'Cuántas manos hacen falta depende del color anterior y del nuevo. Pasar de un tono oscuro a un blanco, o al revés, puede requerir manos adicionales. Es uno de los datos que deben quedar por escrito.',
          },
        ],
      },
      {
        titulo: 'Elegir pintura y acabado',
        parrafos: [
          'Si dudas entre dos colores, prueba una muestra en la pared real: la luz de cada estancia cambia mucho el tono.',
          'Para paredes y techos de vivienda, lo habitual es la pintura plástica. El acabado también influye: el mate disimula mejor las imperfecciones, algo muy útil en paredes antiguas o con la luz rasante de una ventana; el satinado se limpia mejor, por lo que suele elegirse en pasillos y zonas de paso.',
          'En cocinas y baños conviene una pintura resistente a la humedad y a la limpieza frecuente, y en techos, un producto que no salpique demasiado y unifique bien. Si hay manchas de humedad, primero hay que resolver la causa: pintar encima solo las esconde durante unos meses.',
        ],
      },
      {
        titulo: 'Qué puede aumentar el coste',
        parrafos: [
          'En los edificios de Madrid con patios interiores, es habitual que aparezcan manchas de humedad o de hollín en las paredes que dan al patio. Antes de pintarlas, hay que tratarlas con el producto adecuado, porque de lo contrario pueden volver a aparecer a través de la pintura nueva.',
          'Quitar gotelé, alisar, reparar humedades o aplicar productos especiales puede aumentar el coste. También influyen la altura de los techos, muy habitual en edificios antiguos del centro de Madrid, y que haya molduras, radiadores o muchas puertas y marcos que recortar.',
          'Si la vivienda está vacía, se trabaja más rápido que con los muebles dentro. Si vas a cambiar suelos o hacer otras obras, deja la pintura final para el final.',
        ],
        lista: [
          'Superficie que se pintará',
          'Estado de paredes y techos',
          'Gotelé, grietas o humedades',
          'Número de manos y pintura',
          'Protección de muebles y suelos',
        ],
      },
      {
        titulo: 'Qué incluye',
        parrafos: [
          'Estos son los trabajos que forman parte del servicio. Indica en la solicitud cuáles necesitas.',
        ],
        lista: [
          'Pintura plástica de paredes y techos',
          'Lijado e imprimación',
          'Reparación de grietas',
          'Pintura de puertas y marcos',
          'Acabados decorativos',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'Depende de la superficie, de cómo estén las paredes y de los tiempos de secado entre manos, que no conviene acortar. Con la vivienda vacía se avanza más rápido que con muebles que hay que mover y proteger. Las fechas se acuerdan contigo según las estancias que tengas que dejar libres.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta pintar una habitación en Madrid?',
        respuesta:
          'La pintura cuesta 8–14 €/m² de pared. Pintar paredes y techos de un piso de 80 m² cuesta entre 1.400 y 2.600 € y se hace en 3–5 días. Si hay gotelé, quitarlo, alisar y pintar sube a 14–22 €/m² de pared. IVA incluido.',
      },
      {
        pregunta: '¿También quitáis el gotelé?',
        respuesta:
          'Sí. El precio depende del estado de la pared, las capas de gotelé, la preparación y el acabado final. Tienes más información en la página específica sobre quitar gotelé.',
      },
      {
        pregunta: '¿Hay que vaciar la casa para pintar?',
        respuesta:
          'No necesariamente. Los muebles se pueden agrupar en el centro de cada estancia y cubrir. Indica en la solicitud si la vivienda estará habitada, porque afecta a la organización y a la protección necesaria.',
      },
      {
        pregunta: '¿Pintáis puertas y marcos?',
        respuesta:
          'Sí, la pintura de puertas y marcos forma parte del servicio. Indícalo en la solicitud, porque requiere una preparación y un producto distintos a los de las paredes.',
      },
    ],
    servicio: {
      nombre: 'Pintura',
      descripcion: 'Pintura de paredes y techos, preparación de superficies y acabados en Madrid.',
    },
    servicioCatalogo: 'Pintura',
    servicioFormulario: 'Pintura',
    imagen: '/images/pintor-rodillo.webp',
    imagenAlt: 'Pintor de espaldas pintando una pared con rodillo',
    relacionadas: [
      'alisar-paredes-o-quitar-gotele',
      'calculadora-reforma',
      'quitar-gotele-madrid',
      'alisado-paredes-madrid',
      'pladur-madrid',
      'reformas-integrales-madrid',
    ],
  },

  /* ---------------------------- PLADUR ---------------------------- */
  {
    path: 'pladur-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Pladur en Madrid: tabiques y techos desde 30 €/m²',
    description:
      'Pladur en Madrid: tabiques a 35–55 €/m², falsos techos a 30–50 €/m² y puntos de luz a 25–40 €. Precios con IVA y presupuesto cerrado por escrito.',
    etiqueta: 'Pladur',
    resumen: 'Tabiques, falsos techos, trasdosados y aislamiento térmico y acústico.',
    h1: { antes: '', resaltado: 'Pladur', despues: 'en Madrid' },
    puntos: [
      'Desde 30 €/m²',
      'Tabiques y falsos techos',
      'Trasdosados',
      'Aislamiento térmico y acústico',
    ],
    whatsapp: 'Hola, quiero presupuesto para un trabajo de pladur en Madrid',
    kicker: 'PLADUR',
    intro:
      'El pladur, o placa de yeso laminado, permite dividir una estancia, bajar un techo o mejorar el aislamiento con menos peso y obra húmeda que un tabique tradicional. Es rápido y limpio, pero solo rinde si se elige bien la placa y se presta atención a estructura y juntas.',
    secciones: [
      {
        titulo: 'Para qué se usa',
        parrafos: [
          'Las soluciones de placa de yeso resuelven problemas distintos, y cada una tiene sus claves.',
        ],
        subsecciones: [
          {
            titulo: 'Tabiques y divisiones',
            imagen: '/images/tabique-pladur.webp',
            imagenAlt: 'Montaje de un tabique de pladur',
            texto:
              'Una estructura metálica con placas por ambas caras crea una habitación nueva sin apenas añadir peso sobre el forjado, lo que resulta útil en edificios antiguos. Con lana mineral en el interior, además, mejora el aislamiento entre estancias.',
          },
          {
            titulo: 'Falsos techos',
            imagen: '/images/pladur-ejemplo.webp',
            imagenAlt: 'Falso techo de pladur',
            texto:
              'Permiten ocultar instalaciones o conductos, empotrar focos e igualar techos irregulares. La altura libre que queda es clave: en un piso con techos bajos, unos centímetros pueden marcar la diferencia.',
          },
          {
            titulo: 'Trasdosados',
            imagen: '/images/instalando-pladur.webp',
            imagenAlt: 'Operario trabajando en un trasdosado',
            texto:
              'Es un revestimiento adosado a una pared existente. Sirve para mejorar el aislamiento, ocultar defectos o pasar instalaciones sin hacer rozas. A cambio, resta unos centímetros a la habitación, que conviene medir antes.',
          },
        ],
      },
      {
        titulo: 'No todas las placas son iguales',
        parrafos: [
          'La placa estándar se usa en zonas secas. Para baños, cocinas y otros espacios con humedad se emplean placas hidrófugas, y existen placas específicas para mejorar la protección frente al fuego o el rendimiento acústico. Elegir la correcta es parte del presupuesto, no un detalle de última hora.',
          'Si quieres colgar un mueble pesado, una caldera o un televisor grande, hay que preverlo durante el montaje con refuerzos dentro del tabique. Después es posible usar anclajes, pero tienen límites.',
        ],
      },
      {
        titulo: 'Aislamiento: expectativas realistas',
        parrafos: [
          'Si tu objetivo es el aislamiento térmico, la parte que más suele compensar es la pared que da al exterior, y conviene evitar puentes térmicos en los encuentros. Cuéntanos en la solicitud qué problema notas, frío, calor o ruido, y en qué pared, porque cada uno se resuelve de forma diferente.',
          'Un trasdosado con lana mineral puede reducir de forma apreciable el ruido de un vecino o mejorar el confort de una pared fría, pero el resultado depende de todo el conjunto. El sonido se cuela por enchufes, rendijas y encuentros con techo y suelo, así que la ejecución y el sellado perimetral importan tanto como el material.',
        ],
      },
      {
        titulo: 'Cómo se calcula el precio',
        parrafos: [
          'También influye el acabado que se pida. Los niveles de terminación más cuidados llevan más masilla y lijado, y solo compensan si la pared recibe luz rasante o va a llevar pintura satinada.',
          'La altura, el aislamiento, los focos empotrados y el acabado de pintura pueden modificar el precio. Las juntas también marcan la diferencia: un buen encintado y lijado es lo que evita que se noten las uniones cuando la luz incide de lado.',
        ],
        lista: [
          'Metros cuadrados y altura',
          'Tipo de placa',
          'Estructura y aislamiento',
          'Huecos para puertas y luces',
          'Juntas y acabado final',
        ],
      },
      {
        titulo: 'Proceso de la obra',
        parrafos: [
          'Se replantea sobre suelo y techo dónde irá la estructura, se fijan los perfiles metálicos y se dejan pasadas las instalaciones. Después se coloca el aislamiento, si lo lleva, y se atornillan las placas. Por último se encintan y lijan las juntas para dejar la superficie lista para pintar.',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'Es uno de los sistemas más rápidos, porque apenas tiene obra húmeda. Aun así, las juntas necesitan secarse entre manos de pasta, y si el trabajo incluye electricidad o pintura hay que coordinarlas. El calendario se concreta al definir los metros y el acabado.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta un tabique o techo de pladur en Madrid?',
        respuesta:
          'Un tabique de pladur cuesta 35–55 €/m² y un falso techo 30–50 €/m²; el falso techo de un piso completo se hace en 1–2 semanas. Cada punto de luz empotrado suma 25–40 €. IVA incluido.',
      },
      {
        pregunta: '¿Se puede poner pladur en un baño?',
        respuesta:
          'Sí, con placas hidrófugas y una buena ventilación. En la zona de ducha, además, hay que impermeabilizar correctamente antes de alicatar.',
      },
      {
        pregunta: '¿Un tabique de pladur aísla bien del ruido?',
        respuesta:
          'Puede aislar bien si lleva lana mineral, placas adecuadas y juntas perimetrales bien selladas. Un tabique sencillo sin aislamiento interior transmite bastante ruido.',
      },
      {
        pregunta: '¿Necesito permiso para poner un tabique de pladur?',
        respuesta:
          'Cambiar la distribución no es lo mismo que renovar acabados, y puede requerir un trámite municipal. Consulta con tu ayuntamiento qué se exige en tu caso, y comunica la obra a la comunidad de vecinos.',
      },
    ],
    servicio: {
      nombre: 'Pladur',
      descripcion: 'Tabiques, falsos techos, trasdosados y aislamiento de pladur en Madrid.',
    },
    servicioCatalogo: 'Pladur',
    servicioFormulario: 'Pladur',
    imagen: '/images/tabique-pladur.webp',
    imagenAlt: 'Montaje de un tabique de pladur en una vivienda',
    relacionadas: [
      'alisar-paredes-o-quitar-gotele',
      'calculadora-reforma',
      'albanileria-madrid',
      'alisado-paredes-madrid',
      'pintores-madrid',
      'reformas-integrales-madrid',
    ],
  },

  /* ---------------------------- PAREDES ---------------------------- */
  {
    path: 'alisado-paredes-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Alisado de paredes en Madrid desde 10 €/m² | ObraLocal',
    description:
      'Alisado de paredes en Madrid a 10–16 €/m²; con gotelé, quitar, alisar y pintar a 14–22 €/m². Un piso completo en 1–2 semanas, presupuesto cerrado.',
    etiqueta: 'Alisado y reparación de paredes',
    resumen: 'Reparación, alisado, enlucido y renovación de paredes.',
    h1: { antes: 'Alisado de', resaltado: 'paredes', despues: 'en Madrid' },
    puntos: [
      'Desde 10 €/m²',
      'Grietas y agujeros',
      'Enlucido y revestimiento',
      'Listas para pintar o empapelar',
    ],
    whatsapp: 'Hola, quiero presupuesto para alisar paredes en Madrid',
    kicker: 'PAREDES',
    intro:
      'Una pared lisa cambia la sensación de toda una habitación, pero no se consigue con pintura. Alisar es un trabajo de preparación: sanear lo que está suelto, reparar grietas y agujeros, aplicar el material adecuado y lijar hasta que la superficie no delate nada a contraluz.',
    secciones: [
      {
        titulo: 'Qué significa alisar una pared',
        parrafos: [
          'Alisar es regularizar una superficie irregular para dejarla lista para pintar o empapelar. En paredes con pequeños defectos basta una capa fina de masilla. Si la pared está muy irregular o el soporte se ha deteriorado, puede hacer falta un enlucido más grueso de yeso o incluso un trasdosado de pladur.',
          'El tipo de acabado que quieras importa más de lo que parece. Una pintura mate perdona pequeñas irregularidades, mientras que un acabado satinado o una luz rasante junto a una ventana las revelan todas, y requieren un alisado más cuidadoso.',
        ],
      },
      {
        titulo: 'Diagnóstico antes de empezar',
        parrafos: [
          'Tres comprobaciones sencillas evitan que el trabajo falle a los pocos meses.',
        ],
        subsecciones: [
          {
            titulo: 'Grietas',
            imagen: '/images/paredes-ejemplo.webp',
            imagenAlt: 'Pared reparada',
            texto:
              'Las fisuras finas del acabado se abren, se rellenan y se refuerzan con malla si hace falta. Pero las grietas activas, que siguen creciendo, volverán a salir si no se resuelve antes su causa.',
          },
          {
            titulo: 'Humedad',
            imagen: '/images/piso-en-obra.webp',
            imagenAlt: 'Paredes de un piso en obra',
            texto:
              'Si hay manchas, desconchones o salitre, hay que encontrar y tratar el origen antes de aplicar nada. Alisar sobre una pared húmeda es trabajo perdido.',
          },
          {
            titulo: 'Capas antiguas',
            imagen: '/images/llana-masilla.webp',
            imagenAlt: 'Retirada de capas antiguas con llana',
            texto:
              'En pisos con varias décadas, debajo puede haber papel pintado, temple o muchas capas de pintura. Si no están bien adheridas, el material nuevo arrastrará lo que tiene debajo, por lo que hay que retirarlas o fijarlas con una imprimación.',
          },
        ],
      },
      {
        titulo: 'Paredes con gotelé',
        parrafos: [
          'Es el caso más frecuente en las viviendas de Madrid construidas entre los años 60 y 90. Se puede raspar o cubrir, y cada método tiene sus ventajas. Lo explicamos con detalle en nuestra página específica sobre cómo quitar gotelé.',
        ],
      },
      {
        titulo: 'De qué depende el precio',
        parrafos: [
          'Un consejo práctico: enciende una lámpara junto a la pared y mírala de lado. Lo que veas a contraluz es lo que aparecerá con el acabado final, y te ayudará a explicar qué zonas te preocupan.',
          'Si la pared se va a pintar justo después, ten presente que la pintura necesita una superficie seca y sin polvo. Cuando el alisado y la pintura se hacen en la misma obra, resulta más fácil coordinar esos tiempos, y un mismo equipo responde del resultado final.',
          'El precio depende del estado de la pared, las capas de gotelé, la preparación y el acabado final. El alisado genera polvo fino, sobre todo al lijar, por lo que proteger muebles y suelos y ventilar son parte del trabajo. Con la vivienda vacía todo es más rápido y más limpio.',
        ],
        lista: [
          'Metros cuadrados y altura',
          'Tipo y estado del soporte',
          'Gotelé y capas de pintura',
          'Masilla, lijado e imprimación',
          'Protección y retirada de residuos',
        ],
      },
      {
        titulo: 'Qué incluye',
        parrafos: [
          'El servicio de paredes cubre desde arreglos localizados hasta la renovación de estancias enteras.',
        ],
        lista: [
          'Reparación de grietas y agujeros',
          'Enlucido y revestimiento',
          'Quitar gotelé y alisar',
          'Pintura o papel pintado',
          'Preparación de acabados',
        ],
      },
      {
        titulo: 'Materiales y acabados',
        parrafos: [
          'Para capas finas se usan masillas de alisar, y para grosores mayores, yesos o morteros compatibles con el soporte. Sobre superficies poco absorbentes hace falta una imprimación de agarre. El resultado se define en el lijado final, por lo que conviene revisarlo con luz lateral antes de pintar.',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'Cada capa debe secar antes de la siguiente, de modo que el tiempo depende del número de manos, de la ventilación y del estado de la pared. Es un trabajo que se reparte en varios días aunque la superficie sea pequeña, algo que conviene tener en cuenta si vas a pintar después.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta alisar una pared en Madrid?',
        respuesta:
          'Alisar paredes sin gotelé cuesta 10–16 €/m². Si hay gotelé, quitarlo, alisar y pintar cuesta 14–22 €/m² de pared, y un piso completo se hace en 1–2 semanas. IVA incluido.',
      },
      {
        pregunta: '¿Se puede alisar sin hacer obra en toda la casa?',
        respuesta:
          'Sí. Se puede actuar en una sola pared o habitación. Si hay grandes diferencias, conviene valorar cómo quedará el contraste con las estancias contiguas.',
      },
      {
        pregunta: '¿Cuánto tarda en secarse antes de pintar?',
        respuesta:
          'Depende del producto, del grosor aplicado y de la ventilación. No se debe pintar hasta que la superficie esté completamente seca, y lo indica la ficha técnica del material utilizado.',
      },
      {
        pregunta: '¿También ponéis papel pintado?',
        respuesta:
          'Sí, la pintura o el papel pintado forman parte de este servicio. Para el papel, el soporte debe quedar especialmente uniforme, porque se notan las irregularidades.',
      },
    ],
    servicio: {
      nombre: 'Alisado y reparación de paredes',
      descripcion: 'Reparación, alisado, revestimiento y renovación de paredes en Madrid.',
    },
    servicioCatalogo: 'Paredes',
    servicioFormulario: 'Paredes',
    imagen: '/images/enlucido.webp',
    imagenAlt: 'Enlucido de una pared con llana',
    relacionadas: [
      'alisar-paredes-o-quitar-gotele',
      'calculadora-reforma',
      'quitar-gotele-madrid',
      'pintores-madrid',
      'pladur-madrid',
      'albanileria-madrid',
    ],
  },
];
