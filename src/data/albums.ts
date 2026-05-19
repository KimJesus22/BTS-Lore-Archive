import type { Album } from '../types/albums';

export const albums: Album[] = [
  {
    id: 'hyyh-pt1',
    title: 'The Most Beautiful Moment in Life, Pt. 1',
    slug: 'the-most-beautiful-moment-in-life-pt-1',
    releaseDate: '2015-04-29',
    eraSlug: 'hyyh',
    description: 'El comienzo de la era HYYH (Hwa Yang Yeon Hwa). Este álbum marca el inicio de la narrativa oficial del Universo BTS (BU), introduciendo los temas de la juventud, la amistad, el dolor y la incertidumbre del paso a la adultez.',
    themes: ['Juventud', 'Rebelión', 'Amistad', 'Dolor'],
    spoilerLevel: 'none',
    songs: [
      {
        id: 'intro-hyyh',
        title: 'Intro: The Most Beautiful Moment in Life',
        slug: 'intro-the-most-beautiful-moment-in-life',
        trackNumber: 1,
        loreSummary: 'Presenta la metáfora del baloncesto y la cancha como un espacio de escape y ansiedad frente al futuro.',
      },
      {
        id: 'i-need-u',
        title: 'I NEED U',
        slug: 'i-need-u',
        trackNumber: 2,
        loreSummary: 'La piedra angular visual del BU. En su MV original se muestran por primera vez los traumas individuales de los 7 personajes: el fuego (Suga), el agua (Jimin), el espejo/accidente (RM/V), la narcolepsia (J-Hope), la agresión (Jungkook) y el intento de salvarlos (Jin).',
        relatedSymbols: ['flor-smeraldo', 'espejo'],
        relatedTheories: ['efecto-mariposa'],
      },
      {
        id: 'hold-me-tight',
        title: 'Hold Me Tight',
        slug: 'hold-me-tight',
        trackNumber: 3,
      },
      {
        id: 'dope',
        title: 'DOPE',
        slug: 'dope',
        trackNumber: 5,
      },
      {
        id: 'boyz-with-fun',
        title: 'Boyz with Fun',
        slug: 'boyz-with-fun',
        trackNumber: 6,
      }
    ]
  },
  {
    id: 'wings',
    title: 'WINGS',
    slug: 'wings',
    releaseDate: '2016-10-10',
    eraSlug: 'wings',
    description: 'Una profunda inmersión en la tentación, el pecado y el crecimiento. Basado fuertemente en el libro "Demian" de Hermann Hesse, este álbum separa a los personajes y los enfrenta a sus propios demonios internos.',
    themes: ['Tentación', 'Pecado', 'Crecimiento', 'Dualidad'],
    spoilerLevel: 'mild',
    songs: [
      {
        id: 'intro-boy-meets-evil',
        title: 'Intro: Boy Meets Evil',
        slug: 'intro-boy-meets-evil',
        trackNumber: 1,
        loreSummary: 'J-Hope protagoniza esta introducción sobre la inevitabilidad de caer en la tentación.',
      },
      {
        id: 'blood-sweat-tears',
        title: 'Blood Sweat & Tears',
        slug: 'blood-sweat-tears',
        trackNumber: 2,
        loreSummary: 'El MV es una alegoría compleja del bien y el mal. Jin besa a la estatua, aceptando el destino y la "corrupción" necesaria para crecer, lo que se conecta con la historia de Abraxas.',
        relatedSymbols: ['espejo'],
      },
      {
        id: 'begin',
        title: 'Begin',
        slug: 'begin',
        trackNumber: 3,
        loreSummary: 'Solo de Jungkook. Representa su profunda conexión y dependencia emocional hacia sus "hyungs" (los miembros mayores), y cómo el dolor de ellos es su propio dolor.',
      },
      {
        id: 'lie',
        title: 'Lie',
        slug: 'lie',
        trackNumber: 4,
        loreSummary: 'Solo de Jimin. Atrapado en sus propias mentiras y la cámara blanca, conecta con las Notas donde Jimin se encuentra internado en el hospital.',
        relatedSymbols: ['camara-de-video'],
      },
      {
        id: 'stigma',
        title: 'Stigma',
        slug: 'stigma',
        trackNumber: 5,
        loreSummary: 'Solo de V. El peso del crimen que cometió (asesinar a su padre abusivo) lo marca y lo aísla de los demás.',
      },
      {
        id: 'awake',
        title: 'Awake',
        slug: 'awake',
        trackNumber: 9,
        loreSummary: 'Solo de Jin. Acepta que tal vez no pueda volar como los demás, pero intentará luchar (y retroceder en el tiempo) para salvarlos a todos.',
        relatedTheories: ['efecto-mariposa'],
        relatedSymbols: ['flor-smeraldo'],
      }
    ]
  }
];
