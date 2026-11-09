import { EMPRESA } from '../datos/contacto';

/**
 * Datos de los textos legales. Titular, NIF, domicilio y correo son los de ArmaMuebles (mismo titular).
 * Son un borrador: conviene que los revise un profesional.
 */
export const LEGAL = {
  nombre: 'ObraLocal Madrid',
  dominio: 'obralocalmadrid.es',
  actividad: 'servicios de reformas y obras en Madrid y alrededores',

  titular: EMPRESA.razonSocial,
  nif: EMPRESA.nif,
  domicilio: EMPRESA.domicilio,
  correo: EMPRESA.correo,
  /** Solo para sociedades: registro mercantil, tomo, folio y hoja. Déjalo vacío si no aplica. */
  registro: '',
  conservacion:
    'Conservamos tus datos durante 12 meses si la solicitud no llega a contratarse. Si se contrata, los guardamos el tiempo que exija la ley.',

  datos: 'nombre, teléfono, correo electrónico (opcional), zona, tipo de inmueble y los detalles del proyecto que nos cuentes',
  proveedores: [
    'Hostinger: alojamiento de la web.',
    'Supabase: base de datos donde se guardan las solicitudes.',
    'EmailJS: envío del aviso por correo de cada solicitud.',
    'WhatsApp (Meta): solo si decides escribirnos o enviarnos tu solicitud o tus fotos por WhatsApp.',
    'Google Analytics (Google): estadísticas de visitas a la web, solo si aceptas las cookies analíticas.',
  ],
  /** Comunicación de datos necesaria para prestar el servicio. */
  comunicacion:
    'Para prestar el servicio, comunicamos los datos necesarios de tu solicitud a los profesionales que ejecutan la obra (albañiles, fontaneros, electricistas, pintores y pladuristas), solo para preparar el presupuesto y realizar el trabajo.',
};
