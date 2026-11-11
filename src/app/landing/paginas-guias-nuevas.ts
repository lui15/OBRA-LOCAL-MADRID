import { NOTA_GOOGLE } from '../datos/contacto';
import { Faq, PaginaSeo, SeccionPagina } from './pagina-seo';

const PUBLICADO = '2026-11-10';

interface DatosGuia {
  path: string;
  etiqueta: string;
  title: string;
  description: string;
  resumen: string;
  h1: PaginaSeo['h1'];
  puntos: string[];
  intro: string;
  secciones: SeccionPagina[];
  faqs: Faq[];
  formulario: string;
  imagen: string;
  imagenAlt: string;
  relacionadas: string[];
}

function guia(d: DatosGuia): PaginaSeo {
  return {
    path: d.path,
    tipo: 'guia',
    padre: 'guias',
    publicado: PUBLICADO,
    title: d.title,
    description: d.description,
    etiqueta: d.etiqueta,
    resumen: d.resumen,
    h1: d.h1,
    puntos: d.puntos,
    whatsapp: 'Hola, he leído vuestra guía y quiero pedir presupuesto',
    kicker: 'GUÍA',
    intro: d.intro,
    secciones: d.secciones,
    faqs: d.faqs,
    servicio: { nombre: d.etiqueta, descripcion: d.resumen },
    servicioFormulario: d.formulario,
    imagen: d.imagen,
    imagenAlt: d.imagenAlt,
    relacionadas: d.relacionadas,
  };
}


export const GUIAS_NUEVAS: PaginaSeo[] = [
  /* ---------------------------- BAÑO ---------------------------- */
  guia({
    path: 'cuanto-cuesta-reformar-un-bano-en-madrid',
    etiqueta: 'Cuánto cuesta reformar un baño en Madrid',
    title: 'Cuánto cuesta reformar un baño en Madrid en 2026',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Reformar un baño en Madrid: de 5.000 a 13.000 €.`,
    resumen: 'Precio de un baño completo, del cambio de bañera por plato y qué lo encarece.',
    h1: { antes: 'Cuánto cuesta reformar un', resaltado: 'baño', despues: 'en Madrid' },
    puntos: ['Baño completo: 5.500–10.000 €', 'Bañera por plato: 1.000–2.200 €', 'Plazo: 2–3 semanas', 'Qué lo encarece'],
    intro:
      'Un baño completo de 4 a 6 m² cuesta en Madrid entre 5.500 y 10.000 € en calidad media, IVA incluido. En calidad básica parte de 5.000 € y en alta puede llegar a 13.000 €. Si solo quieres cambiar la bañera por un plato de ducha, el trabajo baja a 1.000–2.200 €. En esta guía te explicamos de qué depende la cifra y cómo ajustarla.',
    secciones: [
      {
        titulo: 'Baño completo o cambio puntual',
        parrafos: [
          'Lo primero es decidir el alcance. Un baño completo incluye retirar lo que hay, renovar la fontanería que haga falta, alicatar, poner suelo y colocar sanitarios, grifería y mueble. Es una obra de 2–3 semanas.',
          'Si el baño está en buen estado y lo que molesta es la bañera, cambiarla por un plato de ducha se hace en 1–2 días y cuesta mucho menos. Entre los dos extremos hay opciones intermedias, como cambiar solo los sanitarios o el mueble del lavabo.',
        ],
      },
      {
        titulo: 'Qué hace subir el precio',
        parrafos: ['Con los mismos metros, estas son las decisiones que más mueven la cifra:'],
        lista: [
          'La calidad de los materiales: es la diferencia entre los 5.000 € de partida en básica y los 13.000 € de un baño en alta.',
          'Las tuberías: si son antiguas, conviene cambiarlas ahora que la pared está abierta.',
          'El alicatado: cuesta 35–60 €/m², y no es lo mismo alicatar hasta el techo que solo la zona de ducha.',
          'Mover el plato, el inodoro o el lavabo: cambiar la distribución obliga a llevar desagües y tomas a otro sitio.',
          'La mampara y el mueble: los formatos a medida suben el precio.',
        ],
      },
      {
        titulo: 'Cómo ahorrar sin perder calidad',
        parrafos: [
          'Mantener la posición de los sanitarios es el ahorro más grande, porque evita mover desagües. También ayuda reservar los materiales caros para lo que más se ve y se toca, como la grifería y el plato, y elegir piezas de formato estándar en el resto.',
          'Y si el baño está bien salvo la bañera, no hace falta una reforma completa: el cambio por plato de ducha resuelve el problema por una parte del precio.',
        ],
      },
      {
        titulo: 'Qué debe decir el presupuesto',
        parrafos: [
          'Un buen presupuesto de baño separa la demolición, la fontanería, el alicatado, el suelo, los sanitarios y la mano de obra, e indica la calidad de cada material. Así puedes comparar con criterio y saber qué cambia si eliges otra pieza. Nosotros vamos a ver el baño sin compromiso y te damos un presupuesto ajustado y detallado.',
        ],
      },
      {
        titulo: 'Un ejemplo: baño de 5 m² en calidad media',
        parrafos: [
          'Un baño de 5 m² entra en el baño completo de 4–6 m², así que en calidad media cuesta entre 5.500 y 10.000 € y se hace en 2–3 semanas. Si eliges calidad básica, la cifra parte de 5.000 €; si eliges alta, puede llegar a 13.000 €. Dentro de ese rango, lo que más mueve el importe es el estado de las tuberías y si se cambia la posición de los sanitarios.',
          'Si en lugar de reformarlo entero solo cambias la bañera por un plato de ducha, el mismo baño queda en 1.000–2.200 € y en 1–2 días. Muchas veces la mejor decisión está entre las dos: cambiar la bañera y los sanitarios y mantener el alicatado si está en buen estado.',
        ],
      },
      {
        titulo: 'Antes de pedir presupuesto',
        parrafos: [
          'Mide el baño, haz unas fotos de cada pared y del suelo y piensa qué te molesta del actual: la bañera, el poco almacenaje, la luz o el estado de las juntas. Con eso, la visita es más útil y el presupuesto se ajusta a lo que de verdad necesitas.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto tarda la reforma de un baño?',
        respuesta: 'Un baño completo se hace en 2–3 semanas. Cambiar la bañera por un plato de ducha, en 1–2 días.',
      },
      {
        pregunta: '¿Puedo usar otro baño mientras dura la obra?',
        respuesta:
          'Si tienes un segundo baño, sí. Si no, lo hablamos en la visita para organizar la obra y reducir los días sin ducha.',
      },
      {
        pregunta: '¿El precio incluye los sanitarios y la grifería?',
        respuesta:
          'Los precios de esta guía son de mano de obra y materiales de gama media, IVA incluido. El presupuesto detalla qué piezas entran y su calidad.',
      },
    ],
    formulario: 'Reforma de baño',
    imagen: '/images/reforma-bano.webp',
    imagenAlt: 'Baño reformado con plato de ducha y alicatado nuevo',
    relacionadas: ['reforma-banos-madrid', 'cambiar-banera-por-plato-ducha-madrid', 'alicatados-madrid', 'precios'],
  }),

  /* ---------------------------- COCINA ---------------------------- */
  guia({
    path: 'cuanto-cuesta-reformar-una-cocina-en-madrid',
    etiqueta: 'Cuánto cuesta reformar una cocina en Madrid',
    title: 'Cuánto cuesta reformar una cocina en Madrid en 2026',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Reformar una cocina en Madrid: 8.000–18.000 €.`,
    resumen: 'Precio de una cocina completa, qué incluye y qué hace subir la cifra.',
    h1: { antes: 'Cuánto cuesta reformar una', resaltado: 'cocina', despues: 'en Madrid' },
    puntos: ['Cocina completa: 8.000–18.000 €', 'Sin electrodomésticos', 'Plazo: 3–4 semanas', 'Qué la encarece'],
    intro:
      'Una cocina completa de 8 a 12 m² cuesta en Madrid entre 8.000 y 18.000 €, sin electrodomésticos e IVA incluido, y se hace en 3–4 semanas. Es un rango amplio porque los muebles, la encimera y lo que haya que cambiar en las instalaciones mueven mucho la cifra. Aquí te explicamos cada parte.',
    secciones: [
      {
        titulo: 'Qué incluye una cocina completa',
        parrafos: ['Una reforma completa de cocina suele combinar estos trabajos:'],
        lista: [
          'Retirar los muebles y revestimientos antiguos.',
          'Adaptar la fontanería y la electricidad a la nueva distribución.',
          'Alicatar o revestir las paredes y cambiar el suelo.',
          'Montar los muebles, la encimera, el fregadero y la grifería.',
          'Iluminación: cada punto de luz empotrado en el techo cuesta 25–40 €.',
        ],
      },
      {
        titulo: 'Por qué el rango es tan amplio',
        parrafos: [
          'Entre una cocina de 8.000 € y otra de 18.000 € puede haber los mismos metros. Lo que cambia es sobre todo la gama de los muebles y de la encimera, el número de módulos a medida y si hay que mover el fregadero o la placa a otra pared.',
          'Mover el fregadero obliga a llevar agua y desagüe a otro sitio; mover la placa o el horno, a revisar la instalación eléctrica. Si mantienes la distribución, el presupuesto baja.',
        ],
      },
      {
        titulo: 'Los electrodomésticos, aparte',
        parrafos: [
          'Los precios de esta guía no incluyen electrodomésticos, porque cada persona elige marca y gama. Conviene decidirlos antes de cerrar el diseño: sus medidas condicionan los huecos de los muebles y las tomas que hay que dejar preparadas.',
        ],
      },
      {
        titulo: 'Cómo ajustar el presupuesto',
        parrafos: [
          'Mantener la distribución, elegir módulos de medida estándar y reservar la calidad alta para la encimera y la grifería, que son lo que más se usa, son las tres decisiones que más ahorran. En la visita, que es sin compromiso, te orientamos sobre materiales y te damos un presupuesto ajustado y detallado, separado por partidas.',
        ],
      },
      {
        titulo: 'Un ejemplo: cocina de 10 m²',
        parrafos: [
          'Una cocina de 10 m² entra en la cocina completa de 8–12 m²: entre 8.000 y 18.000 €, sin electrodomésticos, en 3–4 semanas. Si además pones cuatro puntos de luz empotrados en el techo, a 25–40 € cada uno, se suman entre 100 y 160 €. Si hay que rehacer el alicatado de la pared de trabajo, el alicatado cuesta 35–60 €/m².',
          'Con la misma cocina, quedarte en la parte baja o en la alta del rango depende sobre todo de los muebles, la encimera y de si se mueve el fregadero o la placa. Por eso pedimos ver la cocina antes de dar un presupuesto cerrado.',
        ],
      },
      {
        titulo: 'Cómo organizarte durante la obra',
        parrafos: [
          'Durante tres o cuatro semanas no tendrás cocina, así que conviene preparar un rincón con microondas, nevera y una pequeña zona para fregar. Vaciar los armarios antes de empezar y decidir dónde guardar la vajilla te ahorrará prisas el primer día. También ayuda tener elegidos los electrodomésticos: sus medidas marcan los huecos de los muebles y las tomas que hay que dejar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto tarda la reforma de una cocina?',
        respuesta: 'Una cocina completa se hace en 3–4 semanas, según los muebles y lo que haya que cambiar en las instalaciones.',
      },
      {
        pregunta: '¿Puedo tirar el tabique para abrir la cocina al salón?',
        respuesta:
          'Muchas veces sí, si el tabique no es un muro de carga. Hay que comprobarlo antes de tocarlo y, si es estructural, la obra necesita un técnico.',
      },
      {
        pregunta: '¿El precio incluye los electrodomésticos?',
        respuesta: 'No. El rango de 8.000–18.000 € es sin electrodomésticos; se presupuestan aparte según los que elijas.',
      },
      {
        pregunta: '¿Qué parte de la cocina conviene no recortar?',
        respuesta:
          'La encimera y la grifería, que son lo que más se usa y más se desgasta. En los frentes de los muebles se puede ahorrar más sin que se note tanto con el uso diario.',
      },
    ],
    formulario: 'Reforma de cocinas',
    imagen: '/images/cocina-nueva.webp',
    imagenAlt: 'Cocina reformada con muebles y encimera nuevos',
    relacionadas: ['reforma-cocinas-madrid', 'alicatados-madrid', 'reformas-integrales-madrid', 'precios'],
  }),

  /* ---------------------------- PLAZOS ---------------------------- */
  guia({
    path: 'cuanto-tarda-una-reforma-integral',
    etiqueta: 'Cuánto tarda una reforma integral',
    title: 'Cuánto tarda una reforma integral: plazos por fase',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Cuánto dura una reforma integral, fase a fase.`,
    resumen: 'La duración de cada fase de una reforma integral y qué la alarga o la acorta.',
    h1: { antes: 'Cuánto tarda una', resaltado: 'reforma integral', despues: '' },
    puntos: ['8–12 semanas en total', 'Fase a fase', 'Qué la alarga', 'Cómo ganar tiempo'],
    intro:
      'La reforma integral de un piso de 70–80 m² dura de 8 a 12 semanas. No es un plazo al azar: sale de sumar fases que tienen que ir en orden, porque cada una prepara la siguiente. En esta guía tienes la duración de cada fase y lo que más influye en que la obra se alargue o se cumpla.',
    secciones: [
      {
        titulo: 'Las fases, una a una',
        parrafos: ['Para un piso de 70–80 m², estos son los plazos habituales de cada fase:'],
        lista: [
          'Demolición: 1 semana.',
          'Instalaciones de electricidad y fontanería: 2–3 semanas.',
          'Albañilería y tabiquería: 2–3 semanas.',
          'Alicatados y suelos: 2 semanas.',
          'Carpintería: 1 semana.',
          'Pintura: 1 semana.',
          'Remates y limpieza: 3–5 días.',
        ],
      },
      {
        titulo: 'Por qué van en ese orden',
        parrafos: [
          'Primero se quita lo viejo y se deja a la vista lo que hay detrás. Después se pasan las instalaciones por paredes y suelos, antes de cerrarlos. Con las instalaciones hechas se levantan tabiques y se preparan las superficies; luego llegan los alicatados y los suelos, la carpintería, la pintura y, al final, los remates.',
          'Saltarse el orden suele salir caro: pintar antes de colocar los suelos o montar los muebles antes de tener las tomas definitivas obliga a repetir trabajo.',
        ],
      },
      {
        titulo: 'Qué alarga una reforma',
        parrafos: ['Estas son las causas más habituales de que una obra se alargue:'],
        lista: [
          'Decidir los materiales tarde: si el suelo o los azulejos no están elegidos cuando toca colocarlos, la obra se para.',
          'Cambios a mitad de obra, que obligan a replanificar.',
          'Sorpresas al abrir: tuberías en peor estado de lo previsto o humedades ocultas.',
          'El trámite: si la obra necesita licencia o declaración responsable, hay que tenerlo resuelto antes de empezar.',
        ],
      },
      {
        titulo: 'Cómo ganar tiempo',
        parrafos: [
          'Lo que más ayuda es cerrar las decisiones antes de empezar: distribución, materiales, muebles de cocina y electrodomésticos. Con todo definido, el plan de obra se cumple mejor. También ayuda tener una sola persona de contacto que coordine a todos los oficios, en lugar de tener que hacerlo tú.',
        ],
      },
      {
        titulo: 'Y si no es una reforma integral',
        parrafos: ['Si solo reformas una parte de la casa, estos son los plazos habituales de cada trabajo:'],
        lista: [
          'Baño completo: 2–3 semanas.',
          'Cocina completa: 3–4 semanas.',
          'Cambiar la bañera por un plato de ducha: 1–2 días.',
          'Pintar paredes y techos de un piso de 80 m²: 3–5 días.',
          'Quitar el gotelé, alisar y pintar un piso completo: 1–2 semanas.',
          'Suelo laminado o vinílico: 2–4 días; porcelánico: 1–2 semanas.',
          'Tratamiento de humedades: 2–5 días.',
        ],
      },
      {
        titulo: 'El calendario por escrito',
        parrafos: [
          'Pide que el presupuesto incluya un calendario por fases. Así sabes en qué punto está la obra cada semana, cuándo tienes que haber elegido cada material y qué días habrá más ruido o polvo, algo útil también para avisar a tus vecinos.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto dura la reforma integral de un piso de 80 m²?',
        respuesta: 'Entre 8 y 12 semanas, según el estado del piso y las decisiones que estén cerradas antes de empezar.',
      },
      {
        pregunta: '¿Puedo vivir en el piso durante la obra?',
        respuesta:
          'En una reforma integral no es recomendable: durante varias semanas no hay agua, luz ni cocina en condiciones, y hay mucho polvo.',
      },
      {
        pregunta: '¿Qué fase es la más larga?',
        respuesta:
          'Las instalaciones y la albañilería, de 2–3 semanas cada una. Son también las que más dependen del estado real del piso.',
      },
      {
        pregunta: '¿Se puede acortar el plazo?',
        respuesta:
          'Sí, sobre todo con todas las decisiones cerradas antes de empezar: distribución, materiales, muebles y electrodomésticos. Lo que no conviene acortar son los tiempos de secado de yesos, morteros y pinturas.',
      },
      {
        pregunta: '¿Cuándo hay que avisar a la comunidad?',
        respuesta:
          'Antes de empezar. La Ley de Propiedad Horizontal obliga a comunicar las obras previamente a quien represente a la comunidad.',
      },
    ],
    formulario: 'Reformas integrales',
    imagen: '/images/piso-en-obra.webp',
    imagenAlt: 'Piso en obra durante una reforma integral',
    relacionadas: ['reformas-integrales-madrid', 'reforma-piso-completo-madrid', 'orden-trabajos-reforma-integral', 'precios'],
  }),

  /* ---------------------------- SUELOS ---------------------------- */
  guia({
    path: 'suelo-laminado-vinilico-o-porcelanico',
    etiqueta: 'Suelo laminado, vinílico o porcelánico',
    title: 'Suelo laminado, vinílico o porcelánico: cuál elegir',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Laminado, vinílico o porcelánico: cuál elegir.`,
    resumen: 'Diferencias entre suelo laminado, vinílico, porcelánico y tarima, con precio y plazo.',
    h1: { antes: 'Suelo laminado, vinílico o', resaltado: 'porcelánico', despues: '' },
    puntos: ['Laminado: 25–45 €/m²', 'Vinílico: 30–55 €/m²', 'Porcelánico: 45–80 €/m²', 'Tarima: 55–95 €/m²'],
    intro:
      'Elegir suelo es elegir entre precio, resistencia al agua, comodidad y tiempo de obra. No hay un suelo mejor para todo: hay uno mejor para cada estancia y para cada forma de vivir. Te contamos las diferencias entre los cuatro más pedidos, con lo que cuesta cada uno colocado en Madrid.',
    secciones: [
      {
        titulo: 'Laminado: el más económico',
        parrafos: [
          'Colocado, cuesta 25–45 €/m² y se instala en 2–4 días. Imita bien la madera, es resistente al rayado y se coloca flotante, sin obra. Su punto débil es el agua: no es para baños y en cocinas hay que tener cuidado con las fugas.',
        ],
      },
      {
        titulo: 'Vinílico: resistente al agua',
        parrafos: [
          'Colocado, cuesta 30–55 €/m² y también se instala en 2–4 días. Aguanta el agua, es cálido y algo blando al pisar y amortigua el ruido. Sirve para toda la casa, también para cocinas y baños, y es una buena opción para colocar encima de un suelo antiguo bien nivelado.',
        ],
      },
      {
        titulo: 'Porcelánico: el más duro',
        parrafos: [
          'Colocado, cuesta 45–80 €/m² y lleva 1–2 semanas. Es el más resistente al desgaste, a las manchas y al agua, y el más fácil de limpiar. A cambio, es frío al pisar, necesita una base muy bien nivelada y su obra tiene más polvo y tiempos de secado.',
        ],
      },
      {
        titulo: 'Tarima de madera: la más natural',
        parrafos: [
          'Colocada, cuesta 55–95 €/m² y se instala en alrededor de 1 semana. Es madera de verdad: cálida, con un aspecto que no se consigue de otra forma y que se puede lijar y renovar con los años. Pide más cuidado con la humedad y con los golpes.',
        ],
      },
      {
        titulo: 'Cómo decidir',
        parrafos: ['Algunas pautas que ayudan a elegir:'],
        lista: [
          'Para baños y cocinas: vinílico o porcelánico.',
          'Para salones y dormitorios con presupuesto ajustado: laminado.',
          'Si quieres colocar encima del suelo viejo sin obra: laminado o vinílico.',
          'Si buscas durabilidad máxima con poco mantenimiento: porcelánico.',
          'Si quieres madera de verdad: tarima.',
        ],
      },
      {
        titulo: 'Cuánto cuesta cambiar el suelo de un piso de 70 m²',
        parrafos: ['Multiplicando los metros por el precio colocado de cada suelo, el resultado es:'],
        lista: [
          'Laminado: entre 1.750 y 3.150 €.',
          'Vinílico: entre 2.100 y 3.850 €.',
          'Porcelánico: entre 3.150 y 5.600 €.',
          'Tarima de madera: entre 3.850 y 6.650 €.',
        ],
      },
      {
        titulo: 'Lo que también hay que contar',
        parrafos: [
          'Además del suelo, el presupuesto puede incluir retirar el suelo antiguo, nivelar la base, el rodapié, los perfiles entre estancias y el ajuste de las puertas si el suelo nuevo sube la altura. Son partidas pequeñas, pero conviene verlas separadas para comparar presupuestos con criterio.',
        ],
      },
      {
        titulo: 'Ruido y mantenimiento',
        parrafos: [
          'Los suelos flotantes, como el laminado, se colocan sobre una lámina que reduce el ruido de las pisadas, algo que agradecen los vecinos de abajo. El vinílico ya es silencioso por sí mismo. El porcelánico y la tarima suenan más, sobre todo con tacones, y en un piso conviene tenerlo en cuenta.',
          'En cuanto al cuidado: el porcelánico y el vinílico se limpian con agua y un producto neutro; el laminado, con la fregona bien escurrida, porque no le conviene el agua; y la tarima, con productos para madera y, cada cierto tiempo, un lijado y un barnizado que la dejan como nueva.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué suelo es mejor para una cocina?',
        respuesta: 'Uno que aguante el agua: vinílico o porcelánico. El laminado no es buena opción si hay riesgo de fugas.',
      },
      {
        pregunta: '¿Se puede poner un suelo encima de otro?',
        respuesta:
          'Con laminado o vinílico, muchas veces sí, si el suelo antiguo está firme y nivelado. Hay que revisar la altura de las puertas.',
      },
      {
        pregunta: '¿Cuál es el más rápido de instalar?',
        respuesta: 'El laminado y el vinílico, en 2–4 días. El porcelánico lleva 1–2 semanas.',
      },
    ],
    formulario: 'Instalación de suelos',
    imagen: '/images/sala-vacia.webp',
    imagenAlt: 'Habitación con suelo nuevo instalado',
    relacionadas: ['instalacion-suelos-madrid', 'reformas-integrales-madrid', 'pintores-madrid', 'precios'],
  }),

  /* ---------------------------- HUMEDADES ---------------------------- */
  guia({
    path: 'como-quitar-humedades-de-la-pared',
    etiqueta: 'Cómo quitar humedades de la pared',
    title: 'Cómo quitar humedades de la pared paso a paso',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Cómo quitar la humedad de una pared paso a paso.`,
    resumen: 'Cómo saber de dónde viene la humedad, cómo tratarla y qué no hacer.',
    h1: { antes: 'Cómo quitar', resaltado: 'humedades', despues: 'de la pared' },
    puntos: ['Encontrar la causa', 'Filtración, capilaridad o condensación', 'Sanear y secar', 'Alisar y pintar'],
    intro:
      'Quitar una humedad de verdad no es pintarla. Es encontrar de dónde viene el agua, cortarla, dejar secar la pared y, solo entonces, repararla y pintarla. Si te saltas el primer paso, la mancha vuelve. Esta guía te ayuda a reconocer el tipo de humedad que tienes y a saber qué hacer en cada caso.',
    secciones: [
      {
        titulo: 'Paso 1: identifica el tipo de humedad',
        parrafos: ['Fíjate en dónde aparece y cuándo empeora:'],
        lista: [
          'Si aparece después de llover o junto a una fachada, una terraza o una tubería, probablemente es una filtración.',
          'Si es una franja en la parte baja de la pared, con salitre, en un bajo o una planta a ras de calle, suele ser capilaridad.',
          'Si aparece en esquinas frías, detrás de los muebles o junto a las ventanas, con moho y peor en invierno, es condensación.',
        ],
      },
      {
        titulo: 'Paso 2: corta la causa',
        parrafos: [
          'En una filtración hay que reparar por donde entra el agua: la fachada, la terraza, la cubierta o la tubería. En la capilaridad, frenar el agua que sube del terreno. En la condensación, mejorar la ventilación y reducir la humedad del aire: ventilar a diario, usar el extractor al cocinar y al ducharse y no secar la ropa dentro sin ventilar.',
          'Si el origen está en un elemento común del edificio, como la fachada o una bajante, la reparación suele corresponder a la comunidad de vecinos.',
        ],
      },
      {
        titulo: 'Paso 3: sanea y deja secar',
        parrafos: [
          'Con la causa resuelta, se retira la pintura y el yeso dañados, se limpian el moho y el salitre y se deja secar la pared. Este paso no se puede acelerar: si se cierra la pared húmeda, el problema vuelve.',
        ],
      },
      {
        titulo: 'Paso 4: repara y pinta',
        parrafos: [
          'Cuando la pared está seca se rehace el revestimiento, se alisa y se pinta. Como referencia, el tratamiento de humedades cuesta 30–60 €/m², desde 400 €, alisar 10–16 €/m² y pintar 8–14 €/m² de pared, IVA incluido.',
        ],
      },
      {
        titulo: 'Lo que no funciona',
        parrafos: [
          'Pintar encima con pintura antihumedad sin resolver la causa, tapar la mancha con un mueble o forrar la pared sin ventilación solo esconde el problema. Si la humedad vuelve o no sabes de dónde viene, lo mejor es que alguien la vea: hacemos la visita sin compromiso.',
        ],
      },
      {
        titulo: 'Cuándo llamar a un profesional',
        parrafos: [
          'Si la mancha vuelve después de limpiarla y ventilar, si crece, si aparece después de llover o si la pared suena hueca o se desprende el yeso, la humedad ya no es solo de condensación o ha dañado el revestimiento. En esos casos conviene que alguien localice el origen antes de que se extienda.',
          'También si vives en un bajo y la franja de humedad sube desde el suelo, o si el agua parece venir del piso de arriba o de la fachada: ahí la reparación puede implicar a la comunidad, y unas fotos y una explicación clara ayudan mucho a resolverlo.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿La lejía quita la humedad?',
        respuesta:
          'La lejía limpia el moho de la superficie, pero no quita la humedad. Si no se corta la causa, el moho vuelve.',
      },
      {
        pregunta: '¿Cuánto cuesta arreglar una humedad?',
        respuesta:
          'El tratamiento de humedades cuesta 30–60 €/m², desde 400 €, y suele llevar 2–5 días. Después hay que alisar y pintar la pared.',
      },
      {
        pregunta: '¿Cómo sé si la humedad es de condensación?',
        respuesta:
          'Si aparece en zonas frías, como esquinas y alrededor de las ventanas, con moho, y empeora en invierno y cuando no se ventila, lo más probable es que sea condensación.',
      },
      {
        pregunta: '¿Un deshumidificador quita la humedad de la pared?',
        respuesta:
          'Ayuda en la humedad por condensación, porque baja la humedad del aire. No sirve si el agua entra por una filtración o sube del terreno: ahí hay que cortar la causa.',
      },
    ],
    formulario: 'Tratamiento de humedades',
    imagen: '/images/paredes.webp',
    imagenAlt: 'Pared preparada para reparar una humedad',
    relacionadas: ['tratamiento-humedades-madrid', 'alisado-paredes-madrid', 'pintores-madrid', 'precios'],
  }),

  /* ---------------------------- EMPRESA DE REFORMAS ---------------------------- */
  guia({
    path: 'como-elegir-empresa-de-reformas',
    etiqueta: 'Cómo elegir empresa de reformas',
    title: 'Cómo elegir empresa de reformas en Madrid',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Cómo elegir empresa de reformas sin equivocarte.`,
    resumen: 'Qué mirar en el presupuesto, en las opiniones y en la forma de trabajar.',
    h1: { antes: 'Cómo elegir', resaltado: 'empresa de reformas', despues: '' },
    puntos: ['El presupuesto por escrito', 'Opiniones con hechos', 'Quién te atiende', 'Qué preguntar'],
    intro:
      'Elegir empresa de reformas da miedo por tres motivos: que el precio se dispare, que la obra no termine cuando se dijo y que nadie responda cuando surge una duda. La buena noticia es que casi todo se puede comprobar antes de firmar. Esta guía reúne lo que conviene mirar y preguntar.',
    secciones: [
      {
        titulo: 'El presupuesto: detallado y por escrito',
        parrafos: [
          'Desconfía de un precio global sin desglose. Un buen presupuesto separa la obra en partidas —demolición, albañilería, fontanería, electricidad, alicatados, suelos, carpintería, pintura—, dice la calidad de los materiales, si el IVA está incluido y qué queda fuera.',
          'Pregunta también cómo se gestionan los cambios: lo sensato es que cualquier trabajo nuevo se presupueste y se apruebe por escrito antes de hacerlo.',
        ],
      },
      {
        titulo: 'La visita antes del precio',
        parrafos: [
          'Un precio cerrado sin ver el espacio es una apuesta. Al abrir paredes y suelos aparecen cosas que solo se intuyen en una visita: el estado de las tuberías, la instalación eléctrica o si un tabique es de carga. Que la empresa quiera ver la vivienda, o al menos fotos y medidas, es buena señal.',
        ],
      },
      {
        titulo: 'Quién te atiende',
        parrafos: [
          'Muchas webs de reformas reparten tu solicitud entre varias empresas, y en cuanto la envías empiezan las llamadas. No es malo comparar, pero conviene saber con quién hablas. Pregunta quién hará la obra y quién será tu persona de contacto mientras dura.',
          'Tener una sola persona de contacto, que coordina a todos los oficios, evita que tengas que hacer tú de jefe de obra.',
        ],
      },
      {
        titulo: 'Las opiniones: busca hechos',
        parrafos: [
          'Lee opiniones de obras parecidas a la tuya y fíjate en las que hablan de hechos: si se cumplió el plazo, si el precio final coincidió con el presupuesto, si dejaron la casa limpia. Una opinión con menos estrellas que explica cómo se resolvió un problema dice mucho de una empresa.',
        ],
      },
      {
        titulo: 'Preguntas que conviene hacer',
        parrafos: ['Antes de firmar, pregunta:'],
        lista: [
          '¿Qué incluye exactamente el presupuesto y qué no?',
          '¿Cuánto dura la obra y en qué orden se hace?',
          '¿Quién será mi persona de contacto?',
          '¿Cómo se aprueban los cambios y los imprevistos?',
          '¿Necesita la obra licencia o declaración responsable, y quién la gestiona?',
        ],
      },
      {
        titulo: 'Señales de alarma',
        parrafos: ['Ten cuidado si te encuentras con alguna de estas situaciones:'],
        lista: [
          'Un precio sin visitar la vivienda ni ver fotos.',
          'Un presupuesto de una línea, sin partidas ni calidades.',
          'Prisa por firmar o por cobrar todo por adelantado.',
          'Nadie sabe decirte quién hará la obra ni quién será tu contacto.',
          'Respuestas vagas sobre plazos, licencia o cómo se aprueban los cambios.',
        ],
      },
      {
        titulo: 'Compara lo mismo',
        parrafos: [
          'Al comparar presupuestos, pon uno al lado del otro partida a partida. Si una empresa incluye el desescombro y otra no, o una pone azulejo de calidad media y otra básica, el más barato puede no serlo. Lo que buscas no es la cifra más baja, sino la que mejor explica lo que vas a recibir.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuántos presupuestos debo pedir?',
        respuesta:
          'Los que necesites para comparar con criterio. Lo importante es que estén detallados por partidas, para comparar lo mismo.',
      },
      {
        pregunta: '¿Por qué me llaman varias empresas después de pedir presupuesto?',
        respuesta:
          'Porque algunas webs reparten la solicitud entre varias empresas. Nosotros no: tu solicitud nos llega solo a nosotros.',
      },
      {
        pregunta: '¿Es normal pagar por adelantado?',
        respuesta:
          'Es habitual pagar una parte al empezar y el resto por fases. Lo importante es que la forma de pago esté por escrito en el presupuesto.',
      },
      {
        pregunta: '¿Qué hago si durante la obra hace falta un cambio?',
        respuesta:
          'Pide que te lo presupuesten por escrito y apruébalo antes de que se haga. Así el precio final coincide con lo que has aceptado.',
      },
    ],
    formulario: '',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una reforma sobre la mesa',
    relacionadas: ['que-pedir-presupuesto-reforma', 'como-trabajamos', 'opiniones', 'precios'],
  }),
];
