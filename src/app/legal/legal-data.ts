import { EMPRESA } from '../datos/contacto';

/**
 * Datos de los textos legales. Sustituye cada [PENDIENTE] antes de publicar.
 * Son un borrador: conviene que los revise un profesional.
 */
export const LEGAL = {
  nombre: 'ObraLocal Madrid',
  dominio: 'obralocalmadrid.es',
  actividad: 'servicios de reformas y obras en Madrid y alrededores',

  titular: EMPRESA.razonSocial,
  nif: EMPRESA.cif,
  domicilio: 'PENDIENTE("domicilio")',
  correo: 'PENDIENTE("correo de contacto")',
  /** Solo para sociedades: registro mercantil, tomo, folio y hoja. Déjalo vacío si no aplica. */
  registro: '',
  conservacion: 'PENDIENTE("plazo de conservación de las solicitudes")',

  datos: 'nombre, teléfono, correo electrónico (opcional), zona, tipo de inmueble y los detalles del proyecto que nos cuentes',
  proveedores: [
    'Hostinger: alojamiento de la web.',
    'Supabase: base de datos donde se guardan las solicitudes.',
    'EmailJS: envío del aviso por correo de cada solicitud.',
    'WhatsApp (Meta): solo si decides escribirnos por WhatsApp.',
    'Google Analytics (Google): estadísticas de visitas a la web, solo si aceptas las cookies analíticas.',
  ],
};
