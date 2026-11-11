import { NOTA_GOOGLE } from '../datos/contacto';
import { PaginaSeo } from './pagina-seo';
import { GUIAS_NUEVAS } from './paginas-guias-nuevas';

const PUBLICADO = '2026-11-09';

/** Guías: artículos largos con autor, fecha y datos estructurados Article. */
export const PAGINAS_GUIAS: PaginaSeo[] = [
  /* ---------------------------- ÍNDICE ---------------------------- */
  {
    path: 'guias',
    tipo: 'hub',
    title: 'Guías de reformas en Madrid | ObraLocal Madrid',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Guías para preparar tu reforma en Madrid.`,
    etiqueta: 'Guías',
    resumen: 'Artículos para preparar tu reforma antes de pedir presupuesto.',
    h1: { antes: 'Guías para preparar tu', resaltado: 'reforma', despues: 'en Madrid' },
    puntos: ['Precios y presupuestos', 'Orden de los trabajos', 'Paredes y gotelé', 'Escritas para Madrid'],
    whatsapp: 'Hola, tengo una duda sobre una reforma',
    kicker: 'GUÍAS',
    intro:
      'Antes de pedir presupuesto conviene tener claras unas cuantas cosas: cuánto puede costar tu reforma, en qué orden se hace, qué debe incluir un buen presupuesto y qué opción encaja con tus paredes. Estas guías están pensadas para eso, con ejemplos de viviendas de Madrid y enlaces a nuestros precios de referencia.',
    secciones: [
      {
        titulo: 'Por dónde empezar según tu caso',
        parrafos: [
          'No hace falta leerlas todas. Elige según el punto en el que estés.',
        ],
        subsecciones: [
          {
            titulo: 'Todavía no sé cuánto me va a costar',
            texto:
              'Empieza por la guía sobre cuánto cuesta reformar un piso de 70 m² y, si quieres un número para tu caso, prueba la calculadora. Te darán un orden de magnitud realista antes de hablar con nadie.',
          },
          {
            titulo: 'Voy a hacer una reforma completa',
            texto:
              'La guía sobre el orden de los trabajos explica qué se hace primero y por qué. Es la mejor forma de entender un presupuesto por partidas y de no tomar decisiones a destiempo.',
          },
          {
            titulo: 'Ya tengo presupuestos y no sé cuál elegir',
            texto:
              'La guía sobre qué pedir en un presupuesto te da una lista de comprobación para comparar ofertas con el mismo alcance y detectar lo que falta.',
          },
          {
            titulo: 'Solo quiero cambiar las paredes',
            texto:
              'Si tienes gotelé o paredes irregulares, la guía sobre alisar paredes o quitar gotelé explica las diferencias entre cada opción y cuánto pueden costar.',
          },
        ],
      },
      {
        titulo: 'Cómo están hechas estas guías',
        parrafos: [
          'Las guías usan los mismos precios de referencia que publicamos en nuestra página de precios y en la calculadora, de modo que las cifras no se contradicen entre sí. Cuando un dato todavía no está confirmado —por ejemplo, el desglose exacto por partidas—, lo indicamos en lugar de inventarlo.',
          'La normativa que se menciona, como los trámites municipales o la comunicación a la comunidad de vecinos, se resume de forma general y con enlaces a las fuentes oficiales. Antes de empezar una obra, confirma siempre tu caso concreto con el Ayuntamiento o con un técnico.',
          'Revisamos las guías periódicamente. La fecha de la última revisión aparece al principio de cada una.',
        ],
      },
      {
        titulo: 'Otras páginas útiles',
        parrafos: [
          'Además de las guías, te pueden servir la página de precios, con tablas por servicio y un presupuesto de ejemplo por partidas; la de licencia de obra en Madrid, que explica cuándo basta una declaración responsable y cuándo hace falta licencia; y la de ayudas para reformas, con el estado de las convocatorias públicas y sus fuentes oficiales.',
          'Si tu duda no aparece en ninguna, cuéntanosla al pedir presupuesto o escríbenos por WhatsApp.',
        ],
      },
      {
        titulo: 'Lo que no encontrarás en estas guías',
        parrafos: [
          'No publicamos precios cerrados ni plazos que no podamos respaldar: cuando un dato depende de tu vivienda, lo explicamos con rangos y factores. Tampoco damos por hecho el trámite de tu obra: cada caso depende de la normativa del municipio y del edificio.',
          'Si te encuentras con un dato que ha cambiado —una ayuda que se ha cerrado o una norma nueva—, avísanos y lo revisamos.',
        ],
      },
      {
        titulo: 'Si necesitas ayuda para decidir',
        parrafos: [
          'Las guías dan una visión general, pero cada vivienda es distinta. Si después de leerlas sigues sin saber qué tipo de reforma necesitas, cuéntanos tu caso en el formulario: describe qué quieres cambiar, la zona y los metros aproximados, y te orientaremos.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Las guías sustituyen a un presupuesto?',
        respuesta:
          'No. Dan una orientación general con precios de referencia. El presupuesto de tu obra debe confirmar cantidades, materiales, mano de obra, impuestos y exclusiones.',
      },
      {
        pregunta: '¿Cada cuánto se actualizan?',
        respuesta:
          'Las revisamos periódicamente. La fecha de la última revisión aparece al principio de cada guía.',
      },
      {
        pregunta: '¿Puedo proponer un tema?',
        respuesta:
          'Sí. Cuéntanoslo por WhatsApp o en el formulario: las dudas que más se repiten son las que convertimos en guías.',
      },
    ],
    servicio: {
      nombre: 'Guías de reformas en Madrid',
      descripcion: 'Artículos para preparar una reforma en Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/planos-medidas.webp',
    imagenAlt: 'Plano de una vivienda con cinta métrica',
    modulo: 'guias',
    relacionadas: ['precios', 'calculadora-reforma', 'licencia-obra-madrid', 'ayudas-reformas-madrid'],
  },

  /* ---------------------------- PISO DE 70 M² ---------------------------- */
  {
    path: 'cuanto-cuesta-reformar-piso-70-m2-madrid',
    tipo: 'guia',
    padre: 'guias',
    publicado: PUBLICADO,
    title: 'Reformar un piso de 70 m² en Madrid: desde 35.000 €',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Reformar un piso de 70 m²: desde 35.000 €.`,
    etiqueta: 'Cuánto cuesta reformar un piso de 70 m²',
    resumen: 'Rangos con y sin redistribución, y qué hace subir o bajar el precio.',
    h1: { antes: 'Cuánto cuesta reformar un piso de', resaltado: '70 m²', despues: 'en Madrid' },
    puntos: ['Integral: 35.000–84.000 €', 'Escenarios sin obra integral', 'Plazo: 8–12 semanas', 'Qué lo encarece'],
    whatsapp: 'Hola, quiero pedir presupuesto para reformar un piso de 70 m²',
    kicker: 'GUÍA DE PRECIOS',
    intro:
      'Setenta metros cuadrados es una de las superficies más habituales en Madrid: un piso de dos o tres dormitorios, salón, cocina y uno o dos baños. Aquí verás cuánto puede costar reformarlo según lo que quieras hacer, con nuestros precios de referencia, y qué factores hacen que dos pisos iguales acaben con presupuestos muy distintos.',
    secciones: [
      {
        titulo: 'La respuesta corta',
        parrafos: [
          'Una reforma integral cuesta 500–650 €/m² en calidad básica, 650–850 €/m² en media y 850–1.200 €/m² en alta, IVA incluido. En un piso de 70 m² eso supone 35.000–45.500 € en básica, 45.500–59.500 € en media y 59.500–84.000 € en alta. Un piso de 70–80 m² se reforma en 8–12 semanas.',
          'Si no tocas la distribución y solo renuevas algunas estancias, el importe puede ser bastante menor. Más abajo tienes varios escenarios calculados con los mismos precios.',
          'Son cifras orientativas: el presupuesto real debe confirmar cantidades, materiales, mano de obra, impuestos y exclusiones.',
        ],
      },
      {
        titulo: 'Cuatro escenarios para un piso de 70 m²',
        parrafos: [
          'Estos escenarios suman los rangos de nuestro catálogo para cada trabajo. Los importes son orientativos y no incluyen trabajos sin precio de referencia confirmado, como el cambio de suelos.',
        ],
        subsecciones: [
          {
            titulo: 'Renovación ligera: pintura de toda la vivienda',
            texto:
              'Pintar paredes y techos de un piso de 80 m² cuesta 1.400–2.600 €; en uno de 70 m², proporcionalmente, unos 1.200–2.300 €, en 3–5 días. Si hay gotelé, quitarlo, alisar y pintar cuesta 14–22 €/m² de pared y lleva 1–2 semanas.',
          },
          {
            titulo: 'Baño completo y pintura',
            texto:
              'Un baño completo de 4 a 6 m² cuesta 5.500–10.000 € en calidad media; sumando la pintura del piso (1.200–2.300 €), el conjunto queda entre 6.700 y 12.300 €. Es una de las combinaciones más habituales cuando el resto del piso está razonablemente bien.',
          },
          {
            titulo: 'Cocina completa, baño completo y pintura',
            texto:
              'Cocina completa de 8 a 12 m², sin electrodomésticos, 8.000–18.000 €; baño completo, 5.500–10.000 €; y pintura del piso, 1.200–2.300 €. En total, entre 14.700 y 30.300 € sin cambiar la distribución.',
          },
          {
            titulo: 'Reforma integral con redistribución',
            texto:
              'Cuando se mueven tabiques y se renuevan todas las instalaciones, se calcula como reforma integral: en 70 m², de 35.000 € en calidad básica a 84.000 € en alta. Incluye cocina, baño y acabados dentro de ese importe.',
          },
        ],
      },
      {
        titulo: 'Por qué la reforma integral no es la suma de las partes',
        parrafos: [
          'Al ver los escenarios, puede sorprender que la reforma integral cueste bastante más que sumar cocina, baño y pintura. La diferencia está en lo que no se ve: demoler tabiques, levantar suelos, rehacer toda la instalación eléctrica y de fontanería, nuevos tabiques, falsos techos, carpintería interior y suelos en toda la vivienda.',
          'Por eso conviene decidir pronto qué tipo de reforma necesitas. Si las instalaciones están bien y la distribución te sirve, renovar estancias concretas es mucho más económico. Si el piso tiene instalaciones de origen o quieres ganar luz cambiando la distribución, intentar ahorrar con reformas parciales suele acabar saliendo más caro, porque se rompe dos veces.',
        ],
      },
      {
        titulo: 'Qué encarece un piso de 70 m² en Madrid',
        parrafos: ['Estos factores explican la mayor parte de las diferencias entre presupuestos.'],
        lista: [
          'Instalaciones antiguas que hay que renovar por completo',
          'Cambios de distribución, sobre todo mover baño o cocina',
          'Edificio sin ascensor o con ascensor muy pequeño',
          'Calle estrecha donde no cabe un contenedor',
          'Materiales de gama alta y grandes formatos',
          'Edificio protegido o con normas de comunidad exigentes',
          'Imprevistos al abrir paredes y suelos en fincas antiguas',
        ],
      },
      {
        titulo: 'Cómo ajustar el presupuesto sin perder calidad',
        parrafos: [
          'La forma más eficaz de contener el precio es mantener la cocina y el baño donde están: mover desagües y tomas de agua es de lo que más encarece. También ayuda conservar lo que esté en buen estado, como puertas que se pueden lacar o un suelo que admite pulido.',
          'Donde no conviene recortar es en lo que queda oculto: instalaciones, impermeabilización del baño y preparación de las paredes. Ahorrar ahí suele salir caro a los pocos años.',
          'Y reserva un margen para imprevistos. En edificios antiguos, lo que hay detrás de las paredes no se conoce hasta que se abren.',
        ],
      },
      {
        titulo: 'El desglose por partidas',
        parrafos: [
          'En nuestra página de precios tienes un presupuesto de ejemplo de un piso de 80 m² organizado por partidas: demolición y desescombro, albañilería, fontanería, electricidad, alicatado y solados, carpintería, pintura, y gestión y licencia. El importe de cada partida está todavía pendiente de confirmar, pero la estructura te sirve para comparar presupuestos reales.',
          'Pedir que tu presupuesto venga desglosado así es la mejor forma de saber qué estás pagando y de comparar ofertas.',
        ],
      },
      {
        titulo: 'Plazos',
        parrafos: [
          'El tiempo de obra depende de los metros, de los trámites, de la disponibilidad de materiales y de lo que aparezca al abrir. Como referencia, la reforma integral de un piso de 70–80 m² dura 8–12 semanas. Pide siempre un calendario por fases y deja margen si tienes fecha de mudanza.',
        ],
      },
      {
        titulo: 'Calcula tu caso',
        parrafos: [
          'Si quieres un rango para tu piso, la calculadora de reforma usa los mismos precios de esta guía: indica los metros, las estancias, la calidad y si vas a cambiar la distribución. Desde ahí puedes pedir el presupuesto por partidas con los datos ya rellenos.',
        ],
      },
      {
        titulo: 'Tres pisos de 70 m², tres presupuestos',
        parrafos: [
          'Para entender por qué el rango es amplio, piensa en tres pisos de la misma superficie en Madrid.',
          'El primero es de los años setenta, en un bloque con ascensor, con la instalación eléctrica original, gotelé, un baño con bañera y cocina cerrada. Su dueña quiere abrir la cocina al salón y rehacer todo. Es una reforma integral con redistribución: en calidad media, 45.500–59.500 €, y en calidad alta, 59.500–84.000 €.',
          'El segundo es de los años noventa, con instalaciones en buen estado y una distribución que funciona. Solo quiere renovar cocina y baño y pintar. Sin tocar tabiques ni instalaciones generales, el escenario de cocina completa, baño completo y pintura —entre 14.700 y 30.300 €— es el más parecido.',
          'El tercero es un piso antiguo en un cuarto sin ascensor, en una calle estrecha del centro, con techos altos y suelos que el propietario quiere conservar. Aunque la superficie sea la misma, la logística, la protección de los elementos originales y lo que puede aparecer al abrir paredes lo situarán en la parte alta del rango, o por encima.',
        ],
      },
      {
        titulo: 'Preguntas que te harán en la visita',
        parrafos: [
          'Cuanta más información des al principio, más se ajustará el presupuesto. Ten a mano las respuestas a estas preguntas antes de la visita.',
        ],
        lista: [
          '¿Qué quieres cambiar y qué te molesta hoy de la vivienda?',
          '¿Vas a mover cocina, baño o tabiques?',
          '¿Cuándo se renovó por última vez la instalación eléctrica?',
          '¿Hay ascensor y cómo es el acceso a la calle?',
          '¿Qué calidades te gustan? Si tienes fotos de referencia, mejor',
          '¿Cuándo te gustaría empezar y tienes alguna fecha límite?',
        ],
      },
      {
        titulo: 'Gastos que no son de la obra',
        parrafos: [
          'Además del presupuesto de la reforma, ten en cuenta otros gastos: tasas e impuesto de obras si tu obra requiere trámite municipal, el IVA si no está incluido, los electrodomésticos y el mobiliario si no entran en el presupuesto, y un posible alojamiento temporal si no puedes vivir en el piso durante la obra.',
          'Si has comprado el piso para reformarlo, revisa también las derramas previstas en la comunidad: una rehabilitación de fachada o un ascensor nuevo pueden sumar una cantidad importante al total.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un piso de 70 m² en Madrid?',
        respuesta:
          'Con redistribución e instalaciones nuevas, entre 35.000 € en calidad básica y 84.000 € en alta (45.500–59.500 € en media). Sin cambiar la distribución, renovando cocina, baño y pintura, entre 14.700 y 30.300 €. IVA incluido.',
      },
      {
        pregunta: '¿El precio incluye IVA?',
        respuesta:
          'Pregúntalo siempre: un presupuesto debe indicar si el IVA está incluido y a qué tipo. Las obras de renovación de una vivienda habitual pueden tributar al 10 % si cumplen ciertos requisitos.',
      },
      {
        pregunta: '¿Qué es lo primero que hay que decidir?',
        respuesta:
          'Si vas a cambiar la distribución y renovar instalaciones. Esa decisión marca si hablamos de una reforma por estancias o de una reforma integral, y cambia mucho el presupuesto.',
      },
    ],
    servicio: {
      nombre: 'Reforma de un piso de 70 m² en Madrid',
      descripcion: 'Guía de precios para reformar un piso de 70 m² en Madrid.',
    },
    servicioFormulario: 'Reformas integrales',
    imagen: '/images/piso-reformado.webp',
    imagenAlt: 'Piso reformado con paredes blancas y suelo de madera',
    relacionadas: ['reformas-integrales-madrid', 'reforma-piso-completo-madrid', 'precios', 'calculadora-reforma', 'que-pedir-presupuesto-reforma'],
  },

  /* ---------------------------- ORDEN DE LOS TRABAJOS ---------------------------- */
  {
    path: 'orden-trabajos-reforma-integral',
    tipo: 'guia',
    padre: 'guias',
    publicado: PUBLICADO,
    title: 'Orden de los trabajos en una reforma integral',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. En qué orden se hace una reforma integral.`,
    etiqueta: 'Orden de los trabajos en una reforma integral',
    resumen: 'De la demolición a la limpieza final, fase por fase.',
    h1: { antes: 'Orden de los trabajos en una', resaltado: 'reforma integral', despues: '' },
    puntos: ['De lo grueso a lo fino', 'Qué decidir en cada fase', 'Errores que obligan a repetir', 'Comunidad y trámites'],
    whatsapp: 'Hola, quiero pedir presupuesto para una reforma integral',
    kicker: 'GUÍA',
    intro:
      'Una reforma integral reúne muchos oficios en un mismo espacio, y el orden en que trabajan decide buena parte del resultado. Cuando se respeta, cada fase deja preparada la siguiente; cuando no, se rompen paredes recién pintadas o se ensucian suelos nuevos. Esta guía recorre las fases una a una y explica qué tienes que decidir en cada momento.',
    secciones: [
      {
        titulo: 'Antes de empezar: decisiones y trámites',
        parrafos: [
          'La obra empieza antes de la primera demolición. Hay que definir la nueva distribución, la posición de cocina y baños, dónde irán enchufes, puntos de luz y tomas de agua, y elegir los materiales con plazos de entrega largos, como la carpintería a medida o las encimeras de piedra.',
          'También es el momento de los trámites: en Madrid capital, la Ordenanza 6/2022 establece la declaración responsable como vía general y reserva la licencia para los casos de su anexo; en otros municipios, lo decide su ayuntamiento. Y hay que comunicar la obra a quien represente a la comunidad de vecinos.',
        ],
        lista: [
          'Distribución definitiva y posición de cocina y baños',
          'Plano de electricidad: enchufes, interruptores y puntos de luz',
          'Materiales con plazo de entrega largo',
          'Trámite municipal y comunicación a la comunidad',
          'Protección del portal, la escalera y el ascensor',
        ],
      },
      {
        titulo: 'Fase 1: protección y demolición',
        parrafos: [
          'Lo primero es proteger lo que se conserva y las zonas comunes por las que pasarán materiales y escombros. Después se desmonta y se demuele: tabiques que desaparecen, alicatados, suelos que se sustituyen, sanitarios, muebles de cocina y carpintería que no se mantiene.',
          'Durante la demolición aparecen las sorpresas de los edificios antiguos: tuberías en mal estado, humedades ocultas o tabiques que no son lo que parecían. Es importante tener acordado de antemano cómo se valorarán y aprobarán esos trabajos imprevistos. Si apareciera fibrocemento en bajantes o conductos, su retirada debe hacerla una empresa inscrita en el registro de empresas con riesgo de amianto.',
          'La retirada de escombros acompaña a toda esta fase. Si se necesita un contenedor en la vía pública, hace falta autorización municipal.',
        ],
      },
      {
        titulo: 'Fase 2: albañilería e instalaciones',
        parrafos: [
          'Con el espacio abierto se levantan los nuevos tabiques y se pasan las instalaciones: la red de fontanería y desagües, la instalación eléctrica completa, la calefacción o la climatización y, si existe, la de gas, que debe hacer un instalador autorizado.',
          'Es la fase en la que cualquier cambio es más barato. Mover un enchufe ahora es una roza; hacerlo después de pintar es romper una pared terminada. Por eso conviene revisar el plano de electricidad pieza a pieza antes de que se cierren las paredes.',
          'Al terminar las instalaciones se cierran rozas, se hacen los recrecidos de suelo si hacen falta y se preparan las bases para lo que viene.',
        ],
      },
      {
        titulo: 'Fase 3: impermeabilización, alicatados y solados',
        parrafos: [
          'En baños y cocina, antes de alicatar hay que impermeabilizar las zonas húmedas, especialmente la ducha. Es una capa que no se verá nunca, pero que decide si el baño tendrá filtraciones dentro de unos años.',
          'Después se alicatan paredes y se colocan los suelos cerámicos. Si el suelo del resto de la vivienda es de madera o laminado, se deja para más adelante, cuando ya no pasen materiales pesados.',
        ],
      },
      {
        titulo: 'Fase 4: falsos techos, yesos y preparación de paredes',
        parrafos: [
          'Se montan los falsos techos de pladur donde hagan falta —para ocultar conductos o bajar la altura en pasillos y baños— y se enlucen o alisan las paredes. La preparación de las paredes es la base de la pintura: una pared mal preparada se nota con cualquier luz lateral.',
        ],
      },
      {
        titulo: 'Fase 5: carpintería, cocina y sanitarios',
        parrafos: [
          'Llegan las piezas que se verán a diario: puertas interiores, armarios empotrados, muebles de cocina, encimera, sanitarios, mampara y grifería. La encimera suele medirse sobre los muebles ya montados para ajustarla bien.',
          'En este punto se conectan los electrodomésticos y se montan mecanismos eléctricos y luminarias.',
        ],
      },
      {
        titulo: 'Fase 6: suelos delicados, pintura y remates',
        parrafos: [
          'Los suelos de madera o laminados y la pintura final se dejan para el último tramo, cuando el tránsito de materiales pesados ha terminado. Después vienen los remates: rodapiés, tapajuntas, sellados y pequeños ajustes.',
        ],
      },
      {
        titulo: 'Fase 7: limpieza, revisión y documentación',
        parrafos: [
          'La obra termina con la limpieza y con una revisión conjunta de todo el trabajo, en la que conviene comprobar que funcionan grifos, desagües, enchufes, luces y electrodomésticos. Es el momento de anotar cualquier ajuste pendiente.',
          'Guarda la documentación: facturas, garantías de los materiales y los certificados de las instalaciones. En Madrid capital, al terminar una obra tramitada por declaración responsable hay que presentar la documentación final y solicitar la inspección a través del sistema municipal.',
        ],
      },
      {
        titulo: 'Tres errores que obligan a repetir trabajos',
        parrafos: [
          'Elegir los muebles de cocina después de hacer las instalaciones, porque las tomas de agua y los enchufes quedan en el sitio equivocado. Pintar antes de colocar suelos de madera, porque el polvo y los golpes estropean la pintura. Y no prever la climatización durante la fase de instalaciones, porque después hay que abrir techos para pasar conductos.',
        ],
      },
      {
        titulo: 'Plazos',
        parrafos: [
          'En un piso de 70–80 m², la reforma integral dura 8–12 semanas en total: demolición, 1 semana; instalaciones de electricidad y fontanería, 2–3 semanas; albañilería y tabiquería, 2–3 semanas; alicatados y suelos, 2 semanas; carpintería, 1 semana; pintura, 1 semana; y remates y limpieza, 3–5 días. Pide que tu presupuesto incluya un calendario por fases: así sabrás en qué punto está la obra y qué decisión toca en cada momento.',
        ],
      },
      {
        titulo: 'Qué decides tú en cada fase',
        parrafos: [
          'Una reforma integral exige tomar muchas decisiones, pero no todas a la vez. Esta es una forma práctica de repartirlas para no bloquear la obra ni decidir con prisas.',
        ],
        lista: [
          'Antes de empezar: distribución, posición de cocina y baños, plano eléctrico y materiales con plazo largo',
          'Durante la demolición: qué hacer con los imprevistos que aparezcan',
          'Durante las instalaciones: confirmar la posición de enchufes, puntos de luz y climatización',
          'Antes de alicatar: azulejos, plato de ducha, mampara y grifería',
          'Antes de la carpintería: puertas, armarios y tiradores',
          'Antes de pintar: colores y acabado de la pintura',
        ],
      },
      {
        titulo: 'Si vives cerca o vas a seguir en el piso',
        parrafos: [
          'Una reforma integral con la vivienda habitada es poco práctica: durante varias fases no hay agua, luz, cocina o baño disponibles, y el polvo llega a todas partes. Si no tienes alternativa, la obra se puede plantear por zonas, pero suele alargarse y encarecerse.',
          'Si vives cerca o vas a visitar la obra, acuerda un momento fijo a la semana para revisar el avance. Es la mejor forma de detectar a tiempo cualquier decisión pendiente y de evitar cambios de última hora, que son los que más retrasan.',
        ],
      },
      {
        titulo: 'La comunidad de vecinos durante la obra',
        parrafos: [
          'Más allá de comunicar la obra, la relación con la comunidad se cuida cada día: proteger el ascensor y el portal, limpiar las zonas comunes al terminar la jornada, respetar los horarios y avisar de los días con más ruido, como los de demolición o rozas. Si la comunidad tiene normas propias, deben estar incluidas en la planificación desde el principio.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué se hace primero en una reforma integral?',
        respuesta:
          'La protección y la demolición, después las instalaciones y la albañilería, luego alicatados y solados, y al final carpintería, suelos delicados, pintura y remates.',
      },
      {
        pregunta: '¿Por qué la pintura va al final?',
        respuesta:
          'Porque el resto de oficios genera polvo y golpes. Pintar antes de terminar suelos y carpintería obliga casi siempre a repasar.',
      },
      {
        pregunta: '¿Cuándo debo elegir los muebles de cocina?',
        respuesta:
          'Antes de las instalaciones. La posición de tomas de agua, desagües y enchufes depende del diseño de la cocina.',
      },
    ],
    servicio: {
      nombre: 'Orden de los trabajos en una reforma integral',
      descripcion: 'Guía de las fases de una reforma integral.',
    },
    servicioFormulario: 'Reformas integrales',
    imagen: '/images/obra-en-curso.webp',
    imagenAlt: 'Vivienda durante la obra con la distribución abierta',
    relacionadas: ['reformas-integrales-madrid', 'reforma-piso-completo-madrid', 'licencia-obra-madrid', 'precios', 'calculadora-reforma'],
  },

  /* ---------------------------- PRESUPUESTO ---------------------------- */
  {
    path: 'que-pedir-presupuesto-reforma',
    tipo: 'guia',
    padre: 'guias',
    publicado: PUBLICADO,
    title: 'Qué pedir en un presupuesto de reforma y cómo comparar',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Qué debe incluir un presupuesto de reforma.`,
    etiqueta: 'Qué pedir en un presupuesto de reforma',
    resumen: 'Lista de comprobación para comparar presupuestos con el mismo alcance.',
    h1: { antes: 'Qué pedir en un', resaltado: 'presupuesto de reforma', despues: 'y cómo comparar' },
    puntos: ['Partidas y mediciones', 'Materiales concretos', 'Exclusiones e imprevistos', 'IVA, plazos y pagos'],
    whatsapp: 'Hola, quiero pedir un presupuesto por partidas',
    kicker: 'GUÍA',
    intro:
      'Tener tres presupuestos no sirve de mucho si cada uno incluye cosas distintas. Un precio más bajo a menudo solo significa que falta algo. Esta guía te da una lista de comprobación para saber qué debe tener un buen presupuesto de reforma y cómo comparar ofertas de forma justa.',
    secciones: [
      {
        titulo: 'Un presupuesto por partidas, no un precio global',
        parrafos: [
          'Un precio global del tipo «reforma del baño: 6.000 €» no permite saber qué se va a hacer ni comparar. Un presupuesto útil separa la obra en partidas —demolición, albañilería, fontanería, electricidad, alicatados, carpintería, pintura— y en cada una indica qué se hace, cuánto (metros, unidades) y a qué precio.',
          'Con ese desglose puedes ver qué pasa si cambias un material o eliminas una partida, y detectar diferencias entre ofertas.',
        ],
      },
      {
        titulo: 'Lo que debe aparecer, partida por partida',
        parrafos: ['Repasa cada presupuesto con esta lista.'],
        lista: [
          'Mediciones: metros cuadrados o unidades de cada trabajo',
          'Materiales concretos: marca, modelo o al menos gama',
          'Qué incluye la mano de obra y qué no',
          'Retirada de escombros y gestión de residuos',
          'Protección del portal, la escalera y el ascensor',
          'Trámites municipales: si están incluidos y quién los hace',
          'IVA: si está incluido y a qué tipo',
          'Calendario por fases y fecha prevista de fin',
          'Forma de pago y en qué hitos',
          'Garantías que se ofrecen sobre el trabajo',
        ],
      },
      {
        titulo: 'Las exclusiones: lo que más diferencia a un presupuesto',
        parrafos: [
          'Lee siempre el apartado de lo que no está incluido. Es habitual que queden fuera los electrodomésticos, la tramitación de licencias, los boletines de instalaciones, la pintura de techos, los remates de carpintería o la limpieza final. Ninguna de esas exclusiones es un problema si está escrita: el problema es descubrirlas a mitad de obra.',
        ],
      },
      {
        titulo: 'Cómo se gestionan los imprevistos',
        parrafos: [
          'En una reforma, sobre todo en edificios antiguos, pueden aparecer problemas al abrir paredes y suelos. Un buen presupuesto explica cómo se valorarán esos trabajos y cómo se aprobarán antes de hacerlos. Desconfía tanto de quien dice que no habrá ningún imprevisto como de quien no quiere ponerlo por escrito.',
        ],
      },
      {
        titulo: 'Cómo comparar tres presupuestos',
        parrafos: [
          'Pon las ofertas una al lado de otra, partida por partida. Si una no incluye algo que las demás sí, añádelo mentalmente antes de comparar el total. Comprueba que los materiales son equivalentes: dos alicatados pueden tener precios muy distintos según el formato y la gama.',
          'Compara también lo que no es dinero: el calendario, la forma de pago, quién coordina la obra y cómo se comunican los cambios.',
        ],
        subsecciones: [
          {
            titulo: 'Señales de alerta',
            texto:
              'Precios muy por debajo del resto sin explicación, presupuestos sin desglose, pagos por adelantado muy altos, ausencia de calendario o negativa a dejar por escrito las exclusiones y los imprevistos.',
          },
          {
            titulo: 'Buenas señales',
            texto:
              'Visita previa para medir, preguntas sobre el estado del edificio y las instalaciones, partidas detalladas con materiales concretos y un calendario por fases.',
          },
        ],
      },
      {
        titulo: 'Varios oficios o una sola empresa',
        parrafos: [
          'Contratar cada oficio por separado puede parecer más barato, pero alguien tiene que coordinar a fontaneros, electricistas, albañiles y pintores, decidir el orden y responder cuando una fase afecta a otra. Si eliges esa vía, deja claro quién asume esa coordinación. Si contratas a una sola empresa, pide que el presupuesto incluya todas las partidas y que indique quién es tu interlocutor durante la obra.',
        ],
      },
      {
        titulo: 'Antes de firmar',
        parrafos: [
          'Comprueba que el presupuesto identifica a la empresa con su razón social y su CIF, que todo lo hablado está por escrito y que sabes cómo se documentarán los cambios durante la obra. Guarda una copia firmada por ambas partes.',
          'Si vas a pedir alguna ayuda pública, revisa antes la convocatoria: muchas exigen que la obra no haya empezado al solicitarla.',
        ],
      },
      {
        titulo: 'Nuestros precios de referencia',
        parrafos: [
          'Para saber si un presupuesto está en un rango razonable, compáralo con nuestra página de precios, que tiene los rangos orientativos por servicio y un presupuesto de ejemplo por partidas, o usa la calculadora de reforma para tu caso.',
        ],
      },
      {
        titulo: 'Un ejemplo de partida bien descrita',
        parrafos: [
          'Compara estas dos formas de describir el mismo trabajo. La primera: «alicatado del baño». La segunda: «alicatado de paredes del baño hasta el techo, 22 m², con azulejo de 30 × 60 de gama media, incluido el material de agarre, cortes y remates con perfil de aluminio; no incluye el suministro del azulejo». Con la segunda sabes exactamente qué te ofrecen, qué tendrás que comprar tú y puedes comparar.',
          'Pide que todas las partidas importantes estén descritas con ese nivel de detalle: superficie o unidades, material, qué incluye y qué no.',
        ],
      },
      {
        titulo: 'Preguntas que conviene hacer antes de aceptar',
        parrafos: [
          'Además de leer el presupuesto, haz estas preguntas. Las respuestas dicen mucho de cómo será la obra.',
        ],
        lista: [
          '¿Quién será mi interlocutor durante la obra?',
          '¿Cómo se documentan y aprueban los cambios?',
          '¿Qué pasa si aparece un imprevisto al demoler?',
          '¿Está incluida la tramitación municipal?',
          '¿Quién protege y limpia las zonas comunes?',
          '¿Qué documentación entregáis al terminar?',
        ],
      },
      {
        titulo: 'Precio cerrado o precio abierto',
        parrafos: [
          'Un presupuesto puede plantearse con un precio cerrado para un alcance definido o con precios por unidad que se ajustan a las mediciones reales. Ninguna de las dos opciones es mala en sí, pero debes saber cuál te ofrecen. Con precio cerrado, lo importante es que el alcance esté muy bien descrito; con precios por unidad, que las mediciones finales se puedan comprobar.',
          'En cualquier caso, lo que no esté en el presupuesto y aparezca después debe valorarse y aprobarse por escrito antes de hacerse.',
        ],
      },
      {
        titulo: 'Cómo leer el IVA y los impuestos',
        parrafos: [
          'Comprueba si el total incluye el IVA y a qué tipo. Las obras de renovación y reparación de una vivienda particular pueden tributar al 10 % si se cumplen ciertos requisitos, como la antigüedad de la vivienda y el peso de los materiales en el total; si no se cumplen, se aplica el tipo general. Si tu obra requiere trámite municipal, las tasas y el impuesto sobre construcciones son aparte del presupuesto de la obra, salvo que se diga lo contrario.',
        ],
      },
      {
        titulo: 'Qué documentación pedir al terminar',
        parrafos: [
          'Un buen cierre de obra es parte del presupuesto. Al terminar, pide las facturas, las garantías de los materiales y equipos instalados, y los certificados de las instalaciones que correspondan, como el de la instalación eléctrica cuando se ha renovado. Te harán falta si cambias de compañía de suministro, si vendes o alquilas la vivienda, o si tienes que reclamar una avería.',
          'Pide también una relación de los materiales colocados —marcas, modelos y colores—: dentro de unos años te permitirá reponer una pieza o repetir un acabado sin tener que adivinar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué debe incluir la partida de escombros?',
        respuesta:
          'La retirada y el transporte de los residuos, el contenedor o las sacas y, si se coloca un contenedor en la calle, el permiso municipal correspondiente.',
      },
      {
        pregunta: '¿Cuántos presupuestos conviene pedir?',
        respuesta:
          'Más que el número, importa que sean comparables. Dos o tres presupuestos con el mismo alcance y desglosados por partidas son más útiles que muchos presupuestos globales.',
      },
      {
        pregunta: '¿Es normal pagar por adelantado?',
        respuesta:
          'Es habitual un pago inicial, pero conviene que el resto se pague por hitos de obra terminados. Desconfía de adelantos muy altos sin calendario.',
      },
      {
        pregunta: '¿Qué hago si aparece un imprevisto a mitad de obra?',
        respuesta:
          'Pedir que se valore por escrito y aprobarlo antes de que se ejecute, tal como debería indicar el presupuesto inicial.',
      },
    ],
    servicio: {
      nombre: 'Cómo comparar presupuestos de reforma',
      descripcion: 'Guía para pedir y comparar presupuestos de reforma.',
    },
    servicioFormulario: '',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una vivienda sobre una mesa para revisar un presupuesto',
    relacionadas: ['precios', 'calculadora-reforma', 'reformas-integrales-madrid', 'reforma-banos-madrid', 'como-trabajamos'],
  },

  /* ---------------------------- ALISAR O QUITAR GOTELÉ ---------------------------- */
  {
    path: 'alisar-paredes-o-quitar-gotele',
    tipo: 'guia',
    padre: 'guias',
    publicado: PUBLICADO,
    title: 'Alisar paredes o quitar gotelé: diferencias y precio',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Alisar paredes o quitar gotelé: diferencias.`,
    etiqueta: 'Alisar paredes o quitar gotelé',
    resumen: 'Diferencias, métodos y precios orientativos para tus paredes.',
    h1: { antes: 'Alisar paredes o', resaltado: 'quitar gotelé', despues: ': diferencias y precio' },
    puntos: ['Desde 10 €/m²', 'Raspar o cubrir', 'Cuándo trasdosar', 'Polvo y tiempos'],
    whatsapp: 'Hola, quiero pedir presupuesto para quitar el gotelé',
    kicker: 'GUÍA',
    intro:
      '«Quitar el gotelé» y «alisar las paredes» se usan casi como sinónimos, pero no son lo mismo. Quitar el gotelé es eliminar una textura concreta; alisar es dejar cualquier pared plana y lista para pintar. A veces se hace una cosa, a veces la otra, y a menudo las dos. Esta guía te ayuda a saber qué necesitan tus paredes y cuánto puede costar.',
    secciones: [
      {
        titulo: 'La diferencia en dos frases',
        parrafos: [
          'Quitar el gotelé consiste en eliminar o tapar esa textura de gotas que se aplicó en muchísimos pisos durante décadas. Alisar es el trabajo de dejar la pared uniforme: rellenar grietas y agujeros, regularizar irregularidades y lijar hasta que no se note nada a contraluz.',
          'Una pared con gotelé casi siempre necesita alisado después de quitarlo. Y una pared sin gotelé, pero con desperfectos, puede necesitar alisado sin que haya ningún gotelé que quitar.',
        ],
      },
      {
        titulo: 'Tres formas de acabar con el gotelé',
        parrafos: ['El método depende del tipo de gotelé y del estado de la pared.'],
        subsecciones: [
          {
            titulo: 'Raspar',
            texto:
              'Se humedece la pared y se retira el gotelé con espátula. Funciona bien cuando la pintura superior es permeable, como el temple. Después hay que reparar y alisar lo que queda. No añade grosor a la pared.',
            imagen: '/images/llana-masilla.webp',
            imagenAlt: 'Llana con masilla para alisar una pared',
          },
          {
            titulo: 'Cubrir con masilla',
            texto:
              'Se aplican capas de pasta de alisar sobre el gotelé hasta enrasarlo y se lija. Es la opción habitual cuando el gotelé tiene pintura plástica, porque el agua no lo reblandece. Necesita que la capa inferior esté bien adherida.',
            imagen: '/images/alisando-pared.webp',
            imagenAlt: 'Pared cubierta con masilla y alisada',
          },
          {
            titulo: 'Trasdosar con pladur',
            texto:
              'Si la pared está muy deteriorada, se reviste con placa de yeso laminado. Se obtiene una superficie nueva y se puede añadir aislamiento, a cambio de perder unos centímetros por pared.',
            imagen: '/images/tabique-pladur.webp',
            imagenAlt: 'Pared revestida con placas de pladur',
          },
        ],
      },
      {
        titulo: 'Cómo saber qué gotelé tienes',
        parrafos: [
          'Haz una prueba en una zona discreta: humedece un trozo con una esponja y espera unos minutos. Si se reblandece y sale con la espátula, probablemente se puede raspar. Si el agua resbala sin penetrar, tiene pintura plástica y suele ser más razonable cubrirlo.',
          'Revisa también si hay zonas que se despegan, bolsas o manchas de humedad. Indican un problema de adherencia o de humedad que hay que resolver antes, porque el peso de las capas nuevas podría hacer que se desprenda todo.',
        ],
      },
      {
        titulo: 'Cuánto cuesta',
        parrafos: [
          'Alisar paredes sin gotelé cuesta 10–16 €/m². Quitar el gotelé, alisar y pintar cuesta 14–22 €/m² de pared. Si se trata solo de pintar una vivienda sin gotelé, la pintura cuesta 8–14 €/m² de pared, y un piso de 80 m² con paredes y techos, 1.400–2.600 €. IVA incluido.',
          'Un ejemplo: si las paredes de tu piso suman 180 m² (mídelo sumando el perímetro de cada habitación por su altura, sin puertas ni ventanas), quitar el gotelé, alisar y pintar costaría entre 2.520 y 3.960 €. Si las paredes no tienen gotelé y solo hay que alisarlas, entre 1.800 y 2.880 €.',
          'El precio final depende del estado de la pared, de las capas de gotelé y de pintura que haya debajo, de la preparación necesaria y del acabado final. Los techos suelen costar más que las paredes, por la dificultad de trabajar sobre la cabeza.',
        ],
      },
      {
        titulo: 'Qué acabado quieres: mate o satinado',
        parrafos: [
          'Una pintura mate disimula mejor las pequeñas irregularidades, por eso es la elección habitual en paredes que han tenido gotelé o en estancias con luz rasante. Una pintura satinada se limpia mejor, pero delata cualquier defecto y exige un alisado mucho más cuidado. Decidirlo al principio cambia el nivel de preparación y, por tanto, el precio.',
        ],
      },
      {
        titulo: 'Polvo, tiempos y organización',
        parrafos: [
          'El lijado genera polvo fino que llega a cualquier rincón: hay que retirar o cubrir los muebles, sellar puertas y proteger el suelo. Con la vivienda vacía todo es más rápido y limpio. Si vas a cambiar el suelo, hazlo después de las paredes, no antes.',
          'Cada capa de masilla necesita secarse antes de la siguiente, y acortar esos tiempos se nota en forma de grietas. Por eso una vivienda entera se suele organizar por estancias: quitar el gotelé, alisar y pintar un piso completo lleva 1–2 semanas.',
          'En edificios con comunidad, respeta los horarios de obra y avisa a los vecinos de los días de lijado.',
        ],
      },
      {
        titulo: 'Qué elegir en tu caso',
        parrafos: ['Una regla rápida para orientarte.'],
        lista: [
          'Gotelé con temple y pared sana: raspar y alisar',
          'Gotelé con pintura plástica y bien adherido: cubrir con masilla',
          'Pared muy dañada o con ganas de aislar: trasdosar con pladur',
          'Sin gotelé pero con grietas y agujeros: alisado localizado',
          'Pared en buen estado: basta con pintar',
        ],
      },
      {
        titulo: 'Errores habituales',
        parrafos: [
          'Pintar directamente sobre una pared recién alisada sin imprimación: las zonas reparadas absorben la pintura de otra forma y se notan diferencias de tono. Cerrar grietas activas sin resolver su causa: vuelven a salir a los pocos meses. Y aplicar capas muy gruesas de masilla para ahorrar tiempo: agrietan al secar.',
          'Otro error frecuente es dejar los techos para más adelante. Si se alisan las paredes y no el techo, el contraste se nota mucho, especialmente con luz natural lateral.',
        ],
      },
      {
        titulo: 'Si la pared tiene humedad',
        parrafos: [
          'Las manchas, desconchones o salitre indican humedad. Puede venir de una fuga, de condensación en una pared fría o de humedad que sube desde el suelo en plantas bajas. Alisar sobre una pared húmeda es trabajo perdido: primero hay que localizar y tratar el origen, dejar secar el soporte y usar los productos adecuados.',
          'En paredes que dan al exterior y se condensan en invierno, un trasdosado con aislamiento puede resolver a la vez la textura y el problema de frío.',
        ],
      },
      {
        titulo: 'Papel pintado en lugar de pintura',
        parrafos: [
          'Si prefieres papel pintado, el alisado debe ser todavía más cuidadoso: el papel marca cualquier irregularidad. Además, conviene aplicar una imprimación que facilite retirarlo en el futuro sin dañar la pared. Nuestro servicio de paredes incluye tanto la pintura como el papel pintado.',
        ],
      },
      {
        titulo: 'Cómo preparar la vivienda',
        parrafos: [
          'Si vas a quitar el gotelé de toda la casa, prepárala antes de que empiece la obra: vacía las estancias en la medida de lo posible, guarda lo delicado y lo que no quieras exponer al polvo, y desmonta cuadros, estanterías y cortinas. Cuanto más despejado esté el espacio, más rápido y limpio será el trabajo.',
          'Si tienes que seguir viviendo en el piso, organiza la obra por habitaciones y deja para el final las que más usas.',
        ],
      },
      {
        titulo: 'Techos con gotelé',
        parrafos: [
          'Los techos también suelen tener gotelé y se tratan igual que las paredes, aunque el trabajo es más lento por la postura y el polvo cae directamente. Si vas a alisar toda la vivienda, conviene incluirlos: de lo contrario, el contraste entre paredes lisas y techos con textura se nota mucho.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Hay que imprimar la pared después de alisarla?',
        respuesta:
          'Sí, en la mayoría de los casos. Las zonas reparadas absorben la pintura de forma distinta, y sin imprimación se notan diferencias de tono.',
      },
      {
        pregunta: '¿Es lo mismo quitar el gotelé que alisar?',
        respuesta:
          'No. Quitar el gotelé es eliminar o tapar esa textura; alisar es dejar la pared plana y lista para pintar. Después de quitar el gotelé casi siempre hace falta alisar.',
      },
      {
        pregunta: '¿Cuánto cuesta quitar el gotelé en Madrid?',
        respuesta:
          'Quitar el gotelé, alisar y pintar cuesta 14–22 €/m² de pared, y solo alisar, 10–16 €/m². En un piso completo son 1–2 semanas. IVA incluido.',
      },
      {
        pregunta: '¿Se puede quitar el gotelé con la casa amueblada?',
        respuesta:
          'Sí, pero es más lento y hay que proteger muy bien todo por el polvo del lijado. Lo ideal es vaciar las estancias o trabajar habitación por habitación.',
      },
    ],
    servicio: {
      nombre: 'Alisar paredes o quitar gotelé',
      descripcion: 'Guía para elegir entre alisar paredes y quitar el gotelé en Madrid.',
    },
    servicioFormulario: 'Paredes',
    imagen: '/images/enlucido.webp',
    imagenAlt: 'Pared enlucida y lista para pintar',
    relacionadas: ['quitar-gotele-madrid', 'alisado-paredes-madrid', 'pintores-madrid', 'precios', 'calculadora-reforma'],
  },
  ...GUIAS_NUEVAS,
];
