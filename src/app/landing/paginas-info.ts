import { PaginaSeo } from './pagina-seo';

/** Páginas informativas con fuentes oficiales, y la calculadora. */
export const PAGINAS_INFO: PaginaSeo[] = [
  /* ---------------------------- CALCULADORA ---------------------------- */
  {
    path: 'calculadora-reforma',
    tipo: 'herramienta',
    padre: 'precios',
    title: 'Calculadora de reforma en Madrid | ObraLocal Madrid',
    description:
      'Calcula un rango orientativo para tu reforma en Madrid según los metros, la cocina, los baños, la pintura y la calidad. Con nuestros precios de referencia.',
    etiqueta: 'Calculadora de reforma',
    resumen: 'Un rango orientativo en un minuto, con nuestros precios de referencia.',
    h1: { antes: 'Calculadora de', resaltado: 'reforma', despues: 'en Madrid' },
    puntos: ['Metros y estancias', 'Calidad de materiales', 'Con o sin redistribución', 'Sin compromiso'],
    whatsapp: 'Hola, he usado la calculadora y quiero pedir presupuesto para una reforma',
    kicker: 'CALCULADORA',
    intro:
      'Indica los metros de tu piso, qué estancias quieres reformar, la calidad de materiales que buscas y si vas a cambiar la distribución. La calculadora te da un rango orientativo hecho con los mismos precios de referencia que publicamos en nuestra página de precios.',
    secciones: [
      {
        titulo: 'Cómo calcula',
        parrafos: [
          'Si vas a cambiar la distribución, la calculadora usa nuestro rango de reforma integral según los metros de la vivienda, que ya incluye cocina, baños y acabados. Si no, suma los rangos de cada trabajo que eliges: cocina parcial o completa, cada baño y la pintura de la vivienda.',
          'La calidad no cambia los precios del catálogo. Lo que hace es situarte en una parte del rango: la calidad básica se queda en la mitad baja, la alta en la mitad alta y la media en el centro. Es una forma honesta de reflejar que dos cocinas «completas» pueden costar muy distinto según lo que elijas.',
        ],
      },
      {
        titulo: 'Qué no incluye',
        parrafos: [
          'Todavía no tenemos un precio de referencia confirmado para suelos ni plazos por tipo de reforma, así que la calculadora los marca como pendientes en lugar de inventarlos. Tampoco puede saber el estado de tus instalaciones, el acceso al edificio o si tu obra necesita trámite municipal: por eso es una orientación y no un presupuesto.',
        ],
      },
      {
        titulo: 'Después del cálculo',
        parrafos: [
          'Si el rango encaja con lo que tenías pensado, pulsa «Quiero mi presupuesto por partidas»: el formulario se abre con tus datos ya rellenos, y solo tienes que añadir tu nombre, tu teléfono y la zona. A partir de ahí revisamos tu caso y te contactamos.',
        ],
      },
    ],
    faqs: [
      {
        pregunta: '¿El resultado de la calculadora es un presupuesto?',
        respuesta:
          'No. Es un rango orientativo hecho con nuestros precios de referencia. El presupuesto debe confirmar cantidades, materiales, mano de obra, impuestos y exclusiones.',
      },
      {
        pregunta: '¿Por qué la calidad no cambia el precio máximo?',
        respuesta:
          'Porque los rangos del catálogo ya recogen desde calidades sencillas hasta altas. La calidad indica en qué parte de ese rango se sitúa tu reforma.',
      },
      {
        pregunta: '¿Se guardan los datos que meto en la calculadora?',
        respuesta:
          'No. La calculadora funciona en tu navegador y no envía nada. Solo se envían datos si después rellenas y envías el formulario de presupuesto.',
      },
    ],
    servicio: {
      nombre: 'Calculadora de reforma',
      descripcion: 'Rango orientativo de precio para reformas en Madrid.',
    },
    servicioFormulario: 'Reformas integrales',
    imagen: '/images/planos-medidas.webp',
    imagenAlt: 'Plano de una vivienda con cinta métrica para calcular una reforma',
    modulo: 'calculadora',
    relacionadas: ['precios', 'cuanto-cuesta-reformar-piso-70-m2-madrid', 'reformas-integrales-madrid', 'reforma-banos-madrid', 'reforma-cocinas-madrid'],
  },

  /* ---------------------------- LICENCIA DE OBRA ---------------------------- */
  {
    path: 'licencia-obra-madrid',
    tipo: 'info',
    title: 'Licencia de obra en Madrid: qué necesitas | ObraLocal Madrid',
    description:
      'Licencia de obra en Madrid: obra menor, declaración responsable y licencia según la Ordenanza 6/2022, cuándo hace falta proyecto y dónde se tramita.',
    etiqueta: 'Licencia de obra en Madrid',
    resumen: 'Declaración responsable, licencia y proyecto: qué pide tu obra en Madrid.',
    h1: { antes: 'Licencia de obra en Madrid:', resaltado: 'qué necesitas', despues: '' },
    puntos: ['Ordenanza 6/2022', 'Declaración responsable', 'Licencia', 'Fuentes oficiales'],
    whatsapp: 'Hola, tengo dudas sobre el trámite de mi obra en Madrid',
    kicker: 'LICENCIA DE OBRA',
    intro:
      'Antes de reformar conviene saber qué trámite pide tu obra. En Madrid capital lo regula la Ordenanza 6/2022 de Licencias y Declaraciones Responsables Urbanísticas, aprobada el 26 de abril de 2022. Aquí te explicamos sus líneas generales con enlaces a las fuentes oficiales; para tu caso concreto, la referencia es siempre el Ayuntamiento.',
    aviso:
      'Esta página es informativa y no sustituye la consulta al Ayuntamiento ni a un técnico. Revisa la normativa vigente antes de empezar tu obra.',
    secciones: [
      {
        titulo: 'Declaración responsable: la vía general',
        parrafos: [
          'Desde esta ordenanza, la declaración responsable es el medio general para la mayoría de las obras, y la licencia queda para los supuestos de su Anexo I. En la declaración, la persona interesada afirma, bajo su responsabilidad, que la obra cumple la normativa urbanística y sectorial, que dispone de la documentación que lo acredita y que la mantendrá durante toda la obra.',
          'Según el Ayuntamiento, si la declaración no indica otra cosa, las obras deben empezar en un plazo de seis meses y terminar en un año desde su presentación completa. Al acabar, hay que presentar la documentación del Anexo II, apartado D, de la ordenanza y solicitar la visita de inspección a través del Sistema de Licencias Municipales (SLIM), dentro del mismo expediente.',
        ],
      },
      {
        titulo: '¿Y la «obra menor»?',
        parrafos: [
          'Mucha gente sigue hablando de «licencia de obra menor» para referirse a reformas interiores sencillas. Con la ordenanza actual, lo importante no es esa etiqueta, sino si la obra está entre las que no necesitan título, entre las que van por declaración responsable o entre las del Anexo I, que requieren licencia. La antigua comunicación previa se suprimió con carácter general el 17 de junio de 2022.',
          'En términos generales, los acabados interiores de una vivienda que no está protegida —pintar, cambiar suelos o alicatados sin tocar instalaciones ni distribución— son el tipo de obra con menos requisitos. Cambiar la distribución, las instalaciones o actuar sobre elementos comunes exige más comprobaciones. Confirma siempre tu caso con el Ayuntamiento o con un técnico.',
        ],
      },
      {
        titulo: 'Cuándo hace falta un proyecto técnico',
        parrafos: [
          'La Ley de Ordenación de la Edificación exige proyecto, redactado por un técnico competente, para las obras que alteran la configuración arquitectónica de los edificios: por ejemplo, las que cambian su estructura, su volumetría o la composición general exterior, y también para intervenciones en edificios protegidos. En una reforma de vivienda, eso suele ocurrir cuando se tocan muros de carga, forjados o la fachada.',
          'Si tu obra no está en esos casos, puede bastar con la documentación que pida la declaración responsable. Si tienes dudas sobre si un muro es estructural, la respuesta la debe dar un técnico antes de tocarlo.',
        ],
      },
      {
        titulo: 'Edificios protegidos y comunidad de vecinos',
        parrafos: [
          'Si tu edificio aparece en el Catálogo de Edificios Protegidos del Ayuntamiento, el margen para cambiar fachada, balcones, carpintería exterior o elementos originales puede ser mucho menor. Compruébalo antes de proyectar.',
          'Con independencia del trámite municipal, la Ley de Propiedad Horizontal obliga a comunicar las obras previamente a quien represente a la comunidad, y no se puede alterar la seguridad del edificio, su estructura general, su configuración exterior ni los derechos de otros propietarios.',
        ],
      },
      {
        titulo: 'Fuera de Madrid capital',
        parrafos: [
          'La Ordenanza 6/2022 solo se aplica en el término municipal de Madrid. Si tu vivienda está en Alcobendas, Getafe, Leganés, Alcorcón, Móstoles, Pozuelo de Alarcón, Las Rozas, Majadahonda o cualquier otro municipio, el trámite, las tasas y el impuesto de obras los fija su ayuntamiento.',
        ],
      },
      {
        titulo: 'Qué gestionamos nosotros',
        parrafos: ['PENDIENTE("qué parte del trámite gestiona ObraLocal Madrid y con qué técnico")'],
      },
    ],
    fuentes: [
      {
        texto: 'Ordenanza 6/2022 de Licencias y Declaraciones Responsables Urbanísticas (Sede electrónica del Ayuntamiento de Madrid)',
        url: 'https://sede.madrid.es/portal/site/tramites/menuitem.5dd4485239c96e10f7a72106a8a409a0/?vgnextoid=d3cdd4b13e0d0810VgnVCM1000001d4a900aRCRD&vgnextfmt=default&numPagina=2&target=texto&version=true&vgnextchannel=6b3d814231ede410VgnVCM1000000b205a0aRCRD',
      },
      {
        texto: 'Publicación de la ordenanza en el BOCM (17 de mayo de 2022)',
        url: 'https://www.bocm.es/boletin/CM_Orden_BOCM/2022/05/17/BOCM-20220517-58.PDF',
      },
      {
        texto: 'Licencias urbanísticas y declaraciones responsables (Portal de transparencia del Ayuntamiento de Madrid)',
        url: 'https://transparencia.madrid.es/portales/transparencia/es/Transparencia-por-sectores/Urbanismo-Obras/Licencias-y-autorizaciones/Licencias-urbanisticas-y-declaraciones-responsables/?vgnextfmt=default&vgnextoid=2587a805cface910VgnVCM200000f921e388RCRD&vgnextchannel=dee9508929a56510VgnVCM1000008a4a900aRCRD',
      },
      {
        texto: 'Sistema de Licencias Municipales (SLIM)',
        url: 'https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a55e2dbd7003a8a409a0/?vgnextoid=edf5540d8819a610VgnVCM1000001d4a900aRCRD&vgnextchannel=7d7d5d53be9a0210VgnVCM100000171f5a0aRCRD&vgnextfmt=default',
      },
      {
        texto: 'Ley 38/1999, de Ordenación de la Edificación (BOE)',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1999-21567',
      },
    ],
    faqs: [
      {
        pregunta: '¿Necesito licencia para pintar o cambiar el suelo de mi piso en Madrid?',
        respuesta:
          'En términos generales, los acabados interiores de una vivienda sin protección son las obras con menos requisitos. Confirma tu caso en la sede electrónica del Ayuntamiento o con un técnico.',
      },
      {
        pregunta: '¿Qué plazo tengo para hacer la obra tras la declaración responsable?',
        respuesta:
          'Según el Ayuntamiento de Madrid, si la declaración no indica otros plazos, la obra debe empezar en seis meses y terminar en un año desde su presentación completa.',
      },
      {
        pregunta: '¿Dónde se presenta la declaración responsable en Madrid?',
        respuesta:
          'A través del Sistema de Licencias Municipales (SLIM) de la sede electrónica del Ayuntamiento de Madrid.',
      },
      {
        pregunta: '¿Esta normativa vale para municipios como Getafe o Alcobendas?',
        respuesta:
          'No. La Ordenanza 6/2022 es del Ayuntamiento de Madrid. En cada municipio, el trámite lo fija su propio ayuntamiento.',
      },
    ],
    servicio: {
      nombre: 'Información sobre licencias de obra en Madrid',
      descripcion: 'Qué trámite pide una reforma en Madrid capital.',
    },
    servicioFormulario: '',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una vivienda sobre una mesa',
    relacionadas: ['ayudas-reformas-madrid', 'reformas-integrales-madrid', 'orden-trabajos-reforma-integral', 'preguntas-frecuentes', 'zonas'],
  },

  /* ---------------------------- AYUDAS ---------------------------- */
  {
    path: 'ayudas-reformas-madrid',
    tipo: 'info',
    title: 'Ayudas para reformas en Madrid 2026 | ObraLocal Madrid',
    description:
      'Ayudas para reformas en Madrid 2026: Plan Rehabilita del Ayuntamiento y programas de rehabilitación de la Comunidad. Estado y fuentes oficiales.',
    etiqueta: 'Ayudas para reformas en Madrid',
    resumen: 'Plan Rehabilita y programas de rehabilitación energética: dónde mirar.',
    h1: { antes: 'Ayudas para reformas en', resaltado: 'Madrid 2026', despues: '' },
    puntos: ['Ayuntamiento de Madrid', 'Comunidad de Madrid', 'Rehabilitación y eficiencia', 'Fuentes oficiales'],
    whatsapp: 'Hola, tengo dudas sobre ayudas para mi reforma',
    kicker: 'AYUDAS',
    intro:
      'Las ayudas para reformar cambian cada año: se abren convocatorias, se agotan fondos y se cierran plazos. En esta página resumimos lo que publican las fuentes oficiales que hemos consultado el 9 de noviembre de 2026, con enlaces para que compruebes el estado actual. No damos importes ni requisitos que no hayamos podido verificar.',
    aviso:
      'Revisa la convocatoria vigente. Las ayudas, sus plazos y sus requisitos cambian con frecuencia y la información oficial es la única que vale para solicitarlas.',
    secciones: [
      {
        titulo: 'Plan Rehabilita Madrid 2026 (Ayuntamiento de Madrid)',
        parrafos: [
          'Es la convocatoria municipal de subvenciones para actuaciones de accesibilidad, conservación, eficiencia energética, salubridad y seguridad en edificios existentes de uso residencial situados en el término municipal de Madrid. Está pensada sobre todo para comunidades de propietarios, aunque la convocatoria detalla quién puede pedirla.',
          'Según la sede electrónica del Ayuntamiento, el plazo de solicitudes de la edición 2026 terminaba el 30 de septiembre de 2026, y el portal municipal de rehabilitación lo muestra como finalizado. Si estás pensando en una actuación en tu edificio, vigila la próxima convocatoria.',
        ],
      },
      {
        titulo: 'Programas de la Comunidad de Madrid',
        parrafos: [
          'La Comunidad de Madrid ha gestionado ayudas de rehabilitación energética de edificios residenciales y viviendas financiadas con fondos europeos del Plan de Recuperación (PRTR). Según su web, el programa de mejora de la eficiencia energética en viviendas se declaró finalizado por una orden de julio de 2026, publicada en el BOCM, y los fondos restantes se destinan a solicitudes ya presentadas.',
          'La Comunidad también ha informado de ayudas de rehabilitación a nivel de barrio en distintos municipios. No hemos podido confirmar si hay convocatorias abiertas en este momento: PENDIENTE("confirmar convocatorias abiertas de la Comunidad de Madrid").',
        ],
      },
      {
        titulo: 'Deducciones fiscales',
        parrafos: [
          'En años anteriores han existido deducciones en el IRPF por obras de mejora de la eficiencia energética de la vivienda. PENDIENTE("confirmar si las deducciones del IRPF por eficiencia energética están vigentes en 2026 y en qué condiciones"). Consulta con la Agencia Tributaria o con un asesor fiscal antes de contar con ellas.',
        ],
      },
      {
        titulo: 'Qué suele hacer falta para pedir una ayuda',
        parrafos: [
          'Sin entrar en los requisitos de cada convocatoria, que cambian, hay documentos que se repiten a menudo en las ayudas de rehabilitación: presupuestos detallados de la actuación, certificados o informes técnicos del estado del edificio y, en las ayudas energéticas, certificados de eficiencia antes y después de la obra. Muchas ayudas exigen además que la obra no haya empezado antes de solicitarlas.',
          'Por eso, si tu reforma puede encajar en una ayuda, consulta la convocatoria antes de firmar el presupuesto y de empezar la obra. PENDIENTE("confirmar si ObraLocal Madrid ayuda a preparar la documentación de las ayudas").',
        ],
      },
      {
        titulo: 'Reforma de tu vivienda y rehabilitación del edificio',
        parrafos: [
          'La mayoría de estas ayudas se dirigen al edificio —fachada, cubierta, ascensor, instalaciones comunes— y no a la reforma interior de un piso. Si tu comunidad está preparando una rehabilitación, coordinar tu reforma con ella puede evitar repetir trabajos, por ejemplo en ventanas o bajantes.',
        ],
      },
      {
        titulo: 'Dónde mirar si tu vivienda está fuera de Madrid capital',
        parrafos: [
          'Algunos ayuntamientos de la Comunidad convocan sus propias ayudas para rehabilitación o accesibilidad. Consulta la sede electrónica de tu municipio y el Boletín Oficial de la Comunidad de Madrid.',
        ],
      },
    ],
    fuentes: [
      {
        texto: 'Subvenciones Plan Rehabilita 2026 (Sede electrónica del Ayuntamiento de Madrid)',
        url: 'https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a55e2dbd7003a8a409a0/?vgnextoid=eb1a7964cb93e910VgnVCM100000891ecb1aRCRD&vgnextchannel=2a8ca38813180210VgnVCM100000c90da8c0RCRD&vgnextfmt=default',
      },
      {
        texto: 'Plan Rehabilita: portal de rehabilitación del Ayuntamiento de Madrid',
        url: 'https://transforma.madrid.es/rehabilita/',
      },
      {
        texto: 'Ayudas a la rehabilitación energética de edificios residenciales y viviendas (PRTR), Comunidad de Madrid',
        url: 'https://www.comunidad.madrid/vivienda/ayudas-actuaciones-rehabilitacion-energetica-edificios-residenciales-viviendas-prtr',
      },
      {
        texto: 'Ayudas a la rehabilitación de edificios (Sede electrónica de la Comunidad de Madrid)',
        url: 'https://sede.comunidad.madrid/ayudas-becas-subvenciones/ayudas-rehabilitacion-edificio',
      },
    ],
    faqs: [
      {
        pregunta: '¿Hay ayudas para reformar mi piso por dentro?',
        respuesta:
          'Las ayudas de rehabilitación que hemos consultado se dirigen sobre todo a edificios y a mejoras de eficiencia energética, no a la reforma interior de un piso. Revisa cada convocatoria vigente.',
      },
      {
        pregunta: '¿Sigue abierto el Plan Rehabilita 2026?',
        respuesta:
          'Según la sede electrónica del Ayuntamiento de Madrid, el plazo de solicitudes terminaba el 30 de septiembre de 2026. Comprueba en la sede si se ha abierto una nueva convocatoria.',
      },
      {
        pregunta: '¿Puedo empezar la obra y pedir la ayuda después?',
        respuesta:
          'Muchas convocatorias exigen solicitar la ayuda antes de empezar. Consulta las bases de la convocatoria vigente antes de firmar el presupuesto.',
      },
    ],
    servicio: {
      nombre: 'Información sobre ayudas para reformas en Madrid',
      descripcion: 'Ayudas de rehabilitación y eficiencia energética en Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/edificio-clasico-madrid.webp',
    imagenAlt: 'Fachadas de edificios residenciales en Madrid',
    relacionadas: ['licencia-obra-madrid', 'reformas-integrales-madrid', 'precios', 'que-pedir-presupuesto-reforma'],
  },
];
