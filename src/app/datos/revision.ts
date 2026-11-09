/** Última revisión del contenido: lastmod del sitemap y «Actualizado» de cada página. */
export const ULTIMA_REVISION = '2026-11-09';

const MESES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

/** «2026-11-09» → «noviembre 2026». */
export function mesYAnio(fecha: string): string {
  const [anio, mes] = fecha.split('-').map(Number);
  return `${MESES[mes - 1]} ${anio}`;
}

/** Un dato sin confirmar se escribe PENDIENTE("..."): así se encuentra y se lista al final. */
export function esPendiente(texto: string | null | undefined): boolean {
  return !texto || texto.includes('PENDIENTE(');
}
