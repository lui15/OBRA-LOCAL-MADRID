import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { NEGOCIO, SITE_URL } from './datos/contacto';
import { srcsetDe } from './datos/imagenes';

export interface SeoConfig {
  title: string;
  description: string;
  /** Ruta con barra inicial. El canónico no lleva barra final salvo en la portada. */
  path: string;
  jsonLd?: object;
  noindex?: boolean;
  /** Ruta de la imagen para redes sociales. */
  imagen?: string;
  /** Imagen principal de la página: se precarga para que aparezca antes. */
  imagenPrincipal?: string;
  /** Atributo sizes de esa imagen: debe coincidir con el del HTML para no descargarla dos veces. */
  imagenSizes?: string;
}

/** Metadatos de cada ruta. index.html no los repite: aquí está la única fuente. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update(config: SeoConfig): void {
    const url = SITE_URL + config.path;
    const imagen = SITE_URL + (config.imagen ?? '/images/og-obralocal.jpg');

    this.titleService.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({
      name: 'robots',
      content: config.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: NEGOCIO.nombre });
    this.meta.updateTag({ property: 'og:locale', content: 'es_ES' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: imagen });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: imagen });

    if (config.noindex) {
      this.removeCanonical();
    } else {
      this.setCanonical(url);
    }

    this.setJsonLd(config.jsonLd);
    this.setPrecarga(config.imagenPrincipal, config.imagenSizes);
  }

  private setPrecarga(ruta?: string, sizes = '100vw'): void {
    const id = 'seo-precarga';
    this.doc.getElementById(id)?.remove();

    const srcset = ruta ? srcsetDe(ruta) : null;
    if (!srcset) return;

    const link = this.doc.createElement('link');
    link.setAttribute('id', id);
    link.setAttribute('rel', 'preload');
    link.setAttribute('as', 'image');
    link.setAttribute('imagesrcset', srcset);
    link.setAttribute('imagesizes', sizes);
    link.setAttribute('fetchpriority', 'high');
    this.doc.head.appendChild(link);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private removeCanonical(): void {
    this.doc.querySelector('link[rel="canonical"]')?.remove();
  }

  private setJsonLd(data?: object): void {
    const id = 'seo-jsonld';
    this.doc.getElementById(id)?.remove();

    if (!data) {
      return;
    }

    const script = this.doc.createElement('script');
    script.setAttribute('id', id);
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
