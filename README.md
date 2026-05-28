# Sotomayor Consulting — Sitio Web Corporativo Premium

Este repositorio contiene el código fuente y los archivos de contenido estructurado (`.md`) para la plataforma web oficial de **Sotomayor Consulting** y **Sotomayor Consulting International** (v2026). El sitio está diseñado bajo un enfoque *High-Ticket* orientado a la captación de leads empresariales, grupos económicos y clientes que buscan blindaje patrimonial, optimización fiscal transfronteriza y estructuras de control global.

## 🚀 Arquitectura Tecnológica

La plataforma está desarrollada utilizando el ecosistema moderno de desarrollo web:

* **Framework:** [Astro](https://astro.build/) — Para lograr una velocidad de carga instantánea, optimización SEO extrema y entrega de HTML estático sin JavaScript innecesario.
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) — Para un diseño utilitario, modular y responsive.
* **Manejo de Íconos:** [Astro Icon](https://github.com/natemoo-re/astro-icon) integrado de forma nativa con **Material Symbols**.
* **Gestión de Contenido:** Markdown con Frontmatter extendido (YAML) para una separación limpia entre los datos del negocio y los componentes visuales.

---

## 📂 Estructura de Servicios (22 Especialidades)

El contenido del portafolio se encuentra segmentado en la ruta `src/content/services/` (o la ruta de colecciones definida en tu proyecto), dividido en 4 bloques estratégicos de conversión:

### 💼 1. Área Fiscal y Tributaria Local (Ecuador)
* `optimizacion-fiscal-transfronteriza.md` — Aplicación técnica de CDIs y retenciones al exterior.
* `planificacion-fiscal-estrategica.md` — Matrices impositivas predictivas y anuales.
* `consultas-cumplimiento-tributario.md` — Dictámenes normativos y resolución de zonas grises de la LRTI.
* `gestion-devolucion-impuestos.md` — Reclamos administrativos de IVA, ISD y Pago en Exceso.
* `capacitacion-actualizacion-tributaria.md` — Talleres *In-House* adaptados al giro de la industria.
* `gestion-procesos-administrativos-sri.md` — Atención, comparecencias y descarga de requerimientos del SRI.

### 🏛️ 2. Área de Derecho Societario y Corporativo
* `derecho-societario-estructuras.md` — Constitución y diseño de estatutos avanzados (S.A.S., S.A.).
* `asesoria-cesion-acciones.md` — Compraventa de participaciones e Impuesto a la Renta Único.
* `disolucion-liquidacion-empresas.md` — Extinción legal y cancelación de vehículos inactivos.
* `constitucion-holdings-trusts.md` — Ingeniería de control para separar activos operativos de riesgos fijos.

### 👥 3. Área Laboral y de Litigio Obrero-Patronal
* `asesoria-laboral-integral.md` — Arquitectura contractual, reglamentos internos y políticas de RR.HH.
* `contraloria-laboral-mensual.md` — Auditoría continua de planillas IESS, nómina y validación preventiva de finiquitos.
* `auditorias-debida-diligencia-laboral.md` — *Due Diligence* de pasivos e historial para procesos M&A.
* `representacion-defensa-litigios-laborales.md` — Patrocinio legal en juzgados de trabajo y defensa de intereses patronales.
* `defensa-representacion-juicios-tributarios.md` — Impugnación judicial y constitucional de actas de determinación del SRI.

### 🌐 4. Área de Expansión Internacional e Inversiones Globales
* `softlanding-corporativo.md` — Despliegue legal, bancario y operativo en Estados Unidos (Florida/Delaware).
* `incorporacion-estructuracion-llc.md` — Optimización y apertura de LLCs transparente ante el IRS y FinCEN.
* `inversiones-inmobiliarias-florida.md` — Estructuración de *Real Estate* para mitigar la retención FIRPTA y el *Estate Tax*.
* `planes-de-negocio-viabilidad.md` — *Business Plans* financieros bajo estándares bancarios y de visas de inversión.
* `asesoria-legal-multijurisdiccional.md` — Sincronización jurídica y fiscal cruzada Ecuador-USA.
* `gestion-patrimonio-familiar.md` — Arquitectura de *Family Office* para la preservación confidencial de capitales.
* `planificacion-hereditaria-sucesoria.md` — Donaciones con usufructo, testamentos y fideicomisos autónomos.

---

## 🛠️ Lineamientos de Modificación y Consistencia

Para asegurar que la web mantenga su rendimiento técnico y coherencia visual, se deben respetar las siguientes directrices establecidas:

1.  **Iconografía Unificada:** No se deben enlazar imágenes estáticas locales (`.svg` o `.png`) en los parámetros de logotipos o íconos de las listas. Toda la iconografía del sitio consume la colección **Material Symbols** a través de `astro-icon` utilizando la nomenclatura limpia de la colección:
    ```yaml
    icon: "material-symbols:shield-lock-outline"
    ```
2.  **Formatos Legales:** Las páginas correspondientes a `privacy.md` y `terms.md` se encuentran totalmente redactadas bajo la normativa de la **LOPDP (Ecuador)** e incluyen los descargos de responsabilidad corporativos (*Disclaimers*) obligatorios para blindar legalmente las comunicaciones informativas de la firma.
3.  **Formateo de Textos:** Los textos en prosa, descripciones y cartas de presentación de los archivos `.md` utilizan formateo clásico de Markdown. El uso de LaTeX queda estrictamente reservado para la renderización de fórmulas o variables de optimización tributaria complejas dentro del código de renderizado de componentes Astro, nunca de forma directa en el texto plano.

## 💻 Comandos de Desarrollo

En caso de requerir levantar el entorno local de desarrollo para la plataforma:

```bash
# Instalar las dependencias del proyecto
yarn install

# Iniciar el servidor de desarrollo local
yarn run dev

# Compilar y generar el HTML estático optimizado para producción
yarn run build