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

const RSS_FEEDS: FeedConfig[] = [
  { url: 'https://www.fm-world.co.uk/feed/', source: 'FM World' },
  { url: 'https://www.facilitiesnet.com/rss/fnallheadlines.xml', source: 'Facilities Net' },
  { url: 'https://gulfnews.com/rss/business', source: 'Gulf News' },
  { url: 'https://www.constructionweekonline.com/rss', source: 'Construction Week' },
  { url: 'https://www.arabianbusiness.com/rss', source: 'Arabian Business' },
];

function parseRSSDate(dateStr: string): Date {
  return new Date(dateStr);
}

function stripCDATA(text: string): string {
  return text
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
    .trim();
}

function extractRSSItems(xmlContent: string, source: string): NewsItem[] {
  const items: NewsItem[] = [];

  // Extract all <item> blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let itemMatch;

  while ((itemMatch = itemRegex.exec(xmlContent)) !== null) {
    const itemContent = itemMatch[1];

    // Extract title
    const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/.exec(itemContent);
    const title = titleMatch ? stripCDATA(titleMatch[1]) : '';

    // Extract link — handle both <link>url</link> and self-closing <link href="url"/>
    let link = '';
    const linkMatch = /<link[^>]*>([\s\S]*?)<\/link>/.exec(itemContent);
    if (linkMatch && linkMatch[1].trim()) {
      link = stripCDATA(linkMatch[1]);
    } else {
      const linkAttrMatch = /<link[^>]+href=["']([^"']+)["']/.exec(itemContent);
      if (linkAttrMatch) link = linkAttrMatch[1];
    }

    // Extract pubDate
    const pubDateMatch = /<pubDate[^>]*>([\s\S]*?)<\/pubDate>/.exec(itemContent);
    const pubDate = pubDateMatch ? stripCDATA(pubDateMatch[1]) : '';

    if (title && link) {
      items.push({
        title: decodeHTMLEntities(title),
        link,
        source,
        date: pubDate || new Date().toUTCString(),
      });
    }
  }

  return items;
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
    const itemDate = parseRSSDate(dateStr);
    if (isNaN(itemDate.getTime())) return true; // Include items with unparseable dates
    const now = new Date();
    const cutoffDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return itemDate >= cutoffDate;
  } catch {
    return true; // Include on error
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
        const feedItems = extractRSSItems(xml, feed.source);
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
