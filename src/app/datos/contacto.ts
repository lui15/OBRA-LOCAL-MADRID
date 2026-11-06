/**
 * Datos de contacto y de la empresa, en un solo sitio.
 * Lo que está vacío no aparece ni en la web ni en los datos estructurados:
 * rellénalo aquí cuando esté confirmado y se mostrará solo.
 */
export const NEGOCIO = {
  nombre: 'ObraLocalMADRID',
  /** Formato internacional, sin espacios. Ej.: +34600000000 */
  telefono: '',
  /** Solo dígitos, con prefijo. Ej.: 34600000000 */
  whatsapp: '',
  /** URLs públicas de redes sociales. */
  redes: [] as string[],
  /** Horario para los datos estructurados. Ej.: ['Mo-Fr 08:00-20:00'] */
  horario: [] as string[],
  /** Correo que recibe el aviso de cada solicitud. */
  correoSolicitudes: 'tramoreforma@gmail.com',
};

/** Dominio final, sin barra al final. */
export const SITE_URL = 'https://obralocalmadrid.es';
