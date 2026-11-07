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
    relacionadas: ['precios', 'zonas', 'como-trabajamos', 'preguntas-frecuentes'],
  },

  /* ---------------------------- PRECIOS ---------------------------- */
  {
    path: 'precios',
    tipo: 'hub',
    title: 'Precios de reformas en Madrid | ObraLocal Madrid',
    description:
      'Precios orientativos de reformas en Madrid por servicio: baños, cocinas, integrales, pintura, albañilería y pladur. Qué influye en el coste de cada obra.',
    etiqueta: 'Precios orientativos',
    resumen: 'Rangos orientativos por servicio y factores que influyen en el coste.',
    h1: { antes: 'Precios de', resaltado: 'reformas', despues: 'en Madrid' },
    puntos: [
      'Rangos por cada servicio',
      'Precios desde 150 €',
      'Importes orientativos',
      'Presupuesto sin compromiso',
    ],
    whatsapp: 'Hola, quiero que me orientéis sobre el precio de una reforma en Madrid',
    kicker: 'PRECIOS ORIENTATIVOS',
    intro:
      'Aquí tienes los rangos de precio de todos nuestros servicios, para que puedas hacerte una idea antes de pedir presupuesto. Son orientativos, no precios cerrados: una reforma depende de muchos factores, y lo honesto es explicarte cuáles son y cómo afectan al resultado final.',
    secciones: [
      {
        titulo: 'Qué influye en el precio',
        parrafos: [
          'Dos baños de 4 m² pueden tener presupuestos muy distintos, y ambos ser correctos. Estos seis factores explican la mayor parte de las diferencias.',
        ],
        subsecciones: [
          {
            titulo: 'Metros cuadrados',
            texto: 'Marcan la cantidad de material y de mano de obra, pero no lo son todo: un baño pequeño concentra más oficios por metro que un salón grande.',
          },
          {
            titulo: 'Estado previo',
            texto: 'Humedades, paredes irregulares o suelos desnivelados añaden trabajo que no se ve en el resultado final, pero que determina cuánto durará.',
          },
          {
            titulo: 'Materiales',
            texto: 'El mismo metro de suelo o azulejo puede variar mucho de precio. La colocación también cambia: los grandes formatos y los diseños con muchos cortes requieren más tiempo.',
          },
          {
            titulo: 'Fontanería y electricidad',
            texto: 'Renovar una instalación antigua o mover tomas de agua y puntos de luz significa más obra. Mantenerlos en su sitio es una de las formas más eficaces de contener el presupuesto.',
          },
          {
            titulo: 'Licencias y trámites',
            texto: 'Tasas e impuesto de obras dependen del municipio y del tipo de actuación. Las licencias se valoran aparte, así que conviene confirmar qué corresponde a tu obra.',
          },
          {
            titulo: 'Retirada de escombros',
            texto: 'No es igual un edificio con ascensor amplio que un cuarto sin ascensor en una calle estrecha. Bajar escombros y conseguir permiso para un contenedor también tiene un coste.',
          },
        ],
      },
      {
        titulo: 'Cómo comparar presupuestos sin equivocarte',
        parrafos: [
          'Un precio más bajo no siempre es más barato. A menudo solo significa que el presupuesto incluye menos cosas. Para comparar de forma justa, comprueba estos puntos en cada oferta.',
        ],
        lista: [
          'Cantidades y mediciones de cada partida',
          'Marca, modelo o gama de los materiales',
          'Mano de obra y número de manos o capas',
          'Retirada de escombros y protección de zonas comunes',
          'Impuestos: si el IVA está incluido y a qué tipo',
          'Exclusiones y cómo se valoran los imprevistos',
          'Plazos y forma de pago',
        ],
      },
      {
        titulo: 'Cómo ajustar el presupuesto sin perder calidad',
        parrafos: [
          'Si la cifra se aleja de lo previsto, no es obligatorio renunciar a la reforma. Las medidas más eficaces son mantener los puntos de agua donde están, conservar lo que esté en buen estado y elegir bien dónde gastar más. Un azulejo más sencillo se puede cambiar con el tiempo; una tubería mal resuelta, no.',
          'Lo que no conviene recortar es lo que queda oculto: impermeabilización, instalaciones y preparación de superficies. Ahorrar en esas partidas suele salir caro a medio plazo. También puedes plantear la obra por fases, siempre que se deje hecho primero lo que iría detrás de los acabados.',
        ],
      },
      {
        titulo: 'Impuestos, tasas y otros gastos',
        parrafos: [
          'Además del precio de la obra, ten en cuenta posibles tasas municipales y el impuesto sobre construcciones, instalaciones y obras, que dependen del municipio y del trámite. Las obras de renovación de una vivienda habitual pueden tributar al IVA reducido del 10 % si cumplen ciertas condiciones, entre ellas la antigüedad de la vivienda y el peso de los materiales en el total. Confirma estos datos en tu presupuesto.',
          'También conviene reservar un margen para imprevistos, sobre todo en edificios antiguos, donde lo que hay detrás de las paredes no se conoce hasta que se abren. Demoliciones estructurales, refuerzos, licencias y residuos especiales suelen valorarse aparte.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Los precios son definitivos?',
        respuesta:
          'No. Son orientativos. El precio final debe confirmar las cantidades, los materiales, la mano de obra, los impuestos y las exclusiones.',
      },
      {
        pregunta: '¿Por qué no dais un precio cerrado por metro cuadrado?',
        respuesta:
          'Porque el metro cuadrado no refleja el estado de las instalaciones, las calidades ni el acceso. Un baño y un salón de la misma superficie no tienen nada que ver en coste. Por eso damos rangos por tipo de trabajo.',
      },
      {
        pregunta: '¿Qué datos necesitáis para orientarme mejor?',
        respuesta:
          'El tipo de trabajo, la zona, las medidas aproximadas, el estado actual y los materiales que prefieres. Las fotografías ayudan a entender mejor la situación.',
      },
    ],
    servicio: {
      nombre: 'Precios de reformas en Madrid',
      descripcion: 'Rangos orientativos por servicio y factores que influyen en el coste.',
    },
    servicioFormulario: '',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una vivienda sobre una mesa para calcular una reforma',
    modulo: 'precios',
    relacionadas: ['servicios', 'reformas-integrales-madrid', 'reforma-banos-madrid', 'como-trabajamos'],
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
            imagenAlt: 'Edificio clásico en esquina',
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
    relacionadas: ['servicios', 'precios', 'reformas-integrales-madrid', 'como-trabajamos'],
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
    relacionadas: ['servicios', 'precios', 'preguntas-frecuentes', 'reformas-integrales-madrid'],
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
    relacionadas: ['como-trabajamos', 'precios', 'servicios', 'zonas'],
  },
];
