import { NOTA_GOOGLE } from '../../../datos/contacto';
import type { PaginaCombo } from '../../tipos';

/*
 * Chamberí. Datos generales del distrito: Ensanche del siglo XIX, barrios de Gaztambide, Arapiles,
 * Trafalgar, Almagro, Ríos Rosas y Vallehermoso, estacionamiento regulado (SER) y fincas antiguas.
 * Lo que dependa de cada edificio (protección, estado de las instalaciones) se comprueba en la visita.
 */
const estrella = `⭐ ${NOTA_GOOGLE} en Google`;

export const PAGINAS: PaginaCombo[] = [
  /* ------------------------------------------------------------ REFORMA INTEGRAL */
  {
    servicio: 'reforma-integral',
    zona: 'chamberi',
    title: 'Reforma integral en Chamberí | ObraLocal Madrid',
    description: `${estrella} · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Pisos antiguos del Ensanche, de arriba abajo.`,
    h1: 'Reforma integral de pisos en Chamberí',
    intro: [
      'Reformar por completo un piso en Chamberí suele significar trabajar dentro de una finca con muchos años: techos altos, muros gruesos, instalaciones que se han ido parcheando durante décadas y una distribución pensada para otra forma de vivir. Es justo lo que hace que estos pisos ganen tanto con una reforma integral, y también lo que obliga a planificarla con más cuidado que en un edificio reciente.',
      'Te contamos cómo abordamos una reforma integral en el distrito, qué suele aparecer al abrir paredes y suelos, cómo se organiza la logística en unas calles con poco sitio y qué cuesta, con los precios que publicamos para toda Madrid.',
    ],
    barrio: [
      {
        titulo: 'Cómo son las viviendas de Chamberí',
        parrafos: [
          'Chamberí nació como parte del Ensanche de Madrid en la segunda mitad del siglo XIX, y buena parte de sus fincas se levantaron entre finales de ese siglo y mediados del XX. En barrios como Trafalgar, Almagro o Gaztambide abundan los edificios de cuatro a seis plantas con patio interior, pisos largos que dan a la calle y al patio, y techos que superan con holgura los de cualquier promoción moderna.',
          'Junto a esas fincas clásicas hay bloques de los años cincuenta a setenta, sobre todo hacia Ríos Rosas y Vallehermoso, con pisos más compactos y otra forma de construir. Antes de presupuestar conviene saber en cuál de los dos casos estamos, porque la obra cambia: en una finca antigua pesan más los muros y los suelos; en un bloque de mediados de siglo, las instalaciones y los tabiques.',
        ],
      },
      {
        titulo: 'Lo que suele aparecer al abrir',
        parrafos: [
          'En muchas fincas antiguas del distrito los muros interiores tienen función estructural y los suelos descansan sobre vigas de madera o metálicas. Eso no impide redistribuir, pero sí obliga a decidir con criterio qué tabique se puede quitar y cuál no, y a veces a contar con un técnico. Ese juicio se hace antes de demoler, no después.',
          'También es habitual encontrar instalaciones eléctricas antiguas sin toma de tierra en todas las estancias, tuberías de distintos materiales empalmadas entre sí y bajantes comunitarias que condicionan dónde puede ir un baño. Por eso en una integral en Chamberí casi siempre recomendamos renovar electricidad y fontanería enteras, en lugar de aprovechar lo existente.',
        ],
      },
      {
        titulo: 'Calles, aparcamiento y contenedor',
        parrafos: [
          'Las calles de Chamberí son de las más transitadas del centro y casi todo el distrito está dentro del estacionamiento regulado. Para una obra eso significa planificar la carga y descarga de material y la retirada de escombro: la ocupación de la vía pública con un contenedor o con sacas necesita autorización municipal, y en algunas calles estrechas lo práctico es trabajar con sacas que se retiran con frecuencia.',
          'Muchas fincas tienen portal estrecho, escalera con poca anchura y ascensor pequeño, a veces sin él. Subir placas de pladur, sanitarios o muebles de cocina se organiza por adelantado, y el ascensor y el portal se protegen durante toda la obra.',
        ],
      },
      {
        titulo: 'Consejos para vecinos del distrito',
        parrafos: [
          'Antes de cerrar el proyecto, comprueba si tu edificio aparece en el catálogo de edificios protegidos del Ayuntamiento: si la obra toca elementos protegidos, el trámite es una licencia y no una declaración responsable. Habla con el administrador para conocer las normas de la comunidad sobre horarios y uso del ascensor, y avisa a la comunidad antes de empezar, como exige la Ley de Propiedad Horizontal.',
          'Aprovecha los techos altos: permiten falsos techos para pasar instalaciones o integrar iluminación sin que la casa pierda amplitud. Y decide pronto si quieres conservar elementos originales, como molduras, puertas de cuarterones o suelos hidráulicos, porque eso cambia cómo se protegen durante la demolición.',
        ],
      },
    ],
    proceso: [
      { titulo: 'Visita a la finca', texto: 'Vemos el piso y también el portal, la escalera y el ascensor, porque en Chamberí la logística forma parte del presupuesto. Revisamos muros, suelos e instalaciones.' },
      { titulo: 'Trámite', texto: 'Comprobamos si la obra va por declaración responsable o necesita licencia, sobre todo si el edificio está catalogado, y lo dejamos resuelto antes de empezar.' },
      { titulo: 'Presupuesto por partidas', texto: 'Demolición, instalaciones, albañilería, alicatados y suelos, carpintería y pintura, cada una con su importe y su calidad.' },
      { titulo: 'Obra ordenada', texto: 'Protegemos zonas comunes, organizamos el escombro con la autorización de vía pública que haga falta y avanzamos fase a fase con una sola persona de contacto.' },
      { titulo: 'Entrega', texto: 'Revisamos contigo cada estancia, rematamos lo pendiente y dejamos el piso limpio.' },
    ],
    incluye: [
      'Demolición de tabiques, revestimientos y suelos, con retirada de escombros.',
      'Instalación eléctrica y de fontanería nuevas.',
      'Nueva distribución con tabiquería y, si hace falta, falsos techos.',
      'Cocina y baños completos.',
      'Suelos, carpintería interior, alisado y pintura.',
    ],
    precios: [
      'Una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. Para un piso de 80 m² en calidad media, desglosado por partidas, la referencia está entre 44.000 y 73.500 €, y el plazo habitual de un piso de 70–80 m² es de 8–12 semanas.',
      'En Chamberí lo que más suele mover la cifra es el estado de las instalaciones y la logística de la finca. Por eso damos el precio después de ver el piso.',
    ],
    faqs: [
      { pregunta: '¿Se puede tirar cualquier tabique en un piso antiguo de Chamberí?', respuesta: 'No siempre. En muchas fincas antiguas hay muros interiores que sostienen el edificio. Antes de demoler se comprueba cuáles se pueden quitar y, si la obra afecta a la estructura, interviene un técnico.' },
      { pregunta: '¿Necesito licencia para una reforma integral en Chamberí?', respuesta: 'Depende de la obra y del edificio. Con carácter general va por declaración responsable, pero si la finca está catalogada y se tocan elementos protegidos, o si hace falta proyecto técnico, el trámite es una licencia.' },
      { pregunta: '¿Dónde se pone el contenedor?', respuesta: 'En la vía pública, con autorización del Ayuntamiento. En calles estrechas solemos trabajar con sacas que se retiran a menudo, para no bloquear la circulación.' },
      { pregunta: '¿Merece la pena conservar los suelos hidráulicos o las molduras?', respuesta: 'Si están en buen estado, muchas veces sí: dan carácter al piso. Se decide antes de empezar para protegerlos durante la demolición.' },
      { pregunta: '¿Cuánto dura la obra?', respuesta: 'La reforma integral de un piso de 70–80 m² dura 8–12 semanas. En fincas con mucha logística conviene contar con la parte alta del plazo.' },
      { pregunta: '¿Hay que avisar a la comunidad?', respuesta: 'Sí. La Ley de Propiedad Horizontal obliga a comunicar las obras antes de empezar a quien represente a la comunidad, y conviene conocer sus normas de horarios y ascensor.' },
    ],
  },

  /* ------------------------------------------------------------ REFORMA DE BAÑO */
  {
    servicio: 'reforma-bano',
    zona: 'chamberi',
    title: 'Reforma de baño en Chamberí | ObraLocal Madrid',
    description: `${estrella} · ✓ Visita sin compromiso · ✓ Presupuesto ajustado · ✓ Trato cercano y ordenado. Baños nuevos en fincas antiguas de Chamberí.`,
    h1: 'Reforma de baños en Chamberí',
    intro: [
      'Los baños de muchas fincas de Chamberí se añadieron o se rehicieron mucho después de que se construyera el edificio, y se nota: estancias estrechas y alargadas, bañeras encajadas, tuberías que suben por la pared a la vista y una bajante comunitaria que decide dónde puede ir el inodoro. Reformarlos bien empieza por entender esas limitaciones.',
      'Aquí explicamos cómo planteamos la reforma de un baño en el distrito, qué cambia en una finca antigua frente a un bloque de los años sesenta y qué cuesta, tanto si lo renuevas entero como si solo cambias la bañera.',
    ],
    barrio: [
      {
        titulo: 'Baños de finca antigua',
        parrafos: [
          'En los edificios del Ensanche, el baño suele estar junto al patio de luces, ventilado por una ventana pequeña o sin ventana, y muchas veces se ganó al pasillo o a una despensa. Su forma alargada obliga a pensar bien la distribución: un plato de ducha al fondo en lugar de la bañera, un lavabo de poco fondo o un inodoro suspendido pueden cambiar por completo la sensación de espacio.',
          'La altura de los techos permite bajar un falso techo para esconder extractores, focos o tuberías sin que el baño se haga pequeño, algo que en un edificio moderno no siempre es posible.',
        ],
      },
      {
        titulo: 'Tuberías y bajantes',
        parrafos: [
          'En muchas fincas del distrito conviven tramos de tubería de distintas épocas. Cuando la pared se abre para alicatar es el mejor momento para cambiar la fontanería del baño entera hasta la llave de paso, porque hacerlo después obliga a romper el alicatado nuevo.',
          'La bajante es otra cosa: suele ser común y no conviene mover el inodoro lejos de ella. Por eso, en la visita, lo primero que miramos es dónde está y en qué estado, porque condiciona cómo se distribuye el baño.',
        ],
      },
      {
        titulo: 'Logística en el distrito',
        parrafos: [
          'Un baño genera poco volumen de escombro comparado con una integral, pero en Chamberí hay que sacarlo igualmente por portales estrechos y, a menudo, sin poder dejar un contenedor en la puerta. Lo habitual es trabajar con sacas y retirarlas a diario, coordinando los horarios con la comunidad.',
          'Si el edificio tiene ascensor pequeño, el plato de ducha, la mampara y el mueble se eligen también pensando en que quepan. Parece un detalle, pero evita sorpresas el día de la entrega.',
        ],
      },
      {
        titulo: 'Consejos antes de empezar',
        parrafos: [
          'Si el baño no tiene ventana, piensa desde el principio en un buen extractor, porque la condensación es la causa de muchas manchas en baños interiores. Si dudas entre bañera y ducha, en baños estrechos la ducha suele ganar espacio y comodidad. Y si te preocupa quedarte sin baño, lo hablamos: se puede organizar la obra para reducir los días sin ducha.',
        ],
      },
    ],
    proceso: [
      { titulo: 'Visita', texto: 'Medimos el baño, localizamos la bajante y la llave de paso y vemos el acceso por el portal y la escalera.' },
      { titulo: 'Diseño y presupuesto', texto: 'Te proponemos la distribución que mejor aprovecha un baño estrecho y te damos un presupuesto ajustado y detallado.' },
      { titulo: 'Demolición y fontanería', texto: 'Retiramos revestimientos y sanitarios y renovamos la fontanería del baño antes de cerrar paredes.' },
      { titulo: 'Alicatado, suelo y montaje', texto: 'Alicatamos, colocamos el suelo y montamos plato, mampara, sanitarios, grifería y mueble.' },
      { titulo: 'Repaso final', texto: 'Probamos desagües y grifos, sellamos juntas y revisamos contigo cada detalle.' },
    ],
    incluye: [
      'Retirada de sanitarios, azulejos y suelo, con escombro incluido.',
      'Fontanería del baño renovada hasta la llave de paso.',
      'Alicatado y suelo nuevos.',
      'Plato de ducha o bañera, mampara, inodoro, lavabo y grifería.',
      'Extractor y puntos de luz, si hace falta.',
    ],
    precios: [
      'Un baño completo de 4 a 6 m² cuesta entre 5.500 y 10.000 € en calidad media, IVA incluido. En calidad básica parte de 5.000 € y en alta puede llegar a 13.000 €. Se hace en 2–3 semanas.',
      'Si solo quieres cambiar la bañera por un plato de ducha, el trabajo cuesta 1.000–2.200 € y se hace en 1–2 días. En un baño alargado de finca antigua es una de las mejoras que más se notan.',
    ],
    faqs: [
      { pregunta: '¿Puedo mover el inodoro de sitio?', respuesta: 'Solo hasta cierto punto, porque tiene que conectarse a la bajante con pendiente suficiente. En la visita vemos dónde está y qué margen hay.' },
      { pregunta: '¿Qué hago si mi baño no tiene ventana?', respuesta: 'Instalar un extractor eficaz. En baños interiores es la mejor defensa contra la condensación y el moho.' },
      { pregunta: '¿Se puede hacer un baño moderno en una finca antigua?', respuesta: 'Sí. Los techos altos y las paredes gruesas permiten soluciones como falsos techos con iluminación o cisternas empotradas.' },
      { pregunta: '¿Cuántos días estaré sin baño?', respuesta: 'Un baño completo lleva 2–3 semanas. Si es el único de la casa, organizamos la obra para reducir los días sin ducha.' },
      { pregunta: '¿Hay que avisar a los vecinos?', respuesta: 'Sí, la Ley de Propiedad Horizontal obliga a comunicar la obra a la comunidad antes de empezar.' },
      { pregunta: '¿Y si al quitar los azulejos aparece humedad?', respuesta: 'En baños interiores de fincas antiguas pasa a veces, por condensación o por una tubería que gotea. Se localiza la causa, se sanea la pared y se deja secar antes de alicatar, y te lo explicamos antes de hacerlo.' },
    ],
  },

  /* ------------------------------------------------------------ REFORMA DE COCINA */
  {
    servicio: 'reforma-cocina',
    zona: 'chamberi',
    title: 'Reforma de cocina en Chamberí | ObraLocal Madrid',
    description: `${estrella} · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Te atendemos solo nosotros. Cocinas a medida en las fincas de Chamberí.`,
    h1: 'Reforma de cocinas en Chamberí',
    intro: [
      'En las fincas clásicas de Chamberí la cocina estaba pensada como una habitación de servicio: al fondo del piso, junto al patio, con una ventana pequeña y lejos del salón. Hoy mucha gente quiere lo contrario, una cocina luminosa y abierta. Conseguirlo depende de lo que permitan los muros y las instalaciones del edificio.',
      'Te explicamos qué opciones suele haber en el distrito, qué hay que comprobar antes de abrir la cocina al salón y cuánto cuesta una cocina completa.',
    ],
    barrio: [
      {
        titulo: 'La cocina en las fincas del Ensanche',
        parrafos: [
          'En muchas viviendas de Trafalgar, Arapiles o Gaztambide la cocina da al patio interior, con un pasillo largo hasta la zona de día. Unirla al salón no siempre es posible ni conveniente: si el muro que las separa es de carga, abrirlo exige un estudio y un refuerzo, y a veces compensa más una puerta amplia o un tabique acristalado que una cocina abierta del todo.',
          'En los bloques de los años cincuenta a setenta de la parte norte del distrito la situación suele ser otra: tabiques ligeros, cocinas más pequeñas y una distribución más fácil de cambiar.',
        ],
      },
      {
        titulo: 'Instalaciones que conviene renovar',
        parrafos: [
          'La cocina concentra agua, desagüe, electricidad y, en algunas fincas, gas. Cambiar los muebles sin revisar lo que hay detrás es una oportunidad perdida: es el momento de llevar circuitos independientes para el horno y la placa, dejar las tomas donde irán los electrodomésticos y cambiar las tuberías antiguas.',
          'Si la cocina tiene gas y quieres pasarte a placa de inducción, conviene decidirlo antes de empezar, porque cambia la potencia eléctrica que necesitas.',
        ],
      },
      {
        titulo: 'Acceso y montaje',
        parrafos: [
          'Los muebles de cocina llegan en módulos, pero la encimera suele ser una pieza larga. En portales estrechos y escaleras con poco giro hay que medir el recorrido antes de pedirla, y a veces conviene dividirla en dos tramos o elegir un material que se pueda cortar en obra. Lo comprobamos en la visita, junto con el ascensor y el sitio para descargar.',
        ],
      },
      {
        titulo: 'Consejos prácticos',
        parrafos: [
          'Elige los electrodomésticos antes de cerrar el diseño: sus medidas marcan los huecos. Si la cocina da a un patio con poca luz, una encimera y unos frentes claros y una buena iluminación bajo los muebles altos marcan la diferencia. Y prepara un rincón provisional con microondas y nevera para las semanas de obra.',
          'Piensa también en la campana: en muchas fincas del distrito no hay un conducto propio hasta la cubierta, y la salida de humos al patio está limitada por las normas de la comunidad. Una campana de recirculación con buenos filtros es a menudo la solución más sencilla, y conviene tenerla clara antes de colocar los muebles altos.',
        ],
      },
    ],
    proceso: [
      { titulo: 'Visita y medición', texto: 'Medimos la cocina, revisamos instalaciones y muros y comprobamos el recorrido para subir muebles y encimera.' },
      { titulo: 'Diseño', texto: 'Definimos contigo la distribución, los muebles y los electrodomésticos, y te damos un presupuesto detallado.' },
      { titulo: 'Instalaciones', texto: 'Retiramos la cocina antigua y adaptamos electricidad, agua y desagües a la nueva distribución.' },
      { titulo: 'Revestimientos y montaje', texto: 'Alicatamos o revestimos, cambiamos el suelo y montamos muebles, encimera, fregadero y grifería.' },
      { titulo: 'Entrega', texto: 'Conectamos, probamos todo y revisamos contigo cada detalle.' },
    ],
    incluye: [
      'Desmontaje de la cocina antigua y retirada de escombros.',
      'Adaptación de electricidad, fontanería y desagües.',
      'Alicatado o revestimiento de paredes y suelo nuevo.',
      'Muebles, encimera, fregadero y grifería montados.',
      'Iluminación bajo muebles y puntos de luz, si los eliges.',
    ],
    precios: [
      'Una cocina completa de 8 a 12 m² cuesta entre 8.000 y 18.000 €, sin electrodomésticos e IVA incluido, y se hace en 3–4 semanas. Cada punto de luz empotrado en el techo suma 25–40 €.',
      'En Chamberí, abrir la cocina al salón cuando el muro es de carga es lo que más cambia el presupuesto. Te lo explicamos con cifras después de ver la vivienda.',
    ],
    faqs: [
      { pregunta: '¿Puedo abrir la cocina al salón en una finca antigua?', respuesta: 'A veces sí. Si el muro es de carga hace falta un estudio y un refuerzo. Una alternativa habitual es un hueco amplio o un tabique acristalado.' },
      { pregunta: '¿Cuánto tarda la reforma de una cocina?', respuesta: 'Una cocina completa se hace en 3–4 semanas, según los muebles y las instalaciones que haya que cambiar.' },
      { pregunta: '¿Cabe una encimera larga por mi escalera?', respuesta: 'Lo comprobamos en la visita. Si el giro de la escalera no lo permite, se divide en tramos o se elige un material que se corte en obra.' },
      { pregunta: '¿Incluye los electrodomésticos?', respuesta: 'No. El rango de 8.000–18.000 € es sin electrodomésticos; se presupuestan aparte según los que elijas.' },
      { pregunta: '¿Puedo pasar del gas a la inducción?', respuesta: 'Sí, pero hay que revisar la potencia eléctrica contratada y llevar un circuito propio para la placa. Conviene decidirlo antes de empezar.' },
      { pregunta: '¿Dónde saco los humos si no hay conducto?', respuesta: 'Si la finca no tiene conducto propio, lo habitual es una campana de recirculación con filtros de carbón. Sacar humos al patio depende de las normas de tu comunidad.' },
      { pregunta: '¿Puedo seguir viviendo en casa durante la obra?', respuesta: 'Sí. La obra se concentra en la cocina; con un rincón provisional para calentar comida y la nevera en otra estancia se lleva bien.' },
    ],
  },
];
