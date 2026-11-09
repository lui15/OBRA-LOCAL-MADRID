// Lista todos los datos sin confirmar: cada PENDIENTE("...") del código.
//   node scripts/pendientes.mjs
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const raiz = join(import.meta.dirname, '..');
const encontrados = new Map();

function recorrer(dir) {
  for (const nombre of readdirSync(dir)) {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) recorrer(ruta);
    else if (/\.(ts|html)$/.test(nombre)) {
      for (const [, texto] of readFileSync(ruta, 'utf8').matchAll(/PENDIENTE\(\\?"([^"\\]+)\\?"\)/g)) {
        const archivo = relative(raiz, ruta).replaceAll('\\', '/');
        if (!encontrados.has(texto)) encontrados.set(texto, new Set());
        encontrados.get(texto).add(archivo);
      }
    }
  }
}

recorrer(join(raiz, 'src'));
console.log(`${encontrados.size} datos pendientes\n`);
for (const [texto, archivos] of [...encontrados].sort()) console.log(`- ${texto}  (${[...archivos].join(', ')})`);
