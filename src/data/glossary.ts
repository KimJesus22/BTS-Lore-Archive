import type { GlossaryTerm } from '../types/content';

export const mockGlossary: GlossaryTerm[] = [
  { 
    id: '958b19ee-e25f-4a0b-9ffb-afdf5c1b63a9',
    term: 'Magic Shop', 
    slug: 'magic-shop',
    definition: 'Una técnica psicodramática que intercambia miedo por una actitud positiva.',
    category: 'Concepto',
    created_at: new Date().toISOString()
  },
  { 
    id: '4bd9f159-8de3-4d4b-a719-7053e800d110',
    term: 'Omerlás', 
    slug: 'omerlas',
    definition: 'La ciudad de la felicidad que esconde un oscuro secreto en su sótano.',
    category: 'Lugar',
    created_at: new Date().toISOString()
  },
  { 
    id: '4bd9f159-8de3-4d4b-a719-7053e800d111',
    term: 'BTS Universe', 
    slug: 'bts-universe',
    definition: 'El universo narrativo oficial expandido a través de videos, notas y webtoons.',
    category: 'Meta',
    created_at: new Date().toISOString()
  }
];
