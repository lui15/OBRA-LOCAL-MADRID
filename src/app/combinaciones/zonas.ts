/** Zonas que se combinan con servicios en /:servicio/:zona/. El contenido de cada una está en contenido/zonas/<slug>.ts. */
export interface ZonaCombo {
  slug: string;
  nombre: string;
  /** Zonas cercanas (slugs de esta lista), para el enlazado interno. */
  cercanas: string[];
  /** Página general de la zona, si existe. */
  pagina?: string;
}

export const ZONAS_COMBO: ZonaCombo[] = [
  { slug: 'chamberi', nombre: 'Chamberí', cercanas: ['salamanca', 'moncloa', 'tetuan', 'centro'], pagina: 'reformas-chamberi' },
  { slug: 'salamanca', nombre: 'Salamanca', cercanas: ['chamberi', 'retiro', 'chamartin', 'ciudad-lineal'], pagina: 'reformas-salamanca' },
  { slug: 'retiro', nombre: 'Retiro', cercanas: ['salamanca', 'arganzuela', 'moratalaz', 'centro'], pagina: 'reformas-retiro' },
  { slug: 'centro', nombre: 'Centro', cercanas: ['chamberi', 'arganzuela', 'retiro', 'moncloa'] },
  { slug: 'arganzuela', nombre: 'Arganzuela', cercanas: ['centro', 'retiro', 'usera', 'carabanchel'], pagina: 'reformas-arganzuela' },
  { slug: 'moncloa', nombre: 'Moncloa-Aravaca', cercanas: ['chamberi', 'centro', 'latina', 'pozuelo'], pagina: 'reformas-moncloa' },
  { slug: 'tetuan', nombre: 'Tetuán', cercanas: ['chamberi', 'chamartin', 'fuencarral'], pagina: 'reformas-tetuan' },
  { slug: 'chamartin', nombre: 'Chamartín', cercanas: ['tetuan', 'salamanca', 'hortaleza', 'ciudad-lineal'], pagina: 'reformas-chamartin' },
  { slug: 'carabanchel', nombre: 'Carabanchel', cercanas: ['latina', 'usera', 'arganzuela'], pagina: 'reformas-carabanchel' },
  { slug: 'latina', nombre: 'Latina', cercanas: ['carabanchel', 'moncloa', 'alcorcon'], pagina: 'reformas-latina' },
  { slug: 'usera', nombre: 'Usera', cercanas: ['arganzuela', 'carabanchel', 'villaverde', 'vallecas'] },
  { slug: 'vallecas', nombre: 'Vallecas', cercanas: ['moratalaz', 'usera', 'retiro'], pagina: 'reformas-vallecas' },
  { slug: 'moratalaz', nombre: 'Moratalaz', cercanas: ['vallecas', 'retiro', 'ciudad-lineal'] },
  { slug: 'ciudad-lineal', nombre: 'Ciudad Lineal', cercanas: ['salamanca', 'chamartin', 'hortaleza', 'moratalaz'], pagina: 'reformas-ciudad-lineal' },
  { slug: 'hortaleza', nombre: 'Hortaleza', cercanas: ['chamartin', 'ciudad-lineal', 'fuencarral'] },
  { slug: 'fuencarral', nombre: 'Fuencarral-El Pardo', cercanas: ['tetuan', 'hortaleza', 'chamartin'] },
  { slug: 'villaverde', nombre: 'Villaverde', cercanas: ['usera', 'carabanchel', 'getafe'] },
  { slug: 'getafe', nombre: 'Getafe', cercanas: ['leganes', 'villaverde', 'fuenlabrada'], pagina: 'reformas-getafe' },
  { slug: 'leganes', nombre: 'Leganés', cercanas: ['getafe', 'alcorcon', 'fuenlabrada'], pagina: 'reformas-leganes' },
  { slug: 'alcorcon', nombre: 'Alcorcón', cercanas: ['leganes', 'mostoles', 'latina'], pagina: 'reformas-alcorcon' },
  { slug: 'mostoles', nombre: 'Móstoles', cercanas: ['alcorcon', 'fuenlabrada', 'leganes'], pagina: 'reformas-mostoles' },
  { slug: 'fuenlabrada', nombre: 'Fuenlabrada', cercanas: ['getafe', 'leganes', 'mostoles'] },
  { slug: 'pozuelo', nombre: 'Pozuelo de Alarcón', cercanas: ['moncloa', 'majadahonda', 'las-rozas'], pagina: 'reformas-pozuelo-de-alarcon' },
  { slug: 'majadahonda', nombre: 'Majadahonda', cercanas: ['pozuelo', 'las-rozas'], pagina: 'reformas-majadahonda' },
  { slug: 'las-rozas', nombre: 'Las Rozas', cercanas: ['majadahonda', 'pozuelo'], pagina: 'reformas-las-rozas' },
  { slug: 'alcobendas', nombre: 'Alcobendas', cercanas: ['hortaleza', 'fuencarral'], pagina: 'reformas-alcobendas' },
];

export function zonaCombo(slug: string): ZonaCombo | undefined {
  return ZONAS_COMBO.find((z) => z.slug === slug);
}
