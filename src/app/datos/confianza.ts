/**
 * Compromisos de la empresa. Mientras un texto contenga PENDIENTE("..."), ese punto NO se
 * muestra en la web. Sustituye cada PENDIENTE por el dato real cuando esté confirmado.
 */
export const CONFIANZA: { titulo: string; texto: string }[] = [
  {
    titulo: 'Garantía',
    texto: 'PENDIENTE("qué garantía ofrecéis, sobre qué trabajos y durante cuánto tiempo")',
  },
  {
    titulo: 'Seguro de responsabilidad civil',
    texto: 'PENDIENTE("confirmar que hay seguro de responsabilidad civil y qué cubre")',
  },
  {
    titulo: 'Presupuesto cerrado por partidas',
    texto: 'PENDIENTE("confirmar que el presupuesto es cerrado y cómo se aprueban los cambios")',
  },
  {
    titulo: 'Un responsable de obra',
    texto: 'PENDIENTE("quién es el responsable de obra y qué hace en cada reforma")',
  },
];
