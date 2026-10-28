import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Industry News',
  description: 'Curated facilities management, built environment and ESG news relevant to FM teams in the UAE and international markets.',
  path: '/news',
});

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
