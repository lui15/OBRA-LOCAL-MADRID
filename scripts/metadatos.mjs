// Lista title y description de cada página publicada con su longitud y marca los que se salen de la norma
// (title < 60, description 140–155, sin repetir).   node scripts/metadatos.mjs
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
    if (p.title.length >= 60) avisos.push(`title ${p.title.length}`);
    if (p.description.length < 140 || p.description.length > 155) avisos.push(`desc ${p.description.length}`);
    for (const campo of ['title', 'description']) {
      const clave = campo + p[campo];
      if (vistos.has(clave)) avisos.push(`${campo} repetido con /${vistos.get(clave)}`);
      vistos.set(clave, p.path);
    }
    if (avisos.length) mal++;
    console.log(`${avisos.length ? '✗' : '✓'} /${p.path} [${p.tipo}] ${avisos.join(', ')}\n    ${p.title}\n    ${p.description}`);
  }
  console.log(`\n${mal} páginas con metadatos fuera de norma de ${PAGINAS.length}`);
} finally {
  rmSync(carpeta, { recursive: true, force: true });
}
