import { insforge } from '../lib/insforge';
import { mockSymbols } from '../data/symbols';
import type { SymbolItem } from '../types/symbols';

export const getSymbols = async (): Promise<SymbolItem[]> => {
  try {
    const { data, error } = await insforge.database
      .from('symbols')
      .select('*');

    if (error) {
      console.warn('Error fetching symbols from InsForge:', error);
      return mockSymbols;
    }

    if (!data || data.length === 0) {
      console.warn('No symbols found in InsForge, using mock data fallback.');
      return mockSymbols;
    }

    return data as SymbolItem[];
  } catch (error) {
    console.warn('Failed to fetch from InsForge:', error);
    return mockSymbols;
  }
};
