import InsightsView from './InsightsView';
import { articleImage, getPublishedArticles } from '@/content/insights';

// Refresh daily so scheduled articles appear on their publish date
export const revalidate = 86400;

export default function InsightsPage() {
  const articles = getPublishedArticles().map((article) => ({
    slug: article.slug,
    title: article.title,
    date: article.date,
    category: article.category,
    imageUrl: articleImage(article, 400, 300),
  }));
  return <InsightsView articles={articles} />;
}
