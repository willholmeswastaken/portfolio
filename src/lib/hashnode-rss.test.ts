import { describe, expect, it } from 'vitest';
import { parseHashnodeRss } from './hashnode-rss';

const sampleFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <item>
      <title><![CDATA[First post]]></title>
      <description><![CDATA[<p>A short summary.</p>]]></description>
      <link>https://willholmes.hashnode.dev/first-post</link>
      <pubDate>Tue, 28 May 2024 17:40:46 GMT</pubDate>
      <enclosure url="https://cdn.hashnode.com/image-one.jpeg" length="0" type="image/jpeg"/>
    </item>
    <item>
      <title><![CDATA[Second post]]></title>
      <description><![CDATA[Another summary.]]></description>
      <link>https://willholmes.hashnode.dev/second-post</link>
      <pubDate><![CDATA[Mon, 01 Jan 2024 10:00:00 GMT]]></pubDate>
    </item>
    <item>
      <title><![CDATA[Third post]]></title>
      <description><![CDATA[Third summary.]]></description>
      <link>https://willholmes.hashnode.dev/third-post</link>
      <dc:date>2025-03-15T09:30:00.000Z</dc:date>
    </item>
  </channel>
</rss>`;

describe('parseHashnodeRss', () => {
  it('parses titles, links, dates, and strips html descriptions', () => {
    const items = parseHashnodeRss(sampleFeed);

    expect(items).toHaveLength(3);
    expect(items[0]).toEqual({
      title: 'First post',
      description: 'A short summary.',
      link: 'https://willholmes.hashnode.dev/first-post',
      pubDate: 'Tue, 28 May 2024 17:40:46 GMT',
    });
    expect(items[1].pubDate).toBe('Mon, 01 Jan 2024 10:00:00 GMT');
    expect(items[2].pubDate).toBe('2025-03-15T09:30:00.000Z');
  });

  it('returns an empty array for invalid input', () => {
    expect(parseHashnodeRss('not xml')).toEqual([]);
  });
});
