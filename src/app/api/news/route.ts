import { NextResponse } from 'next/server';

// Cache response for 6 hours
export const revalidate = 21600;

interface NewsItem {
  title: string;
  link: string;
  source: string;
  date: string;
}

interface FeedConfig {
  url: string;
  source: string;
}

// Use feeds that reliably serve RSS to server-side requests
const RSS_FEEDS: FeedConfig[] = [
  { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', source: 'BBC Business' },
  { url: 'https://www.theguardian.com/business/rss', source: 'The Guardian' },
  { url: 'https://rss.nytimes.com/services/xml/rss/nyt/RealEstate.xml', source: 'NY Times' },
  { url: 'https://www.facilitiesnet.com/rss/fnallheadlines.xml', source: 'Facilities Net' },
  { url: 'https://www.fm-world.co.uk/feed/', source: 'FM World' },
];

function stripCDATA(text: string): string {
  return text
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
    .trim();
}

function extractItems(xmlContent: string, source: string): NewsItem[] {
  const items: NewsItem[] = [];

  // Try RSS <item> blocks first
  const itemRegex = /<item[\s>]([\s\S]*?)<\/item>/g;
  let itemMatch;

  while ((itemMatch = itemRegex.exec(xmlContent)) !== null) {
    const content = itemMatch[1];
    const item = parseItemContent(content, source);
    if (item) items.push(item);
  }

  // If no RSS items found, try Atom <entry> blocks
  if (items.length === 0) {
    const entryRegex = /<entry[\s>]([\s\S]*?)<\/entry>/g;
    let entryMatch;

    while ((entryMatch = entryRegex.exec(xmlContent)) !== null) {
      const content = entryMatch[1];
      const item = parseEntryContent(content, source);
      if (item) items.push(item);
    }
  }

  return items;
}

function parseItemContent(content: string, source: string): NewsItem | null {
  // Extract title
  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/.exec(content);
  const title = titleMatch ? stripCDATA(titleMatch[1]) : '';

  // Extract link - handle various formats
  let link = '';
  const linkContentMatch = /<link[^>]*>([\s\S]*?)<\/link>/.exec(content);
  if (linkContentMatch && linkContentMatch[1].trim()) {
    link = stripCDATA(linkContentMatch[1]);
  }
  if (!link) {
    const linkAttrMatch = /<link[^>]+href=["']([^"']+)["']/.exec(content);
    if (linkAttrMatch) link = linkAttrMatch[1];
  }
  // Some feeds use <guid> as a link
  if (!link) {
    const guidMatch = /<guid[^>]*>([\s\S]*?)<\/guid>/.exec(content);
    if (guidMatch) {
      const guid = stripCDATA(guidMatch[1]);
      if (guid.startsWith('http')) link = guid;
    }
  }

  // Extract pubDate
  const pubDateMatch = /<pubDate[^>]*>([\s\S]*?)<\/pubDate>/.exec(content);
  const pubDate = pubDateMatch ? stripCDATA(pubDateMatch[1]) : '';

  if (title && link) {
    return {
      title: decodeHTMLEntities(title),
      link,
      source,
      date: pubDate || new Date().toUTCString(),
    };
  }
  return null;
}

function parseEntryContent(content: string, source: string): NewsItem | null {
  // Atom feed format
  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/.exec(content);
  const title = titleMatch ? stripCDATA(titleMatch[1]) : '';

  // Atom uses <link href="..."/> (self-closing)
  let link = '';
  const linkAttrMatch = /<link[^>]+href=["']([^"']+)["']/.exec(content);
  if (linkAttrMatch) link = linkAttrMatch[1];

  // Atom uses <updated> or <published>
  const dateMatch = /<(?:updated|published)[^>]*>([\s\S]*?)<\/(?:updated|published)>/.exec(content);
  const date = dateMatch ? stripCDATA(dateMatch[1]) : '';

  if (title && link) {
    return {
      title: decodeHTMLEntities(title),
      link,
      source,
      date: date || new Date().toUTCString(),
    };
  }
  return null;
}

function decodeHTMLEntities(text: string): string {
  const entities: { [key: string]: string } = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&apos;': "'",
    '&#8217;': '\u2019',
    '&#8216;': '\u2018',
    '&#8220;': '\u201C',
    '&#8221;': '\u201D',
    '&mdash;': '\u2014',
    '&ndash;': '\u2013',
    '&hellip;': '\u2026',
  };

  return text.replace(/&[#a-zA-Z0-9]+;/g, (match) => entities[match] || match);
}

function isWithinLastDays(dateStr: string, days: number): boolean {
  try {
    const itemDate = new Date(dateStr);
    if (isNaN(itemDate.getTime())) return true;
    const now = new Date();
    const cutoffDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return itemDate >= cutoffDate;
  } catch {
    return true;
  }
}

export async function GET(request: Request) {
  const errors: string[] = [];

  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '14', 10);

    // Fetch all feeds in parallel with timeout
    const fetchPromises = RSS_FEEDS.map((feed) =>
      fetch(feed.url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/rss+xml, application/xml, text/xml, */*',
        },
        signal: AbortSignal.timeout(8000),
      })
        .then((res) => {
          if (!res.ok) {
            errors.push(`${feed.source}: HTTP ${res.status}`);
            throw new Error(`HTTP ${res.status}`);
          }
          return res.text();
        })
        .then((xml) => ({ feed, xml }))
        .catch((err) => {
          errors.push(`${feed.source}: ${err.message || 'fetch failed'}`);
          throw err;
        })
    );

    const results = await Promise.allSettled(fetchPromises);

    // Aggregate all items
    const allItems: NewsItem[] = [];
    let feedsOk = 0;

    for (const result of results) {
      if (result.status === 'fulfilled') {
        const { feed, xml } = result.value;
        const feedItems = extractItems(xml, feed.source);
        allItems.push(...feedItems);
        feedsOk++;
      }
    }

    // Filter to last N days and sort by date descending
    const filteredItems = allItems
      .filter((item) => isWithinLastDays(item.date, days))
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (isNaN(dateA) && isNaN(dateB)) return 0;
        if (isNaN(dateA)) return 1;
        if (isNaN(dateB)) return -1;
        return dateB - dateA;
      })
      .slice(0, 100);

    return NextResponse.json(
      {
        items: filteredItems,
        _debug: {
          feedsAttempted: RSS_FEEDS.length,
          feedsOk,
          totalItems: allItems.length,
          filteredItems: filteredItems.length,
          errors: errors.length > 0 ? errors : undefined,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching news feeds:', error);
    return NextResponse.json(
      {
        items: [],
        error: 'Failed to fetch news feeds',
        _debug: { errors },
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

// Handle CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
