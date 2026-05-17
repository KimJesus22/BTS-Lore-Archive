import { insforge } from '../lib/insforge';
import { mockTheories } from '../data/theories';
import type { Theory } from '../types/content';

export const getTheories = async (): Promise<Theory[]> => {
  try {
    const { data, error } = await insforge.database
      .from('theories')
      .select('*');

    if (error) {
      console.warn('Error fetching theories from InsForge:', error);
      return mockTheories;
    }

    if (!data || data.length === 0) {
      console.warn('No theories found in InsForge, using mock data fallback.');
      return mockTheories;
    }

    return data as Theory[];
  } catch (error) {
    console.warn('Failed to fetch from InsForge:', error);
    return mockTheories;
  }
};
