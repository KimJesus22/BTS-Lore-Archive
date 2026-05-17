# BTS Lore Archive

Un repositorio de alta fidelidad del lore del universo de BTS. Documentando las líneas de tiempo, los personajes y las narrativas interconectadas usando **Astro** y **Tailwind CSS 3.4**.

> 🌌 **El Universo Narrativo:** Un archivo exhaustivo para mantener viva la historia.

## 🚀 Estructura del Proyecto

Dentro del proyecto, encontrarás la siguiente estructura de directorios y archivos importantes:

```text
/
├── public/                 # Archivos estáticos como imágenes y favicons
├── src/
│   ├── components/         # Componentes UI (Card, Button, EmptyState, FavoriteButton, SearchInput/Results, admin/)
│   ├── data/               # Datos de prueba (mock) estructurados por dominio (eras, members, etc.)
│   ├── layouts/            # Plantillas maestras (BaseLayout) con soporte SEO para meta descripciones dinámicas
│   ├── lib/                # Configuración de clientes externos (ej. insforge.ts)
│   ├── pages/              # Rutas de navegación estáticas y dinámicas (ej. theories/[slug].astro, 404.astro)
│   ├── services/           # Lógica de negocio, capa de servicios e indexador de búsqueda universal
│   ├── styles/             # Archivos CSS globales (global.css con utilidades de Tailwind)
│   ├── types/              # Definiciones y contratos de TypeScript (content.ts)
│   └── utils/              # Funciones auxiliares de utilidad (cálculo de tiempo de lectura, etc.)
├── .env                    # Variables de entorno (PUBLIC_INSFORGE_URL, PUBLIC_INSFORGE_ANON_KEY)
├── AGENTS.md               # Reglas estrictas de desarrollo y configuración del proyecto
├── astro.config.mjs        # Configuración principal de Astro
├── package.json            # Dependencias y scripts del proyecto
└── tailwind.config.mjs     # Sistema de diseño "Cosmic Archive" y tokens de estilo
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone automáticamente como una ruta según su nombre de archivo.

## 🧞 Comandos Útiles

Todos los comandos se ejecutan desde la raíz del proyecto usando `pnpm 11`:

| Comando                     | Acción                                                              |
| :-------------------------- | :------------------------------------------------------------------ |
| `pnpm install`              | Instala todas las dependencias necesarias del proyecto.             |
| `pnpm dev`                  | Inicia el servidor de desarrollo local en `http://localhost:4321`.  |
| `pnpm build`                | Genera la versión optimizada para producción en `./dist/`.          |
| `pnpm preview`              | Previsualiza tu compilación de producción localmente.               |
| `pnpm astro ...`            | Ejecuta comandos del CLI como `astro check` para validar tipados.   |

## 🛠️ Tecnologías Utilizadas

- **Framework:** Astro (v6.x)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (v3.4, intencionalmente bloqueado para compatibilidad con InsForge)
- **Base de Datos / Backend:** InsForge (Base de datos remota con capa de fallback)
- **SDK:** `@insforge/sdk`

## 🔮 Fase de Desarrollo Actual

El proyecto se encuentra en la **Fase 5 (Comparación de Eras, Notas Privadas y Estados Visuales UX)**.
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
- **Pendiente:** Implementar el flujo de autenticación real (login) para proteger el panel `/admin`, el cual actualmente simula su seguridad mediante comentarios guía `// TODO: SEGURIDAD` en las mutaciones de los servicios.
