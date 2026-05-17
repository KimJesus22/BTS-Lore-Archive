import type { Theory } from '../types/content';

export const mockTheories: Theory[] = [
  { 
    id: '9ed57f00-3488-4f10-9174-88f58b0f9f30', 
    title: 'La Flor Smeraldo', 
    slug: 'la-flor-smeraldo',
    content: 'Análisis sobre la flor que no pudo ser entregada, la sinceridad oculta y su conexión con la Magic Shop.',
    status: 'published',
    tags: ['smeraldo', 'seokjin', 'magic shop'],
    created_at: new Date().toISOString()
  },
  { 
    id: '3ff9daeb-c15c-4867-b52b-47e92da37cbb', 
    title: 'El Gato Calicó', 
    slug: 'el-gato-calico',
    content: 'La anomalía en la línea temporal y el rol de Serendipity en el multiverso.',
    status: 'published',
    tags: ['jimin', 'serendipity', 'multiverso'],
    created_at: new Date().toISOString()
  },
  { 
    id: '161822cb-cf9d-4c3e-bbc8-289b5c3e6022', 
    title: 'Efecto Mariposa', 
    slug: 'efecto-mariposa',
    content: 'Cuántas veces regresó Seokjin en el tiempo y el costo real de salvar a los demás.',
    status: 'published',
    tags: ['time-travel', 'seokjin', 'hyyh'],
    created_at: new Date().toISOString()
  }
];
