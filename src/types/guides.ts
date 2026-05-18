export type GuideDifficulty = 'inicial' | 'media' | 'avanzada';

export interface GuideLink {
  /** Texto del enlace */
  label: string;
  /** Ruta interna del sitio */
  href: string;
  /** Descripción corta opcional de lo que encontrará */
  hint?: string;
}

export interface Guide {
  /** Slug para la URL (ej: "empieza-por-hyyh") */
  slug: string;
  /** Título de la guía */
  title: string;
  /** Descripción breve */
  description: string;
  /** Nivel de dificultad */
  difficulty: GuideDifficulty;
  /** Tiempo estimado de lectura (ej: "15 min") */
  estimatedTime: string;
  /** Lista ordenada de enlaces internos recomendados */
  steps: GuideLink[];
  /** Tags para filtrado y descubrimiento */
  tags: string[];
  /** Nivel de spoiler */
  spoilerLevel?: 'none' | 'mild' | 'major';
}

/** Etiquetas de dificultad en español */
export const DIFFICULTY_LABELS: Record<GuideDifficulty, string> = {
  'inicial': 'Inicial',
  'media': 'Media',
  'avanzada': 'Avanzada',
};
