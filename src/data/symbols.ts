import type { SymbolItem } from '../types/symbols';

export const mockSymbols: SymbolItem[] = [
  {
    id: 'sym-1',
    name: 'Flor Smeraldo',
    slug: 'flor-smeraldo',
    shortDescription: 'Una flor legendaria que representa "la verdad que no se pudo entregar".',
    fullDescription: 'La Smeraldo es una flor ficticia central en el universo BTS, descubierta en "La Città di Smeraldo". Representa sentimientos ocultos, verdades dolorosas y el deseo de entregar un corazón sincero pero no poder hacerlo por miedo o circunstancias. Juega un papel crucial en la narrativa de Jin.',
    firstAppearance: 'Agosto 2017 (Blog Smeraldo)',
    relatedEras: ['era-love-yourself', 'era-hyyh'],
    relatedSongs: ['The Truth Untold', 'Awake'],
    relatedMembers: ['Jin'],
    relatedTheories: ['la-flor-smeraldo', 'el-viajero-del-tiempo'],
    tags: ['flor', 'verdad', 'oculto'],
    spoilerLevel: 'none'
  },
  {
    id: 'sym-2',
    name: 'Gato Calicó',
    slug: 'gato-calico',
    shortDescription: 'Representa rareza, anomalías o cruces del destino.',
    fullDescription: 'Los gatos calicó machos son genéticamente muy raros. En el universo BTS, especialmente introducido en Serendipity, simboliza un amor destinado y algo fuera de lo común, una anomalía feliz. En teorías más profundas, se asocia con Jimin y su capacidad para percibir múltiples realidades o líneas temporales.',
    firstAppearance: 'Septiembre 2017 (Serendipity Trailer)',
    relatedEras: ['era-love-yourself'],
    relatedSongs: ['Serendipity'],
    relatedMembers: ['Jimin'],
    relatedTheories: ['el-gato-calico'],
    tags: ['destino', 'jimin', 'anomalía'],
    spoilerLevel: 'mild'
  },
  {
    id: 'sym-3',
    name: 'Cámara de Video',
    slug: 'camara-de-video',
    shortDescription: 'Herramienta para registrar líneas temporales y preservar recuerdos.',
    fullDescription: 'La cámara de video (o Polaroid) es usada constantemente por Jin. Simboliza su rol como "observador" y el encargado de registrar o alterar los eventos para intentar salvar a sus amigos. Las fotografías son la prueba de los bucles temporales y los recuerdos fragmentados.',
    firstAppearance: 'Abril 2015 (I NEED U MV)',
    relatedEras: ['era-hyyh', 'era-wings'],
    relatedSongs: ['Prologue', 'Euphoria', 'Epiphany'],
    relatedMembers: ['Jin'],
    relatedTheories: ['el-viajero-del-tiempo', 'efecto-mariposa'],
    tags: ['recuerdos', 'bucle temporal', 'observador'],
    spoilerLevel: 'major'
  },
  {
    id: 'sym-4',
    name: 'Espejo',
    slug: 'espejo',
    shortDescription: 'Reflejo de la dualidad, la verdadera identidad y confrontación.',
    fullDescription: 'El espejo aparece recurrentemente, en particular asociado a Namjoon (RM) y a veces a Jin o Hoseok. Simboliza la necesidad de confrontar la propia sombra o enfrentarse a verdades dolorosas. Un espejo roto indica una identidad fracturada o el rechazo del falso yo.',
    firstAppearance: 'Noviembre 2015 (Run MV)',
    relatedEras: ['era-hyyh', 'era-wings', 'era-love-yourself'],
    relatedSongs: ['Reflection', 'Fake Love'],
    relatedMembers: ['RM', 'Jin'],
    relatedTheories: ['espejos-paralelos'],
    tags: ['identidad', 'sombra', 'reflejo'],
    spoilerLevel: 'mild'
  }
];
