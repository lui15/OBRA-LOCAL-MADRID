import { Injectable } from '@angular/core';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * El hosting sirve cada página como carpeta y redirige /ruta a /ruta/ con un 301.
 * Para que los enlaces apunten directamente a la URL final, se añade la barra al serializar.
 * Las rutas a archivos (con extensión) y la portada no se tocan.
 */
@Injectable()
export class SerializadorBarraFinal extends DefaultUrlSerializer {
  override serialize(arbol: UrlTree): string {
    const url = super.serialize(arbol);
    const corte = url.search(/[?#]/);
    const ruta = corte === -1 ? url : url.slice(0, corte);
    const resto = corte === -1 ? '' : url.slice(corte);

    if (ruta === '/' || ruta.endsWith('/') || /\.[a-z0-9]+$/i.test(ruta)) return url;
    return `${ruta}/${resto}`;
  }
}
