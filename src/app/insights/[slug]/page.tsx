import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { SITE_NAME, SITE_URL, formatDate, pageMetadata } from '@/lib/site';
import ArticleBody from '@/components/ArticleBody';
import { articleImage, getPublishedArticle, getPublishedArticles } from '@/content/insights';

// Rebuild these pages daily so scheduled articles go live on their publish date
export const revalidate = 86400;

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) return {};

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${slug}`,
    type: 'article',
    publishedTime: article.date,
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);

  if (!article) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: articleImage(article, 1200),
    datePublished: article.date,
    mainEntityOfPage: `${SITE_URL}/insights/${slug}`,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteNav />

      {/* Main Content */}
      <main style={{ paddingTop: '70px' }}>
        {/* Back Link */}
        <div style={{ padding: '1rem 0', marginBottom: '1rem' }}>
          <div className="section-container" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
            <Link href="/insights" style={{ color: '#00b67a', textDecoration: 'none', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              &larr; Back to Insights
            </Link>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="insight-article-hero">
          <img
            src={articleImage(article, 1200)}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
        </div>

        {/* Article Content */}
        <article className="insight-article-body">
          <div className="section-container">
            <header style={{ marginBottom: '2rem' }}>
              <h1 className="section-title" style={{ marginBottom: '1rem' }}>{article.title}</h1>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span>{article.readingTime} min read</span>
              </div>
            </header>

            <div className="insight-article-content" style={{ lineHeight: '1.75', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <ArticleBody body={article.body} />
            </div>

            {/* Article Footer */}
            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  Share your thoughts or discuss this article with our team.
                </p>
                <Link href="/contact" className="btn-cta" style={{ textDecoration: 'none', display: 'inline-block', fontWeight: 500, width: 'fit-content' }}>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <section style={{ marginTop: '4rem', paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="section-container">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>More Insights</h2>
            <div className="insights-grid">
              {getPublishedArticles().filter((a) => a.slug !== slug).slice(0, 4).map((data) => (
                <Link
                  key={data.slug}
                  href={`/insights/${data.slug}`}
                  className="insight-card"
                  style={{ textDecoration: 'none' }}
                >
                  <h3 style={{ fontWeight: 'bold', color: '#001a4d', marginBottom: '0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {data.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1rem', margin: 0 }}>{formatDate(data.date)}</p>
                  <span style={{ fontSize: '0.875rem', color: '#00b67a', fontWeight: 500 }}>Read Article &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}