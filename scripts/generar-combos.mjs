// Páginas servicio × zona: lee src/app/combinaciones/contenido/zonas/*.ts, las comprueba y genera
// src/app/combinaciones/indice.generado.ts (lista ligera para rutas, prerender, sitemap y enlaces).
//   node scripts/generar-combos.mjs            → genera y avisa
//   node scripts/generar-combos.mjs --estricto → además falla si algo no cumple (para el build)
import { build } from 'esbuild';
import { mkdtempSync, readdirSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const raiz = join(import.meta.dirname, '..');
const dirContenido = join(raiz, 'src/app/combinaciones/contenido/zonas');
const estricto = process.argv.includes('--estricto');

const archivos = existsSync(dirContenido) ? readdirSync(dirContenido).filter((f) => f.endsWith('.ts')).sort() : [];
const carpeta = mkdtempSync(join(tmpdir(), 'combos-'));
let paginas = [];
let SERVICIOS = [];
let ZONAS = [];
try {
  const entrada = [
    `export { SERVICIOS_COMBO } from './src/app/combinaciones/servicios.ts';`,
    `export { ZONAS_COMBO } from './src/app/combinaciones/zonas.ts';`,
    ...archivos.map((f, i) => `export { PAGINAS as z${i} } from './src/app/combinaciones/contenido/zonas/${f}';`),
  ].join('\n');
  const salida = join(carpeta, 'combos.mjs');
  await build({ stdin: { contents: entrada, resolveDir: raiz, loader: 'ts' }, bundle: true, format: 'esm', platform: 'node', outfile: salida, logLevel: 'silent' });
  const m = await import(pathToFileURL(salida).href);
  SERVICIOS = m.SERVICIOS_COMBO;
  ZONAS = m.ZONAS_COMBO;
  paginas = archivos.flatMap((f, i) => m[`z${i}`].map((p) => ({ ...p, archivo: f.replace('.ts', '') })));
} finally {
  rmSync(carpeta, { recursive: true, force: true });
}

const palabras = (t) => t.split(/\s+/).filter(Boolean).length;
const textos = (p) => [
  ...p.intro,
  ...p.barrio.flatMap((b) => [b.titulo, ...b.parrafos]),
  ...p.proceso.flatMap((x) => [x.titulo, x.texto]),
  ...p.incluye,
  ...p.precios,
  ...p.faqs.flatMap((f) => [f.pregunta, f.respuesta]),
];
const problemas = [];
const vistos = new Map();
const titulos = new Map();
const descs = new Map();
for (const p of paginas) {
  const id = `/${p.servicio}/${p.zona}/`;
  if (!SERVICIOS.some((s) => s.slug === p.servicio)) problemas.push(`${id}: servicio desconocido`);
  if (!ZONAS.some((z) => z.slug === p.zona)) problemas.push(`${id}: zona desconocida`);
  if (p.zona !== p.archivo) problemas.push(`${id}: está en contenido/zonas/${p.archivo}.ts`);
  const n = palabras(textos(p).join(' '));
  if (n < 800) problemas.push(`${id}: ${n} palabras (mínimo 800)`);
  if (p.faqs.length < 5 || p.faqs.length > 8) problemas.push(`${id}: ${p.faqs.length} preguntas (de 5 a 8)`);
  if (p.title.length > 60) problemas.push(`${id}: title de ${p.title.length}`);
  if (p.description.length < 140 || p.description.length > 158) problemas.push(`${id}: description de ${p.description.length}`);
  for (const [mapa, valor, campo] of [[titulos, p.title, 'title'], [descs, p.description, 'description']]) {
    if (mapa.has(valor)) problemas.push(`${id}: ${campo} repetido con ${mapa.get(valor)}`);
    mapa.set(valor, id);
  }
  // Párrafos repetidos entre páginas (normalizados; se ignoran los títulos cortos)
  for (const t of textos(p)) {
    const clave = t.toLowerCase().replace(/[^a-záéíóúüñ0-9 ]/g, '').replace(/\s+/g, ' ').trim();
    if (palabras(clave) < 10) continue;
    if (vistos.has(clave) && vistos.get(clave) !== id) problemas.push(`${id}: párrafo repetido con ${vistos.get(clave)}: «${t.slice(0, 70)}…»`);
    else vistos.set(clave, id);
  }
  p.palabras = n;
}
const duplicadas = paginas.map((p) => `${p.servicio}/${p.zona}`).filter((x, i, a) => a.indexOf(x) !== i);
for (const d of duplicadas) problemas.push(`/${d}/: definida dos veces`);

const zonasConContenido = [...new Set(paginas.map((p) => p.zona))];
const ts = `// Generado por scripts/generar-combos.mjs a partir de contenido/zonas/*.ts. No editar a mano.
import type { PaginaCombo } from './tipos';

export interface EntradaCombo {
  servicio: string;
  zona: string;
  title: string;
}

export const COMBOS: EntradaCombo[] = ${JSON.stringify(paginas.map((p) => ({ servicio: p.servicio, zona: p.zona, title: p.title })), null, 2)};

/** Carga el contenido de una zona solo cuando hace falta. */
export const CARGADORES: Record<string, () => Promise<PaginaCombo[]>> = {
${zonasConContenido.map((z) => `  '${z}': () => import('./contenido/zonas/${z}').then((m) => m.PAGINAS),`).join('\n')}
};

export function existeCombo(servicio: string, zona: string): boolean {
  return COMBOS.some((c) => c.servicio === servicio && c.zona === zona);
}
`;
writeFileSync(join(raiz, 'src/app/combinaciones/indice.generado.ts'), ts);
const total = paginas.reduce((n, p) => n + p.palabras, 0);
console.log(`combinaciones: ${paginas.length} páginas en ${zonasConContenido.length} zonas · media ${paginas.length ? Math.round(total / paginas.length) : 0} palabras`);
for (const p of problemas) console.log('AVISO ' + p);
if (estricto && problemas.length) process.exit(1);
