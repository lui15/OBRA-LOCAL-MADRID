import type { NombreIcono } from '../compartido/icono';

export interface PasoObra {
  titulo: string;
  texto: string;
  icono: NombreIcono;
  imagen: string;
  imagenAlt: string;
}

/** Los cinco pasos de una reforma con ObraLocal Madrid. Solo lo que se cumple en cada obra. */
export const PASOS_OBRA: PasoObra[] = [
  {
    titulo: 'Nos cuentas tu idea',
    texto: 'Por el formulario, por WhatsApp o por teléfono: qué quieres reformar, dónde y cuándo te gustaría empezar.',
    icono: 'solicitud',
    imagen: '/images/piso-en-obra.webp',
    imagenAlt: 'Piso antes de empezar la reforma',
  },
  {
    titulo: 'Vemos el espacio',
    texto: 'Visitamos la vivienda o el local, o lo vemos con las fotos y medidas que nos envíes, para no presupuestar a ciegas.',
    icono: 'medicion',
    imagen: '/images/medicion-pared.webp',
    imagenAlt: 'Medición de una pared con cinta métrica',
  },
  {
    titulo: 'Presupuesto detallado y cerrado',
    texto: 'Te damos el presupuesto por escrito y cerrado antes de empezar. Si durante la obra hace falta algún cambio, te lo presupuestamos y lo apruebas por escrito antes de hacerlo.',
    icono: 'presupuesto',
    imagen: '/images/planos-mesa.webp',
    imagenAlt: 'Plano de una vivienda sobre una mesa',
  },
  {
    titulo: 'Obra con un único interlocutor',
    texto: 'Nuestro equipo de albañiles, fontaneros, electricistas, pintores y pladuristas hace la obra, y tú tienes un único interlocutor por WhatsApp y teléfono.',
    icono: 'obra',
    imagen: '/images/instalando-pladur.webp',
    imagenAlt: 'Operario trabajando en una pared durante la obra',
  },
  {
    titulo: 'Entrega y repaso final',
    texto: 'Al terminar revisamos contigo el resultado y repasamos lo que haga falta antes de dar la obra por terminada.',
    icono: 'revision',
    imagen: '/images/sala-vacia.webp',
    imagenAlt: 'Habitación limpia al terminar la obra',
  },
];
