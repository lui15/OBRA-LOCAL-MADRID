// Escribe los titles y las descriptions de las páginas en sus archivos de datos.
// Description: «⭐ ${NOTA_GOOGLE} en Google · ✓ A · ✓ B · ✓ C. Frase.» Elige las 3 ventajas que dejan
// la description entre 140 y 158 caracteres. La nota se lee de NOTA_GOOGLE (datos/contacto.ts).
//   node scripts/meta-seo.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const raiz = join(import.meta.dirname, '..');
const NOTA = readFileSync(join(raiz, 'src/app/datos/contacto.ts'), 'utf8').match(/NOTA_GOOGLE = '([^']+)'/)[1];

const VENTAJAS = [
  'Visita sin compromiso',
  'Presupuesto detallado',
  'Presupuesto ajustado',
  'Te atendemos solo nosotros',
  'Sin llamadas de 5 empresas',
  'Una sola persona de contacto',
  'Trato cercano y ordenado',
];
// Orden preferido de combinaciones (la primera que encaja en 140–158 gana).
const PREFERIDAS = [
  [0, 1, 5], [0, 3, 5], [3, 0, 1], [0, 2, 6], [4, 0, 5], [0, 1, 6], [3, 4, 5], [0, 2, 5], [1, 2, 0], [0, 6, 1],
  [4, 0, 1], [0, 5, 6], [3, 0, 6], [2, 0, 6], [0, 1, 2], [3, 1, 5], [4, 3, 5], [3, 4, 6], [0, 3, 1], [4, 3, 1],
];

const largo = (vs, frase) => `⭐ ${NOTA} en Google · ${vs.map((v) => '✓ ' + v).join(' · ')}. ${frase}`.length;

/** path → [title (o null para no tocarlo), frase de la description]. */
export const META = {
  '': ['Reformas en Madrid con visita sin compromiso | ObraLocal', 'Baños, cocinas e integrales.'],
  servicios: [null, 'Integrales, baños, cocinas, pintura, pladur y más.'],
  precios: ['Precios de reformas en Madrid 2026 | ObraLocal', 'Baño desde 5.000 €, cocina desde 8.000 € y piso por m².'],
  zonas: [null, 'Madrid capital y municipios de alrededor.'],
  'como-trabajamos': ['Cómo trabajamos: visita sin compromiso y trato cercano', 'Así es tu reforma con nosotros, paso a paso.'],
  opiniones: ['Opiniones de clientes de reformas | ObraLocal Madrid', 'Lo que cuentan nuestros clientes, sin editar.'],
  'preguntas-frecuentes': [null, 'Permisos, comunidad, plazos e IVA de tu reforma.'],
  'reformas-integrales-madrid': ['Reformas integrales en Madrid | Visita sin compromiso', 'Reformas integrales de pisos en Madrid.'],
  'reforma-banos-madrid': ['Reforma de baños en Madrid con visita sin compromiso', 'Baño completo o cambio de bañera por ducha.'],
  'reforma-cocinas-madrid': ['Reforma de cocinas en Madrid con visita sin compromiso', 'Cocinas nuevas, encimeras y distribución.'],
  'albanileria-madrid': ['Albañiles en Madrid con trato cercano | ObraLocal', 'Tabiques, alicatados, humedades y obra.'],
  'pintores-madrid': ['Pintores en Madrid con presupuesto ajustado | ObraLocal', 'Pintamos tu piso y quitamos el gotelé.'],
  'pladur-madrid': ['Pladur en Madrid: tabiques y techos | ObraLocal', 'Tabiques, falsos techos y trasdosados.'],
  'alisado-paredes-madrid': ['Alisado de paredes en Madrid | ObraLocal', 'Paredes lisas, listas para pintar.'],
  'cambiar-banera-por-plato-ducha-madrid': ['Cambiar bañera por plato de ducha en Madrid | ObraLocal', 'Cambia la bañera por un plato de ducha.'],
  'quitar-gotele-madrid': ['Quitar gotelé en Madrid | ObraLocal', 'Quitamos el gotelé, alisamos y pintamos.'],
  'reforma-piso-completo-madrid': ['Reforma de piso completo en Madrid | ObraLocal', 'Tu piso completo, de la obra a la entrega.'],
  calculadora: null,
  'calculadora-reforma': [null, 'Calcula precio y plazo de tu reforma en un minuto.'],
  'licencia-obra-madrid': [null, 'Licencia, declaración responsable e ICIO.'],
  'ayudas-reformas-madrid': [null, 'Plan Rehabilita y deducciones del IRPF.'],
  guias: [null, 'Guías para preparar tu reforma en Madrid.'],
  'cuanto-cuesta-reformar-piso-70-m2-madrid': [null, 'Reformar un piso de 70 m²: desde 35.000 €.'],
  'orden-trabajos-reforma-integral': [null, 'En qué orden se hace una reforma integral.'],
  'que-pedir-presupuesto-reforma': [null, 'Qué debe incluir un presupuesto de reforma.'],
  'alisar-paredes-o-quitar-gotele': [null, 'Alisar paredes o quitar gotelé: diferencias.'],
};
// Zonas: title «Reformas en {Zona} con visita sin compromiso» y un rasgo real de la zona.
export const ZONAS = {
  'reformas-chamberi': ['Chamberí', 'fincas antiguas y techos altos'],
  'reformas-salamanca': ['Salamanca', 'pisos amplios en fincas clásicas'],
  'reformas-retiro': ['Retiro', 'fincas de varias épocas junto al parque'],
  'reformas-carabanchel': ['Carabanchel', 'bloques de mediados del siglo XX'],
  'reformas-alcobendas': ['Alcobendas', 'pisos, adosados y chalets'],
  'reformas-getafe': ['Getafe', 'bloques de los 60 y 70 y barrios nuevos'],
  'reformas-leganes': ['Leganés', 'grandes conjuntos de bloques'],
  'reformas-alcorcon': ['Alcorcón', 'parques residenciales y Ensanche Sur'],
  'reformas-mostoles': ['Móstoles', 'bloques y vivienda reciente'],
  'reformas-pozuelo-de-alarcon': ['Pozuelo de Alarcón', 'pisos y unifamiliares'],
  'reformas-las-rozas': ['Las Rozas', 'pisos y urbanizaciones'],
  'reformas-majadahonda': ['Majadahonda', 'urbanizaciones y pisos amplios'],
  'reformas-moncloa': ['Moncloa-Aravaca', 'fincas en Argüelles y chalets'],
  'reformas-tetuan': ['Tetuán', 'pisos pequeños y calles estrechas'],
  'reformas-arganzuela': ['Arganzuela', 'fincas junto a Madrid Río'],
  'reformas-chamartin': ['Chamartín', 'pisos amplios y colonias'],
  'reformas-latina': ['Latina', 'bloques de los 50 a los 70'],
  'reformas-ciudad-lineal': ['Ciudad Lineal', 'pisos y casas en Arturo Soria'],
  'reformas-vallecas': ['Vallecas', 'Puente y Villa de Vallecas'],
};

function descripcion(frase) {
  for (const c of PREFERIDAS) {
    const vs = c.map((i) => VENTAJAS[i]);
    const n = largo(vs, frase);
    if (n >= 140 && n <= 158) return { vs, n };
  }
  return null;
}

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const archivos = ['paginas-hub.ts', 'paginas-servicios.ts', 'paginas-trabajos.ts', 'paginas-zonas.ts', 'paginas-zonas-ampliadas.ts', 'paginas-guias.ts', 'paginas-info.ts', 'paginas-nuevas.ts'];
const problemas = [];
let hechas = 0;
for (const a of archivos) {
  const ruta = join(raiz, 'src/app/landing', a);
  let s;
  try { s = readFileSync(ruta, 'utf8').replace(/\r\n/g, '\n'); } catch { continue; }
  const trozos = s.split(/(?=\n    path: ')/);
  for (let i = 0; i < trozos.length; i++) {
    const m = trozos[i].match(/^\n    path: '([^']*)',/);
    if (!m) continue;
    const path = m[1];
    let title = null;
    let frase = null;
    if (ZONAS[path]) {
      const [zona, rasgo] = ZONAS[path];
      title = `Reformas en ${zona} con visita sin compromiso`;
      frase = `Reformas en ${zona}: ${rasgo}.`;
    } else if (META[path]) {
      [title, frase] = META[path];
    } else continue;
    const d = descripcion(frase);
    if (!d) { problemas.push(`/${path}: ninguna combinación de ventajas cabe con «${frase}»`); continue; }
    if (title && title.length > 60) problemas.push(`/${path}: title de ${title.length}`);
    const nuevaDesc = `\`⭐ \${NOTA_GOOGLE} en Google · ${d.vs.map((v) => '✓ ' + v).join(' · ')}. ${esc(frase)}\``;
    let t = trozos[i];
    if (title) t = t.replace(/\n    title: (?:'(?:[^'\\]|\\.)*'|`[^`]*`),/, `\n    title: '${title.replace(/'/g, "\\'")}',`);
    t = t.replace(/\n    description:\n      (?:'(?:[^'\\]|\\.)*'|`[^`]*`),/, `\n    description:\n      ${nuevaDesc},`);
    if (t === trozos[i] && !trozos[i].includes(nuevaDesc)) problemas.push(`/${path}: no se encontró title/description`);
    trozos[i] = t;
    hechas++;
  }
  s = trozos.join('');
  if (s.includes('${NOTA_GOOGLE}') && !/import \{[^}]*NOTA_GOOGLE[^}]*\} from '\.\.\/datos\/contacto';/.test(s)) {
    s = `import { NOTA_GOOGLE } from '../datos/contacto';\n` + s;
  }
  writeFileSync(ruta, s);
}
console.log(`páginas: ${hechas}`);
if (problemas.length) console.log('PROBLEMAS:\n' + problemas.join('\n'));
