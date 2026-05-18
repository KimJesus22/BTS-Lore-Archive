export interface SymbolItem {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  firstAppearance: string;
  relatedEras: string[];
  relatedSongs: string[];
  relatedMembers: string[];
  relatedTheories: string[];
  tags: string[];
  spoilerLevel?: 'none' | 'mild' | 'major';
}
