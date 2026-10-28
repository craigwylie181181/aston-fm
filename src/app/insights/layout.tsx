import { pageMetadata } from '@/lib/site';

export const metadata = {
  ...pageMetadata({
    title: 'Insights & Industry News',
    description: 'Articles from Aston FM on ESG reporting, FM cost reduction, energy management and contract mobilisation, plus curated facilities management and sustainability news.',
    path: '/insights',
  }),
  // A layout title replaces the root template for everything below it, so restate it for the articles
  title: { absolute: 'Insights & Industry News | Aston FM', template: '%s | Aston FM' },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
