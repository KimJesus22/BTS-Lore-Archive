import { insforge } from '../lib/insforge';
import { mockEras } from '../data/eras';
import type { Era } from '../types/content';

export const getEras = async (): Promise<Era[]> => {
  try {
    const { data, error } = await insforge.database
      .from('eras')
      .select('*');

    if (error) {
      console.warn('Error fetching eras from InsForge:', error);
      return mockEras;
    }

    if (!data || data.length === 0) {
      console.warn('No eras found in InsForge, using mock data fallback.');
      return mockEras;
    }

    return data as Era[];
  } catch (error) {
    console.warn('Failed to fetch from InsForge:', error);
    return mockEras;
  }
};
