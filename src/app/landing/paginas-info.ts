import { NOTA_GOOGLE } from '../datos/contacto';
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
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Calcula precio y plazo de tu reforma en un minuto.`,
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
    title: 'Licencia de obra en Madrid: declaración responsable e ICIO',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Licencia, declaración responsable e ICIO.`,
    etiqueta: 'Licencia de obra en Madrid',
    resumen: 'Obras sin trámite, declaración responsable, licencia e ICIO en Madrid capital.',
    h1: { antes: 'Licencia de obra en Madrid:', resaltado: 'qué necesitas', despues: '' },
    puntos: ['Ordenanza 6/2022', 'Declaración responsable', 'ICIO del 3,75 %', 'Fuentes oficiales'],
    whatsapp: 'Hola, tengo dudas sobre el trámite de mi obra en Madrid',
    kicker: 'LICENCIA DE OBRA',
    intro:
      'Antes de reformar conviene saber qué trámite pide tu obra. En Madrid capital lo regula la Ordenanza 6/2022, de 26 de abril, de Licencias y Declaraciones Responsables Urbanísticas, publicada en el BOCM el 17 de mayo de 2022. Hay tres casos: obras que no necesitan ningún trámite, obras que van por declaración responsable y obras que necesitan licencia. Lo hemos comprobado en las fuentes oficiales el 9 de noviembre de 2026; para tu caso concreto, la referencia es siempre el Ayuntamiento.',
    aviso:
      'Esta página es informativa y no sustituye la consulta al Ayuntamiento ni a un técnico. Revisa la normativa vigente antes de empezar tu obra.',
    secciones: [
      {
        titulo: 'Obras que no necesitan licencia ni declaración responsable',
        parrafos: [
          'El artículo 6 de la ordenanza recoge las actuaciones que no están sujetas a ningún medio de intervención urbanística. La que más afecta a una reforma de vivienda es la del apartado b): «las obras de conservación consistentes en la sustitución de acabados interiores de una sola vivienda o local, o de las zonas comunes de edificios de uso residencial, cuando no estén protegidos arquitectónicamente».',
          'En la práctica, cambiar acabados interiores, como pintar o cambiar azulejos o suelos, en un piso de un edificio no protegido no necesita ni licencia ni declaración responsable. El mismo artículo incluye también la renovación de instalaciones cuando las nuevas ocupan la misma posición y tienen dimensiones similares a las que sustituyen, y estas ya estaban legalizadas.',
          'Que no haga falta trámite urbanístico no quita otras obligaciones: el artículo 6 recuerda que sigue siendo necesario gestionar los residuos de la obra y pedir permiso para ocupar la vía pública, por ejemplo para poner un contenedor.',
        ],
      },
      {
        titulo: 'La declaración responsable: el trámite general',
        parrafos: [
          'Según el artículo 26 y el anexo II de la ordenanza, van por declaración responsable «todas las actuaciones urbanísticas que deban ser objeto de intervención municipal y no estén incluidas en el control por licencia». Es decir, si tu obra necesita algún trámite y no está en la lista de licencias, es una declaración responsable.',
          'En la declaración, el titular de la obra afirma bajo su responsabilidad que cumple la normativa urbanística y sectorial, y que dispone de la documentación que lo acredita. Se puede presentar ante el propio Ayuntamiento o con una entidad colaboradora urbanística (artículo 27). La comunicación previa, que se usaba antes, quedó suprimida con carácter general desde el 17 de junio de 2022, cuando entró en vigor la ordenanza.',
        ],
      },
      {
        titulo: 'Cuándo hace falta licencia',
        parrafos: [
          'El artículo 34 remite al anexo I, que enumera las actuaciones sujetas a licencia. En una reforma de vivienda, las que más importan son dos: las obras que requieren proyecto técnico de obras de edificación según el artículo 2.2 de la Ley 38/1999 de Ordenación de la Edificación, y las actuaciones sobre edificios catalogados que alteren o modifiquen los elementos protegidos.',
          'La Ley de Ordenación de la Edificación pide proyecto, entre otros casos, para las intervenciones que alteran la configuración arquitectónica del edificio, como las que cambian su estructura o su composición exterior. Si tu reforma toca muros de carga, forjados o la fachada, consulta antes con un técnico.',
        ],
      },
      {
        titulo: 'El ICIO: el impuesto de la obra',
        parrafos: [
          'Cuando la obra necesita licencia o declaración responsable, en Madrid capital se paga el Impuesto sobre Construcciones, Instalaciones y Obras (ICIO), regulado por la Ordenanza Fiscal 7/2023, de 22 de diciembre. Según el Portal del Contribuyente del Ayuntamiento, el tipo es del 3,75 % para las obras iniciadas a partir del 1 de enero de 2024 (el 4 % para las iniciadas antes).',
          'Se calcula sobre el coste real y efectivo de la obra: solo el coste de ejecución material, sin impuestos, tasas, honorarios profesionales ni beneficio del constructor. Por ejemplo, en una obra con 50.000 € de ejecución material, el ICIO es de 1.875 €. Se autoliquida al presentar la declaración responsable o en el mes siguiente a la concesión de la licencia, y el coste real se declara en el mes siguiente al final de la obra.',
        ],
      },
      {
        titulo: 'La comunidad de vecinos',
        parrafos: [
          'Con independencia del trámite municipal, el artículo 7.1 de la Ley de Propiedad Horizontal permite modificar tu piso siempre que no menoscabes ni alteres la seguridad del edificio, su estructura general o su configuración exterior, ni perjudiques los derechos de otro propietario. Y obliga a dar cuenta de las obras previamente a quien represente a la comunidad.',
        ],
      },
      {
        titulo: 'Fuera de Madrid capital',
        parrafos: [
          'La Ordenanza 6/2022 y la Ordenanza Fiscal 7/2023 solo se aplican en el municipio de Madrid. Si tu vivienda está en Getafe, Leganés, Alcorcón, Móstoles, Alcobendas, Pozuelo de Alarcón, Las Rozas, Majadahonda o cualquier otro municipio, el trámite, las tasas y el impuesto de obras los fija su ayuntamiento: consulta su sede electrónica.',
        ],
      },
    ],
    fuentes: [
      {
        texto: 'Ordenanza 6/2022 de Licencias y Declaraciones Responsables Urbanísticas, BOCM nº 116 de 17 de mayo de 2022 (consultada el 9/11/2026)',
        url: 'https://www.bocm.es/boletin/CM_Orden_BOCM/2022/05/17/BOCM-20220517-58.PDF',
      },
      {
        texto: 'Trámites de obras y actividades, Ayuntamiento de Madrid (consultada el 9/11/2026)',
        url: 'https://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Licencias-urbanisticas/Tramites-de-obras-y-actividades/?vgnextfmt=default&vgnextchannel=f701f3a438dc6410VgnVCM2000000c205a0aRCRD',
      },
      {
        texto: 'ICIO: autoliquidación, Portal del Contribuyente del Ayuntamiento de Madrid (consultada el 9/11/2026)',
        url: 'https://agenciatributaria.madrid.es/portales/contribuyente/es/Tramites/Impuesto-sobre-Construcciones-Instalaciones-y-Obras-ICIO-Autoliquidacion/?vgnextfmt=default&vgnextoid=35d36cab45973510VgnVCM1000001d4a900aRCRD&vgnextchannel=97d608f9be116810VgnVCM1000001d4a900aRCRD',
      },
      {
        texto: 'Ley 38/1999, de Ordenación de la Edificación, BOE (consultada el 9/11/2026)',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1999-21567',
      },
      {
        texto: 'Ley 49/1960, de Propiedad Horizontal, BOE (consultada el 9/11/2026)',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906',
      },
    ],
    faqs: [
      {
        pregunta: '¿Necesito licencia para pintar o cambiar el suelo de mi piso en Madrid?',
        respuesta:
          'No, si el edificio no está protegido. El artículo 6.b de la Ordenanza 6/2022 deja fuera de licencia y de declaración responsable la sustitución de acabados interiores de una sola vivienda no protegida.',
      },
      {
        pregunta: '¿Qué obras van por declaración responsable?',
        respuesta:
          'Todas las que necesitan intervención municipal y no están en el anexo I de la ordenanza, que es la lista de obras con licencia.',
      },
      {
        pregunta: '¿Cuánto es el ICIO en Madrid?',
        respuesta:
          'El 3,75 % del coste de ejecución material para las obras iniciadas desde el 1 de enero de 2024, según la Ordenanza Fiscal 7/2023. En una obra de 50.000 € de ejecución material, son 1.875 €.',
      },
      {
        pregunta: '¿Esta normativa vale para municipios como Getafe o Alcobendas?',
        respuesta:
          'No. Las ordenanzas 6/2022 y 7/2023 son del Ayuntamiento de Madrid. En cada municipio, el trámite y el impuesto los fija su propio ayuntamiento.',
      },
    ],
    servicio: {
      nombre: 'Información sobre licencias de obra en Madrid',
      descripcion: 'Qué trámite pide una reforma en Madrid capital y cuánto es el ICIO.',
    },
    servicioFormulario: '',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una vivienda sobre una mesa',
    relacionadas: ['ayudas-reformas-madrid', 'precios', 'reformas-integrales-madrid', 'orden-trabajos-reforma-integral', 'preguntas-frecuentes'],
  },

  /* ---------------------------- AYUDAS ---------------------------- */
  {
    path: 'ayudas-reformas-madrid',
    tipo: 'info',
    title: 'Ayudas para reformas en Madrid 2026: qué hay y dónde mirar',
    description:
      `⭐ ${NOTA_GOOGLE} en Google · ✓ Visita sin compromiso · ✓ Presupuesto detallado · ✓ Una sola persona de contacto. Plan Rehabilita y deducciones del IRPF.`,
    etiqueta: 'Ayudas para reformas en Madrid',
    resumen: 'Plan Rehabilita 2026 y deducciones del IRPF, con sus fuentes oficiales.',
    h1: { antes: 'Ayudas para reformas en', resaltado: 'Madrid 2026', despues: '' },
    puntos: ['Plan Rehabilita 2026', 'Deducciones del IRPF', 'Solo fuentes oficiales', 'Comprobado el 9/11/2026'],
    whatsapp: 'Hola, tengo dudas sobre ayudas para mi reforma',
    kicker: 'AYUDAS',
    intro:
      'Las ayudas para reformar cambian cada año: se abren convocatorias, se agotan fondos y se cierran plazos. Aquí solo resumimos lo que hemos podido comprobar en fuentes oficiales el 9 de noviembre de 2026, con el enlace a cada una. No publicamos importes, porcentajes ni requisitos que no hayamos podido verificar.',
    aviso:
      'Revisa la convocatoria vigente. Las ayudas, sus plazos y sus requisitos cambian con frecuencia y la información oficial es la única que vale para solicitarlas.',
    secciones: [
      {
        titulo: 'Plan Rehabilita Madrid 2026 (Ayuntamiento de Madrid)',
        parrafos: [
          'Es la convocatoria municipal de subvenciones para edificios existentes de uso residencial en Madrid capital. Según la nota de prensa del Ayuntamiento del 2 de junio de 2026, la edición de este año tiene seis líneas: accesibilidad, eficiencia energética, conservación, salubridad, seguridad y, como novedad, embellecimiento urbano.',
          'La línea de embellecimiento incluye, por ejemplo, eliminar cableado visto, retirar o reubicar equipos de climatización de la fachada y homogeneizar persianas, toldos o barandillas, y suma un 5 % de subvención a las actuaciones de eficiencia energética que se acojan a ella. Las solicitudes se podían presentar desde el 3 de junio de 2026. Antes de contar con ella, comprueba en la sede electrónica del Ayuntamiento si la convocatoria sigue abierta y qué requisitos pide.',
        ],
      },
      {
        titulo: 'Deducciones del IRPF por obras de eficiencia energética',
        parrafos: [
          'La Ley del IRPF recoge deducciones por obras que mejoran la eficiencia energética de la vivienda. Según la Agencia Tributaria, el Real Decreto-ley 7/2026, de 20 de marzo, amplió sus plazos: las obras para reducir la demanda de calefacción y refrigeración y las que mejoran el consumo de energía primaria no renovable de la vivienda pueden hacerse hasta el 31 de diciembre de 2026, con el certificado de eficiencia energética expedido antes del 1 de enero de 2027.',
          'Para las obras de rehabilitación energética en edificios de uso predominantemente residencial, el plazo llega al 31 de diciembre de 2027. Las deducciones valen para la vivienda habitual y para viviendas alquiladas o en expectativa de alquiler, con las condiciones que fija la Agencia Tributaria. Los porcentajes y los límites dependen de cada deducción: consúltalos en su web o con un asesor fiscal antes de decidir la obra.',
        ],
      },
      {
        titulo: 'Reforma de tu vivienda y rehabilitación del edificio',
        parrafos: [
          'El Plan Rehabilita está planteado para actuaciones en edificios residenciales, y las deducciones del IRPF piden obras que mejoren la eficiencia energética acreditada con certificados. Una reforma interior que solo cambia acabados, como pintar o cambiar suelos, no suele encajar en ninguna de las dos.',
          'Si tu comunidad está preparando una rehabilitación, coordinar tu reforma con ella puede evitar repetir trabajos, por ejemplo en ventanas o en instalaciones. Y si la obra puede dar derecho a una deducción, pide el certificado de eficiencia energética de antes de la obra antes de empezar.',
        ],
      },
      {
        titulo: 'Si tu vivienda está fuera de Madrid capital',
        parrafos: [
          'El Plan Rehabilita es del Ayuntamiento de Madrid. Si vives en otro municipio de la Comunidad, consulta la sede electrónica de tu ayuntamiento y el Boletín Oficial de la Comunidad de Madrid. Las deducciones del IRPF, en cambio, son estatales y valen en cualquier municipio.',
        ],
      },
    ],
    fuentes: [
      {
        texto: 'El Ayuntamiento abre el plazo de ayudas del Plan Rehabilita 2026, nota de prensa del 2/6/2026 (consultada el 9/11/2026)',
        url: 'https://www.madrid.es/portales/munimadrid/es/Inicio/Actualidad/Noticias/El-Ayuntamiento-abre-el-plazo-de-ayudas-del-Plan-Rehabilita-2026-dotado-con-50-millones-de-euros/?vgnextfmt=default&vgnextoid=84416bfe7878e910VgnVCM100000891ecb1aRCRD&vgnextchannel=a12149fa40ec9410VgnVCM100000171f5a0aRCRD',
      },
      {
        texto: 'Subvenciones Plan Rehabilita 2026, sede electrónica del Ayuntamiento de Madrid',
        url: 'https://sede.madrid.es/portal/site/tramites/menuitem.62876cb64654a55e2dbd7003a8a409a0/?vgnextoid=eb1a7964cb93e910VgnVCM100000891ecb1aRCRD&vgnextchannel=2a8ca38813180210VgnVCM100000c90da8c0RCRD&vgnextfmt=default',
      },
      {
        texto: 'Deducciones por obras de mejora de la eficiencia energética de viviendas, Agencia Tributaria (página actualizada el 9/4/2026; consultada el 9/11/2026)',
        url: 'https://sede.agenciatributaria.gob.es/Sede/vivienda-otros-inmuebles/deducciones-obras-mejora-eficiencia-energetica-viviendas.html',
      },
      {
        texto: 'Novedades del Real Decreto-ley 7/2026 en el IRPF, Agencia Tributaria (consultada el 9/11/2026)',
        url: 'https://www3.agenciatributaria.gob.es/Sede/irpf/novedades-impuesto/novedades-normativa-2026/principales-novedades-tributarias-introducidas-real-marzo.html',
      },
    ],
    faqs: [
      {
        pregunta: '¿Hay ayudas para reformar mi piso por dentro?',
        respuesta:
          'Las que hemos comprobado se dirigen a edificios (Plan Rehabilita) o a obras de eficiencia energética (deducciones del IRPF). Una reforma que solo cambia acabados interiores no suele encajar. Revisa cada convocatoria vigente.',
      },
      {
        pregunta: '¿Hasta cuándo puedo hacer obras con deducción del IRPF?',
        respuesta:
          'Según la Agencia Tributaria, hasta el 31 de diciembre de 2026 para las obras en la vivienda, con el certificado de eficiencia energética expedido antes del 1 de enero de 2027, y hasta el 31 de diciembre de 2027 para las de edificios residenciales.',
      },
      {
        pregunta: '¿Sigue abierto el Plan Rehabilita 2026?',
        respuesta:
          'Las solicitudes se podían presentar desde el 3 de junio de 2026. Comprueba en la sede electrónica del Ayuntamiento de Madrid si la convocatoria sigue abierta o si se ha publicado una nueva.',
      },
    ],
    servicio: {
      nombre: 'Información sobre ayudas para reformas en Madrid',
      descripcion: 'Plan Rehabilita y deducciones del IRPF por eficiencia energética en Madrid.',
    },
    servicioFormulario: '',
    imagen: '/images/edificio-clasico-madrid.webp',
    imagenAlt: 'Fachadas de edificios residenciales en Madrid',
    relacionadas: ['licencia-obra-madrid', 'reformas-integrales-madrid', 'precios', 'que-pedir-presupuesto-reforma'],
  },
];
