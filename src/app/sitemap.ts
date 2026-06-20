import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aston-fm.com';

  const services = [
    'esg-reporting',
    'fm-performance-dashboard',
    'project-management',
    'cost-reduction',
    'tender-bid-support',
    'energy-savings',
    'fm-outsourcing',
    'contract-mobilisation',
    'back-office-automation',
  ];

  const caseStudies = [
    'pharma-mobilisation',
    'bakery-energy-savings',
    'jafza-office-fitout',
    'mod-bid-support',
    'energy-dashboard',
    'abu-dhabi-energy-audit',
    'labour-management-review',
    'board-report-decks',
  ];

  const insights = [
    'esg-scope-guide',
    'ai-changing-fm',
    'fm-cost-quick-wins',
    'uae-fm-market-outlook',
    'contract-mobilisation-best-practices',
    'energy-management-gulf',
  ];

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...caseStudies.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...insights.map((slug) => ({
      url: `${baseUrl}/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
