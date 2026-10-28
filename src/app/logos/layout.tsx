import type { Metadata } from 'next';

// Internal logo-options page: keep it out of search results
export const metadata: Metadata = {
  title: 'Logo Options',
  robots: { index: false, follow: false },
};

export default function LogosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
