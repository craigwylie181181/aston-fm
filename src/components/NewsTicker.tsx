'use client';

import { useEffect, useState } from 'react';

interface NewsItem {
  title: string;
  link: string;
  source: string;
  date: string;
}

export default function NewsTicker() {
  const [items, setItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('/api/news?days=14&limit=20')
      .then(r => r.json())
      .then(data => setItems(data.items || []))
      .catch((err) => console.error('News fetch failed:', err));
  }, []);

  if (!items.length) return null;

  return (
    <div className="news-ticker">
      <span className="news-ticker-label">Latest News</span>
      <div className="news-ticker-track">
        <div className="news-ticker-scroll">
          {items.concat(items).map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="news-ticker-item" aria-hidden={i >= items.length} tabIndex={i >= items.length ? -1 : undefined}>
              <span className="news-ticker-source">{item.source}</span>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
