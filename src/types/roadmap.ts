export type RoadmapStatus = 'done' | 'in-progress' | 'upcoming' | 'idea';

export type RoadmapPriority = 'alta' | 'media' | 'baja';

export interface RoadmapItem {
  /** Identificador único del item */
  id: string;
  /** Título del item */
  title: string;
  /** Descripción breve de lo que implica */
  description: string;
  /** Estado actual del item */
  status: RoadmapStatus;
  /** Prioridad del item */
  priority: RoadmapPriority;
  /** Fecha estimada de finalización (opcional, formato YYYY-MM o texto libre) */
  estimatedDate?: string;
}

/** Mapa de estado a etiqueta en español */
export const STATUS_LABELS: Record<RoadmapStatus, string> = {
  'done': 'Hecho',
  'in-progress': 'En progreso',
  'upcoming': 'Próximamente',
  'idea': 'Ideas futuras',
};

/** Orden de las columnas del tablero */
export const STATUS_ORDER: RoadmapStatus[] = [
  'done',
  'in-progress',
  'upcoming',
  'idea',
];
