import { PaginaSeo } from './pagina-seo';

/** Trabajos más pedidos: búsquedas concretas derivadas de los servicios. */
export const PAGINAS_TRABAJOS: PaginaSeo[] = [
  /* ---------------------------- BAÑERA POR DUCHA ---------------------------- */
  {
    path: 'cambiar-banera-por-plato-ducha-madrid',
    tipo: 'trabajo',
    padre: 'reforma-banos-madrid',
    title: 'Cambiar bañera por plato de ducha, Madrid | ObraLocal Madrid',
    description:
      'Cambiar la bañera por un plato de ducha en Madrid: qué incluye, desagüe, impermeabilización, mampara y azulejos. Qué comprobar antes de pedir precio.',
    etiqueta: 'Cambiar bañera por plato de ducha',
    resumen: 'Qué implica el cambio, qué comprobar y qué influye en el precio.',
    h1: { antes: 'Cambiar bañera por', resaltado: 'plato de ducha', despues: 'en Madrid' },
    puntos: [
      'Precio según valoración',
      'Desagüe y pendiente',
      'Impermeabilización',
      'Mampara y azulejo',
    ],
    whatsapp: 'Hola, quiero presupuesto para cambiar la bañera por un plato de ducha',
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
            imagen: '/images/instalaciones-vistas.webp',
            imagenAlt: 'Instalaciones vistas durante la obra',
            texto:
              'La bañera suele tener el desagüe en un extremo y a poca altura. Un plato extraplano necesita salida y pendiente suficientes, y en un edificio antiguo no siempre hay margen en el suelo. A veces la solución es un plato algo más elevado.',
          },
          {
            titulo: 'El azulejo',
            imagen: '/images/bano-moderno.webp',
            imagenAlt: 'Baño con azulejo nuevo',
            texto:
              'Al retirar la bañera, suele quedar la parte baja de la pared sin alicatar, porque el azulejo termina en el borde. Si ya no se fabrica el mismo modelo, hay que combinar con otro, usar un panel o renovar la pared de la ducha.',
          },
          {
            titulo: 'El estado de la pared',
            imagen: '/images/paredes-ejemplo.webp',
            imagenAlt: 'Pared saneada',
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
      {
        titulo: 'Proceso de la obra',
        parrafos: [
          'Se protege el baño, se corta el agua y se retira la bañera. Con el hueco abierto se revisan pared y suelo y se adapta el desagüe. Luego se forma la base con su pendiente, se impermeabiliza y se comprueba. Por último se coloca el plato, se reponen los azulejos y se monta la grifería y la mampara.',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'Es una obra pequeña, pero tiene pasos que no se pueden saltar: la base y la impermeabilización necesitan su secado antes de usar la ducha. Si es el único baño de la vivienda, coméntalo, porque influye en cómo se organizan los días de trabajo.',
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
    imagen: '/images/plato-ducha.webp',
    imagenAlt: 'Ducha de obra con plato y mampara de vidrio',
    relacionadas: [
      'que-pedir-presupuesto-reforma',
      'precios',
      'reforma-banos-madrid',
      'albanileria-madrid',
      'reformas-integrales-madrid',
      'preguntas-frecuentes',
    ],
  },

  /* ---------------------------- GOTELÉ ---------------------------- */
  {
    path: 'quitar-gotele-madrid',
    tipo: 'trabajo',
    padre: 'alisado-paredes-madrid',
    title: 'Quitar gotelé en Madrid: precio y métodos | ObraLocal Madrid',
    description:
      'Quitar gotelé en Madrid: raspar, cubrir o trasdosar. Qué método conviene según la pared, qué precio orientativo tiene y qué comprobar antes de empezar.',
    etiqueta: 'Quitar gotelé',
    resumen: 'Raspar, cubrir o trasdosar: qué método encaja con tu pared.',
    h1: { antes: 'Quitar', resaltado: 'gotelé', despues: 'en Madrid' },
    puntos: [
      'Desde 14 €/m²',
      'Raspar, cubrir o trasdosar',
      'Paredes y techos',
      'Listo para pintar',
    ],
    whatsapp: 'Hola, quiero presupuesto para quitar gotelé',
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
            imagen: '/images/llana-masilla.webp',
            imagenAlt: 'Llana y masilla en una pared',
            texto:
              'Consiste en humedecer el gotelé y retirarlo con espátula. Funciona bien si la pintura superior es permeable, como el temple. Si es plástica, el agua no penetra y cuesta mucho más. Después hay que reparar y alisar lo que queda.',
          },
          {
            titulo: 'Cubrir con masilla',
            imagen: '/images/alisando-pared.webp',
            imagenAlt: 'Pared cubierta con masilla',
            texto:
              'Se aplican varias capas de masilla o pasta de alisar sobre el gotelé hasta enrasarlo, y después se lija. Es más limpio porque no hay que quitar nada, aunque depende de que la capa inferior esté firmemente adherida y de un buen lijado.',
          },
          {
            titulo: 'Trasdosar con pladur',
            imagen: '/images/tabique-pladur.webp',
            imagenAlt: 'Pared trasdosada con pladur',
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
      {
        titulo: 'Qué incluye',
        parrafos: [
          'Según el método elegido, el trabajo suele reunir estos pasos.',
        ],
        lista: [
          'Protección de suelos y muebles',
          'Prueba en una zona pequeña',
          'Raspado o cubrición con masilla',
          'Lijado y revisión con luz lateral',
          'Imprimación y, si se pide, pintura',
        ],
      },
      {
        titulo: 'Materiales y acabados',
        parrafos: [
          'La pasta de alisar debe ser adecuada para capas sobre pintura o soportes poco absorbentes. Para el acabado, una pintura mate disimula mejor pequeñas diferencias, mientras que una satinada exige un alisado mucho más cuidado. Decidirlo al principio evita sorpresas al terminar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta quitar el gotelé en Madrid?',
        respuesta:
          'Quitar el gotelé, alisar y pintar cuesta 14–22 €/m² de pared, IVA incluido. En un piso completo se hace en 1–2 semanas. Si la pared no tiene gotelé y solo hay que alisarla, son 10–16 €/m².',
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
    imagen: '/images/alisando-pared.webp',
    imagenAlt: 'Mano alisando una pared con llana después de quitar el gotelé',
    relacionadas: [
      'alisar-paredes-o-quitar-gotele',
      'precios',
      'alisado-paredes-madrid',
      'pintores-madrid',
      'pladur-madrid',
      'reforma-piso-completo-madrid',
    ],
  },

  /* ---------------------------- PISO COMPLETO ---------------------------- */
  {
    path: 'reforma-piso-completo-madrid',
    tipo: 'trabajo',
    padre: 'reformas-integrales-madrid',
    title: 'Reforma de piso completo en Madrid | ObraLocal Madrid',
    description:
      'Reformar un piso completo en Madrid: precios orientativos por metros, qué revisar si lo acabas de comprar y cómo priorizar para ajustar el presupuesto.',
    etiqueta: 'Reforma de piso completo',
    resumen: 'Qué revisar al comprar un piso y cómo priorizar el presupuesto.',
    h1: { antes: 'Reforma de', resaltado: 'piso completo', despues: 'en Madrid' },
    puntos: [
      'Desde 500 €/m²',
      'Si acabas de comprar',
      'Prioridades de obra',
      'Comunidad y logística',
    ],
    whatsapp: 'Hola, quiero presupuesto para reformar un piso completo en Madrid',
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
            imagen: '/images/instalaciones-vistas.webp',
            imagenAlt: 'Instalaciones nuevas antes de cerrar',
            texto:
              'Mira el cuadro eléctrico: si no tiene diferencial, o los enchufes no tienen toma de tierra, es muy probable que haya que renovar la instalación. Pregunta también por el material de las tuberías y por el sistema de calefacción.',
          },
          {
            titulo: 'Edificio',
            imagen: '/images/edificios-madrid.webp',
            imagenAlt: 'Edificios residenciales en Madrid',
            texto:
              'Pide las últimas actas de la comunidad y pregunta si hay derramas previstas, la inspección del edificio (IEE) y el estado de las bajantes. También conviene saber si hay ascensor y cómo se puede organizar el acceso de materiales.',
          },
          {
            titulo: 'Distribución y luz',
            imagen: '/images/planos-medidas.webp',
            imagenAlt: 'Plano de la distribución de un piso',
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
      {
        titulo: 'Proceso de la obra',
        parrafos: [
          'Lo habitual es empezar por la demolición y la retirada de escombros, seguir con tabiques e instalaciones, y continuar con baños, cocina y suelos. La carpintería y la pintura se dejan para el final. Antes de empezar se concreta quién coordina cada oficio y cómo se aprobarán los cambios.',
        ],
      },
      {
        titulo: 'Materiales: decide pronto',
        parrafos: [
          'Elegir suelos, azulejos, puertas y sanitarios antes de empezar evita paradas. Si tienes un presupuesto ajustado, reserva la mayor calidad para lo que más se usa y para lo que es caro de cambiar.',
        ],
      },
      {
        titulo: 'Plazos orientativos',
        parrafos: [
          'El tiempo depende de los metros, los trámites, la distribución y la disponibilidad de materiales. Pide un calendario por fases, y si tienes fecha de mudanza o de fin de alquiler, deja un margen: en un piso antiguo, lo que aparece al abrir las paredes puede cambiar los planes.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un piso completo en Madrid?',
        respuesta:
          'Reformar un piso completo cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. Si hay que renovar instalaciones, la eléctrica completa de un piso de 80 m² cuesta 3.500–7.000 € y la fontanería 2.500–5.000 €. Un piso de 70–80 m² se reforma en 8–12 semanas.',
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
    imagen: '/images/piso-reformado.webp',
    imagenAlt: 'Piso reformado con paredes blancas y suelo de madera',
    relacionadas: [
      'cuanto-cuesta-reformar-piso-70-m2-madrid',
      'orden-trabajos-reforma-integral',
      'calculadora-reforma',
      'reformas-integrales-madrid',
      'reforma-banos-madrid',
      'reforma-cocinas-madrid',
    ],
  },
];
