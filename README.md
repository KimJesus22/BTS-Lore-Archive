# BTS Lore Archive

Un repositorio de alta fidelidad del lore del universo de BTS. Documentando las líneas de tiempo, los personajes y las narrativas interconectadas usando **Astro** y **Tailwind CSS 3.4**.

> 🌌 **El Universo Narrativo:** Un archivo exhaustivo para mantener viva la historia.

## 🚀 Estructura del Proyecto

Dentro del proyecto, encontrarás la siguiente estructura de directorios y archivos importantes:

```text
/
├── public/                 # Archivos estáticos como imágenes y favicons
├── src/
│   ├── components/         # Componentes UI (Card, Button, EmptyState, FavoriteButton, SearchInput/Results, Breadcrumbs, admin/)
│   ├── data/               # Datos de prueba (mock) estructurados por dominio (eras, members, guides, quiz, etc.)
│   │   ├── albums.ts       # Catálogo de álbumes
│   │   ├── connections.ts  # Relaciones cruzadas entre entidades del lore
│   │   ├── eras.ts         # Eras narrativas (HYYH, WINGS, Love Yourself, Map of the Soul)
│   │   ├── glossary.ts     # Glosario de términos del universo BTS
│   │   ├── guides.ts       # Rutas de lectura curadas con pasos enlazados
│   │   ├── loreCards.ts    # Tarjetas de lore para la vista de colección
│   │   ├── members.ts      # Miembros y sus roles narrativos
│   │   ├── navigation.ts   # Items de navegación principal
│   │   ├── quiz.ts         # 15 preguntas de opción múltiple sobre el lore
│   │   ├── roadmap.ts      # Fases del roadmap del proyecto
│   │   ├── symbols.ts      # Simbología recurrente (Smeraldo, espejo, cámara, etc.)
│   │   ├── tags.ts         # Sistema de etiquetas unificado
│   │   ├── theories.ts     # Teorías populares de la comunidad
│   │   └── timeline.ts     # Eventos cronológicos del universo narrativo
│   ├── layouts/            # Plantillas maestras (BaseLayout) con soporte SEO para meta descripciones dinámicas
│   ├── lib/                # Configuración de clientes externos (ej. insforge.ts)
│   ├── pages/              # Rutas de navegación estáticas y dinámicas
│   │   ├── admin/          # Panel de escritura directa con formularios CRUD
│   │   ├── albums/         # Catálogo de álbumes y detalle por slug
│   │   ├── eras/           # Índice de eras y detalle dinámico por ID
│   │   ├── guides/         # Guías de lectura, detalle y modo presentación
│   │   │   └── [slug]/
│   │   │       ├── index.astro         # Detalle de la guía con timeline visual
│   │   │       └── presentation.astro  # Modo presentación (slides HTML)
│   │   ├── songs/          # Detalle de canciones por slug
│   │   ├── symbols/        # Biblioteca de símbolos y detalle por slug
│   │   ├── theories/       # Índice y detalle de teorías por slug
│   │   ├── quiz.astro      # Quiz de opción múltiple con puntaje local
│   │   ├── study.astro     # Modo estudio con flashcards interactivas
│   │   └── ...             # index, search, timeline, glossary, compare, etc.
│   ├── services/           # Lógica de negocio, capa de servicios e indexador de búsqueda universal
│   ├── styles/             # Archivos CSS globales (global.css con utilidades de Tailwind)
│   ├── types/              # Definiciones y contratos de TypeScript (content.ts, guides.ts, symbols.ts)
│   └── utils/              # Funciones auxiliares (cálculo de lectura, calidad de contenido, historial de admin, etc.)
├── .env                    # Variables de entorno (PUBLIC_INSFORGE_URL, PUBLIC_INSFORGE_ANON_KEY)
├── AGENTS.md               # Reglas estrictas de desarrollo y configuración del proyecto
├── DESIGN.md               # Sistema de diseño "Cosmic Archive" (paleta, tipografía, componentes)
├── astro.config.mjs        # Configuración principal de Astro
├── package.json            # Dependencias y scripts del proyecto
└── tailwind.config.mjs     # Tokens de estilo mapeados desde DESIGN.md
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone automáticamente como una ruta según su nombre de archivo.

## 🗺️ Mapa de Rutas

| Ruta | Descripción |
| :--- | :---------- |
| `/` | Página principal con estadísticas y accesos directos |
| `/timeline` | Línea de tiempo cronológica con filtros duales (era + tipo de fuente) |
| `/eras` | Índice de eras narrativas |
| `/eras/[id]` | Detalle de una era específica |
| `/members` | Miembros y sus roles narrativos |
| `/glossary` | Glosario de términos con búsqueda y filtros por categoría |
| `/theories` | Índice de teorías de la comunidad |
| `/theories/[slug]` | Detalle de una teoría con estimación de lectura |
| `/symbols` | Biblioteca iconográfica de símbolos recurrentes |
| `/symbols/[slug]` | Detalle de un símbolo específico |
| `/albums` | Catálogo de álbumes |
| `/songs/[slug]` | Detalle de una canción |
| `/guides` | Índice de rutas de lectura curadas |
| `/guides/[slug]` | Detalle de una guía con timeline visual de pasos |
| `/guides/[slug]/presentation` | **Modo presentación** — slides HTML para exponer en clase |
| `/study` | **Modo estudio** — flashcards interactivas desde glosario, símbolos y eras |
| `/quiz` | **Quiz** — opción múltiple con puntaje y mejor marca local |
| `/compare` | Comparador estructural entre eras |
| `/connections` | Mapa de conexiones cruzadas entre entidades |
| `/cards` | Colección de tarjetas de lore |
| `/search` | Motor de búsqueda universal |
| `/favorites` | Marcadores guardados localmente |
| `/notes` | Notas de investigación personales |
| `/checklist` | Checklist de exploración con progreso local |
| `/settings` | Configuración global (spoilers, tipografía, densidad, animaciones) |
| `/roadmap` | Tablero Kanban con el estado del proyecto |
| `/about` | Información sobre el archivo |
| `/admin` | Panel de escritura directa (formularios CRUD hacia InsForge) |
| `/tags` | Índice general de etiquetas unificadas |
| `/tags/[slug]` | Contenido relacionado cruzado por etiqueta |
| `/404` | Página de error personalizada |

## 💾 Almacenamiento Local (localStorage)

El sitio utiliza `localStorage` para persistir preferencias y progreso del usuario sin necesidad de autenticación:

| Clave | Descripción |
| :---- | :---------- |
| `bts-lore-settings` | Configuración global: modo spoiler, tamaño de texto, densidad, animaciones |
| `bts-lore-favorites` | Marcadores de contenido favorito |
| `bts-lore-notes` | Notas de investigación personales |
| `bts-lore-checklist` | Progreso del checklist de exploración |
| `bts-lore-study-progress` | Progreso de flashcards: tarjetas conocidas y pendientes de repaso |
| `bts-lore-quiz-best-score` | Mejor puntaje obtenido en el quiz |
| `bts-lore-admin-history` | Historial de acciones administrativas locales de la sesión |

## 🧞 Comandos Útiles

Todos los comandos se ejecutan desde la raíz del proyecto usando `pnpm 11`:

| Comando                     | Acción                                                              |
| :-------------------------- | :------------------------------------------------------------------ |
| `pnpm install`              | Instala todas las dependencias necesarias del proyecto.             |
| `pnpm dev`                  | Inicia el servidor de desarrollo local en `http://localhost:4321`.  |
| `pnpm build`                | Genera la versión optimizada para producción en `./dist/`.          |
| `pnpm preview`              | Previsualiza tu compilación de producción localmente.               |
| `pnpm astro check`          | Valida tipados estrictos en archivos `.astro` y `.ts`.              |

## 🛠️ Tecnologías Utilizadas

- **Framework:** Astro (v6.x)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (v3.4, intencionalmente bloqueado para compatibilidad con InsForge)
- **Base de Datos / Backend:** InsForge (Base de datos remota con capa de fallback a datos mock)
- **SDK:** `@insforge/sdk`
- **Tipografías:** Playfair Display (headlines), Manrope (body), Space Grotesk (labels)

## 🔮 Fase de Desarrollo Actual

El proyecto se encuentra en la **Fase 6 (Herramientas de Estudio e Interactividad)** e integración de control administrativo.

### Fase 6 — Herramientas de Estudio e Interactividad y Control de Calidad

- **Modo Presentación para Guías:** Cada guía cuenta con una ruta `/guides/[slug]/presentation` que genera slides HTML a partir de los pasos. Incluye diapositiva de título, controles (anterior/siguiente/pantalla completa), contador, barra de progreso, navegación por teclado (`←` `→` `F`) y diseño oscuro standalone sin header/footer.
- **Modo Estudio (Flashcards):** La página `/study` genera tarjetas de estudio automáticamente desde tres fuentes de datos (glosario, símbolos y eras). Cada flashcard muestra una pregunta, se revela con un toque, y el usuario marca «Lo sabía» o «Repasar después». El progreso se persiste en `localStorage` bajo `bts-lore-study-progress`. Incluye filtros por categoría, barajeo aleatorio y sesiones de repaso de pendientes.
- **Quiz del Lore:** Un quiz de opción múltiple en `/quiz` con 15 preguntas curadas (`src/data/quiz.ts`). Muestra feedback inmediato con explicación, calcula puntaje con anillo visual animado, guarda el mejor puntaje en `localStorage` bajo `bts-lore-quiz-best-score`, y soporta atajos de teclado (`1-4` para responder, `Enter`/`→` para avanzar).
- **Panel de Calidad de Contenido (Admin):** Sección en `/admin` que analiza e identifica dinámicamente deficiencias en las entidades de datos (descripción corta, falta de tags, relaciones, slugs o fechas), agrupando problemas por tipo de contenido y niveles de prioridad (baja, media, alta) mediante la utilidad `src/utils/contentQuality.ts`.
- **Historial Administrativo Local:** Sistema en `/admin` que registra acciones administrativas (creación e importación) en el navegador del cliente bajo `bts-lore-admin-history` mediante `src/utils/adminHistory.ts`, actualizando la UI de actividad reciente en tiempo real y con botón de limpieza.
- **Sistema de Etiquetas Unificado:** Habilitación de la ruta `/tags` y `/tags/[slug]` para navegar contenido relacionado (eras, teorías, símbolos, cronología, canciones y guías) cruzando datos de etiquetas unificadas definidas en `src/data/tags.ts`.
- **Navegación por Breadcrumbs con JSON-LD:** Componente `Breadcrumbs.astro` integrado en las 7 vistas dinámicas de detalle con soporte SEO estructurado y navegación adaptativa.
- **Página de Error 404 Premium:** Portal de error `/404` tematizado con animación de portal cósmico puro en SVG/CSS y botones adaptativos rápidos de navegación.

### Fases anteriores (1–5)

- **Comparador Estructural de Eras:** Creación de la página `/compare` que realiza cruces dinámicos entre tablas de Eras y Timeline Events en InsForge, complementados con metadatos específicos (canciones clave, conceptos de lore y símbolos visuales) en una grilla comparativa interactiva.
- **Notas de Investigación Personales:** Integración del componente `PersonalNotes.astro` y el panel `/notes`. Habilita a los usuarios a escribir anotaciones privadas sobre Eras, Teorías o Glosarios que se almacenan en `localStorage` con soporte completo de visualización, edición y eliminación (CRUD) y enlaces profundos de retorno.
- **Visual State Machine (UX Premium):** Estandarización de las respuestas de red mediante componentes dedicados:
  - `SkeletonCard.astro` / `LoadingState.astro`: Skeletons de carga dinámicos y animaciones SVG para mitigar la percepción de latencia.
  - `ErrorState.astro`: Banners visuales de error temáticos alineados con la estética cósmica.
  - `EmptyState.astro`: Vistas intuitivas para colecciones o búsquedas vacías.
- **Búsqueda Universal Integrada:** Implementación de un indexador y motor de búsqueda centralizado (`src/services/search.service.ts`) con normalización de caracteres especiales. Permite a los usuarios buscar simultáneamente en Eras, Miembros, Cronología, Teorías y Glosario en `/search`.
- **Sistema de Marcadores (Favoritos):** Integración de `FavoriteButton.astro` y la vista `/favorites`. Almacena dinámicamente las selecciones en el navegador (`localStorage`) y sincroniza visualmente todos los botones en tiempo real mediante eventos globales personalizados.
- **Detalle de Teorías y Estimación de Lectura:** Habilitación de la ruta dinámica `/theories/[slug].astro` para visualizar teorías específicas. Cuenta con un analizador de tiempo de lectura (`src/utils/readingTime.ts`) para proyectar el esfuerzo requerido.
- **Optimización de Redes Sociales (OG) y Accesibilidad:**
  - Inclusión de etiquetas Open Graph (OG) estandarizadas con una ilustración estelar por defecto en `public/og-default.svg` para compartir links premium en redes.
  - Integración de meta descripciones dinámicas ajustables por página en `BaseLayout.astro`.
  - Página de error `404.astro` totalmente tematizada en concordancia con el diseño cósmico.
- **Escritura Directa:** El panel `/admin` cuenta con 4 formularios funcionales (`EraForm`, `TimelineForm`, `TheoryForm`, `GlossaryForm`) en el lado del cliente (Client-side JS). Los datos se validan, se autogeneran sus UUIDs y se guardan directamente en **InsForge**.
- **Roadmap del Proyecto:** Página `/roadmap` con un tablero Kanban estático para comunicar el progreso y los futuros desarrollos de la plataforma a la comunidad.
- **Rutas de Lectura (Guías):** Una ruta curada `/guides` que ayuda a los nuevos usuarios a navegar la complejidad del lore, presentando líneas de tiempo verticales que unen artículos.
- **Checklist de Exploración Local:** Herramienta interactiva en `/checklist` que agrupa todo el contenido (eras, teorías, eventos, glosario) y usa `localStorage` para que el usuario guarde su progreso de exploración con métricas porcentuales.
- **Mapa de Conexiones:** Visualización en red `/connections` que muestra las relaciones cruzadas entre personajes, canciones, teorías y más, con filtros avanzados en el cliente.
- **Biblioteca de Símbolos:** Un índice iconográfico en `/symbols` y `/symbols/[slug]` dedicado a documentar la simbología repetitiva y abstracta de la narrativa (espejos, cámaras, flores), con placeholders procedimentales abstractos.
- **Filtros Avanzados (Dual-Filtering):** Interfaz renovada en la Cronología (`/timeline`) que permite combinar filtros por Era y por Tipo de Fuente (MV, Letra, Short Film, Notes, etc.) con recuento dinámico de resultados.
- **Configuración Global Local (UX Avanzada):** Página `/settings` y un gestor de estado inyectado globalmente en el diseño base. Permite a los usuarios guardar en su navegador (mediante `localStorage` bajo `bts-lore-settings`):
  - *Modo Spoiler Safe:* Protege a los nuevos lectores ocultando eventos drásticos y difuminando detalles sensibles a través del componente global `SpoilerBlock.astro`.
  - *Accesibilidad y Diseño Personalizado:* Ajustes en tiempo real del tamaño base de la tipografía (pequeño/normal/grande), la densidad visual de los componentes (cómoda/compacta) y las animaciones de UI (activadas/reducidas) interactuando con el sistema de variables y unidades nativas de Tailwind CSS.

### Pendientes

- Implementar el flujo de autenticación real (login) para proteger el panel `/admin`, el cual actualmente simula su seguridad mediante comentarios guía `// TODO: SEGURIDAD` en las mutaciones de los servicios.
- Sincronizar el perfil de configuración y progreso de estudio en la nube mediante InsForge.
- Ampliar el banco de preguntas del quiz con generación dinámica desde los datos existentes.
