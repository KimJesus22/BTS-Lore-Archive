/**
 * Historial de acciones del panel /admin.
 *
 * Se guarda en localStorage bajo la clave `bts-lore-admin-history`.
 * Cada registro contiene: id, action, entityType, entityTitle, timestamp.
 *
 * Uso desde cualquier <script> del admin:
 *
 *   import { logAdminAction } from '../../utils/adminHistory';
 *   logAdminAction('created_era', 'era', 'HYYH');
 */

export type AdminAction =
  | 'created_era'
  | 'created_theory'
  | 'created_timeline_event'
  | 'created_glossary_term'
  | 'imported_markdown';

export interface AdminHistoryEntry {
  id: string;
  action: AdminAction;
  entityType: string;
  entityTitle: string;
  timestamp: string;
}

const STORAGE_KEY = 'bts-lore-admin-history';
const MAX_ENTRIES = 50;

/** Lee el historial completo desde localStorage. */
export function getAdminHistory(): AdminHistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** Registra una nueva acción al inicio del historial. */
export function logAdminAction(
  action: AdminAction,
  entityType: string,
  entityTitle: string,
): void {
  const entry: AdminHistoryEntry = {
    id: crypto.randomUUID(),
    action,
    entityType,
    entityTitle,
    timestamp: new Date().toISOString(),
  };

  const history = getAdminHistory();
  history.unshift(entry);

  // Limitar a MAX_ENTRIES para no inflar localStorage
  if (history.length > MAX_ENTRIES) {
    history.length = MAX_ENTRIES;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    console.warn('Error guardando historial de admin', e);
  }

  // Emitir evento para que la UI se actualice sin recargar
  window.dispatchEvent(new CustomEvent('admin-history-updated'));
}

/** Borra todo el historial. */
export function clearAdminHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* noop */
  }
  window.dispatchEvent(new CustomEvent('admin-history-updated'));
}
