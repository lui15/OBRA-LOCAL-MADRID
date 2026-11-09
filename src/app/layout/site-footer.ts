import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ConsentimientoService } from '../compartido/consentimiento.service';
import { Icono } from '../compartido/icono';
import { EMPRESA, ENLACE_TELEFONO, NEGOCIO } from '../datos/contacto';
import { ContextoPagina } from './contexto-pagina.service';
import { FICHAS_PUBLICADAS, urlDePagina } from '../landing/fichas';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [Icono, RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  readonly consentimiento = inject(ConsentimientoService);
  readonly anio = new Date().getFullYear();
  readonly negocio = NEGOCIO;
  readonly telefono = ENLACE_TELEFONO;
  readonly contexto = inject(ContextoPagina);
  readonly url = urlDePagina;

  readonly servicios = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'servicio');
  readonly trabajos = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'trabajo');
  readonly zonas = FICHAS_PUBLICADAS.filter((p) => p.tipo === 'zona').slice(0, 8);
  readonly empresa = EMPRESA;
}
