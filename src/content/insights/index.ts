import type { Article } from './types';
import esgScopeGuide from './esg-scope-guide';
import aiChangingFm from './ai-changing-fm';
import fmCostQuickWins from './fm-cost-quick-wins';
import uaeFmMarketOutlook from './uae-fm-market-outlook';
import contractMobilisationBestPractices from './contract-mobilisation-best-practices';
import energyManagementGulf from './energy-management-gulf';
import districtCoolingBills from './district-cooling-bills';
import summerCoolingResilience from './summer-cooling-resilience';
import sustainabilityDisclosureReadiness from './sustainability-disclosure-readiness';
import fmSpecificationsThatPriceWell from './fm-specifications-that-price-well';
import yearEndContractReview from './year-end-contract-review';
import aiHelpdeskTriage from './ai-helpdesk-triage';
import netZeroRoadmapExistingBuildings from './net-zero-roadmap-existing-buildings';

export type { Article } from './types';

// To add an article: create a file in this folder and add it to this list.
// Articles dated in the future are scheduled: they appear automatically on their date.
const ALL_ARTICLES: Article[] = [
  esgScopeGuide,
  aiChangingFm,
  fmCostQuickWins,
  uaeFmMarketOutlook,
  contractMobilisationBestPractices,
  energyManagementGulf,
  districtCoolingBills,
  summerCoolingResilience,
  sustainabilityDisclosureReadiness,
  fmSpecificationsThatPriceWell,
  yearEndContractReview,
  aiHelpdeskTriage,
  netZeroRoadmapExistingBuildings,
];

const today = () => new Date().toISOString().slice(0, 10);

/** Published articles, newest first */
export function getPublishedArticles(): Article[] {
  const now = today();
  return ALL_ARTICLES.filter(a => a.date <= now).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedArticle(slug: string): Article | undefined {
  return getPublishedArticles().find(a => a.slug === slug);
}

export function articleImage(article: Article, width: number, height?: number) {
  return `${article.image}?w=${width}${height ? `&h=${height}` : ''}&fit=crop&q=80`;
}
