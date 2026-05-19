import type { LoreCard } from '../types/loreCards';

/**
 * ARCHIVO DE DATOS MOCK: LORE CARDS (Tarjetas de Lore)
 * 
 * GUÍA DE CONTRIBUCIÓN: CÓMO AGREGAR NUEVAS LORE CARDS
 * ===================================================
 * Para añadir una nueva tarjeta al archivo, simplemente agrega un nuevo objeto
 * al arreglo `loreCards` a continuación, respetando el tipo `LoreCard`.
 * 
 * Estructura de cada objeto:
 * {
 *   id: string;            // Identificador único (ej: 'bu-time-loop')
 *   title: string;         // Título descriptivo e intrigante (en Español)
 *   category: string;      // Categoría (ej: 'Línea Temporal', 'Símbolo', 'Teoría', 'Concepto')
 *   shortText: string;     // Explicación concisa y atrapante del dato (en Español)
 *   relatedLink?: string;  // Opcional: Enlace relativo dentro de la web (ej: '/eras/hyyh' o '/roadmap')
 *   difficulty: string;    // Dificultad: 'Fácil' | 'Media' | 'Avanzada'
 *   tags: string[];        // Etiquetas clave para categorización secundaria (ej: ['Seokjin', 'Lollipop', 'Flores'])
 * }
 */
export const loreCards: LoreCard[] = [
  {
    id: 'jin-time-travel',
    title: 'El Bucle Temporal de Seokjin',
    category: 'Línea Temporal',
    shortText: 'Para salvar a sus amigos de sus trágicos destinos, Seokjin hace un pacto con el "gato de ojos psicodélicos" para retroceder en el tiempo. Cada vez que falla en salvar a uno de ellos, el bucle se reinicia el 11 de Abril.',
    relatedLink: '/roadmap',
    difficulty: 'Media',
    tags: ['Seokjin', 'Bucle Temporal', 'HYYH', 'Save Me']
  },
  {
    id: 'smeraldo-flower',
    title: 'La Flor Smeraldo',
    category: 'Símbolo',
    shortText: 'Una flor ficticia descubierta en Italia cuyo significado en el lenguaje de las flores es "la verdad que no pudo ser revelada" (non potevo dire la verità). Simboliza el miedo a mostrar el verdadero ser por temor al rechazo.',
    relatedLink: '/symbols',
    difficulty: 'Fácil',
    tags: ['Símbolo', 'Flores', 'Smeraldo', 'Sincerity']
  },
  {
    id: 'omelas-theory',
    title: 'El Sacrificio de Omelas',
    category: 'Teoría',
    shortText: 'Basado en el cuento de Ursula K. Le Guin, postula que la felicidad de la utópica ciudad de Omelas depende del sufrimiento perpetuo de un niño. En "Spring Day", el grupo decide abandonar Omelas juntos en lugar de aceptar esa felicidad injusta.',
    relatedLink: '/analysis/spring-day',
    difficulty: 'Avanzada',
    tags: ['Teoría', 'Spring Day', 'Literatura', 'Omelas']
  },
  {
    id: 'demian-wings',
    title: 'La Influencia de Demian',
    category: 'Concepto',
    shortText: 'La era "WINGS" está profundamente inspirada en la novela "Demian" de Hermann Hesse, explorando el dolor de la pérdida de la inocencia, el despertar espiritual, y la transición de un mundo seguro al reino del caos y la tentación.',
    relatedLink: '/eras/wings',
    difficulty: 'Avanzada',
    tags: ['Concepto', 'WINGS', 'Demian', 'Tentación']
  },
  {
    id: 'jungkook-car-accident',
    title: 'El Accidente de Jungkook',
    category: 'Línea Temporal',
    shortText: 'La noche del 11 de Abril de Año 22, Jungkook es atropellado por un auto. En algunas líneas temporales, el conductor resulta ser Seokjin, lo que añade una inmensa capa de culpa y tragedia a su misión de rescate.',
    relatedLink: '/roadmap',
    difficulty: 'Media',
    tags: ['Jungkook', 'Tragedia', 'Año 22', 'Accidente']
  },
  {
    id: 'magic-shop',
    title: 'El Psicodrama de Magic Shop',
    category: 'Concepto',
    shortText: 'El "Magic Shop" es una técnica psicoterapéutica donde los personajes intercambian sus miedos y recuerdos dolorosos por objetos que les brindan felicidad o consuelo, representando la curación a través del arte y la amistad.',
    relatedLink: '/songs/magic-shop',
    difficulty: 'Fácil',
    tags: ['Concepto', 'Love Yourself', 'Magic Shop', 'Curación']
  }
];
