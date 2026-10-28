import { NextResponse } from 'next/server';

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
  // FM Industry (~40%)
  { url: 'https://www.facilitiesnet.com/rss/fnallheadlines.xml', source: 'FacilitiesNet' },
  { url: 'https://www.fm-world.co.uk/feed/', source: 'FM World' },
  { url: 'https://www.fmlink.com/feed/', source: 'FMLink' },
  { url: 'https://www.facilitatemagazine.com/feed/', source: 'Facilitate' },
  // Real Estate (~30%)
  { url: 'https://www.arabianbusiness.com/industries/real-estate/feed', source: 'Arabian Business RE' },
  { url: 'https://www.zawya.com/en/business/real-estate/rss', source: 'Zawya Real Estate' },
  { url: 'https://www.propertyfundsworld.com/rss', source: 'Property Funds World' },
  // ESG & Sustainability (~30%)
  { url: 'https://www.esgtoday.com/feed/', source: 'ESG Today' },
  { url: 'https://www.greenbiz.com/rss/all', source: 'GreenBiz' },
  { url: 'https://www.edie.net/rss/', source: 'edie' },
  { url: 'https://esgnews.com/feed/', source: 'ESG News' },
];

function stripCDATA(text: string): string {
  return text
    .replace(/<!\[CDATA\[/g, '')
    .replace(/\]\]>/g, '')
    .replace(/<[^>]*>/g, '')
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
    '&lsquo;': '\u2018',
    '&rsquo;': '\u2019',
    '&ldquo;': '\u201C',
    '&rdquo;': '\u201D',
    '&mdash;': '\u2014',
    '&ndash;': '\u2013',
    '&hellip;': '\u2026',
    '&nbsp;': ' ',
    '&pound;': '\u00A3',
    '&euro;': '\u20AC',
    '&copy;': '\u00A9',
    '&reg;': '\u00AE',
    '&trade;': '\u2122',
    '&bull;': '\u2022',
    '&deg;': '\u00B0',
    '&frac12;': '\u00BD',
    '&frac14;': '\u00BC',
    '&frac34;': '\u00BE',
    '&times;': '\u00D7',
    '&divide;': '\u00F7',
  };

  return text
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&[a-zA-Z]+;/g, (match) => entities[match] || match);
}

// Sources that are already FM-specific; everything else must mention the built environment or our region
const FM_SOURCES = new Set(['FacilitiesNet', 'FM World', 'FMLink', 'Facilitate']);

const RELEVANT = /\b(facilities|facility manag\w*|FM|building\w*|propert\w*|real estate|office\w*|workplace|landlord\w*|tenant\w*|occupier\w*|construction|retrofit\w*|HVAC|cooling|chiller\w*|district cooling|energy efficien\w*|smart build\w*|green build\w*|LEED|BREEAM|Estidama|data cent(re|er)s?|maintenance|indoor air|net[- ]zero build\w*|UAE|Dubai|Abu Dhabi|GCC|Gulf|Middle East|Saudi|Qatar|Oman|Bahrain|Kuwait|Masdar|Scope [123]|GHG Protocol|ISSB|CSRD|SECR|disclosure|sustainability reporting)\b/i;

// Event promos, competitions, job boards and product plugs that aren't news
const PROMOTIONAL = /^(NEXT WEEK|THIS WEEK|TOMORROW|TODAY|LAST CHANCE|ONE WEEK TO GO|TWO WEEKS TO GO|\w+ WEEKS TO GO)\b|webinar|win a free|VIP pass|take our .*survey|podcast|job board|jobs on|\bawards?\b|announces winners|sponsored|\bsale\b/i;

const STOPWORDS = new Set(['the', 'and', 'for', 'with', 'from', 'into', 'over', 'its', 'are', 'has', 'how', 'new', 'says', 'after', 'as', 'to', 'of', 'in', 'on', 'a', 'an', 'by', 'at']);

function keywords(title: string): Set<string> {
  return new Set(
    title
      .toLowerCase()
      .replace(/[‘’']s\b/g, '')
      .split(/[^a-z0-9.€$£]+/)
      .filter((w) => w.length > 2 && !STOPWORDS.has(w))
  );
}

// Two outlets often cover the same story with different headlines; treat high keyword overlap as a duplicate
function isDuplicate(a: Set<string>, b: Set<string>): boolean {
  let shared = 0;
  for (const w of a) if (b.has(w)) shared++;
  return shared >= 3 && shared / Math.min(a.size, b.size) >= 0.5;
}

function curate(items: NewsItem[]): NewsItem[] {
  const kept: { item: NewsItem; words: Set<string> }[] = [];
  for (const item of items) {
    if (PROMOTIONAL.test(item.title)) continue;
    if (!FM_SOURCES.has(item.source) && !RELEVANT.test(item.title)) continue;
    const words = keywords(item.title);
    if (kept.some((k) => isDuplicate(words, k.words))) continue;
    kept.push({ item, words });
  }
  return kept.map((k) => k.item);
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
    const limit = Math.min(parseInt(searchParams.get('limit') || '200', 10) || 200, 200);

    // Fetch all feeds in parallel with timeout
    const fetchPromises = RSS_FEEDS.map((feed) =>
      fetch(feed.url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/rss+xml, application/xml, text/xml, */*',
        },
        signal: AbortSignal.timeout(5000),
        // Cache each feed for an hour so visitors don't wait on 11 slow upstream requests
        next: { revalidate: 3600 },
      })
        .then((res) => {
          if (!res.ok) {
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
    const filteredItems = curate(allItems
      .filter((item) => isWithinLastDays(item.date, days))
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (isNaN(dateA) && isNaN(dateB)) return 0;
        if (isNaN(dateA)) return 1;
        if (isNaN(dateB)) return -1;
        return dateB - dateA;
      }))
      .slice(0, limit);

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
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
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
