import { stripHtml } from './strip-html';

type HashnodeRssItem = {
  title: string;
  description: string;
  link: string;
  pubDate?: string;
};

function getCdataContent(xml: string, tag: string): string {
  const cdataMatch = xml.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
  if (cdataMatch?.[1]) return cdataMatch[1].trim();
  const plainMatch = xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
  return plainMatch?.[1]?.trim() ?? '';
}

function getTagContent(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
  return match?.[1]?.trim() ?? '';
}

function getItemDate(item: string): string | undefined {
  const pubDate = getCdataContent(item, 'pubDate') || getTagContent(item, 'pubDate');
  if (pubDate) return pubDate;

  const dcDate = getCdataContent(item, 'dc:date') || getTagContent(item, 'dc:date');
  return dcDate || undefined;
}

export function parseHashnodeRss(xml: string): HashnodeRssItem[] {
  const items = xml.match(/<item\b[\s\S]*?<\/item>/g) ?? [];

  return items.map(item => {
    const description = stripHtml(getCdataContent(item, 'description'));

    return {
      title: getCdataContent(item, 'title'),
      description,
      link: getTagContent(item, 'link'),
      pubDate: getItemDate(item),
    };
  });
}
