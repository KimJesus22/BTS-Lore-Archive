# BTS Lore Archive

Un repositorio de alta fidelidad del lore del universo de BTS. Documentando las líneas de tiempo, los personajes y las narrativas interconectadas usando **Astro** y **Tailwind CSS 3.4**.

> 🌌 **El Universo Narrativo:** Un archivo exhaustivo para mantener viva la historia.

## 🚀 Estructura del Proyecto

Dentro del proyecto, encontrarás la siguiente estructura de directorios y archivos importantes:

```text
/
├── public/                 # Archivos estáticos como imágenes y favicons
├── src/
│   ├── components/         # Componentes UI reutilizables (Card, Button, TimelineNode, PageHeader)
│   ├── data/               # Datos de prueba (mock) estructurados por dominio (eras, members, etc.)
│   ├── layouts/            # Plantillas maestras (BaseLayout) con fuentes y estilos base globales
│   ├── lib/                # Configuración de clientes externos (ej. insforge.ts)
│   ├── pages/              # Rutas de navegación (file-based routing de Astro)
│   ├── services/           # Lógica de negocio y fetching a InsForge con fallback a mocks
│   ├── styles/             # Archivos CSS globales (global.css con utilidades de Tailwind)
│   └── types/              # Definiciones y contratos de TypeScript (content.ts)
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

El proyecto se encuentra en la **Fase 2 (Integración Backend)**. 
- **Conexión a Datos:** Las rutas de la aplicación están conectadas a una capa de servicios (`src/services/`) que consultan tablas reales en **InsForge**.
- **Sistema de Fallback:** En caso de que la conexión falle, o las tablas en producción estén vacías, el sistema automáticamente usa los datos de prueba (`src/data/`) de forma transparente para evitar que el sitio colapse.
- **Pendiente:** Funcionalidad real de inicio de sesión y panel de administración para insertar registros desde la UI.
