import type { Era } from '../types/content';

export const mockEras: Era[] = [
  {
    id: 'e20bfd4b-76b6-45cb-a035-c3c2b0df3c1a',
    title: 'Hwa Yang Yeon Hwa',
    slug: 'hyyh',
    description: 'El momento más hermoso de la vida. Una historia de juventud, amistad y el enfrentamiento a la realidad de crecer.',
    start_year: 2015,
    end_year: 2016,
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '9211e4f4-5f53-4886-905b-ea9741cd278a',
    title: 'WINGS',
    slug: 'wings',
    description: 'El chico conoce al mal. Explorando la tentación, el crecimiento y la pérdida de la inocencia.',
    start_year: 2016,
    end_year: 2017,
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '4bd9f159-8de3-4d4b-a719-7053e800d110',
    title: 'Love Yourself',
    slug: 'love-yourself',
    description: 'Amarse a sí mismo es el comienzo del verdadero amor. Un viaje a través de las etapas del amor y el autodescubrimiento.',
    start_year: 2017,
    end_year: 2018,
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '1e5eab66-e0bd-4ff2-8356-9a25db8d3c1f',
    title: 'Map of the Soul',
    slug: 'map-of-the-soul',
    description: 'Encontrando el mapa del alma. Explorando la identidad, la sombra y el ego basados en la psicología de Jung.',
    start_year: 2019,
    end_year: 2020,
    order_index: 4,
    created_at: new Date().toISOString()
  }
];
