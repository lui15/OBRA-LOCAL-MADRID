import { NOTA_GOOGLE } from '../datos/contacto';
import { Faq, PaginaSeo, SeccionPagina } from './pagina-seo';

/** Datos propios de cada servicio nuevo; el resto se completa igual en todos. */
interface DatosServicio {
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
  /** Nombre que preselecciona el formulario (ver presupuesto-modelo.ts). */
  formulario: string;
  imagen: string;
  imagenAlt: string;
  relacionadas: string[];
}

function servicio(d: DatosServicio): PaginaSeo {
  return {
    path: d.path,
    tipo: 'servicio',
    padre: 'servicios',
    title: d.title,
    description: d.description,
    etiqueta: d.etiqueta,
    resumen: d.resumen,
    h1: d.h1,
    puntos: d.puntos,
    whatsapp: `Hola, quiero pedir presupuesto para ${d.etiqueta.toLowerCase()}`,
    kicker: d.etiqueta.toUpperCase(),
    intro: d.intro,
    secciones: d.secciones,
    faqs: d.faqs,
    servicio: { nombre: `${d.etiqueta} en Madrid`, descripcion: d.resumen },
    servicioFormulario: d.formulario,
    imagen: d.imagen,
    imagenAlt: d.imagenAlt,
    relacionadas: d.relacionadas,
  };
}


export const SERVICIOS_NUEVOS: PaginaSeo[] = [
  /* ---------------------------- LOCALES COMERCIALES ---------------------------- */
  servicio({
    path: 'reforma-locales-comerciales-madrid',
    etiqueta: 'Reforma de locales comerciales',
    title: 'Reforma de locales comerciales en Madrid | ObraLocal',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Acondicionamos locales y oficinas para abrir.`,
    resumen: 'Acondicionamiento de locales y oficinas: distribución, instalaciones, techos y acabados.',
    h1: { antes: 'Reforma de', resaltado: 'locales comerciales', despues: 'en Madrid' },
    puntos: ['Locales y oficinas', 'Pladur, techos e iluminación', 'Instalaciones y acabados', 'Una sola persona de contacto'],
    intro:
      'Reformar un local tiene una presión que no tiene un piso: cada semana de obra es una semana sin abrir. Por eso conviene empezar con el trámite claro, un presupuesto detallado por partidas y un orden de trabajo que no deje cabos sueltos. Acondicionamos locales y oficinas en Madrid: distribución con pladur, falsos techos con iluminación, instalaciones, suelos, aseos y acabados.',
    secciones: [
      {
        titulo: 'Qué incluye acondicionar un local',
        parrafos: [
          'Cada local es distinto, pero la mayoría de reformas combinan estos trabajos. Lo que entra en tu obra queda separado por partidas en el presupuesto, para que sepas qué pagas en cada una.',
        ],
        lista: [
          'Demolición de la distribución anterior y retirada de escombros.',
          'Tabiques y trasdosados de pladur para separar zonas, almacenes o despachos.',
          'Falsos techos con iluminación empotrada.',
          'Instalación eléctrica y de fontanería adaptada a la actividad.',
          'Aseos, suelos, alicatados y pintura.',
        ],
      },
      {
        titulo: 'El trámite: licencia o declaración responsable',
        parrafos: [
          'En Madrid capital, la Ordenanza 6/2022 de Licencias y Declaraciones Responsables Urbanísticas fija qué trámite necesita cada obra y cada actividad. Con carácter general va por declaración responsable todo lo que necesite intervención municipal y no esté en su anexo I; ese anexo reserva la licencia, entre otros casos, para la implantación o modificación de actividades sometidas a control ambiental.',
          'Por eso, antes de cerrar el proyecto, hay que saber qué actividad tendrá el local. Te lo explicamos con más detalle en nuestra página sobre la licencia de obra en Madrid. Fuera de Madrid capital, el trámite lo fija el ayuntamiento de cada municipio.',
        ],
      },
      {
        titulo: 'Cómo ganar tiempo',
        parrafos: [
          'La mayor parte del retraso en un local suele venir de decisiones que llegan tarde: el mobiliario, la iluminación o los materiales del suelo. Si los decides antes de empezar, el plan de obra se cumple mejor y los cambios no aparecen a mitad.',
          'También ayuda tener a mano un plano o, si no lo hay, unas medidas aproximadas y fotos del estado actual. Con eso preparamos la visita, que es sin compromiso, y te damos un presupuesto ajustado y detallado.',
        ],
      },
      {
        titulo: 'Una sola persona de contacto',
        parrafos: [
          'Mientras dura la obra tienes una sola persona de contacto, por WhatsApp y por teléfono. Así no tienes que coordinar tú a cada oficio: albañiles, electricistas, fontaneros, pintores y pladuristas trabajan con un mismo plan.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar un local en Madrid?',
        respuesta:
          'El acondicionamiento de un local u oficina cuesta 300–450 €/m² en calidad básica, 450–700 €/m² en media y 700–1.000 €/m² en alta, IVA incluido. El presupuesto exacto depende del estado del local y de la actividad.',
      },
      {
        pregunta: '¿Necesito licencia para abrir mi local?',
        respuesta:
          'Depende de la actividad. En Madrid capital, la Ordenanza 6/2022 reserva la licencia para los casos de su anexo I, como las actividades sometidas a control ambiental; el resto suele ir por declaración responsable.',
      },
      {
        pregunta: '¿Podéis trabajar con el local cerrado al público?',
        respuesta:
          'Sí. Lo normal es hacer la reforma con el local cerrado; lo organizamos contigo en la visita para que el plan de obra encaje con tu fecha de apertura.',
      },
    ],
    formulario: 'Reforma de locales',
    imagen: '/images/obra-en-curso.webp',
    imagenAlt: 'Local en obra con trabajos de acondicionamiento',
    relacionadas: ['pladur-madrid', 'albanileria-madrid', 'pintores-madrid', 'licencia-obra-madrid', 'precios'],
  }),

  /* ---------------------------- TERRAZAS ---------------------------- */
  servicio({
    path: 'reforma-terrazas-madrid',
    etiqueta: 'Reforma de terrazas',
    title: 'Reforma de terrazas en Madrid | ObraLocal',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Suelo, impermeabilización y desagües de tu terraza.`,
    resumen: 'Suelo, impermeabilización, desagües, iluminación y acabados de terrazas.',
    h1: { antes: 'Reforma de', resaltado: 'terrazas', despues: 'en Madrid' },
    puntos: ['Suelo y rodapié', 'Impermeabilización', 'Desagües y pendientes', 'Iluminación exterior'],
    intro:
      'Una terraza bien reformada se usa todo el año, pero es también la parte de la casa más expuesta a la lluvia, al sol y a las heladas. Por eso lo primero no es el suelo bonito, sino que el agua salga por donde tiene que salir. Reformamos terrazas en Madrid: impermeabilización, pendientes y desagües, suelo, rodapié, iluminación y acabados.',
    secciones: [
      {
        titulo: 'Lo que no se ve: impermeabilización y desagües',
        parrafos: [
          'Muchas terrazas que dan problemas tienen un suelo correcto encima de una impermeabilización vieja o rota, o una pendiente que no lleva el agua al desagüe. Antes de presupuestar revisamos el estado del suelo, las juntas, los sumideros y el encuentro con las paredes y la carpintería.',
          'Si la terraza está sobre la vivienda de un vecino o sobre un local, cualquier filtración se nota abajo. Hacerlo bien desde el principio evita levantar el suelo nuevo unos años después.',
        ],
      },
      {
        titulo: 'Qué suele incluir la reforma',
        parrafos: ['Según el estado de tu terraza, la obra combina varios de estos trabajos:'],
        lista: [
          'Levantar el suelo existente y sanear la base.',
          'Impermeabilizar y rehacer las pendientes hacia los desagües.',
          'Colocar suelo para exterior, con rodapié y remates.',
          'Puntos de luz y enchufes preparados para exterior.',
          'Pintura de paredes y barandillas.',
        ],
      },
      {
        titulo: 'Terraza y comunidad de vecinos',
        parrafos: [
          'En muchos edificios la terraza es un elemento común de uso privativo, aunque solo se acceda desde tu casa. La Ley de Propiedad Horizontal impide alterar la configuración o el estado exterior del edificio y obliga a comunicar antes las obras a quien represente a la comunidad. Si quieres cerrar la terraza o cambiar su aspecto desde la calle, consúltalo con tu comunidad y con el ayuntamiento antes de empezar.',
        ],
      },
      {
        titulo: 'Cómo elegir el suelo',
        parrafos: [
          'Para exterior hace falta un material resistente a las heladas y que no resbale mojado. En la visita te enseñamos opciones según el uso que le vayas a dar, el sol que recibe y el mantenimiento que quieras hacer, y te damos un presupuesto ajustado y detallado con la calidad que elijas.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta reformar una terraza?',
        respuesta:
          'La reforma de una terraza cuesta 80–120 €/m² en calidad básica, 120–180 €/m² en media y 180–260 €/m² en alta, IVA incluido. Si hay que rehacer la impermeabilización o las pendientes, se detalla en el presupuesto.',
      },
      {
        pregunta: '¿Necesito permiso de la comunidad?',
        respuesta:
          'Hay que comunicar la obra a quien represente a la comunidad, como exige la Ley de Propiedad Horizontal. Si cambia el aspecto exterior del edificio, por ejemplo con un cerramiento, necesitas además su autorización y consultar el trámite al ayuntamiento.',
      },
      {
        pregunta: '¿Se puede usar la casa durante la obra?',
        respuesta:
          'Sí. La obra se hace en la terraza; solo hay que proteger el paso por la vivienda para sacar el escombro y entrar el material.',
      },
    ],
    formulario: 'Reforma de terrazas',
    imagen: '/images/piso-reformado.webp',
    imagenAlt: 'Vivienda reformada con salida a la terraza',
    relacionadas: ['tratamiento-humedades-madrid', 'instalacion-suelos-madrid', 'albanileria-madrid', 'precios'],
  }),

  /* ---------------------------- HUMEDADES ---------------------------- */
  servicio({
    path: 'tratamiento-humedades-madrid',
    etiqueta: 'Tratamiento de humedades',
    title: 'Tratamiento de humedades en Madrid | ObraLocal',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Primero la causa de la humedad, luego la pared.`,
    resumen: 'Humedades por filtración, capilaridad o condensación: causa, reparación y acabado.',
    h1: { antes: 'Tratamiento de', resaltado: 'humedades', despues: 'en Madrid' },
    puntos: ['Diagnóstico de la causa', 'Saneado de paredes', 'Alisado y pintura', 'Humedad de filtración y capilaridad'],
    intro:
      'Una mancha de humedad que vuelve después de pintar es la señal de que se ha tratado el efecto y no la causa. Para que no reaparezca, primero hay que saber de dónde viene el agua: una filtración desde fuera, una tubería, el agua que sube del terreno o la condensación del propio piso. Tratamos humedades en Madrid empezando por ahí.',
    secciones: [
      {
        titulo: 'Los tres tipos de humedad más habituales',
        parrafos: ['Cada tipo tiene un origen y una solución distinta, y a veces se combinan:'],
        subsecciones: [
          {
            titulo: 'Filtración',
            texto:
              'El agua entra desde fuera: una fachada con grietas, una terraza mal impermeabilizada, una cubierta o una tubería con fugas. Aparece después de llover o de forma localizada, y se arregla cortando la entrada de agua.',
          },
          {
            titulo: 'Capilaridad',
            texto:
              'El agua sube del terreno por los muros, sobre todo en bajos y plantas a ras de calle. Deja una franja de humedad y salitre en la parte baja de las paredes.',
          },
          {
            titulo: 'Condensación',
            texto:
              'El vapor del propio piso se condensa en las zonas frías: esquinas, detrás de los muebles, alrededor de las ventanas. Suele venir con moho y empeora en invierno y con poca ventilación.',
          },
        ],
      },
      {
        titulo: 'Cómo lo hacemos',
        parrafos: [
          'En la visita, que es sin compromiso, miramos dónde aparece la humedad, desde cuándo, si cambia con la lluvia o con la estación y qué hay al otro lado de la pared. Con eso decidimos el tratamiento y te damos un presupuesto detallado.',
          'Después se corrige el origen, se sanea la pared retirando el revestimiento dañado, se deja secar el tiempo necesario y se termina con alisado y pintura. Si la causa está en un elemento común del edificio, como la fachada o una bajante, la reparación del origen corresponde a la comunidad: te ayudamos a explicarlo con fotos.',
        ],
      },
      {
        titulo: 'Lo que conviene no hacer',
        parrafos: [
          'Pintar encima con pintura antihumedad sin resolver la causa solo esconde el problema unos meses. Tapar la pared con un mueble o con un trasdosado sin ventilar tampoco: la humedad sigue ahí y puede extenderse.',
        ],
      },
      {
        titulo: 'Cuánto tarda y qué incluye el presupuesto',
        parrafos: [
          'El tratamiento en sí suele llevar 2–5 días, pero el plazo total depende sobre todo del secado de la pared, que no conviene acelerar: si se cierra una pared todavía húmeda, el problema vuelve. Por eso el presupuesto separa el tratamiento de la causa, el saneado, el tiempo de secado y el acabado de alisado y pintura.',
          'Si la humedad afecta a varias paredes o a un techo, lo valoramos por metros. Si la causa está en un elemento común, el presupuesto indica qué parte corresponde a tu vivienda y qué parte habría que tratar con la comunidad, para que lo puedas presentar con fotos en la junta o al administrador.',
        ],
      },
      {
        titulo: 'Cómo evitar que vuelva',
        parrafos: [
          'En la condensación, lo que más ayuda es ventilar a diario unos minutos, usar el extractor al ducharse y al cocinar, no secar la ropa dentro sin ventilar y separar los muebles unos centímetros de las paredes frías. En las filtraciones, revisar cada cierto tiempo las juntas de la terraza, los sumideros y el sellado de las ventanas evita que el agua vuelva a entrar.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta tratar una humedad?',
        respuesta:
          'El tratamiento de humedades cuesta 30–60 €/m², desde 400 €, y suele llevar 2–5 días. Después, alisar la pared cuesta 10–16 €/m² y pintar 8–14 €/m² de pared. IVA incluido.',
      },
      {
        pregunta: '¿La humedad de mi pared es cosa mía o de la comunidad?',
        respuesta:
          'Depende de dónde esté el origen. Si viene de la fachada, la cubierta o una bajante común, la reparación del origen suele corresponder a la comunidad; si viene de tu piso, a ti.',
      },
      {
        pregunta: '¿Por qué vuelve la mancha después de pintar?',
        respuesta:
          'Porque la causa sigue ahí. Hasta que no se corta la entrada de agua o se resuelve la condensación, la pared vuelve a mojarse y la pintura se mancha.',
      },
    ],
    formulario: 'Tratamiento de humedades',
    imagen: '/images/paredes-ejemplo.webp',
    imagenAlt: 'Pared saneada y preparada después de tratar una humedad',
    relacionadas: ['albanileria-madrid', 'alisado-paredes-madrid', 'pintores-madrid', 'como-quitar-humedades-de-la-pared', 'precios'],
  }),

  /* ---------------------------- ALICATADOS ---------------------------- */
  servicio({
    path: 'alicatados-madrid',
    etiqueta: 'Alicatados',
    title: 'Alicatados en Madrid | ObraLocal',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Alicatamos baños, cocinas y otras estancias.`,
    resumen: 'Alicatado de baños y cocinas: retirada del azulejo viejo, preparación y colocación.',
    h1: { antes: '', resaltado: 'Alicatados', despues: 'en Madrid' },
    puntos: ['Baños y cocinas', 'Retirada del azulejo viejo', 'Juntas y remates', 'Gran formato'],
    intro:
      'Un alicatado se ve todos los días, y los fallos también: juntas torcidas, cortes mal rematados alrededor de un enchufe o piezas que suenan huecas. La diferencia está en la preparación de la pared y en el replanteo antes de colocar la primera pieza. Alicatamos baños, cocinas y otras estancias en Madrid.',
    secciones: [
      {
        titulo: 'Qué incluye un alicatado',
        parrafos: ['Según el estado de la pared, el trabajo tiene estas fases:'],
        lista: [
          'Retirar el azulejo antiguo o valorar si se puede colocar encima.',
          'Revisar y nivelar la pared para que las piezas asienten bien.',
          'Replantear: decidir dónde empiezan las piezas para que los cortes queden en las zonas menos visibles.',
          'Colocar con el adhesivo adecuado al formato y a la estancia.',
          'Rejuntar, rematar esquinas y sellar con la encimera, el plato o la bañera.',
        ],
      },
      {
        titulo: '¿Quitar el azulejo viejo o alicatar encima?',
        parrafos: [
          'A veces se puede colocar azulejo nuevo sobre el antiguo, si este está bien adherido y plano, y así se evita la demolición. Pero no siempre conviene: se pierde grosor, hay que ajustar marcos, enchufes y mecanismos, y si hay que tocar tuberías detrás, lo sensato es retirarlo. Lo vemos en la visita y te lo explicamos con el presupuesto.',
        ],
      },
      {
        titulo: 'Formatos y juntas',
        parrafos: [
          'Las piezas grandes dan un aspecto más limpio, con menos juntas, pero exigen una pared muy plana y más cuidado al colocarlas. Las pequeñas se adaptan mejor a paredes irregulares. El color de la junta también cambia mucho el resultado: una junta parecida a la pieza la disimula y una de contraste la marca.',
        ],
      },
      {
        titulo: 'Trato cercano y ordenado',
        parrafos: [
          'Si el alicatado forma parte de la reforma de un baño o una cocina, lo coordinamos con fontanería y electricidad para que las tomas queden donde deben antes de colocar las piezas. Tienes una sola persona de contacto durante toda la obra.',
        ],
      },
      {
        titulo: 'Alicatar un baño o una cocina',
        parrafos: [
          'En el baño, el alicatado protege la pared del agua, así que lo importante es la zona de la ducha o la bañera: ahí las juntas y el sellado con el plato tienen que quedar perfectos. Se puede alicatar hasta el techo o solo hasta cierta altura y pintar el resto con pintura para baños.',
          'En la cocina, lo habitual es alicatar la pared entre la encimera y los muebles altos, donde salpica el agua y la grasa. Ahí conviene una pieza fácil de limpiar y una junta que no se manche. Si los muebles van a cambiar, el alicatado se replantea con las medidas nuevas, para que los cortes queden ocultos.',
        ],
      },
      {
        titulo: 'Cuidar las juntas',
        parrafos: [
          'Las juntas son la parte más delicada de un alicatado. Para que duren, conviene limpiarlas con productos suaves, evitar los ácidos fuertes y ventilar el baño después de ducharse. Si con los años se oscurecen o se agrietan, se pueden rascar y rehacer sin cambiar los azulejos.',
          'El sellado con silicona entre el azulejo y el plato, la bañera o la encimera también se renueva de vez en cuando: es lo que impide que el agua se cuele por detrás.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta alicatar?',
        respuesta:
          'El alicatado cuesta 35–60 €/m², IVA incluido. Si es parte de un baño completo de 4–6 m², la reforma completa cuesta 5.500–10.000 € en calidad media.',
      },
      {
        pregunta: '¿Se puede alicatar encima del azulejo viejo?',
        respuesta:
          'A veces sí, si el azulejo está bien adherido y la pared está plana. Si hay que cambiar tuberías o el azulejo suena hueco, lo correcto es retirarlo.',
      },
      {
        pregunta: '¿Quién elige el azulejo?',
        respuesta:
          'Tú. Te orientamos sobre formatos y materiales según la estancia, y el presupuesto indica la calidad de la pieza que entra en el precio.',
      },
    ],
    formulario: 'Alicatados',
    imagen: '/images/bano-moderno.webp',
    imagenAlt: 'Baño con alicatado nuevo y juntas finas',
    relacionadas: ['reforma-banos-madrid', 'reforma-cocinas-madrid', 'albanileria-madrid', 'precios'],
  }),

  /* ---------------------------- SUELOS ---------------------------- */
  servicio({
    path: 'instalacion-suelos-madrid',
    etiqueta: 'Instalación de suelos',
    title: 'Instalación de suelos en Madrid | ObraLocal',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Laminado, vinílico, porcelánico o tarima.`,
    resumen: 'Suelo laminado, vinílico, porcelánico o tarima, con la base preparada y rodapié.',
    h1: { antes: 'Instalación de', resaltado: 'suelos', despues: 'en Madrid' },
    puntos: ['Laminado y vinílico', 'Porcelánico', 'Tarima de madera', 'Rodapié y remates'],
    intro:
      'Cambiar el suelo transforma una casa sin tocar nada más, pero el resultado depende de algo que no se ve: la base. Un suelo nuevo sobre una base desnivelada acaba haciendo ruido, levantándose o agrietándose. Instalamos suelos laminados, vinílicos, porcelánicos y tarima de madera en Madrid, empezando por revisar lo que hay debajo.',
    secciones: [
      {
        titulo: 'Qué suelo te conviene',
        parrafos: ['Los cuatro tipos más pedidos tienen ventajas distintas:'],
        subsecciones: [
          {
            titulo: 'Laminado',
            texto: 'Económico y rápido de colocar, en flotante sobre una lámina. Va bien en salones y dormitorios, pero no le gusta el agua.',
          },
          {
            titulo: 'Vinílico',
            texto: 'Resistente al agua y cálido al pisar. Sirve también para cocinas y baños y se coloca sin obra.',
          },
          {
            titulo: 'Porcelánico',
            texto: 'El más duro y fácil de limpiar. Necesita una base bien nivelada y más tiempo de obra.',
          },
          {
            titulo: 'Tarima de madera',
            texto: 'La más natural y la que más se puede renovar con el tiempo, a cambio de más cuidado con la humedad.',
          },
        ],
      },
      {
        titulo: 'La base y los remates',
        parrafos: [
          'Antes de colocar revisamos el suelo existente: si está nivelado, si hay baldosas sueltas y si se puede colocar encima o hay que levantarlo. También miramos las puertas, porque un suelo nuevo encima del viejo sube la altura y a veces hay que recortarlas.',
          'Al terminar se colocan el rodapié y los perfiles de transición entre estancias, que son lo que hace que el trabajo se vea acabado.',
        ],
      },
      {
        titulo: 'Sin dejar la casa',
        parrafos: [
          'Los suelos flotantes se pueden colocar por estancias, moviendo los muebles de una habitación a otra, así que normalmente puedes seguir viviendo en casa. Con porcelánico hay más polvo y tiempos de secado, y lo planificamos contigo en la visita, que es sin compromiso.',
        ],
      },
      {
        titulo: 'Qué incluye el presupuesto',
        parrafos: [
          'El presupuesto de un suelo no es solo el precio por metro del material. Separa la retirada del suelo antiguo si hace falta, la preparación o nivelación de la base, la colocación, el rodapié, los perfiles de transición y el ajuste de puertas. Así puedes comparar con criterio y saber qué cambia si eliges otro material.',
          'Para calcular los metros, medimos cada estancia en la visita, que es sin compromiso. Siempre se cuenta un pequeño margen de material para cortes y para guardar alguna pieza de repuesto.',
        ],
      },
      {
        titulo: 'Cómo preparar la casa',
        parrafos: [
          'Antes de empezar conviene vaciar las estancias o, al menos, juntar los muebles en una parte de la habitación. Si el suelo es flotante, trabajamos estancia por estancia y vamos moviendo los muebles. Con porcelánico hay que contar con más polvo y con unos días en los que no se puede pisar mientras fragua el adhesivo, así que lo organizamos contigo para que sepas qué zonas quedan libres cada día.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta cambiar el suelo?',
        respuesta:
          'Colocado, el suelo laminado cuesta 25–45 €/m², el vinílico 30–55 €/m², el porcelánico 45–80 €/m² y la tarima de madera 55–95 €/m², IVA incluido.',
      },
      {
        pregunta: '¿Cuánto se tarda?',
        respuesta:
          'Un laminado o un vinílico se colocan en 2–4 días; un porcelánico lleva 1–2 semanas y una tarima de madera, alrededor de 1 semana.',
      },
      {
        pregunta: '¿Se puede poner encima del suelo viejo?',
        respuesta:
          'Muchas veces sí, sobre todo con suelos flotantes, si el suelo antiguo está firme y nivelado. Hay que comprobar la altura de las puertas y de los encuentros con otras estancias.',
      },
    ],
    formulario: 'Instalación de suelos',
    imagen: '/images/sala-vacia.webp',
    imagenAlt: 'Habitación vacía con suelo nuevo instalado',
    relacionadas: ['pintores-madrid', 'reformas-integrales-madrid', 'alicatados-madrid', 'suelo-laminado-vinilico-o-porcelanico', 'precios'],
  }),

  /* ---------------------------- VENTANAS ---------------------------- */
  servicio({
    path: 'cambiar-ventanas-madrid',
    etiqueta: 'Cambiar ventanas',
    title: 'Cambiar ventanas en Madrid | ObraLocal',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Ventanas de aluminio con rotura de puente térmico.`,
    resumen: 'Cambio de ventanas por aluminio con rotura de puente térmico, colocadas y rematadas.',
    h1: { antes: 'Cambiar', resaltado: 'ventanas', despues: 'en Madrid' },
    puntos: ['Aluminio con rotura de puente', 'Medición en la visita', 'Colocación y remates', 'Una sola persona de contacto'],
    intro:
      'Unas ventanas viejas dejan pasar el frío, el calor y el ruido de la calle, y a menudo son por donde más energía se escapa de un piso. Cambiarlas por ventanas de aluminio con rotura de puente térmico mejora el confort desde el primer día. Medimos, sustituimos y rematamos las ventanas de tu vivienda en Madrid.',
    secciones: [
      {
        titulo: 'Qué es la rotura de puente térmico',
        parrafos: [
          'El aluminio conduce muy bien el calor. Una ventana de aluminio sin más transmite el frío de fuera hacia dentro a través del marco. La rotura de puente térmico es una pieza aislante que separa la parte exterior del marco de la interior y corta ese paso. Junto con un buen doble acristalamiento, es lo que marca la diferencia.',
        ],
      },
      {
        titulo: 'Cómo se cambia una ventana',
        parrafos: ['El trabajo tiene estas fases:'],
        lista: [
          'Medir cada hueco en la visita, que es sin compromiso.',
          'Fabricar las ventanas a medida, con el modelo y el acristalamiento elegidos.',
          'Retirar la ventana antigua con cuidado de no dañar la pared.',
          'Colocar y sellar la nueva, y rematar el encuentro con la pared por dentro y por fuera.',
        ],
      },
      {
        titulo: 'Ventanas y comunidad de vecinos',
        parrafos: [
          'Las ventanas forman parte de la fachada. La Ley de Propiedad Horizontal impide alterar la configuración o el estado exterior del edificio sin el acuerdo de la comunidad, y obliga a comunicar antes las obras a quien la represente. Si cambias el color, el material o la forma de abrir respecto al resto del edificio, consúltalo con tu comunidad; y si el edificio está protegido, también con el ayuntamiento.',
        ],
      },
      {
        titulo: 'Presupuesto detallado',
        parrafos: [
          'El presupuesto indica cada ventana con sus medidas, el modelo, el acristalamiento y la colocación, para que puedas comparar con criterio. Si la reforma incluye más trabajos, como pintura o persianas, se separan por partidas.',
        ],
      },
      {
        titulo: 'Tipos de apertura',
        parrafos: ['La forma de abrir cambia el uso, el espacio que ocupa la ventana y el aislamiento:'],
        lista: [
          'Abatible: la hoja gira hacia dentro. Es la que mejor cierra y aísla.',
          'Oscilobatiente: además de abrirse, se inclina por arriba para ventilar sin abrir del todo.',
          'Corredera: las hojas se deslizan. No ocupa espacio al abrir, pero aísla algo menos.',
        ],
      },
      {
        titulo: 'Persianas y cajón',
        parrafos: [
          'Al cambiar las ventanas conviene revisar también la persiana y el cajón donde se enrolla, porque un cajón sin aislar deja pasar el frío aunque la ventana sea nueva. Si la persiana funciona bien se puede mantener; si está rota o quieres motorizarla, es el mejor momento para hacerlo, y va en una partida aparte del presupuesto.',
          'Durante el cambio retiramos la ventana antigua con cuidado y protegemos el suelo y los muebles cercanos. Lo normal es cambiar varias ventanas en el mismo día, de forma que la casa no se quede abierta por la noche.',
        ],
      },
      {
        titulo: 'El cristal también cuenta',
        parrafos: [
          'Una ventana aísla tanto como su parte más débil. Por eso el marco con rotura de puente térmico va acompañado de un doble acristalamiento con cámara de aire entre los dos vidrios. Si la ventana da a una calle con mucho tráfico, se puede elegir un vidrio pensado para reducir el ruido. Te explicamos las opciones en la visita y el presupuesto indica el acristalamiento de cada ventana.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto cuesta cambiar una ventana?',
        respuesta:
          'Una ventana de aluminio con rotura de puente térmico, colocada, cuesta 400–800 €, IVA incluido. El precio depende de la medida, del tipo de apertura y del acristalamiento.',
      },
      {
        pregunta: '¿Necesito permiso de la comunidad?',
        respuesta:
          'Hay que comunicar la obra a la comunidad. Si las ventanas nuevas cambian el aspecto de la fachada, necesitas su acuerdo, como recoge la Ley de Propiedad Horizontal.',
      },
      {
        pregunta: '¿Se hace mucha obra?',
        respuesta:
          'Normalmente no: se retira la ventana antigua, se coloca la nueva y se rematan los encuentros. Lo valoramos hueco por hueco en la visita.',
      },
    ],
    formulario: 'Cambiar ventanas',
    imagen: '/images/edificio-ladrillo-madrid.webp',
    imagenAlt: 'Fachada de un edificio de ladrillo de Madrid con sus ventanas',
    relacionadas: ['reformas-integrales-madrid', 'reforma-piso-completo-madrid', 'pintores-madrid', 'precios'],
  }),
];
