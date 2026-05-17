import type { Member } from '../types/content';

export const mockMembers: Member[] = [
  { 
    id: 'b6f63467-f381-4202-b2a5-eb43e1d51a9c', 
    name: 'Kim Seokjin', 
    stage_name: 'Jin',
    slug: 'jin',
    lore_role: 'El Observador', 
    symbols: ['Flor Smeraldo', 'Cámara', 'Diario'],
    created_at: new Date().toISOString()
  },
  { 
    id: '2704fc19-1de3-4556-9316-2f638ce2af0d', 
    name: 'Min Yoongi', 
    stage_name: 'SUGA',
    slug: 'suga',
    lore_role: 'El Fugitivo', 
    symbols: ['Piano', 'Fuego', 'Encendedor'],
    created_at: new Date().toISOString()
  },
  { 
    id: '22a2e6af-1f48-4cd7-9e79-5db5047b0a70', 
    name: 'Jung Hoseok', 
    stage_name: 'j-hope',
    slug: 'j-hope',
    lore_role: 'El Ancla', 
    symbols: ['Píldoras', 'Espejo', 'Baile'],
    created_at: new Date().toISOString()
  },
  { 
    id: '50e18987-a2f0-4660-843d-0e42fec7d6a4', 
    name: 'Kim Namjoon', 
    stage_name: 'RM',
    slug: 'rm',
    lore_role: 'El Pilar', 
    symbols: ['Cabina telefónica', 'Reflejo', 'Libro'],
    created_at: new Date().toISOString()
  },
  { 
    id: '9e731454-e91b-433a-bc82-0de84ed71ba7', 
    name: 'Park Jimin', 
    stage_name: 'Jimin',
    slug: 'jimin',
    lore_role: 'El Prisionero', 
    symbols: ['Agua', 'Manzana', 'Paraguas'],
    created_at: new Date().toISOString()
  },
  { 
    id: 'da936f44-9cd8-42af-ae02-e25f822ccae2', 
    name: 'Kim Taehyung', 
    stage_name: 'V',
    slug: 'v',
    lore_role: 'El Vidente', 
    symbols: ['Pintura en spray', 'Alas', 'Teléfono'],
    created_at: new Date().toISOString()
  },
  { 
    id: '3ff84d85-f55a-4e36-a3ee-8ecf61baedaf', 
    name: 'Jeon Jungkook', 
    stage_name: 'Jungkook',
    slug: 'jungkook',
    lore_role: 'El Seguidor', 
    symbols: ['Pájaro', 'Camisa manchada', 'Accidente'],
    created_at: new Date().toISOString()
  }
];
