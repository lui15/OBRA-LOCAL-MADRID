/**
 * Datos de contacto y de la empresa, en un solo sitio.
 * Lo que está vacío no aparece ni en la web ni en los datos estructurados.
 */
export const NEGOCIO = {
  nombre: 'ObraLocal Madrid',
  /** Formato internacional, sin espacios. */
  telefono: '+34624671374',
  telefonoVisible: '624 67 13 74',
  /** Solo dígitos, con prefijo. */
  whatsapp: '34624671374',
  zonaServicio: 'Madrid y alrededores',
  /** URLs públicas de redes sociales. */
  redes: [] as string[],
  /** TODO: horario confirmado para los datos estructurados. Ej.: ['Mo-Fr 08:00-20:00'] */
  horario: [] as string[],
  /** Correo que recibe el aviso de cada solicitud. */
  correoSolicitudes: 'tramoreforma@gmail.com',
};

/** Persona que revisa el contenido. Se muestra en cada página. */
export const RESPONSABLE_OBRA = 'PENDIENTE("nombre del responsable de obra")';

/** Datos de la empresa para el pie y los textos legales. */
export const EMPRESA = {
  razonSocial: 'PENDIENTE("razón social")',
  cif: 'PENDIENTE("CIF")',
};

/** Dominio final, sin barra al final. */
export const SITE_URL = 'https://obralocalmadrid.es';

export const ENLACE_TELEFONO = `tel:${NEGOCIO.telefono}`;

export const MENSAJE_GENERAL = 'Hola, quiero pedir presupuesto para una reforma';

/** Enlace de WhatsApp con el mensaje ya escrito. */
export function enlaceWhatsApp(mensaje: string = MENSAJE_GENERAL): string {
  return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
