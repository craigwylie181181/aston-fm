import { pageMetadata } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Contact Us',
  description: 'Talk to Aston FM about ESG reporting, FM performance dashboards, cost reduction, bid support or contract mobilisation. Based in Dubai, delivering across the UAE and internationally.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
