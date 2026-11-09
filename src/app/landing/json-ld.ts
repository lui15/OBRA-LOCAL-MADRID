import { SITE_URL } from '../datos/contacto';
import { ULTIMA_REVISION } from '../datos/revision';
import { extremosFilas, preciosDePagina } from '../datos/precios';
import {
  ID_NEGOCIO,
  migasDe,
  nodoMigas,
  nodoNegocio,
  nodoPagina,
  nodoWeb,
  precioPrincipal,
  urlDePagina,
} from './fichas';
import { Faq, PaginaSeo } from './pagina-seo';

/** Preguntas visibles en la página, estén o no agrupadas. */
export function faqsDe(p: PaginaSeo): Faq[] {
  return p.gruposFaq?.flatMap((g) => g.faqs) ?? p.faqs;
}

function textoH1(p: PaginaSeo): string {
  return [p.h1.antes, p.h1.resaltado, p.h1.despues].filter(Boolean).join(' ');
}

/** Datos estructurados de una página. Las FAQ son exactamente las que se muestran en ella. */
export function crearJsonLd(p: PaginaSeo, faqs: readonly Faq[] = faqsDe(p)): object {
  const url = SITE_URL + urlDePagina(p);
  const nodos: object[] = [nodoNegocio(), nodoWeb(), nodoPagina(url, p.title)];

  if (p.tipo !== 'inicio') nodos.push(nodoMigas(migasDe(p)));

  if (p.tipo === 'servicio' || p.tipo === 'trabajo' || p.tipo === 'zona') {
    const principal = precioPrincipal(p);
    const extremos = principal ? extremosFilas(preciosDePagina(p.path, p.servicioCatalogo)) : null;
    nodos.push({
      '@type': 'Service',
      name: p.servicio.nombre,
      description: p.servicio.descripcion,
      serviceType: p.servicio.nombre,
      url,
      provider: { '@id': ID_NEGOCIO },
      areaServed: p.zona ? { '@type': 'Place', name: p.zona } : { '@type': 'City', name: 'Madrid' },
      ...(principal && extremos
        ? {
            offers: {
              '@type': 'Offer',
              url,
              priceCurrency: 'EUR',
              priceSpecification: principal.unidad
                ? {
                    '@type': 'UnitPriceSpecification',
                    minPrice: extremos.minimo,
                    maxPrice: extremos.maximo,
                    priceCurrency: 'EUR',
                    unitText: principal.unidad.replace('€', '').replace('/', '').trim() || principal.unidad,
                    valueAddedTaxIncluded: true,
                  }
                : {
                    '@type': 'PriceSpecification',
                    minPrice: extremos.minimo,
                    maxPrice: extremos.maximo,
                    priceCurrency: 'EUR',
                    valueAddedTaxIncluded: true,
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
