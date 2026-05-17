# BTS Lore Archive

Un repositorio de alta fidelidad del lore del universo de BTS. Documentando las líneas de tiempo, los personajes y las narrativas interconectadas usando **Astro** y **Tailwind CSS 3.4**.

> 🌌 **El Universo Narrativo:** Un archivo exhaustivo para mantener viva la historia.

## 🚀 Estructura del Proyecto

Dentro del proyecto, encontrarás la siguiente estructura de directorios y archivos importantes:

```text
/
├── public/                 # Archivos estáticos como imágenes y favicons
├── src/
│   ├── components/         # Componentes UI reutilizables y subcarpeta admin/ con formularios de creación
│   ├── data/               # Datos de prueba (mock) estructurados por dominio (eras, members, etc.)
│   ├── layouts/            # Plantillas maestras (BaseLayout) con fuentes y estilos base globales
│   ├── lib/                # Configuración de clientes externos (ej. insforge.ts)
│   ├── pages/              # Rutas de navegación (file-based routing de Astro)
│   ├── services/           # Lógica de negocio, lectura y escritura a InsForge con fallback de lectura a mocks
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

El proyecto se encuentra en la **Fase 3 (Creación y Escritura en Backend)**. 
- **Lectura Resiliente:** Las rutas de la aplicación consumen datos de la capa de servicios (`src/services/`) que consultan tablas en **InsForge**, con un sistema transparente de fallback a datos locales (`src/data/`) si la conexión falla o las tablas están vacías.
- **Escritura Directa:** El panel `/admin` cuenta con 4 formularios funcionales (`EraForm`, `TimelineForm`, `TheoryForm`, `GlossaryForm`) en el lado del cliente (Client-side JS). Los datos se validan, se autogeneran sus UUIDs y se guardan directamente en **InsForge**.
- **Pendiente:** Implementar el flujo de autenticación real (login) para proteger el panel `/admin`, el cual actualmente simula su seguridad mediante comentarios guía `// TODO: SEGURIDAD` en las mutaciones de los servicios.
