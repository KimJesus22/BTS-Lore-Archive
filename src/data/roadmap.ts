import type { RoadmapItem } from '../types/roadmap';

/**
 * Datos del roadmap del proyecto.
 *
 * Para agregar un nuevo item:
 *  1. Añade un objeto al array `roadmapItems` con un `id` único.
 *  2. Usa un `status` válido: 'done' | 'in-progress' | 'upcoming' | 'idea'.
 *  3. Usa una `priority` válida: 'alta' | 'media' | 'baja'.
 *  4. El campo `estimatedDate` es opcional. Usa formato libre, ej: "2026-Q3" o "Julio 2026".
 */
export const roadmapItems: RoadmapItem[] = [
  // ── Hecho ──────────────────────────────────────────────────
  {
    id: 'done-1',
    title: 'Catálogo de eras',
    description: 'Página principal con todas las eras del universo narrativo de BTS, incluyendo portada, rango de años y descripción.',
    status: 'done',
    priority: 'alta',
  },
  {
    id: 'done-2',
    title: 'Línea de tiempo interactiva',
    description: 'Cronología visual de eventos ordenados por fecha con filtros por era y tipo de fuente.',
    status: 'done',
    priority: 'alta',
  },
  {
    id: 'done-3',
    title: 'Glosario de términos',
    description: 'Diccionario de términos clave del lore con categorías, búsqueda instantánea y términos relacionados.',
    status: 'done',
    priority: 'media',
  },
  {
    id: 'done-4',
    title: 'Perfiles de miembros',
    description: 'Ficha de cada miembro con rol narrativo, símbolos asociados y conexión con eras.',
    status: 'done',
    priority: 'alta',
  },
  {
    id: 'done-5',
    title: 'Comparador de eras',
    description: 'Herramienta para comparar dos eras lado a lado: eventos, miembros destacados y simbolismo.',
    status: 'done',
    priority: 'media',
  },

  // ── En progreso ────────────────────────────────────────────
  {
    id: 'progress-1',
    title: 'Sistema de teorías',
    description: 'Sección para explorar, filtrar y leer teorías del lore con etiquetas y estados de verificación.',
    status: 'in-progress',
    priority: 'alta',
    estimatedDate: 'Junio 2026',
  },
  {
    id: 'progress-2',
    title: 'Favoritos y notas personales',
    description: 'Guardar items favoritos y añadir notas personales usando almacenamiento local del navegador.',
    status: 'in-progress',
    priority: 'media',
    estimatedDate: 'Junio 2026',
  },
  {
    id: 'progress-3',
    title: 'Búsqueda global',
    description: 'Motor de búsqueda unificado que cubre eras, eventos, miembros, teorías y glosario.',
    status: 'in-progress',
    priority: 'alta',
    estimatedDate: 'Julio 2026',
  },

  // ── Próximamente ───────────────────────────────────────────
  {
    id: 'upcoming-1',
    title: 'Autenticación de usuarios',
    description: 'Registro e inicio de sesión con email/contraseña y OAuth para persistir datos en la nube.',
    status: 'upcoming',
    priority: 'alta',
    estimatedDate: 'Q3 2026',
  },
  {
    id: 'upcoming-2',
    title: 'Panel de administración',
    description: 'Dashboard para gestionar contenido: CRUD de eras, eventos, miembros, teorías y glosario.',
    status: 'upcoming',
    priority: 'alta',
    estimatedDate: 'Q3 2026',
  },
  {
    id: 'upcoming-3',
    title: 'Mapa de conexiones',
    description: 'Visualización interactiva tipo grafo de las relaciones entre miembros, eras, símbolos y eventos.',
    status: 'upcoming',
    priority: 'media',
    estimatedDate: 'Q4 2026',
  },
  {
    id: 'upcoming-4',
    title: 'Modo offline (PWA)',
    description: 'Soporte para Progressive Web App con caché local para consultar el archivo sin conexión.',
    status: 'upcoming',
    priority: 'baja',
    estimatedDate: 'Q4 2026',
  },

  // ── Ideas futuras ──────────────────────────────────────────
  {
    id: 'idea-1',
    title: 'Asistente de lore con IA',
    description: 'Chat conversacional que responde preguntas sobre el universo narrativo usando el contenido del archivo como contexto.',
    status: 'idea',
    priority: 'media',
  },
  {
    id: 'idea-2',
    title: 'Quiz interactivo',
    description: 'Trivia sobre eras, eventos y simbolismo para poner a prueba el conocimiento del lore.',
    status: 'idea',
    priority: 'baja',
  },
  {
    id: 'idea-3',
    title: 'Contribuciones de la comunidad',
    description: 'Sistema para que fans propongan teorías, correcciones o nuevo contenido con moderación.',
    status: 'idea',
    priority: 'media',
  },
  {
    id: 'idea-4',
    title: 'Internacionalización (i18n)',
    description: 'Soporte multiidioma para expandir el archivo a comunidades ARMY de todo el mundo.',
    status: 'idea',
    priority: 'baja',
  },
];
