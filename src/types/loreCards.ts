export interface LoreCard {
  id: string;
  title: string;
  category: string;
  shortText: string;
  relatedLink?: string;
  difficulty: 'Fácil' | 'Media' | 'Avanzada';
  tags: string[];
}
