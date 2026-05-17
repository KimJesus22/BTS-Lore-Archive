import { mockEras } from '../data/eras';
import { mockGlossary } from '../data/glossary';
import { mockMembers } from '../data/members';
import { mockTheories } from '../data/theories';
import { mockTimelineEvents } from '../data/timeline';
import { getEras } from './eras.service';
import { getGlossaryTerms } from './glossary.service';
import { getMembers } from './members.service';
import { getTheories } from './theories.service';
import { getTimelineEvents } from './timeline.service';
import type { Era, GlossaryTerm, Member, Theory, TimelineEvent } from '../types/content';

export type SearchGroupKey = 'eras' | 'members' | 'timeline' | 'theories' | 'glossary';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  href: string;
  searchableText: string;
}

export type SearchResultsByGroup = Record<SearchGroupKey, SearchResult[]>;

const emptyGroups = (): SearchResultsByGroup => ({
  eras: [],
  members: [],
  timeline: [],
  theories: [],
  glossary: [],
});

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const truncate = (value: string, length = 150) => {
  if (value.length <= length) return value;
  return `${value.slice(0, length).trim()}...`;
};

const eraToResult = (era: Era): SearchResult => ({
  id: era.id,
  title: era.title,
  description: truncate(era.description),
  type: 'Era',
  href: `/eras/${era.id}`,
  searchableText: [era.title, era.slug, era.description, era.start_year, era.end_year].filter(Boolean).join(' '),
});

const memberToResult = (member: Member): SearchResult => ({
  id: member.id,
  title: `${member.stage_name} - ${member.name}`,
  description: truncate([member.lore_role, member.symbols?.join(', ')].filter(Boolean).join(' · ') || 'Perfil del archivo narrativo.'),
  type: 'Miembro',
  href: `/members#${member.slug}`,
  searchableText: [member.name, member.stage_name, member.slug, member.lore_role, member.symbols?.join(' ')].filter(Boolean).join(' '),
});

const timelineToResult = (event: TimelineEvent): SearchResult => {
  const anchor = event.slug || event.id;

  return {
    id: event.id,
    title: event.title,
    description: truncate([event.event_date, event.description].filter(Boolean).join(' · ')),
    type: 'Cronología',
    href: `/timeline#${anchor}`,
    searchableText: [event.title, event.slug, event.event_date, event.description, event.source_type].filter(Boolean).join(' '),
  };
};

const theoryToResult = (theory: Theory): SearchResult => ({
  id: theory.id,
  title: theory.title,
  description: truncate(theory.content),
  type: 'Teoría',
  href: `/theories/${theory.slug}`,
  searchableText: [theory.title, theory.slug, theory.content, theory.status, theory.tags?.join(' ')].filter(Boolean).join(' '),
});

const glossaryToResult = (term: GlossaryTerm): SearchResult => ({
  id: term.id,
  title: term.term,
  description: truncate(term.definition),
  type: 'Glosario',
  href: `/glossary#${term.slug}`,
  searchableText: [term.term, term.slug, term.definition, term.category, term.related_terms?.join(' ')].filter(Boolean).join(' '),
});

const buildGroups = (
  eras: Era[],
  members: Member[],
  timeline: TimelineEvent[],
  theories: Theory[],
  glossary: GlossaryTerm[],
): SearchResultsByGroup => ({
  eras: eras.map(eraToResult),
  members: members.map(memberToResult),
  timeline: timeline.map(timelineToResult),
  theories: theories.map(theoryToResult),
  glossary: glossary.map(glossaryToResult),
});

export const getSearchIndex = async () => {
  const fallback = buildGroups(mockEras, mockMembers, mockTimelineEvents, mockTheories, mockGlossary);

  try {
    const [eras, members, timeline, theories, glossary] = await Promise.all([
      getEras(),
      getMembers(),
      getTimelineEvents(),
      getTheories(),
      getGlossaryTerms(),
    ]);

    return buildGroups(eras, members, timeline, theories, glossary);
  } catch (error) {
    console.warn('Search index fell back to mock data:', error);
    return fallback;
  }
};

export const searchContent = async (query: string): Promise<SearchResultsByGroup> => {
  const cleanQuery = normalize(query.trim());

  if (!cleanQuery) {
    return emptyGroups();
  }

  const index = await getSearchIndex();
  const groups = emptyGroups();

  (Object.keys(index) as SearchGroupKey[]).forEach((groupKey) => {
    groups[groupKey] = index[groupKey].filter((item) => normalize(item.searchableText).includes(cleanQuery));
  });

  return groups;
};

export const countSearchResults = (groups: SearchResultsByGroup) =>
  Object.values(groups).reduce((total, group) => total + group.length, 0);
