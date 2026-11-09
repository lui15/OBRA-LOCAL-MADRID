import { PaginaSeo, SeccionPagina, Faq } from './pagina-seo';

/** Datos propios de cada zona; el resto de la página se completa igual en todas. */
interface DatosZona {
  path: string;
  /** Nombre corto: «Getafe», «Tetuán». */
  zona: string;
  title: string;
  description: string;
  resumen: string;
  intro: string;
  puntos: string[];
  imagen: string;
  imagenAlt: string;
  secciones: SeccionPagina[];
  faqs: Faq[];
  relacionadas: string[];
}

function zona(d: DatosZona): PaginaSeo {
  return {
    path: d.path,
    tipo: 'zona',
    padre: 'zonas',
    title: d.title,
    description: d.description,
    etiqueta: `Reformas en ${d.zona}`,
    resumen: d.resumen,
    zona: d.zona,
    h1: { antes: 'Reformas en', resaltado: d.zona, despues: '' },
    puntos: d.puntos,
    whatsapp: `Hola, quiero pedir presupuesto para una reforma en ${d.zona}`,
    kicker: `REFORMAS EN ${d.zona.toUpperCase()}`,
    intro: d.intro,
    secciones: d.secciones,
    faqs: d.faqs,
    servicio: {
      nombre: `Reformas en ${d.zona}`,
      descripcion: `Reformas de viviendas y locales en ${d.zona}, Comunidad de Madrid.`,
    },
    servicioFormulario: '',
    imagen: d.imagen,
    imagenAlt: d.imagenAlt,
    relacionadas: d.relacionadas,
  };
}

const img = (nombre: string) => `/images/${nombre}.webp`;

/**
 * Zonas añadidas. Cada una con contenido propio: tipo de edificios, trabajos típicos y consejos.
 * Para añadir otra, añade aquí un objeto: ruta, sitemap, menús e índice se actualizan solos.
 */
export const ZONAS_AMPLIADAS: PaginaSeo[] = [
  /* ---------------------------- GETAFE ---------------------------- */
  zona({
    path: 'reformas-getafe',
    zona: 'Getafe',
    title: 'Reformas en Getafe | ObraLocal Madrid',
    description:
      'Reformas en Getafe: pisos de los años 60 y 70 en el Centro y Las Margaritas, vivienda reciente en El Bercial y Los Molinos. Trámites y presupuesto.',
    resumen: 'Bloques del crecimiento industrial y barrios nuevos del norte y el sur.',
    intro:
      'Getafe creció muy deprisa a partir de los años sesenta, de la mano de su industria, y eso se nota en su vivienda: muchos bloques de esa época en el Centro, Juan de la Cierva, Las Margaritas o San Isidro, y barrios mucho más recientes como Getafe Norte, El Bercial, Los Molinos o Buenavista. Una reforma aquí empieza por saber en cuál de los dos mundos está tu piso.',
    puntos: ['Baño desde 5.000 €', 'Bloques de los años 60 y 70', 'Barrios nuevos al norte y al sur', 'Ayuntamiento de Getafe'],
    imagen: img('edificios-madrid'),
    imagenAlt: 'Bloques residenciales en el sur de Madrid',
    secciones: [
      {
        titulo: 'Dos tipos de vivienda muy distintos',
        parrafos: [
          'La diferencia entre un piso del Centro y uno de Los Molinos no es solo de edad. Cambian las instalaciones, el aislamiento, el tamaño de las estancias y hasta la forma de organizar la obra.',
        ],
        subsecciones: [
          {
            titulo: 'Centro, Juan de la Cierva y Las Margaritas',
            texto:
              'Predominan los pisos compactos de bloques con varias décadas, a menudo con cocina independiente pequeña, un único baño con bañera y una instalación eléctrica pensada para muchos menos aparatos que los de hoy. Son pisos agradecidos para reformar: con pocos cambios ganan mucho.',
            imagen: img('obra-en-curso'),
            imagenAlt: 'Piso en obra con la distribución abierta',
          },
          {
            titulo: 'Getafe Norte, El Bercial, Los Molinos y Buenavista',
            texto:
              'Viviendas de las últimas décadas, con instalaciones en mejor estado y, muchas veces, plaza de garaje y zonas comunes. Aquí las reformas suelen ser de personalización: suelos, cocina, armarios, cerramientos o un baño más actual.',
            imagen: img('cocina-nueva'),
            imagenAlt: 'Cocina actualizada en una vivienda reciente',
          },
        ],
      },
      {
        titulo: 'Trabajos que más se piden en Getafe',
        parrafos: [
          'En los pisos de más edad, lo habitual es renovar la electricidad, cambiar la bañera por un plato de ducha, quitar el gotelé y abrir la cocina al salón cuando la estructura lo permite. En los barrios nuevos, la demanda va más hacia cocinas, suelos y tabiques o armarios de pladur.',
        ],
        lista: [
          'Cambio de bañera por plato de ducha',
          'Quitar gotelé y pintar toda la vivienda',
          'Renovación de la instalación eléctrica',
          'Cocinas y suelos en pisos recientes',
        ],
      },
      {
        titulo: 'Trámites: es competencia del Ayuntamiento de Getafe',
        parrafos: [
          'Getafe es un municipio con su propio ayuntamiento, así que las ordenanzas de Madrid capital no se aplican. El tipo de trámite, las tasas y el impuesto de obras dependen de la normativa municipal y de lo que vayas a hacer. Antes de fijar fechas, consulta en el Ayuntamiento de Getafe qué corresponde a tu obra, sobre todo si cambias distribución, fachada o elementos comunes.',
          'Si vives en un bloque, recuerda que hay que comunicar la obra a quien represente a la comunidad antes de empezar. Pregunta también por las normas internas sobre horarios y uso del ascensor.',
        ],
      },
      {
        titulo: 'Consejos para reformar en Getafe',
        parrafos: [
          'En los bloques sin ascensor, la subida de material y la bajada de escombros pesan en el presupuesto: indica siempre la planta. Si tu calle tiene poco espacio, el contenedor en la vía pública necesita autorización municipal, así que conviene pedirla con margen.',
          'En las viviendas nuevas, revisa la documentación del edificio antes de tocar instalaciones o cerramientos: puede haber condiciones de la promoción o de la comunidad que afecten a lo que se puede cambiar.',
        ],
      },
      {
        titulo: 'Errores habituales al reformar un piso antiguo en Getafe',
        parrafos: [
          'El más común es empezar por lo que se ve. Un piso de los años sesenta con suelos y cocina nuevos, pero con la instalación eléctrica original, acaba necesitando rozas en paredes recién pintadas. Lo sensato es decidir primero qué pasa con la electricidad, el agua y los desagües, y después elegir acabados.',
          'El segundo error es no medir el hueco de la escalera y el portal. En muchos bloques las escaleras son estrechas y no hay ascensor, y una encimera larga o un plato de ducha grande pueden no caber. Conviene medir antes de comprar materiales.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué reformo primero en un piso antiguo de Getafe?',
        respuesta:
          'Las instalaciones: electricidad, fontanería y desagües. Después la distribución, y por último suelos, cocina, baño y pintura. Así no se rompe lo que ya está terminado.',
      },
      {
        pregunta: '¿Hacéis reformas en todos los barrios de Getafe?',
        respuesta:
          'Getafe es una de nuestras zonas de trabajo. Selecciónala en el formulario e indica tu barrio en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un piso en Getafe?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido, y un baño completo cuesta 5.500–10.000 € en calidad media. El importe depende del estado del piso y de las calidades.',
      },
      {
        pregunta: '¿Necesito licencia para reformar en Getafe?',
        respuesta:
          'Depende de la obra y lo decide el Ayuntamiento de Getafe. Consúltalo antes de empezar, sobre todo si hay cambios de distribución, fachada o estructura.',
      },
    ],
    relacionadas: ['reformas-leganes', 'cambiar-banera-por-plato-ducha-madrid', 'quitar-gotele-madrid', 'precios', 'zonas'],
  }),

  /* ---------------------------- LEGANÉS ---------------------------- */
  zona({
    path: 'reformas-leganes',
    zona: 'Leganés',
    title: 'Reformas en Leganés | ObraLocal Madrid',
    description:
      'Reformas en Leganés: pisos de Zarzaquemada y San Nicasio, vivienda nueva en Arroyo Culebro y Solagua. Qué cambiar primero, trámites y presupuesto.',
    resumen: 'Zarzaquemada, San Nicasio y los desarrollos de Arroyo Culebro y Solagua.',
    intro:
      'Zarzaquemada es uno de los grandes conjuntos de vivienda de los años sesenta y setenta del sur de Madrid, y buena parte de las reformas de Leganés se concentran en pisos así: muchos metros de bloque, distribuciones repetidas y un potencial grande de mejora. A su lado conviven barrios como San Nicasio, El Carrascal, La Fortuna y los desarrollos más nuevos de Arroyo Culebro, Valdepelayo o Solagua.',
    puntos: ['Baño desde 5.000 €', 'Grandes conjuntos de bloques', 'Distribuciones repetidas', 'Ayuntamiento de Leganés'],
    imagen: img('edificio-ladrillo-madrid'),
    imagenAlt: 'Edificio residencial de ladrillo',
    secciones: [
      {
        titulo: 'La ventaja de reformar un piso «repetido»',
        parrafos: [
          'En los grandes conjuntos, muchos pisos comparten la misma planta. Eso tiene una ventaja práctica: lo que ha funcionado en el piso de un vecino suele funcionar en el tuyo, y es fácil saber de antemano dónde están las bajantes, qué tabiques suelen poder moverse y cómo se resolvió la cocina en otras viviendas del bloque.',
          'Antes de decidir la nueva distribución, pregunta en tu comunidad si hay vecinos que ya hayan reformado. Ver un piso igual al tuyo ya terminado ayuda mucho a decidir.',
        ],
      },
      {
        titulo: 'Qué suele pedir un piso de Zarzaquemada o San Nicasio',
        parrafos: ['Son viviendas de varias décadas que no siempre se han renovado a fondo.'],
        subsecciones: [
          {
            titulo: 'Instalaciones',
            texto:
              'Cuadro eléctrico sin protecciones actuales, pocos enchufes y tuberías antiguas. Si vas a abrir paredes, es el momento de renovarlas para no tener que romper otra vez.',
            imagen: img('instalaciones-vistas'),
            imagenAlt: 'Tuberías y cables nuevos antes de cerrar la pared',
          },
          {
            titulo: 'Baño y cocina',
            texto:
              'Baños pequeños con bañera y cocinas independientes. Cambiar la bañera por una ducha y ganar encimera en la cocina son dos de las mejoras que más se notan en el día a día.',
            imagen: img('plato-ducha'),
            imagenAlt: 'Ducha de obra con plato y mampara',
          },
        ],
      },
      {
        titulo: 'Barrios nuevos: personalizar, no rehacer',
        parrafos: [
          'En Arroyo Culebro, Valdepelayo o Solagua las viviendas son mucho más recientes. Lo habitual no es rehacer instalaciones sino adaptar la casa: cambiar suelos, crear armarios o divisiones de pladur, renovar la cocina o mejorar la iluminación. Antes de tocar nada que afecte a la fachada o a las zonas comunes, revisa las normas de tu comunidad.',
        ],
      },
      {
        titulo: 'Trámites y organización',
        parrafos: [
          'Leganés tiene su propio ayuntamiento y sus propias ordenanzas. Consulta en él qué trámite corresponde a tu obra antes de cerrar fechas. Comunica la obra a la comunidad, y si necesitas contenedor en la calle, pide la autorización municipal con antelación.',
          'Si el bloque no tiene ascensor, indícalo en tu solicitud: subir material y bajar escombros a mano cambia el tiempo de trabajo y el presupuesto.',
        ],
      },
      {
        titulo: 'Cómo preparar la reforma de un piso de Leganés',
        parrafos: [
          'Antes de pedir presupuesto, haz una visita al piso con una libreta: anota qué te molesta hoy (poca luz, un baño incómodo, enchufes insuficientes) y qué quieres conseguir. Mide las estancias, fotografía el cuadro eléctrico y localiza la bajante del baño y la cocina. Con eso, cualquier presupuesto será más preciso.',
          'Si compraste el piso para reformarlo, revisa también la situación de la comunidad: muchas de los grandes conjuntos tienen pendientes obras de fachada, cubierta o accesibilidad, y conviene saberlo antes de fijar tu presupuesto total.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hay que avisar a los vecinos antes de reformar?',
        respuesta:
          'Hay que comunicar la obra a quien represente a la comunidad, normalmente el presidente o el administrador. Además, avisar a los vecinos de los días más ruidosos evita muchos conflictos.',
      },
      {
        pregunta: '¿Trabajáis en Leganés?',
        respuesta:
          'Sí, Leganés es una de nuestras zonas de trabajo. Selecciónala en el formulario e indica tu barrio en los detalles.',
      },
      {
        pregunta: '¿Se puede abrir la cocina al salón en Zarzaquemada?',
        respuesta:
          'A menudo sí, pero antes hay que confirmar que el tabique no es estructural y resolver bien la extracción. Debe revisarlo un técnico antes de decidir.',
      },
      {
        pregunta: '¿Cuánto cuesta una reforma integral en Leganés?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido: en un piso de 60 m² en calidad media, 39.000–51.000 €.',
      },
    ],
    relacionadas: ['reformas-getafe', 'reformas-alcorcon', 'reforma-piso-completo-madrid', 'calculadora-reforma', 'zonas'],
  }),

  /* ---------------------------- ALCORCÓN ---------------------------- */
  zona({
    path: 'reformas-alcorcon',
    zona: 'Alcorcón',
    title: 'Reformas en Alcorcón | ObraLocal Madrid',
    description:
      'Reformas en Alcorcón: pisos de Parque Lisboa, San José de Valderas y Ondarreta, viviendas del Ensanche Sur y chalets de Campodón. Trámites y precios.',
    resumen: 'Parques residenciales de los setenta, Ensanche Sur y chalets de Campodón.',
    intro:
      'Alcorcón se organizó en buena parte en grandes «parques» residenciales: Parque Lisboa, Parque Ondarreta o San José de Valderas, con bloques de los años setenta rodeados de zonas verdes. A ellos se suman el Ensanche Sur, mucho más reciente, y la zona de chalets de Campodón. Cada uno pide un enfoque de reforma distinto.',
    puntos: ['Baño desde 5.000 €', 'Parques residenciales', 'Ensanche Sur', 'Chalets en Campodón'],
    imagen: img('sala-vacia'),
    imagenAlt: 'Habitación renovada con paredes lisas',
    secciones: [
      {
        titulo: 'Pisos de los parques residenciales',
        parrafos: [
          'Los bloques de Parque Lisboa, Ondarreta o San José de Valderas suelen tener pisos de buen tamaño para su época, con terraza y varias habitaciones. Lo que más se suele reformar es la cocina, los baños y los suelos, y es frecuente integrar la terraza en el salón cuando la comunidad y la normativa lo permiten.',
          'Al tratarse de edificios con bastantes años, conviene revisar la instalación eléctrica y las tuberías antes de cerrar el presupuesto, porque condicionan el resto de la obra.',
        ],
      },
      {
        titulo: 'Ensanche Sur y Campodón',
        parrafos: ['Dos realidades distintas dentro del mismo municipio.'],
        subsecciones: [
          {
            titulo: 'Ensanche Sur',
            texto:
              'Vivienda reciente, con instalaciones al día. Las reformas suelen ser de acabados: suelos, armarios empotrados, cambio de cocina o pequeños cambios de distribución con pladur.',
            imagen: img('tabique-pladur'),
            imagenAlt: 'Tabique de pladur en una vivienda reciente',
          },
          {
            titulo: 'Chalets de Campodón',
            texto:
              'En viviendas unifamiliares entran en juego cubiertas, fachadas, sótanos y jardines. Conviene empezar por lo que protege la casa del agua antes de pensar en acabados interiores.',
            imagen: img('cocina-abierta'),
            imagenAlt: 'Cocina abierta en una vivienda unifamiliar',
          },
        ],
      },
      {
        titulo: 'Cerrar la terraza: lo que debes saber',
        parrafos: [
          'Es una de las peticiones más habituales en Alcorcón. Cerrar una terraza cambia la imagen de la fachada, así que no depende solo de ti: hace falta contar con la comunidad y comprobar qué permite la normativa municipal. Además, si se integra la terraza en el salón, hay que resolver bien el aislamiento y el suelo para que no quede una zona fría.',
        ],
      },
      {
        titulo: 'Trámites en Alcorcón',
        parrafos: [
          'El Ayuntamiento de Alcorcón distingue, según su información pública, entre distintos tipos de trámite para las obras menores. Consulta cuál corresponde a la tuya antes de empezar. Y como en cualquier edificio con comunidad, comunica la obra a quien la represente.',
        ],
      },
      {
        titulo: 'Qué reformar en un piso de los parques de Alcorcón',
        parrafos: [
          'Los pisos de Parque Lisboa, Ondarreta o San José de Valderas suelen tener una buena base: estancias amplias para su época, ventilación cruzada y terraza. Por eso muchas reformas no necesitan cambiar la distribución y pueden centrarse en lo que más se usa: cocina, baños, suelos y carpintería interior. Eso contiene el presupuesto sin renunciar a una vivienda actual.',
          'Si la cocina es cerrada y pequeña, una alternativa a tirar el tabique es abrir un hueco amplio o una puerta corredera acristalada hacia el salón: gana luz y conexión sin tocar tanto la estructura. Siempre hay que confirmar antes qué muros son de carga.',
          'En los pisos con terraza, la orientación importa: si da al sol de tarde, unas buenas ventanas y protección solar pueden ser tan importantes como el cerramiento. Y si el piso tiene calefacción central de la comunidad, pregunta antes de mover radiadores, porque puede haber limitaciones en el circuito común.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en Parque Lisboa y San José de Valderas?',
        respuesta:
          'Sí, en todo Alcorcón. Indica tu barrio en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Puedo cambiar los radiadores de sitio si tengo calefacción central?',
        respuesta:
          'Depende de la instalación de la comunidad. Algunos cambios son posibles y otros afectan al circuito común. Consúltalo con el administrador antes de planificar la obra.',
      },
      {
        pregunta: '¿Hacéis reformas en Alcorcón?',
        respuesta: 'Sí, Alcorcón es una de nuestras zonas de trabajo. Selecciónala en el formulario.',
      },
      {
        pregunta: '¿Puedo cerrar la terraza de mi piso en Alcorcón?',
        respuesta:
          'Depende de la comunidad y de la normativa municipal, porque afecta a la fachada. Consúltalo antes de encargar el cerramiento.',
      },
      {
        pregunta: '¿Reformáis chalets en Campodón?',
        respuesta:
          'Nuestro servicio de reformas integrales cubre también casas y chalets. Indica el tipo de inmueble y los metros en la solicitud.',
      },
    ],
    relacionadas: ['reformas-mostoles', 'reformas-leganes', 'reforma-cocinas-madrid', 'pladur-madrid', 'zonas'],
  }),

  /* ---------------------------- MÓSTOLES ---------------------------- */
  zona({
    path: 'reformas-mostoles',
    zona: 'Móstoles',
    title: 'Reformas en Móstoles | ObraLocal Madrid',
    description:
      'Reformas en Móstoles: pisos del Centro y Villafontana, vivienda de Móstoles Sur y chalets de Parque Coimbra. Trabajos habituales, trámites y precios.',
    resumen: 'Centro, Villafontana, Móstoles Sur y los chalets de Parque Coimbra.',
    intro:
      'Móstoles pasó de pueblo a gran ciudad en pocas décadas, y su vivienda lo refleja: bloques del Centro y Villafontana levantados durante ese crecimiento, barrios recientes como Móstoles Sur y urbanizaciones de chalets como Parque Coimbra. Conocer la época del edificio es la mejor forma de anticipar qué necesita tu reforma.',
    puntos: ['Baño desde 5.000 €', 'Bloques del crecimiento urbano', 'Móstoles Sur', 'Chalets en Parque Coimbra'],
    imagen: img('piso-reformado'),
    imagenAlt: 'Piso reformado con suelo de madera',
    secciones: [
      {
        titulo: 'Pisos del Centro y Villafontana',
        parrafos: [
          'Son la mayor parte de las reformas en Móstoles. Pisos de tres o cuatro dormitorios pequeños, con pasillo largo y un baño. Muchos propietarios aprovechan la reforma para pasar a dos o tres dormitorios más amplios, o para sumar un segundo baño si las bajantes lo permiten.',
          'Ganar un baño es posible en muchos casos, pero depende de por dónde pasan los desagües: es lo primero que hay que estudiar.',
        ],
        subsecciones: [
          {
            titulo: 'Eliminar el pasillo',
            texto:
              'Reducir o eliminar el pasillo es de lo que más metros útiles devuelve. Requiere confirmar qué tabiques son estructurales y mover puertas e interruptores.',
            imagen: img('planos-medidas'),
            imagenAlt: 'Plano de una vivienda para replantear la distribución',
          },
        ],
      },
      {
        titulo: 'Móstoles Sur y las urbanizaciones',
        parrafos: [
          'En Móstoles Sur la vivienda es reciente y las reformas son de acabados y personalización. En urbanizaciones como Parque Coimbra, con casas unifamiliares, las obras pueden incluir exteriores, cubiertas o sótanos, y suelen tener normas internas sobre horarios y acceso de vehículos.',
        ],
      },
      {
        titulo: 'Qué conviene revisar antes de empezar',
        parrafos: ['Unas comprobaciones sencillas evitan sorpresas a mitad de obra.'],
        lista: [
          'Cuadro eléctrico y toma de tierra',
          'Estado de bajantes y desagües',
          'Si hay ascensor y de qué tamaño',
          'Normas de la comunidad o urbanización',
          'Trámite que exige el Ayuntamiento de Móstoles',
        ],
      },
      {
        titulo: 'Trámites en Móstoles',
        parrafos: [
          'Móstoles tiene su propio ayuntamiento, que es quien determina el trámite, las tasas y los horarios aplicables. Consúltalo antes de empezar. En edificios con comunidad, comunica la obra antes de iniciarla.',
        ],
      },
      {
        titulo: 'Reformar para vender o alquilar en Móstoles',
        parrafos: [
          'Una parte de las reformas en Móstoles se hacen para alquilar o vender. En esos casos conviene invertir en lo que más valora quien visita el piso: baño y cocina en buen estado, paredes lisas y luminosas, buena instalación eléctrica y suelos uniformes. Los acabados muy personales rara vez se recuperan en el precio.',
          'Si la reforma es para alquilar, prima la durabilidad: suelos resistentes al uso, pinturas lavables, grifería sencilla de reponer y una instalación eléctrica con circuitos suficientes para electrodomésticos actuales. Evitarás averías y llamadas a mitad de contrato.',
          'Y si es para vivir, piensa en cómo usarás la casa dentro de diez años: un plato de ducha accesible, puertas más anchas o una habitación polivalente pueden marcar la diferencia más adelante.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Reformáis chalets en Parque Coimbra?',
        respuesta:
          'Sí, el servicio de reformas integrales incluye casas y chalets. Revisa también las normas de la urbanización sobre obras y accesos.',
      },
      {
        pregunta: '¿Qué pasa si el bloque no tiene ascensor?',
        respuesta:
          'Se puede reformar igual, pero subir material y bajar escombros lleva más tiempo y se refleja en el presupuesto. Indica la planta en tu solicitud.',
      },
      {
        pregunta: '¿Qué reforma revaloriza más un piso en Móstoles?',
        respuesta:
          'Como regla general, lo que más se nota es un baño y una cocina actualizados, paredes lisas y una buena instalación eléctrica. Los acabados muy personalizados suelen recuperarse menos.',
      },
      {
        pregunta: '¿Trabajáis en Móstoles?',
        respuesta: 'Sí, Móstoles es una de nuestras zonas de trabajo. Selecciónala en el formulario e indica tu barrio.',
      },
      {
        pregunta: '¿Se puede añadir un segundo baño en un piso de Móstoles?',
        respuesta:
          'Depende de la posición de las bajantes y de la pendiente que necesitan los desagües. Es lo primero que hay que comprobar antes de plantearlo.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un piso de 80 m² en Móstoles?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. El importe depende del estado y de las calidades.',
      },
    ],
    relacionadas: ['reformas-alcorcon', 'reformas-integrales-madrid', 'calculadora-reforma', 'precios', 'zonas'],
  }),

  /* ---------------------------- POZUELO ---------------------------- */
  zona({
    path: 'reformas-pozuelo-de-alarcon',
    zona: 'Pozuelo de Alarcón',
    title: 'Reformas en Pozuelo de Alarcón | ObraLocal Madrid',
    description:
      'Reformas en Pozuelo de Alarcón: pisos del Pueblo y la Estación, viviendas de la zona de Avenida de Europa y chalets de Somosaguas y Monteclaro.',
    resumen: 'Pueblo, Estación, Avenida de Europa y chalets de Somosaguas o Monteclaro.',
    intro:
      'Pozuelo de Alarcón mezcla un casco urbano con pisos de varias épocas (el Pueblo y la Estación), zonas residenciales más recientes alrededor de la Avenida de Europa y grandes urbanizaciones de vivienda unifamiliar como Somosaguas o Monteclaro. Las reformas aquí suelen ser amplias y con calidades altas, y la organización de la obra importa tanto como el proyecto.',
    puntos: ['Baño desde 5.000 €', 'Pisos y viviendas unifamiliares', 'Urbanizaciones con normas propias', 'Ayuntamiento de Pozuelo'],
    imagen: img('cocina-abierta'),
    imagenAlt: 'Cocina abierta al comedor en una vivienda amplia',
    secciones: [
      {
        titulo: 'Reformar una vivienda unifamiliar',
        parrafos: [
          'En una casa entran en juego cosas que un piso no tiene: cubierta, fachada, sótano, instalaciones de calefacción más grandes y jardín. El orden recomendable es empezar por lo que protege la casa —agua y humedad— y seguir por instalaciones, antes de invertir en acabados.',
        ],
        subsecciones: [
          {
            titulo: 'Sótanos y humedades',
            texto:
              'Un sótano que se quiere convertir en zona de estar necesita resolver primero la humedad y la ventilación. Revestir sin tratar el origen es trabajo perdido.',
            imagen: img('paredes-ejemplo'),
            imagenAlt: 'Pared saneada antes del acabado',
          },
          {
            titulo: 'Cocinas abiertas y grandes espacios',
            texto:
              'Es habitual unir cocina y comedor o rediseñar la planta baja. En estos casos, la estructura y la extracción de humos condicionan el diseño desde el principio.',
            imagen: img('cocina-nueva'),
            imagenAlt: 'Cocina amplia con isla central',
          },
        ],
      },
      {
        titulo: 'Pisos del Pueblo, la Estación y Avenida de Europa',
        parrafos: [
          'En el casco y en la zona de la Estación hay pisos de varias décadas con necesidades parecidas a las de Madrid capital: instalaciones, baños y cocinas. En la zona de Avenida de Europa la vivienda es más reciente y la reforma suele centrarse en personalizar acabados, armarios y climatización.',
        ],
      },
      {
        titulo: 'Urbanizaciones: normas, accesos y horarios',
        parrafos: [
          'Muchas urbanizaciones tienen normas propias sobre horarios de obra, acceso de camiones, colocación de contenedores y aspecto exterior. Pide esas normas por escrito antes de planificar, y avisa con tiempo a la seguridad de la urbanización de los proveedores que van a entrar.',
          'El trámite de la obra lo determina el Ayuntamiento de Pozuelo de Alarcón. Consúltalo antes de empezar, sobre todo si hay ampliaciones, cambios de fachada o actuaciones en la parcela.',
        ],
      },
      {
        titulo: 'Planificar una reforma grande en Pozuelo',
        parrafos: [
          'En reformas amplias, el calendario depende tanto de la obra como de las decisiones. Elegir pronto los materiales con plazos de entrega largos —carpintería a medida, piedra natural, grandes formatos cerámicos— evita parar la obra a mitad. Si la vivienda está vacía durante la reforma, se avanza más rápido y con menos protecciones.',
          'Separa en el presupuesto lo que es obra de lo que es equipamiento: electrodomésticos, mobiliario de cocina, sanitarios o domótica. Así podrás comparar ofertas de forma justa y decidir dónde invertir más.',
          'En viviendas unifamiliares, piensa también en el mantenimiento futuro: registros accesibles para instalaciones, buena ventilación en sótanos y materiales de fachada fáciles de conservar ahorran problemas durante años.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué incluye una reforma integral de una casa?',
        respuesta:
          'Según el estado, puede abarcar demolición y nueva distribución, instalaciones, cubierta y fachada, suelos, carpintería, baños, cocina y pintura. El alcance se define por partidas antes de empezar.',
      },
      {
        pregunta: '¿Atendéis también pisos en Pozuelo?',
        respuesta:
          'Sí, tanto pisos del casco y de la Estación como viviendas de la zona de Avenida de Europa. Indica el tipo de inmueble en tu solicitud.',
      },
      {
        pregunta: '¿Conviene vivir en la casa durante una reforma grande?',
        respuesta:
          'En reformas amplias suele ser poco práctico y alarga la obra. Si es imprescindible, hay que plantear la obra por zonas, lo que normalmente encarece el resultado.',
      },
      {
        pregunta: '¿Hacéis reformas en Pozuelo de Alarcón?',
        respuesta: 'Sí, Pozuelo de Alarcón es una de nuestras zonas de trabajo. Selecciónala en el formulario.',
      },
      {
        pregunta: '¿Reformáis chalets completos?',
        respuesta:
          'Sí, el servicio de reformas integrales cubre casas y chalets. Indica el tipo de inmueble, las plantas y los metros aproximados en tu solicitud.',
      },
      {
        pregunta: '¿Mi urbanización puede limitar los horarios de obra?',
        respuesta:
          'Sí, muchas tienen normas propias. Pídelas por escrito antes de fijar el calendario, además de consultar la normativa municipal.',
      },
    ],
    relacionadas: ['reformas-majadahonda', 'reformas-las-rozas', 'reformas-integrales-madrid', 'reforma-cocinas-madrid', 'zonas'],
  }),

  /* ---------------------------- LAS ROZAS ---------------------------- */
  zona({
    path: 'reformas-las-rozas',
    zona: 'Las Rozas',
    title: 'Reformas en Las Rozas | ObraLocal Madrid',
    description:
      'Reformas en Las Rozas: pisos del centro, viviendas de Las Matas y chalets de El Pinar o Molino de la Hoz. Qué reformar primero, trámites y presupuesto.',
    resumen: 'Centro, Las Matas y urbanizaciones de chalets como El Pinar o Molino de la Hoz.',
    intro:
      'Las Rozas es un municipio repartido en varios núcleos: el centro urbano, Las Matas y un buen número de urbanizaciones de vivienda unifamiliar, como El Pinar o Molino de la Hoz. Hay pisos, adosados y chalets de distintas épocas, y por eso aquí la pregunta clave antes de reformar es qué tipo de vivienda tienes.',
    puntos: ['Baño desde 5.000 €', 'Pisos, adosados y chalets', 'Varios núcleos urbanos', 'Ayuntamiento de Las Rozas'],
    imagen: img('reformas-integrales'),
    imagenAlt: 'Vivienda durante una reforma integral',
    secciones: [
      {
        titulo: 'Adosados: el término medio',
        parrafos: [
          'Los adosados combinan problemas de piso y de casa. Suelen tener varias plantas, escaleras y, a veces, un sótano o buhardilla infrautilizados. Las reformas más habituales consisten en rediseñar la planta baja para unir cocina y salón, rehacer baños y convertir la buhardilla o el sótano en estancias útiles.',
        ],
        subsecciones: [
          {
            titulo: 'Buhardillas',
            texto:
              'Convertirlas en dormitorio o despacho exige revisar el aislamiento bajo cubierta. Sin él, serán estancias muy frías en invierno y muy calurosas en verano.',
            imagen: img('pladur-ejemplo'),
            imagenAlt: 'Techo de pladur con aislamiento',
          },
        ],
      },
      {
        titulo: 'Chalets en urbanizaciones',
        parrafos: [
          'En El Pinar, Molino de la Hoz y otras urbanizaciones, las reformas pueden incluir cubiertas, fachadas, porches o piscinas, además del interior. Conviene separar lo urgente (humedades, instalaciones) de lo deseable (acabados) y hacerlo en ese orden.',
          'Las urbanizaciones suelen tener sus propias normas sobre obras y estética exterior: revísalas antes de diseñar cualquier cambio visible desde la calle.',
        ],
      },
      {
        titulo: 'Pisos del centro y Las Matas',
        parrafos: [
          'En los pisos, las prioridades son las habituales: baños, cocina, suelos y, en los edificios de más años, la instalación eléctrica. En Las Matas hay además vivienda baja y unifamiliar más antigua, en la que conviene revisar estructura y cubierta antes de reformar el interior.',
        ],
      },
      {
        titulo: 'Trámites en Las Rozas',
        parrafos: [
          'El Ayuntamiento de Las Rozas determina qué trámite corresponde a cada obra. Consúltalo antes de empezar, especialmente si se trata de ampliaciones, cambios de fachada o actuaciones en la parcela.',
        ],
      },
      {
        titulo: 'Qué revisar en una vivienda de Las Rozas antes de reformar',
        parrafos: [
          'En casas y adosados, el orden importa más que en un piso. Empieza por la envolvente: cubierta, canalones, fachada y carpinterías exteriores. Una gotera o una humedad de capilaridad estropean cualquier acabado interior, así que se resuelven primero.',
          'Después revisa las instalaciones: caldera, radiadores o suelo radiante, cuadro eléctrico y saneamiento. En viviendas de cierta edad, la red de desagües enterrada puede dar problemas que solo se ven al levantar suelos.',
          'Por último, piensa en los usos: una planta baja con cocina abierta al jardín, un dormitorio en planta baja para el futuro o un despacho en la buhardilla son cambios que muchas familias de la zona plantean al reformar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Necesito permiso de la urbanización para reformar el interior?',
        respuesta:
          'Las obras interiores no suelen necesitar aprobación de la urbanización, pero sí respetar sus normas de horarios, accesos y uso de zonas comunes. Lo que afecta al exterior suele requerir consultarlo.',
      },
      {
        pregunta: '¿Se puede reformar un adosado por fases?',
        respuesta:
          'Sí, sobre todo si no se cambia la distribución: por ejemplo, cubierta y fachada un año y el interior después. Si se cambian instalaciones o tabiques, es mejor hacerlo todo de una vez.',
      },
      {
        pregunta: '¿Qué arreglo primero en un adosado antiguo?',
        respuesta:
          'Lo que protege la casa: cubierta, fachada y humedades. Después instalaciones y, por último, acabados interiores.',
      },
      {
        pregunta: '¿Hacéis reformas en Las Rozas y Las Matas?',
        respuesta: 'Sí, Las Rozas es una de nuestras zonas de trabajo. Selecciónala en el formulario e indica el núcleo o la urbanización.',
      },
      {
        pregunta: '¿Se puede convertir la buhardilla en un dormitorio?',
        respuesta:
          'A menudo sí, pero hay que revisar la altura, la ventilación y el aislamiento de la cubierta, además del trámite municipal que corresponda.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un chalet en Las Rozas?',
        respuesta:
          'Depende mucho de la superficie y de si hay obra exterior. Como referencia, la reforma integral de una vivienda cuesta 500–1.200 €/m² según la calidad; la obra exterior de un chalet se presupuesta aparte.',
      },
    ],
    relacionadas: ['reformas-majadahonda', 'reformas-pozuelo-de-alarcon', 'pladur-madrid', 'reformas-integrales-madrid', 'zonas'],
  }),

  /* ---------------------------- MAJADAHONDA ---------------------------- */
  zona({
    path: 'reformas-majadahonda',
    zona: 'Majadahonda',
    title: 'Reformas en Majadahonda | ObraLocal Madrid',
    description:
      'Reformas en Majadahonda: pisos del casco, urbanizaciones como Los Satélites o Roza Martín y chalets junto al Monte del Pilar. Trámites y presupuesto.',
    resumen: 'Casco, urbanizaciones de pisos con zonas comunes y chalets.',
    intro:
      'Majadahonda combina un casco con pisos de varias décadas, urbanizaciones de bloques con zonas comunes, como Los Satélites o Roza Martín, y vivienda unifamiliar en el entorno del Monte del Pilar. Muchas de sus viviendas se compraron hace años y ahora necesitan una actualización completa, con cambios de distribución pensados para la vida actual.',
    puntos: ['Baño desde 5.000 €', 'Urbanizaciones con zonas comunes', 'Pisos amplios', 'Ayuntamiento de Majadahonda'],
    imagen: img('reformas-integrales-ejemplo'),
    imagenAlt: 'Piso amplio en obra',
    secciones: [
      {
        titulo: 'Pisos amplios que piden otra distribución',
        parrafos: [
          'En las urbanizaciones de bloques es habitual encontrar pisos generosos con una distribución pensada para otra época: cocina cerrada con zona de servicio, muchos dormitorios y un salón estrecho. Las reformas tienden a unir espacios, integrar la terraza y ganar un baño en suite.',
        ],
        subsecciones: [
          {
            titulo: 'Integrar la zona de servicio',
            texto:
              'Unir el antiguo tendedero o cuarto de servicio a la cocina da mucha amplitud. Hay que revisar bajantes, ventilación y la fachada si se toca algún cerramiento.',
            imagen: img('reforma-cocina'),
            imagenAlt: 'Cocina reformada con más superficie',
          },
          {
            titulo: 'Baño en suite',
            texto:
              'Añadir un baño al dormitorio principal depende de la posición de los desagües. Si es viable, es una de las mejoras más apreciadas.',
            imagen: img('bano-moderno'),
            imagenAlt: 'Baño en suite renovado',
          },
        ],
      },
      {
        titulo: 'Comunidades con zonas comunes',
        parrafos: [
          'Las urbanizaciones con piscina, jardines y conserjería suelen tener normas claras sobre obras: horarios, uso del ascensor, protección de portales y dónde dejar el material. Pídelas antes de planificar y comunica la obra a quien represente a la comunidad.',
        ],
      },
      {
        titulo: 'Viviendas unifamiliares',
        parrafos: [
          'En las casas cercanas al Monte del Pilar, además del interior, pueden necesitar atención la cubierta, la fachada y los sistemas de calefacción. Ordena la obra de lo que protege la casa a lo que la decora.',
          'El Ayuntamiento de Majadahonda es quien determina el trámite de cada obra: consúltalo antes de empezar.',
        ],
      },
      {
        titulo: 'Consejos para reformar en una urbanización de Majadahonda',
        parrafos: [
          'Antes de nada, pide al administrador las normas de obra de la comunidad: horarios permitidos, días sin obra, protección del ascensor y del portal, dónde descargar materiales y si se exige alguna fianza. Planificar con esas reglas desde el principio evita paradas y conflictos.',
          'Si quieres cambiar ventanas, toldos o cerramientos, recuerda que afectan a la imagen exterior del edificio. Muchas comunidades tienen un modelo aprobado y no admiten otros, así que conviene consultarlo antes de pedir presupuestos.',
          'En pisos grandes, una reforma por fases puede tener sentido si no se toca la distribución: primero baños y cocina, después suelos y pintura. Si se cambia la distribución, es mejor hacerlo todo de una vez.',
          'Y si la vivienda se va a quedar vacía durante la obra, aprovecha para renovar también lo que normalmente se aplaza: puertas interiores, armarios empotrados y la iluminación, que es mucho más fácil de resolver con las paredes abiertas.',
        ],
      },
      {
        titulo: 'Antes de pedir presupuesto',
        parrafos: [
          'Ten a mano las normas de tu comunidad, los metros aproximados y unas fotos de las estancias que quieres reformar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto tiempo antes debo avisar a la comunidad?',
        respuesta:
          'Lo antes posible y siempre antes de empezar. Muchas comunidades piden un aviso con antelación para organizar la protección del portal y el uso del ascensor.',
      },
      {
        pregunta: '¿Reformáis también chalets en Majadahonda?',
        respuesta:
          'Sí, el servicio de reformas integrales incluye casas y chalets. Indica el tipo de inmueble y los metros en la solicitud.',
      },
      {
        pregunta: '¿Puedo cambiar las ventanas de mi piso libremente?',
        respuesta:
          'No siempre: afectan a la fachada y muchas comunidades tienen un modelo aprobado. Consulta al administrador antes de encargarlas.',
      },
      {
        pregunta: '¿Trabajáis en Majadahonda?',
        respuesta: 'Sí, Majadahonda es una de nuestras zonas de trabajo. Selecciónala en el formulario.',
      },
      {
        pregunta: '¿Puedo unir la cocina con el cuarto de servicio?',
        respuesta:
          'Muchas veces sí, si el tabique no es estructural y se resuelven bajantes y ventilación. Si afecta a la fachada, hay que contar con la comunidad.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un piso grande en Majadahonda?',
        respuesta:
          'La reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta. Las calidades y los cambios de distribución marcan dónde se sitúa cada caso.',
      },
    ],
    relacionadas: ['reformas-las-rozas', 'reformas-pozuelo-de-alarcon', 'reforma-cocinas-madrid', 'reforma-piso-completo-madrid', 'zonas'],
  }),

  /* ---------------------------- MONCLOA ---------------------------- */
  zona({
    path: 'reformas-moncloa',
    zona: 'Moncloa-Aravaca',
    title: 'Reformas en Moncloa-Aravaca, Madrid | ObraLocal Madrid',
    description:
      'Reformas en Moncloa-Aravaca: pisos clásicos de Argüelles, bloques de Valdezarza y chalets de Aravaca y El Plantío. Trámites en Madrid y presupuesto.',
    resumen: 'Pisos clásicos de Argüelles, bloques de Valdezarza y chalets de Aravaca.',
    intro:
      'Moncloa-Aravaca es uno de los distritos más variados de Madrid: los edificios clásicos de Argüelles, junto a la calle Princesa; los bloques de mediados del siglo XX de Valdezarza; y la vivienda unifamiliar de Aravaca, El Plantío o Valdemarín, al otro lado de la Casa de Campo. Reformar en Argüelles y reformar en Aravaca se parecen poco.',
    puntos: ['Baño desde 5.000 €', 'Fincas clásicas en Argüelles', 'Chalets en Aravaca', 'Ordenanza de Madrid capital'],
    imagen: img('edificio-clasico-madrid'),
    imagenAlt: 'Fachadas clásicas de edificios residenciales en Madrid',
    secciones: [
      {
        titulo: 'Argüelles: fincas clásicas',
        parrafos: [
          'Pisos de techos altos, con balcones y distribuciones largas, en edificios que pueden tener algún nivel de protección. Antes de definir la obra, comprueba en el Catálogo de Edificios Protegidos del Ayuntamiento si afecta a tu finca, sobre todo si quieres tocar ventanas, balcones o elementos originales.',
          'Son pisos en los que merece la pena conservar lo que tiene valor —molduras, carpinterías, suelos— y renovar a fondo lo que no se ve: instalaciones, desagües y aislamiento.',
        ],
      },
      {
        titulo: 'Valdezarza y Ciudad Universitaria',
        parrafos: ['Bloques de vivienda de mediados del siglo XX con pisos compactos.'],
        subsecciones: [
          {
            titulo: 'Ganar luz y amplitud',
            texto:
              'Abrir la cocina, eliminar parte del pasillo o unir dos dormitorios pequeños transforma estos pisos. Primero hay que confirmar qué muros son de carga.',
            imagen: img('obra-en-curso'),
            imagenAlt: 'Vivienda con la distribución abierta durante la obra',
          },
          {
            titulo: 'Pisos de estudiantes y alquiler',
            texto:
              'Por la cercanía a la Ciudad Universitaria, muchos pisos se reforman para alquilar. Aquí prima la durabilidad: suelos resistentes, baños fáciles de limpiar y una buena instalación eléctrica.',
            imagen: img('sala-vacia'),
            imagenAlt: 'Habitación renovada lista para alquilar',
          },
        ],
      },
      {
        titulo: 'Aravaca, El Plantío y Valdemarín',
        parrafos: [
          'Predomina la vivienda unifamiliar y las urbanizaciones con zonas comunes. Las obras pueden incluir cubierta, fachada o exteriores y conviene revisar las normas de la urbanización antes de diseñar cambios visibles.',
        ],
      },
      {
        titulo: 'Trámites: Madrid capital',
        parrafos: [
          'Todo el distrito se rige por la Ordenanza 6/2022 del Ayuntamiento de Madrid: la declaración responsable es el trámite general y la licencia se reserva para los casos de su anexo. Tienes más detalle en nuestra página sobre la licencia de obra en Madrid.',
        ],
      },
      {
        titulo: 'Conservar o sustituir en un piso clásico de Argüelles',
        parrafos: [
          'Los pisos clásicos tienen elementos difíciles de reproducir: puertas de madera maciza, molduras de escayola, suelos de madera o hidráulicos y ventanas de carpintería antigua. Antes de demoler, decide qué se conserva y cómo se protege durante la obra, porque una vez retirado, recuperarlo es caro o imposible.',
          'Lo que casi nunca merece la pena conservar son las instalaciones: tuberías de plomo, cableado sin toma de tierra o bajantes de fibrocemento —estas últimas, si aparecen, debe retirarlas una empresa inscrita en el registro de empresas con riesgo de amianto—.',
          'Los techos altos permiten bajar el falso techo en pasillos y baños para pasar instalaciones o climatización sin perder la sensación de amplitud en las estancias principales.',
          'Si el piso tiene ventanas originales en buen estado, existen soluciones para mejorar su aislamiento sin sustituirlas, algo a tener en cuenta en fincas donde cambiar la carpintería exterior está limitado.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en Valdezarza y Ciudad Universitaria?',
        respuesta:
          'Sí, en todos los barrios del distrito de Moncloa-Aravaca. Indica el tuyo en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Se puede instalar aire acondicionado en un piso clásico?',
        respuesta:
          'Suele ser posible con conductos ocultos en falsos techos de pasillo y baños. La unidad exterior debe colocarse donde lo permitan la comunidad y la normativa.',
      },
      {
        pregunta: '¿Se pueden conservar los suelos antiguos?',
        respuesta:
          'Muchas veces sí, según su estado. Hay que protegerlos durante la obra y valorar si necesitan restauración o reposición de piezas.',
      },
      {
        pregunta: '¿Hacéis reformas en Moncloa-Aravaca?',
        respuesta:
          'Sí, el distrito forma parte de Madrid capital. En el formulario, selecciona «Madrid capital» e indica tu barrio en los detalles.',
      },
      {
        pregunta: '¿Mi edificio de Argüelles está protegido?',
        respuesta:
          'Depende de la finca. Puedes comprobarlo en el Catálogo de Edificios Protegidos del Ayuntamiento de Madrid antes de definir la obra.',
      },
      {
        pregunta: '¿Reformáis chalets en Aravaca?',
        respuesta:
          'Sí, el servicio de reformas integrales incluye casas y chalets. Indica el tipo de inmueble y los metros en la solicitud.',
      },
    ],
    relacionadas: ['reformas-chamberi', 'licencia-obra-madrid', 'reformas-integrales-madrid', 'reforma-piso-completo-madrid', 'zonas'],
  }),

  /* ---------------------------- TETUÁN ---------------------------- */
  zona({
    path: 'reformas-tetuan',
    zona: 'Tetuán',
    title: 'Reformas en Tetuán, Madrid | ObraLocal Madrid',
    description:
      'Reformas en Tetuán: pisos pequeños en Bellas Vistas, Cuatro Caminos y Valdeacederas, edificios de varias épocas y calles estrechas. Trámites y precios.',
    resumen: 'Pisos pequeños, edificios de varias épocas y calles estrechas.',
    intro:
      'Tetuán es un distrito de contrastes: junto a los grandes edificios de oficinas cercanos a la Castellana, barrios como Bellas Vistas, Cuatro Caminos, Valdeacederas, Berruguete o Almenara conservan calles estrechas y una mezcla de edificios de muchas épocas. Abundan los pisos pequeños, que con una buena reforma pueden ganar mucho.',
    puntos: ['Baño desde 5.000 €', 'Pisos pequeños', 'Calles estrechas', 'Ordenanza de Madrid capital'],
    imagen: img('piso-en-obra'),
    imagenAlt: 'Piso pequeño durante la reforma',
    secciones: [
      {
        titulo: 'Sacar partido a un piso pequeño',
        parrafos: [
          'En muchos pisos de Tetuán cada metro cuenta. Más que añadir muebles, conviene quitar lo que estorba: un pasillo, un tabique innecesario o una puerta que choca con otra.',
        ],
        lista: [
          'Puertas correderas en lugar de abatibles',
          'Armarios empotrados hasta el techo',
          'Cocina abierta con buena extracción',
          'Ducha en lugar de bañera',
          'Iluminación pensada desde la obra',
        ],
      },
      {
        titulo: 'Edificios de muchas épocas',
        parrafos: ['En una misma calle pueden convivir edificios muy distintos.'],
        subsecciones: [
          {
            titulo: 'Edificios antiguos de pocas plantas',
            texto:
              'Pueden tener muros irregulares, instalaciones muy antiguas y humedades en planta baja. Conviene diagnosticar antes de presupuestar los acabados.',
            imagen: img('paredes-ejemplo'),
            imagenAlt: 'Pared reparada en un edificio antiguo',
          },
          {
            titulo: 'Bloques de los años 60 y 70',
            texto:
              'Pisos más homogéneos, con gotelé, baños pequeños y electricidad por actualizar. Son reformas previsibles y muy agradecidas.',
            imagen: img('alisando-pared'),
            imagenAlt: 'Pared alisada tras quitar el gotelé',
          },
        ],
      },
      {
        titulo: 'Logística en calles estrechas',
        parrafos: [
          'En calles con poco espacio, la descarga de material y la retirada de escombros requieren planificación. Muchas veces se trabaja con sacas en lugar de contenedor, y cualquier ocupación de la vía pública necesita autorización municipal. Es un coste real que debe figurar en el presupuesto.',
          'Indica en tu solicitud la planta, si hay ascensor y cómo es la calle: ayuda a valorar el trabajo desde el principio.',
        ],
      },
      {
        titulo: 'Trámites y comunidad',
        parrafos: [
          'Tetuán está en Madrid capital y se rige por la Ordenanza 6/2022. Los acabados interiores de una vivienda sin protección no suelen requerir título urbanístico, pero cambiar la distribución puede exigir declaración responsable. Comunica la obra a tu comunidad antes de empezar.',
        ],
      },
      {
        titulo: 'Antes de comprar para reformar en Tetuán',
        parrafos: [
          'Tetuán atrae a muchos compradores que buscan un piso asequible para reformar. Antes de firmar, visita la vivienda pensando en la obra: comprueba si el edificio tiene ascensor, cómo está la escalera, si hay humedades en paredes de planta baja o en patios, y por dónde pasan bajantes y conductos.',
          'Pide las actas de la comunidad de los últimos años y pregunta por derramas pendientes. En edificios de cierta edad puede haber obras comunes previstas —fachada, cubierta, instalación de ascensor— que se sumarán a tu presupuesto.',
          'Y pide que alguien con experiencia te acompañe en la segunda visita: detectar a tiempo un problema estructural o de humedad cambia por completo el cálculo de lo que vas a gastar.',
          'Con esa información podrás pedir presupuestos comparables y saber desde el principio cuánto vas a invertir en total, no solo en la reforma de tu vivienda.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en Bellas Vistas y Cuatro Caminos?',
        respuesta:
          'Sí, en todos los barrios del distrito de Tetuán. Indica el tuyo en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Se puede ganar un dormitorio en un piso pequeño?',
        respuesta:
          'A veces sí, con un tabique de pladur, si la estancia resultante tiene luz y ventilación suficientes. Hay que estudiarlo caso por caso.',
      },
      {
        pregunta: '¿Qué miro antes de comprar un piso para reformar?',
        respuesta:
          'El estado de instalaciones y humedades, si hay ascensor, por dónde pasan las bajantes y las actas de la comunidad, por si hay derramas pendientes.',
      },
      {
        pregunta: '¿Trabajáis en Tetuán?',
        respuesta:
          'Sí, el distrito está en Madrid capital. Selecciona «Madrid capital» en el formulario e indica tu barrio.',
      },
      {
        pregunta: '¿Cómo se retiran los escombros en una calle estrecha?',
        respuesta:
          'Lo habitual es usar sacas o un contenedor pequeño, siempre con la autorización municipal que corresponda. Debe estar previsto en el presupuesto.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un piso pequeño en Tetuán?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido: en un piso de 50 m² en calidad media, 32.500–42.500 €. Depende del estado y de lo que se quiera cambiar.',
      },
    ],
    relacionadas: ['reformas-chamartin', 'reformas-chamberi', 'quitar-gotele-madrid', 'calculadora-reforma', 'zonas'],
  }),

  /* ---------------------------- ARGANZUELA ---------------------------- */
  zona({
    path: 'reformas-arganzuela',
    zona: 'Arganzuela',
    title: 'Reformas en Arganzuela, Madrid | ObraLocal Madrid',
    description:
      'Reformas en Arganzuela: pisos de Delicias, Acacias, Legazpi o Imperial, edificios de principios y mediados del siglo XX junto a Madrid Río.',
    resumen: 'Delicias, Acacias, Legazpi e Imperial, junto a Madrid Río.',
    intro:
      'Arganzuela fue durante décadas un distrito ligado al ferrocarril y a la industria, y su vivienda lo refleja: edificios de principios y mediados del siglo XX en Delicias, Acacias, Chopera o Imperial, y desarrollos más recientes en zonas como Legazpi. La renovación del entorno del río ha hecho que muchos de esos pisos se estén reformando a fondo.',
    puntos: ['Baño desde 5.000 €', 'Edificios de principios y mediados del XX', 'Entorno de Madrid Río', 'Ordenanza de Madrid capital'],
    imagen: img('edificio-esquina'),
    imagenAlt: 'Balcones de un edificio residencial clásico',
    secciones: [
      {
        titulo: 'Pisos con años que piden una reforma completa',
        parrafos: [
          'Muchos pisos de Delicias o Acacias no se han renovado en décadas. Lo habitual es abordar la vivienda entera: instalaciones nuevas, redistribución para ganar luz, baño y cocina actuales y suelos nuevos.',
        ],
        subsecciones: [
          {
            titulo: 'Instalaciones',
            texto:
              'En edificios de esta edad pueden aparecer instalaciones eléctricas sin toma de tierra o tuberías antiguas. Renovarlas antes de cerrar paredes es la base de todo lo demás.',
            imagen: img('instalaciones-vistas'),
            imagenAlt: 'Instalaciones renovadas antes de cerrar',
          },
          {
            titulo: 'Luz natural',
            texto:
              'Muchos pisos tienen habitaciones que dan a patios. Unir estancias o usar puertas acristaladas lleva la luz de la fachada hacia el interior.',
            imagen: img('piso-reformado'),
            imagenAlt: 'Piso con estancias abiertas y luminosas',
          },
        ],
      },
      {
        titulo: 'Ruido y aislamiento',
        parrafos: [
          'Por la cercanía de vías importantes y del tráfico en algunos ejes del distrito, el ruido puede ser una preocupación. Cambiar las ventanas, cuando la comunidad y la normativa lo permitan, y trasdosar con aislamiento los dormitorios que dan a la calle son mejoras que se notan mucho.',
        ],
      },
      {
        titulo: 'Trámites y protección',
        parrafos: [
          'Arganzuela está en Madrid capital y se rige por la Ordenanza 6/2022. En edificios antiguos, comprueba si la finca tiene algún nivel de protección antes de tocar fachada, balcones o carpintería exterior.',
          'Comunica la obra a tu comunidad antes de empezar y pregunta por sus normas de horarios y uso de zonas comunes.',
        ],
      },
      {
        titulo: 'Consejo práctico',
        parrafos: [
          'Si vas a comprar para reformar en el distrito, pide las actas recientes de la comunidad: te dirán si hay derramas pendientes por fachada, bajantes o ascensor, que pueden afectar al presupuesto total tanto como la propia reforma.',
        ],
      },
      {
        titulo: 'Reformar con niños o teletrabajo en Arganzuela',
        parrafos: [
          'Muchas familias del distrito reforman para adaptar el piso a una nueva etapa: un dormitorio infantil más, un despacho para teletrabajar o una cocina donde comer a diario. En pisos de superficie media, la clave es la flexibilidad: puertas correderas, tabiques de pladur con aislamiento acústico y armarios bien pensados.',
          'Un despacho necesita sobre todo buena luz, enchufes suficientes y algo de aislamiento acústico respecto al salón. Si no hay una habitación libre, un rincón del dormitorio o del salón bien resuelto puede bastar.',
          'Prever la conexión de red y los puntos de luz durante la obra cuesta poco y evita cables a la vista después.',
          'Y si la familia va a crecer, plantear desde ahora una habitación que pueda dividirse más adelante con un tabique ligero ahorra una segunda obra en unos años.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en Delicias, Acacias y Legazpi?',
        respuesta:
          'Sí, en todo el distrito de Arganzuela, que forma parte de Madrid capital. Indica tu barrio en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Hace falta licencia para cambiar la distribución?',
        respuesta:
          'En Madrid capital, cambiar la distribución puede requerir declaración responsable, y algunos casos licencia. Tienes más detalle en nuestra página sobre la licencia de obra.',
      },
      {
        pregunta: '¿Un tabique de pladur aísla bien un despacho?',
        respuesta:
          'Puede aislar bien si lleva lana mineral y las juntas perimetrales están bien selladas. Un tabique sencillo sin aislamiento transmite bastante ruido.',
      },
      {
        pregunta: '¿Hacéis reformas en Arganzuela?',
        respuesta:
          'Sí, el distrito está en Madrid capital. Selecciona «Madrid capital» en el formulario e indica tu barrio.',
      },
      {
        pregunta: '¿Se puede mejorar el aislamiento acústico de un dormitorio?',
        respuesta:
          'Sí, con ventanas de mejores prestaciones y un trasdosado con aislamiento en la pared exterior. El resultado depende también de sellar bien encuentros y cajas de persiana.',
      },
      {
        pregunta: '¿Cuánto cuesta una reforma integral en Arganzuela?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido.',
      },
    ],
    relacionadas: ['reformas-retiro', 'reformas-latina', 'reformas-integrales-madrid', 'pladur-madrid', 'zonas'],
  }),

  /* ---------------------------- CHAMARTÍN ---------------------------- */
  zona({
    path: 'reformas-chamartin',
    zona: 'Chamartín',
    title: 'Reformas en Chamartín, Madrid | ObraLocal Madrid',
    description:
      'Reformas en Chamartín: pisos amplios en Hispanoamérica, Prosperidad y Castilla, y la colonia El Viso. Qué tener en cuenta, trámites y presupuesto.',
    resumen: 'Pisos amplios, colonias históricas como El Viso y comunidades exigentes.',
    intro:
      'Chamartín reúne barrios como Hispanoamérica, Nueva España, Castilla, Prosperidad, Ciudad Jardín y El Viso. Predominan los pisos amplios en edificios de la segunda mitad del siglo XX, junto a colonias históricas de viviendas unifamiliares. Son reformas de nivel medio-alto, en las que el detalle y la coordinación con la comunidad importan.',
    puntos: ['Baño desde 5.000 €', 'Pisos amplios', 'Colonias históricas', 'Ordenanza de Madrid capital'],
    imagen: img('cocina-nueva'),
    imagenAlt: 'Cocina renovada en un piso amplio',
    secciones: [
      {
        titulo: 'Pisos amplios de la segunda mitad del siglo XX',
        parrafos: [
          'En Hispanoamérica, Nueva España o Castilla abundan los pisos de buen tamaño con distribuciones de otra época: cocina independiente con zona de servicio, pasillos largos y varios baños pequeños. Las reformas tienden a reorganizar la planta para ganar un gran salón-cocina y baños más cómodos.',
        ],
        subsecciones: [
          {
            titulo: 'Climatización',
            texto:
              'Instalar aire acondicionado por conductos durante la reforma, con falso techo en pasillos y baños, evita ver máquinas en cada habitación. Hay que prever dónde va la unidad exterior.',
            imagen: img('pladur-ejemplo'),
            imagenAlt: 'Falso techo para ocultar conductos',
          },
          {
            titulo: 'Baños y cocina',
            texto:
              'Son las estancias que más cambian. En pisos amplios es frecuente añadir un baño en suite si los desagües lo permiten.',
            imagen: img('bano-moderno'),
            imagenAlt: 'Baño amplio renovado',
          },
        ],
      },
      {
        titulo: 'Colonias históricas: El Viso y otras',
        parrafos: [
          'En el distrito hay colonias de viviendas unifamiliares con valor histórico, como la de El Viso. En estos casos la protección puede limitar lo que se puede cambiar en fachadas, cubiertas o elementos originales. Antes de proyectar nada, consulta en el Ayuntamiento qué nivel de protección tiene la vivienda.',
        ],
      },
      {
        titulo: 'Prosperidad: pisos más compactos',
        parrafos: [
          'En Prosperidad hay edificios más antiguos y pisos más pequeños, con necesidades similares a las de otros barrios tradicionales: instalaciones, gotelé, baño con bañera y cocina cerrada.',
        ],
      },
      {
        titulo: 'Trámites y comunidad',
        parrafos: [
          'Chamartín se rige por la Ordenanza 6/2022 de Madrid. Muchas comunidades del distrito tienen conserje y normas claras sobre horarios, protección del portal y uso del ascensor: pídelas antes de planificar y comunica la obra con antelación.',
        ],
      },
      {
        titulo: 'Reformas de calidad alta: dónde se nota de verdad',
        parrafos: [
          'En reformas de nivel medio-alto, la diferencia no suele estar en el material más caro, sino en los detalles de ejecución: encuentros limpios entre suelo y pared, juntas alineadas en el alicatado, puertas bien niveladas y una iluminación pensada por zonas. Pide que el presupuesto describa esos acabados, no solo los materiales.',
          'Define pronto los elementos con plazos largos, como carpintería a medida o encimeras de piedra, y deja por escrito quién mide, quién suministra y quién responde si una pieza llega mal.',
          'Si contratas por separado cocina, carpintería y obra, alguien tiene que coordinar a todos. Conviene dejar claro quién es esa persona antes de empezar.',
          'Por último, pide una relación de los materiales y modelos instalados al terminar: facilita reponer piezas o hacer reparaciones dentro de unos años.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en El Viso y Ciudad Jardín?',
        respuesta:
          'Sí, el distrito está en Madrid capital. En viviendas de colonias históricas, comprueba primero el nivel de protección antes de definir la obra.',
      },
      {
        pregunta: '¿Cuánto cuesta una reforma integral de un piso grande?',
        respuesta:
          'La reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta. Las calidades y los cambios de distribución marcan dónde se sitúa cada caso.',
      },
      {
        pregunta: '¿Qué debe describir un presupuesto de calidad alta?',
        respuesta:
          'Además de materiales y marcas, el tipo de acabado de cada partida, cómo se resuelven los encuentros y quién coordina a los distintos proveedores.',
      },
      {
        pregunta: '¿Hacéis reformas en Chamartín?',
        respuesta:
          'Sí, el distrito está en Madrid capital. Selecciona «Madrid capital» en el formulario e indica tu barrio.',
      },
      {
        pregunta: '¿Puedo instalar aire por conductos en mi piso?',
        respuesta:
          'Suele ser posible con un falso techo en pasillo y baños. Hay que prever la unidad exterior y consultar a la comunidad dónde puede colocarse.',
      },
      {
        pregunta: '¿Qué pasa si mi vivienda está en una colonia protegida?',
        respuesta:
          'La protección puede limitar los cambios en fachada, cubierta o elementos originales. Consulta en el Ayuntamiento qué se permite antes de proyectar.',
      },
    ],
    relacionadas: ['reformas-salamanca', 'reformas-tetuan', 'reforma-banos-madrid', 'licencia-obra-madrid', 'zonas'],
  }),

  /* ---------------------------- LATINA ---------------------------- */
  zona({
    path: 'reformas-latina',
    zona: 'Latina',
    title: 'Reformas en Latina, Madrid | ObraLocal Madrid',
    description:
      'Reformas en Latina: pisos de Aluche, Lucero, Los Cármenes y Puerta del Ángel, bloques de los años 50 a 70. Qué reformar primero, trámites y precios.',
    resumen: 'Aluche, Lucero, Los Cármenes y Puerta del Ángel: bloques de los 50 a los 70.',
    intro:
      'Latina es uno de los distritos más poblados de Madrid y gran parte de su vivienda se construyó entre los años cincuenta y setenta: los grandes conjuntos de Aluche, los barrios de Lucero y Los Cármenes, y la zona más antigua de Puerta del Ángel. Son pisos con mucha vida por delante si se renuevan bien.',
    puntos: ['Baño desde 5.000 €', 'Bloques de los años 50 a 70', 'Grandes conjuntos en Aluche', 'Ordenanza de Madrid capital'],
    imagen: img('edificios-madrid'),
    imagenAlt: 'Bloques residenciales en Madrid',
    secciones: [
      {
        titulo: 'El piso típico de Latina',
        parrafos: [
          'Tres dormitorios pequeños, salón con terraza, cocina independiente y un baño. Muchos conservan gotelé, suelos de terrazo y una instalación eléctrica de origen. Es una tipología muy conocida, lo que permite planificar la reforma con pocas sorpresas.',
        ],
        subsecciones: [
          {
            titulo: 'El terrazo',
            texto:
              'Si está en buen estado, el terrazo antiguo se puede pulir y abrillantar en lugar de cubrirlo. Si se cubre, hay que tener en cuenta el grosor del nuevo suelo en puertas y encuentros.',
            imagen: img('piso-reformado'),
            imagenAlt: 'Suelo renovado en un piso',
          },
          {
            titulo: 'La terraza',
            texto:
              'Integrarla en el salón gana metros, pero afecta a la fachada y requiere contar con la comunidad y revisar la normativa.',
            imagen: img('sala-vacia'),
            imagenAlt: 'Salón luminoso tras la reforma',
          },
        ],
      },
      {
        titulo: 'Aluche y los grandes conjuntos',
        parrafos: [
          'En los grandes conjuntos residenciales de Aluche, muchas comunidades han rehabilitado fachadas o ascensores en los últimos años. Antes de reformar tu piso, pregunta si hay obras comunes previstas: coordinar ambas puede ahorrar molestias.',
        ],
      },
      {
        titulo: 'Puerta del Ángel: edificios más antiguos',
        parrafos: [
          'Junto al río y la Casa de Campo hay edificios de más edad, algunos sin ascensor y con escaleras estrechas. Aquí conviene revisar el estado de muros y forjados antes de añadir peso, y planificar bien la subida de materiales.',
        ],
      },
      {
        titulo: 'Trámites',
        parrafos: [
          'Latina está en Madrid capital y se rige por la Ordenanza 6/2022. Pintar, cambiar suelos o renovar acabados en una vivienda sin protección no suele requerir título urbanístico; cambiar la distribución sí puede requerir declaración responsable.',
        ],
      },
      {
        titulo: 'Cómo ordenar la obra si vives en el piso',
        parrafos: [
          'Mucha gente reforma en Latina sin poder mudarse. Es posible si la obra no es integral, pero hay que organizarla bien: hacer primero las estancias que menos se usan, dejar el baño fuera de servicio el menor tiempo posible y aislar con plásticos y cinta las zonas que siguen habitadas.',
          'Pregunta también por los días más ruidosos y polvorientos —demolición, rozas, lijado— para organizarte, y guarda fuera de casa lo que no quieras exponer al polvo.',
          'Si en el piso viven personas mayores o niños pequeños, valora pasar fuera al menos los días de demolición: el ruido y el polvo de esa fase son los más molestos.',
          'Y deja acordado al principio cómo se limpiará la zona de trabajo cada día, especialmente las zonas comunes de la escalera.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Se puede quitar el gotelé con el piso habitado?',
        respuesta:
          'Sí, aunque es más lento y hay que proteger muy bien muebles y suelos, porque el lijado genera mucho polvo. Lo ideal es trabajar habitación por habitación.',
      },
      {
        pregunta: '¿Qué hago si la comunidad tiene prevista una obra de fachada?',
        respuesta:
          'Coordina tu reforma con ella: si van a cambiar bajantes o ventanas comunes, conviene esperar o adaptar tu obra para no repetir trabajos.',
      },
      {
        pregunta: '¿Puedo seguir viviendo en el piso durante la reforma?',
        respuesta:
          'Si la obra es parcial, normalmente sí, organizándola por zonas. En una reforma integral suele ser poco práctico.',
      },
      {
        pregunta: '¿Trabajáis en Latina?',
        respuesta:
          'Sí, el distrito está en Madrid capital. Selecciona «Madrid capital» en el formulario e indica tu barrio.',
      },
      {
        pregunta: '¿Merece la pena conservar el terrazo?',
        respuesta:
          'Si está en buen estado y te gusta, pulirlo es una buena opción. Si está dañado o desnivelado, suele ser mejor cubrirlo con un suelo nuevo.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un piso de 70 m² en Latina?',
        respuesta:
          'Como referencia, una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. Tienes un desglose de qué influye en nuestra guía sobre un piso de 70 m².',
      },
    ],
    relacionadas: ['reformas-carabanchel', 'reformas-arganzuela', 'reforma-piso-completo-madrid', 'quitar-gotele-madrid', 'zonas'],
  }),

  /* ---------------------------- CIUDAD LINEAL ---------------------------- */
  zona({
    path: 'reformas-ciudad-lineal',
    zona: 'Ciudad Lineal',
    title: 'Reformas en Ciudad Lineal, Madrid | ObraLocal Madrid',
    description:
      'Reformas en Ciudad Lineal: pisos de Ventas, Pueblo Nuevo, Quintana o Concepción y viviendas unifamiliares en el entorno de Arturo Soria.',
    resumen: 'Ventas, Pueblo Nuevo, Quintana, Concepción y el eje de Arturo Soria.',
    intro:
      'El distrito toma su nombre del proyecto de Ciudad Lineal de Arturo Soria, de finales del siglo XIX, y todavía conserva en el entorno de esa calle algunas viviendas unifamiliares y colonias. Pero la mayor parte de su vivienda son bloques de pisos de mediados del siglo XX en barrios como Ventas, Pueblo Nuevo, Quintana, Concepción o San Pascual.',
    puntos: ['Baño desde 5.000 €', 'Bloques de mediados del XX', 'Viviendas unifamiliares en Arturo Soria', 'Ordenanza de Madrid capital'],
    imagen: img('reforma-cocina'),
    imagenAlt: 'Cocina renovada en un piso de Madrid',
    secciones: [
      {
        titulo: 'Pisos de Ventas, Pueblo Nuevo y Quintana',
        parrafos: [
          'Muchos pisos de estos barrios tienen una superficie media con una distribución muy compartimentada. Las reformas buscan sobre todo abrir la cocina, actualizar el baño y renovar las instalaciones.',
        ],
        subsecciones: [
          {
            titulo: 'Cocina abierta',
            texto:
              'Unir cocina y salón cambia la vivienda. Requiere confirmar que el tabique no es estructural, resolver la extracción de humos y revisar la instalación de gas si la hay.',
            imagen: img('cocina-abierta'),
            imagenAlt: 'Cocina abierta al salón',
          },
          {
            titulo: 'Baño único',
            texto:
              'Si la vivienda tiene un solo baño, conviene organizar la obra para que esté el menor tiempo posible fuera de servicio.',
            imagen: img('reforma-bano'),
            imagenAlt: 'Baño reformado',
          },
        ],
      },
      {
        titulo: 'Viviendas unifamiliares del entorno de Arturo Soria',
        parrafos: [
          'Las viviendas y colonias que quedan del proyecto original o de épocas posteriores pueden tener algún grado de protección. Antes de proyectar cambios en fachada, cubierta o volumen, consulta en el Ayuntamiento qué se permite. En el interior, lo habitual es actualizar instalaciones, cubierta y aislamiento antes de los acabados.',
        ],
      },
      {
        titulo: 'Cerca de vías con mucho tráfico',
        parrafos: [
          'Algunas zonas del distrito están próximas a grandes vías. Si tu piso da a una de ellas, mejorar las ventanas y el aislamiento de los dormitorios puede ser una prioridad tan importante como la cocina o el baño.',
        ],
      },
      {
        titulo: 'Trámites',
        parrafos: [
          'Ciudad Lineal está en Madrid capital y se rige por la Ordenanza 6/2022. Comunica la obra a la comunidad antes de empezar y, si necesitas contenedor en la calle, solicita la autorización municipal con tiempo.',
        ],
      },
      {
        titulo: 'Qué preguntar antes de aceptar un presupuesto en Ciudad Lineal',
        parrafos: [
          'Al comparar presupuestos para un piso del distrito, comprueba que todos incluyen lo mismo: retirada de escombros, protección del portal y del ascensor, tramitación municipal si procede y la gestión de cualquier imprevisto. Un precio más bajo a veces solo significa que algo de eso no está incluido.',
          'Pregunta también cómo se valorarán los trabajos que aparezcan al abrir paredes —tuberías en mal estado, humedades— y deja por escrito que se aprobarán antes de ejecutarlos.',
          'Por último, pide un calendario por fases con fechas aproximadas: te ayudará a organizar la mudanza, si la hay, y a saber en qué momento de la obra estás.',
          'Y conserva toda la documentación al terminar: facturas, garantías de los materiales y los boletines de instalaciones, que te harán falta si vendes o alquilas el piso.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en todos los barrios del distrito?',
        respuesta:
          'Sí: Ventas, Pueblo Nuevo, Quintana, Concepción, San Pascual, San Juan Bautista, Colina, Atalaya y Costillares. Indica tu barrio en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Merece la pena cambiar las ventanas durante la reforma?',
        respuesta:
          'Si el piso da a una calle con tráfico o pierde mucho calor, suele merecer la pena. Al afectar a la fachada, consulta antes a la comunidad.',
      },
      {
        pregunta: '¿Cómo comparo dos presupuestos de reforma?',
        respuesta:
          'Comprueba que tengan el mismo alcance: partidas, materiales, escombros, protecciones, impuestos, exclusiones y plazos. Tienes una guía completa sobre ello en nuestra sección de guías.',
      },
      {
        pregunta: '¿Hacéis reformas en Ciudad Lineal?',
        respuesta:
          'Sí, el distrito está en Madrid capital. Selecciona «Madrid capital» en el formulario e indica tu barrio.',
      },
      {
        pregunta: '¿Puedo abrir la cocina si tengo gas?',
        respuesta:
          'Es posible en muchos casos, pero la instalación de gas tiene requisitos de ventilación propios. Debe revisarla un instalador autorizado antes de decidir.',
      },
      {
        pregunta: '¿Cuánto cuesta reformar un baño en Ciudad Lineal?',
        respuesta:
          'Como referencia, cambiar la bañera por un plato de ducha cuesta 1.000–2.200 € y un baño completo 5.500–10.000 € en calidad media, IVA incluido.',
      },
    ],
    relacionadas: ['reformas-chamartin', 'reforma-cocinas-madrid', 'reforma-banos-madrid', 'calculadora-reforma', 'zonas'],
  }),

  /* ---------------------------- VALLECAS ---------------------------- */
  zona({
    path: 'reformas-vallecas',
    zona: 'Vallecas',
    title: 'Reformas en Vallecas, Madrid | ObraLocal Madrid',
    description:
      'Reformas en Puente de Vallecas y Villa de Vallecas: pisos de Entrevías, Palomeras o Numancia y vivienda nueva en el Ensanche de Vallecas.',
    resumen: 'Puente de Vallecas, Villa de Vallecas y el Ensanche de Vallecas.',
    intro:
      'Vallecas son en realidad dos distritos: Puente de Vallecas, con barrios como Entrevías, San Diego, Palomeras, Portazgo o Numancia, y Villa de Vallecas, que incluye el casco histórico, Santa Eugenia y el Ensanche de Vallecas. Entre ellos hay vivienda de casi todas las épocas, desde edificios antiguos hasta promociones muy recientes.',
    puntos: ['Baño desde 5.000 €', 'Dos distritos', 'Vivienda de muchas épocas', 'Ordenanza de Madrid capital'],
    imagen: img('edificio-ladrillo-madrid'),
    imagenAlt: 'Edificio de viviendas de ladrillo',
    secciones: [
      {
        titulo: 'Puente de Vallecas',
        parrafos: [
          'Abundan los pisos pequeños y medianos en bloques de varias décadas, y también edificios más antiguos en zonas como San Diego. Las reformas más habituales son las de baño y cocina, la renovación eléctrica y la redistribución para ganar amplitud.',
        ],
        subsecciones: [
          {
            titulo: 'Electricidad',
            texto:
              'En pisos que no se han renovado, la instalación eléctrica es lo primero que conviene revisar: los electrodomésticos actuales necesitan circuitos adecuados.',
            imagen: img('instalaciones-vistas'),
            imagenAlt: 'Instalación eléctrica nueva antes de cerrar',
          },
          {
            titulo: 'Gotelé y paredes',
            texto:
              'Quitar el gotelé y alisar es de las mejoras más visibles con un coste contenido.',
            imagen: img('enlucido'),
            imagenAlt: 'Pared enlucida y lista para pintar',
          },
        ],
      },
      {
        titulo: 'Palomeras y los barrios remodelados',
        parrafos: [
          'Parte de los barrios de Vallecas se construyeron en procesos de remodelación urbana de las últimas décadas del siglo XX, con bloques de vivienda de distribución sencilla. Son pisos con instalaciones relativamente más recientes, en los que la reforma suele centrarse en baño, cocina y acabados.',
        ],
      },
      {
        titulo: 'Villa de Vallecas y el Ensanche',
        parrafos: [
          'El casco de Villa de Vallecas tiene vivienda más antigua, mientras que Santa Eugenia y sobre todo el Ensanche de Vallecas concentran promociones recientes. En estas últimas, lo habitual es personalizar: suelos, armarios, divisiones de pladur o una cocina diferente a la original.',
        ],
      },
      {
        titulo: 'Trámites',
        parrafos: [
          'Los dos distritos están en Madrid capital y se rigen por la Ordenanza 6/2022. Comunica la obra a la comunidad y, en promociones recientes, revisa la documentación del edificio antes de tocar instalaciones comunes o cerramientos.',
        ],
      },
      {
        titulo: 'Reformar con un presupuesto ajustado en Vallecas',
        parrafos: [
          'Si el presupuesto es limitado, prioriza lo que es caro de cambiar después: electricidad, fontanería y desagües, e impermeabilización en el baño. Los acabados —pintura, iluminación decorativa, algunos muebles— se pueden mejorar más adelante sin obra.',
          'Mantener la cocina y el baño en su posición actual es una de las formas más eficaces de ahorrar, porque evita mover desagües y tomas de agua. Y en paredes con gotelé, cubrir con masilla en lugar de rascar puede ser más rápido si la pintura es plástica.',
          'Otra forma de ahorrar es reutilizar lo que está en buen estado: puertas que se pueden lacar, radiadores que solo necesitan pintura o un suelo que admite un pulido.',
          'Y conviene reservar un pequeño margen para imprevistos, sobre todo en edificios antiguos de Puente de Vallecas, donde lo que hay detrás de las paredes no se ve hasta que se abren.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Trabajáis en Santa Eugenia y Entrevías?',
        respuesta:
          'Sí, en todos los barrios de Puente de Vallecas y Villa de Vallecas. Indica el tuyo en los detalles de la solicitud.',
      },
      {
        pregunta: '¿Puedo reformar un piso recién comprado en el Ensanche?',
        respuesta:
          'Sí. En viviendas nuevas, revisa antes las garantías del edificio y las normas de la comunidad, sobre todo si vas a tocar instalaciones o cerramientos.',
      },
      {
        pregunta: '¿Dónde puedo ahorrar sin perder calidad?',
        respuesta:
          'Manteniendo cocina y baño en su sitio, conservando lo que esté en buen estado y dejando para más adelante lo que se puede cambiar sin obra.',
      },
      {
        pregunta: '¿Trabajáis en Puente de Vallecas y Villa de Vallecas?',
        respuesta:
          'Sí, ambos distritos están en Madrid capital. Selecciona «Madrid capital» en el formulario e indica tu barrio.',
      },
      {
        pregunta: '¿Qué reformas se hacen en un piso nuevo del Ensanche?',
        respuesta:
          'Sobre todo de personalización: suelos, armarios empotrados, cocina, divisiones de pladur e iluminación.',
      },
      {
        pregunta: '¿Cuánto cuesta quitar el gotelé en un piso de Vallecas?',
        respuesta:
          'Como referencia, alisar paredes sin gotelé cuesta 10–16 €/m², y quitar el gotelé, alisar y pintar, 14–22 €/m² de pared. Depende del estado de la pared.',
      },
    ],
    relacionadas: ['reformas-retiro', 'quitar-gotele-madrid', 'pladur-madrid', 'precios', 'zonas'],
  }),
];
