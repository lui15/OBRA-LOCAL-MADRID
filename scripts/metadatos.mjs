// Lista title y description de cada página publicada con su longitud y marca los que se salen de la norma
// (title de 60 o menos, description de 140 a 158, sin repetir y sin precios salvo en las páginas de precios).   node scripts/metadatos.mjs
import { build } from 'esbuild';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const raiz = join(import.meta.dirname, '..');
const carpeta = mkdtempSync(join(tmpdir(), 'meta-'));
const salida = join(carpeta, 'datos.mjs');
try {
  await build({
    stdin: { contents: `export { PAGINAS } from './src/app/landing/landing-data.ts';`, resolveDir: raiz, loader: 'ts' },
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: salida,
    logLevel: 'silent',
  });
  const { PAGINAS } = await import(pathToFileURL(salida).href);
  const vistos = new Map();
  let mal = 0;
  for (const p of PAGINAS) {
    const avisos = [];
    if (p.title.length > 60) avisos.push(`title ${p.title.length}`);
    if (p.description.length < 140 || p.description.length > 158) avisos.push(`desc ${p.description.length}`);
    // Sin precios salvo en /precios/, la calculadora y las guías de precios.
    const conPrecios = p.path === 'precios' || p.path === 'calculadora-reforma' || p.path.startsWith('cuanto-cuesta');
    if (!conPrecios && /€|\d+\s*euros/.test(p.title + p.description)) avisos.push('precio en title o description');
    for (const campo of ['title', 'description']) {
      const clave = campo + p[campo];
      if (vistos.has(clave)) avisos.push(`${campo} repetido con /${vistos.get(clave)}`);
      vistos.set(clave, p.path);
    }
    if (avisos.length) mal++;
    console.log(`${avisos.length ? '✗' : '✓'} /${p.path} [${p.tipo}] ${avisos.join(', ')}\n    (${p.title.length}) ${p.title}\n    (${p.description.length}) ${p.description}`);
  }
  console.log(`\n${mal} páginas con metadatos fuera de norma de ${PAGINAS.length}`);
} finally {
  rmSync(carpeta, { recursive: true, force: true });
}
