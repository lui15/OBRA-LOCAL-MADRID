import { PaginaSeo } from './pagina-seo';

/** Portada e índices del sitio. */
export const PAGINAS_HUB: PaginaSeo[] = [
  /* ---------------------------- INICIO ---------------------------- */
  {
    path: '',
    tipo: 'inicio',
    title: 'Empresa de reformas en Madrid | ObraLocal Madrid',
    description:
      'Reformas en Madrid y alrededores: albañilería, pintura, baños, cocinas, pladur y reformas integrales. Precios orientativos y presupuesto paso a paso.',
    etiqueta: 'Reformas en Madrid',
    resumen: 'Reformas de viviendas y locales en Madrid y alrededores.',
    h1: { antes: 'Reformas en Madrid.', resaltado: 'Tu proyecto, bien hecho.', despues: '' },
    puntos: [
      'Madrid y alrededores',
      'Precios orientativos',
      'Solicitud paso a paso',
      'Presupuesto sin compromiso',
    ],
    whatsapp: 'Hola, quiero presupuesto para una reforma en Madrid',
    kicker: 'REFORMAS EN MADRID',
    intro:
      'En ObraLocal Madrid preparamos contigo tu reforma, desde un arreglo puntual hasta la renovación completa de una vivienda o un local en Madrid y alrededores.',
    secciones: [
      {
        titulo: 'Reformas en Madrid capital y en toda la Comunidad',
        parrafos: [],
        lista: [
          'Madrid capital y municipios',
          'Precios orientativos por servicio',
          'Solicitud en tres pasos',
          'Viviendas, locales y comunidades',
        ],
        subsecciones: [
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
      },
    ],
    faqs: [
      {
        pregunta: '¿En qué zonas de Madrid trabajáis?',
        respuesta:
          'Madrid capital y municipios como Alcalá de Henares, Alcobendas, Alcorcón, Aranjuez, Arganda del Rey, Boadilla del Monte, Collado Villalba, Coslada, Fuenlabrada, Getafe, Leganés, Majadahonda, Móstoles, Pozuelo de Alarcón, Rivas-Vaciamadrid, Las Rozas, San Sebastián de los Reyes, Torrejón de Ardoz y Valdemoro. Si tu zona no aparece, elige «Otra zona de Madrid» en el formulario.',
      },
      {
        pregunta: '¿Cuánto cuesta una reforma en Madrid?',
        respuesta:
          'Depende del alcance. Como referencia, un baño completo va de 3.500 a 7.000 € y una reforma integral de 60–90 m², de 25.000 a 45.000 €. Son precios orientativos: el precio final debe confirmar cantidades, materiales, mano de obra, impuestos y exclusiones.',
      },
      {
        pregunta: '¿Cómo pido presupuesto?',
        respuesta:
          'Con el formulario de tres pasos de esta página: tus datos, tu proyecto y los detalles. Describe el trabajo, la zona y las medidas aproximadas; las fotografías ayudan a entender el estado actual.',
      },
    ],
    servicio: {
      nombre: 'Reformas en Madrid',
      descripcion:
        'Reformas de viviendas y locales en Madrid y alrededores: albañilería, pintura, baños, cocinas, pladur y reformas integrales.',
    },
    servicioFormulario: '',
    imagen: '/images/hero-reforma.webp',
    imagenAlt: 'Interior de una vivienda reformada en Madrid',
    relacionadas: ['servicios', 'precios', 'zonas', 'como-trabajamos', 'preguntas-frecuentes'],
  },

  /* ---------------------------- SERVICIOS ---------------------------- */
  {
    path: 'servicios',
    tipo: 'hub',
    title: 'Servicios de reformas en Madrid | ObraLocal Madrid',
    description:
      'Servicios de reformas en Madrid: integrales, baños, cocinas, albañilería, pintura, pladur y paredes. Elige qué necesitas y consulta sus precios.',
    etiqueta: 'Servicios',
    resumen: 'Todos los trabajos de reforma que realizamos.',
    h1: { antes: 'Servicios de', resaltado: 'reformas', despues: 'en Madrid' },
    puntos: [
      '7 servicios de reforma',
      'Precios desde 150 €',
      'Viviendas, locales y comunidades',
      'Madrid y alrededores',
    ],
    whatsapp: 'Hola, quiero información sobre vuestros servicios de reformas en Madrid',
    kicker: 'NUESTROS SERVICIOS',
    intro:
      'Desde arreglar una pared hasta renovar una vivienda entera: aquí tienes todos los trabajos que hacemos, qué incluye cada uno y dónde consultar sus precios orientativos. Si no sabes bien cómo se llama lo que necesitas, sigue leyendo, porque te ayudamos a identificarlo.',
    secciones: [
      {
        titulo: '¿Qué servicio necesito?',
        parrafos: [
          'Lo más sencillo es partir del problema, no del nombre de la obra. Estas son las situaciones más habituales y el servicio que suele corresponderles.',
        ],
        subsecciones: [
          {
            titulo: 'Quiero renovar toda la casa',
            imagen: '/images/reformas-integrales.webp',
            imagenAlt: 'Vivienda en reforma integral',
            texto:
              'Si vas a actuar sobre varias estancias, tocar la distribución o renovar instalaciones, estás ante una reforma integral. Coordinar todos los oficios en una sola obra evita repetir trabajos y suele salir mejor que encadenar pequeñas reformas.',
          },
          {
            titulo: 'Solo el baño o la cocina',
            imagen: '/images/cocina-nueva.webp',
            imagenAlt: 'Cocina renovada',
            texto:
              'Son las estancias con más instalaciones y las que más se notan en el día a día. Se pueden hacer por partes o de forma completa, según el estado de las tuberías y los revestimientos.',
          },
          {
            titulo: 'Tengo la pared en mal estado',
            imagen: '/images/alisando-pared.webp',
            imagenAlt: 'Pared en reparación',
            texto:
              'Para grietas, agujeros, irregularidades o gotelé, lo adecuado es el servicio de paredes. Si la pared solo está sucia o quieres cambiar el color, basta con pintura. Y si lo que necesitas es levantar o cerrar un tabique, es albañilería o pladur.',
          },
          {
            titulo: 'Quiero dividir o ganar aislamiento',
            imagen: '/images/tabique-pladur.webp',
            imagenAlt: 'Tabique de pladur',
            texto:
              'Un tabique o un trasdosado de pladur es una solución rápida y ligera para dividir una estancia, ocultar instalaciones o mejorar el aislamiento. La albañilería tradicional encaja cuando se necesita más resistencia o se trabaja en zonas húmedas o exteriores.',
          },
        ],
      },
      {
        titulo: 'Cómo combinar trabajos',
        parrafos: [
          'Muchos servicios se complementan. Quitar el gotelé casi siempre va seguido de pintura, una reforma de baño suele necesitar fontanería y electricidad, y en una vivienda completa se combinan casi todos. Si vas a hacer varias cosas, cuéntalas juntas en la misma solicitud: se pueden organizar en el orden correcto y evitar rehacer trabajo ya terminado.',
          'El orden importa: primero lo que genera polvo y lo que queda oculto, como instalaciones y tabiques, y al final suelos delicados y pintura. Es una de las razones por las que conviene pensar en el conjunto, aunque decidas hacerlo por fases.',
        ],
      },
      {
        titulo: 'Si todavía no sabes qué alcance tendrá la obra',
        parrafos: [
          'Es normal empezar con una idea general. Prueba a hacer una lista con dos columnas: lo que te molesta hoy, como una ducha incómoda, poca luz o enchufes insuficientes, y lo que te gustaría conseguir. Ordenada así, resulta más fácil distinguir lo imprescindible de lo que puede esperar.',
          'También ayuda fijar un límite de gasto antes de hablar de materiales. Con esa cifra se puede valorar si encaja una reforma parcial o si tiene más sentido plantear una actuación mayor, y no tendrás que descartar después opciones en las que ya habías invertido tiempo.',
        ],
      },
      {
        titulo: 'Para qué tipo de inmueble',
        parrafos: [
          'Trabajamos en pisos y apartamentos, casas y chalets, locales comerciales, oficinas y comunidades de vecinos. En los locales y en las oficinas, el uso previsto puede añadir requisitos propios; en las comunidades, las decisiones suelen pasar por la junta de propietarios. Indica el tipo de inmueble en el formulario para que podamos tenerlo en cuenta.',
          'Y si tu caso no encaja en ninguna categoría, no pasa nada: elige el servicio más parecido y descríbelo con tus palabras. Te orientaremos cuando hablemos contigo.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Puedo pedir presupuesto para varios servicios a la vez?',
        respuesta:
          'Sí. Selecciona en el formulario el servicio principal y cuenta el resto en la descripción. Es mejor plantear todos los trabajos juntos para poder organizarlos en el orden adecuado.',
      },
      {
        pregunta: '¿Hacéis trabajos pequeños o solo reformas grandes?',
        respuesta:
          'Los dos. Nuestras guías de precios van desde reparaciones localizadas de pocos metros hasta reformas integrales de más de 90 m².',
      },
      {
        pregunta: '¿Trabajáis con comunidades de vecinos?',
        respuesta:
          'Sí, las comunidades de vecinos son uno de los tipos de inmueble que atendemos. Selecciónalo en el formulario y describe el trabajo que necesitáis.',
      },
    ],
    servicio: {
      nombre: 'Servicios de reformas en Madrid',
      descripcion: 'Reformas integrales, baños, cocinas, albañilería, pintura, pladur y paredes.',
    },
    servicioFormulario: '',
    imagen: '/images/obra-en-curso.webp',
    imagenAlt: 'Vivienda en Madrid durante una reforma',
    modulo: 'servicios',
    relacionadas: [
      'calculadora-reforma',
      'guias',
      'precios',
      'zonas',
      'como-trabajamos',
      'preguntas-frecuentes',
    ],
  },

  /* ---------------------------- PRECIOS ---------------------------- */
  {
    path: 'precios',
    tipo: 'hub',
    title: 'Precios de reformas en Madrid 2026 | ObraLocal Madrid',
    description:
      'Precios de reformas en Madrid 2026: €/m² por tipo, presupuesto de ejemplo de un piso de 80 m² por partidas, plazos, qué encarece la obra y cómo ahorrar.',
    etiqueta: 'Precios orientativos',
    resumen: 'Guía de precios: €/m², ejemplo por partidas, plazos y qué influye en el coste.',
    h1: { antes: 'Precios de', resaltado: 'reformas', despues: 'en Madrid 2026' },
    puntos: ['Rangos por servicio', 'Precios desde 150 €', 'Ejemplo por partidas', 'Calculadora incluida'],
    whatsapp: 'Hola, quiero que me orientéis sobre el precio de una reforma',
    kicker: 'GUÍA DE PRECIOS 2026',
    intro:
      'Esta es nuestra guía de precios de reformas en Madrid. Encontrarás el precio por metro cuadrado de cada tipo de reforma, un presupuesto de ejemplo de un piso de 80 m² organizado por partidas, los rangos orientativos de cada servicio, qué encarece una obra en Madrid y cómo ajustar el presupuesto. Todos los importes salen de nuestros precios de referencia; los datos que aún no tenemos confirmados aparecen marcados como pendientes en lugar de inventados.',
    secciones: [
      {
        titulo: 'Cómo leer esta guía',
        parrafos: [
          'Una reforma no tiene un precio fijo por metro cuadrado. Dos baños de la misma superficie pueden costar el doble uno que otro según lo que se derribe, las instalaciones que haya que rehacer y los materiales que se elijan. Por eso damos rangos: el extremo bajo corresponde a trabajos sencillos con materiales básicos, y el alto, a obras más complejas o con calidades altas.',
          'Las tablas de arriba muestran el precio por metro cuadrado que se deduce de nuestros rangos, un presupuesto de ejemplo y los plazos. Más abajo tienes los rangos de cada servicio tal como los usamos para orientar a nuestros clientes, y la calculadora te permite aplicarlos a tu caso.',
          'Ninguna de estas cifras es un presupuesto. El precio final de tu obra debe confirmar cantidades, materiales, mano de obra, impuestos y exclusiones después de ver la vivienda.',
        ],
      },
      {
        titulo: 'Precio por metro cuadrado: qué significa y qué no',
        parrafos: [
          'El precio por metro cuadrado es útil para hacerse una idea, pero tiene trampa. En una reforma integral, los metros que más cuestan son los de cocina y baños, porque concentran instalaciones, revestimientos y equipamiento. Un piso de 80 m² con dos baños costará más por metro que otro de la misma superficie con uno solo.',
          'Además, en los trabajos pequeños el precio por metro sube: una reparación de 2 m² necesita el mismo desplazamiento, la misma protección y casi la misma preparación que una de 10 m². Por eso, en la tabla, los rangos de albañilería o alisado son amplios: el extremo alto corresponde a superficies pequeñas.',
          'La columna «deducido de nuestros precios» se calcula dividiendo los importes de cada rango entre los metros cuadrados que cubre. Para cocina, baño y pintura nuestros rangos no se expresan en metros, así que no damos esa cifra. Las columnas por calidad están pendientes de confirmar.',
        ],
      },
      {
        titulo: 'Qué incluye cada partida de una reforma integral',
        parrafos: [
          'El presupuesto de ejemplo de 80 m² se organiza en las mismas partidas que debería tener cualquier presupuesto serio. Saber qué entra en cada una te ayuda a comparar ofertas y a detectar lo que falta.',
        ],
        subsecciones: [
          {
            titulo: 'Demolición y desescombro',
            texto:
              'Protección de la vivienda y de las zonas comunes, retirada de tabiques, alicatados, suelos, sanitarios y muebles que no se conservan, y gestión de los escombros. Incluye el coste del contenedor o de las sacas y, si hace falta, el permiso para ocupar la vía pública.',
          },
          {
            titulo: 'Albañilería',
            texto:
              'Nuevos tabiques, cierre y apertura de huecos, recrecidos de suelo, enfoscados y enlucidos, y ayudas de albañilería a los demás oficios: abrir y cerrar rozas para las instalaciones.',
          },
          {
            titulo: 'Fontanería',
            texto:
              'Red nueva de agua fría y caliente, desagües hasta la bajante, tomas para cocina, baños y lavadora, y en su caso cambio del calentador o la caldera.',
          },
          {
            titulo: 'Electricidad',
            texto:
              'Cuadro eléctrico, circuitos, cableado, mecanismos y puntos de luz. En pisos antiguos suele renovarse por completo. Al terminar, la instalación debe documentarse con el certificado que corresponda.',
          },
          {
            titulo: 'Alicatado y solados',
            texto:
              'Revestimientos cerámicos de baños y cocina, impermeabilización de las zonas húmedas y suelos de toda la vivienda, ya sean cerámicos, laminados o de madera.',
          },
          {
            titulo: 'Carpintería',
            texto:
              'Puertas interiores, armarios empotrados, rodapiés y, si se cambian, ventanas. Es una partida en la que la gama elegida cambia mucho el importe.',
          },
          {
            titulo: 'Pintura',
            texto:
              'Preparación de paredes y techos, imprimación y pintura final de toda la vivienda. Si hay gotelé, quitarlo o cubrirlo forma parte de esta partida o de la de albañilería.',
          },
          {
            titulo: 'Gestión y licencia',
            texto:
              'Tramitación municipal que corresponda —en Madrid capital, declaración responsable o licencia según la Ordenanza 6/2022—, tasas, coordinación de oficios y documentación final de la obra.',
          },
        ],
      },
      {
        titulo: 'Rangos de referencia por servicio',
        parrafos: [
          'Además del ejemplo por partidas, usamos rangos de referencia para cada tipo de trabajo, desde una reparación pequeña hasta la reforma completa. Los tienes detallados más abajo, servicio a servicio. Como resumen: una reforma integral de 40 a 60 m² va de 15.000 a 25.000 €, de 60 a 90 m² de 25.000 a 45.000 €, y a partir de 90 m² de 45.000 a 80.000 €. Un baño completo va de 3.500 a 7.000 € y una cocina completa con muebles e instalaciones, de 9.000 a 15.000 €.',
          'En trabajos más pequeños, pintar una habitación amplia con preparación va de 500 a 900 €, un tabique o techo de pladur de 7 a 15 m² de 600 a 1.200 €, y alisar de 10 a 20 m² de pared, de 400 a 800 €.',
        ],
      },
      {
        titulo: 'Qué hay detrás de cada rango',
        parrafos: [
          'Cada servicio tiene tres escalones, del trabajo más pequeño al más amplio. Esto es lo que suele haber detrás de cada uno.',
        ],
        subsecciones: [
          {
            titulo: 'Baño',
            texto:
              'El escalón más bajo, de 600 a 1.200 €, es un cambio puntual: grifería, mueble o sanitarios sin tocar paredes. El intermedio, de 1.500 a 3.000 €, renueva revestimientos y sanitarios sin cambiar la distribución. El alto, de 3.500 a 7.000 €, es el baño completo: demolición, instalaciones, impermeabilización, revestimientos y mampara.',
          },
          {
            titulo: 'Cocina',
            texto:
              'De 1.500 a 3.000 € para un cambio de encimera con ajustes; de 4.000 a 8.000 € para una cocina parcial con muebles y encimera; y de 9.000 a 15.000 € para una cocina completa con muebles e instalaciones. Los electrodomésticos, las encimeras de piedra y los cambios de distribución pueden aumentar el coste.',
          },
          {
            titulo: 'Pintura',
            texto:
              'De 200 a 400 € para una habitación pequeña con pintura sencilla, de 500 a 900 € para una habitación amplia con preparación y de 1.000 a 1.800 € para varias estancias. Quitar gotelé, reparar humedades o productos especiales se valoran aparte.',
          },
          {
            titulo: 'Pladur',
            texto:
              'De 250 a 550 € para un techo sencillo de 3 a 6 m², de 600 a 1.200 € para un techo o tabique de 7 a 15 m² y de 1.500 a 3.000 € para superficies de 16 a 30 m². La altura, el aislamiento y los focos empotrados modifican el precio.',
          },
          {
            titulo: 'Paredes y alisado',
            texto:
              'De 150 a 350 € para un alisado localizado de 5 a 10 m², de 400 a 800 € para alisado con preparación de 10 a 20 m² y de 1.000 a 2.000 € para alisado con pintura de 20 a 40 m². Depende del estado de la pared y de las capas de gotelé.',
          },
          {
            titulo: 'Albañilería',
            texto:
              'De 150 a 300 € para una reparación localizada de 1 a 2 m², de 400 a 800 € para reparación y revestimiento de 5 a 10 m² y de 1.200 a 2.500 € para trabajos amplios de 20 a 40 m². Las demoliciones estructurales, los refuerzos, las licencias y los residuos especiales se valoran aparte.',
          },
        ],
      },
      {
        titulo: 'Combinaciones habituales y su rango',
        parrafos: [
          'Muchas reformas no son integrales, sino una combinación de trabajos. Sumando nuestros rangos, estas son algunas de las más frecuentes en Madrid:',
          'Baño completo y pintura de la vivienda: entre 4.500 y 8.800 €. Cocina completa y baño completo: entre 12.500 y 22.000 €. Cocina completa, baño completo y pintura: entre 13.500 y 23.800 €. Alisar de 20 a 40 m² de pared con pintura y renovar un baño de forma parcial: entre 2.500 y 5.000 €.',
          'Si a esas combinaciones les añades cambios de distribución o una renovación completa de las instalaciones, lo más probable es que el caso se acerque más a una reforma integral. La calculadora hace estas sumas por ti.',
        ],
      },
      {
        titulo: 'Plazos: de qué dependen',
        parrafos: [
          'Todavía no publicamos plazos por tipo de reforma porque queremos darlos con datos de obras reales; por eso la tabla de plazos aparece pendiente. Lo que sí podemos explicar es qué los alarga o los acorta.',
        ],
        lista: [
          'La superficie y el número de oficios que intervienen',
          'Los tiempos de secado de morteros, masillas y pinturas, que no conviene acortar',
          'Los materiales con plazo de entrega largo, como carpintería a medida o encimeras de piedra',
          'El trámite municipal, que debe estar resuelto antes de empezar',
          'Los imprevistos al abrir paredes y suelos en edificios antiguos',
          'Los cambios de decisión a mitad de obra',
        ],
      },
      {
        titulo: 'Qué encarece una reforma en Madrid',
        parrafos: [
          'Algunos factores son propios de Madrid y explican por qué dos pisos iguales pueden tener presupuestos muy distintos.',
        ],
        subsecciones: [
          {
            titulo: 'Edificios antiguos',
            texto:
              'En fincas con muchos años es habitual encontrar instalaciones de plomo o sin toma de tierra, paredes irregulares, forjados de madera y humedades ocultas. También pueden aparecer bajantes de fibrocemento, cuya retirada debe hacer una empresa inscrita en el registro de empresas con riesgo de amianto. Todo ello suma trabajo que no se ve en el resultado final.',
          },
          {
            titulo: 'Edificios sin ascensor',
            texto:
              'Subir sacos, azulejos y sanitarios a un cuarto sin ascensor y bajar los escombros a mano lleva tiempo, y ese tiempo se refleja en la mano de obra. Un ascensor muy pequeño también limita el tamaño de lo que puede subirse.',
          },
          {
            titulo: 'Contenedor en la vía pública',
            texto:
              'Colocar un contenedor en la calle requiere autorización municipal y tiene un coste. En calles estrechas o con mucho tráfico a veces no es posible, y hay que trabajar con sacas que se retiran con más frecuencia.',
          },
          {
            titulo: 'Horarios de la comunidad',
            texto:
              'Las ordenanzas municipales limitan las horas en que se pueden hacer obras ruidosas, y muchas comunidades añaden sus propias normas. Menos horas útiles al día significan más días de obra.',
          },
          {
            titulo: 'Edificios protegidos',
            texto:
              'Si la finca tiene algún nivel de protección, cambiar fachada, ventanas o elementos originales puede requerir más trámites, materiales específicos o directamente no estar permitido.',
          },
          {
            titulo: 'Zonas con tráfico restringido',
            texto:
              'En algunas zonas de la ciudad, el acceso de vehículos de carga tiene restricciones, lo que obliga a planificar mejor las entregas de material.',
          },
        ],
      },
      {
        titulo: 'Consejos para ahorrar sin perder calidad',
        parrafos: [
          'Hay formas de contener el presupuesto que no comprometen el resultado. Y hay recortes que salen caros a los pocos años.',
        ],
        lista: [
          'Mantén cocina y baños en su posición: mover desagües es de lo que más encarece',
          'Conserva lo que esté bien: un suelo que admite pulido, puertas que se pueden lacar',
          'Decide pronto los materiales para no pagar urgencias ni parar la obra',
          'No recortes en lo que queda oculto: instalaciones, impermeabilización y preparación de paredes',
          'Haz la obra de una vez si vas a tocar instalaciones: por fases se rompe dos veces',
          'Reserva un margen para imprevistos, sobre todo en edificios antiguos',
          'Compara presupuestos con el mismo alcance y desglosados por partidas',
        ],
      },
      {
        titulo: 'Cómo comparar presupuestos sin equivocarte',
        parrafos: [
          'Un precio más bajo no siempre es más barato: a menudo solo significa que incluye menos cosas. Pon las ofertas una al lado de otra, partida por partida, y comprueba en cada una las cantidades, la gama de los materiales, la retirada de escombros, la protección de las zonas comunes, los impuestos, las exclusiones, el calendario y la forma de pago. Tenemos una guía completa sobre qué pedir en un presupuesto y cómo comparar.',
        ],
      },
      {
        titulo: 'Impuestos, tasas y otros gastos',
        parrafos: [
          'Además del precio de la obra, ten en cuenta posibles tasas municipales y el impuesto sobre construcciones, instalaciones y obras, que dependen del municipio y del trámite. Las obras de renovación de una vivienda habitual pueden tributar al IVA reducido del 10 % si cumplen ciertas condiciones, entre ellas la antigüedad de la vivienda y el peso de los materiales en el total. Confirma estos datos en tu presupuesto.',
          'Si tu edificio está preparando una rehabilitación, puede haber ayudas públicas: tienes el estado de las convocatorias y sus fuentes oficiales en nuestra página de ayudas para reformas.',
        ],
      },
      {
        titulo: 'Cuándo pedir presupuesto',
        parrafos: [
          'Lo ideal es pedir presupuesto con margen respecto a la fecha en la que quieres empezar, sobre todo si hay materiales por encargo o trámites municipales. Ten a mano las medidas aproximadas, unas fotos del estado actual y una idea de las calidades que te gustan: con eso la primera orientación será mucho más precisa. Si el edificio es antiguo, no tiene ascensor o está protegido, dilo desde el principio: son datos que cambian el presupuesto.',
          'Si todavía estás comparando opciones, la calculadora te da un primer rango en un minuto y, si encaja con lo que buscas, abre el formulario con tus datos ya rellenos para pedir el presupuesto por partidas.',
        ],
      },
      {
        titulo: 'De dónde salen estos precios',
        parrafos: [
          'Los rangos de esta página son los precios de referencia que usamos para orientar a quien nos pide presupuesto, organizados por servicio y por tamaño del trabajo. Son los mismos que verás en cada página de servicio y los que usa la calculadora, de modo que no se contradicen entre sí.',
          'No son el resultado de una encuesta de mercado ni la media de otras empresas: son nuestros. PENDIENTE("explicar con qué obras y en qué fecha se calcularon los rangos de referencia"). Los precios por metro cuadrado se deducen de esos rangos con una división sencilla, y lo indicamos así en la tabla. Lo que todavía no tenemos —precios por calidad, importes por partida y plazos— está marcado como pendiente.',
          'Revisamos los precios periódicamente. La fecha de la última revisión aparece al principio de la página.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta pintar un piso en Madrid?',
        respuesta:
          'Nuestro rango para pintar varias estancias de una vivienda va de 1.000 a 1.800 €. Si hay gotelé o humedades, la preparación se valora aparte.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar una cocina en Madrid?',
        respuesta:
          'Como referencia: cambio de encimera y ajustes, de 1.500 a 3.000 €; cocina parcial con muebles y encimera, de 4.000 a 8.000 €; y cocina completa con muebles e instalaciones, de 9.000 a 15.000 €.',
      },
      {
        pregunta: '¿Los precios son definitivos?',
        respuesta:
          'No. Son orientativos. El precio final debe confirmar las cantidades, los materiales, la mano de obra, los impuestos y las exclusiones.',
      },
      {
        pregunta: '¿Cuánto cuesta una reforma integral en Madrid?',
        respuesta:
          'Como referencia: de 40 a 60 m², de 15.000 a 25.000 €; de 60 a 90 m², de 25.000 a 45.000 €; y a partir de 90 m², de 45.000 a 80.000 €. Son precios orientativos.',
      },
      {
        pregunta: '¿Por qué no dais un precio cerrado por metro cuadrado?',
        respuesta:
          'Porque el metro cuadrado no refleja el estado de las instalaciones, las calidades ni el acceso. Un baño y un salón de la misma superficie no tienen nada que ver en coste. Por eso damos rangos por tipo de trabajo.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un baño en Madrid?',
        respuesta:
          'Como referencia, un cambio puntual de grifería o mueble va de 600 a 1.200 €, una reforma parcial de 1.500 a 3.000 € y un baño completo con demolición de 3.500 a 7.000 €.',
      },
      {
        pregunta: '¿Los precios incluyen IVA?',
        respuesta:
          'Nuestros rangos son orientativos y el presupuesto de tu obra debe indicar si el IVA está incluido y a qué tipo. Las obras de renovación de una vivienda habitual pueden tributar al 10 % si cumplen ciertos requisitos.',
      },
      {
        pregunta: '¿Qué datos necesitáis para orientarme mejor?',
        respuesta:
          'El tipo de trabajo, la zona, las medidas aproximadas, el estado actual y los materiales que prefieres. Las fotografías ayudan a entender mejor la situación.',
      },
    ],
    servicio: {
      nombre: 'Precios de reformas en Madrid',
      descripcion: 'Guía de precios de reformas en Madrid: €/m², partidas, plazos y factores de coste.',
    },
    servicioFormulario: '',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una vivienda sobre una mesa para calcular una reforma',
    modulo: 'precios',
    relacionadas: ['calculadora-reforma', 'cuanto-cuesta-reformar-piso-70-m2-madrid', 'que-pedir-presupuesto-reforma', 'reformas-integrales-madrid', 'ayudas-reformas-madrid'],
  },

  /* ---------------------------- ZONAS ---------------------------- */
  {
    path: 'zonas',
    tipo: 'hub',
    title: 'Zonas de trabajo: reformas en Madrid | ObraLocal Madrid',
    description:
      'Zonas donde hacemos reformas: Madrid capital y municipios como Alcobendas, Getafe o Móstoles. Consulta tu zona y lo que debes tener en cuenta en cada una.',
    etiqueta: 'Zonas de trabajo',
    resumen: 'Madrid capital, distritos y municipios en los que trabajamos.',
    h1: { antes: 'Zonas donde hacemos', resaltado: 'reformas', despues: '' },
    puntos: [
      'Madrid capital',
      '19 municipios',
      'Guías por distrito',
      'Otra zona: indícalo en el formulario',
    ],
    whatsapp: 'Hola, quiero saber si hacéis reformas en mi zona',
    kicker: 'ZONAS DE TRABAJO',
    intro:
      'Hacemos reformas en Madrid capital y en buena parte de los municipios de la Comunidad. La zona no solo importa por la distancia: el tipo de edificio más habitual, las ordenanzas municipales y hasta el acceso a la calle cambian de un sitio a otro y afectan a tu reforma.',
    secciones: [
      {
        titulo: 'Por qué importa la zona en una reforma',
        parrafos: [
          'Una misma obra no se plantea igual en todas partes. Estos son los tres aspectos que más cambian según dónde esté la vivienda.',
        ],
        subsecciones: [
          {
            titulo: 'Tipo de edificio',
            imagen: '/images/edificio-esquina.webp',
            imagenAlt: 'Balcones de un edificio residencial clásico',
            texto:
              'Las fincas del Ensanche, con techos altos y forjados antiguos, no se parecen a los bloques de los años 60, a la vivienda de un PAU o a un chalet de una urbanización. Cada tipología tiene sus problemas y oportunidades.',
          },
          {
            titulo: 'Ordenanzas de cada municipio',
            imagen: '/images/planos-mesa.webp',
            imagenAlt: 'Planos de una vivienda',
            texto:
              'Cada ayuntamiento regula sus propios trámites, tasas y horarios de ruido. Madrid capital tiene una ordenanza específica, pero en Alcobendas, Getafe o Móstoles deciden sus ayuntamientos. Por eso conviene comprobar la normativa concreta antes de empezar.',
          },
          {
            titulo: 'Acceso y logística',
            imagen: '/images/edificio-clasico-madrid.webp',
            imagenAlt: 'Calle de Madrid con fachadas clásicas',
            texto:
              'Las calles estrechas, la falta de aparcamiento y la zona de bajas emisiones pueden influir en la entrega de materiales y en la retirada de escombros. Es importante tenerlo en cuenta en la planificación y en el presupuesto.',
          },
        ],
      },
      {
        titulo: 'Madrid capital: distritos con mucha diversidad',
        parrafos: [
          'Dentro de la propia capital también hay grandes diferencias. En distritos como Chamberí, Salamanca o Retiro abundan los edificios clásicos, con posibles niveles de protección y comunidades con normas estrictas. En barrios como Carabanchel predominan los bloques de mediados del siglo XX, mientras que los desarrollos más recientes plantean necesidades de personalización antes que de renovación.',
          'Por eso en el formulario te pedimos la zona y, en los detalles, tu barrio. Esa información, junto con la planta y el tipo de inmueble, permite prever mejor el acceso y los trámites antes de hablar contigo.',
        ],
      },
      {
        titulo: 'Si tu municipio no aparece',
        parrafos: [
          'Indicar el código postal también ayuda a ubicar la vivienda.',
          'Si tienes varias viviendas o un proyecto en una zona limítrofe, cuéntanoslo igualmente en la descripción. Es la forma más rápida de saber si podemos ayudarte.',
          'La lista recoge las zonas que aparecen en nuestro formulario de solicitud. Si tu municipio no está, selecciona «Otra zona de Madrid» e indícalo en los detalles, y revisaremos si podemos atenderte. Si estás en la capital, elige «Madrid capital» y escribe tu distrito o barrio en la descripción.',
          'Vamos ampliando las páginas con información específica por zona. Mientras tanto, los precios orientativos y las recomendaciones de cada servicio también te sirven como punto de partida, ya que son aplicables en toda la Comunidad.',
        ],
      },
      {
        titulo: 'Antes de pedir presupuesto en tu zona',
        parrafos: [
          'Unas comprobaciones sencillas te ayudarán a preparar mejor la obra, sea cual sea tu municipio.',
        ],
        lista: [
          'Pregunta en tu ayuntamiento qué trámite corresponde a la obra',
          'Comprueba si el edificio tiene algún tipo de protección',
          'Comunica la obra a quien represente a tu comunidad',
          'Consulta los horarios de obra permitidos',
          'Averigua si hay ascensor y dónde puede ponerse un contenedor',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿En qué zonas de Madrid trabajáis?',
        respuesta:
          'Madrid capital y municipios como Alcalá de Henares, Alcobendas, Alcorcón, Aranjuez, Arganda del Rey, Boadilla del Monte, Collado Villalba, Coslada, Fuenlabrada, Getafe, Leganés, Majadahonda, Móstoles, Pozuelo de Alarcón, Rivas-Vaciamadrid, Las Rozas, San Sebastián de los Reyes, Torrejón de Ardoz y Valdemoro.',
      },
      {
        pregunta: '¿Qué hago si mi zona no está en la lista?',
        respuesta:
          'Selecciona «Otra zona de Madrid» en el formulario e indica tu municipio en los detalles de la solicitud. Revisaremos si podemos atenderte.',
      },
      {
        pregunta: '¿Los precios cambian según la zona?',
        respuesta:
          'Los rangos orientativos son los mismos como referencia, pero el importe final puede variar por el tipo de edificio, los accesos y los trámites de cada municipio.',
      },
    ],
    servicio: {
      nombre: 'Zonas de trabajo en Madrid',
      descripcion: 'Madrid capital y municipios de la Comunidad de Madrid en los que trabajamos.',
    },
    servicioFormulario: '',
    imagen: '/images/edificios-madrid.webp',
    imagenAlt: 'Bloques residenciales en Madrid',
    modulo: 'zonas',
    relacionadas: [
      'licencia-obra-madrid',
      'servicios',
      'precios',
      'reformas-integrales-madrid',
      'como-trabajamos',
    ],
  },

  /* ---------------------------- CÓMO TRABAJAMOS ---------------------------- */
  {
    path: 'como-trabajamos',
    tipo: 'hub',
    title: 'Cómo trabajamos: pasos de una reforma | ObraLocal Madrid',
    description:
      'Así funciona tu reforma con ObraLocal Madrid: seis pasos desde la solicitud hasta la revisión final. Qué preparar y qué revisar antes de aceptar.',
    etiqueta: 'Cómo trabajamos',
    resumen: 'De tu solicitud a la llamada, y qué conviene preparar antes.',
    h1: { antes: 'Así funciona tu', resaltado: 'reforma', despues: 'con ObraLocal' },
    puntos: [
      'Solicitud en menos de un minuto',
      'Presupuesto sin compromiso',
      'Fechas acordadas contigo',
      'Revisión final de la obra',
    ],
    whatsapp: 'Hola, quiero saber cómo funciona una reforma con vosotros',
    kicker: 'CÓMO TRABAJAMOS',
    intro:
      'Empezar una reforma genera muchas dudas: qué preparar, a quién avisar, qué mirar en un presupuesto. Aquí tienes los seis pasos de una reforma con nosotros, desde tu solicitud hasta la revisión final, y lo que te conviene tener a mano para que todo vaya mejor.',
    secciones: [
      {
        titulo: 'Qué ocurre después de enviar tu solicitud',
        parrafos: [
          'Revisamos la información que nos has facilitado y nos ponemos en contacto contigo en el teléfono que nos has indicado. Esa conversación sirve para aclarar dudas y entender mejor el trabajo. Enviar una solicitud no supone ningún compromiso de contratación, y no equivale a un presupuesto cerrado.',
          'A partir de ahí, el trabajo se concreta: cantidades, materiales, mano de obra, plazos e impuestos deben quedar definidos antes de empezar. Si el trabajo lo requiere, se hará una valoración adaptada a lo que nos hayas contado.',
        ],
      },
      {
        titulo: 'Qué conviene preparar antes de rellenar el formulario',
        parrafos: [
          'Cuanta más información nos des, más útil será la primera orientación. No hace falta tenerlo todo: rellena lo que sepas y continúa.',
        ],
        lista: [
          'Medidas aproximadas de la zona que quieres reformar',
          'Fotos del estado actual, si las tienes',
          'Tipo de inmueble, planta y si hay ascensor',
          'Materiales o acabados que te gustan',
          'Cuándo te gustaría empezar',
          'El presupuesto que tienes pensado',
        ],
      },
      {
        titulo: 'Cómo usar nuestro formulario de tres pasos',
        parrafos: [
          'Lo hemos dividido para que no tengas que rellenar todo de una vez, y puedes volver atrás y cambiar tus respuestas antes de enviarla. Solo son obligatorios los datos imprescindibles para ayudarte: tu nombre, un teléfono, el servicio, la zona y una descripción del trabajo.',
        ],
      },
      {
        titulo: 'Primer paso: tus datos',
        parrafos: [
          'Te pedimos el nombre y un teléfono, porque te llamaremos a ese número. El correo electrónico es opcional. Usamos estos datos para gestionar tu solicitud, tal como se explica en nuestra política de privacidad.',
        ],
      },
      {
        titulo: 'Segundo paso: tu proyecto',
        parrafos: [
          'Eliges el tipo de trabajo y la zona. Si quieres, añades los metros cuadrados aproximados y el tipo de inmueble. Si has abierto el formulario desde la página de un servicio, ya aparece seleccionado. Si tu reforma combina varios trabajos, elige el principal y cuenta el resto en el paso siguiente.',
        ],
      },
      {
        titulo: 'Tercer paso: los detalles',
        parrafos: [
          'Nos indicas, si lo sabes, el estado actual, los materiales que prefieres, cuándo te gustaría empezar y el presupuesto que tienes pensado. Lo único obligatorio aquí es describir el trabajo con tus palabras: no hacen falta términos técnicos. Escribe qué quieres cambiar, qué problema tienes y cualquier detalle que creas importante, como la planta, si hay ascensor o si la vivienda está habitada.',
        ],
      },
      {
        titulo: 'Antes de aceptar cualquier presupuesto',
        parrafos: [
          'Antes de aceptar una obra, revisa cantidades, materiales, mano de obra, retirada de residuos, impuestos, plazos y exclusiones. Es un consejo válido para cualquier reforma, con cualquier empresa.',
        ],
        subsecciones: [
          {
            titulo: 'Déjalo por escrito',
            texto:
              'Las partidas, los materiales y las fechas previstas deben constar por escrito, junto con la forma de pago. Cualquier cambio posterior también debe quedar reflejado, para evitar malentendidos.',
          },
          {
            titulo: 'Acuerda cómo se gestionan los imprevistos',
            texto:
              'Al abrir paredes o suelos pueden aparecer problemas ocultos. Lo sensato es acordar de antemano cómo se valorarán y aprobarán los trabajos adicionales antes de ejecutarlos.',
          },
          {
            titulo: 'Avisa a tu comunidad',
            texto:
              'La Ley de Propiedad Horizontal obliga a comunicar la obra previamente a quien represente a la comunidad. Además, conviene consultar el trámite municipal y los horarios permitidos.',
          },
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Enviar la solicitud me obliga a algo?',
        respuesta:
          'No. Enviar la solicitud no supone ningún compromiso de contratación. Sirve para que podamos conocer tu proyecto y ponernos en contacto contigo.',
      },
      {
        pregunta: '¿Puedo volver a una pregunta anterior?',
        respuesta: 'Sí. Puedes volver atrás y cambiar tus respuestas antes de enviar la solicitud.',
      },
      {
        pregunta: '¿Cómo me contactaréis?',
        respuesta:
          'Te llamaremos al teléfono que nos hayas indicado en el formulario. También puedes añadir un correo electrónico, aunque es opcional.',
      },
    ],
    servicio: {
      nombre: 'Cómo trabajamos',
      descripcion: 'El proceso para solicitar y organizar una reforma en Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/medicion-pared.webp',
    imagenAlt: 'Medición de una pared con cinta métrica antes de presupuestar',
    modulo: 'proceso',
    relacionadas: [
      'orden-trabajos-reforma-integral',
      'que-pedir-presupuesto-reforma',
      'servicios',
      'precios',
      'preguntas-frecuentes',
      'reformas-integrales-madrid',
    ],
  },

  /* ---------------------------- OPINIONES ---------------------------- */
  {
    path: 'opiniones',
    tipo: 'hub',
    title: 'Opiniones de clientes de reformas | ObraLocal Madrid',
    description:
      'Opiniones de clientes que reformaron con ObraLocal Madrid: baños, cocinas, pisos completos, pintura, pladur y humedades. Publicadas completas, sin editar.',
    etiqueta: 'Opiniones',
    resumen: 'Lo que cuentan los clientes que ya reformaron con nosotros, sin editar.',
    h1: { antes: 'Opiniones de', resaltado: 'nuestros clientes', despues: '' },
    puntos: [
      'Publicadas completas, sin editar',
      'Con el tipo de obra de cada cliente',
      'Filtro por baños, cocinas, integrales…',
      'Nombre e inicial del apellido',
    ],
    whatsapp: 'Hola, he leído las opiniones y quiero pedir presupuesto para una reforma',
    kicker: 'OPINIONES',
    intro:
      'Antes de dejar tu casa en manos de una empresa de reformas quieres saber cómo ha ido a otros. Aquí tienes las opiniones de clientes que contrataron su obra con ObraLocal Madrid, tal y como nos las dieron: con sus estrellas, su texto completo y el tipo de obra que hicieron. Puedes filtrarlas por baños, cocinas, reformas integrales, pintura, pladur o albañilería.',
    secciones: [
      {
        titulo: 'Qué cuentan los clientes',
        parrafos: [
          'Cuando alguien reforma su casa le preocupan sobre todo tres cosas: que el precio se dispare, que la obra no termine cuando se dijo y que nadie conteste al teléfono cuando surge una duda. Las opiniones de esta página hablan precisamente de eso, con palabras de cada cliente.',
          'Sobre el precio, Enrique S. destaca un «presupuesto detallado sin sorpresas al final» y Manuel T. cuenta que el suelo y la pintura de toda su casa quedaron «dentro del presupuesto acordado». Sobre los plazos, Fernando R. dice que en su baño «cumplieron los plazos al pie de la letra», Adrián V. que fueron «muy serios con las fechas de entrega» y Alberto V. que dejaron su local «listo para abrir a tiempo». Sobre la comunicación, Sofía N. explica que les mantenían «informados día a día del avance del proyecto».',
          'También hay una opinión de cuatro estrellas. Isabel B. está contenta con el alicatado, pero cuenta que hubo que corregir un detalle en un remate y que se solucionó rápido. La publicamos igual que las demás, porque una reforma tiene detalles que ajustar y lo que importa es cómo se resuelven.',
        ],
      },
      {
        titulo: 'Cómo publicamos las opiniones',
        parrafos: [
          'Cada opinión es de un cliente que contrató la obra. La publicamos completa: no cortamos frases, no corregimos el texto y no cambiamos las estrellas. Por protección de datos solo mostramos el nombre y la inicial del apellido, junto con el tipo de obra para que sepas a qué trabajo se refiere.',
          'La nota media que ves arriba no está escrita a mano: se calcula con todas las opiniones de esta página, así que cambia en cuanto se añade una nueva.',
        ],
      },
      {
        titulo: 'Qué mirar en las opiniones de una empresa de reformas',
        parrafos: [
          'Las opiniones ayudan a decidir, pero conviene leerlas con criterio, sean nuestras o de cualquier otra empresa. Estas son las preguntas que te recomendamos hacerte:',
        ],
        lista: [
          'Si hablan de obras parecidas a la tuya. Una buena opinión sobre pintura dice poco de cómo se lleva una reforma integral, y al revés.',
          'Si mencionan hechos concretos, como el plazo, el presupuesto o la limpieza, y no solo adjetivos.',
          'Si hay alguna opinión con menos estrellas y qué cuenta. Ver cómo se resolvió un problema es muy útil.',
          'Si la empresa explica cómo publica las opiniones y si las edita.',
          'Si, además de opiniones, te da un presupuesto detallado por escrito antes de empezar. Es lo que de verdad te protege.',
        ],
      },
      {
        titulo: 'Por qué no verás estrellas de esta página en Google',
        parrafos: [
          'Google no muestra en sus resultados las estrellas de las opiniones que una empresa publica en su propia web. Por eso no las marcamos para que aparezcan en el buscador. Las opiniones que Google enseña junto al nombre de una empresa son las que los clientes dejan directamente en su ficha de Google.',
          'Si ya has reformado con nosotros y quieres contar tu experiencia, escríbenos por WhatsApp. Si estás pensando en reformar, cuéntanos tu caso: te damos un presupuesto detallado y cerrado por escrito antes de empezar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Las opiniones están editadas?',
        respuesta:
          'No. Publicamos cada opinión completa, con su texto y sus estrellas tal y como nos las dio el cliente. Solo mostramos el nombre y la inicial del apellido por protección de datos.',
      },
      {
        pregunta: '¿Quién puede dejar una opinión?',
        respuesta:
          'Las opiniones de esta página son de clientes que contrataron la obra con ObraLocal Madrid. Si has reformado con nosotros, puedes enviarnos la tuya por WhatsApp.',
      },
      {
        pregunta: '¿Por qué no aparecen estas estrellas en Google?',
        respuesta:
          'Porque Google no muestra en sus resultados las estrellas de opiniones que una empresa publica en su propia web. Las estrellas que aparecen en Google son las de la ficha de Google de la empresa.',
      },
    ],
    servicio: {
      nombre: 'Opiniones de clientes',
      descripcion: 'Opiniones de clientes que reformaron con ObraLocal Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/piso-reformado.webp',
    imagenAlt: 'Salón de un piso reformado, luminoso y con suelo de madera',
    modulo: 'opiniones',
    relacionadas: ['como-trabajamos', 'precios', 'servicios', 'reformas-integrales-madrid', 'reforma-banos-madrid', 'calculadora-reforma'],
  },

  /* ---------------------------- PREGUNTAS FRECUENTES ---------------------------- */
  {
    path: 'preguntas-frecuentes',
    tipo: 'hub',
    title: 'Preguntas frecuentes sobre reformas | ObraLocal Madrid',
    description:
      'Dudas habituales sobre reformas en Madrid: permisos, comunidad de vecinos, horarios, presupuestos, IVA y cómo funciona nuestra solicitud de presupuesto.',
    etiqueta: 'Preguntas frecuentes',
    resumen: 'Permisos, comunidad, presupuestos y cómo funciona la solicitud.',
    h1: { antes: 'Preguntas', resaltado: 'frecuentes', despues: 'sobre reformas' },
    puntos: [
      'Precios',
      'Plazos',
      'Licencias y comunidad',
      'Zonas y presupuesto',
    ],
    whatsapp: 'Hola, tengo una duda sobre una reforma en Madrid',
    kicker: 'PREGUNTAS FRECUENTES',
    intro:
      'Hemos reunido las dudas que surgen con más frecuencia antes de empezar una reforma en Madrid: permisos, vecinos, presupuestos, impuestos y cómo funciona nuestra solicitud. La información es general y orientativa; para trámites concretos, confirma siempre con tu ayuntamiento o con un técnico.',
    secciones: [
      {
        titulo: 'Permisos y trámites: lo esencial',
        parrafos: [
          'El trámite depende del municipio y de lo que vayas a hacer. En Madrid capital, la Ordenanza 6/2022 establece la declaración responsable como vía general y reserva la licencia para los casos de su anexo, mientras que los acabados interiores de viviendas sin protección no suelen necesitar título urbanístico. En cualquier otro municipio, debes consultarlo en su ayuntamiento.',
          'Lo que suele requerir más comprobaciones es aquello que afecta a estructura, fachada, elementos comunes, cambios de uso o edificios protegidos. Ante la duda, consulta antes de empezar: regularizar una obra después suele ser más caro que preguntar.',
        ],
      },
      {
        titulo: 'Comunidad de vecinos y convivencia',
        parrafos: [
          'Puedes hacer obras dentro de tu vivienda siempre que no menoscabes la seguridad del edificio, su estructura general, su configuración exterior ni los derechos de otro propietario, y debes comunicarlas antes a quien represente a la comunidad. Los horarios permitidos dependen de la ordenanza municipal y de las normas internas de tu comunidad.',
          'Un aviso en el portal con las fechas previstas, proteger el ascensor y limpiar las zonas comunes al terminar cada día evitan la mayoría de los conflictos.',
        ],
      },
      {
        titulo: 'Presupuestos e impuestos',
        parrafos: [
          'Un buen presupuesto separa partidas, calidades, exclusiones e impuestos. Compara ofertas con el mismo alcance y pregunta qué queda fuera, ya que un precio bajo puede significar menos trabajos incluidos. En nuestra página de precios explicamos los factores con más detalle.',
          'Respecto al IVA, las obras de renovación y reparación en una vivienda particular pueden tributar al 10 % si se cumplen ciertas condiciones. Confírmalo con quien te haga el presupuesto y, si tienes dudas sobre tu caso, consulta a un asesor fiscal.',
        ],
      },
    ],
    faqs: [],
    gruposFaq: [
      {
        titulo: 'Precios',
        faqs: [
          {
            pregunta: '¿Los precios son definitivos?',
            respuesta:
              'No. Son orientativos. El precio final debe confirmar las cantidades, materiales, mano de obra, impuestos y exclusiones.',
          },
          {
            pregunta: '¿Cuánto cuesta una reforma en Madrid?',
            respuesta:
              'Depende del alcance. Como referencia, un baño completo va de 3.500 a 7.000 € y una reforma integral de 60 a 90 m², de 25.000 a 45.000 €. Tienes todos los rangos en nuestra página de precios.',
          },
          {
            pregunta: '¿Por qué no dais un precio por metro cuadrado?',
            respuesta:
              'Porque el metro cuadrado no refleja el estado de las instalaciones, las calidades ni el acceso. Por eso damos rangos por tipo de trabajo.',
          },
          {
            pregunta: '¿Se aplica el IVA reducido a las reformas?',
            respuesta:
              'Puede aplicarse el 10 % a obras de renovación y reparación en viviendas particulares si se cumplen ciertos requisitos, como la antigüedad de la vivienda y la proporción de materiales. Confirma tu caso antes de cerrar el presupuesto.',
          },
          {
            pregunta: '¿Cómo comparo dos presupuestos?',
            respuesta:
              'Comprueba que tengan el mismo alcance: cantidades, marca o gama de materiales, retirada de escombros, impuestos, exclusiones y plazos. Un precio bajo puede significar menos trabajos incluidos.',
          },
        ],
      },
      {
        titulo: 'Plazos',
        faqs: [
          {
            pregunta: '¿Cuánto dura una reforma?',
            respuesta:
              'Depende del tamaño, de los trámites y de los materiales. Un arreglo puntual es mucho más corto que una vivienda completa. Las fechas se concretan contigo al planificar la obra.',
          },
          {
            pregunta: '¿Qué suele retrasar una obra?',
            respuesta:
              'Sobre todo los cambios de decisión a mitad de camino, los materiales que tardan en llegar y lo que aparece al abrir paredes y suelos en edificios antiguos.',
          },
          {
            pregunta: '¿Puedo vivir en casa durante la obra?',
            respuesta:
              'En trabajos pequeños, sí. En una reforma integral suele ser poco práctico, porque durante varias fases no hay agua, luz, cocina o baño, y hay polvo en toda la vivienda.',
          },
          {
            pregunta: '¿Cuándo debo pedir presupuesto?',
            respuesta:
              'Con margen respecto a la fecha en la que quieres empezar, sobre todo si hay materiales por encargo o trámites. En el formulario puedes indicar cuándo te gustaría empezar.',
          },
        ],
      },
      {
        titulo: 'Licencias y comunidad',
        faqs: [
          {
            pregunta: '¿Necesito licencia para reformar mi piso en Madrid?',
            respuesta:
              'Depende de la obra. En Madrid capital, los acabados interiores de una vivienda no protegida no suelen necesitar título urbanístico; otras obras requieren declaración responsable y algunas, licencia. Confirma tu caso con el Ayuntamiento o con un técnico.',
          },
          {
            pregunta: '¿Tengo que avisar a mi comunidad de vecinos?',
            respuesta:
              'Sí. La Ley de Propiedad Horizontal establece que hay que comunicar las obras previamente a quien represente a la comunidad, normalmente el presidente o el administrador.',
          },
          {
            pregunta: '¿A qué horas se pueden hacer obras en un piso de Madrid?',
            respuesta:
              'Como referencia, en Madrid capital las obras en el interior de viviendas no deben realizarse de 21:00 a 8:00 en días laborables, ni de 21:00 a 9:30 los sábados, domingos y festivos. Comprueba el horario vigente, las normas de tu comunidad y, fuera de la capital, la ordenanza de tu municipio.',
          },
          {
            pregunta: '¿Puedo tirar un tabique sin técnico?',
            respuesta:
              'Nunca debe hacerse sin confirmar que no es estructural. Si hay dudas, un técnico competente debe revisarlo antes. Además, cambiar la distribución puede requerir un trámite municipal.',
          },
          {
            pregunta: '¿Hace falta permiso para poner un contenedor?',
            respuesta:
              'Ocupar la vía pública con un contenedor o con sacas requiere autorización municipal. Es una gestión que conviene prever con antelación y dejar reflejada en el presupuesto.',
          },
        ],
      },
      {
        titulo: 'Zonas y presupuesto',
        faqs: [
          {
            pregunta: '¿Qué necesito para solicitar un presupuesto?',
            respuesta:
              'Describe el trabajo, la zona y las medidas aproximadas. Las fotografías ayudan a entender mejor el estado actual.',
          },
          {
            pregunta: '¿En qué zonas trabajáis?',
            respuesta:
              'En Madrid capital y en municipios como Alcobendas, Alcorcón, Getafe, Leganés, Móstoles o Pozuelo de Alarcón, entre otros. Si tu zona no aparece, indícalo en el formulario.',
          },
          {
            pregunta: '¿Enviar la solicitud implica contratar?',
            respuesta:
              'No. Enviar la solicitud no supone ningún compromiso de contratación y no equivale a un presupuesto cerrado.',
          },
          {
            pregunta: '¿Puedo volver a una pregunta anterior?',
            respuesta:
              'Sí. Puedes volver atrás y cambiar tus respuestas antes de enviar la solicitud.',
          },
          {
            pregunta: '¿Puedo contactar sin rellenar el formulario?',
            respuesta:
              'Sí. Puedes llamarnos al 624 67 13 74 o escribirnos por WhatsApp al mismo número.',
          },
        ],
      },
    ],
    servicio: {
      nombre: 'Preguntas frecuentes sobre reformas',
      descripcion: 'Dudas habituales sobre reformas, permisos y presupuestos en Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/piso-en-obra.webp',
    imagenAlt: 'Piso en obra con escalera y materiales',
    relacionadas: [
      'licencia-obra-madrid',
      'ayudas-reformas-madrid',
      'guias',
      'como-trabajamos',
      'precios',
      'servicios',
    ],
  },
];
