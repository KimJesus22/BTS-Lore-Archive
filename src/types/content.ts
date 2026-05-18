export interface Era {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover_image_url?: string;
  start_year?: number;
  end_year?: number;
  order_index: number;
  created_at: string;
}

export interface TimelineEvent {
  id: string;
  era_id?: string;
  title: string;
  slug?: string;
  event_date?: string;
  description: string;
  source_type?: string;
  source_url?: string;
  order_index: number;
  created_at: string;
  spoilerLevel?: 'none' | 'mild' | 'major';
}

export interface Member {
  id: string;
  name: string;
  stage_name: string;
  slug: string;
  profile_image_url?: string;
  lore_role?: string;
  symbols?: string[];
  created_at: string;
}

export interface Theory {
  id: string;
  title: string;
  slug: string;
  content: string;
  status: string;
  tags?: string[];
  created_at: string;
  updated_at?: string;
  spoilerLevel?: 'none' | 'mild' | 'major';
}

export interface GlossaryTerm {
  id: string;
  term: string;
  slug: string;
  definition: string;
  category?: string;
  related_terms?: string[];
  created_at: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}
