type HashnodeRssItem = {
  title: string;
  description: string;
  link: string;
  pubDate?: string;
  coverImage?: string;
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

function getEnclosureUrl(itemXml: string): string | undefined {
  const match = itemXml.match(/<enclosure url="([^"]+)"/);
  return match?.[1];
}

export function parseHashnodeRss(xml: string): HashnodeRssItem[] {
  const items = xml.match(/<item\b[\s\S]*?<\/item>/g) ?? [];

  return items.map(item => ({
    title: getCdataContent(item, 'title'),
    description: getCdataContent(item, 'description'),
    link: getTagContent(item, 'link'),
    pubDate: getTagContent(item, 'pubDate'),
    coverImage: getEnclosureUrl(item),
  }));
}
