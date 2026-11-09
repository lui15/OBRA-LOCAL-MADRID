import { Faq, PaginaSeo, SeccionPagina } from './pagina-seo';

/*
 * Servicios propuestos y aún sin confirmar. Son borradores: se ven en local, pero no se
 * prerenderizan, no van al sitemap ni a los menús y son noindex. Para publicar uno, confirma que
 * lo hacéis, rellena sus PENDIENTE y quita la línea «borrador».
 */

interface DatosServicio {
  path: string;
  nombre: string;
  title: string;
  description: string;
  resumen: string;
  h1: [string, string, string];
  intro: string;
  puntos: string[];
  imagen: string;
  imagenAlt: string;
  secciones: SeccionPagina[];
  faqs: Faq[];
  relacionadas: string[];
}

function servicio(d: DatosServicio): PaginaSeo {
  return {
    path: d.path,
    tipo: 'servicio',
    padre: 'servicios',
    borrador: `PENDIENTE("¿hacemos ${d.nombre.toLowerCase()}? Confirmar antes de publicar")`,
    title: d.title,
    description: d.description,
    etiqueta: d.nombre,
    resumen: d.resumen,
    h1: { antes: d.h1[0], resaltado: d.h1[1], despues: d.h1[2] },
    puntos: d.puntos,
    whatsapp: `Hola, quiero pedir presupuesto de ${d.nombre.toLowerCase()}`,
    kicker: d.nombre.toUpperCase(),
    intro: d.intro,
    secciones: [
      ...d.secciones,
      {
        titulo: 'Precios orientativos',
        parrafos: [`PENDIENTE("rangos de precio de ${d.nombre.toLowerCase()}")`],
      },
    ],
    faqs: d.faqs,
    servicio: { nombre: d.nombre, descripcion: d.resumen },
    servicioFormulario: '',
    imagen: d.imagen,
    imagenAlt: d.imagenAlt,
    relacionadas: d.relacionadas,
  };
}

export const SERVICIOS_BORRADOR: PaginaSeo[] = [
  servicio({
    path: 'reforma-piso-antiguo-madrid',
    nombre: 'Reforma de piso antiguo',
    title: 'Reforma de piso antiguo en Madrid | ObraLocal Madrid',
    description:
      'Reforma de pisos antiguos en Madrid: instalaciones de plomo, forjados de madera, humedades y elementos originales que conviene conservar.',
    resumen: 'Pisos con décadas: instalaciones, estructura y elementos que merece la pena conservar.',
    h1: ['Reforma de', 'piso antiguo', 'en Madrid'],
    intro:
      'Un piso antiguo tiene encanto y también sorpresas. Instalaciones de plomo o sin toma de tierra, forjados de madera, paredes irregulares y humedades ocultas son habituales en fincas con muchas décadas. Reformarlo bien exige diagnosticar antes de presupuestar.',
    puntos: ['Diagnóstico previo', 'Instalaciones nuevas', 'Elementos originales', 'Edificios protegidos'],
    imagen: '/images/piso-en-obra.webp',
    imagenAlt: 'Piso antiguo durante la reforma',
    secciones: [
      {
        titulo: 'Qué revisar antes de reformar',
        parrafos: ['En un piso antiguo, estas comprobaciones condicionan todo lo demás.'],
        lista: [
          'Estado de forjados y muros',
          'Tuberías y bajantes, por si hay plomo o fibrocemento',
          'Instalación eléctrica y toma de tierra',
          'Humedades en patios, fachada y planta baja',
          'Si el edificio tiene algún nivel de protección',
        ],
      },
      {
        titulo: 'Conservar lo que tiene valor',
        parrafos: [
          'Suelos hidráulicos o de madera, puertas de época, molduras y carpinterías antiguas son difíciles de reproducir. Decide qué se conserva antes de demoler y cómo se protegerá durante la obra.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué pasa si aparece fibrocemento al demoler?',
        respuesta:
          'Su manipulación y retirada debe hacerla una empresa inscrita en el registro de empresas con riesgo de amianto.',
      },
    ],
    relacionadas: ['reformas-integrales-madrid', 'reforma-piso-completo-madrid', 'licencia-obra-madrid'],
  }),
  servicio({
    path: 'fontaneria-madrid',
    nombre: 'Fontanería',
    title: 'Fontanería en Madrid: reformas y averías | ObraLocal Madrid',
    description:
      'Fontanería en Madrid: renovación de tuberías y desagües, tomas para cocina y baño y cambio de bajantes dentro de la vivienda.',
    resumen: 'Tuberías, desagües y tomas de agua nuevas para cocina y baño.',
    h1: ['', 'Fontanería', 'en Madrid'],
    intro:
      'La fontanería es la parte de la reforma que no se ve y que más problemas da si se hace mal. Renovar tuberías antiguas, rehacer desagües con la pendiente correcta y dejar las tomas donde las necesitas es la base de cualquier baño o cocina.',
    puntos: ['Tuberías nuevas', 'Desagües con pendiente', 'Tomas para cocina y baño', 'Coordinada con la obra'],
    imagen: '/images/instalaciones-vistas.webp',
    imagenAlt: 'Tuberías nuevas antes de cerrar la pared',
    secciones: [
      {
        titulo: 'Qué incluye',
        parrafos: ['PENDIENTE("trabajos de fontanería que hacéis: renovación, averías, calentadores…")'],
      },
      {
        titulo: 'Cuándo renovar las tuberías',
        parrafos: [
          'Si el piso tiene tuberías de plomo o de hierro, presión baja, manchas de óxido o fugas frecuentes, lo razonable es renovarlas al hacer la reforma, antes de cerrar paredes y suelos.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Se pueden cambiar las tuberías sin levantar todo el piso?',
        respuesta:
          'Depende de por dónde discurran. A veces se pueden llevar por falsos techos o trasdosados; otras hay que abrir rozas. Hay que verlo en la vivienda.',
      },
    ],
    relacionadas: ['reforma-banos-madrid', 'reforma-cocinas-madrid', 'reformas-integrales-madrid'],
  }),
  servicio({
    path: 'electricidad-boletin-madrid',
    nombre: 'Electricidad y boletín',
    title: 'Electricistas en Madrid: instalación y boletín | ObraLocal Madrid',
    description:
      'Instalación eléctrica en Madrid: renovación del cuadro y los circuitos, nuevos puntos de luz y certificado de la instalación.',
    resumen: 'Cuadro, circuitos y puntos de luz nuevos, con su certificado.',
    h1: ['Electricidad y', 'boletín', 'en Madrid'],
    intro:
      'Muchos pisos de Madrid tienen instalaciones eléctricas que no están pensadas para la cocina de inducción, el aire acondicionado y la cantidad de aparatos de hoy. Renovarla durante la reforma es mucho más sencillo que hacerlo después.',
    puntos: ['Cuadro nuevo', 'Circuitos separados', 'Puntos de luz', 'Certificado de la instalación'],
    imagen: '/images/instalaciones-vistas.webp',
    imagenAlt: 'Cableado nuevo durante la reforma',
    secciones: [
      {
        titulo: 'Señales de que tu instalación necesita renovarse',
        parrafos: ['Si reconoces alguna de estas señales, conviene revisarla.'],
        lista: [
          'Saltan las protecciones con frecuencia',
          'Enchufes sin toma de tierra',
          'Pocos enchufes y muchas regletas',
          'Cuadro antiguo sin diferencial',
        ],
      },
      {
        titulo: 'El boletín',
        parrafos: [
          'Al renovar la instalación, debe documentarse con el certificado que corresponda, emitido por un instalador autorizado. PENDIENTE("confirmar si emitís el certificado de instalación eléctrica y con qué instalador")',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Necesito boletín para cambiar de compañía o subir potencia?',
        respuesta:
          'En muchos casos la distribuidora lo pide. Depende de la antigüedad de la instalación y del cambio que solicites.',
      },
    ],
    relacionadas: ['reformas-integrales-madrid', 'reforma-cocinas-madrid', 'reforma-piso-completo-madrid'],
  }),
  servicio({
    path: 'impermeabilizacion-humedades-madrid',
    nombre: 'Impermeabilización y humedades',
    title: 'Humedades e impermeabilización en Madrid | ObraLocal Madrid',
    description:
      'Tratamiento de humedades e impermeabilización en Madrid: diagnóstico del origen, duchas, terrazas y paredes con condensación o capilaridad.',
    resumen: 'Diagnóstico del origen y tratamiento de humedades en paredes, duchas y terrazas.',
    h1: ['', 'Humedades', 'e impermeabilización en Madrid'],
    intro:
      'Una mancha de humedad puede venir de una fuga, de la condensación en una pared fría, de agua que sube desde el suelo o de una terraza mal impermeabilizada. Tratarla bien empieza por saber cuál es su origen.',
    puntos: ['Diagnóstico del origen', 'Duchas y baños', 'Terrazas', 'Condensación y capilaridad'],
    imagen: '/images/paredes-ejemplo.webp',
    imagenAlt: 'Pared saneada tras tratar una humedad',
    secciones: [
      {
        titulo: 'Tipos de humedad más habituales',
        parrafos: [
          'Las de condensación aparecen en paredes frías y mal ventiladas; las de capilaridad suben desde el suelo en plantas bajas; y las filtraciones vienen de fugas, cubiertas o terrazas. Cada una se trata de una forma distinta.',
        ],
      },
      {
        titulo: 'Qué incluye',
        parrafos: ['PENDIENTE("qué tipos de humedades tratáis y cómo")'],
      },
    ],
    faqs: [
      {
        pregunta: '¿Basta con pintar con pintura antihumedad?',
        respuesta:
          'Solo disimula el problema durante un tiempo. Hay que resolver el origen de la humedad antes de reparar y pintar.',
      },
    ],
    relacionadas: ['alisado-paredes-madrid', 'reforma-banos-madrid', 'albanileria-madrid'],
  }),
  servicio({
    path: 'suelos-tarimas-madrid',
    nombre: 'Suelos y tarimas',
    title: 'Suelos y tarimas en Madrid | ObraLocal Madrid',
    description:
      'Colocación de suelos en Madrid: tarima, laminado, vinílico y cerámico, nivelación de la base y qué hacer con el suelo antiguo.',
    resumen: 'Tarima, laminado, vinílico o cerámico, con la base bien preparada.',
    h1: ['Suelos y', 'tarimas', 'en Madrid'],
    intro:
      'Cambiar el suelo transforma una vivienda. La elección del material importa, pero lo que decide el resultado es la base: un suelo nuevo sobre una superficie desnivelada se nota con el tiempo.',
    puntos: ['Tarima y laminado', 'Vinílico', 'Cerámico', 'Nivelación de la base'],
    imagen: '/images/piso-reformado.webp',
    imagenAlt: 'Suelo de madera nuevo en un piso reformado',
    secciones: [
      {
        titulo: 'Levantar o colocar encima',
        parrafos: [
          'A veces se puede colocar el nuevo suelo sobre el antiguo, ahorrando escombro. Hay que comprobar que la base está firme y nivelada y tener en cuenta el grosor que se añade en puertas y encuentros.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Se puede poner tarima sobre terrazo?',
        respuesta:
          'A menudo sí, si el terrazo está firme y nivelado. Hay que prever el recorte de puertas y los remates.',
      },
    ],
    relacionadas: ['reformas-integrales-madrid', 'reforma-piso-completo-madrid', 'pintores-madrid'],
  }),
  servicio({
    path: 'ventanas-madrid',
    nombre: 'Ventanas',
    title: 'Cambio de ventanas en Madrid | ObraLocal Madrid',
    description:
      'Cambio de ventanas en Madrid: aislamiento térmico y acústico, qué permite la comunidad y la normativa y cómo se coordina con la reforma.',
    resumen: 'Ventanas que aíslan del frío y del ruido, coordinadas con la comunidad.',
    h1: ['Cambio de', 'ventanas', 'en Madrid'],
    intro:
      'Cambiar las ventanas es una de las mejoras que más se notan en confort y en la factura. Pero al ser parte de la fachada, no depende solo de ti: hay que contar con la comunidad y con la normativa.',
    puntos: ['Aislamiento térmico', 'Aislamiento acústico', 'Comunidad y normativa', 'Coordinadas con la obra'],
    imagen: '/images/sala-vacia.webp',
    imagenAlt: 'Habitación luminosa con ventanas nuevas',
    secciones: [
      {
        titulo: 'Antes de encargarlas',
        parrafos: [
          'Pregunta a la comunidad si hay un modelo o color aprobado y comprueba si el edificio está protegido. Muchas comunidades exigen mantener el aspecto exterior.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Puedo cambiar las ventanas sin permiso de la comunidad?',
        respuesta:
          'Afectan a la fachada, así que conviene consultarlo antes. Muchas comunidades tienen un modelo aprobado.',
      },
    ],
    relacionadas: ['reformas-integrales-madrid', 'pladur-madrid', 'ayudas-reformas-madrid'],
  }),
  servicio({
    path: 'reforma-locales-madrid',
    nombre: 'Reforma de locales',
    title: 'Reforma de locales comerciales en Madrid | ObraLocal Madrid',
    description:
      'Reforma de locales en Madrid: adaptación al uso, accesibilidad, instalaciones y trámites de la actividad antes de abrir.',
    resumen: 'Adaptar un local a su nueva actividad: instalaciones, accesibilidad y trámites.',
    h1: ['Reforma de', 'locales', 'en Madrid'],
    intro:
      'Reformar un local es distinto de reformar una vivienda: el uso previsto marca requisitos de accesibilidad, ventilación, protección contra incendios e instalaciones, y la obra suele ir unida a los trámites de la actividad.',
    puntos: ['Adaptación al uso', 'Accesibilidad', 'Instalaciones', 'Trámites de la actividad'],
    imagen: '/images/obra-en-curso.webp',
    imagenAlt: 'Local en obras',
    secciones: [
      {
        titulo: 'Empieza por el uso',
        parrafos: [
          'Antes de diseñar, define a qué se va a dedicar el local. Una oficina, un comercio y una cafetería tienen requisitos muy distintos, y conviene confirmarlos con un técnico y con el Ayuntamiento antes de firmar el alquiler o empezar la obra.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿Necesito licencia para reformar un local?',
        respuesta:
          'Depende del uso y de la obra. En Madrid capital, la Ordenanza 6/2022 regula estos trámites; en otros municipios, su ayuntamiento.',
      },
    ],
    relacionadas: ['reformas-integrales-madrid', 'licencia-obra-madrid', 'pladur-madrid'],
  }),
  servicio({
    path: 'reparaciones-hogar-madrid',
    nombre: 'Reparaciones pequeñas',
    title: 'Reparaciones del hogar en Madrid | ObraLocal Madrid',
    description:
      'Reparaciones pequeñas en Madrid: desperfectos en paredes, azulejos sueltos, puertas que rozan, sellados y arreglos que no son una reforma.',
    resumen: 'Arreglos que no son una reforma: paredes, azulejos, puertas y sellados.',
    h1: ['Reparaciones', 'del hogar', 'en Madrid'],
    intro:
      'No todo es una reforma. A veces solo hay que reparar una pared, recolocar unos azulejos, ajustar una puerta o sellar una ducha. Son trabajos pequeños que conviene no dejar pasar.',
    puntos: ['Paredes y techos', 'Azulejos sueltos', 'Puertas y carpintería', 'Sellados'],
    imagen: '/images/albanileria-ejemplo.webp',
    imagenAlt: 'Reparación de una pared',
    secciones: [
      {
        titulo: 'Qué incluye',
        parrafos: ['PENDIENTE("qué reparaciones pequeñas hacéis y desde qué importe")'],
      },
    ],
    faqs: [
      {
        pregunta: '¿Atendéis arreglos de una sola visita?',
        respuesta: 'PENDIENTE("confirmar si atendéis arreglos pequeños de una visita")',
      },
    ],
    relacionadas: ['albanileria-madrid', 'pintores-madrid', 'alisado-paredes-madrid'],
  }),
];
