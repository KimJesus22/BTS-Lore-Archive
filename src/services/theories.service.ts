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

export const createTheory = async (theory: Omit<Theory, 'created_at' | 'updated_at'>) => {
  // TODO: SEGURIDAD - Validar sesión de usuario para crear teorías.
  const { data, error } = await insforge.database
    .from('theories')
    .insert([theory])
    .select();

  if (error) {
    throw error;
  }

  return data;
};
