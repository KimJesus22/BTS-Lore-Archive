/**
 * Sistema de etiquetas unificado.
 *
 * Cada tag conecta contenido de distintas secciones (eras, teorías,
 * símbolos, canciones, guías, eventos). Para agregar un nuevo tag:
 *
 *  1. Añade un objeto `Tag` al array `mockTags`.
 *  2. Usa un `slug` único (kebab-case, sin acentos).
 *  3. Agrega `matchSlugs` con los slugs/strings que debe buscar en el
 *     campo `tags` de teorías, símbolos, guías, conexiones, etc.
 *     Esto permite que un tag "smeraldo" coincida con ['smeraldo']
 *     en teorías Y con ['flor', 'smeraldo'] en symbols.
 *  4. Opcionalmente, agrega `matchEras` con los slugs de eras que apliquen.
 *  5. La página /tags/[slug] hace la búsqueda automáticamente.
 */

export interface Tag {
  id: string;
  name: string;
  slug: string;
  description: string;
  colorName?: string;
  /** Strings que buscar en el campo `tags` de entidades (theories, symbols, guides, etc.) */
  matchSlugs: string[];
  /** Slugs de eras directamente relacionadas */
  matchEras?: string[];
}

export const mockTags: Tag[] = [
  {
    id: 'tag-hyyh',
    name: 'HYYH',
    slug: 'hyyh',
    description: 'Hwa Yang Yeon Hwa (花樣年華). El momento más hermoso de la vida: juventud, amistad y pérdida.',
    colorName: 'primary',
    matchSlugs: ['hyyh', 'juventud', 'inicio'],
    matchEras: ['hyyh'],
  },
  {
    id: 'tag-wings',
    name: 'WINGS',
    slug: 'wings',
    description: 'La era de la tentación y la pérdida de la inocencia, inspirada en Demian de Hermann Hesse.',
    colorName: 'amber',
    matchSlugs: ['wings', 'tentación', 'demian'],
    matchEras: ['wings'],
  },
  {
    id: 'tag-love-yourself',
    name: 'Love Yourself',
    slug: 'love-yourself',
    description: 'Amarse a sí mismo como inicio del verdadero amor. Autodescubrimiento y sanación.',
    colorName: 'rose',
    matchSlugs: ['love yourself', 'love-yourself', 'curación'],
    matchEras: ['love-yourself'],
  },
  {
    id: 'tag-map-of-the-soul',
    name: 'Map of the Soul',
    slug: 'map-of-the-soul',
    description: 'Identidad, sombra y ego basados en la psicología analítica de Carl Jung.',
    colorName: 'blue',
    matchSlugs: ['map of the soul', 'map-of-the-soul', 'jung', 'sombra'],
    matchEras: ['map-of-the-soul'],
  },
  {
    id: 'tag-smeraldo',
    name: 'Smeraldo',
    slug: 'smeraldo',
    description: 'La flor legendaria que representa la verdad que no se pudo entregar.',
    colorName: 'emerald',
    matchSlugs: ['smeraldo', 'sincerity', 'sinceridad'],
  },
  {
    id: 'tag-time-travel',
    name: 'Viaje en el tiempo',
    slug: 'viaje-en-el-tiempo',
    description: 'El concepto de bucles temporales, regresiones y las consecuencias de alterar el pasado.',
    colorName: 'cyan',
    matchSlugs: ['time-travel', 'viaje-en-el-tiempo', 'bucle temporal', 'bucle', 'observador'],
  },
  {
    id: 'tag-serendipity',
    name: 'Serendipity',
    slug: 'serendipity',
    description: 'Un hallazgo afortunado e inesperado. Asociado con Jimin y el destino cruzado.',
    colorName: 'violet',
    matchSlugs: ['serendipity', 'destino', 'anomalía'],
  },
  {
    id: 'tag-omelas',
    name: 'Omelas',
    slug: 'omelas',
    description: 'La ciudad perfecta cuya felicidad depende del sufrimiento oculto de un niño. Referencia a Ursula K. Le Guin.',
    colorName: 'orange',
    matchSlugs: ['omelas', 'sacrificio'],
  },
  {
    id: 'tag-demian',
    name: 'Demian',
    slug: 'demian',
    description: 'Novela de Hermann Hesse sobre dualidad, tentación y el despertar de la individualidad.',
    colorName: 'amber',
    matchSlugs: ['demian', 'literatura'],
  },
  {
    id: 'tag-identidad',
    name: 'Identidad',
    slug: 'identidad',
    description: 'La confrontación con el verdadero yo, el ego, la persona y la sombra interior.',
    colorName: 'indigo',
    matchSlugs: ['identidad', 'reflejo', 'espejo', 'shadow'],
  },
  {
    id: 'tag-jin',
    name: 'Seokjin',
    slug: 'seokjin',
    description: 'El observador y viajero del tiempo. Pieza central en los bucles temporales del lore.',
    colorName: 'pink',
    matchSlugs: ['jin', 'seokjin', 'Seokjin'],
  },
  {
    id: 'tag-jimin',
    name: 'Jimin',
    slug: 'jimin',
    description: 'Asociado con Serendipity, el gato calicó y la percepción de múltiples realidades.',
    colorName: 'violet',
    matchSlugs: ['jimin', 'Jimin'],
  },
  {
    id: 'tag-simbolos',
    name: 'Símbolos',
    slug: 'simbolos',
    description: 'La simbología recurrente del universo BTS: flores, espejos, cámaras y más.',
    colorName: 'teal',
    matchSlugs: ['símbolos', 'visual', 'símbolo', 'Símbolo'],
  },
  {
    id: 'tag-teorias',
    name: 'Teorías',
    slug: 'teorias',
    description: 'Análisis e interpretaciones de la comunidad sobre el universo narrativo.',
    colorName: 'yellow',
    matchSlugs: ['teorías', 'teoría', 'Teoría', 'análisis', 'comunidad'],
  },
];
