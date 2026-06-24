export function formatPostDate(date?: string): string {
  if (!date) return '';
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatPostMeta(date?: string, source?: 'hashnode' | 'devto'): string {
  const formatted = formatPostDate(date);
  const label =
    source === 'hashnode' ? 'Hashnode' : source === 'devto' ? 'dev.to' : '';
  if (formatted && label) return `${formatted} · ${label}`;
  return formatted || label;
}

export const AUTHOR_AVATAR = 'https://avatars.githubusercontent.com/u/13040458';
export const AUTHOR_NAME = 'Will Holmes';
