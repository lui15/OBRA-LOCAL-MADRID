import type { NombreIcono } from '../compartido/icono';

export interface PasoObra {
  titulo: string;
  texto: string;
  icono: NombreIcono;
  imagen: string;
  imagenAlt: string;
}

/** Los seis pasos de una reforma. Se muestran en /como-trabajamos. */
export const PASOS_OBRA: PasoObra[] = [
  {
    titulo: 'Solicitud',
    texto: 'Nos cuentas qué necesitas en el formulario, por teléfono o por WhatsApp. Basta con describir el trabajo y la zona.',
    icono: 'solicitud',
    imagen: '/images/piso-en-obra.webp',
    imagenAlt: 'Piso antes de empezar la reforma',
  },
  {
    titulo: 'Visita y medición',
    texto: 'Vemos el espacio, tomamos medidas y revisamos el estado de paredes, suelos e instalaciones para no presupuestar a ciegas.',
    icono: 'medicion',
    imagen: '/images/medicion-pared.webp',
    imagenAlt: 'Medición de una pared con cinta métrica',
  },
  {
    titulo: 'Presupuesto detallado',
    texto: 'Recibes un presupuesto sin compromiso, con partidas, materiales, mano de obra, impuestos y lo que queda fuera.',
    icono: 'presupuesto',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una vivienda sobre una mesa',
  },
  {
    titulo: 'Planificación y fechas',
    texto: 'Acordamos contigo cuándo se empieza, el orden de los trabajos y los materiales. También es el momento de avisar a tu comunidad.',
    icono: 'calendario',
    imagen: '/images/planos-medidas.webp',
    imagenAlt: 'Plano con cinta métrica y bolígrafo',
  },
  {
    titulo: 'Ejecución de la obra',
    texto: 'Protegemos las zonas de paso y avanzamos de lo grueso a lo fino: demolición, instalaciones, revestimientos y acabados.',
    icono: 'obra',
    imagen: '/images/instalando-pladur.webp',
    imagenAlt: 'Operario trabajando en una pared durante la obra',
  },
  {
    titulo: 'Limpieza y revisión final',
    texto: 'Limpiamos, revisamos contigo el resultado y comprobamos que todo funciona antes de dar la obra por terminada.',
    icono: 'revision',
    imagen: '/images/sala-vacia.webp',
    imagenAlt: 'Habitación limpia al terminar la obra',
  },
];
