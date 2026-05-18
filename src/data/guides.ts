import type { Guide } from '../types/guides';

/**
 * Datos de las rutas de lectura.
 *
 * Para agregar una nueva guía:
 *  1. Añade un objeto al array `guides` con un `slug` único (se usa en la URL).
 *  2. Usa un `difficulty` válido: 'inicial' | 'media' | 'avanzada'.
 *  3. En `steps`, lista los enlaces internos en el orden de lectura recomendado.
 *     Cada step tiene: { label, href, hint? }.
 *  4. Usa `tags` para facilitar el filtrado visual.
 */
export const guides: Guide[] = [
  {
    slug: 'empieza-por-hyyh',
    title: 'Empieza por HYYH',
    description: 'El punto de partida ideal para entender el lore. Recorre la era "花樣年華" (El Momento Más Hermoso de la Vida) y comprende los cimientos de toda la narrativa: la juventud, la amistad y el destino.',
    difficulty: 'inicial',
    estimatedTime: '20 min',
    steps: [
      {
        label: 'Era: Hwa Yang Yeon Hwa',
        href: '/eras/e20bfd4b-76b6-45cb-a035-c3c2b0df3c1a',
        hint: 'Conoce el contexto, los años y los temas centrales de la era.',
      },
      {
        label: 'Línea de Tiempo',
        href: '/timeline',
        hint: 'Ubica los eventos más importantes de HYYH en orden cronológico.',
      },
      {
        label: 'Miembros',
        href: '/members',
        hint: 'Descubre el rol narrativo de cada miembro durante esta era.',
      },
      {
        label: 'Glosario: términos clave',
        href: '/glossary',
        hint: 'Busca términos como "Omelas", "Demian" y "Smeraldo".',
      },
      {
        label: 'Teoría: Efecto Mariposa',
        href: '/theories/efecto-mariposa',
        hint: 'Una teoría fundamental sobre los viajes en el tiempo de Seokjin.',
      },
    ],
    tags: ['hyyh', 'juventud', 'inicio'],
  },
  {
    slug: 'de-wings-a-love-yourself',
    title: 'De Wings a Love Yourself',
    description: 'Un recorrido por dos eras interconectadas: la tentación y pérdida de la inocencia en WINGS, hasta el autodescubrimiento y la aceptación en Love Yourself. Ideal para quienes ya conocen HYYH.',
    difficulty: 'media',
    estimatedTime: '30 min',
    steps: [
      {
        label: 'Era: WINGS',
        href: '/eras/9211e4f4-5f53-4886-905b-ea9741cd278a',
        hint: 'La caída y la tentación: cada miembro enfrenta su demonio interior.',
      },
      {
        label: 'Glosario: Demian',
        href: '/glossary',
        hint: 'Comprende la referencia literaria que articula toda la era WINGS.',
      },
      {
        label: 'Teoría: La Flor Smeraldo',
        href: '/theories/la-flor-smeraldo',
        hint: 'La flor que conecta WINGS con Love Yourself y la sinceridad oculta.',
      },
      {
        label: 'Era: Love Yourself',
        href: '/eras/4bd9f159-8de3-4d4b-a719-7053e800d110',
        hint: 'Amarse a sí mismo como punto de partida del amor verdadero.',
      },
      {
        label: 'Comparar: WINGS vs Love Yourself',
        href: '/compare',
        hint: 'Usa el comparador para ver las diferencias y conexiones entre ambas eras.',
      },
      {
        label: 'Línea de Tiempo',
        href: '/timeline',
        hint: 'Traza la progresión temporal de ambas eras.',
      },
    ],
    tags: ['wings', 'love yourself', 'transición'],
  },
  {
    slug: 'simbolos-importantes',
    title: 'Símbolos importantes',
    description: 'Una inmersión en el lenguaje visual y simbólico del universo BTS. Desde la flor Smeraldo hasta las mariposas y los espejos, aprende a reconocer los motivos recurrentes que conectan las eras.',
    difficulty: 'media',
    estimatedTime: '25 min',
    steps: [
      {
        label: 'Glosario completo',
        href: '/glossary',
        hint: 'Punto de partida para explorar todos los símbolos documentados.',
      },
      {
        label: 'Miembros y sus símbolos',
        href: '/members',
        hint: 'Cada miembro tiene símbolos asociados que aparecen a lo largo de las eras.',
      },
      {
        label: 'Teoría: La Flor Smeraldo',
        href: '/theories/la-flor-smeraldo',
        hint: 'El símbolo más emblemático del lore y su significado profundo.',
      },
      {
        label: 'Teoría: El Gato Calicó',
        href: '/theories/el-gato-calico',
        hint: 'Un símbolo sutil que conecta líneas temporales.',
      },
      {
        label: 'Comparar eras',
        href: '/compare',
        hint: 'Observa cómo los mismos símbolos evolucionan entre eras.',
      },
    ],
    tags: ['símbolos', 'visual', 'glosario'],
  },
  {
    slug: 'teorias-populares',
    title: 'Teorías populares',
    description: 'Las interpretaciones más discutidas y aceptadas por la comunidad ARMY. Una selección de teorías que dan sentido a las conexiones más enigmáticas del universo narrativo.',
    difficulty: 'avanzada',
    estimatedTime: '35 min',
    steps: [
      {
        label: 'Todas las teorías',
        href: '/theories',
        hint: 'Vista general de todas las teorías publicadas en el archivo.',
      },
      {
        label: 'Teoría: Efecto Mariposa',
        href: '/theories/efecto-mariposa',
        hint: 'Los viajes en el tiempo de Seokjin y el precio de salvar a los demás.',
      },
      {
        label: 'Teoría: La Flor Smeraldo',
        href: '/theories/la-flor-smeraldo',
        hint: 'La sinceridad que nunca pudo ser entregada.',
      },
      {
        label: 'Teoría: El Gato Calicó',
        href: '/theories/el-gato-calico',
        hint: 'La anomalía temporal y el rol de Serendipity.',
      },
      {
        label: 'Línea de Tiempo',
        href: '/timeline',
        hint: 'Contrasta las teorías con los eventos canónicos.',
      },
      {
        label: 'Glosario',
        href: '/glossary',
        hint: 'Referencia rápida de los conceptos mencionados en las teorías.',
      },
    ],
    tags: ['teorías', 'comunidad', 'análisis'],
  },
  {
    slug: 'cronologia-esencial',
    title: 'Cronología esencial',
    description: 'Un mapa temporal del universo narrativo de BTS. Recorre los eventos clave en orden cronológico, comprende cómo se conectan las eras y construye una visión completa de la historia.',
    difficulty: 'inicial',
    estimatedTime: '15 min',
    steps: [
      {
        label: 'Línea de Tiempo completa',
        href: '/timeline',
        hint: 'El punto de partida: todos los eventos ordenados cronológicamente.',
      },
      {
        label: 'Todas las eras',
        href: '/eras',
        hint: 'Las grandes divisiones narrativas que agrupan los eventos.',
      },
      {
        label: 'Era: HYYH (2015–2016)',
        href: '/eras/e20bfd4b-76b6-45cb-a035-c3c2b0df3c1a',
        hint: 'Donde comienza todo: juventud y amistad.',
      },
      {
        label: 'Era: WINGS (2016–2017)',
        href: '/eras/9211e4f4-5f53-4886-905b-ea9741cd278a',
        hint: 'La tentación y la pérdida de la inocencia.',
      },
      {
        label: 'Era: Love Yourself (2017–2018)',
        href: '/eras/4bd9f159-8de3-4d4b-a719-7053e800d110',
        hint: 'El camino hacia el autodescubrimiento.',
      },
      {
        label: 'Era: Map of the Soul (2019–2020)',
        href: '/eras/1e5eab66-e0bd-4ff2-8356-9a25db8d3c1f',
        hint: 'Identidad, sombra y ego basados en Jung.',
      },
    ],
    tags: ['cronología', 'eras', 'orden'],
  },
];
