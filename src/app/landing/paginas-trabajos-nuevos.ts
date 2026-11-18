import { NOTA_GOOGLE } from '../datos/contacto';
import { Faq, PaginaSeo, SeccionPagina } from './pagina-seo';

/** Trabajos concretos añadidos a «Trabajos más pedidos»: cocina, baño y fachadas. */
interface DatosTrabajo {
  path: string;
  padre: string;
  etiqueta: string;
  title: string;
  frase: string;
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

function trabajo(d: DatosTrabajo): PaginaSeo {
  return {
    path: d.path,
    tipo: 'trabajo',
    padre: d.padre,
    title: d.title,
    // La description definitiva la escribe scripts/meta-seo.mjs con NOTA_GOOGLE y las ventajas.
    description: `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. ${d.frase}`,
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

export const TRABAJOS_NUEVOS: PaginaSeo[] = [
  /* ---------------------------- COCINA ABIERTA ---------------------------- */
  trabajo({
    path: 'abrir-cocina-al-salon-madrid',
    padre: 'reforma-cocinas-madrid',
    etiqueta: 'Abrir la cocina al salón',
    title: 'Abrir la cocina al salón en Madrid | ObraLocal',
    frase: 'Cocina abierta al salón, bien resuelta.',
    resumen: 'Cocina abierta o semiabierta: muros, instalaciones, humos y cómo se organiza la obra.',
    h1: { antes: 'Abrir la', resaltado: 'cocina al salón', despues: 'en Madrid' },
    puntos: ['Comprobar el muro', 'Cocina abierta o semiabierta', 'Humos y olores', 'Instalaciones a la nueva medida'],
    intro:
      'Unir la cocina y el salón es una de las reformas que más cambian una casa: entra más luz, se gana sitio y quien cocina deja de estar aislado. Pero no siempre se puede tirar el tabique sin más, y una cocina abierta pide resolver bien los humos, el ruido y el orden. Te explicamos qué comprobar y cómo lo hacemos.',
    secciones: [
      {
        titulo: 'Lo primero: qué hay en esa pared',
        parrafos: [
          'Antes de nada hay que saber si la pared entre la cocina y el salón es un tabique o un muro de carga. Un tabique se puede retirar sin afectar al edificio; un muro de carga sostiene forjados y no se toca sin un estudio técnico y un refuerzo, y la obra necesita otro tipo de trámite. En pisos antiguos es más habitual encontrar muros de carga en el interior que en edificios recientes.',
          'También conviene mirar qué pasa por esa pared: a veces hay tuberías, bajantes o la instalación eléctrica de la cocina, que habrá que desviar.',
        ],
      },
      {
        titulo: 'Abierta del todo o semiabierta',
        parrafos: ['No hay una única forma de hacerlo. Las opciones más habituales son:'],
        lista: [
          'Cocina abierta del todo, con una isla o una barra que hace de separación.',
          'Hueco amplio en la pared, que une los espacios sin quitar el muro entero.',
          'Tabique acristalado o puerta corredera de cristal, que deja pasar la luz y aísla de olores y ruido cuando hace falta.',
        ],
      },
      {
        titulo: 'Humos, olores y ruido',
        parrafos: [
          'En una cocina abierta la campana importa más que nunca. Si hay salida de humos, se aprovecha; si no, una campana de recirculación con buenos filtros es la solución habitual. Los electrodomésticos silenciosos y una zona de fregado bien situada también ayudan a que la cocina no invada el salón.',
        ],
      },
      {
        titulo: 'Cómo se organiza la obra',
        parrafos: [
          'El orden es: comprobar la pared, retirar el tabique o abrir el hueco, adaptar las instalaciones a la nueva distribución, rehacer suelos para que la cocina y el salón queden continuos, montar los muebles y pintar. Si el suelo del salón y el de la cocina son distintos, es el momento de unificarlos. En la visita, que es sin compromiso, lo vemos contigo y te damos un presupuesto detallado.',
        ],
      },
      {
        titulo: 'Un suelo continuo',
        parrafos: [
          'Al unir la cocina y el salón, el suelo es lo que más ayuda a que parezcan un solo espacio. Si cada estancia tenía un suelo distinto, lo habitual es poner uno continuo en las dos: el vinílico y el porcelánico aguantan bien el agua de la cocina y quedan igual de bien en el salón. Si prefieres mantener el suelo del salón, se puede marcar la zona de cocina con otro material, pero conviene que la junta entre los dos quede limpia y a la misma altura.',
        ],
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta abrir la cocina al salón?', respuesta: 'Depende sobre todo de la pared y de si se reforma también la cocina. Una cocina completa de 8 a 12 m² cuesta 8.000–18.000 €, sin electrodomésticos e IVA incluido; quitar el tabique y rehacer suelo y pintura se detallan aparte en el presupuesto.' },
      { pregunta: '¿Necesito permiso para tirar un tabique?', respuesta: 'Si es un tabique dentro de tu vivienda, normalmente va por declaración responsable en Madrid capital. Si es un muro de carga, hace falta un técnico y otro tipo de trámite. Hay que comunicar la obra a la comunidad.' },
      { pregunta: '¿Y si es un muro de carga?', respuesta: 'Se puede abrir un hueco con un refuerzo calculado por un técnico, o elegir una solución semiabierta que no toque la estructura.' },
      { pregunta: '¿La cocina abierta huele en todo el salón?', respuesta: 'Con una buena campana y el hábito de usarla, mucho menos de lo que se piensa. Si te preocupa, un cerramiento de cristal es un buen término medio.' },
      {
        pregunta: '¿Cuánto dura la obra?',
        respuesta: 'Si además se reforma la cocina, una cocina completa se hace en 3–4 semanas. Si solo se quita el tabique y se rematan suelo y pintura, es bastante menos; te lo concretamos en el presupuesto.',
      },
    ],
    formulario: 'Reforma de cocinas',
    imagen: '/images/cocina-abierta.webp',
    imagenAlt: 'Cocina abierta al salón con isla',
    relacionadas: ['reforma-cocinas-madrid', 'cuanto-cuesta-reformar-una-cocina-en-madrid', 'instalacion-suelos-madrid', 'precios'],
  }),

  /* ---------------------------- AZULEJOS COCINA ---------------------------- */
  trabajo({
    path: 'cambiar-azulejos-cocina-madrid',
    padre: 'reforma-cocinas-madrid',
    etiqueta: 'Cambiar azulejos de la cocina',
    title: 'Cambiar azulejos de la cocina en Madrid | ObraLocal',
    frase: 'Azulejos nuevos sin cambiar los muebles.',
    resumen: 'Renovar el alicatado de la cocina, con o sin cambiar muebles: opciones y cómo se hace.',
    h1: { antes: 'Cambiar los', resaltado: 'azulejos de la cocina', despues: '' },
    puntos: ['Alicatado de 35–60 €/m²', 'Con o sin cambiar muebles', 'Pared de trabajo', 'Juntas fáciles de limpiar'],
    intro:
      'Los azulejos son lo que más envejece una cocina: se pasan de moda, las juntas se oscurecen con la grasa y alguna pieza acaba rota. Muchas veces los muebles están bien y basta con renovar el alicatado para que la cocina parezca otra. Te contamos qué opciones hay y cómo se hace sin desmontar media cocina.',
    secciones: [
      {
        titulo: 'Con los muebles puestos o en una reforma completa',
        parrafos: [
          'Si los muebles se quedan, el trabajo se centra en la pared entre la encimera y los muebles altos, que es donde salpica el agua y la grasa. Se retira el azulejo antiguo con cuidado de no dañar la encimera, se prepara la pared y se coloca el nuevo, rematando bien los encuentros con los muebles y los enchufes.',
          'Si vas a cambiar también los muebles, conviene alicatar después de tener las medidas definitivas, para que los cortes queden ocultos y las tomas de luz y agua estén en su sitio.',
        ],
      },
      {
        titulo: 'Quitar el azulejo o colocar encima',
        parrafos: [
          'A veces se puede colocar el azulejo nuevo encima del antiguo, si este está firme y plano: se evita la demolición y se ensucia menos. A cambio se gana grosor, y hay que ajustar los enchufes y los remates con los muebles. Si el azulejo viejo suena hueco o hay que tocar instalaciones, lo correcto es retirarlo.',
        ],
      },
      {
        titulo: 'Qué azulejo elegir para una cocina',
        parrafos: ['Algunas pautas que funcionan:'],
        lista: [
          'Superficie lisa y fácil de limpiar en la zona de la placa.',
          'Juntas finas y de un color que no marque la grasa.',
          'Formatos que encajen con la altura entre encimera y muebles, para evitar cortes feos.',
          'Si buscas un cambio rápido, piezas grandes reducen las juntas.',
        ],
      },
      {
        titulo: 'Cuánto tarda',
        parrafos: [
          'Renovar el alicatado de la pared de trabajo de una cocina se suele hacer en pocos días, según los metros y si hay que retirar el azulejo antiguo. En la visita medimos la superficie y te damos un presupuesto detallado, con la pieza que elijas.',
        ],
      },
      {
        titulo: 'Los remates que marcan la diferencia',
        parrafos: [
          'Lo que distingue un alicatado bien hecho son los remates: el encuentro con la encimera, que tiene que quedar sellado para que no entre agua; los cortes alrededor de enchufes e interruptores, que deben quedar ajustados al embellecedor; y las esquinas, que se rematan con perfil o con inglete según la pieza.',
          'Si la encimera se queda, se protege durante todo el trabajo y se sella de nuevo el encuentro con la pared al terminar. Si se cambia, se alicata después de montarla, para que el azulejo apoye sobre ella y la junta quede perfecta.',
        ],
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta cambiar los azulejos de la cocina?', respuesta: 'El alicatado cuesta 35–60 €/m², IVA incluido. Si se hace dentro de una reforma completa, una cocina de 8 a 12 m² cuesta 8.000–18.000 €, sin electrodomésticos.' },
      { pregunta: '¿Hay que quitar los muebles?', respuesta: 'No siempre. Si solo se renueva la pared de trabajo, se puede hacer con los muebles montados, protegiendo la encimera.' },
      { pregunta: '¿Puedo poner azulejo encima del viejo?', respuesta: 'Sí, si el antiguo está firme y plano. Si suena hueco o hay que cambiar tuberías, se retira.' },
      { pregunta: '¿Puedo usar la cocina durante el trabajo?', respuesta: 'Con limitaciones: unos días no podrás usar la zona de trabajo mientras se coloca y se rejunta.' },
      {
        pregunta: '¿Qué pasa con los enchufes de la pared?',
        respuesta: 'Se desmontan los embellecedores, se alicata alrededor y se vuelven a montar. Si quieres añadir enchufes para pequeños electrodomésticos, es el mejor momento.',
      },
      {
        pregunta: '¿Conviene cambiar también el suelo?',
        respuesta: 'Si el suelo está viejo, sí: se hace en la misma obra y quedan coordinados. Si está bien, se protege y se mantiene.',
      },
      {
        pregunta: '¿Qué juntas ensucian menos?',
        respuesta: 'Las juntas finas y de un color intermedio, que no marque la grasa ni la suciedad. Existen rejuntados más resistentes a las manchas, pensados para cocinas.',
      },
    ],
    formulario: 'Reforma de cocinas',
    imagen: '/images/reforma-cocina-ejemplo.webp',
    imagenAlt: 'Pared de cocina con alicatado nuevo',
    relacionadas: ['reforma-cocinas-madrid', 'alicatados-madrid', 'abrir-cocina-al-salon-madrid', 'precios'],
  }),

  /* ---------------------------- BAÑO PEQUEÑO ---------------------------- */
  trabajo({
    path: 'reformar-bano-pequeno-madrid',
    padre: 'reforma-banos-madrid',
    etiqueta: 'Reformar un baño pequeño',
    title: 'Reformar un baño pequeño en Madrid | ObraLocal',
    frase: 'Más espacio y comodidad en tu baño pequeño.',
    resumen: 'Ideas y obra para ganar espacio en baños pequeños: ducha, sanitarios suspendidos, luz.',
    h1: { antes: 'Reformar un', resaltado: 'baño pequeño', despues: 'en Madrid' },
    puntos: ['Ducha en lugar de bañera', 'Sanitarios suspendidos', 'Puertas correderas', 'Luz y colores claros'],
    intro:
      'En muchos pisos de Madrid el baño tiene tres o cuatro metros y hay que encajar en ellos ducha, inodoro, lavabo y algo de almacenaje. Bien reformado, un baño pequeño puede ser cómodo y parecer más grande. La clave está en unas pocas decisiones de distribución y de materiales.',
    secciones: [
      {
        titulo: 'Las decisiones que más espacio ganan',
        parrafos: ['Estas son las que más se notan en un baño pequeño:'],
        lista: [
          'Cambiar la bañera por un plato de ducha a ras de suelo con mampara fija.',
          'Inodoro y lavabo suspendidos: dejan el suelo libre y el baño se ve más amplio.',
          'Cisterna empotrada en la pared, que ahorra fondo.',
          'Mueble de lavabo de poco fondo o con cajones en lugar de puertas.',
          'Puerta corredera o que abra hacia fuera, si la distribución lo permite.',
        ],
      },
      {
        titulo: 'Luz, color y formato',
        parrafos: [
          'Los tonos claros y las piezas grandes, con pocas juntas, hacen que el baño parezca mayor. Un espejo amplio duplica visualmente el espacio y la luz. Si el baño no tiene ventana, una buena iluminación en el techo y junto al espejo, y un extractor eficaz contra la condensación, son imprescindibles.',
        ],
      },
      {
        titulo: 'Lo que limita: la bajante',
        parrafos: [
          'En un baño pequeño apetece mover el inodoro, pero tiene que llegar a la bajante con pendiente. En la visita vemos dónde está y qué margen hay, y te proponemos la distribución que mejor aprovecha los metros sin complicar la obra.',
        ],
      },
      {
        titulo: 'Cómo se hace',
        parrafos: [
          'La obra es la de un baño completo: retirar lo antiguo, renovar la fontanería, alicatar, poner suelo y montar sanitarios, grifería, mampara y mueble. Se hace en 2–3 semanas. Si el baño está bien y solo molesta la bañera, cambiarla por un plato de ducha se hace en 1–2 días. Tienes una sola persona de contacto durante toda la obra.',
        ],
      },
      {
        titulo: 'Almacenaje sin ocupar sitio',
        parrafos: [
          'En un baño pequeño el almacenaje tiene que estar donde no estorbe. Las hornacinas empotradas en la pared de la ducha sustituyen a las repisas y no sobresalen. Un armario de espejo encima del lavabo guarda lo del día a día sin ocupar suelo. Y el hueco sobre el inodoro, a menudo desaprovechado, admite un mueble alto y estrecho o unas baldas.',
          'Si la cisterna se empotra, el bastidor deja un pequeño murete que sirve de repisa. Son detalles que se deciden antes de alicatar, porque cambian dónde van las piezas y los cortes.',
        ],
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta reformar un baño pequeño?', respuesta: 'Un baño completo de 4 a 6 m² cuesta 5.500–10.000 € en calidad media, IVA incluido; en básica parte de 5.000 €. Solo cambiar la bañera por un plato de ducha cuesta 1.000–2.200 €.' },
      { pregunta: '¿Ducha o bañera en un baño pequeño?', respuesta: 'En la mayoría de los casos, ducha: ocupa menos, es más cómoda de usar y deja sitio para almacenaje.' },
      { pregunta: '¿Los sanitarios suspendidos aguantan?', respuesta: 'Sí. Se fijan a un bastidor anclado a la pared o al suelo, pensado para soportar el uso diario.' },
      { pregunta: '¿Cuánto tarda?', respuesta: 'Un baño completo, 2–3 semanas. Cambiar la bañera por un plato, 1–2 días.' },
      {
        pregunta: '¿Merece la pena el plato de ducha a ras de suelo?',
        respuesta: 'En un baño pequeño, sí: sin escalón el suelo parece continuo y el baño se ve más grande, y además es más cómodo y seguro. Necesita una pendiente bien hecha hacia el desagüe.',
      },
      {
        pregunta: '¿Puedo poner una mampara fija?',
        respuesta: 'Sí, y en baños pequeños es lo más práctico: no tiene puertas que abran y ocupa poco. Se elige según el ancho de la ducha.',
      },
      {
        pregunta: '¿Qué colores hacen más grande un baño pequeño?',
        respuesta: 'Los claros y luminosos, en paredes y suelo, con pocas juntas. Un mismo material en suelo y paredes también ayuda a que el espacio parezca continuo.',
      },
    ],
    formulario: 'Reforma de baño',
    imagen: '/images/bano-moderno.webp',
    imagenAlt: 'Baño pequeño reformado con ducha y lavabo suspendido',
    relacionadas: ['reforma-banos-madrid', 'cambiar-banera-por-plato-ducha-madrid', 'cuanto-cuesta-reformar-un-bano-en-madrid', 'precios'],
  }),

  /* ---------------------------- AZULEJOS BAÑO ---------------------------- */
  trabajo({
    path: 'cambiar-azulejos-bano-madrid',
    padre: 'reforma-banos-madrid',
    etiqueta: 'Cambiar azulejos del baño',
    title: 'Cambiar azulejos del baño en Madrid | ObraLocal',
    frase: 'Renovamos el alicatado y el suelo de tu baño.',
    resumen: 'Renovar el alicatado del baño: cuándo basta con eso y cuándo conviene ir más allá.',
    h1: { antes: 'Cambiar los', resaltado: 'azulejos del baño', despues: '' },
    puntos: ['Alicatado de 35–60 €/m²', 'Revisar tuberías detrás', 'Juntas y sellados', 'Con o sin cambiar sanitarios'],
    intro:
      'Cambiar los azulejos del baño es la forma de renovarlo sin una reforma completa cuando los sanitarios están bien. Pero detrás del alicatado están las tuberías, y abrir la pared es una oportunidad que conviene aprovechar. Te contamos cuándo basta con cambiar los azulejos y cuándo merece la pena ir un poco más allá.',
    secciones: [
      {
        titulo: 'Cuándo basta con cambiar los azulejos',
        parrafos: [
          'Si los sanitarios, la grifería y el plato o la bañera están en buen estado y no hay humedades, renovar el alicatado y el suelo cambia el baño por completo con menos obra. Es una buena opción cuando lo que molesta es el aspecto: azulejos pasados de moda, piezas rotas o juntas negras que ya no se limpian.',
        ],
      },
      {
        titulo: 'Cuándo conviene ir más allá',
        parrafos: [
          'Si las tuberías son antiguas o ha habido fugas, lo sensato es cambiarlas con la pared abierta: hacerlo después obligaría a romper el alicatado nuevo. Y si la bañera ya no te sirve, es el momento de cambiarla por un plato de ducha. En la visita lo revisamos y te decimos qué conviene en tu caso.',
        ],
      },
      {
        titulo: 'Cómo se hace',
        parrafos: ['El trabajo suele seguir este orden:'],
        lista: [
          'Proteger y, si hace falta, desmontar sanitarios y mueble.',
          'Retirar el azulejo antiguo o comprobar si se puede colocar encima.',
          'Revisar la pared y las tuberías y nivelar la superficie.',
          'Alicatar paredes y colocar el suelo.',
          'Rejuntar, sellar con silicona y volver a montar.',
        ],
      },
      {
        titulo: 'Elegir el alicatado del baño',
        parrafos: [
          'En la zona de ducha importan las juntas finas y bien selladas; fuera de ella hay más libertad. Una opción habitual es alicatar solo la zona húmeda y pintar el resto con pintura para baños, que abarata y aligera el resultado. Te enseñamos opciones en la visita y el presupuesto detalla la pieza elegida.',
        ],
      },
      {
        titulo: 'Juntas negras: limpiar o cambiar',
        parrafos: [
          'Muchas veces lo que hace viejo un baño no son los azulejos, sino las juntas oscurecidas por la humedad. Si los azulejos están bien, se pueden rascar las juntas y rehacerlas, y el baño gana mucho con un trabajo pequeño. Si hay piezas rotas, huecas o pasadas de moda, cambiar el alicatado tiene más sentido.',
          'Para que las juntas nuevas duren, conviene ventilar el baño después de ducharse y, si no tiene ventana, contar con un extractor eficaz.',
        ],
      },
      {
        titulo: 'El suelo del baño',
        parrafos: [
          'Si cambias los azulejos de las paredes, es buen momento para cambiar también el suelo, porque quedan coordinados y se hace todo en la misma obra. En la zona de ducha conviene un suelo antideslizante. Si el suelo está bien y no quieres levantarlo, se puede mantener y alicatar solo las paredes, protegiéndolo bien durante todo el trabajo.',
        ],
      },
    ],
    faqs: [
      { pregunta: '¿Cuánto cuesta cambiar los azulejos del baño?', respuesta: 'El alicatado cuesta 35–60 €/m², IVA incluido. Si se convierte en una reforma completa, un baño de 4 a 6 m² cuesta 5.500–10.000 € en calidad media.' },
      { pregunta: '¿Se puede alicatar encima del azulejo viejo?', respuesta: 'Sí, si está firme y plano. Si suena hueco o hay que cambiar tuberías, se retira.' },
      { pregunta: '¿Hay que quitar los sanitarios?', respuesta: 'Normalmente se desmontan para alicatar bien detrás y se vuelven a montar al terminar.' },
      { pregunta: '¿Cuánto tiempo estaré sin baño?', respuesta: 'Depende de los metros y de si se retira el azulejo antiguo; suelen ser pocos días. Te lo concretamos en el presupuesto.' },
      {
        pregunta: '¿Puedo cambiar solo los azulejos de la ducha?',
        respuesta: 'Sí. Es una opción habitual cuando el resto del baño está bien: se alicata la zona húmeda y se pintan las demás paredes con pintura para baños.',
      },
      {
        pregunta: '¿Qué hago si aparece humedad detrás del azulejo?',
        respuesta: 'Se localiza la causa, se repara y se deja secar la pared antes de alicatar. Te lo explicamos antes de hacer nada.',
      },
    ],
    formulario: 'Reforma de baño',
    imagen: '/images/reforma-bano-ejemplo.webp',
    imagenAlt: 'Baño con azulejos nuevos en la zona de ducha',
    relacionadas: ['reforma-banos-madrid', 'alicatados-madrid', 'reformar-bano-pequeno-madrid', 'precios'],
  }),

  /* ---------------------------- FACHADAS ---------------------------- */
  trabajo({
    path: 'rehabilitacion-fachadas-madrid',
    padre: 'servicios',
    etiqueta: 'Rehabilitación de fachadas',
    title: 'Rehabilitación de fachadas en Madrid | ObraLocal',
    frase: 'Fachadas reparadas, limpias y pintadas.',
    resumen: 'Reparación, limpieza y pintura de fachadas para comunidades de vecinos.',
    h1: { antes: 'Rehabilitación de', resaltado: 'fachadas', despues: 'en Madrid' },
    puntos: ['Grietas y desconchones', 'Limpieza y pintura', 'Acuerdo de la comunidad', 'Andamio y vía pública'],
    intro:
      'La fachada protege el edificio del agua y del frío, y cuando se deteriora se nota dentro: humedades, grietas, trozos que se desprenden. Rehabilitarla a tiempo evita daños mayores y revaloriza el edificio. Es una obra de la comunidad de vecinos, con sus propios pasos, y te explicamos cuáles son.',
    secciones: [
      {
        titulo: 'Qué suele incluir',
        parrafos: ['Según el estado de la fachada, la obra combina varios de estos trabajos:'],
        lista: [
          'Revisión y saneado de grietas, fisuras y zonas que se desprenden.',
          'Reparación de cornisas, aleros y remates.',
          'Limpieza de la fachada según el material.',
          'Pintura o revestimiento de protección.',
          'Revisión de bajantes y del encuentro con las ventanas y balcones.',
        ],
      },
      {
        titulo: 'Una obra de la comunidad',
        parrafos: [
          'La fachada es un elemento común del edificio. La Ley de Propiedad Horizontal impide a cada vecino alterar la configuración o el estado exterior por su cuenta, así que la rehabilitación la decide y la contrata la comunidad, normalmente a través de la junta de propietarios y el administrador. Nosotros podemos visitar el edificio y preparar un presupuesto detallado para presentarlo en la junta.',
        ],
      },
      {
        titulo: 'Trámite, andamio y vía pública',
        parrafos: [
          'En Madrid capital, el trámite urbanístico lo fija la Ordenanza 6/2022: con carácter general la obra va por declaración responsable, y necesita licencia en los casos de su anexo I, como las actuaciones sobre edificios catalogados que afecten a elementos protegidos. Además, el andamio o la plataforma ocupan la vía pública y necesitan autorización municipal. Fuera de Madrid capital, lo fija cada ayuntamiento.',
        ],
      },
      {
        titulo: 'Ayudas para fachadas',
        parrafos: [
          'El Plan Rehabilita 2026 del Ayuntamiento de Madrid incluye líneas de conservación y, como novedad, de embellecimiento urbano, que contempla actuaciones en fachadas como retirar cableado visto o equipos de climatización. Te explicamos lo que hemos comprobado en nuestra página de ayudas; antes de decidir, revisa la convocatoria vigente en la sede del Ayuntamiento.',
        ],
      },
      {
        titulo: 'Señales de que la fachada necesita una revisión',
        parrafos: [
          'Conviene que alguien revise la fachada si aparece alguna de estas señales:',
        ],
        lista: [
          'Grietas o fisuras que crecen con el tiempo.',
          'Desconchones o trozos de revestimiento que se desprenden.',
          'Manchas de humedad en las paredes interiores que dan a la fachada.',
          'Cornisas o aleros con piezas sueltas.',
          'Óxido en barandillas o en los anclajes de los balcones.',
        ],
      },
    ],
    faqs: [
      { pregunta: '¿Quién paga la rehabilitación de la fachada?', respuesta: 'La comunidad de propietarios, porque la fachada es un elemento común. Se aprueba en junta y se reparte según lo que establezcan los estatutos y la ley.' },
      { pregunta: '¿Necesita licencia?', respuesta: 'En Madrid capital, con carácter general va por declaración responsable; si el edificio está catalogado y se tocan elementos protegidos, hace falta licencia. El andamio necesita autorización para ocupar la vía pública.' },
      { pregunta: '¿Hay ayudas?', respuesta: 'El Plan Rehabilita del Ayuntamiento de Madrid incluye líneas de conservación y embellecimiento de edificios residenciales. Consulta la convocatoria vigente.' },
      { pregunta: '¿Podéis preparar un presupuesto para la junta?', respuesta: 'Sí. Visitamos el edificio sin compromiso y preparamos un presupuesto detallado por partidas para que la comunidad pueda decidir.' },
      {
        pregunta: '¿Molesta la obra a los vecinos?',
        respuesta: 'Se trabaja desde fuera, con andamio o plataforma, así que dentro de las viviendas apenas se nota. Hay que contar con ruido en horario de obra y con el andamio delante de las ventanas unos días.',
      },
      {
        pregunta: '¿Cómo se aprueba en la comunidad?',
        respuesta: 'En junta de propietarios, con el presupuesto delante. Por eso preparamos un presupuesto por partidas que el administrador pueda presentar.',
      },
      {
        pregunta: '¿Qué pasa si no se arregla a tiempo?',
        respuesta: 'Las grietas dejan entrar agua, que acaba en humedades dentro de las viviendas, y las piezas que se desprenden son un riesgo para quien pasa por la calle. Cuanto antes se revisa, más sencilla suele ser la reparación y menos molestias causa a los vecinos.',
      },
    ],
    formulario: 'Rehabilitación de fachadas',
    imagen: '/images/edificio-clasico-madrid.webp',
    imagenAlt: 'Fachada de un edificio clásico de viviendas en Madrid',
    relacionadas: ['ayudas-reformas-madrid', 'licencia-obra-madrid', 'tratamiento-humedades-madrid', 'servicios'],
  }),
];
