/**
 * Analizador de calidad de contenido.
 *
 * Detecta problemas en los datos del archivo sin modificarlos.
 * Cada función de análisis recibe un array de entidades y devuelve
 * una lista de `ContentIssue` con:
 *
 *  - contentType: tipo de contenido (era, timeline, theory, glossary, symbol)
 *  - contentId: ID del registro
 *  - contentTitle: título o nombre legible
 *  - issue: descripción del problema
 *  - priority: 'alta' | 'media' | 'baja'
 *
 * ## Cómo se calculan los problemas
 *
 * ### Eras
 *  - Sin slug → alta (rompe la URL)
 *  - Sin descripción o descripción < 30 caracteres → media
 *  - Sin año de inicio o fin → media
 *
 * ### Timeline Events
 *  - Sin slug → baja (no siempre necesario)
 *  - Descripción < 20 caracteres → media
 *  - Sin era_id (evento huérfano) → alta
 *  - Sin event_date → media
 *  - Sin source_type → baja
 *
 * ### Theories
 *  - Sin slug → alta
 *  - Contenido < 50 caracteres → alta (teoría vacía)
 *  - Estado "draft" → media (no publicada)
 *  - Sin tags o tags vacíos → baja
 *
 * ### Glossary Terms
 *  - Sin slug → alta
 *  - Definición < 15 caracteres → media
 *  - Sin categoría → baja
 *  - Sin related_terms → baja
 *
 * ### Symbols
 *  - Sin slug → alta
 *  - shortDescription < 15 caracteres → media
 *  - fullDescription < 50 caracteres → media
 *  - Sin tags o tags vacíos → baja
 *  - Sin relatedEras → media
 *  - Sin relatedMembers → baja
 */

import type { Era, TimelineEvent, Theory, GlossaryTerm } from '../types/content';
import type { SymbolItem } from '../types/symbols';

export type IssuePriority = 'alta' | 'media' | 'baja';
export type ContentType = 'era' | 'timeline' | 'theory' | 'glossary' | 'symbol';

export interface ContentIssue {
  contentType: ContentType;
  contentId: string;
  contentTitle: string;
  issue: string;
  priority: IssuePriority;
}

// ─── Eras ───

export function analyzeEras(eras: Era[]): ContentIssue[] {
  const issues: ContentIssue[] = [];

  for (const era of eras) {
    const title = era.title || `Era ${era.id}`;

    if (!era.slug || era.slug.trim() === '') {
      issues.push({ contentType: 'era', contentId: era.id, contentTitle: title, issue: 'Sin slug (URL rota)', priority: 'alta' });
    }
    if (!era.description || era.description.trim().length < 30) {
      issues.push({ contentType: 'era', contentId: era.id, contentTitle: title, issue: 'Descripción ausente o muy corta (< 30 caracteres)', priority: 'media' });
    }
    if (!era.start_year) {
      issues.push({ contentType: 'era', contentId: era.id, contentTitle: title, issue: 'Sin año de inicio', priority: 'media' });
    }
    if (!era.end_year) {
      issues.push({ contentType: 'era', contentId: era.id, contentTitle: title, issue: 'Sin año de fin', priority: 'media' });
    }
  }

  return issues;
}

// ─── Timeline Events ───

export function analyzeTimeline(events: TimelineEvent[]): ContentIssue[] {
  const issues: ContentIssue[] = [];

  for (const ev of events) {
    const title = ev.title || `Evento ${ev.id}`;

    if (!ev.era_id || ev.era_id.trim() === '') {
      issues.push({ contentType: 'timeline', contentId: ev.id, contentTitle: title, issue: 'Sin era asociada (evento huérfano)', priority: 'alta' });
    }
    if (!ev.slug || ev.slug.trim() === '') {
      issues.push({ contentType: 'timeline', contentId: ev.id, contentTitle: title, issue: 'Sin slug', priority: 'baja' });
    }
    if (!ev.description || ev.description.trim().length < 20) {
      issues.push({ contentType: 'timeline', contentId: ev.id, contentTitle: title, issue: 'Descripción ausente o muy corta (< 20 caracteres)', priority: 'media' });
    }
    if (!ev.event_date) {
      issues.push({ contentType: 'timeline', contentId: ev.id, contentTitle: title, issue: 'Sin fecha de evento', priority: 'media' });
    }
    if (!ev.source_type || ev.source_type.trim() === '') {
      issues.push({ contentType: 'timeline', contentId: ev.id, contentTitle: title, issue: 'Sin tipo de fuente', priority: 'baja' });
    }
  }

  return issues;
}

// ─── Theories ───

export function analyzeTheories(theories: Theory[]): ContentIssue[] {
  const issues: ContentIssue[] = [];

  for (const t of theories) {
    const title = t.title || `Teoría ${t.id}`;

    if (!t.slug || t.slug.trim() === '') {
      issues.push({ contentType: 'theory', contentId: t.id, contentTitle: title, issue: 'Sin slug (URL rota)', priority: 'alta' });
    }
    if (!t.content || t.content.trim().length < 50) {
      issues.push({ contentType: 'theory', contentId: t.id, contentTitle: title, issue: 'Contenido ausente o muy corto (< 50 caracteres)', priority: 'alta' });
    }
    if (t.status === 'draft') {
      issues.push({ contentType: 'theory', contentId: t.id, contentTitle: title, issue: 'Estado: borrador (no publicada)', priority: 'media' });
    }
    if (!t.tags || t.tags.length === 0) {
      issues.push({ contentType: 'theory', contentId: t.id, contentTitle: title, issue: 'Sin tags', priority: 'baja' });
    }
  }

  return issues;
}

// ─── Glossary ───

export function analyzeGlossary(terms: GlossaryTerm[]): ContentIssue[] {
  const issues: ContentIssue[] = [];

  for (const g of terms) {
    const title = g.term || `Término ${g.id}`;

    if (!g.slug || g.slug.trim() === '') {
      issues.push({ contentType: 'glossary', contentId: g.id, contentTitle: title, issue: 'Sin slug (URL rota)', priority: 'alta' });
    }
    if (!g.definition || g.definition.trim().length < 15) {
      issues.push({ contentType: 'glossary', contentId: g.id, contentTitle: title, issue: 'Definición ausente o muy corta (< 15 caracteres)', priority: 'media' });
    }
    if (!g.category || g.category.trim() === '') {
      issues.push({ contentType: 'glossary', contentId: g.id, contentTitle: title, issue: 'Sin categoría', priority: 'baja' });
    }
    if (!g.related_terms || g.related_terms.length === 0) {
      issues.push({ contentType: 'glossary', contentId: g.id, contentTitle: title, issue: 'Sin términos relacionados', priority: 'baja' });
    }
  }

  return issues;
}

// ─── Symbols ───

export function analyzeSymbols(symbols: SymbolItem[]): ContentIssue[] {
  const issues: ContentIssue[] = [];

  for (const s of symbols) {
    const title = s.name || `Símbolo ${s.id}`;

    if (!s.slug || s.slug.trim() === '') {
      issues.push({ contentType: 'symbol', contentId: s.id, contentTitle: title, issue: 'Sin slug (URL rota)', priority: 'alta' });
    }
    if (!s.shortDescription || s.shortDescription.trim().length < 15) {
      issues.push({ contentType: 'symbol', contentId: s.id, contentTitle: title, issue: 'Descripción corta ausente o insuficiente (< 15 caracteres)', priority: 'media' });
    }
    if (!s.fullDescription || s.fullDescription.trim().length < 50) {
      issues.push({ contentType: 'symbol', contentId: s.id, contentTitle: title, issue: 'Descripción completa muy corta (< 50 caracteres)', priority: 'media' });
    }
    if (!s.tags || s.tags.length === 0) {
      issues.push({ contentType: 'symbol', contentId: s.id, contentTitle: title, issue: 'Sin tags', priority: 'baja' });
    }
    if (!s.relatedEras || s.relatedEras.length === 0) {
      issues.push({ contentType: 'symbol', contentId: s.id, contentTitle: title, issue: 'Sin eras relacionadas', priority: 'media' });
    }
    if (!s.relatedMembers || s.relatedMembers.length === 0) {
      issues.push({ contentType: 'symbol', contentId: s.id, contentTitle: title, issue: 'Sin miembros relacionados', priority: 'baja' });
    }
  }

  return issues;
}

// ─── Aggregation ───

export interface QualitySummary {
  total: number;
  alta: number;
  media: number;
  baja: number;
  byType: Record<ContentType, ContentIssue[]>;
}

export function summarizeIssues(issues: ContentIssue[]): QualitySummary {
  const byType: Record<ContentType, ContentIssue[]> = {
    era: [],
    timeline: [],
    theory: [],
    glossary: [],
    symbol: [],
  };

  let alta = 0;
  let media = 0;
  let baja = 0;

  for (const issue of issues) {
    byType[issue.contentType].push(issue);
    if (issue.priority === 'alta') alta++;
    else if (issue.priority === 'media') media++;
    else baja++;
  }

  return { total: issues.length, alta, media, baja, byType };
}
