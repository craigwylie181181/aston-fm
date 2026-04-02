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
  { url: 'https://www.arabianbusiness.com/rss', source: 'Arabian Business' },
  { url: 'https://gulfnews.com/rss/business', source: 'Gulf News' },
  { url: 'https://www.constructionweekonline.com/rss', source: 'Construction Week' },
];

function parseRSSDate(dateStr: string): Date {
  // Handles RFC 2822 format: "Thu, 02 Apr 2026 15:30:00 GMT"
  return new Date(dateStr);
}

function extractRSSItems(xmlContent: string, source: string): NewsItem[] {
  const items: NewsItem[] = [];

  // Extract all <item> blocks using regex
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let itemMatch;

  while ((itemMatch = itemRegex.exec(xmlContent)) !== null) {
    const itemContent = itemMatch[1];

    // Extract title
    const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/.exec(itemContent);
    const title = titleMatch ? titleMatch[1].replace(/<![CDATA[|]]>/g, '').trim() : '';

    // Extract link
    const linkMatch = /<link[^>]*>([\s\S]*?)<\/link>/.exec(itemContent);
    const link = linkMatch ? linkMatch[1].trim() : '';

    // Extract pubDate
    const pubDateMatch = /<pubDate[^>]*>([\s\S]*?)<\/pubDate>/.exec(itemContent);
    const pubDate = pubDateMatch ? pubDateMatch[1].trim() : '';

    if (title && link && pubDate) {
      items.push({
        title: decodeHTMLEntities(title),
        link,
        source,
        date: pubDate,
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
  };

  return text.replace(/&[a-zA-Z0-9]+;/g, (match) => entities[match] || match);
}

function isWithinLastDays(dateStr: string, days: number): boolean {
  try {
    const itemDate = parseRSSDate(dateStr);
    const now = new Date();
    const cutoffDate = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
    return itemDate >= cutoffDate;
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    // Fetch all feeds in parallel
    const fetchPromises = RSS_FEEDS.map((feed) =>
      fetch(feed.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; Aston FM News Aggregator)',
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.text();
        })
        .then((xml) => ({ feed, xml }))
    );

    const results = await Promise.allSettled(fetchPromises);

    // Aggregate all items
    const allItems: NewsItem[] = [];

    for (const result of results) {
      if (result.status === 'fulfilled') {
        const { feed, xml } = result.value;
        const feedItems = extractRSSItems(xml, feed.source);
        allItems.push(...feedItems);
      }
      // Silently skip failed feeds
    }

    // Filter to last 60 days and sort by date descending
    const filteredItems = allItems
      .filter((item) => isWithinLastDays(item.date, 60))
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // Descending order (newest first)
      })
      .slice(0, 30); // Limit to 30 items

    // Return response with CORS headers
    return NextResponse.json(
      { items: filteredItems },
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
