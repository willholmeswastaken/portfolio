import { describe, expect, it } from 'vitest';
import { parseHashnodeRss } from './hashnode-rss';

const sampleFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <item>
      <title><![CDATA[First post]]></title>
      <description><![CDATA[A short summary.]]></description>
      <link>https://willholmes.hashnode.dev/first-post</link>
      <pubDate>Tue, 28 May 2024 17:40:46 GMT</pubDate>
      <enclosure url="https://cdn.hashnode.com/image-one.jpeg" length="0" type="image/jpeg"/>
    </item>
    <item>
      <title><![CDATA[Second post]]></title>
      <description><![CDATA[Another summary.]]></description>
      <link>https://willholmes.hashnode.dev/second-post</link>
      <pubDate>Mon, 01 Jan 2024 10:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`;

describe('parseHashnodeRss', () => {
  it('parses titles, links, dates, and cover images', () => {
    const items = parseHashnodeRss(sampleFeed);

    expect(items).toHaveLength(2);
    expect(items[0]).toEqual({
      title: 'First post',
      description: 'A short summary.',
      link: 'https://willholmes.hashnode.dev/first-post',
      pubDate: 'Tue, 28 May 2024 17:40:46 GMT',
      coverImage: 'https://cdn.hashnode.com/image-one.jpeg',
    });
    expect(items[1].coverImage).toBeUndefined();
  });

  it('returns an empty array for invalid input', () => {
    expect(parseHashnodeRss('not xml')).toEqual([]);
  });
});
