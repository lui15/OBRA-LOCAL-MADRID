/** Servicios que se combinan con zonas en /:servicio/:zona/. */
export interface ServicioCombo {
  slug: string;
  nombre: string;
  /** Valor que preselecciona el formulario (presupuesto-modelo.ts). */
  formulario: string;
  /** Filas de precio de datos/precios.ts. */
  precios: string[];
  /** Página general del servicio. */
  pagina: string;
  /** Servicios relacionados (slugs de esta lista). */
  relacionados: string[];
}

export const SERVICIOS_COMBO: ServicioCombo[] = [
  { slug: 'reforma-integral', nombre: 'Reforma integral', formulario: 'Reformas integrales', precios: ['integral-basica', 'integral-media', 'integral-alta'], pagina: 'reformas-integrales-madrid', relacionados: ['reforma-bano', 'reforma-cocina', 'suelos'] },
  { slug: 'reforma-bano', nombre: 'Reforma de baño', formulario: 'Reforma de baño', precios: ['bano', 'banera-plato'], pagina: 'reforma-banos-madrid', relacionados: ['cambiar-banera', 'alicatados', 'reforma-cocina'] },
  { slug: 'reforma-cocina', nombre: 'Reforma de cocina', formulario: 'Reforma de cocinas', precios: ['cocina'], pagina: 'reforma-cocinas-madrid', relacionados: ['alicatados', 'reforma-bano', 'suelos'] },
  { slug: 'pintura', nombre: 'Pintura', formulario: 'Pintura', precios: ['pintura-piso', 'pintura-m2'], pagina: 'pintores-madrid', relacionados: ['quitar-gotele', 'alisado-paredes', 'suelos'] },
  { slug: 'quitar-gotele', nombre: 'Quitar gotelé', formulario: 'Paredes', precios: ['gotele', 'alisado'], pagina: 'quitar-gotele-madrid', relacionados: ['pintura', 'alisado-paredes', 'reforma-integral'] },
  { slug: 'alisado-paredes', nombre: 'Alisado de paredes', formulario: 'Paredes', precios: ['alisado', 'gotele'], pagina: 'alisado-paredes-madrid', relacionados: ['pintura', 'quitar-gotele', 'humedades'] },
  { slug: 'albanileria', nombre: 'Albañilería', formulario: 'Albañilería', precios: ['albanileria-hora', 'alicatado', 'humedades'], pagina: 'albanileria-madrid', relacionados: ['alicatados', 'humedades', 'pladur'] },
  { slug: 'pladur', nombre: 'Pladur', formulario: 'Pladur', precios: ['tabique-pladur', 'techo-pladur', 'punto-luz'], pagina: 'pladur-madrid', relacionados: ['albanileria', 'pintura', 'reforma-integral'] },
  { slug: 'cambiar-banera', nombre: 'Cambiar bañera por plato de ducha', formulario: 'Reforma de baño', precios: ['banera-plato', 'bano'], pagina: 'cambiar-banera-por-plato-ducha-madrid', relacionados: ['reforma-bano', 'alicatados', 'humedades'] },
  { slug: 'reforma-piso', nombre: 'Reforma de piso completo', formulario: 'Reformas integrales', precios: ['integral-basica', 'integral-media', 'integral-alta', 'electricidad', 'fontaneria'], pagina: 'reforma-piso-completo-madrid', relacionados: ['reforma-integral', 'ventanas', 'suelos'] },
  { slug: 'locales', nombre: 'Reforma de locales', formulario: 'Reforma de locales', precios: ['local-basica', 'local-media', 'local-alta'], pagina: 'reforma-locales-comerciales-madrid', relacionados: ['pladur', 'albanileria', 'pintura'] },
  { slug: 'terrazas', nombre: 'Reforma de terrazas', formulario: 'Reforma de terrazas', precios: ['terraza-basica', 'terraza-media', 'terraza-alta'], pagina: 'reforma-terrazas-madrid', relacionados: ['humedades', 'suelos', 'albanileria'] },
  { slug: 'humedades', nombre: 'Tratamiento de humedades', formulario: 'Tratamiento de humedades', precios: ['humedades', 'alisado', 'pintura-m2'], pagina: 'tratamiento-humedades-madrid', relacionados: ['albanileria', 'alisado-paredes', 'pintura'] },
  { slug: 'alicatados', nombre: 'Alicatados', formulario: 'Alicatados', precios: ['alicatado'], pagina: 'alicatados-madrid', relacionados: ['reforma-bano', 'reforma-cocina', 'albanileria'] },
  { slug: 'suelos', nombre: 'Instalación de suelos', formulario: 'Instalación de suelos', precios: ['suelo-laminado', 'suelo-vinilico', 'suelo-porcelanico', 'tarima'], pagina: 'instalacion-suelos-madrid', relacionados: ['pintura', 'reforma-integral', 'alicatados'] },
  { slug: 'ventanas', nombre: 'Cambiar ventanas', formulario: 'Cambiar ventanas', precios: ['ventana'], pagina: 'cambiar-ventanas-madrid', relacionados: ['reforma-piso', 'pintura', 'humedades'] },
];

export function servicioCombo(slug: string): ServicioCombo | undefined {
  return SERVICIOS_COMBO.find((s) => s.slug === slug);
}
