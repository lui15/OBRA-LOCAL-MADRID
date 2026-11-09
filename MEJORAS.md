# Mejoras ObraLocal Madrid: auditoría y plan

Rama `mejora-maximo-nivel`, creada desde `mejoras-competencia`. Fecha: 9 de noviembre de 2026.

## Fase 1. Auditoría

### Recorrido a 375 px y 1280 px
- Portada, servicio (baños), `/precios/` y zona (Chamberí): sin scroll horizontal y sin errores de consola.
- **Formulario actual:** a 375 px, la primera pantalla es una cabecera oscura con tres ventajas. La primera pregunta («Nombre y apellidos») queda por debajo del pliegue. El orden es datos personales → proyecto → detalles, y el último paso obliga a escribir una descripción. Es el motivo de abandono del que habla el encargo.
- No hay barra inferior fija en el móvil. El botón «Siguiente» se mueve con el contenido.

### `npm run pendientes`
- Devuelve 51 datos pendientes (unas 55 entradas al expandir las plantillas).
- Cada grupo se cubre así:

| Grupo | Archivos | Cómo se cierra |
|---|---|---|
| Razón social, CIF, domicilio, correo, conservación | `contacto.ts`, `legal-data.ts` | Datos de ArmaMuebles (mismo titular) |
| Responsable de obra | `contacto.ts`, `revision.ts` | Se elimina; queda «Actualizado: mes año» |
| Garantía, seguro RC | `confianza.ts` | Se eliminan |
| Presupuesto cerrado, interlocutor | `confianza.ts` | Textos del encargo |
| €/m² por calidad, ejemplo de 80 m², plazos, suelos | `precios-guia.ts`, guías | Tablas del encargo |
| Origen de los rangos | `paginas-hub.ts` | Frase del encargo |
| Licencia: qué gestionamos | `paginas-info.ts` | Se elimina la sección |
| Ayudas: Comunidad, IRPF, documentación | `paginas-info.ts` | Se verifica en fuente oficial o se elimina |
| Proyectos (3 de ejemplo) | `proyectos.ts` | Fuera del menú, del pie y del sitemap, con `noindex`; el código queda listo |
| 8 servicios en borrador | `paginas-servicios-borrador.ts`, `fichas.generado.ts` | Fuera de rutas y del sitemap, con el comentario «borrador sin publicar» |

### Qué envía hoy el formulario
`presupuesto-envio.service.ts`:
- **Supabase**, tabla `public.requests`. Solo insert, sin select (RLS). Un `id` UUID evita duplicados al reintentar (el error 23505 se trata como guardado). Columnas:
  - `source = 'obralocalmadrid'`;
  - `name`, `phone`, `email` (o null);
  - `service`;
  - `description`;
  - `details` (JSON): `zona`, `metros`, `tipo_inmueble`, `estado`, `materiales`, `plazo`, `presupuesto_previsto`.
- **EmailJS:**
  - servicio `service_zsdcdm9`, plantilla `template_990lvyf`;
  - parámetros: `nombre`, `telefono`, `correo`, `servicio`, `zona`, `metros`, `tipo_inmueble`, `estado`, `materiales`, `plazo`, `presupuesto`, `descripcion`, `to_email` (= `NEGOCIO.correoSolicitudes`), `subject`.
- **Analítica:**
  - `form_open`, `form_step`, `form_error`;
  - `generate_lead`, que hoy se envía cuando EmailJS confirma el aviso;
  - `click_whatsapp` y `click_telefono`, desde `analitica.service.ts`.

### Qué muestra el panel (`../GESTION-TRABAJO/src/app/app.ts`)
- Columnas: `name`, `phone`, `email`, `service`, `description` y `source`.
- `details` se pinta de forma genérica:
  - cada clave es una etiqueta («tipoInmueble» → «Tipo inmueble»);
  - las listas se unen con comas;
  - los objetos se muestran como JSON en crudo;
  - se ocultan `is_test`, `test_batch` y los valores vacíos.
- **Consecuencia:** en `details` solo irán valores planos (texto, número o lista) para que se lean bien. `precioOrientativo` irá como texto («6.500 € – 8.500 €») y además `precioMinimo` y `precioMaximo` en número. Las UTM irán como `utm_source`, `utm_medium` y `utm_campaign`, solo si existen.

### Fuentes oficiales comprobadas (9 de noviembre de 2026)
- **ICIO:**
  - Portal del Contribuyente del Ayuntamiento de Madrid (Ordenanza Fiscal 7/2023): **3,75 %** para obras iniciadas desde el 1 de enero de 2024 (4 % para las anteriores), sobre el coste de ejecución material.
  - **El 4 % del encargo no es el tipo vigente:** se publica el 3,75 %.
- **Licencia y declaración responsable:** Ordenanza 6/2022 (OLDRUAM), BOCM nº 116 de 17 de mayo de 2022.
  - Art. 6.b: no necesitan título las obras de sustitución de acabados interiores de una sola vivienda no protegida.
  - Art. 26 y anexo II.A: todo lo que necesite intervención municipal y no esté en el anexo I va por declaración responsable.
  - Art. 34 y anexo I: licencia para obras con proyecto técnico (LOE art. 2.2), edificios catalogados, etc.
  - sede.madrid.es devuelve 403 a herramientas automáticas: se enlaza, pero no se pudo leer la versión consolidada de 2023.
- **IRPF por eficiencia energética:**
  - Agencia Tributaria, página actualizada el 9 de abril de 2026, y Real Decreto-ley 7/2026.
  - Obras de vivienda hasta el 31 de diciembre de 2026, con el certificado expedido antes del 1 de enero de 2027. Edificios residenciales hasta el 31 de diciembre de 2027.
  - Los porcentajes y las bases no se pudieron leer en la fuente: no se publican.
- **Plan Rehabilita Madrid 2026:** nota de prensa de madrid.es del 2 de junio de 2026. Solicitudes desde el 3 de junio de 2026, para edificios residenciales existentes, en seis líneas. La fecha de cierre no se confirmó en la fuente leída: se remite a la sede.
- **Comunidad de Madrid:** no se pudo confirmar ninguna convocatoria abierta. Se elimina.

### Precios
- **El desglose de 80 m² no cuadra con el total del encargo:** las partidas suman **44.000–73.500 €**, no 52.000–68.000 €. Como indica el encargo, se ajusta el total y no las partidas.
- El rango de 650–850 €/m² × 80 m² (52.000–68.000 €) se muestra aparte, como precio por m², y se explica que el desglose incluye ventanas y cocina completa.

## Plan por fases (un commit por fase)
1. **Auditoría:** este documento.
2. **Formulario nuevo:**
   - 4 pasos (trabajo → cómo es → dónde y cuándo → contacto), con precio en vivo.
   - Botón fijo abajo, progreso en `sessionStorage`, WhatsApp en cada paso.
   - Pantalla de éxito con fotos por WhatsApp; si el envío falla, alternativa por WhatsApp.
   - Mismo destino. Los campos nuevos van dentro de `details`; el resumen va en `description` y en el parámetro `descripcion` del correo.
   - `generate_lead` se envía al confirmar Supabase, con `value`.
   - Barra inferior en el móvil y paso 1 o zona preseleccionados.
3. **Opiniones:** `opiniones.ts`, `/opiniones/`, carrusel en portada, opiniones por servicio, resumen calculado y nota legal. Sin `Review` ni `AggregateRating`.
4. **Precios:** un único archivo de precios con las tablas del encargo. `/precios/` rehecha; bloques «Cuánto cuesta» y `PriceSpecification` en los servicios; calculadora y guías con las mismas cifras.
5. **Datos legales, eliminaciones, captación y SEO:** pendientes a 0, licencia y ayudas verificadas, proyectos fuera, metadatos, enlazado y sitemap.
6. **Verificación:** build, pendientes = 0, pruebas del formulario a 375 y 414 px con todo bloqueado, capturas, Lighthouse e informe.

## Fase 6. Verificación (9 de noviembre de 2026)

- **Build:** `npm run build` sin errores ni avisos; 47 rutas prerenderizadas.
- **Pendientes:** `npm run pendientes` devuelve 0. «PENDIENTE» no aparece en ningún archivo de `dist/` (ni HTML ni JS).
- **SEO local:** las 44 URL del sitemap pasan la comprobación:
  - 200 sin redirección, un H1, canónica con barra final;
  - title y description únicos dentro de los límites (title < 60, description de 140 a 155);
  - JSON-LD válido, sin `Review` ni `AggregateRating`;
  - teléfono +34624671374;
  - enlaces internos con barra final.
- **Proyectos:** `/proyectos/` lleva noindex y `/proyectos/<cualquiera>/` devuelve 404.
- **Formulario a 375 y 414 px:** 39 de 39 comprobaciones superadas en cada ancho.
  - Condiciones: Supabase y EmailJS interceptados con respuestas simuladas; Google Analytics bloqueado.
  - Se ha probado: los 9 tipos de obra, la validación, la recarga a mitad, el éxito y el fallo con su alternativa por WhatsApp, el paso 1 preseleccionado y la zona rellena.
  - Mismo destino: los mismos parámetros de EmailJS y la misma plantilla.
- **Lighthouse en el móvil** (portada y `/precios/`):
  - Accesibilidad 100, buenas prácticas 100 y SEO 100.
  - Rendimiento 72–86: no es fiable, porque durante la prueba el equipo tenía un juego abierto (CPU al 53 %). Lo confirma que páginas sin cambios, como Getafe, pasaron de 60 ms de TBT a más de 1 s.
  - Hay que repetirlo con el equipo libre o con PageSpeed Insights después de desplegar.
