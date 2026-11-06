// Genera public/sitemap.xml a partir de src/app/landing/landing-data.ts y revisa el contenido.
//   node scripts/generar-sitemap.mjs              escribe el sitemap (se lanza antes de cada build)
//   node scripts/generar-sitemap.mjs --comprobar  además falla si hay problemas de contenido
import { build } from 'esbuild';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const estricto = process.argv.includes('--comprobar');
const raiz = join(import.meta.dirname, '..');

async function cargarDatos() {
  const carpeta = mkdtempSync(join(tmpdir(), 'sitemap-'));
  const salida = join(carpeta, 'datos.mjs');
  try {
    await build({
      stdin: {
        contents: `
          export { PAGINAS, ULTIMA_REVISION, buscarPagina } from './src/app/landing/landing-data.ts';
          export { SITE_URL } from './src/app/datos/contacto.ts';
        `,
        resolveDir: raiz,
        loader: 'ts',
      },
      bundle: true,
      format: 'esm',
      platform: 'node',
      outfile: salida,
      logLevel: 'silent',
    });
    return await import(pathToFileURL(salida).href);
  } finally {
    rmSync(carpeta, { recursive: true, force: true });
  }
}

const palabras = (texto) => texto.split(/\s+/).filter(Boolean).length;

function textoDe(p) {
  return [
    p.intro,
    ...p.secciones.flatMap((s) => [
      s.titulo,
      ...s.parrafos,
      ...(s.lista ?? []),
      ...(s.subsecciones ?? []).flatMap((x) => [x.titulo, x.texto]),
    ]),
    ...p.faqs.flatMap((f) => [f.pregunta, f.respuesta]),
  ].join(' ');
}

function revisar(PAGINAS) {
  const problemas = [];
  const paths = new Set();
  const titulos = new Set();

  for (const p of PAGINAS) {
    const url = '/' + p.path;
    if (paths.has(p.path)) problemas.push(`${url}: ruta duplicada`);
    paths.add(p.path);
    if (titulos.has(p.title)) problemas.push(`${url}: title duplicado`);
    titulos.add(p.title);
    if (p.title.length > 60) problemas.push(`${url}: title de ${p.title.length} caracteres`);
    if (p.description.length > 155) {
      problemas.push(`${url}: description de ${p.description.length} caracteres`);
    }
    // La portada tiene además su contenido propio en la plantilla.
    if (p.tipo !== 'inicio' && palabras(textoDe(p)) < 600) {
      problemas.push(`${url}: solo ${palabras(textoDe(p))} palabras`);
    }
  }

  for (const p of PAGINAS) {
    if (p.padre !== undefined && !paths.has(p.padre)) problemas.push(`/${p.path}: padre inexistente`);
    for (const r of p.relacionadas) {
      if (!paths.has(r)) problemas.push(`/${p.path}: relacionada inexistente (${r})`);
    }
  }

  return problemas;
}

try {
  const { PAGINAS, ULTIMA_REVISION, SITE_URL } = await cargarDatos();

  const urls = PAGINAS.map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}/${p.path}</loc>\n    <lastmod>${ULTIMA_REVISION}</lastmod>\n  </url>`,
  ).join('\n');

  writeFileSync(
    join(raiz, 'public/sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  console.log(`sitemap.xml: ${PAGINAS.length} URL`);

  const problemas = revisar(PAGINAS);
  for (const problema of problemas) console.warn(`AVISO ${problema}`);
  if (estricto) {
    for (const p of PAGINAS) console.log(`${String(palabras(textoDe(p))).padStart(5)} palabras  /${p.path}`);
    if (problemas.length) process.exit(1);
  }
} catch (error) {
  // Un fallo aquí no debe tumbar el despliegue: queda el sitemap que hay en el repositorio.
  if (estricto) throw error;
  console.warn('No se pudo regenerar sitemap.xml; se mantiene el actual.', error.message);
}
