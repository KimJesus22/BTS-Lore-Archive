import { insforge } from '../lib/insforge';
import { mockTimelineEvents } from '../data/timeline';
import type { TimelineEvent } from '../types/content';

export const getTimelineEvents = async (): Promise<TimelineEvent[]> => {
  try {
    const { data, error } = await insforge.database
      .from('timeline_events')
      .select('*');

    if (error) {
      console.warn('Error fetching timeline events from InsForge:', error);
      return mockTimelineEvents;
    }

    if (!data || data.length === 0) {
      console.warn('No timeline events found in InsForge, using mock data fallback.');
      return mockTimelineEvents;
    }

    return data as TimelineEvent[];
  } catch (error) {
    console.warn('Failed to fetch from InsForge:', error);
    return mockTimelineEvents;
  }
};

export const createTimelineEvent = async (event: Omit<TimelineEvent, 'created_at'>) => {
  // TODO: SEGURIDAD - Validar permisos de admin.
  const { data, error } = await insforge.database
    .from('timeline_events')
    .insert([event])
    .select();

  if (error) {
    throw error;
  }

  return data;
};
