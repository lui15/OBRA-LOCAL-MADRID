import { PaginaSeo } from './pagina-seo';

/** Portada e índices del sitio. */
export const PAGINAS_HUB: PaginaSeo[] = [
  /* ---------------------------- INICIO ---------------------------- */
  {
    path: '',
    tipo: 'inicio',
    title: 'Reformas en Madrid con presupuesto cerrado | ObraLocal',
    description:
      'Reformas en Madrid con presupuesto cerrado por escrito: baño desde 5.000 €, cocina desde 8.000 € e integral desde 500 €/m². Un único interlocutor.',
    etiqueta: 'Reformas en Madrid',
    resumen: 'Reformas de viviendas y locales en Madrid y alrededores.',
    h1: { antes: 'Reformas en Madrid', resaltado: 'con presupuesto cerrado por escrito', despues: '' },
    puntos: [
      'Presupuesto cerrado por escrito',
      'Un único interlocutor',
      'Precios publicados',
      'Madrid y alrededores',
    ],
    whatsapp: 'Hola, quiero presupuesto para una reforma en Madrid',
    kicker: 'REFORMAS EN MADRID',
    intro:
      'En ObraLocal Madrid hacemos tu reforma con nuestro equipo de albañiles, fontaneros, electricistas, pintores y pladuristas, con un presupuesto detallado y cerrado por escrito y un único interlocutor durante toda la obra, en Madrid y alrededores.',
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
          'Depende del alcance. Un baño completo de 4 a 6 m² cuesta 5.500–10.000 € en calidad media, una cocina completa 8.000–18.000 € y una reforma integral 500–1.200 €/m² según la calidad, IVA incluido. Te damos el presupuesto cerrado por escrito cuando vemos tu caso.',
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
      'Baño desde 5.000 €',
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
    title: 'Precios de reformas en Madrid 2026: baño desde 5.000 €',
    description:
      'Cuánto cuesta una reforma en Madrid en 2026: baño 5.500–10.000 €, cocina 8.000–18.000 €, piso 500–1.200 €/m². Tablas, plazos y ejemplos por partidas.',
    etiqueta: 'Precios',
    resumen: 'Precios por m² y por trabajo, un piso de 80 m² por partidas, plazos y ejemplos.',
    h1: { antes: '¿Cuánto cuesta una', resaltado: 'reforma en Madrid', despues: 'en 2026?' },
    puntos: ['Baño: 5.500–10.000 €', 'Cocina: 8.000–18.000 €', 'Piso: 500–1.200 €/m²', 'IVA incluido'],
    whatsapp: 'Hola, quiero que me orientéis sobre el precio de una reforma',
    kicker: 'PRECIOS 2026',
    intro:
      'Un baño, entre 5.500 y 10.000 €. Una cocina, entre 8.000 y 18.000 €. Un piso completo, entre 500 y 1.200 €/m² según calidad. Debajo tienes el precio por metro cuadrado de cada calidad, el precio y el plazo de cada trabajo, una reforma de 80 m² desglosada por partidas, cuánto dura cada fase y tres presupuestos de ejemplo hechos paso a paso.',
    secciones: [
      {
        id: 'que-sube',
        titulo: 'Qué hace subir el precio',
        parrafos: [
          'Dos pisos con los mismos metros pueden tener presupuestos muy distintos. Estas son las seis cosas que más mueven la cifra final, cada una con lo que suele costar.',
        ],
        subsecciones: [
          {
            titulo: 'El estado de la vivienda',
            texto:
              'Si hay humedades, primero hay que tratarlas: entre 30 y 60 €/m², desde 400 €. Si las paredes están en mal estado, alisarlas cuesta 10–16 €/m², y si tienen gotelé, quitarlo, alisar y pintar sube a 14–22 €/m² de pared.',
          },
          {
            titulo: 'Instalaciones antiguas',
            texto:
              'En muchas fincas antiguas de Madrid la instalación eléctrica y las tuberías no se han cambiado nunca. Renovar toda la instalación eléctrica de un piso de 80 m² cuesta 3.500–7.000 € y la fontanería completa, 2.500–5.000 €. Lo sabemos al ver la vivienda, antes de darte el presupuesto cerrado.',
          },
          {
            titulo: 'Cambiar la distribución',
            texto:
              'Mover o levantar tabiques añade demolición, albañilería y a veces instalaciones nuevas. En un piso de 80 m², la albañilería y la tabiquería suponen 6.000–10.000 €. Un tabique nuevo de pladur cuesta 35–55 €/m².',
          },
          {
            titulo: 'La calidad de los materiales',
            texto:
              'Es la diferencia más grande. Una reforma integral en calidad básica cuesta 500–650 €/m²; en calidad alta, 850–1.200 €/m². En un piso de 80 m², eso va de 40.000–52.000 € a 68.000–96.000 €.',
          },
          {
            titulo: 'La planta y el acceso',
            texto:
              'La demolición y el desescombro de un piso de 80 m² cuestan 3.000–5.000 €. Sin ascensor, o con un portal estrecho, bajar escombros y subir material lleva más horas, y la hora de oficial de albañilería cuesta 25–35 €. También influye dónde se puede poner el contenedor.',
          },
          {
            titulo: 'La licencia y el ICIO',
            texto:
              'En Madrid capital, las obras que necesitan declaración responsable o licencia pagan el Impuesto sobre Construcciones, Instalaciones y Obras (ICIO): el 3,75 % del presupuesto de ejecución material en las obras iniciadas desde el 1 de enero de 2024. En una obra de 50.000 € de ejecución material, son 1.875 €. En la página de licencias te explicamos cuándo hace falta cada trámite.',
          },
        ],
      },
      {
        id: 'ahorrar',
        titulo: 'Cómo ahorrar sin perder calidad',
        parrafos: ['Seis decisiones que bajan el presupuesto sin que se note en el resultado:'],
        lista: [
          'Mantén la distribución si te funciona. Te ahorras gran parte de la albañilería y la tabiquería, que en un piso de 80 m² son 6.000–10.000 €.',
          'Si el baño está bien y solo te molesta la bañera, cámbiala por un plato de ducha: 1.000–2.200 € en 1–2 días, frente a 5.500–10.000 € de un baño completo.',
          'Reparte la calidad: gasta más en lo que usas todos los días, como la grifería, la encimera o el suelo, y elige calidad básica en lo que menos se ve.',
          'Haz los trabajos en una sola obra. Si vas a quitar el gotelé y a cambiar el suelo, hacerlo a la vez evita proteger, ensuciar y limpiar la casa dos veces.',
          'Elige los materiales antes de empezar. Cada cambio durante la obra se presupuesta aparte y lo apruebas por escrito, así que decidir antes evita sorpresas.',
          'Mándanos fotos y medidas al pedir presupuesto. Cuanto más sabemos al principio, más ajustado es el presupuesto y menos imprevistos aparecen después.',
        ],
      },
      {
        titulo: 'Qué incluye el precio por metro cuadrado',
        parrafos: [
          'El precio por m² se calcula sobre la superficie útil de la vivienda e incluye mano de obra y materiales con IVA. Es la forma más rápida de saber en qué cifra te mueves, pero no sustituye a un presupuesto: dos pisos de 80 m² pueden necesitar trabajos muy distintos.',
          'Por eso, además del precio por m², te enseñamos la reforma desglosada por partidas. Un buen presupuesto separa cada partida, dice qué calidad de material incluye y qué queda fuera, para que puedas comparar con criterio.',
        ],
      },
      {
        titulo: 'Cómo comparar presupuestos de reforma',
        parrafos: [
          'Antes de comparar dos cifras, comprueba que hablan de lo mismo. Un presupuesto más barato puede no incluir el desescombro, las ventanas o la licencia.',
        ],
        lista: [
          'Que esté separado por partidas, con medidas y unidades.',
          'Que diga la calidad o la marca de los materiales principales.',
          'Que indique si el IVA está incluido.',
          'Que diga el plazo de la obra y qué pasa si hay que cambiar algo.',
          'Que diga claramente qué no incluye.',
        ],
      },
      {
        titulo: 'Impuestos y tasas',
        parrafos: [
          'Los precios de esta página llevan el IVA incluido. Aparte quedan los tributos municipales de la obra cuando hacen falta: en Madrid capital, el ICIO del 3,75 % sobre el presupuesto de ejecución material y la tasa que corresponda al trámite. Cambiar los acabados interiores de una sola vivienda no protegida, como pintar o cambiar azulejos, no necesita licencia ni declaración responsable.',
        ],
      },
      {
        titulo: 'De dónde salen estos precios',
        parrafos: [
          'Rangos orientativos de mercado en Madrid, actualizados en noviembre de 2026. El precio final depende del estado de la vivienda y de los materiales que elijas.',
          'Cuando vemos tu caso, en persona o con fotos, te damos un presupuesto detallado y cerrado por escrito antes de empezar. Si durante la obra hace falta algún cambio, te lo presupuestamos y lo apruebas por escrito antes de hacerlo.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un baño en Madrid?',
        respuesta:
          'Un baño completo de 4 a 6 m² cuesta entre 5.500 y 10.000 € en calidad media, IVA incluido. En calidad básica parte de 5.000 € y en alta puede llegar a 13.000 €. Se hace en 2–3 semanas.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar una cocina en Madrid?',
        respuesta:
          'Una cocina completa de 8 a 12 m² cuesta entre 8.000 y 18.000 €, sin electrodomésticos. El plazo habitual es de 3–4 semanas.',
      },
      {
        pregunta: '¿Cuánto cuesta la reforma integral de un piso?',
        respuesta:
          'Entre 500 y 1.200 €/m² según la calidad: 500–650 € en básica, 650–850 € en media y 850–1.200 € en alta. Desglosada por partidas, la reforma de un piso de 80 m² en calidad media queda entre 44.000 y 73.500 €, y dura 8–12 semanas.',
      },
      {
        pregunta: '¿Cuánto cuesta pintar un piso?',
        respuesta:
          'Pintar paredes y techos de un piso de 80 m² cuesta entre 1.400 y 2.600 € y se hace en 3–5 días. Por superficie, la pintura cuesta 8–14 €/m² de pared.',
      },
      {
        pregunta: '¿Cuánto cuesta quitar el gotelé?',
        respuesta:
          'Quitar el gotelé, alisar y pintar cuesta 14–22 €/m² de pared. En un piso completo se hace en 1–2 semanas.',
      },
      {
        pregunta: '¿Los precios incluyen IVA?',
        respuesta:
          'Sí. Todos los precios de esta página llevan el IVA incluido y son de mano de obra y materiales de gama media, salvo que se indique otra cosa.',
      },
      {
        pregunta: '¿El presupuesto que me dais es cerrado?',
        respuesta:
          'Sí. Te damos un presupuesto detallado y cerrado por escrito antes de empezar. Si durante la obra hace falta algún cambio, te lo presupuestamos y lo apruebas por escrito antes de hacerlo.',
      },
      {
        pregunta: '¿Cuánto se paga de ICIO en Madrid?',
        respuesta:
          'En Madrid capital, el 3,75 % del presupuesto de ejecución material para las obras iniciadas desde el 1 de enero de 2024, según la Ordenanza Fiscal 7/2023. Solo se paga cuando la obra necesita licencia o declaración responsable.',
      },
    ],
    servicio: {
      nombre: 'Precios de reformas en Madrid',
      descripcion: 'Precios orientativos de reformas en Madrid en 2026: por m², por trabajo, por partidas y plazos.',
    },
    servicioFormulario: '',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una vivienda sobre una mesa para calcular una reforma',
    modulo: 'precios',
    relacionadas: ['calculadora-reforma', 'cuanto-cuesta-reformar-piso-70-m2-madrid', 'que-pedir-presupuesto-reforma', 'reformas-integrales-madrid', 'reforma-banos-madrid', 'licencia-obra-madrid'],
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
      'Así funciona tu reforma con ObraLocal Madrid en cinco pasos: tu idea, la visita o las fotos, el presupuesto cerrado, la obra y la entrega final.',
    etiqueta: 'Cómo trabajamos',
    resumen: 'De tu solicitud a la llamada, y qué conviene preparar antes.',
    h1: { antes: 'Así funciona tu', resaltado: 'reforma', despues: 'con ObraLocal' },
    puntos: [
      'Te atendemos solo nosotros',
      'Visita sin compromiso',
      'Presupuesto ajustado y detallado',
      'Una sola persona de contacto',
    ],
    whatsapp: 'Hola, quiero saber cómo funciona una reforma con vosotros',
    kicker: 'CÓMO TRABAJAMOS',
    intro:
      'Empezar una reforma genera muchas dudas: qué preparar, a quién avisar, qué mirar en un presupuesto. Así trabajamos, en cuatro pasos: nos pides presupuesto, te respondemos solo nosotros, vamos a ver el espacio sin compromiso y te damos un presupuesto ajustado y detallado, y te acompañamos con una sola persona de contacto hasta la entrega.',
    secciones: [
      {
        titulo: 'Qué ocurre después de enviar tu solicitud',
        parrafos: [
          'Revisamos lo que nos has contado y te escribimos por WhatsApp o te llamamos al teléfono que nos has indicado. Esa conversación sirve para aclarar dudas y entender bien el trabajo. Si nos mandas fotos del espacio, podemos avanzar el presupuesto. Enviar una solicitud no supone ningún compromiso de contratación.',
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
        ],
      },
      {
        titulo: 'Cómo es nuestro formulario',
        parrafos: [
          'Lo hemos ordenado de lo fácil a lo personal: primero nos cuentas el proyecto y tus datos los dejas al final. Son cuatro pantallas, casi todo con botones, y puedes volver atrás cuando quieras. Si cierras la página a mitad, al volver sigue donde lo dejaste.',
        ],
        subsecciones: [
          {
            titulo: '1. Qué quieres reformar',
            texto:
              'Eliges el trabajo con un toque: piso completo, baño, cocina, pintura o gotelé, suelos, pladur y techos, albañilería o humedades, local u oficina, terraza u otro. Si abres el formulario desde la página de un servicio, ya viene elegido.',
          },
          {
            titulo: '2. Cómo es',
            texto:
              'Unas pocas preguntas con botones según el trabajo: los metros aproximados, el estado o lo que quieres cambiar, y la calidad que buscas (básica, media o alta). No hace falta escribir nada.',
          },
          {
            titulo: '3. Dónde y cuándo',
            texto:
              'El municipio o el barrio, con sugerencias mientras escribes, cuándo te gustaría empezar y si es una vivienda o un local. Si vienes de la página de tu zona, ya aparece rellena.',
          },
          {
            titulo: '4. A quién enviamos el presupuesto',
            texto:
              'Tu nombre y tu teléfono, para escribirte por WhatsApp o llamarte. El correo y el apartado «Cuéntanos algo más» son opcionales. Usamos estos datos solo para gestionar tu solicitud, como explica nuestra política de privacidad.',
          },
        ],
      },
      {
        titulo: 'Después de enviarla: mándanos fotos',
        parrafos: [
          'Al terminar te aparece un botón para enviarnos fotos del espacio por WhatsApp. Con las fotos entendemos mejor el estado de la vivienda y preparamos la visita, que es sin compromiso. Si en algún momento falla el envío, el formulario te deja mandárnoslo todo por WhatsApp para que no se pierda nada.',
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
          'Te escribimos por WhatsApp o te llamamos al teléfono que nos hayas indicado en el formulario. También puedes añadir un correo electrónico, aunque es opcional.',
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
              'Depende del alcance. Un baño completo de 4 a 6 m² cuesta 5.500–10.000 € en calidad media, una cocina completa 8.000–18.000 € y una reforma integral 500–1.200 €/m² según la calidad, IVA incluido. Tienes todos los precios en nuestra página de precios.',
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
