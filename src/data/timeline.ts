import type { TimelineEvent } from '../types/content';

export const mockTimelineEvents: TimelineEvent[] = [
  { 
    id: '7b6fa7ce-28ba-449e-b83d-36db24ce8ed9', 
    era_id: 'e20bfd4b-76b6-45cb-a035-c3c2b0df3c1a',
    title: 'El Reencuentro', 
    slug: 'el-reencuentro',
    event_date: 'Año 22, 11 Abril', 
    description: 'Seokjin se da cuenta de la tragedia que cayó sobre sus amigos e intenta regresar en el tiempo.',
    source_type: 'MV',
    order_index: 1,
    created_at: new Date().toISOString()
  },
  { 
    id: 'a94a96c6-43b9-4d6b-acb7-3b2d1840dc88', 
    era_id: 'e20bfd4b-76b6-45cb-a035-c3c2b0df3c1a',
    title: 'La pelea de Jungkook y Yoongi', 
    slug: 'la-pelea',
    event_date: 'Año 22, 2 Mayo', 
    description: 'Un conflicto que termina con consecuencias drásticas en diferentes líneas temporales.',
    source_type: 'Short film',
    order_index: 2,
    created_at: new Date().toISOString(),
    spoilerLevel: 'major'
  },
  { 
    id: '25e6dbfe-f192-4d2c-9a29-2ef5dc6db8f0', 
    era_id: 'e20bfd4b-76b6-45cb-a035-c3c2b0df3c1a',
    title: 'Taehyung en el Mar', 
    slug: 'taehyung-en-el-mar',
    event_date: 'Año 22, 22 Mayo', 
    description: 'El grupo viaja al mar, creyendo que por fin están juntos, pero las cosas no son lo que parecen.',
    source_type: 'MV',
    order_index: 3,
    created_at: new Date().toISOString()
  },
  { 
    id: '6ff38a2e-af85-4bd6-9213-94c64eeb3d5c', 
    era_id: 'e20bfd4b-76b6-45cb-a035-c3c2b0df3c1a',
    title: 'El diario', 
    slug: 'el-diario',
    event_date: 'Año 22, 30 Agosto', 
    description: 'El descubrimiento del diario que puede cambiar el curso del destino.',
    source_type: 'Notes',
    order_index: 4,
    created_at: new Date().toISOString()
  }
];
