import { SERVICIOS, Servicio, ZONAS, buscarServicio } from '../datos/catalogo-servicios';
import { NEGOCIO, SITE_URL } from '../datos/contacto';
import { ULTIMA_REVISION } from '../datos/revision';
import type { FichaPagina } from './ficha';
import { FICHAS } from './fichas.generado';

export type { FichaPagina } from './ficha';
export { FICHAS } from './fichas.generado';

/** Lo que necesita cualquier función de esta lista: vale tanto una ficha como la página completa. */
type Basica = Pick<FichaPagina, 'path' | 'tipo' | 'padre' | 'etiqueta' | 'borrador' | 'servicioCatalogo' | 'preciosSoloReferencia' | 'modulo'>;

/** Páginas publicadas: las únicas que se prerenderizan, van al sitemap y aparecen en menús. */
export const FICHAS_PUBLICADAS: FichaPagina[] = FICHAS.filter((f) => !f.borrador);

export function buscarFicha(path: string): FichaPagina | undefined {
  return FICHAS.find((f) => f.path === path);
}

function publicada(path: string): FichaPagina | undefined {
  return FICHAS_PUBLICADAS.find((f) => f.path === path);
}

/** URL pública de la página: con barra final, salvo la portada. */
export function urlDePagina(p: Pick<FichaPagina, 'path'>): string {
  return p.path ? `/${p.path}/` : '/';
}

/** Páginas relacionadas que ya están publicadas. */
export function relacionadasDe(p: Pick<FichaPagina, 'relacionadas'>): FichaPagina[] {
  return p.relacionadas.map(publicada).filter((r): r is FichaPagina => Boolean(r));
}

/** Guías publicadas que enlazan a esta página: el enlazado va en los dos sentidos. */
export function guiasSobre(path: string): FichaPagina[] {
  return FICHAS_PUBLICADAS.filter((g) => g.tipo === 'guia' && g.relacionadas.includes(path));
}

/** Página principal de un servicio del catálogo. */
export function paginaDeServicio(s: Servicio): FichaPagina | undefined {
  return FICHAS_PUBLICADAS.find((p) => p.tipo === 'servicio' && p.servicioCatalogo === s.nombre);
}

export interface Miga {
  etiqueta: string;
  /** URL con barra final. */
  url: string;
}

/** Cadena de páginas desde el inicio hasta la actual, para las migas de pan. */
export function migasDe(p: Basica): Miga[] {
  const cadena: Basica[] = [];
  for (let actual: Basica | undefined = p; actual; ) {
    cadena.unshift(actual);
    actual = actual.padre ? buscarFicha(actual.padre) : undefined;
  }
  return [{ etiqueta: 'Inicio', url: '/' }, ...cadena.map((c) => ({ etiqueta: c.etiqueta, url: urlDePagina(c) }))];
}

const MINIMO_CATALOGO = Math.min(...SERVICIOS.flatMap((s) => s.precios.map((x) => x.minimo)));

/** Precio más bajo que se publica como oferta de la página, o null si no procede. */
export function precioDesde(p: Basica): number | null {
  if (p.preciosSoloReferencia || p.borrador) return null;
  if (p.servicioCatalogo) {
    const precios = buscarServicio(p.servicioCatalogo)?.precios ?? [];
    return precios.length ? Math.min(...precios.map((x) => x.minimo)) : null;
  }
  return p.tipo === 'zona' ? MINIMO_CATALOGO : null;
}

/** Etiqueta «desde X €» de la cabecera; en los índices de servicios y precios, el más bajo. */
export function precioCabecera(p: Basica): number | null {
  const desde = precioDesde(p);
  if (desde !== null || (p.modulo !== 'servicios' && p.modulo !== 'precios')) return desde;
  return MINIMO_CATALOGO;
}

/* ------------------------------------------------------------ nodos de datos estructurados */

export const ID_NEGOCIO = SITE_URL + '/#organization';
export const ID_WEB = SITE_URL + '/#website';

export function nodoNegocio(): object {
  const municipios = ZONAS.filter((z) => z !== 'Madrid capital' && z !== 'Otra zona de Madrid');
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': ID_NEGOCIO,
    name: NEGOCIO.nombre,
    url: SITE_URL + '/',
    logo: SITE_URL + '/images/logo.png',
    image: SITE_URL + '/images/logo.png',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Comunidad de Madrid',
      addressCountry: 'ES',
    },
    areaServed: [
      { '@type': 'City', name: 'Madrid' },
      ...municipios.map((name) => ({ '@type': 'City', name })),
      { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
    ],
    // Solo se publican si están confirmados en datos/contacto.ts.
    ...(NEGOCIO.telefono ? { telephone: NEGOCIO.telefono } : {}),
    ...(NEGOCIO.horario.length ? { openingHours: NEGOCIO.horario } : {}),
    ...(NEGOCIO.redes.length ? { sameAs: NEGOCIO.redes } : {}),
  };
}

export function nodoWeb(): object {
  return {
    '@type': 'WebSite',
    '@id': ID_WEB,
    url: SITE_URL + '/',
    name: NEGOCIO.nombre,
    inLanguage: 'es-ES',
    publisher: { '@id': ID_NEGOCIO },
  };
}

export function nodoMigas(migas: Miga[]): object {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.etiqueta,
      item: SITE_URL + m.url,
    })),
  };
}

/** Página web con su fecha de revisión. */
export function nodoPagina(url: string, titulo: string, fecha = ULTIMA_REVISION): object {
  return {
    '@type': 'WebPage',
    '@id': url + '#webpage',
    url,
    name: titulo,
    inLanguage: 'es-ES',
    isPartOf: { '@id': ID_WEB },
    dateModified: fecha,
  };
}
