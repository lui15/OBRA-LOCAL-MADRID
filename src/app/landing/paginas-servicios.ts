import { PaginaSeo } from './pagina-seo';

/** Páginas de cada servicio y de las búsquedas concretas de alta intención. */
export const PAGINAS_SERVICIOS: PaginaSeo[] = [
  /* ---------------------------- REFORMAS INTEGRALES ---------------------------- */
  {
    path: 'reformas-integrales-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Reformas integrales en Madrid: precios | ObraLocalMADRID',
    description:
      'Reformas integrales en Madrid: demolición, nueva distribución, instalaciones y acabados. Rangos orientativos por superficie y presupuesto por partidas.',
    etiqueta: 'Reformas integrales',
    resumen: 'Renovación completa o parcial de viviendas y locales, ordenada por partidas.',
    h1: { linea: 'Reformas integrales', resaltado: 'en Madrid.' },
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
            texto:
              'Protección de zonas comunes, demolición, retirada de escombros, nueva tabiquería y paso de instalaciones. Es el mejor momento para decidir dónde irán enchufes, tomas de agua, radiadores y puntos de luz, porque después moverlos cuesta mucho más.',
          },
          {
            titulo: 'Después, lo que se va a ver',
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
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un piso de 80 m² en Madrid?',
        respuesta:
          'Como referencia, una reforma de 60 a 90 m² en varias estancias va de 25.000 a 45.000 €. Es un precio orientativo: el importe final debe confirmar cantidades, calidades, mano de obra, impuestos y exclusiones.',
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
      'reforma-piso-completo-madrid',
      'reforma-banos-madrid',
      'reforma-cocinas-madrid',
      'albanileria-madrid',
      'precios',
    ],
  },

  /* ---------------------------- BAÑOS ---------------------------- */
  {
    path: 'reforma-banos-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Reforma de baños en Madrid: precios | ObraLocalMADRID',
    description:
      'Reforma de baños en Madrid: azulejos, sanitarios, grifería, mampara e instalaciones. Precios orientativos, desde un cambio puntual hasta el baño completo.',
    etiqueta: 'Reforma de baños',
    resumen: 'Azulejos, sanitarios, muebles, grifería e instalaciones, por partes o por completo.',
    h1: { linea: 'Reforma de baños', resaltado: 'en Madrid.' },
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
            texto:
              'Sustituyes grifería, mueble de lavabo o sanitarios sin tocar paredes ni suelo. Es lo más rápido, y tiene sentido si los azulejos están bien y no hay problemas de humedad.',
          },
          {
            titulo: 'Reforma parcial',
            texto:
              'Renuevas revestimientos y sanitarios sin cambiar la distribución. Las tomas de agua y los desagües se quedan en su sitio, lo que contiene bastante el coste.',
          },
          {
            titulo: 'Baño completo',
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
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un baño en Madrid?',
        respuesta:
          'Como referencia: un cambio puntual de grifería o mueble va de 600 a 1.200 €, una reforma parcial sin cambiar la distribución de 1.500 a 3.000 €, y un baño completo con demolición de 3.500 a 7.000 €. Son precios orientativos que deben confirmarse con una valoración.',
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
      'cambiar-banera-por-plato-ducha-madrid',
      'reforma-cocinas-madrid',
      'reformas-integrales-madrid',
      'albanileria-madrid',
      'precios',
    ],
  },

  /* ---------------------------- COCINAS ---------------------------- */
  {
    path: 'reforma-cocinas-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Reforma de cocinas en Madrid: precios | ObraLocalMADRID',
    description:
      'Reforma de cocinas en Madrid: muebles, encimera, alicatado, fregadero y conexiones. Precios orientativos, desde cambios puntuales a cocina completa.',
    etiqueta: 'Reforma de cocinas',
    resumen: 'Muebles, encimeras, revestimientos e instalaciones de agua y luz.',
    h1: { linea: 'Reforma de cocinas', resaltado: 'en Madrid.' },
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
            texto:
              'El laminado es la opción económica y hoy tiene acabados muy conseguidos, aunque sufre más con el calor y las juntas mojadas. Las piedras naturales y los compactos soportan mejor el uso intensivo, pero pesan más y encarecen la partida: las encimeras de piedra pueden aumentar el coste.',
          },
          {
            titulo: 'Muebles',
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
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar una cocina en Madrid?',
        respuesta:
          'Como referencia: un cambio puntual de encimera y ajustes va de 1.500 a 3.000 €, una cocina parcial con muebles y encimera de 4.000 a 8.000 €, y una cocina completa con muebles e instalaciones de 9.000 a 15.000 €. Son precios orientativos.',
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
    imagen: '/images/reforma-cocina.webp',
    imagenAlt: 'Cocina reformada con muebles y encimera nuevos en Madrid',
    relacionadas: [
      'reforma-banos-madrid',
      'reformas-integrales-madrid',
      'albanileria-madrid',
      'pintores-madrid',
      'precios',
    ],
  },

  /* ---------------------------- ALBAÑILERÍA ---------------------------- */
  {
    path: 'albanileria-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Albañilería en Madrid: obras y arreglos | ObraLocalMADRID',
    description:
      'Albañiles en Madrid: tabiques, enfoscados, alicatados, solados, huecos y reparaciones de obra. Precios orientativos, desde arreglos pequeños hasta 40 m².',
    etiqueta: 'Albañilería',
    resumen: 'Tabiques, enfoscados, alicatados, solados, huecos y reparaciones de obra.',
    h1: { linea: 'Albañilería', resaltado: 'en Madrid.' },
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
            texto:
              'Dividir una habitación o unir dos estancias cambia por completo una vivienda. El punto clave es confirmar antes que el muro que se quiere tirar no sea estructural, y prever por dónde pasan instalaciones que pueda haber dentro.',
          },
          {
            titulo: 'Enfoscados y enlucidos',
            texto:
              'Son las capas que regularizan la pared antes del acabado. Una pared mal preparada se nota después en la pintura o en el azulejo, por lo que es una de las partidas en las que no conviene recortar.',
          },
          {
            titulo: 'Alicatados y solados',
            texto:
              'Colocación de azulejo en paredes y baldosa en suelos. Influyen el formato de la pieza, el estado de la base y la cantidad de cortes. En terrazas y exteriores, además, importan la pendiente y las juntas de dilatación.',
          },
          {
            titulo: 'Apertura y cierre de huecos',
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
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta un trabajo de albañilería en Madrid?',
        respuesta:
          'Depende de la superficie. Como referencia: una reparación localizada de 1 a 2 m² va de 150 a 300 €, una reparación con revestimiento de 5 a 10 m² de 400 a 800 €, y un trabajo amplio de 20 a 40 m² de 1.200 a 2.500 €. Son precios orientativos.',
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
    imagen: '/images/albanileria.webp',
    imagenAlt: 'Trabajo de albañilería en una vivienda de Madrid',
    relacionadas: [
      'reformas-integrales-madrid',
      'pladur-madrid',
      'alisado-paredes-madrid',
      'reforma-banos-madrid',
      'precios',
    ],
  },

  /* ---------------------------- PINTORES ---------------------------- */
  {
    path: 'pintores-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Pintores en Madrid: precios por estancia | ObraLocalMADRID',
    description:
      'Pintores en Madrid: paredes y techos, lijado, imprimación, grietas, puertas y marcos. Precios orientativos desde una habitación hasta varias estancias.',
    etiqueta: 'Pintores',
    resumen: 'Pintura de paredes y techos, preparación de superficies y acabados.',
    h1: { linea: 'Pintores', resaltado: 'en Madrid.' },
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
            texto:
              'Cubrir suelos, muebles, enchufes y marcos. Es tiempo de trabajo real, sobre todo si la vivienda está amueblada y se sigue habitando durante la obra.',
          },
          {
            titulo: 'Preparación del soporte',
            texto:
              'Reparar grietas y agujeros con masilla, lijar para unificar y aplicar imprimación donde haga falta. Las paredes nuevas de yeso o las reparaciones absorben de otro modo la pintura, y sin imprimación se notan las diferencias de tono.',
          },
          {
            titulo: 'Manos de pintura',
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
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta pintar una habitación en Madrid?',
        respuesta:
          'Como referencia, una habitación pequeña con pintura sencilla va de 200 a 400 € y una habitación amplia con preparación de 500 a 900 €. Para varias estancias, de 1.000 a 1.800 €. Son precios orientativos.',
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
    imagen: '/images/pintura.webp',
    imagenAlt: 'Pintor preparando y pintando una pared en Madrid',
    relacionadas: [
      'quitar-gotele-madrid',
      'alisado-paredes-madrid',
      'pladur-madrid',
      'reformas-integrales-madrid',
      'precios',
    ],
  },

  /* ---------------------------- PLADUR ---------------------------- */
  {
    path: 'pladur-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Pladur en Madrid: tabiques y techos | ObraLocalMADRID',
    description:
      'Pladur en Madrid: tabiques, falsos techos, trasdosados y aislamiento térmico y acústico. Precios orientativos por metros y qué influye en el coste.',
    etiqueta: 'Pladur',
    resumen: 'Tabiques, falsos techos, trasdosados y aislamiento térmico y acústico.',
    h1: { linea: 'Pladur', resaltado: 'en Madrid.' },
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
            texto:
              'Una estructura metálica con placas por ambas caras crea una habitación nueva sin apenas añadir peso sobre el forjado, lo que resulta útil en edificios antiguos. Con lana mineral en el interior, además, mejora el aislamiento entre estancias.',
          },
          {
            titulo: 'Falsos techos',
            texto:
              'Permiten ocultar instalaciones o conductos, empotrar focos e igualar techos irregulares. La altura libre que queda es clave: en un piso con techos bajos, unos centímetros pueden marcar la diferencia.',
          },
          {
            titulo: 'Trasdosados',
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
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta un tabique o techo de pladur en Madrid?',
        respuesta:
          'Como referencia: un techo sencillo de 3 a 6 m² va de 250 a 550 €, un techo o tabique de 7 a 15 m² de 600 a 1.200 €, y una superficie amplia de 16 a 30 m² de 1.500 a 3.000 €. Son precios orientativos.',
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
    imagen: '/images/pladur.webp',
    imagenAlt: 'Instalación de tabique y falso techo de pladur en Madrid',
    relacionadas: [
      'albanileria-madrid',
      'alisado-paredes-madrid',
      'pintores-madrid',
      'reformas-integrales-madrid',
      'precios',
    ],
  },

  /* ---------------------------- PAREDES ---------------------------- */
  {
    path: 'alisado-paredes-madrid',
    tipo: 'servicio',
    padre: 'servicios',
    title: 'Alisado de paredes en Madrid: precios | ObraLocalMADRID',
    description:
      'Alisado de paredes en Madrid: reparación de grietas, enlucido, revestimiento y preparación para pintura o papel. Precios orientativos por metros cuadrados.',
    etiqueta: 'Alisado y reparación de paredes',
    resumen: 'Reparación, alisado, enlucido y renovación de paredes.',
    h1: { linea: 'Alisado de paredes', resaltado: 'en Madrid.' },
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
            texto:
              'Las fisuras finas del acabado se abren, se rellenan y se refuerzan con malla si hace falta. Pero las grietas activas, que siguen creciendo, volverán a salir si no se resuelve antes su causa.',
          },
          {
            titulo: 'Humedad',
            texto:
              'Si hay manchas, desconchones o salitre, hay que encontrar y tratar el origen antes de aplicar nada. Alisar sobre una pared húmeda es trabajo perdido.',
          },
          {
            titulo: 'Capas antiguas',
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
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta alisar una pared en Madrid?',
        respuesta:
          'Como referencia: un alisado localizado de 5 a 10 m² va de 150 a 350 €, un alisado con preparación de 10 a 20 m² de 400 a 800 €, y un alisado con pintura de 20 a 40 m² de 1.000 a 2.000 €. Son precios orientativos.',
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
    imagen: '/images/paredes.webp',
    imagenAlt: 'Pared alisada y preparada para pintar en una vivienda de Madrid',
    relacionadas: [
      'quitar-gotele-madrid',
      'pintores-madrid',
      'pladur-madrid',
      'albanileria-madrid',
      'precios',
    ],
  },

  /* ---------------------------- BAÑERA POR DUCHA ---------------------------- */
  {
    path: 'cambiar-banera-por-plato-ducha-madrid',
    tipo: 'intencion',
    padre: 'reforma-banos-madrid',
    title: 'Cambiar bañera por plato de ducha, Madrid | ObraLocalMADRID',
    description:
      'Cambiar la bañera por un plato de ducha en Madrid: qué incluye, desagüe, impermeabilización, mampara y azulejos. Qué comprobar antes de pedir precio.',
    etiqueta: 'Cambiar bañera por plato de ducha',
    resumen: 'Qué implica el cambio, qué comprobar y qué influye en el precio.',
    h1: { linea: 'Cambiar bañera por ducha', resaltado: 'en Madrid.' },
    kicker: 'BAÑERA POR DUCHA',
    intro:
      'Es uno de los cambios más pedidos en los pisos de Madrid: más espacio, entrada a ras de suelo o casi, y mucha más seguridad para personas mayores. Pero bajo la bañera puede haber sorpresas, y lo que parece un cambio sencillo depende de cómo está el desagüe y de lo que aparezca al retirarla.',
    secciones: [
      {
        titulo: 'Qué incluye el cambio',
        parrafos: [
          'El trabajo no consiste solo en poner un plato en el hueco de la bañera. Normalmente incluye estos pasos, y es importante confirmar en el presupuesto que todos están contemplados.',
        ],
        lista: [
          'Desmontar la bañera y retirar los residuos',
          'Adaptar el desagüe y la toma de agua',
          'Nivelar la base y dar pendiente',
          'Impermeabilizar la zona de ducha',
          'Colocar el plato, la grifería y la mampara',
          'Reponer o renovar el azulejo afectado',
        ],
      },
      {
        titulo: 'Tres puntos que deciden la dificultad',
        parrafos: [
          'Estas son las comprobaciones que más cambian el alcance del trabajo. Si puedes, míralas o fotografíalas antes de pedir presupuesto.',
        ],
        subsecciones: [
          {
            titulo: 'El desagüe',
            texto:
              'La bañera suele tener el desagüe en un extremo y a poca altura. Un plato extraplano necesita salida y pendiente suficientes, y en un edificio antiguo no siempre hay margen en el suelo. A veces la solución es un plato algo más elevado.',
          },
          {
            titulo: 'El azulejo',
            texto:
              'Al retirar la bañera, suele quedar la parte baja de la pared sin alicatar, porque el azulejo termina en el borde. Si ya no se fabrica el mismo modelo, hay que combinar con otro, usar un panel o renovar la pared de la ducha.',
          },
          {
            titulo: 'El estado de la pared',
            texto:
              'Los baños antiguos pueden tener humedades ocultas tras la bañera. Hay que sanearlas antes de cerrar, ya que una ducha somete a la pared a mucha más agua directa que una bañera.',
          },
        ],
      },
      {
        titulo: 'Elegir plato y mampara',
        parrafos: [
          'Mide el hueco antes de elegir. Las bañeras habituales rondan los 150 o 170 cm de largo, por 70 cm de ancho, y muchos platos se fabrican o se cortan a medida para ajustarse. Conviene elegir una superficie antideslizante, sobre todo si la ducha es para una persona mayor.',
          'La mampara también merece atención: una puerta corredera ahorra espacio en baños estrechos, mientras que un panel fijo es más fácil de limpiar si hay espacio para entrar. Y si la accesibilidad es el motivo principal, piensa también en barras de apoyo o un asiento, ya que reforzar la pared es más sencillo antes de cerrar.',
        ],
      },
      {
        titulo: 'Sobre el precio',
        parrafos: [
          'No publicamos un precio cerrado para este trabajo, porque depende en gran medida de lo que hay bajo la bañera y de los azulejos. Es uno de los trabajos incluidos en la reforma de baño, cuya guía de precios orientativos tienes a continuación: te ayuda a situar el nivel de cada intervención, no a fijar el precio de este cambio concreto.',
          'Para orientarte mejor, indica en la solicitud las medidas del hueco, la planta del edificio y si quieres conservar los azulejos. Si tienes fotos de la zona, tenlas a mano para cuando hablemos.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Se puede cambiar la bañera por una ducha sin hacer obra?',
        respuesta:
          'Siempre hay algo de obra, aunque puede ser limitada: retirar la bañera, adaptar el desagüe, impermeabilizar y colocar el plato. Lo que se puede evitar en algunos casos es renovar todo el alicatado del baño.',
      },
      {
        pregunta: '¿Hace falta permiso de la comunidad?',
        respuesta:
          'Se trata de una obra dentro de la vivienda, pero la Ley de Propiedad Horizontal obliga a comunicar las obras previamente a quien represente a la comunidad. Además, conviene revisar el horario y la protección de las zonas comunes.',
      },
      {
        pregunta: '¿Se puede poner un plato a ras de suelo en cualquier piso?',
        respuesta:
          'No siempre. Depende de la altura disponible para el desagüe y de la pendiente necesaria. En algunos edificios antiguos hay que elevar ligeramente el plato. Es una de las primeras cosas que debe comprobarse.',
      },
      {
        pregunta: '¿Cuánto cuesta cambiar la bañera por un plato de ducha?',
        respuesta:
          'Depende del desagüe, del azulejo y de la mampara elegida, por lo que no publicamos un precio cerrado. Pide una valoración e indica las medidas en los detalles de tu solicitud.',
      },
    ],
    servicio: {
      nombre: 'Cambio de bañera por plato de ducha',
      descripcion: 'Sustitución de bañera por plato de ducha en viviendas de Madrid.',
    },
    servicioCatalogo: 'Reforma de baño',
    servicioFormulario: 'Reforma de baño',
    preciosSoloReferencia: true,
    imagen: '/images/reforma-bano-ejemplo.webp',
    imagenAlt: 'Baño renovado con zona de ducha en lugar de bañera',
    relacionadas: [
      'reforma-banos-madrid',
      'albanileria-madrid',
      'reformas-integrales-madrid',
      'preguntas-frecuentes',
    ],
  },

  /* ---------------------------- GOTELÉ ---------------------------- */
  {
    path: 'quitar-gotele-madrid',
    tipo: 'intencion',
    padre: 'alisado-paredes-madrid',
    title: 'Quitar gotelé en Madrid: precio y métodos | ObraLocalMADRID',
    description:
      'Quitar gotelé en Madrid: raspar, cubrir o trasdosar. Qué método conviene según la pared, qué precio orientativo tiene y qué comprobar antes de empezar.',
    etiqueta: 'Quitar gotelé',
    resumen: 'Raspar, cubrir o trasdosar: qué método encaja con tu pared.',
    h1: { linea: 'Quitar gotelé', resaltado: 'en Madrid.' },
    kicker: 'QUITAR GOTELÉ',
    intro:
      'El gotelé estuvo presente en una gran parte de los pisos que se construyeron en España durante décadas, porque era barato y escondía bien los defectos. Hoy es de lo primero que se quiere eliminar al renovar una vivienda. Hay más de una forma de hacerlo, y la correcta depende de cómo está tu pared.',
    secciones: [
      {
        titulo: 'Los tres métodos',
        parrafos: [
          'No existe un método único que funcione en todas las paredes. Antes de decidirlo, se suele hacer una prueba en una zona discreta para ver cómo reacciona.',
        ],
        subsecciones: [
          {
            titulo: 'Raspar',
            texto:
              'Consiste en humedecer el gotelé y retirarlo con espátula. Funciona bien si la pintura superior es permeable, como el temple. Si es plástica, el agua no penetra y cuesta mucho más. Después hay que reparar y alisar lo que queda.',
          },
          {
            titulo: 'Cubrir con masilla',
            texto:
              'Se aplican varias capas de masilla o pasta de alisar sobre el gotelé hasta enrasarlo, y después se lija. Es más limpio porque no hay que quitar nada, aunque depende de que la capa inferior esté firmemente adherida y de un buen lijado.',
          },
          {
            titulo: 'Trasdosar con pladur',
            texto:
              'Si las paredes están muy deterioradas, una opción es revestirlas con placa de yeso. Se obtiene una superficie nueva y se aprovecha para mejorar el aislamiento, a cambio de perder algunos centímetros en cada pared.',
          },
        ],
      },
      {
        titulo: 'Cómo saber qué gotelé tienes',
        parrafos: [
          'Humedece una pequeña zona con una esponja y espera unos minutos. Si se reblandece y sale con la espátula, probablemente se puede raspar. Si el agua resbala sin penetrar, tiene pintura plástica por encima y suele ser más razonable cubrirlo.',
          'Fíjate también en si hay zonas que se despegan, bolsas o humedades. Eso indica que hay un problema de adherencia que debe resolverse antes de aplicar masilla, porque el peso de las capas nuevas puede hacer que se desprenda todo.',
        ],
      },
      {
        titulo: 'Polvo, tiempos y organización',
        parrafos: [
          'Quitar gotelé es un trabajo sucio, aunque el resultado valga la pena. El lijado genera mucho polvo fino, de modo que hay que retirar o cubrir muebles, sellar puertas y proteger el suelo. Si tienes previsto cambiar el suelo, hazlo después de este trabajo y no antes.',
          'El proceso tiene tiempos de secado entre capas que no se pueden acortar sin que se note, porque la masilla húmeda agrieta. Por eso, una vivienda entera se suele organizar por estancias y es mucho más cómodo si está vacía. En un edificio con comunidad, ten en cuenta los horarios de ruido y las normas internas, sobre todo si se usan lijadoras.',
        ],
      },
      {
        titulo: 'Qué influye en el precio',
        parrafos: [
          'El precio depende del estado de la pared, las capas de gotelé, la preparación y el acabado final. Los techos suelen ser más costosos que las paredes, por la postura y por la dificultad de trabajar sobre la cabeza. Si se incluye la pintura final, comprueba cuántas manos y qué producto entran en el precio.',
        ],
        lista: [
          'Metros cuadrados, incluidos los techos',
          'Tipo de gotelé y de pintura superior',
          'Grietas o humedades que deban repararse',
          'Si la vivienda está vacía o amueblada',
          'Acabado final y número de manos',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta quitar el gotelé en Madrid?',
        respuesta:
          'Como referencia de nuestro servicio de paredes: un alisado localizado de 5 a 10 m² va de 150 a 350 €, de 10 a 20 m² con preparación de 400 a 800 €, y de 20 a 40 m² con pintura de 1.000 a 2.000 €. Son precios orientativos, que cambian según la pared.',
      },
      {
        pregunta: '¿Es mejor raspar o tapar el gotelé?',
        respuesta:
          'Si sale con agua, rasparlo evita añadir grosor y peso. Si tiene pintura plástica, suele ser mejor cubrirlo con masilla. La prueba en una zona pequeña es lo que mejor indica qué hacer.',
      },
      {
        pregunta: '¿Se puede quitar el gotelé con la casa amueblada?',
        respuesta:
          'Se puede, pero es más lento y requiere proteger muy bien todo, porque el polvo del lijado llega a cualquier sitio. Es recomendable retirar lo que se pueda o trabajar habitación por habitación.',
      },
      {
        pregunta: '¿Hace falta permiso para quitar el gotelé?',
        respuesta:
          'Es un acabado interior. En Madrid capital, estos trabajos en viviendas sin protección no suelen necesitar título urbanístico, aunque conviene comunicarlo a la comunidad y respetar los horarios. En otros municipios, consulta a su ayuntamiento.',
      },
    ],
    servicio: {
      nombre: 'Quitar gotelé',
      descripcion: 'Eliminación de gotelé, alisado y preparación de paredes en Madrid.',
    },
    servicioCatalogo: 'Paredes',
    servicioFormulario: 'Paredes',
    imagen: '/images/paredes-ejemplo.webp',
    imagenAlt: 'Pared lisa después de quitar el gotelé',
    relacionadas: [
      'alisado-paredes-madrid',
      'pintores-madrid',
      'pladur-madrid',
      'reforma-piso-completo-madrid',
    ],
  },

  /* ---------------------------- PISO COMPLETO ---------------------------- */
  {
    path: 'reforma-piso-completo-madrid',
    tipo: 'intencion',
    padre: 'reformas-integrales-madrid',
    title: 'Reforma de piso completo en Madrid | ObraLocalMADRID',
    description:
      'Reformar un piso completo en Madrid: precios orientativos por metros, qué revisar si lo acabas de comprar y cómo priorizar para ajustar el presupuesto.',
    etiqueta: 'Reforma de piso completo',
    resumen: 'Qué revisar al comprar un piso y cómo priorizar el presupuesto.',
    h1: { linea: 'Reforma de piso completo', resaltado: 'en Madrid.' },
    kicker: 'PISO COMPLETO',
    intro:
      'Has comprado o heredado un piso y quieres dejarlo a tu gusto antes de entrar a vivir. La pregunta no es solo cuánto cuesta, sino por dónde empezar y qué no debes dejar para más adelante. Esta página está pensada para tomar esas decisiones antes de pedir presupuesto.',
    secciones: [
      {
        titulo: 'Antes de comprar o de firmar: qué revisar',
        parrafos: [
          'Si aún estás a tiempo, una visita con la vista puesta en la reforma puede evitarte sorpresas caras. En un piso antiguo, estos son los puntos que más afectan al presupuesto.',
        ],
        subsecciones: [
          {
            titulo: 'Instalaciones',
            texto:
              'Mira el cuadro eléctrico: si no tiene diferencial, o los enchufes no tienen toma de tierra, es muy probable que haya que renovar la instalación. Pregunta también por el material de las tuberías y por el sistema de calefacción.',
          },
          {
            titulo: 'Edificio',
            texto:
              'Pide las últimas actas de la comunidad y pregunta si hay derramas previstas, la inspección del edificio (IEE) y el estado de las bajantes. También conviene saber si hay ascensor y cómo se puede organizar el acceso de materiales.',
          },
          {
            titulo: 'Distribución y luz',
            texto:
              'Comprueba por dónde pasan las bajantes y conductos, ya que limitan dónde colocar baños y cocina. Y antes de imaginarte sin un tabique, recuerda que hay que confirmar que no sea estructural.',
          },
        ],
      },
      {
        titulo: 'Si el presupuesto no llega para todo',
        parrafos: [
          'Es lo más habitual. La regla práctica es invertir primero en lo que es difícil de cambiar después y dejar para más adelante lo que puede cambiarse sin obra.',
        ],
        lista: [
          'Prioridad alta: electricidad, fontanería, desagües y ventanas si aíslan mal',
          'Prioridad media: distribución, baños y cocina',
          'Se puede dejar para después: muebles, iluminación decorativa y algunos acabados',
        ],
      },
      {
        titulo: 'Diferencias entre una reforma de piso y otra integral',
        parrafos: [
          'Una reforma de piso completo es un tipo de reforma integral, pero con condicionantes propios: hay vecinos arriba, abajo y a los lados, las zonas comunes son compartidas y a menudo no existe margen para ampliar. Si buscas información general sobre el proceso, los trabajos y las partidas, consulta nuestra página de reformas integrales.',
          'Durante la obra, ten presente la logística: la protección del ascensor y del portal, el horario de los trabajos ruidosos, dónde se colocan los escombros y si hace falta un permiso para la ocupación de la vía pública. Son gestiones pequeñas pero, si no se planifican, generan retrasos y conflictos con la comunidad.',
        ],
      },
      {
        titulo: 'Fiscalidad y gastos que se olvidan',
        parrafos: [
          'Además del precio de la obra, ten en cuenta el impuesto municipal de obras y las tasas, si proceden, y pregunta si el presupuesto incluye el IVA. Las obras de renovación de una vivienda habitual pueden tributar al tipo reducido del 10 % si cumplen ciertas condiciones, como la antigüedad de la vivienda y la proporción de materiales, por lo que conviene confirmarlo antes de cerrar el precio.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un piso completo en Madrid?',
        respuesta:
          'Como referencia: de 40 a 60 m² va de 15.000 a 25.000 €, de 60 a 90 m² de 25.000 a 45.000 €, y a partir de 90 m² de 45.000 a 80.000 €. Son precios orientativos que dependen de las calidades, las instalaciones y la distribución.',
      },
      {
        pregunta: '¿Por dónde empiezo si acabo de comprar un piso?',
        respuesta:
          'Mide y fotografía todo, revisa instalaciones, define qué quieres cambiar y establece una lista de prioridades. Con eso ya se puede pedir un presupuesto por partidas que sea comparable.',
      },
      {
        pregunta: '¿Cuánto dura una reforma de un piso completo?',
        respuesta:
          'Depende del tamaño, de los trámites y de la disponibilidad de materiales, por lo que cualquier plazo debe concretarse una vez definido el alcance. Pide que el presupuesto indique un calendario por fases.',
      },
      {
        pregunta: '¿Puedo reformar el piso por fases?',
        respuesta:
          'Sí, aunque suele salir más caro y puede obligar a romper lo ya terminado. Si eliges esta opción, deja hecha primero la obra de instalaciones. Cuéntanos tu plan en la solicitud.',
      },
    ],
    servicio: {
      nombre: 'Reforma de piso completo',
      descripcion: 'Reforma completa de pisos y viviendas en Madrid.',
    },
    servicioCatalogo: 'Reformas integrales',
    servicioFormulario: 'Reformas integrales',
    imagen: '/images/reformas-integrales-ejemplo.webp',
    imagenAlt: 'Piso en Madrid durante una reforma completa',
    relacionadas: [
      'reformas-integrales-madrid',
      'reforma-banos-madrid',
      'reforma-cocinas-madrid',
      'como-trabajamos',
      'precios',
    ],
  },
];
