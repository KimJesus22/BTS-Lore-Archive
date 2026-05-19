export interface Song {
  id: string;
  title: string;
  slug: string;
  trackNumber: number;
  loreSummary?: string;
  relatedSymbols?: string[]; // Slugs de símbolos
  relatedTheories?: string[]; // Slugs de teorías
}

export interface Album {
  id: string;
  title: string;
  slug: string;
  releaseDate: string;
  eraSlug: string;
  description: string;
  themes: string[];
  songs: Song[];
  spoilerLevel?: 'none' | 'mild' | 'major';
}
