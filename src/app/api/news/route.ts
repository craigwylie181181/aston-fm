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
