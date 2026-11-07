import { SERVICIOS, Servicio, ZONAS, buscarServicio } from '../datos/catalogo-servicios';
import { NEGOCIO, SITE_URL } from '../datos/contacto';
import { Faq, PaginaSeo } from './pagina-seo';
import { PAGINAS_HUB } from './paginas-hub';
import { PAGINAS_SERVICIOS } from './paginas-servicios';
import { PAGINAS_TRABAJOS } from './paginas-trabajos';
import { PAGINAS_ZONAS } from './paginas-zonas';

export type { PaginaSeo } from './pagina-seo';

/** Fuente única de todas las URL. Añadir una página es añadir un objeto en su archivo. */
export const PAGINAS: PaginaSeo[] = [
  ...PAGINAS_HUB,
  ...PAGINAS_SERVICIOS,
  ...PAGINAS_TRABAJOS,
  ...PAGINAS_ZONAS,
];

/** Última revisión del contenido: el lastmod del sitemap. Actualízala al cambiar los textos. */
export const ULTIMA_REVISION = '2026-11-07';

export function buscarPagina(slug: unknown): PaginaSeo {
  return PAGINAS.find((p) => p.path === slug) ?? PAGINAS[0];
}

/** Ruta canónica de la página, con barra inicial. */
export function urlDePagina(p: PaginaSeo): string {
  return '/' + p.path;
}

/** Página principal de un servicio del catálogo. */
export function paginaDeServicio(s: Servicio): PaginaSeo | undefined {
  return PAGINAS.find((p) => p.tipo === 'servicio' && p.servicioCatalogo === s.nombre);
}

export interface Miga {
  etiqueta: string;
  /** Ruta con barra inicial. */
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

/** Precio más bajo que se publica como oferta de la página, o null si no procede. */
export function precioDesde(p: PaginaSeo): number | null {
  if (p.preciosSoloReferencia) return null;

  if (p.servicioCatalogo) {
    const precios = buscarServicio(p.servicioCatalogo)?.precios ?? [];
    return precios.length ? Math.min(...precios.map((x) => x.minimo)) : null;
  }

  return p.tipo === 'zona'
    ? Math.min(...SERVICIOS.flatMap((s) => s.precios.map((x) => x.minimo)))
    : null;
}

/** Etiqueta «desde X €» de la cabecera; en los índices de servicios y precios, el más bajo. */
export function precioCabecera(p: PaginaSeo): number | null {
  const desde = precioDesde(p);
  if (desde !== null || (p.modulo !== 'servicios' && p.modulo !== 'precios')) return desde;
  return Math.min(...SERVICIOS.flatMap((s) => s.precios.map((x) => x.minimo)));
}

export const ID_NEGOCIO = SITE_URL + '/#organization';

function nodoNegocio(): object {
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
      item: SITE_URL + (m.url === '/' ? '/' : m.url),
    })),
  };
}

/** Datos estructurados de una página. Las FAQ son exactamente las que se muestran en ella. */
export function crearJsonLd(
  p: PaginaSeo,
  faqs: readonly Faq[] = faqsDe(p),
): object {
  const url = SITE_URL + urlDePagina(p);
  const nodos: object[] = [nodoNegocio()];

  if (p.tipo === 'inicio') {
    nodos.push({
      '@type': 'WebSite',
      '@id': SITE_URL + '/#website',
      url: SITE_URL + '/',
      name: NEGOCIO.nombre,
      inLanguage: 'es-ES',
      publisher: { '@id': ID_NEGOCIO },
    });
  } else {
    nodos.push(nodoMigas(migasDe(p)));
  }

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
