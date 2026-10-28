'use client';

import { useEffect, useState } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

interface NewsItem {
  title: string;
  link: string;
  source: string;
  date: string;
}

export default function NewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('/api/news?days=1095')
      .then(r => r.json())
      .then(data => {
        setItems(data.items || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sources = ['all', ...Array.from(new Set(items.map(item => item.source)))];
  const filteredItems = filter === 'all' ? items : items.filter(item => item.source === filter);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* News Page Content */}
      <div className="news-page">
        <div className="section-container">
          <div className="section-header">
            <h1 className="section-title">Industry News</h1>
            <p className="section-subtitle">Latest news from facilities management, real estate, ESG, and the UAE business landscape</p>
          </div>

          {/* Source Filter */}
          <div className="news-filters">
            {sources.map(source => (
              <button
                key={source}
                className={`news-filter-btn ${filter === source ? 'active' : ''}`}
                onClick={() => setFilter(source)}
              >
                {source === 'all' ? 'All Sources' : source}
              </button>
            ))}
          </div>

          {/* News Grid */}
          {loading ? (
            <div className="news-loading">Loading news stories...</div>
          ) : filteredItems.length === 0 ? (
            <div className="news-loading">No news stories found.</div>
          ) : (
            <div className="news-grid">
              {filteredItems.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="news-card">
                  <div className="news-card-source">{item.source}</div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <div className="news-card-date">{formatDate(item.date)}</div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
