export interface Era {
  id: string;
  title: string;
  year: string;
  description: string;
  status: 'Completado' | 'En Progreso' | 'Archivado';
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface Theory {
  id: string;
  title: string;
  author: string;
  difficulty: 'Avanzado' | 'Intermedio' | 'Experto' | 'Básico';
  description: string;
}

export interface GlossaryTerm {
  term: string;
  contraction?: string;
  definition: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}
