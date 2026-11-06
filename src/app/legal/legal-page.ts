import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Migas } from '../compartido/migas';
import { Miga, nodoMigas } from '../landing/landing-data';
import { SeoService } from '../seo.service';
import { LEGAL } from './legal-data';

type TipoLegal = 'aviso' | 'privacidad' | 'cookies';

const TITULOS: Record<TipoLegal, { titulo: string; path: string }> = {
  aviso: { titulo: 'Aviso legal', path: '/aviso-legal' },
  privacidad: { titulo: 'Política de privacidad', path: '/politica-privacidad' },
  cookies: { titulo: 'Política de cookies', path: '/politica-cookies' },
};

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [Migas],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="legal">
      <app-migas [migas]="migas" />

      @if (tipo === 'aviso') {
        <h1>Aviso legal</h1>

        <h2>Titular de la web</h2>
        <p>
          En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de
          comercio electrónico (LSSI), se informa de que el sitio web {{ legal.dominio }} pertenece
          a:
        </p>
        <ul>
          <li><strong>Titular:</strong> {{ legal.titular }}</li>
          <li><strong>NIF:</strong> {{ legal.nif }}</li>
          <li><strong>Domicilio:</strong> {{ legal.domicilio }}</li>
          <li><strong>Correo electrónico:</strong> {{ legal.correo }}</li>
          @if (legal.registro) {
            <li><strong>Datos registrales:</strong> {{ legal.registro }}</li>
          }
        </ul>

        <h2>Objeto</h2>
        <p>
          Esta web ofrece información sobre {{ legal.actividad }} y permite solicitar presupuesto.
          Los precios que aparecen, cuando los hay, son orientativos y no constituyen una oferta
          vinculante.
        </p>

        <h2>Uso de la web</h2>
        <p>
          Te comprometes a usar la web de forma lícita y a facilitar datos veraces en los
          formularios. Enviar una solicitud no supone ningún compromiso de contratación.
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          Los textos, el diseño y los logotipos de esta web pertenecen a su titular o se usan con
          autorización. Las marcas de terceros que se mencionan pertenecen a sus respectivos
          propietarios. No se permite reproducir estos contenidos sin autorización.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          Procuramos que la información sea correcta y esté actualizada, pero puede contener
          errores. No respondemos del contenido de las webs de terceros a las que se pueda enlazar.
        </p>

        <h2>Legislación aplicable</h2>
        <p>
          Estas condiciones se rigen por la legislación española. Si eres consumidor, conservas los
          derechos y el fuero que te reconoce la normativa de consumo.
        </p>
      } @else if (tipo === 'cookies') {
        <h1>Política de cookies</h1>

        <h2>Qué son las cookies</h2>
        <p>
          Son pequeños archivos que una web guarda en tu navegador para recordar información sobre
          tu visita. Esta web usa solo las que se indican aquí.
        </p>

        <h2>Qué cookies usamos</h2>
        <p>
          <strong>Cookies analíticas de Google Analytics.</strong> Solo se activan si pulsas
          «Aceptar» en el aviso de cookies. Nos ayudan a saber qué páginas interesan más y a contar
          las solicitudes de presupuesto. No enviamos a Google tu nombre, tu teléfono, tu correo ni
          tu dirección.
        </p>
        <ul>
          <li><strong>_ga</strong>: distingue visitantes. Dura hasta 2 años. Es de Google.</li>
          <li>
            <strong>_ga_*</strong>: mantiene el estado de la sesión. Dura hasta 2 años. Es de
            Google.
          </li>
        </ul>
        <p>
          <strong>Preferencia de cookies.</strong> Guardamos tu decisión en el almacenamiento local
          de tu navegador, durante un máximo de 24 meses, para no volver a preguntarte. Es técnica:
          no te identifica y no necesita consentimiento.
        </p>

        <h2>Cómo cambiar tu decisión</h2>
        <p>
          Puedes cambiarla en cualquier momento con el enlace «Configurar cookies» del pie de la
          página. Si rechazas, se borran las cookies de Google Analytics de este sitio. También
          puedes eliminarlas desde la configuración de tu navegador.
        </p>

        <h2>Transferencias internacionales</h2>
        <p>
          Google puede tratar datos fuera del Espacio Económico Europeo, con las garantías que exige
          el RGPD. Consulta la información de Google en policies.google.com/privacy.
        </p>
      } @else {
        <h1>Política de privacidad</h1>

        <h2>Responsable del tratamiento</h2>
        <ul>
          <li><strong>Responsable:</strong> {{ legal.titular }}</li>
          <li><strong>NIF:</strong> {{ legal.nif }}</li>
          <li><strong>Domicilio:</strong> {{ legal.domicilio }}</li>
          <li><strong>Correo electrónico:</strong> {{ legal.correo }}</li>
        </ul>

        <h2>Qué datos tratamos</h2>
        <p>Cuando nos envías una solicitud, tratamos estos datos: {{ legal.datos }}.</p>

        <h2>Para qué los usamos y con qué base legal</h2>
        <p>
          Los usamos para atender tu solicitud, contactar contigo y prepararte un presupuesto. La
          base legal es la aplicación de medidas precontractuales que nos pides (artículo 6.1.b del
          RGPD). No los usamos para enviarte publicidad.
        </p>

        <h2>Cuánto tiempo los conservamos</h2>
        <p>{{ legal.conservacion }}</p>

        <h2>Quién puede tratarlos</h2>
        <p>
          No vendemos tus datos. Para que la web funcione, algunos proveedores los tratan por
          cuenta nuestra:
        </p>
        <ul>
          @for (proveedor of legal.proveedores; track proveedor) {
            <li>{{ proveedor }}</li>
          }
        </ul>
        <p>
          Si alguno de ellos trata datos fuera del Espacio Económico Europeo, se hará con las
          garantías que exige el RGPD.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Puedes pedir el acceso, la rectificación, la supresión, la limitación o la portabilidad
          de tus datos y oponerte a su tratamiento escribiendo a {{ legal.correo }}. Si crees que no
          los hemos tratado correctamente, puedes reclamar ante la Agencia Española de Protección
          de Datos (www.aepd.es).
        </p>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
      background: #fff;
    }
    .legal {
      max-width: 760px;
      margin: 0 auto;
      padding: 40px 24px 72px;
      color: #092746;
      line-height: 1.65;
    }
    h1 {
      margin: 24px 0 16px;
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      line-height: 1.15;
    }
    h2 {
      margin: 32px 0 8px;
      font-size: 1.2rem;
    }
    p,
    ul {
      margin: 0 0 12px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 6px;
      overflow-wrap: anywhere;
    }
  `,
})
export class LegalPage {
  readonly legal = LEGAL;
  readonly tipo = inject(ActivatedRoute).snapshot.data['tipo'] as TipoLegal;
  readonly migas: Miga[] = [
    { etiqueta: 'Inicio', url: '/' },
    { etiqueta: TITULOS[this.tipo].titulo, url: TITULOS[this.tipo].path },
  ];

  constructor() {
    const { titulo, path } = TITULOS[this.tipo];

    inject(SeoService).update({
      title: `${titulo} | ${LEGAL.nombre}`,
      description: `${titulo} de ${LEGAL.dominio}.`,
      path,
      noindex: true,
      jsonLd: { '@context': 'https://schema.org', ...nodoMigas(this.migas) },
    });
  }
}
