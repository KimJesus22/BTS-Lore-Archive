export type ConnectionType = 'era' | 'song' | 'symbol' | 'member' | 'theory' | 'timeline';
export type ConnectionStrength = 'low' | 'medium' | 'high';

export interface ConnectionItem {
  /** Identificador único */
  id: string;
  /** Título de la conexión */
  title: string;
  /** Explicación de la conexión */
  description: string;
  
  /** Tipo de la fuente */
  sourceType: ConnectionType;
  /** Título de la fuente (ej: "Jungkook") */
  sourceTitle: string;
  
  /** Tipo del destino */
  targetType: ConnectionType;
  /** Título del destino (ej: "El Pájaro") */
  targetTitle: string;
  
  /** Fuerza de la conexión */
  strength: ConnectionStrength;
  /** Etiquetas asociadas */
  tags: string[];
}

/** Mapa de tipos a etiquetas legibles */
export const CONNECTION_TYPE_LABELS: Record<ConnectionType, string> = {
  'era': 'Era',
  'song': 'Canción',
  'symbol': 'Símbolo',
  'member': 'Miembro',
  'theory': 'Teoría',
  'timeline': 'Evento',
};

/** Mapa de fuerza a descripciones */
export const STRENGTH_LABELS: Record<ConnectionStrength, string> = {
  'low': 'Sutil',
  'medium': 'Clara',
  'high': 'Central',
};
