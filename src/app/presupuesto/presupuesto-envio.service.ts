import { Injectable } from '@angular/core';
import type { SupabaseClient } from '@supabase/supabase-js';

import { NEGOCIO } from '../datos/contacto';

export interface RespuestaPresupuesto {
  nombre: string;
  telefono: string;
  correo: string;
  servicio: string;
  zona: string;
  metros: string;
  tipoInmueble: string;
  estado: string;
  materiales: string;
  plazo: string;
  presupuesto: string;
  descripcion: string;
}

interface SolicitudCentral {
  source: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  description: string | null;
  details: Record<string, unknown>;
}

/* =====================================================
   CENTRAL DE SOLICITUDES (Supabase)
   Solo clave pública (publishable). Nunca la service_role.
   La seguridad la aplican las políticas RLS de public.requests.
===================================================== */

const SUPABASE_URL = 'https://obdetimymgchgqnlxbew.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_vGYxgkMKDNJr1G0aq7vBMQ_lLUQfJqn';

/**
 * Identificador de esta web en la columna `source` de la Central.
 * Debe ser uno de los valores que permite la tabla:
 * 'armamuebles' | 'obralocalmadrid' | 'mudanzas360' | 'tramo'
 */
const FUENTE_CENTRAL = 'obralocalmadrid';

/** Tiempo máximo de espera al guardar la solicitud. */
const TIEMPO_MAX_ENVIO_MS = 15000;

const EMAILJS_SERVICE_ID = 'service_zsdcdm9';
const EMAILJS_TEMPLATE_ID = 'template_990lvyf';
const EMAILJS_PUBLIC_KEY = 'AMG0Y5wJ2v1LfrRFL';

/** UUID para identificar cada envío; permite reintentar sin duplicar registros. */
function nuevoId(): string {
  const c = (globalThis as { crypto?: Crypto }).crypto;

  if (c?.randomUUID) {
    return c.randomUUID();
  }

  const bytes = new Uint8Array(16);

  if (c?.getRandomValues) {
    c.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');

  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

/**
 * Envío de la solicitud. Supabase y EmailJS se descargan al abrir el formulario, no en la carga
 * inicial de la web.
 */
@Injectable({ providedIn: 'root' })
export class PresupuestoEnvioService {
  private clienteSupabase?: Promise<SupabaseClient>;
  private clienteEmail?: Promise<typeof import('@emailjs/browser').default>;

  /**
   * Identificador del último envío. Si el guardado se corta por la red y el cliente
   * reintenta con los mismos datos, se reutiliza el mismo id y no se duplica el registro.
   */
  private ultimoEnvio: { id: string; firma: string } | null = null;

  /** Descarga las librerías por adelantado para que el envío no tenga que esperarlas. */
  precargar(): void {
    void this.supabase().catch(() => undefined);
    void this.emailjs().catch(() => undefined);
  }

  olvidarUltimoEnvio(): void {
    this.ultimoEnvio = null;
  }

  private supabase(): Promise<SupabaseClient> {
    this.clienteSupabase ??= import('@supabase/supabase-js').then(({ createClient }) =>
      // Web pública sin inicio de sesión: no hace falta guardar ni renovar sesiones.
      createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
      }),
    );
    return this.clienteSupabase;
  }

  private emailjs(): Promise<typeof import('@emailjs/browser').default> {
    this.clienteEmail ??= import('@emailjs/browser').then((m) => m.default);
    return this.clienteEmail;
  }

  /** Datos para la plantilla de EmailJS (aviso opcional por correo). */
  private crearDatosPlantilla(r: RespuestaPresupuesto): Record<string, string> {
    return {
      nombre: r.nombre.trim(),
      telefono: r.telefono.trim(),
      correo: r.correo.trim(),
      servicio: r.servicio,
      zona: r.zona,
      metros: String(r.metros ?? '').trim(),
      tipo_inmueble: r.tipoInmueble,
      estado: r.estado,
      materiales: r.materiales,
      plazo: r.plazo,
      presupuesto: r.presupuesto,
      descripcion: r.descripcion.trim(),
      to_email: NEGOCIO.correoSolicitudes,
      subject: 'Nueva solicitud de presupuesto - ObraLocalMADRID',
    };
  }

  /** Construye el registro tal y como lo espera la tabla public.requests. */
  private crearSolicitud(r: RespuestaPresupuesto): SolicitudCentral {
    return {
      source: FUENTE_CENTRAL,
      name: r.nombre.trim(),
      phone: r.telefono.trim(),
      email: r.correo.trim() || null,
      service: r.servicio,
      description: r.descripcion.trim() || null,
      details: {
        zona: r.zona,
        metros: r.metros ? Number(r.metros) : null,
        tipo_inmueble: r.tipoInmueble || null,
        estado: r.estado || null,
        materiales: r.materiales || null,
        plazo: r.plazo || null,
        presupuesto_previsto: r.presupuesto || null,
      },
    };
  }

  /**
   * Guarda la solicitud en Supabase.
   * - No usa .select(): los visitantes pueden insertar pero no leer (RLS).
   * - Si un reintento llega con un id ya guardado (error 23505), la solicitud
   *   ya existe y se considera guardada, sin duplicarla.
   */
  async guardarEnCentral(respuesta: RespuestaPresupuesto): Promise<void> {
    const solicitud = this.crearSolicitud(respuesta);
    const firma = JSON.stringify(solicitud);

    if (!this.ultimoEnvio || this.ultimoEnvio.firma !== firma) {
      this.ultimoEnvio = { id: nuevoId(), firma };
    }

    const registro = { id: this.ultimoEnvio.id, ...solicitud };

    let temporizador: ReturnType<typeof setTimeout> | undefined;

    const limite = new Promise<never>((_, rechazar) => {
      temporizador = setTimeout(() => rechazar(new Error('TIMEOUT_ENVIO')), TIEMPO_MAX_ENVIO_MS);
    });

    try {
      const operacion = this.supabase().then(async (cliente) => {
        return await cliente.from('requests').insert(registro);
      });
      const { error } = await Promise.race([operacion, limite]);

      if (error && error.code !== '23505') {
        throw error;
      }
    } finally {
      clearTimeout(temporizador);
    }
  }

  /** Aviso por email. Devuelve si se confirmó; si falla, la solicitud ya está guardada. */
  async avisarPorEmail(respuesta: RespuestaPresupuesto): Promise<boolean> {
    try {
      const emailjs = await this.emailjs();
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        this.crearDatosPlantilla(respuesta),
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      return true;
    } catch (error) {
      console.warn('La solicitud se guardó, pero no se pudo enviar el aviso por email', error);
      return false;
    }
  }
}
