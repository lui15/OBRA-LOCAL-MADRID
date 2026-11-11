import { NOTA_GOOGLE } from '../datos/contacto';
import { PaginaSeo } from './pagina-seo';
import { ZONAS_AMPLIADAS } from './paginas-zonas-ampliadas';

/**
 * Páginas por zona. Para añadir una zona, añade aquí un objeto con contenido propio:
 * la ruta, el prerenderizado, el sitemap, el pie y el índice de /zonas se actualizan solos.
 */
export const PAGINAS_ZONAS: PaginaSeo[] = [
  /* ---------------------------- CHAMBERÍ ---------------------------- */
  {
    path: 'reformas-chamberi',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Reformas en Chamberí con visita sin compromiso',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Reformas en Chamberí: fincas antiguas y techos altos.`,
    etiqueta: 'Reformas en Chamberí',
    resumen: 'Pisos de principios del siglo XX, techos altos y edificios con valor patrimonial.',
    zona: 'Chamberí',
    h1: { antes: 'Reformas en', resaltado: 'Chamberí', despues: '' },
    puntos: [
      'Baño desde 5.000 €',
      'Fincas clásicas',
      'Techos altos',
      'Edificios con posible protección',
    ],
    whatsapp: 'Hola, quiero presupuesto para una reforma en Chamberí',
    kicker: 'REFORMAS EN CHAMBERÍ',
    intro:
      'Chamberí reúne parte del mejor parque residencial clásico de Madrid: edificios del Ensanche con techos altos, suelos antiguos y patios interiores, en barrios como Almagro, Trafalgar, Gaztambide, Arapiles, Ríos Rosas y Vallehermoso. Reformar aquí consiste en renovar lo que está agotado sin perder lo que da valor a la vivienda.',
    secciones: [
      {
        titulo: 'Cómo son las viviendas de Chamberí',
        parrafos: [
          'Gran parte del distrito se levantó con el Ensanche, desde finales del siglo XIX y durante el XX. Eso se traduce en pisos con techos altos, muros gruesos, balcones a la calle y distribuciones con largos pasillos y habitaciones interiores que dan a patios.',
          'Muchas de estas viviendas conservan elementos que merece la pena estudiar antes de demoler: molduras, puertas de época, suelos hidráulicos o de madera. Restaurar suele exigir más mano de obra que sustituir, pero es lo que distingue un piso clásico bien reformado. Lo mejor es decidir qué se conserva antes de pedir precio.',
        ],
      },
      {
        titulo: 'Problemas habituales en estos edificios',
        parrafos: [
          'La edad del edificio condiciona la obra más que el tamaño del piso. Estos puntos son los que más veces obligan a replantear el presupuesto.',
        ],
        subsecciones: [
          {
            titulo: 'Forjados y paredes irregulares',
            imagen: '/images/piso-en-obra.webp',
            imagenAlt: 'Piso antiguo en obra',
            texto:
              'En fincas antiguas pueden aparecer forjados con viguetas de madera, suelos desnivelados y paredes con desplomes. Antes de añadir peso, como un suelo nuevo con capa de mortero o una bañera grande, hay que valorar el estado de la estructura.',
          },
          {
            titulo: 'Instalaciones agotadas',
            imagen: '/images/instalaciones-vistas.webp',
            imagenAlt: 'Instalaciones renovadas',
            texto:
              'Las tuberías de plomo y las instalaciones eléctricas sin toma de tierra todavía aparecen en pisos que no se han reformado en décadas. Si se va a abrir la vivienda, es el momento de renovarlas por completo.',
          },
          {
            titulo: 'Habitaciones interiores y patios',
            imagen: '/images/piso-reformado.webp',
            imagenAlt: 'Piso con paso abierto entre estancias',
            texto:
              'Abrir la distribución mejora mucho la luz en estos pisos, pero antes hay que distinguir muros de carga de tabiques. Y los cambios que afectan a un patio o a una ventana no son una decisión solo de la vivienda.',
          },
        ],
      },
      {
        titulo: 'Trámites: comprueba si tu edificio está protegido',
        parrafos: [
          'En Madrid capital, la Ordenanza 6/2022 fija la declaración responsable como trámite general y la licencia para los casos de su anexo. Los acabados interiores de una vivienda sin protección no suelen requerir título urbanístico, pero la protección arquitectónica lo cambia todo.',
          'En un distrito como Chamberí esto es especialmente relevante: conviene comprobar en el Catálogo de Edificios Protegidos si el tuyo tiene algún nivel de protección antes de definir la obra, sobre todo si afecta a fachada, ventanas, balcones, portal o elementos originales. Puedes consultarlo en el Ayuntamiento o con un técnico.',
        ],
      },
      {
        titulo: 'Horarios y convivencia con los vecinos',
        parrafos: [
          'La Ley de Propiedad Horizontal obliga a comunicar la obra previamente a quien represente a la comunidad, generalmente el presidente o el administrador. Como referencia, las obras en el interior de viviendas en Madrid no deben hacerse de 21:00 a 8:00 en días laborables, ni de 21:00 a 9:30 en sábados, domingos y festivos. Comprueba el horario vigente y las normas de tu comunidad, que pueden añadir limitaciones.',
          'Muchas fincas del distrito tienen portales con revestimientos nobles y ascensores estrechos o añadidos con posterioridad, que limitan el tamaño de lo que puede subirse y obligan a una buena protección. En calles con poco espacio, el contenedor de escombros requiere autorización municipal, y por ello a menudo se trabaja con sacas. Es un coste real que debe aparecer en el presupuesto.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en todos los barrios de Chamberí?',
        respuesta:
          'Sí, Chamberí forma parte de Madrid capital, que es una de nuestras zonas de trabajo. En el formulario, selecciona «Madrid capital» e indica tu barrio y calle en los detalles.',
      },
      {
        pregunta: '¿Puedo conservar los suelos hidráulicos o la madera original?',
        respuesta:
          'Muchas veces sí, según su estado. Indícalo en tu solicitud para valorar cómo protegerlos durante la obra y si hay que reponer piezas o restaurarlos. Conviene decidirlo antes de empezar a demoler.',
      },
      {
        pregunta: '¿Mi edificio de Chamberí está protegido?',
        respuesta:
          'Depende de la finca. Lo puedes comprobar en el Catálogo de Edificios Protegidos del Ayuntamiento de Madrid. Si tiene protección, puede afectar al trámite y a lo que se puede cambiar, por lo que es lo primero que debe confirmarse.',
      },
      {
        pregunta: '¿Cuánto cuesta una reforma en Chamberí?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. En fincas antiguas influyen mucho la altura de los techos, el estado de las instalaciones y el acceso.',
      },
    ],
    servicio: {
      nombre: 'Reformas en Chamberí',
      descripcion: 'Reformas de viviendas y locales en el distrito de Chamberí, Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/edificio-clasico-madrid.webp',
    imagenAlt: 'Fachadas clásicas de edificios residenciales en Madrid',
    relacionadas: [
      'reformas-integrales-madrid',
      'reforma-piso-completo-madrid',
      'reforma-banos-madrid',
      'reformas-salamanca',
      'zonas',
    ],
  },

  /* ---------------------------- SALAMANCA ---------------------------- */
  {
    path: 'reformas-salamanca',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Reformas en Salamanca con visita sin compromiso',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Reformas en Salamanca: pisos amplios en fincas clásicas.`,
    etiqueta: 'Reformas en Salamanca',
    resumen: 'Fincas señoriales, comunidades exigentes y reformas de altas calidades.',
    zona: 'Distrito de Salamanca',
    h1: { antes: 'Reformas en', resaltado: 'Salamanca', despues: '' },
    puntos: [
      'Baño desde 5.000 €',
      'Fincas señoriales',
      'Normas de comunidad',
      'Calidades altas',
    ],
    whatsapp: 'Hola, quiero presupuesto para una reforma en el barrio de Salamanca',
    kicker: 'REFORMAS EN SALAMANCA',
    intro:
      'El distrito de Salamanca combina las fincas señoriales de Recoletos, Castellana y Goya con los edificios más modernos de Lista, Guindalera y Fuente del Berro. Aquí la reforma suele venir acompañada de dos condicionantes: una comunidad con normas estrictas y unas expectativas altas en los acabados.',
    secciones: [
      {
        titulo: 'Dos distritos en uno',
        parrafos: [
          'No es lo mismo reformar un piso amplio en una finca clásica cerca de Serrano que un piso de los años 60 en Guindalera. Conviene ubicar tu vivienda antes de comparar presupuestos o reformas de otras personas.',
        ],
        subsecciones: [
          {
            titulo: 'Recoletos, Castellana, Goya y Lista',
            imagen: '/images/reforma-cocina.webp',
            imagenAlt: 'Cocina reformada en un piso amplio',
            texto:
              'Predominan pisos grandes con techos altos, a menudo con zonas de servicio que hoy se integran en la vivienda, escaleras secundarias y ascensores de época. Las reformas tienden a redistribuir el espacio, mejorar el aislamiento e incorporar climatización sin alterar los elementos nobles.',
          },
          {
            titulo: 'Guindalera y Fuente del Berro',
            imagen: '/images/edificios-madrid.webp',
            imagenAlt: 'Bloques residenciales de Madrid',
            texto:
              'Hay más variedad: bloques de mediados del siglo XX, pisos más compactos y algunas zonas de vivienda baja. Las prioridades suelen ser actualizar instalaciones, mejorar la distribución y modernizar baños y cocinas.',
          },
        ],
      },
      {
        titulo: 'La comunidad de vecinos, parte de la obra',
        parrafos: [
          'Muchas fincas del distrito tienen administrador, conserje y normas internas sobre horarios, uso del ascensor y entrada de materiales. Además de comunicar la obra como exige la Ley de Propiedad Horizontal, es buena idea pedir por escrito esas normas antes de planificar. Algunas comunidades solicitan una fianza o la protección de portal y ascensor.',
          'Como referencia, las obras en el interior de viviendas en Madrid no deben hacerse de 21:00 a 8:00 en días laborables, ni de 21:00 a 9:30 en fines de semana y festivos, aunque la comunidad puede fijar franjas más reducidas para los trabajos ruidosos. Comprueba siempre el horario vigente. En calles muy transitadas, además, descargar materiales y colocar un contenedor requiere planificación y autorización municipal.',
        ],
      },
      {
        titulo: 'Fachadas, ventanas y climatización',
        parrafos: [
          'Es donde se producen más dudas. Cambiar ventanas o instalar máquinas de aire acondicionado afecta a la imagen exterior del edificio, y eso depende tanto de la comunidad como de la normativa municipal. En un edificio catalogado, además, las limitaciones pueden ser mayores.',
          'En cuanto a los trámites, en Madrid capital la Ordenanza 6/2022 establece la declaración responsable como vía general y la licencia para los supuestos de su anexo. Por eso, antes de definir la obra, conviene comprobar en el Catálogo de Edificios Protegidos si la finca tiene protección y confirmar con un técnico qué procedimiento corresponde.',
        ],
        lista: [
          'Consulta a la comunidad antes de cambiar la carpintería exterior',
          'Prevé dónde irán las máquinas de climatización y sus conductos',
          'Comprueba si la finca tiene algún nivel de protección',
          'Pide confirmación de cualquier elemento estructural antes de demoler',
        ],
      },
      {
        titulo: 'Calidades altas: dónde se nota de verdad',
        parrafos: [
          'En reformas de gama alta, la elección de materiales pesa tanto como su instalación. Los grandes formatos, la piedra natural y la carpintería a medida tienen plazos y riesgos propios: conviene definirlos pronto y asegurarse de que el presupuesto distingue claramente suministro y colocación. Un buen indicador de calidad es que los encuentros, los remates y las juntas se hayan pensado antes de empezar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis reformas en todo el distrito de Salamanca?',
        respuesta:
          'Sí, el distrito forma parte de Madrid capital, una de nuestras zonas de trabajo. Selecciona «Madrid capital» en el formulario y añade tu barrio en los detalles.',
      },
      {
        pregunta: '¿La comunidad puede impedirme hacer la obra?',
        respuesta:
          'Puedes hacer obras dentro de tu vivienda, pero sin menoscabar la seguridad del edificio, su estructura, su configuración exterior ni los derechos de otros propietarios. Lo que afecte a elementos comunes o a la fachada requiere contar con la comunidad.',
      },
      {
        pregunta: '¿Puedo integrar la zona de servicio en la vivienda?',
        respuesta:
          'A menudo es posible y mejora mucho la distribución, pero es un cambio que puede afectar a bajantes, instalaciones y muros, y debe revisarlo un técnico. Cuéntanos cómo está tu piso en la solicitud.',
      },
      {
        pregunta: '¿Cuánto cuesta una reforma en el barrio de Salamanca?',
        respuesta:
          'Como referencia, en un piso de más de 90 m² una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. Con calidades muy altas o instalaciones nuevas, el importe se sitúa en la parte alta. El importe final se fija al ver la vivienda.',
      },
    ],
    servicio: {
      nombre: 'Reformas en el distrito de Salamanca',
      descripcion: 'Reformas de viviendas y locales en el distrito de Salamanca, Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/edificio-esquina.webp',
    imagenAlt: 'Balcones de un edificio residencial clásico',
    relacionadas: [
      'reformas-integrales-madrid',
      'reforma-cocinas-madrid',
      'pintores-madrid',
      'reformas-chamberi',
      'zonas',
    ],
  },

  /* ---------------------------- RETIRO ---------------------------- */
  {
    path: 'reformas-retiro',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Reformas en Retiro con visita sin compromiso',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto ajustado · ✓ Trato cercano y ordenado. Reformas en Retiro: fincas de varias épocas junto al parque.`,
    etiqueta: 'Reformas en Retiro',
    resumen: 'Del entorno protegido de Jerónimos a los bloques de Estrella y Adelfas.',
    zona: 'Retiro',
    h1: { antes: 'Reformas en', resaltado: 'Retiro', despues: '' },
    puntos: [
      'Baño desde 5.000 €',
      'Seis barrios',
      'Clásicos y bloques',
      'Mejora de aislamiento',
    ],
    whatsapp: 'Hola, quiero presupuesto para una reforma en Retiro',
    kicker: 'REFORMAS EN RETIRO',
    intro:
      'Retiro es uno de los distritos más variados para reformar. En sus seis barrios conviven las fincas señoriales de Jerónimos e Ibiza, los edificios de Pacífico y los bloques residenciales de Adelfas y Estrella. Por eso, la misma reforma puede plantear retos muy diferentes según la calle.',
    secciones: [
      {
        titulo: 'Qué encontrarás en cada barrio',
        parrafos: [
          'Identificar el tipo de edificio ayuda a saber con qué problemas puedes encontrarte y qué tipo de reforma suele tener sentido.',
        ],
        subsecciones: [
          {
            titulo: 'Jerónimos e Ibiza',
            imagen: '/images/edificio-clasico-madrid.webp',
            imagenAlt: 'Fachadas clásicas de Madrid',
            texto:
              'Fincas clásicas, pisos amplios, techos altos y mucho valor patrimonial en el entorno del parque. Las prioridades suelen ser renovar instalaciones, recuperar elementos originales y redistribuir sin perder carácter. Jerónimos forma parte además del Paisaje de la Luz, declarado Patrimonio Mundial en 2021.',
          },
          {
            titulo: 'Pacífico y Niño Jesús',
            imagen: '/images/cocina-nueva.webp',
            imagenAlt: 'Cocina renovada',
            texto:
              'Mezcla de edificios de distintas épocas, con muchas viviendas de tamaño medio. Son frecuentes las reformas de baños y cocinas, los cambios de suelos y la actualización de la instalación eléctrica.',
          },
          {
            titulo: 'Adelfas y Estrella',
            imagen: '/images/sala-vacia.webp',
            imagenAlt: 'Habitación renovada en un bloque residencial',
            texto:
              'Predominan los bloques residenciales de la segunda mitad del siglo XX, con distribuciones más homogéneas y, a menudo, gotelé y terrazas. Aquí tiene mucho sentido integrar la terraza si la comunidad y la normativa lo permiten, abrir la cocina y mejorar el aislamiento.',
          },
        ],
      },
      {
        titulo: 'Mejorar aislamiento y confort',
        parrafos: [
          'En los bloques de los años 60 y 70, el aislamiento térmico y acústico es a menudo la asignatura pendiente. Cambiar ventanas y trasdosar con pladur las paredes exteriores más frías puede notarse mucho en la factura y en el confort. Si la obra ya está en marcha, añadirlo cuesta menos que hacerlo por separado.',
          'Conviene tener en cuenta que el cierre de terrazas y los cambios en carpintería exterior afectan a la fachada, por lo que no basta con decidirlo en casa: se necesita contar con la comunidad y revisar la normativa aplicable.',
        ],
      },
      {
        titulo: 'Permisos y entorno protegido',
        parrafos: [
          'En Madrid capital, la Ordenanza 6/2022 fija la declaración responsable como trámite general y reserva la licencia para los supuestos de su anexo. Si la obra se limita a acabados interiores en un edificio sin protección, normalmente no hace falta título urbanístico.',
          'En el entorno del Retiro y del Prado, la protección puede ser un factor decisivo, en particular para lo que afecta a la fachada, los balcones o el portal. Antes de definir la obra, comprueba en el Catálogo de Edificios Protegidos si afecta a tu finca, y confirma con el Ayuntamiento o con un técnico qué trámite corresponde.',
        ],
      },
      {
        titulo: 'Organización de la obra',
        parrafos: [
          'Comunica la obra a quien represente a tu comunidad, tal como exige la Ley de Propiedad Horizontal. Como referencia, las obras dentro de viviendas en Madrid no deben hacerse de 21:00 a 8:00 en días laborables, ni de 21:00 a 9:30 los sábados, domingos y festivos, pero comprueba el horario vigente y las normas de tu comunidad.',
          'Algunas calles cercanas al parque tienen restricciones de aparcamiento y mucha actividad, lo que complica la carga y descarga. Si necesitas un contenedor o reservar espacio en la calle, hay que pedir autorización municipal con antelación.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿En qué barrios de Retiro hacéis reformas?',
        respuesta:
          'En todo el distrito, que forma parte de Madrid capital: Pacífico, Adelfas, Estrella, Ibiza, Jerónimos y Niño Jesús. Selecciona «Madrid capital» en el formulario e indica tu barrio en los detalles.',
      },
      {
        pregunta: '¿Se puede cerrar la terraza en un piso de Retiro?',
        respuesta:
          'Depende de la comunidad, de la normativa urbanística y del edificio, ya que cambia la imagen de la fachada. Antes de hacer planes, consulta a la comunidad y al Ayuntamiento, o pide ayuda a un técnico.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un piso en Retiro?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido, y un baño completo cuesta 5.500–10.000 € en calidad media. El importe final depende del edificio, de las instalaciones y de las calidades.',
      },
      {
        pregunta: '¿Necesito licencia para pintar o cambiar el suelo?',
        respuesta:
          'En viviendas sin protección de Madrid capital, los acabados interiores no suelen requerir título urbanístico. Si el edificio está protegido, consulta antes al Ayuntamiento, y en todos los casos avisa a tu comunidad.',
      },
    ],
    servicio: {
      nombre: 'Reformas en Retiro',
      descripcion: 'Reformas de viviendas y locales en el distrito de Retiro, Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/bano-moderno.webp',
    imagenAlt: 'Baño reformado con mampara y revestimientos',
    relacionadas: [
      'reforma-banos-madrid',
      'reforma-piso-completo-madrid',
      'pladur-madrid',
      'reformas-salamanca',
      'zonas',
    ],
  },

  /* ---------------------------- CARABANCHEL ---------------------------- */
  {
    path: 'reformas-carabanchel',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Reformas en Carabanchel con visita sin compromiso',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Te atendemos solo nosotros · ✓ Visita sin compromiso · ✓ Presupuesto detallado. Reformas en Carabanchel: bloques de mediados del siglo XX.`,
    etiqueta: 'Reformas en Carabanchel',
    resumen: 'Pisos compactos por actualizar y vivienda más reciente en el PAU.',
    zona: 'Carabanchel',
    h1: { antes: 'Reformas en', resaltado: 'Carabanchel', despues: '' },
    puntos: [
      'Baño desde 5.000 €',
      'Pisos compactos',
      'Instalaciones por renovar',
      'Gotelé y bañeras',
    ],
    whatsapp: 'Hola, quiero presupuesto para una reforma en Carabanchel',
    kicker: 'REFORMAS EN CARABANCHEL',
    intro:
      'Carabanchel está viviendo una renovación clara: muchos pisos se compran para reformar y entrar a vivir, sobre todo en Comillas, Opañel, San Isidro, Vista Alegre, Puerta Bonita y Abrantes. En cuanto al PAU de Buenavista, sus viviendas son mucho más recientes y plantean otras necesidades.',
    secciones: [
      {
        titulo: 'El piso típico y lo que suele pedir',
        parrafos: [
          'Abundan los bloques de mediados del siglo XX, con pisos compactos, habitaciones pequeñas, cocina separada y un baño con bañera. Muchos conservan gotelé, azulejos originales e instalaciones que nunca se han renovado por completo. Es un punto de partida excelente si quieres dejar la vivienda a tu gusto, porque suele haber mucho margen de mejora.',
        ],
        lista: [
          'Unir cocina y salón para ganar luz y sensación de amplitud',
          'Cambiar la bañera por un plato de ducha',
          'Quitar el gotelé y unificar los suelos',
          'Renovar la electricidad y añadir enchufes',
          'Mejorar ventanas y aislamiento',
        ],
      },
      {
        titulo: 'Sacar partido a pocos metros',
        parrafos: [
          'En un piso de 50 o 60 m², cada decisión cuenta. Eliminar un pasillo o reducir su longitud puede aportar más que cualquier mueble, las puertas correderas ahorran espacio y los armarios empotrados aprovechan la altura. Una cocina abierta da amplitud, pero requiere una buena extracción para que los olores no se extiendan.',
          'Antes de eliminar cualquier tabique, debe confirmarse que no tiene función estructural. En esta tipología de edificios las paredes interiores no siempre son lo que parecen. Por eso conviene que lo revise un técnico antes de decidir la distribución definitiva.',
        ],
      },
      {
        titulo: 'Cuestiones técnicas de estos edificios',
        parrafos: [
          'Dos aspectos merecen especial atención en los bloques de esta época.',
        ],
        subsecciones: [
          {
            titulo: 'Instalaciones y bajantes',
            imagen: '/images/instalaciones-vistas.webp',
            imagenAlt: 'Instalaciones durante la obra',
            texto:
              'Revisa tuberías y cuadro eléctrico, porque una instalación antigua puede no soportar los electrodomésticos actuales. Si en la obra se detectan elementos de fibrocemento, como algunas bajantes o conductos antiguos, su manipulación debe correr a cargo de una empresa inscrita en el registro de empresas con riesgo de amianto.',
          },
          {
            titulo: 'Edificios sin ascensor',
            imagen: '/images/obra-en-curso.webp',
            imagenAlt: 'Vivienda durante la obra',
            texto:
              'Muchos bloques no tienen ascensor o lo tienen muy pequeño. Eso afecta al subir materiales y al bajar escombros, y es normal que incida en el precio. Indica siempre la planta y el acceso en tu solicitud.',
          },
        ],
      },
      {
        titulo: 'Trámites y vecinos',
        parrafos: [
          'Carabanchel está en Madrid capital y se rige por la Ordenanza 6/2022: la declaración responsable es el trámite general, y la licencia se reserva para los casos del anexo. Pintar o renovar acabados en una vivienda sin protección no suele requerir título urbanístico, pero cambiar la distribución sí puede exigir tramitación.',
          'Comunica la obra a tu comunidad antes de empezar, tal como marca la Ley de Propiedad Horizontal. Como referencia, en Madrid no se deben hacer obras en el interior de las viviendas de 21:00 a 8:00 en días laborables, ni de 21:00 a 9:30 en fines de semana y festivos. Comprueba el horario vigente. En edificios con paredes finas, avisar a los vecinos de los días con más ruido evita muchos conflictos.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hacéis reformas en todos los barrios de Carabanchel?',
        respuesta:
          'Sí, el distrito forma parte de Madrid capital: Comillas, Opañel, San Isidro, Vista Alegre, Puerta Bonita, Buenavista y Abrantes. Selecciona «Madrid capital» en el formulario e indica tu barrio en los detalles.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un piso de 60 m² en Carabanchel?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido: en un piso de 50 m² en calidad media, 32.500–42.500 €. El importe depende de las instalaciones, de la distribución y de las calidades.',
      },
      {
        pregunta: 'Si no tengo ascensor, ¿es más caro?',
        respuesta:
          'Puede serlo, ya que subir materiales y bajar escombros lleva más tiempo. Indica la planta en tu solicitud para que pueda tenerse en cuenta desde el primer momento.',
      },
      {
        pregunta: '¿Puedo abrir la cocina al salón?',
        respuesta:
          'A menudo sí, siempre que el tabique no sea estructural y se resuelva bien la ventilación. Si hay instalación de gas, debe revisarse la normativa aplicable. Consulta a un técnico antes de decidirlo.',
      },
    ],
    servicio: {
      nombre: 'Reformas en Carabanchel',
      descripcion: 'Reformas de viviendas y locales en el distrito de Carabanchel, Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/edificio-ladrillo-madrid.webp',
    imagenAlt: 'Edificio de viviendas de ladrillo en Madrid',
    relacionadas: [
      'reforma-piso-completo-madrid',
      'quitar-gotele-madrid',
      'cambiar-banera-por-plato-ducha-madrid',
      'albanileria-madrid',
      'zonas',
    ],
  },

  /* ---------------------------- ALCOBENDAS ---------------------------- */
  {
    path: 'reformas-alcobendas',
    tipo: 'zona',
    padre: 'zonas',
    title: 'Reformas en Alcobendas con visita sin compromiso',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Reformas en Alcobendas: pisos, adosados y chalets.`,
    etiqueta: 'Reformas en Alcobendas',
    resumen: 'Pisos del centro, vivienda reciente y chalets de La Moraleja y El Soto.',
    zona: 'Alcobendas',
    h1: { antes: 'Reformas en', resaltado: 'Alcobendas', despues: '' },
    puntos: [
      'Baño desde 5.000 €',
      'Pisos y chalets',
      'Urbanizaciones',
      'Trámites del Ayuntamiento de Alcobendas',
    ],
    whatsapp: 'Hola, quiero presupuesto para una reforma en Alcobendas',
    kicker: 'REFORMAS EN ALCOBENDAS',
    intro:
      'Alcobendas tiene su propio ayuntamiento y una oferta residencial muy amplia: pisos del Centro y de Fuentelucha, viviendas más recientes en Valdelasfuentes y Arroyo de la Vega, y chalets en La Moraleja y El Soto. Cada una de estas situaciones requiere enfocar la reforma de forma distinta.',
    secciones: [
      {
        titulo: 'Tipos de vivienda y trabajos habituales',
        parrafos: [
          'Antes de valorar una reforma en Alcobendas conviene distinguir bien de qué vivienda hablamos, porque cambia casi todo: las instalaciones, los accesos y hasta las personas a las que hay que avisar.',
        ],
        subsecciones: [
          {
            titulo: 'Centro y Fuentelucha',
            imagen: '/images/bano-moderno.webp',
            imagenAlt: 'Baño renovado en un piso',
            texto:
              'Bloques con varias décadas, cuya reforma se parece a la de muchos barrios de Madrid: actualizar instalaciones, renovar baños y cocinas, quitar gotelé y ganar luz con una mejor distribución.',
          },
          {
            titulo: 'Valdelasfuentes y Arroyo de la Vega',
            imagen: '/images/tabique-pladur.webp',
            imagenAlt: 'División de pladur en una vivienda',
            texto:
              'Viviendas más recientes con instalaciones en mejor estado. Lo habitual es personalizar: cambiar suelos, modernizar la cocina, cerrar o acondicionar espacios y crear armarios o divisiones de pladur. Hay que tener en cuenta posibles garantías del edificio y las normas de la urbanización.',
          },
          {
            titulo: 'La Moraleja y El Soto',
            imagen: '/images/cocina-abierta.webp',
            imagenAlt: 'Cocina abierta en una vivienda unifamiliar',
            texto:
              'Chalets y viviendas unifamiliares de gran superficie. Las reformas pueden abarcar varias plantas, sótanos, instalaciones de climatización o zonas exteriores, por lo que el alcance y los plazos son muy diferentes a los de un piso.',
          },
        ],
      },
      {
        titulo: 'Si reformas un chalet',
        parrafos: [
          'Un chalet permite cambios que no caben en un piso, pero añade temas propios: cubiertas, fachadas, sótanos con humedades y calderas o instalaciones más grandes. Conviene empezar por estos puntos antes de pensar en acabados, ya que una filtración en la cubierta o el sótano puede arruinar el trabajo posterior.',
          'Si la reforma incluye ampliar, cambiar la fachada o tocar la estructura, será necesario un técnico y probablemente una licencia. Las zonas residenciales con normas propias pueden añadir requisitos sobre acceso de camiones y horarios.',
        ],
      },
      {
        titulo: 'Trámites: aquí manda el Ayuntamiento de Alcobendas',
        parrafos: [
          'Alcobendas es un municipio independiente, por lo que las ordenanzas de Madrid capital no se aplican aquí. El trámite para tu obra (declaración responsable, comunicación o licencia), las tasas y el impuesto de obras dependen de la normativa municipal y del alcance de la actuación.',
          'Lo más prudente es consultarlo en el Ayuntamiento de Alcobendas antes de cerrar el calendario, en especial si hay cambios de distribución, fachada o estructura. Haz lo mismo con los horarios de ruido, ya que los fija su propia normativa, además de lo que establezca tu comunidad o urbanización.',
        ],
      },
      {
        titulo: 'Comunidad y logística',
        parrafos: [
          'Si tu vivienda está en una comunidad o urbanización, la Ley de Propiedad Horizontal obliga también aquí a comunicar la obra previamente. Muchas urbanizaciones tienen normas sobre horarios, acceso de vehículos y uso de zonas comunes; algunas tienen vigilancia en la entrada y hay que dar aviso de los proveedores.',
          'Si necesitas contenedor en la vía pública, consulta la autorización en el ayuntamiento. En un chalet, por lo general, hay más espacio de acopio, pero aun así debe protegerse el jardín y el pavimento exterior del tránsito de materiales.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en toda Alcobendas?',
        respuesta:
          'Sí, Alcobendas es una de nuestras zonas de trabajo. Selecciónala en el formulario e indica tu barrio o urbanización en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Necesito licencia para reformar en Alcobendas?',
        respuesta:
          'Depende del tipo de obra. El Ayuntamiento de Alcobendas es quien determina el trámite y la documentación necesaria, de modo que conviene consultarlo antes de empezar, sobre todo si hay cambios de distribución, fachada o estructura.',
      },
      {
        pregunta: '¿Hacéis reformas de chalets?',
        respuesta:
          'Sí, nuestro servicio de reformas integrales cubre viviendas de todo tipo, incluidas las casas y los chalets. Indica el tipo de inmueble y los metros aproximados en tu solicitud.',
      },
      {
        pregunta: '¿Cuánto cuesta una reforma en Alcobendas?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. La obra exterior de un chalet se presupuesta aparte, porque no entra en estos precios.',
      },
    ],
    servicio: {
      nombre: 'Reformas en Alcobendas',
      descripcion: 'Reformas de viviendas, chalets y locales en Alcobendas, Comunidad de Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/cocina-abierta.webp',
    imagenAlt: 'Cocina abierta al comedor en una vivienda amplia',
    relacionadas: [
      'reformas-integrales-madrid',
      'pladur-madrid',
      'reforma-cocinas-madrid',
      'pintores-madrid',
      'zonas',
    ],
  },
  ...ZONAS_AMPLIADAS,
];
