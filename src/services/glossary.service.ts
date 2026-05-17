import { insforge } from '../lib/insforge';
import { mockGlossary } from '../data/glossary';
import type { GlossaryTerm } from '../types/content';

export const getGlossaryTerms = async (): Promise<GlossaryTerm[]> => {
  try {
    const { data, error } = await insforge.database
      .from('glossary')
      .select('*');

    if (error) {
      console.warn('Error fetching glossary from InsForge:', error);
      return mockGlossary;
    }

    if (!data || data.length === 0) {
      console.warn('No glossary terms found in InsForge, using mock data fallback.');
      return mockGlossary;
    }

    return data as GlossaryTerm[];
  } catch (error) {
    console.warn('Failed to fetch from InsForge:', error);
    return mockGlossary;
  }
};
