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
          export { PAGINAS, TODAS_LAS_PAGINAS, ULTIMA_REVISION, buscarPagina } from './src/app/landing/landing-data.ts';
          export { PROYECTOS_PUBLICADOS } from './src/app/datos/proyectos.ts';
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

/** Mínimo de palabras de contenido propio según el tipo de página. */
const MINIMO = { guia: 1200, zona: 600, servicio: 600, trabajo: 600, hub: 600, info: 600, herramienta: 300 };
const minimoDe = (p) => (p.path === 'precios' ? 2500 : MINIMO[p.tipo] ?? 0);

function textoDe(p) {
  return [
    p.intro,
    p.aviso ?? '',
    ...p.secciones.flatMap((s) => [
      s.titulo,
      ...s.parrafos,
      ...(s.lista ?? []),
      ...(s.subsecciones ?? []).flatMap((x) => [x.titulo, x.texto]),
    ]),
    ...(p.gruposFaq?.flatMap((g) => g.faqs) ?? p.faqs).flatMap((f) => [f.pregunta, f.respuesta]),
  ].join(' ');
}

function revisar(PAGINAS, todas = new Set()) {
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
    if (p.puntos.length !== 4) problemas.push(`${url}: la franja no tiene 4 datos`);
    if (!p.whatsapp) problemas.push(`${url}: sin mensaje de WhatsApp`);
    // La portada tiene además su contenido propio en la plantilla.
    if (palabras(textoDe(p)) < minimoDe(p)) {
      problemas.push(`${url}: solo ${palabras(textoDe(p))} palabras (mínimo ${minimoDe(p)})`);
    }
  }

  for (const p of PAGINAS) {
    if (p.padre !== undefined && !paths.has(p.padre)) problemas.push(`/${p.path}: padre inexistente`);
    for (const r of p.relacionadas) {
      if (!paths.has(r) && !todas.has(r)) problemas.push(`/${p.path}: relacionada inexistente (${r})`);
    }
  }

  return problemas;
}

try {
  const { PAGINAS, TODAS_LAS_PAGINAS, PROYECTOS_PUBLICADOS, ULTIMA_REVISION, SITE_URL } = await cargarDatos();

  // URL con barra final, que es la que sirve el hosting sin redirección.
  const rutas = [
    ...PAGINAS.map((p) => (p.path ? `/${p.path}/` : '/')),
    ...(PROYECTOS_PUBLICADOS.length ? ['/proyectos/', ...PROYECTOS_PUBLICADOS.map((p) => `/proyectos/${p.slug}/`)] : []),
  ];
  const urls = rutas
    .map((r) => `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <lastmod>${ULTIMA_REVISION}</lastmod>\n  </url>`)
    .join('\n');

  writeFileSync(
    join(raiz, 'public/sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  console.log(`sitemap.xml: ${rutas.length} URL`);

  const problemas = revisar(
    TODAS_LAS_PAGINAS.filter((p) => !p.borrador),
    new Set(TODAS_LAS_PAGINAS.map((p) => p.path)),
  );
  for (const problema of problemas) console.warn(`AVISO ${problema}`);
  if (estricto) {
    for (const p of TODAS_LAS_PAGINAS) console.log(`${String(palabras(textoDe(p))).padStart(5)} palabras  /${p.path}${p.borrador ? '  (borrador)' : ''}`);
    if (problemas.length) process.exit(1);
  }
} catch (error) {
  // Un fallo aquí no debe tumbar el despliegue: queda el sitemap que hay en el repositorio.
  if (estricto) throw error;
  console.warn('No se pudo regenerar sitemap.xml; se mantiene el actual.', error.message);
}
