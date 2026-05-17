import { insforge } from '../lib/insforge';
import { mockMembers } from '../data/members';
import type { Member } from '../types/content';

export const getMembers = async (): Promise<Member[]> => {
  try {
    const { data, error } = await insforge.database
      .from('members')
      .select('*');

    if (error) {
      console.warn('Error fetching members from InsForge:', error);
      return mockMembers;
    }

    if (!data || data.length === 0) {
      console.warn('No members found in InsForge, using mock data fallback.');
      return mockMembers;
    }

    return data as Member[];
  } catch (error) {
    console.warn('Failed to fetch from InsForge:', error);
    return mockMembers;
  }
};
