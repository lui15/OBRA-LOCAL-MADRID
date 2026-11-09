import { SERVICIOS, Servicio, ZONAS, buscarServicio } from '../datos/catalogo-servicios';
import { NEGOCIO, SITE_URL } from '../datos/contacto';
import { ULTIMA_REVISION } from '../datos/revision';
import { Faq, PaginaSeo } from './pagina-seo';
import { PAGINAS_GUIAS } from './paginas-guias';
import { PAGINAS_HUB } from './paginas-hub';
import { PAGINAS_INFO } from './paginas-info';
import { PAGINAS_SERVICIOS } from './paginas-servicios';
import { PAGINAS_TRABAJOS } from './paginas-trabajos';
import { PAGINAS_ZONAS } from './paginas-zonas';

export type { PaginaSeo } from './pagina-seo';
export { ULTIMA_REVISION } from '../datos/revision';

/** Todas las páginas definidas, incluidas las que aún son borrador. */
export const TODAS_LAS_PAGINAS: PaginaSeo[] = [
  ...PAGINAS_HUB,
  ...PAGINAS_SERVICIOS,
  ...PAGINAS_TRABAJOS,
  ...PAGINAS_ZONAS,
  ...PAGINAS_INFO,
  ...PAGINAS_GUIAS,
];

/** Páginas publicadas: las únicas que se prerenderizan, van al sitemap y aparecen en menús. */
export const PAGINAS: PaginaSeo[] = TODAS_LAS_PAGINAS.filter((p) => !p.borrador);

/** Borradores: se pueden ver en local con el servidor, nunca se enlazan. */
export const BORRADORES: PaginaSeo[] = TODAS_LAS_PAGINAS.filter((p) => p.borrador);

export function buscarPagina(slug: unknown): PaginaSeo {
  return TODAS_LAS_PAGINAS.find((p) => p.path === slug) ?? PAGINAS[0];
}

function publicada(path: string): PaginaSeo | undefined {
  return PAGINAS.find((p) => p.path === path);
}

/** URL pública de la página: con barra final, salvo la portada. */
export function urlDePagina(p: PaginaSeo): string {
  return p.path ? `/${p.path}/` : '/';
}

/** Páginas relacionadas que ya están publicadas. */
export function relacionadasDe(p: PaginaSeo): PaginaSeo[] {
  return p.relacionadas.map(publicada).filter((r): r is PaginaSeo => Boolean(r));
}

/** Guías publicadas que enlazan a esta página: el enlazado va en los dos sentidos. */
export function guiasSobre(p: PaginaSeo): PaginaSeo[] {
  return PAGINAS.filter((g) => g.tipo === 'guia' && g.relacionadas.includes(p.path));
}

/** Página principal de un servicio del catálogo. */
export function paginaDeServicio(s: Servicio): PaginaSeo | undefined {
  return PAGINAS.find((p) => p.tipo === 'servicio' && p.servicioCatalogo === s.nombre);
}

export interface Miga {
  etiqueta: string;
  /** URL con barra final. */
  url: string;
}

/** Cadena de páginas desde el inicio hasta la actual, para las migas de pan. */
export function migasDe(p: PaginaSeo): Miga[] {
  const cadena: PaginaSeo[] = [];

  for (let actual: PaginaSeo | undefined = p; actual; ) {
    cadena.unshift(actual);
    actual = actual.padre ? buscarPagina(actual.padre) : undefined;
  }

  const inicio: Miga = { etiqueta: 'Inicio', url: '/' };
  return [inicio, ...cadena.map((c) => ({ etiqueta: c.etiqueta, url: urlDePagina(c) }))];
}

/** Preguntas visibles en la página, estén o no agrupadas. */
export function faqsDe(p: PaginaSeo): Faq[] {
  return p.gruposFaq?.flatMap((g) => g.faqs) ?? p.faqs;
}

const MINIMO_CATALOGO = Math.min(...SERVICIOS.flatMap((s) => s.precios.map((x) => x.minimo)));

/** Precio más bajo que se publica como oferta de la página, o null si no procede. */
export function precioDesde(p: PaginaSeo): number | null {
  if (p.preciosSoloReferencia || p.borrador) return null;

  if (p.servicioCatalogo) {
    const precios = buscarServicio(p.servicioCatalogo)?.precios ?? [];
    return precios.length ? Math.min(...precios.map((x) => x.minimo)) : null;
  }

  return p.tipo === 'zona' ? MINIMO_CATALOGO : null;
}

/** Etiqueta «desde X €» de la cabecera; en los índices de servicios y precios, el más bajo. */
export function precioCabecera(p: PaginaSeo): number | null {
  const desde = precioDesde(p);
  if (desde !== null || (p.modulo !== 'servicios' && p.modulo !== 'precios')) return desde;
  return MINIMO_CATALOGO;
}

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

function textoH1(p: PaginaSeo): string {
  return [p.h1.antes, p.h1.resaltado, p.h1.despues].filter(Boolean).join(' ');
}

/** Datos estructurados de una página. Las FAQ son exactamente las que se muestran en ella. */
export function crearJsonLd(p: PaginaSeo, faqs: readonly Faq[] = faqsDe(p)): object {
  const url = SITE_URL + urlDePagina(p);
  const nodos: object[] = [
    nodoNegocio(),
    {
      '@type': 'WebSite',
      '@id': ID_WEB,
      url: SITE_URL + '/',
      name: NEGOCIO.nombre,
      inLanguage: 'es-ES',
      publisher: { '@id': ID_NEGOCIO },
    },
    nodoPagina(url, p.title),
  ];

  if (p.tipo !== 'inicio') nodos.push(nodoMigas(migasDe(p)));

  if (p.tipo === 'servicio' || p.tipo === 'trabajo' || p.tipo === 'zona') {
    const desde = precioDesde(p);

    nodos.push({
      '@type': 'Service',
      name: p.servicio.nombre,
      description: p.servicio.descripcion,
      serviceType: p.servicio.nombre,
      url,
      provider: { '@id': ID_NEGOCIO },
      areaServed: p.zona
        ? { '@type': 'Place', name: p.zona }
        : { '@type': 'City', name: 'Madrid' },
      ...(desde !== null
        ? {
            offers: {
              '@type': 'Offer',
              url,
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                minPrice: desde,
                priceCurrency: 'EUR',
              },
            },
          }
        : {}),
    });
  }

  if (p.tipo === 'guia') {
    nodos.push({
      '@type': 'Article',
      headline: textoH1(p),
      description: p.description,
      url,
      mainEntityOfPage: { '@id': url + '#webpage' },
      image: SITE_URL + p.imagen,
      inLanguage: 'es-ES',
      datePublished: p.publicado ?? ULTIMA_REVISION,
      dateModified: ULTIMA_REVISION,
      // Mientras el nombre del responsable esté pendiente, firma la empresa.
      author: { '@id': ID_NEGOCIO },
      publisher: { '@id': ID_NEGOCIO },
    });
  }

  if (faqs.length) {
    nodos.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': nodos };
}
